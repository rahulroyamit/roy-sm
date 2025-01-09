import React from "react";

import Skills from "./skills";

import INFO from "../../data/user";

import "./styles/allSkills.css";

const AllSkills = () => {
	return (
		<div className="all-skills-container">
			{INFO.skills.map((skills, index) => (
				<div className="all-skills-skill" key={index}>
					<Skills
						logo={skills.logo}
						title={skills.title}
						description={skills.description}
						linkText={skills.linkText}
						link={skills.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllSkills;
