_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[185],{"+69a":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n("8bpe"),i=n("omng"),r=n("iPwq"),l=n("p0Uh"),o=function(t){return{key:"game-rules-".concat(t.id),me:Object(a.a)(t),crumbs:[Object(i.a)(),Object(r.a)(),Object(l.a)(t)]}}},"2OgW":function(t,e,n){"use strict";n.r(e),n.d(e,"GameRulePage",(function(){return c}));var a=n("BCL4"),i={id:"kingsvalley",blurb:"Everything on how to play King's Valley",slug:"kings_valley",title:"King's Valley rules",mainImage:"/images/games/kingsvalley/kingsvalley_r.png",updated:a.a.updated,relations:[],html:a.a.html},r=n("7Gsj"),l=n("MyA7"),o=n("+69a"),c=Object(l.a)(i),u=Object(o.a)(r.a);c.nav=u,c.title=u.me.title,c.metaDesc=u.me.desc,c.mainImage=i.mainImage;e.default=c},A9gn:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/kings_valley/rules",function(){return n("2OgW")}])},MyA7:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var a=n("ERkP"),i=n.n(a),r=n("+lRJ"),l=n("9Mtu"),o={payloadArticleRelationHeader:"payloadArticleRelationHeader"},c=n("ZxJq"),u=n("nA3o"),s=i.a.createElement,m=function(t){var e=t.article;return s(i.a.Fragment,null,s(c.a,{html:e.html}),e.relations.filter((function(t){return t.listings.length})).map((function(t){return s(a.Fragment,{key:"rel-".concat(t.title)},t.title&&s("div",{className:o.payloadArticleRelationHeader},t.title),s(u.a,{list:t}))})))},g=i.a.createElement,d=function(t){var e=t.article,n=g(l.a,null,g(m,{article:e}));return g(r.a,{title:e.title,top:null,body:n})},f=i.a.createElement,b=function(t){var e=function(){return f(d,{article:t})};return e.mainImage=t.mainImage,e.title=t.title,e.metaDesc=t.blurb,e.displayName="Article"+t.id[0].toUpperCase()+t.id.slice(1),e.nav={key:t.id,crumbs:[],me:{id:t.id,title:t.title,desc:t.blurb,links:[]}},e}},Upb4:function(t,e){t.exports="3978635401139481"},nA3o:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var a=n("ERkP"),i=n.n(a),r={payloadArticleList:"payloadArticleList"},l=n("rePB"),o=n("cg49"),c=n.n(o),u={link:"link",linkNaked:"linkNaked"},s=n("X9hZ"),m=n("Xity"),g=i.a.createElement,d=function(t){var e,n=t.url,i=t.styleMode,r=void 0===i?"none":i,o=t.children,d=t.text,f=Object(m.f)(),b="h"===n[0],p=Object(a.useMemo)((function(){return b?void 0:function(t){t.preventDefault(),f.navTo(n)}}),[n,f]),k="asButton"===r||"asBigButton"===r?g(s.b,{big:"asBigButton"===r,text:d,onClick:p},o):d||o,v=c()((e={},Object(l.a)(e,u.link,"link"===r),Object(l.a)(e,u.linkNaked,"none"===r||"asButton"===r||"asBigButton"===r),e));return"h"===n[0]?g("a",{className:v,href:n,target:"_blank"},k):(Object(a.useEffect)((function(){return f.prefetch(n)}),[]),g("a",{onClick:p,className:v,href:n},k))},f=n("uTtv"),b=i.a.createElement,p=function(t){var e=t.listing,n=t.compositeName,i=e.title,r=e.composite,l=r.x,o=r.y,c=r.ratio,u=e.blurb,s=e.url,g=Object(m.f)(),p=Object(a.useCallback)((function(){return g.navTo(s)}),[g.navTo]),k=b("div",{style:{backgroundImage:"url(/images/composites/".concat(n,")"),backgroundPositionX:-l,backgroundPositionY:-o,height:80*c,backgroundRepeat:"no-repeat"}}),v=b(a.Fragment,null,u.split("\n").map((function(t,e){return b(a.Fragment,{key:e},t,b("br",null))})));return b(d,{url:s,styleMode:"none"},b(f.a,{title:i,pic:k,content:v,onClick:p}))},k=n("Upb4"),v=n.n(k),y=n("zqG+"),h=n("viyc"),E=i.a.createElement,O=function(t,e){return t.sort<e.sort?-1:1},_=function(t,e){return t.sort2<e.sort2?-1:1},j=function(t){var e=t.list,n=t.reverse,i=e.composite,l=e.listings,o=e.sorts,c=Object(a.useState)(0),u=c[0],s=c[1],m=Object(a.useMemo)((function(){var t=l.slice().filter((function(t){return!t.hidden})).sort([O,_][u]);return n&&t.reverse(),t}),[e,u,n]);return E(a.Fragment,null,o&&E(y.a,{noBottomMargin:!0},E(h.a,{current:u,onChange:s,texts:o})),E("div",{className:r.payloadArticleList},m.map((function(t){return E(p,{key:t.url,listing:t,compositeName:i.replace(".png","_"+v.a+".png")})}))))}},viyc:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n("ERkP"),i=n.n(a),r=n("EX7L"),l={buttonBarContainer:"buttonBarContainer"},o=i.a.createElement,c=function(t){var e=t.texts,n=t.current,a=t.onChange,i=e.map((function(t,e){return o(r.a,{key:e,text:t,onClick:function(){return a(e)},active:e===n})}));return o("div",{className:l.buttonBarContainer},i)}}},[["A9gn",1,0,2,3,48]]]);