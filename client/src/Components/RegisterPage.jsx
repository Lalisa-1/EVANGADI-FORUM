import axios from "../assets/axiosConfig";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage({ toggle }) {
	const navigate = useNavigate();
	const usernameDom = useRef();
	const firstnameDom = useRef();
	const lastnameDom = useRef();
	const emailDom = useRef();
	const passwordDom = useRef();

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
			console.log(error.response);
		}
	}

	return (
		<>
			<div className="w-1/3 ml-10 bg-blue-100 mt-10 mb-5 p-2 max-h-90 ">
				<h1 className="text-2xl text-center">Create a new account</h1>
				<form onSubmit={handleSubmit} className="  rounded px-8 pt-6 pb-10">
					<div className="mb-4">
						<input
							className="shadow appearance-none border border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-green-50"
							// id="username"
							type="text"
							placeholder="Username"
							ref={usernameDom}
							// value={userNameDom}
						/>
					</div>
					<div className="mb-4">
						<input
							className="shadow appearance-none border rounded border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-green-50"
							// id="username"
							type="text"
							placeholder="first name"
							ref={firstnameDom}
						/>
					</div>
					<div className="mb-4">
						<input
							className="shadow appearance-none border border-gray-400  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-green-50"
							// id="username"
							type="text"
							placeholder="last name"
							ref={lastnameDom}
						/>
					</div>
					<div className="mb-4">
						<input
							className="shadow appearance-none border border-gray-400  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-green-50"
							// id="username"
							type="email"
							placeholder="email"
							ref={emailDom}
						/>
					</div>
					<div className="mb-6">
						<input
							className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-green-50"
							// id="password"
							type="password"
							placeholder="******"
							ref={passwordDom}
						/>
					</div>

					<div className="flex items-center justify-between px-10">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Register
						</button>
						<Link to="/">
							<button
								onClick={() => toggle(true)}
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
								type="button"
							>
								I have account
							</button>
						</Link>
					</div>
				</form>
			</div>
		</>
	);
}

export default RegisterPage;
