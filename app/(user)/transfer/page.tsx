'use client'

import { useMemo } from 'react'
import { PageHeader } from '@/components/layout/PageHeader'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { minimalCardClass, minimalPageClass } from '@/lib/utils/status-style'

export default function TransferPage() {
  const idempotencyKey = useMemo(() => crypto.randomUUID(), [])

  return (
    <main className={minimalPageClass}>
      <PageHeader title="Transfer" description="Create a transfer with client-side idempotency." />
      <form className={`mt-6 grid gap-4 ${minimalCardClass}`}>
        <input type="hidden" name="idempotencyKey" value={idempotencyKey} />
        <div className="grid gap-2">
          <Label htmlFor="fromAccountId">From account</Label>
          <Input id="fromAccountId" name="fromAccountId" placeholder="Select account in full implementation" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="toAccountId">To account</Label>
          <Input id="toAccountId" name="toAccountId" placeholder="Recipient account number" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="amount">Amount</Label>
          <Input id="amount" name="amount" type="number" min={1000} placeholder="Minimum 1000" />
        </div>
        <Button type="button">Review transfer</Button>
      </form>
    </main>
  )
}
