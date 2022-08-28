"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[802],{1689:function(n,e,t){t.d(e,{S:function(){return i}});var r=t(9434),i=function(){var n=(0,r.gR)();return[(0,r.I0)(),n]}},2802:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r,i,o,a,u,c,s,l,d,x,m=t(885),p=t(5562),f=t(5705),h=t(6890),b=t(1689),j=t(3284),g=j.Ry().shape({name:j.Z_().min(2).required(),number:j.Z_().length(7).required()}),v=t(168),w=t(6444),Z=(0,w.ZP)(f.l0)(r||(r=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 200px;\n\n  @media screen and (max-width: 640px) {\n    margin: 0 0 30px 0;\n  }\n"]))),y=w.ZP.p(i||(i=(0,v.Z)(["\n  margin-bottom: 10px;\n  font-size: 10px;\n  color: white;\n"]))),C=(0,w.ZP)(f.gN)(o||(o=(0,v.Z)(["\n  display: block;\n  width: 100%;\n  margin: 0 0 10px 0;\n  padding: 8px;\n  background-color: #F3F3F3;\n  outline: none;\n  border: 2px solid #D75C78;\n  box-shadow: inset 0px 0px 20px -1px rgba(0, 0, 0, 0.5);\n  border-radius: 5px;\n"]))),k=t(98),P=t(184),S=function(){var n=(0,b.S)(),e=(0,m.Z)(n,2),t=e[0],r=(0,e[1])(h.kk);return(0,P.jsx)(f.J9,{initialValues:{name:"",number:""},onSubmit:function(n,e){var i,o=e.resetForm,a={name:(i=n.name,i.split(" ").map((function(n){return n[0].toUpperCase()+n.slice(1)})).join(" ")),number:n.number};!function(n){var e=n.name.toLowerCase();return r.find((function(n){return n.name.toLowerCase()===e}))}(a)?(t((0,h.jv)(a)),o()):p.Notify.failure("".concat(a.name," already exist"))},validationSchema:g,children:function(n){return(0,P.jsxs)(Z,{children:[(0,P.jsx)(C,{type:"text",name:"name",placeholder:"name",onChange:n.handleChange,value:n.values.name}),(0,P.jsx)(f.Bc,{name:"name",render:function(n){return(0,P.jsx)(y,{children:n})}}),(0,P.jsx)(C,{type:"tel",name:"number",placeholder:"number",onChange:n.handleChange,value:n.values.number}),(0,P.jsx)(f.Bc,{name:"number",render:function(n){return(0,P.jsx)(y,{children:n})}}),(0,P.jsx)(k.K,{type:"submit",children:"ADD NEW CONTACT"})]})}})},z=t(2791),E=t(2007),N=t.n(E),T=(0,w.ZP)(f.l0)(a||(a=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 200px;\n"]))),B=w.ZP.button(u||(u=(0,v.Z)(["\n\tdisplay: block;\n\tpadding: 5px 20px;\n\tborder: none;\n\tborder-radius: 2px;\n\toutline: none;\n\tbackground-color: #D45B78;\n\tcolor: ",";\n\tcursor: pointer;\n  \ttransition: all 250ms ease-in-out;\n\n\t@media screen and (max-width: 425px) {\n\t\tpadding: 3px 10px;\n\t\tfont-size: 9px;\n\t}\n\n\t&:hover {\n\t\tbox-shadow: 5px 5px 18px -3px rgba(255,255,255,0.67);\n\t}\n"])),(function(n){return n.theme.colors.white})),D=function(n){var e=n.item,t=n.onClose,r=(0,b.S)(),i=(0,m.Z)(r,2),o=i[0],a=(0,i[1])(h.kk),u=function(n){var e=n.split(" ").map((function(n){return n[0].toUpperCase()+n.slice(1)})).join(" ");return e};return(0,P.jsx)(f.J9,{initialValues:{name:e.name,number:e.number},onSubmit:function(n){var r={id:e.id,name:u(n.name),number:n.number};!function(n){var e=n.name.toLowerCase(),t=a.find((function(n){return n.name.toLowerCase()===e}));return t}(r)?(o((0,h.gg)(r)),t()):p.Notify.failure("".concat(r.name," already exist"))},validationSchema:g,children:function(n){return(0,P.jsxs)(T,{children:[(0,P.jsx)(C,{type:"text",name:"name",onChange:n.handleChange,value:n.values.name}),(0,P.jsx)(f.Bc,{name:"name",render:function(n){return(0,P.jsx)(y,{children:n})}}),(0,P.jsx)(C,{type:"text",name:"number",onChange:n.handleChange,value:n.values.number}),(0,P.jsx)(f.Bc,{name:"number",render:function(n){return(0,P.jsx)(y,{children:n})}}),(0,P.jsx)(B,{type:"submit",children:"EDIT CONTACT"})]})}})},L=t(7425),_=w.ZP.div(c||(c=(0,v.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),F=w.ZP.div(s||(s=(0,v.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),q=w.ZP.button(l||(l=(0,v.Z)(["\n  position: absolute;\n  top: -40px;\n  right: -40px;\n  padding: 5px;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  color: ",";\n  cursor: pointer;\n  transition: all 250ms ease-in-out;\n\n  &:hover {\n    color: #D45B78;\n  }\n"])),(function(n){return n.theme.colors.white})),O=(0,w.ZP)(L.tgW)(d||(d=(0,v.Z)(["\n  color: inherit;\n"]))),R=function(n){var e=n.item,t=n.onClose;(0,z.useEffect)((function(){var n=function(n){"Escape"===n.code&&t()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[t]);return(0,P.jsx)(_,{onClick:function(n){n.target===n.currentTarget&&t()},children:(0,P.jsxs)(F,{children:[(0,P.jsx)(q,{type:"button",onClick:t,children:(0,P.jsx)(O,{size:"30px"})}),(0,P.jsx)(D,{item:e,onClose:t})]})})};D.propTypes={item:N().objectOf(N().string).isRequired,onClose:N().func.isRequired};var A,I,J,V=w.ZP.button(x||(x=(0,v.Z)(["\n  display: inline-block;\n  margin: 0 7px;\n  padding: 3px;\n  border: none;\n  background-color: transparent;\n  color: ",";\n  cursor: pointer;\n\n  &:focus-visible {\n    outline: none;\n  }\n"])),(function(n){return n.theme.colors.white})),U=t(3853),W=t(8820),K=function(n){var e=n.item,t=(0,b.S)(),r=(0,m.Z)(t,1)[0],i=(0,z.useState)(!1),o=(0,m.Z)(i,2),a=o[0],u=o[1];return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)("p",{children:[e.name,": ",e.number]}),(0,P.jsxs)("div",{children:[(0,P.jsx)(V,{type:"button",onClick:function(){u(!0)},children:(0,P.jsx)(U.IYd,{})}),(0,P.jsx)(V,{type:"button",onClick:function(){return n=e.id,void r((0,h.QZ)(n));var n},children:(0,P.jsx)(W.VPh,{})})]}),a&&(0,P.jsx)(R,{item:e,onClose:function(){u(!1)}})]})},Q=w.ZP.li(A||(A=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 4px;\n  border-bottom: 1px solid ",";\n  font-size: 20px;\n  color: ",";\n\n  @media screen and (max-width: 640px) {\n    font-size: 14px;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.white})),Y=w.ZP.div(I||(I=(0,v.Z)(["\n  max-width: 200px;\n  text-align: center;\n  font-size: 14px;\n"]))),G=function(){var n=(0,b.S)(),e=(0,m.Z)(n,2),t=e[0],r=(0,e[1])(h.kk);return(0,z.useEffect)((function(){t((0,h.Ol)())}),[t]),(0,P.jsxs)("ul",{children:[0===r.length&&(0,P.jsx)(Y,{children:"Now youre contacts list is empty. Just enter new contact in form"}),r.map((function(n){return(0,P.jsx)(Q,{children:(0,P.jsx)(K,{item:n})},n.id)}))]})},H=w.ZP.div(J||(J=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 40px 0 0 0;\n\n  @media screen and (max-width: 640px) {\n    flex-direction: column;\n  }\n"]))),M=function(){return(0,P.jsxs)(H,{children:[(0,P.jsx)(S,{}),(0,P.jsx)(G,{})]})}}}]);
//# sourceMappingURL=802.1efbe40d.chunk.js.map