import { get, post } from '@/lib/api/client'
import type {
  AccountStatement,
  ExportRequest,
  MonthlySummary,
  ReportJob,
  SpendingPattern,
} from '@/lib/types'

export const reportApi = {
  getStatement: (accountId: string, from: string, to: string, page = 0) =>
    get<AccountStatement>(
      `/api/reporting/v1/reports/statement?accountId=${accountId}&from=${from}&to=${to}&page=${page}`,
    ),
  getMonthlySummary: (accountId: string, year: number, month: number) =>
    get<MonthlySummary>(
      `/api/reporting/v1/reports/summary/monthly?accountId=${accountId}&year=${year}&month=${month}`,
    ),
  getSpendingPattern: (accountId: string, from: string, to: string) =>
    get<SpendingPattern>(
      `/api/reporting/v1/reports/spending-pattern?accountId=${accountId}&from=${from}&to=${to}`,
    ),
  requestExport: (data: ExportRequest) => post<ReportJob>('/api/reporting/v1/reports/export/request', data),
  getJobStatus: (jobId: string) => get<ReportJob>(`/api/reporting/v1/reports/export/${jobId}/status`),
  getDownloadUrl: (jobId: string) => `/api/reporting/v1/reports/export/${jobId}/download`,
}
