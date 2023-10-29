import { FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
	return (
		<div className="contact">
			<h1>Zapraszamy do kontaktu</h1>
			<div className="tel">
				<div className="tel_icon">
					<FaPhone />
				</div>
				<div className="tel_number">(+48) 603 156 142</div>
			</div>
			<div className="email">
				<div className="email_icon">
					<AiOutlineMail />
				</div>
				<div className="email_address">kddobrzanska@gmail.com</div>
			</div>
		</div>
	);
};

export default Contact;
