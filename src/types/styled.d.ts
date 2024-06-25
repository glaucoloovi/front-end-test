import { theme } from '@/styles/theme'
import 'styled-components'

export type CustomTheme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
