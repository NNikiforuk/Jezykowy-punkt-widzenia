import { OfferProps, offer } from "@/data/offer/offer";
import Offer_title from "@/components/offer/Offer_title";
import Offer_img from "@/components/offer/Offer_img";
import Main_desc from "@/components/offer/Main_desc";

const Offer_img_desc = ({
	title,
	titleDesc,
	src,
	alt,
	text1,
	widerIMG,
	company,
}: OfferProps) => {
	return (
		<>
			<Offer_title title={title} titleDesc={titleDesc} />

			<div className="offer_description">
				<div className="main_description">
					<Offer_img
						priority={false}
						src={src}
						alt={alt}
						width={200}
						className={`img ${widerIMG && "companyIMG"}`}
					/>

					<Main_desc
						mainDesc={text1}
						company={company}
						companyList={offer[2].list2}
					/>
				</div>
			</div>
		</>
	);
};

export default Offer_img_desc;
