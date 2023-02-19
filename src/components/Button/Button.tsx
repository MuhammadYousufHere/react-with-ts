import React from 'react';

interface Props {
	title?: string;
	width?: string;
	color?: string;
	children?: React.ReactNode;
	height?: string;
	radius?: string;
	type?: string;
	onClick?: () => void;
}

const Button: React.FC<Props> = ({
	title,
	color,
	height,
	width,
	radius,
	onClick,
	children,
	type = 'primary',
}): React.ReactElement => {
	return (
		<button
			className={`btn-${type}`}
			onClick={onClick}
			style={{ color, height, width, borderRadius: radius }}>
			{title}
			{children}
		</button>
	);
};

export default Button;
