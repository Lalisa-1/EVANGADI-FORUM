import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "..//assets/axiosConfig";
import { appcontext } from "../App.jsx";

function Answer() {
	let { user, setuser } = useContext(appcontext);
	const [questionList, setQuestionList] = useState({});
	const [answersList, setanswersList] = useState([]);
	const { questionid } = useParams();
	const answerDom = useRef();
	let token = localStorage.getItem("token");
	let navigate = useNavigate();

	async function postAnswers() {
		const answerDomValue = answerDom.current.value;
		// console.log(answerDomValue);
		try {
			let { data } = await axios.post(
				"/answers/" + questionid,
				{ userid: user.userid, questionid: questionid, answer: answerDomValue },
				{
					headers: { Authorization: "Bearer " + token },
				}
			);
			// console.log(data);
			navigate("/questions");
		} catch (error) {
			console.log(error.response);
		}
	}
	async function fetchSingleQuestions() {
		try {
			let { data } = await axios.get("/questions/" + questionid, {
				headers: { Authorization: "Bearer " + token },
			});
			// console.log(data);
			setQuestionList(data[0]);
		} catch (error) {
			console.log(error.response);
		}
	}
	async function fetchAnswers() {
		try {
			let { data } = await axios.get("/answers/" + questionid, {
				headers: { Authorization: "Bearer " + token },
			});
			console.log(data);
			setanswersList(data.answers);
		} catch (error) {
			console.log(error.response);
		}
	}

	useEffect(() => {
		fetchSingleQuestions();
		fetchAnswers();
	}, []);
	// console.log(answersList);

	return (
		<div className="bg-gray-100 pt-10">
			<div className="pl-20">
				<h1 className="text-4xl underline decoration-solid">
					<br />
					QUESTION
				</h1>
			</div>
			<div className="text-lg pl-20 mb-10">
				<h1 className="py-3 text-4xl decoration-solid">
					{questionList?.title}
				</h1>
				<p className="text-2xl bold">{questionList?.description}</p>
			</div>
			<hr />
			<div className="py-2 pl-20 ">
				<h1 className="text-5xl">Answer From The Community</h1>
			</div>
			<hr />
			<div className="bg-white-200 max-h 40px overflow-y-scroll w-3/4 py-10 pl-10 ml-20 my-5 ">
				{answersList?.map((single, i) => (
					<React.Fragment key={i}>
						<div key={i} className="flex pb-2">
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="w-20 h-30 border-2 rounded-full border-black border-solid p-5"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
									/>
								</svg>
								<h2>{single.user_name}</h2>
							</span>
							<span className="inline-block ml-10">{single.answer}</span>
						</div>
						<hr className="h-px my-2 bg-gray-300 border-0 dark:bg-gray-500 mx-5"></hr>
					</React.Fragment>
				))}
			</div>

			<div className="mx-30 ">
				<input
					type="text"
					className="p-3 w-3/4 border-gray-500 border rounded-lg bg-gray-50 ml-20 max-h-30 pb-28 text-align-top"
					placeholder="your anser..."
					ref={answerDom}
				/>
			</div>
			<div className="ml-20 mt-6 pb-10">
				<button
					onClick={postAnswers}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
					type="button"
				>
					post Answer
				</button>
			</div>
		</div>
	);
}
// }
export default Answer;
