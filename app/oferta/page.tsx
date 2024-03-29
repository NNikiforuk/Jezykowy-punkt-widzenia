import Subpage_banner from "@/components/Subpage_banner";
import Advantages from "@/components/offer/Advantages";
import Offer_img from "@/components/offer/Offer_img";
import Offer_navbar from "@/components/offer/Offer_navbar";
import Reminder from "@/components/offer/Reminder";
import { links } from "@/data/links";
import { offer } from "@/data/offer/offer";
import img2 from "../../public/assets/images/offer/native2.jpg";

const Offer = () => {
	return (
		<main>
			<Subpage_banner src={links[0].img} srcSmaller={links[0].imgSmaller} alt={links[0].alt} />
			<Offer_navbar links={links[0].sublinks?.sublink} />

			<div className="offer">
				<div className="title_wrapper">
					<h2>{offer[0].title}</h2>
					<div className="title_desc">{offer[0].titleDesc}</div>
				</div>

				<div className="wrapper">
					<Offer_img src={offer[0].src} alt={offer[0].alt} upImg={true} />

					<div className="container">
						<div className="offer_desc">{offer[0].text1}</div>
						<Reminder mobile={false} />
					</div>
				</div>

				<div className="desktop_image">
					<div className="desktop_image_wrapper">
						<Advantages mobile={false} />
					</div>

					<Offer_img src={img2} alt="kobieta przy laptopie" upImg={false} />
				</div>

				<Advantages mobile={true} />

				<Reminder mobile={true} />

				<div className="offers">
					{offer[0].list?.map((el) => (
						<div className="box" key={el.title}>
							<div className="title">{el.title}</div>
							<ul className="offers_list">
								{el.list.map((l) => (
									<li key={l}>{l}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</main>
	);
};

export default Offer;
