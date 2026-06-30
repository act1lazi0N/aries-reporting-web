import { post } from '@/lib/api/client'
import type { AuthResponse, LoginRequest, RegisterRequest } from '@/lib/types'

export const authApi = {
  login: (data: LoginRequest) => post<AuthResponse>('/api/transaction/v1/auth/login', data),
  register: (data: RegisterRequest) => post<AuthResponse>('/api/transaction/v1/auth/register', data),
}
