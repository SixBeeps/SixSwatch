import React from 'react';

export default function Header() {
	return (
		<header className='flex justify-center align-center bg-darkish w-full h-16 mb-8'>
			<div className='text-lg tracking-widest h-full flex items-center'>
				six
				<span className='text-[red]'>s</span>
				<span className='text-[lime]'>w</span>
				<span className='text-[blue]'>a</span>
				<span className='text-[magenta]'>t</span>
				<span className='text-[yellow]'>c</span>
				<span className='text-[cyan]'>h</span>
			</div>
		</header>
	)
}