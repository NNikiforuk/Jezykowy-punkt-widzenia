import { FaMedal, FaCheck } from "react-icons/fa";
import Image from "next/image";
import { links } from "@/data/links";

const Translations = () => {
	return (
		<main className="translations">
			<div className="translations_img">
				<Image
					src={links[2].img}
					alt={links[2].alt}
					priority={true}
					width={0}
					height={0}
					sizes="100vw"
					style={{ width: "100%", height: "auto" }}
				/>
			</div>
			<div className="translations_container">
				<div className="list">
					<div className="translations_desc">
						<div className="translations_icon">
							<FaMedal />
						</div>
						<div className="translations_text">
							Wykonujemy tłumaczenia pisemne zwykłe, nieopatrzone pieczęcią
						</div>
					</div>
					<div className="translations_desc">
						<div className="translations_icon">
							<FaMedal />
						</div>

						<div className="translations_text">
							Gwarantujemy rzetelne, dokładne i obiektywne tłumaczenia z
							zasadami zachowania wierności tłumaczonego tekstu
						</div>
					</div>
				</div>

				<div className="translations_list">
					<div className="translations_list_title">Oferujemy tłumaczenie:</div>
					<ul className="list">
						<li className="list_item">listów, artykułów</li>
						<li className="list_item">
							instrukcji obsługi urządzeń lub sprzętu
						</li>
						<li className="list_item">broszur, ulotek, katalogów</li>
						<li className="list_item">stron internetowych</li>
						<li className="list_item">publikacji naukowych</li>
						<li className="list_item">
							opisów produktów, tekstów biznesowych i marketingowych
						</li>
					</ul>
				</div>
				<div className="ps">Skontaktuj się w celu uzgodnienia szczegółów!</div>
			</div>
		</main>
	);
};

export default Translations;
