import OfferLayout from "../../../components/offer/Offer_layout";
import { offer } from "@/data/offer/offer";
import { advantages } from "@/data/offer/offer";

const Company = () => {
	return (
		<OfferLayout
			name={offer[2].name}
			src={offer[2].src}
			alt={offer[2].alt}
			text1={offer[2].text1}
			list2={offer[2].list2}
			list={advantages.list3}
			widerIMG={true}
			list3={[]}
		/>
	);
};

export default Company;
