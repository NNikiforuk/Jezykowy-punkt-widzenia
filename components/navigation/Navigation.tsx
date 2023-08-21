"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import Image from "next/image";

function Navigation() {
	return (
		<Navbar expand="xl" className="navbar">
			<Container>
				<Link href="/">
					<Navbar.Brand>
						<Image
							src="/assets/images/logo.png"
							alt="logo"
							width={70}
							height={70}
							className="logo"
							priority={false}
						/>
					</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />

				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto text-center">
						<NavDropdown title="Oferta" id="basic-nav-dropdown">
							<Link href="/oferta/dla-najmlodszych" className="dropdown-item">
								Najmłodsi
							</Link>
							<Link href="/oferta/dla-doroslych" className="dropdown-item">
								Dorośli
							</Link>
							<Link href="/oferta/egzamin" className="dropdown-item">
								Egzamin
							</Link>
							<Link href="/oferta/certyfikat" className="dropdown-item">
								Certyfikat
							</Link>
						</NavDropdown>

						<Link href="/cennik" className="nav-item">
							Cennik
						</Link>
						<Link href="/tlumaczenia" className="nav-item">
							Tłumaczenia
						</Link>
						<Link href="/lektorzy" className="nav-item">
							Lektorzy
						</Link>

						<NavDropdown title="Materiały" id="basic-nav-dropdown">
							<NavDropdown title="J. niemiecki" id="basic-nav-dropdown">
								<Link
									href="/niemiecki/A1A2"
									className="dropdown-item"
								>
									A1/A2
								</Link>
								<Link
									href="/niemiecki/B1B2"
									className="dropdown-item"
								>
									B1/B2
								</Link>
							</NavDropdown>
						</NavDropdown>

						<Link href="/opinie" className="nav-item">
							Opinie
						</Link>
						<Link href="/sklep" className="nav-item">
							Sklep
						</Link>
						<Link href="/kontakt" className="nav-item">
							Kontakt
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigation;
