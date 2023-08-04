import Link from "next/link";

type Props = {
	toggleBurger: boolean;
	setToggleBurger: (toggleBurger: boolean) => void;
};

const NavbarDropdown = ({ toggleBurger, setToggleBurger }: Props) => {
	return (
		<div className="dropdown">
			<Link
				href="/offer"
				className="dropdown_link"
				onClick={() => setToggleBurger(false)}
			>
				Oferta
			</Link>
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
