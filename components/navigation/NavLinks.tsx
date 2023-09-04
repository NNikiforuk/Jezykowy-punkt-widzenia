import {
	links_offer,
	links_materials,
	Sublink,
	OfferSection,
	SectionMat,
	SublinkMat,
} from "./MyLinks";

export const NavLinksOffer = () => {
	const xxx = () => {
		console.log("gggg");
	};

	return (
		<div>
			<div>
				<div className="mainlink_title">Oferta</div>
				<div className="list_container" onClick={xxx}>
					<div className="arrow">
						<div className="up"></div>
					</div>
					<div className="list_container-sec">
						<ul className="mainlink_list">
							{links_offer.sublinks.map((sublink: Sublink) => (
								<li key={sublink.name} className="item">
									{sublink.name}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export const NavLinksMaterials = () => {

	const xxx = () => {
		console.log("gggg")
	}

	return (
		<div>
			<div>
				<div className="mainlink_title">Materiały</div>
				<div className="list_container" onClick={xxx}>
					<div className="arrow">
						<div className="up"></div>
					</div>
					<div className="list_container-sec">
						<ul className="mainlink_list">
							<div>
								{links_materials.sublinks.Head}
								{links_materials.sublinks.sublink.map((sublink: SublinkMat) => (
									<li key={sublink.name} className="item">
										{sublink.name}
									</li>
								))}
							</div>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
