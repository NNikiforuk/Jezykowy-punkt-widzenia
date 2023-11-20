import { FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { links } from "@/data/links";
import Subpage_banner from "@/components/Subpage_banner";

const Contact = () => {
	return (
		<div className="contact">
			<Subpage_banner src={links[5].img} alt={links[5].alt} />

			<div className="container">
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
		</div>
	);
};

export default Contact;
