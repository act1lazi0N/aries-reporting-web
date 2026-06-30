'use client'

import { useSession } from 'next-auth/react'

export function useAuth() {
  const session = useSession()

  return {
    ...session,
    user: session.data?.user,
    token: session.data?.accessToken,
  }
}
