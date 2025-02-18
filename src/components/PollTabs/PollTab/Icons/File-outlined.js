import React from "react";
import PropTypes from "prop-types";

export default function FileIcon(props) {
	const { width, height, color, className } = props;
	return (
		<svg
			className={`${width || "w-6"} ${height || "h-6"} ${className}`}
			viewBox="0 0 24 24"
			fill={color || `#5B6366`}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M19.903 8.586C19.854 8.48 19.793 8.379 19.707 8.293L13.707 2.293C13.621 2.207 13.52 2.146 13.414 2.097C13.384 2.083 13.352 2.075 13.32 2.064C13.236 2.036 13.15 2.018 13.061 2.013C13.04 2.011 13.021 2 13 2H6C4.897 2 4 2.897 4 4V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V9C20 8.979 19.989 8.96 19.987 8.938C19.982 8.849 19.965 8.763 19.936 8.679C19.926 8.647 19.917 8.616 19.903 8.586ZM16.586 8H14V5.414L16.586 8ZM6 20V4H12V9C12 9.553 12.447 10 13 10H18L18.002 20H6Z"
				fill="#5B6366"
			/>
			<path
				d="M8 12H16V14H8V12ZM8 16H16V18H8V16ZM8 8H10V10H8V8Z"
				fill="#5B6366"
			/>
		</svg>
	);
}
FileIcon.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	className: PropTypes.string,
	color: PropTypes.string,
};
