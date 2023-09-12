import { useEffect, useState } from "react";
import Link from "next/link";
import { NavbarLinksProps } from "@/data/navbar/navbar_links";

interface Props {
	link: NavbarLinksProps;
	close: () => void;
	open: boolean;
}

export const MyLinks = ({ link, close, open }: Props) => {
	const [showingDropdown, setShowingDropdown] = useState<boolean>(false);
	const [showingDropdownMobile, setShowingDropdownMobile] =
		useState<boolean>(false);

	useEffect(() => {
		if (!open) {
			setShowingDropdownMobile(false);
		}
	}, [open]);

	return (
		<div>
			<div className="navlinks_desktop">
				<div
					className="mainlink_title"
					onMouseEnter={() => setShowingDropdown(true)}
					onMouseLeave={() => setShowingDropdown(false)}
				>
					{link.name}
				</div>
				{showingDropdown && (
					<div
						className="list_container"
						onMouseEnter={() => setShowingDropdown(true)}
						onMouseLeave={() => setShowingDropdown(false)}
					>
						<div className="arrow">
							<div className="up"></div>
						</div>

						<div className="list_container-sec">
							{typeof link.sublinks === "object" && "Head" in link.sublinks && (
								<div className="mainlink_subtitle">{link.sublinks.Head}</div>
							)}
							<ul className="mainlink_list">
								{link.sublinks?.sublink?.map((el) => (
									<li key={el.title} className="item">
										<Link href={el.href}>{el.title}</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				)}
			</div>
			{/* Mobile */}
			<div className="navlinks_mobile">
				<div
					className="mainlink_title"
					onClick={() => setShowingDropdownMobile((current) => !current)}
				>
					{link.name}
				</div>
				{showingDropdownMobile && (
					<div className="mobile_dropdown">
						{typeof link.sublinks === "object" && "Head" in link.sublinks && (
							<div className="mainlink_subtitle">{link.sublinks.Head}</div>
						)}
						<ul className="mainlink_list-mobile">
							{link.sublinks?.sublink?.map((el) => (
								<li key={el.title} className="item">
									<Link href={el.href} onClick={close}>
										{el.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};
