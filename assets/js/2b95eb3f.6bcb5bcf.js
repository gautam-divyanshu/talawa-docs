"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[73971],{93244:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>n,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=t(85893),a=t(11151);const c={},n="cropImage method",o={id:"talawa-mobile-docs/services_third_party_service_multi_media_pick_service/MultiMediaPickerService/cropImage",title:"cropImage method",description:"Future&lt;File?> cropImage",source:"@site/docs/talawa-mobile-docs/services_third_party_service_multi_media_pick_service/MultiMediaPickerService/cropImage.md",sourceDirName:"talawa-mobile-docs/services_third_party_service_multi_media_pick_service/MultiMediaPickerService",slug:"/talawa-mobile-docs/services_third_party_service_multi_media_pick_service/MultiMediaPickerService/cropImage",permalink:"/docs/talawa-mobile-docs/services_third_party_service_multi_media_pick_service/MultiMediaPickerService/cropImage",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_third_party_service_multi_media_pick_service/MultiMediaPickerService/cropImage.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"MultiMediaPickerService constructor",permalink:"/docs/talawa-mobile-docs/services_third_party_service_multi_media_pick_service/MultiMediaPickerService/"},next:{title:"fileStream property",permalink:"/docs/talawa-mobile-docs/services_third_party_service_multi_media_pick_service/MultiMediaPickerService/fileStream"}},s={},l=[{value:"Implementation",id:"implementation",level:2}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"cropimage-method",children:"cropImage method"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<",(0,r.jsx)(i.a,{href:"https://api.flutter.dev/flutter/dart-io/File-class.html",children:"File"}),"?> cropImage\n({required ",(0,r.jsx)(i.a,{href:"https://api.flutter.dev/flutter/dart-io/File-class.html",children:"File"})," imageFile})"]}),"\n",(0,r.jsx)("p",{children:"This function is used to crop the image selected by the user."}),"\n",(0,r.jsxs)("p",{children:["The function accepts a ",(0,r.jsx)("code",{children:"File"})," type image and returns ",(0,r.jsx)("code",{children:"File"})," type of cropped image."]}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"params"}),":"]}),"\n",(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"imageFile"}),": the image file to be cropped."]})}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"returns"}),":"]}),"\n",(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"Future<File?>"}),": the image after been cropped."]})}),"\n",(0,r.jsx)(i.h2,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-dart",children:"Future<File?> cropImage({required File imageFile}) async {\n  // try, to crop the image and returns a File with cropped image path.\n  try {\n    final CroppedFile? croppedImage = await locator<ImageCropper>().cropImage(\n      sourcePath: imageFile.path,\n      aspectRatioPresets: [\n        CropAspectRatioPreset.square,\n        CropAspectRatioPreset.original,\n      ],\n      uiSettings: [\n        AndroidUiSettings(\n          toolbarTitle: 'Crop Image',\n          toolbarColor: const Color(0xff18191A),\n          toolbarWidgetColor: Colors.white,\n          backgroundColor: Colors.black,\n          cropGridColor: Colors.white,\n          initAspectRatio: CropAspectRatioPreset.original,\n          lockAspectRatio: false,\n        ),\n        IOSUiSettings(\n          minimumAspectRatio: 1.0,\n        )\n      ],\n    );\n    if (croppedImage != null) {\n      return File(croppedImage.path);\n    }\n  } catch (e) {\n    print(\n      \"MultiMediaPickerService : Exception occurred while cropping Image\",\n    );\n  }\n  return null;\n}\n"})})]})}function p(e={}){const{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>o,a:()=>n});var r=t(67294);const a={},c=r.createContext(a);function n(e){const i=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),r.createElement(c.Provider,{value:i},e.children)}}}]);