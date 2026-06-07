"use client";

import { cn } from "@/lib/utils";
import { Title } from "./title";
import ProductCard from "./product-card";
import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { useCategoryStote } from "@/store/category";

interface Props {
	title: string;
	items: any[];
	className?: string;
	listClassName?: string;
	categoryId: number;
}

export const ProductsListGroup = ({
	title,
	items,
	className,
	listClassName,
	categoryId,
}: Props) => {
	const setActiveCategoryId = useCategoryStote((state) => state.setActiveId);
	const intersectionRef = useRef(null);
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.5,
	});

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId);
		}
	}, [categoryId, intersection, title]);

	return (
		<div className={className} id={title} ref={intersectionRef}>
			<Title text={title} size="lg" className="font-extrabold mb-5" />
			<div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
				{items.map((product, i) => {
					return (
						<ProductCard
							key={product.id}
							id={product.id}
							name={product.name}
							price={product.items[0].price}
							imageUrl={product.imageUrl}
						/>
					);
				})}
			</div>
		</div>
	);
};
