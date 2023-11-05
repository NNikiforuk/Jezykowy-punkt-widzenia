import { advantages } from "@/data/offer/offer";

const Advantages = () => {
  return (
		<div className="advantages">
			<p className="bold title">{advantages.text1}</p>
			<ul>
				{advantages.list.map((el) => (
					<li key={el}>{el}</li>
				))}
			</ul>
		</div>
	);
}

export default Advantages
