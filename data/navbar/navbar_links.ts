import offerIMG from "../../public/assets/images/landing_page/offer.jpg";
import materialsIMG from "../../public/assets/images/landing_page/materials.jpg";
import { StaticImageData } from "next/image";

export interface NavbarLinksProps {
	name: string;
	src: StaticImageData;
	alt: string;
	sublinks?: {
		Head: string;
		sublink?: {
			title: string;
			href: string;
		}[];
	};
}

export const navbar_links: NavbarLinksProps[] = [
	{
		name: "Oferta",
		src: offerIMG,
		alt: "books",
		sublinks: {
			Head: "",
			sublink: [
				{
					title: "Dla najmłodszych",
					href: "/oferta/dla-najmlodszych",
				},
				{
					title: "Dla dorosłych",
					href: "/oferta/dla-doroslych",
				},
				{
					title: "Przygotowanie do ezagminu",
					href: "/oferta/egzamin",
				},
				{
					title: "Przygotowanie do certyfikatu",
					href: "/oferta/certyfikat",
				},
			],
		},
	},
	{
		name: "Materiały",
		src: materialsIMG,
		alt: "writing machine",
		sublinks: {
			Head: "j. niemiecki",
			sublink: [
				{ title: "A1/A2", href: "/materialy/niemiecki/A1A2" },
				{ title: "B1/B2", href: "/materialy/niemiecki/B1B2" },
			],
		},
	},
];
