import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="footer_content">
				<div className="icons">
					<Link
						target="_blank"
						className="icon"
						href="https://www.facebook.com/profile.php?id=100077329971505"
					>
						<FaFacebookF />
					</Link>
					<Link
						target="_blank"
						className="icon"
						href="https://www.youtube.com/@jezykowypunktwidzenia"
					>
						<FaYoutube />
					</Link>
					<Link
						target="_blank"
						className="icon"
						href="https://www.instagram.com/jpw_jezykowy_punkt_widzenia/"
					>
						<FaInstagram />
					</Link>
					<Link
						target="_blank"
						className="icon"
						href="https://www.tiktok.com/@kasiaddobrzanska"
					>
						<FaTiktok />
					</Link>
				</div>
				<div className="text_container">
					<div className="info">
						<div className="title">Informacje</div>
						<div className="privacy_policy">
							<Link
								target="_blank"
								href="/assets/files/Polityka_prywatnosci.pdf"
								download={true}
							>
								<div>Polityka prywatności</div>
							</Link>
						</div>
						<div className="statute">
							<Link
								target="_blank"
								href="/assets/files/Regulamin.pdf"
								download={true}
							>
								<div>Regulamin kursu online</div>
							</Link>
						</div>
						<div className="data">
							<Link
								download={true}
								target="_blank"
								href="/assets/files/Przetwarzanie_danych_osobowych.pdf"
							>
								<div>Przetwarzanie danych osobowych</div>
							</Link>
						</div>
					</div>
					<div className="second_column">
						<div className="company_data">
							<div className="title">Dane firmy</div>
							<>
								<div>JĘZYKOWY PUNKT WIDZENIA</div>
								<div>z siedzibą w Międzylesiu 17</div>
								<div>67 – 312 Niegosławice</div>
							</>
						</div>
						<div className="sub_column">
							<div className="nip_regon_contact">
								<div>REGON: 386531965</div>
								<div>NIP: 9241915728</div>
							</div>
							<div className="footer_contact">
								<div>
									<Link href="tel:48603156142">(+48) 603 156 142</Link>
								</div>
								<div className="email_address">
									<Link href="mailto:kontakt@jpw-kursy.pl">
										kontakt@jpw-kursy.pl
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer_year">
				&copy; {`${year} Językowy punkt widzenia`}
			</div>
		</footer>
	);
};

export default Footer;
