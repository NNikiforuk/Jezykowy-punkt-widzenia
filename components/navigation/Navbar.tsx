"use client";

import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaAngleRight, FaAngleDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import PrimaryDropdown from "./PrimaryDropdown";

const Navbar = () => {
	const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

	const toggleMobileNav = () => {
		setShowMobileNav((prev) => !prev);
	};

	return (
		<header>
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

			{/* Mobile */}
			<div className="mobile">
				<nav>
					<button className="nav-btn" onClick={toggleMobileNav}>
						<FaBars />
					</button>
				</nav>
				<div className={`mobileNavDropdown ${showMobileNav ? "active" : ""}`}>
					<PrimaryDropdown
						onSelect={() => {
							setShowMobileNav(false);
						}}
					/>
					<button className="nav-btn nav-close-btn" onClick={toggleMobileNav}>
						<FaTimes className="icon" />
					</button>
				</div>
			</div>

			{/* Desktop */}
			<div className="desktop">
				<nav>
					<PrimaryDropdown onSelect={function (): void {}} />
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
