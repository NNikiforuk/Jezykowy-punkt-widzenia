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
					<h2>{offer[0].title}</h2>
					<div className="title_desc">{offer[0].titleDesc}</div>
				</div>

				<div className="wrapper">
					<Offer_img
						priority={false}
						src={offer[0].src}
						alt={offer[0].alt}
						width={200}
					/>

					<div className="container">
						<div className="offer_desc">{offer[0].text1}</div>
						<Reminder hide={false} />
					</div>
				</div>

				<Advantages />

				<Reminder hide={true} />

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
