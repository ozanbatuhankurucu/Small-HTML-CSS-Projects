export interface StateValues {
  sutId: string
  applicationName: string
  rawDramLogsFile: File | null
}
export interface SummaryResult {
  error_code: string
  description: string
  result: string
  summary: string
}
export interface DcsDataResponse {
  device: string
  application_name: string
  summary_results: SummaryResult[]
  takeaway_title: string
  takeaway_text: string
}
