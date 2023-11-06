import Link from "next/link";

interface Props {
    links?: {
        title: string,
        href: string
    }[]
}

const Offer_navbar = ({links}: Props) => {
return (
		<div className="nav">
			<ul>
				{links?.map((link) => (
					<li key={link.title}>
						<Link className="nav_item" href={link.href}>
							{link.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Offer_navbar
