'use client'

import { PageHeader } from '@/components/layout/PageHeader'
import { Button } from '@/components/ui/button'
import { Select } from '@/components/ui/select'
import { Table, TBody, TD, TH, THead, TR } from '@/components/ui/table'
import { minimalCardClass, minimalPageClass, minimalTableWrapperClass } from '@/lib/utils/status-style'

export default function AdminTransactionsPage() {
  return (
    <main className={minimalPageClass}>
      <PageHeader title="Transactions" description="Review all platform transactions." />
      <section className={`mt-6 flex flex-col gap-3 sm:flex-row ${minimalCardClass}`}>
        <Select aria-label="Status filter" defaultValue="">
          <option value="">All statuses</option>
          <option value="COMPLETED">Completed</option>
          <option value="PENDING">Pending</option>
          <option value="FAILED">Failed</option>
          <option value="REVERSED">Reversed</option>
        </Select>
        <Button type="button">Apply filter</Button>
      </section>
      <div className={`mt-6 ${minimalTableWrapperClass}`}>
        <Table>
          <THead>
            <TR>
              <TH>ID</TH>
              <TH>From</TH>
              <TH>To</TH>
              <TH>Amount</TH>
              <TH>Status</TH>
            </TR>
          </THead>
          <TBody>
            <TR>
              <TD colSpan={5} className="text-muted-foreground">
                Transaction rows will render here with TanStack Query.
              </TD>
            </TR>
          </TBody>
        </Table>
      </div>
    </main>
  )
}
