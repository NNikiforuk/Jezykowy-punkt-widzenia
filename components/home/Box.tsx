import Image from "next/image";
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
					/>
				</div>
				<div className="desc">
					{navbar_links[0].sublinks?.sublink?.map((el) => (
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
					<Image
						src={navbar_links[1].src}
						alt={navbar_links[1].alt}
						width={583}
					/>
				</div>
				<div className="desc">
					<div className="title">{navbar_links[1].sublinks?.Head}:</div>
					{navbar_links[1].sublinks?.sublink?.map((el) => (
						<Link key={el.title} href={el.href} className="link">
							{el.title}
						</Link>
					))}
				</div>
			</div>
			<div className="box_container">
				<div className="box_img">
					<Image src={feedbackIMG} alt="coffee" width={583} />
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
