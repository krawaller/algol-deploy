_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[266],{"+69a":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n("8bpe"),r=n("omng"),i=n("iPwq"),o=n("p0Uh"),c=function(t){return{key:"game-rules-".concat(t.id),me:Object(a.a)(t),crumbs:[Object(r.a)(),Object(i.a)(),Object(o.a)(t)]}}},Adm8:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/tyrannos/rules",function(){return n("l6oE")}])},MyA7:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var a=n("ERkP"),r=n.n(a),i=n("+lRJ"),o=n("9Mtu"),c={payloadArticleRelationHeader:"payloadArticleRelationHeader"},l=n("ZxJq"),u=n("nA3o"),s=r.a.createElement,m=function(t){var e=t.article;return s(r.a.Fragment,null,s(l.a,{html:e.html}),e.relations.filter((function(t){return t.listings.length})).map((function(t){return s(a.Fragment,{key:"rel-".concat(t.title)},t.title&&s("div",{className:c.payloadArticleRelationHeader},t.title),s(u.a,{list:t}))})))},d=r.a.createElement,f=function(t){var e=t.article,n=d(o.a,null,d(m,{article:e}));return d(i.a,{title:e.title,top:null,body:n})},b=r.a.createElement,p=function(t){var e=function(){return b(f,{article:t})};return e.mainImage=t.mainImage,e.title=t.title,e.metaDesc=t.blurb,e.displayName="Article"+t.id[0].toUpperCase()+t.id.slice(1),e.nav={key:t.id,crumbs:[],me:{id:t.id,title:t.title,desc:t.blurb,links:[]}},e}},Upb4:function(t,e){t.exports="3978635401139481"},l6oE:function(t,e,n){"use strict";n.r(e),n.d(e,"GameRulePage",(function(){return l}));var a=n("KBHq"),r={id:"tyrannos",blurb:"Everything on how to play Tyrannos",slug:"tyrannos",title:"Tyrannos rules",mainImage:"/images/games/tyrannos/tyrannos_r.png",updated:a.a.updated,relations:[],html:a.a.html},i=n("32YP"),o=n("MyA7"),c=n("+69a"),l=Object(o.a)(r),u=Object(c.a)(i.a);l.nav=u,l.title=u.me.title,l.metaDesc=u.me.desc,l.mainImage=r.mainImage;e.default=l},nA3o:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var a=n("ERkP"),r=n.n(a),i={payloadArticleList:"payloadArticleList"},o=n("rePB"),c=n("cg49"),l=n.n(c),u={link:"link",linkNaked:"linkNaked"},s=n("X9hZ"),m=n("Xity"),d=r.a.createElement,f=function(t){var e,n=t.url,r=t.styleMode,i=void 0===r?"none":r,c=t.children,f=t.text,b=Object(m.f)(),p="h"===n[0],g=Object(a.useMemo)((function(){return p?void 0:function(t){t.preventDefault(),b.navTo(n)}}),[n,b]),k="asButton"===i||"asBigButton"===i?d(s.b,{big:"asBigButton"===i,text:f,onClick:g},c):f||c,v=l()((e={},Object(o.a)(e,u.link,"link"===i),Object(o.a)(e,u.linkNaked,"none"===i||"asButton"===i||"asBigButton"===i),e));return"h"===n[0]?d("a",{className:v,href:n,target:"_blank"},k):(Object(a.useEffect)((function(){return b.prefetch(n)}),[]),d("a",{onClick:g,className:v,href:n},k))},b=n("uTtv"),p=r.a.createElement,g=function(t){var e=t.listing,n=t.compositeName,r=e.title,i=e.composite,o=i.x,c=i.y,l=i.ratio,u=e.blurb,s=e.url,d=Object(m.f)(),g=Object(a.useCallback)((function(){return d.navTo(s)}),[d.navTo]),k=p("div",{style:{backgroundImage:"url(/images/composites/".concat(n,")"),backgroundPositionX:-o,backgroundPositionY:-c,height:80*l,backgroundRepeat:"no-repeat"}}),v=p(a.Fragment,null,u.split("\n").map((function(t,e){return p(a.Fragment,{key:e},t,p("br",null))})));return p(f,{url:s,styleMode:"none"},p(b.a,{title:r,pic:k,content:v,onClick:g}))},k=n("Upb4"),v=n.n(k),y=n("zqG+"),h=n("viyc"),E=r.a.createElement,N=function(t,e){return t.sort<e.sort?-1:1},j=function(t,e){return t.sort2<e.sort2?-1:1},O=function(t){var e=t.list,n=t.reverse,r=e.composite,o=e.listings,c=e.sorts,l=Object(a.useState)(0),u=l[0],s=l[1],m=Object(a.useMemo)((function(){var t=o.slice().filter((function(t){return!t.hidden})).sort([N,j][u]);return n&&t.reverse(),t}),[e,u,n]);return E(a.Fragment,null,c&&E(y.a,{noBottomMargin:!0},E(h.a,{current:u,onChange:s,texts:c})),E("div",{className:i.payloadArticleList},m.map((function(t){return E(g,{key:t.url,listing:t,compositeName:r.replace(".png","_"+v.a+".png")})}))))}},viyc:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n("ERkP"),r=n.n(a),i=n("EX7L"),o={buttonBarContainer:"buttonBarContainer"},c=r.a.createElement,l=function(t){var e=t.texts,n=t.current,a=t.onChange,r=e.map((function(t,e){return c(i.a,{key:e,text:t,onClick:function(){return a(e)},active:e===n})}));return c("div",{className:o.buttonBarContainer},r)}}},[["Adm8",1,0,2,3,54]]]);