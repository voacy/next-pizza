"use client";

import React, { ChangeEvent, use, useState } from "react";
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";
import { Input } from "../ui";

type Item = FilterCheckboxProps;

interface Props {
	title: string;
	items: Item[];
	limit: number;
	searchInputPlaceholder?: string;
	defaultItems: Item[];
	onChange?: (values: string[]) => void;
	defaultValue?: string[];
	className?: string;
}

export const CheckboxFilterGroup = ({
	title,
	items,
	defaultItems,
	limit = 5,
	searchInputPlaceholder = "Поиск...",
	className,
	onChange,
	defaultValue,
}: Props) => {
	const [showAll, setShowAll] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};
	const list = showAll
		? items.filter((item) =>
				item.text.toLowerCase().includes(searchValue.toLowerCase()),
			)
		: defaultItems.slice(0, limit);

	return (
		<div className={className}>
			<p className="font-bold mb-3">{title}</p>

			{showAll && (
				<div className="mb-5">
					<Input
						placeholder={searchInputPlaceholder}
						className="bg-gray-50 border-none"
						onChange={(e) => onChangeSearchInput(e)}
					/>
				</div>
			)}

			<div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
				{list.map((item, index) => {
					return (
						<FilterCheckbox
							key={index}
							text={item.text}
							value={item.value}
							endAdornment={item.endAdornment}
							checked={false}
							onCheckedChange={() => console.log("hi")}
						/>
					);
				})}
			</div>

			{items.length > limit && (
				<div
					className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}
				>
					<button
						onClick={() => setShowAll(!showAll)}
						className="text-primary mt-3"
					>
						{showAll ? "Скрыть" : "+ Показать все"}
					</button>
				</div>
			)}
		</div>
	);
};
