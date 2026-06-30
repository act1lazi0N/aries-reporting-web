'use client'

import { useQuery } from '@tanstack/react-query'
import { reportApi } from '@/lib/api/reports'

export function useStatement(accountId: string, from: string, to: string, page: number) {
  return useQuery({
    queryKey: ['statement', accountId, from, to, page],
    queryFn: () => reportApi.getStatement(accountId, from, to, page),
    enabled: Boolean(accountId && from && to),
  })
}
