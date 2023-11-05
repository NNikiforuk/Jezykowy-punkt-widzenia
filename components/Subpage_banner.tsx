import Image, { StaticImageData } from "next/image";

interface Props {
	src: StaticImageData;
	alt: string;
	priority: boolean;
	width: number;
	height: number;
	sizes: string;
	style: {
		width: string;
		height: string;
	};
}

const Subpage_banner = ({
	src,
	alt,
	priority,
	width,
	height,
	sizes,
	style,
}: Props) => {
	return (
		<div className="offer_img">
			<Image
				src={src}
				alt={alt}
				priority={priority}
				width={width}
				height={height}
				sizes={sizes}
				style={style}
			/>
		</div>
	);
};

export default Subpage_banner;
