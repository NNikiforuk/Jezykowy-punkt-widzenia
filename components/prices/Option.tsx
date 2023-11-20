import { AiOutlineCheckCircle } from "react-icons/ai";

interface PricesProps {
	title: string;
	ranges: PriceSpec[];
	list: string[];
	hours?: string[];
	highlight: boolean;
}

export interface PriceSpec {
	price: string;
	group: string;
}

const OptionPricing = ({ price, group }: PriceSpec) => {
	return (
		<div
			style={{
				padding: "10px 0px",
				borderBottom: "2px dashed rgb(248, 211, 211)",
			}}
			className="option_pricing"
		>
			<span style={{ fontWeight: "bold" }}>{price}</span>
			<span style={{ color: "gray" }}>{group}</span>
		</div>
	);
};

const Option = ({ title, ranges, list, hours, highlight }: PricesProps) => {
	return (
		<div className={`option ${highlight && "highlight"}`}>
			<h2>{title}</h2>
			<div className="container">
				<div className="list">
					{list.map((el, index) => (
						<div key={index} className="list_container">
							<AiOutlineCheckCircle />
							<div>{el}</div>
						</div>
					))}
				</div>
				{hours && (
					<div className="hours">
						<ul className="list">
							{hours?.map((el, index) => (
								<li key={index}>{el}</li>
							))}
						</ul>
					</div>
				)}
				<div className="price_container">
					{ranges?.map((range, rangeIndex) => (
						<OptionPricing key={rangeIndex} {...range} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Option;
