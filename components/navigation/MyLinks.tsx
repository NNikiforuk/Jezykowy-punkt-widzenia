export interface Sublink {
	name: string;
	link: string;
}
export interface Sublinks {
	sublink: Sublink[];
}

export interface OfferSection {
	name: string;
	sublinks: Sublinks;
}

export interface SectionMat {
	name: string;
	sublinks: {
		Head: string;
		sublink: Sublink[];
	};
}

export const links_offer: OfferSection = {
	name: "Oferta",
	sublinks: {
		sublink: [
			{
				name: "Dla najmłodszych",
				link: "/oferta/dla-najmlodszych",
			},
			{
				name: "Dla dorosłych",
				link: "/oferta/dla-doroslych",
			},
			{
				name: "Przygotowanie do egzaminu",
				link: "/oferta/egzamin",
			},
			{
				name: "Przygotowanie do certyfikatu",
				link: "/oferta/certyfikat",
			},
		],
	},
};

export const links_materials: SectionMat = {
	name: "Materiały",
	sublinks: {
		Head: "j. niemiecki",
		sublink: [
			{ name: "A1/A2", link: "/materialy/niemiecki/A1A2" },
			{ name: "B1/B2", link: "/materialy/niemiecki/B1B2" },
		],
	},
};
