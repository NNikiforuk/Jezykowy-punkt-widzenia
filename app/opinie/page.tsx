import Subpage_banner from "@/components/Subpage_banner";
import { feedback } from "../../data/feedback/feedback";
import { links } from "@/data/links";

const Feedback = () => {
	return (
		<div className="feedback">
			<Subpage_banner
				src={links[4].img}
				alt={links[4].alt}
				srcSmaller={links[4].imgSmaller}
			/>

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
