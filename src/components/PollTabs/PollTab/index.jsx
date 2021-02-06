import React from "react";
import "./index.css";
import ImageIcon from "./Icons/Image-outlined";
import FileIcon from "./Icons/File-outlined";
import PollIcon from "./Icons/Poll-outlined";

//Adjusted poll tab to take args of icon and text, click on radio works only when clicking the radio button itself not the whole tab.
const PollTab = ({ type, text }) => {
	let source;
	if (!text) text = "Default Poll";
	// eslint-disable-next-line no-unused-expressions
	type === "img"
		? (source = <ImageIcon />)
		: type === "poll"
		? (source = <PollIcon />)
		: type === "file"
		? (source = <FileIcon />)
		: "";
	return (
		<button
			className="group text-sm relative flex items-center justify-around px-7 py-1.5 h-8 border border-grey border-opacity-0 bg-grey-bg  hover:bg-white hover:border-opacity-100  rounded-full focus:outline-none transition duration-500 ease-in-out"
			style={{ paddingRight: "12px", marginRight: "18px" }}
		>
			<label
				className="cursor-pointer relative flex items-center justify-items-center content-center"
				htmlFor="poll-option"
			>
				<input
					type="radio"
					name="poll-option"
					className="bg-primary opacity-0"
					style={{ zIndex: 3 }}
				/>
				<span className="checkmark h-4 w-4 rounded-full border border-primary  bg-gray text-transparent absolute left-0 top-1 mr-2 hover:bg-grey-shd4 transition duration-500 ease-in-out"></span>
				<span className="ml-2 scale-50">{source}</span>
				<span className="ml-2 text-sm font-medium">{text}</span>
			</label>
		</button>
	);
};

export default PollTab;
