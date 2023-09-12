import { Links } from "@/data/home_boxes";
import Image from "next/image";
import Link from "next/link";

interface Props {
	data: Links[];
}

const Box = ({ data }: Props) => {
	return (
		<div className="box_container">
			<div
				className="box
			_img"
			>
				{/* <Image src={src} alt="navbar link" width={583} /> */}
			</div>
			<div className="desc">
				<button>{/* <Link href={href1}>{text1}</Link> */}</button>
			</div>
		</div>
	);
};

export default Box;
