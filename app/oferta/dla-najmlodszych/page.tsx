import Image from "next/image";
import Packages from "@/components/offer/Packages";
import { offer } from "@/data/offer/offer";

const Youngest = () => {
	return (
		<div className="youngest">
			<h1>{offer[0].name}</h1>
			<div className="youngest_desc">
				{offer[0].imgs.map((img) => (
					<div className="desc_element">
						<Image
							src={img.src}
							alt={img.alt}
							width={img.alt === "group of children" ? "120" : "80"}
							height={90}
							className="img"
							priority={false}
						/>
						<p className="text">{img.title}</p>
					</div>
				))}
			</div>
			<Packages />

			<p className="normal_text">
				Wybór części gramatycznej zostanie dobrany po rozmowie z kursantem.
			</p>
			<p className="bold normal_text">
				Napisz do nas, a wyślemy Ci nasz test językowy. Po jego wypełnieniu
				przedstawimy Ci naszą ofertę i dobierzemy pakiet dla Twojego dziecka.
			</p>
		</div>
	);
};

export default Youngest;
