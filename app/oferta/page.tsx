import Offer_layout from "@/components/offer/Offer_layout";
import { offer } from "@/data/offer/offer";

const Offer = () => {
	return (
		<Offer_layout
			title={offer[0].title}
			titleDesc={offer[0].titleDesc}
			src={offer[0].src}
			alt={offer[0].alt}
			text1={offer[0].text1}
			list={offer[0].list}
			list3={[]}
		/>
	);
};

export default Offer;
