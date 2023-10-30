import OfferLayout from "../OfferLayout";
import { offer } from "@/data/offer/offer";
import { advantages } from "@/data/offer/offer";

const Children = () => {
	return (
		<OfferLayout
			name={offer[4].name}
			src={offer[4].src}
			alt={offer[4].alt}
			text1={offer[4].text1}
			list3={advantages.list3}
		/>
	);
};

export default Children;
