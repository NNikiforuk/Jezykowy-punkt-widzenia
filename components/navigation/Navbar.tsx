"use client";

import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaAngleRight, FaAngleDown } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Navbar_links from "./Navbar_links";

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
			<>
				<nav>
					<button className="nav-btn" onClick={toggleMobileNav}>
						<FaBars />
					</button>
				</nav>
				<div className={`mobileNavDropdown ${showMobileNav ? "active" : ""}`}>
					<Link href="/oferta" onClick={toggleMobileNav}>
						Oferta
					</Link>
					<Link href="/cennik" onClick={toggleMobileNav}>
						Cennik
					</Link>
					<Link href="/tlumaczenia" onClick={toggleMobileNav}>
						Tłumaczenia
					</Link>
					<Link href="/lektorzy" onClick={toggleMobileNav}>
						Lektorzy
					</Link>
					<Link href="/artykuly" onClick={toggleMobileNav}>
						Artykuły
					</Link>
					<Link href="/opinie" onClick={toggleMobileNav}>
						Opinie
					</Link>
					<Link href="/kontakt" onClick={toggleMobileNav}>
						Kontakt
					</Link>
					<Link href="/sklep" onClick={toggleMobileNav}>
						Sklep
					</Link>
					<button className="nav-btn nav-close-btn" onClick={toggleMobileNav}>
						<FaTimes />
					</button>
				</div>
			</>
		</header>
	);
};

export default Navbar;
