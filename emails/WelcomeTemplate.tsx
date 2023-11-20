import React, { CSSProperties } from 'react'
import { Html, Body, Container, Text, Tailwind,  Link, Preview} from '@react-email/components'

const WelcomeTemplate = ({ name }: { name: string }) => {
	return (
		<Html>
			<Preview>Welcome aboard!</Preview>
			<Tailwind>
				<Body className="bg-slate-50">
					<Container>
						<Text className='font-bold text-3xl text-slate-400'>Hello { name }</Text>
						<Link href="www.digitalopolis.co.uk">www.digitalopolis.co.uk</Link>
					</Container>
				</Body>
			</Tailwind>
			
		</Html>
	)
}

const body: CSSProperties = {
	background: '#fff',
}
const text: CSSProperties = {
	color: '#494949',
	fontSize: '25px'
}
export default WelcomeTemplate