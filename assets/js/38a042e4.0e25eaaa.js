"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7138],{5318:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(7378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4663:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(5773),o=(t(7378),t(5318));const r={title:"Build & run Podman Desktop in a DevContainer",description:"Develop Podman Desktop using a DevContainer locally or using GitHub Codespaces.",slug:"develop-using-devcontainer",authors:["benoitf"],tags:["podman-desktop","devcontainer","codespaces"],hide_table_of_contents:!1},i=void 0,s={permalink:"/blog/develop-using-devcontainer",source:"@site/blog/2022-11-17-develop-podman-using-codespaces.md",title:"Build & run Podman Desktop in a DevContainer",description:"Develop Podman Desktop using a DevContainer locally or using GitHub Codespaces.",date:"2022-11-17T00:00:00.000Z",formattedDate:"November 17, 2022",tags:[{label:"podman-desktop",permalink:"/blog/tags/podman-desktop"},{label:"devcontainer",permalink:"/blog/tags/devcontainer"},{label:"codespaces",permalink:"/blog/tags/codespaces"}],readingTime:6.985,hasTruncateMarker:!0,authors:[{name:"Florent Benoit",title:"Maintainer of Podman Desktop",url:"https://github.com/benoitf",imageURL:"https://github.com/benoitf.png",key:"benoitf"}],frontMatter:{title:"Build & run Podman Desktop in a DevContainer",description:"Develop Podman Desktop using a DevContainer locally or using GitHub Codespaces.",slug:"develop-using-devcontainer",authors:["benoitf"],tags:["podman-desktop","devcontainer","codespaces"],hide_table_of_contents:!1},prevItem:{title:"Release Notes - Podman Desktop 0.10",permalink:"/blog/podman-desktop-release-0.10"}},l={authorsImageUrls:[void 0]},p=[{value:"Defining image of the container",id:"defining-image-of-the-container",level:2},{value:"Configure the DevContainer using devcontainer.json",id:"configure-the-devcontainer-using-devcontainerjson",level:2},{value:"Using the DevContainer.json on Github Codespace",id:"using-the-devcontainerjson-on-github-codespace",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p};function c(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GitHub ",(0,o.kt)("a",{parentName:"p",href:"https://github.blog/changelog/2022-11-09-codespaces-for-free-and-pro-accounts/"},"announced last week")," that Codespaces is available for everyone and it includes free minutes."),(0,o.kt)("p",null,"Let see how we can use a ",(0,o.kt)("a",{parentName:"p",href:"https://containers.dev/"},"Development Container")," having all the tools to build and run Podman Desktop. The Development Container works locally using Visual Studio Code but in this blog post we will see how it works directly with a simple click from GitHub."),(0,o.kt)("p",null,"The challenges are to run a desktop tool (Podman Desktop) and running a container engine (Podman) inside this Development Container without using too many memory !"),(0,o.kt)("h2",{id:"defining-image-of-the-container"},"Defining image of the container"),(0,o.kt)("p",null,"The first thing is in the choice of the image for the container. It is possible to pick-up a default image and add some features but there is no existing feature for Podman at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/devcontainers/features/tree/main/src"},"https://github.com/devcontainers/features/tree/main/src")," and most of the features are expecting to run on top of Debian/Ubuntu"),(0,o.kt)("p",null,"If you are not interested in how to setup the image, jump to the ",(0,o.kt)("a",{parentName:"p",href:"#configure-the-devcontainer-using-devcontainerjson"},"next section"),"."),(0,o.kt)("p",null,"Podman binaries are available quickly after the releases for Fedora. I decided then to use ",(0,o.kt)("inlineCode",{parentName:"p"},"Fedora 37")," as the base image."),(0,o.kt)("p",null,"Let start the Containerfile using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"FROM quay.io/fedora/fedora:37\n")),(0,o.kt)("p",null,"Then I install Node.js 16 from official nodejs.org repository. It's easier to switch to the version that we need."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},'# install Node.js + yarn\nENV NODE_VERSION 16.18.1\nRUN curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.gz" && \\\n    tar -xzf "node-v$NODE_VERSION-linux-x64.tar.gz" -C /usr/local --strip-components=1 && \\\n    rm "node-v$NODE_VERSION-linux-x64.tar.gz" && \\\n    npm install -g yarn\n')),(0,o.kt)("p",null,"Now, all system dependencies used to run an Electron application needs to be installed."),(0,o.kt)("p",null,"Podman is also installed so we can run some containers inside this container."),(0,o.kt)("p",null,"And of course, we need to install VNC (I choose ",(0,o.kt)("a",{parentName:"p",href:"https://tigervnc.org/"},"tigervnc"),") with a light Window Manager (",(0,o.kt)("a",{parentName:"p",href:"http://fluxbox.org/"},"fluxbox"),")."),(0,o.kt)("p",null,"To connect to the display of the container, we need to expose VNC over HTML/websocket using ",(0,o.kt)("a",{parentName:"p",href:"https://novnc.com/"},"noVNC")),(0,o.kt)("p",null,"xterm is installed to start a terminal from the VNC side."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"RUN dnf -y update && \\\n    yum -y reinstall shadow-utils && \\\n    yum install -y git \\\n                   # dependencies for Podman Desktop\n                   nss \\\n                   atk \\\n                   at-spi2-atk \\\n                   cups-libs \\\n                   gtk3 \\\n                   # for remote Display\n                   fluxbox \\\n                   tigervnc-server \\\n                   xorg-x11-fonts-Type1 \\\n                   novnc \\\n                   supervisor \\\n                   xdpyinfo \\\n                   # for podman\n                   podman \\\n                   fuse-overlayfs --exclude container-selinux \\\n                   xterm && \\\n    rm -rf /var/cache /var/log/dnf* /var/log/yum.*\n")),(0,o.kt)("p",null,"Supervisord setup the launch of the VNC server and the Window manager"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"COPY supervisord.conf /etc/supervisord.conf\n")),(0,o.kt)("p",null,"A custom theme for fluxbox:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"COPY fluxbox /usr/share/fluxbox/init\n")),(0,o.kt)("p",null,"Then we need a special configuration to allow to have Podman working inside the container"),(0,o.kt)("p",null,"We add the ",(0,o.kt)("inlineCode",{parentName:"p"},"podman-desktop")," user with correct range on subuid and subgid when running containers. I used the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/blob/main/docs/tutorials/rootless_tutorial.md#etcsubuid-and-etcsubgid-configuration"},"tutorial"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"RUN useradd -u 1000 podman-desktop && echo podman-desktop:10000:5000 > /etc/subuid && echo podman-desktop:10000:5000 > /etc/subgid\n")),(0,o.kt)("p",null,"Then use some default configuration files"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"# initialize conf files\nADD https://raw.githubusercontent.com/containers/libpod/master/contrib/podmanimage/stable/containers.conf /etc/containers/containers.conf\nADD https://raw.githubusercontent.com/containers/libpod/master/contrib/podmanimage/stable/podman-containers.conf /home/podman-desktop/.config/containers/containers.conf\n")),(0,o.kt)("p",null,"and make sure that all permissions are correct following the guide ",(0,o.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/podman-inside-container"},"https://www.redhat.com/sysadmin/podman-inside-container")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"# set permissions\nRUN chown podman-desktop:podman-desktop -R /home/podman-desktop && chmod 644 /etc/containers/containers.conf && \\\n    mkdir -p /var/lib/shared/overlay-images /var/lib/shared/overlay-layers /var/lib/shared/vfs-images /var/lib/shared/vfs-layers; touch /var/lib/shared/overlay-images/images.lock; touch /var/lib/shared/overlay-layers/layers.lock; touch /var/lib/shared/vfs-images/images.lock; touch /var/lib/shared/vfs-layers/layers.lock && \\\n    mkdir -p /run/user/1000 && chown podman-desktop:podman-desktop /run/user/1000\n")),(0,o.kt)("p",null,"plus define an empty user namespace."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},'ENV _CONTAINERS_USERNS_CONFIGURED=""\n')),(0,o.kt)("p",null,"Make sure Podman will create the socket in an expected directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# socket path for podman\nENV XDG_RUNTIME_DIR=/run/user/1000\n")),(0,o.kt)("p",null,"OK ! we have a custom Containerfile providing all the tools to build and run Podman Desktop (using VNC for the display), run Podman and run Electron."),(0,o.kt)("p",null,"The current file is available at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/blob/main/.devcontainer/.parent/Containerfile"},"https://github.com/containers/podman-desktop/blob/main/.devcontainer/.parent/Containerfile")),(0,o.kt)("p",null,"Let's configure the DevContainer."),(0,o.kt)("h2",{id:"configure-the-devcontainer-using-devcontainerjson"},"Configure the DevContainer using devcontainer.json"),(0,o.kt)("p",null,"DevContainer definition is stored at ",(0,o.kt)("inlineCode",{parentName:"p"},".devcontainer/devcontainer.json")," file."),(0,o.kt)("p",null,"We need to reuse the image of the previous step. For that let's use the build section of the ",(0,o.kt)("inlineCode",{parentName:"p"},"devcontainer.json")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"build": {\n  "dockerfile": "Containerfile"\n},\n')),(0,o.kt)("p",null,"In order to avoid to redo all the build steps each time we open a workspace using this dev container, we published the image to quay.io at ",(0,o.kt)("a",{parentName:"p",href:"https://quay.io/repository/podman-desktop/devcontainer-parent?tab=tags&tag=next"},"quay.io/podman-desktop/devcontainer-parent:next\n"),". This parent image is not changing much so it's better to use is as a parent one."),(0,o.kt)("p",null,"Inside ",(0,o.kt)("inlineCode",{parentName:"p"},".devcontainer")," directory there is a ",(0,o.kt)("inlineCode",{parentName:"p"},".parent")," directory with everything related to the parent image."),(0,o.kt)("p",null,"And in the ",(0,o.kt)("inlineCode",{parentName:"p"},".devcontainer/Containerfile")," file we reference this image"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"FROM quay.io/podman-desktop/devcontainer-parent:next\n")),(0,o.kt)("p",null,"By default, we will be ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," in the container and this is probably not what we expect. Let's change that."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"containerUser": "podman-desktop"\n')),(0,o.kt)("p",null,"Some Visual Studio Code extensions are nice to use and we can add them"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  "extensions": ["svelte.svelte-vscode", "bradlc.vscode-tailwindcss"]\n')),(0,o.kt)("p",null,"Then here is the tricky part, how to run our container allowing to run again inside the container some containers with podman."),(0,o.kt)("p",null,"We specify the arguments to make it possible. It's possible to use ",(0,o.kt)("inlineCode",{parentName:"p"},"--privileged")," flag but I prefer to list the subset of permissions.\nUsing ",(0,o.kt)("inlineCode",{parentName:"p"},"--privileged")," we don't really know what are the privilege that are required while specifying all of them, people are aware of what is granted/denied."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"runArgs": [\n    "--cap-add=sys_admin",\n    "--security-opt",\n    "seccomp=unconfined",\n    "--device",\n    "/dev/fuse",\n    "--security-opt",\n    "label=disable",\n    "--security-opt",\n    "apparmor=unconfined"\n  ],\n')),(0,o.kt)("p",null,"Source code of Podman Desktop needs to be editable within the DevContainer so it needs to be mounted."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"workspaceMount": "source=${localWorkspaceFolder},target=/workspace,type=bind",\n"workspaceFolder": "/workspace",\n')),(0,o.kt)("p",null,"Then we need a command to build Podman Desktop."),(0,o.kt)("p",null,"For that, we use ",(0,o.kt)("inlineCode",{parentName:"p"},"onCreateCommand")," hook with a custom command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"onCreateCommand": "${containerWorkspaceFolder}/.devcontainer/onCreateCommand.sh",\n')),(0,o.kt)("p",null,"and in the ",(0,o.kt)("inlineCode",{parentName:"p"},".devcontainer")," folder the ",(0,o.kt)("inlineCode",{parentName:"p"},"onCreateCommand.sh")," script is the following"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"#!/bin/sh\nyarn\n\nMODE=production yarn run build && yarn run electron-builder build --linux --dir --config .electron-builder.config.cjs\n")),(0,o.kt)("p",null,"Two instructions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Fetch all Node.js dependencies."),(0,o.kt)("li",{parentName:"ol"},"build Podman Desktop in the ",(0,o.kt)("inlineCode",{parentName:"li"},"dist")," folder using ",(0,o.kt)("inlineCode",{parentName:"li"},"Linux")," as target Operating System.")),(0,o.kt)("p",null,"After the start of the container, how to launch Podman Desktop, the website and VNC, etc ?"),(0,o.kt)("p",null,"Just use ",(0,o.kt)("inlineCode",{parentName:"p"},"postStartCommand")," hook."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"postStartCommand": "${containerWorkspaceFolder}/.devcontainer/postStartCommand.sh",\n')),(0,o.kt)("p",null,"and in the ",(0,o.kt)("inlineCode",{parentName:"p"},".devcontainer")," folder the ",(0,o.kt)("inlineCode",{parentName:"p"},"postStartCommand.sh")," script is the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/sh\n\n# Start all services\n/usr/bin/supervisord -c /etc/supervisord.conf &\n\n# wait X server to be ready or after 2mn exit\necho "Waiting for X server to be ready"\ntimeout 120 bash -c \'until xdpyinfo -display :0 &> /dev/null; do printf "."; sleep 1; done\'\n\n# launch podman desktop\necho "Launching Podman Desktop"\ncd dist/linux-unpacked/&& ./podman-desktop &\n\n# Launch the 9000 redirect after 20 seconds\nsleep 20\nwebsockify --web=/usr/share/novnc localhost:9000 localhost:5900 &\n\n# launch the website rendering\necho "Launching Website"\ncd website && yarn start\n')),(0,o.kt)("p",null,"It starts VNC and noVNC, start precompiled Podman Desktop and start the documentation rendering."),(0,o.kt)("p",null,"It is not launching the Watch mode/development mode of Podman Desktop as it requires a container having more than 8GB of memory."),(0,o.kt)("p",null,"Picking up a larger instace with for example 16GB, it's possible to use development mode."),(0,o.kt)("p",null,"Of course, to make VNC happy, we need to specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"DISPLAY")," environment variable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"remoteEnv": {\n  "DISPLAY": ":0"\n}\n')),(0,o.kt)("p",null,"When the DevContainer is fully available, we want to have a way to quickly open the ",(0,o.kt)("inlineCode",{parentName:"p"},"Website rendering URL")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"noVNC")),(0,o.kt)("p",null,"Let's tweak the ",(0,o.kt)("inlineCode",{parentName:"p"},"devcontainer.json")," file by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"portsAttributes")," section"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"portsAttributes": {\n  "9000": {\n    "label": "vnc",\n    "onAutoForward": "openPreview"\n  },\n  "3000": {\n    "label": "website"\n  }\n}\n')),(0,o.kt)("p",null,"After all post-creation steps, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Preview")," browser inside the VS Code editor will open a window to VNC. And another port (",(0,o.kt)("inlineCode",{parentName:"p"},"3000"),") is flagged for the website."),(0,o.kt)("h2",{id:"using-the-devcontainerjson-on-github-codespace"},"Using the DevContainer.json on Github Codespace"),(0,o.kt)("p",null,"As a user, opening a workspace with all what we configured is done using a single click."),(0,o.kt)("p",null,"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop"},"https://github.com/containers/podman-desktop")," then click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"< > Code")," dropdown and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Create codespace on main")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Open Codespace",src:t(7486).Z,width:"1240",height:"617"})),(0,o.kt)("p",null,"Once you click on the button, the codespace is setting up:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Preparing Codepace",src:t(6289).Z,width:"754",height:"587"})),(0,o.kt)("p",null,"After few minutes, as there is not yet ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds"},"prebuilt codespaces"),", the codespace is opening."),(0,o.kt)("p",null,"The simple Browser displays the noVNC window:\n",(0,o.kt)("img",{alt:"Opening Codespace",src:t(8559).Z,width:"2051",height:"1066"})),(0,o.kt)("p",null,"Click on the connect button. Then on the terminal you can enter ",(0,o.kt)("inlineCode",{parentName:"p"},"podman run quay.io/podman/hello")," and the container is detected in Podman Desktop.\n",(0,o.kt)("img",{alt:"Testing Codespace",src:t(2972).Z,width:"2051",height:"1066"})),(0,o.kt)("p",null,"It's also possible using the port widget to get on ",(0,o.kt)("inlineCode",{parentName:"p"},"3000")," port by clicking on the world icon a preview of the website in another tab. Changing source code of the website will refresh the content of the window."),(0,o.kt)("p",null,"Depending on the usecase, it's also possible to open documentation in the preview browser."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Edit website Codespace",src:t(3517).Z,width:"2051",height:"1066"})),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"The DevContainer image for Podman Desktop is recent so it'll probably evolve over time by adding new capabilities but it allows you to easily build/run/experiment and ",(0,o.kt)("strong",{parentName:"p"},"contribute")," to the tool or the website."))}c.isMDXComponent=!0},7486:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/codespaces-click-repository-22eb251ecc45a2b29952fe5983e16238.png"},3517:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/codespaces-edit-website-d1f2a645f97209e453bc72cadafa0b54.png"},8559:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/codespaces-open-novnc-ec3f30d836eb7af5750498a833d37184.png"},6289:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/codespaces-preparing-codespace-3121417aa9d8947b8f5566bf39478961.png"},2972:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/codespaces-testing-podman-desktop-3210aa766f273a52253d27cb4e7ef782.png"}}]);