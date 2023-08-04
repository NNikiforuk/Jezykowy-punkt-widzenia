"use client";

import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import NavbarDropdown from "./NavbarDropdown";

const Navbar = () => {
	const [toggleBurger, setToggleBurger] = useState<boolean>(true);

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
					<NavbarDropdown
						toggleBurger={toggleBurger}
						setToggleBurger={setToggleBurger}
					/>
				)}
			</div>

			{/* Desktop navbar */}
			<div className="desktop">
				<NavbarDropdown
					toggleBurger={toggleBurger}
					setToggleBurger={setToggleBurger}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
