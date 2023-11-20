import { advantages } from "@/data/offer/offer";

const Reminder = ({ mobile }: { mobile: boolean }) => {
	return (
		<div
			className={`reminder ${mobile ? "reminder_mobile" : "reminder_desktop"}`}
		>
			{advantages.text2}
		</div>
	);
};

export default Reminder;
