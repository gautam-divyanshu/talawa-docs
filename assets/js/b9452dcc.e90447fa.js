"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[77897],{80061:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var c=n(85893),s=n(11151);const t={},a=void 0,i={id:"talawa-api-docs/helpers/event/recurringEventHelpers/createRecurrenceRule/functions/createRecurrenceRule",title:"createRecurrenceRule",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/helpers/event/recurringEventHelpers/createRecurrenceRule/functions/createRecurrenceRule.md",sourceDirName:"talawa-api-docs/helpers/event/recurringEventHelpers/createRecurrenceRule/functions",slug:"/talawa-api-docs/helpers/event/recurringEventHelpers/createRecurrenceRule/functions/createRecurrenceRule",permalink:"/docs/talawa-api-docs/helpers/event/recurringEventHelpers/createRecurrenceRule/functions/createRecurrenceRule",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/helpers/event/recurringEventHelpers/createRecurrenceRule/functions/createRecurrenceRule.md",tags:[],version:"current",frontMatter:{}},l={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function o(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.a,{href:"/docs/talawa-api-docs/",children:(0,c.jsx)(r.strong,{children:"talawa-api"})})," \u2022 ",(0,c.jsx)(r.strong,{children:"Docs"})]}),"\n",(0,c.jsx)(r.hr,{}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,c.jsx)(r.a,{href:"/docs/talawa-api-docs/helpers/event/recurringEventHelpers/createRecurrenceRule/",children:"helpers/event/recurringEventHelpers/createRecurrenceRule"})," / createRecurrenceRule"]}),"\n",(0,c.jsx)(r.h1,{id:"function-createrecurrencerule",children:"Function: createRecurrenceRule()"}),"\n",(0,c.jsxs)(r.p,{children:["> ",(0,c.jsx)(r.strong,{children:"createRecurrenceRule"}),"(",(0,c.jsx)(r.code,{children:"recurrenceRuleString"}),", ",(0,c.jsx)(r.code,{children:"recurrenceStartDate"}),", ",(0,c.jsx)(r.code,{children:"recurrenceEndDate"}),", ",(0,c.jsx)(r.code,{children:"organizationId"}),", ",(0,c.jsx)(r.code,{children:"baseRecurringEventId"}),", ",(0,c.jsx)(r.code,{children:"latestInstanceDate"}),", ",(0,c.jsx)(r.code,{children:"session"}),"): ",(0,c.jsx)(r.code,{children:"Promise"}),"<",(0,c.jsx)(r.a,{href:"/docs/talawa-api-docs/models/RecurrenceRule/interfaces/InterfaceRecurrenceRule",children:(0,c.jsx)(r.code,{children:"InterfaceRecurrenceRule"})}),">"]}),"\n",(0,c.jsx)(r.p,{children:"Creates a recurrence rule document based on the provided parameters."}),"\n",(0,c.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsxs)(r.p,{children:["\u2022 ",(0,c.jsx)(r.strong,{children:"recurrenceRuleString"}),": ",(0,c.jsx)(r.code,{children:"string"})]}),"\n",(0,c.jsx)(r.p,{children:"The string representation of the recurrence rule (RRULE)."}),"\n",(0,c.jsxs)(r.p,{children:["\u2022 ",(0,c.jsx)(r.strong,{children:"recurrenceStartDate"}),": ",(0,c.jsx)(r.code,{children:"Date"})]}),"\n",(0,c.jsx)(r.p,{children:"The start date of recurrence."}),"\n",(0,c.jsxs)(r.p,{children:["\u2022 ",(0,c.jsx)(r.strong,{children:"recurrenceEndDate"}),": ",(0,c.jsx)(r.code,{children:"null"})," | ",(0,c.jsx)(r.code,{children:"Date"})]}),"\n",(0,c.jsx)(r.p,{children:"The end date of recurrence, if specified."}),"\n",(0,c.jsxs)(r.p,{children:["\u2022 ",(0,c.jsx)(r.strong,{children:"organizationId"}),": ",(0,c.jsx)(r.code,{children:"string"})]}),"\n",(0,c.jsx)(r.p,{children:"The unique identifier of the organization to which the recurrence rule belongs."}),"\n",(0,c.jsxs)(r.p,{children:["\u2022 ",(0,c.jsx)(r.strong,{children:"baseRecurringEventId"}),": ",(0,c.jsx)(r.code,{children:"string"})]}),"\n",(0,c.jsx)(r.p,{children:"The ID of the base recurring event this rule is associated with."}),"\n",(0,c.jsxs)(r.p,{children:["\u2022 ",(0,c.jsx)(r.strong,{children:"latestInstanceDate"}),": ",(0,c.jsx)(r.code,{children:"Date"})]}),"\n",(0,c.jsx)(r.p,{children:"The start date of the last instance generated during this operation."}),"\n",(0,c.jsxs)(r.p,{children:["\u2022 ",(0,c.jsx)(r.strong,{children:"session"}),": ",(0,c.jsx)(r.code,{children:"ClientSession"})]}),"\n",(0,c.jsx)(r.p,{children:"The MongoDB client session for transactional operations."}),"\n",(0,c.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:"Promise"}),"<",(0,c.jsx)(r.a,{href:"/docs/talawa-api-docs/models/RecurrenceRule/interfaces/InterfaceRecurrenceRule",children:(0,c.jsx)(r.code,{children:"InterfaceRecurrenceRule"})}),">"]}),"\n",(0,c.jsx)(r.p,{children:"The created recurrence rule document."}),"\n",(0,c.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,c.jsx)(r.p,{children:"This function performs the following steps:"}),"\n",(0,c.jsxs)(r.ol,{children:["\n",(0,c.jsx)(r.li,{children:"Parses the recurrenceRuleString into an rrule object using rrule string."}),"\n",(0,c.jsx)(r.li,{children:"Extracts relevant fields from the rrule object such as frequency, weekdays, interval, etc."}),"\n",(0,c.jsx)(r.li,{children:"Creates a new RecurrenceRule document in the database with the extracted fields."}),"\n"]}),"\n",(0,c.jsx)(r.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/helpers/event/recurringEventHelpers/createRecurrenceRule.ts#L26",children:"src/helpers/event/recurringEventHelpers/createRecurrenceRule.ts:26"})})]})}function u(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>a});var c=n(67294);const s={},t=c.createContext(s);function a(e){const r=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),c.createElement(t.Provider,{value:r},e.children)}}}]);