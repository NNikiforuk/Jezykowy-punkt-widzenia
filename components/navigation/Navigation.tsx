"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { navbar_links } from "@/data/navbar/navbar_links";
import { MyLinks } from "./NavLinks";

const Navigation = () => {
	const [open, setOpen] = useState<boolean>(false);

	const close = () => {
		setOpen(false);
	};

	return (
		<nav>
			<div className="nav_container">
				<div className="logo_container">
					<Link href="/">
						<Image
							src="/assets/images/navbar/logo.png"
							alt="logo"
							width={70}
							height={70}
							className="logo"
						/>
					</Link>
					<div className="burger_btn" onClick={() => setOpen(!open)}>
						{open ? <RxCross1 /> : <RiMenu3Line />}
					</div>
					<div className="site_name">
						Językowy punkt widzenia
					</div>
				</div>
				<ul className="navlist">
					<MyLinks link={navbar_links[0]} close={close} open={false} />
					<li>
						<Link onClick={close} href="/cennik">
							Cennik
						</Link>
					</li>
					<li>
						<Link onClick={close} href="/tlumaczenia">
							Tłumaczenia
						</Link>
					</li>
					<li>
						<Link onClick={close} href="/lektorzy">
							Lektorzy
						</Link>
					</li>
					<MyLinks link={navbar_links[1]} close={close} open={false} />
					<li>
						<Link onClick={close} href="/opinie">
							Opinie
						</Link>
					</li>
					<li>
						<Link onClick={close} href="/kontakt">
							Kontakt
						</Link>
					</li>
				</ul>

				{/* Mobile */}
				<ul className={`navlist_mobile ${open ? "left0" : "left100"}`}>
					<MyLinks link={navbar_links[0]} close={close} open={open} />
					<li>
						<Link onClick={close} href="/cennik">
							Cennik
						</Link>
					</li>
					<li>
						<Link onClick={close} href="/tlumaczenia">
							Tłumaczenia
						</Link>
					</li>
					<li>
						<Link onClick={close} href="/lektorzy">
							Lektorzy
						</Link>
					</li>
					<MyLinks link={navbar_links[1]} close={close} open={open} />
					<li>
						<Link onClick={close} href="/opinie">
							Opinie
						</Link>
					</li>
					<li>
						<Link onClick={close} href="/kontakt">
							Kontakt
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
