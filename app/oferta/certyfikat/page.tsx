import { offer } from "@/data/offer/offer";

const Certificate = () => {
	return (
		<div className="certificate">
			<h1>{offer[3].name}</h1>
			<div className="certificate_offer">
				<p className="cert bold">{offer[3].desc.text1}</p>
				<p className="cert">{offer[3].desc.text2}</p>
				<p className="cert bold">{offer[3].desc.text3}</p>
			</div>
		</div>
	);
};

export default Certificate;
