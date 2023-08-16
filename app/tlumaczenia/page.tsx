import { FaMedal, FaCheck } from "react-icons/fa";

const Translations = () => {
	return (
		<div className="translations">
			<h1>Tłumaczenia pisemne</h1>
			<div className="translations_container">
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
						Gwarantujemy rzetelne, dokładne i obiektywne tłumaczenia z zasadami
						zachowania wierności tłumaczonego tekstu
					</div>
				</div>
				<div className="translations_list">
					<div className="translations_list_title">Oferujemy tłumaczenie:</div>
					<ul className="translations_list">
						<li>
							<div className="translations_item_icon">
								<FaCheck />
							</div>
							<div className="translations_item_text">tekstów, książek</div>
						</li>
						<li>
							<div className="translations_item_icon">
								<FaCheck />
							</div>
							<div className="translations_item_text">listów, artykułów</div>
						</li>
						<li>
							<div className="translations_item_icon">
								<FaCheck />
							</div>
							<div className="translations_item_text">
								instrukcji obsługi urządzeń lub sprzętu
							</div>
						</li>
						<li>
							<div className="translations_item_icon">
								<FaCheck />
							</div>
							<div className="translations_item_text">
								broszu, ulotek, katalogów
							</div>
						</li>
						<li>
							<div className="translations_item_icon">
								<FaCheck />
							</div>
							<div className="translations_item_text">stron internetowych</div>
						</li>
						<li>
							<div className="translations_item_icon">
								<FaCheck />
							</div>
							<div className="translations_item_text">publikacji naukowych</div>
						</li>
						<li>
							<div className="translations_item_icon">
								<FaCheck />
							</div>
							<div className="translations_item_text">
								opisów produktów, tekstów biznesowych i marketingowych
							</div>
						</li>
					</ul>
				</div>
				<div className="ps">
					Skontaktuj się w celu uzgodnienia szczegółów!
				</div>
			</div>
		</div>
	);
};

export default Translations;
