interface Props {
	id: string;
	title: string;
	time?: string;
	text: string[];
}

interface PricesProps {
	name: string;
	desc: Props[];
}

export const prices: PricesProps[] = [
	{
		name: "A1 / A2",
		desc: [
			{
				id: "A1/A2/6h",
				title: "Pakiet 6h A1/A2",
				time: "60 min",
				text: [
					"1 osoba: 390 zł",
					"2 osoby: 330 zł",
					"3 osoby: 300 zł",
					"4 osoby: 270 zł",
				],
			},
			{
				id: "A1/A2/12h",
				title: "Pakiet 12h A1/A2",
				time: "60 min",
				text: [
					"1 osoba: 780 zł",
					"2 osoby: 660 zł",
					"3 osoby: 600 zł",
					"4 osoby: 540 zł",
				],
			},
			{
				id: "A1/A2/18h",
				title: "Pakiet 18h A1/A2",
				time: "60 min",
				text: [
					"1 osoba: 1170 zł",
					"2 osoby: 990 zł",
					"3 osoby: 900 zł",
					"4 osoby: 810 zł",
				],
			},
		],
	},
	{
		name: "B1 / B2",
		desc: [
			{
				id: "B1/B2/6h",
				title: "Pakiet 6h B1/B2",
				time: "60 min",
				text: [
					"1 osoba: 420 zł",
					"2 osoby: 360 zł",
					"3 osoby: 330 zł",
					"4 osoby: 300 zł",
				],
			},
			{
				id: "B1/B/12h",
				title: "Pakiet 12h B1/B2",
				time: "60 min",
				text: [
					"1 osoba: 840 zł",
					"2 osoby: 720 zł",
					"3 osoby: 660 zł",
					"4 osoby: 600 zł",
				],
			},
			{
				id: "B1/B2/18h",
				title: "Pakiet 18h B1/B2",
				time: "60 min",
				text: [
					"1 osoba: 1170 zł",
					"2 osoby: 990 zł",
					"3 osoby: 900 zł",
					"4 osoby: 810 zł",
				],
			},
		],
	},
	{
		name: "C1 / C2",
		desc: [
			{
				id: "C1/C2/6h",
				title: "Pakiet 6h C1/C2",
				time: "60 min",
				text: [
					"1 osoba: 720 zł",
					"2 osoby: 450 zł",
					"3 osoby: 420 zł",
					"4 osoby: 390 zł",
				],
			},
			{
				id: "C1/C2/12h",
				title: "Pakiet 12h C1/C2",
				time: "60 min",
				text: [
					"1 osoba: 1440 zł",
					"2 osoby: 900 zł",
					"3 osoby: 840 zł",
					"4 osoby: 780 zł",
				],
			},
			{
				id: "C1/C2/18h",
				title: "Pakiet 18h C1/C2",
				time: "60 min",
				text: [
					"1 osoba: 2160 zł",
					"2 osoby: 1350 zł",
					"3 osoby: 1260 zł",
					"4 osoby: 1170 zł",
				],
			},
		],
	},
	{
		name: "Inne",
		desc: [
			{
				id: "A1/A2id",
				title: "A1/A2",
				time: "45 zajęć x 60 min",
				text: [
					"1 osoba: 2925 zł",
					"2 osoby: 2475 zł",
					"3 osoby: 2250 zł",
					"4 osoby: 2025 zł",
				],
			},
			{
				id: "B1/B2id",
				title: "B1/B2",
				time: "40 zajęć x 60 min",
				text: [
					"1 osoba: 2800 zł",
					"2 osoby: 2400 zł",
					"3 osoby: 2200 zł",
					"4 osoby: 2000 zł",
				],
			},
			{
				id: "C1/C2id",
				title: "C1/C2",
				time: "38 zajęć x 60 min",
				text: [
					"1 osoba: 3420 zł",
					"2 osoby: 2850 zł",
					"3 osoby: 2660 zł",
					"4 osoby: 2470 zł",
				],
			},
		],
	},
	{
		name: "Gramatyka",
		desc: [
			{
				id: "gramatyka",
				title: "Gramatyka",
				time: "45 zajęć x 60 min",
				text: [
					"1 osoba: 3150 zł",
					"2 osoby: 2925 zł",
					"3 osoby: 2700 zł",
					"4 osoby: 2475 zł",
				],
			},
		],
	},
	{
		name: "Dla najmłodszych",
		desc: [
			{
				id: "children",
				title: "Dla najmłodszych",
				text: [
					"Cena do indywidualnego ustalenia w zależności od klasy i poziomu kursanta",
				],
			},
		],
	},
];

interface InfoProps {
	name: string;
	text: string;
}

export const info: InfoProps = {
	name: "Info",
	text: "Kursy odbywają się od poniedziałku do soboty. Możliwa płatność ratalna",
};
