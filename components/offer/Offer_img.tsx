import Image, { StaticImageData } from "next/image";

interface Props {
	priority: boolean;
    src: StaticImageData;
    alt: string;
    width: number;
    className: string
}

const Offer_img = ({priority, src, alt, width, className}: Props) => {
	return (
		<div className="main_img">
			<Image
				priority={false}
				src={src}
				alt={alt}
				width={width}
				className={className}
			/>
		</div>
	);
};

export default Offer_img;
