import Image, { StaticImageData } from "next/image";

interface Props {
	src: StaticImageData;
	alt: string;
}

const Offer_img = ({ src, alt }: Props) => {
	return (
		<div className="main_img">
			<Image
				priority={false}
				src={src}
				alt={alt}
				width={200}
				className="img"
				unoptimized
			/>
		</div>
	);
};

export default Offer_img;
