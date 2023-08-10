"use client";

import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaAngleRight, FaAngleDown } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Navbar_links from "./Navbar_links";

const Navbar = () => {
	const mobileMediaQuery = "(max-width: 1020px)";
	const navPrimaryRef = useRef();

	const [isMobile, setIsMobile] = useState(
		window.matchMedia(mobileMediaQuery).matches
	);

	const showNavMobileSecondaryDropdown = () => {
		navPrimaryRef.current.classList.toggle("toggle_primaryDropdown");
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
			{isMobile ? (
				<>
					<nav ref={navPrimaryRef} className="nav_mobile">
						<div className="nav_mobile_link">
							<div className="dropdown_title-desktop">
								<div>Oferta</div>
								<FaAngleRight
									onClick={showNavMobileSecondaryDropdown}
									className="right-arrow-icon"
								/>
							</div>

							<Navbar_links
								navMobileDropdown={navMobileDropdown}
								showNavMobileDropdown={showNavMobileDropdown}
							/>
						</div>
						<Link href="/blog">Blog</Link>
						<Link href="/about-me">About me</Link>
						<button
							onClick={toggleBothMobileNavbars}
							className="nav-btn nav-close-btn"
						>
							<FaTimes />
						</button>
					</nav>
					<button onClick={showNavbar} className="nav-btn">
						<FaBars />
					</button>
				</>
			) : (
				<nav className="desktop_nav" ref={navDesktopRef}>
					<Link href="/">Home</Link>
					<div className="link">
						<div className="dropdown_title-desktop" onClick={showDesktopNavbar}>
							<div>My work</div>
							<FaAngleDown className="down-arrow-icon" />
						</div>
					</div>
					<Link href="/blog">Blog</Link>
					<Link href="/about-me">About me</Link>
				</nav>
			)}
		</header>
	);
};

export default Navbar;
