import Image, { StaticImageData } from "next/image";

interface Props {
	src: StaticImageData;
	alt: string;
}

const Subpage_banner = ({ src, alt }: Props) => {
	return (
		<div>
			<Image
				src={src}
				alt={alt}
				priority={true}
				width="0"
				height="0"
				sizes="100vw"
				style={{ width: "100%", height: "auto" }}
			/>
		</div>
	);
};

export default Subpage_banner;
