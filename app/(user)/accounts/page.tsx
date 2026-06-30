import { PageHeader } from '@/components/layout/PageHeader'
import { minimalCardClass, minimalPageClass } from '@/lib/utils/status-style'

export default function AccountsPage() {
  return (
    <main className={minimalPageClass}>
      <PageHeader title="Accounts" description="Your personal and business accounts." />
      <div className={`mt-6 ${minimalCardClass}`}>
        <p className="text-sm text-muted-foreground">SSR account list will render here.</p>
      </div>
    </main>
  )
}
