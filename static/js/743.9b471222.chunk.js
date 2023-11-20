"use strict";(self.webpackChunkphonebook_frontend=self.webpackChunkphonebook_frontend||[]).push([[743],{2745:function(e,n,t){t.d(n,{Z:function(){return i}});var a="Form_form__e1yzW",r="Form_button__8NOIT",s=t(184),i=function(e){var n=e.buttonCaption,t=e.onSubmit,i=e.children;return(0,s.jsxs)("form",{className:a,onSubmit:t,children:[i,(0,s.jsx)("button",{className:r,type:"submit",children:n})]})}},9602:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(2791),r=t(5984),s="Input_label__NXpCD",i="Input_input__E5rzA",o=t(184),c=function(e){var n=e.onChange,t=e.type,c=void 0===t?"text":t,u=e.name,l=void 0===u?"":u,m=e.label,d=e.title,p=e.pattern,h=e.required,f=void 0===h||h,_=e.minLength,b=e.value,x=(0,a.useRef)((0,r.x0)());return(0,o.jsxs)(o.Fragment,{children:[m&&(0,o.jsx)("label",{htmlFor:x.current,className:s,children:m}),(0,o.jsx)("input",{id:x.current,className:i,type:c,name:l,value:b,pattern:p,title:d,required:f,onChange:n,minLength:_})]})}},9743:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var a=t(2791),r=t(9439),s=t(5984),i=t(8115),o=function(e){return e.contacts},c=t(9434),u=t(4133),l=t(9602),m=t(2745),d=t(184),p=function(){var e=(0,a.useState)(""),n=(0,r.Z)(e,2),t=n[0],p=n[1],h=(0,a.useState)(""),f=(0,r.Z)(h,2),_=f[0],b=f[1],x=(0,c.v9)(o).items,v=(0,c.I0)(),j=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"name":p(a);break;case"number":b(a);break;default:return}},N=function(){p(""),b("")};return(0,d.jsxs)(m.Z,{buttonCaption:"Add contact",onSubmit:function(e){e.preventDefault(),x.some((function(e){return e.name.toLowerCase()===t.toLowerCase()}))?(0,u.l)("".concat(t," is already in contact"),"reportWarning"):v((0,i.uK)({id:(0,s.x0)(),name:t,number:_})),N()},children:[(0,d.jsx)(l.Z,{label:"Name",type:"text",name:"name",pattern:"^[A-Za-z\\u0080-\\uFFFF\\- ']+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:j,value:t}),(0,d.jsx)(l.Z,{label:"Number",type:"tel",name:"number",pattern:"^(\\+?[0-9.\\(\\)\\-\\s]*)$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:j,value:_})]})},h=t(9135),f="ContactItem_contactItem__Z4FuP",_="ContactItem_caption__9hsJU",b="ContactItem_button__IRFBz",x=function(e){var n=e.name,t=e.number,a=e.contactId,r=(0,c.I0)();return(0,d.jsxs)("li",{className:f,children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("p",{className:_,children:["Name: ",n]}),(0,d.jsxs)("p",{className:_,children:["Number: ",t]})]}),(0,d.jsx)("button",{type:"button",className:b,onClick:function(){return r((0,i.GK)(a))},children:(0,d.jsx)(h.Xm5,{})})]})},v="ContactList_contactList__UFVCg",j=function(e){return e.filter},N=function(){var e=(0,c.v9)(o).items,n=(0,c.v9)(j);return(0,d.jsx)("ul",{className:v,children:e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){var n=e.id,t=e.name,a=e.number;return(0,d.jsx)(x,{name:t,number:a,contactId:n},n)}))})},C="Filter_filterBox__A-UPt",F="Filter_label__vEd1E",g="Filter_input__N7T3z",y=t(3797),Z=function(){var e=(0,a.useRef)((0,s.x0)()),n=(0,c.v9)(j),t=(0,c.I0)();return(0,d.jsxs)("div",{className:C,children:[(0,d.jsx)("label",{htmlFor:e.current,className:F,children:"Find contacts by name"}),(0,d.jsx)("input",{type:"text",name:"filter",id:e.current,pattern:"^[A-Za-z\\u0080-\\uFFFF\\- ']+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,className:g,onChange:function(e){var n=e.target.value;return t((0,y.M)(n))},value:n})]})},I=t(9599),A=function(){var e=(0,c.I0)(),n=(0,c.v9)(o),t=n.items,r=n.isLoading,s=n.error;return(0,a.useEffect)((function(){e((0,i.yF)())}),[e]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h1",{className:I.Z.appTitle,children:"Phonebook"}),(0,d.jsx)(p,{}),(0,d.jsx)("h2",{className:I.Z.title,children:"Contacts:"}),(0,d.jsx)(Z,{}),r&&(0,d.jsx)("p",{className:I.Z.info,children:"Loading..."}),s&&(0,d.jsx)("p",{className:I.Z.info,children:s}),s||r||t.length?(0,d.jsx)(N,{}):(0,d.jsx)("p",{className:I.Z.info,children:"The contact list is empty!"})]})}},9599:function(e,n){n.Z={app:"App_app__6Ra7L",appTitle:"App_appTitle__R-ohI",info:"App_info__qU+g4"}}}]);
//# sourceMappingURL=743.9b471222.chunk.js.map