import React from "react";
import { Plus } from "iconoir-react";

export default function NewBankButton(props) {
	const [hover, setHover] = React.useState(false)
	return (
		<div
			className='w-24 h-24 overflow-hidden flex justify-center items-center bg-dark'
			onMouseEnter={() => {setHover(true)}}
			onMouseLeave={() => {setHover(false)}}
			onClick={props.onClick}>
			<Plus width={75} height={75} color={hover ? 'white' : '#1c232e'}/>
		</div>
	)
}