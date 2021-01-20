(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{67:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(95)),o={title:"Overview"},l={unversionedId:"operations_overview",id:"operations_overview",isDocsHomePage:!1,title:"Overview",description:"Leaf's Operation Data API returns clean, aggregated, and standardized data",source:"@site/docs/operations_overview.md",permalink:"/docs/docs/operations_overview",editUrl:"https://github.com/Leaf-Agriculture/docs/tree/master/docs/operations_overview.md",sidebar:"docs",previous:{title:"Endpoints",permalink:"/docs/docs/field_boundaries_endpoints"},next:{title:"Endpoints",permalink:"/docs/docs/operations_endpoints"}},c=[],s={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Leaf's Operation Data API returns clean, aggregated, and standardized data\nfrom all major machine data brands in a simple JSON response. "),Object(i.b)("p",null,"You can access user users' permissoned-files in two ways"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Connecting to the company that holds your users' files. Our Operation Data\nService will immediately pool machine data from the authorized account and\nmonitor new files to keep them updated")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Uploading the files directly to Leaf."))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"requires Leaf User")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You will need a Leaf User to retrieve operations images, summary, and\nstandardized files. You can add files by having a Leaf User with valid\ncredentials from the provider you want to access data or you can upload data\nmanually. If you don't have a Leaf User or you have not connected it with any\nprovider yet, see ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"#"}),"how to create a Leaf User"))," and\n",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:""}),"how to add credentials to a Leaf User")),"."))),Object(i.b)("p",null,"All files will be passed through a processing chain that includes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Converting raw proprietary format files to a ",Object(i.b)("inlineCode",{parentName:"li"},"rawGeoJSON"),";"),Object(i.b)("li",{parentName:"ul"},"Standardizing the ",Object(i.b)("inlineCode",{parentName:"li"},"rawGeoJSON")," to a ",Object(i.b)("inlineCode",{parentName:"li"},"standardGeojson"),";"),Object(i.b)("li",{parentName:"ul"},"Creating images for all the numerical attributes in the file;"),Object(i.b)("li",{parentName:"ul"},"Creating a summary of the file with summary information, such as averages,\nstandard deviations, maximum and minimum values \u200b\u200bfor important properties, and\nmore. This summary is usually used to have general information about the\noperation without the need to download and open the standardGeojson file. For\nexample, you can display the area of the operation, how much was harvested and\nthe date it happened, all without opening big files.")),Object(i.b)("p",null,"This processing may take a few minutes to complete and happens continuously\nin the background."),Object(i.b)("p",null,"Since one single operation can be represented in several (sometimes hundreds of) files by the provider,\nthis service also provides an auto-merge feature, which will identify files that\nbelong to the same operation (planting, for example) and same field and\nautomatically merge them."),Object(i.b)("p",null,"Alternatively, it is possible to manually upload files to be processed and merge\nthem manually if desired. Please keep in mind that merging files is processing-heavy\nand may take about 20 minutes to finish."),Object(i.b)("p",null,"When manually uploading (in a zip), you can select which provider the files\ninside the zip came from. If you are unsure or you know that there are files\nfrom more than one provider, Leaf can automatically detect, detach and process\neach file. "),Object(i.b)("p",null,"Currently, Leaf is able to (detect and) process files from the following\nproviders and formats:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"John Deere:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Gen 4"),Object(i.b)("li",{parentName:"ul"},"GS3"),Object(i.b)("li",{parentName:"ul"},"Shapefile"),Object(i.b)("li",{parentName:"ul"},"ADM (Adapt Data Format)"))),Object(i.b)("li",{parentName:"ul"},"Climate Field View:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},".dat (Climate Field View proprietary)"),Object(i.b)("li",{parentName:"ul"},"Shapefile"))),Object(i.b)("li",{parentName:"ul"},"CNHi",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},".cn1 (ISO11783)"),Object(i.b)("li",{parentName:"ul"},"Shapefile"))),Object(i.b)("li",{parentName:"ul"},"Trimble",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},".agt (Trimble proprietary)"),Object(i.b)("li",{parentName:"ul"},"Shapefile")))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"File processing")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"We are always improving our processing. If you have any doubts or suggestions,\nwe will be happy to help at ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:help@withleaf.io"}),"help@withleaf.io")))),Object(i.b)("p",null,"We also provide our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection"}),"Leaf Postman collection")," so you can follow\nalong easily."))}p.isMDXComponent=!0},95:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(a),m=n,u=b["".concat(o,".").concat(m)]||b[m]||d[m]||i;return a?r.a.createElement(u,l(l({ref:t},s),{},{components:a})):r.a.createElement(u,l({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);