import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllSkills from "../components/skills/allSkills";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/skills.css";

const Skills = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "skills");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Skills | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>
			

			<div className="page-content">
				<NavBar active="skills" />
				<div className="content-wrapper">
					<div className="skills-logo-container">
						<div className="skills-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="skills-container">
						<div className="title skills-title">
							Tools I’ve worked on during my career as a Scrum Master, Technical Project coordinator,Cloudnative Engineer and Developer.
						</div>
						<div className="subtitle skills-subtitle">
						Scrum Master at Mindfire Digital LLP | Agile Practitioner | Project Coordinator | Jira & Confluence SME | Remote Project Management Expert | Scrum & Kanban Specialist | Smartsheet for Streamlined Workflow Management.
						<p className=" skills-subtitle-list"> Here are the list of tools and technologies I have worked on.</p>
						</div>
						<div className="skills-list">
							<AllSkills />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Skills;
