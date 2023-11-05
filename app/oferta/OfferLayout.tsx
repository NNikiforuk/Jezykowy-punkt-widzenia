import { advantages } from "@/data/offer/offer";
import OfferTexts from "./OfferTexts";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { links } from "@/data/links";

interface OfferLayoutProps {
	alt: string;
	name: string;
	descTitle?: string;
	src: StaticImageData;
	text1: string;
	list?: {
		title: string;
		list: string[];
	}[];
	list2?: string[];
	list3: {
		title: string;
		list: string[];
	}[];
}

const OfferLayout = ({
	name,
	descTitle,
	src,
	alt,
	text1,
	list,
	list2,
}: OfferLayoutProps) => {
	return (
		<div className="offer">
			<div className="offer_img">
				<Image
					src={links[0].img}
					alt={links[0].alt}
					priority={true}
					width={0}
					height={0}
					sizes="100vw"
					style={{ width: "100%", height: "auto" }}
				/>
			</div>
			<div className="nav">
				<ul>
					{links[0].sublinks?.sublink?.map((link) => (
						<li key={link.title}>
							<Link className="nav_item" href={link.href}>
								{link.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className="offer_wrapper">
				<OfferTexts
					name={name}
					descTitle={descTitle}
					src={src}
					alt={alt}
					text1={text1}
					list={list}
					list2={list2}
				/>
				<div className="advantages">
					<p className="bold left">{advantages.text1}</p>
					<ul className="desc_list ul">
						{advantages.list.map((el) => (
							<li key={el}>{el}</li>
						))}
					</ul>
				</div>
				<p className="bold underline extraRoom">{advantages.text2}</p>
				<div className="offers">
					{list?.map((el) => (
						<div className="box" key={el.title}>
							<p className="bold left">{el.title}</p>
							<ul className="left ul">
								{el.list.map((l) => (
									<li key={l}>{l}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default OfferLayout;
