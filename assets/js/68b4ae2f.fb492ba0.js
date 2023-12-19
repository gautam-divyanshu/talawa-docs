"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[14460],{25654:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=o(85893),n=o(11151);const r={},i="Get Talawa code",s={id:"git-guide/get-talawa-code",title:"Get Talawa code",description:"Talawa uses a forked-repo and merge-oriented workflow. This means all contributors create a fork of the Talawa repository they want to contribute to and then submit pull requests to the upstream repository to have their contributions reviewed and accepted. We also recommend you work on feature branches.",source:"@site/docs/git-guide/get-talawa-code.md",sourceDirName:"git-guide",slug:"/git-guide/get-talawa-code",permalink:"/docs/git-guide/get-talawa-code",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/git-guide/get-talawa-code.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Set Up Git",permalink:"/docs/git-guide/setup-git"},next:{title:"Create a pull request",permalink:"/docs/git-guide/pullrequest"}},c={},l=[{value:"Step 1: Create your fork",id:"step-1-create-your-fork",level:2},{value:"Step 2: Clone to your machine",id:"step-2-clone-to-your-machine",level:2},{value:"Step 3: Connect your fork to Talawa upstream",id:"step-3-connect-your-fork-to-talawa-upstream",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"get-talawa-code",children:"Get Talawa code"}),"\n",(0,a.jsxs)(t.p,{children:["Talawa uses a ",(0,a.jsx)(t.strong,{children:"forked-repo"})," and ",(0,a.jsx)(t.strong,{children:"merge-oriented"})," workflow. This means all contributors create a fork of the Talawa repository they want to contribute to and then submit pull requests to the upstream repository to have their contributions reviewed and accepted. We also recommend you work on feature branches."]}),"\n",(0,a.jsx)(t.h2,{id:"step-1-create-your-fork",children:"Step 1: Create your fork"}),"\n",(0,a.jsxs)(t.p,{children:["The following steps you'll only need to do the first time you setup a machine for contributing to a given Talawa Project. You will need to repeat the steps for any additional Talawa Projects(",(0,a.jsx)(t.a,{href:"https://github.com/PalisadoesFoundation",children:"list"}),") that you would like to work on."]}),"\n",(0,a.jsxs)(t.p,{children:["The first thing you'll want to do to contribute to Talawa is fork ",(0,a.jsx)(t.a,{href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo",children:"(see how)"})," the appropriate Talawa repository(",(0,a.jsx)(t.a,{href:"https://github.com/PalisadoesFoundation",children:"list"}),"). For the main Talawa app, this is ",(0,a.jsx)(t.a,{href:"https://github.com/PalisadoesFoundation/talawa",children:"PalisadoesFoundation/talawa"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"step-2-clone-to-your-machine",children:"Step 2: Clone to your machine"}),"\n",(0,a.jsxs)(t.p,{children:["Next, clone your fork to your local machine, Below we use the Talawa docs repository for our example: ",(0,a.jsx)(t.a,{href:"https://github.com/PalisadoesFoundation/talawa-docs",children:"Talawa docs repository"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"git clone https://github.com/YOUR_USERNAME/talawa-docs.git\nCloning into 'talawa'\nremote: Counting objects: 86768, done.\nremote: Compressing objects: 100% (15/15), done.\nremote: Total 86768 (delta 5), reused 1 (delta 1), pack-reused 86752\nReceiving objects: 100% (86768/86768), 112.96 MiB | 523.00 KiB/s, done.\nResolving deltas: 100% (61106/61106), done.\nChecking connectivity... done.\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"If you receive an error while cloning, you may not have added your ssh key to GitHub."})}),"\n",(0,a.jsx)(t.h2,{id:"step-3-connect-your-fork-to-talawa-upstream",children:"Step 3: Connect your fork to Talawa upstream"}),"\n",(0,a.jsxs)(t.p,{children:["Next, you\u2019ll want to ",(0,a.jsx)(t.a,{href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-repository-for-a-fork",children:"configure an upstream remote repository"})," for your fork of Talawa. This will allow you to ",(0,a.jsx)(t.a,{href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork",children:"sync changes"})," from the main project back into your fork."]}),"\n",(0,a.jsx)(t.p,{children:"First, show the currently configured remote repository:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"$ git remote -v\norigin  https://github.com/YOUR_USERNAME/talawa-docs.git (fetch)\norigin  https://github.com/YOUR_USERNAME/talawa-docs.git (push)\n"})}),"\n",(0,a.jsx)(t.p,{children:"Next is adding the Upstream, you will need to do it with:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"$ git remote add upstream https://github.com/PalisadoesFoundation/talawa-docs.git\n"})}),"\n",(0,a.jsx)(t.p,{children:"Finally, confirm that the new remote repository, upstream, has been configured:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"$ git remote -v\norigin  https://github.com/Biki-das/talawa-docs.git (fetch)\norigin  https://github.com/Biki-das/talawa-docs.git (push)\nupstream https://github.com/PalisadoesFoundation/talawa-docs.git (fetch)\nupstream https://github.com/PalisadoesFoundation/talawa-docs.git (push)\n"})}),"\n",(0,a.jsx)(t.p,{children:"Now your forked repository is ready for your contributions on your local machine!"})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>s,a:()=>i});var a=o(67294);const n={},r=a.createContext(n);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);