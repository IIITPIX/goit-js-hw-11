import{a as u,S as f,i as c}from"./assets/vendor-BaxowRp9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();function p(o){return u.get("https://pixabay.com/api/",{params:{key:"56410922-8c14f1efbc474126a654fcfe4",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(r=>r.data.hits).catch(r=>{console.log(r)})}const l=document.querySelector(".gallery");let m=new f(".gallery a");const i=document.createElement("span");function y(o){const r=o.map(t=>`<a href="${t.largeImageURL}" class="gallery-link"
          ><img
            src="${t.webformatURL}"
            alt="${t.tags}"
            title=""
          />
          <div class="image-info">
            <div>
              <span>Likes</span>
              <p>${t.likes}</p>
            </div>
            <div>
              <span>Views</span>
              <p>${t.views}</p>
            </div>
            <div>
              <span>Comments</span>
              <p>${t.comments}</p>
            </div>
            <div>
              <span>Downloads</span>
              <p>${t.downloads}</p>
            </div>
          </div>
        </a>`);l.innerHTML=r.join(""),m.refresh()}function g(){l.innerHTML=""}function h(){i.classList.add("loader"),l.insertAdjacentElement("afterbegin",i)}function v(){i.remove()}const d=document.querySelector(".form"),L=d.querySelector('[name="search-text"]');d.addEventListener("submit",b);function b(o){o.preventDefault(),g(),h();const r=L.value.trim();if(r){let t=[];p(r).then(s=>{s.length===0?(v(),c.error({message:"Sorry, there are no images matching your search query. Please try again!"})):(t=s,console.log(t),y(t))})}else c.error({message:"Please input some word"})}
//# sourceMappingURL=index.js.map
