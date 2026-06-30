import NextAuth, { type NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'
import type { ApiResponse, AuthResponse, Role } from '@/lib/types'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

async function loginWithBackend(credentials: z.infer<typeof loginSchema>): Promise<AuthResponse | null> {
  const baseUrl = process.env.TRANSACTION_API_URL ?? 'http://localhost:8080'
  const response = await fetch(`${baseUrl}/api/v1/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })

  if (!response.ok) {
    return null
  }

  const payload = (await response.json()) as ApiResponse<AuthResponse>
  return payload.data
}

export const authConfig = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const parsed = loginSchema.safeParse(credentials)

        if (!parsed.success) {
          return null
        }

        const authResponse = await loginWithBackend(parsed.data)

        if (!authResponse) {
          return null
        }

        return {
          id: authResponse.user.id,
          name: authResponse.user.fullName,
          email: authResponse.user.email,
          role: authResponse.user.role,
          accessToken: authResponse.accessToken,
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.accessToken = user.accessToken
      }

      return token
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub ?? ''
        session.user.role = (token.role as Role | undefined) ?? 'USER'
      }

      session.accessToken = typeof token.accessToken === 'string' ? token.accessToken : ''
      return session
    },
  },
  pages: {
    signIn: '/login',
  },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)
