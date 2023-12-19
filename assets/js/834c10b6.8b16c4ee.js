"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[3813],{6342:(i,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>r,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var n=t(85893),h=t(11151);const s={},a="paint method",d={id:"talawa-mobile-docs/custom_painters_talawa_logo/AppLogo/paint",title:"paint method",description:"- @override",source:"@site/docs/talawa-mobile-docs/custom_painters_talawa_logo/AppLogo/paint.md",sourceDirName:"talawa-mobile-docs/custom_painters_talawa_logo/AppLogo",slug:"/talawa-mobile-docs/custom_painters_talawa_logo/AppLogo/paint",permalink:"/docs/talawa-mobile-docs/custom_painters_talawa_logo/AppLogo/paint",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/custom_painters_talawa_logo/AppLogo/paint.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"AppLogo constructor",permalink:"/docs/talawa-mobile-docs/custom_painters_talawa_logo/AppLogo/"},next:{title:"shouldRepaint method",permalink:"/docs/talawa-mobile-docs/custom_painters_talawa_logo/AppLogo/shouldRepaint"}},l={},o=[{value:"Implementation",id:"implementation",level:2}];function z(i){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,h.a)(),...i.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"paint-method",children:"paint method"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["@",(0,n.jsx)(e.a,{href:"https://api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["void paint\n(",(0,n.jsx)(e.a,{href:"https://api.flutter.dev/flutter/dart-ui/Canvas-class.html",children:"Canvas"})," canvas, ",(0,n.jsx)(e.a,{href:"https://api.flutter.dev/flutter/dart-ui/Size-class.html",children:"Size"})," size)"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.em,{children:(0,n.jsx)("span",{class:"feature",children:"override"})})}),"\n",(0,n.jsxs)("p",{children:["Called whenever the object needs to paint. The given ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/dart-ui/Canvas-class.html",children:"Canvas"})," has its\ncoordinate space configured such that the origin is at the top left of the\nbox. The area of the box is the size of the ",(0,n.jsx)("code",{children:"size"})," argument."]}),"\n",(0,n.jsxs)("p",{children:["Paint operations should remain inside the given area. Graphical\noperations outside the bounds may be silently ignored, clipped, or not\nclipped. It may sometimes be difficult to guarantee that a certain\noperation is inside the bounds (e.g., drawing a rectangle whose size is\ndetermined by user inputs). In that case, consider calling\n",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/dart-ui/Canvas/clipRect.html",children:"Canvas.clipRect"})," at the beginning of ",(0,n.jsx)("a",{href:"../../custom_painters_talawa_logo/AppLogo/paint.md",children:"paint"})," so everything that follows\nwill be guaranteed to only draw within the clipped area."]}),"\n",(0,n.jsxs)("p",{children:["Implementations should be wary of correctly pairing any calls to\n",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/dart-ui/Canvas/save.html",children:"Canvas.save"}),"/",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/dart-ui/Canvas/saveLayer.html",children:"Canvas.saveLayer"})," and ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/dart-ui/Canvas/restore.html",children:"Canvas.restore"}),", otherwise all\nsubsequent painting on this canvas may be affected, with potentially\nhilarious but confusing results."]}),"\n",(0,n.jsxs)("p",{children:["To paint text on a ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/dart-ui/Canvas-class.html",children:"Canvas"}),", use a ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/painting/TextPainter-class.html",children:"TextPainter"}),"."]}),"\n",(0,n.jsxs)("p",{children:["To paint an image on a ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/dart-ui/Canvas-class.html",children:"Canvas"}),":"]}),"\n",(0,n.jsxs)("ol",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)("p",{children:["Obtain an ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/painting/ImageStream-class.html",children:"ImageStream"}),", for example by calling ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/painting/ImageProvider/resolve.html",children:"ImageProvider.resolve"}),"\non an ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/painting/AssetImage-class.html",children:"AssetImage"})," or ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/painting/NetworkImage-class.html",children:"NetworkImage"})," object."]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("p",{children:["Whenever the ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/painting/ImageStream-class.html",children:"ImageStream"}),"'s underlying ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/painting/ImageInfo-class.html",children:"ImageInfo"})," object changes\n(see ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/painting/ImageStream/addListener.html",children:"ImageStream.addListener"}),"), create a new instance of your custom\npaint delegate, giving it the new ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/painting/ImageInfo-class.html",children:"ImageInfo"})," object."]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("p",{children:["In your delegate's ",(0,n.jsx)("a",{href:"../../custom_painters_talawa_logo/AppLogo/paint.md",children:"paint"})," method, call the ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/dart-ui/Canvas/drawImage.html",children:"Canvas.drawImage"}),",\n",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/dart-ui/Canvas/drawImageRect.html",children:"Canvas.drawImageRect"}),", or ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/dart-ui/Canvas/drawImageNine.html",children:"Canvas.drawImageNine"})," methods to paint the\n",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/painting/ImageInfo/image.html",children:"ImageInfo.image"})," object, applying the ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/painting/ImageInfo/scale.html",children:"ImageInfo.scale"})," value to\nobtain the correct rendering size."]})})]}),"\n",(0,n.jsx)(e.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-dart",children:"@override\nvoid paint(Canvas canvas, Size size) {\n  final Path path_0 = Path();\n  path_0.moveTo(size.width * 0.6581984, size.height * 0.6200040);\n  path_0.cubicTo(\n    size.width * 0.6951984,\n    size.height * 0.6792024,\n    size.width * 0.7321984,\n    size.height * 0.7386032,\n    size.width * 0.7695992,\n    size.height * 0.7978016,\n  );\n  path_0.cubicTo(\n    size.width * 0.7737976,\n    size.height * 0.8044008,\n    size.width * 0.7730000,\n    size.height * 0.8070040,\n    size.width * 0.7664008,\n    size.height * 0.8112024,\n  );\n  path_0.cubicTo(\n    size.width * 0.7314008,\n    size.height * 0.8330040,\n    size.width * 0.6964008,\n    size.height * 0.8552024,\n    size.width * 0.6617976,\n    size.height * 0.8776032,\n  );\n  path_0.cubicTo(\n    size.width * 0.6560000,\n    size.height * 0.8814008,\n    size.width * 0.6534008,\n    size.height * 0.8820040,\n    size.width * 0.6491984,\n    size.height * 0.8750040,\n  );\n  path_0.cubicTo(\n    size.width * 0.5995992,\n    size.height * 0.7930040,\n    size.width * 0.5495992,\n    size.height * 0.7112024,\n    size.width * 0.4997976,\n    size.height * 0.6292024,\n  );\n  path_0.cubicTo(\n    size.width * 0.4941984,\n    size.height * 0.6198016,\n    size.width * 0.4940000,\n    size.height * 0.6200040,\n    size.width * 0.4884008,\n    size.height * 0.6292024,\n  );\n  path_0.cubicTo(\n    size.width * 0.4380000,\n    size.height * 0.7114008,\n    size.width * 0.3873992,\n    size.height * 0.7938016,\n    size.width * 0.3371992,\n    size.height * 0.8762024,\n  );\n  path_0.cubicTo(\n    size.width * 0.3337992,\n    size.height * 0.8818016,\n    size.width * 0.3317992,\n    size.height * 0.8816032,\n    size.width * 0.3267992,\n    size.height * 0.8784008,\n  );\n  path_0.cubicTo(\n    size.width * 0.2913992,\n    size.height * 0.8558016,\n    size.width * 0.2559992,\n    size.height * 0.8334008,\n    size.width * 0.2203992,\n    size.height * 0.8112024,\n  );\n  path_0.cubicTo(\n    size.width * 0.2165992,\n    size.height * 0.8088016,\n    size.width * 0.2131992,\n    size.height * 0.8076032,\n    size.width * 0.2167992,\n    size.height * 0.8018016,\n  );\n  path_0.cubicTo(\n    size.width * 0.2547992,\n    size.height * 0.7420040,\n    size.width * 0.2923992,\n    size.height * 0.6818016,\n    size.width * 0.3301992,\n    size.height * 0.6218016,\n  );\n  path_0.cubicTo(\n    size.width * 0.3575992,\n    size.height * 0.5766032,\n    size.width * 0.3853992,\n    size.height * 0.5320040,\n    size.width * 0.4130000,\n    size.height * 0.4870040,\n  );\n  path_0.cubicTo(\n    size.width * 0.4191984,\n    size.height * 0.4768016,\n    size.width * 0.4255992,\n    size.height * 0.4666032,\n    size.width * 0.4317976,\n    size.height * 0.4564008,\n  );\n  path_0.cubicTo(\n    size.width * 0.4347976,\n    size.height * 0.4516032,\n    size.width * 0.4377976,\n    size.height * 0.4468016,\n    size.width * 0.4441984,\n    size.height * 0.4458016,\n  );\n  path_0.cubicTo(\n    size.width * 0.4541984,\n    size.height * 0.4452024,\n    size.width * 0.4640000,\n    size.height * 0.4472024,\n    size.width * 0.4740000,\n    size.height * 0.4474008,\n  );\n  path_0.cubicTo(\n    size.width * 0.4960000,\n    size.height * 0.4482024,\n    size.width * 0.5167976,\n    size.height * 0.4438016,\n    size.width * 0.5377976,\n    size.height * 0.4382024,\n  );\n  path_0.cubicTo(\n    size.width * 0.5435992,\n    size.height * 0.4374008,\n    size.width * 0.5470000,\n    size.height * 0.4408016,\n    size.width * 0.5497976,\n    size.height * 0.4454008,\n  );\n  path_0.cubicTo(\n    size.width * 0.5830000,\n    size.height * 0.5002024,\n    size.width * 0.6170000,\n    size.height * 0.5546032,\n    size.width * 0.6497976,\n    size.height * 0.6096032,\n  );\n  path_0.cubicTo(\n    size.width * 0.6517976,\n    size.height * 0.6136032,\n    size.width * 0.6544008,\n    size.height * 0.6172024,\n    size.width * 0.6581984,\n    size.height * 0.6200040,\n  );\n  path_0.close();\n\n  final Paint paint0fill = Paint()..style = PaintingStyle.fill;\n  paint0fill.color = const Color(0xff31BB6B).withOpacity(1.0);\n  canvas.drawPath(path_0, paint0fill);\n\n  final Path path_1 = Path();\n  path_1.moveTo(size.width * 0.5405992, size.height * 0.4396032);\n  path_1.cubicTo(\n    size.width * 0.5084008,\n    size.height * 0.4512024,\n    size.width * 0.4754008,\n    size.height * 0.4532024,\n    size.width * 0.4418016,\n    size.height * 0.4472024,\n  );\n  path_1.cubicTo(\n    size.width * 0.4292024,\n    size.height * 0.4490000,\n    size.width * 0.4184008,\n    size.height * 0.4428016,\n    size.width * 0.4078016,\n    size.height * 0.4382024,\n  );\n  path_1.cubicTo(\n    size.width * 0.3772004,\n    size.height * 0.4248016,\n    size.width * 0.3516004,\n    size.height * 0.4048016,\n    size.width * 0.3326004,\n    size.height * 0.3768020,\n  );\n  path_1.cubicTo(\n    size.width * 0.3302004,\n    size.height * 0.3732020,\n    size.width * 0.3276004,\n    size.height * 0.3696020,\n    size.width * 0.3278004,\n    size.height * 0.3650020,\n  );\n  path_1.cubicTo(\n    size.width * 0.3124004,\n    size.height * 0.3368020,\n    size.width * 0.3032004,\n    size.height * 0.3070020,\n    size.width * 0.3040004,\n    size.height * 0.2746020,\n  );\n  path_1.cubicTo(\n    size.width * 0.3056004,\n    size.height * 0.2126020,\n    size.width * 0.3322004,\n    size.height * 0.1636020,\n    size.width * 0.3842004,\n    size.height * 0.1300020,\n  );\n  path_1.cubicTo(\n    size.width * 0.4872024,\n    size.height * 0.06320198,\n    size.width * 0.6244008,\n    size.height * 0.1212020,\n    size.width * 0.6494008,\n    size.height * 0.2418020,\n  );\n  path_1.cubicTo(\n    size.width * 0.6554008,\n    size.height * 0.2704020,\n    size.width * 0.6535992,\n    size.height * 0.2994020,\n    size.width * 0.6452024,\n    size.height * 0.3276020,\n  );\n  path_1.cubicTo(\n    size.width * 0.6444008,\n    size.height * 0.3302020,\n    size.width * 0.6440000,\n    size.height * 0.3328020,\n    size.width * 0.6434008,\n    size.height * 0.3354020,\n  );\n  path_1.cubicTo(\n    size.width * 0.6380000,\n    size.height * 0.3574020,\n    size.width * 0.6260000,\n    size.height * 0.3756020,\n    size.width * 0.6118016,\n    size.height * 0.3924020,\n  );\n  path_1.cubicTo(\n    size.width * 0.5960000,\n    size.height * 0.4108016,\n    size.width * 0.5770000,\n    size.height * 0.4252024,\n    size.width * 0.5548016,\n    size.height * 0.4354008,\n  );\n  path_1.cubicTo(\n    size.width * 0.5500000,\n    size.height * 0.4376032,\n    size.width * 0.5455992,\n    size.height * 0.4394008,\n    size.width * 0.5405992,\n    size.height * 0.4396032,\n  );\n  path_1.close();\n\n  final Paint paint1fill = Paint()..style = PaintingStyle.fill;\n  paint1fill.color = const Color(0xffFEBC59).withOpacity(1.0);\n  canvas.drawPath(path_1, paint1fill);\n\n  final Path path_2 = Path();\n  path_2.moveTo(size.width * 0.5405992, size.height * 0.4395992);\n  path_2.cubicTo(\n    size.width * 0.5880000,\n    size.height * 0.4200000,\n    size.width * 0.6224008,\n    size.height * 0.3870008,\n    size.width * 0.6410000,\n    size.height * 0.3386008,\n  );\n  path_2.cubicTo(\n    size.width * 0.6414008,\n    size.height * 0.3374008,\n    size.width * 0.6425992,\n    size.height * 0.3364008,\n    size.width * 0.6434008,\n    size.height * 0.3354008,\n  );\n  path_2.cubicTo(\n    size.width * 0.6850000,\n    size.height * 0.4020000,\n    size.width * 0.7265992,\n    size.height * 0.4688016,\n    size.width * 0.7685992,\n    size.height * 0.5352024,\n  );\n  path_2.cubicTo(\n    size.width * 0.7742024,\n    size.height * 0.5440000,\n    size.width * 0.7724008,\n    size.height * 0.5470000,\n    size.width * 0.7642024,\n    size.height * 0.5520000,\n  );\n  path_2.cubicTo(\n    size.width * 0.7285992,\n    size.height * 0.5740000,\n    size.width * 0.6924008,\n    size.height * 0.5954008,\n    size.width * 0.6584008,\n    size.height * 0.6200000,\n  );\n  path_2.cubicTo(\n    size.width * 0.6535992,\n    size.height * 0.6225992,\n    size.width * 0.6520000,\n    size.height * 0.6190000,\n    size.width * 0.6502024,\n    size.height * 0.6158016,\n  );\n  path_2.cubicTo(\n    size.width * 0.6158016,\n    size.height * 0.5590000,\n    size.width * 0.5814008,\n    size.height * 0.5022024,\n    size.width * 0.5470000,\n    size.height * 0.4455992,\n  );\n  path_2.cubicTo(\n    size.width * 0.5452024,\n    size.height * 0.4430000,\n    size.width * 0.5440000,\n    size.height * 0.4402024,\n    size.width * 0.5405992,\n    size.height * 0.4395992,\n  );\n  path_2.close();\n\n  final Paint paint2fill = Paint()..style = PaintingStyle.fill;\n  paint2fill.color = const Color(0xff737373).withOpacity(1.0);\n  canvas.drawPath(path_2, paint2fill);\n\n  final Path path_3 = Path();\n  path_3.moveTo(size.width * 0.3277992, size.height * 0.3651976);\n  path_3.cubicTo(\n    size.width * 0.3541992,\n    size.height * 0.4085992,\n    size.width * 0.3929992,\n    size.height * 0.4351984,\n    size.width * 0.4417976,\n    size.height * 0.4471984,\n  );\n  path_3.cubicTo(\n    size.width * 0.4287976,\n    size.height * 0.4623968,\n    size.width * 0.4197976,\n    size.height * 0.4803968,\n    size.width * 0.4094008,\n    size.height * 0.4973968,\n  );\n  path_3.cubicTo(\n    size.width * 0.3847992,\n    size.height * 0.5373968,\n    size.width * 0.3591992,\n    size.height * 0.5765992,\n    size.width * 0.3361992,\n    size.height * 0.6173968,\n  );\n  path_3.cubicTo(\n    size.width * 0.3347992,\n    size.height * 0.6197976,\n    size.width * 0.3333992,\n    size.height * 0.6219960,\n    size.width * 0.3301992,\n    size.height * 0.6215992,\n  );\n  path_3.cubicTo(\n    size.width * 0.3235992,\n    size.height * 0.6143968,\n    size.width * 0.3149992,\n    size.height * 0.6097976,\n    size.width * 0.3069992,\n    size.height * 0.6045992,\n  );\n  path_3.cubicTo(\n    size.width * 0.2783992,\n    size.height * 0.5863968,\n    size.width * 0.2493992,\n    size.height * 0.5685992,\n    size.width * 0.2205992,\n    size.height * 0.5507976,\n  );\n  path_3.cubicTo(\n    size.width * 0.2163992,\n    size.height * 0.5481984,\n    size.width * 0.2131992,\n    size.height * 0.5465992,\n    size.width * 0.2169992,\n    size.height * 0.5403968,\n  );\n  path_3.cubicTo(\n    size.width * 0.2535992,\n    size.height * 0.4825992,\n    size.width * 0.2899992,\n    size.height * 0.4243968,\n    size.width * 0.3263992,\n    size.height * 0.3663976,\n  );\n  path_3.cubicTo(\n    size.width * 0.3265992,\n    size.height * 0.3659976,\n    size.width * 0.3271992,\n    size.height * 0.3655976,\n    size.width * 0.3277992,\n    size.height * 0.3651976,\n  );\n  path_3.close();\n\n  final Paint paint3fill = Paint()..style = PaintingStyle.fill;\n  paint3fill.color = const Color(0xff737373).withOpacity(1.0);\n  canvas.drawPath(path_3, paint3fill);\n}\n"})})]})}function r(i={}){const{wrapper:e}={...(0,h.a)(),...i.components};return e?(0,n.jsx)(e,{...i,children:(0,n.jsx)(z,{...i})}):z(i)}},11151:(i,e,t)=>{t.d(e,{Z:()=>d,a:()=>a});var n=t(67294);const h={},s=n.createContext(h);function a(i){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function d(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(h):i.components||h:a(i.components),n.createElement(s.Provider,{value:e},i.children)}}}]);