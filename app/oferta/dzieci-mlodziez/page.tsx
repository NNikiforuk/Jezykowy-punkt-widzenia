import OfferLayout from "../OfferLayout";
import { offer } from "@/data/offer/offer";
import { advantages } from "@/data/offer/offer";

const Children = () => {
	return (
		<OfferLayout
			name={offer[3].name}
			descTitle={offer[3].descTitle}
			src={offer[1].src}
			alt={offer[3].alt}
			text1={offer[3].text1}
			list3={advantages.list3}
		/>
	);
};

export default Children;
