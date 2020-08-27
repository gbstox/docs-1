(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{100:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),r=(n(0),n(91)),s=n(97),l=n(98),o=(n(94),{title:"Endpoints"}),d={unversionedId:"field_boundaries_endpoints",id:"field_boundaries_endpoints",isDocsHomePage:!1,title:"Endpoints",description:"About",source:"@site/docs/field_boundaries_endpoints.md",permalink:"/docs/docs/field_boundaries_endpoints",editUrl:"https://github.com/Leaf-Agriculture/docs/tree/master/docs/field_boundaries_endpoints.md",sidebar:"docs",previous:{title:"Overview",permalink:"/docs/docs/field_boundaries_overview"},next:{title:"Overview",permalink:"/docs/docs/operations_overview"}},c=[{value:"About",id:"about",children:[]},{value:"Endpoints",id:"endpoints",children:[{value:"<code>GET /fields</code>",id:"get-fields",children:[]},{value:"<code>GET /fields/{id}</code>",id:"get-fieldsid",children:[]},{value:"<code>GET /fields/before</code>",id:"get-fieldsbefore",children:[]},{value:"<code>GET /fields/after</code>",id:"get-fieldsafter",children:[]},{value:"<code>GET /fields/between</code>",id:"get-fieldsbetween",children:[]},{value:"<code>DELETE /users/{leafUserId}/fields/{id}</code>",id:"delete-usersleafuseridfieldsid",children:[]},{value:"<code>POST /users/{leafUserId}/fields</code>",id:"post-usersleafuseridfields",children:[]},{value:"<code>POST /users/{leafUserId}/fields/intersect</code>",id:"post-usersleafuseridfieldsintersect",children:[]},{value:"<code>POST /fields/query/intersects</code>",id:"post-fieldsqueryintersects",children:[]},{value:"<code>POST /users/{leafUserId}/fields/same</code>",id:"post-usersleafuseridfieldssame",children:[]},{value:"<code>POST /users/{leafUserId}/fields/disjoint</code>",id:"post-usersleafuseridfieldsdisjoint",children:[]},{value:"<code>POST /users/{leafUserId}/fields/integration</code>",id:"post-usersleafuseridfieldsintegration",children:[]},{value:"<code>GET /users/{userId}/fields/{fieldId}/operations</code>",id:"get-usersuseridfieldsfieldidoperations",children:[]},{value:"<code>GET /users/{userId}/fields/{fieldId}/operations/{id}</code>",id:"get-usersuseridfieldsfieldidoperationsid",children:[]}]}],b={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"about"},"About"),Object(r.b)("p",null,"All HTTP methods should be prepended by this service's endpoint:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"https://api.withleaf.io/services/fields/api\n")),Object(r.b)("p",null,"See below the REST resources and their endpoints available in this service."),Object(r.b)("h4",{id:"field-resource"},"Field Resource"),Object(r.b)("p",null,"Form of a Field:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "UUID",\n  "providerName": "JohnDeere",\n  "providerFieldId": "UUID",\n  "providerBoundaryId": "UUID",\n  "type": "ORIGINAL",\n  "leafUserId": "UUID",\n  "organizationId": "str",\n  "mergedFieldId": ["UUID"],\n  "files": ["UUID"],\n  "geometry": {\n    "type": "MultiPolygon",\n    "coordinates": [\n      [\n        [\n          [-93.48821327980518, 41.77137549568163],\n          [-93.48817333680519, 41.77143534378164],\n          [-93.48821327390516, 41.76068857977987],\n          [-93.48821327980518, 41.77137549568163]\n        ]\n      ]\n    ]\n  },\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"GET    /fields\nGET    /fields/after\nGET    /fields/before\nGET    /fields/between\nGET    /users/{leafUserId}/fields/{id}\nPOST   /fields/query/intersects\nPOST   /users/{leafUserId}/fields\nPOST   /users/{leafUserId}/fields/disjoint\nPOST   /users/{leafUserId}/fields/integration\nPOST   /users/{leafUserId}/fields/intersect\nPOST   /users/{leafUserId}/fields/same\nPOST   /users/{leafUserId}/fields/{id}/integration\nDELETE /users/{leafUserId}/fields/{id}\n")),Object(r.b)("h4",{id:"operation-resource"},"Operation Resource"),Object(r.b)("p",null,"Form of a Operation/File:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "UUID",\n  "operationType": "planted",\n  "startTime": "ISO date-time",\n  "endTime": "ISO date-time",\n  "crops": ["str"],\n  "varieties": ["str"],\n  "providerFileId": "str",\n  "provider": "Trimble",\n  "leafUserId": "UUID"\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"GET    /users/{leafUserId}/fields/{fieldId}/operations\nGET    /users/{leafUserId}/fields/{fieldId}/operations/{id}\n")),Object(r.b)("h2",{id:"endpoints"},"Endpoints"),Object(r.b)("p",null,"Here we list all the available endpoints from this microservice. For easily\ntesting it, we recommend to see our Postman ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection"}),"collection"),"."),Object(r.b)("h3",{id:"get-fields"},Object(r.b)("inlineCode",{parentName:"h3"},"GET /fields")),Object(r.b)("p",null,"Gets a paged list of Fields. It is possible to filter the results by passing\nsome query parameters.  They are listed below."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"leafUserId"),", only matches files from this user (string)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"operationtype"),", one of the following values: ",Object(r.b)("inlineCode",{parentName:"li"},"harvested"),", ",Object(r.b)("inlineCode",{parentName:"li"},"planted"),",\n",Object(r.b)("inlineCode",{parentName:"li"},"applied"),", ",Object(r.b)("inlineCode",{parentName:"li"},"other")," (string)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"operationProvider"),", filter by the provider. Currently we support the\nfollowing providers: ",Object(r.b)("inlineCode",{parentName:"li"},"CNHI"),", ",Object(r.b)("inlineCode",{parentName:"li"},"JohnDeere"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Trimble")," and ",Object(r.b)("inlineCode",{parentName:"li"},"ClimateFieldView"),"\n(string)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"operationCrop"),", provider's identifier crop id. Requires ",Object(r.b)("inlineCode",{parentName:"li"},"operationProvider"),"\n(string)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"operationVariety")," provider's identifier variety name/code. Requires\n",Object(r.b)("inlineCode",{parentName:"li"},"operationProvider"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"operationStartTime"),", as ISO 8601 date to filter by the operation's start\ntime."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"operationEndTime"),", as ISO 8601 date to filter by the operation's end time.")),Object(r.b)("p",null,"If some operation parameter is passed, then the response will include the entry\n",Object(r.b)("inlineCode",{parentName:"p"},'"files"'),", otherwise such entry won't be present."),Object(r.b)("p",null,"You can also pass some parameters used exclusively for paging through results.\nThey are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"page"),", an integer specifying the page being fetched"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"size"),", an integer specifying the size of the page")),Object(r.b)("h4",{id:"response"},"Response"),Object(r.b)("p",null,"A JSON array containing Fields."),Object(r.b)(s.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"},{label:"JavaScript",value:"js"},{label:"JSON Response",value:"res"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint ='https://api.withleaf.io/services/fields/api/fields'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\naxios.get(endpoint, { headers })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(r.b)(l.a,{value:"py",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://api.withleaf.io/services/fields/api/fields'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nresponse = requests.get(endpoint, headers=headers)\nprint(response.json())\n"))),Object(r.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://api.withleaf.io/services/fields/api/fields'\n"))),Object(r.b)(l.a,{value:"res",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "id": "3031c20d-4331-4a24-bac0-c27087fc901f",\n    "leafUserId": "5db46916-54a0-4b38-a9b1-d8e00673db63",\n    "geometry": {\n      "type": "MultiPolygon",\n      "coordinates": [\n        [\n          [\n            [\n                -48.62195051987687,\n                -27.35030179570155\n            ],\n            [\n                -48.62099028904954,\n                -27.351783623790567\n            ],\n            [\n                -48.61883379300156,\n                -27.349906320545184\n            ],\n            [\n                -48.619777930574806,\n                -27.34842446734229\n            ],\n            [\n                -48.62195051987687,\n                -27.35030179570155\n            ]\n          ]\n        ]\n      ]\n    },\n    "providerName": "JohnDeere",\n    "providerId": 2,\n    "providerFieldId": "48926e0d-9bb7-4618-9214-3c2bf50d9ac2",\n    "providerBoundaryId": "5bfab976-df1b-44c7-ab83-ee5befdd45af",\n    "organizationId": "469039",\n    "type": "ORIGINAL",\n    "farmId": 1530952\n  }\n]\n')))),Object(r.b)("h3",{id:"get-fieldsid"},Object(r.b)("inlineCode",{parentName:"h3"},"GET /fields/{id}")),Object(r.b)("p",null,"Gets a single Field by its id."),Object(r.b)("h4",{id:"response-1"},"Response"),Object(r.b)("p",null,"A single Field as a JSON object."),Object(r.b)(s.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\naxios.get(endpoint, { headers })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(r.b)(l.a,{value:"py",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nresponse = requests.get(endpoint, headers=headers)\nprint(response.json())\n"))),Object(r.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}'\n")))),Object(r.b)("h3",{id:"get-fieldsbefore"},Object(r.b)("inlineCode",{parentName:"h3"},"GET /fields/before")),Object(r.b)("p",null,"Gets a list of all the Fields created ",Object(r.b)("strong",{parentName:"p"},"before")," the instant given in the\nquery parameter ",Object(r.b)("inlineCode",{parentName:"p"},"instant")," (ISO date-time format).  It must be a time in the\npast."),Object(r.b)("h4",{id:"response-2"},"Response"),Object(r.b)("p",null,"A JSON list of Fields."),Object(r.b)(s.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint ='https://api.withleaf.io/services/fields/api/fields/before'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\nconst param = {instant: 'END TIME'}\n\naxios.get(endpoint, {headers, param})\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(r.b)(l.a,{value:"py",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://api.withleaf.io/services/fields/api/fields/before'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nparam = {'instant': 'END TIME'}\n\nresponse = requests.get(endpoint, headers=headers, params=param)\nprint(response.json())\n"))),Object(r.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://api.withleaf.io/services/fields/api/fields/before?instant=<END TIME>'\n")))),Object(r.b)("h3",{id:"get-fieldsafter"},Object(r.b)("inlineCode",{parentName:"h3"},"GET /fields/after")),Object(r.b)("p",null,"Gets a list of all the fields created ",Object(r.b)("strong",{parentName:"p"},"after")," the instant given in the query\nparameter ",Object(r.b)("inlineCode",{parentName:"p"},"instant")," (ISO date-time format).  It must be a time in the past."),Object(r.b)("h4",{id:"response-3"},"Response"),Object(r.b)("p",null,"A JSON list of Fields."),Object(r.b)(s.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint ='https://api.withleaf.io/services/fields/api/fields/after'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\nconst param = {instant: 'START TIME'}\n\naxios.get(endpoint, {headers, param})\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(r.b)(l.a,{value:"py",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://api.withleaf.io/services/fields/api/fields/after'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nparam = {'instant': 'END TIME'}\n\nresponse = requests.get(endpoint, headers=headers, params=param)\nprint(response.json())\n"))),Object(r.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://api.withleaf.io/services/fields/api/fields/after?instant=<END TIME>'\n")))),Object(r.b)("h3",{id:"get-fieldsbetween"},Object(r.b)("inlineCode",{parentName:"h3"},"GET /fields/between")),Object(r.b)("p",null,"Gets a list of all the Fields created ",Object(r.b)("strong",{parentName:"p"},"between")," the instants given in the\nquery parameters ",Object(r.b)("inlineCode",{parentName:"p"},"start")," and ",Object(r.b)("inlineCode",{parentName:"p"},"end"),". Both in ISO date-time format. They\nrespectively must be in the past and in the past or present."),Object(r.b)("h4",{id:"response-4"},"Response"),Object(r.b)("p",null,"A JSON list of Fields."),Object(r.b)(s.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint ='https://api.withleaf.io/services/fields/api/fields/between'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\nconst interval = {\n  start: 'START TIME',\n  end: 'END TIME',\n}\n\naxios.get(endpoint, {headers, interval})\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(r.b)(l.a,{value:"py",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://api.withleaf.io/services/fields/api/fields/between'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\ninterval = {\n  'start': 'START TIME',\n  'end': 'END TIME',\n}\n\nresponse = requests.get(endpoint, headers=headers, params=interval)\nprint(response.json())\n"))),Object(r.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://api.withleaf.io/services/fields/api/fields/between?start=<START TIME>&end=<END TIME>'\n")))),Object(r.b)("h3",{id:"delete-usersleafuseridfieldsid"},Object(r.b)("inlineCode",{parentName:"h3"},"DELETE /users/{leafUserId}/fields/{id}")),Object(r.b)("p",null,"Deletes the field with the given id."),Object(r.b)("h3",{id:"post-usersleafuseridfields"},Object(r.b)("inlineCode",{parentName:"h3"},"POST /users/{leafUserId}/fields")),Object(r.b)("p",null,"Creates a Field for the user ",Object(r.b)("inlineCode",{parentName:"p"},"leafUserId"),". A resquest body must be provided\ncontaining the an entry ",Object(r.b)("inlineCode",{parentName:"p"},'"geometry"'),", which represents the boundaries of the\nField being created as a GeoJSON geometry (it must be a ",Object(r.b)("inlineCode",{parentName:"p"},'"MultiPolygon"'),").\nThe entry ",Object(r.b)("inlineCode",{parentName:"p"},'"id"')," is optional. If no id is provided, an UUID will be generated.\nThe Field id CAN NOT be updated."),Object(r.b)("p",null,"Request body example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "geometry": {\n    "type": "MultiPolygon",\n    "coordinates": [\n      [\n        [\n          [-93.48821327980518, 41.77137549568163],\n          [-93.48817333680519, 41.77143534378164],\n          [-93.48821327390516, 41.76068857977987],\n          [-93.48821327980518, 41.77137549568163]\n        ]\n      ]\n    ]\n  }\n}\n')),Object(r.b)("h4",{id:"response-5"},"Response"),Object(r.b)("p",null,"A Field as a JSON object."),Object(r.b)(s.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint ='https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\nconst data = {\n  geometry: {\n    type: \"MultiPolygon\",\n    coordinates: [...]\n  }\n}\n\naxios.post(endpoint, { headers, data })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(r.b)(l.a,{value:"py",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\ndata = {\n  'geometry': {\n    'type': \"MultiPolygon\",\n    'coordinates': [...]\n  }\n}\n\nresponse = requests.post(endpoint, headers=headers, json=data)\nprint(response.json())\n"))),Object(r.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'curl -X POST \\\n    -H \'Authorization: Bearer YOUR_TOKEN\' \\\n    -d \'{ "geometry": { "type: "MultiPolygon", "geometry": [...] } }\'\n    \'https://api.withleaf.io/services/fields/api/fields/users/{leafUserId}/{id}\'\n')))),Object(r.b)("h3",{id:"post-usersleafuseridfieldsintersect"},Object(r.b)("inlineCode",{parentName:"h3"},"POST /users/{leafUserId}/fields/intersect")),Object(r.b)("p",null,"Gets a GeoJSON MultiPolygon corresponding to the intersection of the Fields\nspecified by the given id's. Such Field id's goes in a list, in the request\nbody."),Object(r.b)("p",null,"Request body example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": ["UUID1", "UUID2"]\n}\n')),Object(r.b)("h4",{id:"response-6"},"Response"),Object(r.b)("p",null,"A JSON in the format of a GeoJSON geometry."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "geometry": {\n    "type": "MultiPolygon",\n    "coordinates": [\n      [\n        [\n          [-93.48821327980518, 41.77137549568163],\n          [-93.48817333680519, 41.77143534378164],\n          [-93.48821327390516, 41.76068857977987],\n          [-93.48821327980518, 41.77137549568163]\n        ]\n      ]\n    ]\n  }\n}\n')),Object(r.b)("h3",{id:"post-fieldsqueryintersects"},Object(r.b)("inlineCode",{parentName:"h3"},"POST /fields/query/intersects")),Object(r.b)("p",null,"Gets a list of fields that intersects with the GeoJSON MultiPolygon sent in\nthe request body."),Object(r.b)("h4",{id:"response-7"},"Response"),Object(r.b)("p",null,"A JSON list of Fields."),Object(r.b)(s.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint ='https://api.withleaf.io/services/fields/api/fields/query/intersects'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\nconst data = {\n  geometry: {\n    type: \"MultiPolygon\",\n    coordinates: [...]\n  }\n}\n\naxios.post(endpoint, { headers, data })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(r.b)(l.a,{value:"py",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://api.withleaf.io/services/fields/api/query/intersects'\nheaders = {'Authorization': 'Bearer YOUR_LEAF_TOKEN'}\n\ndata = {\n  'geometry': {\n    'type': \"MultiPolygon\",\n    'coordinates': [...]\n  }\n}\n\nresponse = requests.post(endpoint, headers=headers, json=data)\nprint(response.json())\n"))),Object(r.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'curl -X POST \\\n    -H \'Authorization: Bearer YOUR_TOKEN\' \\\n    -d \'{ "geometry": { "type: "MultiPolygon", "geometry": [...] } }\'\n    \'https://api.withleaf.io/services/fields/api/fields/query/intersects\'\n')))),Object(r.b)("h3",{id:"post-usersleafuseridfieldssame"},Object(r.b)("inlineCode",{parentName:"h3"},"POST /users/{leafUserId}/fields/same")),Object(r.b)("p",null,"Gets a boolean value answering if the Fields specified by a list of Field\nid's sent in the request body have the same values for their vertices, in\nexactly the same order."),Object(r.b)("h3",{id:"post-usersleafuseridfieldsdisjoint"},Object(r.b)("inlineCode",{parentName:"h3"},"POST /users/{leafUserId}/fields/disjoint")),Object(r.b)("p",null,"Gets a boolean value answering if the fields specified by a list of field\nid's in the request body are disjoint."),Object(r.b)("h3",{id:"post-usersleafuseridfieldsintegration"},Object(r.b)("inlineCode",{parentName:"h3"},"POST /users/{leafUserId}/fields/integration")),Object(r.b)("p",null,"Uploads fields to providers. Currently we only support Climate FieldView.\nNew integrations will come soon."),Object(r.b)("p",null,"Request body format:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "fields": ["UUID"],\n  "providers": ["ClimateFieldView"]\n}\n')),Object(r.b)("h4",{id:"response-8"},"Response"),Object(r.b)("p",null,"A JSON in the followin format."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "UUID": {\n    "ClimateFieldView": {\n      "id": "0cb726c8-aff0-415a-9de3-a04b627008dd"\n    },\n  },\n}\n')),Object(r.b)("h3",{id:"get-usersuseridfieldsfieldidoperations"},Object(r.b)("inlineCode",{parentName:"h3"},"GET /users/{userId}/fields/{fieldId}/operations")),Object(r.b)("p",null,"Gets a paged list of all operation files of the Field specified by the URL\nparameter ",Object(r.b)("inlineCode",{parentName:"p"},"fieldId"),". It is possible to filter the results by passing some query\nparameters. They are listed below."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"operationtype"),", one of the following values: ",Object(r.b)("inlineCode",{parentName:"li"},"harvested"),", ",Object(r.b)("inlineCode",{parentName:"li"},"planted"),",\n",Object(r.b)("inlineCode",{parentName:"li"},"applied"),", ",Object(r.b)("inlineCode",{parentName:"li"},"other")," (string)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"provider"),", filter by the provider. Currently we support the following\nproviders: ",Object(r.b)("inlineCode",{parentName:"li"},"CNHI"),", ",Object(r.b)("inlineCode",{parentName:"li"},"JohnDeere"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Trimble")," and ",Object(r.b)("inlineCode",{parentName:"li"},"ClimateFieldView")," (string)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"crop"),", provider's identifier crop id. Requires ",Object(r.b)("inlineCode",{parentName:"li"},"operationProvider")," (string)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"variety")," provider's identifier variety name/code. Requires\n",Object(r.b)("inlineCode",{parentName:"li"},"operationProvider"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"startTime"),", as ISO 8601 date to filter by the operation's start time."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"endTime"),", as ISO 8601 date to filter by the operation's end time.")),Object(r.b)("p",null,"You can also pass some parameters used exclusively for paging through results.\nThey are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"page"),", an integer specifying the page being fetched"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"size"),", an integer specifying the size of the page")),Object(r.b)("h4",{id:"response-9"},"Response"),Object(r.b)("p",null,"A JSON array of Files."),Object(r.b)(s.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint ='https://api.withleaf.io/services/fields/api/users/{userId}/fields/{fieldId}/operations'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\naxios.get(endpoint, { headers })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(r.b)(l.a,{value:"py",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://api.withleaf.io/services/fields/api/users/{userId}/fields/{fieldId}/operations'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nresponse = requests.get(endpoint, headers=headers)\nprint(response.json())\n"))),Object(r.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://api.withleaf.io/services/fields/api/users/{userId}/fields/{fieldId}/operations'\n")))),Object(r.b)("h3",{id:"get-usersuseridfieldsfieldidoperationsid"},Object(r.b)("inlineCode",{parentName:"h3"},"GET /users/{userId}/fields/{fieldId}/operations/{id}")),Object(r.b)("p",null,"Gets a single Operation File of a field by its id."),Object(r.b)("h4",{id:"response-10"},"Response"),Object(r.b)("p",null,"A single Operation File."),Object(r.b)(s.a,{defaultValue:"sh",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"cURL",value:"sh"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/operations/{id}'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\naxios.get(endpoint, { headers })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(r.b)(l.a,{value:"py",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/operations/{id}'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nresponse = requests.get(endpoint, headers=headers)\nprint(response.json())\n"))),Object(r.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/operations/{id}'\n")))),Object(r.b)("p",null,"[2]",": ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc7946"}),"https://tools.ietf.org/html/rfc7946")," --\x3e"))}p.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),c=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=c(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),b=c(n),u=a,O=b["".concat(s,".").concat(u)]||b[u]||p[u]||r;return n?i.a.createElement(O,l(l({ref:t},d),{},{components:n})):i.a.createElement(O,l({ref:t},d))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var d=2;d<r;d++)s[d]=n[d];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";var a=n(0),i=n(20);t.a=function(){var e=Object(a.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},93:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},94:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var a=n(92),i=n(100);function r(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,s=r.forcePrependBaseUrl,l=void 0!==s&&s,o=r.absolute,d=void 0!==o&&o;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(l)return t+n;var c=!n.startsWith(t)?t+n.replace(/^\//,""):n;return d?e+c:c}(r,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},95:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},96:function(e,t,n){"use strict";var a=n(0),i=n(95);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},97:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(96),s=n(93),l=n(47),o=n.n(l),d=37,c=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,b=e.values,p=e.groupId,u=Object(r.a)(),O=u.tabGroupChoices,f=u.setTabGroupChoices,m=Object(a.useState)(l),j=m[0],h=m[1],N=Object(a.useState)(!1),v=N[0],T=N[1];if(null!=p){var g=O[p];null!=g&&g!==j&&b.some((function(e){return e.value===g}))&&h(g)}var y=function(e){h(e),null!=p&&f(p,e)},E=[],I=function(e){e.metaKey||e.altKey||e.ctrlKey||T(!0)},U=function(){T(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",I),window.addEventListener("mousedown",U)}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(s.a)("tabs__item",o.a.tabItem,{"tabs__item--active":j===t}),style:v?{}:{outline:"none"},key:t,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case c:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(E,e.target,e),I(e)},onFocus:function(){return y(t)},onClick:function(){y(t),T(!1)},onPointerDown:function(){return T(!1)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===j}))[0]))}},98:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}}}]);