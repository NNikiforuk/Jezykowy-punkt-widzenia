import Packages from "@/components/offer/Packages";
import { offer } from "@/data/offer/offer";

const Adults = () => {
	return (
		<div className="adults">
			<h1>{offer[1].name}</h1>
			<div className="adults_headtext">{offer[1].desc.text1}</div>
			<div className="bold">{offer[1].desc.text2}</div>
			<div className="desc">
				{offer[1].box?.map((b, id) => (
					<div className="box" key={id}>
						<div className="title">{b.title}</div>
						{b.texts.map((text) => (
							<p key={text}>{text}</p>
						))}
					</div>
				))}
			</div>
			<div className="bold mbottom">{offer[1].desc.text3}</div>

			<Packages />

			<p className="normal_text">{offer[1].desc.text4}</p>
			<p className="bold normal_text">{offer[1].desc.text5}</p>
		</div>
	);
};

export default Adults;
