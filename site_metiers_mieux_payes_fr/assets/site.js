
(function(){
  // Simple consent banner (localStorage)
  const key = "consent_ads_v1";
  function showConsent(){
    if (localStorage.getItem(key)) return;
    const bar = document.createElement("div");
    bar.setAttribute("role","dialog");
    bar.setAttribute("aria-label","Consentement cookies");
    bar.style.cssText = "position:fixed;left:12px;right:12px;bottom:12px;max-width:1020px;margin:0 auto;background:#111827;color:#fff;padding:12px 14px;border-radius:14px;box-shadow:0 8px 24px rgba(0,0,0,.25);z-index:9999;display:flex;gap:10px;flex-wrap:wrap;align-items:center;justify-content:space-between";
    bar.innerHTML = `
      <div style="max-width:760px;font-size:13px;opacity:.95">
        Ce site utilise des cookies/traceurs pour mesurer l’audience et afficher de la publicité.
        <span style="opacity:.85">Vous pouvez accepter ou refuser.</span>
      </div>
      <div style="display:flex;gap:8px">
        <button id="consent-yes" style="padding:10px 12px;border-radius:12px;border:0;background:#1b4dff;color:#fff;font-weight:700;cursor:pointer">Accepter</button>
        <button id="consent-no" style="padding:10px 12px;border-radius:12px;border:1px solid rgba(255,255,255,.35);background:transparent;color:#fff;font-weight:700;cursor:pointer">Refuser</button>
      </div>
    `;
    document.body.appendChild(bar);
    document.getElementById("consent-yes").onclick = () => {
      localStorage.setItem(key,"yes"); bar.remove();
      // TODO: init ads/analytics here after consent
    };
    document.getElementById("consent-no").onclick  = () => { localStorage.setItem(key,"no"); bar.remove(); };
  }
  window.addEventListener("DOMContentLoaded", showConsent);
})();
