import{r as c,s as a,p as d,n as f,e as m}from"./vendor.2235af2e.js";const P=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}};P();var $=Object.defineProperty,M=Object.getOwnPropertyDescriptor,w=(n,r,l,o)=>{for(var e=o>1?void 0:o?M(r,l):r,t=n.length-1,s;t>=0;t--)(s=n[t])&&(e=(o?s(r,l,e):s(e))||e);return o&&e&&$(r,l,e),e};const h=[c`
  .counter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .counter > .actions > * {
    margin: 0.5rem;
  }
  .counter > span {
    font-size: 1.5em;
  }
`];class v{constructor(r){this.host=r,this.value=0,r.addController(this)}hostConnected(){this.value=0}increment(){this.value++,this.host.requestUpdate()}decrement(){this.value--,this.host.requestUpdate()}}function y(n){return d`<div class="counter">
    <span>${n.counter.value}</span>
    <div class="actions">
      <button @click=${()=>n.counter.increment()}>Increment +</button>
      <button @click=${()=>n.counter.decrement()}>Decrement -</button>
    </div>
  </div>`}let p=class extends a{constructor(){super(...arguments);this.counter=new v(this)}render(){return y(this)}};p.styles=h;p=w([f("counter-module")],p);var j=Object.defineProperty,x=Object.getOwnPropertyDescriptor,g=(n,r,l,o)=>{for(var e=o>1?void 0:o?x(r,l):r,t=n.length-1,s;t>=0;t--)(s=n[t])&&(e=(o?s(r,l,e):s(e))||e);return o&&e&&j(r,l,e),e};const _=[c`
  header {
    height: 60px;
    background-color: #f5f5f5;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`];function O(n){return d`<header>${n.title}</header>`}let u=class extends a{constructor(){super(...arguments);this.title="Lit Modules"}render(){return O(this)}};u.styles=_;g([m({type:String})],u.prototype,"title",2);u=g([f("header-module")],u);var C=Object.defineProperty,D=Object.getOwnPropertyDescriptor,b=(n,r,l,o)=>{for(var e=o>1?void 0:o?D(r,l):r,t=n.length-1,s;t>=0;t--)(s=n[t])&&(e=(o?s(r,l,e):s(e))||e);return o&&e&&C(r,l,e),e};const L=[c`
    main {
      display: flex;
      flex-direction: column;
    }
  `,_,h];function S(n){return d`<main>
    ${O({title:window.document.title})}
    ${y({counter:n.counter})}
  </main> `}let i=class extends a{constructor(){super(...arguments);this.name="World",this.counter=new v(this)}render(){return S(this)}};i.styles=L;b([m({type:String})],i.prototype,"name",2);i=b([f("app-module")],i);
