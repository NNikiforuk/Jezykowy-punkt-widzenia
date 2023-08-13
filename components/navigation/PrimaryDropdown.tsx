import Link from "next/link";
import {
	FaAngleRight,
	FaAngleDown,
	FaAngleLeft,
	FaInfoCircle,
} from "react-icons/fa";
import { useEffect, useState } from "react";

type Props = {
	onSelect: () => void;
	showSecondaryMobileNav?: boolean;
	setShowSecondaryMobileNav?: (showSecondaryMobileNav: boolean) => void;
};

const PrimaryDropdown = ({
	onSelect,
	showSecondaryMobileNav,
	setShowSecondaryMobileNav,
}: Props) => {
	const toggleSecondaryNav = () => {
		if (setShowSecondaryMobileNav) {
			setShowSecondaryMobileNav(!showSecondaryMobileNav);
		}
	};

	const closeBothNav = () => {
		onSelect();
		if (setShowSecondaryMobileNav) setShowSecondaryMobileNav(false);
	};

	return (
		<>
			<Link href="/oferta" className="link">
				Oferta
			</Link>
			<Link href="/cennik" className="link" onClick={onSelect}>
				Cennik
			</Link>
			<Link href="/tlumaczenia" className="link" onClick={onSelect}>
				Tłumaczenia
			</Link>
			<Link href="/lektorzy" className="link" onClick={onSelect}>
				Lektorzy
			</Link>
			<Link href="/artykuly" className="link" onClick={onSelect}>
				Artykuły
			</Link>
			<Link href="/opinie" className="link" onClick={onSelect}>
				Opinie
			</Link>
			<Link href="/kontakt" className="link" onClick={onSelect}>
				Kontakt
			</Link>
			<Link href="/sklep" className="link" onClick={onSelect}>
				Sklep
			</Link>

			<div
				className={`secondary_dropdown secondary_dropdown-desktop${
					showSecondaryMobileNav ? "secondary_active" : ""
				}`}
			>
				<button className="nav-btn nav-return-btn" onClick={toggleSecondaryNav}>
					<FaAngleLeft />
				</button>
				<Link
					href="/oferta/dla-najmlodszych"
					className="link secondary_link"
					onClick={closeBothNav}
				>
					Oferta dla najmłodszych
				</Link>
				<Link
					href="/oferta/dla-doroslych"
					className="link secondary_link"
					onClick={closeBothNav}
				>
					Oferta dla dorosłych
				</Link>
				<Link
					href="/oferta/egzamin"
					className="link secondary_link"
					onClick={closeBothNav}
				>
					Przygotowanie do egzaminu
				</Link>
				<Link
					href="/oferta/certyfikat"
					className="link secondary_link"
					onClick={closeBothNav}
				>
					Przygotowanie do certyfikatu
				</Link>
			</div>
		</>
	);
};

export default PrimaryDropdown;
