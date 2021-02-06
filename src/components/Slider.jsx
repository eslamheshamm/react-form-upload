import React from "react";

export default function Slider({ progress }) {
	let completeClass = progress < 100 ? "primary" : "success";
	return (
		<div
			className={`bg-${completeClass} h-1 rounded-full`}
			style={{ width: `${progress}%` }}
		></div>
	);
}
