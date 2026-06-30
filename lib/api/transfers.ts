import { get, post } from '@/lib/api/client'
import type { PageResponse, Transaction, TransferRequest } from '@/lib/types'

export const transferApi = {
  transfer: (data: TransferRequest) => post<Transaction>('/api/transaction/v1/transfers', data),
  getById: (id: string) => get<Transaction>(`/api/transaction/v1/transfers/${id}`),
  getByAccount: (accountId: string, page = 0) =>
    get<PageResponse<Transaction>>(`/api/transaction/v1/transfers/account/${accountId}?page=${page}`),
}
