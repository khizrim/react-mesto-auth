(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{32:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),s=n.n(r),c=n(21),i=n.n(c),o=n(10),u=(n(32),n(26)),l=n(2),d=n.n(l),p=n(6),m=n(4),b=n(3),j=n(22),h=n(23),_=new(function(){function e(t,n){Object(j.a)(this,e),this._baseUrl=t,this._token=n}return Object(h.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getUserData",value:function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._baseUrl,"users/me"),{headers:{authorization:this._token}});case 2:return t=e.sent,e.abrupt("return",this._getResponseData(t));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getInitialCards",value:function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._baseUrl,"cards"),{headers:{authorization:this._token}});case 2:return t=e.sent,e.abrupt("return",this._getResponseData(t));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"editUserData",value:function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,a=t.about,e.next=3,fetch("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:n,about:a})});case 3:return r=e.sent,e.abrupt("return",this._getResponseData(r));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"editUserPic",value:function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.link,e.next=3,fetch("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:n})});case 3:return a=e.sent,e.abrupt("return",this._getResponseData(a));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"changeCardLikeStatus",value:function(){var e=Object(p.a)(d.a.mark((function e(t,n){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._baseUrl,"cards/likes/").concat(t),{method:n?"DELETE":"PUT",headers:{authorization:this._token}});case 2:return a=e.sent,e.abrupt("return",this._getResponseData(a));case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"removeCard",value:function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._baseUrl,"cards/").concat(t),{method:"DELETE",headers:{authorization:this._token}});case 2:return n=e.sent,e.abrupt("return",this._getResponseData(n));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"addCard",value:function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,a=t.link,e.next=3,fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:n,link:a})});case 3:return r=e.sent,e.abrupt("return",this._getResponseData(r));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())("https://mesto.nomoreparties.co/v1/cohort-19/","eda43623-18db-4cfe-8b09-82de16371212"),f="https://auth.nomoreparties.co",O=function(e){if(e.ok)return e.json()},v=s.a.createContext(),x=n(12),g=n(24),k=function(){return Object(a.jsx)("div",{className:"preloader",children:Object(a.jsx)("div",{className:"preloader__circle"})})},C=function(e){var t=e.component,n=Object(g.a)(e,["component"]);return Object(a.jsx)(b.b,{children:function(){return n.isChecking?Object(a.jsx)(k,{}):n.isLoggedIn?Object(a.jsx)(t,Object(x.a)({},n)):Object(a.jsx)(b.a,{to:"./sign-in"})}})},N=n.p+"static/media/logo.410cfab4.svg";var y=function(e){return Object(a.jsx)("header",{className:"header",children:Object(a.jsxs)("div",{className:"header__content ".concat(e.isLoggedIn?"header__content_burger":""),children:[Object(a.jsx)(o.b,{to:"",className:"header__link",children:Object(a.jsx)("img",{src:N,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"})}),e.isLoggedIn&&Object(a.jsx)("button",{type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"header__burger-btn ".concat(e.isBurgerActive?"header__burger-btn_active":""),onClick:e.onBurgerClick}),Object(a.jsx)("nav",{className:"header__menu",children:Object(a.jsx)("ul",{className:"header__menu-links ".concat(e.isLoggedIn?"header__menu-links_burger":""," ").concat(e.isBurgerActive?"header__menu-links_visible":""),children:Object(a.jsxs)(b.d,{children:[Object(a.jsx)(b.b,{path:"/sign-up",children:Object(a.jsx)("li",{className:"header__menu-item",children:Object(a.jsx)(o.b,{to:"/sign-in",className:"header__menu-link",children:"\u0412\u043e\u0439\u0442\u0438"})})}),Object(a.jsx)(b.b,{path:"/sign-in",children:Object(a.jsx)("li",{className:"header__menu-item",children:Object(a.jsx)(o.b,{to:"/sign-up",className:"header__menu-link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})}),e.isLoggedIn?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("li",{className:"header__user-email",children:e.userEmail}),Object(a.jsx)("li",{onClick:e.onSignOut,className:"header__menu-link header__menu-link_dimmed",children:"\u0412\u044b\u0439\u0442\u0438"})]}):""]})})})]})})},w=n(15);var S=function(){var e=Object(r.useState)({}),t=Object(m.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)({}),c=Object(m.a)(s,2),i=c[0],o=c[1],u=Object(r.useState)(!1),l=Object(m.a)(u,2),d=l[0],p=l[1];return{handleChange:function(e){var t=e.target,r=t.name,s=t.value,c=t.validationMessage;a(Object(x.a)(Object(x.a)({},n),{},Object(w.a)({},r,s))),o(Object(x.a)(Object(x.a)({},i),{},Object(w.a)({},r,c)))},validateForm:function(e){var t=e.target.form;p(t.checkValidity())},setValues:a,setFormValidity:p,reset:function(){a({}),o({}),p({})},values:n,errors:i,formValidity:d}};var E=Object(b.h)((function(e){var t=S(),n=t.handleChange,s=t.validateForm,c=t.validateInput,i=t.values,o=t.errors,u=t.formValidity,l=i.password,d=i.email,p=e.setLoginError;return Object(r.useEffect)((function(){p(!1)}),[p]),Object(a.jsx)("div",{className:"auth-form",children:Object(a.jsxs)("form",{action:"#",method:"POST",name:"login-form",className:"form",onChange:s,onSubmit:function(t){t.preventDefault(),e.onSubmit(l,d)},noValidate:!0,children:[Object(a.jsx)("h2",{className:"form__title form__title_dark",children:"\u0412\u0445\u043e\u0434"}),Object(a.jsxs)("div",{className:"form__inputs-container",children:[Object(a.jsx)("input",{id:"user-email",type:"email",name:"email",autoComplete:"email",className:"form__input form__input_dark ".concat(o.email?"form__input_type_error":""),placeholder:"Email",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",minLength:"2",onInput:c,onChange:n,required:!0}),o.email&&Object(a.jsx)("span",{className:"form__input-error",children:o.email}),Object(a.jsx)("input",{id:"user-password",type:"password",name:"password",autoComplete:"password",className:"form__input form__input_dark ".concat(o.password?"form__input_type_error":""),placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onInput:c,onChange:n,required:!0}),o.password&&Object(a.jsx)("span",{className:"form__input-error",children:o.password}),Object(a.jsx)("div",{className:"form__divider"}),e.loginError&&Object(a.jsx)("span",{className:"form__submit-error",children:e.loginError?"Email \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0432\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e":""})]}),Object(a.jsx)("button",{disabled:!u,type:"submit",className:"form__submit-btn form__submit-btn_dark ".concat(u?"":"form__submit-btn_disabled"),children:e.submitBtn})]})})}));var L=Object(b.h)((function(e){var t=S(),n=t.handleChange,r=t.validateForm,s=t.values,c=t.errors,i=t.formValidity,u=s.password,l=s.email;return Object(a.jsx)("div",{className:"auth-form",children:Object(a.jsxs)("form",{action:"#",method:"POST",name:"register-form",className:"form",onChange:r,onSubmit:function(t){t.preventDefault(),e.onSubmit(u,l)},noValidate:!0,children:[Object(a.jsx)("h2",{className:"form__title form__title_dark",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(a.jsxs)("div",{className:"form__inputs-container",children:[Object(a.jsx)("input",{id:"user-email",type:"email",name:"email",autoComplete:"email",className:"form__input form__input_dark ".concat(c.email?"form__input_type_error":""),placeholder:"Email",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",minLength:"2",onChange:n,required:!0}),c.email&&Object(a.jsx)("span",{className:"form__input-error form__input-error_active",children:c.email}),Object(a.jsx)("input",{id:"user-password",type:"password",name:"password",autoComplete:"password",className:"form__input form__input_dark ".concat(c.password?"form__input_type_error":""),placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",minLength:"8",onChange:n,required:!0}),c.password&&Object(a.jsx)("span",{className:"form__input-error form__input-error_active",children:c.password})]}),Object(a.jsx)("button",{disabled:!i,type:"submit",className:"form__submit-btn form__submit-btn_dark ".concat(i?"":"form__submit-btn_disabled"),children:e.submitBtn}),Object(a.jsx)(o.b,{to:"/sign-in",className:"form__caption",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})})}));var D=function(e){var t=Object(r.useContext)(v),n=e.card.owner._id===t._id,s="card__delete-btn ".concat(n?"card__delete-btn_visible":""),c=e.card.likes.some((function(e){return e._id===t._id})),i="card__like-icon ".concat(c?"card__like-icon_active":"");return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("button",{type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",className:s,onClick:function(){e.onCardDelete(e.card)}}),Object(a.jsx)("img",{className:"card__image",src:e.card.link,alt:"#",onClick:function(){e.onCardClick(e.card)}}),Object(a.jsxs)("div",{className:"card__body",children:[Object(a.jsx)("h2",{className:"card__title",children:e.card.name}),Object(a.jsxs)("div",{className:"card__like-btn",children:[Object(a.jsx)("button",{type:"button","aria-label":"\u041b\u0430\u0439\u043a",className:i,onClick:function(){e.onCardLike(e.card)}}),Object(a.jsx)("p",{className:"card__like-counter",children:e.card.likes.length})]})]})]})};var B=function(e){var t=Object(r.useContext)(v),n=e.cards.map((function(t){return Object(a.jsx)(D,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}));return Object(a.jsxs)("main",{className:"main",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsx)("div",{className:"profile__user-pic",style:{backgroundImage:"url(".concat(t.avatar,")")},onClick:e.onEditAvatar}),Object(a.jsxs)("div",{className:"profile__user-info",children:[Object(a.jsxs)("div",{className:"profile__first-row",children:[Object(a.jsx)("h1",{className:"profile__user-name",children:t.name}),Object(a.jsx)("button",{type:"button",className:"profile__edit-btn","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:e.onEditProfile})]}),Object(a.jsx)("p",{className:"profile__user-about",children:t.about})]})]}),Object(a.jsx)("button",{type:"button",className:"profile__add-btn","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",onClick:e.onAddPlace})]}),Object(a.jsx)("section",{className:"cards",children:n})]})};var P=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var U=function(e){var t=e.isOpen,n=e.onClose;Object(r.useEffect)((function(){if(t)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"Escape"===e.key&&n()}}),[t,n])};var T=function(e){var t=e.isOpen,n=e.onClose;Object(r.useEffect)((function(){if(t)return document.addEventListener("click",e),function(){document.removeEventListener("click",e)};function e(e){e.target.classList.contains("popup_opened")&&n()}}),[t,n])};var V=function(e){var t=e.isOpen,n=e.onClose;U(t,n);var r=T(e);return Object(a.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),onClick:r,children:Object(a.jsx)("div",{className:"popup__container",children:Object(a.jsxs)("form",{action:"#",method:"POST",name:"".concat(e.name,"-form"),className:"popup_form_type_".concat(e.name),onChange:e.onChange,onSubmit:e.onSubmit,noValidate:!0,children:[Object(a.jsx)("button",{type:"reset","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"popup__close-btn",onClick:e.onClose}),Object(a.jsx)("h3",{className:"popup__title",children:e.title}),e.children,Object(a.jsx)("button",{disabled:!e.isValid,type:"submit",className:"form__submit-btn ".concat(e.isValid?"":"form__submit-btn_disabled"),children:e.submitBtn})]})})})};var I=function(e){var t=S(),n=t.handleChange,r=t.validateForm,s=t.reset,c=t.values,i=t.errors,o=t.formValidity;return Object(a.jsxs)(V,{name:"user-pic-edit",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submitBtn:e.submitBtn||"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c",isOpen:e.isOpen,isValid:o,onChange:r,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar(c,s)},onClose:e.onClose,children:[Object(a.jsx)("input",{id:"user-pic-url",type:"url",name:"link",value:c.link||"",onChange:n,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0443",className:"form__input ".concat(i.link?"form__input_type_error":""),required:!0}),i.link&&Object(a.jsx)("span",{className:"form__input-error",children:i.link})]})};var z=function(e){var t=Object(r.useContext)(v),n=S(),s=n.handleChange,c=n.validateForm,i=n.setValues,o=n.reset,u=n.values,l=n.errors,d=n.formValidity;return Object(r.useEffect)((function(){i(t)}),[t,i]),Object(a.jsxs)(V,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submitBtn:e.submitBtn||"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,isValid:d,onChange:c,onSubmit:function(t){t.preventDefault(),e.onUpdateUser(u,o)},onClose:e.onClose,children:[Object(a.jsx)("input",{id:"user-name",type:"text",name:"name",value:u.name||"",onChange:s,placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",autoComplete:"name",className:"form__input ".concat(l.name?"form__input_type_error":""),minLength:"2",maxLength:"40",required:!0}),l.name&&Object(a.jsx)("span",{className:"form__input-error",children:l.name}),Object(a.jsx)("input",{id:"user-about",type:"text",name:"about",value:u.about||"",onChange:s,placeholder:"\u0427\u0435\u043c \u0432\u044b \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0435\u0441\u044c?",autoComplete:"off",className:"form__input ".concat(l.about?"form__input_type_error":""),minLength:"2",maxLength:"200",required:!0}),l.about&&Object(a.jsx)("span",{className:"form__input-error",children:l.about})]})};var A=function(e){var t=S(),n=t.handleChange,r=t.validateForm,s=t.reset,c=t.values,i=t.errors,o=t.formValidity;return Object(a.jsxs)(V,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submitBtn:e.submitBtn||"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,isValid:o,onChange:r,onSubmit:function(t){t.preventDefault(),e.onAddPlace(c,s)},onClose:e.onClose,children:[Object(a.jsx)("input",{id:"card-title",type:"text",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:c.name||"",onChange:n,className:"form__input ".concat(i.name?"form__input_type_error":""),minLength:"2",maxLength:"30",required:!0}),i.name&&Object(a.jsx)("span",{className:"form__input-error",children:i.name}),Object(a.jsx)("input",{id:"card-url",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",value:c.link||"",onChange:n,className:"form__input ".concat(i.link?"form__input_type_error":""),required:!0}),i.link&&Object(a.jsx)("span",{className:"form__input-error",children:i.link})]})};var F=function(e){U(e);var t=T(e);return Object(a.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),onClick:t,children:Object(a.jsxs)("div",{className:"popup__preview-container",children:[Object(a.jsx)("button",{type:"reset","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"popup__close-btn",onClick:e.onClose}),Object(a.jsx)("img",{className:"popup__image",src:e.card?e.card.link:"#",alt:e.card.name}),Object(a.jsx)("p",{className:"popup__image-caption",children:e.card.name})]})})};var q=function(e){return Object(a.jsx)(V,{name:"confirmation-form",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submitBtn:e.submitBtn||"\u0414\u0430",isOpen:e.isOpen,isValid:!0,onSubmit:function(t){t.preventDefault(),e.onCardDelete(e.card)},onClose:e.onClose})},R=n.p+"static/media/success.1b6082f8.svg",J=n.p+"static/media/fail.df8eddf6.svg";var M=function(e){U(e);var t=T(e);return Object(a.jsx)("div",{className:"popup popup_type_auth-status ".concat(e.isOpen?"popup_opened":""),onClick:t,children:Object(a.jsxs)("div",{className:"popup__container popup__container_wide",children:[Object(a.jsx)("button",{type:"reset","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"popup__close-btn popup__close-btn_centered",onClick:e.onClose}),Object(a.jsx)("img",{className:"popup__auth-status-icon",src:e.status?R:J,alt:""}),Object(a.jsx)("h3",{className:"popup__message",children:e.status?e.successMessage:e.failMessage})]})})};var H=function(){var e=Object(b.g)(),t=Object(r.useState)({}),n=Object(m.a)(t,2),s=n[0],c=n[1],i=Object(r.useState)({}),o=Object(m.a)(i,2),l=o[0],j=o[1],h=Object(r.useState)([]),x=Object(m.a)(h,2),g=x[0],k=x[1],N=Object(r.useState)(!1),w=Object(m.a)(N,2),S=w[0],D=w[1],U=Object(r.useState)(!1),T=Object(m.a)(U,2),V=T[0],R=T[1],J=Object(r.useState)(!1),H=Object(m.a)(J,2),$=H[0],G=H[1],K=Object(r.useState)(!1),Q=Object(m.a)(K,2),W=Q[0],X=Q[1],Y=Object(r.useState)(!1),Z=Object(m.a)(Y,2),ee=Z[0],te=Z[1],ne=Object(r.useState)(!1),ae=Object(m.a)(ne,2),re=ae[0],se=ae[1],ce=Object(r.useState)(!1),ie=Object(m.a)(ce,2),oe=ie[0],ue=ie[1],le=Object(r.useState)(!1),de=Object(m.a)(le,2),pe=de[0],me=de[1],be=Object(r.useState)(!1),je=Object(m.a)(be,2),he=je[0],_e=je[1],fe=Object(r.useState)(!1),Oe=Object(m.a)(fe,2),ve=Oe[0],xe=Oe[1],ge=Object(r.useState)(!0),ke=Object(m.a)(ge,2),Ce=ke[0],Ne=ke[1],ye=Object(r.useState)(""),we=Object(m.a)(ye,2),Se=we[0],Ee=we[1],Le=Object(r.useState)(""),De=Object(m.a)(Le,2),Be=De[0],Pe=De[1],Ue=S||V||$||ee;function Te(e,t){Pe(e?t:"")}function Ve(){D(!1),R(!1),G(!1),te(!1),X(!1),se(!1),j({})}return Object(r.useEffect)((function(){Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.getUserData();case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),Object(r.useEffect)((function(){Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.getInitialCards();case 3:t=e.sent,k(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),Object(r.useEffect)((function(){Object(p.a)(d.a.mark((function t(){var n,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,Ne(!0),!(n=localStorage.getItem("token"))){t.next=8;break}return t.next=6,r=n,fetch("".concat(f,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}}).then((function(e){return O(e)}));case 6:(a=t.sent)&&(xe(!0),e.push("/"),Ee(a.data.email));case 8:t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),xe(!1),e.push("/sign-in");case 14:return t.prev=14,Ne(!1),t.finish(14);case 17:case"end":return t.stop()}var r}),t,null,[[0,10,14,17]])})))()}),[e]),Object(a.jsx)(v.Provider,{value:s,children:Object(a.jsx)("div",{className:"page ".concat(Ue?"page_no-scroll":""),children:Object(a.jsxs)("div",{className:"page__container",children:[Object(a.jsx)(y,{userEmail:Se,isLoggedIn:ve,isBurgerActive:oe,onBurgerClick:function(){ue(!oe)},onSignOut:function(t){t.preventDefault(),localStorage.removeItem("token"),ue(!1),xe(!1),e.push("/sign-in")}}),Object(a.jsxs)(b.d,{children:[Object(a.jsx)(b.b,{path:"/sign-up",children:Object(a.jsx)(L,{onSubmit:function(t,n){Te(!0,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f..."),function(e,t){return fetch("".concat(f,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return O(e)}))}(t,n).then((function(t){t?(e.push("/sign-in"),se(!0),me(!0)):(se(!0),me(!1))})).catch((function(e){console.log(e)})).finally((function(){Te(!1)}))},submitBtn:Be||"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})}),Object(a.jsx)(b.b,{path:"/sign-in",children:Object(a.jsx)(E,{onSubmit:function(t,n){Te(!0,"\u0412\u0445\u043e\u0434..."),function(e,t){return fetch("".concat(f,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return O(e)}))}(t,n).then((function(t){xe(!0),Ee(n),localStorage.setItem("token",t.token),e.push("/")})).catch((function(e){_e(!0),console.log(e)})).finally((function(){Te(!1)}))},loginError:he,setLoginError:_e,submitBtn:Be||"\u0412\u043e\u0439\u0442\u0438"})}),Object(a.jsx)(C,{path:"/",isLoggedIn:ve,isChecking:Ce,component:B,cards:g,onEditAvatar:function(){D(!0)},onEditProfile:function(){R(!0)},onAddPlace:function(){G(!0)},onCardClick:function(e){X(!0),j(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===s._id}));Object(p.a)(d.a.mark((function n(){var a,r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,_.changeCardLikeStatus(e._id,t);case 3:a=n.sent,r=g.map((function(t){return t._id===e._id?a:t})),k(r),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},onCardDelete:function(e){te(!0),j(e)}})]}),Object(a.jsx)(P,{}),Object(a.jsx)(M,{status:pe,successMessage:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!",failMessage:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.",isOpen:re,onClose:Ve}),Object(a.jsx)(I,{isOpen:S,submitBtn:Be,onUpdateAvatar:function(e,t){Object(p.a)(d.a.mark((function n(){var a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Te(!0,"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435..."),n.next=4,_.editUserPic(e);case 4:a=n.sent,c(a),Ve(),t(),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:return n.prev=13,Te(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})))()},onClose:Ve}),Object(a.jsx)(z,{isOpen:V,submitBtn:Be,onUpdateUser:function(e){Object(p.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,Te(!0,"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),t.next=4,_.editUserData(e);case 4:n=t.sent,c(n),Ve(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:return t.prev=12,Te(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))()},onClose:Ve}),Object(a.jsx)(A,{isOpen:$,submitBtn:Be,onAddPlace:function(e,t){Object(p.a)(d.a.mark((function n(){var a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Te(!0,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435..."),n.next=4,_.addCard(e);case 4:a=n.sent,k([a].concat(Object(u.a)(g))),Ve(),t(),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:return n.prev=13,Te(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})))()},onClose:Ve}),Object(a.jsx)(F,{isOpen:W,name:"image-vwr",card:l,onClose:Ve}),Object(a.jsx)(q,{isOpen:ee,card:l,submitBtn:Be,onCardDelete:function(e){Object(p.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,Te(!0,"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435..."),t.next=4,_.removeCard(e._id);case 4:n=g.filter((function(t){return t._id!==e._id})),k(n),Ve(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:return t.prev=12,Te(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))()},onClose:Ve})]})})})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(o.a,{basename:"/",children:Object(a.jsx)(H,{})})}),document.getElementById("root")),$()}},[[42,1,2]]]);
//# sourceMappingURL=main.93cd5286.chunk.js.map