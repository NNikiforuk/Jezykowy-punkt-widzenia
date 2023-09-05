"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { links_offer, links_materials } from "./MyLinks";
import { MyLinks } from "./NavLinks";

const Navigation = () => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<nav>
			<div className="nav_container">
				<div className="logo_container">
					<Link href="/">
						<Image
							src="/assets/images/logo.png"
							alt="logo"
							width={70}
							height={70}
							className="logo"
						/>
					</Link>
					<div className="burger_btn" onClick={() => setOpen(!open)}>
						{open ? <RxCross1 /> : <RiMenu3Line />}
					</div>
				</div>
				<ul className="navlist">
					<MyLinks link={links_offer} />
					<li>
						<Link href="/cennik">Cennik</Link>
					</li>
					<li>
						<Link href="/tlumaczenia">Tłumaczenia</Link>
					</li>
					<li>
						<Link href="/lektorzy">Lektorzy</Link>
					</li>
					<MyLinks link={links_materials} />
					<li>
						<Link href="/opinie">Opinie</Link>
					</li>
					<li>
						<Link href="/kontakt">Kontakt</Link>
					</li>
				</ul>

				{/* Mobile */}
				<ul className={`navlist_mobile ${open ? "left0" : "left100"}`}>
					<MyLinks link={links_offer} />
					<li>
						<Link href="/cennik">Cennik</Link>
					</li>
					<li>
						<Link href="/tlumaczenia">Tłumaczenia</Link>
					</li>
					<li>
						<Link href="/lektorzy">Lektorzy</Link>
					</li>
					<MyLinks link={links_materials} />
					<li>
						<Link href="/opinie">Opinie</Link>
					</li>
					<li>
						<Link href="/kontakt">Kontakt</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
