import { FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import { links } from "@/data/links";

const Contact = () => {
	return (
		<div className="contact">
			<div className="contact_img">
				<Image
					src={links[5].img}
					alt={links[5].alt}
					priority={true}
					width={0}
					height={0}
					sizes="100vw"
					style={{ width: "100%", height: "auto" }}
				/>
			</div>
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
