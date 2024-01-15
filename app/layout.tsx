import "./globals.scss";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Nav from "../components/navigation/Navigation";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
	title: "Językowy punkt widzenia",
	description:
		"Językowy punkt widzenia to szkoła języków obcych online. Dowiedz się, jak osiągnąć biegłość w j. angielskim, niemieckim i holenderskim dzięki naszym specjalistycznym kursom i atrakcyjnej ofercie.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pl">
			<body className={openSans.className}>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}
