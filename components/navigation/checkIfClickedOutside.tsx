import { useEffect, useRef } from "react";

const checkIfClickedOutside = (callback: () => void) => {
	const ref = useRef<HTMLUListElement>(null);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				callback();
			}
		};
		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [callback]);
	return ref;
};

export default checkIfClickedOutside;
