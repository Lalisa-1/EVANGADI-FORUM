import React, { useState } from "react";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import bg from "../assets/image/bg.svg";

function LandingPage() {
	const [login, setlogin] = useState(true);
	// const bg = bg - svg - fsvg;

	return (
		<>
			<div
				className="flex justify-around bg-slate-50"
				style={{
					backgroundImage: `url(${bg})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					paddingTop: "80px",
					paddingBottom: "100px",
				}}
			>
				{login ? (
					<LoginPage toggle={setlogin} />
				) : (
					<RegisterPage toggle={setlogin} />
				)}

				<div className="w-1/2  mt-10">
					<h3 className="text-md text-orange-500 mt-12">About</h3>
					<h1 className="text-4xl text-blue-950 font-bold">
						Evangadi Networks
					</h1>
					<br />
					<p className="text-sm mr-20">
						No matter what stage of life you are in, whether you’re just
						starting elementary school or being promoted to CEO of a Fortune 500
						company, you have much to offer to those who are trying to follow in
						your footsteps.
					</p>
					<br />
					<p className="text-sm mr-20">
						Wheather you are willing to share your knowledge or you are just
						looking to meet mentors of your own, please start by joining the
						network here.
					</p>
					<br />
					<br />
					<div>
						<a
							href="#"
							className="inline-block text-lg px-8 mr-10 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-orange-700 mt-4 lg:mt-0 bg-orange-400"
						>
							HOW IT WORKS
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default LandingPage;
