import { PageHeader } from '@/components/layout/PageHeader'
import { minimalCardClass, minimalPageClass } from '@/lib/utils/status-style'

export default async function AccountDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <main className={minimalPageClass}>
      <PageHeader title="Account detail" description={`Account ${id}`} />
      <div className={`mt-6 ${minimalCardClass}`}>
        <p className="text-sm text-muted-foreground">SSR account detail will render here.</p>
      </div>
    </main>
  )
}
