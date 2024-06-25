import { Header } from '@/components/Header'
import { ThemeProvider } from '@/contexts/ThemeContext'
import StyledComponentsRegistry from '@/lib/registry'
import { GlobalStyle } from '@/styles/global'
import { Montserrat } from 'next/font/google'

type RootLayoutProps = {
  children: React.ReactNode
}

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className={montserrat.className}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
