"use strict";(self.webpackChunkto_do_list=self.webpackChunkto_do_list||[]).push([[826],{753:(e,t,n)=>{const a=document.querySelector(".modal"),o=e=>fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rmtBPEBrkoV0tXGWEWRY/comments?item_id=${e}`).then((e=>e.json())),c=(e,t)=>fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rmtBPEBrkoV0tXGWEWRY/likes/").then((e=>e.json())).then((n=>{n.forEach((n=>{n.item_id===e.name&&(t.textContent=n.likes)}))}));function s(e){const t=document.querySelector("#pokemon-container"),n=document.createElement("div"),s=document.createElement("img"),d=document.createElement("h3"),l=document.createElement("div"),m=document.createElement("span"),i=document.createElement("p"),r=document.createElement("p"),p=document.createElement("button");t.appendChild(n),n.className="pokemon",n.appendChild(s),s.className="pokemon-img",s.src=e.sprites.other["official-artwork"].front_default,n.appendChild(d),d.className="pokemon-name",d.textContent=e.forms[0].name,n.appendChild(l),l.className="pokemon-likes",l.appendChild(m),m.textContent="❤️",m.classList="heart-likes",m.dataset.pokeId=e.forms[0].name,l.appendChild(i),i.className="likes-counter",l.appendChild(r),i.textContent="0",r.textContent="likes",p.textContent="comment",n.appendChild(p),p.className="comment-button",setTimeout((()=>c(e.forms[0],i)),1e3),m.addEventListener("click",(()=>{m.classList.remove("heart-likes"),(async e=>{(await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rmtBPEBrkoV0tXGWEWRY/likes/",{method:"POST",body:JSON.stringify({item_id:e}),headers:{"Content-type":"application/json; charset=UTF-8"}})).text()})(m.dataset.pokeId),setTimeout((()=>c(e.forms[0],i)),700)})),n.addEventListener("click",(async t=>{t.target!==m&&(document.querySelector(".modal-container").classList.add("show-modal"),await(()=>{for(;a.firstChild;)a.removeChild(a.lastChild)})(),function(e){const t=document.querySelector(".modal-container"),n=document.querySelector(".modal");t.appendChild(n);const a=document.createElement("span"),c=document.createElement("div");n.appendChild(c);const s=document.createElement("img");s.src=e.sprites.other.dream_world.front_default,s.className="card-pokemon-inside",c.appendChild(s),c.className="individual-modal-card";const d=document.createElement("h4");d.textContent=e.forms[0].name,c.appendChild(d);const l=document.createElement("div"),m=document.createElement("h5");c.appendChild(l),l.className="card-types-container",l.appendChild(m),m.textContent="Types:",e.types.forEach((e=>{const t=document.createElement("p");t.textContent=e.type.name,l.appendChild(t),t.className="card-types"}));const{abilities:i}=e,r=document.createElement("div"),p=document.createElement("h5");c.appendChild(r),r.className="card-abilities-container",r.appendChild(p),p.textContent="Abilities:",i.forEach((e=>{const t=document.createElement("p");t.textContent=e.ability.name,r.appendChild(t)}));const{moves:u}=e,h=document.createElement("div"),C=document.createElement("h5");c.appendChild(h),h.className="card-moves-container",h.appendChild(C),C.textContent="Moves:";for(let e=0;e<3;e+=1){const t=document.createElement("p");t.textContent=u[e].move.name,h.appendChild(t)}const E=document.createElement("div");E.className="individual-modal-stats",n.appendChild(E),E.appendChild(a),a.textContent="✖️",a.className="modal-close";const f=document.createElement("img");f.src=e.sprites.other.home.front_default,f.classList="poke-img-modal",E.appendChild(f);const v=document.createElement("h3");E.appendChild(v),v.textContent=e.forms[0].name;const k=document.createElement("div");k.className="modal-types",E.appendChild(k),c.classList.add(`${e.types[0].type.name}-card`),e.types.forEach((e=>{const t=document.createElement("p");t.textContent=e.type.name,t.className=e.type.name,k.appendChild(t)}));const y=document.createElement("h4"),x=document.createElement("ul");E.appendChild(y),y.textContent="Comments",E.appendChild(x),x.className="comments-container";const L=async()=>{x.innerHTML="";const t=await o(e.forms[0].name);t.length<1||void 0===t.length?y.textContent="Comments(0)":(y.textContent=`Comments (${t.length})`,t.forEach((e=>{const t=document.createElement("li");x.appendChild(t);const n=document.createElement("p"),a=document.createElement("p"),o=document.createElement("p");t.appendChild(n),n.textContent=e.creation_date,n.className="date-comm",t.appendChild(a),a.className="user-name",a.textContent=`${e.username}:`,t.appendChild(o),o.className="content-comm",o.textContent=e.comment})))};L();const g=document.createElement("form"),N=document.createElement("input"),b=document.createElement("input"),w=document.createElement("button");E.appendChild(g),g.className="comments-form",g.action="submit",g.appendChild(N),N.type="text",N.minLength=1,N.maxLength=10,N.required=!0,N.placeholder="Your Name",g.appendChild(b),b.placeholder="Your Comment",b.type="text",b.minLength=1,b.maxLength=27,b.required=!0,g.appendChild(w),w.textContent="Submit",w.addEventListener("click",(t=>{var n,a,c;t.preventDefault(),""===N.value||""===b.value?(N.placeholder="Please fill your name",b.placeholder="Please fill your comment"):((n=N.value,a=b.value,c=e.forms[0].name,fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rmtBPEBrkoV0tXGWEWRY/comments",{method:"POST",body:JSON.stringify({item_id:c,username:n,comment:a}),headers:{"Content-type":"application/json; charset=UTF-8"}})).then((()=>o(e.forms[0].name).then((()=>L())))),N.value="",b.value="")}))}(e))}))}const d=async()=>(await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")).json(),l=n.p+"abb12e6b8ee46a69f331.png",m=n.p+"21675bc6b9ed9457d02f.png";async function i(e,t){const n=await fetch(e[`${t}`].url),a=await n.json(),o=document.querySelector("#pokedex-container"),c=document.createElement("img");c.src=l,c.setAttribute("class","pokedex"),o.appendChild(c);const s=document.createElement("img");s.src=await a.sprites.versions["generation-v"]["black-white"].animated.front_default,s.className="pokedex-pokemon-inside",o.appendChild(s);const d=document.createElement("img");d.src=await a.sprites.other.home.front_default,d.className="pokedex-pokemon-outside",o.appendChild(d);const i=document.createElement("img");i.src=m,i.className="pokedex-light",o.appendChild(i);const r=document.createElement("p");r.textContent=a.forms[0].name.toUpperCase(),r.className="pokedex-pokemon-name",o.appendChild(r);const p=document.createElement("div");p.className="pokedex-pokemon-type",a.types.forEach((e=>{const t=document.createElement("p");t.textContent=e.type.name.toUpperCase(),p.appendChild(t)})),o.appendChild(p);const u=document.createElement("h2");u.className="microverse-title",o.appendChild(u)}const r=document.querySelector("#pokedex-container"),p=document.querySelector(".buttons"),u=()=>{for(;r.lastChild!==p;)r.removeChild(r.lastChild)};(function(){const e=document.querySelectorAll(".nav-link"),t=Array.from(e),n=document.querySelector("#pokemon-container"),a=document.querySelector("#pokedex-container"),o=document.querySelector("#pokeball-container");t.forEach((e=>{e.classList.contains("first-a")?e.addEventListener("click",(()=>{n.classList.remove("hide"),a.classList.add("hide"),o.classList.add("hide"),n.classList.remove("reduce-grid")})):e.classList.contains("second-a")?e.addEventListener("click",(()=>{a.classList.remove("hide"),n.classList.remove("hide"),o.classList.add("hide"),n.style.flex="1",a.style.flex="4",n.classList.add("reduce-grid")})):e.addEventListener("click",(()=>{o.classList.remove("hide"),a.classList.add("hide"),n.classList.add("hide")}))}))})(),document.addEventListener("DOMContentLoaded",(async()=>{const e=(await d()).results;document.querySelector("#pokemons-counter").textContent=e.length,e.forEach((async e=>{const t=await fetch(e.url);s(await t.json())})),i(e,0)})),document.addEventListener("click",(e=>{const t=document.querySelector(".modal-container"),n=document.querySelector(".modal-close");e.target!==t&&e.target!==n||t.classList.remove("show-modal")}));let h=0;const C=document.querySelector(".btn1"),E=document.querySelector(".btn2");C.addEventListener("click",(async()=>{const e=(await d()).results;0!==h&&(h-=1,await u(),i(e,h),console.log(h))})),E.addEventListener("click",(async()=>{const e=(await d()).results;h<150&&(h+=1,await u(),i(e,h),console.log(h))}))}},e=>{e(e.s=753)}]);