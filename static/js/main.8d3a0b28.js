(()=>{"use strict";var e={8225:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ve});var r=n(4942),i=n(885),a=n(3426),o=n(5004),l=n(6792),u=n(9385),s=n(6591),d=n(1054),f=n(5326),c=n(2629);const g=function(){return(0,c.jsx)(u.default,{style:h.logoBG,children:(0,c.jsx)(d.default,{style:h.header,children:"Link Up"})})};var h=l.default.create({header:{fontSize:35,textAlign:"center",color:"#fff",fontFamily:"Gill Sans"},logoBG:{borderRadius:20,alignContent:"center",justifyContent:"center",width:150,height:60,backgroundColor:"#e87500"}}),m=n(5861),x=n(519),y=function(){var e=(0,m.default)((function*(){try{var e=yield x.default.getItem("users");return console.log(`usersJson: ${e}`),null!=e?(console.log("non-Empty users"),JSON.parse(e)):(console.log("Empty users"),{})}catch(t){}return{}}));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,m.default)((function*(e,t,n){try{var r=yield y();console.log(`usersObj: ${JSON.stringify(r)}`);for(var i={username:e,password:n},a=Object.keys(r),o=0;o<a.length;o+=1){var l=a[o];if(console.log(`user: ${r[l].username} vs ${e}`),r[l].username===e)return 1;if(console.log(`user: ${l} vs ${t}`),l===t)return 2}return r[t]=i,yield x.default.setItem("users",JSON.stringify(r)),yield x.default.setItem("currentUser",t),0}catch(u){return console.log(u),3}}));return function(t,n,r){return e.apply(this,arguments)}}(),v=function(){var e=(0,m.default)((function*(){try{var e=yield j();if(null!==e){var t=yield x.default.getItem("users"),n=JSON.parse(t)[e].username;if(null!==n)return console.log(`getUsername: ${n}`),n}}catch(r){}return null}));return function(){return e.apply(this,arguments)}}(),j=function(){var e=(0,m.default)((function*(){try{var e=yield x.default.getItem("currentUser");if(null!==e)return console.log(`getCurrentEmail: ${e}`),e}catch(t){}return null}));return function(){return e.apply(this,arguments)}}(),b=function(){var e=(0,m.default)((function*(){try{var e=yield x.default.getItem("currentUser");if(console.log(`getPassEmail: ${e}`),null!==e){var t=yield x.default.getItem("users"),n=JSON.parse(t)[e].password;if(console.log(`getPass: ${n}`),null!==n)return n}}catch(r){console.log(r)}return null}));return function(){return e.apply(this,arguments)}}(),C=function(){var e=(0,m.default)((function*(e,t){try{var n=yield x.default.getItem("users");if(JSON.parse(n)[e].password===t)return x.default.setItem("currentUser",e),!0}catch(r){}return!1}));return function(t,n){return e.apply(this,arguments)}}(),T=function(){var e=(0,m.default)((function*(){try{var e=yield x.default.getItem("events");return console.log(`eventjson: ${e}`),null!=e?JSON.parse(e,(function(e,t){return"string"===typeof t&&/^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.test(t)?new Date(t):t})):[]}catch(t){}return[]}));return function(){return e.apply(this,arguments)}}(),S=function(){var e=(0,m.default)((function*(e,t,n,r){try{var i=yield T();if(null==i)return!1;var a=yield v();i.push({id:i.length,eventName:e,eventTime:t,minuteDuration:n,creationTime:new Date,eventLocation:r,usersAttending:[a],ratings:{},deleted:!1,hostUsername:a});var o=JSON.stringify(i);return yield x.default.setItem("events",o),!0}catch(l){}return!1}));return function(t,n,r,i){return e.apply(this,arguments)}}(),w=(function(){var e=(0,m.default)((function*(e){try{var t=yield T();if(null==t)return!1;t[e].deleted=!0;var n=JSON.stringify(t);return yield x.default.setItem("events",n),!0}catch(r){}return!1}))}(),function(){var e=(0,m.default)((function*(e){try{var t=yield T();if(null==t)return!1;t[e].usersAttending.push(yield v());var n=JSON.stringify(t);return yield x.default.setItem("events",n),!0}catch(r){}return!1}));return function(t){return e.apply(this,arguments)}}()),O=function(){var e=(0,m.default)((function*(e,t){try{var n=yield T();if(null==n)return!1;n[e].ratings[yield v()]=t;var r=JSON.stringify(n);return yield x.default.setItem("events",r),!0}catch(i){}return!1}));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=(0,m.default)((function*(e){try{var t=yield T(),n=0,r=0;t.forEach((function(t){t.hostUsername===e&&Object.keys(t.ratings).forEach((function(e){r+=1,n+=t.ratings[e],console.log(`${t.eventName} hosted by ${t.hostUsername} rated: ${t.ratings[e]} by ${e}`)}))}));var i=`rating:${e}`;0===r?yield x.default.setItem(i,"Host has no ratings yet"):1===r?yield x.default.setItem(i,`Host is rated ${Math.round(n/r*10)/10} / 5 from ${r} rating`):yield x.default.setItem(i,`Host is rated ${Math.round(n/r*10)/10} / 5 from ${r} ratings`)}catch(a){}}));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=(0,m.default)((function*(e){try{yield k(e);var t=`rating:${e}`,n=yield x.default.getItem(t);if(null!==n)return n}catch(r){}return"no ratings yet"}));return function(t){return e.apply(this,arguments)}}(),R=n(5288),P=n(7129),$=n(9294);const B=function(e){var t=e.message,n=e.modalVisible,r=e.setModalVisible;return(0,c.jsx)($.default,{animationType:"none",transparent:!0,visible:n,onRequestClose:function(){r(!1)},children:(0,c.jsx)(R.default,{style:{flex:1},activeOpacity:1,onPress:function(){r(!1)},children:(0,c.jsx)(u.default,{style:A.centeredView,children:(0,c.jsx)(P.default,{children:(0,c.jsxs)(u.default,{style:A.modalView,children:[(0,c.jsx)(d.default,{style:A.messageText,children:t}),(0,c.jsx)(f.default,{style:A.buttonClose,onPress:function(){return r(!1)},children:(0,c.jsx)(d.default,{style:A.buttonText,children:"Close"})})]})})})})})};var A=l.default.create({modalView:{margin:20,backgroundColor:"#fff",borderColor:"#e87500",borderWidth:2,borderRadius:10,minWidth:280,padding:20,alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:4,elevation:5},centeredView:{flex:1,justifyContent:"center",alignItems:"center"},buttonText:{fontSize:15},buttonClose:{borderRadius:25,padding:10,backgroundColor:"#aaa"},messageText:{marginTop:5,marginBottom:25,fontSize:20,fontFamily:"Futura",textAlign:"center"}});const E=function(e){var t=e.navigate,n=e.dest;return(0,c.jsx)(f.default,{onPress:function(){return t(n)},children:(0,c.jsx)(u.default,{style:L.logoBG,children:(0,c.jsx)(d.default,{style:L.header,children:"Back"})})})};var L=l.default.create({header:{fontSize:25,textAlign:"center",color:"#000",fontFamily:"Gill Sans"},logoBG:{borderRadius:40,alignContent:"center",justifyContent:"center",width:140,height:60,backgroundColor:"#fff"}});const D=function(e){var t=e.navigate,n=(0,o.useState)(""),r=(0,i.default)(n,2),a=r[0],l=r[1],h=(0,o.useState)(""),m=(0,i.default)(h,2),x=m[0],y=m[1],v=(0,o.useState)(""),j=(0,i.default)(v,2),b=j[0],C=j[1],T=(0,o.useState)(""),S=(0,i.default)(T,2),w=S[0],O=S[1],k=(0,o.useState)(!1),I=(0,i.default)(k,2),R=I[0],P=I[1];return(0,c.jsxs)(u.default,{style:N.container,children:[(0,c.jsx)(u.default,{style:N.logoContainer,children:(0,c.jsx)(g,{})}),(0,c.jsxs)(u.default,{style:N.inputsContainer,children:[(0,c.jsx)(u.default,{style:N.inputContainer,children:(0,c.jsx)(s.default,{placeholder:"Username",placeholderTextColor:"#003f5c",style:N.inputText,value:a,onChangeText:l})}),(0,c.jsx)(u.default,{style:N.inputContainer,children:(0,c.jsx)(s.default,{placeholder:"Email",placeholderTextColor:"#003f5c",style:N.inputText,value:x,onChangeText:y})}),(0,c.jsx)(u.default,{style:N.inputContainer,children:(0,c.jsx)(s.default,{secureTextEntry:!0,placeholder:"Password",placeholderTextColor:"#003f5c",style:N.inputText,value:b,onChangeText:C})})]}),(0,c.jsxs)(u.default,{style:N.bottomContainer,children:[(0,c.jsx)(f.default,{style:N.createButtonBG,onPress:function(){""===a?(O("username cannot be empty"),P(!0)):""===x?(O("email cannot be empty"),P(!0)):""===b?(O("password cannot be empty"),P(!0)):p(a,x,b).then((function(e){0===e?t("login"):1===e?(O("username already in use"),P(!0)):2===e?(O("email already in use"),P(!0)):(O("error creating account"),P(!0))}))},children:(0,c.jsx)(d.default,{style:N.createButtonText,children:"Create"})}),(0,c.jsx)(E,{navigate:t,dest:"login"})]}),(0,c.jsx)(B,{message:w,modalVisible:R,setModalVisible:P})]})};var N=l.default.create({container:{flex:1,backgroundColor:"#154734",gap:50},logoContainer:{backgroundColor:"#154734",marginTop:60,margin:10,alignItems:"center",justifyContent:"flex-end",flex:1},inputsContainer:{alignItems:"center",justifyContent:"center",gap:35,flex:5},inputContainer:{width:"80%",maxWidth:550,backgroundColor:"#fff",borderRadius:20,height:50,marginBottom:20,justifyContent:"center",padding:10},inputText:{height:50,color:"black"},button:{alignItems:"center",justifyContent:"center",paddingVertical:12,paddingHorizontal:32,borderRadius:4,elevation:3,backgroundColor:"black"},bottomContainer:{flex:2,justifyContent:"center",flexDirection:"row-reverse",marginBottom:25,marginLeft:10,marginRight:10,gap:30},createButtonText:{fontSize:25,textAlign:"center",color:"#fff",fontFamily:"Gill Sans"},createButtonBG:{borderRadius:40,alignContent:"center",justifyContent:"center",width:140,height:60,backgroundColor:"#000"},text:{fontSize:16,lineHeight:21,fontWeight:"bold",letterSpacing:.25,color:"white"}}),U=n(3645),V=function(e){var t=e.getHours();return`${t<13?t:t-12}:${e.getMinutes().toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})} ${t<12?"AM":"PM"}`},z=function(e,t){return new Date(e.getTime()+6e4*parseInt(t,10))};const G=function(e){var t=e.currentUser,n=e.event,r=e.onPress,i=n.eventName,a=n.eventTime,o=n.hostUsername,l=n.usersAttending,s=V(a),g=l.includes(t),h=o===t;return h?(0,c.jsx)(f.default,{onPress:function(){return r(n,h,g)},children:(0,c.jsxs)(u.default,{style:W.containerHosting,children:[(0,c.jsx)(d.default,{numberOfLines:1,style:W.eventName,children:i}),(0,c.jsx)(d.default,{style:W.eventTime,children:s})]})}):g?(0,c.jsx)(f.default,{onPress:function(){return r(n,h,g)},children:(0,c.jsxs)(u.default,{style:W.containerAttending,children:[(0,c.jsx)(d.default,{numberOfLines:1,style:W.eventName,children:i}),(0,c.jsx)(d.default,{style:W.eventTime,children:s})]})}):(0,c.jsx)(f.default,{onPress:function(){return r(n)},children:(0,c.jsxs)(u.default,{style:W.container,children:[(0,c.jsx)(d.default,{numberOfLines:1,style:W.eventName,children:i}),(0,c.jsx)(d.default,{style:W.eventTime,children:s})]})})};var W=l.default.create({eventName:{fontSize:23,flex:3,justifyContent:"flex-start",color:"#fff",margin:6},eventTime:{fontSize:23,flex:2,justifyContent:"flex-end",textAlign:"right",marginRight:5,marginTop:6,color:"#fff"},container:{flex:1,backgroundColor:"#111",flexDirection:"row",width:"90%",justifyContent:"center",alignSelf:"center",height:40,margin:5,borderRadius:5},containerAttending:{flex:1,backgroundColor:"green",flexDirection:"row",width:"90%",justifyContent:"center",alignSelf:"center",height:40,margin:5,borderRadius:5},containerHosting:{flex:1,backgroundColor:"#e87500",flexDirection:"row",width:"90%",justifyContent:"center",alignSelf:"center",height:40,margin:5,borderRadius:5}});const M=function(e){var t=e.navigate;return(0,c.jsx)(f.default,{onPress:function(){t("host")},children:(0,c.jsx)(u.default,{style:F.container,children:(0,c.jsx)(d.default,{style:F.text,children:"+"})})})};var F=l.default.create({text:{fontSize:25,textAlign:"center",color:"#fff",fontFamily:"Gill Sans"},container:{borderRadius:50,alignContent:"center",justifyContent:"center",width:60,height:60,backgroundColor:"#e87500"}}),H=n(4869);const J=function(e){var t=e.navigate;return(0,c.jsx)(f.default,{onPress:function(){t("profile")},children:(0,c.jsx)(u.default,{style:_.logoBG,children:(0,c.jsx)(u.default,{style:_.center,children:(0,c.jsx)(H.default,{style:_.logo,color:"black",width:"60",height:"60"})})})})};var _=l.default.create({header:{fontSize:25,textAlign:"center",color:"#000",fontFamily:"Gill Sans"},center:{alignContent:"center",alignSelf:"center",justifyContent:"center"},logoBG:{borderRadius:60,alignContent:"center",alignSelf:"center",justifyContent:"center",width:60,height:60,backgroundColor:"#e87500"},logo:{alignContent:"center",alignSelf:"center",justifyContent:"center"}}),q=n(5686);const Z=function(e){var t=e.event,n=e.currentUser,r=e.modalVisible,a=e.setModalVisible,l=e.updateEventListing,s=e.modalEventRateable,g=e.preview,h=e.previewOnPress,m=t.id,x=t.eventName,y=t.eventTime,p=t.minuteDuration,v=t.eventLocation,j=t.usersAttending,b=t.ratings,C=t.hostUsername;console.log(`Current username: ${n} rating: ${b[n]}`);var T=(0,o.useState)(j.includes(n)),S=(0,i.default)(T,2),k=S[0],B=S[1];console.log("I ran again!!!!");var A=(0,o.useState)(""),E=(0,i.default)(A,2),L=E[0],D=E[1],N=(0,o.useState)(b[n]),U=(0,i.default)(N,2),G=U[0],W=U[1],M=(0,o.useState)(j.length),F=(0,i.default)(M,2),H=F[0],J=F[1];return(0,o.useEffect)((function(){I(C).then((function(e){D(e)}))}),[]),(0,c.jsx)($.default,{animationType:"none",transparent:!0,visible:r,onRequestClose:function(){a(!1)},children:(0,c.jsx)(R.default,{style:{flex:1},activeOpacity:1,onPress:function(){a(!1)},children:(0,c.jsx)(u.default,{style:K.centeredView,children:(0,c.jsx)(P.default,{children:(0,c.jsxs)(u.default,{style:K.modalView,children:[(0,c.jsx)(d.default,{style:K.modalTitleText,children:x}),(0,c.jsx)(d.default,{style:K.modalText,children:`${V(y)} - ${V(z(y,p))} at ${v}`}),(0,c.jsx)(d.default,{style:K.modalText,children:`Hosted by ${C}`}),(0,c.jsx)(d.default,{style:K.modalText,children:`${L}`}),(0,c.jsx)(d.default,{style:K.modalText,children:`${H} Attending`}),s&&(0,c.jsx)(q.default,{rating:G,onChange:function(e){O(m,e).then((function(){I(C).then((function(e){D(e)})),l()})),W(e)}}),(0,c.jsxs)(u.default,{style:K.modalButtonContainer,children:[(0,c.jsx)(f.default,{style:[K.button,K.buttonClose],onPress:function(){return a(!1)},children:(0,c.jsx)(d.default,{style:K.closeText,children:g?"Cancel":"Close"})}),!k&&!g&&(0,c.jsx)(f.default,{style:[K.button],onPress:function(){B(!0),w(m).then((function(){return l()})),J(H+1)},children:(0,c.jsx)(d.default,{style:K.textStyle,children:"Attend"})}),g&&(0,c.jsx)(f.default,{style:[K.button],onPress:function(){h(),a(!1)},children:(0,c.jsx)(d.default,{style:K.textStyle,children:"Confirm"})})]})]})})})})})};var K=l.default.create({textStyle:{color:"#fff"},closeText:{},modalView:{margin:20,backgroundColor:"#fff",borderColor:"#e87500",borderWidth:2,borderRadius:10,minWidth:335,padding:55,alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:4,elevation:5},centeredView:{flex:1,justifyContent:"center",alignItems:"center",marginTop:22},button:{borderRadius:20,padding:10,elevation:2,color:"#fff",backgroundColor:"#e87500"},modalButtonContainer:{gap:20,marginTop:20,flexDirection:"row"},buttonClose:{backgroundColor:"#aaa"},modalText:{marginBottom:15,textAlign:"center"},modalTitleText:{marginBottom:15,fontSize:30,textAlign:"center"},container:{flex:1,backgroundColor:"#154734",gap:30},topContainer:{flex:1,justifyContent:"center",flexDirection:"row",marginTop:40,marginLeft:10,marginRight:10,gap:50},bottomContainer:{flex:1,justifyContent:"center",alignItems:"flex-end",flexDirection:"row",marginBottom:25,marginLeft:10,marginRight:10,gap:50},listContainer:{flex:10,gap:30,backgroundColor:"#154034",borderRadius:20,margin:8,paddingTop:8},inputContainer:{gap:5,justifyContent:"flex-start"},input:{borderWidth:1,borderRadius:5,height:30,padding:10,margin:10}});const Q=function(e){var t=e.navigate,n=(0,o.useState)("username"),r=(0,i.default)(n,2),a=r[0],l=r[1],s=(0,o.useState)([]),d=(0,i.default)(s,2),f=d[0],h=d[1];(0,o.useEffect)((function(){T().then((function(e){h(e),console.log(`events: ${e}`)})),console.log(`username: ${a}`),v().then((function(e){return l(e)}))}),[]);var m=(0,o.useState)(new Date),x=(0,i.default)(m,2),y=x[0],p=x[1];(0,o.useEffect)((function(){var e=setInterval((function(){p(new Date)}),6e4);return function(){return clearInterval(e)}}),[]);var j=(0,o.useState)(!1),b=(0,i.default)(j,2),C=b[0],S=b[1],w=(0,o.useState)(),O=(0,i.default)(w,2),k=O[0],I=O[1],R=(0,o.useState)(),P=(0,i.default)(R,2),$=P[0],B=P[1],A=function(e){I(e),B(e.hostUsername!==a&&e.usersAttending.includes(a)),console.log(`${e.eventName} rating: ${f[e.id].ratings[a]}`),S(!0)};return(0,c.jsxs)(u.default,{style:X.container,children:[(0,c.jsxs)(u.default,{style:X.topContainer,children:[(0,c.jsx)(g,{}),(0,c.jsx)(J,{navigate:t})]}),null!=k&&C&&(0,c.jsx)(Z,{event:k,currentUser:a,modalVisible:C,modalEventRateable:$,setModalVisible:S,updateEventListing:function(){T().then((function(e){h(e),console.log(`updatedEvents: ${e}`)}))}}),(0,c.jsx)(u.default,{style:X.listContainer,children:(0,c.jsx)(U.default,{data:f.filter((function(e){return z(e.eventTime,e.minuteDuration)>y})).sort((function(e,t){return e.eventTime-t.eventTime})),renderItem:function(e){var t=e.item;return(0,c.jsx)(G,{event:t,currentUser:a,onPress:A})},keyExtractor:function(e){return e.id},initialNumToRender:20})}),(0,c.jsx)(u.default,{style:X.bottomContainer,children:(0,c.jsx)(M,{navigate:t})})]})};var X=l.default.create({modalView:{margin:20,backgroundColor:"#fff",borderColor:"#e87500",borderWidth:2,borderRadius:10,padding:55,alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:4,elevation:5},centeredView:{flex:1,justifyContent:"center",alignItems:"center",marginTop:22},button:{borderRadius:20,padding:10,elevation:2},modalButtonContainer:{gap:20,marginTop:20,flexDirection:"row"},buttonClose:{backgroundColor:"#e87500"},modalText:{marginBottom:15,textAlign:"center"},modalTitleText:{marginBottom:15,fontSize:30,textAlign:"center"},container:{flex:1,backgroundColor:"#154734",gap:30,alignItems:"center",justifyContent:"center"},topContainer:{flex:1,justifyContent:"center",flexDirection:"row",marginTop:40,marginLeft:10,marginRight:10,gap:50},bottomContainer:{flex:1,justifyContent:"center",alignItems:"flex-end",flexDirection:"row",marginBottom:25,marginLeft:10,marginRight:10,gap:50},listContainer:{width:"95%",maxWidth:650,flex:10,gap:30,backgroundColor:"#154034",borderRadius:20,margin:8,paddingTop:8},inputContainer:{gap:5,justifyContent:"flex-start"},input:{borderWidth:1,borderRadius:5,height:30,padding:10,margin:10}});const Y=function(e){var t=e.onPress;return(0,c.jsx)(f.default,{onPress:t,children:(0,c.jsx)(u.default,{style:ee.container,children:(0,c.jsx)(d.default,{style:ee.header,children:"Preview"})})})};var ee=l.default.create({header:{fontSize:25,textAlign:"center",color:"#fff",fontFamily:"Gill Sans"},container:{borderRadius:40,alignContent:"center",justifyContent:"center",width:150,height:60,backgroundColor:"#e87500"}});const te=function(e){var t=e.navigate,n=new Date,r=n.getHours(),a=n.getMinutes().toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),l=r<12?"am":"pm",f=r<13?r:r-12,g=(0,o.useState)(""),h=(0,i.default)(g,2),m=h[0],x=h[1],y=(0,o.useState)(`${f}:${a}${l}`),p=(0,i.default)(y,2),j=p[0],b=p[1],C=(0,o.useState)("60"),T=(0,i.default)(C,2),w=T[0],O=T[1],k=(0,o.useState)(""),I=(0,i.default)(k,2),R=I[0],P=I[1],$=(0,o.useState)(!1),B=(0,i.default)($,2),A=B[0],L=B[1],D=(0,o.useState)(!1),N=(0,i.default)(D,2),U=N[0],V=N[1],z=(0,o.useState)(!1),G=(0,i.default)(z,2),W=G[0],M=G[1],F=(0,o.useState)(!1),H=(0,i.default)(F,2),J=H[0],_=H[1],q=(0,o.useState)(!1),K=(0,i.default)(q,2),Q=K[0],X=K[1],ee=(0,o.useState)(!1),te=(0,i.default)(ee,2),ie=te[0],ae=te[1];(0,o.useEffect)((function(){U&&(setTimeout((function(){L(!0)}),250),setTimeout((function(){L(!1)}),500),setTimeout((function(){L(!0)}),750),setTimeout((function(){L(!1),V(!1)}),1e3),setTimeout((function(){L(!0),V(!1)}),1250),setTimeout((function(){L(!1),V(!1)}),1500))}),[U]),(0,o.useEffect)((function(){J&&(setTimeout((function(){M(!0)}),250),setTimeout((function(){M(!1)}),500),setTimeout((function(){M(!0)}),750),setTimeout((function(){M(!1)}),1e3),setTimeout((function(){M(!0)}),1250),setTimeout((function(){M(!1),_(!1)}),1500))}),[J]),(0,o.useEffect)((function(){ie&&(setTimeout((function(){X(!0)}),250),setTimeout((function(){X(!1)}),500),setTimeout((function(){X(!0)}),750),setTimeout((function(){X(!1)}),1e3),setTimeout((function(){X(!0)}),1250),setTimeout((function(){X(!1),ae(!1)}),1500))}),[ie]);var oe=(0,o.useState)(null),le=(0,i.default)(oe,2),ue=le[0],se=le[1];(0,o.useEffect)((function(){v().then((function(e){return se(e)}))}),[]);var de=(0,o.useState)(!1),fe=(0,i.default)(de,2),ce=fe[0],ge=fe[1],he=(0,o.useState)(),me=(0,i.default)(he,2),xe=me[0],ye=me[1];return(0,c.jsxs)(u.default,{style:re.container,children:[(0,c.jsx)(u.default,{style:re.topContainer,children:(0,c.jsx)(d.default,{style:re.header,children:"Create Event"})}),null!=xe&&ce&&(0,c.jsx)(Z,{event:xe,currentUser:ue,modalVisible:ce,setModalVisible:ge,preview:!0,previewOnPress:function(){S(xe.eventName,xe.eventTime,xe.minuteDuration,xe.eventLocation).then((function(e){e&&t("home")}))}}),(0,c.jsxs)(u.default,{style:re.listContainer,children:[(0,c.jsxs)(u.default,{style:re.inputAndTextContainer,children:[W?(0,c.jsx)(d.default,{style:re.badInputLabel,children:"Event Name"}):(0,c.jsx)(d.default,{style:re.inputLabel,children:"Event Name"}),(0,c.jsx)(u.default,{style:re.inputContainer,children:(0,c.jsx)(s.default,{style:re.inputText,value:m,onChangeText:x})})]}),(0,c.jsxs)(u.default,{style:re.inputAndTextContainer,children:[A?(0,c.jsx)(d.default,{style:re.badInputLabel,children:"Start Time"}):(0,c.jsx)(d.default,{style:re.inputLabel,children:"Start Time"}),(0,c.jsx)(u.default,{style:re.inputContainer,children:(0,c.jsx)(s.default,{style:re.inputText,value:j,onChangeText:b,placeholder:"ex: 5:20pm"})})]}),(0,c.jsxs)(u.default,{style:re.inputAndTextContainer,children:[Q?(0,c.jsx)(d.default,{style:re.badInputLabel,children:"Duration (Minutes)"}):(0,c.jsx)(d.default,{style:re.inputLabel,children:"Duration (Minutes)"}),(0,c.jsx)(u.default,{style:re.inputContainer,children:(0,c.jsx)(s.default,{style:re.inputText,value:w,onChangeText:O,placeholder:"ex: 60"})})]}),(0,c.jsxs)(u.default,{style:re.inputAndTextContainer,children:[(0,c.jsx)(d.default,{style:re.inputLabel,children:"Location"}),(0,c.jsx)(u.default,{style:re.inputContainer,children:(0,c.jsx)(s.default,{style:re.inputText,value:R,onChangeText:P})})]})]}),(0,c.jsxs)(u.default,{style:re.bottomContainer,children:[(0,c.jsx)(E,{navigate:t,dest:"home"}),(0,c.jsx)(Y,{onPress:function(){var e=ne(j),t=!0;Number.isNaN(e)&&(b(""),V(!0),t=!1),""===m&&(_(!0),t=!1),Number.isNaN(parseInt(w,10))?(O(""),ae(!0),t=!1):console.log(`duration: ${w}`),t&&(console.log(`ds: ${e.toDateString()}`),function(e){var t=parseInt(w,10);ye({id:-1,eventName:m,eventTime:e,minuteDuration:t,creationTime:new Date,eventLocation:R,usersAttending:[ue],ratings:{},deleted:!1,hostUsername:ue}),ge(!0)}(e))}})]})]})};var ne=function(e){for(var t=!1,n="",r="",i=e.toLowerCase(),a=0,o=0;o<i.length;o+=1)if(":"===i[o]||" "===i[o])a+=1;else{if("p"===i[o]){t=!0;break}if("a"===i[o])break;0===a?n+=i[o]:r+=i[o]}var l=parseInt(n,10),u=parseInt(r,10);u=Number.isNaN(u)?0:u,console.log(`converted: ${l}:${u}`),t&&l<12?l+=12:t||12!==l||(l=0);var s=new Date;return s.setHours(l),s.setMinutes(u),s},re=l.default.create({header:{fontSize:35,textAlign:"center",color:"#fff",fontFamily:"Gill Sans"},inputLabel:{fontSize:25,textAlign:"left",color:"#fff",fontFamily:"Gill Sans",marginLeft:"14%"},badInputLabel:{fontSize:25,textAlign:"left",color:"red",fontFamily:"Gill Sans",marginLeft:"14%"},inputContainer:{width:"100%",maxWidth:550,backgroundColor:"#fff",borderRadius:20,height:50,marginTop:6,marginBottom:30,justifyContent:"center",padding:10,alignSelf:"center"},inputAndTextContainer:{width:"80%",maxWidth:550,alignSelf:"center"},inputText:{height:50,color:"black"},container:{flex:1,backgroundColor:"#154734",gap:30},topContainer:{justifyContent:"center",flexDirection:"row",marginTop:30,marginLeft:10,marginRight:10},bottomContainer:{flex:1,justifyContent:"center",flexDirection:"row",marginBottom:20,marginLeft:10,marginRight:10,gap:30},listContainer:{flex:8},input:{borderWidth:1,borderRadius:5,height:30,padding:10,margin:10}});const ie=function(e){var t=e.navigate;return(0,c.jsx)(f.default,{onPress:function(){return t("login")},children:(0,c.jsx)(u.default,{style:ae.container,children:(0,c.jsx)(d.default,{style:ae.header,children:"Logout"})})})};var ae=l.default.create({header:{fontSize:25,textAlign:"center",color:"#000",fontFamily:"Gill Sans"},container:{borderRadius:40,alignContent:"center",justifyContent:"center",width:140,height:60,backgroundColor:"#fff"}});const oe=function(e){var t=e.goBack;return(0,c.jsxs)(u.default,{style:le.container,children:[(0,c.jsx)(g,{}),(0,c.jsx)(ie,{goBack:t})]})};var le=l.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",margin:100,gap:30},inputContainer:{gap:5,justifyContent:"flex-start"},input:{borderWidth:1,borderRadius:5,height:30,padding:10,margin:10}});const ue=function(e){var t=e.navigate,n=(0,o.useState)(""),r=(0,i.default)(n,2),a=r[0],l=r[1],h=(0,o.useState)(""),m=(0,i.default)(h,2),y=m[0],p=m[1],v=(0,o.useState)(0),T=(0,i.default)(v,2),S=T[0],w=T[1],O=(0,o.useState)(""),k=(0,i.default)(O,2),I=k[0],R=k[1],P=(0,o.useState)(!1),$=(0,i.default)(P,2),A=$[0],E=$[1];return(0,o.useEffect)((function(){S>5&&(w(0),x.default.clear(),l(""),p(""))}),[S]),(0,o.useEffect)((function(){j().then((function(e){null!==e&&(l(e),b().then((function(e){null!==e&&p(e)})))}))}),[]),(0,c.jsxs)(u.default,{style:se.container,children:[(0,c.jsx)(f.default,{onPress:function(){w((function(e){return e+1}))},children:(0,c.jsx)(u.default,{style:se.logoContainer,children:(0,c.jsx)(g,{})})}),(0,c.jsx)(u.default,{style:se.inputContainer,children:(0,c.jsx)(s.default,{placeholder:"Email",placeholderTextColor:"#003f5c",style:se.inputText,value:a,onChangeText:l})}),(0,c.jsx)(u.default,{style:se.inputContainer,children:(0,c.jsx)(s.default,{secureTextEntry:!0,placeholder:"Password",placeholderTextColor:"#003f5c",style:se.inputText,value:y,onChangeText:p})}),(0,c.jsx)(f.default,{style:se.button,onPress:function(){C(a,y).then((function(e){e?t("home"):(R("invalid login"),E(!0))}))},children:(0,c.jsx)(d.default,{style:se.text,children:"Login"})}),(0,c.jsx)(f.default,{style:se.button,onPress:function(){t("createaccount")},children:(0,c.jsx)(d.default,{style:se.text,children:"Create Account"})}),(0,c.jsx)(B,{message:I,modalVisible:A,setModalVisible:E})]})};var se=l.default.create({container:{flex:1,backgroundColor:"#154734",alignItems:"center",justifyContent:"center",gap:30},logoContainer:{backgroundColor:"#154734",marginBottom:20},inputContainer:{width:"80%",maxWidth:500,backgroundColor:"#fff",borderRadius:20,height:50,marginBottom:20,justifyContent:"center",padding:10},inputText:{height:50,color:"black"},text:{fontSize:25,textAlign:"center",color:"#fff",fontFamily:"Gill Sans",marginHorizontal:30},button:{borderRadius:40,alignContent:"center",justifyContent:"center",height:60,backgroundColor:"#000"}}),de=n(2152);const fe=function(e){var t=e.navigate;return(0,c.jsx)(f.default,{onPress:function(){return t("home")},children:(0,c.jsx)(u.default,{style:ce.logoBG,children:(0,c.jsx)(d.default,{style:ce.header,children:"Back"})})})};var ce=l.default.create({header:{fontSize:25,textAlign:"center",color:"#fff",fontFamily:"Gill Sans"},logoBG:{borderRadius:40,alignContent:"center",justifyContent:"center",width:140,height:60,backgroundColor:"#e87500"}}),ge="web"===de.default.OS?0:40;const he=function(e){var t=e.navigate,n=(0,o.useState)(null),r=(0,i.default)(n,2),a=r[0],l=r[1],s=(0,o.useState)([]),f=(0,i.default)(s,2),g=f[0],h=f[1];(0,o.useEffect)((function(){T().then((function(e){h(e)})),v().then((function(e){return l(e)}))}),[]);var m=(0,o.useState)(!1),x=(0,i.default)(m,2),y=x[0],p=x[1],j=(0,o.useState)(),b=(0,i.default)(j,2),C=b[0],S=b[1],w=(0,o.useState)(),O=(0,i.default)(w,2),k=O[0],I=O[1],R=function(e){S(e),I(e.hostUsername!==a&&e.usersAttending.includes(a)),p(!0)};return(0,c.jsxs)(u.default,{style:me.container,children:[(0,c.jsxs)(u.default,{style:me.topContainer,children:[null!=a&&(0,c.jsx)(d.default,{numberOfLines:1,style:me.welcomeText,children:`Hello ${a}!`}),(0,c.jsx)(u.default,{style:me.seperator})]}),null!=C&&y&&(0,c.jsx)(Z,{event:C,currentUser:a,modalVisible:y,modalEventRateable:k,setModalVisible:p,updateEventListing:function(){T().then((function(e){h(e),console.log(`updatedEvents: ${e}`)}))}}),(0,c.jsxs)(u.default,{style:me.innerContainer,children:[(0,c.jsx)(d.default,{style:me.titleText,children:"Attended Events"}),(0,c.jsx)(u.default,{style:me.listContainer,children:(0,c.jsx)(U.default,{data:g.sort((function(e,t){return t.eventTime-e.eventTime})).filter((function(e){return e.hostUsername!==a&&e.usersAttending.includes(a)})),renderItem:function(e){var t=e.item;return(0,c.jsx)(G,{event:t,currentUser:a,onPress:R})},keyExtractor:function(e){return e.id}})}),(0,c.jsx)(d.default,{style:me.titleText,children:"Created Events"}),(0,c.jsx)(u.default,{style:me.listContainer,children:(0,c.jsx)(U.default,{data:g.sort((function(e,t){return t.eventTime-e.eventTime})).filter((function(e){return e.hostUsername===a})),renderItem:function(e){var t=e.item;return(0,c.jsx)(G,{event:t,currentUser:a,onPress:R})},keyExtractor:function(e){return e.id}})})]}),(0,c.jsxs)(u.default,{style:me.bottomContainer,children:[(0,c.jsx)(fe,{navigate:t}),(0,c.jsx)(ie,{navigate:t})]})]})};var me=l.default.create({container:{flex:1,backgroundColor:"#154734",justifyContent:"center",alignItems:"center"},innerContainer:{width:"100%",maxWidth:650,flex:6},topContainer:{flex:1,marginTop:ge,marginBottom:20,width:"100%",maxWidth:600},bottomContainer:{flex:1,justifyContent:"center",alignItems:"flex-end",flexDirection:"row",marginBottom:25,marginLeft:10,marginRight:10,gap:30},seperator:{borderRadius:20,alignSelf:"center",marginTop:5,width:"80%",height:10,backgroundColor:"#e87500"},listContainer:{width:"95%",maxWidth:650,flex:10,gap:30,backgroundColor:"#154034",borderRadius:20,margin:8,paddingTop:8},inputContainer:{gap:5,justifyContent:"flex-start"},input:{borderWidth:1,borderRadius:5,height:30,padding:10,margin:10},welcomeText:{textAlign:"center",fontSize:40,fontWeight:"bold",marginTop:5,marginHorizontal:5,letterSpacing:.2,color:"white"},titleText:{textAlign:"center",fontSize:32,fontWeight:"bold",letterSpacing:.25,color:"white"}});function xe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?xe(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var pe=[];const ve=function(){var e=(0,o.useState)("login"),t=(0,i.default)(e,2),n=t[0],r=t[1],l=function(e){pe.push(n),r(e),console.log(pe)},s=function(){0===pe.length||r(pe.pop()),console.log(pe)};return(0,c.jsxs)(u.default,{style:ye({},je.container),children:["login"===n?(0,c.jsx)(ue,{navigate:l,goBack:s}):null,"home"===n?(0,c.jsx)(Q,{navigate:l,goBack:s}):null,"host"===n?(0,c.jsx)(te,{navigate:l,goBack:s}):null,"join"===n?(0,c.jsx)(oe,{navigate:l,goBack:s}):null,"profile"===n?(0,c.jsx)(he,{navigate:l,goBack:s}):null,"createaccount"===n?(0,c.jsx)(D,{navigate:l,goBack:s}):null,(0,c.jsx)(a.default,{})]})};var je=l.default.create({container:{flex:1,backgroundColor:"#fff"}})}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,r,i,a)=>{if(!r){var o=1/0;for(d=0;d<e.length;d++){for(var[r,i,a]=e[d],l=!0,u=0;u<r.length;u++)(!1&a||o>=a)&&Object.keys(n.O).every((e=>n.O[e](r[u])))?r.splice(u--,1):(l=!1,a<o&&(o=a));if(l){e.splice(d--,1);var s=i();void 0!==s&&(t=s)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,i,a]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var l=2&i&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,n.d(a,o),a}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var i,a,[o,l,u]=r,s=0;if(o.some((t=>0!==e[t]))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(u)var d=u(n)}for(t&&t(r);s<o.length;s++)a=o[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[249],(()=>n(6271)));r=n.O(r)})();
//# sourceMappingURL=main.8d3a0b28.js.map