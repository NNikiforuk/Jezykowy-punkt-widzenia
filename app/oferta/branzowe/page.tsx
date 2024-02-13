import Subpage_banner from "@/components/Subpage_banner";
import Offer_navbar from "@/components/offer/Offer_navbar";
import { links } from "@/data/links";
import { offer } from "@/data/offer/offer";
import Offer_options from "@/components/offer/Offer_options";
import Advantages from "@/components/offer/Advantages";
import Offer_img from "@/components/offer/Offer_img";
import Reminder from "@/components/offer/Reminder";
import img2 from "../../../public/assets/images/offer/company2.jpg";

const Company = () => {
	return (
		<main>
			<Subpage_banner src={links[0].img} alt={links[0].alt} srcSmaller={links[0].imgSmaller} />
			<Offer_navbar links={links[0].sublinks?.sublink} />

			<div className="offer">
				<div className="title_wrapper">
					<h2 className="no_desc">{offer[2].title}</h2>
				</div>

				<div className="wrapper">
					<Offer_img src={offer[2].src} alt={offer[2].alt} upImg={true} />
					<div className="container">
						<div className="offer_desc">{offer[2].text1}</div>
						<Reminder mobile={false} />
					</div>
				</div>

				<div className="desktop_image">
					<div className="desktop_image_wrapper">
						<Advantages mobile={false} />
					</div>

					<Offer_img src={img2} alt="praca w biurze" upImg={false} />
				</div>

				<Advantages mobile={true} />
				<Reminder mobile={true} />

				<Offer_options />
			</div>
		</main>
	);
};

export default Company;
