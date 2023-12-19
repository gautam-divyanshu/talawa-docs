"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[51948],{73827:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=i(85893),r=i(11151);const o={id:"admin-role",title:"Admin Capabilities"},t=void 0,a={id:"features/admin-role",title:"Admin Capabilities",description:"This section is a work in progress.",source:"@site/docs/features/admin-role.md",sourceDirName:"features",slug:"/features/admin-role",permalink:"/docs/features/admin-role",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/features/admin-role.md",tags:[],version:"current",frontMatter:{id:"admin-role",title:"Admin Capabilities"},sidebar:"docs",previous:{title:"Admin Portal",permalink:"/docs/features/admin-portal"},next:{title:"Chat & Messaging",permalink:"/docs/features/chat-and-messaging"}},l={},d=[{value:"Overall Guidance",id:"overall-guidance",level:2},{value:"Functions from App",id:"functions-from-app",level:3},{value:"Functions from Admin Portal",id:"functions-from-admin-portal",level:3},{value:"Global Messaging",id:"global-messaging",level:2},{value:"Code: ADM-001",id:"code-adm-001",level:3},{value:"Overview",id:"overview",level:3},{value:"Problem",id:"problem",level:3},{value:"Goals",id:"goals",level:3},{value:"Out of Scope",id:"out-of-scope",level:3},{value:"People and Roles",id:"people-and-roles",level:3},{value:"Context",id:"context",level:3},{value:"Use Cases",id:"use-cases",level:3},{value:"Proposal/Solution",id:"proposalsolution",level:3},{value:"User Experience",id:"user-experience",level:3},{value:"Important Details To Capture",id:"important-details-to-capture",level:3},{value:"Future Work",id:"future-work",level:3},{value:"Tasks and Timeline",id:"tasks-and-timeline",level:3},{value:"Manage Members",id:"manage-members",level:2},{value:"Code: ADM-004",id:"code-adm-004",level:3},{value:"Moderate Newsfeed",id:"moderate-newsfeed",level:2},{value:"Code: ADM-003",id:"code-adm-003",level:3}];function c(e){const n={admonition:"admonition",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"This section is a work in progress."})}),"\n",(0,s.jsx)(n.h2,{id:"overall-guidance",children:"Overall Guidance"}),"\n",(0,s.jsx)(n.p,{children:"We will assume that at least one person in the organization has access to a traditional computer device with a non-mobile size screen to help them do administrative tasks via the portal."}),"\n",(0,s.jsx)(n.h3,{id:"functions-from-app",children:"Functions from App"}),"\n",(0,s.jsx)(n.p,{children:"Administrators will also need to be able to do some portal tasks from their phones such as:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Add/ remove members"}),"\n",(0,s.jsx)(n.li,{children:"Set Organisation status public or private"}),"\n",(0,s.jsx)(n.li,{children:"Create/Update/Delete group chats"}),"\n",(0,s.jsx)(n.li,{children:"Create/Update/Delete events"}),"\n",(0,s.jsxs)(n.li,{children:["Add/ Remove Admins","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Only the organization's creator can remove admins"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Manage and switch between multiple organization"}),"\n",(0,s.jsx)(n.li,{children:"Sending organization wide messages"}),"\n",(0,s.jsx)(n.li,{children:"Elevating members to coordinators"}),"\n",(0,s.jsxs)(n.li,{children:["Moderating Newsfeed","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Mute people"}),"\n",(0,s.jsx)(n.li,{children:"Enable/ disable commenting on posts"}),"\n",(0,s.jsx)(n.li,{children:"Thumbs up/down"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"functions-from-admin-portal",children:"Functions from Admin Portal"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Determine whether membership to the organization is public or private"}),"\n",(0,s.jsx)(n.li,{children:"Add or remove members"}),"\n",(0,s.jsx)(n.li,{children:"Add or remove other organizational admins"}),"\n",(0,s.jsx)(n.li,{children:"Add or remove group chats"}),"\n",(0,s.jsx)(n.li,{children:"Add, remove or edit events"}),"\n",(0,s.jsx)(n.li,{children:"Add or remove posts"}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"global-messaging",children:"Global Messaging"}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"This section is a work in progress."})}),"\n",(0,s.jsx)(n.h3,{id:"code-adm-001",children:"Code: ADM-001"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.em,{children:["Authored by** ",(0,s.jsx)(n.strong,{children:"Shannika Jackson"})," **. Last updated on"]}),"  ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"May 18,2021"})})]}),"\n",(0,s.jsxs)(n.p,{children:["This feature aims to  ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"enhance the admin role"})})," by ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"allowing admin users to send messages to an entire organization"})}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.h3,{id:"problem",children:"Problem"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Messages can now be sent only directly from one user to another :"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"The admins in an organization can only send direct messages"}),"\n",(0,s.jsx)(n.li,{children:"The need exists to communicate instantly with all members of an organisation"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"goals",children:"Goals"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Administrators for an organization must be able to send messages to all members in the organization:"})," This is to facilitate organizational notices and updates."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"out-of-scope",children:"Out of Scope"}),"\n",(0,s.jsx)(n.p,{children:"The following are aspects of this feature which have been considered but are outside of the scope for the current project:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Group messaging for roles within an event :"})," This feature is detailed under the Admin Portal requirement features."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Message history for organization wide messages :"})," This is the ability to see from the admin portal the history of organization-wide messages sent for a period."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Scheduled sending of organization wide messages :"})," This is the ability to send organization wide messages automatically based on a scheduled date. This will be useful as reminders for upcoming events and other notices"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"people-and-roles",children:"People and Roles"}),"\n",(0,s.jsx)(n.p,{children:"The following are the primary roles foreseen in the development of this feature"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Feature Lead"})," : will review proposed solutions, acceptance and close feature"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"context",children:"Context"}),"\n",(0,s.jsx)(n.p,{children:"NA"}),"\n",(0,s.jsx)(n.h3,{id:"use-cases",children:"Use Cases"}),"\n",(0,s.jsx)(n.p,{children:"NA"}),"\n",(0,s.jsx)(n.h3,{id:"proposalsolution",children:"Proposal/Solution"}),"\n",(0,s.jsx)(n.h3,{id:"user-experience",children:"User Experience"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"An organization's administrator should be presented with a create message button from the organisation's admin portal."}),"\n",(0,s.jsx)(n.li,{children:"When clicked, (s)he is presented with the option to message the organization."}),"\n",(0,s.jsx)(n.li,{children:"The message to the organization then appears in the admin portals chat screen."}),"\n",(0,s.jsx)(n.li,{children:"In the admin portal's chat screen a button should be presented to resend organization wide message"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"important-details-to-capture",children:"Important Details To Capture"}),"\n",(0,s.jsx)(n.p,{children:"NA"}),"\n",(0,s.jsx)(n.h3,{id:"future-work",children:"Future Work"}),"\n",(0,s.jsx)(n.p,{children:"Items mentioned in the Out of Scope section will form the basis for future work to be done on this feature"}),"\n",(0,s.jsx)(n.h3,{id:"tasks-and-timeline",children:"Tasks and Timeline"}),"\n",(0,s.jsx)(n.p,{children:"TBD"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"manage-members",children:"Manage Members"}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"This section is a work in progress."})}),"\n",(0,s.jsx)(n.h3,{id:"code-adm-004",children:"Code: ADM-004"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.em,{children:["Authored by** ",(0,s.jsx)(n.strong,{children:"Shannika Jackson"})," **. Last updated on"]})," ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"March 27,2021"})})]}),"\n",(0,s.jsxs)(n.p,{children:["This feature aims to ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"enhance the admin portal"})})," by ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"allowing admin users to manage other member profiles - such as adding or removing members"})}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"moderate-newsfeed",children:"Moderate Newsfeed"}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"This section is a work in progress."})}),"\n",(0,s.jsx)(n.h3,{id:"code-adm-003",children:"Code: ADM-003"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.em,{children:["Authored by** ",(0,s.jsx)(n.strong,{children:"Shannika Jackson"})," **. Last updated on"]})," ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"March 14,2021"})})]}),"\n",(0,s.jsxs)(n.p,{children:["This feature aims to ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"enhance the admin portal"})})," by ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"allowing admin users moderate newsfeed"})}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>t});var s=i(67294);const r={},o=s.createContext(r);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);