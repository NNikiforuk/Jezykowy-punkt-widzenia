import { advantages } from "@/data/offer/offer";

const Advantages = () => {
  return (
		<div className="advantages_desktop">
			<p className="bold left">{advantages.text1}</p>
			<ul className="desc_list ul">
				{advantages.list.map((el) => (
					<li key={el}>{el}</li>
				))}
			</ul>
		</div>
	);
}

export default Advantages
