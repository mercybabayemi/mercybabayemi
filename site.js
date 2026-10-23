/* Shared behaviour for both pages. You should not need to edit this file;
   change content in site-data.js instead. */

var ARROW = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6 14 14 6M7 6h7v7"/></svg>';

function track(name, params){ try { gtag('event', name, params); } catch (e) {} }

/* Pending links become live as soon as a URL is filled in site-data.js */
function applyPending(){
  document.querySelectorAll('[data-key]').forEach(function(a){
    var url = PENDING_LINKS[a.getAttribute('data-key')];
    var soon = a.querySelector('.soon'), go = a.querySelector('.go');
    if (url) {
      a.href = url; a.target = '_blank'; a.rel = 'noopener';
      if (soon) soon.hidden = true;
      if (go) go.hidden = false;
    }
  });
}

/* Email links read the address from site-data.js */
function fillEmailLinks(){
  document.querySelectorAll('[data-email]').forEach(function(a){
    a.href = 'mailto:' + SITE.email;
    a.textContent = SITE.email;
  });
}

/* Contact buttons: email subjects come from CONTACT, WhatsApp shows only when a number is set */
function fillContactLinks(){
  document.querySelectorAll('[data-contact]').forEach(function(a){
    var t = CONTACT[a.getAttribute('data-contact')] || CONTACT.general;
    a.href = 'mailto:' + SITE.email + '?subject=' + encodeURIComponent(t.subject) + '&body=' + encodeURIComponent(t.body);
  });
  document.querySelectorAll('[data-whatsapp]').forEach(function(a){
    var n = (SITE.whatsapp || '').replace(/\D/g, '');
    if (n) { a.href = 'https://wa.me/' + n + '?text=' + encodeURIComponent(WHATSAPP_TEXT); a.hidden = false; }
  });
}

/* The websites and web apps cards */
function renderWebsites(box, stackEl){
  if (!box) return;
  WEBSITES.forEach(function(w){
    var card = document.createElement('article'); card.className = 'card card-' + w.status;
    var top = document.createElement('div'); top.className = 'card-top';
    var h = document.createElement('h3'); h.textContent = w.name;
    var bdg = document.createElement('span'); bdg.className = 'badge badge-' + w.status; bdg.textContent = w.statusText;
    top.appendChild(h); top.appendChild(bdg); card.appendChild(top);
    var r = document.createElement('p'); r.className = 'role'; r.textContent = w.role; card.appendChild(r);
    var p = document.createElement('p'); p.textContent = w.desc; card.appendChild(p);
    if (w.detail) { var dt = document.createElement('p'); dt.className = 'detail'; dt.textContent = w.detail; card.appendChild(dt); }
    if (w.stack && w.stack.length) {
      var st = document.createElement('div'); st.className = 'stack'; st.setAttribute('aria-label', 'Stack');
      w.stack.forEach(function(x){ var sp = document.createElement('span'); sp.textContent = x; st.appendChild(sp); });
      card.appendChild(st);
    }
    if (w.links && w.links.length) {
      var lk = document.createElement('div'); lk.className = 'cardlinks';
      w.links.forEach(function(l){
        if (!l.url) return;
        var a = document.createElement('a'); a.className = 'cardlink'; a.href = l.url; a.target = '_blank'; a.rel = 'noopener';
        a.textContent = l.label;
        a.setAttribute('data-label', w.name + ': ' + l.label); a.setAttribute('data-section', 'websites');
        lk.appendChild(a);
      });
      if (lk.children.length) card.appendChild(lk);
    }
    box.appendChild(card);
  });
  if (stackEl && typeof STACK_LINE === 'string') stackEl.textContent = 'Stack across my public repositories: ' + STACK_LINE;
}

function mailtoHref(subject, body){
  return 'mailto:' + SITE.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
}

/* The Built list on the home page */
function renderBuilt(ul){
  if (!ul) return;
  BUILT.forEach(function(b){
    var li = document.createElement('li');
    var row = document.createElement(b.url ? 'a' : 'div');
    row.className = 'row';
    if (b.url) {
      row.href = b.url; row.target = '_blank'; row.rel = 'noopener';
      row.setAttribute('data-label', 'Built: ' + b.name);
      row.setAttribute('data-section', 'built');
    }
    var left = document.createElement('span');
    var t = document.createElement('span'); t.className = 'row-title'; t.textContent = b.name;
    var d = document.createElement('span'); d.className = 'row-desc'; d.textContent = b.kind + '. ' + b.desc;
    left.appendChild(t); left.appendChild(d); row.appendChild(left);
    if (b.url) { var s = document.createElement('span'); s.innerHTML = ARROW; row.appendChild(s.firstChild); }
    else { var p = document.createElement('span'); p.className = 'soon'; p.textContent = b.pill || 'Link coming soon'; row.appendChild(p); }
    li.appendChild(row); ul.appendChild(li);
  });
}

/* Inline UGC clips (YouTube embeds or small mp4 files) */
function renderClips(grid, list){
  grid.innerHTML = '';
  list.forEach(function(w){
    var art = document.createElement('article'); art.className = 'clip';
    var media = document.createElement('div'); media.className = 'media';
    if (w.type === 'youtube') {
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(w.src) + '?rel=0&playsinline=1';
      f.title = w.title; f.loading = 'lazy'; f.allowFullscreen = true;
      f.allow = 'accelerometer; encrypted-media; picture-in-picture; fullscreen';
      media.appendChild(f);
    } else {
      var v = document.createElement('video');
      v.controls = true; v.playsInline = true; v.preload = 'none'; v.setAttribute('aria-label', w.title);
      if (w.poster) v.poster = w.poster;
      var s = document.createElement('source'); s.src = w.src; s.type = 'video/mp4'; v.appendChild(s);
      v.addEventListener('play', function(){ track('ugc_play', { title: w.title, category: w.category }); });
      media.appendChild(v);
    }
    var h = document.createElement('h3'); h.textContent = w.title;
    art.appendChild(media); art.appendChild(h);
    if (w.note) { var p = document.createElement('p'); p.textContent = w.note; art.appendChild(p); }
    var tg = document.createElement('span'); tg.className = 'tag';
    tg.textContent = UGC_LABELS[w.label] || UGC_LABELS.independent;
    art.appendChild(tg);
    grid.appendChild(art);
  });
}

/* Analytics: link clicks, section views, scroll depth */
function setupTracking(){
  document.addEventListener('click', function(e){
    var el = e.target.closest('[data-label]');
    if (!el || !el.getAttribute('href')) return;
    track(el.hasAttribute('data-cta') ? 'cta_click' : 'link_click', {
      link_label: el.getAttribute('data-label'),
      link_section: el.getAttribute('data-section') || '',
      link_url: el.href || '',
      transport_type: 'beacon'
    });
  });

  if ('IntersectionObserver' in window) {
    var seen = {};
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        var id = en.target.getAttribute('data-section-id');
        if (en.isIntersecting && !seen[id]) { seen[id] = 1; track('section_view', { section: id }); }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll('[data-section-id]').forEach(function(s){ io.observe(s); });
  }

  var marks = [25, 50, 75, 100], fired = {};
  window.addEventListener('scroll', function(){
    var h = document.documentElement;
    var pct = Math.round((h.scrollTop + window.innerHeight) / h.scrollHeight * 100);
    marks.forEach(function(m){ if (pct >= m && !fired[m]) { fired[m] = 1; track('scroll_depth', { percent: m }); } });
  }, { passive: true });
}
