import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { TailwindIndicator } from '@/components/layout/Indicator'
import ThemeChanger from '@/components/layout/ThemeChager'
import {store} from "@/store/store"
import  {Provider} from "react-redux"
import { QueryClientProvider,QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { GOOGLE_ID_KEY } from '@/utils/tempKeys'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { useSockets } from '@/sockets/useSockets'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const socket = useSockets()
  const queryClient = new QueryClient()
  return (
    <div className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Provider store={store}>
          <GoogleOAuthProvider clientId={GOOGLE_ID_KEY}> 
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
                <TailwindIndicator/>
            </QueryClientProvider>
          </GoogleOAuthProvider>
        </Provider>
        <ThemeChanger/>
      </ThemeProvider> 

  </div>
  )
}
