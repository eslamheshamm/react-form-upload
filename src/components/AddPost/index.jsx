import React from "react";
import PollTabs from "../PollTabs/";
export const Post = () => {
	return (
		<div>
			<form>
				<PollTabs type="poll" pollType="image" label="Image Poll" />
			</form>
		</div>
	);
};
