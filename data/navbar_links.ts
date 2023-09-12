import offerIMG from "../public/assets/images/landing_page/offer.jpg";
import materialsIMG from "../public/assets/images/landing_page/materials.jpg";
import { StaticImageData } from "next/image";

export interface OfferProps {
	name: string;
	src: StaticImageData;
	alt: string;
	desc: {
		title: string;
		href: string;
	}[];
}

export const offer: OfferProps = {
	name: "Offer",
	src: offerIMG,
	alt: "books",
	desc: [
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
};

export interface MaterialsProps {
	name: string;
	src: StaticImageData;
	alt: string;
	sublinks: {
		Head: string;
		sublink: {
			name: string;
			link: string;
		}[];
	};
}

export const materials: MaterialsProps = {
	name: "Materiały",
	src: materialsIMG,
	alt: "writing machine",
	sublinks: {
		Head: "j. niemiecki",
		sublink: [
			{ name: "A1/A2", link: "/materialy/niemiecki/A1A2" },
			{ name: "B1/B2", link: "/materialy/niemiecki/B1B2" },
		],
	},
};
