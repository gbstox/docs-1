(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{115:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(138),c=t(148),s=t(134);a.default=function(e){const{metadata:a,items:t}=e,{allTagsPath:r,name:o,count:m}=a;return n.a.createElement(l.a,{title:`Posts tagged "${o}"`,description:`Blog | Tagged "${o}"`},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--8 col--offset-2"},n.a.createElement("h1",null,m," ",function(e,a){return e>1?a+"s":a}(m,"post"),' tagged with "',o,'"'),n.a.createElement(s.a,{href:r},"View All Tags"),n.a.createElement("div",{className:"margin-vert--xl"},t.map(({content:e})=>n.a.createElement(c.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},n.a.createElement(e,null))))))))}},140:function(e,a,t){"use strict";t(12),t(52),t(141),t(142),t(143);var r=t(0),n=t.n(r),l=t(133),c=t.n(l),s=t(136),o=t(132),m=!1;a.a=function(e){var a=Object(r.useRef)(!1),l=Object(r.useRef)(null),i=Object(s.b)(),u=Object(o.a)().siteConfig,d=(void 0===u?{}:u).baseUrl,h=function(){a.current||(new window.DocSearch({searchData:window.searchData,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var r=d+t.url;document.createElement("a").href=r,i.push(r)}}),a.current=!0)},g=function(){m?h():Promise.all([fetch(d+"search-data.json").then((function(e){return e.json()})),Promise.all([t.e(32),t.e(34)]).then(t.bind(null,146)),t.e(20).then(t.t.bind(null,145,7))]).then((function(e){var a=e[0],t=e[1].default;m=!0,window.searchData=a,window.DocSearch=t,h()}))},E=Object(r.useCallback)((function(a){l.current.contains(a.target)||l.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return n.a.createElement("div",{className:"navbar__search",key:"search-box"},n.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:E,onKeyDown:E,tabIndex:0}),n.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:g,onMouseOver:g,onFocus:E,onBlur:E,ref:l}))}},148:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(133),c=t.n(l),s=t(135),o=t(134),m=t(149),i=t(92),u=t.n(i);const d=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:r,truncated:l,isBlogPostPage:i=!1}=e,{date:h,permalink:g,tags:E,readingTime:p}=r,{author:b,title:f}=t,v=t.author_url||t.authorURL,_=t.author_title||t.authorTitle,N=t.author_image_url||t.authorImageURL;return n.a.createElement("article",{className:i?void 0:"margin-bottom--xl"},(()=>{const e=i?"h1":"h2",a=h.substring(0,10).split("-"),t=a[0],r=d[parseInt(a[1],10)-1],l=parseInt(a[2],10);return n.a.createElement("header",null,n.a.createElement(e,{className:c()("margin-bottom--sm",u.a.blogPostTitle)},i?f:n.a.createElement(o.a,{to:g},f)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:h,className:u.a.blogPostDate},r," ",l,", ",t," ",p&&n.a.createElement(n.a.Fragment,null," \xb7 ",Math.ceil(p)," min read"))),n.a.createElement("div",{className:"avatar margin-vert--md"},N&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:v,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:N,alt:b})),n.a.createElement("div",{className:"avatar__intro"},b&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:v,target:"_blank",rel:"noreferrer noopener"},b)),n.a.createElement("small",{className:"avatar__subtitle"},_)))))})(),n.a.createElement("section",{className:"markdown"},n.a.createElement(s.a,{components:m.a},a)),(E.length>0||l)&&n.a.createElement("footer",{className:"row margin-vert--lg"},E.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),E.map(({label:e,permalink:a})=>n.a.createElement(o.a,{key:a,className:"margin-horiz--sm",to:a},e))),l&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(o.a,{to:r.permalink,"aria-label":"Read more about "+f},n.a.createElement("strong",null,"Read More")))))}}}]);