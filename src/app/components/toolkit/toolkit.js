"use client"
import React, { useCallback } from "react";
import { EditPencil, ColorPicker, Trash } from "iconoir-react";

const defaultColor = "#ffffff"
const selectedColor = "#009966"

const tools = {
	edit: {
		icon: EditPencil,
		keybind: "q"
	},
	pick: {
		icon: ColorPicker,
		keybind: "w"
	},
	delete: {
		icon: Trash,
		keybind: "e"
	}
}

export default function Toolkit(props) {
	const onKeyDown = useCallback((e) => {
		console.log(e.key)
		if (e.target.tagName.toLowerCase() !== 'input') {
			e.preventDefault()
			Object.keys(tools).forEach((tool) => {
				if (tools[tool].keybind == e.key) {
					props.onSetTool(tool)
				}
			})
		}
	}, [props])

	React.useEffect(() => {
		document.addEventListener('keydown', onKeyDown)
		return () => {
			document.removeEventListener('keydown', onKeyDown)
		}
	}, [onKeyDown])

	return (
		<div className='fixed top-0 left-0 p-2 mt-16 bg-darkish z-10'>
			<div className='flex flex-row justify-between'>
				<div className='flex flex-row gap-4'>
					{
						Object.keys(tools).map((tool) => {
							return (
								<div key={tool} className='w-10 h-10 flex justify-center items-center cursor-pointer' onClick={() => {
									props.onSetTool(tool)
								}}>
									{React.createElement(tools[tool].icon, {
										width: 36,
										height: 36,
										color: props.tool == tool ? selectedColor : defaultColor
									})}
									<span className='text-sm'>{tools[tool].keybind}</span>
								</div>
							)
						})
					}
				</div>
			</div>
		</div>
	)
}