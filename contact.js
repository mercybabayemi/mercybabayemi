/* Guided brief for contact.html. Questions live in INTAKE (site-data.js). */
(function () {
  var ORDER = ['website', 'automation', 'research', 'writing', 'ugc', 'other'];
  var choicesBox = document.getElementById('choices');
  var form = document.getElementById('brief');
  var commonBox = document.getElementById('common');
  var fieldsBox = document.getElementById('fields');
  var titleEl = document.getElementById('form-title');
  var blurbEl = document.getElementById('form-blurb');
  var msg = document.getElementById('formmsg');
  var current = null;

  var COMMON = [
    { id: 'name', label: 'Your name', type: 'text', required: true },
    { id: 'email', label: 'Your email', type: 'text', required: true },
    { id: 'org', label: 'Organisation or business, if any', type: 'text' },
    { id: 'phone', label: 'WhatsApp or phone, if you prefer a call', type: 'text' }
  ];

  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; }

  function buildField(f, box) {
    var wrap = el('div', 'field');
    var label = el('label', '', f.label + (f.required ? ' (required)' : ''));
    label.setAttribute('for', 'f-' + f.id);
    var input;
    if (f.type === 'textarea') { input = el('textarea'); }
    else if (f.type === 'select') {
      input = el('select');
      var first = el('option', '', 'Choose'); first.value = ''; input.appendChild(first);
      (f.options || []).forEach(function (o) { var op = el('option', '', o); op.value = o; input.appendChild(op); });
    } else { input = el('input'); input.type = 'text'; }
    input.id = 'f-' + f.id; input.name = f.id;
    wrap.appendChild(label); wrap.appendChild(input); box.appendChild(wrap);
  }

  function value(id) { var e = document.getElementById('f-' + id); return e ? e.value.trim() : ''; }

  function compose() {
    var def = INTAKE[current];
    var lines = ['Dear Mercy,', '', 'I would like to talk about: ' + def.label, ''];
    COMMON.forEach(function (f) { var v = value(f.id); if (v) lines.push(f.label + ': ' + v); });
    lines.push('');
    def.fields.forEach(function (f) { var v = value(f.id); lines.push(f.label); lines.push(v || '(not answered)'); lines.push(''); });
    lines.push('Sent from mercybabayemi.com');
    return { subject: def.subject + (value('name') ? ' from ' + value('name') : ''), body: lines.join('\n') };
  }

  function validate() {
    var def = INTAKE[current], missing = [];
    COMMON.concat(def.fields).forEach(function (f) { if (f.required && !value(f.id)) missing.push(f.label); });
    var em = value('email');
    if (em && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) missing.push('a valid email address');
    if (missing.length) { msg.textContent = 'Please complete: ' + missing.join('; ') + '.'; msg.hidden = false; return false; }
    msg.hidden = true; return true;
  }

  function select(key, scroll) {
    if (!INTAKE[key]) return;
    current = key;
    var btns = choicesBox.querySelectorAll('button.choice');
    for (var i = 0; i < btns.length; i++) btns[i].setAttribute('aria-pressed', btns[i].getAttribute('data-service') === key ? 'true' : 'false');
    commonBox.innerHTML = ''; fieldsBox.innerHTML = '';
    COMMON.forEach(function (f) { buildField(f, commonBox); });
    INTAKE[key].fields.forEach(function (f) { buildField(f, fieldsBox); });
    titleEl.textContent = INTAKE[key].label; blurbEl.textContent = INTAKE[key].blurb;
    msg.hidden = true; form.hidden = false;
    if (scroll) form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (typeof track === 'function') track('enquiry_select', { service: key });
  }

  ORDER.forEach(function (key) {
    if (key === 'ugc') {
      var a = el('a', 'choice');
      a.href = 'ugc.html#brief';
      a.appendChild(el('strong', '', 'UGC and short-form video'));
      a.appendChild(el('span', '', 'Opens the UGC brief, which asks which emotion the video should sell.'));
      choicesBox.appendChild(a); return;
    }
    var def = INTAKE[key]; if (!def) return;
    var b = el('button', 'choice'); b.type = 'button'; b.setAttribute('data-service', key); b.setAttribute('aria-pressed', 'false');
    b.appendChild(el('strong', '', def.label)); b.appendChild(el('span', '', def.blurb));
    b.addEventListener('click', function () { select(key, true); });
    choicesBox.appendChild(b);
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!current || !validate()) return;
    var c = compose();
    if (typeof track === 'function') track('enquiry_submit', { service: current, budget: value('budget') || 'none' });
    window.location.href = 'mailto:' + SITE.email + '?subject=' + encodeURIComponent(c.subject) + '&body=' + encodeURIComponent(c.body);
  });

  document.getElementById('copy').addEventListener('click', function () {
    if (!current || !validate()) return;
    var c = compose(), text = 'To: ' + SITE.email + '\nSubject: ' + c.subject + '\n\n' + c.body, btn = this;
    function done() { btn.textContent = 'Copied. Paste it into an email'; if (typeof track === 'function') track('enquiry_copy', { service: current }); }
    if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(text).then(done, fallback); } else { fallback(); }
    function fallback() {
      var t = document.createElement('textarea'); t.value = text; document.body.appendChild(t); t.select();
      try { document.execCommand('copy'); done(); } catch (err) { msg.textContent = 'Copy failed. Select the answers and copy them by hand.'; msg.hidden = false; }
      document.body.removeChild(t);
    }
  });

  var wa = document.getElementById('wa'), n = (SITE.whatsapp || '').replace(/\D/g, '');
  if (n) {
    wa.hidden = false;
    wa.addEventListener('click', function (e) {
      if (!current || !validate()) { e.preventDefault(); return; }
      wa.href = 'https://wa.me/' + n + '?text=' + encodeURIComponent(compose().body);
    });
  }
  document.getElementById('addr').textContent = SITE.email;

  var want = new URLSearchParams(window.location.search).get('service');
  if (want && INTAKE[want]) select(want, false);
})();
