
(()=>{
 if(!window.LYN_PERF?.mobile)return;
 const sync=()=>document.documentElement.classList.toggle('lyn-page-hidden',document.hidden);
 document.addEventListener('visibilitychange',sync,{passive:true});sync();
})();
