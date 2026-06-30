'use client'

import { PageHeader } from '@/components/layout/PageHeader'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { minimalCardClass, minimalPageClass, minimalTableWrapperClass } from '@/lib/utils/status-style'

export default function StatementPage() {
  return (
    <main className={minimalPageClass}>
      <PageHeader title="Statement" description="Filter account statement by month range." />
      <section className={`mt-6 grid gap-4 md:grid-cols-3 ${minimalCardClass}`}>
        <div className="grid gap-2">
          <Label htmlFor="accountId">Account</Label>
          <Input id="accountId" placeholder="Account selector" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="from">From</Label>
          <Input id="from" type="month" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="to">To</Label>
          <Input id="to" type="month" />
        </div>
        <Button type="button">Apply filter</Button>
      </section>
      <div className={`mt-6 ${minimalTableWrapperClass}`}>
        <p className="p-5 text-sm text-muted-foreground">Statement table will render here with TanStack Query.</p>
      </div>
    </main>
  )
}
