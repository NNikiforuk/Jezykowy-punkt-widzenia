import Subpage_banner from "@/components/Subpage_banner";
import { links } from "@/data/links";
import img from "../../public/assets/images/about/kasia2.png";
import img1 from "../../public/assets/images/about/1.bmp";
import img2 from "../../public/assets/images/about/2.jpg";
import img3 from "../../public/assets/images/about/3.jpeg";
import img4 from "../../public/assets/images/about/4.jpeg";
import img5 from "../../public/assets/images/about/5.jpeg";
import Image from "next/image";

const About = () => {
	return (
		<main>
			<Subpage_banner
				src={links[5].img}
				alt={links[5].alt}
				srcSmaller={links[5].imgSmaller}
			/>

			<div className="about">
				<div className="description">
					<div className="img">
						<Image src={img} alt="zdjecie zalozycielki" />
					</div>
					<div className="text">
						<p>
							Nazywam się <span className="green">Katarzyna Dobrzańska</span> i
							od 3 lat prowadzę działalność o nazwie{" "}
							<span className="green">JĘZYKOWY PUNKT WIDZENIA</span>. Oferuję
							kursy online z języka niemieckiego dla grup na{" "}
							<b>różnych poziomach od A1 do C2</b>.
						</p>
						<p>
							Swoją przygodę z językiem niemieckim zaczęłam już w Szkole
							Podstawowej I kontynuowałam na studiach, wybierając{" "}
							<b>w roku 2014 kierunek Germanistyka</b> na Uniwersytecie
							Zielonogórskim.
						</p>
						<p>
							Moja kariera wyglądała następująco,{" "}
							<b>w roku 2016 wyjechałam do Berlina</b>, gdzie mieszkałam i
							pracowałam, aby podszkolić zarówno język potoczny jak i urzędowy.
							Swoje doświadczenie zdobyłam w różnych obszarach{" "}
							<b>
								m.in. obsługa klienta, transport czy księgowość, dzięki pracy w
								międzynarodowych korporacjach takich jak Amazon czy Capgemini
							</b>
							, a w roku 2022 połączyłam swoją pasję do języków z kolejnym
							kierunkiem - <b>logistyką</b>, ukończoną również na Uniwersytecie
							Zielonogórskim jako <b>magister inż. ds. logistyki</b>.
						</p>
						<p>
							Moja szkoła językowa jest także instytucją szkoleniową{" "}
							<b>wpisaną w rejestr instytucji szkoleniowych</b>, a ja w dalszym
							ciągu rozwijam swoją znajomość językową. Uczęszczam na różnorodne
							szkolenia i kursy tym samym zdobywając nowe doświadczenia i
							wiedzę, podwyższające moje kompetencje jako lektor j.
							niemieckiego.
						</p>
					</div>
				</div>
				<div className="diplomas">
					<div className="img">
						<Image height={320} src={img1} alt="zdjecie certyfikatu" />
					</div>
					<div className="img">
						<Image height={320} src={img2} alt="zdjecie certyfikatu" />
					</div>
					<div className="img">
						<Image height={320} src={img3} alt="zdjecie certyfikatu" />
					</div>
					<div className="img">
						<Image height={320} src={img4} alt="zdjecie certyfikatu" />
					</div>
					<div className="img">
						<Image height={320} src={img5} alt="zdjecie certyfikatu" />
					</div>
				</div>
			</div>
		</main>
	);
};

export default About;
