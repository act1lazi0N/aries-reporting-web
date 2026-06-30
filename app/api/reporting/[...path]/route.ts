import { type NextRequest } from 'next/server'
import { proxyToBackend, type ProxyRouteContext } from '@/lib/api/proxy'

const REPORTING_API_URL = process.env.REPORTING_API_URL ?? 'http://localhost:8081'

function handler(request: NextRequest, context: ProxyRouteContext): Promise<Response> {
  return proxyToBackend(request, context, REPORTING_API_URL)
}

export {
  handler as DELETE,
  handler as GET,
  handler as PATCH,
  handler as POST,
  handler as PUT,
}
