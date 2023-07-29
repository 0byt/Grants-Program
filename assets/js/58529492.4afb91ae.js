"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[84553],{6759:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(8209);const l={},i="polkasearch.xyz",o={unversionedId:"applications/polkasearch",id:"applications/polkasearch",title:"polkasearch.xyz",description:"- Team Name: Aviraj Khare",source:"@site/applications/polkasearch.md",sourceDirName:"applications",slug:"/applications/polkasearch",permalink:"/applications/polkasearch",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/polkasearch.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Tech Stack",id:"tech-stack",level:4},{value:"API Schema",id:"api-schema",level:4},{value:"Primary Entities",id:"primary-entities",level:4},{value:"Designs",id:"designs",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1",id:"milestone-1",level:3},{value:"Milestone 2",id:"milestone-2",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"polkasearchxyz"},"polkasearch.xyz"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," Aviraj Khare"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," USDC(ERC20) Address: 0x123FfB2efB8D74D10d6B3a882A94531D99234B11"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 1")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Polkasearch.xyz aims to become a discovery platform where users can discover Grants, Bounties, Jobs, Tools, Educational material for Polkadot/Substrate, all under one roof."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Grants:")," Various DAOs can place their grant information on this website for free. They will have the CRM given by us or they can point user to external website if they wish for the user to submit grant application on their own end."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bounties:")," Bounties are great way to outsource the work. You can list a task as a bounty and let developers apply for it in case it is technical bounty. A bounty is not only scoped to Technical development, it can be UI/UX, writing, etc. They can either use our CRM or can point bounty to external website."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Jobs:")," Various companies who are building on top of Polkadot ecosystem can place their jobs for free. They can either use our own CRM or they can point job to external portal of their own."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tools:")," It's hard to find libraries, tools, packages on top of Substrate ecosystem. We aim to build and integrate directory of tools. User can filter tools according to their specification. User will be able to upload information regarding a tool on the website."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Educational Material:")," Get articles, educational videos, links of various substrate topics on the website. User will be able to upload tool/library name on the website."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("h4",{id:"tech-stack"},"Tech Stack"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.djangoproject.com/"},"Django"),": We will be using Django as our Web framework."),(0,r.kt)("li",{parentName:"ul"},"Database: We will be using managed Postgresql database provided by ",(0,r.kt)("inlineCode",{parentName:"li"},"railway.app")," infrastructure."),(0,r.kt)("li",{parentName:"ul"},"Wallet: We will be using polkadot{JS} extension wallet so that user can signup/login in the website by signing a message.")),(0,r.kt)("h4",{id:"api-schema"},"API Schema"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/"),": home page, different for both authenticated and non-authenticated users."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/login"),": Used to login."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/signup"),": Used to signup."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/signout"),": Used to signout."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/grants"),": Used to see all the grants."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/grants/<grant_slug>"),": Used to look for a grant."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/api/v1/grants/apply?grant=grant_slug"),": Used to apply for a grant. Only candidate can use this."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/grants/new"),": Used to create a new grant."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/bounties"),": Used to view bounties."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/bounties/<bounty_slug>"),": Used to view a bounty."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/api/v1/bounties/apply?bounty=bounty_slug"),": Used to apply for a bounty. Only candidate can use this."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/bounties/new"),": Used to create a new bounty."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/jobs"),": Used to look for all the jobs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/jobs/<job_slug>"),": Used to look for a specific job."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/api/v1/jobs/apply?job=job_slug"),": Used to apply for a job. Only candidate can use this."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/jobs/new"),": Used to create a new job."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/tools"),": Used to view all the tools, libraries, packages, etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/tools/<tool_slug>"),": Used to view a tool."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/tools/new"),": Used to create a new tool."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/learn"),": Used to view all the learning resources."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/learn/<learn_slug>"),": Used to view detail about a learning resource."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/learn/new"),": Used to submit a new educational material.")),(0,r.kt)("p",null,"There are going to be ",(0,r.kt)("strong",{parentName:"p"},"19")," urls which means ",(0,r.kt)("strong",{parentName:"p"},"19")," HTML templates that would be rendered by Django.\nThere are going to be atleast ",(0,r.kt)("strong",{parentName:"p"},"3")," APIs which will be called by the frontend."),(0,r.kt)("h4",{id:"primary-entities"},"Primary Entities"),(0,r.kt)("p",null,"Here we have ",(0,r.kt)("strong",{parentName:"p"},"6")," primary entities."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"User: A user can either be a ",(0,r.kt)("inlineCode",{parentName:"li"},"candidate")," or an ",(0,r.kt)("inlineCode",{parentName:"li"},"employer"),". A candidate can apply for a job, bounty, grant. Candidate cannot create job, bounty, grant. Candidate can only submit a tool or educational material. An employer can create Grant, Bounty, Job. She can also submit tool, educational material. An employer cannot apply for job, bounty or grant."),(0,r.kt)("li",{parentName:"ol"},"Grant: A ",(0,r.kt)("inlineCode",{parentName:"li"},"grant")," can only be created by an employer. A candidate or multiple candidates can apply for a grant."),(0,r.kt)("li",{parentName:"ol"},"Bounty: A ",(0,r.kt)("inlineCode",{parentName:"li"},"bounty")," can only be created by an employer. A candidate or multiple candidates can apply for a bounty."),(0,r.kt)("li",{parentName:"ol"},"Job: A ",(0,r.kt)("inlineCode",{parentName:"li"},"job")," can only be created by an employer. A candidate or multiple candidate can apply for a job."),(0,r.kt)("li",{parentName:"ol"},"Tool: Both candidate and employer can add a ",(0,r.kt)("inlineCode",{parentName:"li"},"tool"),"."),(0,r.kt)("li",{parentName:"ol"},"Learn: Both candidate and employer can add a ",(0,r.kt)("inlineCode",{parentName:"li"},"learning material"),".")),(0,r.kt)("h4",{id:"designs"},"Designs"),(0,r.kt)("p",null,"Designs of few pages."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/O5nd7q9.png",alt:"Home Page"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/2Tg5bAc.png",alt:"Signup Page"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/2dIRPza.png",alt:"Create a Job Page"}))),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Where and how does your project fit into the ecosystem?\nWe will become the discovery layer of Polkadot ecosystem.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?\nDevelopers, writers, UI/UX, etc. all will be benifited by the project.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"What need(s) does your project meet?\nOur project can provide user with earning opportunities, learning material and tools required to build on top of Substrate ecosystem.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If so, how is your project different?"),(0,r.kt)("li",{parentName:"ul"},"If not, are there similar projects in related ecosystems?")),(0,r.kt)("p",{parentName:"li"},"There is one project: ",(0,r.kt)("a",{parentName:"p",href:"https://earn.superteam.fun"},"https://earn.superteam.fun")," in solana ecosystem.\nIn polkadot ecosystem, ",(0,r.kt)("a",{parentName:"p",href:"https://polkassembly.io/"},"https://polkassembly.io/")," and ",(0,r.kt)("a",{parentName:"p",href:"https://polkasearch.xyz"},"https://polkasearch.xyz")," have a few things in the intersection but our platform is more about providing opportunities to the end user in this ecosystem."))),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aviraj Khare")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Aviraj Khare"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:avirajkhare00@gmail.com"},"avirajkhare00@gmail.com"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," About to get registered")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Aviraj Khare:")," Ex Gojek. Into Web3 space since 2016. Completed two grants of Web3 foundation."),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/avirajkhare00/ink-boxes"},"https://github.com/avirajkhare00/ink-boxes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/avirajkhare00/ink-wizard"},"https://github.com/avirajkhare00/ink-wizard"))),(0,r.kt)("p",null,"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/avirajkhare00"},"https://github.com/avirajkhare00"))),(0,r.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/avirajkhare00"},"https://www.linkedin.com/in/avirajkhare00"))),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("p",null,"Currently working on CI(GitHub Actions) of this project to deploy on ",(0,r.kt)("a",{parentName:"p",href:"https://railway.app"},"Railway infrastructure"),"."),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("p",null,"This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories ",(0,r.kt)("a",{parentName:"p",href:"/docs/Support%20Docs/grant_guidelines_per_category"},"here"),". Since these will be part of the agreement, it helps to describe ",(0,r.kt)("em",{parentName:"p"},"the functionality we should expect in as much detail as possible"),", plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected."),(0,r.kt)("p",null,"Below we provide an ",(0,r.kt)("strong",{parentName:"p"},"example roadmap"),". In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We ",(0,r.kt)("em",{parentName:"p"},"recommend")," that teams structure their roadmap as 1 milestone \u2248 1 month."),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  1 FTE"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," $10,0000 USD")),(0,r.kt)("h3",{id:"milestone-1"},"Milestone 1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 5,000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0a.")),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0b.")),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide the documentation on the README of the repository. If needed, we will create ",(0,r.kt)("inlineCode",{parentName:"td"},"docs")," directory that would contain in-depth documentation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0c.")),(0,r.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Models, Views and Forms will be covered by ",(0,r.kt)("a",{parentName:"td",href:"https://docs.djangoproject.com/en/4.1/topics/testing/"},(0,r.kt)("inlineCode",{parentName:"a"},"django.test"))," module which is a sub-module of ",(0,r.kt)("inlineCode",{parentName:"td"},"unittest"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0d.")),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Completion of basic CI/CD pipeline"),(0,r.kt)("td",{parentName:"tr",align:null},"We will be using GitHub Actions to deploy the site in ",(0,r.kt)("a",{parentName:"td",href:"https://railway.app/"},"Railway's infrastructure")," so that there could be more transparency. We will be creating different integration and production environment for the deployment so that more and more people could contribute in much seamless manner.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Authentication"),(0,r.kt)("td",{parentName:"tr",align:null},"User can be authenticated either via traditional web2 username/password or via polkadot extension wallet, web3 based.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"CRM for bounties"),(0,r.kt)("td",{parentName:"tr",align:null},"We will be creating this CRM using Django. Everyone can view a bounty, candidate can apply for bounty and employer can create bounty(ies).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"CRM for jobs"),(0,r.kt)("td",{parentName:"tr",align:null},"We will be creating this CRM using Django. Everyone can view jobs, candidate can apply for a job or multiple jobs, employer can list a job or multiple jobs.")))),(0,r.kt)("h3",{id:"milestone-2"},"Milestone 2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 5,000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0a.")),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0b.")),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide the documentation on the README of the repository. If needed, we will create ",(0,r.kt)("inlineCode",{parentName:"td"},"docs")," directory that would contain in-depth documentation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0c.")),(0,r.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Models, Views and Forms will be covered by ",(0,r.kt)("a",{parentName:"td",href:"https://docs.djangoproject.com/en/4.1/topics/testing/"},(0,r.kt)("inlineCode",{parentName:"a"},"django.test"))," module which is a sub-module of ",(0,r.kt)("inlineCode",{parentName:"td"},"unittest"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0d.")),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0e.")),(0,r.kt)("td",{parentName:"tr",align:null},"Article"),(0,r.kt)("td",{parentName:"tr",align:null},"We will be publishing a blog about polkasearch on Medium and Polkadot forum.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"CRM for Grant"),(0,r.kt)("td",{parentName:"tr",align:null},"We will be creating this CRM in Django. Users can view grant. Candidate can apply for a grant. Employer can create a grant.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Tools"),(0,r.kt)("td",{parentName:"tr",align:null},"A listing page and viewing page for tools. Any user can add a tool inside polkadot ecosystem, user just needs to signup.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Educational material"),(0,r.kt)("td",{parentName:"tr",align:null},"Any user can add new listing for educational meterial for polkadot ecosystem. Everyone can view the listing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Add grants manually"),(0,r.kt)("td",{parentName:"tr",align:null},"Add atleast 5 grants manually to the platform from this list: ",(0,r.kt)("a",{parentName:"td",href:"https://substrate.io/ecosystem/projects/"},"https://substrate.io/ecosystem/projects/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Add bounties manually"),(0,r.kt)("td",{parentName:"tr",align:null},"Explore bounties by contacting companies from this list: ",(0,r.kt)("a",{parentName:"td",href:"https://substrate.io/ecosystem/projects/"},"https://substrate.io/ecosystem/projects/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"6."),(0,r.kt)("td",{parentName:"tr",align:null},"Add Jobs manually"),(0,r.kt)("td",{parentName:"tr",align:null},"Add atleast 50 jobs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"7."),(0,r.kt)("td",{parentName:"tr",align:null},"Add Tools manually"),(0,r.kt)("td",{parentName:"tr",align:null},"Add atleast 50 tools")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"8."),(0,r.kt)("td",{parentName:"tr",align:null},"Add Educational materials manually"),(0,r.kt)("td",{parentName:"tr",align:null},"Add atleast 50 educational materials")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("p",null,"Please include here"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creation of Discord Community."),(0,r.kt)("li",{parentName:"ul"},"Creation of the socials for polkasearch."),(0,r.kt)("li",{parentName:"ul"},"Reaching out to builders of Polkadot ecosystem to raise Jobs, Grants, Bounties, etc."),(0,r.kt)("li",{parentName:"ul"},"Reaching out to candidates using various social channels providing them with opportunities."),(0,r.kt)("li",{parentName:"ul"},"Already in talks with ",(0,r.kt)("strong",{parentName:"li"},"SquareOne")," team to push it into substrate builders program once we have some metric to show.")),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Searched on Google"),(0,r.kt)("p",null,"Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Work you have already done.\nI have completed ink-boxes and ink-wizard grant in the past. They are into active development."),(0,r.kt)("li",{parentName:"ul"},"If there are any other teams who have already contributed (financially) to the project.\nNo"),(0,r.kt)("li",{parentName:"ul"},"Previous grants you may have applied for.\nInk Boxes and Ink Wizard, both are accepted and completed.")))}u.isMDXComponent=!0}}]);