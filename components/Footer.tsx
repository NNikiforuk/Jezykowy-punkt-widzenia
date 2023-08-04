const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="footer">{`Językowy punkt widzenia ${year}`}</footer>
	);
};

export default Footer;
