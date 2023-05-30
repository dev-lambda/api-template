"use strict";(self.webpackChunk_dev_lambda_api_template_doc=self.webpackChunk_dev_lambda_api_template_doc||[]).push([[688],{876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[m]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=n(7896),o=(n(2784),n(876));const s={sidebar_position:4},i="Test guidelines and tooling",a={unversionedId:"contribute/test",id:"contribute/test",title:"Test guidelines and tooling",description:"Test functionality not implementation",source:"@site/docs/contribute/test.md",sourceDirName:"contribute",slug:"/contribute/test",permalink:"/api-template/docs/contribute/test",draft:!1,editUrl:"https://github.com/dev-lambda/api-template/edit/main/website/docs/contribute/test.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"API Runtime settings",permalink:"/api-template/docs/contribute/runtime"},next:{title:"Documentation guidelines and supports",permalink:"/api-template/docs/contribute/documentation"}},l={},p=[{value:"Unit tests",id:"unit-tests",level:3},{value:"API tests",id:"api-tests",level:3},{value:"Persistency tests",id:"persistency-tests",level:3},{value:"Test setup",id:"test-setup",level:2},{value:"Coverage and Qualimetry",id:"coverage-and-qualimetry",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"test-guidelines-and-tooling"},"Test guidelines and tooling"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("h2",{parentName:"admonition",id:"test-functionality-not-implementation"},"Test functionality not implementation"),(0,o.kt)("p",{parentName:"admonition"},"Implementation should change, tests should warn you when the functionality is broken.")),(0,o.kt)("h3",{id:"unit-tests"},"Unit tests"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"jest"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="foo.ts"',title:'"foo.ts"'},"export const bar = (value: number) => {\n  return value+1;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="foo.test.ts"',title:'"foo.test.ts"'},"import {bar} from './foo';\n\ndescribe('foo module', () => {\n  it('should work as expected', () => {\n    expect(bar(0)).toBe(1);\n  });\n});\n")),(0,o.kt)("h3",{id:"api-tests"},"API tests"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"supertest"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="myRouter.ts"',title:'"myRouter.ts"'},"import express from 'express';\nimport doc from './base/apiDoc';\nimport license from './base/licence';\n\nconst router = express.Router();\n\nrouter.get('/foo', (req, res) => {\n  res.status(200).send({value: 42})\n});\n\nexport default router;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="myRouter.test.ts"',title:'"myRouter.test.ts"'},"import request from 'supertest';\nimport router from './myRouter';\nimport { setupServer } from 'src/server';\n\nconst server = setupServer(app);\n\ndescribe('My router', () => {\n  it('should give the correct response', () => {\n    return request(server).get('/foo')\n      .expect(200)\n      .then(res => {\n        expect(res.body).toMatchObject({value: 42})\n      })\n  });\n});\n")),(0,o.kt)("h3",{id:"persistency-tests"},"Persistency tests"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mongodb-memory-server"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="someRepository.ts"',title:'"someRepository.ts"'},"import mongoose from 'mongoose';\nconst schema = new mongoose.Schema({ name: 'string' });\nexport const User = mongoose.model('User', schema);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="someRepository.test.ts"',title:'"someRepository.test.ts"'},"import initdb from 'src/db';\nimport mongoose from 'mongoose';\nimport { MongoMemoryServer } from 'mongodb-memory-server';\nimport { User } from './someRepository';\n\ndescribe('db connection', () => {\n  let dbServer: MongoMemoryServer;\n  let connection: mongoose.Connection;\n  \n  beforeAll(async () => {\n    dbServer = await MongoMemoryServer.create();\n    connection = await initdb(dbServer.getUri());\n  });\n\n  afterAll(() => {\n    connection.close();\n    dbServer.stop();\n  });\n\n  it('should insert a doc into collection', async () => {\n    const mockUser = { name: 'John' };\n    const user = new User(mockUser);\n    const { _id } = await user.save();\n\n    const insertedUser = await User.findOne({ _id });\n    expect(insertedUser).toMatchObject(mockUser);\n  });\n});\n")),(0,o.kt)("h2",{id:"test-setup"},"Test setup"),(0,o.kt)("p",null,"See ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.config.ts")," for test settings."),(0,o.kt)("p",null,"Test configuration options are defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"config/test.yaml")," and can be optionally overriden in ",(0,o.kt)("inlineCode",{parentName:"p"},"config/local-test.yaml"),"."),(0,o.kt)("h2",{id:"coverage-and-qualimetry"},"Coverage and Qualimetry"),(0,o.kt)("p",null,"Coverage report is generated when running tests and it's available under the ",(0,o.kt)("inlineCode",{parentName:"p"},"coverage")," folder (see ",(0,o.kt)("inlineCode",{parentName:"p"},"coverage/lcov-report/index.html")," for a comprehensive report)"),(0,o.kt)("p",null,"TODO setup sonarqube"))}u.isMDXComponent=!0}}]);