import "./globals.scss";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
// import Navigation from "../components/navigation/Navigation";
// import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

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
			<body className={inter.className}>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}
