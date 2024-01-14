import axios from "../assets/axiosConfig";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function RegisterPage({ toggle }) {
	// show/hide passowrd functionaity
	const [showPassword, setShowPassword] = useState(false);
	const [isInputClear, setInputClear] = useState(false);
	const [error, setError] = useState("");

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	// InputFocus/blur functionality
	const handleInputClear = () => {
		setInputClear(true);
	};

	const handleInputBlur = () => {
		setInputFocused(false);
	};
	const navigate = useNavigate();
	const usernameDom = useRef();
	const firstnameDom = useRef();
	const lastnameDom = useRef();
	const emailDom = useRef();
	const passwordDom = useRef();
	// input field validation
	// const inputAlert = (dom) => {
	// 	dom.current.style.backgroundColor = "#fee6e6";
	// 	dom.current.focus();
	// };

	async function handleSubmit(e) {
		e.preventDefault();
		const userValue = usernameDom.current.value;
		const firstValue = firstnameDom.current.value;
		const lastValue = lastnameDom.current.value;
		const emailValue = emailDom.current.value;
		const passwordValue = passwordDom.current.value;
		if (
			!userValue ||
			!firstValue ||
			!lastValue ||
			!emailValue ||
			!passwordValue
		) {
			alert("please provide all required information");
			return;
		}
		try {
			await axios.post("/users/register", {
				user_name: userValue,
				first_name: firstValue,
				last_name: lastValue,
				email: emailValue,
				password: passwordValue,
			});
			alert("registered successfully! Please login!");
			navigate("/login");
		} catch (error) {
			alert("something went wrong!");
			// console.log(error.response);
		}
	}

	return (
		// <>
		// 	<div className="w-1/3 ml-10 bg-blue-100 mt-10 mb-5 p-2 max-h-90 ">
		// 		<h1 className="text-2xl text-center">Create a new account</h1>
		// 		<form onSubmit={handleSubmit} className="  rounded px-8 pt-6 pb-10">
		// 			<div className="mb-4">
		// 				<input
		// 					className="shadow appearance-none border border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-green-50"
		// 					// id="username"
		// 					type="text"
		// 					placeholder="Username"
		// 					ref={usernameDom}
		// 					// value={userNameDom}
		// 				/>
		// 			</div>
		// 			<div className="mb-4">
		// 				<input
		// 					className="shadow appearance-none border rounded border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-green-50"
		// 					// id="username"
		// 					type="text"
		// 					placeholder="first name"
		// 					ref={firstnameDom}
		// 				/>
		// 			</div>
		// 			<div className="mb-4">
		// 				<input
		// 					className="shadow appearance-none border border-gray-400  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-green-50"
		// 					// id="username"
		// 					type="text"
		// 					placeholder="last name"
		// 					ref={lastnameDom}
		// 				/>
		// 			</div>
		// 			<div className="mb-4">
		// 				<input
		// 					className="shadow appearance-none border border-gray-400  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-green-50"
		// 					// id="username"
		// 					type="email"
		// 					placeholder="email"
		// 					ref={emailDom}
		// 				/>
		// 			</div>
		// 			<div className="mb-6">
		// 				<input
		// 					className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-green-50"
		// 					// id="password"
		// 					type="password"
		// 					placeholder="******"
		// 					ref={passwordDom}
		// 				/>
		// 			</div>

		// 			<div className="flex items-center justify-between px-10">
		// 				<button
		// 					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
		// 					type="submit"
		// 				>
		// 					Register
		// 				</button>
		// 				<Link to="/">
		// 					<button
		// 						onClick={() => toggle(true)}
		// 						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
		// 						type="button"
		// 					>
		// 						I have account
		// 					</button>
		// 				</Link>
		// 			</div>
		// 		</form>
		// 	</div>
		// </>
		<div className="w-2/5 bg-white mt-20 ml-20 pt-5 pb-2 mb-10 px-5 ">
			<div className="container px-6">
				<h3 className=" w-full text-xl text-center pt-6 ">Join the network</h3>
				<div className=" w-full flex justify-center pt-2 pb-10">
					<p className="mr-2">Already have an account?</p>
					<p className="text-orange-400 hover:underline">
						<Link to="#" onClick={() => toggleComponent("login")}>
							Sign in
						</Link>
					</p>
				</div>
				{error && (
					<p className="text-red-400 text-xl text-center py-2">{error.msg}</p>
				)}
				<form onSubmit={handleSubmit}>
					<input
						ref={usernameDom}
						className={`w-full mb-3 pl-4 py-3 text-base rounded-md   focus:border-blue-500  border ${
							isInputClear ? "border-orange-400" : "border-gray-400"
						}`}
						type="text"
						placeholder="Username"
						onFocus={handleInputClear}
						onBlur={handleInputBlur}
					/>

					<br />
					<div className="flex flex-col lg:flex-row">
						<input
							ref={firstnameDom}
							className="w-full lg:w-1/2   lg:mr-2 pl-4 py-3 text-base rounded-md border border-gray-400 "
							type="text"
							placeholder="First name"
						/>
						<br />

						<input
							ref={lastnameDom}
							className="w-full lg:w-1/2 lg:ml-2  pl-4 py-3 text-base rounded-md border border-gray-400 "
							type="text"
							placeholder="Last name"
						/>
					</div>
					<br />

					<input
						ref={emailDom}
						className="w-full mb-3 pl-4 py-3 text-base rounded-md border border-gray-400 "
						type="email"
						placeholder="Email address"
					/>
					<br />

					<div className="relative">
						<input
							ref={passwordDom}
							className="w-full mb-3 pl-4 py-3 text-base rounded-md border border-gray-400 "
							type={showPassword ? "text" : "Password"}
							placeholder="Password"
						/>
						<div
							className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center pr-6   cursor-pointer"
							onClick={togglePasswordVisibility}
						>
							{showPassword ? <FaEye /> : <FaEyeSlash />}
						</div>
					</div>

					<p className="text-center mb-4 text-sm">
						I agree to the
						<span className="text-orange-400 hover:underline">
							<Link to=""> privacy policy </Link>
						</span>
						and
						<span className="text-orange-400 hover:underline">
							<Link to="#">terms of service </Link>
						</span>
					</p>

					<button className="w-full bg-blue-500  hover:bg-orange-400 mb-3 pl-4 py-2 text-xl rounded-md border border-gray-400 text-white ">
						Agree and Join
					</button>

					<p className="w-full  text-orange-400 text-center hover:underline">
						<Link to="#" onClick={() => toggleComponent("login")}>
							Already have an account?
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
}

export default RegisterPage;
