"use client";

import Image from "next/legacy/image";
import Link from "next/link";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { links } from "@/data/links";

const Navigation = () => {
	const [open, setOpen] = useState<boolean>(false);

	const close = () => {
		setOpen(false);
	};

	return (
		<nav>
			<div className="nav_container">
				<div className="logo_container">
					<Link href="/">
						<Image
							src="/assets/images/navbar/logo.png"
							alt="logo"
							width={70}
							height={70}
							className="logo"
						/>
					</Link>
					<div className="burger_btn" onClick={() => setOpen(!open)}>
						{open ? <RxCross1 /> : <RiMenu3Line />}
					</div>
					<div className="site_name">Językowy punkt widzenia</div>
				</div>
				<ul className="navlist">
					{links.map((link) => (
						<li key={link.name}>
							<Link onClick={close} href={link.href}>
								{link.name}
							</Link>
						</li>
					))}
				</ul>

				{/* Mobile */}
				<ul className={`navlist_mobile ${open ? "left0" : "left100"}`}>
					{links.map((link) => (
						<li key={link.name}>
							<Link onClick={close} href={link.href}>
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
