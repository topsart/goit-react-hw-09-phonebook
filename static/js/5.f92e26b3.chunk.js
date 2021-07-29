(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[5],{171:function(e,t,a){e.exports={contacts_list_wrapper:"ContactsList_contacts_list_wrapper__3qRSK",contacts_list:"ContactsList_contacts_list__yEbp0"}},182:function(e,t,a){e.exports={form:"Form_form__2qTuD",form_item:"Form_form_item__LGeLE"}},183:function(e,t,a){e.exports={search:"Filter_search__2DZs9",searchIcon:"Filter_searchIcon__1Xbpt",inputInput:"Filter_inputInput__3Wa8n"}},214:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return E}));var c=a(0),n=a(12),r=a(49),s=a(171),i=a.n(s),o=a(110),l=a(207),b=a(212),u=a(209),j=a(211),d=a(210),m=a(216),O=a(172),f=a.n(O),_=a(173),h=a.n(_),p=a(2);function x(){var e=Object(n.b)(),t=Object(n.c)(r.d.getFilteredContacts),a=Object(c.useCallback)((function(t){e(r.b.deleteContact(t))}),[e]);return Object(p.jsx)(o.a,{className:i.a.contacts_list_wrapper,children:Object(p.jsx)(l.a,{className:i.a.contacts_list,children:t.map((function(e){var t=e.id,c=e.name,n=e.number;return Object(p.jsxs)(u.a,{children:[Object(p.jsx)(d.a,{children:Object(p.jsx)(m.a,{children:Object(p.jsx)(f.a,{})})}),Object(p.jsx)(j.a,{primary:c,secondary:n}),Object(p.jsx)(b.a,{edge:"end","aria-label":"delete",onClick:function(){return a(t)},children:Object(p.jsx)(h.a,{})})]},t)}))})})}var v=a(48),C=a(157),g=a.n(C),k=a(182),N=a.n(k),y=a(213),F=a(131);function w(){var e=g.a.generate(),t=g.a.generate(),a=Object(n.b)(),s=Object(n.c)(r.d.getFilteredContacts),i=Object(c.useState)(""),l=Object(v.a)(i,2),b=l[0],u=l[1],j=Object(c.useState)(""),d=Object(v.a)(j,2),m=d[0],O=d[1],f=Object(c.useCallback)((function(e){var t=e.currentTarget,a=t.name,c=t.value;switch(a){case"name":u(c);break;case"number":O(c);break;default:console.warn("\u0422\u0438\u043f \u043f\u043e\u043b\u044f ".concat(a," \u043d\u0435 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f"))}}),[]),_=Object(c.useCallback)((function(e){e.preventDefault(),s.find((function(e){return e.name===b}))?alert("".concat(b," is already in contacts")):s.find((function(e){return e.number===m}))?alert("".concat(m," is already in contacts")):a(r.b.addContact({name:b,number:m})),h()}),[s,a,b,m]),h=function(){u(""),O("")};return Object(p.jsxs)(o.a,{className:N.a.form,children:[Object(p.jsx)(y.a,{className:N.a.form_item,onChange:f,value:b,id:e,name:"name",type:"text",label:"Full Name",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,variant:"outlined"}),Object(p.jsx)(y.a,{className:N.a.form_item,onChange:f,value:m,id:t,name:"number",type:"tel",label:"Phone Number",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,variant:"outlined"}),Object(p.jsx)(F.a,{className:N.a.form_item,variant:"contained",color:"primary",type:"submit",onClick:_,children:"Add contact"})]})}var I=a(183),q=a.n(I),L=a(217),S=a(184),A=a.n(S);function D(){var e=g.a.generate(),t=Object(n.b)(),a=Object(n.c)(r.d.getFilter),s=Object(c.useCallback)((function(e){t(Object(r.a)(e.target.value))}),[t]);return Object(p.jsxs)("div",{className:q.a.search,children:[Object(p.jsx)("div",{className:q.a.searchIcon,children:Object(p.jsx)(A.a,{})}),Object(p.jsx)(L.a,{className:q.a.inputInput,color:"secondary",placeholder:"Search contacts...",id:e,value:a,onChange:s})]})}function E(){var e=Object(n.b)();return Object(c.useEffect)((function(){e(r.b.fetchContacts())}),[e]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(w,{}),Object(p.jsxs)("div",{children:[Object(p.jsx)(D,{}),Object(p.jsx)(x,{})]})]})}}}]);
//# sourceMappingURL=5.f92e26b3.chunk.js.map