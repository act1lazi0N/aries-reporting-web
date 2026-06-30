import { type NextRequest } from 'next/server'
import { proxyToBackend, type ProxyRouteContext } from '@/lib/api/proxy'

const TRANSACTION_API_URL = process.env.TRANSACTION_API_URL ?? 'http://localhost:8080'

function handler(request: NextRequest, context: ProxyRouteContext): Promise<Response> {
  return proxyToBackend(request, context, TRANSACTION_API_URL)
}

export {
  handler as DELETE,
  handler as GET,
  handler as PATCH,
  handler as POST,
  handler as PUT,
}
