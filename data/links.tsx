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
					title: "Native speaker",
					href: "/oferta",
				},
				{
					title: "Lektor",
					href: "/oferta/lektor",
				},
				{
					title: "Kursy branżowe",
					href: "/oferta/branzowe",
				},
				{
					title: "Dzieci i młodzież",
					href: "/oferta/dzieci-mlodziez",
				},
				{
					title: "Przygotowanie do certyfikatu",
					href: "/oferta/certyfikaty",
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
		name: "Artykuły",
		img: materialsIMG,
		alt: "writing machine",
		href: "/artykuly",
		sublinks: {
			Head: "j. niemiecki",
			sublink: [
				{ title: "A1/A2", href: "/artykuly" },
				{ title: "B1/B2", href: "/artykuly/niemiecki/B1B2" },
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
