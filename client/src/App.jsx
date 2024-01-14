import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "./Resources/axiosConfig";
import HomePage from "./Components/HomePage";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import SharedLayout from "./Components/SharedLayout";
import LandingPage from "./Components/LandingPage";
import AskQuestion from "./Components/AskQuestion";
import AnswerPage from "./Components/AnswerPage";

export const AppState = createContext();

function App() {
	const [user, setuser] = useState({});

	const navigate = useNavigate();
	const token = localStorage.getItem("token");

	async function checkUser() {
		try {
			const { data } = await axios.get("/users/check", {
				headers: { Authorization: "Bearer " + token },
			});
			// console.log(data);
			setuser(data);
		} catch (error) {
			console.error("Error fetching user:", error);
			navigate("/");
		}
	}

	useEffect(() => {
		checkUser();
	}, []);

	return (
		<AppState.Provider value={{ user, setuser }}>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route path="/" element={<LandingPage />} />
					<Route path="/questions" element={<HomePage />} />
					<Route path="/questions/ask" element={<AskQuestion />} />
					<Route path="/questions/:questionid" element={<AnswerPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
				</Route>
			</Routes>
		</AppState.Provider>
	);
}

export default App;
