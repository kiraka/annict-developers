"use strict";(self.webpackChunkannict_developers=self.webpackChunkannict_developers||[]).push([[699],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),c=u(n),k=r,s=c["".concat(o,".").concat(k)]||c[k]||m[k]||l;return n?a.createElement(s,i(i({ref:e},d),{},{components:n})):a.createElement(s,i({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9184:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],p={sidebar_position:1100,slug:"/rest-api/v1/users"},o="\u30e6\u30fc\u30b6",u={unversionedId:"rest-api-v1/users",id:"rest-api-v1/users",title:"\u30e6\u30fc\u30b6",description:"GET /v1/users",source:"@site/docs/rest-api-v1/users.md",sourceDirName:"rest-api-v1",slug:"/rest-api/v1/users",permalink:"/docs/rest-api/v1/users",editUrl:"https://github.com/kiraka/annict-developers/edit/main/docs/rest-api-v1/users.md",tags:[],version:"current",sidebarPosition:1100,frontMatter:{sidebar_position:1100,slug:"/rest-api/v1/users"},sidebar:"tutorialSidebar",previous:{title:"\u653e\u9001\u4e88\u5b9a",permalink:"/docs/rest-api/v1/programs"},next:{title:"\u30d5\u30a9\u30ed\u30a4\u30fc",permalink:"/docs/rest-api/v1/following"}},d={},m=[{value:"GET /v1/users",id:"get-v1users",level:2},{value:"\u30d5\u30a3\u30fc\u30eb\u30c9",id:"\u30d5\u30a3\u30fc\u30eb\u30c9",level:3},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf",level:3},{value:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b",id:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b",level:3},{value:"GET /v1/me",id:"get-v1me",level:2},{value:"\u30d5\u30a3\u30fc\u30eb\u30c9",id:"\u30d5\u30a3\u30fc\u30eb\u30c9-1",level:3},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-1",level:3},{value:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b",id:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b-1",level:3}],c={toc:m};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u30e6\u30fc\u30b6"},"\u30e6\u30fc\u30b6"),(0,l.kt)("h2",{id:"get-v1users"},"GET /v1/users"),(0,l.kt)("p",null,"Annict\u306b\u767b\u9332\u3055\u308c\u3066\u3044\u308b\u30e6\u30fc\u30b6\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"\u30d5\u30a3\u30fc\u30eb\u30c9"},"\u30d5\u30a3\u30fc\u30eb\u30c9"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e6\u30fc\u30b6ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"URL\u306a\u3069\u3067\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u30e6\u30fc\u30b6\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e6\u30fc\u30b6\u306e\u540d\u524d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e6\u30fc\u30b6\u306eURL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"avatar_url"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30a2\u30d0\u30bf\u30fc\u753b\u50cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"background_image_url"),(0,l.kt)("td",{parentName:"tr",align:null},"\u80cc\u666f\u753b\u50cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"records_count"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8a18\u9332\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"followings_count"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e6\u30fc\u30b6\u304c\u30d5\u30a9\u30ed\u30fc\u3057\u3066\u3044\u308b\u4eba\u306e\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"followers_count"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e6\u30fc\u30b6\u3092\u30d5\u30a9\u30ed\u30fc\u3057\u3066\u3044\u308b\u4eba\u306e\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wanna_watch_count"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u300c\u898b\u305f\u3044\u300d\u306b\u3057\u3066\u3044\u308b\u4f5c\u54c1\u306e\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"watching_count"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u300c\u898b\u3066\u308b\u300d\u306b\u3057\u3066\u3044\u308b\u4f5c\u54c1\u306e\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"watched_count"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u300c\u898b\u305f\u300d\u306b\u3057\u3066\u3044\u308b\u4f5c\u54c1\u306e\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"on_hold_count"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u300c\u4e2d\u65ad\u300d\u306b\u3057\u3066\u3044\u308b\u4f5c\u54c1\u306e\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stop_watching_count"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u300c\u4e2d\u6b62\u300d\u306b\u3057\u3066\u3044\u308b\u4f5c\u54c1\u306e\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"created_at"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e6\u30fc\u30b6\u767b\u9332\u3057\u305f\u65e5\u6642")))),(0,l.kt)("h3",{id:"\u30d1\u30e9\u30e1\u30fc\u30bf"},"\u30d1\u30e9\u30e1\u30fc\u30bf"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f7f\u7528\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fields"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30dc\u30c7\u30a3\u306b\u542b\u307e\u308c\u308b\u30c7\u30fc\u30bf\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u7d5e\u308a\u8fbc\u307f\u307e\u3059\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"fields=id,username")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filter_ids"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e6\u30fc\u30b6\u3092ID\u3067\u7d5e\u308a\u8fbc\u307f\u307e\u3059\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"filter_ids=1,2,3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filter_usernames"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e6\u30fc\u30b6\u3092\u30e6\u30fc\u30b6\u540d\u3067\u7d5e\u308a\u8fbc\u307f\u307e\u3059\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"filter_usernames=shimbaco,datekoichi")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"page"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30da\u30fc\u30b8\u6570\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"page=2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"per_page"),(0,l.kt)("td",{parentName:"tr",align:null},"1\u30da\u30fc\u30b8\u306b\u4f55\u4ef6\u53d6\u5f97\u3059\u308b\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u306f ",(0,l.kt)("inlineCode",{parentName:"td"},"25")," \u4ef6\u3067\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"50")," \u4ef6\u307e\u3067\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"per_page=30")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sort_id"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e6\u30fc\u30b6\u3092ID\u3067\u4e26\u3073\u66ff\u3048\u307e\u3059\u3002",(0,l.kt)("inlineCode",{parentName:"td"},"asc")," \u307e\u305f\u306f ",(0,l.kt)("inlineCode",{parentName:"td"},"desc")," \u304c\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"sort_id=desc")))),(0,l.kt)("h3",{id:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b"},"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ curl -X GET https://api.annict.com/v1/users?access_token=(access_token)&filter_usernames=shimbaco\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "users": [\n    {\n      "id": 2,\n      "username": "shimbaco",\n      "name": "Koji Shimba",\n      "description": "\u30a2\u30cb\u30e1\u597d\u304d\u304c\u9ad8\u3058\u3066\u3053\u306e\u30b5\u30fc\u30d3\u30b9\u3092\u4f5c\u308a\u307e\u3057\u305f\u3002\u8056\u5730\u5de1\u793c\u3092\u5e74\u306b\u6570\u56de\u3057\u3066\u3044\u307e\u3059\u3002",\n      "url": "http://shimba.co",\n      "avatar_url": "https://api-assets.annict.com/paperclip/profiles/1/tombo_avatars/master/d8af7adc8122c96ba7639218fd8b5ede332d42f2.jpg?1431357292",\n      "background_image_url": "https://api-assets.annict.com/paperclip/profiles/1/tombo_background_images/master/ee15d577fb2f2d61bdaf700cfab894b286a5762d.jpg?1486753229",\n      "records_count": 2369,\n      "followings_count": 258,\n      "followers_count": 205,\n      "wanna_watch_count": 237,\n      "watching_count": 103,\n      "watched_count": 335,\n      "on_hold_count": 45,\n      "stop_watching_count": 244,\n      "created_at": "2014-03-02T15:38:40.000Z"\n    }\n  ],\n  "total_count": 1,\n  "next_page": null,\n  "prev_page": null\n}\n')),(0,l.kt)("h2",{id:"get-v1me"},"GET /v1/me"),(0,l.kt)("p",null,"\u81ea\u5206\u306e\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"\u30d5\u30a3\u30fc\u30eb\u30c9-1"},"\u30d5\u30a3\u30fc\u30eb\u30c9"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e6\u30fc\u30b6ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"URL\u306a\u3069\u3067\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u30e6\u30fc\u30b6\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e6\u30fc\u30b6\u306e\u540d\u524d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e6\u30fc\u30b6\u306eURL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"avatar_url"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30a2\u30d0\u30bf\u30fc\u753b\u50cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"background_image_url"),(0,l.kt)("td",{parentName:"tr",align:null},"\u80cc\u666f\u753b\u50cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"records_count"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8a18\u9332\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"followings_count"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e6\u30fc\u30b6\u304c\u30d5\u30a9\u30ed\u30fc\u3057\u3066\u3044\u308b\u4eba\u306e\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"followers_count"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e6\u30fc\u30b6\u3092\u30d5\u30a9\u30ed\u30fc\u3057\u3066\u3044\u308b\u4eba\u306e\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wanna_watch_count"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u300c\u898b\u305f\u3044\u300d\u306b\u3057\u3066\u3044\u308b\u4f5c\u54c1\u306e\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"watching_count"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u300c\u898b\u3066\u308b\u300d\u306b\u3057\u3066\u3044\u308b\u4f5c\u54c1\u306e\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"watched_count"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u300c\u898b\u305f\u300d\u306b\u3057\u3066\u3044\u308b\u4f5c\u54c1\u306e\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"on_hold_count"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u300c\u4e2d\u65ad\u300d\u306b\u3057\u3066\u3044\u308b\u4f5c\u54c1\u306e\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stop_watching_count"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u300c\u4e2d\u6b62\u300d\u306b\u3057\u3066\u3044\u308b\u4f5c\u54c1\u306e\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"created_at"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e6\u30fc\u30b6\u767b\u9332\u3057\u305f\u65e5\u6642")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e6\u30fc\u30b6\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"notifications_count"),(0,l.kt)("td",{parentName:"tr",align:null},"\u901a\u77e5\u6570")))),(0,l.kt)("h3",{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-1"},"\u30d1\u30e9\u30e1\u30fc\u30bf"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f7f\u7528\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fields"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30dc\u30c7\u30a3\u306b\u542b\u307e\u308c\u308b\u30c7\u30fc\u30bf\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u7d5e\u308a\u8fbc\u307f\u307e\u3059\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"fields=id,username")))),(0,l.kt)("h3",{id:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b-1"},"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ curl -X GET https://api.annict.com/v1/me?access_token=(access_token)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 2,\n  "username": "shimbaco",\n  "name": "Koji Shimba",\n  "description": "\u30a2\u30cb\u30e1\u597d\u304d\u304c\u9ad8\u3058\u3066\u3053\u306e\u30b5\u30fc\u30d3\u30b9\u3092\u4f5c\u308a\u307e\u3057\u305f\u3002\u8056\u5730\u5de1\u793c\u3092\u5e74\u306b\u6570\u56de\u3057\u3066\u3044\u307e\u3059\u3002",\n  "url": "http://shimba.co",\n  "avatar_url": "https://api-assets.annict.com/paperclip/profiles/1/tombo_avatars/master/d8af7adc8122c96ba7639218fd8b5ede332d42f2.jpg?1431357292",\n  "background_image_url": "https://api-assets.annict.com/paperclip/profiles/1/tombo_background_images/master/ee15d577fb2f2d61bdaf700cfab894b286a5762d.jpg?1486753229",\n  "records_count": 2369,\n  "followings_count": 258,\n  "followers_count": 205,\n  "wanna_watch_count": 237,\n  "watching_count": 103,\n  "watched_count": 335,\n  "on_hold_count": 45,\n  "stop_watching_count": 244,\n  "created_at": "2014-03-02T15:38:40.000Z",\n  "email": "me@shimba.co",\n  "notifications_count": 0\n}\n')))}k.isMDXComponent=!0}}]);