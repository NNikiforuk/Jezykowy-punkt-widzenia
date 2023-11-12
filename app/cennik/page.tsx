import Subpage_banner from "@/components/Subpage_banner";
import { links } from "@/data/links";
import Option from "@/components/prices/Option";
import womanIMG from "../../public/assets/images/prices/woman.png";
import manIMG from "../../public/assets/images/prices/man.png";
import kidIMG from "../../public/assets/images/prices/kid.png";

const Prices = () => {
	return (
		<main>
			<Subpage_banner src={links[1].img} alt={links[1].alt} />
			<div className="prices">
				<Option
					title="Standardowy"
					src={womanIMG}
					alt="woman"
					length="4 miesiące"
					lessons="24 (36h) spotkania x 1,5 h / 2x w tygodniu"
					max={4}
					standardPrices={true}
					hours92130={true}
					highlight={false}
					company={false}
					lectorOnly={false}
					individual={false}
					children={false}
				/>

				<Option
					title="Intensywny"
					src={manIMG}
					alt="man"
					length="2 miesiące, kursy wakacyjne"
					lessons="24 (36h) spotkania x 1,5 h / 4x w tygodniu"
					max={4}
					standardPrices={true}
					hours92130={true}
					highlight={true}
					company={false}
					lectorOnly={false}
					individual={false}
					children={false}
				/>

				<Option
					title="Indywidualny"
					src={kidIMG}
					alt="kid"
					length="Ustalane indywidualnie"
					lessons="Ustalane indywidualnie spotkania 60 min"
					max={1}
					standardPrices={false}
					hours92130={false}
					highlight={false}
					company={false}
					lectorOnly={false}
					individual={false}
					children={false}
				/>

				<Option
					title="Kurs branżowy"
					src={womanIMG}
					alt="woman"
					length="3/4 miesięce"
					lessons="24 (36h) spotkania x 1,5 h / 2x w tygodniu"
					max={6}
					standardPrices={false}
					hours92130={true}
					highlight={false}
					company={true}
					lectorOnly={true}
					individual={false}
					children={false}
				/>

				<Option
					title="Dzieci i młodzież"
					src={kidIMG}
					alt="kid"
					length="3/4 miesięce, kursy wakacyjne"
					lessons="24 (36h) spotkania x 1,5 h / 2x w tygodniu"
					max={4}
					standardPrices={false}
					hours92130={true}
					highlight={false}
					company={false}
					lectorOnly={false}
					individual={false}
					children={true}
				/>
			</div>
		</main>
	);
};

export default Prices;
