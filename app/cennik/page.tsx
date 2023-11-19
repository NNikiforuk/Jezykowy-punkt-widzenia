import Subpage_banner from "@/components/Subpage_banner";
import { links } from "@/data/links";
import Options_desktop from "@/components/prices/Options_desktop";
import Options_mobile from "@/components/prices/Options_mobile";

const Prices = () => {
	return (
		<main>
			<Subpage_banner src={links[1].img} alt={links[1].alt} />
			<div className="prices">
				<Options_mobile />
				<Options_desktop />
			</div>
		</main>
	);
};

export default Prices;
