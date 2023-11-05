import { offer } from "@/data/offer/offer";

const Company_list = () => {
  return (
		<div className="company">
			<ul>
				{offer[2].list2?.map((el) => (
					<li key={el}>{el}</li>
				))}
			</ul>
		</div>
	);
}

export default Company_list
