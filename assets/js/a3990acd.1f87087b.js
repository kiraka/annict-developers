"use strict";(self.webpackChunkannict_developers=self.webpackChunkannict_developers||[]).push([[7941],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),f=o,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},465:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={slug:"2019-04-14-series-list",title:"GraphQL API\u3067\u4f5c\u54c1\u306b\u7d10\u3065\u304f\u30b7\u30ea\u30fc\u30ba\u60c5\u5831\u304c\u53d6\u5f97\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f",authors:["shimbaco"]},l=void 0,c={permalink:"/blog/2019-04-14-series-list",editUrl:"https://github.com/kiraka/annict-developers/edit/main/blog/blog/2019-04-14-series-list/index.mdx",source:"@site/blog/2019-04-14-series-list/index.mdx",title:"GraphQL API\u3067\u4f5c\u54c1\u306b\u7d10\u3065\u304f\u30b7\u30ea\u30fc\u30ba\u60c5\u5831\u304c\u53d6\u5f97\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f",description:"Work\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b seriesList \u3068\u3044\u3046\u30b7\u30ea\u30fc\u30ba\u60c5\u5831\u304c\u53d6\u5f97\u3067\u304d\u308b\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30af\u30a8\u30ea\u3067\u4f5c\u54c1\u306b\u7d10\u3065\u304f\u30b7\u30ea\u30fc\u30ba\u60c5\u5831\u304c\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002",date:"2019-04-14T00:00:00.000Z",formattedDate:"April 14, 2019",tags:[],readingTime:1.17,truncated:!1,authors:[{name:"Shimba, Koji",title:"Creator of Annict",url:"https://github.com/shimbaco",imageURL:"https://github.com/shimbaco.png",key:"shimbaco"}],frontMatter:{slug:"2019-04-14-series-list",title:"GraphQL API\u3067\u4f5c\u54c1\u306b\u7d10\u3065\u304f\u30b7\u30ea\u30fc\u30ba\u60c5\u5831\u304c\u53d6\u5f97\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f",authors:["shimbaco"]},prevItem:{title:"Annict Developers \u3092\u4f5c\u308a\u76f4\u3057\u307e\u3057\u305f",permalink:"/blog/2021-10-23-new-annict-developers"},nextItem:{title:"API\u3067\u300c\u3057\u3087\u307c\u3044\u30ab\u30ec\u30f3\u30c0\u30fc\u300d\u306e\u30bf\u30a4\u30c8\u30ebID (TID) \u304c\u53d6\u5f97\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f",permalink:"/blog/2019-02-09-syobocal-tid"}},p={authorsImageUrls:[void 0]},u=[],m={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Work\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"seriesList")," \u3068\u3044\u3046\u30b7\u30ea\u30fc\u30ba\u60c5\u5831\u304c\u53d6\u5f97\u3067\u304d\u308b\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30af\u30a8\u30ea\u3067\u4f5c\u54c1\u306b\u7d10\u3065\u304f\u30b7\u30ea\u30fc\u30ba\u60c5\u5831\u304c\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  viewer {\n    works(state: WATCHED, first: 5, orderBy: {field: SEASON, direction: DESC}) {\n      nodes {\n        title\n        seriesList {\n          edges {\n            node {\n              name\n              works(orderBy: { field: SEASON, direction: DESC }) {\n                edges {\n                  summary\n                  node {\n                    title\n                    seasonYear\n                    seasonName\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "viewer": {\n      "works": {\n        "nodes": [\n          {\n            "title": "\u5287\u5834\u7248 \u5e7c\u5973\u6226\u8a18",\n            "seriesList": {\n              "edges": [\n                {\n                  "node": {\n                    "name": "\u5e7c\u5973\u6226\u8a18",\n                    "works": {\n                      "edges": [\n                        {\n                          "summary": "\u5287\u5834\u7248",\n                          "node": {\n                            "title": "\u5287\u5834\u7248 \u5e7c\u5973\u6226\u8a18",\n                            "seasonYear": 2019,\n                            "seasonName": "WINTER"\n                          }\n                        },\n                        {\n                          "summary": "TV\u30b7\u30ea\u30fc\u30ba",\n                          "node": {\n                            "title": "\u5e7c\u5973\u6226\u8a18",\n                            "seasonYear": 2017,\n                            "seasonName": "WINTER"\n                          }\n                        }\n                      ]\n                    }\n                  }\n                }\n              ]\n            }\n          },\n...\n')),(0,a.kt)("p",null,"GraphQL API\u306e\u8a73\u7d30\u306f",(0,a.kt)("a",{href:"/docs/graphql-api/beta/reference/object/work/",target:"_blank"},"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"),"\u304b\u3089\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,"\u3058\u308f\u3058\u308f\u3068API\u304b\u3089\u53d6\u5f97\u3067\u304d\u308b\u30c7\u30fc\u30bf\u304c\u5897\u3048\u3066\u3044\u308bAnnict\u3092\u3088\u308d\u3057\u304f\u304a\u9858\u3044\u3057\u307e\u3059\u3002"))}f.isMDXComponent=!0}}]);