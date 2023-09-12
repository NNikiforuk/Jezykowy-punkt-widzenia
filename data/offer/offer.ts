interface OfferProps {
	name: string;
	imgs: {
		title: string;
		src: string;
		alt: string;
	}[];
	desc: {
		text1: string;
		text2?: string;
	}[];
}

export const offer: OfferProps[] = [
	{
		name: "Oferta dla najmłodszych",
		imgs: [
			{
				title: "Zajęcia indywidualne lub grupowe do 4 osób",
				src: "/assets/images/offer/offer-kids.png",
				alt: "group of children",
			},
			{
				title: "Różne grupy wiekowe",
				src: "/assets/images/offer/offer-child.png",
				alt: "child",
			},
			{
				title: "Nauka poprzez zabawę",
				src: "/assets/images/offer/offer-play.png",
				alt: "children playing",
			},
		],
		desc: [
			{
				text1:
					"Wybór części gramatycznej zostanie dobrany po rozmowie z kursantem",
				text2:
					"Napisz do nas, a wyślemy Ci nasz test językowy. Po jego wypełnieniu przedstawimy Ci naszą ofertę i dobierzemy pakiet dla Twojego dziecka",
			},
			{
				text1:
					"Proponujemy zajęcia indywidualne oraz grupowe do 4 osób, tak aby każdy uczestnik miał czynny udział w zajęciach",
				text2:
					"Dostępne są również pakiety godzinowe z native speaker. Zarówno indywidualne jak i grupowe",
			},
			{
				text1:
					"Oferujemy zarówno indywidualną ofertę dla każdego maturzysty jak i zajęcia w małych grupach do 4 osób",
				text2:
					"Skontaktuj się z nami, wypełnij test językowy, a my zaproponujemy liczbę godzin oraz kurs",
			},
			{
				text1:
					"Napisz do nas, a wyślemy Ci nasz test językowy. Po jego wypełnieniu przedstawimy Ci naszą ofertę i razem dobierzemy pakiety godzinowe",
			},
		],
	},
];

interface PackagesProps {
	title: string;
	package: {
		title: string;
		texts: string[];
	}[];
	grammar: {
		title: string;
		elements: string[];
	};
}

export const packages: PackagesProps = {
	title: "Pakiety godzinowe",
	package: [
		{
			title: "6h",
			texts: ["gramatyka 3h", "+", "konwersacja 3h"],
		},
		{
			title: "12h",
			texts: ["gramatyka 6h", "+", "konwersacja 6h"],
		},
		{
			title: "18h",
			texts: ["gramatyka 9h", "+", "konwersacja 9h"],
		},
	],
	grammar: {
		title: "Na część gramatyczną składają się poniższe części mowy:",
		elements: [
			"przymiotnik",
			"rzeczownik",
			"czasownik",
			"zaimek",
			"przyimek",
			"przysłówek",
			"liczebnik",
			"partykuły",
			"szyk zdań/nauka o zdaniu",
		],
	},
};
