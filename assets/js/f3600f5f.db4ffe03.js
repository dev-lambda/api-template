"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[109],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:7},l="Build, Publish and Deploy",r={unversionedId:"contribute/deployment",id:"contribute/deployment",title:"Build, Publish and Deploy",description:"Locally testing the docker image",source:"@site/docs/contribute/deployment.md",sourceDirName:"contribute",slug:"/contribute/deployment",permalink:"/api-template/docs/contribute/deployment",draft:!1,editUrl:"https://github.com/dev-lambda/api-template/edit/main/website/docs/contribute/deployment.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Documentation guidelines and supports",permalink:"/api-template/docs/contribute/documentation"},next:{title:"Monitoring",permalink:"/api-template/docs/contribute/monitoring"}},s={},p=[{value:"Locally testing the docker image",id:"locally-testing-the-docker-image",level:2},{value:"Build the image",id:"build-the-image",level:3},{value:"Launch a development instance of mongodb (if needed)",id:"mongodb",level:3},{value:"Run the image connecting it to your local mongodb instance",id:"run-the-image-connecting-it-to-your-local-mongodb-instance",level:3},{value:"Project assets",id:"project-assets",level:2},{value:"CI Workflows",id:"ci-workflows",level:2},{value:"Build and publish",id:"build-and-publish",level:3},{value:"Licences compliance verification",id:"licences-compliance-verification",level:4},{value:"Linter rules",id:"linter-rules",level:4},{value:"Build",id:"build",level:4},{value:"Test",id:"test",level:4},{value:"Publish",id:"publish",level:4},{value:"Deploy",id:"deploy",level:3},{value:"Publish documentation website to gh-pages",id:"publish-documentation-website-to-gh-pages",level:3},{value:"Github Setup",id:"github-setup",level:4}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"build-publish-and-deploy"},"Build, Publish and Deploy"),(0,i.kt)("h2",{id:"locally-testing-the-docker-image"},"Locally testing the docker image"),(0,i.kt)("h3",{id:"build-the-image"},"Build the image"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker build . -t api-template:local\n")),(0,i.kt)("h3",{id:"mongodb"},"Launch a development instance of mongodb (if needed)"),(0,i.kt)("p",null,"Create a local network for dependent docker instances (once only, optional)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker network create local\n")),(0,i.kt)("p",null,"Make sure a mongodb instance is running locally"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a new docker instance for mongodb (only once)"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker run \\\n  --net local \\\n  -d \\\n  --name mongodb-dev \\\n  -p 27017:27017 \\\n  mongo:6\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"... or simply start an already created instance"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker start mongodb-dev\n")))),(0,i.kt)("h3",{id:"run-the-image-connecting-it-to-your-local-mongodb-instance"},"Run the image connecting it to your local mongodb instance"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'docker run \\\n  --rm \\\n  --name api-template \\\n  -p 80:8000 \\\n  --net local \\\n  --env mongoDbHost="mongodb://mongodb-dev:27017/prod" \\\n  --env logLevel="debug" \\\n  api-template:local\n')),(0,i.kt)("p",null,"This will keep a running instance attached to your terminal in order to easily monitor logs and will map the internal container port 80 to your local 8000 port. Your docker running server should be available at ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8000/"},"http://localhost:8000/"),"."),(0,i.kt)("h2",{id:"project-assets"},"Project assets"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Docker image"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Npm package"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Helm chart")),(0,i.kt)("h2",{id:"ci-workflows"},"CI Workflows"),(0,i.kt)("p",null,"There are two main workflows, one is concerned with the project's assets (api, docker images, possibly npm packages) and the other is for the documentation website build and publishing."),(0,i.kt)("p",null,"Both workflow are independent."),(0,i.kt)("h3",{id:"build-and-publish"},"Build and publish"),(0,i.kt)("p",null,"The responsibility of this workflow is to verify the code, build the project's assets and publish the result to the container or package registry."),(0,i.kt)("p",null,"Deploying those images to production or any other environment is not in the scope of this workflow."),(0,i.kt)("h4",{id:"licences-compliance-verification"},"Licences compliance verification"),(0,i.kt)("p",null,"  Prevent copyleft licences by allowing only an explicit subset of licenses."),(0,i.kt)("p",null,"  The list of all currently allowed licenses:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- MIT\n- ISC\n- 0BSD\n- BSD-2-Clause\n- BSD-3-Clause\n- CC-BY-3.0\n- CC0-1.0\n- Apache-2.0\n- Python-2.0\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In order to add a new license to the list modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"--onlyAllow")," flag of the ",(0,i.kt)("inlineCode",{parentName:"p"},"license:check")," npm script.")),(0,i.kt)("h4",{id:"linter-rules"},"Linter rules"),(0,i.kt)("p",null,"Checks that all linter rules are respected."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The linter rules are defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},".eslintrc.json")," file.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This project is configured to use prettier as formatting assistant. You can use the ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"},"VS Code extension")," to keep the code format rules.")),(0,i.kt)("h4",{id:"build"},"Build"),(0,i.kt)("p",null,"The main built asset"),(0,i.kt)("h4",{id:"test"},"Test"),(0,i.kt)("p",null,"Note that tests are run from the typescript sources, neither from the transpiled code nor the built docker image."),(0,i.kt)("h4",{id:"publish"},"Publish"),(0,i.kt)("p",null,"If all previous steps are ok, the final assets are ready to be published."),(0,i.kt)("p",null,"Docker images are tagged both with the version number and the commit tag. The version number is extracted from git tags, not the actual version in the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json file"),". Note that the version major and minor labels are moving tags. The branch name is also added as a tag "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In order to publish a new version number you need to publish a tag in the form of ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.0.0"),"."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git tag v1.0.0\ngit push --tags\n"))),(0,i.kt)("p",null,"Docker images are published to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dev-lambda/api-template/pkgs/container/api-template"},"github project's docker repository")),(0,i.kt)("h3",{id:"deploy"},"Deploy"),(0,i.kt)("p",null,"Not yet implemented."),(0,i.kt)("h3",{id:"publish-documentation-website-to-gh-pages"},"Publish documentation website to gh-pages"),(0,i.kt)("p",null,"The documentation website is a static website built from the ",(0,i.kt)("inlineCode",{parentName:"p"},"/website")," folder content."),(0,i.kt)("p",null,"The api documentation depends on the openAPI specification built from the ",(0,i.kt)("inlineCode",{parentName:"p"},"@openapi"),"-tagged jsdoc comments in the API codebase. This is thus a required step before compiling the static website."),(0,i.kt)("p",null,"Once the static site built, the contents are published to a ",(0,i.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch in the same repository. This branch is then published to the dedicated github page at: ",(0,i.kt)("a",{parentName:"p",href:"https://dev-lambda.github.io/api-template/"},"https://dev-lambda.github.io/api-template/")),(0,i.kt)("p",null,"The action requires permissions to read and write on the repository. These permissions are requested by the action yaml file."),(0,i.kt)("h4",{id:"github-setup"},"Github Setup"),(0,i.kt)("p",null,"In order to activate the page publishing you need to set the following project setting on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dev-lambda/api-template/settings/pages"},"Github pages setup"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Deploy from a branch ",(0,i.kt)("inlineCode",{parentName:"li"},"gh-pages")," ",(0,i.kt)("inlineCode",{parentName:"li"},"/(root)"))))}u.isMDXComponent=!0}}]);