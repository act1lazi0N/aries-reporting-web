'use client'

import { useQuery } from '@tanstack/react-query'
import { reportApi } from '@/lib/api/reports'
import type { ReportJobStatus } from '@/lib/types'

function needsPoll(status?: ReportJobStatus) {
  return status === 'PENDING' || status === 'PROCESSING'
}

export function useExportJob(jobId?: string) {
  return useQuery({
    queryKey: ['export-job', jobId],
    queryFn: () => reportApi.getJobStatus(jobId ?? ''),
    enabled: Boolean(jobId),
    refetchInterval: (query) => (needsPoll(query.state.data?.status) ? 3000 : false),
  })
}
