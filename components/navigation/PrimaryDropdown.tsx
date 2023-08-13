import Link from "next/link";

type Props = {
	onSelect: () => void;
};

const PrimaryDropdown = ({ onSelect }: Props) => {
	return (
		<>
			<Link href="/oferta" onClick={onSelect}>
				Oferta
			</Link>
			<Link href="/cennik" onClick={onSelect}>
				Cennik
			</Link>
			<Link href="/tlumaczenia" onClick={onSelect}>
				Tłumaczenia
			</Link>
			<Link href="/lektorzy" onClick={onSelect}>
				Lektorzy
			</Link>
			<Link href="/artykuly" onClick={onSelect}>
				Artykuły
			</Link>
			<Link href="/opinie" onClick={onSelect}>
				Opinie
			</Link>
			<Link href="/kontakt" onClick={onSelect}>
				Kontakt
			</Link>
			<Link href="/sklep" onClick={onSelect}>
				Sklep
			</Link>
		</>
	);
};

export default PrimaryDropdown;
