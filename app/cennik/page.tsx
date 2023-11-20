import Subpage_banner from "@/components/Subpage_banner";
import { links } from "@/data/links";
import Option from "@/components/prices/Option";

const Prices = () => {
	return (
		<main>
			<Subpage_banner src={links[1].img} alt={links[1].alt} />
			<div className="prices">
				<Option
					title="Standardowy"
					ranges={[
						{
							price: "2 340 zł ",
							group: "/ grupa 2-osobowa",
						},
						{
							price: "1 584 zł ",
							group: "/ grupa 3-osobowa",
						},
						{
							price: "1 188 zł ",
							group: "/ grupa 4-osobowa",
						},
					]}
					list={[
						"A1 - C2",
						"4 miesiące",
						"native speaker lub",
						"wykwalifikowany lektor",
						"24 spotkania x 1,5h",
						"2x w tygodniu",
						"max. 4 osoby w grupie",
						"online",
						"godziny zajęć:",
					]}
					hours={[
						"9.00 – 10.30",
						"11.00 – 12.30",
						"13.00 – 14.30",
						"18.00 – 19.30",
						"20.00 – 21.30",
					]}
					highlight={false}
				/>

				<Option
					title="Intensywny"
					ranges={[
						{
							price: "2 340 zł ",
							group: "/ grupa 2-osobowa",
						},
						{
							price: "1 584 zł ",
							group: "/ grupa 3-osobowa",
						},
						{
							price: "1 188 zł ",
							group: "/ grupa 4-osobowa",
						},
					]}
					list={[
						"A1 - C2",
						"2 miesiące",
						"kursy wakacyjne",
						"native speaker lub",
						"wykwalifikowany lektor",
						"24 spotkania x 1,5h",
						"4x w tygodniu",
						"max. 4 osoby w grupie",
						"online",
						"godziny zajęć:",
					]}
					hours={[
						"9.00 – 10.30",
						"11.00 – 12.30",
						"13.00 – 14.30",
						"18.00 – 19.30",
						"20.00 – 21.30",
					]}
					highlight={true}
				/>
				<Option
					title="Indywidualny"
					ranges={[
						{
							price: "130 zł ",
							group: "/ 60 min",
						},
					]}
					list={[
						"A1 - C2",
						"native speaker lub",
						"wykwalifikowany lektor",
						"spotkania x 60 min",
						"max. 1 osoba",
						"online",
						"szczegóły do ustalenia",
					]}
					highlight={false}
				/>
				<Option
					title="Kurs branżowy"
					ranges={[
						{
							price: "3 840 zł ",
							group: "/ grupa 2-osobowa",
						},
						{
							price: "1 944 zł ",
							group: "/ grupa 3-osobowa",
						},
						{
							price: "1 440 zł ",
							group: "/ grupa 4-osobowa",
						},
						{
							price: "1 152 zł ",
							group: "/ grupa 5-osobowa",
						},
						{
							price: "984 zł ",
							group: "/ grupa 6-osobowa",
						},
					]}
					list={[
						"B2 - C2",
						"3/4 miesiące",
						"wykwalifikowany lektor",
						"24 spotkania x 1,5h",
						"2x w tygodniu",
						"max. 6 osób w grupie",
						"online",
						"godziny zajęć:",
					]}
					hours={[
						"9.00 – 10.30",
						"11.00 – 12.30",
						"13.00 – 14.30",
						"18.00 – 19.30",
						"20.00 – 21.30",
					]}
					highlight={false}
				/>

				<Option
					title="Dzieci i młodzież"
					ranges={[
						{
							price: "1 800 zł ",
							group: "/ grupa 2-osobowa",
						},
						{
							price: "1 224 zł ",
							group: "/ grupa 3-osobowa",
						},
						{
							price: "900 zł ",
							group: "/ grupa 4-osobowa",
						},
					]}
					list={[
						"A1 - C2",
						"3/4 miesiące",
						"kursy wakacyjne",
						"native speaker lub",
						"wykwalifikowany lektor",
						"24 spotkania x 1,5h",
						"2x w tygodniu",
						"max. 4 osób w grupie",
						"online",
						"godziny zajęć:",
					]}
					hours={[
						"9.00 – 10.30",
						"11.00 – 12.30",
						"13.00 – 14.30",
						"18.00 – 19.30",
					]}
					highlight={false}
				/>
				<Option
					title="Przygotowanie do certyfikatu"
					ranges={[
						{
							price: "3 840 zł ",
							group: "/ grupa 2-osobowa",
						},
						{
							price: "1 944 zł ",
							group: "/ grupa 3-osobowa",
						},
						{
							price: "1 440 zł ",
							group: "/ grupa 4-osobowa",
						},
						{
							price: "1 152 zł ",
							group: "/ grupa 5-osobowa",
						},
						{
							price: "984 zł ",
							group: "/ grupa 6-osobowa",
						},
					]}
					list={[
						"A1 - C2",
						"4/5 miesięcy",
						"wykwalifikowany lektor",
						"24 spotkania x 1,5h",
						"2x w tygodniu",
						"max. 6 osób w grupie",
						"online",
						"godziny zajęć:",
					]}
					hours={[
						"9.00 – 10.30",
						"11.00 – 12.30",
						"13.00 – 14.30",
						"18.00 – 19.30",
						"20.00 – 21.30",
					]}
					highlight={false}
				/>
			</div>
		</main>
	);
};

export default Prices;
