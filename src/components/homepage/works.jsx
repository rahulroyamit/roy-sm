import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./Logo_Mindfire_Digital.png"
								alt="Mindfire Digital"
								className="work-image"
							/>
							<div className="work-title">Mindfire Digital LLP </div>
							<div className="work-subtitle">
								Scrum Master / Jira SME
							</div>
							<div className="work-duration">June 2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./Logo_Mindfire_Digital.png"
								alt="Mindfire Digital"
								className="work-image"
							/>
							<div className="work-title">Mindfire Digital LLP </div>
							<div className="work-subtitle">
								Project Coordinator / Scrum Master
							</div>
							<div className="work-duration">Nov2021 - June 2023</div>
						</div>
						<div className="work">
							<img
								src="./Vk Global.avif"
								alt="VK Global Learning"
								className="work-image"
							/>
							<div className="work-title">VK Global Learning PVT LTD.</div>
							<div className="work-subtitle">
							Technical Project Coordinator / Scrum Master
							</div>
							<div className="work-duration">Nov 2020 - Nov 2021</div>
						</div>
						<div className="work">
							<img
								src="./appflow_solutions_logo.jpeg"
								alt="appflow"
								className="work-image"
							/>
							<div className="work-title">Appflow Solutions PVT LTD.</div>
							<div className="work-subtitle">
							Associate Project Manager /Jira Admin
							</div>
							<div className="work-duration">Sep 2019 - Aug 2020</div>
						</div>
						<div className="work">
							<img
								src="./appflow_solutions_logo.jpeg"
								alt="appflow"
								className="work-image"
							/>
							<div className="work-title">Appflow Solutions PVT LTD.</div>
							<div className="work-subtitle">
							DevOps & Cloudnative Engineer
							</div>
							<div className="work-duration">Sep 2018 -Aug 2019</div>
						</div>
						<div className="work">
							<img
								src="./appflow_solutions_logo.jpeg"
								alt="appflow"
								className="work-image"
							/>
							<div className="work-title">Appflow Solutions PVT LTD.</div>
							<div className="work-subtitle">
							Associate Software Engineer
							</div>
							<div className="work-duration">April 2017 - Aug 2018</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
