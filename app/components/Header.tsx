import Link from 'next/link'
import React from 'react'

const HeaderNav = () => {
	return (
		<>
			<li><Link href="/users">Users</Link></li>
			<li>
				<Link href="/ui-components">UI Components</Link>
				<ul className="p-2">
					<li><Link href="/ui-components/buttons">Buttons</Link></li>
					<li><Link href="/ui-components/stuff">Stuff</Link></li>
				</ul>
			</li>
			<li><Link href="/form">Form</Link></li>
		</>
	)
}
const Header = () => {
	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
						<li><Link href="/users">Users</Link></li>
						<li>
							<Link href="/ui-components">UI Components</Link>
							<ul className="p-2">
								<li><Link href="/ui-components/buttons">Buttons</Link></li>
								<li><Link href="/ui-components/stuff">Stuff</Link></li>
							</ul>
						</li>
						<li><Link href="/form">Form</Link></li>
					</ul>
				</div>
				<Link href="/" className="btn btn-ghost text-xl">daisyUI</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li><Link href="/users">Users</Link></li>
					<li tabIndex={0}>
						<details>
							<summary>UI Components</summary>
							<ul className="p-2">
								<li><Link href="/ui-components/buttons">Buttons</Link></li>
								<li><Link href="/ui-components/stuff">Stuff</Link></li>
							</ul>
						</details>
					</li>
					<li><Link href="/form">Form</Link></li>
				</ul>
			</div>
			<div className="navbar-end">
				<div className="dropdown">
					<label tabIndex={0} className="btn m-1">
					Theme
					<svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
					</label>
					<ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
						<li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Light" value="light"/></li>
						<li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" value="dark"/></li>
						{/* <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Garden" value="garden"/></li>
						<li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Forest" value="forest"/></li> */}
						<li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Winter" value="winter"/></li>
						<li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dim" value="dim"/></li>
						{/* <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Nord" value="nord"/></li>
						<li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Night" value="night"/></li>
						<li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dracula" value="dracula"/></li> */}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Header