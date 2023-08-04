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

	return (
		<div className="dropdown">
			<div className="dropdown_link offer">
				<div className="title" onClick={() => setToggleArrow((prev) => !prev)}>
					<div>Oferta</div>
					<div className="icon">
						{toggleArrow ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</div>
				</div>
				{toggleArrow && (
					<div className="offer_dropdown">
						<Link
							href="/offer/youngest"
							className="offer_link"
							onClick={() => setToggleBurger(false)}
						>
							Dla najmłodszych
						</Link>
						<Link
							href="/offer/adults"
							className="offer_link"
							onClick={() => setToggleBurger(false)}
						>
							Dla dorosłych
						</Link>
						<Link
							href="/offer/exams"
							className="offer_link"
							onClick={() => setToggleBurger(false)}
						>
							Przygotowanie do egzaminu
						</Link>
						<Link
							href="/offer/certificates"
							className="offer_link"
							onClick={() => setToggleBurger(false)}
						>
							Przygotowanie do certyfikatu
						</Link>
					</div>
				)}
			</div>
			<Link
				href="/prices"
				className="dropdown_link"
				onClick={() => setToggleBurger(false)}
			>
				Cennik
			</Link>
			<Link
				href="/translations"
				className="dropdown_link"
				onClick={() => setToggleBurger(false)}
			>
				Tłumaczenia
			</Link>
			<Link
				href="/teachers"
				className="dropdown_link"
				onClick={() => setToggleBurger(false)}
			>
				Lektorzy
			</Link>
			<Link
				href="/articles"
				className="dropdown_link"
				onClick={() => setToggleBurger(false)}
			>
				Artykuły
			</Link>
			<Link
				href="/feedback"
				className="dropdown_link"
				onClick={() => setToggleBurger(false)}
			>
				Opinie
			</Link>
			<Link
				href="/contact"
				className="dropdown_link"
				onClick={() => setToggleBurger(false)}
			>
				Kontakt
			</Link>
			<Link
				href="/shop"
				className="dropdown_link shop"
				onClick={() => setToggleBurger(false)}
			>
				Sklep
			</Link>
		</div>
	);
};

export default NavbarDropdown;
