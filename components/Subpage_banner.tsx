import Image, { StaticImageData } from "next/image";

interface Props {
	src: StaticImageData;
	srcSmaller: StaticImageData;
	alt: string;
}

const Subpage_banner = ({ src, srcSmaller, alt }: Props) => {
	return (
		<div className="subpage_banner">
			<div className="img">
				<Image
					src={srcSmaller}
					alt={alt}
					priority={true}
					width="0"
					height="0"
					sizes="100vw"
					style={{ width: "100%", height: "auto" }}
				/>
			</div>
			<div className="img_desktop">
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
		</div>
	);
};

export default Subpage_banner;
