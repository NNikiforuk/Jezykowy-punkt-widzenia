export const links = [
	{
		name: "Oferta",
		submenu: true,
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
	},
	{
		name: "Cennik",
		submenu: false,
		link: "/cennik",
	},
	{
		name: "Tłumaczenia",
		submenu: false,
		link: "/tlumaczenia",
	},
	{
		name: "Lektorzy",
		submenu: false,
		link: "/lektorzy",
	},
	{
		name: "Materiały",
		submenu: true,
		sublinks: [
			{
				Head: "j. niemiecki",
				sublink: [
					{ name: "A1/A2", link: "/materialy/niemiecki/A1A2" },
					{ name: "B1/B2", link: "/materialy/niemiecki/B1B2" },
				],
			},
		],
	},
];
