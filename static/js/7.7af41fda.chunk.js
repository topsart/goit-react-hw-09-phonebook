(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[7],{148:function(e,t,a){"use strict";var n=a(137),i=a(138);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a(0)),o=(0,n(a(139)).default)(r.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");t.default=o},165:function(e,t,a){e.exports={paper:"RegisterView_paper__3vYD0",avatar:"RegisterView_avatar__2G9cX",form:"RegisterView_form__YTFTh",submit:"RegisterView_submit__1HjcA"}},166:function(e,t,a){"use strict";var n=a(1),i=a(4),r=a(5),o=a(0),s=(a(9),a(7)),c=a(14),l=a(15),d=o.forwardRef((function(e,t){var a=e.classes,r=e.className,c=e.component,d=void 0===c?"div":c,u=e.disableGutters,m=void 0!==u&&u,p=e.fixed,x=void 0!==p&&p,b=e.maxWidth,g=void 0===b?"lg":b,f=Object(i.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return o.createElement(d,Object(n.a)({className:Object(s.a)(a.root,r,x&&a.fixed,m&&a.disableGutters,!1!==g&&a["maxWidth".concat(Object(l.a)(String(g)))]),ref:t},f))}));t.a=Object(c.a)((function(e){return{root:Object(r.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:n}),t}),{}),maxWidthXs:Object(r.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(r.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(r.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(r.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(r.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(d)},167:function(e,t,a){"use strict";var n=a(1),i=a(0),r=(a(9),a(14)),o={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},s=function(e){return Object(n.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};t.a=Object(r.a)((function(e){return{"@global":{html:o,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(n.a)({margin:0},s(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,a=void 0===t?null:t;return e.classes,i.createElement(i.Fragment,null,a)}))},215:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));var n=a(48),i=a(0),r=a(12),o=a(13),s=a(216),c=a(131),l=a(167),d=a(213),u=a(4),m=a(1),p=(a(9),a(7)),x=a(14),b=[0,1,2,3,4,5,6,7,8,9,10],g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var h=i.forwardRef((function(e,t){var a=e.alignContent,n=void 0===a?"stretch":a,r=e.alignItems,o=void 0===r?"stretch":r,s=e.classes,c=e.className,l=e.component,d=void 0===l?"div":l,x=e.container,b=void 0!==x&&x,g=e.direction,f=void 0===g?"row":g,h=e.item,j=void 0!==h&&h,v=e.justify,O=e.justifyContent,w=void 0===O?"flex-start":O,k=e.lg,y=void 0!==k&&k,W=e.md,S=void 0!==W&&W,C=e.sm,z=void 0!==C&&C,M=e.spacing,_=void 0===M?0:M,N=e.wrap,R=void 0===N?"wrap":N,G=e.xl,V=void 0!==G&&G,E=e.xs,F=void 0!==E&&E,I=e.zeroMinWidth,L=void 0!==I&&I,B=Object(u.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),D=Object(p.a)(s.root,c,b&&[s.container,0!==_&&s["spacing-xs-".concat(String(_))]],j&&s.item,L&&s.zeroMinWidth,"row"!==f&&s["direction-xs-".concat(String(f))],"wrap"!==R&&s["wrap-xs-".concat(String(R))],"stretch"!==o&&s["align-items-xs-".concat(String(o))],"stretch"!==n&&s["align-content-xs-".concat(String(n))],"flex-start"!==(v||w)&&s["justify-content-xs-".concat(String(v||w))],!1!==F&&s["grid-xs-".concat(String(F))],!1!==z&&s["grid-sm-".concat(String(z))],!1!==S&&s["grid-md-".concat(String(S))],!1!==y&&s["grid-lg-".concat(String(y))],!1!==V&&s["grid-xl-".concat(String(V))]);return i.createElement(d,Object(m.a)({className:D,ref:t},B))})),j=Object(x.a)((function(e){return Object(m.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return b.forEach((function(n){var i=e.spacing(n);0!==i&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(f(i,2)),width:"calc(100% + ".concat(f(i),")"),"& > $item":{padding:f(i,2)}})})),a}(e,"xs"),e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var n={};g.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(m.a)(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t}),{}))}),{name:"MuiGrid"})(h),v=a(148),O=a.n(v),w=a(127),k=a(166),y=a(165),W=a.n(y),S=a(2);function C(){var e=Object(r.b)(),t=Object(i.useState)(""),a=Object(n.a)(t,2),u=a[0],m=a[1],p=Object(i.useState)(""),x=Object(n.a)(p,2),b=x[0],g=x[1],f=Object(i.useState)(""),h=Object(n.a)(f,2),v=h[0],y=h[1],C=Object(i.useCallback)((function(e){var t=e.currentTarget,a=t.name,n=t.value;switch(a){case"name":m(n);break;case"email":g(n);break;case"password":y(n);break;default:console.warn("\u0422\u0438\u043f \u043f\u043e\u043b\u044f ".concat(a," \u043d\u0435 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f"))}}),[]),z=Object(i.useCallback)((function(t){t.preventDefault(),e(o.a.register({name:u,email:b,password:v})),M()}),[e,b,u,v]),M=function(){m(""),g(""),y("")};return Object(S.jsxs)(k.a,{component:"main",maxWidth:"xs",children:[Object(S.jsx)(l.a,{}),Object(S.jsxs)("div",{className:W.a.paper,children:[Object(S.jsx)(s.a,{className:W.a.avatar,children:Object(S.jsx)(O.a,{})}),Object(S.jsx)(w.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(S.jsxs)("form",{className:W.a.form,noValidate:!0,onSubmit:z,children:[Object(S.jsxs)(j,{container:!0,spacing:2,children:[Object(S.jsx)(j,{item:!0,xs:12,children:Object(S.jsx)(d.a,{type:"text",value:u,onChange:C,autoComplete:"fname",name:"name",variant:"outlined",required:!0,fullWidth:!0,id:"name",label:"Name",autoFocus:!0})}),Object(S.jsx)(j,{item:!0,xs:12,children:Object(S.jsx)(d.a,{type:"email",value:b,onChange:C,variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),Object(S.jsx)(j,{item:!0,xs:12,children:Object(S.jsx)(d.a,{value:v,onChange:C,variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"})})]}),Object(S.jsx)(c.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:W.a.submit,children:"Sign Up"})]})]})]})}}}]);
//# sourceMappingURL=7.7af41fda.chunk.js.map