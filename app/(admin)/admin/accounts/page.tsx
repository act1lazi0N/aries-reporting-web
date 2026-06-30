'use client'

import { PageHeader } from '@/components/layout/PageHeader'
import { Button } from '@/components/ui/button'
import { Table, TBody, TD, TH, THead, TR } from '@/components/ui/table'
import { minimalPageClass, minimalTableWrapperClass } from '@/lib/utils/status-style'

export default function AdminAccountsPage() {
  return (
    <main className={minimalPageClass}>
      <PageHeader title="Accounts" description="Review accounts and freeze or unfreeze when needed." />
      <div className={`mt-6 ${minimalTableWrapperClass}`}>
        <Table>
          <THead>
            <TR>
              <TH>Account</TH>
              <TH>Owner</TH>
              <TH>Balance</TH>
              <TH>Status</TH>
              <TH>Action</TH>
            </TR>
          </THead>
          <TBody>
            <TR>
              <TD colSpan={4} className="text-muted-foreground">
                Account rows will render here.
              </TD>
              <TD>
                <Button type="button" variant="outline" size="sm">
                  Freeze
                </Button>
              </TD>
            </TR>
          </TBody>
        </Table>
      </div>
    </main>
  )
}
