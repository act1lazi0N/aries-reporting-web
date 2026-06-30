'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ArrowLeftRight,
  BarChart3,
  FileDown,
  FileText,
  LayoutDashboard,
  Landmark,
  ListChecks,
  RefreshCw,
  ShieldAlert,
  WalletCards,
} from 'lucide-react'
import { cn } from '@/lib/utils/cn'

type NavItem = {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const userItems: NavItem[] = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/accounts', label: 'Accounts', icon: WalletCards },
  { href: '/transfer', label: 'Transfer', icon: ArrowLeftRight },
  { href: '/statement', label: 'Statement', icon: FileText },
  { href: '/spending', label: 'Spending', icon: BarChart3 },
  { href: '/export', label: 'Export', icon: FileDown },
]

const adminItems: NavItem[] = [
  { href: '/admin/overview', label: 'Overview', icon: LayoutDashboard },
  { href: '/admin/transactions', label: 'Transactions', icon: ListChecks },
  { href: '/admin/accounts', label: 'Accounts', icon: Landmark },
  { href: '/admin/failed-transactions', label: 'Failed Report', icon: ShieldAlert },
  { href: '/admin/backfill', label: 'Backfill', icon: RefreshCw },
]

export function Sidebar({ variant }: { variant: 'user' | 'admin' }) {
  const pathname = usePathname()
  const items = variant === 'admin' ? adminItems : userItems

  return (
    <aside className="hidden min-h-screen w-64 border-r border-border bg-card px-4 py-5 lg:block">
      <Link href={variant === 'admin' ? '/admin/overview' : '/dashboard'} className="flex items-center gap-2 px-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Landmark className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Aries Web</p>
          <p className="text-xs text-muted-foreground">{variant === 'admin' ? 'Admin' : 'Banking'}</p>
        </div>
      </Link>

      <nav className="mt-8 space-y-1">
        {items.map((item) => {
          const Icon = item.icon
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`)

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary-dark',
                active && 'bg-primary-soft text-primary-dark',
              )}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {item.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
