import Subpage_banner from "@/components/Subpage_banner";
import Offer_layout from "@/components/offer/Offer_layout";
import Offer_navbar from "@/components/offer/Offer_navbar";
import { links } from "@/data/links";
import { offer } from "@/data/offer/offer";

const Offer = () => {
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
			<Offer_layout
				title={offer[0].title}
				titleDesc={offer[0].titleDesc}
				src={offer[0].src}
				alt={offer[0].alt}
				text1={offer[0].text1}
				list3={[]}
				addText={true} company={false}			/>

			<div className="offers">
				{offer[0].list?.map((el) => (
					<div className="box" key={el.title}>
						<p className="title">{el.title}</p>
						<ul>
							{el.list.map((l) => (
								<li key={l}>{l}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</>
	);
};

export default Offer;
