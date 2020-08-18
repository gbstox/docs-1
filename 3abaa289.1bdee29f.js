(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{100:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},101:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return l}));var a=n(99),i=n(107);function r(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,l=r.forcePrependBaseUrl,o=void 0!==l&&l,s=r.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(o)return t+n;var b=!n.startsWith(t)?t+n.replace(/^\//,""):n;return c?e+b:b}(r,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},102:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},103:function(e,t,n){"use strict";var a=n(0),i=n(102);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},104:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(103),l=n(100),o=n(47),s=n.n(o),c=37,b=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,d=e.values,p=e.groupId,u=Object(r.a)(),O=u.tabGroupChoices,m=u.setTabGroupChoices,h=Object(a.useState)(o),j=h[0],f=h[1],v=Object(a.useState)(!1),g=v[0],N=v[1];if(null!=p){var y=O[p];null!=y&&y!==j&&d.some((function(e){return e.value===y}))&&f(y)}var T=function(e){f(e),null!=p&&m(p,e)},w=[],E=function(e){e.metaKey||e.altKey||e.ctrlKey||N(!0)},x=function(){N(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",E),window.addEventListener("mousedown",x)}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t})},d.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(l.a)("tabs__item",s.a.tabItem,{"tabs__item--active":j===t}),style:g?{}:{outline:"none"},key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e),E(e)},onFocus:function(){return T(t)},onClick:function(){T(t),N(!1)},onPointerDown:function(){return N(!1)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===j}))[0]))}},105:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}},107:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),r=(n(0),n(98)),l=n(104),o=n(105),s=(n(101),{title:"Endpoints"}),c={unversionedId:"satellite_endpoints",id:"satellite_endpoints",isDocsHomePage:!1,title:"Endpoints",description:"All HTTP methods should be prepended by this service's endpoint:",source:"@site/docs/satellite_endpoints.md",permalink:"/docs/docs/satellite_endpoints",editUrl:"https://github.com/Leaf-Agriculture/docs/satellite_endpoints.md",sidebar:"docs",previous:{title:"Overview",permalink:"/docs/docs/satellite_overview"},next:{title:"Overview",permalink:"/docs/docs/converters_overview"}},b=[{value:"Endpoints",id:"endpoints",children:[{value:"<code>GET /fields</code>",id:"get-fields",children:[]},{value:"<code>GET /fields/{id}</code>",id:"get-fieldsid",children:[]},{value:"<code>GET /fields/{id}/processes</code>",id:"get-fieldsidprocesses",children:[]},{value:"<code>POST /fields</code>",id:"post-fields",children:[]},{value:"<code>PUT /fields/{id}</code>",id:"put-fieldsid",children:[]},{value:"<code>DELETE /fields/{id}</code>",id:"delete-fieldsid",children:[]}]}],d={rightToc:b};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"All HTTP methods should be prepended by this service's endpoint:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"https://api.withleaf.io/services/satellite/api\n")),Object(r.b)("p",null,"This service has the following endpoints available:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"GET    /fields\nGET    /fields/{id}\nGET    /fields/{id}/processes\nPOST   /fields\nPUT    /fields/{id}\nDELETE /fields/{id}\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"endpoints"},"Endpoints"),Object(r.b)("h3",{id:"get-fields"},Object(r.b)("inlineCode",{parentName:"h3"},"GET /fields")),Object(r.b)("p",null,"Returns paged results for all fields registered."),Object(r.b)("p",null,"It returns a list of JSON objects like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'[\n    {\n        "externalId": "your field id",\n        "geometry": {\n            "type": "MultiPolygon",\n            "coordinates": [...]\n        }\n    },\n    # etc...\n]\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"externalId"),": external ID used in the field's registration"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"geometry"),": a valid ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://tools.ietf.org/html/rfc7946#section-3.1.7"}),"MultiPolygon")," GeoJSON object with the geometry of the\nfield")),Object(r.b)(l.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"cURL",value:"sh"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint ='https://api.withleaf.io/services/satellite/api/fields'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\naxios.get(endpoint, { headers })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(r.b)(o.a,{value:"py",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://api.withleaf.io/services/satellite/api/fields'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nresponse = requests.get(endpoint, headers=headers)\nprint(response.json())\n"))),Object(r.b)(o.a,{value:"sh",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://api.withleaf.io/services/satellite/api/fields'\n")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"get-fieldsid"},Object(r.b)("inlineCode",{parentName:"h3"},"GET /fields/{id}")),Object(r.b)("p",null,"Fetches a field entry based on its external id."),Object(r.b)("p",null,"It returns a single JSON object with the following entries (like each item from\n",Object(r.b)("inlineCode",{parentName:"p"},"GET /fields")," results):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'{\n    "externalId": "your field id",\n    "geometry": {\n        "type": "MultiPolygon",\n        "coordinates": [...]\n    }\n}\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"id"),": external ID used in the field's registration"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"geometry"),": a valid ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://tools.ietf.org/html/rfc7946#section-3.1.7"}),"MultiPolygon")," GeoJSON object with the geometry of the\nfield")),Object(r.b)(l.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"cURL",value:"sh"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint ='https://api.withleaf.io/services/satellite/api/fields/YOUR_ID'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\naxios.get(endpoint, { headers })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(r.b)(o.a,{value:"py",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://api.withleaf.io/services/satellite/api/fields/YOUR_ID'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nresponse = requests.get(endpoint, headers=headers)\nprint(response.json())\n"))),Object(r.b)(o.a,{value:"sh",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://api.withleaf.io/services/satellite/api/fields/YOUR_ID'\n")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"get-fieldsidprocesses"},Object(r.b)("inlineCode",{parentName:"h3"},"GET /fields/{id}/processes")),Object(r.b)("p",null,"Returns all processes already handled by our service."),Object(r.b)("p",null,"A ",Object(r.b)("em",{parentName:"p"},"process")," is created by our servers whenever there is a new satellite image\nthat intersects with one of your registered fields. This endpoint is used to\naccess all images that each process generates."),Object(r.b)("p",null,"The returned payload is like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'[\n    {\n        "date": "2020-06-03T19:03:57.882Z",\n        "clouds": 0,\n        "bucketName": "sentinel-s2-l1c",\n        "bucketKey": "tiles/10/S/FH/2020/6/3/0",\n        "bucketRegion": "eu-central-1",\n        "status": "SUCCESS",\n        "coverage": 100,\n        "images": [\n            {\n                "url": "url.to.your.image.tif",\n                "type": "tif",\n                "resolution": 20\n            },\n            # etc...\n        ]\n    },\n    # etc...\n]\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"date"),": the date of the satellite image"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"clouds"),": cloud coverage percentage of the field, from 0 to 100"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"bucketName"),": name of Sentinel's bucket where the original tile is. Usually\n",Object(r.b)("inlineCode",{parentName:"li"},"sentinel-s2-l1c")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"bucketRegion"),": AWS region of original image's bucket. Usually ",Object(r.b)("inlineCode",{parentName:"li"},"eu-central-1")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"bucketKey"),": base path of original satellite image"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"status"),": status of the process. It will be either ",Object(r.b)("inlineCode",{parentName:"li"},"SUCCESS")," or ",Object(r.b)("inlineCode",{parentName:"li"},"FAILURE")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"coverage"),": data coverage percentage of the field, from 0 to 100"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"images"),": each image in this list will have the following data:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"url"),": URL of the image"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"type"),": the type of the image. One of ",Object(r.b)("inlineCode",{parentName:"li"},"tif"),", ",Object(r.b)("inlineCode",{parentName:"li"},"ndvi"),", ",Object(r.b)("inlineCode",{parentName:"li"},"png")," and\n",Object(r.b)("inlineCode",{parentName:"li"},"tif_colorized")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"resolution"),": resolution, in meters, of the image. See table below")))),Object(r.b)(l.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"cURL",value:"sh"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nlet endpoint = 'https://api.withleaf.io/services/satellite/api' +\n               '/fields/YOUR_ID/processes'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\naxios.get(endpoint, { headers })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(r.b)(o.a,{value:"py",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = ('https://api.withleaf.io/services/satellite/api'\n            '/fields/YOUR_ID/processes')\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nresponse = requests.get(endpoint, headers=headers)\nprint(response.json())\n"))),Object(r.b)(o.a,{value:"sh",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    --header 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://api.withleaf.io/services/satellite/api/fields/YOUR_ID/processes'\n")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"post-fields"},Object(r.b)("inlineCode",{parentName:"h3"},"POST /fields")),Object(r.b)("p",null,"Creates a new field entry in the database."),Object(r.b)("p",null,"A field will start to be monitored as soon as it is added to our database. It\nwill be continuously monitored for as long as it is in there. If you want to\nstop this process, you should remove the field from the database entirely.\nUse a ",Object(r.b)("inlineCode",{parentName:"p"},"DELETE")," HTTP request."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Note that the field deletion cascades to all other tables. Meaning that all\nprocessed images will be lost."))),Object(r.b)("h4",{id:"payload"},"Payload"),Object(r.b)("p",null,"The payload of this object should be like the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'{\n    "externalId": "your field id",\n    "geometry": {\n        "type": "MultiPolygon",\n        "coordinates": [...]\n    }\n}\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"externalId"),": external ID used in the field's registration"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"geometry"),": a valid ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://tools.ietf.org/html/rfc7946#section-3.1.7"}),"MultiPolygon")," GeoJSON object with the geometry of the\nfield")),Object(r.b)("p",null,"There are some limitations regarding the geometry of the field. It cannot be\nbigger than 50 million square meters and it cannot have a perimeter bigger\nthan ~28 thousand meters."),Object(r.b)(l.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"cURL",value:"sh"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nlet endpoint = 'https://api.withleaf.io/services/satellite/api/fields'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\nconst data = { /* Your payload */ }\n\naxios.post(endpoint, { headers, data })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(r.b)(o.a,{value:"py",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://api.withleaf.io/services/satellite/api/fields'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\npayload = {...}  # Payload\n\nresponse = requests.post(endpoint, headers=headers, json=payload)\nprint(response.json())\n"))),Object(r.b)(o.a,{value:"sh",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -X POST \\\n    -H 'Content-Type: application/json' \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    -d '{ your payload }' \\\n    'https://api.withleaf.io/services/satellite/api/fields'\n")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"put-fieldsid"},Object(r.b)("inlineCode",{parentName:"h3"},"PUT /fields/{id}")),Object(r.b)("p",null,"Endpoint used to update the geometry of the field."),Object(r.b)("p",null,"You cannot update the external id. The payload is a single JSON object with an\nentry ",Object(r.b)("inlineCode",{parentName:"p"},"geometry")," which contains a MultiPolygon GeoJSON object. Again, the new\ngeometry must respect the area and perimeter limits of ",Object(r.b)("inlineCode",{parentName:"p"},"POST /fields"),"."),Object(r.b)(l.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"cURL",value:"sh"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nlet endpoint = 'https://api.withleaf.io/services/satellite/api/fields'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\nconst data = { /* Your geometry */ }\n\naxios.post(endpoint, { headers, data })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(r.b)(o.a,{value:"py",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://api.withleaf.io/services/satellite/api/fields'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\npayload = {...}  # Geometry\n\nresponse = requests.post(endpoint, headers=headers, json=payload)\nprint(response.json())\n"))),Object(r.b)(o.a,{value:"sh",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -X POST \\\n    -H 'Content-Type: application/json' \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    -d '{ your geometry }' \\\n    'https://api.withleaf.io/services/satellite/api/fields'\n")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"delete-fieldsid"},Object(r.b)("inlineCode",{parentName:"h3"},"DELETE /fields/{id}")),Object(r.b)("p",null,"Deletes the field from our database."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Be careful when using this method. It will delete all the processed images from\nthe database as well."))),Object(r.b)(l.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"cURL",value:"sh"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\n\nconst TOKEN = 'YOUR_TOKEN'\n\nconst client = axios.create({\n  baseURL: 'https://api.withleaf.io',\n  headers: {'Authorization': `Bearer ${TOKEN}`}\n})\n\nclient.delete('/fields/YOUR_ID')\n  .then(res => console.log(res.statusCode))\n  .catch(console.error)\n"))),Object(r.b)(o.a,{value:"py",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://api.withleaf.io/services/satellite/api/fields/YOUR_ID'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nresponse = requests.delete(endpoint, headers=headers)\nprint(response)\n"))),Object(r.b)(o.a,{value:"sh",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -X DELETE \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://api.withleaf.io/services/satellite/api/fields/YOUR_ID'\n")))))}p.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,O=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return n?i.a.createElement(O,o(o({ref:t},c),{},{components:n})):i.a.createElement(O,o({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";var a=n(0),i=n(20);t.a=function(){var e=Object(a.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}}}]);