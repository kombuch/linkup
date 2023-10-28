(()=>{"use strict";var e={9383:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var r=n(885),i=(n(519),n(3426)),o=n(5004),a=n(2812),l=n(9385),s=n(4942),c=n(4089),d=n(6264),f=n(1054),u=n(2629);const g=function(e){var t=e.goBack;return(0,u.jsx)(d.default,{onPress:t,children:(0,u.jsx)(l.default,{style:h.logoBG,children:(0,u.jsx)(f.default,{style:h.header,children:"Back"})})})};var h=a.default.create({header:{fontSize:40,textAlign:"center",color:"#000",fontFamily:"Gill Sans"},logoBG:{borderRadius:20,alignContent:"center",justifyContent:"center",width:150,height:60,backgroundColor:"#fff"}});const x=function(e){e.id;var t=e.eventName,n=e.eventTime,r=e.isHosting,i=e.isAttending,o=e.onPress;return r?(0,u.jsx)(d.default,{onPress:o,children:(0,u.jsxs)(l.default,{style:j.containerHosting,children:[(0,u.jsx)(f.default,{style:j.eventName,children:t}),(0,u.jsx)(f.default,{style:j.eventTime,children:n})]})}):i?(0,u.jsx)(d.default,{onPress:o,children:(0,u.jsxs)(l.default,{style:j.containerAttending,children:[(0,u.jsx)(f.default,{style:j.eventName,children:t}),(0,u.jsx)(f.default,{style:j.eventTime,children:n})]})}):(0,u.jsx)(d.default,{onPress:o,children:(0,u.jsxs)(l.default,{style:j.container,children:[(0,u.jsx)(f.default,{style:j.eventName,children:t}),(0,u.jsx)(f.default,{style:j.eventTime,children:n})]})})};var j=a.default.create({eventName:{fontSize:25,flex:2,justifyContent:"flex-start",color:"#fff",margin:5},eventTime:{fontSize:25,flex:1,justifyContent:"flex-end",textAlign:"right",margin:5,color:"#fff"},container:{flex:1,backgroundColor:"#111",flexDirection:"row",width:"80%",justifyContent:"center",alignSelf:"center",height:40,margin:5,borderRadius:5},containerAttending:{flex:1,backgroundColor:"green",flexDirection:"row",width:"80%",justifyContent:"center",alignSelf:"center",height:40,margin:5,borderRadius:5},containerHosting:{flex:1,backgroundColor:"#e87500",flexDirection:"row",width:"80%",justifyContent:"center",alignSelf:"center",height:40,margin:5,borderRadius:5}});const p=function(e){var t=e.navigate;return(0,u.jsx)(d.default,{onPress:function(){t("host")},children:(0,u.jsx)(l.default,{style:y.container,children:(0,u.jsx)(f.default,{style:y.text,children:"+"})})})};var y=a.default.create({text:{fontSize:40,textAlign:"center",color:"#fff",fontFamily:"Gill Sans"},container:{borderRadius:50,alignContent:"center",justifyContent:"center",width:60,height:60,backgroundColor:"#e87500"}});const m=function(){return(0,u.jsx)(l.default,{style:v.logoBG,children:(0,u.jsx)(f.default,{style:v.header,children:"Link Up"})})};var v=a.default.create({header:{fontSize:40,textAlign:"center",color:"#fff",fontFamily:"Gill Sans"},logoBG:{borderRadius:20,alignContent:"center",justifyContent:"center",width:150,height:60,backgroundColor:"#e87500"}}),b=n(7001);const C=function(e){var t=e.navigate;return(0,u.jsx)(d.default,{onPress:function(){t("profile")},children:(0,u.jsx)(l.default,{style:k.logoBG,children:(0,u.jsx)(l.default,{style:k.center,children:(0,u.jsx)(b.default,{style:k.logo,color:"black",width:"60",height:"60"})})})})};var k=a.default.create({header:{fontSize:40,textAlign:"center",color:"#000",fontFamily:"Gill Sans"},center:{alignContent:"center",alignSelf:"center",justifyContent:"center"},logoBG:{borderRadius:60,alignContent:"center",alignSelf:"center",justifyContent:"center",width:60,height:60,backgroundColor:"#e87500"},logo:{alignContent:"center",alignSelf:"center",justifyContent:"center"}});function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var w=[{id:"0",eventName:"Soccer Game",eventTime:"11:00am",eventLocation:"UTD Soccer Field 1",isHosting:!1,isAttending:!1},{id:"1",eventName:"Basketball Game",eventTime:"1:25pm",eventLocation:"UTD Basketball Court 1",isHosting:!0,isAttending:!1},{id:"2",eventName:"Chess Meetup",eventTime:"2:00pm",eventLocation:"ECSS 2.401",isHosting:!1,isAttending:!1},{id:"3",eventName:"Esports Club",eventTime:"7:00pm",eventLocation:"Esports Room",isHosting:!1,isAttending:!0}];const T=function(e){var t=e.navigate,n=e.goBack;return(0,u.jsxs)(l.default,{style:B.container,children:[(0,u.jsxs)(l.default,{style:B.topContainer,children:[(0,u.jsx)(m,{}),(0,u.jsx)(C,{navigate:t})]}),(0,u.jsx)(l.default,{style:B.listContainer,children:(0,u.jsx)(c.default,{data:w,renderItem:function(e){var t=e.item;return(0,u.jsx)(x,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,s.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t))},keyExtractor:function(e){return e.id},style:B.list})}),(0,u.jsxs)(l.default,{style:B.bottomContainer,children:[(0,u.jsx)(g,{goBack:n}),(0,u.jsx)(p,{navigate:t})]})]})};var B=a.default.create({container:{flex:1,backgroundColor:"#154734",gap:30},topContainer:{flex:1,justifyContent:"center",flexDirection:"row",marginBottom:20,marginTop:80,marginLeft:10,marginRight:10,gap:50},bottomContainer:{flex:1,justifyContent:"center",flexDirection:"row",marginBottom:20,marginTop:80,marginLeft:10,marginRight:10,gap:50},listContainer:{flex:7,gap:30},inputContainer:{gap:5,justifyContent:"flex-start"},input:{borderWidth:1,borderRadius:5,height:30,padding:10,margin:10}}),O=n(6591);const P=function(e){var t=e.onPress;return(0,u.jsx)(d.default,{onPress:t,children:(0,u.jsx)(l.default,{style:R.container,children:(0,u.jsx)(f.default,{style:R.header,children:"Create"})})})};var R=a.default.create({header:{fontSize:40,textAlign:"center",color:"#fff",fontFamily:"Gill Sans"},container:{borderRadius:20,alignContent:"center",justifyContent:"center",width:150,height:60,backgroundColor:"#e87500"}});const L=function(e){var t=e.navigate,n=e.goBack,i=new Date,a=i.getHours(),s=i.getMinutes(),c=a<12?"am":"pm",d=a<12?a:a-12,h=(0,o.useState)(""),x=(0,r.default)(h,2),j=x[0],p=x[1],y=(0,o.useState)(d+":"+s+c),m=(0,r.default)(y,2),v=m[0],b=m[1],C=(0,o.useState)(""),k=(0,r.default)(C,2),S=k[0],T=k[1];return(0,u.jsxs)(l.default,{style:A.container,children:[(0,u.jsx)(l.default,{style:A.topContainer,children:(0,u.jsx)(f.default,{style:A.header,children:"Create Event"})}),(0,u.jsxs)(l.default,{style:A.listContainer,children:[(0,u.jsx)(f.default,{style:A.inputLabel,children:"Event Name"}),(0,u.jsx)(l.default,{style:A.inputContainer,children:(0,u.jsx)(O.default,{style:A.inputText,value:j,onChangeText:p})}),(0,u.jsx)(f.default,{style:A.inputLabel,children:"Start Time"}),(0,u.jsx)(l.default,{style:A.inputContainer,children:(0,u.jsx)(O.default,{style:A.inputText,value:v,onChangeText:b,placeholder:"ex: 5:20pm"})}),(0,u.jsx)(f.default,{style:A.inputLabel,children:"Location"}),(0,u.jsx)(l.default,{style:A.inputContainer,children:(0,u.jsx)(O.default,{style:A.inputText,value:S,onChangeText:T})})]}),(0,u.jsxs)(l.default,{style:A.bottomContainer,children:[(0,u.jsx)(g,{goBack:n}),(0,u.jsx)(P,{onPress:function(){!function(e){var t=e.eventName,n=e.eventTime,r=e.eventLocation,i=w.length;w.push({id:i,eventName:t,eventTime:n,eventLocation:r,isHosting:!0,isAttending:!1}),console.log(w)}({eventName:j,eventTime:v,eventLocation:S}),t("home")}})]})]})};var A=a.default.create({header:{fontSize:40,textAlign:"center",color:"#fff",fontFamily:"Gill Sans"},inputLabel:{fontSize:20,textAlign:"left",color:"#fff",fontFamily:"Gill Sans",marginLeft:"14%"},inputContainer:{width:"80%",backgroundColor:"#fff",borderRadius:20,height:50,marginBottom:40,justifyContent:"center",padding:10,alignSelf:"center"},inputText:{height:50,color:"black"},container:{flex:1,backgroundColor:"#154734",gap:30},topContainer:{flex:1,justifyContent:"center",flexDirection:"row",marginBottom:20,marginTop:80,marginLeft:10,marginRight:10,gap:50},bottomContainer:{flex:1,justifyContent:"center",flexDirection:"row",marginBottom:20,marginTop:80,marginLeft:10,marginRight:10,gap:30},listContainer:{flex:7,gap:10},input:{borderWidth:1,borderRadius:5,height:30,padding:10,margin:10}});const G=function(e){e.navigate;var t=e.goBack;return(0,u.jsxs)(l.default,{style:D.container,children:[(0,u.jsx)(m,{}),(0,u.jsx)(g,{goBack:t})]})};var D=a.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",margin:100,gap:30},inputContainer:{gap:5,justifyContent:"flex-start"},input:{borderWidth:1,borderRadius:5,height:30,padding:10,margin:10}});const N=function(e){var t=e.navigate;e.goBack;return(0,u.jsxs)(l.default,{style:z.container,children:[(0,u.jsx)(l.default,{style:z.logoContainer,children:(0,u.jsx)(m,{})}),(0,u.jsx)(l.default,{style:z.inputContainer,children:(0,u.jsx)(O.default,{placeholder:"Email",placeholderTextColor:"#003f5c",style:z.inputText})}),(0,u.jsx)(l.default,{style:z.inputContainer,children:(0,u.jsx)(O.default,{secureTextEntry:!0,placeholder:"Password",placeholderTextColor:"#003f5c",style:z.inputText})}),(0,u.jsx)(d.default,{style:z.button,onPress:function(){t("home")},children:(0,u.jsx)(f.default,{style:z.text,children:"Login"})})]})};var z=a.default.create({container:{flex:1,backgroundColor:"#154734",alignItems:"center",justifyContent:"center",gap:30},logoContainer:{backgroundColor:"#154734",marginBottom:20},inputContainer:{width:"80%",backgroundColor:"#fff",borderRadius:20,height:50,marginBottom:20,justifyContent:"center",padding:10},inputText:{height:50,color:"black"},button:{alignItems:"center",justifyContent:"center",paddingVertical:12,paddingHorizontal:32,borderRadius:4,elevation:3,backgroundColor:"black"},text:{fontSize:16,lineHeight:21,fontWeight:"bold",letterSpacing:.25,color:"white"}});const E=function(e){e.navigate;var t=e.goBack;return(0,u.jsxs)(l.default,{style:H.container,children:[(0,u.jsx)(m,{}),(0,u.jsx)(g,{goBack:t})]})};var H=a.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",margin:100,gap:30},inputContainer:{gap:5,justifyContent:"flex-start"},input:{borderWidth:1,borderRadius:5,height:30,padding:10,margin:10}}),F=[];const I=function(){var e=(0,o.useState)("login"),t=(0,r.default)(e,2),n=t[0],a=t[1],s=function(e){F.push(n),a(e),console.log(F)},c=function(){0===F.length||a(F.pop()),console.log(F)};return(0,u.jsxs)(l.default,{style:M.container,children:["login"===n?(0,u.jsx)(N,{navigate:s,goBack:c}):null,"home"===n?(0,u.jsx)(T,{navigate:s,goBack:c}):null,"host"===n?(0,u.jsx)(L,{navigate:s,goBack:c}):null,"join"===n?(0,u.jsx)(G,{navigate:s,goBack:c}):null,"profile"===n?(0,u.jsx)(E,{navigate:s,goBack:c}):null,(0,u.jsx)(i.default,{style:"auto"})]})};var M=a.default.create({container:{flex:1,backgroundColor:"#fff"}})}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,(()=>{var e=[];n.O=(t,r,i,o)=>{if(!r){var a=1/0;for(d=0;d<e.length;d++){for(var[r,i,o]=e[d],l=!0,s=0;s<r.length;s++)(!1&o||a>=o)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(l=!1,o<a&&(a=o));if(l){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,i,o]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var i,o,[a,l,s]=r,c=0;if(a.some((t=>0!==e[t]))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(s)var d=s(n)}for(t&&t(r);c<a.length;c++)o=a[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[540],(()=>n(6271)));r=n.O(r)})();
//# sourceMappingURL=main.4690c2ff.js.map