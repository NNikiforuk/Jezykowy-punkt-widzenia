import InfoIcon from "@mui/icons-material/Info";

type Props = {
	text: string;
	text2: string;
};

const Info = ({ text, text2 }: Props) => {
	return (
		<div className="info">
			<InfoIcon className="icon" />
			<div className="desc">
				<p className="text">{text}</p>
				{text2 && <p className="text">{text2}</p>}
			</div>
		</div>
	);
};

export default Info;
