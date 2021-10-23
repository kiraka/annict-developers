"use strict";(self.webpackChunkannict_developers=self.webpackChunkannict_developers||[]).push([[1611],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=d(n),k=r,s=m["".concat(o,".").concat(k)]||m[k]||c[k]||l;return n?a.createElement(s,i(i({ref:t},u),{},{components:n})):a.createElement(s,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1389:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],p={sidebar_position:1,slug:"/rest-api/v1"},o="REST API\u306e\u6982\u8981",d={unversionedId:"rest-api-v1/overview",id:"rest-api-v1/overview",isDocsHomePage:!1,title:"REST API\u306e\u6982\u8981",description:"\u30d9\u30fc\u30b9URI",source:"@site/docs/rest-api-v1/overview.md",sourceDirName:"rest-api-v1",slug:"/rest-api/v1",permalink:"/docs/rest-api/v1",editUrl:"https://github.com/kiraka/annict-developers/edit/main/docs/rest-api-v1/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/rest-api/v1"},sidebar:"tutorialSidebar",previous:{title:"Mutation",permalink:"/docs/graphql-api/beta/mutation"},next:{title:"\u4f5c\u54c1",permalink:"/docs/rest-api/v1/works"}},u=[{value:"\u30d9\u30fc\u30b9URI",id:"\u30d9\u30fc\u30b9uri",children:[],level:2},{value:"\u65e5\u4ed8",id:"\u65e5\u4ed8",children:[],level:2},{value:"\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3",id:"\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3",children:[],level:2},{value:"\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306e\u4ed8\u4e0e",id:"\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306e\u4ed8\u4e0e",children:[{value:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b (\u30ea\u30af\u30a8\u30b9\u30c8\u30d8\u30c3\u30c0\u306b\u4ed8\u4e0e\u3059\u308b)",id:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b-\u30ea\u30af\u30a8\u30b9\u30c8\u30d8\u30c3\u30c0\u306b\u4ed8\u4e0e\u3059\u308b",children:[],level:3},{value:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b (URI\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u4ed8\u4e0e\u3059\u308b)",id:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b-uri\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u4ed8\u4e0e\u3059\u308b",children:[],level:3},{value:"\u30ec\u30b9\u30dd\u30f3\u30b9\u4f8b",id:"\u30ec\u30b9\u30dd\u30f3\u30b9\u4f8b",children:[],level:3}],level:2},{value:"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9",id:"http\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9",children:[],level:2},{value:"\u30da\u30fc\u30b8\u30cd\u30fc\u30b7\u30e7\u30f3",id:"\u30da\u30fc\u30b8\u30cd\u30fc\u30b7\u30e7\u30f3",children:[],level:2},{value:"\u30a8\u30e9\u30fc",id:"\u30a8\u30e9\u30fc",children:[],level:2}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"rest-api\u306e\u6982\u8981"},"REST API\u306e\u6982\u8981"),(0,l.kt)("h2",{id:"\u30d9\u30fc\u30b9uri"},"\u30d9\u30fc\u30b9URI"),(0,l.kt)("p",null,"Annict API\u306e\u30d9\u30fc\u30b9URI\u306f\u4e0b\u8a18\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://api.annict.com\n")),(0,l.kt)("p",null,"Annict\u304c\u63d0\u4f9b\u3059\u308b\u5168\u3066\u306eAPI\u306b\u306f\u3001\u3053\u306e\u30d9\u30fc\u30b9URI\u306e\u5f8c\u306b\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u30d1\u30b9\u3092\u8a18\u8ff0\u3057\u3066\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4f8b\u3048\u3070\u4f5c\u54c1\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u5834\u5408\u306f\u3001\u30d1\u30b9 ",(0,l.kt)("inlineCode",{parentName:"p"},"/v1/works")," \u3092\u7e4b\u3052\u3066\u4e0b\u8a18\u306e\u3088\u3046\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u308a\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET https://api.annict.com/v1/works\n")),(0,l.kt)("h2",{id:"\u65e5\u4ed8"},"\u65e5\u4ed8"),(0,l.kt)("p",null,"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f",(0,l.kt)("a",{parentName:"p",href:"http://www.iso.org/iso/home/standards/iso8601.htm"},"ISO 8601")," (",(0,l.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DDTHH:MM:SSZ"),") \u3067\u8fd4\u3057\u307e\u3059\u3002\u3088\u3063\u3066\u30bf\u30a4\u30e0\u30be\u30fc\u30f3\u306fUTC\u3068\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3"},"\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3"),(0,l.kt)("p",null,"REST API\u3092\u64cd\u4f5c\u3059\u308b\u306b\u306f\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u304c\u5fc5\u8981\u3067\u3059\u3002\n\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306b\u3064\u3044\u3066\u306f",(0,l.kt)("a",{parentName:"p",href:"/docs/authentication"},"\u8a8d\u8a3c\u306e\u6982\u8981\u30da\u30fc\u30b8"),"\u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("h2",{id:"\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306e\u4ed8\u4e0e"},"\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306e\u4ed8\u4e0e"),(0,l.kt)("p",null,"Annict API\u3092\u901a\u3058\u3066\u30ea\u30bd\u30fc\u30b9\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u500b\u4eba\u7528\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3084OAuth\u306b\u3088\u3063\u3066\u4f5c\u6210\u3055\u308c\u305f\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u4ed8\u4e0e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u4ed8\u4e0e\u306e\u4ed5\u65b9\u306f2\u7a2e\u985e\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u30ea\u30af\u30a8\u30b9\u30c8\u30d8\u30c3\u30c0\u306b\u4ed8\u4e0e\u3059\u308b"),(0,l.kt)("li",{parentName:"ol"},"URI\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u4ed8\u4e0e\u3059\u308b")),(0,l.kt)("h3",{id:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b-\u30ea\u30af\u30a8\u30b9\u30c8\u30d8\u30c3\u30c0\u306b\u4ed8\u4e0e\u3059\u308b"},"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b (\u30ea\u30af\u30a8\u30b9\u30c8\u30d8\u30c3\u30c0\u306b\u4ed8\u4e0e\u3059\u308b)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'$ curl -H "Authorization: Bearer 35372b2d866222ed33e355c36d86be498076e037a810ee72963819339c781f32" \\\n-X GET https://api.annict.com/v1/works\n')),(0,l.kt)("h3",{id:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b-uri\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u4ed8\u4e0e\u3059\u308b"},"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b (URI\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u4ed8\u4e0e\u3059\u308b)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ curl -X GET https://api.annict.com/v1/works?access_token=35372b2d866222ed33e355c36d86be498076e037a810ee72963819339c781f32\n")),(0,l.kt)("h3",{id:"\u30ec\u30b9\u30dd\u30f3\u30b9\u4f8b"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "works": [\n    {\n      "id":1129,\n      "title":"\u7cbe\u970a\u306e\u5b88\u308a\u4eba",\n      "title_kana":"\u305b\u3044\u308c\u3044\u306e\u3082\u308a\u3073\u3068",\n      "media":"tv",\n      ...\n    }\n  ]\n}\n')),(0,l.kt)("h2",{id:"http\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9"},"HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9"),(0,l.kt)("p",null,"Annict API\u3067\u306f\u4e0b\u8a18\u306e\u6761\u4ef6\u3067HTTP\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u3092\u8fd4\u3057\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6761\u4ef6"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200 (OK)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u6210\u529f\u3057\u3001\u540c\u6642\u306b\u51e6\u7406\u304c\u6b63\u5e38\u306b\u5b8c\u4e86\u3057\u305f\u3068\u304d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"201 (Created)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u6210\u529f\u3057\u3001\u65b0\u3057\u3044\u30ea\u30bd\u30fc\u30b9\u304c\u4f5c\u3089\u308c\u305f\u3068\u304d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"202 (Accepted)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u6210\u529f\u3057\u305f\u304c\u3001\u51e6\u7406\u306f\u975e\u540c\u671f\u3067\u5b9f\u884c\u3055\u308c\u308b\u3068\u304d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"204 (No Content)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u6210\u529f\u3057\u3001\u30ec\u30b9\u30dd\u30f3\u30b9\u30dc\u30c7\u30a3\u304c\u5b58\u5728\u3057\u306a\u3044\u3068\u304d\u3002",(0,l.kt)("inlineCode",{parentName:"td"},"DELETE")," \u30e1\u30bd\u30c3\u30c9\u3067\u30ea\u30bd\u30fc\u30b9\u304c\u524a\u9664\u3055\u308c\u305f\u3068\u304d\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"400 (Bad Request)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u5185\u5bb9\u304c\u6b63\u3057\u304f\u306a\u3044\u3068\u304d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401 (Unauthorized)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30ea\u30bd\u30fc\u30b9\u3078\u306e\u30a2\u30af\u30bb\u30b9\u306b\u8a8d\u8a3c\u304c\u5fc5\u8981\u306a\u3068\u304d\u3002\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u3063\u305f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u7279\u5b9a\u3067\u304d\u306a\u3044\u3068\u304d\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403 (Forbidden)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30ea\u30bd\u30fc\u30b9\u3078\u306e\u30a2\u30af\u30bb\u30b9\u304c\u7981\u6b62\u3055\u308c\u3066\u3044\u308b\u3068\u304d\u3002\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u3063\u305f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306f\u7279\u5b9a\u3057\u305f\u3082\u306e\u306e\u3001\u6307\u5b9a\u3055\u308c\u305f\u30ea\u30bd\u30fc\u30b9\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u7981\u6b62\u3057\u3066\u3044\u308b\u3068\u304d\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404 (Not Found)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u3055\u308c\u305f\u30ea\u30bd\u30fc\u30b9\u304c\u5b58\u5728\u3057\u306a\u3044\u3068\u304d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"500 (Internal Server Error)"),(0,l.kt)("td",{parentName:"tr",align:null},"Annict\u306e\u30b5\u30fc\u30d0\u5185\u90e8\u306b\u554f\u984c\u304c\u3042\u308a\u6b63\u5e38\u306b\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u8fd4\u305b\u306a\u3044\u3068\u304d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"503 (Service Unavailable)"),(0,l.kt)("td",{parentName:"tr",align:null},"Annict\u306e\u30b5\u30fc\u30d0\u304c\u4e00\u6642\u7684\u306b\u505c\u6b62\u3057\u3066\u3044\u308b\u3068\u304d\u3002")))),(0,l.kt)("h2",{id:"\u30da\u30fc\u30b8\u30cd\u30fc\u30b7\u30e7\u30f3"},"\u30da\u30fc\u30b8\u30cd\u30fc\u30b7\u30e7\u30f3"),(0,l.kt)("p",null,"\u4f5c\u54c1\u4e00\u89a7\u306a\u3069\u3001\u8907\u6570\u306e\u30ea\u30bd\u30fc\u30b9\u3092\u8fd4\u3059API\u306b\u306f\u30da\u30fc\u30b8\u3092\u6307\u5b9a\u3057\u3066\u53d6\u5f97\u3059\u308b\u30ea\u30bd\u30fc\u30b9\u3092\u5206\u5272\u3059\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\u30da\u30fc\u30b8\u3092\u6307\u5b9a\u3059\u308b\u5834\u5408\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"page")," \u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u30011\u30da\u30fc\u30b8\u3042\u305f\u308a\u4f55\u4ef6\u306e\u30ea\u30bd\u30fc\u30b9\u3092\u53d6\u5f97\u3059\u308b\u304b\u3092\u6307\u5b9a\u3059\u308b\u5834\u5408\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"per_page")," \u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306a\u3069\u306e\u60c5\u5831\u306f\u5404\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30ec\u30b9\u30dd\u30f3\u30b9\u30c7\u30fc\u30bf\u306b\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"total_count"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"next_page"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"prev_page")," \u306e3\u3064\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u4ed8\u52a0\u3055\u308c\u307e\u3059\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"total_count")," \u306b\u306f\u30da\u30fc\u30b8\u3092\u8de8\u3044\u3060\u5168\u30ea\u30bd\u30fc\u30b9\u6570\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"next_page"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"prev_page")," \u306b\u306f\u6b21\u306e\u30da\u30fc\u30b8\u6570\u3001\u524d\u306e\u30da\u30fc\u30b8\u6570\u304c\u683c\u7d0d\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u6b21\u306e\u30da\u30fc\u30b8\u3001\u524d\u306e\u30da\u30fc\u30b8\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," \u304c\u683c\u7d0d\u3055\u308c\u307e\u3059\u3002\n\u4ee5\u4e0b\u306f\u51688\u4ef6\u306e\u4f5c\u54c1\u60c5\u5831\u306e4\u30da\u30fc\u30b8\u76ee\u30922\u4ef6\u53d6\u5f97\u3059\u308b\u4f8b\u3067\u3059\u30025\u30da\u30fc\u30b8\u76ee\u306f\u5b58\u5728\u3057\u306a\u3044\u305f\u3081\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"next_page")," \u304c ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," \u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET https://api.annict.com/v1/works?per_page=2&page=4&access_token=(access_token)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "works": [\n    ...\n  ],\n  "total_count": 8,\n  "next_page": null,\n  "prev_page": 3\n}\n')),(0,l.kt)("h2",{id:"\u30a8\u30e9\u30fc"},"\u30a8\u30e9\u30fc"),(0,l.kt)("p",null,"Annict API\u304c\u30a8\u30e9\u30fc\u3092\u8fd4\u3059\u3068\u304d\u306f\u3001\u57fa\u672c\u7684\u306b\u4ee5\u4e0b\u306e\u5f62\u5f0f\u3067\u30ec\u30b9\u30dd\u30f3\u30b9\u30dc\u30c7\u30a3\u3092\u8fd4\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"errors": [{\n  "type": "invalid_params",\n  "message": "\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u5931\u6557\u3057\u307e\u3057\u305f",\n  "developer_message": "per_page\u306f1\u4ee5\u4e0a\u306e\u5024\u306b\u3057\u3066\u304f\u3060\u3055\u3044",\n  "url": "http://example.com/docs/api/validations"\n}]\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30ad\u30fc\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"\u767a\u751f\u3057\u305f\u30a8\u30e9\u30fc\u306e\u30bf\u30a4\u30d7\u3002\u5168\u3066\u306e\u30bf\u30a4\u30d7\u306f\u4e0b\u8a18\u306e\u8868\u306b\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5229\u7528\u8005\u5411\u3051\u306e\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"developer_message"),(0,l.kt)("td",{parentName:"tr",align:null},"API\u3092\u5229\u7528\u3057\u3066\u3044\u308b\u958b\u767a\u8005\u5411\u3051\u306e\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u3002")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"invalid_params"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30ea\u30af\u30a8\u30b9\u30c8\u6642\u306b\u6e21\u3057\u305f\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u4e0d\u5099\u304c\u3042\u308b\u3002")))))}m.isMDXComponent=!0}}]);