import { get, post } from '@/lib/api/client'
import type { AdminOverview, FailedTransactionReport, PageResponse, Transaction } from '@/lib/types'

export const adminApi = {
  getOverview: (from: string, to: string) =>
    get<AdminOverview>(`/api/reporting/v1/reports/admin/overview?from=${from}&to=${to}`),
  getTransactions: (page = 0) =>
    get<PageResponse<Transaction>>(`/api/transaction/v1/admin/transactions?page=${page}`),
  getFailedReport: (from: string, to: string, page = 0) =>
    get<PageResponse<FailedTransactionReport>>(
      `/api/reporting/v1/admin/failed-transactions?from=${from}&to=${to}&page=${page}`,
    ),
  triggerBackfill: (since: string) => post<number>(`/api/reporting/v1/admin/backfill?since=${since}`),
}
