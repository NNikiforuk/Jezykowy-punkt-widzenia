import { text } from "../../../data/oferta_adults";
import { text2 } from "../../../data/oferta_adults";
import Packages from "@/components/Packages";

const Adults = () => {
	return (
		<div className="adults">
			<h1>Oferta dla dorosłych</h1>

			<div className="desc">
				<div className="box">
					<p className="title">Kurs gramatyczny</p>
					<p>(tylko gramatyka)</p>
					<p>A1 - C2</p>
					<p>(wyłącznie gramatyka)</p>
					<p>45h</p>
				</div>
				<div className="box">
					<p className="title">Kurs mieszany</p>
					<p>(gramatyka + konwersacja)</p>
					<p>A1 - A2</p>
					<p>45h</p>
				</div>
				<div className="box">
					<p className="title">Kurs mieszany</p>
					<p>(gramatyka + konwersacja)</p>
					<p>B1 - B2</p>
					<p>40h</p>
				</div>
				<div className="box">
					<p className="title">Kurs mieszany</p>
					<p>(gramatyka + konwersacja)</p>
					<p>C1 - C2</p>
					<p>38h</p>
				</div>
				<div className="box">
					<p className="title">Kurs konwersacja</p>
					<p>25h</p>
				</div>
			</div>

			<Packages />

			<p className="normal_text">
				Wybór części gramatycznej zostanie dobrany po rozmowie z kursantem.
			</p>
			<p className="bold normal_text">
				Napisz do nas, a wyślemy Ci nasz test językowy. Po jego wypełnieniu
				przedstawimy Ci naszą ofertę i dobierzemy pakiet dla Twojego dziecka.
			</p>
		</div>
	);
};

export default Adults;
