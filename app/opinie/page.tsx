import { feedback } from "../../data/feedback/feedback";

const Feedback = () => {
	return (
		<div className="feedback">
			<h1>Opinie naszych kursantów</h1>
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
