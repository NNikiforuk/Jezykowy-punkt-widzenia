import Company from "@/app/oferta/branzowe/page";
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
			{addText && <Advantages />}
			{addText && <Reminder />}
			{company && <Company />}
		</div>
	);
};

export default Main_desc;
