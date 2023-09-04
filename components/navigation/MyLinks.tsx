export interface Sublink {
	name: string;
	link: string;
}

export interface OfferSection {
	name: string;
	sublinks: Sublink[];
}

export const links_offer: OfferSection = {
	name: "Oferta",
	sublinks: [
		{
			name: "Oferta dla najmłodszych",
			link: "/oferta/dla-najmlodszych",
		},
		{
			name: "Oferta dla dorosłych",
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
};

export interface SublinkMat {
	name: string;
	link: string;
}

export interface SectionMat {
	name: string;
	sublinks: {
		Head: string;
		sublink: SublinkMat[];
	};
}

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
