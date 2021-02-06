import React from "react";
import PropTypes from "prop-types";

export default function PollIcon(props) {
	const { width, height, color, className } = props;
	return (
		<svg
			className={`${width || "w-6"} ${height || "h-6"} ${className}`}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7 11H14V13H7V11ZM7 7H17.97V9H7V7ZM7 15H20V17H7V15ZM4 4H6V20H4V4Z"
				fill={color || `#5B6366`}
			/>
		</svg>
	);
}

PollIcon.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	className: PropTypes.string,
	color: PropTypes.string,
};
