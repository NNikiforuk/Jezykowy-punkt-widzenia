import Subpage_banner from "@/components/Subpage_banner";
import OfferLayout from "../../../components/offer/Offer_layout";
import { offer } from "@/data/offer/offer";
import { advantages } from "@/data/offer/offer";
import { links } from "@/data/links";
import Offer_navbar from "@/components/offer/Offer_navbar";
import Offer_options from "@/components/offer/Offer_options";

const Children = () => {
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
				title={offer[4].title}
				src={offer[4].src}
				alt={offer[4].alt}
				text1={offer[4].text1}
				list3={advantages.list3}
				addText={true}
				company={false}
			/>
			<Offer_options list={advantages.list3} />
		</>
	);
};

export default Children;
