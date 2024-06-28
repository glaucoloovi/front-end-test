import { format } from 'date-fns'

export const formatDate = (timestamp: number) =>
  format(new Date(timestamp * 1000), 'dd/MM/yyyy')
