const Footer = () => {
	const link = "https://henok.us";
	const target = "_blank";

	return (
		<div className="container">
			Copyright © <small>{new Date().getFullYear()}</small> Coffilombia SAS{" "}
			<a href={link} target={target}>
				Coffilombia
			</a>
		</div>
	);
};

export default Footer;
