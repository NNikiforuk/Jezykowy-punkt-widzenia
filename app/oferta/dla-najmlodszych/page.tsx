import Image from "next/legacy/image";
import Packages from "@/components/offer/Packages";
import { offer } from "@/data/offer/offer";

const Youngest = () => {
	return (
		<div className="youngest">
			<h1>{offer[0].name}</h1>
			<div className="youngest_desc">
				{offer[0].imgs?.map((img) => (
					<div className="desc_element" key={img.alt}>
						<Image
							src={img.src}
							alt={img.alt}
							width={img.alt === "grupa dzieci" ? "130" : "80"}
							height={img.alt === "grupa dzieci" ? "80" : "100"}
							className="img"
							priority={false}
						/>
						<p className="text">{img.title}</p>
					</div>
				))}
			</div>
			<Packages />

			<p className="normal_text">{offer[0].desc.text1}</p>
			<p className="bold normal_text">{offer[0].desc.text2}</p>
		</div>
	);
};

export default Youngest;
