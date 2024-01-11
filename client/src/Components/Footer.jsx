import React from "react";
// import { FaSquare, FaInstagram } from "react-icons/fa";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

function Footer() {
	return (
		<>
			<div className=" h-60 bg-gray-700 text-white flex justify-between  pt-10 px-20">
				<div>
					<div>
						<img
							src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-footer.png"
							alt=""
						/>
					</div>
					<div className="flex flex-row space-x-8 text-4xl pt-6">
						<div className="bg-slate-700 rounded-full w-10 h-10 flex items-center justify-center border border-white hover:bg-white ">
							<FaFacebookSquare className="text-white text-2xl hover:text-blue-600" />
						</div>

						<div className="bg-slate-700 rounded-full w-10 h-10 flex items-center justify-center border border-white hover:bg-white">
							<FaInstagramSquare className="text-white text-2xl hover:text-blue-600" />
						</div>

						<div className="bg-slate-700 rounded-full w-10 h-10 flex items-center justify-center border border-white hover:bg-white ">
							<IoLogoYoutube className="text-white text-2xl hover:text-red-600" />
						</div>
					</div>
				</div>
				<div>
					<h2 className="text-2xl">Useful Link</h2>
					<br />
					<a href="">How it works</a>
					<br />
					<a href="">Terms of Service</a>
					<br />
					<a href="">Privacy policy</a>
					<br />
				</div>
				<div>
					<h2 className="text-2xl">Contact Info</h2>
					<p>Evangadi Networks</p>
					<p>support@evangadi.com</p>
					<p>phone: +1-202-386-2702</p>
				</div>
			</div>
		</>
	);
}

export default Footer;
