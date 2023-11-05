interface Props {
	list?: {
		title: string;
		list: string[];
	}[];
}

const Offer_options = ({ list }: Props) => {
	return (
		<div className="offers">
			{list?.map((el) => (
				<div className="box" key={el.title}>
					<p className="title">{el.title}</p>
					<ul>
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
