import React from 'react'

const ButtonsPage = () => {
	return (
		<>
				<div className="m-5 p-5 flex items-center justify-center space-x-5">
					<button className="btn">Button</button>
					<button className="btn btn-neutral">Neutral</button>
					<button className="btn btn-primary">Primary</button>
					<button className="btn btn-secondary">Secondary</button>
					<button className="btn btn-accent">Accent</button>
					<button className="btn btn-ghost">Ghost</button>
					<button className="btn btn-link">Link</button>
				</div>

				<div className="m-5 p-5 flex items-center justify-center space-x-5">
					<button className="btn btn-info">Info</button>
					<button className="btn btn-success">Success</button>
					<button className="btn btn-warning">Warning</button>
					<button className="btn btn-error">Error</button>
				</div>

				<div className="m-5 p-5 flex items-center justify-center space-x-5">
					<button className="btn btn-outline">Default</button>
					<button className="btn btn-outline btn-primary">Primary</button>
					<button className="btn btn-outline btn-secondary">Secondary</button>
					<button className="btn btn-outline btn-accent">Accent</button>
				</div>

				<div className="m-5 p-5 flex items-center justify-center space-x-5">
					<button className="btn btn-primary btn-active">A Primary</button>
					<button className="btn btn-secondary btn-active">A Secondary</button>
					<button className="btn btn-accent btn-active">A Accent</button>
					<button className="btn btn-info btn-active">A Info</button>
					<button className="btn btn-success btn-active">A Success</button>
					<button className="btn btn-warning btn-active">A Warning</button>
					<button className="btn btn-error btn-active">A Error</button>
				</div>

				<div className="m-5 p-5 flex items-center justify-center space-x-5">
					<button className="btn btn-outline btn-info">Info</button>
					<button className="btn btn-outline btn-success">Success</button>
					<button className="btn btn-outline btn-warning">Warning</button>
					<button className="btn btn-outline btn-error">Error</button>
				</div>

				<div className="m-5 p-5 flex items-center justify-center space-x-5">
					<button className="btn btn-lg">Large</button>
					<button className="btn">Normal</button>
					<button className="btn btn-sm">Small</button>
					<button className="btn btn-xs">Tiny</button>
				</div>

				<div className="m-5 p-5 flex items-center justify-center space-x-5">
					<button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button>
				</div>
		
				<div className="m-5 p-5 flex items-center justify-center space-x-5">
					<button className="btn btn-wide">Wide</button>
				</div>

				{/* <div className="m-5 p-5 flex items-center justify-center space-x-5 bg-gradient-to-r from-red-300 to-indigo-300 rounded-xl"> */}
				<div className="m-5 p-5 flex items-center justify-center space-x-5 bg-primary rounded-xl">
					<button className="btn glass">Glass button</button>
					<button className="btn btn-primary glass">Glass primary button</button>
				</div>

				<div className="m-5 p-5 flex items-center justify-center space-x-5">
					<a role="button" className="btn">Link</a>
					<button type="submit" className="btn">Button</button>
					<input type="button" value="Input" className="btn" />
					<input type="submit" value="Submit" className="btn" />
					<input type="radio" aria-label="Radio" className="btn" />
					<input type="checkbox" aria-label="Checkbox" className="btn" />
					<input type="reset" value="Reset" className="btn" />
				</div>

				<div className="m-5 p-5 flex items-center justify-center space-x-5">
					<button className="btn" disabled>Disabled using attribute</button>
					<button className="btn btn-disabled" tabIndex={-1} role="button" aria-disabled="true">Disabled using class name</button>
				</div>

				<div className="m-5 p-5 flex items-center justify-center space-x-5">
					<button className="btn btn-square">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
					</button>
					<button className="btn btn-square btn-outline">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
					</button>
				</div>	

				<div className="m-5 p-5 flex items-center justify-center space-x-5">
					<button className="btn btn-circle">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
					</button>
					<button className="btn btn-circle btn-outline">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
					</button>
				</div>

				<div className="m-5 p-5 flex items-center justify-center space-x-5">
					<button className="btn">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
						Button
					</button>
				</div>

				<div className="m-5 p-5 flex items-center justify-center space-x-5">
					<button className="btn">
						Button
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
					</button>
				</div>

				<div className="m-5 p-5 flex items-center justify-center space-x-5">
					<button className="btn btn-block">block</button>
				</div>

				<div className="m-5 p-5 flex items-center justify-center space-x-5">
					<button className="btn">
						<span className="loading loading-spinner"></span>
						loading
					</button>
				</div>
		</>
	)
}

export default ButtonsPage