'use client'
import React from "react";

const isHexColorDark = (hexColor) => {
	const hex = hexColor.replace('#', '');
	const r = parseInt(hex.substr(0, 2), 16);
	const g = parseInt(hex.substr(2, 2), 16);
	const b = parseInt(hex.substr(4, 2), 16);
	const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
	return brightness < 50;
}

function BankItemBase(props) {
	return (
		<div className={'w-24 h-24 overflow-hidden ' + props.className} style={props.style}>
			{props.children}
		</div>
	)
}

export function BankColor(props) {
	return (
		<BankItemBase style={{
			backgroundColor: props.hex,
			color: isHexColorDark(props.hex) ? '#ffffff' : '#000000',
			display: 'flex',
			justifyContent: 'left',
			alignItems: 'end',
			whiteSpace: 'nowrap',
		}}>
			{
				<div className='text-xs opacity-60'>
					<p className='p-0 m-0 font-bold'>{props.name}</p>
					<p className='p-0 mt-[-6pt]'>{props.hex}</p>
				</div>
			}
		</BankItemBase>
	)
}

export function BankAction(props) {
	const [hover, setHover] = React.useState(false)
	return (
		<div
			onMouseEnter={() => {setHover(true)}}
			onMouseLeave={() => {setHover(false)}}
			onClick={props.onClick}
		>
			<BankItemBase className='bg-dark flex justify-center items-center'>
				{/* <Plus width={75} height={75} color={hover ? 'white' : '#1c232e'}/> */}
				{
					React.createElement(props.icon, {
						width: 75,
						height: 75,
						color: hover ? 'white' : '#1c232e'
					})
				}
			</BankItemBase>
		</div>
	)
}