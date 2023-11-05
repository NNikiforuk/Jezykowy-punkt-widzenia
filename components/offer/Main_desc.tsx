import Advantages from "./Advantages";
import Company_list from "./Company_list";
import Reminder from "./Reminder";

interface Props {
	mainDesc: string;
	company?: boolean;
	companyList?: string[];
}

const Main_desc = ({ mainDesc, company }: Props) => {
	return (
		<div className="desc">
			<div>{mainDesc}</div>
			{company ? <Company_list /> : <Advantages />}
			<Reminder />
		</div>
	);
};

export default Main_desc;
