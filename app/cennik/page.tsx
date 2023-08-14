import {
	prices_A1A2,
	prices_B1B2,
	prices_C1C2,
	prices_gram,
	prices_extended,
} from "../../data/cennik.js";

const Prices = () => {
	return (
		<div className="boxes">
			<h1>Cennik</h1>
			<div className="boxes_groups">
				<div className="boxes_group">
					<h2>A1 / A2</h2>
					{prices_A1A2.map((el) => (
						<div className="box groupA" key={el.id}>
							<div className="box_titles">
								<div className="box_title">{el.title}</div>
								<div className="box_time">{el.time}</div>
							</div>
							<div className="box_desc">
								<ul>
									{el.desc.map((x) => (
										<li className="bullet" key={x}>
											{x}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
				<div className="boxes_group">
					<h2>B1 / B2</h2>
					{prices_B1B2.map((el) => (
						<div className="box groupB" key={el.id}>
							<div className="box_titles">
								<div className="box_title">{el.title}</div>
								<div className="box_time">{el.time}</div>
							</div>
							<div className="box_desc">
								<ul>
									{el.desc.map((x) => (
										<li className="bullet" key={x}>
											{x}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
				<div className="boxes_group">
					<h2>C1 / C2</h2>
					{prices_C1C2.map((el) => (
						<div className="box groupC" key={el.id}>
							<div className="box_titles">
								<div className="box_title">{el.title}</div>
								<div className="box_time">{el.time}</div>
							</div>
							<div className="box_desc">
								<ul>
									{el.desc.map((x) => (
										<li className="bullet" key={x}>
											{x}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
				<div className="boxes_group">
					<h2>A1 / C2</h2>
					{prices_extended.map((el) => (
						<div className="box groupAC" key={el.id}>
							<div className="box_titles">
								<div className="box_title">{el.title}</div>
								<div className="box_time">{el.time}</div>
							</div>
							<div className="box_desc">
								<ul>
									{el.desc.map((x) => (
										<li className="bullet" key={x}>
											{x}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
				<div className="boxes_group">
					<h2>Gramatyka</h2>
					{prices_gram.map((el) => (
						<div className="box groupGram" key={el.id}>
							<div className="box_titles">
								<div className="box_title">{el.title}</div>
								<div className="box_time">{el.time}</div>
							</div>
							<div className="box_desc">
								<ul>
									{el.desc.map((x) => (
										<li className="bullet" key={x}>
											{x}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
				<div className="boxes_group">
					<h2>Dla najmłodszych</h2>
					<div className="box groupYoungest">
						<div className="box_titles">Dla najmłodszych</div>
						<div className="box_desc text">
							Cena do indywidualnego ustalenia w zależności od klasy i poziomu
							kursanta
						</div>
					</div>
				</div>
				<div className="boxes_group">
					<div className="text info">
						Kursy odbywają się od poniedziałku do soboty. Możliwa płatność
						ratalna
					</div>
				</div>
			</div>
		</div>
	);
};

export default Prices;
