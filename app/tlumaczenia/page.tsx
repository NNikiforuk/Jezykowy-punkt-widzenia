import { FaMedal, FaCheck } from "react-icons/fa";
import { translations } from "@/data/translations/translations";

const Translations = () => {
	return (
		<div className="translations">
			<h1>{translations.title}</h1>
			<div className="translations_container">
				{translations.list1.map((l) => (
					<div className="translations_desc" key={l}>
						<div className="translations_icon">
							<FaMedal />
						</div>
						<div className="translations_text">{l}</div>
					</div>
				))}
				<div className="translations_list">
					<div className="translations_list_title">
						{translations.list2.title}
					</div>
					<ul className="translations_list">
						{translations.list2.list.map((l) => (
							<li key={l}>
								<div className="translations_item_icon">
									<FaCheck />
								</div>
								<div className="translations_item_text">{l}</div>
							</li>
						))}
					</ul>
				</div>
				<div className="ps">{translations.text1}</div>
			</div>
		</div>
	);
};

export default Translations;
