(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(n,t,e){n.exports=e(82)},82:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),a=e(14),i=e(11),c=e.n(i),u=e(2),s=e(1);function l(){var n=Object(u.a)(["\n    *{\n        box-sizing:border-box\n    }\n    html,body{\n        font-family:Lato,Helvetica-Neue,Helvetica,Arial,sans-serif;\n        width:100vw;\n        overflow-x:hidden;\n        margin:0;\n        padding:0;\n    }\n    ul{\n        list-style:none;\n        padding:0;\n    }\n    a{\n        text-decoration:none,\n        &:visit\n    }\n"]);return l=function(){return n},n}var h=Object(s.b)(l()),d=e(4),f=e(7),p={SET_THEME:"".concat("@hnReader/app","/SET_THEME")},g=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{theme:"dark"},t=arguments.length>1?arguments[1]:void 0,e=t.type,r=t.payload;switch(e){case p.SET_THEME:return Object(f.a)({},n,r);default:return n}},S=e(15),E=e(12),m=e(13),v=e(33),b=e.n(v),y=Object({NODE_ENV:"production",PUBLIC_URL:"/hackernews"}).URL||"http://localhost:3000",T=2e4,w={"Content-Type":"application/json",Accept:"Application/Json"},_=new(function(){function n(t){var e=t.baseURL,r=void 0===e?y:e,o=t.timeout,a=void 0===o?T:o,i=t.headers,c=void 0===i?w:i,u=t.auth;Object(E.a)(this,n);var s=b.a.create({baseURL:r,timeout:a,headers:c,auth:u});s.interceptors.response.use(this.handleSuccess,this.handleError),this.client=s}return Object(m.a)(n,[{key:"handleSuccess",value:function(n){return n}},{key:"handleError",value:function(n){return Promise.reject(n)}},{key:"get",value:function(n){return this.client.get(n).then(function(n){return n.data})}},{key:"post",value:function(n,t){return this.client.post(n,t).then(function(n){return n.data})}},{key:"put",value:function(n,t){return this.client.put(n,t).then(function(n){return n.data})}},{key:"patch",value:function(n,t){return this.client.patch(n,t).then(function(n){return n.data})}},{key:"delete",value:function(n,t){return this.client.delete(n,t).then(function(n){return n.data})}}]),n}())({baseURL:"https://hacker-news.firebaseio.com/v0"}),O={};O.getTopStoryIds=function(){return _.get("/topstories".concat(".json?print=pretty"))},O.getStory=function(n){return _.get("/item/".concat(n).concat(".json?print=pretty"))},O.getStoriesByPage=function(n,t){var e=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{begin:t*n,end:(t+1)*n}}(20,t),r=function(n){var t=n.begin,e=n.end;return n.items.slice(t,e)}({begin:e.begin,end:e.end,items:n}).map(function(n){return O.getStory(n)});return Promise.all(r)};var I=O,R="@hnReader/story",C={FETCH_STORY_IDS_REQUEST:"".concat(R,"/FETCH_STORY_IDS_REQUEST"),FETCH_STORY_IDS_SUCCESS:"".concat(R,"/FETCH_STORY_IDS_SUCCESS"),FETCH_STORY_IDS_FAILURE:"".concat(R,"/FETCH_STORY_IDS_FAILURE"),FETCH_STORIES_REQUEST:"".concat(R,"/FETCH_STORIES_REQUEST"),FETCH_STORIES_SUCCESS:"".concat(R,"/FETCH_STORIES_SUCCESS"),FETCH_STORIES_FAIURE:"".concat(R,"/FETCH_STORIES_FAIURE")},x=function(n,t){return{type:n,payload:t}},j={fetchStoryIds:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return t(x(C.FETCH_STORY_IDS_REQUEST,n)),I.getTopStoryIds().then(function(n){return t(j.fetchStories({storyIds:n,page:0})),n}).catch(function(n){return t(x(C.FETCH_STORY_IDS_FAILURE,n))})}},fetchStories:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var e=n.storyIds,r=n.page;return t(x(C.FETCH_STORIES_REQUEST,n)),I.getStoriesByPage(e,r).then(function(n){return t(x(C.FETCH_STORIES_SUCCESS,{stories:n,storyIds:e}))}).catch(function(n){return t(x(C.FETCH_STORIES_FAIURE,n))})}}},k=j,F=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{storyIds:[],stories:[],page:0,isFetching:!1,error:""},t=arguments.length>1?arguments[1]:void 0,e=t.type,r=t.payload;switch(e){case C.FETCH_STORY_IDS_REQUEST:case C.FETCH_STORIES_REQUEST:return Object(f.a)({},n,{isFetching:!0});case C.FETCH_STORY_IDS_SUCCESS:return Object(f.a)({},n,r);case C.FETCH_STORIES_SUCCESS:return Object(f.a)({},n,{storyIds:Object(S.a)(r.storyIds),stories:[].concat(Object(S.a)(n.stories),Object(S.a)(r.stories)),isFetching:!1,page:n.page+1});default:return n}},U=Object(d.c)({app:g,story:F}),H=e(34),A=(e(35),[]);A.push(H.a);var D=Object(d.d)(d.a.apply(void 0,A)),L=function(n){return Object(d.e)(U,n,D)},Y=e(43),P=e(36),Q=e(44),M=e(37),W=e.n(M),N=e(38),z=e.n(N),B=e(39),J=e(40),V=e.n(J),$=function(n){var t="";return n&&(n.includes("//")||(n="http://".concat(n)),t=V.a.parse(n).hostname),t.includes("www.")&&(t=t.split("www.")[1]),t},q="https://news.ycombinator.com",G="".concat(q,"/item?id="),K="".concat(q,"/user?id="),X=function(n){var t=n.url,e=n.id,r="".concat(G).concat(e);return t||r};function Z(){var n=Object(u.a)(["\n    color:",";\n    &:visited{\n        color:","\n    }\n"]);return Z=function(){return n},n}function nn(){var n=Object(u.a)(["\n    font-size:14px;\n    color:",";\n"]);return nn=function(){return n},n}function tn(){var n=Object(u.a)(["\n    color:",";\n    display:flex;\n    width:100%;\n    height:100%;\n    flex-direction:row;\n    align-items:center;\n    text-decoration:none;\n"]);return tn=function(){return n},n}function en(){var n=Object(u.a)(["\n    color:",";\n    font-size:12px;\n"]);return en=function(){return n},n}function rn(){var n=Object(u.a)(["\n    color:",";\n    margin-top:0;\n    margin-bottom:6px;\n    font-weight:400;\n    font-size:16px;\n    letter-spacing:0.4px;    \n"]);return rn=function(){return n},n}function on(){var n=Object(u.a)(["\n    border-bottom:1px solid ",";\n    padding:14px 24px;\n    &:last-child{\n        border-bottom:none;\n    }\n"]);return on=function(){return n},n}var an=s.c.li(on(),function(n){return n.theme.border}),cn=s.c.h3(rn(),function(n){return n.theme.text}),un=s.c.span(en(),function(n){return n.theme.textSecondary}),sn=s.c.a(tn(),function(n){return n.theme.text}),ln=s.c.div(nn(),function(n){return n.theme.textSecondary}),hn=s.c.a(Z(),function(n){return n.theme.textSecondary},function(n){return n.theme.textSecondary}),dn="nofollow noreferrer noopener",fn=function(n){var t=n.by,e=n.kids,r=void 0===e?[]:e,a=n.score,i=n.url,c=n.title,u=n.id,s=(n.type,n.time),l=$(i)||"news.ycombine.com",h=X({url:i,id:u}),d="".concat(G).concat(u),f="".concat(K).concat(t);return o.a.createElement(an,null,o.a.createElement(sn,{href:h,rel:dn,target:"_blank"},o.a.createElement(cn,null,c," ",o.a.createElement(un,null,l))),o.a.createElement(ln,null,a," points by"," ",o.a.createElement(hn,{href:f,rel:dn,target:"_blank"},t)," ",Object(B.format)(new Date(1e3*s).toString())," "," | ",o.a.createElement(hn,{href:d,rel:dn,target:"_blank"},r.length," Comments")))};function pn(){var n=Object(u.a)(["\n    background-color:",";\n    border-radius:4px;\n    margin-left:auto;\n    margin-right:auto;\n    margin-bottom:20px;\n    display:flex;\n    flex-direction:column;\n"]);return pn=function(){return n},n}var gn=s.c.ul(pn(),function(n){return n.theme.backgroundSecondary}),Sn=function(n){var t=n.stories;return o.a.createElement(gn,null,t.map(function(n){return o.a.createElement(fn,Object.assign({key:n.id},n))}))},En={background:"#272727",backgroundSecondary:"#393C3E",text:"#bfbebe",textSecondary:"#848886",border:"#272727"},mn={background:"#EAEAEA",backgroundSecondary:"#F8F8F8",text:"#848886",textSecondary:"#aaaaaa",border:"#EAEAEA"};function vn(){var n=Object(u.a)(["\n    color:",";\n    font=size:20px;\n    font-weight:300;\n    margin-top:24px;\n    margin-bottom:26px;\n"]);return vn=function(){return n},n}function bn(){var n=Object(u.a)(["\n    width:85%;\n    margin-left:auto;\n    margin-right:auto;\n    height:100%;\n    overflow:hidden;\n    padding-bottom:200px;\n    ","{\n        width:95%;\n    }\n"]);return bn=function(){return n},n}var yn=s.c.div(bn(),"@media only screen and (max-width:768px)"),Tn=s.c.h1(vn(),function(n){return n.theme.textSecondary});function wn(){var n=Object(u.a)(["\n    text-align:center;\n    span{\n        color:",";\n        display:inline-block;\n        margin-left:4px;\n        margin-right:4px;\n        line-height:0.1;\n        animation-name:",";\n        animation-duration:1s;\n        animation-iteration-count:infinite;\n        animation-fill-mode:both;\n    }\n    span:nth-child(2){\n        animation-delay:0.2s;\n    }\n    span:nth-child(3){\n        animation-delay:0.4s;\n    }\n"]);return wn=function(){return n},n}function _n(){var n=Object(u.a)(["\n    /*\n        At the start of the animation the dot\n        has on opacity of 0.2\n    */\n   0%{\n        opacity:0.2;\n   }\n   20%{\n        opacity:1;\n   }\n   100%{\n        opacity:0.2;\n   }\n"]);return _n=function(){return n},n}var On=Object(s.d)(_n()),In=s.c.div(wn(),function(n){return n.theme.textSecondary},On),Rn=function(){return o.a.createElement(In,null,o.a.createElement("span",null,"."),o.a.createElement("span",null,"."),o.a.createElement("span",null,"."))},Cn=function(n){function t(n){var e;return Object(E.a)(this,t),(e=Object(Y.a)(this,Object(P.a)(t).call(this,n))).fetchStories=function(){var n=e.props,t=n.storyIds,r=n.page,o=n.fetchStories;n.isFetching||o({storyIds:t,page:r})},e.handelSwitchTheme=function(n){e.setState({lightTheme:n})},e.state={lightTheme:!1},e}return Object(Q.a)(t,n),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStoriesFirstPage()}},{key:"render",value:function(){var n=this.props,t=n.stories,e=n.hasMoreStories;return o.a.createElement(s.a,{theme:this.state.lightTheme?mn:En},o.a.createElement("div",null,o.a.createElement(yn,null,o.a.createElement(Tn,null,"Header News Reader"),o.a.createElement("p",null,"Theme : ",this.state.lightTheme?"Light":"Dark",o.a.createElement(z.a,{checked:this.state.lightTheme,height:20,width:48,onChange:this.handelSwitchTheme})),o.a.createElement(W.a,{dataLength:t.length,next:this.fetchStories,hasMore:e,loader:o.a.createElement(Rn,null),style:{height:"100%",overflow:"visible"}},o.a.createElement(Sn,{stories:t})))))}}]),t}(r.Component),xn=e(41),jn=Object(xn.a)(function(n){return n.story.storyIds},function(n){return n.story.stories},function(n,t){return n.length>t.length}),kn=Object(a.b)(function(n){return{stories:n.story.stories,page:n.story.page,storyIds:n.story.storyIds,isFetching:n.story.isFetching,hasMoreStories:jn(n)}},function(n){return{fetchStoriesFirstPage:function(){return n(k.fetchStoryIds())},fetchStories:function(t){var e=t.storyIds,r=t.page;return n(k.fetchStories({storyIds:e,page:r}))}}})(Cn),Fn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Un(n,t){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var e=n.installing;null!=e&&(e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(n)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(n)))})}}).catch(function(n){console.error("Error during service worker registration:",n)})}!function(){var n=L({});c.a.render(o.a.createElement(a.a,{store:n},o.a.createElement("div",null,o.a.createElement(h,null),o.a.createElement(kn,null))),document.getElementById("root"))}(),function(n){if("serviceWorker"in navigator){if(new URL("/hackernews",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/hackernews","/service-worker.js");Fn?(function(n,t){fetch(n).then(function(e){var r=e.headers.get("content-type");404===e.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):Un(n,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):Un(t,n)})}}()}},[[45,1,2]]]);
//# sourceMappingURL=main.c3a090ba.chunk.js.map