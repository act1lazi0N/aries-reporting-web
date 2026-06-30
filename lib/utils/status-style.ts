import type { ReportJobStatus, TransactionStatus } from '@/lib/types'

export function transactionStatusClass(status: TransactionStatus | string) {
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

export function reportJobStatusClass(status: ReportJobStatus) {
  switch (status) {
    case 'FAILED':
    case 'EXPIRED':
      return 'bg-danger text-white'
    case 'PENDING':
    case 'PROCESSING':
      return 'bg-warning text-white'
    case 'READY':
      return 'bg-success text-white'
    default:
      return 'bg-muted text-muted-foreground'
  }
}

export const minimalCardClass = 'rounded-xl border border-border bg-card p-5'
export const minimalTableWrapperClass = 'overflow-hidden rounded-xl border border-border bg-card'
export const minimalPageClass = 'mx-auto max-w-7xl px-6 py-6'
