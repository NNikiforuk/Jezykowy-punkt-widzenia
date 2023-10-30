import OfferLayout from "./OfferLayout";
import { offer } from "@/data/offer/offer";

const Offer = () => {
	return (
		<OfferLayout
			name={offer[0].name}
			descTitle={offer[0].descTitle}
			src={offer[0].src}
			alt={offer[0].alt}
			text1={offer[0].text1}
			list={offer[0].list} list3={[]}		/>
	);
};

export default Offer;
