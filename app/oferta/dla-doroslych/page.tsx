import Info from "@/components/Info";
import { text } from "../../../data/oferta_adults";
import { text2 } from "../../../data/oferta_adults";
import Packages from "@/components/Packages";

const Adults = () => {
	return (
		<div className="adults">
			<h1>Dla dorosłych</h1>

			<div className="desc">
				<div>
					<p className="title">Kurs gramatyczny</p>
					<p>(tylko gramatyka)</p>
					<p>A1 - C2</p>
					<p>(wyłącznie gramatyka)</p>
					<p>45h</p>
				</div>
				<div>
					<p className="title">Kurs mieszany</p>
					<p>(gramatyka + konwersacja)</p>
					<p>A1 - A2</p>
					<p>45h</p>
				</div>
				<div>
					<p className="title">Kurs mieszany</p>
					<p>(gramatyka + konwersacja)</p>
					<p>B1 - B2</p>
					<p>40h</p>
				</div>
				<div>
					<p className="title">Kurs mieszany</p>
					<p>(gramatyka + konwersacja)</p>
					<p>C1 - C2</p>
					<p>38h</p>
				</div>
				<div>
					<p className="title">Kurs konwersacja</p>
					<p>25h</p>
				</div>
			</div>

			<Info text={text} text2={text2} />

			<Packages />
		</div>
	);
};

export default Adults;
