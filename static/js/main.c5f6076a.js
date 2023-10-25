(()=>{"use strict";var e={9140:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var r=n(885),o=(n(519),n(3426)),i=n(5004),a=n(2812),l=n(9385),s=n(4942),c=n(5945),f=n(1054),d=n(2629);const u=function(e){e.id;var t=e.eventName,n=e.eventTime;e.isHosting,e.isAttending;return(0,d.jsxs)(l.default,{style:g.container,children:[(0,d.jsx)(f.default,{style:g.eventName,children:t}),(0,d.jsx)(f.default,{style:g.eventTime,children:n})]})};var g=a.default.create({eventName:{fontSize:25,flex:2,justifyContent:"flex-start",color:"#fff",margin:5},eventTime:{fontSize:25,flex:1,justifyContent:"flex-end",textAlign:"right",margin:5,color:"#fff"},container:{flex:1,backgroundColor:"#111",flexDirection:"row",width:"80%",justifyContent:"center",alignSelf:"center",height:40,margin:5,borderRadius:5}});const h=function(){return(0,d.jsx)(l.default,{style:x.logoBG,children:(0,d.jsx)(f.default,{style:x.header,children:"Link Up"})})};var x=a.default.create({header:{fontSize:40,textAlign:"center",color:"#fff",fontFamily:"Gill Sans"},logoBG:{borderRadius:20,alignContent:"center",justifyContent:"center",width:150,height:60,backgroundColor:"#e87500"}}),p=n(6264);const j=function(e){var t=e.navigate;return(0,d.jsx)(p.default,{onPress:function(){t("profile")},children:(0,d.jsx)(l.default,{style:v.logoBG,children:(0,d.jsx)(f.default,{style:v.header,children:"Profile"})})})};var v=a.default.create({header:{fontSize:40,textAlign:"center",color:"#000",fontFamily:"Gill Sans"},logoBG:{borderRadius:20,alignContent:"center",justifyContent:"center",width:150,height:60,backgroundColor:"#fff"}});const y=function(e){var t=e.goBack;return(0,d.jsx)(p.default,{onPress:t,children:(0,d.jsx)(l.default,{style:b.logoBG,children:(0,d.jsx)(f.default,{style:b.header,children:"Back"})})})};var b=a.default.create({header:{fontSize:40,textAlign:"center",color:"#000",fontFamily:"Gill Sans"},logoBG:{borderRadius:20,alignContent:"center",justifyContent:"center",width:150,height:60,backgroundColor:"#fff"}});const m=function(e){var t=e.navigate;return(0,d.jsx)(p.default,{onPress:function(){t("profile")},children:(0,d.jsx)(l.default,{style:C.container,children:(0,d.jsx)(f.default,{style:C.text,children:"+"})})})};var C=a.default.create({text:{fontSize:40,textAlign:"center",color:"#fff",fontFamily:"Gill Sans"},container:{borderRadius:50,alignContent:"center",justifyContent:"center",width:60,height:60,backgroundColor:"#e87500"}});function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var O=[{id:"0",eventName:"Soccer Game",eventTime:"11:00am",isHosting:!1,isAttending:!1},{id:"1",eventName:"Basketball Game",eventTime:"1:25pm",isHosting:!1,isAttending:!1},{id:"2",eventName:"Chess Meetup",eventTime:"2:00pm",isHosting:!1,isAttending:!1},{id:"3",eventName:"Esports Club",eventTime:"7:00pm",isHosting:!1,isAttending:!1}];const w=function(e){var t=e.navigate,n=e.goBack;return(0,d.jsxs)(l.default,{style:B.container,children:[(0,d.jsxs)(l.default,{style:B.topContainer,children:[(0,d.jsx)(h,{}),(0,d.jsx)(j,{navigate:t})]}),(0,d.jsx)(l.default,{style:B.listContainer,children:(0,d.jsx)(c.default,{data:O,renderItem:function(e){var t=e.item;return(0,d.jsx)(u,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,s.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t))},keyExtractor:function(e){return e.id},style:B.list})}),(0,d.jsxs)(l.default,{style:B.bottomContainer,children:[(0,d.jsx)(y,{goBack:n}),(0,d.jsx)(m,{navigate:t})]})]})};var B=a.default.create({container:{flex:1,backgroundColor:"#154734",gap:30},topContainer:{flex:1,justifyContent:"center",flexDirection:"row",marginBottom:20,marginTop:80,marginLeft:10,marginRight:10,gap:50},bottomContainer:{flex:1,justifyContent:"center",flexDirection:"row",marginBottom:20,marginTop:80,marginLeft:10,marginRight:10,gap:50},listContainer:{flex:7,gap:30},inputContainer:{gap:5,justifyContent:"flex-start"},input:{borderWidth:1,borderRadius:5,height:30,padding:10,margin:10}});const S=function(e){e.navigate;var t=e.goBack;return(0,d.jsxs)(l.default,{style:T.container,children:[(0,d.jsx)(h,{}),(0,d.jsx)(y,{goBack:t})]})};var T=a.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",margin:100,gap:30},inputContainer:{gap:5,justifyContent:"flex-start"},input:{borderWidth:1,borderRadius:5,height:30,padding:10,margin:10}});const P=function(e){e.navigate;var t=e.goBack;return(0,d.jsxs)(l.default,{style:R.container,children:[(0,d.jsx)(h,{}),(0,d.jsx)(y,{goBack:t})]})};var R=a.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",margin:100,gap:30},inputContainer:{gap:5,justifyContent:"flex-start"},input:{borderWidth:1,borderRadius:5,height:30,padding:10,margin:10}}),G=n(6591);const A=function(e){var t=e.navigate;e.goBack;return(0,d.jsxs)(l.default,{style:z.container,children:[(0,d.jsx)(l.default,{style:z.logoContainer,children:(0,d.jsx)(h,{})}),(0,d.jsx)(l.default,{style:z.inputContainer,children:(0,d.jsx)(G.default,{placeholder:"Email",placeholderTextColor:"#003f5c",style:z.inputText})}),(0,d.jsx)(l.default,{style:z.inputContainer,children:(0,d.jsx)(G.default,{secureTextEntry:!0,placeholder:"Password",placeholderTextColor:"#003f5c",style:z.inputText})}),(0,d.jsx)(p.default,{style:z.button,onPress:function(){t("home")},children:(0,d.jsx)(f.default,{style:z.text,children:"Login"})})]})};var z=a.default.create({container:{flex:1,backgroundColor:"#154734",alignItems:"center",justifyContent:"center",gap:30},logoContainer:{backgroundColor:"#154734",marginBottom:20},inputContainer:{width:"80%",backgroundColor:"#fff",borderRadius:20,height:50,marginBottom:20,justifyContent:"center",padding:20},inputText:{height:50,color:"black"},button:{alignItems:"center",justifyContent:"center",paddingVertical:12,paddingHorizontal:32,borderRadius:4,elevation:3,backgroundColor:"black"},text:{fontSize:16,lineHeight:21,fontWeight:"bold",letterSpacing:.25,color:"white"}});const D=function(e){e.navigate;var t=e.goBack;return(0,d.jsxs)(l.default,{style:E.container,children:[(0,d.jsx)(h,{}),(0,d.jsx)(y,{goBack:t})]})};var E=a.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",margin:100,gap:30},inputContainer:{gap:5,justifyContent:"flex-start"},input:{borderWidth:1,borderRadius:5,height:30,padding:10,margin:10}}),H=[];const N=function(){var e=(0,i.useState)("login"),t=(0,r.default)(e,2),n=t[0],a=t[1],s=function(e){H.push(n),a(e),console.log(H)},c=function(){0===H.length||a(H.pop()),console.log(H)};return(0,d.jsxs)(l.default,{style:I.container,children:["login"===n?(0,d.jsx)(A,{navigate:s,goBack:c}):null,"home"===n?(0,d.jsx)(w,{navigate:s,goBack:c}):null,"host"===n?(0,d.jsx)(S,{navigate:s,goBack:c}):null,"join"===n?(0,d.jsx)(P,{navigate:s,goBack:c}):null,"profile"===n?(0,d.jsx)(D,{navigate:s,goBack:c}):null,(0,d.jsx)(o.default,{style:"auto"})]})};var I=a.default.create({container:{flex:1,backgroundColor:"#fff"}})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,(()=>{var e=[];n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(f=0;f<e.length;f++){for(var[r,o,i]=e[f],l=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(f--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[a,l,s]=r,c=0;if(a.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(s)var f=s(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[418],(()=>n(6271)));r=n.O(r)})();
//# sourceMappingURL=main.c5f6076a.js.map