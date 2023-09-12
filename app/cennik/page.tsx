import { prices } from "../../data/offer/prices";

const Prices = () => {
	return (
		<div className="boxes">
			<h1>Cennik</h1>
			<div className="boxes_groups">
				{prices.map((el) => (
					<div className="boxes_group" key={el.name}>
						<h2>{el.name}</h2>
						<div className="box group"></div>
							{el.desc.map((x) => (
								<>
									<div className="box_titles" key={x.id}>
										<div className="box_title">{x.title}</div>
										<div className="box_time">{x.time}</div>
									</div>
									<div className="box_desc">
										<ul>
											{x.text.map((y) => (
												<li className="bullet" key={y}>
													{y}
												</li>
											))}
										</ul>
									</div>
								</>
							))}
						</div>
					</div>
				))}

				{/* <div className="boxes_group">

					<h2></h2>
					{prices_A1A2.map((el) => (
						<div className="box groupA group" key={el.id}>
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
						<div className="box groupB group" key={el.id}>
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
						<div className="box groupC group" key={el.id}>
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
						<div className="box groupAC group" key={el.id}>
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
						<div className="box groupGram group" key={el.id}>
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
					<div className="box groupYoungest group">
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
				</div> */}
			</div>
		</div>
	);
};

export default Prices;
