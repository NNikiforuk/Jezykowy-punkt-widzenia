import { useState } from "react";
import {
	links_offer,
	links_materials,
	Sublink,
	Sublinks,
	OfferSection,
	SectionMat,
} from "./MyLinks";

interface Props {
	link: OfferSection | SectionMat;
}

export const MyLinks = ({ link }: Props) => {
	const [showingDropdown, setShowingDropdown] = useState<boolean>(false);

	return (
		<div>
			<div className="navlinks_desktop">
				<div
					className="mainlink_title"
					onMouseEnter={() => setShowingDropdown(true)}
					onMouseLeave={() => setShowingDropdown(false)}
				>
					{link.name}
				</div>
				{showingDropdown && (
					<div
						className="list_container"
						onMouseEnter={() => setShowingDropdown(true)}
						onMouseLeave={() => setShowingDropdown(false)}
					>
						<div className="arrow">
							<div className="up"></div>
						</div>

						<div className="list_container-sec">
							{typeof link.sublinks === "object" && "Head" in link.sublinks && (
								<div>{link.sublinks.Head}</div>
							)}
							<ul className="mainlink_list">
								{link.sublinks.sublink.map((el: Sublink) => (
									<li key={el.name} className="item">
										{el.name}
									</li>
								))}
							</ul>
						</div>
					</div>
				)}
			</div>
			{/* Mobile */}
			<div className="navlinks_mobile">
				<div className="mainlink_title">{link.name}</div>
				{typeof link.sublinks === "object" && "Head" in link.sublinks && (
					<div>{link.sublinks.Head}</div>
				)}
				<ul>
					{link.sublinks.sublink.map((el: Sublink) => (
						<li key={el.name} className="item">
							{el.name}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
