import { PageHeader } from '@/components/layout/PageHeader'
import { minimalCardClass, minimalPageClass } from '@/lib/utils/status-style'

const overviewCards = [
  'Total transactions',
  'Total volume',
  'Failure rate',
  'Completed count',
]

export default function AdminOverviewPage() {
  return (
    <main className={minimalPageClass}>
      <PageHeader title="Admin overview" description="Platform reporting dashboard for the selected period." />
      <section className="mt-6 grid gap-4 md:grid-cols-4">
        {overviewCards.map((label) => (
          <div key={label} className={minimalCardClass}>
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="mt-2 text-2xl font-semibold tabular-nums text-foreground">Ready</p>
          </div>
        ))}
      </section>
      <div className={`mt-6 ${minimalCardClass}`}>
        <p className="text-sm text-muted-foreground">Daily volume and status breakdown charts will render here.</p>
      </div>
    </main>
  )
}
