import { CgArrowLongRightR } from "react-icons/cg";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";

const Home = () => {
	return (
		<div className="home">
			<h1 className="home_headline">JĘZYKOWY PUNKT WIDZENIA</h1>
			<div className="arrow_icon">
				<CgArrowLongRightR />
			</div>
			<h2 className="home_headline-secondary">KURSY JĘZYKOWE</h2>
			<p>ZAJĘCIA ONLINE</p>
			<div className="time">
				<div className="left_wing">
					<RiArrowLeftSFill />
				</div>
				<div>OD PON DO PT</div>
				<div className="right_wing">
					<RiArrowRightSFill />
				</div>
			</div>
		</div>
	);
};

export default Home;
