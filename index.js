import{a as f,S as p,i as l}from"./assets/vendor-BaxowRp9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function m(n){return f.get("https://pixabay.com/api/",{params:{key:"56410922-8c14f1efbc474126a654fcfe4",q:`${n}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(r=>r.data.hits).catch(r=>{console.log(r)})}const c=document.querySelector(".gallery");let y=new p(".gallery a");const d=document.querySelector(".loader");function h(n){const r=n.map(t=>`<a href="${t.largeImageURL}" class="gallery-link"
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
        </a>`);c.innerHTML=r.join(""),y.refresh()}function g(){c.innerHTML=""}function v(){d.classList.remove("hidden")}function i(){d.classList.add("hidden")}const u=document.querySelector(".form"),L=u.querySelector('[name="search-text"]');u.addEventListener("submit",b);function b(n){n.preventDefault(),g(),v();const r=L.value.trim();if(r){let t=[];m(r).then(s=>{i(),s.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!"}):(t=s,console.log(t),h(t))}).catch(s=>{i()})}else i(),l.error({message:"Please input some word"})}
//# sourceMappingURL=index.js.map
