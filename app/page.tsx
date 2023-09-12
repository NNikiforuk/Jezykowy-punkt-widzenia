import { CgArrowLongRightR } from "react-icons/cg";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import Image from "next/image";
import img from "../public/assets/images/home.jpg";
import Box from "@/components/home/Box";
import { home_boxes_links } from "@/data/home_boxes";

const Home = () => {
	return (
		<>
			<div className="home_mobile">
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
			<div className="home_desktop">
				<Image
					src={img}
					objectFit="cover"
					quality={100}
					alt="background image"
				/>
				<div className="home_boxes">
					<Box data={home_boxes_links} />
				</div>
			</div>
		</>
	);
};

export default Home;
