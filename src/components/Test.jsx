import React, { useState } from "react";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { AddOption } from "./AddOption";

export default function Test() {
	const [formData, setFormData] = useState();
	const { register, control, handleSubmit } = useForm();
	const { fields, append, remove } = useFieldArray({
		control,
		name: "options",
	});

	const TextValue = ({ control }) => {
		const value = useWatch({
			control,
			name: `options`,
			defaultValue: {},
		});
		console.log(value);
		return null;
	};
	const onSubmitHandler = (data) => {
		console.log("data", data);
		console.log(data.options);
		setFormData(data.options);
	};
	//  Alphabet letters
	const letters = (() => {
		const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
		return caps;
	})();
	return (
		<form onSubmit={handleSubmit(onSubmitHandler)} className="p-12">
			<div>
				<label
					htmlFor="first-name"
					className="mb-3 ml-1 font-light text-dark-grey text-xs"
				>
					First Name
				</label>
				<div className="relative rounded-md border border-grey-shd5 hover:border-grey-shd2 focus:outline-none  focus:ring-2 focus:ring-primary ">
					<input
						id="first-name"
						type="text"
						name="FirstName"
						ref={register({ required: true, maxLength: 12, minLength: 3 })}
						className="text-dark-grey placeholder-grey-shd1 focus:ring-1 focus:ring-dark-grey focus:text-dark focus:outline-none block w-full py-3 px-4 sm:text-sm rounded-md"
						placeholder="Enter Text"
						autoComplete="off"
					/>
					<div className="absolute inset-y-0 right-4 flex items-center">
						<svg
							className="w-4 h-auto hidden"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7.99967 1.33337C4.32367 1.33337 1.33301 4.32404 1.33301 8.00004C1.33301 11.676 4.32367 14.6667 7.99967 14.6667C11.6757 14.6667 14.6663 11.676 14.6663 8.00004C14.6663 4.32404 11.6757 1.33337 7.99967 1.33337ZM10.8043 9.86204L9.86168 10.8047L7.99967 8.94271L6.13767 10.8047L5.19501 9.86204L7.05701 8.00004L5.19501 6.13804L6.13767 5.19537L7.99967 7.05737L9.86168 5.19537L10.8043 6.13804L8.94234 8.00004L10.8043 9.86204Z"
								fill="#8D9A9E"
							/>
						</svg>
					</div>
				</div>
			</div>

			{fields.map(({ id, number }, index) => {
				// loop through letters
				const letter = letters[index];
				return (
					<div key={id}>
						<div className="flex">
							<div className="w-full my-2">
								<div className="flex items-center">
									<div className="w-full">
										<div className="relative focus:outline-none w-full">
											<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
												<span className=" bg-grey-shd7 rounded-md max-w-full  ">
													<span className="text-sm text-grey font-normal leading-5 uppercase px-2 py-1">
														{letter}
													</span>
												</span>
											</div>
											<input
												ref={register()}
												name={`options[${index}].number`}
												defaultValue={number}
												className="text-dark-grey rounded-md placeholder-grey-shd1 focus:ring-1 focus:ring-dark-grey focus:text-dark focus:outline-none block py-3 px-12 border border-grey-shd5 hover:border-grey-shd2 w-full"
												placeholder={"Enter Text"}
												autoComplete="off"
											/>

											{/* input is here */}
										</div>
									</div>
								</div>
							</div>

							{fields.length > 2 ? (
								<button
									type="button"
									onClick={() => remove(index)}
									className="focus:outline-none flex-none w-4"
								>
									<div className="p-4 inline-block">{RamoveIcon}</div>
								</button>
							) : null}
						</div>
					</div>
				);
			})}
			<AddOption onClick={() => append({})} />
			<TextValue control={control} />
			<div className="m-4 flex justify-end">
				<button
					type="submit"
					className="text-base px-4 py-2 bg-primary text-white rounded-md font-medium  focus:outline-none"
				>
					Submit
				</button>
			</div>
			{formData && (
				<div>
					<h2 className="text-xl text-warning font-medium">Favorites</h2>
					{formData.map(({ number }, index) => {
						return (
							<div key={index}>
								<p className="py-1 font-medium text-md">{number}</p>
							</div>
						);
					})}
				</div>
			)}
		</form>
	);
}

const RamoveIcon = (
	<svg
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M4.66675 7.3335H11.3334V8.66683H4.66675V7.3335Z" fill="#FE544A" />
		<path
			d="M7.99992 1.3335C4.32392 1.3335 1.33325 4.32416 1.33325 8.00016C1.33325 11.6762 4.32392 14.6668 7.99992 14.6668C11.6759 14.6668 14.6666 11.6762 14.6666 8.00016C14.6666 4.32416 11.6759 1.3335 7.99992 1.3335ZM7.99992 13.3335C5.05925 13.3335 2.66659 10.9408 2.66659 8.00016C2.66659 5.0595 5.05925 2.66683 7.99992 2.66683C10.9406 2.66683 13.3333 5.0595 13.3333 8.00016C13.3333 10.9408 10.9406 13.3335 7.99992 13.3335Z"
			fill="#FE544A"
		/>
	</svg>
);
