import React from "react";

export default function Popover(props) {
	const { top, left } = props;
	const width = props.width || 200;
	const boxTop = Math.min(top, window.innerHeight - width);
	const boxLeft = Math.min(left, window.innerWidth - width);

	React.useEffect(() => {
		const onClick = (e) => {
			if (e.target.closest(".popover") === null) {
				props.onClose();
			}
		};
		document.addEventListener("click", onClick);
		return () => {
			document.removeEventListener("click", onClick);
		};
	}, []);

	return (
		<>
			<div className="w-0 h-0 border border-solid z-2 shadow-xl" style={{
				position: 'fixed',
				top: `${top}px`,
				left: `${left - 20}px`,
				borderLeft: '20px solid transparent',
				borderRight: '20px solid transparent',
				borderBottom: '20px solid #1c232e',
				borderTop: '0px solid transparent'
			}}>&nbsp;</div>
			<div
				className="popover fixed bg-darkish overflow-auto p-3 border border-dark shadow z-1"
				style={{
					top: `${boxTop+20}px`,
					left: `${boxLeft-40}px`,
					width: `${width}px`,
				}}
			>
				{props.children}
			</div>
		</>
	);
}