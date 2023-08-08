import Info from "@/components/Info";
import { text } from "../../../data/oferta_certificate";

const Certificate = () => {
	return (
		<div className="certificate">
			<h1>Przygotowanie do certyfikatów</h1>
			<div className="certificate_offer">
				<p className="bold">
					W nauce języka obcego ważne jest stawianie sobie konkretnych celów.
					Jednym z nich może być zdobycie certyfikatu, dzięki któremu możemy
					między innymi ubiegać się o wyższe stanowisko. Potwierdza on znajomość
					języka niemieckiego na konkretnym poziomie, co jest bardzo przydatne
					na studiach (szczególnie za granicą) oraz cenione przez pracodawców.
				</p>

				<p>
					Goethe Institut to instytucja, która promuje język niemiecki oraz
					niemiecką kulturę. Jej placówki znaleźć można na całym świecie – w
					Polsce obecne są w Warszawie i Krakowie. Goethe Institut umożliwia
					uzyskanie certyfikatu z niemieckiego na każdym poziomie. Certyfikat
					Goethe jest ważny bezterminowo i honorowany bardziej na uczelniach
					wyższych, niż przez pracodawców. Certyfikat z niemieckiego TELC
					honorują bardziej pracodawcy (w tym urzędy czy służby cywilne) niż
					uczelnie wyższe. Jego posiadanie wymagane jest też od osób
					ubiegających się o niemieckie obywatelstwo. Certyfikat jest również
					bezterminowy. Teoretycznie można się przygotować do egzaminu Goethe
					Zertifikat/ Telc B1 w trakcie 96 godzin intensywnej nauki. Jest to
					osiągalne , jeżeli uczysz się z lektorem trzy godziny tygodniowo przez
					8 miesięcy. Oczywiście to wszystko zależy jednak od danego poziomu
					osoby uczącej się, dlatego proponujemy indywidualny dobór pakietów
					godzinowych.
				</p>
			</div>

			<Info text={text} text2={""} />
		</div>
	);
};

export default Certificate;
