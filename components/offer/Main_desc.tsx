import Company from "@/app/oferta/branzowe/page";

interface Props {
	mainDesc: string;
	company: boolean;
}

const Main_desc = ({ mainDesc, company }: Props) => {
	return (
		<div className="desc">
			<div>{mainDesc}</div>
			{company && <Company />}
		</div>
	);
};

export default Main_desc;
