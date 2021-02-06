import axios from "axios";
import React, { useState } from "react";
import Slider from "./Slider";
const useCloudinaryUploader = (file) => {
	const [response, setResponse] = useState({});
	const [progress, setProgress] = useState(0);
	const [uploaded, setUploaded] = useState(false);

	React.useEffect(() => {
		const data = new FormData();
		data.append("file", file);
		data.append("upload_preset", "pickly");
		axios
			.post("https://api.cloudinary.com/v1_1/eslamhesham/image/upload", data, {
				onUploadProgress: (progressEvent) => {
					let percentCompleted = Math.round(
						(progressEvent.loaded * 100) / progressEvent.total
					);
					setProgress(percentCompleted);
				},
			})
			.then((res) => {
				const data = res.data;
				setResponse(data);
				setUploaded(true);
			})
			.catch(console.error);
	}, [file]);
	return { response, progress, uploaded };
};
// return data, progress, uploaded

export default function ImgUploader(props) {
	const { file } = props;

	// States
	const [fileUrl, setFileUrl] = React.useState("");
	// eslint-disable-next-line no-unused-vars
	const { response, progress, uploaded } = useCloudinaryUploader(file);

	React.useEffect(() => {
		const fileReader = new FileReader();
		fileReader.readAsDataURL(file);
		fileReader.addEventListener("load", function (e) {
			setFileUrl(e.target.result);
		});
	}, [file]);
	return (
		<>
			{uploaded ? <img src={fileUrl} alt="profile" /> : null}
			<Slider progress={progress} />
		</>
	);
}
