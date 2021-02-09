(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{100:function(e,t,a){"use strict";var n=a(0),l=a(99);t.a=function(){var e=Object(n.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},101:function(e,t,a){"use strict";var n=a(0),l=a.n(n),i=a(100),r=a(97),b=a(48),c=a.n(b),s=37,o=39;t.a=function(e){var t=e.block,a=e.children,b=e.defaultValue,d=e.values,p=e.groupId,u=Object(i.a)(),O=u.tabGroupChoices,m=u.setTabGroupChoices,j=Object(n.useState)(b),f=j[0],h=j[1],g=Object(n.useState)(!1),N=g[0],v=g[1];if(null!=p){var y=O[p];null!=y&&y!==f&&d.some((function(e){return e.value===y}))&&h(y)}var T=function(e){h(e),null!=p&&m(p,e)},w=[],E=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},C=function(){v(!1)};return Object(n.useEffect)((function(){window.addEventListener("keydown",E),window.addEventListener("mousedown",C)}),[]),l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},d.map((function(e){var t=e.value,a=e.label;return l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===t}),style:N?{}:{outline:"none"},key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case o:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e),E(e)},onFocus:function(){return T(t)},onClick:function(){T(t),v(!1)},onPointerDown:function(){return v(!1)}},a)}))),l.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===f}))[0]))}},102:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){return l.a.createElement("div",null,e.children)}},103:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function l(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return l}))},66:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(2),l=a(6),i=(a(0),a(95)),r=a(101),b=a(102),c=(a(98),{title:"Endpoints"}),s={unversionedId:"satellite_endpoints",id:"satellite_endpoints",isDocsHomePage:!1,title:"Endpoints",description:"All HTTP methods should be prepended by this service's endpoint:",source:"@site/docs/satellite_endpoints.md",permalink:"/docs/docs/satellite_endpoints",editUrl:"https://github.com/Leaf-Agriculture/docs/tree/master/docs/satellite_endpoints.md",sidebar:"docs",previous:{title:"Overview",permalink:"/docs/docs/satellite_overview"},next:{title:"Overview",permalink:"/docs/docs/converters_overview"}},o=[{value:"Endpoints",id:"endpoints",children:[{value:"Get all satellite fields",id:"get-all-satellite-fields",children:[]},{value:"Get a satellite field",id:"get-a-satellite-field",children:[]},{value:"Get images of satellite field",id:"get-images-of-satellite-field",children:[]},{value:"Create a satellite field",id:"create-a-satellite-field",children:[]},{value:"Delete a satellite field",id:"delete-a-satellite-field",children:[]}]}],d={rightToc:o};function p(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"All HTTP methods should be prepended by this service's endpoint:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"https://api.withleaf.io/services/satellite/api\n")),Object(i.b)("p",null,"This service has the following endpoints available:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Endpoints"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#get-all-satellite-fields"}),"Get all satellite fields")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("span",{class:"badge badge--success"},"GET")," ",Object(i.b)("inlineCode",{parentName:"td"},"/fields"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#get-a-satellite-field"}),"Get a satellite field")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("span",{class:"badge badge--success"},"GET")," ",Object(i.b)("inlineCode",{parentName:"td"},"/fields/{id}"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#get-images-of-satellite-field"}),"Get images of satellite field")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("span",{class:"badge badge--success"},"GET")," ",Object(i.b)("inlineCode",{parentName:"td"},"/fields/{id}/processes"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#create-a-satellite-field"}),"Create a satellite field")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("span",{class:"badge badge--warning"},"POST")," ",Object(i.b)("inlineCode",{parentName:"td"},"/fields"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#delete-a-satellite-field"}),"Delete a satellite field")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("span",{class:"badge badge--danger"},"DELETE")," ",Object(i.b)("inlineCode",{parentName:"td"},"/fields/{id}"))))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"endpoints"},"Endpoints"),Object(i.b)("h3",{id:"get-all-satellite-fields"},"Get all satellite fields"),Object(i.b)("p",null,"\xa0",Object(i.b)("span",{class:"badge badge--success"},"GET")," ",Object(i.b)("inlineCode",{parentName:"p"},"/fields")),Object(i.b)("p",null,"Returns paged results for all fields registered."),Object(i.b)("p",null,"It returns a list of JSON objects like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'[\n    {\n        "externalId": "your field id",\n        "geometry": {\n            "type": "MultiPolygon",\n            "coordinates": [...]\n        }\n    },\n    # etc...\n]\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"externalId"),": external ID used in the field's registration"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"geometry"),": a valid ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://tools.ietf.org/html/rfc7946#section-3.1.7"}),"MultiPolygon")," GeoJSON object with the geometry of the\nfield")),Object(i.b)(r.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(i.b)(b.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint ='https://api.withleaf.io/services/satellite/api/fields'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\naxios.get(endpoint, { headers })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(i.b)(b.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://api.withleaf.io/services/satellite/api/fields'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nresponse = requests.get(endpoint, headers=headers)\nprint(response.json())\n"))),Object(i.b)(b.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://api.withleaf.io/services/satellite/api/fields'\n")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"get-a-satellite-field"},"Get a satellite field"),Object(i.b)("p",null,"\xa0",Object(i.b)("span",{class:"badge badge--success"},"GET")," ",Object(i.b)("inlineCode",{parentName:"p"},"/fields/{id}")),Object(i.b)("p",null,"Fetches a field entry based on its external id."),Object(i.b)("p",null,"It returns a single JSON object with the following entries (like each item from\n",Object(i.b)("inlineCode",{parentName:"p"},"GET /fields")," results):"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'{\n    "externalId": "your field id",\n    "geometry": {\n        "type": "MultiPolygon",\n        "coordinates": [...]\n    }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"id"),": external ID used in the field's registration"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"geometry"),": a valid ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://tools.ietf.org/html/rfc7946#section-3.1.7"}),"MultiPolygon")," GeoJSON object with the geometry of the\nfield")),Object(i.b)(r.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(i.b)(b.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint ='https://api.withleaf.io/services/satellite/api/fields/YOUR_ID'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\naxios.get(endpoint, { headers })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(i.b)(b.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://api.withleaf.io/services/satellite/api/fields/YOUR_ID'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nresponse = requests.get(endpoint, headers=headers)\nprint(response.json())\n"))),Object(i.b)(b.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://api.withleaf.io/services/satellite/api/fields/YOUR_ID'\n")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"get-images-of-satellite-field"},"Get images of satellite field"),Object(i.b)("p",null,"\xa0",Object(i.b)("span",{class:"badge badge--success"},"GET")," ",Object(i.b)("inlineCode",{parentName:"p"},"/fields/{id}/processes")),Object(i.b)("p",null,"Returns images for a given field id."),Object(i.b)("p",null,"We return the following images, (tifs are EPSG:4326, pngs are EPSG:3857):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"RGB as tiff and as png (10m resolution)"),Object(i.b)("li",{parentName:"ul"},"Colorized NDVI as tiff and as png (10m resolution)"),Object(i.b)("li",{parentName:"ul"},"Raw NDVI as tiff (10m resolution)"),Object(i.b)("li",{parentName:"ul"},"all 12 Sentinel-2 bands as tiff.")),Object(i.b)("p",null,"It is possible to filter the results by a number of different parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"startDate"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ISO 8601 datetime format"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"retrieve images taken after this day"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"endDate"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ISO 8601 datetime format"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"retrieve images taken until this day"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"startProcessedTimestamp"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ISO 8601 datetime format"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"retrieve images processed by Leaf after this day"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"endProcessedTimestamp"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ISO 8601 datetime format"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"retrieve images processed by Leaf until this day"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"maxClouds"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"double between 0.0 and 100.0"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"filter processes with less than or equal to this percentage"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"100")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"status"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'string "SUCCESS", "FAILED" or "STARTED"'),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"retrieve images with selected status"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SUCCESS")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"page"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"page being fetched"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"size"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"how many processes (sets of all images) to return per page"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"20")))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Important")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Default ",Object(i.b)("inlineCode",{parentName:"p"},"page")," is page 0 and default ",Object(i.b)("inlineCode",{parentName:"p"},"size")," is 20. So, to see more images,\nyou can either increase the size or the page number."))),Object(i.b)(r.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"},{label:"JavaScript",value:"js"},{label:"JSON Response",value:"json"}],mdxType:"Tabs"},Object(i.b)(b.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nlet endpoint = 'https://api.withleaf.io/services/satellite/api' +\n               '/fields/YOUR_ID/processes'\n\nconst params = { startDate: '2020-06-03', endDate: '2020-06-10' }\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\naxios.get(endpoint, { headers, params })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(i.b)(b.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = ('https://api.withleaf.io/services/satellite/api'\n            '/fields/YOUR_ID/processes')\n\nparams = {'startDate': '2020-06-03', 'endDate': '2020-06-10'}\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nresponse = requests.get(endpoint, headers=headers, params=params)\nprint(response.json())\n"))),Object(i.b)(b.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    --header 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://api.withleaf.io/services/satellite/api/fields/YOUR_ID/processes?startDate=2020-06-03&endDate=2020-06-10'\n"))),Object(i.b)(b.a,{value:"json",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "date": "2020-06-03T19:03:57.882Z",\n        "clouds": 0,\n        "bucketName": "sentinel-s2-l1c",\n        "bucketKey": "tiles/10/S/FH/2020/6/3/0",\n        "bucketRegion": "eu-central-1",\n        "status": "SUCCESS",\n        "coverage": 100,\n        "images": [\n            {\n                "url": "url.to.your.image.tif",\n                "type": "tif",\n                "resolution": 20\n            },\n            # etc...\n        ],\n        "processedTimestamp": "2020-06-03T19:03:58.881731Z"\n    },\n    # etc...\n]\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"date"),": the date of the satellite image"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"clouds"),": cloud coverage percentage of the field, from 0 to 100"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"bucketName"),": name of Sentinel's bucket where the original tile is. Usually\n",Object(i.b)("inlineCode",{parentName:"li"},"sentinel-s2-l1c")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"bucketRegion"),": AWS region of original image's bucket. Usually ",Object(i.b)("inlineCode",{parentName:"li"},"eu-central-1")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"bucketKey"),": base path of original satellite image"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"status"),": status of the process. It will be either ",Object(i.b)("inlineCode",{parentName:"li"},"SUCCESS")," or ",Object(i.b)("inlineCode",{parentName:"li"},"FAILURE")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"coverage"),": data coverage percentage of the field, from 0 to 100"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"images"),": each image in this list will have the following data:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"url"),": URL of the image"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"type"),": the type of the image. One of ",Object(i.b)("inlineCode",{parentName:"li"},"tif"),", ",Object(i.b)("inlineCode",{parentName:"li"},"ndvi"),", ",Object(i.b)("inlineCode",{parentName:"li"},"png")," and\n",Object(i.b)("inlineCode",{parentName:"li"},"tif_colorized")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"resolution"),": resolution, in meters, of the image. See table below"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"processedTimestamp"),": the timestamp of when the process was processed")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"create-a-satellite-field"},"Create a satellite field"),Object(i.b)("p",null,"\xa0",Object(i.b)("span",{class:"badge badge--warning"},"POST")," ",Object(i.b)("inlineCode",{parentName:"p"},"/fields")),Object(i.b)("p",null,"Creates a new field"),Object(i.b)("p",null,"It will be continuously monitored forever, and new images will arrive every ~5\ndays (time it takes for the satellite to go over the same field when orbiting\nthe Earth). If you don't need the field anymore, you can\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/docs/satellite_endpoints#delete-fieldsid"}),"delete the field.")),Object(i.b)("div",{className:"admonition admonition-success alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"By default, Leaf will return images for your field from the last\n30 days (from the moment you create the field)."),Object(i.b)("p",{parentName:"div"},'You can change that by including a "startDate" or a "daysBefore" to the body'))),Object(i.b)("p",null,"There are two ways you can do that:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"set a ",Object(i.b)("inlineCode",{parentName:"li"},"startDate"),' (ISO, "yyyy-mm-dd") meaning Leaf will\nreturn all images for your field since this date.  '),Object(i.b)("li",{parentName:"ol"},"set how many ",Object(i.b)("inlineCode",{parentName:"li"},"daysBefore")," (an integer greater than or equal to 0) you\nwant to get images from.")),Object(i.b)("p",null,"Note that they are both ",Object(i.b)("em",{parentName:"p"},"optional"),", but you can ",Object(i.b)("strong",{parentName:"p"},"not")," specify both."),Object(i.b)("p",null,"Now let's see the Payload"),Object(i.b)("h4",{id:"payload"},"Payload"),Object(i.b)("p",null,"The payload of this object should be like the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'{\n    "externalId": "your field id",\n    "startDate": "2019-01-01"\n    "geometry": {\n        "type": "MultiPolygon",\n        "coordinates": [...]\n    }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"externalId"),": external ID used in the field's registration"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"geometry"),": a valid ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://tools.ietf.org/html/rfc7946#section-3.1.7"}),"MultiPolygon")," GeoJSON object with the geometry of the\nfield")),Object(i.b)(r.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(i.b)(b.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nlet endpoint = 'https://api.withleaf.io/services/satellite/api/fields'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\nconst data = { /* Your payload */ }\n\naxios.post(endpoint, { headers, data })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(i.b)(b.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://api.withleaf.io/services/satellite/api/fields'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\npayload = {...}  # Payload\n\nresponse = requests.post(endpoint, headers=headers, json=payload)\nprint(response.json())\n"))),Object(i.b)(b.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"curl -X POST \\\n    -H 'Content-Type: application/json' \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    -d '{ your payload }' \\\n    'https://api.withleaf.io/services/satellite/api/fields'\n")))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"field size limit")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"the field cannot be larger than 50k hectares (123k acres) and"),Object(i.b)("li",{parentName:"ul"},"cannot have a perimeter bigger than 300km (180 miles).")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"delete-a-satellite-field"},"Delete a satellite field"),Object(i.b)("p",null,"\xa0",Object(i.b)("span",{class:"badge badge--danger"},"DELETE"),"  ",Object(i.b)("inlineCode",{parentName:"p"},"/fields/{id}")),Object(i.b)("p",null,"Deletes the field from our database."),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Note that the field deletion is irreversible and all images will be lost."))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"(But you can always create a new field and get images from the past, as far\nas you want).")),Object(i.b)(r.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(i.b)(b.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\n\nconst TOKEN = 'YOUR_TOKEN'\n\nconst client = axios.create({\n  baseURL: 'https://api.withleaf.io',\n  headers: {'Authorization': `Bearer ${TOKEN}`}\n})\n\nclient.delete('/fields/YOUR_ID')\n  .then(res => console.log(res.statusCode))\n  .catch(console.error)\n"))),Object(i.b)(b.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://api.withleaf.io/services/satellite/api/fields/YOUR_ID'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nresponse = requests.delete(endpoint, headers=headers)\nprint(response)\n"))),Object(i.b)(b.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"curl -X DELETE \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://api.withleaf.io/services/satellite/api/fields/YOUR_ID'\n")))))}p.isMDXComponent=!0},95:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var n=a(0),l=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=l.a.createContext({}),o=function(e){var t=l.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},d=function(e){var t=o(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=o(a),u=n,O=d["".concat(r,".").concat(u)]||d[u]||p[u]||i;return a?l.a.createElement(O,b(b({ref:t},s),{},{components:a})):l.a.createElement(O,b({ref:t},s))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,r[1]=b;for(var s=2;s<i;s++)r[s]=a[s];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},96:function(e,t,a){"use strict";var n=a(0),l=a(20);t.a=function(){var e=Object(n.useContext)(l.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},97:function(e,t,a){"use strict";function n(e){var t,a,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(l&&(l+=" "),l+=a);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,a=0,l="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(l&&(l+=" "),l+=t);return l}},98:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return r}));var n=a(96),l=a(103);function i(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,r=i.forcePrependBaseUrl,b=void 0!==r&&r,c=i.absolute,s=void 0!==c&&c;if(!a)return a;if(a.startsWith("#"))return a;if(Object(l.b)(a))return a;if(b)return t+a;var o=!a.startsWith(t)?t+a.replace(/^\//,""):a;return s?e+o:o}(i,a,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},99:function(e,t,a){"use strict";var n=a(0),l=Object(n.createContext)(void 0);t.a=l}}]);