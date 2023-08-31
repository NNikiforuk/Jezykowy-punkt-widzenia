"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<nav>
			<div className="nav_container">
				<Link href="/">
					<Image
						src="/assets/images/logo.png"
						alt="logo"
						width={50}
						height={50}
						className="logo"
					/>
				</Link>
				<ul
					className={`nav_ul_mobile ${
						open ? "nav_ul_mobile-open" : "nav_ul_mobile-closed"
					}`}
				>
					{/* <li></li> */}
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
