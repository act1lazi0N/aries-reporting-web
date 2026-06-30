'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Table, TBody, TD, TH, THead, TR } from '@/components/ui/table'
import { PageHeader } from '@/components/layout/PageHeader'
import {
  minimalCardClass,
  minimalPageClass,
  minimalTableWrapperClass,
  transactionStatusClass,
} from '@/lib/utils/status-style'

const summaryCards = [
  { label: 'Total failed', value: '0' },
  { label: 'Failed volume', value: '0 VND' },
  { label: 'Top failure reason', value: 'No data' },
]

export default function FailedTransactionsPage() {
  return (
    <main className={minimalPageClass}>
      <PageHeader
        title="Failed Transaction Report"
        description="Theo doi giao dich loi trong khoang thoi gian da chon."
      />

      <section className={`mt-6 grid gap-4 md:grid-cols-[1fr_1fr_auto] ${minimalCardClass}`}>
        <div className="grid gap-2">
          <Label htmlFor="from">From</Label>
          <Input id="from" type="date" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="to">To</Label>
          <Input id="to" type="date" />
        </div>
        <div className="flex items-end">
          <Button type="button">Apply filter</Button>
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        {summaryCards.map((card, index) => (
          <div
            key={card.label}
            className={index === 0 ? `${minimalCardClass} border-primary-border bg-primary-soft` : minimalCardClass}
          >
            <p className="text-sm text-muted-foreground">{card.label}</p>
            <p className="mt-2 text-2xl font-semibold tabular-nums text-foreground">{card.value}</p>
          </div>
        ))}
      </section>

      <div className={`mt-6 ${minimalTableWrapperClass}`}>
        <Table>
          <THead>
            <TR>
              <TH>Transaction</TH>
              <TH>From</TH>
              <TH>To</TH>
              <TH>Amount</TH>
              <TH>Status</TH>
              <TH>Failure reason</TH>
            </TR>
          </THead>
          <TBody>
            <TR>
              <TD className="font-medium">-</TD>
              <TD>-</TD>
              <TD>-</TD>
              <TD>-</TD>
              <TD>
                <Badge className={transactionStatusClass('FAILED')}>FAILED</Badge>
              </TD>
              <TD className="text-muted-foreground">No failed transactions loaded yet.</TD>
            </TR>
          </TBody>
        </Table>
      </div>
    </main>
  )
}
