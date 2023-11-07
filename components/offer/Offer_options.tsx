import { advantages } from "@/data/offer/offer";


const Offer_options = () => {
	return (
		<div className="offers">
			{advantages.list3.map((el) => (
				<div className="box" key={el.title}>
					<div className="title">{el.title}</div>
					<ul className="offers_list">
						{el.list.map((l) => (
							<li key={l}>{l}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default Offer_options;
