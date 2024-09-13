"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31502],{81265:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=r(62540),s=r(43023);const i={},a="Interface: KubernetesGeneratorProvider",o={id:"interfaces/KubernetesGeneratorProvider",title:"Interface: KubernetesGeneratorProvider",description:"The KubernetesGeneratorProvider allows an extension to register a custom Kube Generator for a specific",source:"@site/api/interfaces/KubernetesGeneratorProvider.md",sourceDirName:"interfaces",slug:"/interfaces/KubernetesGeneratorProvider",permalink:"/api/interfaces/KubernetesGeneratorProvider",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"KubeconfigUpdateEvent",permalink:"/api/interfaces/KubeconfigUpdateEvent"},next:{title:"KubernetesProviderConnection",permalink:"/api/interfaces/KubernetesProviderConnection"}},d={},c=[{value:"Properties",id:"properties",level:2},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"types",id:"types",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Methods",id:"methods",level:2},{value:"generate()",id:"generate",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"interface-kubernetesgeneratorprovider",children:"Interface: KubernetesGeneratorProvider"})}),"\n",(0,t.jsx)(n.p,{children:"The KubernetesGeneratorProvider allows an extension to register a custom Kube Generator for a specific\nKubernetesGeneratorType."}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"name"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/SINHASantos/podman-desktop/blob/8f80bf47418f99ba118d8c865da5a13594de21a1/packages/extension-api/src/extension-api.d.ts#L2293",children:"packages/extension-api/src/extension-api.d.ts:2293"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"types",children:"types"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"types"}),": ",(0,t.jsx)(n.a,{href:"/api/type-aliases/KubernetesGeneratorSelector",children:(0,t.jsx)(n.code,{children:"KubernetesGeneratorSelector"})})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/SINHASantos/podman-desktop/blob/8f80bf47418f99ba118d8c865da5a13594de21a1/packages/extension-api/src/extension-api.d.ts#L2294",children:"packages/extension-api/src/extension-api.d.ts:2294"})}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"generate",children:"generate()"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"generate"}),"(",(0,t.jsx)(n.code,{children:"kubernetesGeneratorArguments"}),"): ",(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.a,{href:"/api/interfaces/GenerateKubeResult",children:(0,t.jsx)(n.code,{children:"GenerateKubeResult"})}),">"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"kubernetesGeneratorArguments"}),": ",(0,t.jsx)(n.a,{href:"/api/type-aliases/KubernetesGeneratorArgument",children:(0,t.jsx)(n.code,{children:"KubernetesGeneratorArgument"})}),"[]"]}),"\n",(0,t.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.a,{href:"/api/interfaces/GenerateKubeResult",children:(0,t.jsx)(n.code,{children:"GenerateKubeResult"})}),">"]}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/SINHASantos/podman-desktop/blob/8f80bf47418f99ba118d8c865da5a13594de21a1/packages/extension-api/src/extension-api.d.ts#L2295",children:"packages/extension-api/src/extension-api.d.ts:2295"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},43023:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var t=r(63696);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);