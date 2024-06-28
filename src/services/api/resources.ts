import type { APIData } from '@/types/api-data'

class CustomError extends Error {
  info: unknown
  status: number | undefined
}

export async function getAPIData(): Promise<APIData> {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL)

  if (!response.ok) {
    const error = new CustomError('Um erro ocorreu ao buscar os dados da API.')
    error.info = await response.json()
    error.status = response.status
    throw error
  }

  return response.json()
}
