import Image from "next/image";
import { OfferProps } from "@/data/offer/offer";

const OfferWrapper = ({
	name,
	descTitle,
	src,
	alt,
	text1,
}: OfferProps) => {
	return (
		<>
			<h2>{name}</h2>
			<p>{descTitle}</p>
			<div className="offer_description">
				<div className="main_description">
					<div className="main_img">
						<Image
							priority={true}
							src={src}
							alt={alt}
							width={200}
							className="img"
						/>
					</div>
					<div className="desc">{text1}</div>
				</div>
			</div>
		</>
	);
};

export default OfferWrapper;
