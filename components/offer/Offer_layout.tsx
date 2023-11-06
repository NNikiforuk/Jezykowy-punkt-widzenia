import Advantages from "./Advantages";
import Main_desc from "./Main_desc";
import Offer_img from "./Offer_img";
import { StaticImageData } from "next/image";

interface OfferLayoutProps {
	alt: string;
	title: string;
	titleDesc?: string;
	src: StaticImageData;
	text1: string;
	list3: {
		title: string;
		list: string[];
	}[];
	widerIMG?: boolean;
	addText: boolean;
	company: boolean;
}

const Offer_layout = ({
	title,
	titleDesc,
	src,
	alt,
	text1,
	widerIMG,
	addText,
	company,
}: OfferLayoutProps) => {
	return (
		<div className="offer">
			<div className="offer_wrapper">
				<h2>{title}</h2>
				{titleDesc && <p>{titleDesc}</p>}

				<div className="offer_description">
					<div className="main_description">
						<Offer_img
							priority={false}
							src={src}
							alt={alt}
							width={200}
							className={`img ${widerIMG && "companyIMG"}`}
						/>

						<Main_desc mainDesc={text1} company={company} addText={addText} />
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default Offer_layout;
