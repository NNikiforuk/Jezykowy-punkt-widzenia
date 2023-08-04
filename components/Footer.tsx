const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="footer">
			&copy; {`${year} Językowy punkt widzenia`}
		</footer>
	);
};

export default Footer;
