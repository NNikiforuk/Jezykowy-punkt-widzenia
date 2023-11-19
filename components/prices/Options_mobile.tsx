import Option from "./Option";
import womanIMG from "../../public/assets/images/prices/woman.png";
import manIMG from "../../public/assets/images/prices/man.png";
import kidIMG from "../../public/assets/images/prices/kid.png";

const Options_mobile = () => {
	return (
		<div className="prices_mobile">
			<Option
				title="Standardowy"
				src={womanIMG}
				alt="woman"
				length="4 miesiące"
				lessons="24 (36h) spotkania x 1,5 h / 2x w tygodniu"
				max={4}
				standardPrices={true}
				hours92130={true}
				highlight={false}
				company={false}
				lectorOnly={false}
				individual={false}
				children={false}
			/>

			<Option
				title="Intensywny"
				src={manIMG}
				alt="man"
				length="2 miesiące, kursy wakacyjne"
				lessons="24 (36h) spotkania x 1,5 h / 4x w tygodniu"
				max={4}
				standardPrices={true}
				hours92130={true}
				highlight={true}
				company={false}
				lectorOnly={false}
				individual={false}
				children={false}
			/>

			<Option
				title="Indywidualny"
				src={kidIMG}
				alt="kid"
				length="Ustalane indywidualnie"
				lessons="Ustalane indywidualnie spotkania 60 min"
				max={1}
				standardPrices={false}
				hours92130={false}
				highlight={false}
				company={false}
				lectorOnly={false}
				individual={false}
				children={false}
			/>

			<Option
				title="Kurs branżowy"
				src={womanIMG}
				alt="woman"
				length="3/4 miesięce"
				lessons="24 (36h) spotkania x 1,5 h / 2x w tygodniu"
				max={6}
				standardPrices={false}
				hours92130={true}
				highlight={false}
				company={true}
				lectorOnly={true}
				individual={false}
				children={false}
			/>

			<Option
				title="Dzieci i młodzież"
				src={kidIMG}
				alt="kid"
				length="3/4 miesięce, kursy wakacyjne"
				lessons="24 (36h) spotkania x 1,5 h / 2x w tygodniu"
				max={4}
				standardPrices={false}
				hours92130={true}
				highlight={false}
				company={false}
				lectorOnly={false}
				individual={false}
				children={true}
			/>

			<Option
				title="Przygotowanie do certyfikatu"
				src={manIMG}
				alt="man"
				length="4/5 miesięcy"
				lessons="24 (36h) spotkania x 1,5 h / 2x w tygodniu"
				max={6}
				standardPrices={false}
				hours92130={true}
				highlight={false}
				company={false}
				lectorOnly={true}
				individual={true}
				children={false}
			/>
		</div>
	);
};

export default Options_mobile;
