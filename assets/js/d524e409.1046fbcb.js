"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[43897],{56938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=t(85893),a=t(11151);const s={id:"data-management",title:"Data Management"},r=void 0,o={id:"features/data-management",title:"Data Management",description:"This section is a work in progress.",source:"@site/docs/features/data-management.md",sourceDirName:"features",slug:"/features/data-management",permalink:"/docs/features/data-management",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/features/data-management.md",tags:[],version:"current",frontMatter:{id:"data-management",title:"Data Management"},sidebar:"docs",previous:{title:"Notifications",permalink:"/docs/features/notifications"},next:{title:"Organizations",permalink:"/docs/features/organizations"}},d={},l=[{value:"Overall Guidance",id:"overall-guidance",level:2},{value:"Data Compression",id:"data-compression",level:2},{value:"Code: DAT-002",id:"code-dat-002",level:3},{value:"Overview",id:"overview",level:3},{value:"Problem",id:"problem",level:3},{value:"Goals",id:"goals",level:3},{value:"Out of Scope",id:"out-of-scope",level:3},{value:"People and Roles",id:"people-and-roles",level:3},{value:"Context",id:"context",level:3},{value:"Use Cases",id:"use-cases",level:3},{value:"Proposal/Solution",id:"proposalsolution",level:3},{value:"User Experience",id:"user-experience",level:3},{value:"Important Details To Capture",id:"important-details-to-capture",level:3},{value:"Future Work",id:"future-work",level:3},{value:"Tasks and Timeline",id:"tasks-and-timeline",level:3},{value:"Data Retention",id:"data-retention",level:2},{value:"Code: DAT-001",id:"code-dat-001",level:3},{value:"Overview",id:"overview-1",level:3},{value:"Problem",id:"problem-1",level:3},{value:"Goals",id:"goals-1",level:3},{value:"Out of Scope",id:"out-of-scope-1",level:3},{value:"People and Roles",id:"people-and-roles-1",level:3},{value:"Context",id:"context-1",level:3},{value:"Use Cases",id:"use-cases-1",level:3},{value:"Proposal/Solution",id:"proposalsolution-1",level:3},{value:"User Experience",id:"user-experience-1",level:3},{value:"Important Details To Capture",id:"important-details-to-capture-1",level:3},{value:"Future Work",id:"future-work-1",level:3},{value:"Tasks and Timeline",id:"tasks-and-timeline-1",level:3},{value:"Data Storage",id:"data-storage",level:2},{value:"Code: DAT-003",id:"code-dat-003",level:3},{value:"Overview",id:"overview-2",level:3},{value:"Database Distribution",id:"database-distribution",level:2},{value:"Overall Guidance",id:"overall-guidance-1",level:3}];function h(e){const n={admonition:"admonition",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"This section is a work in progress."})}),"\n",(0,i.jsx)(n.h2,{id:"overall-guidance",children:"Overall Guidance"}),"\n",(0,i.jsx)(n.p,{children:"These relate to how data is managed by the app."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Each organisation should create a new database."}),"\n",(0,i.jsxs)(n.li,{children:["The ability should exist from the admin portal to specify","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The duration that objects and data are retained in the database"}),"\n",(0,i.jsx)(n.li,{children:"The type of data or objects to be retained/ purged based on the age criteria"}),"\n",(0,i.jsx)(n.li,{children:"Limit the size and duration of audio/ video files uploaded to the newsfeed"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"There should be a preset encoding algorithm for audio and video"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"data-compression",children:"Data Compression"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"This section is a work in progress."})}),"\n",(0,i.jsx)(n.h3,{id:"code-dat-002",children:"Code: DAT-002"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.em,{children:["Authored by** ",(0,i.jsx)(n.strong,{children:"Shannika Jackson"})," **. Last updated on"]})," ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"March 31,2021"})})]}),"\n",(0,i.jsxs)(n.p,{children:["This feature aims to ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"enforce a data compression strategy"})})," by ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"detailing how and when data is compressed for storage in the database"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.h3,{id:"problem",children:"Problem"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"There is currently no data compression strategy for data stored in the database"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"A data compression policy is required for each type of artefact that is stored in the database in order to greater optimize the retrieval of data from the database."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"goals",children:"Goals"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Specify and enforce data compression for data being stored in teh database:"})," This should improve interaction with the app as it reduces the time to store and retrieve data from the database."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"out-of-scope",children:"Out of Scope"}),"\n",(0,i.jsx)(n.p,{children:"The following are aspects of this feature which have been considered but are outside of the scope for the current project:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Allowing an administrator to select the type of encoding algorithm to be used to compress and store app data:"})," for example z standard, gzip"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"people-and-roles",children:"People and Roles"}),"\n",(0,i.jsx)(n.p,{children:"The following are the primary roles foreseen in the development of this feature"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Feature Lead"})," : will review proposed solutions, acceptance and close feature"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"context",children:"Context"}),"\n",(0,i.jsx)(n.p,{children:"NA"}),"\n",(0,i.jsx)(n.h3,{id:"use-cases",children:"Use Cases"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Administrator wants to:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Specify size of media files that can be uploaded to the newsfeed"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Specify the length of audio or video tracks that can be uploaded to the newsfeed"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"proposalsolution",children:"Proposal/Solution"}),"\n",(0,i.jsx)(n.h3,{id:"user-experience",children:"User Experience"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Some preset encoding algorithm should be implemented for audio and video posts uploaded to the newsfeed."}),"\n",(0,i.jsx)(n.li,{children:"This algorithm should compress the data being stored before it is sent to the database and decompress it whenever it is retrieved."}),"\n",(0,i.jsx)(n.li,{children:"When a user tries to upload media files to an event's newsfeed that is larger/longer than the size/length limit specified by the administrator they should be presented with an error notifying them of the size limit"}),"\n",(0,i.jsx)(n.li,{children:"When audio or video is being displayed there should be an automatic adjustment of frame rate to enable minimum buffering of the media"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"important-details-to-capture",children:"Important Details To Capture"}),"\n",(0,i.jsx)(n.p,{children:"NA"}),"\n",(0,i.jsx)(n.h3,{id:"future-work",children:"Future Work"}),"\n",(0,i.jsx)(n.p,{children:"Items mentioned in the Out of scope section will form the basis for future work to be done on this feature"}),"\n",(0,i.jsx)(n.h3,{id:"tasks-and-timeline",children:"Tasks and Timeline"}),"\n",(0,i.jsx)(n.p,{children:"TBD"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"data-retention",children:"Data Retention"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"This section is a work in progress."})}),"\n",(0,i.jsx)(n.h3,{id:"code-dat-001",children:"Code: DAT-001"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.em,{children:["Authored by** ",(0,i.jsx)(n.strong,{children:"Shannika Jackson"})," **. Last updated on"]})," ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"March 31,2021"})})]}),"\n",(0,i.jsxs)(n.p,{children:["This feature aims to ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"enforce data retention strategy"})})," by ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"detailing the requirements around how long and in what form data is retained in the database"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsx)(n.h3,{id:"problem-1",children:"Problem"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Data is currently stored in the database without a retention strategy:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"There should exist a data retention strategy for each data artefact that the app produces."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"goals-1",children:"Goals"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Specify and enforce a data retention strategy from the admin portal:"})," This more closely manages the data being stored by the application and facilitates the need for customers to move their data more easily."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"out-of-scope-1",children:"Out of Scope"}),"\n",(0,i.jsx)(n.p,{children:"N/A"}),"\n",(0,i.jsx)(n.h3,{id:"people-and-roles-1",children:"People and Roles"}),"\n",(0,i.jsx)(n.p,{children:"The following are the primary roles foreseen in the development of this feature"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Feature Lead"})," : will review proposed solutions, acceptance and close feature"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"context-1",children:"Context"}),"\n",(0,i.jsx)(n.p,{children:"NA"}),"\n",(0,i.jsx)(n.h3,{id:"use-cases-1",children:"Use Cases"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Administrator wants to:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Specify the duration that each data artefact is stored in the database"})," For instance (s)he may want to indicate that video files are retained for x days etc."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"proposalsolution-1",children:"Proposal/Solution"}),"\n",(0,i.jsx)(n.h3,{id:"user-experience-1",children:"User Experience"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"From the Administrator Portal an admin must be presented with a data management menu item."}),"\n",(0,i.jsx)(n.li,{children:"When this menu item is selected the admin is then presented with a list of the different file types supported by the application."}),"\n",(0,i.jsx)(n.li,{children:"For each file type a (numeric) retention duration field must be presented."}),"\n",(0,i.jsx)(n.li,{children:"The admin should be able to enter the number of days that each data type is retained in the database."}),"\n",(0,i.jsx)(n.li,{children:"This number must then trigger database actions to purge/ archive those artefacts from the database once their age reaches that number of days."}),"\n",(0,i.jsx)(n.li,{children:"The age of artefacts must be from the date that the item was added to the database."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"important-details-to-capture-1",children:"Important Details To Capture"}),"\n",(0,i.jsx)(n.p,{children:"NA"}),"\n",(0,i.jsx)(n.h3,{id:"future-work-1",children:"Future Work"}),"\n",(0,i.jsx)(n.p,{children:"Items mentioned in the Out of scope section will form the basis for future work to be done on this feature"}),"\n",(0,i.jsx)(n.h3,{id:"tasks-and-timeline-1",children:"Tasks and Timeline"}),"\n",(0,i.jsx)(n.p,{children:"TBD"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"data-storage",children:"Data Storage"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"This section is a work in progress."})}),"\n",(0,i.jsx)(n.h3,{id:"code-dat-003",children:"Code: DAT-003"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.em,{children:["Authored by** ",(0,i.jsx)(n.strong,{children:"Shannika Jackson"})," **. Last updated on"]})," ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"March 31,2021"})})]}),"\n",(0,i.jsxs)(n.p,{children:["This feature aims to ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"enforce data storage strategy"})})," by ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"detailing the requirements for the storage of data in the database"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"overview-2",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"A separate database is to be created for each organisation that is created."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"database-distribution",children:"Database Distribution"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"This section is a work in progress."})}),"\n",(0,i.jsx)(n.h3,{id:"overall-guidance-1",children:"Overall Guidance"}),"\n",(0,i.jsx)(n.p,{children:"NA"})]})}function c(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var i=t(67294);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);