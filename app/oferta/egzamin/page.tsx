import { offer } from "@/data/offer/offer";

const Exam = () => {
	return (
		<div className="exam">
			<h1>{offer[2].name}</h1>
			<div className="exam_offer">
				<p>{offer[2].desc.text1}</p>
				<br />
				<p className="bold">{offer[2].list?.title}</p>
				<ul className="exam_list">
					{offer[2].list?.desc.map((d) => (
						<li key={d}>{d}</li>
					))}
				</ul>
				<p>{offer[2].desc.text2}</p>
				<p className="bold">{offer[2].desc.text3}</p>
			</div>
		</div>
	);
};

export default Exam;
