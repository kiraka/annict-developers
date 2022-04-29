"use strict";(self.webpackChunkannict_developers=self.webpackChunkannict_developers||[]).push([[4124],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6921:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],p={sidebar_position:1,slug:"/graphql-api/beta"},l="GraphQL API\u306e\u6982\u8981",c={unversionedId:"graphql-api-beta/overview",id:"graphql-api-beta/overview",title:"GraphQL API\u306e\u6982\u8981",description:"Annict\u306eGraphQL API\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u3088\u3046\u3053\u305d\uff01",source:"@site/docs/graphql-api-beta/overview.md",sourceDirName:"graphql-api-beta",slug:"/graphql-api/beta",permalink:"/docs/graphql-api/beta",editUrl:"https://github.com/kiraka/annict-developers/edit/main/docs/graphql-api-beta/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/graphql-api/beta"},sidebar:"tutorialSidebar",previous:{title:"OAuth",permalink:"/docs/authentication/oauth"},next:{title:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",permalink:"/docs/graphql-api/beta/setup"}},u={},s=[{value:"\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8",id:"\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8",level:2}],f={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"graphql-api\u306e\u6982\u8981"},"GraphQL API\u306e\u6982\u8981"),(0,i.kt)("p",null,"Annict\u306eGraphQL API\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u3088\u3046\u3053\u305d\uff01\nGraphQL API\u3067\u306fAnnict\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f5c\u54c1\u60c5\u5831"),(0,i.kt)("li",{parentName:"ul"},"\u30a8\u30d4\u30bd\u30fc\u30c9\u60c5\u5831"),(0,i.kt)("li",{parentName:"ul"},"\u5229\u7528\u8005\u306e\u8a18\u9332"),(0,i.kt)("li",{parentName:"ul"},"\u306a\u3069\u306a\u3069")),(0,i.kt)("p",null,"\u307e\u305f\u3001API\u3092\u5229\u7528\u3057\u3066\u8a18\u9332\u3084\u30b9\u30c6\u30fc\u30bf\u30b9\u306e\u5909\u66f4\u7b49\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u30c7\u30fc\u30bf\u3092\u9001\u4fe1\u3059\u308b\u624b\u6bb5\u3082\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\n\u53d6\u5f97\u3067\u304d\u308b\u30c7\u30fc\u30bf\u3084\u9001\u4fe1\u3067\u304d\u308b\u30c7\u30fc\u30bf\u306e\u8a73\u7d30\u306f",(0,i.kt)("a",{href:"/docs/graphql-api/beta/reference/",target:"_blank"},"GraphQL API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"),"\u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("h2",{id:"\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8"},"\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8"),(0,i.kt)("p",null,"GraphQL API\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306f\u4e0b\u8a18\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://api.annict.com/graphql\n")))}d.isMDXComponent=!0}}]);