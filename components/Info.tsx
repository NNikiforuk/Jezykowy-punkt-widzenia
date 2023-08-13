import {
	FaBars,
	FaTimes,
	FaAngleRight,
	FaAngleDown,
	FaAngleLeft,
	FaInfoCircle,
} from "react-icons/fa";

type Props = {
	text: string;
	text2: string;
};

const Info = ({ text, text2 }: Props) => {
	return (
		<div className="info">
			<FaInfoCircle className="info_icon" />
			<div className="info_desc">
				<p className="text">{text}</p>
				{text2 && <p className="text">{text2}</p>}
			</div>
		</div>
	);
};

export default Info;
