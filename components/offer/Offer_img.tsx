import Image, { StaticImageData } from "next/image";

interface Props {
	src: StaticImageData;
	alt: string;
	upImg: boolean;
}

const Offer_img = ({ src, alt, upImg }: Props) => {
	return (
		<div className="main_img">
			<Image
				priority={false}
				src={src}
				alt={alt}
				width={200}
				className={`img ${upImg ? "img_up" : "img_down"}`}
				unoptimized
			/>
		</div>
	);
};

export default Offer_img;
