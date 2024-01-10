import "./globals.scss";
// import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Nav from "../components/navigation/Navigation";
import Head from "next/head";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });

// export const metadata: Metadata = {
// 	title: "Językowy punkt widzenia",
// 	description:
// 		"Z nami nauka języków jest przyjemna, a także przynosi rezultaty",
// };

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pl">
			<Head>
				<title>Językowy punkt widzenia</title>
				<meta
					name="description"
					content="Z nami nauka języków jest przyjemna, a także przynosi rezultaty"
				/>
			</Head>
			<body className={openSans.className}>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}
