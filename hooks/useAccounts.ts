'use client'

import { useQuery } from '@tanstack/react-query'
import { accountApi } from '@/lib/api/accounts'

export function useAccounts() {
  return useQuery({
    queryKey: ['accounts', 'me'],
    queryFn: accountApi.getMyAccounts,
    staleTime: 60_000,
  })
}
