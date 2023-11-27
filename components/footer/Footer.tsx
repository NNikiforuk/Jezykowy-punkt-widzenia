import Link from "next/link";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="footer_content">
				<div className="info">
					<div className="title">Informacje</div>
					<div className="privacy_policy">
						<Link href="/assets/files/Polityka_prywatnosci.pdf">
							<div>Polityka prywatności</div>
						</Link>
					</div>
					<div className="statute">
						<Link href="/assets/files/Regulamin.pdf">
							<div>Regulamin kursu online</div>
						</Link>
					</div>
					<div className="data">
						<Link href="/assets/files/Przetwarzanie_danych_osobowych.pdf">
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
								<Link href="mailto:kddobrzanska@gmail.com">
									kddobrzanska@gmail.com
								</Link>
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
