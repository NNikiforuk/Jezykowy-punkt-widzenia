import Image from "next/image";
import Link from "next/link";
import { offer, materials } from "@/data/navbar_links";
import pricesIMG from "../../public/assets/images/landing_page/pricelist.jpg";
import translationsIMG from "../../public/assets/images/landing_page/translations.jpg";
import feedbackIMG from "../../public/assets/images/landing_page/feedback.jpg";
import contactIMG from "../../public/assets/images/landing_page/contact.jpg";

const Box = () => {
	return (
		<div className="wrapper">
			<div className="box_container">
				<div className="box_img">
					<Image src={offer.src} alt={offer.alt} width={583} />
				</div>
				<div className="desc">
					{offer.desc.map((el) => (
						<Link key={el.title} href={el.href} className="link">
							{el.title}
						</Link>
					))}
				</div>
			</div>
			<div className="box_container">
				<div className="box_img">
					<Image src={pricesIMG} alt="calculator" width={583} />
				</div>
				<div className="desc">
					<Link href="/cennik" className="link">
						Zobacz
					</Link>
				</div>
			</div>
			<div className="box_container">
				<div className="box_img">
					<Image src={translationsIMG} alt="books" width={583} />
				</div>
				<div className="desc">
					<Link href="/tlumaczenia" className="link">
						Zobacz
					</Link>
				</div>
			</div>
			<div className="box_container">
				<div className="box_img">
					<Image src={translationsIMG} alt="teachers" width={583} />
				</div>
				<div className="desc">
					<Link href="/lektorzy" className="link">
						Zobacz
					</Link>
				</div>
			</div>
			<div className="box_container">
				<div className="box_img">
					<Image src={materials.src} alt={materials.alt} width={583} />
				</div>
				<div className="desc">
					<div className="title">{materials.sublinks.Head}:</div>
					{materials.sublinks.sublink.map((el) => (
						<Link key={el.name} href={el.link} className="link">
							{el.name}
						</Link>
					))}
				</div>
			</div>
			<div className="box_container">
				<div className="box_img">
					<Image src={feedbackIMG} alt="cofee" width={583} />
				</div>
				<div className="desc">
					<Link href="/opinie" className="link">
						Zobacz
					</Link>
				</div>
			</div>
			<div className="box_container">
				<div className="box_img">
					<Image src={contactIMG} alt="book" width={583} />
				</div>
				<div className="desc">
					<Link href="/kontakt" className="link">
						Zobacz
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Box;
