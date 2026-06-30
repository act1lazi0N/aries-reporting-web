'use client'

import { PageHeader } from '@/components/layout/PageHeader'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { minimalCardClass, minimalPageClass } from '@/lib/utils/status-style'

export default function SpendingPage() {
  return (
    <main className={minimalPageClass}>
      <PageHeader title="Spending" description="Hourly spending pattern and peak activity." />
      <section className={`mt-6 grid gap-4 md:grid-cols-3 ${minimalCardClass}`}>
        <div className="grid gap-2">
          <Label htmlFor="accountId">Account</Label>
          <Input id="accountId" placeholder="Account selector" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="from">From</Label>
          <Input id="from" type="datetime-local" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="to">To</Label>
          <Input id="to" type="datetime-local" />
        </div>
      </section>
      <div className={`mt-6 ${minimalCardClass}`}>
        <p className="text-sm text-muted-foreground">Recharts hourly spending chart will render here.</p>
      </div>
    </main>
  )
}
