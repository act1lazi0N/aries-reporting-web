'use client'

import { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const loginSchema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(1, 'Password is required'),
})

export function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    const parsed = loginSchema.safeParse({ email, password })

    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? 'Invalid login form')
      return
    }

    setSubmitting(true)
    const result = await signIn('credentials', {
      ...parsed.data,
      redirect: false,
    })
    setSubmitting(false)

    if (result?.error) {
      setError('Email or password is incorrect')
      return
    }

    router.replace('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm rounded-xl border border-border bg-card p-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Aries Web</h1>
        <p className="mt-1 text-sm text-muted-foreground">Sign in to continue</p>
      </div>

      <div className="mt-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        {error ? <p className="text-sm text-danger">{error}</p> : null}

        <Button type="submit" className="w-full" disabled={submitting}>
          {submitting ? 'Signing in...' : 'Sign in'}
        </Button>
      </div>
    </form>
  )
}
