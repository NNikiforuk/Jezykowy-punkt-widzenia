interface OfferProps {
	name: string;
	box?: {
		title: string;
		texts: string[];
	}[];
	imgs?: {
		title: string;
		src: string;
		alt: string;
	}[];
	desc: {
		text1: string;
		text2?: string;
		text3?: string;
		text4?: string;
		text5?: string;
	};
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
		desc: {
			text1:
				"Wybór części gramatycznej zostanie dobrany po rozmowie z kursantem",
			text2:
				"Napisz do nas, a wyślemy Ci nasz test językowy. Po jego wypełnieniu przedstawimy Ci naszą ofertę i dobierzemy pakiet dla Twojego dziecka",
		},
	},
	{
		name: "Oferta dla dorosłych",
		box: [
			{
				title: "Gramatyka",
				texts: ["A1 - C2", "45h"],
			},
			{
				title: "Gramatyka + konwersacja",
				texts: ["A1 - A2", "45h"],
			},
			{
				title: "Gramatyka + konwersacja",
				texts: ["B1 - B2", "40h"],
			},
			{
				title: "Gramatyka + konwersacja",
				texts: ["C1 - C2", "38h"],
			},
			{
				title: "Konwersacja",
				texts: ["25h"],
			},
		],
		desc: {
			text1:
				"Prowadzimy kursy językowe na trzech poziomach, od A1 do C2. Atutem naszej szkoły jest to, że kursy na poziomie B1/B2 oraz C1/C2 są prowadzone przez dwie osoby. Część mówiona z Nativspeakers, dzięki czemu jesteś w stanie mieć żywy kontakt z językiem, część gramatyczna z certyfikowaną osobą z doświadczeniem w nauczaniu.",
			text2:
				"Proponujemy zajęcia indywidualne oraz grupowe do 4 osób, aby każdy uczestnik miał czynny udział w zajęciach.",
			text3:
				"Dostępne są również pakiety godzinowe z Nativspeaker zarówno indywidualne jak i grupowe.",
			text4:
				"Wybór części gramatycznej zostanie dobrany po rozmowie z kursantem.",
			text5:
				"Napisz do nas, a wyślemy Ci nasz test językowy. Po jego wypełnieniu przedstawimy Ci naszą ofertę i dobierzemy odpowiedni pakiet.",
		},
	},
];

// 			{
// 				text1:
// 					"Oferujemy zarówno indywidualną ofertę dla każdego maturzysty jak i zajęcia w małych grupach do 4 osób",
// 				text2:
// 					"Skontaktuj się z nami, wypełnij test językowy, a my zaproponujemy liczbę godzin oraz kurs",
// 			},
// 			{
// 				text1:
// 					"Napisz do nas, a wyślemy Ci nasz test językowy. Po jego wypełnieniu przedstawimy Ci naszą ofertę i razem dobierzemy pakiety godzinowe",
// 			},

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
