import { type NextRequest } from 'next/server'
import { auth } from '@/lib/auth'

type RouteParams = {
  path?: string[]
}

export type ProxyRouteContext = {
  params: Promise<RouteParams>
}

const HOP_BY_HOP_HEADERS = new Set([
  'connection',
  'content-encoding',
  'content-length',
  'host',
  'keep-alive',
  'transfer-encoding',
  'upgrade',
])

export async function proxyToBackend(
  request: NextRequest,
  context: ProxyRouteContext,
  baseUrl: string,
): Promise<Response> {
  const { path = [] } = await context.params
  const upstreamUrl = new URL(`/api/${path.join('/')}`, baseUrl)
  upstreamUrl.search = request.nextUrl.search

  const session = await auth()
  const headers = new Headers(request.headers)

  for (const header of HOP_BY_HOP_HEADERS) {
    headers.delete(header)
  }

  if (session?.accessToken) {
    headers.set('Authorization', `Bearer ${session.accessToken}`)
  }

  const body = request.method === 'GET' || request.method === 'HEAD' ? undefined : await request.text()
  const response = await fetch(upstreamUrl, {
    method: request.method,
    headers,
    body,
    cache: 'no-store',
  })

  const responseHeaders = new Headers(response.headers)

  for (const header of HOP_BY_HOP_HEADERS) {
    responseHeaders.delete(header)
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: responseHeaders,
  })
}
