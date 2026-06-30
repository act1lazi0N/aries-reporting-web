import { get, patch, post } from '@/lib/api/client'
import type { Account, CreateAccountRequest } from '@/lib/types'

export const accountApi = {
  getMyAccounts: () => get<Account[]>('/api/transaction/v1/accounts/me'),
  getById: (id: string) => get<Account>(`/api/transaction/v1/accounts/${id}`),
  create: (data: CreateAccountRequest) => post<Account>('/api/transaction/v1/accounts', data),
  freeze: (id: string) => patch<Account>(`/api/transaction/v1/accounts/${id}/freeze`),
  unfreeze: (id: string) => patch<Account>(`/api/transaction/v1/accounts/${id}/unfreeze`),
}
