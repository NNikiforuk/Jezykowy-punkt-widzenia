"use client";

import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

type Props = {
	toggleBurger: boolean;
	setToggleBurger: (toggleBurger: boolean) => void;
};

const NavbarDropdown = ({ toggleBurger, setToggleBurger }: Props) => {
	const [toggleArrow, setToggleArrow] = useState<boolean>(false);
	const [showDropdown, setShowDropdown] = useState<boolean>(false);

	let onClick = undefined;
	if (toggleBurger) {
		onClick = () => {
			setToggleArrow((prev) => !prev);
		};
	}

	return (
		<div className="dropdown">
			<div
				className="dropdown_link offer"
				onMouseLeave={() => {
					setShowDropdown(false);
				}}
			>
				<div
					className="title"
					onClick={onClick}
					onMouseOver={() => {
						setShowDropdown(true);
					}}
				>
					<div>Oferta</div>
					<div className="icon">
						{toggleArrow ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</div>
				</div>
				{toggleArrow && (
					<div className="offer_dropdown">
						<Link
							href="/oferta/dla-najmlodszych"
							className="offer_link"
							onClick={() => setToggleBurger(false)}
						>
							Dla najmłodszych
						</Link>
						<Link
							href="/oferta/dla-doroslych"
							className="offer_link"
							onClick={() => setToggleBurger(false)}
						>
							Dla dorosłych
						</Link>
						<Link
							href="/oferta/egzamin"
							className="offer_link"
							onClick={() => setToggleBurger(false)}
						>
							Przygotowanie do egzaminu
						</Link>
						<Link
							href="/oferta/certyfikat"
							className="offer_link"
							onClick={() => setToggleBurger(false)}
						>
							Przygotowanie do certyfikatu
						</Link>
					</div>
				)}
			</div>
			<Link
				href="/cennik"
				className="dropdown_link"
				onClick={() => setToggleBurger(false)}
			>
				Cennik
			</Link>
			<Link
				href="/tlumaczenia"
				className="dropdown_link"
				onClick={() => setToggleBurger(false)}
			>
				Tłumaczenia
			</Link>
			<Link
				href="/lektorzy"
				className="dropdown_link"
				onClick={() => setToggleBurger(false)}
			>
				Lektorzy
			</Link>
			<Link
				href="/artykuly"
				className="dropdown_link"
				onClick={() => setToggleBurger(false)}
			>
				Artykuły
			</Link>
			<Link
				href="/opinie"
				className="dropdown_link"
				onClick={() => setToggleBurger(false)}
			>
				Opinie
			</Link>
			<Link
				href="/kontakt"
				className="dropdown_link"
				onClick={() => setToggleBurger(false)}
			>
				Kontakt
			</Link>
			<Link
				href="/sklep"
				className="dropdown_link shop"
				onClick={() => setToggleBurger(false)}
			>
				Sklep
			</Link>
		</div>
	);
};

export default NavbarDropdown;
