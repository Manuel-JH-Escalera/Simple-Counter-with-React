import React from "react";

export default function SecondsCounter(props) {
	var seconds = 0;

	setInterval(function () {
		let firstdigit = Math.floor(seconds / 1) % 10;
		let seconddigit = Math.floor(seconds / 10) % 10;
		let thirdtdigit = Math.floor(seconds / 100) % 10;
		let fourdigit = Math.floor(seconds / 1000) % 10;
		let fivedigit = Math.floor(seconds / 10000) % 10;
		let sixdigit = Math.floor(seconds / 100000) % 10;
		document.getElementById("1d").innerHTML = firstdigit;
		document.getElementById("2d").innerHTML = seconddigit;
		document.getElementById("3d").innerHTML = thirdtdigit;
		document.getElementById("4d").innerHTML = fourdigit;
		document.getElementById("5d").innerHTML = fivedigit;
		document.getElementById("6d").innerHTML = sixdigit;
		seconds++;
	}, 1000);

	return (
		<div className="container-fluid bg-dark text-center p-5 text-white">
			<div className="row col">
				<div className="icon box col ">
					<i className="far fa-clock bg-secondary display-1 rounded bg-opacity-25 p-3 m-3"></i>
				</div>
				<div
					className="col bg-secondary display-1 rounded bg-opacity-25 p-3 m-3"
					id="6d"></div>
				<div
					className="col bg-secondary display-1 rounded bg-opacity-25 p-3 m-3"
					id="5d"></div>
				<div
					className="col bg-secondary display-1 rounded bg-opacity-25 p-3 m-3"
					id="4d"></div>
				<div
					className="col bg-secondary display-1 rounded bg-opacity-25 p-3 m-3"
					id="3d"></div>
				<div
					className="col bg-secondary display-1 rounded bg-opacity-25 p-3 m-3"
					id="2d"></div>
				<div
					className="col bg-secondary display-1 rounded bg-opacity-25 p-3 m-3"
					id="1d"></div>
			</div>
		</div>
	);
}
