import Advantages from "./Advantages";
import Reminder from "./Reminder";

interface Props {
	mainDesc: string;
	company: boolean;
	addText: boolean;
}

const Main_desc = ({ mainDesc, company, addText }: Props) => {
	return (
		<div className="desc">
			<div>{mainDesc}</div>
			{company && <Reminder company={company} />}
			{addText && <Advantages company={false} />}
			{addText && <Reminder company={false} />}
			{company && <Advantages company={company} />}
		</div>
	);
};

export default Main_desc;
