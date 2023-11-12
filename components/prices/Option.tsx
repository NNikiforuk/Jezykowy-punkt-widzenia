import React from "react";
import { FcCheckmark } from "react-icons/fc";
import Image, { StaticImageData } from "next/image";

interface Props {
	title: string;
	src: StaticImageData;
	alt: string;
	length: string;
	lessons: string;
	max: number;
	standardPrices: boolean;
}

const Hours92130 = () => {
	return (
		<div>
			<p className="desc">9.00 – 10.30</p>
			<p className="desc">11.00 – 12.30</p>
			<p className="desc">13.00 – 14.30</p>
			<p className="desc">18.00 – 19.30</p>
			<p className="desc">20.00 – 21.30</p>
		</div>
	);
};

const Standard_prices = () => {
	return (
		<div className="desc">
			<p>2-osobowa: 2 340</p>
			<p>3-osobowa: 1 584</p>
			<p>4-osobowa: 1 188</p>
		</div>
	);
};

const Option = ({
	title,
	src,
	alt,
	length,
	lessons,
	max,
	standardPrices,
}: Props) => {
	return (
		<div>
			<h2>{title}</h2>
			<div className="option_img">
				<Image src={src} alt={alt} width={128} className="img" />
			</div>
			<div className="options">
				<div className="option">
					<div className="row">
						<p className="title">DŁUGOŚĆ KURSU</p>
						<p className="desc">{length}</p>
					</div>
					<div className="row">
						<p className="title">POZIOM</p>
						<p className="desc">A1 - C2</p>
					</div>
					<div className="row">
						<p className="title">NAUCZYCIEL</p>
						<p className="desc">Native speaker lub wykwalifikowany lektor</p>
					</div>
					<div className="row">
						<p className="title">LICZBA LEKCJI W PAKIECIE</p>
						<p className="desc">{lessons}</p>
					</div>
					<div className="row">
						<p className="title">MAX. LICZBA OSÓB W GRUPIE</p>
						<p className="desc">{max}</p>
					</div>
					<div className="row">
						<p className="title">GODZINY ZAJĘĆ</p>
						<Hours92130 />
					</div>
					<div className="row">
						<p className="title">TRYB ZAJĘĆ</p>
						<p className="desc">Online</p>
					</div>
					<div className="row">
						<p className="title">RATY</p>
						<div>
							<FcCheckmark />
						</div>
					</div>
					<div className="row">
						<p className="title">RABAT</p>
						<div>
							<FcCheckmark />
						</div>
					</div>
					<div className="row total">
						<p className="title">CENA ZA OSOBĘ W GRUPIE [ZŁ]</p>
						{standardPrices ? <Standard_prices /> : null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Option;
