"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[81147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),h=s(n),u=o,p=h["".concat(d,".").concat(u)]||h[u]||m[u]||r;return n?i.createElement(p,l(l({ref:t},c),{},{components:n})):i.createElement(p,l({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[h]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},98110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var i=n(87462),o=(n(67294),n(3905));const r={},l="build method",a={unversionedId:"talawa-mobile-docs/widgets_event_card/EventCard/build",id:"talawa-mobile-docs/widgets_event_card/EventCard/build",title:"build method",description:"- @override",source:"@site/docs/talawa-mobile-docs/widgets_event_card/EventCard/build.md",sourceDirName:"talawa-mobile-docs/widgets_event_card/EventCard",slug:"/talawa-mobile-docs/widgets_event_card/EventCard/build",permalink:"/docs/talawa-mobile-docs/widgets_event_card/EventCard/build",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/widgets_event_card/EventCard/build.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"EventCard constructor",permalink:"/docs/talawa-mobile-docs/widgets_event_card/EventCard/"},next:{title:"event property",permalink:"/docs/talawa-mobile-docs/widgets_event_card/EventCard/event"}},d={},s=[{value:"Implementation",id:"implementation",level:2}],c={toc:s},h="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"build-method"},"build method"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@",(0,o.kt)("a",{parentName:"li",href:"https://api.flutter.dev/flutter/dart-core/override-constant.html"},"override"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/widgets/Widget-class.html"},"Widget")," build\n(",(0,o.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html"},"BuildContext")," context)"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("span",{class:"feature"},"override"))),(0,o.kt)("p",null,"Describes the part of the user interface represented by this widget."),(0,o.kt)("p",null,"The framework calls this method when this widget is inserted into the tree in a given ",(0,o.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html"},"BuildContext")," and when the dependencies of this widget change (e.g., an ",(0,o.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html"},"InheritedWidget")," referenced by this widget changes). This method can potentially be called in every frame and should not have any side effects beyond building a widget."),(0,o.kt)("p",null,"The framework replaces the subtree below this widget with the widget returned by this method, either by updating the existing subtree or by removing the subtree and inflating a new subtree, depending on whether the widget returned by this method can update the root of the existing subtree, as determined by calling ",(0,o.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/Widget/canUpdate.html"},"Widget.canUpdate"),"."),(0,o.kt)("p",null,"Typically implementations return a newly created constellation of widgets that are configured with information from this widget's constructor and from the given ",(0,o.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html"},"BuildContext"),"."),(0,o.kt)("p",null,"The given ",(0,o.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html"},"BuildContext")," contains information about the location in the tree at which this widget is being built. For example, the context provides the set of inherited widgets for this location in the tree. A given widget might be built with multiple different ",(0,o.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html"},"BuildContext"),"arguments over time if the widget is moved around the tree or if the widget is inserted into the tree in multiple places at once."),(0,o.kt)("p",null,"The implementation of this method must only depend on:"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"the fields of the widget, which themselves must not change over time, and"),(0,o.kt)("li",null,"any ambient state obtained from the ",(0,o.kt)("code",null,"context")," using",(0,o.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext/dependOnInheritedWidgetOfExactType.html"},"BuildContext.dependOnInheritedWidgetOfExactType"),".")),(0,o.kt)("p",null,"If a widget's ",(0,o.kt)("a",{href:"../../widgets_event_card/EventCard/build.md"},"build")," method is to depend on anything else, use a",(0,o.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html"},"StatefulWidget")," instead."),(0,o.kt)("p",null,"See also:"),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html"},"StatelessWidget"),", which contains the discussion on performance considerations.")),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"@override\nWidget build(BuildContext context) {\n  final bool isRegistered = event.isRegistered ?? false;\n  return Padding(\n    padding: const EdgeInsets.only(bottom: 10),\n    child: Stack(\n      children: [\n        Card(\n          shape: RoundedRectangleBorder(\n            side:\n                isRegistered && userConfig.currentUser.id != event.creator!.id\n                    ? BorderSide(\n                        color: Theme.of(context).colorScheme.secondary,\n                        width: SizeConfig.screenWidth! * 0.008,\n                      )\n                    : BorderSide.none,\n          ),\n          elevation: 3,\n          color: Theme.of(context).primaryColor,\n          child: Column(\n            children: [\n              AspectRatio(\n                aspectRatio: 2.5,\n                child: Container(\n                  height: SizeConfig.screenHeight! * 0.11,\n                  width: double.infinity,\n                  decoration: BoxDecoration(\n                    color: Colors.grey.withOpacity(0.3),\n                    image: const DecorationImage(\n                      fit: BoxFit.fitWidth,\n                      alignment: FractionalOffset.topCenter,\n                      image: NetworkImage(\n                        'https://picsum.photos/id/1022/200/300',\n                      ),\n                    ),\n                  ),\n                  child: ClipRRect(\n                    child: BackdropFilter(\n                      filter: ImageFilter.blur(sigmaX: 5, sigmaY: 5),\n                      child: Container(\n                        decoration: BoxDecoration(\n                          color: Colors.white.withOpacity(0.0),\n                        ),\n                      ),\n                    ),\n                  ),\n                ),\n              ),\n              Padding(\n                padding: const EdgeInsets.all(10),\n                child: Column(\n                  children: [\n                    Row(\n                      children: [\n                        SizedBox(\n                          width: SizeConfig.screenWidth! * 0.48,\n                          child: isSearchItem\n                              ? RichText(\n                                  text: TextSpan(\n                                    text: eventTitleHighlightedText,\n                                    style: Theme.of(context)\n                                        .textTheme\n                                        .headlineSmall!\n                                        .copyWith(\n                                          fontWeight: FontWeight.bold,\n                                        ),\n                                    children: [\n                                      TextSpan(\n                                        text: eventTitleNormalText,\n                                        style: Theme.of(context)\n                                            .textTheme\n                                            .headlineSmall!\n                                            .copyWith(\n                                              color: Colors.grey,\n                                            ),\n                                      )\n                                    ],\n                                  ),\n                                  overflow: TextOverflow.ellipsis,\n                                  textAlign: TextAlign.left,\n                                )\n                              : Text(\n                                  event.title!,\n                                  style: Theme.of(context)\n                                      .textTheme\n                                      .headlineSmall,\n                                ),\n                        ),\n                        const Spacer(),\n                        const Icon(\n                          Icons.calendar_today,\n                          size: 13,\n                        ),\n                        const Spacer(),\n                        Text(\n                          \"${event.startDate!} - ${event.endDate!}\",\n                          style: Theme.of(context).textTheme.bodySmall,\n                        )\n                      ],\n                    ),\n                    SizedBox(\n                      height: SizeConfig.screenHeight! * 0.006,\n                    ),\n                    Row(\n                      children: [\n                        const Icon(\n                          Icons.schedule,\n                          size: 12,\n                        ),\n                        SizedBox(\n                          width: SizeConfig.screenWidth! * 0.015,\n                        ),\n                        Text(\n                          \"${event.startTime!} - ${event.endTime!}\",\n                          style: Theme.of(context).textTheme.bodySmall,\n                        ),\n                        const Spacer(),\n                        const Icon(\n                          Icons.place,\n                          size: 12,\n                        ),\n                        SizedBox(\n                          child: Text(\n                            event.location!.substring(\n                              0,\n                              min(event.location!.length, 20),\n                            ),\n                            style: Theme.of(context).textTheme.bodySmall,\n                          ),\n                        )\n                      ],\n                    ),\n                    SizedBox(\n                      height: SizeConfig.screenHeight! * 0.013,\n                    ),\n                    Row(\n                      mainAxisAlignment: MainAxisAlignment.spaceBetween,\n                      crossAxisAlignment: CrossAxisAlignment.start,\n                      children: [\n                        SizedBox(\n                          width: SizeConfig.screenWidth! * 0.55,\n                          child: Text(\n                            event.description!,\n                            style: Theme.of(context).textTheme.bodySmall,\n                            overflow: TextOverflow.ellipsis,\n                            textAlign: TextAlign.left,\n                            maxLines: 3,\n                          ),\n                        ),\n                        const Icon(\n                          Icons.chevron_right,\n                        ),\n                      ],\n                    ),\n                    SizedBox(\n                      height: SizeConfig.screenHeight! * 0.007,\n                    ),\n                    Row(\n                      mainAxisAlignment: MainAxisAlignment.end,\n                      children: [\n                        userConfig.currentUser.id == event.creator!.id\n                            ? Row(\n                                children: [\n                                  Icon(\n                                    Icons.verified,\n                                    size: 13,\n                                    color: Theme.of(context)\n                                        .colorScheme\n                                        .secondary,\n                                  ),\n                                  SizedBox(\n                                    width: SizeConfig.screenWidth! * 0.013,\n                                  ),\n                                  Text(\n                                    AppLocalizations.of(context)!\n                                        .strictTranslate('Created'),\n                                    style:\n                                        Theme.of(context).textTheme.bodySmall,\n                                  ),\n                                ],\n                              )\n                            : const SizedBox(),\n                        const Spacer(),\n                        event.isPublic!\n                            ? Icon(\n                                Icons.lock_open,\n                                size: 13,\n                                color: Theme.of(context).colorScheme.primary,\n                              )\n                            : Icon(\n                                Icons.lock,\n                                size: 13,\n                                color: Theme.of(context).colorScheme.primary,\n                              ),\n                        SizedBox(\n                          width: SizeConfig.screenWidth! * 0.013,\n                        ),\n                        event.isPublic!\n                            ? Text(\n                                AppLocalizations.of(context)!\n                                    .strictTranslate('public'),\n                                style: Theme.of(context).textTheme.bodySmall,\n                              )\n                            : Text(\n                                AppLocalizations.of(context)!\n                                    .strictTranslate('private'),\n                                style: Theme.of(context).textTheme.bodySmall,\n                              ),\n                        SizedBox(\n                          width: SizeConfig.screenWidth! * 0.027,\n                        ),\n                        const Icon(\n                          Icons.people_outline,\n                          size: 13,\n                          color: Color(0xff4285F4),\n                        ),\n                        SizedBox(\n                          width: SizeConfig.screenWidth! * 0.013,\n                        ),\n                        event.attendees != null\n                            ? Text(\n                                event.attendees!,\n                                style: Theme.of(context).textTheme.bodySmall,\n                              )\n                            : Text(\n                                (event.registrants?.length ?? 0).toString(),\n                                style: Theme.of(context).textTheme.bodySmall,\n                              )\n                      ],\n                    ),\n                  ],\n                ),\n              )\n            ],\n          ),\n        ),\n        Positioned(\n          top: SizeConfig.screenHeight! * 0.007,\n          right: SizeConfig.screenWidth! * 0.013,\n          child: isRegistered &&\n                  userConfig.currentUser.id != event.creator!.id\n              ? DecoratedBox(\n                  decoration: BoxDecoration(\n                    color: Theme.of(context).colorScheme.secondary,\n                    borderRadius: const BorderRadius.only(\n                      bottomLeft: Radius.circular(15),\n                    ),\n                  ),\n                  child: Padding(\n                    padding: const EdgeInsets.all(8.0),\n                    child: Center(\n                      child: Text(\n                        AppLocalizations.of(context)!\n                            .strictTranslate(\"Registered\"),\n                        style:\n                            Theme.of(context).textTheme.titleLarge!.copyWith(\n                                  color: Colors.white,\n                                  fontWeight: FontWeight.w700,\n                                ),\n                      ),\n                    ),\n                  ),\n                )\n              : const SizedBox(),\n        )\n      ],\n    ),\n  );\n}\n")))}m.isMDXComponent=!0}}]);