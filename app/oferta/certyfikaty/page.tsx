import Subpage_banner from "@/components/Subpage_banner";
import { offer } from "@/data/offer/offer";
import { links } from "@/data/links";
import Offer_navbar from "@/components/offer/Offer_navbar";
import Offer_options from "@/components/offer/Offer_options";
import Advantages from "@/components/offer/Advantages";
import Offer_img from "@/components/offer/Offer_img";
import Reminder from "@/components/offer/Reminder";
import img2 from "../../../public/assets/images/offer/certificate2.jpg";

const Children = () => {
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
					<h2 className="no_desc">{offer[4].title}</h2>
				</div>

				<div className="wrapper">
					<Offer_img src={offer[4].src} alt={offer[4].alt} upImg={true} />
					<div className="container">
						<div className="offer_desc">{offer[4].text1}</div>
						<Reminder mobile={false} />
					</div>
				</div>

				<div className="desktop_image">
					<div className="desktop_image_wrapper">
						<Advantages mobile={false} />
					</div>

					<Offer_img src={img2} alt="dyplom" upImg={false} />
				</div>

				<Advantages mobile={true} />
				<Reminder mobile={true} />

				<Offer_options />
			</div>
		</main>
	);
};

export default Children;
