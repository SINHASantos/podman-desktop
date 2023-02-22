"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4386],{5318:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(7378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=n.createContext({}),s=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(r),g=o,f=p["".concat(m,".").concat(g)]||p[g]||l[g]||i;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4794:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(5773),o=(r(7378),r(5318));const i={sidebar_position:4,title:"Migrating from Docker",description:"Migrate transparently from Docker to Podman, and continue using familiar workflows.",keywords:["podman desktop","podman","containers","migrating","docker"],tags:["migrating-from-docker"]},a="Migration from Docker to Podman Desktop",c={unversionedId:"migrating-from-docker/index",id:"migrating-from-docker/index",title:"Migrating from Docker",description:"Migrate transparently from Docker to Podman, and continue using familiar workflows.",source:"@site/docs/migrating-from-docker/index.md",sourceDirName:"migrating-from-docker",slug:"/migrating-from-docker/",permalink:"/docs/migrating-from-docker/",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/migrating-from-docker/index.md",tags:[{label:"migrating-from-docker",permalink:"/docs/tags/migrating-from-docker"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Migrating from Docker",description:"Migrate transparently from Docker to Podman, and continue using familiar workflows.",keywords:["podman desktop","podman","containers","migrating","docker"],tags:["migrating-from-docker"]},sidebar:"mySidebar",previous:{title:"Getting Started with Podman Desktop",permalink:"/docs/getting-started/getting-started"},next:{title:"Importing saved containers",permalink:"/docs/migrating-from-docker/importing-saved-containers"}},m={},s=[],d={toc:s};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migration-from-docker-to-podman-desktop"},"Migration from Docker to Podman Desktop"),(0,o.kt)("p",null,"When you have used Docker in the past, you can continue using familiar workflows with Podman Desktop:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"migrating-from-docker/importing-saved-containers"},"Importing saved containers to Podman to continue using familiar containers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"migrating-from-docker/using-the-docker_host-environment-variable"},"Using the ",(0,o.kt)("inlineCode",{parentName:"a"},"DOCKER_HOST")," environment variable to let your tools communicate directly with the Podman socket")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"migrating-from-docker/using-podman-mac-helper"},"Using the ",(0,o.kt)("inlineCode",{parentName:"a"},"podman-mac-helper")," tool on macOS to redirect the Docker socket to the Podman socket")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"migrating-from-docker/emulating-docker-cli-with-podman"},"Emulating Docker CLI with Podman to continue using tools depending on the Docker CLI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"migrating-from-docker/verifying-your-tools-are-using-podman"},"Verifying that your tools are using Podman"))))}l.isMDXComponent=!0}}]);