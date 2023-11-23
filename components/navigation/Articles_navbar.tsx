import { links } from "@/data/links";
import Link from "next/link";
import React from "react";

const Articles_navbar = () => {
	return (
		<nav className="articles_navbar">
			<div className="articles_navbar_title">{links[3].sublinks?.Head}</div>
			<ul className="articles_navbar_list">
				{links[3].sublinks?.sublink?.map((el, index) => (
					<li key={index}>
						<Link className="nav_item" href={el.href} scroll={false}>
							{el.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Articles_navbar;
