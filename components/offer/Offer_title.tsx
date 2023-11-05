import React from "react";

interface Props {
	title: string;
	titleDesc?: string;
}

const Offer_title = ({ title, titleDesc }: Props) => {
	return (
		<>
			<h2>{title}</h2>
			<p>{titleDesc}</p>
		</>
	);
};

export default Offer_title;
