"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { links } from "@/data/links";
import { usePathname } from "next/navigation";

const Navigation = () => {
	const [open, setOpen] = useState<boolean>(false);
	const [backgroundColorChange, setBackgroundColorchange] = useState(false);

	const currentRoute = usePathname();

	const close = () => {
		setOpen(false);
	};

	const changeNavbarColor = () => {
		if (window.scrollY >= 50) {
			setBackgroundColorchange(true);
		} else {
			setBackgroundColorchange(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeNavbarColor);
	}, []);

	return (
		<nav
			className={`navigation ${backgroundColorChange ? "color_change" : ""}`}
		>
			<div className="nav_container">
				<div className="logo_container">
					<Link className="link" aria-label="Powrót do strony głównej" href="/" scroll={false}>
						<Image
							src="/assets/images/navbar/logo-small.png"
							alt="logo"
							width={70}
							height={70}
							className="logo"
							priority={false}
						/>
					</Link>
					<Link className="link_desktop" aria-label="Powrót do strony głównej" href="/" scroll={false}>
						<Image
							src="/assets/images/navbar/logo.png"
							alt="logo"
							width={70}
							height={70}
							className="logo"
							priority={false}
						/>
					</Link>
					<div className="burger_btn" onClick={() => setOpen(!open)}>
						{open ? <RxCross1 /> : <RiMenu3Line />}
					</div>
				</div>
				<ul className="navlist">
					{links.map((link) => (
						<li key={link.name}>
							<Link
								aria-label={link.name}
								onClick={close}
								href={link.href}
								scroll={false}
								className={currentRoute === link.href ? "active" : ""}
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>

				{/* Mobile */}
				<ul className={`navlist_mobile ${open ? "left0" : "left100"}`}>
					{links.map((link) => (
						<li key={link.name}>
							<Link
								aria-label={link.name}
								onClick={close}
								href={link.href}
								scroll={false}
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
