import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/shared/index";

export const metadata: Metadata = {
	title: "Next Pizza | Главная",
};

const nunito = Nunito({
	subsets: ["cyrillic"],
	variable: "--font-nunito",
	weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={cn("font-sans")}>
			<body className={nunito.className}>
				<main className="min-h-screen">
					<Header />
					{children}
				</main>
			</body>
		</html>
	);
}
