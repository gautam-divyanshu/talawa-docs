"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[52528],{73227:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=n(85893),i=n(11151);const r={},d="build method",a={id:"talawa-mobile-docs/views_after_auth_screens_join_org_after_auth_access_request_screen/SendAccessRequest/build",title:"build method",description:"- @override",source:"@site/docs/talawa-mobile-docs/views_after_auth_screens_join_org_after_auth_access_request_screen/SendAccessRequest/build.md",sourceDirName:"talawa-mobile-docs/views_after_auth_screens_join_org_after_auth_access_request_screen/SendAccessRequest",slug:"/talawa-mobile-docs/views_after_auth_screens_join_org_after_auth_access_request_screen/SendAccessRequest/build",permalink:"/docs/talawa-mobile-docs/views_after_auth_screens_join_org_after_auth_access_request_screen/SendAccessRequest/build",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/views_after_auth_screens_join_org_after_auth_access_request_screen/SendAccessRequest/build.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"SendAccessRequest constructor",permalink:"/docs/talawa-mobile-docs/views_after_auth_screens_join_org_after_auth_access_request_screen/SendAccessRequest/"},next:{title:"org property",permalink:"/docs/talawa-mobile-docs/views_after_auth_screens_join_org_after_auth_access_request_screen/SendAccessRequest/org"}},o={},l=[{value:"Implementation",id:"implementation",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"build-method",children:"build method"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["@",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/Widget-class.html",children:"Widget"})," build\n(",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," context)"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)("span",{class:"feature",children:"override"})})}),"\n",(0,s.jsx)("p",{children:"Describes the part of the user interface represented by this widget."}),"\n",(0,s.jsxs)("p",{children:["The framework calls this method when this widget is inserted into the tree\nin a given ",(0,s.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," and when the dependencies of this widget change\n(e.g., an ",(0,s.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html",children:"InheritedWidget"})," referenced by this widget changes). This\nmethod can potentially be called in every frame and should not have any side\neffects beyond building a widget."]}),"\n",(0,s.jsxs)("p",{children:["The framework replaces the subtree below this widget with the widget\nreturned by this method, either by updating the existing subtree or by\nremoving the subtree and inflating a new subtree, depending on whether the\nwidget returned by this method can update the root of the existing\nsubtree, as determined by calling ",(0,s.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/Widget/canUpdate.html",children:"Widget.canUpdate"}),"."]}),"\n",(0,s.jsxs)("p",{children:["Typically implementations return a newly created constellation of widgets\nthat are configured with information from this widget's constructor and\nfrom the given ",(0,s.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"}),"."]}),"\n",(0,s.jsxs)("p",{children:["The given ",(0,s.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," contains information about the location in the\ntree at which this widget is being built. For example, the context\nprovides the set of inherited widgets for this location in the tree. A\ngiven widget might be built with multiple different ",(0,s.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"}),"\narguments over time if the widget is moved around the tree or if the\nwidget is inserted into the tree in multiple places at once."]}),"\n",(0,s.jsx)("p",{children:"The implementation of this method must only depend on:"}),"\n",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"the fields of the widget, which themselves must not change over time,\nand"}),(0,s.jsxs)("li",{children:["any ambient state obtained from the ",(0,s.jsx)("code",{children:"context"})," using\n",(0,s.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext/dependOnInheritedWidgetOfExactType.html",children:"BuildContext.dependOnInheritedWidgetOfExactType"}),"."]})]}),"\n",(0,s.jsxs)("p",{children:["If a widget's ",(0,s.jsx)("a",{href:"../../views_after_auth_screens_join_org_after_auth_access_request_screen/SendAccessRequest/build.md",children:"build"})," method is to depend on anything else, use a\n",(0,s.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html",children:"StatefulWidget"})," instead."]}),"\n",(0,s.jsx)("p",{children:"See also:"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:[(0,s.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html",children:"StatelessWidget"}),", which contains the discussion on performance considerations."]})}),"\n",(0,s.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:'@override\nWidget build(BuildContext context) {\n  return BaseView<AccessScreenViewModel>(\n    onModelReady: (model) => model.initialise(org),\n    builder: (context, model, child) {\n      return SafeArea(\n        child: Scaffold(\n          appBar: AppBar(\n            backgroundColor: Colors.transparent,\n          ),\n          resizeToAvoidBottomInset: false,\n          body: Column(\n            mainAxisAlignment: MainAxisAlignment.start,\n            crossAxisAlignment: CrossAxisAlignment.start,\n            children: [\n              Image.asset(\'assets/images/Group 8948.png\'),\n              Padding(\n                padding: const EdgeInsets.all(16.0),\n                child: Column(\n                  crossAxisAlignment: CrossAxisAlignment.start,\n                  children: [\n                    Text(\n                      "You need access",\n                      style: AppTheme.title.copyWith(color: AppTheme.white),\n                    ),\n                    const SizedBox(\n                      height: 5,\n                    ),\n                    const Text(\n                      "Request access, or switch to an account with access",\n                    ),\n                    const SizedBox(\n                      height: 20,\n                    ),\n                    Container(\n                      child: TextField(\n                        style: const TextStyle(color: AppTheme.blackPrimary),\n                        minLines: 15,\n                        maxLines: 20,\n                        decoration: InputDecoration(\n                          constraints: const BoxConstraints(\n                            maxWidth: 400,\n                            minWidth: 100,\n                          ),\n                          enabledBorder: UnderlineInputBorder(\n                            borderRadius: BorderRadius.circular(20.0),\n                            borderSide: const BorderSide(\n                              width: 3,\n                              color: Colors.white,\n                            ),\n                          ),\n                          hintText: "Message (optional)",\n                          hintStyle: const TextStyle(\n                            color: AppTheme.blackSecondary,\n                          ),\n                          filled: true,\n                          fillColor: AppTheme.white,\n                        ),\n                      ),\n                    ),\n                  ],\n                ),\n              ),\n              Center(\n                child: TextButton(\n                  onPressed: () {\n                    model.sendMembershipRequest();\n                  },\n                  style:\n                      TextButton.styleFrom(backgroundColor: AppTheme.green),\n                  child: const Text(\n                    "Request Access",\n                    style: TextStyle(\n                      color: AppTheme.white,\n                    ),\n                  ),\n                ),\n              )\n            ],\n          ),\n        ),\n      );\n    },\n  );\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>d});var s=n(67294);const i={},r=s.createContext(i);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);