_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[255],{E2HA:function(n,t,e){"use strict";e.r(t),e.d(t,"Game",(function(){return D}));var s=e("ERkP"),r=e.n(s),i=e("rePB"),a=e("cDpP");function o(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,s)}return e}function p(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){Object(i.a)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function c(n,t){var e;if("undefined"===typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,t){if(!n)return;if("string"===typeof n)return u(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return u(n,t)}(n))||t&&n&&"number"===typeof n.length){e&&(n=e);var s=0,r=function(){};return{s:r,n:function(){return s>=n.length?{done:!0}:{done:!1,value:n[s++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,o=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return a=n.done,n},e:function(n){o=!0,i=n},f:function(){try{a||null==e.return||e.return()}finally{if(o)throw i}}}}function u(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,s=new Array(t);e<t;e++)s[e]=n[e];return s}var l,b,T,f={},g={kings:"king",pawns:"pawn",bishops:"bishop"},A={kings:[["units","kings"],["units","kings"],["units","kings"]],pawns:[["units","pawns"],["units","pawns"],["units","pawns"]],bishops:[["units","bishops"],["units","bishops"],["units","bishops"]]},d={kings:[["units","kings"],["units","kings"],["units","kings"]],pawns:[["units","pawns"],["units","pawns"],["units","pawns"]],bishops:[["units","bishops"],["units","bishops"],["units","bishops"]]},w={line:{}},h={gameId:"trafficlights",commands:{deploy:{},promote:{}},iconMap:g,setBoard:function(n){Object(a.P)(n,1),Object(a.P)(n,2),T={height:n.height,width:n.width},b=Object(a.e)(T),l=Object(a.d)(n),Object(a.A)(n)},newBattle:function(n,t){var e=Object(a.M)(n),s={units:{},kings:{},pawns:{},bishops:{}};for(var r in e){var i,o=e[r],p=o.group,u=o.pos,l=o.owner,b=c(d[p][l]);try{for(b.s();!(i=b.n()).done;){s[i.value][u]=o}}catch(T){b.e(T)}finally{b.f()}}return h.action["startTurn_".concat(t,"_1")]({NEXTSPAWNID:1,TURN:0,UNITDATA:e,UNITLAYERS:s})},action:{startTurn_basic_1:function(n){for(var t=n.UNITLAYERS,e={units:t.units,kings:t.kings,pawns:t.pawns,bishops:t.bishops},s={marks:{},commands:{}},r=0,i=Object.keys(Object.keys(b.board).filter((function(n){return!e.units.hasOwnProperty(n)})).reduce((function(n,t){return n[t]=f,n}),{}));r<i.length;r++){var a=i[r];s.marks[a]="selectdeploytarget_basic_1"}for(var o=0,c=Object.keys(p(p({},e.pawns),e.bishops));o<c.length;o++){var u=c[o];s.marks[u]="selectunit_basic_1"}return{UNITDATA:n.UNITDATA,LINKS:s,UNITLAYERS:e,ARTIFACTS:w,MARKS:{},TURN:n.TURN+1,NEXTSPAWNID:n.NEXTSPAWNID}},startTurn_basic_2:function(n){for(var t=n.UNITLAYERS,e={units:t.units,kings:t.kings,pawns:t.pawns,bishops:t.bishops},s={marks:{},commands:{}},r=0,i=Object.keys(Object.keys(b.board).filter((function(n){return!e.units.hasOwnProperty(n)})).reduce((function(n,t){return n[t]=f,n}),{}));r<i.length;r++){var a=i[r];s.marks[a]="selectdeploytarget_basic_2"}for(var o=0,c=Object.keys(p(p({},e.pawns),e.bishops));o<c.length;o++){var u=c[o];s.marks[u]="selectunit_basic_2"}return{UNITDATA:n.UNITDATA,LINKS:s,UNITLAYERS:e,ARTIFACTS:w,MARKS:{},TURN:n.TURN,NEXTSPAWNID:n.NEXTSPAWNID}},selectdeploytarget_basic_1:function(n,t){var e={marks:{},commands:{}};return e.commands.deploy="deploy_basic_1",{LINKS:e,ARTIFACTS:n.ARTIFACTS,UNITLAYERS:n.UNITLAYERS,UNITDATA:n.UNITDATA,TURN:n.TURN,MARKS:{selectdeploytarget:t},NEXTSPAWNID:n.NEXTSPAWNID}},selectunit_basic_1:function(n,t){var e={marks:{},commands:{}};return e.commands.promote="promote_basic_1",{LINKS:e,ARTIFACTS:n.ARTIFACTS,UNITLAYERS:n.UNITLAYERS,UNITDATA:n.UNITDATA,TURN:n.TURN,MARKS:{selectunit:t},NEXTSPAWNID:n.NEXTSPAWNID}},selectdeploytarget_basic_2:function(n,t){var e={marks:{},commands:{}};return e.commands.deploy="deploy_basic_2",{LINKS:e,ARTIFACTS:n.ARTIFACTS,UNITLAYERS:n.UNITLAYERS,UNITDATA:n.UNITDATA,TURN:n.TURN,MARKS:{selectdeploytarget:t},NEXTSPAWNID:n.NEXTSPAWNID}},selectunit_basic_2:function(n,t){var e={marks:{},commands:{}};return e.commands.promote="promote_basic_2",{LINKS:e,ARTIFACTS:n.ARTIFACTS,UNITLAYERS:n.UNITLAYERS,UNITDATA:n.UNITDATA,TURN:n.TURN,MARKS:{selectunit:t},NEXTSPAWNID:n.NEXTSPAWNID}},deploy_basic_1:function(n){var t={marks:{},commands:{}},e={line:{}},s=n.UNITLAYERS,r=p({},n.UNITDATA),i=n.NEXTSPAWNID,a=n.MARKS,o="spawn"+i++;for(var u in r[o]={pos:a.selectdeploytarget,id:o,group:"pawns",owner:0},s={units:{},kings:{},pawns:{},bishops:{}},r){var b,T=r[u],g=T.group,d=T.pos,w=T.owner,h=c(A[g][w]);try{for(h.s();!(b=h.n()).done;){s[b.value][d]=T}}catch(U){h.e(U)}finally{h.f()}}for(var N in s.units)for(var m=s[(s.units[N]||{}).group],y=0,I=[1,2,3,4];y<I.length;y++){var S=I[y],v=[],_="faux";for(l.faux[S]=N;(_=l[_][S])&&m[_];)v.push(_);for(var R=v.length,k=0;k<R;k++)_=v[k],R>2&&(e.line[_]=f)}return 0!==Object.keys(e.line).length?(t.endGame="win",t.endedBy="madeline",t.endMarks=Object.keys(e.line)):t.endTurn="startTurn_basic_2",{LINKS:t,MARKS:{},ARTIFACTS:e,TURN:n.TURN,UNITDATA:r,UNITLAYERS:s,NEXTSPAWNID:i}},promote_basic_1:function(n){var t={marks:{},commands:{}},e={line:{}},s=n.UNITLAYERS,r=p({},n.UNITDATA),i=n.MARKS,a=(s.units[i.selectunit]||{}).id;for(var o in a&&(r[a]=p(p({},r[a]),{},{group:s.pawns[i.selectunit]?"bishops":"kings"})),s={units:{},kings:{},pawns:{},bishops:{}},r){var u,b=r[o],T=b.group,g=b.pos,d=b.owner,w=c(A[T][d]);try{for(w.s();!(u=w.n()).done;){s[u.value][g]=b}}catch(k){w.e(k)}finally{w.f()}}for(var h in s.units)for(var N=s[(s.units[h]||{}).group],m=0,y=[1,2,3,4];m<y.length;m++){var I=y[m],S=[],v="faux";for(l.faux[I]=h;(v=l[v][I])&&N[v];)S.push(v);for(var _=S.length,R=0;R<_;R++)v=S[R],_>2&&(e.line[v]=f)}return 0!==Object.keys(e.line).length?(t.endGame="win",t.endedBy="madeline",t.endMarks=Object.keys(e.line)):t.endTurn="startTurn_basic_2",{LINKS:t,MARKS:{},ARTIFACTS:e,TURN:n.TURN,UNITDATA:r,UNITLAYERS:s,NEXTSPAWNID:n.NEXTSPAWNID}},deploy_basic_2:function(n){var t={marks:{},commands:{}},e={line:{}},s=n.UNITLAYERS,r=p({},n.UNITDATA),i=n.NEXTSPAWNID,a=n.MARKS,o="spawn"+i++;for(var u in r[o]={pos:a.selectdeploytarget,id:o,group:"pawns",owner:0},s={units:{},kings:{},pawns:{},bishops:{}},r){var b,T=r[u],g=T.group,A=T.pos,w=T.owner,h=c(d[g][w]);try{for(h.s();!(b=h.n()).done;){s[b.value][A]=T}}catch(U){h.e(U)}finally{h.f()}}for(var N in s.units)for(var m=s[(s.units[N]||{}).group],y=0,I=[1,2,3,4];y<I.length;y++){var S=I[y],v=[],_="faux";for(l.faux[S]=N;(_=l[_][S])&&m[_];)v.push(_);for(var R=v.length,k=0;k<R;k++)_=v[k],R>2&&(e.line[_]=f)}return 0!==Object.keys(e.line).length?(t.endGame="win",t.endedBy="madeline",t.endMarks=Object.keys(e.line)):t.endTurn="startTurn_basic_1",{LINKS:t,MARKS:{},ARTIFACTS:e,TURN:n.TURN,UNITDATA:r,UNITLAYERS:s,NEXTSPAWNID:i}},promote_basic_2:function(n){var t={marks:{},commands:{}},e={line:{}},s=n.UNITLAYERS,r=p({},n.UNITDATA),i=n.MARKS,a=(s.units[i.selectunit]||{}).id;for(var o in a&&(r[a]=p(p({},r[a]),{},{group:s.pawns[i.selectunit]?"bishops":"kings"})),s={units:{},kings:{},pawns:{},bishops:{}},r){var u,b=r[o],T=b.group,g=b.pos,A=b.owner,w=c(d[T][A]);try{for(w.s();!(u=w.n()).done;){s[u.value][g]=b}}catch(k){w.e(k)}finally{w.f()}}for(var h in s.units)for(var N=s[(s.units[h]||{}).group],m=0,y=[1,2,3,4];m<y.length;m++){var I=y[m],S=[],v="faux";for(l.faux[I]=h;(v=l[v][I])&&N[v];)S.push(v);for(var _=S.length,R=0;R<_;R++)v=S[R],_>2&&(e.line[v]=f)}return 0!==Object.keys(e.line).length?(t.endGame="win",t.endedBy="madeline",t.endMarks=Object.keys(e.line)):t.endTurn="startTurn_basic_1",{LINKS:t,MARKS:{},ARTIFACTS:e,TURN:n.TURN,UNITDATA:r,UNITLAYERS:s,NEXTSPAWNID:n.NEXTSPAWNID}}},instruction:{startTurn_basic_1:function(n){var t=n.UNITLAYERS;return Object(a.g)({line:[{select:"Select"},Object(a.g)({line:[12!==Object.keys(t.units).length?Object(a.g)({line:[{text:"empty square to deploy to"}]}):void 0,0!==Object.keys(p(p({},t.bishops),t.pawns)).length?Object(a.g)({line:[{text:"a"},{unittype:["pawn",0]},{text:"or"},{unittype:["bishop",0]},{text:"to promote"}]}):void 0].filter((function(n){return!!n})).reduce((function(n,t,e,s){return n.push(t),e===s.length-2?n.push({text:" or "}):e<s.length-2&&n.push({text:", "}),n}),[])})]})},deploy_basic_1:function(){return Object(a.l)(1)},promote_basic_1:function(){return Object(a.l)(1)},selectdeploytarget_basic_1:function(n){var t=n.MARKS;return Object(a.g)({line:[{text:"Press"},{command:"deploy"},{text:"to spawn"},{unit:["pawn",0,t.selectdeploytarget]}]})},selectunit_basic_1:function(n){var t=n.MARKS,e=n.UNITLAYERS;return Object(a.g)({line:[{text:"Press"},{command:"promote"},{text:"to turn"},{unit:[g[(e.units[t.selectunit]||{}).group],(e.units[t.selectunit]||{}).owner,t.selectunit]},{text:"into"},e.pawns[t.selectunit]?{unittype:["bishop",0]}:{unittype:["king",0]}]})},startTurn_basic_2:function(n){var t=n.UNITLAYERS;return Object(a.g)({line:[{select:"Select"},Object(a.g)({line:[12!==Object.keys(t.units).length?Object(a.g)({line:[{text:"empty square to deploy to"}]}):void 0,0!==Object.keys(p(p({},t.bishops),t.pawns)).length?Object(a.g)({line:[{text:"a"},{unittype:["pawn",0]},{text:"or"},{unittype:["bishop",0]},{text:"to promote"}]}):void 0].filter((function(n){return!!n})).reduce((function(n,t,e,s){return n.push(t),e===s.length-2?n.push({text:" or "}):e<s.length-2&&n.push({text:", "}),n}),[])})]})},deploy_basic_2:function(){return Object(a.l)(2)},promote_basic_2:function(){return Object(a.l)(2)},selectdeploytarget_basic_2:function(n){var t=n.MARKS;return Object(a.g)({line:[{text:"Press"},{command:"deploy"},{text:"to spawn"},{unit:["pawn",0,t.selectdeploytarget]}]})},selectunit_basic_2:function(n){var t=n.MARKS,e=n.UNITLAYERS;return Object(a.g)({line:[{text:"Press"},{command:"promote"},{text:"to turn"},{unit:[g[(e.units[t.selectunit]||{}).group],(e.units[t.selectunit]||{}).owner,t.selectunit]},{text:"into"},e.pawns[t.selectunit]?{unittype:["bishop",0]}:{unittype:["king",0]}]})}},variants:[{ruleset:"basic",board:"basic",setup:"basic",desc:"regular",code:"b",arr:{marks:[],potentialMarks:["a1","b1","c1","d1","a2","b2","d2","a3","b3","c3","d3"],setup:{bishops:{0:["b1","b2"]},pawns:{0:["a2","c3"]},kings:{0:["c2"]}}}}],boards:{basic:{width:4,height:3,terrain:{}}},setups:{basic:{}}},N=h,m=e("nIA/"),y=Object(m.a)(N),I=e("AG3t"),S=e("WIce"),v=e("mkbs"),_=e("ZEDe"),R={api:y,graphics:I.a,meta:S.a,demo:v.a,rules:_.a,imgsToPreload:["/images/games/trafficlights/plushtraffic-half.jpg"]},k=e("krfZ"),U=e("Xity"),O=e("+zLY"),j=e("0IYK"),E=r.a.createElement,D=function(){var n=Object(j.c)(R.api);return E(U.d.Provider,{value:R},E(U.e.Provider,{value:n},E(k.a,null)))};D.domain="trafficlights",D.mainImage="/images/games/trafficlights/trafficlights_active.png",D.metaDesc="Play the abstract board game Traffic Lights at Chessicals! Promote neutral units into a line!",D.metaTitle="Traffic Lights by Alan Parr",D.title="Traffic Lights",D.preloadImages=R.imgsToPreload,D.nav=Object(O.a)(R.meta);t.default=D},mkbs:function(n,t,e){"use strict";e.d(t,"b",(function(){return s}));var s={initial:{},patches:[{spawn1:[{pos:"b2",id:"spawn1",group:"pawns",owner:0,icon:"pawn"}]},{spawn1:{group:["pawns","bishops"],icon:["pawn","bishop"]}},{spawn2:[{pos:"c2",id:"spawn2",group:"pawns",owner:0,icon:"pawn"}]},{spawn3:[{pos:"d2",id:"spawn3",group:"pawns",owner:0,icon:"pawn"}]},{spawn1:{group:["bishops","kings"],icon:["bishop","king"]}},{spawn2:{group:["pawns","bishops"],icon:["pawn","bishop"]}},{spawn4:[{pos:"b1",id:"spawn4",group:"pawns",owner:0,icon:"pawn"}]},{spawn3:{group:["pawns","bishops"],icon:["pawn","bishop"]}},{spawn5:[{pos:"d3",id:"spawn5",group:"pawns",owner:0,icon:"pawn"}]},{spawn6:[{pos:"a2",id:"spawn6",group:"pawns",owner:0,icon:"pawn"}]},{spawn6:{group:["pawns","bishops"],icon:["pawn","bishop"]}},{spawn7:[{pos:"a3",id:"spawn7",group:"pawns",owner:0,icon:"pawn"}]},{spawn7:{group:["pawns","bishops"],icon:["pawn","bishop"]}},{spawn7:{group:["bishops","kings"],icon:["bishop","king"]}},{spawn8:[{pos:"d1",id:"spawn8",group:"pawns",owner:0,icon:"pawn"}]},{spawn9:[{pos:"c1",id:"spawn9",group:"pawns",owner:0,icon:"pawn"}]}],anims:{},endHighlight:["b1","c1","d1"]};t.a=s},tlSl:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/traffic_lights",function(){return e("E2HA")}])}},[["tlSl",1,0,2,3,4,5,6,7,22]]]);