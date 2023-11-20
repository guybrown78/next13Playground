import Image from 'next/image'
import Link from 'next/link'
import ProductCard from '@/app/components/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import juninho from '@/public/images/juninho.webp';

export default async function Home() {

	const session = await getServerSession(authOptions)
  return (
    <main className="container">
			<h1>Hello { session && <span>{session.user!.name}</span>}</h1>
			<Link href="/users">Users</Link>
			<ProductCard />
			<Image src={juninho} alt="The real Juninho" />

			<div className='relative block max-w-5xl h-96 overflow-hidden'>
				<Image 
					src="https://bit.ly/react-cover" 
					alt="The real Juninho" 
					fill
					className="object-cover"
					// width={800}
					// height={170}
					sizes="(max-width: 480px) 75vw, (max-width: 768px) 50vw, 33vw"
					quality="100"
					priority
				/>
			</div>
			
    </main>
  )
}
