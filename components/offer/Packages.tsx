import { packages } from "@/data/offer/offer";

const Packages = () => {
	return (
		<div className="packages">
			<h2>{packages.title}</h2>
			<div className="packages_container">
				{packages.package.map((pack) => (
					<div key={pack.title} className="package">
						<div className="package_title">{pack.title}</div>
						{pack.texts.map((p) => (
							<div key={p} className="package_desc">
								<p>{p}</p>
							</div>
						))}
					</div>
				))}
			</div>
			<div className="packages_list">
				<div className="packages_list_title">{packages.grammar.title}</div>
				<ul className="packages_list_grammar">
					{packages.grammar.elements.map((el) => (
						<li className="grammar_item" key={el}>{el}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Packages;
