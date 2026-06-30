export type Role = 'USER' | 'AUDITOR' | 'ADMIN'

export interface User {
  id: string
  fullName: string
  email: string
  role: Role
  isActive: boolean
  createdAt: string
}

export interface AuthResponse {
  accessToken: string
  tokenType: 'Bearer'
  expiresIn: number
  user: User
}

export interface RegisterRequest {
  fullName: string
  email: string
  password: string
}

export interface LoginRequest {
  email: string
  password: string
}

export type AccountType = 'PERSONAL' | 'BUSINESS'
export type AccountStatus = 'ACTIVE' | 'FROZEN' | 'CLOSED'

export interface Account {
  id: string
  userId: string
  accountNumber: string
  accountType: AccountType
  balance: number
  currency: string
  status: AccountStatus
  createdAt: string
}

export interface CreateAccountRequest {
  accountType: AccountType
  currency: string
  description?: string
}

export type TransactionStatus = 'PENDING' | 'COMPLETED' | 'FAILED' | 'REVERSED'

export interface Transaction {
  id: string
  fromAccountId: string
  toAccountId: string
  amount: number
  currency: string
  status: TransactionStatus
  idempotencyKey: string
  description?: string
  failureReason?: string
  createdAt: string
  completedAt?: string
}

export interface TransferRequest {
  fromAccountId: string
  toAccountId: string
  amount: number
  idempotencyKey: string
  currency?: string
  description?: string
}

export interface StatementLine {
  id: string
  originalTxId: string
  fromAccountNumber: string
  toAccountNumber: string
  fromOwnerName: string
  toOwnerName: string
  amount: number
  currency: string
  status: string
  description?: string
  createdAt: string
}

export interface AccountStatement {
  accountId: string
  periodFrom: string
  periodTo: string
  totalDebit: number
  totalCredit: number
  netFlow: number
  txCount: number
  transactions: PageResponse<StatementLine>
}

export interface MonthlySummary {
  accountId: string
  year: number
  month: number
  totalDebit: number
  totalCredit: number
  txCount: number
  openingBalance: number
  closingBalance: number
  isFromSnapshot: boolean
}

export interface HourlySlot {
  hour: number
  txCount: number
  volume: number
}

export interface SpendingPattern {
  accountId: string
  periodFrom: string
  periodTo: string
  hourlySpending: HourlySlot[]
  peakHour: number
}

export type ReportJobStatus = 'PENDING' | 'PROCESSING' | 'READY' | 'FAILED' | 'EXPIRED'
export type ReportFormat = 'PDF' | 'EXCEL'
export type ReportJobType =
  | 'ACCOUNT_STATEMENT'
  | 'TRANSACTION_SUMMARY'
  | 'SPENDING_PATTERN'
  | 'ADMIN_OVERVIEW'

export interface ReportJob {
  id: string
  jobType: ReportJobType
  status: ReportJobStatus
  format: ReportFormat
  downloadUrl?: string
  errorMessage?: string
  expiresAt?: string
  createdAt: string
  completedAt?: string
}

export interface ExportRequest {
  accountId: string
  jobType: ReportJobType
  format: ReportFormat
  from: string
  to: string
}

export interface DailyVolume {
  day: string
  txCount: number
  volume: number
}

export interface AdminOverview {
  periodFrom: string
  periodTo: string
  totalTransactions: number
  totalVolume: number
  completedCount: number
  failedCount: number
  pendingCount: number
  failureRate: number
  dailyVolumes: DailyVolume[]
}

export interface FailedTransactionReport {
  transactionId: string
  fromAccountId: string
  toAccountId: string
  amount: number
  currency: string
  failureReason?: string
  failedAt: string
}

export interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
  timestamp: string
}

export interface PageResponse<T> {
  content: T[]
  totalElements: number
  totalPages: number
  size: number
  number: number
}
