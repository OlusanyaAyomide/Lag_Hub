import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { TailwindIndicator } from '@/components/layout/Indicator'
import ThemeChanger from '@/components/layout/ThemeChager'
import {store} from "@/store/store"
import  {Provider} from "react-redux"
import { QueryClientProvider, QueryClient} from '@tanstack/react-query'
import { GOOGLE_ID_KEY } from '@/utils/tempKeys'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Toaster } from "@/components/ui/toaster"
import SocketBody from '@/components/utils/SocketBody'
import CustomToast from '@/components/utils/CustomToast'
import Head from 'next/head'



export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <div >
       <Head>
          <title>goConnect</title>
          <meta
          name="description"
         content="social media application where valuble connections are made"
        />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Provider store={store}>
          <GoogleOAuthProvider clientId={GOOGLE_ID_KEY}> 
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
                <Toaster/>
                <SocketBody/>
                {/* <TailwindIndicator/> */}
                <CustomToast/>
            </QueryClientProvider>
          </GoogleOAuthProvider>
        </Provider>
        {/* <ThemeChanger/> */}
      </ThemeProvider> 

  </div>
  )
}
