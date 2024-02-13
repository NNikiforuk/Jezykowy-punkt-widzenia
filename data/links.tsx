import { StaticImageData } from "next/image";
import offerIMG from "../public/assets/images/landing_page/offer.jpg";
import offerIMGSmaller from "../public/assets/images/landing_page/offer_smaller.jpg";
import pricesIMG from "../public/assets/images/landing_page/pricelist.jpg";
import pricesIMGSmaller from "../public/assets/images/landing_page/pricelist_smaller.jpg";
import translationsIMG from "../public/assets/images/landing_page/translations.jpg";
import translationsIMGSmaller from "../public/assets/images/landing_page/translations_smaller.jpg";
import materialsIMG from "../public/assets/images/landing_page/materials.jpg";
import materialsIMGSmaller from "../public/assets/images/landing_page/materials_smaller.jpg";
import feedbackIMG from "../public/assets/images/landing_page/feedback.jpg";
import feedbackIMGSmaller from "../public/assets/images/landing_page/feedback_smaller.jpg";
import contactIMG from "../public/assets/images/landing_page/contact.jpg";
import contactIMGSmaller from "../public/assets/images/landing_page/contact_smaller.jpg";
import aboutmeIMG from "../public/assets/images/landing_page/aboutme.png";
import aboutmeIMGSmaller from "../public/assets/images/landing_page/aboutme_smaller.png";

export interface linksProps {
	name: string;
	img: StaticImageData;
	imgSmaller: StaticImageData;
	alt: string;
	href: string;
	sublinks?: {
		Head: string;
		sublink?: {
			title: string;
			href: string;
		}[];
	};
	priority?: true | false;
}

export const links: linksProps[] = [
	{
		name: "Oferta",
		img: offerIMG,
		imgSmaller: offerIMGSmaller,
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
		imgSmaller: pricesIMGSmaller,
		alt: "cennik",
		href: "/cennik",
	},
	{
		name: "Tłumaczenia",
		img: translationsIMG,
		imgSmaller: translationsIMGSmaller,
		alt: "tłumaczenia",
		href: "/tlumaczenia",
	},
	{
		name: "Artykuły",
		img: materialsIMG,
		imgSmaller: materialsIMGSmaller,
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
		imgSmaller: feedbackIMGSmaller,
		alt: "opinie",
		href: "/opinie",
	},
	{
		name: "O mnie",
		img: aboutmeIMG,
		imgSmaller: aboutmeIMGSmaller,
		alt: "o zalozycielce",
		href: "/omnie",
	},
	{
		name: "Kontakt",
		img: contactIMG,
		imgSmaller: contactIMGSmaller,
		alt: "kontakt",
		href: "/kontakt",
	},
];
