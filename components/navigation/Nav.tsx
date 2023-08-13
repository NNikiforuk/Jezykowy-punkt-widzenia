"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";

const Navbarmenu = () => {
	const [isMenu, setisMenu] = useState(false);
	const [isResponsiveclose, setResponsiveclose] = useState(false);
	const toggleClass = () => {
		setisMenu(isMenu === false ? true : false);
		setResponsiveclose(isResponsiveclose === false ? true : false);
	};

	let boxClass = ["main-menu menuq1"];
	if (isMenu) {
		boxClass.push("menuq2");
	} else {
		boxClass.push("");
	}

	const [isMenuSubMenu, setMenuSubMenu] = useState(false);

	const toggleSubmenu = () => {
		setMenuSubMenu(isMenuSubMenu === false ? true : false);
	};

	let boxClassSubMenu = ["sub__menus"];
	if (isMenuSubMenu) {
		boxClassSubMenu.push("sub__menus__Active");
	} else {
		boxClassSubMenu.push("");
	}

	return (
		<header className="header__middle">
			<div className="container">
				<div className="row">
					<div className="header__middle__logo">
						<Link href="/">
							<Image
								src="/assets/images/logo.png"
								alt="logo"
								width={70}
								height={70}
								className="object-contain logo"
								priority={false}
							/>
						</Link>
					</div>

					<div className="header__middle__menus">
						<nav className="main-nav ">
							{isResponsiveclose === true ? (
								<>
									<span
										className="menubar__button"
										style={{ display: "none" }}
										onClick={toggleClass}
									>
										<FiXCircle />
									</span>
								</>
							) : (
								<>
									<span
										className="menubar__button"
										style={{ display: "none" }}
										onClick={toggleClass}
									>
										<FiAlignRight />
									</span>
								</>
							)}

							<ul className={boxClass.join(" ")}>
								<li className="menu-item">
									<Link className="is-active" onClick={toggleClass} href="/">
										Home
									</Link>
								</li>
								<li className="menu-item ">
									<Link
										onClick={toggleClass}
										className="is-active"
										href="/about"
									>
										About
									</Link>
								</li>
								<li
									onClick={toggleSubmenu}
									className="menu-item sub__menus__arrows"
								>
									<Link href="/">
										Shop <FiChevronDown />
									</Link>
									<ul className={boxClassSubMenu.join(" ")}>
										<li>
											<Link
												onClick={toggleClass}
												className="is-active"
												href="/online"
											>
												Online Shop
											</Link>
										</li>
										<li>
											<Link
												onClick={toggleClass}
												className="is-active"
												href="/offline"
											>
												Offline Shop
											</Link>
										</li>
									</ul>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbarmenu;
