(function () {
  const L = { en:'English', es:'Español', fr:'Français', de:'Deutsch', pt:'Português', it:'Italiano', ru:'Русский', zh:'中文', ja:'日本語', ar:'العربية' };
  const FLAGS = {
    en:'<rect width="24" height="24" fill="#012169"/><path d="M0 0L24 24M24 0L0 24" stroke="#fff" stroke-width="4"/><path d="M0 0L24 24M24 0L0 24" stroke="#C8102E" stroke-width="2"/><path d="M12 0v24M0 12h24" stroke="#fff" stroke-width="6"/><path d="M12 0v24M0 12h24" stroke="#C8102E" stroke-width="3"/>',
    es:'<rect width="24" height="24" fill="#C60B1E"/><rect y="6" width="24" height="12" fill="#FFC400"/>',
    fr:'<rect width="24" height="24" fill="#002395"/><rect x="8" width="8" height="24" fill="#fff"/><rect x="16" width="8" height="24" fill="#ED2939"/>',
    de:'<rect width="24" height="24" fill="#000"/><rect y="8" width="24" height="8" fill="#D00"/><rect y="16" width="24" height="8" fill="#FFCE00"/>',
    pt:'<rect width="24" height="24" fill="#046A38"/><rect width="10" height="24" fill="#DA020E"/><circle cx="10" cy="12" r="4" fill="#FFDF00"/>',
    it:'<rect width="24" height="24" fill="#009246"/><rect x="8" width="8" height="24" fill="#fff"/><rect x="16" width="8" height="24" fill="#CE2B37"/>',
    ru:'<rect width="24" height="24" fill="#fff"/><rect y="8" width="24" height="8" fill="#0039A6"/><rect y="16" width="24" height="8" fill="#D52B1E"/>',
    zh:'<rect width="24" height="24" fill="#DE2910"/><polygon points="5,3 6.5,8 2,5 8,5 3.5,8" fill="#FFDE00"/>',
    ja:'<rect width="24" height="24" fill="#fff"/><circle cx="12" cy="12" r="6" fill="#BC002D"/>',
    ar:'<rect width="24" height="24" fill="#006C35"/><path d="M6 10h12M6 14h12" stroke="#fff" stroke-width="1.5"/>'
  };

  // Instant dictionary (optional, best quality). Order: es, fr, de, pt, it, ru, zh, ja, ar
  // Anything NOT here is auto-translated online and cached.
  const ORDER = ['es','fr','de','pt','it','ru','zh','ja','ar'];
  const D = {
    "Welcome back":["Bienvenido de nuevo","Bon retour","Willkommen zurück","Bem-vindo","Bentornato","С возвращением","欢迎回来","おかえりなさい","مرحبًا بعودتك"],
    "Dashboard":["Panel","Tableau de bord","Dashboard","Painel","Dashboard","Панель","仪表板","ダッシュボード","لوحة التحكم"],
    "Copy Trading":["Copiar Trading","Copy Trading","Copy Trading","Copy Trading","Copy Trading","Копитрейдинг","跟单交易","コピートレード","نسخ التداول"],
    "Account":["Cuenta","Compte","Konto","Conta","Account","Аккаунт","账户","アカウント","الحساب"],
    "Deposit":["Depósito","Dépôt","Einzahlung","Depósito","Deposito","Депозит","存款","入金","إيداع"],
    "Withdraw":["Retiro","Retrait","Auszahlung","Saque","Prelievo","Вывод","取款","出金","سحب"],
    "Referral Program":["Referidos","Parrainage","Empfehlung","Indicação","Referral","Реферал","推荐计划","紹介","الإحالة"],
    "Settings":["Ajustes","Paramètres","Einstellungen","Configurações","Impostazioni","Настройки","设置","設定","الإعدادات"],
    "Support":["Soporte","Support","Support","Suporte","Supporto","Поддержка","支持","サポート","الدعم"],
    "Sign Out":["Cerrar Sesión","Déconnexion","Abmelden","Sair","Esci","Выйти","退出","サインアウト","تسجيل الخروج"],
    "Balance":["Saldo","Solde","Guthaben","Saldo","Saldo","Баланс","余额","残高","الرصيد"],
    "Pending Deposit":["Depósito Pendiente","Dépôt en attente","Ausstehende Einzahlung","Depósito Pendente","Deposito in sospeso","Депозит в ожидании","待处理存款","保留中の入金","إيداع معلق"],
    "Total Deposit":["Depósito Total","Dépôt Total","Gesamteinzahlung","Depósito Total","Deposito Totale","Всего депозитов","总存款","総入金","إجمالي الإيداع"],
    "Total Withdrawal":["Retiro Total","Retrait Total","Gesamtauszahlung","Saque Total","Prelievo Totale","Всего выводов","总取款","総出金","إجمالي السحب"],
    "Total Trades":["Operaciones Totales","Total des Trades","Trades Gesamt","Total de Negociações","Trade Totali","Всего сделок","总交易数","総取引数","إجمالي الصفقات"],
    "Account Status":["Estado de Cuenta","Statut du Compte","Kontostatus","Status da Conta","Stato Account","Статус аккаунта","账户状态","アカウント状況","حالة الحساب"],
    "Account Package":["Paquete de Cuenta","Forfait du Compte","Kontopaket","Pacote da Conta","Pacchetto Account","Пакет аккаунта","账户套餐","アカウントパッケージ","باقة الحساب"],
    "No Active Package":["Sin Paquete Activo","Aucun forfait actif","Kein aktives Paket","Nenhum Pacote Ativo","Nessun pacchetto attivo","Нет активного пакета","无有效套餐","有効なパッケージなし","لا توجد باقة نشطة"],
    "KYC Status":["Estado KYC","Statut KYC","KYC-Status","Status KYC","Stato KYC","Статус KYC","KYC 状态","KYCステータス","حالة KYC"],
    "Referral Bonus":["Bono de Referido","Bonus de Parrainage","Empfehlungsbonus","Bônus de Indicação","Bonus Referral","Реферальный бонус","推荐奖金","紹介ボーナス","مكافأة الإحالة"],
    "Account Packages":["Paquetes de Cuenta","Forfaits","Kontopakete","Pacotes","Pacchetti","Пакеты","账户套餐","アカウントパッケージ","باقات الحساب"],
    "Select":["Seleccionar","Choisir","Wählen","Selecionar","Seleziona","Выбрать","选择","選択","اختيار"],
    "TRADE HISTORY":["HISTORIAL","HISTORIQUE","VERLAUF","HISTÓRICO","STORICO","ИСТОРИЯ","交易记录","取引履歴","سجل التداول"],
    "CRYPTO TRADE":["TRADING CRIPTO","TRADE CRYPTO","KRYPTO-TRADE","TRADE CRIPTO","TRADE CRIPTO","КРИПТО-ТРЕЙД","加密交易","暗号資産取引","تداول العملات الرقمية"],
    "FOREX TRADE":["TRADING FOREX","TRADE FOREX","FOREX-TRADE","TRADE FOREX","TRADE FOREX","ФОРЕКС-ТРЕЙД","外汇交易","FX取引","تداول الفوركس"],
    "CURRENCY MARKET VALUES":["VALORES DEL MERCADO","VALEURS DU MARCHÉ","MARKTWERTE","VALORES DE MERCADO","VALORI DI MERCATO","РЫНОЧНЫЕ КУРСЫ","市场行情","市場価格","قيم السوق"],
    "BUY":["COMPRAR","ACHETER","KAUFEN","COMPRAR","COMPRA","КУПИТЬ","买入","買い","شراء"],
    "SELL":["VENDER","VENDRE","VERKAUFEN","VENDER","VENDI","ПРОДАТЬ","卖出","売り","بيع"],
    "Notifications":["Notificaciones","Notifications","Benachrichtigungen","Notificações","Notifiche","Уведомления","通知","通知","الإشعارات"],
    "Mark all as read":["Marcar todo como leído","Tout marquer comme lu","Alle als gelesen markieren","Marcar tudo como lido","Segna tutto come letto","Прочитать все","全部已读","すべて既読","تحديد الكل كمقروء"],
    "View Full Trading History":["Ver Historial Completo","Voir tout l'historique","Gesamten Verlauf ansehen","Ver Histórico Completo","Vedi storico completo","Вся история","查看完整记录","全履歴を見る","عرض السجل الكامل"],
    "Bronze Package":["Paquete Bronce","Forfait Bronze","Bronze-Paket","Pacote Bronze","Pacchetto Bronzo","Бронзовый пакет","青铜套餐","ブロンズパッケージ","الباقة البرونزية"],
    "Silver Package":["Paquete Plata","Forfait Argent","Silber-Paket","Pacote Prata","Pacchetto Argento","Серебряный пакет","白银套餐","シルバーパッケージ","الباقة الفضية"],
    "Gold Package":["Paquete Oro","Forfait Or","Gold-Paket","Pacote Ouro","Pacchetto Oro","Золотой пакет","黄金套餐","ゴールドパッケージ","الباقة الذهبية"],
    "Active":["Activo","Actif","Aktiv","Ativo","Attivo","Активен","有效","有効","نشط"],
    "Inactive":["Inactivo","Inactif","Inaktiv","Inativo","Inattivo","Неактивен","未激活","無効","غير نشط"],
    "Not Verified":["No verificado","Non vérifié","Nicht verifiziert","Não verificado","Non verificato","Не подтверждён","未验证","未認証","غير موثق"],
    "Verified":["Verificado","Vérifié","Verifiziert","Verificado","Verificato","Подтверждён","已验证","認証済み","تم التحقق"]
  };

  // ---------- settings ----------
  const API_LANG  = { zh: 'zh-CN' };                       // codes the API needs that differ from ours
  const ATTRS     = ['placeholder', 'title', 'alt', 'aria-label'];
  const ATTR_SEL  = '[placeholder],[title],[alt],[aria-label],input[type=button],input[type=submit],input[type=reset]';
  const NO_TR     = '.lang-dd,[data-notranslate],.notranslate,[translate="no"],.logo-text';
  const CACHE_KEY = 'apexTrCache_v1_';
  const MAX_WAIT  = 6000;                                  // max ms to wait for translations before swapping the page

  const css = `
  .lang-dd{position:relative;display:inline-block}
  .lang-btn{display:flex;align-items:center;gap:8px;width:148px;background:#fff;color:#222;border-radius:8px;padding:7px 10px;font-size:13px;font-weight:600;box-shadow:0 2px 10px rgba(0,0,0,.25);transition:opacity .2s}
  .lang-btn.tr-busy{opacity:.7}
  .lang-btn .flag{width:20px;height:14px;border-radius:2px;flex-shrink:0}
  .lang-btn .lname{flex:1;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .lang-btn .chev{width:14px;height:14px;stroke:#555;fill:none;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;transition:transform .3s ease}
  .lang-dd.open .chev{transform:rotate(180deg)}
  .lang-menu{position:absolute;bottom:calc(100% + 6px);left:0;width:100%;max-height:210px;overflow-y:auto;background:#fff;border-radius:10px;box-shadow:0 12px 30px rgba(0,0,0,.45);z-index:5000;visibility:hidden;opacity:0;transform:translateY(10px) scale(.94);transform-origin:bottom left;transition:opacity .22s ease,transform .25s cubic-bezier(.16,1,.3,1),visibility .22s}
  .lang-dd.open .lang-menu{visibility:visible;opacity:1;transform:none}
  .lang-opt{display:flex;align-items:center;gap:8px;padding:9px 12px;font-size:13px;font-weight:500;color:#222;cursor:pointer;opacity:0;transform:translateY(6px);transition:background .15s,opacity .25s,transform .25s}
  .lang-dd.open .lang-opt{opacity:1;transform:none}
  .lang-opt svg{width:20px;height:14px;border-radius:2px;flex-shrink:0}
  .lang-opt:hover{background:#f3ecfa}.lang-opt.sel{background:#ebdcf7;font-weight:700}
  .sidebar-footer{padding:14px 20px!important}
  .bottom-lang-selector{width:auto!important;left:10px!important;bottom:10px!important;background:transparent!important;padding:0!important;box-shadow:none!important;display:block!important}
  body{padding-bottom:60px!important}
  .sidebar-nav li a span,.stat-title,.pkg-name,.form-section-title,.section-title{overflow-wrap:anywhere}`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  // ---------- state ----------
  let lang = 'en', busy = false, touched = false, obs = null, tApply = null;
  let token = 0, loading = false;                  // token = id of the latest language switch
  const store = new WeakMap(), astore = new WeakMap();
  let titleR = null;

  const DL = {}; Object.keys(D).forEach(k => DL[k.toLowerCase()] = D[k]);

  // ---------- cache (per language, saved in localStorage) ----------
  const cache = {};
  function loadCache(l) {
    if (cache[l]) return cache[l];
    let c = {}; try { c = JSON.parse(localStorage.getItem(CACHE_KEY + l) || '{}'); } catch (e) {}
    return (cache[l] = c);
  }
  let tSave = null;
  function saveCache(l) {
    clearTimeout(tSave);
    tSave = setTimeout(() => { try { localStorage.setItem(CACHE_KEY + l, JSON.stringify(cache[l])); } catch (e) {} }, 800);
  }

  // ---------- online translation (with one retry) ----------
  const decode = s => { const t = document.createElement('textarea'); t.innerHTML = s; return t.value; };
  async function remote(text, l, tries = 2) {
    const tl = API_LANG[l] || l;
    for (let i = 0; i < tries; i++) {
      try {
        const r = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=' + tl + '&dt=t&q=' + encodeURIComponent(text));
        if (r.ok) { const j = await r.json(); const out = (j[0] || []).map(x => x[0]).join(''); if (out) return out; }
      } catch (e) {}
      try { // backup provider
        const r = await fetch('https://api.mymemory.translated.net/get?q=' + encodeURIComponent(text) + '&langpair=en|' + tl);
        if (r.ok) {
          const j = await r.json(); const out = j && j.responseData && j.responseData.translatedText;
          if (out && Number(j.responseStatus) === 200 && !/MYMEMORY WARNING/i.test(out)) return decode(out);
        }
      } catch (e) {}
      if (i < tries - 1) await new Promise(r => setTimeout(r, 300));
    }
    return null;
  }

  const pending = new Set(), failed = new Set(), queue = [];
  let active = 0;
  function setBusy() {
    const b = active > 0 || queue.length > 0;
    document.querySelectorAll('.lang-btn').forEach(x => x.classList.toggle('tr-busy', b));
  }
  function schedule(ms) {
    if (loading) return;                           // no piecemeal updates while a language switch is loading
    clearTimeout(tApply);
    tApply = setTimeout(() => apply(), ms || 60);
  }
  function enqueue(text, l) {
    const k = l + '|' + text;
    if (pending.has(k) || failed.has(k)) return;
    pending.add(k); queue.push([text, l]); pump();
  }
  function pump() {
    while (active < 6 && queue.length) {
      const [t, l] = queue.shift();
      if (l !== lang) { pending.delete(l + '|' + t); continue; }   // skip stale language
      active++; setBusy();
      remote(t, l).then(out => {
        const k = l + '|' + t; pending.delete(k);
        if (out) { loadCache(l)[t] = out; saveCache(l); } else failed.add(k);
      }).finally(() => { active--; pump(); setBusy(); schedule(120); });
    }
    setBusy();
  }

  // resolves when the queue is empty (or after ms)
  function idle(ms) {
    return new Promise(res => {
      const t0 = Date.now();
      (function chk() {
        if ((!active && !queue.length) || Date.now() - t0 > ms) res();
        else setTimeout(chk, 100);
      })();
    });
  }

  // ---------- translation logic ----------
  const NEEDS      = /[A-Za-z\u00C0-\u024F]/;                                   // has latin letters
  const SKIP_TOKEN = /^[A-Z0-9]{2,6}([\/.\-:][A-Z0-9]{2,6})*$/;                 // BTC, USDT, BTC/USDT, KYC...
  const SKIP_LINK  = /^(https?:\/\/|www\.)|\S+@\S+\.\S+|^[#.\/]/;               // urls, emails, paths
  const NUM        = /(\d[\d.,:\/%-]*)/;                                        // numbers stay untouched

  function dict(k, l) {
    const i = ORDER.indexOf(l); if (i < 0) return null;
    const row = D[k] || DL[k.toLowerCase()];
    return row ? row[i] : null;
  }

  function lookup(core, l) {
    const d = dict(core, l); if (d) return d;
    if (!NEEDS.test(core) || SKIP_TOKEN.test(core) || SKIP_LINK.test(core)) return core;
    const c = loadCache(l)[core]; if (c) return c;
    if (core.length > 800) {
      const parts = core.match(/[^.!?]+[.!?]*\s*/g) || [core];
      if (parts.length > 1) return parts.map(x => piece(x, l)).join('');
    }
    enqueue(core, l);
    return core;                                                                 // English until translation arrives
  }

  // keeps leading/trailing spaces & punctuation, translates the words in the middle
  function piece(p, l) {
    const m = p.match(/^([\s(\[{"'“‘•*–—-]*)([\s\S]*?)([\s:;.,!?…)\]}"'”’*]*)$/);
    if (!m || !m[2]) return p;
    return m[1] + lookup(m[2], l) + m[3];
  }

  function translate(s, l) {
    if (l === 'en') return s;
    const whole = s.trim(); if (!whole) return s;
    const d = dict(whole, l); if (d) return s.replace(whole, () => d);
    return s.split(NUM).map((p, i) => (i % 2 ? p : piece(p, l))).join('');
  }
  window.t = s => translate(s, lang);                                            // use in your JS: alert(t('Deposit successful'))

  // ---------- DOM walkers ----------
  function skipNode(n) {
    if (!n.nodeValue || !n.nodeValue.trim()) return true;
    const p = n.parentElement;
    return !p || /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA|CODE|PRE)$/.test(p.tagName) || !!p.closest(NO_TR);
  }

  function doText(n) {
    let r = store.get(n);
    if (!r || n.nodeValue !== r.last) r = { orig: n.nodeValue, last: n.nodeValue };
    const out = translate(r.orig, lang);
    if (n.nodeValue !== out) n.nodeValue = out;
    r.last = out; store.set(n, r);
  }

  function doAttrs(el) {
    if (el.closest(NO_TR)) return;
    let m = astore.get(el); if (!m) astore.set(el, (m = {}));
    const list = ATTRS.slice();
    if (el.tagName === 'INPUT' && /^(button|submit|reset)$/i.test(el.type)) list.push('value');
    list.forEach(a => {
      if (!el.hasAttribute(a)) return;
      const cur = el.getAttribute(a); let r = m[a];
      if (!r || cur !== r.last) r = { orig: cur, last: cur };
      const out = translate(r.orig, lang);
      if (cur !== out) el.setAttribute(a, out);
      r.last = out; m[a] = r;
    });
  }

  function doTitle() {
    if (!titleR || document.title !== titleR.last) titleR = { orig: document.title, last: document.title };
    const out = translate(titleR.orig, lang);
    if (document.title !== out) document.title = out;
    titleR.last = out;
  }

  // translate one subtree (text + attributes), no title
  function walk(root) {
    if (root.nodeType === 3) { if (!skipNode(root)) doText(root); return; }
    if (root.nodeType !== 1) return;
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let n; while ((n = w.nextNode())) { if (!skipNode(n)) doText(n); }
    if (root.matches && root.matches(ATTR_SEL)) doAttrs(root);
    root.querySelectorAll(ATTR_SEL).forEach(doAttrs);
  }

  function apply(root) {
    root = root || document.body;
    if (!root || (lang === 'en' && !touched)) return;
    busy = true;
    walk(root);
    doTitle();
    if (obs) obs.takeRecords();                                                  // ignore our own changes
    busy = false;
  }

  // Runs immediately (before the browser paints) whenever the page changes its own text,
  // so the page can never show its English text again, even for one frame.
  function onMutations(recs) {
    if (busy || loading || (lang === 'en' && !touched)) return;
    busy = true;
    recs.forEach(r => {
      if (r.type === 'characterData') { if (!skipNode(r.target)) doText(r.target); }
      else if (r.type === 'attributes') { doAttrs(r.target); }
      else r.addedNodes.forEach(walk);
    });
    if (obs) obs.takeRecords();
    busy = false;
  }

  // Only queues translations; does NOT change the page.
  function scan(root) {
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = w.nextNode())) {
      if (skipNode(n)) continue;
      const r = store.get(n);
      translate(r ? r.orig : n.nodeValue, lang);
    }
    root.querySelectorAll(ATTR_SEL).forEach(el => {
      if (el.closest(NO_TR)) return;
      const m = astore.get(el) || {};
      const list = ATTRS.slice();
      if (el.tagName === 'INPUT' && /^(button|submit|reset)$/i.test(el.type)) list.push('value');
      list.forEach(a => {
        if (el.hasAttribute(a)) translate(m[a] ? m[a].orig : el.getAttribute(a), lang);
      });
    });
    translate(titleR ? titleR.orig : document.title, lang);
  }

  // ---------- selector UI ----------
  function paint() {
    document.querySelectorAll('.lang-dd').forEach(dd => {
      dd.querySelector('.lang-btn .flag').innerHTML = FLAGS[lang];
      dd.querySelector('.lname').textContent = L[lang];
      dd.querySelectorAll('.lang-opt').forEach(o => o.classList.toggle('sel', o.dataset.l === lang));
    });
  }

  // Translate everything first, then swap the whole page at once.
  async function set(l) {
    if (!L[l]) l = 'en';
    const my = ++token;
    lang = l; if (l !== 'en') touched = true;
    document.documentElement.lang = l;                                           // no dir change: layout stays identical
    try { localStorage.setItem('preferredLanguage', l); } catch (e) {}

    // drop queued work from the previous language
    queue.splice(0).forEach(([t, ql]) => pending.delete(ql + '|' + t));
    failed.clear();                                                              // retry anything that failed before
    paint();

    if (l !== 'en') {
      loading = true;
      loadCache(l);
      scan(document.body);
      await idle(MAX_WAIT);                                                      // wait for translations (max 6s)
      if (my !== token) return;                                                  // user switched again, ignore this run
    }
    loading = false;
    apply();
  }

  function build() {
    document.querySelectorAll('[data-lang-dd]').forEach(dd => {
      dd.classList.add('lang-dd');
      dd.innerHTML = `<button type="button" class="lang-btn"><svg class="flag" viewBox="0 0 24 24"></svg><span class="lname"></span><svg class="chev" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></button><div class="lang-menu">${Object.keys(L).map((k, i) => `<div class="lang-opt" data-l="${k}" style="transition-delay:${i * 18}ms"><svg viewBox="0 0 24 24">${FLAGS[k]}</svg><span>${L[k]}</span></div>`).join('')}</div>`;
      dd.querySelector('.lang-btn').onclick = e => { e.stopPropagation(); const o = dd.classList.contains('open'); document.querySelectorAll('.lang-dd.open').forEach(x => x.classList.remove('open')); if (!o) dd.classList.add('open'); };
      dd.querySelectorAll('.lang-opt').forEach(o => o.onclick = e => { e.stopPropagation(); set(o.dataset.l); dd.classList.remove('open'); });
    });
    document.addEventListener('click', () => document.querySelectorAll('.lang-dd.open').forEach(x => x.classList.remove('open')));
  }

  window.changeLanguage = set;
  function init() {
    build();
    let saved = 'en'; try { saved = localStorage.getItem('preferredLanguage') || 'en'; } catch (e) {}
    set(saved);
    obs = new MutationObserver(onMutations);
    obs.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS.concat('value') });
  }
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', init) : init();
})();
