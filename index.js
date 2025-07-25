import{a as f,S as y,i as a}from"./assets/vendor-DqB7j7Ix.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/";async function h(i){const t={key:"51328108-e5351328d4cc0773f2b3617f5",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(p,{params:t})).data}const n=document.querySelector(".gallery"),c=document.querySelector(".loader");function g(i){n.innerHTML=i.map(({webformatURL:s,largeImageURL:l,tags:e,likes:r,views:o,comments:m,downloads:d})=>`
    <li class="gallery-item">
    <a class="gallery-link" href="${l}">
        <img class="gallery-img" src="${s}" alt="${e}"/>
        </a>
            <ul class="descr-list">
                <li class="descr-list-item">
                <h2>Likes</h2>
                <p>${r}</p>
                </li>
                <li class="descr-list-item">
                <h2>Views</h2>
                <p>${o}</p>
                </li>
                <li class="descr-list-item">
                <h2>Comments</h2>
                <p>${m}</p>
                </li>
                <li class="descr-list-item">
                <h2>Downloads</h2>
                <p>${d}</p>
                </li>
            </ul>
        </li>
        `).join(""),new y(".gallery a",{}).refresh()}function L(){n.innerHTML=""}function w(){c.style.display="block"}function b(){c.style.display="none"}const u=document.querySelector(".form"),S=u.elements["search-text"];u.addEventListener("submit",async i=>{i.preventDefault();const t=S.value.trim();if(!t){a.warning({message:"Please enter a search term!"});return}L(),w();try{const s=await h(t);s.hits.length===0?a.error({message:"Sorry, there are no images matching your search query. Please try again!"}):g(s.hits)}catch{a.error({message:"An error occurred while fetching images."})}finally{b()}});
//# sourceMappingURL=index.js.map
