import Subpage_banner from "@/components/Subpage_banner";
import Offer_navbar from "@/components/offer/Offer_navbar";
import { links } from "@/data/links";
import { offer } from "@/data/offer/offer";
import Offer_options from "@/components/offer/Offer_options";
import Advantages from "@/components/offer/Advantages";
import Offer_img from "@/components/offer/Offer_img";
import Reminder from "@/components/offer/Reminder";

const Company = () => {
	return (
		<main>
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

			<div className="offer">
				<div className="title_wrapper">
					<h2 className="no_desc">{offer[2].title}</h2>
				</div>

				<Offer_img
					priority={false}
					src={offer[2].src}
					alt={offer[2].alt}
					width={200}
				/>

				<div className="offer_desc">{offer[2].text1}</div>

				<Advantages />
				<Reminder />

				<Offer_options />
			</div>
		</main>
	);
};

export default Company;
