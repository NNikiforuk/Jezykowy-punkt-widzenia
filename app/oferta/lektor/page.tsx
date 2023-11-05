import OfferLayout from "../../../components/offer/Offer_layout";
import { offer } from "@/data/offer/offer";
import { advantages } from "@/data/offer/offer";

const Lector = () => {
	return (
		<OfferLayout
			name={offer[1].name}
			descTitle={offer[1].descTitle}
			src={offer[1].src}
			alt={offer[1].alt}
			text1={offer[1].text1}
			list={advantages.list3}
			list3={[]}
		/>
	);
};

export default Lector;
