"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1724],{544:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7378),l=n(161);const s=function(){function e(){var e;if(!document||!document.documentElement)return;const t=document.documentElement;"dark"===(null==(e=t.dataset)?void 0:e.theme)?(t.classList.add("dark"),setTimeout((()=>{t.classList.add("dark")}),100)):(t.classList.remove("dark"),setTimeout((()=>{t.classList.remove("dark")}),100))}return(0,a.useEffect)((()=>{l.Z.canUseDOM&&e()}),[l.Z.canUseDOM]),(0,a.useEffect)((()=>{if(!l.Z.canUseDOM)return;const t=new MutationObserver((t=>{t.forEach((t=>{("data-rh"===t.attributeName&&"attributes"==t.type||"data-theme"===t.attributeName&&"attributes"==t.type)&&e()}))}));return t.observe(document.documentElement,{attributes:!0,childList:!1,subtree:!1}),()=>{t.disconnect()}}),[l.Z.canUseDOM]),a.createElement("div",null)}},36:(e,t,n)=>{n.r(t),n.d(t,{WindowsDownloads:()=>d,default:()=>u});var a=n(353),l=n(3595),s=n(7378),r=n(544),i=n(1884),c=n(9072),o=n(9928),m=n(9374);function d(){const[e,t]=(0,s.useState)({version:"",binary:"",setup:""});return(0,s.useEffect)((()=>{!async function(e){const t=await fetch("https://api.github.com/repos/containers/podman-desktop/releases/latest"),n=await t.json(),a=n.assets,l=a.filter((e=>e.name.endsWith("-setup.exe")&&!e.name.includes("airgap")));if(1!==l.length)throw new Error("Unable to grab setup.exe");const s=l[0],r=a.filter((e=>e.name.endsWith(".exe")&&!e.name.includes("airgap")&&e.name!==s.name))[0],i=a.filter((e=>e.name.endsWith("-setup.exe")&&e.name.includes("airgap")&&e.name!==s.name))[0];e({version:n.name,binary:r.browser_download_url,setup:s.browser_download_url,airgapsetup:i.browser_download_url})}(t)}),[]),s.createElement("div",{className:"basis-1/3 py-2 rounded-lg dark:text-gray-300 text-gray-700  bg-zinc-300/25 dark:bg-zinc-700/25 bg-blend-multiply text-center items-center"},s.createElement(c.G,{size:"4x",icon:o.ts2,className:"my-4"}),s.createElement("h2",{className:"w-full text-center text-4xl title-font font-medium pb-3 border-purple-600 border-b-2"},"Windows"),s.createElement("div",{className:"flex p-1 flex-col md:flex-col items-center align-top"},s.createElement("div",{className:"flex flex-col align-middle items-center"},s.createElement("h3",{className:"mt-0"},"Podman Desktop for Windows"),s.createElement("div",{className:"pt-8"},s.createElement(i.Z,{className:"mt-auto no-underline hover:no-underline inline-flex text-white hover:text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-md font-semibold",to:e.setup},s.createElement(c.G,{size:"1x",icon:m.q7m,className:"mr-2"}),"Download Now"),s.createElement("caption",{className:"block w-full mt-1 text/50 dark:text-white/50"},"Windows installer, version ",e.version)),s.createElement("div",{className:"mt-4"},s.createElement("div",null,"Other downloads for Windows:"),s.createElement(i.Z,{className:"underline inline-flex dark:text-white text-purple-600 hover:text-purple-300 py-2 px-6 font-semibold text-md",to:e.binary},s.createElement(c.G,{size:"1x",icon:m.q7m,className:"mr-2"}),"Windows portable executable"),s.createElement(i.Z,{className:"underline inline-flex dark:text-white text-purple-600 hover:text-purple-300 py-2 px-6 font-semibold text-md",to:e.airgapsetup},s.createElement(c.G,{size:"1x",icon:m.q7m,className:"mr-2"}),"Windows installer for restricted environments"),s.createElement(i.Z,{className:"underline inline-flex dark:text-white text-purple-600 hover:text-purple-300 py-2 px-6 font-semibold text-md",to:"/docs/Installation/windows-install"},s.createElement(c.G,{size:"1x",icon:o.ts2,className:"mr-2"}),"Package Managers Guide")),s.createElement("div",{className:"flex flex-col align-middle items-center"},s.createElement("div",{className:"items-center text-center pt-6"},s.createElement("p",{className:"text-lg"},"Using ",s.createElement("strong",null,"winget"),"? Install in one command:"),s.createElement("div",{className:"flex flex-row pt-3"},s.createElement("p",{className:"text-xl p-1"},s.createElement(c.G,{size:"sm",icon:o.hVS,className:"mx-1 mt-2"})),s.createElement("div",{className:"dark:bg-zinc-900/50 bg-zinc-300/50 p-1 text-xl dark:text-purple-300 text-purple-700 flex flex-row"},s.createElement("div",{className:"w-72 truncate"},s.createElement(c.G,{size:"xs",icon:m.Jw3,className:"mx-2 mt-3"}),"winget install -e --id RedHat.Podman-Desktop"),s.createElement("div",null,s.createElement("button",{title:"Copy To Clipboard",className:"mr-2 p-1"}," ",s.createElement(c.G,{size:"xs",icon:m.O4,className:"ml-3  cursor-pointer text-xl  text-white-500",onClick:()=>{navigator.clipboard.writeText("winget install -e --id RedHat.Podman-Desktop")}}))))))))))}function u(){const{siteConfig:e}=(0,a.Z)();return s.createElement(l.Z,{title:e.title,description:"Downloads for Windows"},s.createElement(r.Z,null),s.createElement("section",{className:"container mx-auto flex justify-center flex-col"},s.createElement("div",{className:"w-full flex flex-col"},s.createElement("h1",{className:"title-font sm:text-3xl text-2xl lg:text-5xl mb-10 font-medium text-gray-900 dark:text-white"},"Windows Downloads"),s.createElement("main",{className:"h-screen"},s.createElement(d,null)))))}}}]);