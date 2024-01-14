import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slide from "./Slide";

function Navbar() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const token = localStorage.getItem("token");
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const loggingOut = () => {
		localStorage.removeItem("token");
		navigate("/login");
	};
	useEffect(() => {
		// loggingOut();
	}, []);
	return (
		<div className="bg-white w-full px-20 fixed top-0 left-0 py-5 shadow z-10 ">
			<div className="  flex justify-between ml-20  pl-[20px] py-1 ">
				<Link to="/login">
					<img
						className="max-w-none"
						src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"
						alt="Evangadi Logo"
					/>
				</Link>
				{windowWidth > 990 ? (
					<div className=" flex space-x-6 mr-20 pr-20">
						<Link className=" hover:text-orange-500 py-2" to="/">
							Home
						</Link>
						<Link className=" hover:text-orange-500 py-2" to="/">
							How it Works
						</Link>
						{!token ? (
							<Link
								className="py-2 hover:bg-orange-500 text-white px-20 rounded-md border border-gray-600 bg-blue-600"
								to="/"
							>
								SIGN IN
							</Link>
						) : (
							<Link
								className="px-14 py-2 text-center text-white text-xl bg-blue-500 rounded-md hover:bg-orange-400"
								to="/"
								onClick={loggingOut}
							>
								Logout
							</Link>
						)}
					</div>
				) : (
					<div>
						<Slide />
					</div>
				)}
			</div>
		</div>
	);
}

export default Navbar;
