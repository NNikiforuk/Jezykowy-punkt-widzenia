"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
	links?: {
		title: string;
		href: string;
	}[];
}

const Offer_navbar = ({ links }: Props) => {
	const currentRoute = usePathname();

	return (
		<div className="nav">
			<ul>
				{links?.map((link) => (
					<li key={link.title}>
						<Link
							href={link.href}
							scroll={false}
							className={currentRoute === link.href ? "active" : ""}
						>
							{link.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Offer_navbar;
