import { advantages } from "@/data/offer/offer";

const Advantages = ({company}: {company: boolean}) => {
  return (
		<div className={`advantages ${company && "company_adv"}`}>
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
