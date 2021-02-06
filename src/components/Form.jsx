/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import Test from "./Test";
import ImgsUploader from "./ImgsUploader";
import AddInput from "./AddInput";
export const Form = () => {
	const { handleSubmit } = useForm({});
	const onSubmit = () => {
		console.log(`hi world i'm form`);
	};
	return (
		<section>
			<form
				onSubmit={handleSubmit((data) => console.log("data", data))}
				className="p-12"
			>
				<ImgsUploader />
				{/* <AddInput name={name} /> */}
				<div className="m-4 flex justify-end">
					<button
						type="submit"
						className="text-base px-4 py-2 bg-primary text-white rounded-md font-medium  focus:outline-none"
					>
						Submit
					</button>
				</div>{" "}
			</form>
			<Test />
		</section>
	);
};
