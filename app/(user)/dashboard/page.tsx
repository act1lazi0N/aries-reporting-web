import { PageHeader } from '@/components/layout/PageHeader'
import { minimalCardClass, minimalPageClass } from '@/lib/utils/status-style'

const dashboardCards = [
  { label: 'Accounts', value: 'Ready for API' },
  { label: 'Monthly summary', value: 'Snapshot aware' },
  { label: 'Recent transfers', value: '5 latest' },
]

export default function DashboardPage() {
  return (
    <main className={minimalPageClass}>
      <PageHeader title="Dashboard" description="Overview of accounts, recent transfers, and monthly activity." />
      <section className="mt-6 grid gap-4 md:grid-cols-3">
        {dashboardCards.map((card) => (
          <div key={card.label} className={minimalCardClass}>
            <p className="text-sm text-muted-foreground">{card.label}</p>
            <p className="mt-2 text-2xl font-semibold tabular-nums text-foreground">{card.value}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
