import Subpage_banner from "@/components/Subpage_banner";
import Offer_navbar from "@/components/offer/Offer_navbar";
import { links } from "@/data/links";
import OfferLayout from "../../../components/offer/Offer_layout";
import { offer } from "@/data/offer/offer";
import { advantages } from "@/data/offer/offer";

const Company = () => {
	return (
		<>
			<Subpage_banner
				src={links[0].img}
				alt={links[0].alt}
				priority={true}
				width={0}
				height={0}
				sizes="100vw"
				style={{ width: "100%", height: "auto" }}
			/>
			<Offer_navbar links={links[0].sublinks?.sublink} />
			<OfferLayout
				title={offer[2].title}
				src={offer[2].src}
				alt={offer[2].alt}
				text1={offer[2].text1}
				list3={advantages.list3}
				widerIMG={true}
				addText={false}
				company={true}
			/>
		</>
	);
};

export default Company;
