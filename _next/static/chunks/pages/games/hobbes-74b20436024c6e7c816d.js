_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[165],{BTqA:function(e,t,n){"use strict";n.r(t),n.d(t,"Game",(function(){return x}));var s=n("ERkP"),r=n.n(s),o=n("rePB"),a=n("ODXe"),u=n("cDpP");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var s=0,r=function(){};return{s:r,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){u=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw o}}}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}var m,p,T,v,A={},y={stones:"pawn",kings:"king"},g={stones:[["units","stones"],["units","myunits","stones"],["units","oppunits","stones"]],kings:[["units"],["units","myunits"],["units","oppunits"]]},R={stones:[["units","stones"],["units","oppunits","stones"],["units","myunits","stones"]],kings:[["units"],["units","oppunits"],["units","myunits"]]},d={gameId:"hobbes",commands:{move:{},push:{},pull:{}},iconMap:y,setBoard:function(e){m=Object(u.O)(e,1),Object(u.O)(e,2),v={height:e.height,width:e.width},Object(u.e)(v),p=Object(u.d)(e),T=Object(u.z)(e)},newBattle:function(e,t){var n=Object(u.L)(e),s={units:{},myunits:{},oppunits:{},stones:{}};for(var r in n){var o,a=n[r],i=a.group,c=a.pos,b=a.owner,m=l(R[i][b]);try{for(m.s();!(o=m.n()).done;){s[o.value][c]=a}}catch(p){m.e(p)}finally{m.f()}}return d.action["startTurn_".concat(t,"_1")]({TURN:0,UNITDATA:n,UNITLAYERS:s})},action:{startTurn_basic_1:function(e){for(var t={movetargets:{},vulnerable:{},nearbystonesaftermove:{},nearbystonesnomove:{}},n=e.UNITLAYERS,s={units:n.units,myunits:n.oppunits,oppunits:n.myunits,stones:n.stones},r={},o={marks:{},commands:{}},i={},c=e.TURN+1,b={},T=[[Object.keys(s.myunits)[0],0]],v=s.units;T.length;){var y=T.shift(),g=Object(a.a)(y,2),R=g[0],d=g[1];b[R]=!0;var S,f=d+1,I=l(u.C);try{for(I.s();!(S=I.n()).done;){var h=S.value,N=p[R][h];!N||b[N]||v[N]||(T.push([N,f]),t.movetargets[N]=A),v[N]&&s.oppunits[N]&&(t.vulnerable[N]=A)}}catch(K){I.e(K)}finally{I.f()}}var k,U=p[r.selectmovetarget||Object.keys(s.myunits)[0]],O=l(u.C);try{for(O.s();!(k=O.n()).done;){var j=k.value,_=U[j];_&&s.stones[_]&&(t[i.moved?"nearbystonesaftermove":"nearbystonesnomove"][_]={dir:j})}}catch(K){O.e(K)}finally{O.f()}for(var w=0,C=Object.keys(0===Object.keys(t.vulnerable).length?t.movetargets:t.vulnerable);w<C.length;w++){var F=C[w];o.marks[F]="selectmovetarget_basic_1"}if(0===Object.keys(t.vulnerable).length)for(var x=0,L=Object.keys(i.moved?t.nearbystonesaftermove:1===c?Object.keys(t.nearbystonesnomove).filter((function(e){return e!==Object.keys(m.pie)[0]})).reduce((function(e,t){return e[t]=A,e}),{}):t.nearbystonesnomove);x<L.length;x++){var E=L[x];o.marks[E]="selectstone_basic_1"}return{UNITDATA:e.UNITDATA,LINKS:o,UNITLAYERS:s,ARTIFACTS:t,MARKS:r,TURN:c,TURNVARS:i}},startTurn_basic_2:function(e){for(var t={movetargets:{},vulnerable:{},nearbystonesaftermove:{},nearbystonesnomove:{}},n=e.UNITLAYERS,s={units:n.units,myunits:n.oppunits,oppunits:n.myunits,stones:n.stones},r={},o={marks:{},commands:{}},i={},c={},b=[[Object.keys(s.myunits)[0],0]],m=s.units;b.length;){var T=b.shift(),v=Object(a.a)(T,2),y=v[0],g=v[1];c[y]=!0;var R,d=g+1,S=l(u.C);try{for(S.s();!(R=S.n()).done;){var f=R.value,I=p[y][f];!I||c[I]||m[I]||(b.push([I,d]),t.movetargets[I]=A),m[I]&&s.oppunits[I]&&(t.vulnerable[I]=A)}}catch(L){S.e(L)}finally{S.f()}}var h,N=p[r.selectmovetarget||Object.keys(s.myunits)[0]],k=l(u.C);try{for(k.s();!(h=k.n()).done;){var U=h.value,O=N[U];O&&s.stones[O]&&(t[i.moved?"nearbystonesaftermove":"nearbystonesnomove"][O]={dir:U})}}catch(L){k.e(L)}finally{k.f()}for(var j=0,_=Object.keys(0===Object.keys(t.vulnerable).length?t.movetargets:t.vulnerable);j<_.length;j++){var w=_[j];o.marks[w]="selectmovetarget_basic_2"}if(0===Object.keys(t.vulnerable).length)for(var C=0,F=Object.keys(i.moved?t.nearbystonesaftermove:t.nearbystonesnomove);C<F.length;C++){var x=F[C];o.marks[x]="selectstone_basic_2"}return{UNITDATA:e.UNITDATA,LINKS:o,UNITLAYERS:s,ARTIFACTS:t,MARKS:r,TURN:e.TURN,TURNVARS:i}},selectmovetarget_basic_1:function(e,t){var n,s={nearbystonesaftermove:c({},e.ARTIFACTS.nearbystonesaftermove),nearbystonesnomove:c({},e.ARTIFACTS.nearbystonesnomove),movetargets:e.ARTIFACTS.movetargets,vulnerable:e.ARTIFACTS.vulnerable},r={marks:{},commands:{}},o={selectmovetarget:t},a=e.TURNVARS,i=e.UNITLAYERS,b=p[o.selectmovetarget||Object.keys(i.myunits)[0]],m=l(u.C);try{for(m.s();!(n=m.n()).done;){var T=n.value,v=b[T];v&&i.stones[v]&&(s[a.moved?"nearbystonesaftermove":"nearbystonesnomove"][v]={dir:T})}}catch(A){m.e(A)}finally{m.f()}return r.commands.move="move_basic_1",{LINKS:r,ARTIFACTS:s,UNITLAYERS:i,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:o,TURNVARS:a}},selectstone_basic_1:function(e,t){for(var n={movetargets:e.ARTIFACTS.movetargets,vulnerable:e.ARTIFACTS.vulnerable,nearbystonesaftermove:e.ARTIFACTS.nearbystonesaftermove,nearbystonesnomove:e.ARTIFACTS.nearbystonesnomove,pulltargets:{},pushtargets:{}},s={marks:{},commands:{}},r={selectstone:t},o=e.TURNVARS,a=e.UNITLAYERS,u=a.units,i=T[((o.moved?n.nearbystonesaftermove:n.nearbystonesnomove)[r.selectstone]||{}).dir][5],c=Object.keys(a.myunits)[0],l=0;(c=p[c][i])&&!u[c];)l++,n.pulltargets[c]={dir:i,distance:l};for(var b=a.units,m=((o.moved?n.nearbystonesaftermove:n.nearbystonesnomove)[r.selectstone]||{}).dir,v=r.selectstone,A=0;(v=p[v][m])&&!b[v];)A++,n.pushtargets[v]={dir:m,distance:A};for(var y=0,g=Object.keys(n.pushtargets);y<g.length;y++){var R=g[y];s.marks[R]="selectpushtarget_basic_1"}for(var d=0,S=Object.keys(n.pulltargets);d<S.length;d++){var f=S[d];s.marks[f]="selectpulltarget_basic_1"}return{LINKS:s,ARTIFACTS:n,UNITLAYERS:a,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:r,TURNVARS:o}},selectpushtarget_basic_1:function(e,t){var n={marks:{},commands:{}};return n.commands.push="push_basic_1",{LINKS:n,ARTIFACTS:e.ARTIFACTS,UNITLAYERS:e.UNITLAYERS,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:{selectstone:e.MARKS.selectstone,selectpushtarget:t},TURNVARS:e.TURNVARS}},selectpulltarget_basic_1:function(e,t){var n={marks:{},commands:{}};return n.commands.pull="pull_basic_1",{LINKS:n,ARTIFACTS:e.ARTIFACTS,UNITLAYERS:e.UNITLAYERS,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:{selectstone:e.MARKS.selectstone,selectpulltarget:t},TURNVARS:e.TURNVARS}},selectmovetarget_basic_2:function(e,t){var n,s={nearbystonesaftermove:c({},e.ARTIFACTS.nearbystonesaftermove),nearbystonesnomove:c({},e.ARTIFACTS.nearbystonesnomove),movetargets:e.ARTIFACTS.movetargets,vulnerable:e.ARTIFACTS.vulnerable},r={marks:{},commands:{}},o={selectmovetarget:t},a=e.TURNVARS,i=e.UNITLAYERS,b=p[o.selectmovetarget||Object.keys(i.myunits)[0]],m=l(u.C);try{for(m.s();!(n=m.n()).done;){var T=n.value,v=b[T];v&&i.stones[v]&&(s[a.moved?"nearbystonesaftermove":"nearbystonesnomove"][v]={dir:T})}}catch(A){m.e(A)}finally{m.f()}return r.commands.move="move_basic_2",{LINKS:r,ARTIFACTS:s,UNITLAYERS:i,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:o,TURNVARS:a}},selectstone_basic_2:function(e,t){for(var n={movetargets:e.ARTIFACTS.movetargets,vulnerable:e.ARTIFACTS.vulnerable,nearbystonesaftermove:e.ARTIFACTS.nearbystonesaftermove,nearbystonesnomove:e.ARTIFACTS.nearbystonesnomove,pulltargets:{},pushtargets:{}},s={marks:{},commands:{}},r={selectstone:t},o=e.TURNVARS,a=e.UNITLAYERS,u=a.units,i=T[((o.moved?n.nearbystonesaftermove:n.nearbystonesnomove)[r.selectstone]||{}).dir][5],c=Object.keys(a.myunits)[0],l=0;(c=p[c][i])&&!u[c];)l++,n.pulltargets[c]={dir:i,distance:l};for(var b=a.units,m=((o.moved?n.nearbystonesaftermove:n.nearbystonesnomove)[r.selectstone]||{}).dir,v=r.selectstone,A=0;(v=p[v][m])&&!b[v];)A++,n.pushtargets[v]={dir:m,distance:A};for(var y=0,g=Object.keys(n.pushtargets);y<g.length;y++){var R=g[y];s.marks[R]="selectpushtarget_basic_2"}for(var d=0,S=Object.keys(n.pulltargets);d<S.length;d++){var f=S[d];s.marks[f]="selectpulltarget_basic_2"}return{LINKS:s,ARTIFACTS:n,UNITLAYERS:a,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:r,TURNVARS:o}},selectpushtarget_basic_2:function(e,t){var n={marks:{},commands:{}};return n.commands.push="push_basic_2",{LINKS:n,ARTIFACTS:e.ARTIFACTS,UNITLAYERS:e.UNITLAYERS,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:{selectstone:e.MARKS.selectstone,selectpushtarget:t},TURNVARS:e.TURNVARS}},selectpulltarget_basic_2:function(e,t){var n={marks:{},commands:{}};return n.commands.pull="pull_basic_2",{LINKS:n,ARTIFACTS:e.ARTIFACTS,UNITLAYERS:e.UNITLAYERS,UNITDATA:e.UNITDATA,TURN:e.TURN,MARKS:{selectstone:e.MARKS.selectstone,selectpulltarget:t},TURNVARS:e.TURNVARS}},move_basic_1:function(e){var t={marks:{},commands:{}},n={nearbystonesaftermove:c({},e.ARTIFACTS.nearbystonesaftermove),nearbystonesnomove:c({},e.ARTIFACTS.nearbystonesnomove),movetargets:e.ARTIFACTS.movetargets,vulnerable:e.ARTIFACTS.vulnerable},s=e.UNITLAYERS,r=c({},e.TURNVARS),o=c({},e.UNITDATA),a=e.TURN,i=e.MARKS;delete o[(s.units[i.selectmovetarget]||{}).id];var b=(s.units[Object.keys(s.myunits)[0]]||{}).id;for(var T in b&&(o[b]=c(c({},o[b]),{},{pos:i.selectmovetarget})),r.moved=1,s={units:{},myunits:{},oppunits:{},stones:{}},o){var v,y=o[T],R=y.group,d=y.pos,S=y.owner,f=l(g[R][S]);try{for(f.s();!(v=f.n()).done;){s[v.value][d]=y}}catch(w){f.e(w)}finally{f.f()}}var I,h=p[i.selectmovetarget||Object.keys(s.myunits)[0]],N=l(u.C);try{for(N.s();!(I=N.n()).done;){var k=I.value,U=h[k];U&&s.stones[U]&&(n[r.moved?"nearbystonesaftermove":"nearbystonesnomove"][U]={dir:k})}}catch(w){N.e(w)}finally{N.f()}if(0!==Object.keys(n.vulnerable).length)0===Object.keys(s.oppunits).length?(t.endGame="win",t.endedBy="regicide",t.endMarks=Object.keys(s.myunits)):t.endTurn="startTurn_basic_2";else for(var O=0,j=Object.keys(r.moved?n.nearbystonesaftermove:1===a?Object.keys(n.nearbystonesnomove).filter((function(e){return e!==Object.keys(m.pie)[0]})).reduce((function(e,t){return e[t]=A,e}),{}):n.nearbystonesnomove);O<j.length;O++){var _=j[O];t.marks[_]="selectstone_basic_1"}return{LINKS:t,MARKS:{},ARTIFACTS:n,TURN:a,UNITDATA:o,UNITLAYERS:s,TURNVARS:r}},push_basic_1:function(e){var t={marks:{},commands:{}},n={movetargets:e.ARTIFACTS.movetargets,vulnerable:e.ARTIFACTS.vulnerable,nearbystonesaftermove:e.ARTIFACTS.nearbystonesaftermove,nearbystonesnomove:e.ARTIFACTS.nearbystonesnomove,pulltargets:e.ARTIFACTS.pulltargets,pushtargets:e.ARTIFACTS.pushtargets},s=e.UNITLAYERS,r=c({},e.UNITDATA),o=e.MARKS,a=(s.units[o.selectstone]||{}).id;a&&(r[a]=c(c({},r[a]),{},{pos:o.selectpushtarget}));var u=Object.keys(s.myunits)[0],i=(s.units[u]||{}).id;if(i){for(var b=(n.pushtargets[o.selectpushtarget]||{}).dir,m=(n.pushtargets[o.selectpushtarget]||{}).distance;m--;)u=p[u][b];r[i]=c(c({},r[i]),{},{pos:u})}for(var T in s={units:{},myunits:{},oppunits:{},stones:{}},r){var v,A=r[T],y=A.group,R=A.pos,d=A.owner,S=l(g[y][d]);try{for(S.s();!(v=S.n()).done;){s[v.value][R]=A}}catch(f){S.e(f)}finally{S.f()}}return 0===Object.keys(s.oppunits).length?(t.endGame="win",t.endedBy="regicide",t.endMarks=Object.keys(s.myunits)):t.endTurn="startTurn_basic_2",{LINKS:t,MARKS:{},ARTIFACTS:n,TURN:e.TURN,UNITDATA:r,UNITLAYERS:s,TURNVARS:e.TURNVARS}},pull_basic_1:function(e){var t={marks:{},commands:{}},n={movetargets:e.ARTIFACTS.movetargets,vulnerable:e.ARTIFACTS.vulnerable,nearbystonesaftermove:e.ARTIFACTS.nearbystonesaftermove,nearbystonesnomove:e.ARTIFACTS.nearbystonesnomove,pulltargets:e.ARTIFACTS.pulltargets,pushtargets:e.ARTIFACTS.pushtargets},s=e.UNITLAYERS,r=c({},e.UNITDATA),o=e.MARKS,a=(s.units[Object.keys(s.myunits)[0]]||{}).id;a&&(r[a]=c(c({},r[a]),{},{pos:o.selectpulltarget}));var u=o.selectstone,i=(s.units[u]||{}).id;if(i){for(var b=(n.pulltargets[o.selectpulltarget]||{}).dir,m=(n.pulltargets[o.selectpulltarget]||{}).distance;m--;)u=p[u][b];r[i]=c(c({},r[i]),{},{pos:u})}for(var T in s={units:{},myunits:{},oppunits:{},stones:{}},r){var v,A=r[T],y=A.group,R=A.pos,d=A.owner,S=l(g[y][d]);try{for(S.s();!(v=S.n()).done;){s[v.value][R]=A}}catch(f){S.e(f)}finally{S.f()}}return 0===Object.keys(s.oppunits).length?(t.endGame="win",t.endedBy="regicide",t.endMarks=Object.keys(s.myunits)):t.endTurn="startTurn_basic_2",{LINKS:t,MARKS:{},ARTIFACTS:n,TURN:e.TURN,UNITDATA:r,UNITLAYERS:s,TURNVARS:e.TURNVARS}},move_basic_2:function(e){var t={marks:{},commands:{}},n={nearbystonesaftermove:c({},e.ARTIFACTS.nearbystonesaftermove),nearbystonesnomove:c({},e.ARTIFACTS.nearbystonesnomove),movetargets:e.ARTIFACTS.movetargets,vulnerable:e.ARTIFACTS.vulnerable},s=e.UNITLAYERS,r=c({},e.TURNVARS),o=c({},e.UNITDATA),a=e.MARKS;delete o[(s.units[a.selectmovetarget]||{}).id];var i=(s.units[Object.keys(s.myunits)[0]]||{}).id;for(var b in i&&(o[i]=c(c({},o[i]),{},{pos:a.selectmovetarget})),r.moved=1,s={units:{},myunits:{},oppunits:{},stones:{}},o){var m,T=o[b],v=T.group,A=T.pos,y=T.owner,g=l(R[v][y]);try{for(g.s();!(m=g.n()).done;){s[m.value][A]=T}}catch(O){g.e(O)}finally{g.f()}}var d,S=p[a.selectmovetarget||Object.keys(s.myunits)[0]],f=l(u.C);try{for(f.s();!(d=f.n()).done;){var I=d.value,h=S[I];h&&s.stones[h]&&(n[r.moved?"nearbystonesaftermove":"nearbystonesnomove"][h]={dir:I})}}catch(O){f.e(O)}finally{f.f()}if(0!==Object.keys(n.vulnerable).length)0===Object.keys(s.oppunits).length?(t.endGame="win",t.endedBy="regicide",t.endMarks=Object.keys(s.myunits)):t.endTurn="startTurn_basic_1";else for(var N=0,k=Object.keys(r.moved?n.nearbystonesaftermove:n.nearbystonesnomove);N<k.length;N++){var U=k[N];t.marks[U]="selectstone_basic_2"}return{LINKS:t,MARKS:{},ARTIFACTS:n,TURN:e.TURN,UNITDATA:o,UNITLAYERS:s,TURNVARS:r}},push_basic_2:function(e){var t={marks:{},commands:{}},n={movetargets:e.ARTIFACTS.movetargets,vulnerable:e.ARTIFACTS.vulnerable,nearbystonesaftermove:e.ARTIFACTS.nearbystonesaftermove,nearbystonesnomove:e.ARTIFACTS.nearbystonesnomove,pulltargets:e.ARTIFACTS.pulltargets,pushtargets:e.ARTIFACTS.pushtargets},s=e.UNITLAYERS,r=c({},e.UNITDATA),o=e.MARKS,a=(s.units[o.selectstone]||{}).id;a&&(r[a]=c(c({},r[a]),{},{pos:o.selectpushtarget}));var u=Object.keys(s.myunits)[0],i=(s.units[u]||{}).id;if(i){for(var b=(n.pushtargets[o.selectpushtarget]||{}).dir,m=(n.pushtargets[o.selectpushtarget]||{}).distance;m--;)u=p[u][b];r[i]=c(c({},r[i]),{},{pos:u})}for(var T in s={units:{},myunits:{},oppunits:{},stones:{}},r){var v,A=r[T],y=A.group,g=A.pos,d=A.owner,S=l(R[y][d]);try{for(S.s();!(v=S.n()).done;){s[v.value][g]=A}}catch(f){S.e(f)}finally{S.f()}}return 0===Object.keys(s.oppunits).length?(t.endGame="win",t.endedBy="regicide",t.endMarks=Object.keys(s.myunits)):t.endTurn="startTurn_basic_1",{LINKS:t,MARKS:{},ARTIFACTS:n,TURN:e.TURN,UNITDATA:r,UNITLAYERS:s,TURNVARS:e.TURNVARS}},pull_basic_2:function(e){var t={marks:{},commands:{}},n={movetargets:e.ARTIFACTS.movetargets,vulnerable:e.ARTIFACTS.vulnerable,nearbystonesaftermove:e.ARTIFACTS.nearbystonesaftermove,nearbystonesnomove:e.ARTIFACTS.nearbystonesnomove,pulltargets:e.ARTIFACTS.pulltargets,pushtargets:e.ARTIFACTS.pushtargets},s=e.UNITLAYERS,r=c({},e.UNITDATA),o=e.MARKS,a=(s.units[Object.keys(s.myunits)[0]]||{}).id;a&&(r[a]=c(c({},r[a]),{},{pos:o.selectpulltarget}));var u=o.selectstone,i=(s.units[u]||{}).id;if(i){for(var b=(n.pulltargets[o.selectpulltarget]||{}).dir,m=(n.pulltargets[o.selectpulltarget]||{}).distance;m--;)u=p[u][b];r[i]=c(c({},r[i]),{},{pos:u})}for(var T in s={units:{},myunits:{},oppunits:{},stones:{}},r){var v,A=r[T],y=A.group,g=A.pos,d=A.owner,S=l(R[y][d]);try{for(S.s();!(v=S.n()).done;){s[v.value][g]=A}}catch(f){S.e(f)}finally{S.f()}}return 0===Object.keys(s.oppunits).length?(t.endGame="win",t.endedBy="regicide",t.endMarks=Object.keys(s.myunits)):t.endTurn="startTurn_basic_1",{LINKS:t,MARKS:{},ARTIFACTS:n,TURN:e.TURN,UNITDATA:r,UNITLAYERS:s,TURNVARS:e.TURNVARS}}},instruction:{startTurn_basic_1:function(e){var t=e.ARTIFACTS,n=e.TURN;return 0!==Object.keys(t.vulnerable).length?Object(u.g)({line:[{text:"Since you can reach"},{unittype:["king",2]},{text:"you must"},{select:"select"},{text:"it and move there!"}]}):0===Object.keys(t.nearbystonesnomove).length?Object(u.g)({line:[{text:"Since there's no nearby"},{unittype:["pawn",0]},{text:"you must"},{select:"select"},{text:"where to move"}]}):0===Object.keys(t.movetargets).length?Object(u.g)({line:[{text:"Since you can't move you must"},{select:"select"},{text:"a nearby"},{unittype:["pawn",0]},{text:"to push or pull"},1===n?Object(u.g)({line:[{text:"(but you can't push"},{pos:Object.keys(m.pie)[0]},{text:"on the 1st turn)"}]}):void 0]}):Object(u.g)({line:[{select:"Select"},{text:"where to move"},{unittype:["king",1]},{text:"or a nearby"},{unittype:["pawn",0]},{text:"to push or pull"}]})},move_basic_1:function(e){var t=e.UNITLAYERS;return 0===Object.keys(t.oppunits).length?Object(u.g)({line:[{text:"Since you killed the opponent"},{unittype:["king",2]},{text:"you may immediately"},{endTurn:"end turn"}]}):Object(u.g)({line:[{text:"Now"},{select:"select"},{text:"a nearby"},{unittype:["pawn",0]},{text:"to push or pull"}]})},push_basic_1:function(){return Object(u.l)(1)},pull_basic_1:function(){return Object(u.l)(1)},selectmovetarget_basic_1:function(e){var t=e.MARKS,n=e.UNITLAYERS;return Object(u.g)({line:[{text:"Press"},{command:"move"},{text:"to move"},{unit:[y[(n.units[Object.keys(n.myunits)[0]]||{}).group],(n.units[Object.keys(n.myunits)[0]]||{}).owner,Object.keys(n.myunits)[0]]},{text:"to"},n.units[t.selectmovetarget]?Object(u.g)({line:[{text:"kill"},{unit:[y[(n.units[t.selectmovetarget]||{}).group],(n.units[t.selectmovetarget]||{}).owner,t.selectmovetarget]}]}):{pos:t.selectmovetarget}]})},selectstone_basic_1:function(e){var t=e.MARKS,n=e.UNITLAYERS;return Object(u.g)({line:[{select:"Select"},{text:"where to push or pull"},{unit:[y[(n.units[t.selectstone]||{}).group],(n.units[t.selectstone]||{}).owner,t.selectstone]}]})},selectpushtarget_basic_1:function(e){var t=e.MARKS,n=e.UNITLAYERS;return Object(u.g)({line:[{text:"Press"},{command:"push"},{text:"to make"},{unit:[y[(n.units[Object.keys(n.myunits)[0]]||{}).group],(n.units[Object.keys(n.myunits)[0]]||{}).owner,Object.keys(n.myunits)[0]]},{text:"shove"},{unit:[y[(n.units[t.selectstone]||{}).group],(n.units[t.selectstone]||{}).owner,t.selectstone]},{text:"to"},{pos:t.selectpushtarget}]})},selectpulltarget_basic_1:function(e){var t=e.MARKS,n=e.UNITLAYERS;return Object(u.g)({line:[{text:"Press"},{command:"pull"},{text:"to make"},{unit:[y[(n.units[Object.keys(n.myunits)[0]]||{}).group],(n.units[Object.keys(n.myunits)[0]]||{}).owner,Object.keys(n.myunits)[0]]},{text:"move to"},{pos:t.selectpulltarget},{text:"and drag"},{unit:[y[(n.units[t.selectstone]||{}).group],(n.units[t.selectstone]||{}).owner,t.selectstone]},{text:"with it"}]})},startTurn_basic_2:function(e){var t=e.ARTIFACTS;return 0!==Object.keys(t.vulnerable).length?Object(u.g)({line:[{text:"Since you can reach"},{unittype:["king",1]},{text:"you must"},{select:"select"},{text:"it and move there!"}]}):0===Object.keys(t.nearbystonesnomove).length?Object(u.g)({line:[{text:"Since there's no nearby"},{unittype:["pawn",0]},{text:"you must"},{select:"select"},{text:"where to move"}]}):0===Object.keys(t.movetargets).length?Object(u.g)({line:[{text:"Since you can't move you must"},{select:"select"},{text:"a nearby"},{unittype:["pawn",0]},{text:"to push or pull"}]}):Object(u.g)({line:[{select:"Select"},{text:"where to move"},{unittype:["king",2]},{text:"or a nearby"},{unittype:["pawn",0]},{text:"to push or pull"}]})},move_basic_2:function(e){var t=e.UNITLAYERS;return 0===Object.keys(t.oppunits).length?Object(u.g)({line:[{text:"Since you killed the opponent"},{unittype:["king",1]},{text:"you may immediately"},{endTurn:"end turn"}]}):Object(u.g)({line:[{text:"Now"},{select:"select"},{text:"a nearby"},{unittype:["pawn",0]},{text:"to push or pull"}]})},push_basic_2:function(){return Object(u.l)(2)},pull_basic_2:function(){return Object(u.l)(2)},selectmovetarget_basic_2:function(e){var t=e.MARKS,n=e.UNITLAYERS;return Object(u.g)({line:[{text:"Press"},{command:"move"},{text:"to move"},{unit:[y[(n.units[Object.keys(n.myunits)[0]]||{}).group],(n.units[Object.keys(n.myunits)[0]]||{}).owner,Object.keys(n.myunits)[0]]},{text:"to"},n.units[t.selectmovetarget]?Object(u.g)({line:[{text:"kill"},{unit:[y[(n.units[t.selectmovetarget]||{}).group],(n.units[t.selectmovetarget]||{}).owner,t.selectmovetarget]}]}):{pos:t.selectmovetarget}]})},selectstone_basic_2:function(e){var t=e.MARKS,n=e.UNITLAYERS;return Object(u.g)({line:[{select:"Select"},{text:"where to push or pull"},{unit:[y[(n.units[t.selectstone]||{}).group],(n.units[t.selectstone]||{}).owner,t.selectstone]}]})},selectpushtarget_basic_2:function(e){var t=e.MARKS,n=e.UNITLAYERS;return Object(u.g)({line:[{text:"Press"},{command:"push"},{text:"to make"},{unit:[y[(n.units[Object.keys(n.myunits)[0]]||{}).group],(n.units[Object.keys(n.myunits)[0]]||{}).owner,Object.keys(n.myunits)[0]]},{text:"shove"},{unit:[y[(n.units[t.selectstone]||{}).group],(n.units[t.selectstone]||{}).owner,t.selectstone]},{text:"to"},{pos:t.selectpushtarget}]})},selectpulltarget_basic_2:function(e){var t=e.MARKS,n=e.UNITLAYERS;return Object(u.g)({line:[{text:"Press"},{command:"pull"},{text:"to make"},{unit:[y[(n.units[Object.keys(n.myunits)[0]]||{}).group],(n.units[Object.keys(n.myunits)[0]]||{}).owner,Object.keys(n.myunits)[0]]},{text:"move to"},{pos:t.selectpulltarget},{text:"and drag"},{unit:[y[(n.units[t.selectstone]||{}).group],(n.units[t.selectstone]||{}).owner,t.selectstone]},{text:"with it"}]})}},variants:[{ruleset:"basic",board:"basic",setup:"basic",desc:"regular",code:"r",arr:{setup:{kings:{1:["d2"],2:["b4"]},stones:{0:["a4","b1","b2","b5","c2","c3","d3","d4","d5","e1"]}},marks:[],potentialMarks:["c1","c2","d1","d3","e2","e4","e5"]}}],boards:{basic:{height:5,width:5,terrain:{pie:["c2"]}}},setups:{basic:{stones:{0:[{holerect:["b1","d2","c1"]},{holerect:["b4","d5","c5"]}]},kings:{1:["c1"],2:["c5"]}}}},S=d,f=n("nIA/"),I=Object(f.a)(S),h=n("sXwg"),N=n("Z+Ty"),k=n("hYrM"),U=n("jlMi"),O={api:I,graphics:h.a,meta:N.a,demo:k.a,rules:U.a,imgsToPreload:["/images/games/hobbes/hobbesbook.jpg"]},j=n("krfZ"),_=n("Xity"),w=n("+zLY"),C=n("0IYK"),F=r.a.createElement,x=function(){var e=Object(C.c)(O.api);return F(_.d.Provider,{value:O},F(_.e.Provider,{value:e},F(j.a,null)))};x.domain="hobbes",x.mainImage="/images/games/hobbes/hobbes_active.png",x.metaDesc="Play the abstract board game Hobbes at Chessicals! Push and pull stones to get to the enemy!",x.metaTitle="Hobbes by Dan Troyka",x.title="Hobbes",x.preloadImages=O.imgsToPreload,x.nav=Object(w.a)(O.meta);t.default=x},hYrM:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var s={initial:{unit1:{pos:"b1",id:"unit1",group:"stones",owner:0,icon:"pawn"},unit2:{pos:"b2",id:"unit2",group:"stones",owner:0,icon:"pawn"},unit3:{pos:"c2",id:"unit3",group:"stones",owner:0,icon:"pawn"},unit4:{pos:"d1",id:"unit4",group:"stones",owner:0,icon:"pawn"},unit5:{pos:"d2",id:"unit5",group:"stones",owner:0,icon:"pawn"},unit6:{pos:"b4",id:"unit6",group:"stones",owner:0,icon:"pawn"},unit7:{pos:"b5",id:"unit7",group:"stones",owner:0,icon:"pawn"},unit8:{pos:"c4",id:"unit8",group:"stones",owner:0,icon:"pawn"},unit9:{pos:"d4",id:"unit9",group:"stones",owner:0,icon:"pawn"},unit10:{pos:"d5",id:"unit10",group:"stones",owner:0,icon:"pawn"},unit11:{pos:"c1",id:"unit11",group:"kings",owner:1,icon:"king"},unit12:{pos:"c5",id:"unit12",group:"kings",owner:2,icon:"king"}},patches:[{unit4:{pos:["d1","e1"]},unit11:{pos:["c1","d1"]}},{unit8:{pos:["c4","c3"]},unit12:{pos:["c5","c4"]}},{unit5:{pos:["d2","d3"]},unit11:{pos:["d1","d2"]}},{unit9:{pos:["d4","e4"]},unit12:{pos:["c4","d4"]}},{unit11:{pos:["d2","c1"]}},{unit1:{pos:["b1","a1"]},unit11:{pos:["c1","b1"]}},{unit5:{pos:["d3","d1"]},unit12:{pos:["d4","d2"]}},{unit2:{pos:["b2","b3"]},unit11:{pos:["b1","b2"]}},{unit12:{pos:["d2","c4"]}},{unit6:{pos:["b4","a4"]},unit12:{pos:["c4","b4"]}},{unit3:{pos:["c2","d2"]},unit11:{pos:["b2","c2"]}},{unit2:{pos:["b3","b2"]},unit12:{pos:["b4","b3"]}},{unit8:{pos:["c3","c2"]},unit11:{pos:["c2","c1"]}},{unit2:{pos:["b2","b1"]},unit12:{pos:["b3","b2"]}},{unit8:{pos:["c2","c5"]},unit11:{pos:["c1","c4"]}},{unit11:[{pos:"c4",x:3,y:1,id:"unit11",group:"kings",owner:1,icon:"king"},0,0],unit12:{pos:["b2","c4"]}}],anims:{},endHighlight:["c4"]};t.a=s},wL6E:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/hobbes",function(){return n("BTqA")}])}},[["wL6E",1,0,2,3,4,5,6,7,24]]]);