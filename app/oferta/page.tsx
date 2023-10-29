import { links } from "@/data/links";
import { offer } from "@/data/offer/offer";
import { advantages } from "@/data/offer/offer";
import Img from "@/components/home/Img";
import OfferWrapper from "./OfferWrapper";

const Offer = () => {
	return (
		<div className="offer">
			<div className="offer_img">
				<Img
					href={links[0].href}
					img={links[0].img}
					alt={links[0].alt}
					name={""}
					priority={false}
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

				<p className="left bold marginTop">{advantages.text1}</p>
				<ul className="ul left">
					{advantages.list.map((el) => (
						<li key={el}>{el}</li>
					))}
				</ul>
				<p className="bold">{advantages.text2} </p>
				<div className="boxes">
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
