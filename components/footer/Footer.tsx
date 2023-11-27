const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="footer_content">
				<div className="info">
					<div className="title">Informacje</div>
					<div className="privacy_policy">
						<div>Polityka prywatności</div>
					</div>
					<div className="statute">
						<div>Regulamin kursu online</div>
					</div>
					<div className="data">
						<div>Przetwarzanie danych osobowych</div>
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
							<div>tel.: (+48) 603 156 142 </div>
							<div>e-mail: kddobrzanska@gmail.com </div>
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
