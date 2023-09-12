import { prices, info } from "../../data/prices/prices";

const Prices = () => {
	return (
		<div className="boxes">
			<h1>Cennik</h1>
			<div className="boxes_groups">
				{prices.map((el) => (
					<div className="boxes_group" key={el.name}>
						<h2>{el.name}</h2>
						{el.desc.map((x) => (
							<div className="box">
								<div className="box_titles" key={x.id}>
									<div className="box_title">{x.title}</div>
									<div className="box_time">{x.time}</div>
								</div>
								<div className="box_desc">
									<ul>
										{x.text.map((y) => (
											<li className="bullet" key={y}>
												{y}
											</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				))}
				<div className="boxes_group">
					<div className="text info">{info.text}</div>
				</div>
			</div>
		</div>
	);
};

export default Prices;
