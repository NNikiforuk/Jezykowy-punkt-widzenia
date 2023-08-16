"use client";

import { SetStateAction, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";

const Navbar = () => {
	const [isMenuVisible, setIsMenuVisible] = useState(false);
	const [wantToCloseBurger, setWantToCloseBurger] = useState(false);
	const [offerSubMenuVisible, setOfferSubMenuVisible] = useState(false);
	const [materialsSubMenuVisible, setMaterialsSubMenuVisible] = useState(false);

	const toggleClass = () => {
		setIsMenuVisible((prev) => !prev);
		setWantToCloseBurger((prev) => !prev);
	};

	const hideNavbar = () => {
		setIsMenuVisible(false);
	};

	const toggleSubmenu = (setter: {
		(value: SetStateAction<boolean>): void;
	}) => {
		setter((prev) => !prev);
	};

	return (
		<header className="header">
			<div className="container">
				<div className="row">
					<div className="header_logo">
						<Link href="/">
							<Image
								src="/assets/images/logo.png"
								alt="logo"
								width={70}
								height={70}
								className="logo"
								priority={false}
								onClick={hideNavbar}
							/>
						</Link>
					</div>

					<div className="header_menus">
						<nav className="main_nav ">
							{wantToCloseBurger === true ? (
								<>
									<span className="burger_btn" onClick={toggleClass}>
										<FiXCircle />
									</span>
								</>
							) : (
								<>
									<span className="burger_btn" onClick={toggleClass}>
										<FiAlignRight />
									</span>
								</>
							)}

							<ul className={`main_menu ${isMenuVisible && "secondary_menu"}`}>
								<li
									onClick={() => toggleSubmenu(setOfferSubMenuVisible)}
									className="menu_item sub_menus_arrows"
								>
									<div className="link">
										<div>Oferta</div>
										<div>
											<FiChevronDown />
										</div>
									</div>
									<ul
										className={`sub_menus ${
											offerSubMenuVisible && "sub_menus_active"
										}`}
									>
										<li>
											<Link
												onClick={toggleClass}
												className="active"
												href="/oferta/dla-najmlodszych"
											>
												Najmłodsi
											</Link>
										</li>
										<li>
											<Link
												onClick={toggleClass}
												className="active"
												href="/oferta/dla-doroslych"
											>
												Dorośli
											</Link>
										</li>
										<li>
											<Link
												onClick={toggleClass}
												className="active"
												href="/oferta/egzamin"
											>
												Egzamin
											</Link>
										</li>
										<li>
											<Link
												onClick={toggleClass}
												className="active"
												href="/oferta/certyfikat"
											>
												Certyfikat
											</Link>
										</li>
									</ul>
								</li>
								<li className="menu_item">
									<Link onClick={toggleClass} className="active" href="/cennik">
										Cennik
									</Link>
								</li>
								<li className="menu_item">
									<Link
										onClick={toggleClass}
										className="active"
										href="/tlumaczenia"
									>
										Tłumaczenia
									</Link>
								</li>
								<li className="menu_item">
									<Link
										onClick={toggleClass}
										className="active"
										href="/lektorzy"
									>
										Lektorzy
									</Link>
								</li>
								<li className="menu_item">
									<Link
										onClick={toggleClass}
										className="active"
										href="/materialy"
									>
										Materiały do pobrania
									</Link>
								</li>
								<li className="menu_item">
									<Link onClick={toggleClass} className="active" href="/opinie">
										Opinie
									</Link>
								</li>
								<li className="menu_item">
									<Link onClick={toggleClass} className="active" href="/sklep">
										Sklep
									</Link>
								</li>
								<li className="menu_item">
									<Link
										onClick={toggleClass}
										className="active"
										href="/kontakt"
									>
										Kontakt
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
