import Image from "next/image";
import InfoIcon from "@mui/icons-material/Info";

const Youngest = () => {
	return (
		<div className="youngest">
			<h1>Dla najmłodszych</h1>
			<div className="desc">
				<div className="desc_element">
					<Image
						src="/assets/images/offer-child.png"
						alt="child"
						width={80}
						height={80}
						className="img"
						priority={false}
					/>
					<p className="text">Zajęcia indywidualne lub grupowe do 4 osób</p>
					<div className="desc_element">
						<Image
							src="/assets/images/offer-kids.png"
							alt="group of children"
							width={120}
							height={80}
							className="img"
							priority={false}
						/>
						<p className="text">Zajęcia w różnych grupach wiekowych</p>
					</div>
					<div className="desc_element">
						<Image
							src="/assets/images/offer-play.png"
							alt="children playing"
							width={100}
							height={90}
							className="img"
							priority={false}
						/>
						<p className="text">Uczymy się poprzez zabawę</p>
					</div>
				</div>
			</div>
			<h2>Pakiety godzinowe</h2>
			<div className="packages">
				<div className="package">
					<div className="title">6h</div>
					<div className="desc">
						<p>gramatyka 3h</p>
						<p>+</p>
						<p>konwersacja 3h</p>
					</div>
				</div>
				<div className="package">
					<div className="title">12h</div>
					<div className="desc">
						<p>gramatyka 6h</p>
						<p>+</p>
						<p>konwersacja 6h</p>
					</div>
				</div>
				<div className="package">
					<div className="title">18h</div>
					<div className="desc">
						<p>gramatyka 9h</p>
						<p>+</p>
						<p>konwersacja 9h</p>
					</div>
				</div>
			</div>
			<div className="info">
				<div>
					<InfoIcon className="icon" />
				</div>
				<p className="text">
					Na część gramatyczną składają się części mowy: przymiotnik,
					rzeczownik, czasownik, zaimek, przyimek, przysłówek, liczebnik,
					partykuły, szyk zdań/nauka o zdaniu
				</p>
			</div>
		</div>
	);
};

export default Youngest;

{
	/* <p>

				Napisz do nas, a wyślemy Ci
				nasz test językowy. Po jego wypełnieniu przedstawimy Ci naszą ofertę i
				razem dobierzemy pakiety godzinowe dla Twojego dziecka.
			</p> */
}
