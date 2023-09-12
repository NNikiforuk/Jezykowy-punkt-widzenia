interface TranslationsProps {
	title: string;
	list1: string[];
	list2: {
		title: string;
		list: string[];
	};
	text1: string;
}

export const translations: TranslationsProps = {
	title: "Tłumaczenia pisemne",
	list1: [
		"Wykonujemy tłumaczenia pisemne zwykłe, nieopatrzone pieczęcią",
		"Gwarantujemy rzetelne, dokładne i obiektywne tłumaczenia z zasadami zachowania wierności tłumaczonego tekstu",
	],
	list2: {
		title: "Oferujemy tłumaczenie:",
		list: [
			"tekstów, książek",
			"listów, artykułów",
			"instrukcji obsługi urządzeń lub sprzętu",
			"broszur, ulotek, katalogów",
			"stron internetowych",
			"publikacji naukowych",
			"opisów produktów, tekstów biznesowych i marketingowych",
		],
	},
	text1: "Skontaktuj się w celu uzgodnienia szczegółów!",
};
