import React from "react";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { Choices } from "./ChoiceInput";
import { AddOption } from "./AddOption";

export default function AddInput() {
	const { register, control } = useForm();
	const { fields, append, remove } = useFieldArray({
		control,
		name: "options",
	});

	const FormText = ({ control }) => {
		const value = useWatch({
			control,
			name: `options`,
			defaultValue: {},
		});
		console.log("hiwatcher2");
		console.log(value);
		return null;
	};

	//  Alphabet letters
	const letters = (() => {
		const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
		return caps;
	})();
	return (
		<div>
			{/* loop to make new option */}
			{fields.map(({ id, number }, index) => {
				// loop through letters
				const letter = letters[index];
				return (
					<div key={id} className="my-4">
						<div className="flex flex-row w-full">
							<Choices
								ref={register()}
								name={`options[${index}].number`}
								choice={letter}
								className="rounded-md  flex-grow"
								defaultValue={number}
							/>

							{/* rammove button */}
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
			<FormText control={control} />
		</div>
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
