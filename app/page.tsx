import { IoTriangleOutline } from "react-icons/io5";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";

import { MdOutlineCompareArrows } from "react-icons/md";

import Image from "next/legacy/image";
import img from "../public/assets/images/landing_page/home.jpg";
import Box from "@/components/home/Box";

const Home = () => {
	return (
		<>
			<div className="home_mobile">
				<h1 className="home_headline">JĘZYKOWY PUNKT WIDZENIA</h1>
				<div className="arrow_icon">
					<MdOutlineCompareArrows />
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
			<div className="css_element">
				<div className="element left"></div>
				<div className="element right"></div>
			</div>
			<div className="home_boxes_mobile">
				<Box />
			</div>
			<div className="home_desktop">
				<Image
					src={img}
					objectFit="cover"
					quality={100}
					alt="opis szkoły językowej"
					priority
				/>
				<div className="home_boxes">
					<Box />
				</div>
			</div>
		</>
	);
};

export default Home;
