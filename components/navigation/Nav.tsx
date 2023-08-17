"use client";

import { SetStateAction, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import checkIfClickedOutside from "./checkIfClickedOutside";

const Navbar = () => {
	const [isMenuVisible, setIsMenuVisible] = useState(false);
	const [wantToCloseBurger, setWantToCloseBurger] = useState(false);
	const [offerSubMenuVisible, setOfferSubMenuVisible] = useState(false);
	const [materialsSubMenuVisible, setMaterialsSubMenuVisible] = useState(false);
	const [materialsENGSubMenuVisible, setMaterialsENGSubMenuVisible] =
		useState(false);

	const ref = checkIfClickedOutside(() => {
		hideNavbar();
	});

	useEffect(() => {
		if (offerSubMenuVisible) setMaterialsSubMenuVisible(false);
	}, [offerSubMenuVisible]);

	useEffect(() => {
		if (materialsSubMenuVisible) setOfferSubMenuVisible(false);
	}, [materialsSubMenuVisible]);

	const toggleClass = () => {
		setIsMenuVisible((prev) => !prev);
		setWantToCloseBurger((prev) => !prev);
	};

	const hideNavbar = () => {
		setWantToCloseBurger(false);
		setIsMenuVisible(false);
		setOfferSubMenuVisible(false);
		setMaterialsSubMenuVisible(false);
		setMaterialsENGSubMenuVisible(false);
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
							{wantToCloseBurger ? (
								<div className="burger_btn" onClick={toggleClass}>
									<FiXCircle />
								</div>
							) : (
								<div className="burger_btn" onClick={toggleClass}>
									<FiAlignRight />
								</div>
							)}

							<ul className={`main_menu ${isMenuVisible && "secondary_menu"}`}>
								<li
									onClick={() => toggleSubmenu(setOfferSubMenuVisible)}
									className="menu_item sub_menus_arrows"
								>
									<div className="link">
										<div>Oferta</div>

										<FiChevronDown />
									</div>
									<ul
										className={`sub_menus ${
											offerSubMenuVisible && "sub_menus_active"
										}`}
										ref={ref}
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

								<li
									onClick={() => toggleSubmenu(setMaterialsSubMenuVisible)}
									className="menu_item sub_menus_arrows"
								>
									<div className="link">
										<div>Materiały</div>
										<div>
											<FiChevronDown />
										</div>
									</div>
									<ul
										className={`sub_menus ${
											materialsSubMenuVisible &&
											"sub_menus_active sub_menus_active-materials"
										}`}
									>
										<li
											onClick={() =>
												toggleSubmenu(setMaterialsENGSubMenuVisible)
											}
											className="menu_item sub_menus_arrows"
										>
											<div className="link">
												<div>Język niemiecki</div>
												<div>
													<FiChevronDown />
												</div>
											</div>

											<ul
												className={`sub_menus ${
													materialsENGSubMenuVisible && "sub_menus_active"
												}`}
											>
												<li>
													<Link
														onClick={toggleClass}
														className="active"
														href="/materialy/niemiecki/A1A2"
													>
														A1/A2
													</Link>
												</li>
												<li>
													<Link
														onClick={toggleClass}
														className="active"
														href="/materialy/niemiecki/B1B2"
													>
														B1/B2
													</Link>
												</li>
											</ul>
										</li>
									</ul>
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
