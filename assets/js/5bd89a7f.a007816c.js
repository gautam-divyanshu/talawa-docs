"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[20148],{74008:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>n,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>r});var s=a(85893),d=a(11151);const i={},o="editTask method",l={id:"talawa-mobile-docs/view_model_after_auth_view_models_task_view_models_create_task_view_model/CreateTaskViewModel/editTask",title:"editTask method",description:"Future&lt;bool> editTask",source:"@site/docs/talawa-mobile-docs/view_model_after_auth_view_models_task_view_models_create_task_view_model/CreateTaskViewModel/editTask.md",sourceDirName:"talawa-mobile-docs/view_model_after_auth_view_models_task_view_models_create_task_view_model/CreateTaskViewModel",slug:"/talawa-mobile-docs/view_model_after_auth_view_models_task_view_models_create_task_view_model/CreateTaskViewModel/editTask",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_task_view_models_create_task_view_model/CreateTaskViewModel/editTask",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_after_auth_view_models_task_view_models_create_task_view_model/CreateTaskViewModel/editTask.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"dispose method",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_task_view_models_create_task_view_model/CreateTaskViewModel/dispose"},next:{title:"fillTask method",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_task_view_models_create_task_view_model/CreateTaskViewModel/fillTask"}},n={},r=[{value:"Implementation",id:"implementation",level:2}];function _(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"edittask-method",children:"editTask method"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"}),"> editTask\n(",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," taskId)"]}),"\n",(0,s.jsxs)("p",{children:["This function updates the task.\nThe function uses ",(0,s.jsx)("code",{children:"editTask"})," method provided by Task Services."]}),"\n",(0,s.jsx)("p",{children:"params:"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:[(0,s.jsx)("code",{children:"taskId"})," : id of the task that needs to be updated."]})}),"\n",(0,s.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"Future<bool> editTask(String taskId) async {\n  final deadline = DateTime(\n    taskEndDate.year,\n    taskEndDate.month,\n    taskEndDate.day,\n    taskEndTime.hour,\n    taskEndTime.minute,\n  );\n  return _taskService.editTask(\n    title: taskTitleTextController.text,\n    description: taskDescriptionTextController.text,\n    deadline: deadline.microsecondsSinceEpoch.toString(),\n    taskId: taskId,\n  );\n}\n"})})]})}function c(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(_,{...e})}):_(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>o});var s=a(67294);const d={},i=s.createContext(d);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);