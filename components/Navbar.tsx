"use client";

import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Navbar_links from "./Navbar_links";

const Navbar = () => {
	const [toggleBurger, setToggleBurger] = useState<boolean>(false);

	return (
		<nav className="navbar">
			<Link href="/">
				<Image
					src="/assets/images/logo.png"
					alt="logo"
					width={50}
					height={50}
					className="object-contain logo"
					priority={false}
				/>
			</Link>

			{/* Mobile navbar */}
			<div className="mobile">
				<MenuIcon
					className="menu-icon"
					onClick={() => setToggleBurger((prev) => !prev)}
				/>
				{toggleBurger && (
					<Navbar_links
						toggleBurger={toggleBurger}
						setToggleBurger={setToggleBurger}
					/>
				)}
			</div>

			{/* Desktop navbar */}
			<div className="desktop">
				<Navbar_links
					toggleBurger={toggleBurger}
					setToggleBurger={setToggleBurger}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
