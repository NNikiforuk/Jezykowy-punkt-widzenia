import Img from "./Img";
import { links } from "@/data/links";

const Box = () => {
	return (
		<div className="wrapper">
			{links.map(link => (
				<Img
					key={link.name}
					href={link.href}
					img={link.img}
					alt={link.alt} name={""}				/>
			))}
		</div>
	);
};

export default Box;
