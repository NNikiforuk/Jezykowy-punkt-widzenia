import Image, { StaticImageData } from "next/image";

interface Props {
	priority: boolean;
	src: StaticImageData;
	alt: string;
	width: number;
}

const Offer_img = ({ priority, src, alt, width }: Props) => {
	return (
		<div className="main_img">
			<Image
				priority={priority}
				src={src}
				alt={alt}
				width={width}
				className="img"
			/>
		</div>
	);
};

export default Offer_img;
