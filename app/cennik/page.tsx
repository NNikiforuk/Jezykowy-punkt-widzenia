import { prices, info } from "../../data/prices/prices";
import { links } from "@/data/links";
import Image from "next/image";

const Prices = () => {
	return (
		<div className="boxes">
			<div className="boxes_img">
				<Image
					src={links[1].img}
					alt={links[1].alt}
					priority={true}
					width={0}
					height={0}
					sizes="100vw"
					style={{ width: "100%", height: "auto" }}
				/>
			</div>
			<div className="boxes_groups">
				{prices.map((el) => (
					<div className="boxes_group" key={el.name}>
						<h2>{el.name}</h2>
						{el.desc.map((x) => (
							<div key={x.id} className="box">
								<div className="box_titles">
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
