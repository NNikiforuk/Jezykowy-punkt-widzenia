import Subpage_banner from "@/components/Subpage_banner";
import Offer_navbar from "@/components/offer/Offer_navbar";
import { links } from "@/data/links";
import { offer } from "@/data/offer/offer";
import Offer_options from "@/components/offer/Offer_options";
import Offer_img from "@/components/offer/Offer_img";
import Advantages from "@/components/offer/Advantages";
import Reminder from "@/components/offer/Reminder";

const Lector = () => {
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
					<h2>{offer[1].title}</h2>
					<div className="title_desc">{offer[1].titleDesc}</div>
				</div>

				<div className="wrapper">
					<Offer_img
						priority={false}
						src={offer[1].src}
						alt={offer[1].alt}
						width={200}
					/>
					<div className="container">
						<div className="offer_desc">{offer[1].text1}</div>
						<Reminder mobile={false} />
					</div>
				</div>

				<Advantages />
				<Reminder mobile={true} />

				<Offer_options />
			</div>
		</main>
	);
};

export default Lector;
