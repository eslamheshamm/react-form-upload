import React from "react";
import Dropzone from "react-dropzone";
import { Controller } from "react-hook-form";
const Icon = (
	<svg
		className="w-4 h-4 text-accent mr-1          "
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M3.16683 3.33333H11.8335V8H13.1668V3.33333C13.1668 2.598 12.5688 2 11.8335 2H3.16683C2.4315 2 1.8335 2.598 1.8335 3.33333V11.3333C1.8335 12.0687 2.4315 12.6667 3.16683 12.6667H8.50016V11.3333H3.16683V3.33333Z"
			fill="currentColor"
		/>
		<path
			d="M5.8335 7.33333L3.8335 10H11.1668L8.50016 6L6.50016 8.66667L5.8335 7.33333Z"
			fill="currentColor"
		/>
		<path
			d="M13.1668 9.33333H11.8335V11.3333H9.8335V12.6667H11.8335V14.6667H13.1668V12.6667H15.1668V11.3333H13.1668V9.33333Z"
			fill="currentColor"
		/>
	</svg>
);

export const FileInput = ({ control, name }) => {
	return (
		<Controller
			control={control}
			name={name}
			defaultValue={[]}
			render={({ onChange, onBlur, value }) => (
				<>
					<Dropzone onDrop={onChange}>
						{({ getRootProps, getInputProps }) => (
							<label
								htmlFor="files"
								className="relative cursor-pointer  focus-within:outline-none w-4/12"
								{...getRootProps()}
							>
								<input
									name={name}
									{...getInputProps()}
									onBlur={onBlur}
									accept="image/*"
									className="sr-only hidden"
								/>
								<div className="mt-2 flex justify-center py-5 border-2 bg-grey-shd7 border-accent border-dashed rounded-md">
									<div className="flex items-center">
										{Icon}
										<span className="text-accent text-sm font-medium">
											Upload one or multiple images
										</span>
									</div>
								</div>
							</label>
						)}
					</Dropzone>
					<ul>
						{value.map((f, index) => (
							<li key={index}>
								<p>{f.name}</p>
								<span>{f.size}</span>
							</li>
						))}
					</ul>
				</>
			)}
		/>
	);
};

// export const ImageContainer = ({ src }) => {
// 	return (
// 		<div>
// 			<div className="relative">
// 				<img
// 					src={src}
// 					alt="Image"
// 					className="rounded-t-lg object-cover w-full h-full"
// 				/>
// 			</div>
// 		</div>
// 	);
// };
