"use strict";(self.webpackChunkannict_developers=self.webpackChunkannict_developers||[]).push([[4593],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8973:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:1200,slug:"/rest-api/v1/following"},p="\u30d5\u30a9\u30ed\u30a4\u30fc",c={unversionedId:"rest-api-v1/following",id:"rest-api-v1/following",isDocsHomePage:!1,title:"\u30d5\u30a9\u30ed\u30a4\u30fc",description:"GET /v1/following",source:"@site/docs/rest-api-v1/following.md",sourceDirName:"rest-api-v1",slug:"/rest-api/v1/following",permalink:"/docs/rest-api/v1/following",editUrl:"https://github.com/kiraka/annict-developers/edit/main/docs/rest-api-v1/following.md",tags:[],version:"current",sidebarPosition:1200,frontMatter:{sidebar_position:1200,slug:"/rest-api/v1/following"},sidebar:"tutorialSidebar",previous:{title:"\u30e6\u30fc\u30b6",permalink:"/docs/rest-api/v1/users"},next:{title:"\u30d5\u30a9\u30ed\u30ef\u30fc",permalink:"/docs/rest-api/v1/followers"}},u=[{value:"GET /v1/following",id:"get-v1following",children:[{value:"\u30d5\u30a3\u30fc\u30eb\u30c9",id:"\u30d5\u30a3\u30fc\u30eb\u30c9",children:[],level:3},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf",children:[],level:3},{value:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b",id:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b",children:[],level:3}],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u30d5\u30a9\u30ed\u30a4\u30fc"},"\u30d5\u30a9\u30ed\u30a4\u30fc"),(0,l.kt)("h2",{id:"get-v1following"},"GET /v1/following"),(0,l.kt)("p",null,"Annict\u306b\u767b\u9332\u3055\u308c\u3066\u3044\u308b\u30e6\u30fc\u30b6\u306e\u30d5\u30a9\u30ed\u30a4\u30fc (\u30d5\u30a9\u30ed\u30fc\u3057\u3066\u3044\u308b\u4eba) \u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"\u30d5\u30a3\u30fc\u30eb\u30c9"},"\u30d5\u30a3\u30fc\u30eb\u30c9"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/rest-api/v1/users"},"\u30e6\u30fc\u30b6")," \u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3068\u540c\u3058\u3067\u3059\u3002"),(0,l.kt)("h3",{id:"\u30d1\u30e9\u30e1\u30fc\u30bf"},"\u30d1\u30e9\u30e1\u30fc\u30bf"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f7f\u7528\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fields"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30dc\u30c7\u30a3\u306b\u542b\u307e\u308c\u308b\u30c7\u30fc\u30bf\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u7d5e\u308a\u8fbc\u307f\u307e\u3059\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"fields=id,username")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filter_user_id"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e6\u30fc\u30b6ID\u3067\u7d5e\u308a\u8fbc\u307f\u307e\u3059\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"filter_user_id=2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filter_username"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e6\u30fc\u30b6\u540d\u3067\u7d5e\u308a\u8fbc\u307f\u307e\u3059\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"filter_username=shimbaco")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"page"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30da\u30fc\u30b8\u6570\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"page=2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"per_page"),(0,l.kt)("td",{parentName:"tr",align:null},"1\u30da\u30fc\u30b8\u306b\u4f55\u4ef6\u53d6\u5f97\u3059\u308b\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u306f ",(0,l.kt)("inlineCode",{parentName:"td"},"25")," \u4ef6\u3067\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"50")," \u4ef6\u307e\u3067\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"per_page=30")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sort_id"),(0,l.kt)("td",{parentName:"tr",align:null},"ID\u3067\u4e26\u3073\u66ff\u3048\u307e\u3059\u3002",(0,l.kt)("inlineCode",{parentName:"td"},"asc")," \u307e\u305f\u306f ",(0,l.kt)("inlineCode",{parentName:"td"},"desc")," \u304c\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"sort_id=desc")))),(0,l.kt)("h3",{id:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b"},"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ curl -X GET https://api.annict.com/v1/following?access_token=(access_token)&filter_username=shimbaco&per_page=2\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "users": [\n    {\n      "id": 3,\n      "username": "Nadeshiko",\n      "name": "\u5404\u52d9\u539f\u306a\u3067\u3057\u3053",\n      "description": "\u5c71\u68a8\u306b\u4f4f\u3080\u5973\u5b50\u9ad8\u751f\u3067\u3059\u3002",\n      "url": null,\n      "avatar_url": "https://api-assets.annict.com/cc301ca5c5e13399144c79daa4e4727b783676de.jpg",\n      "background_image_url": "https://api-assets.annict.com/cc301ca5c5e13399144c79daa4e4727b783676de.jpg",\n      "records_count": 0,\n      "created_at": "2014-03-04T09:32:25.000Z"\n    },\n    {\n      "id": 4,\n      "username": "ShimaRin",\n      "name": "\u5fd7\u6469\u30ea\u30f3",\n      "description": "\u30ad\u30e3\u30f3\u30d7\u304c\u597d\u304d\u3002",\n      "url": null,\n      "avatar_url": "https://api-assets.annict.com/33ce537a4cf38f71b509f295f2afa3291c281dcf.jpg",\n      "background_image_url": "https://api-assets.annict.com/33ce537a4cf38f71b509f295f2afa3291c281dcf.jpg",\n      "records_count": 0,\n      "created_at": "2014-03-04T09:32:28.000Z"\n    }\n  ],\n  "total_count": 274,\n  "next_page": 2,\n  "prev_page": null\n}\n')))}d.isMDXComponent=!0}}]);