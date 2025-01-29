'use client'
import React from "react";
import Cookies from "js-cookie";
import Popover from "../popover/popover";
import Bank from './bank'
import NewBankButton from './newBankButton'
import Toolkit from "../toolkit/toolkit";
import { ChromePicker } from "react-color";
import { v4 } from 'uuid'
import { randomColor } from '../../util/random'

export default function BankList(props) {
	const [tool, setTool] = React.useState('edit')
	const [colorBanks, setColorBanks] = React.useState(props.initColorBank)
	const [currentEdit, setCurrentEdit] = React.useState(null)
	const [popoverLocation, setPopoverLocation] = React.useState({
		x: 0,
		y: 0
	})

	const updateColorBanks = (colorBanks) => {
		if (colorBanks == null) {
			Cookies.remove('colorBanks');
			updateColorBanks(props.initColorBank);
		} else {
			Cookies.set('colorBanks', JSON.stringify(colorBanks));
			setColorBanks({...colorBanks}); // Force re-render by using new object reference
		}
	}

	return (
		<>
			<Toolkit tool={tool} onSetTool={setTool} />
			<div className='w-full p-6 mt-6'>
				{colorBanks && Object.keys(colorBanks).map((bankId) => {
					return (
						<Bank key={bankId}
							name={colorBanks[bankId].name}
							colors={colorBanks[bankId].colors}
							tool={tool}
							onAdd={() => {
								updateColorBanks({
									...colorBanks,
									[bankId]: {
										...colorBanks[bankId],
										colors: [
											...colorBanks[bankId].colors,
											randomColor()
										]
									}
								})
							}}
							onEdit={(colorIndex, x, y) => {
								setCurrentEdit({
									bankId: bankId,
									colorIndex: colorIndex
								})
								setPopoverLocation({
									x: x,
									y: y
								})
							}}
							onDelete={(colorIndex) => {
								if (colorIndex == -1) {
									delete colorBanks[bankId];
									updateColorBanks(colorBanks);
									return;
								}

								updateColorBanks({
									...colorBanks,
									[bankId]: {
										...colorBanks[bankId],
										colors: colorBanks[bankId].colors.filter((color, index) => index != colorIndex)
									}
								})
							}}
							onNameChange={(newName) => {
								updateColorBanks({
									...colorBanks,
									[bankId]: {
										...colorBanks[bankId],
										name: newName
									}
								})
							}} />
					)
				})}
				<NewBankButton onClick={() => {
					const newBankId = v4()
					updateColorBanks({
						...colorBanks,
						[newBankId]: {
							name: 'New Color Bank',
							colors: [
								randomColor(),
							]
						}
					})
				}} />
			</div>
			{currentEdit && (
				<Popover
					top={popoverLocation.y}
					left={popoverLocation.x}
					width={250}
					onClose={() => {setCurrentEdit(null)}}>
					<div className='flex flex-col gap-2'>
						<input className='text-sm mx-6 bg-darkish text-white w-auto' value={colorBanks[currentEdit.bankId].colors[currentEdit.colorIndex].name} onChange={(e) => {
							updateColorBanks({
								...colorBanks,
								[currentEdit.bankId]: {
									...colorBanks[currentEdit.bankId],
									colors: colorBanks[currentEdit.bankId].colors.map((color, index) => {
										if (index == currentEdit.colorIndex) {
											return {
												...color,
												name: e.target.value
											}
										} else {
											return color
										}
									})
								}
							})
						}}/>
						<ChromePicker
							styles={{
								default: {
									picker: {
										backgroundColor: 'transparent',
										boxShadow: 'none'
									}
								}
							}}
							color={colorBanks[currentEdit.bankId].colors[currentEdit.colorIndex]}
							onChangeComplete={newColor => {
								updateColorBanks({
									...colorBanks,
									[currentEdit.bankId]: {
										...colorBanks[currentEdit.bankId],
										colors: colorBanks[currentEdit.bankId].colors.map((color, index) => {
											if (index == currentEdit.colorIndex) {
												return {
													...color,
													hex: newColor.hex
												}
											} else {
												return color
											}
										})
									}
								})
							}}></ChromePicker>
					</div>
				</Popover>
			)}
		</>
	)
}