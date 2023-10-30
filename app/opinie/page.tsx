import { feedback } from "../../data/feedback/feedback";
import Image from "next/image";
import { links } from "@/data/links";

const Feedback = () => {
	return (
		<div className="feedback">
			<div className="feedback_img">
				<Image
					src={links[4].img}
					alt={links[4].alt}
					priority={true}
					width={0}
					height={0}
					sizes="100vw"
					style={{ width: "100%", height: "auto" }}
				/>
			</div>
			<div className="container">
				{feedback.map((feed) => (
					<div className="feed" key={feed.id}>
						<div className="desc">
							{feed.desc}
							<span className="name"> {feed.name}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Feedback;
