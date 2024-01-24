"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[138],{27265:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=s(24246),o=s(71670);const r={sidebar_position:10,title:"Deploying a pod",description:"Deploying a pod to Kubernetes",keywords:["podman desktop","podman","containers","pods","migrating","kubernetes"],tags:["migrating-to-kubernetes"]},i="Deploying a pod to Kubernetes",d={id:"kubernetes/deploying-a-pod-to-kubernetes",title:"Deploying a pod",description:"Deploying a pod to Kubernetes",source:"@site/docs/kubernetes/deploying-a-pod-to-kubernetes.md",sourceDirName:"kubernetes",slug:"/kubernetes/deploying-a-pod-to-kubernetes",permalink:"/docs/kubernetes/deploying-a-pod-to-kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/kubernetes/deploying-a-pod-to-kubernetes.md",tags:[{label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Deploying a pod",description:"Deploying a pod to Kubernetes",keywords:["podman desktop","podman","containers","pods","migrating","kubernetes"],tags:["migrating-to-kubernetes"]},sidebar:"mySidebar",previous:{title:"Deploying a container",permalink:"/docs/kubernetes/deploying-a-container-to-kubernetes"},next:{title:"Existing Kubernetes",permalink:"/docs/kubernetes/existing-kubernetes/"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Icon:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"deploying-a-pod-to-kubernetes",children:"Deploying a pod to Kubernetes"}),"\n",(0,t.jsx)(n.p,{children:"With Podman Desktop, you can deploy a pod to your Kubernetes cluster."}),"\n",(0,t.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Your are using the Podman container engine."}),"\n",(0,t.jsxs)(n.li,{children:["Your pod, running or stopped, is available on the ",(0,t.jsx)(n.strong,{children:"Pods"})," page: ",(0,t.jsx)(n.em,{children:"<your_pod>"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You registered the Kubernetes cluster in your kubeconfig file: ",(0,t.jsx)(n.em,{children:"<your_kubernetes_cluster>"}),". For example, ",(0,t.jsx)(n.a,{href:"/docs/kind/creating-a-kind-cluster",children:"Creating a kind cluster"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"The Kubernetes namespace to deploy to already exists."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"procedure",children:"Procedure"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsxs)(n.strong,{children:["Podman Desktop tray > Kubernetes > Context > ",(0,t.jsx)(n.em,{children:"<your_kubernetes_cluster>"})]})," to set your Kubernetes context."]}),"\n",(0,t.jsxs)(n.li,{children:["Open ",(0,t.jsxs)(n.strong,{children:["Podman Desktop dashboard > ",(0,t.jsx)(r,{icon:"fa-solid fa-cubes",size:"lg"})," Pods > ",(0,t.jsx)(n.em,{children:"<your_pod>"})]})," to see the ",(0,t.jsx)(n.strong,{children:"Pod Details"})," page."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(r,{icon:"fa-solid fa-rocket",size:"lg"})," to generate a Kubernetes pod."]}),"\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.strong,{children:"Deploy generated pod to Kubernetes"})," screen, choose your options:","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Pod Name"}),": edit the proposed name."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Use Kubernetes Services"}),": enable or disable ",(0,t.jsxs)(n.strong,{children:["Replace ",(0,t.jsx)(n.code,{children:"hostPort"})," exposure on containers by Services. It is the recommended way to expose ports, as a cluster policy might prevent to use ",(0,t.jsx)(n.code,{children:"hostPort"}),"."]})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Kubernetes namespace"}),": select in the list the namespace to deploy the pod to."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Click the ",(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(r,{icon:"fa-solid fa-rocket",size:"lg"})," Deploy"]})," button."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"verification",children:"Verification"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.strong,{children:"Deploy generated pod to Kubernetes"})," screen, the created pod status is ",(0,t.jsx)(n.em,{children:"Phase: Running"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Deploying a pod",src:s(2392).Z+"",width:"816",height:"751"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.strong,{children:"Pods"}),": your pod is in the list."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},2392:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/deploying-a-pod-6c02e24c06e0f39452ce5bec4ab1b9e5.png"},71670:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>i});var t=s(27378);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);