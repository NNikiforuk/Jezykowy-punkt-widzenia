import Subpage_banner from "@/components/Subpage_banner";
import Offer_navbar from "@/components/offer/Offer_navbar";
import { links } from "@/data/links";
import OfferLayout from "../../../components/offer/Offer_layout";
import { offer } from "@/data/offer/offer";
import { advantages } from "@/data/offer/offer";
import Reminder from "@/components/offer/Reminder";
import Offer_options from "@/components/offer/Offer_options";

const Lector = () => {
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
				title={offer[1].title}
				titleDesc={offer[1].titleDesc}
				src={offer[1].src}
				alt={offer[1].alt}
				text1={offer[1].text1}
				list3={[]}
				addText={false} company={false}			/>
			<Reminder />
			<Offer_options list={advantages.list3} />
		</>
	);
};

export default Lector;
