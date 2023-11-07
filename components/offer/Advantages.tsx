import { advantages } from "@/data/offer/offer";

const Advantages = () => {
  return (
		<div className="advantages">
			<div className="advantages_title">{advantages.text1}</div>
			<ul className="advantages_list">
				{advantages.list.map((el) => (
					<li key={el}>{el}</li>
				))}
			</ul>
		</div>
	);
}

export default Advantages
