import React, { useContext, useEffect, useRef } from "react";
import { AppState } from "../App";
import axios from "../Resources/axiosConfig";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function AskQuestion() {
	const { user, setuser } = useContext(AppState);
	console.log(user.userid);

	const token = localStorage.getItem("token");
	const navigate = useNavigate();
	const v4Id = uuidv4();

	const titleDom = useRef(null);
	const descriptionDom = useRef(null);
	async function postQuestions(e) {
		e.preventDefault();
		const titleValue = titleDom.current.value;
		const descriptionValue = descriptionDom.current.value;
		console.log(titleValue, descriptionValue);
		if (!titleValue || !descriptionValue) {
			alert("all fields required");
			return;
		}
		try {
			await axios.post(
				"/questions/post-question",
				{
					questionid: v4Id,
					userid: user.userid,
					title: titleValue,
					description: descriptionValue,
				},
				{
					headers: {
						Authorization: "Bearer " + token,
					},
				}
			);
			alert("question posted");
			navigate("/questions");
		} catch (error) {
			console.log(error.response);
		}
	}

	return (
		<div className="bg-gray-200">
			<div className="p-10 pl-20">
				<h1 className="text-3xl underline decoration-solid">
					steps how to write a good questions
				</h1>
				<ul className="text-lg italic list-disc">
					<li className="pb-2 pt-3">
						Summmerize your questions in to one line title
					</li>
					<li className="pb-2">Describe yor question more details</li>

					<li className="pb-2">
						Describe what you tried and what you expected to happen.
					</li>
					<li className="pb-2">Review and post it here</li>
				</ul>
			</div>
			<br />

			<div className="mx-30">
				<h1 className="text-3xl text-center pr-20 mb-8">Post Your Question</h1>
				<input
					type="text"
					className="p-3 w-3/4 border-gray-400  border rounded-md border-radious-2rem bg-gray-50 ml-20 "
					placeholder=" Question title"
					ref={titleDom}
				/>
				<br />
			</div>
			<br />
			<div className="mx-30">
				<input
					type="text"
					className="p-3 w-3/4 border-gray-500 border rounded-lg bg-gray-50 ml-20 max-h-30 pb-28 text-align-top"
					placeholder="question details..."
					ref={descriptionDom}
				/>
			</div>
			<div className="ml-20 mt-6 pb-10">
				<button
					onClick={postQuestions}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
					type="button"
				>
					Post question
				</button>
			</div>
		</div>
	);
}

export default AskQuestion;
