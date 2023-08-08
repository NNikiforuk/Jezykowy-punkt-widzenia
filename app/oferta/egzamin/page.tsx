import Info from "@/components/Info";
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
				<p className="bold margin_left">Z nami:</p>
				<ul className="bold">
					<li>Utrwalisz słownictwo</li>
					<li>Powtórzysz gramatykę</li>
					<li>Poćwiczysz rozumienie tekstów pisanych</li>
					<li>Poćwiczysz rozumienie ze słuchu</li>
				</ul>
			</div>
			<Info text={text} text2={text2} />
		</div>
	);
};

export default Exam;
