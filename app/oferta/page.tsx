import { links } from "@/data/links";
import { offer } from "@/data/offer/offer";
import { advantages } from "@/data/offer/offer";
import OfferWrapper from "./OfferWrapper";
import Image from "next/image";

const Offer = () => {
	return (
		<div className="offer">
			<div className="offer_img">
				<Image
					src={links[0].img}
					alt={links[0].alt}
					priority={true}
					width={0}
					height={0}
					sizes="100vw"
					style={{ width: "100%", height: "auto" }}
				/>
			</div>

			<div className="offer_wrapper">
				<OfferWrapper
					name={offer[0].name}
					descTitle={offer[0].descTitle}
					src={offer[0].src}
					alt={offer[0].alt}
					text1={offer[0].text1}
					list={offer[0].list}
					list2={offer[0].list2}
				/>
				<div className="advantages">
					<p className="bold left">{advantages.text1}</p>
					<ul className="desc_list ul">
						{advantages.list.map((el) => (
							<li key={el}>{el}</li>
						))}
					</ul>
				</div>
				<p className="bold underline extraRoom">{advantages.text2}</p>
				<div className="offers">
					{offer[0].list?.map((el) => (
						<div className="box" key={el.title}>
							<p className="bold left">{el.title}</p>
							<ul className="left ul">
								{el.list.map((l) => (
									<li key={l}>{l}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Offer;
