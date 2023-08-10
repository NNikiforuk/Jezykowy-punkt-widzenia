import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";

const DropdownMenu = ({ navMobileDropdown, showNavMobileDropdown }) => {
	return (
		<div className="dropdown" ref={navMobileDropdown}>
			<button onClick={showNavMobileDropdown} className="left-arrow-icon">
				<FaAngleLeft />
			</button>
			<Link href="/link1">Link1</Link>
			<Link href="/link2">Link2</Link>
			<Link href="/link3">Link3</Link>
		</div>
	);
};

export default DropdownMenu;
