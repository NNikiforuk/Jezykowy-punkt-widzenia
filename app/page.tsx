import Image from "next/legacy/image";
import imgOwner from "../public/assets/images/landing_page/kasia.png";
import { Caveat } from "next/font/google";
import Link from "next/link";
import { TbSignRight } from "react-icons/tb";
import {
	MdKeyboardDoubleArrowRight,
	MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

const caveat = Caveat({ subsets: ["latin"] });

const Home = () => {
	return (
		<main>
			<div className="home">
				<h1 className="home_headline">JĘZYKOWY PUNKT WIDZENIA</h1>
				<h2 className={`home_headline-secondary ${caveat.className}`}>
					Katarzyna Dobrzańska
				</h2>
				<div className="home_description">
					<div className="welcome">
						<div className="img">
							<Image
								src={imgOwner}
								alt="zdjęcie załozycielki szkoły"
								priority={true}
							/>
						</div>
						<div className="description">
							<div className="headline_desktop">
								<div className="primary">JĘZYKOWY PUNKT WIDZENIA</div>
								<div className={`secondary ${caveat.className}`}>
									Katarzyna Dobrzańska
								</div>
							</div>
							<span className="green">Językowy punkt widzenia</span> to szkoła
							języków obcych online dla dzieci, młodzieży i dorosłych. To
							profesjonalna placówka edukacyjna, wpisana do{" "}
							<b>Rejestru Instytucji Szkoleniowych</b>. Jako szkoła oferujemy
							kursy z języka <b>angielskiego</b>, <b>niemieckiego</b> i{" "}
							<b>holenderskiego</b>. Przygotowana została również propozycja dla
							obcokrajowców w postaci kursu języka <b>polskiego</b>.
						</div>
					</div>
					<div className="banner">
						<div className="icon">
							<MdKeyboardDoubleArrowRight />
						</div>
						<div className="text">
							Moim głównym celem nauczania jest swobodna rozmowa w obcym języku
						</div>
						<div className="icon">
							<MdKeyboardDoubleArrowLeft />
						</div>
					</div>
					<div className="advantages">
						<h2 className="advantages_h2">Zalety moich kursów</h2>
						<ul>
							<li>Nauka na wszystkich poziomach zaawansowania</li>
							<li>Lekcje online indywidualne lub grupowe</li>
							<li>
								Nauka z dowolnego miejsca na świecie, o każdej porze dnia i nocy
							</li>
							<li>
								Współczesne źródła edukacyjne (wideo, interaktywne ćwiczenia,
								testy, gry i materiały do czytania mojego autorstwa)
							</li>
							<li>
								Zajęcia prowadzone przez native speaker lub lektora polskiego
							</li>
						</ul>
					</div>
					<div className="bullets">
						<div className="bullets_header">
							<h2 className="bullets_h2">Przydatne linki</h2>
							<TbSignRight className="icon" />
						</div>
						<ul>
							<li>
								Przeraża Cię nauka przy książkach?{" "}
								<Link href="/oferta">
									Poznaj i wypróbuj moje metody nauczania!
								</Link>
							</li>
							<li>
								Potrzebujesz tłumaczenia?{" "}
								<Link href="/tlumaczenia">Nic prostszego!</Link>
							</li>
							<li>
								<Link href="/artykuły">
									Ucz się słownictwa z artykułów mojego autorstwa
								</Link>
							</li>
							<li>
								<Link href="/opinie">Sprawdź opinie o szkole</Link>
							</li>
							<li>
								Masz pytania?{" "}
								<Link href="/kontakt">Świetnie, jestem tu dla Ciebie!</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
