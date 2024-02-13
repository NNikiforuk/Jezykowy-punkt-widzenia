import { FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { links } from "@/data/links";
import Subpage_banner from "@/components/Subpage_banner";
import Link from "next/link";

const Contact = () => {
	return (
		<div className="contact">
			<Subpage_banner src={links[6].img} alt={links[6].alt} />

			<div className="container">
				<div className="tel">
					<div className="tel_icon">
						<FaPhone />
					</div>
					<div className="tel_number">
						<Link href="tel:48603156142" aria-label="Numer kontaktowy">
							(+48) 603 156 142
						</Link>
					</div>
				</div>
				<div className="email">
					<div className="email_icon">
						<AiOutlineMail />
					</div>
					<div className="email_address">
						<Link href="mailto:kontakt@jpw-kursy.pl" aria-label="Adres mailowy">
							kontakt@jpw-kursy.pl
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
