'use client'

import { signOut, useSession } from 'next-auth/react'
import { LogOut, UserCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const { data: session } = useSession()

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/95 px-6 py-3">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-foreground">{session?.user?.name ?? 'Aries user'}</p>
          <p className="text-xs text-muted-foreground">{session?.user?.email ?? 'Secure dashboard'}</p>
        </div>
        <div className="flex items-center gap-2">
          <UserCircle className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
          <Button type="button" variant="outline" size="sm" onClick={() => signOut({ callbackUrl: '/login' })}>
            <LogOut className="h-4 w-4" aria-hidden="true" />
            Sign out
          </Button>
        </div>
      </div>
    </header>
  )
}
