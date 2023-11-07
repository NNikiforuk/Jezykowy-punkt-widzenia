import { advantages } from "@/data/offer/offer";

const Reminder = ({ hide }: { hide: boolean }) => {
	return hide ? null : (
		<div className="reminder_primary reminder_secondary">
			{advantages.text2}
		</div>
	);
};

export default Reminder;
