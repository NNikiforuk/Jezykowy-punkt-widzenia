
import { text } from "../../../data/oferta_exam";
import { text2 } from "../../../data/oferta_exam";

const Exam = () => {
	return (
		<div className="exam">
			<h1>Przygotowanie do matury i innych egzaminów</h1>
			<div className="exam_offer">
				<p>
					Czeka Cię matura z języka niemieckiego i czujesz się nie do końca
					przygotowany/na? Czy na myśl o egzaminie ogarnia Cię stres? Matura to
					pierwszy poważny egzamin w życiu dzięki któremu możemy wybrać się na
					wymarzone studia. Jeśli więc potrzebujesz pomocy, zgłoś się do nas!
					Chętnie przygotujemy Cię do tego egzaminu.
				</p>
				<br />
				<p className="bold margin_left center">Z nami:</p>
				<ul className="center">
					<li>Utrwalisz słownictwo</li>
					<li>Powtórzysz gramatykę</li>
					<li>Poćwiczysz rozumienie tekstów pisanych</li>
					<li>Poćwiczysz rozumienie ze słuchu</li>
				</ul>
			</div>

		</div>
	);
};

export default Exam;
