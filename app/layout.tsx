import "./globals.scss";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Nav from "../components/navigation/Navigation";

const openSans = Open_Sans({ subsets: ["latin"], weight: "400"});

export const metadata: Metadata = {
	title: "Językowy punkt widzenia",
	description:
		"Z nami nauka języków jest przyjemna, a także przynosi rezultaty",
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
