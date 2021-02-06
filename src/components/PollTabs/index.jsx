import React from "react";
import PollTab from "./PollTab";

const PollTabs = () => {
	return (
		<div className="inline-block">
			<form className="flex flex-row">
				<PollTab type={"img"} text={"Img Poll"} />
				<PollTab type={"file"} text={"File Poll"} />
				<PollTab type={"poll"} text={"A Poll Poll"} />
			</form>
		</div>
	);
};

export default PollTabs;
