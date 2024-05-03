"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[39757],{37625:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(85893),s=t(11151);const l={},i="Module: helpers/event/recurringEventHelpers/removeDanglingDocuments",c={id:"talawa-api-docs/modules/helpers_event_recurringEventHelpers_removeDanglingDocuments",title:"helpers_event_recurringEventHelpers_removeDanglingDocuments",description:"talawa-api / Exports / helpers/event/recurringEventHelpers/removeDanglingDocuments",source:"@site/docs/talawa-api-docs/modules/helpers_event_recurringEventHelpers_removeDanglingDocuments.md",sourceDirName:"talawa-api-docs/modules",slug:"/talawa-api-docs/modules/helpers_event_recurringEventHelpers_removeDanglingDocuments",permalink:"/docs/talawa-api-docs/modules/helpers_event_recurringEventHelpers_removeDanglingDocuments",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/modules/helpers_event_recurringEventHelpers_removeDanglingDocuments.md",tags:[],version:"current",frontMatter:{},sidebar:"API",previous:{title:"helpers_event_recurringEventHelpers_getRecurringInstanceDates",permalink:"/docs/talawa-api-docs/modules/helpers_event_recurringEventHelpers_getRecurringInstanceDates"},next:{title:"helpers_event_updateEventHelpers",permalink:"/docs/talawa-api-docs/modules/helpers_event_updateEventHelpers"}},o={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"removeDanglingDocuments",id:"removedanglingdocuments",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"../README.md",children:"talawa-api"})," / ",(0,r.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"Exports"})," / helpers/event/recurringEventHelpers/removeDanglingDocuments"]}),"\n",(0,r.jsx)(n.h1,{id:"module-helperseventrecurringeventhelpersremovedanglingdocuments",children:"Module: helpers/event/recurringEventHelpers/removeDanglingDocuments"}),"\n",(0,r.jsx)(n.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,r.jsx)(n.h3,{id:"functions",children:"Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/talawa-api-docs/modules/helpers_event_recurringEventHelpers_removeDanglingDocuments#removedanglingdocuments",children:"removeDanglingDocuments"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"functions-1",children:"Functions"}),"\n",(0,r.jsx)(n.h3,{id:"removedanglingdocuments",children:"removeDanglingDocuments"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"removeDanglingDocuments"}),"(",(0,r.jsx)(n.code,{children:"recurrenceRuleId"}),", ",(0,r.jsx)(n.code,{children:"baseRecurringEventId"}),", ",(0,r.jsx)(n.code,{children:"session"}),"): ",(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,r.jsx)(n.p,{children:"This function removes dangling recurrence rule and base recurring event documents."}),"\n",(0,r.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"recurrenceRuleId"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"_id of the recurrence rule."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"baseRecurringEventId"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"_id of the base recurring event."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"session"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"ClientSession"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"-"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"The following steps are followed:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Call the function associated with the document to be removed, i.e. removeRecurrenceRule or removeBaseRecurringEvent."}),"\n",(0,r.jsx)(n.li,{children:"Check if the document has any associations, i.e.:"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"for recurrence rule, check if there exist any event that follow this given recurrence rule"}),"\n",(0,r.jsx)(n.li,{children:"for base recurring event, check if there exist any event that has this event as its base recurring event"}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Remove the documents if no associations are found."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/helpers/event/recurringEventHelpers/removeDanglingDocuments.ts#L16",children:"src/helpers/event/recurringEventHelpers/removeDanglingDocuments.ts:16"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var r=t(67294);const s={},l=r.createContext(s);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);