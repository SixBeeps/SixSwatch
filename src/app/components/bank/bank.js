"use client"
import React from "react";
import { BankColor, BankAction } from "./bankItem";
import { Plus, Trash } from "iconoir-react";

export default function Bank(props) {
	return (
		<div className='bg-darkish w-fit mb-6'>
			<input className='text-lg bg-darkish text-white w-full' value={props.name} onChange={(e) => {props.onNameChange(e.target.value)}}/>
			<div className='flex flex-wrap'>
				{props.colors.map((color, index) => {
					return (
						<div
							key={index}
							onClick={(e) => {
							switch (props.tool) {
								case 'edit':
									props.onEdit(index, e.clientX, e.clientY)
									break;
								case 'pick':
									navigator.clipboard.writeText(color.hex)
									break;
								case 'delete':
									props.onDelete(index)
									break;
								default:
									break;
						}}}>
							<BankColor key={index} name={color.name} hex={color.hex} />
						</div>
					)
				})}
				<BankAction
					icon={props.tool === 'delete' ? Trash : Plus}
					onClick={props.tool === 'delete' ?
						() => { props.onDelete(-1) }
						: props.onAdd
					}
				/>
			</div>
		</div>
	)
}