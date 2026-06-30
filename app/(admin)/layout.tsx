import type { ReactNode } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Sidebar } from '@/components/layout/Sidebar'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <Sidebar variant="admin" />
        <div className="min-w-0 flex-1">
          <Navbar />
          {children}
        </div>
      </div>
    </div>
  )
}
