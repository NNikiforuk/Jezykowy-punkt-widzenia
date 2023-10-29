import { StaticImageData } from "next/dist/client/legacy/image";
import img1 from "../../public/assets/images/offer/1.jpg";
import img2 from "../../public/assets/images/offer/2.jpg";
import img3 from "../../public/assets/images/offer/3.jpg";
import img4 from "../../public/assets/images/offer/4.jpg";
import img5 from "../../public/assets/images/offer/5.jpg";

export interface OfferProps {
	name: string;
	descTitle?: string;
	src: StaticImageData;
	alt: string;
	text1: string;
	list?: {
		title: string;
		list: string[];
	}[];
	list2?: string[];
}

export const offer: OfferProps[] = [
	{
		name: "Online classroom z native speaker",
		descTitle: "Kursy online w grupie lub indywidualnie z native speaker",
		src: img1,
		alt: "laptop na łóżku",
		text1:
			"Ucz się z naszymi native speakerami. Osobami, dla których język obcy jest językiem ojczystym. To nie tylko efektywny ale i także satysfakcjonujący sposób na zdobywanie wiedzy i osiąganie swoich celów. Na konwersacjach przełamujemy nie tylko barierę językową, jeśli jesteś osobą początkującą, ale także poprawiamy swobodę wypowiedzi w języku obcym. Regularny kontakt z native speakerem pozwoli Ci m.in. na poznanie kultury danego kraju oraz zdobycie pewności siebie.",
		list: [
			{
				title: "Native speaker online - kurs intensywny grupowy",
				list: [
					"max. 5 osób",
					"24h",
					"5 tygodni",
					"Poziomy: A1, A2, B1, B2, C1, C2 ",
				],
			},
			{
				title: "Native speaker online - kurs językowy grupowy",
				list: [
					"max. 5 osób",
					"24h",
					"8 tygodni",
					"Poziomy: A1, A2, B1, B2, C1, C2 ",
				],
			},
			{
				title: "Native speaker online - kurs intensywny indywidualny",
				list: ["24h", "5 tygodni", "Poziomy: A1, A2, B1, B2, C1, C2 "],
			},
			{
				title: "Native speaker online - kurs językowy indywidualny",
				list: ["24h", "8 tygodni", "Poziomy: A1, A2, B1, B2, C1, C2 "],
			},
		],
	},
	{
		name: "Online classroom",
		descTitle: "Kursy online w grupie lub indywidualnie",
		src: img2,
		alt: "praca przy biurku",
		text1:
			"Zajęcia dedykowane są dla osób, którym zależy na samorozwoju, rozwinięciu umiejętności interpersonalnych, rozszerzeniu horyzontów oraz zwiększeniu zawodowych możliwości. Posiadanie umiejętności językowych na globalnym rynku pracy jest coraz bardziej istotne.  Wiele międzynarodowych korporacji działa na skalę globalną i posiada oddziały lub partnerów biznesowych na całym świecie. Więc jeśli planujesz pracować w takiej organizacji, zgłoś się do nas, pomożemy Ci osiągnąć Twoje cele.",
	},
	{
		name: "Kursy branżowe online w grupie lub indywidualne",
		src: img3,
		alt: "mężczyzna przy biurku",
		text1:
			"Kursy specjalistyczne pozwalają na rozwój swoich umiejętności w konkretnej dziedzinie lub branży.  Oto przykłady kategorii kursów w języku obcym, które  oferujemy:",
		list2: [
			"kurs dla managerów",
			"kurs dla księgowych",
			"kurs dla logistyki i transportu",
			"kurs dla pielęgniarek i opiekunów osób starszych",
			"kurs dla branży turystyczno-hotelarskiej",
			"kurs dla branży budowlanej",
		],
	},
	{
		name: "Kursy językowe online dla dzieci i młodzieży w grupie lub indywidualne",
		src: img4,
		alt: "rodzina przy laptopie",
		text1:
			"Nauka języków obcych jest dostępna i dostosowana do potrzeb dzieci i młodzieży. Oferujemy waszym pociechom zajęcia językowe dostosowane do różnych grup wiekowych. W naszej szkole online uczymy się  nie tylko przez zabawę oraz interaktywne ćwiczenia rozwijające wyobraźnię Twojego dziecka, ale także wykorzystujemy różnego rodzaju techniki zapamiętywania.",
	},
	{
		name: "Kursy językowe przygotowujące do certyfikatów w grupie lub indywidualne",
		src: img5,
		alt: "certyfikat",
		text1:
			"Przygotujemy Cię chętnie do takich certyfikatów jak Goethe, PNJN lub TELC ( The European Language Certificates).  Kursy są odpowiednio dopasowane do Twoich potrzeb, poziomu zaawansowania oraz obecnych wymagań egzaminacyjnych.  Twoja satysfakcja jest naszym celem.",
	},
];

export interface AdvantagesProps {
	text1: string;
	text2: string;
	list: string[];
	list2: {
		title: string;
		list: string[];
	}[];
}

export const advantages: AdvantagesProps = {
	text1: "Zalety:",
	list: [
		"Nauka online w każdej części świata lub kraju ",
		"Indywidualne materiały opracowywane na potrzeby grupy lub uczestnika",
		"Zwiększenie atrakcyjności na rynku pracy ",
		"Samorozwój i rozwijanie wielokulturowości ",
		"Małe grupy do max. 5 osób lub zajęcia indywidualne",
	],
	text2:
		"Pamiętaj, że małymi krokami osiąga się wielkie cele. Zapraszamy na lekcję próbną!",
	list2: [
		{
			title: "Online - kurs intensywny grupowy",
			list: [
				"max. 5 osób",
				"24h",
				"5 tygodni",
				"Poziomy: A1, A2, B1, B2, C1, C2 ",
			],
		},
		{
			title: "Online - kurs językowy grupowy",
			list: [
				"max. 5 osób",
				"24h",
				"8 tygodni",
				"Poziomy: A1, A2, B1, B2, C1, C2 ",
			],
		},
		{
			title: "Online - kurs intensywny indywidualny",
			list: ["24h", "5 tygodni", "Poziomy: A1, A2, B1, B2, C1, C2 "],
		},
		{
			title: "Online - kurs językowy indywidualny",
			list: ["24h", "8 tygodni", "Poziomy: A1, A2, B1, B2, C1, C2 "],
		},
	],
};

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
