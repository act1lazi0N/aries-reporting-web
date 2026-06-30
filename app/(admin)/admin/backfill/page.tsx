'use client'

import { PageHeader } from '@/components/layout/PageHeader'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { minimalCardClass, minimalPageClass } from '@/lib/utils/status-style'

export default function BackfillPage() {
  return (
    <main className={minimalPageClass}>
      <PageHeader title="Backfill" description="Trigger reporting backfill from a selected date." />
      <form className={`mt-6 max-w-xl space-y-4 ${minimalCardClass}`}>
        <div className="grid gap-2">
          <Label htmlFor="since">Since</Label>
          <Input id="since" type="date" />
        </div>
        <Button type="button">Trigger backfill</Button>
      </form>
    </main>
  )
}
