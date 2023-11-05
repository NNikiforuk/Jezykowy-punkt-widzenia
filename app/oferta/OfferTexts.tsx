import Image from "next/image";
import { OfferProps } from "@/data/offer/offer";
import { advantages } from "@/data/offer/offer";

const OfferTexts = ({ name, descTitle, src, alt, text1 }: OfferProps) => {
	return (
		<>
			<h2>{name}</h2>
			<p>{descTitle}</p>
			<div className="offer_description">
				<div className="main_description">
					<div className="main_img">
						<Image
							priority={false}
							src={src}
							alt={alt}
							width={200}
							className="img"
						/>
					</div>
					<div className="desc">
						<div>{text1}</div>
						<div className="advantages_desktop">
							<p className="bold left">{advantages.text1}</p>
							<ul className="desc_list ul">
								{advantages.list.map((el) => (
									<li key={el}>{el}</li>
								))}
							</ul>
						</div>
						<p className="bold underline extraRoom boldedP_desktop">
							{advantages.text2}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default OfferTexts;
