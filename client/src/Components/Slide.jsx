import React, { useState } from "react";
import Login from "./LoginPage";
import RegisterPage from "./RegisterPage";

function Slide() {
	const [activePage, setActivePage] = useState("LoginPage");

	const handlePageChange = (page) => {
		setActivePage(page);
	};

	return (
		<div>
			<button onClick={() => handlePageChange("LoginPage")}>LoginPage</button>
			<button onClick={() => handlePageChange("RegisterPage")}>
				RegisterPage
			</button>

			<div className={`page ${activePage === "LoginPage" ? "" : "slide-left"}`}>
				<Login />
			</div>

			<div
				className={`page ${activePage === "RegisterPage" ? "" : "slide-right"}`}
			>
				<RegisterPage />
			</div>
		</div>
	);
}

export default Slide;
