import type { TransactionStatus } from '@/lib/types'

export function transactionStatusClass(status: TransactionStatus) {
  switch (status) {
    case 'FAILED':
      return 'bg-danger text-white'
    case 'PENDING':
      return 'bg-warning text-white'
    case 'COMPLETED':
      return 'bg-success text-white'
    case 'REVERSED':
      return 'bg-primary-soft text-primary-dark'
    default:
      return 'bg-muted text-muted-foreground'
  }
}

export const minimalCardClass = 'rounded-xl border border-border bg-card p-5'
export const minimalTableWrapperClass = 'overflow-hidden rounded-xl border border-border bg-card'
export const minimalPageClass = 'mx-auto max-w-7xl px-6 py-6'
