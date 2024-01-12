import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../assets/axiosConfig";
// import { IoIosEye } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function Login({ toggle }) {
	const navigate = useNavigate();
	const emailDom = useRef(null);
	const passwordDom = useRef(null);
	const [password, setPassword] = useState("");
	const [togglePassword, setTogglePassword] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();

		const emailValue = emailDom.current.value;
		const passwordValue = passwordDom.current.value;
		if (!emailValue || !passwordValue) {
			alert("please provide all required information");
			return;
		}

		try {
			const { data } = await axios.post("users/login", {
				email: emailValue,
				password: passwordValue,
			});
			alert("login successfull,");

			localStorage.setItem("token", data.token);
			navigate("/questions");
			console.log(data);
		} catch (error) {
			alert(error?.response?.data?.msg);
			console.log(error.response.data);
		}
	}

	// show/hide passowrd functionaity

	const showHidePassowrd = (e) => {
		e.preventDefault();
		setTogglePassword(!togglePassword);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	return (
		<>
			<div className="w-2/5 bg-white mt-20 ml-20 pt-5 pb-2 mb-10 px-5">
				<div className="text-center text-xl mt">Login to your account</div>
				<div className="p-1 text-center">
					<span>Don't have an account? </span>
					<span
						onClick={() => {
							toggle(false);
						}}
						className=" text-orange-500 text-right hover:cursor-pointer"
					>
						Create a new account
					</span>
				</div>
				<form
					onSubmit={handleSubmit}
					className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
				>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							// htmlFor="username"
						></label>
						<input
							className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="email"
							type="email"
							placeholder="Email address"
							ref={emailDom}
						/>
					</div>

					<div className="relative mb-4">
						<input
							className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							type={togglePassword ? "text" : "password"}
							placeholder="password"
							onChange={handlePasswordChange}
							ref={passwordDom}
						/>
						<span
							className="absolute right-1 top-1/4 transform -translate-x-1/2 hover:text-orange-400 opacity-50"
							onClick={showHidePassowrd}
						>
							{togglePassword ? <FaEye /> : <FaEyeSlash />}
						</span>
					</div>

					<div className="flex items-center justify-between py-10">
						<button
							className="bg-blue-500 hover:bg-red-400 text-white font-bold py-3 px-20 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Log In
						</button>

						<Link
							className="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-blue-800"
							href="#"
						>
							Forgot Password?
						</Link>
					</div>
				</form>
			</div>
		</>
	);
}
export default Login;
