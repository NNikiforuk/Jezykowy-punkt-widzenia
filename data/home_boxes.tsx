import offerIMG from "../public/assets/images/offer.jpg";
import pricesIMG from "../public/assets/images/offer.jpg";
import translationsIMG from "../public/assets/images/translations.jpg";
import materialsIMG from "../public/assets/images/materials.jpg";
import feedbackIMG from "../public/assets/images/feedback.jpg";
import contactIMG from "../public/assets/images/contact.jpg";
import { StaticImageData } from "next/image";

export interface Links {
	name: string;
	src: StaticImageData;
	desc: {
		title: string;
		href: string;
	}[];
}

export const home_boxes_links: Links[] = [
	{
		name: "Offer",
		src: offerIMG,
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
	},
];
