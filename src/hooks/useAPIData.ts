'use client'

import { getAPIData } from '@/services/api/resources'
import useSWR from 'swr'

export function useAPIData() {
  const { data, isLoading, error } = useSWR('/', () => getAPIData())

  return {
    data,
    isLoading,
    error,
  }
}
