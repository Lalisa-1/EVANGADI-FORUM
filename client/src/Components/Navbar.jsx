// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
// 	const [isLoggedIn, setLoggedIn] = useState(false);

// 	const handleSignIn = () => {
// 		// Perform authentication logic, set isLoggedIn to true
// 		setLoggedIn(true);
// 	};

// 	const handleSignOut = () => {
// 		// Perform sign-out logic, set isLoggedIn to false
// 		setLoggedIn(false);
// 	};

// 	return (
// 		<nav className="flex items-center justify-between flex-wrap bg-white py-5 px-20">
// 			<div className="flex items-center flex-shrink-0 text-black mr-6">
// 				<img
// 					src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"
// 					alt=""
// 				/>
// 			</div>
// 			<div className="w-full block flex-grow lg:flex lg:items-right lg:w-auto justify-around">
// 				<div className=" lg:flex-grow pl-80 justify-between items-right">
// 					<a
// 						href="#responsive-header"
// 						className="block mt-4 lg:inline-block lg:mt-0 text-black py-4 hover:text-orange mr-4"
// 					>
// 						Home
// 					</a>
// 					<a
// 						href="#responsive-header"
// 						className="block mt-5 lg:inline-block lg:mt-0 text-black hover:text-orange "
// 					>
// 						How it works
// 					</a>
// 				</div>
// 				{/* <div>
// 					<a
// 						href="/login"
// 						className="inline-block text-md px-12 mr-10 py-4 pr-15 leading-none border rounded text-white border-white hover:border-transparent hover:text-white-500 hover:bg-orange-400 mt-4 lg:mt-0 bg-blue-500"
// 					>
// 						SIGN IN
// 					</a>
// 				</div> */}
// 				<div
// 					href="/login"
// 					className="inline-block text-md px-12 mr-10 py-4 pr-15 leading-none border rounded text-white border-white hover:border-transparent hover:text-white-500 hover:bg-orange-400 mt-4 lg:mt-0 bg-blue-500"
// 				>
// 					{isLoggedIn ? (
// 						<div>
// 							<Link to="/">
// 								<button onClick={handleSignOut}>LOG OUT</button>
// 							</Link>
// 						</div>
// 					) : (
// 						<div>
// 							<Link to="/">
// 								<button onClick={handleSignIn}>SIGN IN</button>
// 							</Link>
// 						</div>
// 					)}
// 				</div>
// 			</div>
// 		</nav>
// 	);
// }

// export default Navbar;
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
	// console.log(windowWidth);
	const loggingOut = () => {
		localStorage.removeItem("token");
		navigate("/login");
	};
	useEffect(() => {
		// logingOut();
	}, []);
	return (
		<div className="bg-white w-full px-20 fixed top-0 left-0 py-5 shadow z-10 ">
			{/* //  <div className="flex items-center justify-between flex-wrap bg-white py-10 px-20"> */}
			<div className="  flex justify-between ml-20  pl-[20px] py-1 ">
				<Link to="/login">
					<img
						className="max-w-none"
						src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"
						alt="Evangadi Logo"
					/>
				</Link>
				{/* {windowWidth > 990 ? ( */}
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
							className="py-2 hover:text-orange-500"
							to="/"
							onClick={loggingOut}
						>
							LOG OUT
						</Link>
					)}
					{/* <Link
						className={`py-2 ' ${
							token
								? " hover:text-orange-500"
								: "hover:bg-orange-500 text-white  px-20   rounded-md border border-gray-600 bg-blue-600"
						} `}
						to="/sign in"
						onClick={loggingOut}
					>
						{!token ? "SIGN IN" : "LOG OUT"}
					</Link> */}
				</div>
				{/* ) : (
					<div>
						<Slide />
					</div> */}
				{/* )} */}
			</div>
		</div>
	);
}

export default Navbar;
