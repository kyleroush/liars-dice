(this["webpackJsonpbowl-game"]=this["webpackJsonpbowl-game"]||[]).push([[0],{66:function(e,t,a){e.exports=a(86)},71:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),o=a.n(l),i=(a(71),a(15)),s=a(12),c=a(18),u=a(16),p=a(116),m=a(127),d=a(122),f=a(125),h=a(123),g=a(124),v=a(120),E=a(121),y=a(35),b=a.n(y);b.a.initializeApp({apiKey:"AIzaSyDYIdFDQ3ccmgUHsEJC7EQuPGyX3U0BKoM",authDomain:"reactemoji.firebaseapp.com",databaseURL:"https://reactemoji.firebaseio.com",projectId:"reactemoji",storageBucket:"reactemoji.appspot.com",messagingSenderId:"720480809303",appId:"1:720480809303:web:c82a2de9d2d14ab1a9ce12",measurementId:"G-C64FSH40V9"}),b.a.analytics();var j=b.a.database(),S=(b.a.firestore(),"Liars_Dice"),O={waiting:"waiting",rolling:"rolling",betting:"betting",result:"result"},x=O,k=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).create=function(){var e=document.getElementById("session").value.toUpperCase();""===e&&(e=Math.random().toString(36).substring(2,10).toUpperCase()),j.ref("".concat(S,"/").concat(e)).once("value",(function(t){if(null===t.val()){var a=n.state.config;j.ref("".concat(S,"/").concat(e)).update({session:e,config:a,gameState:O.waiting}),n.props.setAppState({session:e,config:a}),window.history.pushState({},e,"?session=".concat(e))}else console.log("already exisit")}))},n.join=function(){var e=document.getElementById("session").value.toUpperCase(),t=n.state.config;j.ref("".concat(S,"/").concat(e)).once("value",(function(a){null!==a.val()?(n.props.setAppState({session:e,config:t}),window.history.pushState({},e,"?session=".concat(e))):console.log("doesnt exisit")}))},n._render_actions=function(){return r.a.createElement("div",null,r.a.createElement(p.a,{variant:"extended",color:"primary","aria-label":"create",onClick:function(){return n.setState({action:n.action_enum.cerate})}},"Create New Session"),r.a.createElement(p.a,{variant:"extended",color:"primary","aria-label":"join",onClick:function(){return n.setState({action:n.action_enum.join})}},"Join Session"))},n._render_create=function(){var e=n.state.open;return r.a.createElement("div",null,r.a.createElement("h1",null,"create"),r.a.createElement(m.a,{id:"session",label:"Session",variant:"outlined"}),r.a.createElement(v.a,null,r.a.createElement(E.a,{button:!0,onClick:function(){return n.setState({open:!e})}},r.a.createElement(d.a,{primary:"Config"}),e?r.a.createElement(h.a,null):r.a.createElement(g.a,null)),r.a.createElement(f.a,{in:e,timeout:"auto",unmountOnExit:!0},r.a.createElement(v.a,null))),r.a.createElement(p.a,{variant:"extended",color:"primary","aria-label":"create",onClick:n.create},"Create New Session"))},n._render_join=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"join"),r.a.createElement(m.a,{id:"session",label:"Session",variant:"outlined"}),r.a.createElement(p.a,{variant:"extended",color:"primary","aria-label":"create",onClick:n.join},"Join"))},n.state={action:null,config:{startingDice:5},open:!1},n.action_enum={create:"create",join:"join"},n}return Object(s.a)(a,[{key:"render",value:function(){return null===this.state.action?this._render_actions():this.state.action===this.action_enum.cerate?this._render_create():this.state.action===this.action_enum.join?this._render_join():void 0}}]),a}(r.a.Component),C=a(126),N=Object(C.a)((function(e){return{margin:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)}}}));var w=function(e){return r.a.createElement(v.a,null,r.a.createElement(E.a,null,r.a.createElement(m.a,{id:"name",label:"Name",variant:"outlined"}),r.a.createElement(p.a,{variant:"extended",color:"primary","aria-label":"join",className:N().margin,onClick:function(){var t=e.session,a=document.getElementById("name").value.toUpperCase();j.ref("".concat(S,"/").concat(t,"/players/").concat(a)).once("value",(function(n){null===n.val()?(j.ref("".concat(S,"/").concat(t,"/players/").concat(a)).update({player:a,dice:5}),e.setAppState({player:a}),window.history.pushState({},t,"?session=".concat(t,"&player=").concat(a))):console.log("already exist")}))}},"Create player")))},z=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).kickPlayer=function(e){var t=n.props,a=t.session,r=t.players,l=t.order;r[e]={},l=(l=l||[]).filter((function(t){return e!==t})),j.ref("".concat(S,"/").concat(a,"/")).update({players:r,order:l})},n.state={open:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.players,n=t.order;n=n||Object.keys(a);var l=this.state.open;return r.a.createElement(v.a,null,r.a.createElement(E.a,{button:!0,onClick:function(){return e.setState({open:!l})}},r.a.createElement(d.a,{primary:"Players"}),l?r.a.createElement(h.a,null):r.a.createElement(g.a,null)),r.a.createElement(f.a,{in:l,timeout:"auto",unmountOnExit:!0},r.a.createElement(v.a,null,n.map((function(t){return r.a.createElement(E.a,{key:t},r.a.createElement(d.a,null,"player: ",t),r.a.createElement(p.a,{variant:"extended",color:"secondary","aria-label":"join",onClick:function(){return e.kickPlayer(t)}},"Kick Player from Game"))})))))}}]),a}(r.a.Component),_=a(44),D=a(19),I=(a(52),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={currentValue:e.currentValue},n.rollDie=n.rollDie.bind(Object(D.a)(n)),n}return Object(s.a)(a,[{key:"getRandomInt",value:function(){var e=Math.ceil(this.props.sides);return Math.floor(Math.random()*e)+1}},{key:"rollDie",value:function(e){var t=this;this.die.className="die",this.die.offsetWidth;var a=e||this.getRandomInt();this.die.classList.add("roll".concat(a)),setTimeout((function(){t.setState({currentValue:a}),t.props.rollDone(a)}),1e3*this.props.rollTime)}},{key:"getValue",value:function(){return this.state.currentValue}},{key:"render",value:function(){var e=this,t={background:this.props.faceColor,outline:this.props.outline?"1px solid ".concat(this.props.outlineColor):"none",height:"".concat(this.props.dieSize,"px"),position:"absolute",width:"".concat(this.props.dieSize,"px")},a={transform:"rotateX(180deg) translateZ(".concat(this.props.dieSize/2,"px)")},n={transform:"rotateY(-90deg) translateZ(".concat(this.props.dieSize/2,"px)")},l={transform:"rotateX(90deg) translateZ(".concat(this.props.dieSize/2,"px)")},o={transform:"rotateX(-90deg) translateZ(".concat(this.props.dieSize/2,"px)")},i={transform:"rotateY(90deg) translateZ(".concat(this.props.dieSize/2,"px)")},s={transform:"rotateY(0deg) translateZ(".concat(this.props.dieSize/2,"px)")},c=this.props.dieSize/6-2,u={background:this.props.dotColor,height:"".concat(c,"px"),width:"".concat(c,"px")},p={top:"".concat(this.props.dieSize/6,"px"),left:"".concat(this.props.dieSize/6,"px")},m={top:"".concat(this.props.dieSize/6,"px"),right:"".concat(this.props.dieSize/6,"px")},d={top:"".concat(this.props.dieSize/2-c/2,"px"),left:"".concat(this.props.dieSize/6,"px")},f={top:"".concat(this.props.dieSize/2-c/2,"px"),left:"".concat(this.props.dieSize/2-c/2,"px")},h={top:"".concat(this.props.dieSize/2-c/2,"px"),right:"".concat(this.props.dieSize/6,"px")},g={bottom:"".concat(this.props.dieSize/6,"px"),left:"".concat(this.props.dieSize/6,"px")},v={bottom:"".concat(this.props.dieSize/6,"px"),right:"".concat(this.props.dieSize/6,"px")},E={animationDuration:"".concat(this.props.rollTime,"s"),height:"".concat(this.props.dieSize,"px"),width:"".concat(this.props.dieSize,"px")},y={margin:"".concat(this.props.margin,"px"),display:"inline-block"},b="die";return this.state.currentValue&&(b+=" roll".concat(this.state.currentValue)),r.a.createElement("div",{className:"die-container",onClick:this.props.disableIndividual?null:function(){return e.rollDie()},style:y},r.a.createElement("div",{className:b,ref:function(t){return e.die=t},style:E},r.a.createElement("div",{className:"face six",style:Object.assign({},t,s)},r.a.createElement("span",{className:"dot",style:Object.assign({},u,p)}),r.a.createElement("span",{className:"dot",style:Object.assign({},u,m)}),r.a.createElement("span",{className:"dot",style:Object.assign({},u,d)}),r.a.createElement("span",{className:"dot",style:Object.assign({},u,h)}),r.a.createElement("span",{className:"dot",style:Object.assign({},u,g)}),r.a.createElement("span",{className:"dot",style:Object.assign({},u,v)})),r.a.createElement("div",{className:"face one",style:Object.assign({},t,a)},r.a.createElement("span",{className:"dot",style:Object.assign({},u,f)})),r.a.createElement("div",{className:"face five",style:Object.assign({},t,i)},r.a.createElement("span",{className:"dot",style:Object.assign({},u,p)}),r.a.createElement("span",{className:"dot",style:Object.assign({},u,m)}),r.a.createElement("span",{className:"dot",style:Object.assign({},u,f)}),r.a.createElement("span",{className:"dot",style:Object.assign({},u,g)}),r.a.createElement("span",{className:"dot",style:Object.assign({},u,v)})),r.a.createElement("div",{className:"face two",style:Object.assign({},t,n)},r.a.createElement("span",{className:"dot",style:Object.assign({},u,m)}),r.a.createElement("span",{className:"dot",style:Object.assign({},u,g)})),r.a.createElement("div",{className:"face three",style:Object.assign({},t,l)},r.a.createElement("span",{className:"dot",style:Object.assign({},u,m)}),r.a.createElement("span",{className:"dot",style:Object.assign({},u,f)}),r.a.createElement("span",{className:"dot",style:Object.assign({},u,g)})),r.a.createElement("div",{className:"face four",style:Object.assign({},t,o)},r.a.createElement("span",{className:"dot",style:Object.assign({},u,p)}),r.a.createElement("span",{className:"dot",style:Object.assign({},u,m)}),r.a.createElement("span",{className:"dot",style:Object.assign({},u,g)}),r.a.createElement("span",{className:"dot",style:Object.assign({},u,v)}))))}}]),a}(n.Component));I.defaultProps={outline:!1,outlineColor:"#000000",dieSize:60,disableIndividual:!0,margin:15,numDice:4,sides:6,rollTime:2,faceColor:"#FF00AC",dotColor:"#1dff00"};var B=I,V=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e))._renderWaiting=function(){var e=n.state.players;return r.a.createElement("div",null,r.a.createElement("h3",null,"Waiting for game to start"),Object.keys(e).length>1&&r.a.createElement(p.a,{variant:"extended",color:"primary","aria-label":"join",onClick:n.startGame},"Start Game"))},n.shuffle=function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e},n.startGame=function(){var e=n.props.session,t=n.state.players;j.ref("".concat(S,"/").concat(e)).update({up:0,order:n.shuffle(Object.keys(t)),gameState:x.rolling})},n._renderDice=function(){var e=n.props.player,t=n.state,a=t.players,l=t.gameState,o=t.order,i=t.up,s=a[e].nums;return r.a.createElement("div",null,o&&r.a.createElement("div",null,r.a.createElement(_.a,null,"there are ",n.totalNumOfDie()," in the game"),r.a.createElement(_.a,null,o[i%o.length]," is up")),s&&s.map((function(e,t){return r.a.createElement(B,{key:"die-".concat(t),currentValue:e})})),l===x.rolling&&(s||1!==o.filter((function(t){return t===e})).length?n._renderStartBetting():r.a.createElement(p.a,{variant:"extended",color:"primary","aria-label":"join",onClick:n.rollAll},"Roll Dice")))},n.totalNumOfDie=function(){var e=n.state,t=e.players,a=e.order,r=0;return a.forEach((function(e){r+=t[e].dice})),r},n.rollAll=function(){var e=n.props,t=e.session,a=e.player,r=n.state.players[a].dice;j.ref("".concat(S,"/").concat(t,"/players/").concat(a)).update({nums:new Array(r).fill(0).map((function(e){return Math.floor(6*Math.random())+1}))})},n.rollDone=function(e,t){console.log("done",e,t),n.setState({diceTotal:e,rolling:!1})},n._renderStartBetting=function(){var e=n.state,t=e.players;return 0===e.order.filter((function(e){return!t[e].nums})).length?r.a.createElement(p.a,{variant:"extended",color:"primary","aria-label":"join",onClick:n.startBetting},"Start Betting"):r.a.createElement("h4",null,"waiting for everyone to roll")},n.startBetting=function(){var e=n.props.session;j.ref("".concat(S,"/").concat(e)).update({gameState:x.betting})},n._renderBetting=function(){var e=n.state,t=e.up,a=e.order,l=e.bet,o=n.props.player;return r.a.createElement("div",null,!!l&&r.a.createElement(_.a,null,a[t%a.length]," bet is ",l.count,"(the count) ",l.num,"(the number on the die)"),a[t%a.length]===o&&r.a.createElement("div",null,r.a.createElement(m.a,{id:"count",label:"Count",variant:"outlined"}),r.a.createElement(m.a,{id:"num",label:"Die Value",variant:"outlined"}),r.a.createElement(p.a,{variant:"extended",color:"primary",onClick:n.raise},"Bet"),!!l&&r.a.createElement(p.a,{variant:"extended",color:"primary",onClick:n.callLiar},"Call The LIAR")))},n.totalUpDice=function(){var e=n.state,t=e.players,a=e.order,r=new Array(7).fill(0);return a.forEach((function(e){t[e].nums.forEach((function(e){r[e]++}))})),r},n.callLiar=function(){var e,t=n.props.session,a=n.state,r=a.players,l=a.bet,o=a.up,i=a.order,s=n.totalUpDice();e=s[l.num]+s[1]<l.count?i[(o-1)%i.length]:i[o%i.length],i.forEach((function(t){r[t].nums=null,t===e&&r[t].dice--})),j.ref("".concat(S,"/").concat(t)).update({gameState:x.result,loser:e})},n.raise=function(){var e=n.state,t=e.up,a=e.bet,r=n.props.session,l=document.getElementById("count").value,o=document.getElementById("num").value;l&&(l=parseInt(l),o&&(o=parseInt(o),l<1||o<=1||o>6||(void 0===a||a.count<l||a.count===l&&a.num<o)&&j.ref("".concat(S,"/").concat(r)).update({up:t+1,bet:{count:l,num:o}})))},n.nextRound=function(){var e=n.props.session,t=n.state,a=t.order,r=t.players,l=t.loser;a.forEach((function(e){r[e].nums=null,e===l&&(r[e].dice--,0===r[e].dice&&(a=a.filter((function(t){return e!==t}))))}));var o=x.rolling;1===a.length&&(o=x.waiting,a=null),j.ref("".concat(S,"/").concat(e)).update({gameState:o,loser:null,players:r,bet:null,order:a})},n.state={loading:!0},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.session,n=t.player;j.ref("".concat(S,"/").concat(a)).on("value",(function(t){var a=t.val(),r=a.players,l=a.gameState,o=a.up,i=a.order,s=a.bet,c=a.loser;e.setState({loading:!1,player:r[n],gameState:l,players:r,up:o,order:i,bet:s,loser:c})}))}},{key:"_renderResults",value:function(){var e=this.state,t=e.loser,a=(e.order,e.bet),n=this.totalUpDice();return r.a.createElement("div",null,r.a.createElement(_.a,null,"The round is over"),r.a.createElement(_.a,null,t," lost a die on bet ",a.count," ",a.num," as there were ",n[a.num]+n[1]),r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement(E.a,null,r.a.createElement(d.a,null,"dice totals")),r.a.createElement(E.a,null,r.a.createElement(d.a,null,"1 ",n[1])),r.a.createElement(E.a,null,r.a.createElement(d.a,null,"2 ",n[2])),r.a.createElement(E.a,null,r.a.createElement(d.a,null,"3 ",n[3])),r.a.createElement(E.a,null,r.a.createElement(d.a,null,"4 ",n[4])),r.a.createElement(E.a,null,r.a.createElement(d.a,null,"5 ",n[5])),r.a.createElement(E.a,null,r.a.createElement(d.a,null,"6 ",n[6])))),r.a.createElement(p.a,{variant:"extended",color:"primary",onClick:this.nextRound},"Continue"))}},{key:"render",value:function(){var e=this.props.session,t=this.state,a=t.loading,n=t.gameState,l=t.players,o=t.order;return a?r.a.createElement("h2",null,"loading..."):r.a.createElement("div",null,n===x.waiting&&this._renderWaiting(),this._renderDice(),n===x.betting&&this._renderBetting(),n===x.result&&this._renderResults(),r.a.createElement(z,{players:l,order:o,session:e}))}}]),a}(r.a.Component),A=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getQueryVariables=function(){for(var e=window.location.search.substring(1).split("&"),t={},a=0;a<e.length;a++){var n=e[a].split("=");t[n[0]]=n[1]}return t},n.setValue=function(e){n.setState(e)},n.state={session:null,player:null},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.getQueryVariables(),a=t.session,n=t.player;a&&(a=a.toUpperCase(),j.ref("".concat(S,"/").concat(a)).once("value",(function(t){null!==t.val()&&(e.setState({session:a,config:t.val().config}),n&&(n=n.toUpperCase(),j.ref("".concat(S,"/").concat(a,"/players/").concat(n)).once("value",(function(t){null!==t.val()&&e.setState({player:n})}))))})))}},{key:"render",value:function(){var e=this.state,t=e.session,a=e.player;return r.a.createElement("div",null,r.a.createElement("h1",null,"Liars Dice"),t&&r.a.createElement("h2",null,"You ",a&&"(".concat(a,")")," are part of session ",t," "),null==t&&r.a.createElement(k,{setAppState:this.setValue}),null!=t&&null==a&&r.a.createElement(w,{session:t,setAppState:this.setValue}),null!=t&&null!=a&&r.a.createElement(V,{session:t,player:a}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.d0aaa844.chunk.js.map