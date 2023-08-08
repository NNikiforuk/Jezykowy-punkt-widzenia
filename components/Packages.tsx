import React from "react";

const Packages = () => {
	return (
		<div className="packages">
			<h2>Pakiety godzinowe</h2>
			<div className="packages_container">
				<div className="package">
					<div className="package_title">6h</div>
					<div className="package_desc">
						<p>gramatyka 3h</p>
						<p>+</p>
						<p>konwersacja 3h</p>
					</div>
				</div>
				<div className="package">
					<div className="package_title">12h</div>
					<div className="package_desc">
						<p>gramatyka 6h</p>
						<p>+</p>
						<p>konwersacja 6h</p>
					</div>
				</div>
				<div className="package">
					<div className="package_title">18h</div>
					<div className="package_desc">
						<p>gramatyka 9h</p>
						<p>+</p>
						<p>konwersacja 9h</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Packages;
