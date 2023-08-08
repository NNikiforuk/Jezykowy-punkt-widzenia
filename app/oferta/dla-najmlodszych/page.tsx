import Image from "next/image";
import Info from "@/components/Info";
import { text } from "../../../data/oferta_youngest";
import Packages from "@/components/Packages";

const Youngest = () => {
	return (
		<div className="youngest">
			<h1>Oferta dla najmłodszych</h1>
			<div className="youngest_desc">
				<div className="desc_element">
					<Image
						src="/assets/images/offer-child.png"
						alt="child"
						width={80}
						height={80}
						className="img"
						priority={false}
					/>
					<p className="text">Zajęcia indywidualne lub grupowe do 4 osób</p>
				</div>
				<div className="desc_element">
					<Image
						src="/assets/images/offer-kids.png"
						alt="group of children"
						width={120}
						height={80}
						className="img"
						priority={false}
					/>
					<p className="text">Różne grupy wiekowe</p>
				</div>
				<div className="desc_element">
					<Image
						src="/assets/images/offer-play.png"
						alt="children playing"
						width={100}
						height={90}
						className="img"
						priority={false}
					/>
					<p className="text">Nauka poprzez zabawę</p>
				</div>
			</div>
			<Packages />
			<Info text={text} text2={""} />
			<p>
				Wybór części gramatycznej zostanie dobrany po rozmowie z kursanetem.
				<br />
				<br />
				<span className="bold">
					Napisz do nas, a wyślemy Ci nasz test językowy. Po jego wypełnieniu
					przedstawimy Ci naszą ofertę i razem dobierzemy pakiet godzinowy dla
					Twojego dziecka.
				</span>
			</p>
		</div>
	);
};

export default Youngest;
