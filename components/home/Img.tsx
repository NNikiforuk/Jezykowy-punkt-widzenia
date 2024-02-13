import Image from "next/legacy/image";
import Link from "next/link";
import { linksProps } from "@/data/links";

const Img = ({ href, img, alt, name, imgSmaller }: linksProps) => {
	return (
		<div className="box_container">
			<Link aria-label={name} href={href}>
				<Image
					src={img}
					alt={alt}
					width={583}
					height={167}
					className="box_img"
					priority={false}
				/>
			</Link>
		</div>
	);
};

export default Img;
