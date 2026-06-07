import {
	Container,
	Title,
	TopBar,
	Filters,
	ProductCard,
	ProductsListGroup,
} from "@/components/shared/";

export default function Home() {
	return (
		<>
			<Container className="mt-10">
				<Title text="Все пиццы" size="lg" className="font-extrabold" />
			</Container>
			<TopBar />

			<Container className="pb-14 mt-10">
				<div className="flex gap-[80px]">
					<div className="w-[250px]">
						<Filters />
					</div>
					<div className="flex-1">
						<div className="flex flex-col gap-16">
							<ProductsListGroup
								title="Пиццы"
								items={[
									{
										id: 1,
										name: "Чизбургер пицца",
										imageUrl: "/pizzas/1.webp",
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 2,
										name: "Чизбургер пицца",
										imageUrl: "/pizzas/1.webp",
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 3,
										name: "Чизбургер пицца",
										imageUrl: "/pizzas/1.webp",
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 4,
										name: "Чизбургер пицца",
										imageUrl: "/pizzas/1.webp",
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 5,
										name: "Чизбургер пицца",
										imageUrl: "/pizzas/1.webp",
										price: 550,
										items: [{ price: 550 }],
									},
								]}
								categoryId={1}
							/>
							<ProductsListGroup
								title="Комбо"
								items={[
									{
										id: 1,
										name: "Чизбургер пицца",
										imageUrl: "/pizzas/1.webp",
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 2,
										name: "Чизбургер пицца",
										imageUrl: "/pizzas/1.webp",
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 3,
										name: "Чизбургер пицца",
										imageUrl: "/pizzas/1.webp",
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 4,
										name: "Чизбургер пицца",
										imageUrl: "/pizzas/1.webp",
										price: 550,
										items: [{ price: 550 }],
									},
									{
										id: 5,
										name: "Чизбургер пицца",
										imageUrl: "/pizzas/1.webp",
										price: 550,
										items: [{ price: 550 }],
									},
								]}
								categoryId={2}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
