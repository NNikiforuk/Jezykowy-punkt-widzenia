import Image from "next/image";

const Teachers = () => {
	return (
		<div className="teachers">
			<h1>Nasi lektorzy</h1>
			<div className="teacher">
				<div className="teacher_img">
					<Image
						src="/assets/images/teachers/teacher.jpg"
						alt="Anna Kowalska"
						width={120}
						height={90}
						priority={false}
					/>
				</div>
				<div className="teacher_desc">
					<div className="teacher_name">Anna Kowalska</div>
					<div className="teacher_title">Lektor j. niemieckiego</div>
				</div>
			</div>
			<div className="teacher teacher2">
				<div className="teacher_img">
					<Image
						src="/assets/images/teachers/teacher.jpg"
						alt="Anna Kowalska"
						width={120}
						height={90}
						priority={false}
					/>
				</div>
				<div className="teacher_desc">
					<div className="teacher_name">Anna Kowalska</div>
					<div className="teacher_title">Lektor j. angielskiego</div>
				</div>
			</div>
		</div>
	);
};

export default Teachers;
