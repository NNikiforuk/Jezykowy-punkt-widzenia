import { advantages } from "@/data/offer/offer";

const Reminder = ({ company }: { company: boolean }) => {
	return (
		<p className={`reminder ${company && "company_reminder"}`}>
			{advantages.text2}
		</p>
	);
};

export default Reminder;
