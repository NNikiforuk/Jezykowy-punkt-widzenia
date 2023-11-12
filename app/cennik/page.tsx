import Subpage_banner from "@/components/Subpage_banner";
import { links } from "@/data/links";
import Option from "@/components/prices/Option";
import womanIMG from "../../public/assets/images/prices/woman.png";
import manIMG from "../../public/assets/images/prices/man.png";

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
				/>
			</div>
		</main>
	);
};

export default Prices;
