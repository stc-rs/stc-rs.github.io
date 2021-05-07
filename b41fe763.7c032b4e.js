(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return r})),n.d(t,"default",(function(){return p}));var c=n(3),l=n(7),b=(n(0),n(106)),s={id:"status",title:"Current status",sidebar_label:"Current status",slug:"/status"},i={unversionedId:"status",id:"status",isDocsHomePage:!1,title:"Current status",description:"This page will be removed once the public version is released.",source:"@site/docs/status.md",slug:"/status",permalink:"/docs/status",editUrl:"https://github.com/stc-rs/website/edit/main/sidebars.js/docs/status.md",version:"current",sidebar_label:"Current status",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docs/"},next:{title:"License FAQ",permalink:"/docs/license/faq"}},r=[{value:"conformance",id:"conformance",children:[{value:"2021/01/30",id:"20210130",children:[]},{value:"2021/02/04",id:"20210204",children:[]},{value:"2021/02/07",id:"20210207",children:[]},{value:"2021/02/09",id:"20210209",children:[]},{value:"2021/02/12",id:"20210212",children:[]},{value:"2021/02/19",id:"20210219",children:[]},{value:"2021/02/21",id:"20210221",children:[]},{value:"2021/02/24",id:"20210224",children:[]},{value:"2021/02/27",id:"20210227",children:[]},{value:"2021/03/02",id:"20210302",children:[]},{value:"2021/03/05",id:"20210305",children:[]},{value:"2021/03/09",id:"20210309",children:[]},{value:"2021/03/10",id:"20210310",children:[]},{value:"2021/03/11",id:"20210311",children:[]},{value:"2021/03/27",id:"20210327",children:[]},{value:"2021/03/28",id:"20210328",children:[]},{value:"2021/03/29",id:"20210329",children:[]},{value:"2021/04/02",id:"20210402",children:[]},{value:"2021/04/03",id:"20210403",children:[]},{value:"2021/04/05",id:"20210405",children:[]},{value:"2021/04/25",id:"20210425",children:[]},{value:"2021/04/27",id:"20210427",children:[]},{value:"2021/04/28",id:"20210428",children:[]},{value:"2021/04/29",id:"20210429",children:[]},{value:"2021/04/30",id:"20210430",children:[]},{value:"2021/05/01",id:"20210501",children:[]},{value:"2021/05/02",id:"20210502",children:[]},{value:"2021/05/03",id:"20210503",children:[]},{value:"2021/05/05",id:"20210505",children:[]},{value:"2021/05/06",id:"20210506",children:[]},{value:"2021/05/07",id:"20210507",children:[]}]}],a={toc:r};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(b.b)("wrapper",Object(c.a)({},a,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"This page will be removed once the public version is released."),Object(b.b)("h2",{id:"conformance"},"conformance"),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"conformance")," tests are error reporting tests ported from official typescript repository."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Note"),": Currently many tests are ignored."),Object(b.b)("p",null,"Ignored tests include"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"tests for error recovery of the parser."),Object(b.b)("li",{parentName:"ul"},"multi-file tests (tests with ",Object(b.b)("inlineCode",{parentName:"li"},"@filename")," directive)"),Object(b.b)("li",{parentName:"ul"},"tests for recursive types.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Note")),Object(b.b)("p",null,"Currently some of errors are normalized.\nNamely, those are"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-ts"},"// TS2304: Type not found.\n// TS2552: Type not found with recommendation.\n// TS2580: Type not found with recommendation for package to instsall.\n// TS2581: Type not found with recommendation for jQuery.\n// TS2582: Type not found with recommendation for jest or mocha.\n// TS2583: Type not found with recommendation to change target library.\n// TS2584: Type not found with recommendation to change target library to include `dom`.\n")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-ts"},"// TS2339: Property not found.\n// TS2550: Property not found with a suggestion to change `lib`.\n// TS2551: Property not found with a suggestion.\n")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-ts"},"// TS2693: Type used as a variable.\n// TS2585: Type used as a variable with a suggestion to change 'lib',\n")),Object(b.b)("h3",{id:"20210130"},"2021/01/30"),Object(b.b)("p",null,"1531 tests pass."),Object(b.b)("h3",{id:"20210204"},"2021/02/04"),Object(b.b)("p",null,"1597 tests pass."),Object(b.b)("h3",{id:"20210207"},"2021/02/07"),Object(b.b)("p",null,"1692 tests pass"),Object(b.b)("h3",{id:"20210209"},"2021/02/09"),Object(b.b)("p",null,"1730 tests pass."),Object(b.b)("h3",{id:"20210212"},"2021/02/12"),Object(b.b)("p",null,"1740 tests pass."),Object(b.b)("h3",{id:"20210219"},"2021/02/19"),Object(b.b)("p",null,"1748 out of 3040 tests pass."),Object(b.b)("h3",{id:"20210221"},"2021/02/21"),Object(b.b)("p",null,"1774 out of 3059 tests pass. 1902 ignored;"),Object(b.b)("p",null,"The ignored 1902 tests are one of:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"tests for error recovery of the parser"),Object(b.b)("li",{parentName:"ul"},"tests for import / exports"),Object(b.b)("li",{parentName:"ul"},"tests for recursive types.")),Object(b.b)("h3",{id:"20210224"},"2021/02/24"),Object(b.b)("p",null,"1797 tests pass."),Object(b.b)("h3",{id:"20210227"},"2021/02/27"),Object(b.b)("p",null,"1800 tests pass."),Object(b.b)("h3",{id:"20210302"},"2021/03/02"),Object(b.b)("p",null,"1863 tests pass."),Object(b.b)("h3",{id:"20210305"},"2021/03/05"),Object(b.b)("p",null,"1906 tests pass."),Object(b.b)("h3",{id:"20210309"},"2021/03/09"),Object(b.b)("p",null,"1901 tests pass."),Object(b.b)("p",null,"(Regressed because I made the rule very strict to filter out false positives.)"),Object(b.b)("h3",{id:"20210310"},"2021/03/10"),Object(b.b)("p",null,"1905 tests pass."),Object(b.b)("h3",{id:"20210311"},"2021/03/11"),Object(b.b)("p",null,"1917 tests pass."),Object(b.b)("h3",{id:"20210327"},"2021/03/27"),Object(b.b)("p",null,"1923 tests pass."),Object(b.b)("h3",{id:"20210328"},"2021/03/28"),Object(b.b)("p",null,"1927 tests pass."),Object(b.b)("h3",{id:"20210329"},"2021/03/29"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"conformance"),": 1931 / 3048"),Object(b.b)("p",null,"(Copied from typescript 4.1)"),Object(b.b)("h3",{id:"20210402"},"2021/04/02"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"conformance"),": 1953 / 3048"),Object(b.b)("p",null,"(Copied from typescript 4.1)"),Object(b.b)("h3",{id:"20210403"},"2021/04/03"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"conformance"),": 1960 / 3048"),Object(b.b)("p",null,"(Copied from typescript 4.1)"),Object(b.b)("h3",{id:"20210405"},"2021/04/05"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"conformance"),": 1967 / 3048"),Object(b.b)("p",null,"(Copied from typescript 4.1)"),Object(b.b)("h3",{id:"20210425"},"2021/04/25"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"conformance"),": 1975 tests passed, but ignored some more tests because of stack overflow."),Object(b.b)("p",null,"(Spec: typescript 4.1)"),Object(b.b)("h3",{id:"20210427"},"2021/04/27"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"conformance"),": 1987 tests passed."),Object(b.b)("p",null,"(Spec: typescript 4.1)"),Object(b.b)("h3",{id:"20210428"},"2021/04/28"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"conformance"),": 2015 tests passed."),Object(b.b)("p",null,"(Spec: typescript 4.1)"),Object(b.b)("h3",{id:"20210429"},"2021/04/29"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"conformance"),": 2065 tests passed."),Object(b.b)("p",null,"(Spec: typescript 4.1)"),Object(b.b)("h3",{id:"20210430"},"2021/04/30"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"conformance"),": 2081 tests passed."),Object(b.b)("p",null,"(Spec: typescript 4.1)"),Object(b.b)("h3",{id:"20210501"},"2021/05/01"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"conformance"),": 2090 tests passed."),Object(b.b)("p",null,"(Spec: typescript 4.1)"),Object(b.b)("h3",{id:"20210502"},"2021/05/02"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"conformance"),": 2108 tests passed."),Object(b.b)("p",null,"(Spec: typescript 4.1)"),Object(b.b)("h3",{id:"20210503"},"2021/05/03"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"conformance"),": 2117 tests passed."),Object(b.b)("p",null,"(Spec: typescript 4.1)"),Object(b.b)("h3",{id:"20210505"},"2021/05/05"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"conformance"),": 2133 tests passed."),Object(b.b)("p",null,"(Spec: typescript 4.1)"),Object(b.b)("h3",{id:"20210506"},"2021/05/06"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"conformance"),": 2145 tests passed."),Object(b.b)("p",null,"(Spec: typescript 4.1)"),Object(b.b)("h3",{id:"20210507"},"2021/05/07"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"conformance"),": 2161 tests passed."),Object(b.b)("p",null,"(Spec: typescript 4.1)"))}p.isMDXComponent=!0}}]);