import React from "react";
import cn from "classnames";

export const Choices = ({
	choice,
	className,
	placeholder = "Enter Text",
	ref,
	defaultValue,
	...props
}) => {
	return (
		<div className="w-full">
			<div className="flex items-center">
				<div className="w-full">
					<div className="relative focus:outline-none w-full">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<span className=" bg-grey-shd7 rounded-md max-w-full  ">
								<span className="text-sm text-grey font-normal leading-5 uppercase px-2 py-1">
									{choice}
								</span>
							</span>
						</div>
						<input
							type="text"
							className={cn(
								"text-dark-grey  placeholder-grey-shd1 focus:ring-1 focus:ring-dark-grey focus:text-dark focus:outline-none block py-3 px-12 border border-grey-shd5 hover:border-grey-shd2 w-full",
								className
							)}
							ref={ref}
							placeholder={placeholder}
							autoComplete="off"
							defaultValue={defaultValue}
							{...props}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
