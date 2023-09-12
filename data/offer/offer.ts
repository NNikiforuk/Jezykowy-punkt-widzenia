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
	list?: {
		title: string;
		desc: string[];
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
	{
		name: "Przygotowanie do matury i egzaminów",
		list: {
			title: "Z nami:",
			desc: [
				"Utrwalisz słownictwo",
				"Powtórzysz gramatykę",
				"Poćwiczysz rozumienie tekstów pisanych oraz słuchania ze słuchu",
			],
		},
		desc: {
			text1:
				"Czeka Cię matura z języka niemieckiego i czujesz się nie do końca przygotowany/na? Czy na myśl o egzaminie ogarnia Cię stres? Matura to pierwszy poważny egzamin w życiu dzięki któremu możemy wybrać się na wymarzone studia. Jeśli więc potrzebujesz pomocy, zgłoś się do nas! Chętnie przygotujemy Cię do tego egzaminu.",
			text2:
				"Oferujemy zarówno indywidualną ofertę dla każdego maturzysty jak i zajęcia w małych grupach do 4 osób.",
			text3:
				"Skontaktuj się z nami, wypełnij test językowy, a my zaproponujemy liczbę godzin oraz kurs.",
		},
	},
	{
		name: "Przygotowanie do certyfikatów",
		desc: {
			text1:
				"W nauce języka obcego ważne jest stawianie sobie konkretnych celów. Jednym z nich może być zdobycie certyfikatu, dzięki któremu możemy między innymi ubiegać się o wyższe stanowisko. Potwierdza on znajomość języka niemieckiego na konkretnym poziomie, co jest bardzo przydatne na studiach (szczególnie za granicą) oraz cenione przez pracodawców.",
			text2:
				"Goethe Institut to instytucja, która promuje język niemiecki oraz niemiecką kulturę. Jej placówki znaleźć można na całym świecie – w Polsce obecne są w Warszawie i Krakowie. Goethe Institut umożliwia uzyskanie certyfikatu z niemieckiego na każdym poziomie.  Certyfikat Goethe jest ważny bezterminowo i honorowany bardziej na uczelniach wyższych, niż przez pracodawców. Certyfikat z niemieckiego TELC honorują bardziej pracodawcy (w tym urzędy czy służby cywilne) niż uczelnie wyższe. Jego posiadanie wymagane jest też od osób ubiegających się o niemieckie obywatelstwo. Certyfikat jest również bezterminowy. Teoretycznie można się przygotować do egzaminu Goethe Zertifikat/ Telc B1 w trakcie 96 godzin intensywnej nauki. Jest to osiągalne , jeżeli uczysz się z lektorem trzy godziny tygodniowo przez 8 miesięcy. Oczywiście to wszystko zależy jednak od danego poziomu osoby uczącej się, dlatego proponujemy indywidualny dobór pakietów godzinowych.",
			text3:
				"Napisz do nas, a wyślemy Ci nasz test językowy. Po jego wypełnieniu przedstawimy Ci naszą ofertę i razem dobierzemy pakiety godzinowe.",
		},
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
