import Image from "next/legacy/image";
import Link from "next/link";
import { navbar_links } from "@/data/navbar/navbar_links";
import pricesIMG from "../../public/assets/images/landing_page/pricelist.jpg";
import translationsIMG from "../../public/assets/images/landing_page/translations.jpg";
import feedbackIMG from "../../public/assets/images/landing_page/feedback.jpg";
import contactIMG from "../../public/assets/images/landing_page/contact.jpg";

const Box = () => {
	return (
		<div className="wrapper">
			<div className="box_container">
				<div className="box_img">
					<Image
						src={navbar_links[0].src}
						alt={navbar_links[0].alt}
						width={583}
						height={167}
					/>
				</div>
			</div>
			<div className="box_container">
				<div className="box_img">
					<Image src={pricesIMG} alt="kalkulator" width={583} height={167} />
				</div>
			</div>
			<div className="box_container">
				<div className="box_img">
					<Image src={translationsIMG} alt="książki" width={583} height={167} />
				</div>
			</div>
			{/* <div className="box_container">
				<div className="box_img">
					<Image src={translationsIMG} alt="lektorzy" width={583}
						height={167} />
				</div>
			</div> */}
			<div className="box_container">
				<div className="box_img">
					<Image
						src={navbar_links[1].src}
						alt={navbar_links[1].alt}
						width={583}
						height={167}
					/>
				</div>
			</div>
			<div className="box_container">
				<div className="box_img">
					<Image src={feedbackIMG} alt="kawa" width={583} height={167} />
				</div>
			</div>
			<div className="box_container">
				<div className="box_img">
					<Image src={contactIMG} alt="książka" width={583} height={167} />
				</div>
			</div>
		</div>
	);
};

export default Box;
