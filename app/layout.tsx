import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import Header from './components/Header'
import { Suspense } from 'react'
import AuthProvider from './auth/Provider'

const inter = Inter({ 
	subsets: ['latin'],
	display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		
    <html lang="en" data-theme="dim" className={clsx(
			'h-full scroll-smooth bg-base-100 antialiased',
			inter.variable,
		)}>
      <body className="flex h-full flex-col">
				<AuthProvider>
					<Header />
					<main className='h-full p-5'>
						{/* <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}> */}
							{children}
						{/* </Suspense> */}
						
					</main>
				</AuthProvider>
			</body>
    </html>
		
  )
}
