import React from "react";

function article_1() {
	return {
		date: "31 July 2019",
		title: "The Evolution Of Orchestration:Cloud Orchestration",
		description:
			"Orchestration is the automated configuration, coordination, and management of computer systems and software. In the cloud, orchestration is essential for managing the complexity of distributed systems and ensuring that applications run smoothly. In this article, we'll explore the benefits of cloud orchestration and how it can help your organization achieve its goals.",
		keywords: [
			"The Benefits of Cloud Orchestration",
			"Rahul",
			"Rahul R",
			"Rahul Roy",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
					text-align: justify;
				}

				.randImage {
					align-self: center;
					width = "200px"
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						<h1 style={{color: "red"}}>
							ORCHESTRATION
						</h1>
					</div>
				<div>
					<img	
						className=""
						src="../orchestration.png"
						alt="random"
						width = "800px" 
						align-self="center"
						
					/>
					<p><strong>Orchestration is the automated configuration, coordination, and management of computer systems and software.</strong> {' '}
					Orchestration refers to software platforms and services that <strong>automate and orchestrate key IT and business processes </strong> to help streamline and simplify operations management for IT personnel.
					<strong>By automating the configuration, management and interoperability of disparate computer systems, applications and services</strong>, orchestration can free IT from the burden of managing a variety of mission-critical but often complex tasks and processes.</p>	
					<p>Orchestration has seen a surge in interest and use in recent years as emerging IT trends like cloud provisioning and container application deployment have gained mainstream acceptance by enterprises.</p>
					<p>An Orchestration process can cross all management disciplines and interact with hosted services and all types of infrastructure elements. These capabilities provide a powerful system for managing IT and Business processes quickly and reliably.</p>
					<p>Numerous vendors have emerged to compete in the application orchestration space for cloud, including <strong>Red Hat with CloudForms, Gigaspaces with Cloudify, Kubernetes and the free Ansible software platform. </strong></p>
					<p>Some of these tools like CloudForms tend to focus more on infrastructure orchestration, while other orchestration solutions like Kubernetes and Puppet Enterprise focus on application orchestration and, specifically in many cases, container application orchestration.</p>

					<h2 style={{color: "red"}}>WHAT IS CLOUD ORCHESTRATION?</h2>
					<p><strong>Cloud orchestration </strong> refers to the arrangement and coordination of automated tasks resulting in a consolidated process or workflow. Many IT operations organizations implement automation in an ad hoc, opportunistic fashion that yields islands of automation with low operational agility and high costs. IT operations leaders should avoid these types of implementations, which introduce risk and result in expensive mistakes.
					Cloud orchestration offers a systematic approach that maximizes the automation benefits of agility and reduces costs</p>
					<img	
						className=""
						src="../cloud-orchestration.png"
						alt="random"
						width = "800px" 
						align-self="center"
						
					/>
					<h2 style={{color: "red"}}>Why Cloud Orchestration?	</h2>
					<p><strong>Cloud orchestration </strong>is essential for managing the complexity of distributed systems and ensuring that applications run smoothly.Cloud orchestration allows businesses to accelerate delivery for new innovations, applications, and hybrid infrastructure by orchestrating processes across domains, systems, and teams. It also leverages a unified portal and cloud-inspired IT service model with full-stack automation and monitoring. This improves the customer experience and provides error-free delivery and continuous compliance.</p>
					<h2 style={{color: "red"}}>5 Top Benefits of Cloud Orchestration.</h2>
					<ol style={{ listStyle: 'bullet' }}>
                    <li><strong>Cost Reduction and Scaling </strong><p>By coordinating the processes, it reduces the amount of IT resources required and the number of system administrators. Physical resources are coordinated with virtual resources, enabling rapid scaling just when it is needed.</p></li>
                    <li><strong>Efficiency</strong>
					<p>Cloud Orchestration simplifies management of repetitive tasks via automation. It merges availability, scaling, failure recovery, dependency management, and numerous other tasks and attributes into a single process that can tremendously reduce errors and issues.</p>
					</li>
                    <li><strong>DevOps Support </strong>
					<p>Cloud Orchestration supports self-service portals, which allows you to choose from standard offerings. This facilitates innovation and efficiency for DevOps teams. You also get interconnections to heterogeneous devices, which also provides more resiliency.</p>
					</li>
					<li><strong>Enhanced Visibility </strong>
					<p>Cloud Orchestration provides visibility into resources and processes that simple automation lacks. For example, a business can regulate capacity via preset resource templates for application deployment and track all resource requests seamlessly in real-time.</p>
					</li>
					<li><strong>Improved Security </strong>
					<p>Orchestration software helps IT organizations standardize templates and enforce security practices. It is also a good defense against VM sprawl -- providing visibility into, and control over, cloud resources and, implicitly, costs.</p>
					</li>
					
                </ol>
				<h2 style={{color: "red"}}>CLOUD ORCHESTRATION SOLUTIONS.</h2>
				<p><strong>Cloud Orchestration solutions </strong> offer greater flexibility and simplified operations to securely create, deploy, and operate applications and services across hybrid clouds and increase the speed of delivery.</p>
				<p><strong>Cloud orchestration tools</strong>, whether native to the IaaS platform or 3rd party software tools, enumerate the resources, instance types, IAM roles, etc. that are required, as well as the configuration of those resources and the interconnections between them. Engineers can use tools like <strong>AWS CloudFormation or VMware’s vRealize Orchestrator </strong> to create declarative templates that orchestrate these processes into a single workflow, so that the “new environment” workflow described above becomes a single API call.</p>
				<img	
						className=""
						src="../CO-imaghe.png"
						alt="random"
						width = "800px" 
						align-self="center"
						
					/>
				<h2 style={{color: "red"}}>Some Of The Known Orchestration Software/Engine/Tools are:</h2>
				<ol style={{ listStyleType: 'upper-latin' }}>
					<li><strong>Ansible</strong> - Ansible is an open-source automation engine that automates software provisioning, configuration management, and application deployment.</li>
					<li><strong>Apache Airflow</strong> - Apache Airflow is a platform to programmatically author, schedule and monitor workflows.</li>
					<li><strong>Apache Oozie</strong> - Apache Oozie is a workflow scheduler system to manage Apache Hadoop jobs.</li>
					<li><strong>Apache Zookeeper</strong> - Apache ZooKeeper is a distributed coordination service to manage a large set of hosts.</li>
					<li><strong>Cloudify</strong> - Cloudify is an open-source cloud orchestration platform.</li>
					<li><strong>IBM UrbanCode</strong> - IBM UrbanCode is a set of application release automation tools.</li>
					<li><strong>Jenkins</strong> - Jenkins is an open-source automation server.</li>
					<li><strong>Kubernetes</strong> - Kubernetes is an open-source container orchestration platform.</li>
					<li><strong>OpenStack Heat</strong> - OpenStack Heat is an orchestration service to launch multiple composite cloud applications based on templates.</li>
					<li><strong>Puppet</strong> - Puppet is an open-source configuration management tool.</li>
					<li><strong>SaltStack</strong> - SaltStack is an open-source configuration management and remote execution application.</li>
					<li><strong>VMware vRealize Orchestrator</strong> - VMware vRealize Orchestrator is a workflow automation tool.</li>
					<li><strong>Red Hat Ansible Tower</strong> - Red Hat Ansible Tower is a web-based solution that makes Ansible even more easy to use for IT teams of all kinds.</li>
					<li><strong>Red Hat CloudForms</strong> - Red Hat CloudForms is an open-source cloud management platform.</li>
					<li><strong>Red Hat Satellite</strong> - Red Hat Satellite is a systems management solution that makes Red Hat infrastructure easier to deploy, scale, and manage across physical, virtual, and cloud environments.</li>
					<li><strong>Red Hat OpenShift</strong> - Red Hat OpenShift is a container application platform that brings Docker and Kubernetes to the enterprise.</li>
					<li><strong>Red Hat OpenStack Platform</strong> - Red Hat OpenStack Platform is a cloud computing platform that virtualizes resources from industry-standard hardware, organizes those resources into clouds, and manages them so users can access what they need—when they need it.</li>
					<li><strong>Red Hat Virtualization</strong> - Red Hat Virtualization is an open, software-defined platform that virtualizes Linux and Microsoft Windows workloads.</li>	
					
					</ol>

</div>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1 ];

export default myArticles;
