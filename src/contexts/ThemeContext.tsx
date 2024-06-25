'use client'

import { theme } from '@/styles/theme'
import { ThemeProvider as Theme } from 'styled-components'

type ThemeProviderProps = {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <Theme theme={theme}>{children}</Theme>
}
