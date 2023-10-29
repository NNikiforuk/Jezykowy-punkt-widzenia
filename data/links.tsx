import { StaticImageData } from "next/image";
import offerIMG from "../public/assets/images/landing_page/offer.jpg";
import pricesIMG from "../public/assets/images/landing_page/pricelist.jpg";
import translationsIMG from "../public/assets/images/landing_page/translations.jpg";
import materialsIMG from "../public/assets/images/landing_page/materials.jpg";
import feedbackIMG from "../public/assets/images/landing_page/feedback.jpg";
import contactIMG from "../public/assets/images/landing_page/contact.jpg";

export interface linksProps {
	name: string;
	img: StaticImageData;
	alt: string;
    href: string;
	sublinks?: {
		Head: string;
		sublink?: {
			title: string;
			href: string;
		}[];
	};
	priority?: true | false
}

export const links: linksProps[] = [
	{
		name: "Oferta",
		img: offerIMG,
		alt: "oferta",
		href: "/oferta",
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
		name: "Cennik",
		img: pricesIMG,
		alt: "cennik",
		href: "/cennik",
	},
	{
		name: "Tłumaczenia",
		img: translationsIMG,
		alt: "tłumaczenia",
		href: "/tlumaczenia",
	},
	{
		name: "Materiały",
		img: materialsIMG,
		alt: "writing machine",
		href: "/materialy",
		sublinks: {
			Head: "j. niemiecki",
			sublink: [
				{ title: "A1/A2", href: "/materialy/niemiecki/A1A2" },
				{ title: "B1/B2", href: "/materialy/niemiecki/B1B2" },
			],
		},
	},
	{
		name: "Opinie",
		img: feedbackIMG,
		alt: "opinie",
		href: "/opinie",
	},
	{
		name: "Kontakt",
		img: contactIMG,
		alt: "kontakt",
		href: "/kontakt",
	},
];
