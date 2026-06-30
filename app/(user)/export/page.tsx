'use client'

import { PageHeader } from '@/components/layout/PageHeader'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { minimalCardClass, minimalPageClass } from '@/lib/utils/status-style'

export default function ExportPage() {
  return (
    <main className={minimalPageClass}>
      <PageHeader title="Export" description="Request async PDF or Excel reports and poll job status." />
      <form className={`mt-6 grid gap-4 md:grid-cols-2 ${minimalCardClass}`}>
        <div className="grid gap-2">
          <Label htmlFor="accountId">Account</Label>
          <Input id="accountId" placeholder="Account selector" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="format">Format</Label>
          <Select id="format" defaultValue="PDF">
            <option value="PDF">PDF</option>
            <option value="EXCEL">Excel</option>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="from">From</Label>
          <Input id="from" type="month" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="to">To</Label>
          <Input id="to" type="month" />
        </div>
        <Button type="button">Request export</Button>
      </form>
    </main>
  )
}
