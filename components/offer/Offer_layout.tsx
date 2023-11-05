import Offer_texts from "./Offer_img_desc";
import { StaticImageData } from "next/image";
import { links } from "@/data/links";
import Subpage_banner from "@/components/Subpage_banner";
import Offer_navbar from "@/components/offer/Offer_navbar";
import Advantages from "@/components/offer/Advantages";
import Reminder from "@/components/offer/Reminder";
import Offer_options from "@/components/offer/Offer_options";

interface OfferLayoutProps {
	alt: string;
	title: string;
	titleDesc?: string;
	src: StaticImageData;
	text1: string;
	list?: {
		title: string;
		list: string[];
	}[];
	list2?: string[];
	list3: {
		title: string;
		list: string[];
	}[];
	widerIMG?: boolean;
}

const Offer_layout = ({
	title,
	titleDesc,
	src,
	alt,
	text1,
	list,
	list2,
}: OfferLayoutProps) => {
	return (
		<div className="offer">
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

			<div className="offer_wrapper">
				<Offer_texts
					title={title}
					titleDesc={titleDesc}
					src={src}
					alt={alt}
					text1={text1}
					list={list}
					list2={list2}
					widerIMG={true}
					company={true}
				/>
				<Advantages />
				<Reminder />
				<Offer_options list={list} />
			</div>
		</div>
	);
};

export default Offer_layout;
