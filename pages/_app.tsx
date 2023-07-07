import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { TailwindIndicator } from '@/components/layout/Indicator'
import ThemeChanger from '@/components/layout/ThemeChager'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Component {...pageProps} />
        <TailwindIndicator/>
        <ThemeChanger/>
      </ThemeProvider>  
  </div>
  )
}
