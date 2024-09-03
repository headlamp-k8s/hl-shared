var Nr = Object.defineProperty;
var Pr = (n, t, e) =>
  t in n ? Nr(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (n[t] = e);
var F = (n, t, e) => (Pr(n, typeof t != 'symbol' ? t + '' : t, e), e);
function Lr(n, t) {
  const e = new Array(t.length).fill(0);
  return new Array(t.length).fill(0).map((r, s) => (i, a) => {
    (e[s] = (i / a) * t[s] * 1e3),
      n(
        e.reduce((o, l) => o + l, 0),
        1e3
      );
  });
}
function En(n) {
  return Array.isArray(n) && typeof n[0] == 'string';
}
function Fr(n) {
  return Array.isArray(n) && Array.isArray(n[0]);
}
class Mr {
  constructor(t, e, r) {
    F(this, '_snapshots');
    F(this, '_index');
    F(this, 'snapshotName');
    F(this, '_resources');
    F(this, '_snapshot');
    F(this, '_callId');
    (this._resources = t),
      (this._snapshots = e),
      (this._index = r),
      (this._snapshot = e[r]),
      (this._callId = e[r].callId),
      (this.snapshotName = e[r].snapshotName);
  }
  snapshot() {
    return this._snapshots[this._index];
  }
  viewport() {
    return this._snapshots[this._index].viewport;
  }
  render() {
    const t = (i, a, o, l) => {
        if (typeof i == 'string') {
          const _ = Hr(i);
          return o === 'STYLE' || o === 'style' ? qr(_) : _;
        }
        if (!i._string)
          if (Fr(i)) {
            const _ = a - i[0][0];
            if (_ >= 0 && _ <= a) {
              const d = Wr(this._snapshots[_]),
                p = i[0][1];
              p >= 0 && p < d.length && (i._string = t(d[p], _, o, l));
            }
          } else if (En(i)) {
            const [_, d, ...p] = i,
              h = _ === 'NOSCRIPT' ? 'X-NOSCRIPT' : _,
              g = Object.entries(d || {}),
              y = [];
            y.push('<', h);
            const f = '__playwright_current_src__',
              c = h === 'IFRAME' || h === 'FRAME',
              u = h === 'A',
              m = h === 'IMG',
              w = m && g.some(A => A[0] === f),
              x =
                h === 'SOURCE' && o === 'PICTURE' && (l == null ? void 0 : l.some(A => A[0] === f));
            for (const [A, b] of g) {
              let T = A;
              c && A.toLowerCase() === 'src' && (T = '__playwright_src__'),
                m && A === f && (T = 'src'),
                ['src', 'srcset'].includes(A.toLowerCase()) && (w || x) && (T = '_' + T);
              let S = b;
              u && A.toLowerCase() === 'href'
                ? (S = 'link://' + b)
                : (A.toLowerCase() === 'href' || A.toLowerCase() === 'src' || A === f) &&
                  (S = Qe(b)),
                y.push(' ', T, '="', vr(S), '"');
            }
            y.push('>');
            for (const A of p) y.push(t(A, a, h, g));
            Ur.has(h) || y.push('</', h, '>'), (i._string = y.join(''));
          } else i._string = '';
        return i._string;
      },
      e = this._snapshot;
    let r = t(e.html, this._index, void 0, void 0);
    return r
      ? ((r =
          (e.doctype ? `<!DOCTYPE ${e.doctype}>` : '') +
          [
            '<style>*,*::before,*::after { visibility: hidden }</style>',
            `<script>${Br(this._callId, this.snapshotName)}<\/script>`,
          ].join('') +
          r),
        { html: r, pageId: e.pageId, frameId: e.frameId, index: this._index })
      : { html: '', pageId: e.pageId, frameId: e.frameId, index: this._index };
  }
  resourceByUrl(t, e) {
    const r = this._snapshot;
    let s, i;
    for (const o of this._resources) {
      if (typeof o._monotonicTime == 'number' && o._monotonicTime >= r.timestamp) break;
      o.response.status !== 304 &&
        o.request.url === t &&
        o.request.method === e &&
        (o._frameref === r.frameId ? (s = o) : (i = o));
    }
    let a = s ?? i;
    if (a && e.toUpperCase() === 'GET') {
      for (const o of r.resourceOverrides)
        if (t === o.url && o.sha1) {
          a = {
            ...a,
            response: { ...a.response, content: { ...a.response.content, _sha1: o.sha1 } },
          };
          break;
        }
    }
    return a;
  }
}
const Ur = new Set([
    'AREA',
    'BASE',
    'BR',
    'COL',
    'COMMAND',
    'EMBED',
    'HR',
    'IMG',
    'INPUT',
    'KEYGEN',
    'LINK',
    'MENUITEM',
    'META',
    'PARAM',
    'SOURCE',
    'TRACK',
    'WBR',
  ]),
  Tn = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
function vr(n) {
  return n.replace(/[&<>"']/gu, t => Tn[t]);
}
function Hr(n) {
  return n.replace(/[&<]/gu, t => Tn[t]);
}
function Wr(n) {
  if (!n._nodes) {
    const t = [],
      e = r => {
        if (typeof r == 'string') t.push(r);
        else if (En(r)) {
          const [, , ...s] = r;
          for (const i of s) e(i);
          t.push(r);
        }
      };
    e(n.html), (n._nodes = t);
  }
  return n._nodes;
}
function Br(...n) {
  function t(e, ...r) {
    const s =
        'Recorded click position in absolute coordinates did not match the center of the clicked element. This is likely due to a difference between the test runner and the trace viewer operating systems.',
      i = [],
      a = [],
      o = [],
      l = p => {
        for (const h of p.querySelectorAll('[__playwright_scroll_top_]')) i.push(h);
        for (const h of p.querySelectorAll('[__playwright_scroll_left_]')) a.push(h);
        for (const h of p.querySelectorAll('[__playwright_value_]')) {
          const g = h;
          g.type !== 'file' && (g.value = g.getAttribute('__playwright_value_')),
            h.removeAttribute('__playwright_value_');
        }
        for (const h of p.querySelectorAll('[__playwright_checked_]'))
          (h.checked = h.getAttribute('__playwright_checked_') === 'true'),
            h.removeAttribute('__playwright_checked_');
        for (const h of p.querySelectorAll('[__playwright_selected_]'))
          (h.selected = h.getAttribute('__playwright_selected_') === 'true'),
            h.removeAttribute('__playwright_selected_');
        for (const h of r)
          for (const g of p.querySelectorAll(`[__playwright_target__="${h}"]`)) {
            const y = g.style;
            (y.outline = '2px solid #006ab1'), (y.backgroundColor = '#6fa8dc7f'), o.push(g);
          }
        for (const h of p.querySelectorAll('iframe, frame')) {
          const g = h.getAttribute('__playwright_src__');
          if (!g) h.setAttribute('src', 'data:text/html,<body style="background: #ddd"></body>');
          else {
            const y = new URL(e(window.location.href)),
              f = y.pathname.lastIndexOf('/snapshot/');
            f !== -1 && (y.pathname = y.pathname.substring(0, f + 1)),
              (y.pathname += g.substring(1)),
              h.setAttribute('src', y.toString());
          }
        }
        {
          const h = p.querySelector('body[__playwright_custom_elements__]');
          if (h && window.customElements) {
            const g = (h.getAttribute('__playwright_custom_elements__') || '').split(',');
            for (const y of g) window.customElements.define(y, class extends HTMLElement {});
          }
        }
        for (const h of p.querySelectorAll('template[__playwright_shadow_root_]')) {
          const g = h,
            y = g.parentElement.attachShadow({ mode: 'open' });
          y.appendChild(g.content), g.remove(), l(y);
        }
        if ('adoptedStyleSheets' in p) {
          const h = [...p.adoptedStyleSheets];
          for (const g of p.querySelectorAll('template[__playwright_style_sheet_]')) {
            const y = g,
              f = new CSSStyleSheet();
            f.replaceSync(y.getAttribute('__playwright_style_sheet_')), h.push(f);
          }
          p.adoptedStyleSheets = h;
        }
      },
      _ = () => {
        window.removeEventListener('load', _);
        for (const h of i)
          (h.scrollTop = +h.getAttribute('__playwright_scroll_top_')),
            h.removeAttribute('__playwright_scroll_top_');
        for (const h of a)
          (h.scrollLeft = +h.getAttribute('__playwright_scroll_left_')),
            h.removeAttribute('__playwright_scroll_left_');
        document.styleSheets[0].disabled = !0;
        const p = new URL(window.location.href).searchParams;
        if (p.get('pointX') && p.get('pointY')) {
          const h = +p.get('pointX'),
            g = +p.get('pointY'),
            y = o.length > 0,
            f = document.documentElement ? [document.documentElement] : [];
          for (const c of y ? o : f) {
            const u = document.createElement('x-pw-pointer');
            if (
              ((u.style.position = 'fixed'),
              (u.style.backgroundColor = '#f44336'),
              (u.style.width = '20px'),
              (u.style.height = '20px'),
              (u.style.borderRadius = '10px'),
              (u.style.margin = '-10px 0 0 -10px'),
              (u.style.zIndex = '2147483646'),
              (u.style.display = 'flex'),
              (u.style.alignItems = 'center'),
              (u.style.justifyContent = 'center'),
              y)
            ) {
              const m = c.getBoundingClientRect(),
                w = m.left + m.width / 2,
                x = m.top + m.height / 2;
              if (
                ((u.style.left = w + 'px'),
                (u.style.top = x + 'px'),
                Math.abs(w - h) >= 10 || Math.abs(x - g) >= 10)
              ) {
                const A = document.createElement('x-pw-pointer-warning');
                (A.textContent = '⚠'),
                  (A.style.fontSize = '19px'),
                  (A.style.color = 'white'),
                  (A.style.marginTop = '-3.5px'),
                  (A.style.userSelect = 'none'),
                  u.appendChild(A),
                  u.setAttribute('title', s);
              }
            } else (u.style.left = h + 'px'), (u.style.top = g + 'px');
            document.documentElement.appendChild(u);
          }
        }
      },
      d = () => l(document);
    window.addEventListener('load', _), window.addEventListener('DOMContentLoaded', d);
  }
  return `
(${t.toString()})(${ze.toString()}${n.map(e => `, "${e}"`).join('')})`;
}
const Sn = [
    'about:',
    'blob:',
    'data:',
    'file:',
    'ftp:',
    'http:',
    'https:',
    'mailto:',
    'sftp:',
    'ws:',
    'wss:',
  ],
  Ot = 'http://playwright.bloburl/#';
function Qe(n) {
  n.startsWith(Ot) && (n = n.substring(Ot.length));
  try {
    const t = new URL(n);
    if (t.protocol === 'javascript:' || t.protocol === 'vbscript:') return 'javascript:void(0)';
    const e = t.protocol === 'blob:',
      r = t.protocol === 'file:';
    if (!e && !r && Sn.includes(t.protocol)) return n;
    const s = 'pw-' + t.protocol.slice(0, t.protocol.length - 1);
    return (
      r || (t.protocol = 'https:'),
      (t.hostname = t.hostname ? `${s}--${t.hostname}` : s),
      r && (t.protocol = 'https:'),
      t.toString()
    );
  } catch {
    return n;
  }
}
const jr = /url\(['"]?([\w-]+:)\/\//gi;
function qr(n) {
  return n.replace(jr, (t, e) =>
    !(e === 'blob:') && !(e === 'file:') && Sn.includes(e)
      ? t
      : t.replace(e + '//', `https://pw-${e.slice(0, -1)}--`)
  );
}
function ze(n) {
  const t = new URL(n);
  return t.pathname.endsWith('/snapshot.html') ? t.searchParams.get('r') : n;
}
class Gr {
  constructor(t, e) {
    F(this, '_snapshotStorage');
    F(this, '_resourceLoader');
    F(this, '_snapshotIds', new Map());
    (this._snapshotStorage = t), (this._resourceLoader = e);
  }
  serveSnapshot(t, e, r) {
    const s = this._snapshot(t.substring(9), e);
    if (!s) return new Response(null, { status: 404 });
    const i = s.render();
    return (
      this._snapshotIds.set(r, s),
      new Response(i.html, { status: 200, headers: { 'Content-Type': 'text/html' } })
    );
  }
  serveSnapshotInfo(t, e) {
    const r = this._snapshot(t.substring(13), e);
    return this._respondWithJson(
      r ? { viewport: r.viewport(), url: r.snapshot().frameUrl } : { error: 'No snapshot found' }
    );
  }
  _snapshot(t, e) {
    const r = e.get('name');
    return this._snapshotStorage.snapshotByName(t.slice(1), r);
  }
  _respondWithJson(t) {
    return new Response(JSON.stringify(t), {
      status: 200,
      headers: { 'Cache-Control': 'public, max-age=31536000', 'Content-Type': 'application/json' },
    });
  }
  async serveResource(t, e, r) {
    let s;
    const i = this._snapshotIds.get(r);
    for (const g of t) if (((s = i == null ? void 0 : i.resourceByUrl(Yr(g), e)), s)) break;
    if (!s) return new Response(null, { status: 404 });
    const a = s.response.content._sha1,
      o = a ? (await this._resourceLoader(a)) || new Blob([]) : new Blob([]);
    let l = s.response.content.mimeType;
    /^text\/|^application\/(javascript|json)/.test(l) &&
      !l.includes('charset') &&
      (l = `${l}; charset=utf-8`);
    const d = new Headers();
    d.set('Content-Type', l);
    for (const { name: g, value: y } of s.response.headers) d.set(g, y);
    d.delete('Content-Encoding'),
      d.delete('Access-Control-Allow-Origin'),
      d.set('Access-Control-Allow-Origin', '*'),
      d.delete('Content-Length'),
      d.set('Content-Length', String(o.size)),
      d.set('Cache-Control', 'public, max-age=31536000');
    const { status: p } = s.response,
      h = p === 101 || p === 204 || p === 205 || p === 304;
    return new Response(h ? null : o, {
      headers: d,
      status: s.response.status,
      statusText: s.response.statusText,
    });
  }
}
function Yr(n) {
  try {
    const t = new URL(n);
    return (t.hash = ''), t.toString();
  } catch {
    return n;
  }
}
function Vr(n) {
  const t = new Map(),
    { files: e, stacks: r } = n;
  for (const s of r) {
    const [i, a] = s;
    t.set(
      `call@${i}`,
      a.map(o => ({ file: e[o[0]], line: o[1], column: o[2], function: o[3] }))
    );
  }
  return t;
}
function Zr() {
  return {
    origin: 'testRunner',
    traceUrl: '',
    startTime: Number.MAX_SAFE_INTEGER,
    wallTime: Number.MAX_SAFE_INTEGER,
    endTime: 0,
    browserName: '',
    options: { deviceScaleFactor: 1, isMobile: !1, viewport: { width: 1280, height: 800 } },
    pages: [],
    resources: [],
    actions: [],
    events: [],
    errors: [],
    stdio: [],
    hasSource: !1,
  };
}
class Kr {
  constructor() {
    F(this, '_resources', []);
    F(this, '_frameSnapshots', new Map());
  }
  addResource(t) {
    (t.request.url = Qe(t.request.url)), this._resources.push(t);
  }
  addFrameSnapshot(t) {
    for (const s of t.resourceOverrides) s.url = Qe(s.url);
    let e = this._frameSnapshots.get(t.frameId);
    e ||
      ((e = { raw: [], renderers: [] }),
      this._frameSnapshots.set(t.frameId, e),
      t.isMainFrame && this._frameSnapshots.set(t.pageId, e)),
      e.raw.push(t);
    const r = new Mr(this._resources, e.raw, e.raw.length - 1);
    return e.renderers.push(r), r;
  }
  snapshotByName(t, e) {
    const r = this._frameSnapshots.get(t);
    return r == null ? void 0 : r.renderers.find(s => s.snapshotName === e);
  }
  snapshotsForTest() {
    return [...this._frameSnapshots.keys()];
  }
  finalize() {
    this._resources.sort((t, e) => (t._monotonicTime || 0) - (e._monotonicTime || 0));
  }
}
class An extends Error {
  constructor(t) {
    super(t), (this.name = 'TraceVersionError');
  }
}
const kt = 7;
class Xr {
  constructor(t, e, r) {
    F(this, '_contextEntry');
    F(this, '_snapshotStorage');
    F(this, '_attachments');
    F(this, '_actionMap', new Map());
    F(this, '_version');
    F(this, '_pageEntries', new Map());
    F(this, '_jsHandles', new Map());
    F(this, '_consoleObjects', new Map());
    (this._contextEntry = t), (this._snapshotStorage = e), (this._attachments = r);
  }
  appendTrace(t) {
    for (const e of t.split(`
`))
      this._appendEvent(e);
  }
  actions() {
    return [...this._actionMap.values()];
  }
  _pageEntry(t) {
    let e = this._pageEntries.get(t);
    return (
      e ||
        ((e = { screencastFrames: [] }),
        this._pageEntries.set(t, e),
        this._contextEntry.pages.push(e)),
      e
    );
  }
  _appendEvent(t) {
    if (!t) return;
    const e = this._modernize(JSON.parse(t));
    for (const r of e) this._innerAppendEvent(r);
  }
  _innerAppendEvent(t) {
    var r;
    const e = this._contextEntry;
    switch (t.type) {
      case 'context-options': {
        if (t.version > kt)
          throw new An(
            'The trace was created by a newer version of Playwright and is not supported by this version of the viewer. Please use latest Playwright to open the trace.'
          );
        (this._version = t.version),
          (e.origin = t.origin),
          (e.browserName = t.browserName),
          (e.channel = t.channel),
          (e.title = t.title),
          (e.platform = t.platform),
          (e.wallTime = t.wallTime),
          (e.startTime = t.monotonicTime),
          (e.sdkLanguage = t.sdkLanguage),
          (e.options = t.options),
          (e.testIdAttributeName = t.testIdAttributeName);
        break;
      }
      case 'screencast-frame': {
        this._pageEntry(t.pageId).screencastFrames.push(t);
        break;
      }
      case 'before': {
        this._actionMap.set(t.callId, { ...t, type: 'action', endTime: 0, log: [] });
        break;
      }
      case 'input': {
        const s = this._actionMap.get(t.callId);
        (s.inputSnapshot = t.inputSnapshot), (s.point = t.point);
        break;
      }
      case 'log': {
        const s = this._actionMap.get(t.callId);
        if (!s) return;
        s.log.push({ time: t.time, message: t.message });
        break;
      }
      case 'after': {
        const s = this._actionMap.get(t.callId);
        (s.afterSnapshot = t.afterSnapshot),
          (s.endTime = t.endTime),
          (s.result = t.result),
          (s.error = t.error),
          (s.attachments = t.attachments),
          t.point && (s.point = t.point);
        for (const i of ((r = t.attachments) == null ? void 0 : r.filter(a => a.sha1)) || [])
          this._attachments.set(i.sha1, i);
        break;
      }
      case 'action': {
        this._actionMap.set(t.callId, { ...t, log: [] });
        break;
      }
      case 'event': {
        e.events.push(t);
        break;
      }
      case 'stdout': {
        e.stdio.push(t);
        break;
      }
      case 'stderr': {
        e.stdio.push(t);
        break;
      }
      case 'error': {
        e.errors.push(t);
        break;
      }
      case 'console': {
        e.events.push(t);
        break;
      }
      case 'resource-snapshot':
        this._snapshotStorage.addResource(t.snapshot), e.resources.push(t.snapshot);
        break;
      case 'frame-snapshot':
        this._snapshotStorage.addFrameSnapshot(t.snapshot);
        break;
    }
    'pageId' in t && t.pageId && this._pageEntry(t.pageId),
      (t.type === 'action' || t.type === 'before') &&
        (e.startTime = Math.min(e.startTime, t.startTime)),
      (t.type === 'action' || t.type === 'after') && (e.endTime = Math.max(e.endTime, t.endTime)),
      t.type === 'event' &&
        ((e.startTime = Math.min(e.startTime, t.time)), (e.endTime = Math.max(e.endTime, t.time))),
      t.type === 'screencast-frame' &&
        ((e.startTime = Math.min(e.startTime, t.timestamp)),
        (e.endTime = Math.max(e.endTime, t.timestamp)));
  }
  _processedContextCreatedEvent() {
    return this._version !== void 0;
  }
  _modernize(t) {
    let e = this._version || t.version;
    if (e === void 0) return [t];
    let r = [t];
    for (; e < kt; ++e) r = this[`_modernize_${e}_to_${e + 1}`].call(this, r);
    return r;
  }
  _modernize_0_to_1(t) {
    for (const e of t)
      e.type === 'action' &&
        typeof e.metadata.error == 'string' &&
        (e.metadata.error = { error: { name: 'Error', message: e.metadata.error } });
    return t;
  }
  _modernize_1_to_2(t) {
    var e;
    for (const r of t)
      r.type !== 'frame-snapshot' ||
        !r.snapshot.isMainFrame ||
        (r.snapshot.viewport = ((e = this._contextEntry.options) == null ? void 0 : e.viewport) || {
          width: 1280,
          height: 720,
        });
    return t;
  }
  _modernize_2_to_3(t) {
    for (const e of t) {
      if (e.type !== 'resource-snapshot' || e.snapshot.request) continue;
      const r = e.snapshot;
      e.snapshot = {
        _frameref: r.frameId,
        request: {
          url: r.url,
          method: r.method,
          headers: r.requestHeaders,
          postData: r.requestSha1 ? { _sha1: r.requestSha1 } : void 0,
        },
        response: {
          status: r.status,
          headers: r.responseHeaders,
          content: { mimeType: r.contentType, _sha1: r.responseSha1 },
        },
        _monotonicTime: r.timestamp,
      };
    }
    return t;
  }
  _modernize_3_to_4(t) {
    const e = [];
    for (const r of t) {
      const s = this._modernize_event_3_to_4(r);
      s && e.push(s);
    }
    return e;
  }
  _modernize_event_3_to_4(t) {
    var r, s, i, a;
    if (t.type !== 'action' && t.type !== 'event') return t;
    const e = t.metadata;
    return e.internal || e.method.startsWith('tracing')
      ? null
      : t.type === 'event'
      ? e.method === '__create__' && e.type === 'ConsoleMessage'
        ? { type: 'object', class: e.type, guid: e.params.guid, initializer: e.params.initializer }
        : {
            type: 'event',
            time: e.startTime,
            class: e.type,
            method: e.method,
            params: e.params,
            pageId: e.pageId,
          }
      : {
          type: 'action',
          callId: e.id,
          startTime: e.startTime,
          endTime: e.endTime,
          apiName: e.apiName || e.type + '.' + e.method,
          class: e.type,
          method: e.method,
          params: e.params,
          wallTime: e.wallTime || Date.now(),
          log: e.log,
          beforeSnapshot:
            (r = e.snapshots.find(o => o.title === 'before')) == null ? void 0 : r.snapshotName,
          inputSnapshot:
            (s = e.snapshots.find(o => o.title === 'input')) == null ? void 0 : s.snapshotName,
          afterSnapshot:
            (i = e.snapshots.find(o => o.title === 'after')) == null ? void 0 : i.snapshotName,
          error: (a = e.error) == null ? void 0 : a.error,
          result: e.result,
          point: e.point,
          pageId: e.pageId,
        };
  }
  _modernize_4_to_5(t) {
    const e = [];
    for (const r of t) {
      const s = this._modernize_event_4_to_5(r);
      s && e.push(s);
    }
    return e;
  }
  _modernize_event_4_to_5(t) {
    var e, r;
    if (
      (t.type === 'event' &&
        t.method === '__create__' &&
        t.class === 'JSHandle' &&
        this._jsHandles.set(t.params.guid, t.params.initializer),
      t.type === 'object')
    ) {
      if (t.class !== 'ConsoleMessage') return null;
      const s =
        (e = t.initializer.args) == null
          ? void 0
          : e.map(i => {
              if (i.guid) {
                const a = this._jsHandles.get(i.guid);
                return { preview: (a == null ? void 0 : a.preview) || '', value: '' };
              }
              return { preview: i.preview || '', value: i.value || '' };
            });
      return (
        this._consoleObjects.set(t.guid, {
          type: t.initializer.type,
          text: t.initializer.text,
          location: t.initializer.location,
          args: s,
        }),
        null
      );
    }
    if (t.type === 'event' && t.method === 'console') {
      const s = this._consoleObjects.get(((r = t.params.message) == null ? void 0 : r.guid) || '');
      return s
        ? {
            type: 'console',
            time: t.time,
            pageId: t.pageId,
            messageType: s.type,
            text: s.text,
            args: s.args,
            location: s.location,
          }
        : null;
    }
    return t;
  }
  _modernize_5_to_6(t) {
    const e = [];
    for (const r of t)
      if ((e.push(r), !(r.type !== 'after' || !r.log.length)))
        for (const s of r.log) e.push({ type: 'log', callId: r.callId, message: s, time: -1 });
    return e;
  }
  _modernize_6_to_7(t) {
    const e = [];
    if (!this._processedContextCreatedEvent() && t[0].type !== 'context-options') {
      const r = {
        type: 'context-options',
        origin: 'testRunner',
        version: 7,
        browserName: '',
        options: {},
        platform: process.platform,
        wallTime: 0,
        monotonicTime: 0,
        sdkLanguage: 'javascript',
      };
      e.push(r);
    }
    for (const r of t) {
      if (r.type === 'context-options') {
        e.push({ ...r, monotonicTime: 0, origin: 'library' });
        continue;
      }
      !this._contextEntry.wallTime &&
        r.type === 'before' &&
        (this._contextEntry.wallTime = r.wallTime),
        !this._contextEntry.startTime &&
          r.type === 'before' &&
          (this._contextEntry.startTime = r.startTime),
        e.push(r);
    }
    return e;
  }
}
class $r {
  constructor() {
    F(this, 'contextEntries', []);
    F(this, '_snapshotStorage');
    F(this, '_backend');
    F(this, '_attachments', new Map());
    F(this, '_resourceToContentType', new Map());
  }
  async load(t, e) {
    var o, l;
    this._backend = t;
    const r = [];
    let s = !1;
    for (const _ of await this._backend.entryNames()) {
      const d = _.match(/(.+)\.trace/);
      d && r.push(d[1] || ''), _.includes('src@') && (s = !0);
    }
    if (!r.length) throw new Error('Cannot find .trace file');
    this._snapshotStorage = new Kr();
    const i = r.length * 3;
    let a = 0;
    for (const _ of r) {
      const d = Zr();
      (d.traceUrl = t.traceURL()), (d.hasSource = s);
      const p = new Xr(d, this._snapshotStorage, this._attachments),
        h = (await this._backend.readText(_ + '.trace')) || '';
      p.appendTrace(h), e(++a, i);
      const g = (await this._backend.readText(_ + '.network')) || '';
      if (
        (p.appendTrace(g),
        e(++a, i),
        (d.actions = p.actions().sort((f, c) => f.startTime - c.startTime)),
        !t.isLive())
      ) {
        for (const f of d.actions.slice().reverse())
          if (!f.endTime && !f.error)
            for (const c of d.actions)
              c.parentId === f.callId && f.endTime < c.endTime && (f.endTime = c.endTime);
      }
      const y = await this._backend.readText(_ + '.stacks');
      if (y) {
        const f = Vr(JSON.parse(y));
        for (const c of d.actions) c.stack = c.stack || f.get(c.callId);
      }
      e(++a, i);
      for (const f of d.resources)
        (o = f.request.postData) != null &&
          o._sha1 &&
          this._resourceToContentType.set(
            f.request.postData._sha1,
            Dt(f.request.postData.mimeType)
          ),
          (l = f.response.content) != null &&
            l._sha1 &&
            this._resourceToContentType.set(
              f.response.content._sha1,
              Dt(f.response.content.mimeType)
            );
      this.contextEntries.push(d);
    }
    this._snapshotStorage.finalize();
  }
  async hasEntry(t) {
    return this._backend.hasEntry(t);
  }
  async resourceForSha1(t) {
    const e = await this._backend.readBlob('resources/' + t);
    if (e)
      return new Blob([e], {
        type: this._resourceToContentType.get(t) || 'application/octet-stream',
      });
  }
  attachmentForSha1(t) {
    return this._attachments.get(t);
  }
  storage() {
    return this._snapshotStorage;
  }
}
function Dt(n) {
  const t = n.match(/^(.*);\s*charset=.*$/);
  return t ? t[1] : n;
}
const Jr = 15,
  L = 0,
  z = 1,
  Qr = 2,
  V = -2,
  W = -3,
  It = -4,
  ee = -5,
  Z = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535],
  Rn = 1440,
  zr = 0,
  es = 4,
  ts = 9,
  ns = 5,
  rs = [
    96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 192, 80, 7,
    10, 0, 8, 96, 0, 8, 32, 0, 9, 160, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 224, 80, 7, 6, 0, 8, 88,
    0, 8, 24, 0, 9, 144, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 208, 81, 7, 17, 0, 8, 104, 0, 8, 40,
    0, 9, 176, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 240, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227,
    83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 200, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 168, 0, 8, 4,
    0, 8, 132, 0, 8, 68, 0, 9, 232, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 152, 84, 7, 83, 0, 8, 124,
    0, 8, 60, 0, 9, 216, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 184, 0, 8, 12, 0, 8, 140, 0, 8, 76,
    0, 9, 248, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 196,
    81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 164, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 228, 80, 7, 7, 0,
    8, 90, 0, 8, 26, 0, 9, 148, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 212, 82, 7, 19, 0, 8, 106, 0,
    8, 42, 0, 9, 180, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 244, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192,
    8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 204, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 172, 0,
    8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 236, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 156, 84, 7, 99, 0, 8,
    126, 0, 8, 62, 0, 9, 220, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 188, 0, 8, 14, 0, 8, 142, 0, 8,
    78, 0, 9, 252, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9,
    194, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 162, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 226, 80, 7,
    6, 0, 8, 89, 0, 8, 25, 0, 9, 146, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 210, 81, 7, 17, 0, 8,
    105, 0, 8, 41, 0, 9, 178, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 242, 80, 7, 4, 0, 8, 85, 0, 8, 21,
    80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 202, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9,
    170, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 234, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 154, 84, 7,
    83, 0, 8, 125, 0, 8, 61, 0, 9, 218, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 186, 0, 8, 13, 0, 8,
    141, 0, 8, 77, 0, 9, 250, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8,
    51, 0, 9, 198, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 166, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9,
    230, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 150, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 214, 82, 7,
    19, 0, 8, 107, 0, 8, 43, 0, 9, 182, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 246, 80, 7, 5, 0, 8,
    87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 206, 81, 7, 15, 0, 8, 103, 0, 8,
    39, 0, 9, 174, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 238, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 158,
    84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 222, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 190, 0, 8, 15,
    0, 8, 143, 0, 8, 79, 0, 9, 254, 96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8,
    112, 0, 8, 48, 0, 9, 193, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 161, 0, 8, 0, 0, 8, 128, 0, 8,
    64, 0, 9, 225, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 145, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9,
    209, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 177, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 241, 80, 7,
    4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 201, 81, 7, 13, 0, 8,
    100, 0, 8, 36, 0, 9, 169, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 233, 80, 7, 8, 0, 8, 92, 0, 8, 28,
    0, 9, 153, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 217, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 185,
    0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 249, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35,
    0, 8, 114, 0, 8, 50, 0, 9, 197, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 165, 0, 8, 2, 0, 8, 130, 0,
    8, 66, 0, 9, 229, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 149, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9,
    213, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 181, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 245, 80, 7,
    5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 205, 81, 7, 15, 0, 8,
    102, 0, 8, 38, 0, 9, 173, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 237, 80, 7, 9, 0, 8, 94, 0, 8, 30,
    0, 9, 157, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 221, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 189,
    0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 253, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31,
    0, 8, 113, 0, 8, 49, 0, 9, 195, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 163, 0, 8, 1, 0, 8, 129, 0,
    8, 65, 0, 9, 227, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 147, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9,
    211, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 179, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 243, 80, 7,
    4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 203, 81, 7, 13, 0, 8,
    101, 0, 8, 37, 0, 9, 171, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 235, 80, 7, 8, 0, 8, 93, 0, 8, 29,
    0, 9, 155, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 219, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 187,
    0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 251, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35,
    0, 8, 115, 0, 8, 51, 0, 9, 199, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 167, 0, 8, 3, 0, 8, 131, 0,
    8, 67, 0, 9, 231, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 151, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9,
    215, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 183, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 247, 80, 7,
    5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 207, 81, 7, 15, 0, 8,
    103, 0, 8, 39, 0, 9, 175, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 239, 80, 7, 9, 0, 8, 95, 0, 8, 31,
    0, 9, 159, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 223, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 191,
    0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 255,
  ],
  ss = [
    80, 5, 1, 87, 5, 257, 83, 5, 17, 91, 5, 4097, 81, 5, 5, 89, 5, 1025, 85, 5, 65, 93, 5, 16385,
    80, 5, 3, 88, 5, 513, 84, 5, 33, 92, 5, 8193, 82, 5, 9, 90, 5, 2049, 86, 5, 129, 192, 5, 24577,
    80, 5, 2, 87, 5, 385, 83, 5, 25, 91, 5, 6145, 81, 5, 7, 89, 5, 1537, 85, 5, 97, 93, 5, 24577,
    80, 5, 4, 88, 5, 769, 84, 5, 49, 92, 5, 12289, 82, 5, 13, 90, 5, 3073, 86, 5, 193, 192, 5,
    24577,
  ],
  is = [
    3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131,
    163, 195, 227, 258, 0, 0,
  ],
  as = [
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 112, 112,
  ],
  os = [
    1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049,
    3073, 4097, 6145, 8193, 12289, 16385, 24577,
  ],
  cs = [
    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13,
    13,
  ],
  te = 15;
function et() {
  const n = this;
  let t, e, r, s, i, a;
  function o(_, d, p, h, g, y, f, c, u, m, w) {
    let x, A, b, T, S, C, E, R, D, O, P, N, k, v, M;
    (O = 0), (S = p);
    do r[_[d + O]]++, O++, S--;
    while (S !== 0);
    if (r[0] == p) return (f[0] = -1), (c[0] = 0), L;
    for (R = c[0], C = 1; C <= te && r[C] === 0; C++);
    for (E = C, R < C && (R = C), S = te; S !== 0 && r[S] === 0; S--);
    for (b = S, R > S && (R = S), c[0] = R, v = 1 << C; C < S; C++, v <<= 1)
      if ((v -= r[C]) < 0) return W;
    if ((v -= r[S]) < 0) return W;
    for (r[S] += v, a[1] = C = 0, O = 1, k = 2; --S !== 0; ) (a[k] = C += r[O]), k++, O++;
    (S = 0), (O = 0);
    do (C = _[d + O]) !== 0 && (w[a[C]++] = S), O++;
    while (++S < p);
    for (p = a[b], a[0] = S = 0, O = 0, T = -1, N = -R, i[0] = 0, P = 0, M = 0; E <= b; E++)
      for (x = r[E]; x-- !== 0; ) {
        for (; E > N + R; ) {
          if (
            (T++,
            (N += R),
            (M = b - N),
            (M = M > R ? R : M),
            (A = 1 << (C = E - N)) > x + 1 && ((A -= x + 1), (k = E), C < M))
          )
            for (; ++C < M && !((A <<= 1) <= r[++k]); ) A -= r[k];
          if (((M = 1 << C), m[0] + M > Rn)) return W;
          (i[T] = P = m[0]),
            (m[0] += M),
            T !== 0
              ? ((a[T] = S),
                (s[0] = C),
                (s[1] = R),
                (C = S >>> (N - R)),
                (s[2] = P - i[T - 1] - C),
                u.set(s, (i[T - 1] + C) * 3))
              : (f[0] = P);
        }
        for (
          s[1] = E - N,
            O >= p
              ? (s[0] = 192)
              : w[O] < h
              ? ((s[0] = w[O] < 256 ? 0 : 96), (s[2] = w[O++]))
              : ((s[0] = y[w[O] - h] + 16 + 64), (s[2] = g[w[O++] - h])),
            A = 1 << (E - N),
            C = S >>> N;
          C < M;
          C += A
        )
          u.set(s, (P + C) * 3);
        for (C = 1 << (E - 1); S & C; C >>>= 1) S ^= C;
        for (S ^= C, D = (1 << N) - 1; (S & D) != a[T]; ) T--, (N -= R), (D = (1 << N) - 1);
      }
    return v !== 0 && b != 1 ? ee : L;
  }
  function l(_) {
    let d;
    for (
      t ||
        ((t = []),
        (e = []),
        (r = new Int32Array(te + 1)),
        (s = []),
        (i = new Int32Array(te)),
        (a = new Int32Array(te + 1))),
        e.length < _ && (e = []),
        d = 0;
      d < _;
      d++
    )
      e[d] = 0;
    for (d = 0; d < te + 1; d++) r[d] = 0;
    for (d = 0; d < 3; d++) s[d] = 0;
    i.set(r.subarray(0, te), 0), a.set(r.subarray(0, te + 1), 0);
  }
  (n.inflate_trees_bits = function (_, d, p, h, g) {
    let y;
    return (
      l(19),
      (t[0] = 0),
      (y = o(_, 0, 19, 19, null, null, p, d, h, t, e)),
      y == W
        ? (g.msg = 'oversubscribed dynamic bit lengths tree')
        : (y == ee || d[0] === 0) && ((g.msg = 'incomplete dynamic bit lengths tree'), (y = W)),
      y
    );
  }),
    (n.inflate_trees_dynamic = function (_, d, p, h, g, y, f, c, u) {
      let m;
      return (
        l(288),
        (t[0] = 0),
        (m = o(p, 0, _, 257, is, as, y, h, c, t, e)),
        m != L || h[0] === 0
          ? (m == W
              ? (u.msg = 'oversubscribed literal/length tree')
              : m != It && ((u.msg = 'incomplete literal/length tree'), (m = W)),
            m)
          : (l(288),
            (m = o(p, _, d, 0, os, cs, f, g, c, t, e)),
            m != L || (g[0] === 0 && _ > 257)
              ? (m == W
                  ? (u.msg = 'oversubscribed distance tree')
                  : m == ee
                  ? ((u.msg = 'incomplete distance tree'), (m = W))
                  : m != It && ((u.msg = 'empty distance tree with lengths'), (m = W)),
                m)
              : L)
      );
    });
}
et.inflate_trees_fixed = function (n, t, e, r) {
  return (n[0] = ts), (t[0] = ns), (e[0] = rs), (r[0] = ss), L;
};
const ke = 0,
  Nt = 1,
  Pt = 2,
  Lt = 3,
  Ft = 4,
  Mt = 5,
  Ut = 6,
  qe = 7,
  vt = 8,
  De = 9;
function ls() {
  const n = this;
  let t,
    e = 0,
    r,
    s = 0,
    i = 0,
    a = 0,
    o = 0,
    l = 0,
    _ = 0,
    d = 0,
    p,
    h = 0,
    g,
    y = 0;
  function f(c, u, m, w, x, A, b, T) {
    let S, C, E, R, D, O, P, N, k, v, M, ge, I, le, U, H;
    (P = T.next_in_index),
      (N = T.avail_in),
      (D = b.bitb),
      (O = b.bitk),
      (k = b.write),
      (v = k < b.read ? b.read - k - 1 : b.end - k),
      (M = Z[c]),
      (ge = Z[u]);
    do {
      for (; O < 20; ) N--, (D |= (T.read_byte(P++) & 255) << O), (O += 8);
      if (((S = D & M), (C = m), (E = w), (H = (E + S) * 3), (R = C[H]) === 0)) {
        (D >>= C[H + 1]), (O -= C[H + 1]), (b.win[k++] = C[H + 2]), v--;
        continue;
      }
      do {
        if (((D >>= C[H + 1]), (O -= C[H + 1]), R & 16)) {
          for (R &= 15, I = C[H + 2] + (D & Z[R]), D >>= R, O -= R; O < 15; )
            N--, (D |= (T.read_byte(P++) & 255) << O), (O += 8);
          (S = D & ge), (C = x), (E = A), (H = (E + S) * 3), (R = C[H]);
          do
            if (((D >>= C[H + 1]), (O -= C[H + 1]), R & 16)) {
              for (R &= 15; O < R; ) N--, (D |= (T.read_byte(P++) & 255) << O), (O += 8);
              if (((le = C[H + 2] + (D & Z[R])), (D >>= R), (O -= R), (v -= I), k >= le))
                (U = k - le),
                  k - U > 0 && 2 > k - U
                    ? ((b.win[k++] = b.win[U++]), (b.win[k++] = b.win[U++]), (I -= 2))
                    : (b.win.set(b.win.subarray(U, U + 2), k), (k += 2), (U += 2), (I -= 2));
              else {
                U = k - le;
                do U += b.end;
                while (U < 0);
                if (((R = b.end - U), I > R)) {
                  if (((I -= R), k - U > 0 && R > k - U))
                    do b.win[k++] = b.win[U++];
                    while (--R !== 0);
                  else b.win.set(b.win.subarray(U, U + R), k), (k += R), (U += R), (R = 0);
                  U = 0;
                }
              }
              if (k - U > 0 && I > k - U)
                do b.win[k++] = b.win[U++];
                while (--I !== 0);
              else b.win.set(b.win.subarray(U, U + I), k), (k += I), (U += I), (I = 0);
              break;
            } else if (!(R & 64)) (S += C[H + 2]), (S += D & Z[R]), (H = (E + S) * 3), (R = C[H]);
            else
              return (
                (T.msg = 'invalid distance code'),
                (I = T.avail_in - N),
                (I = O >> 3 < I ? O >> 3 : I),
                (N += I),
                (P -= I),
                (O -= I << 3),
                (b.bitb = D),
                (b.bitk = O),
                (T.avail_in = N),
                (T.total_in += P - T.next_in_index),
                (T.next_in_index = P),
                (b.write = k),
                W
              );
          while (!0);
          break;
        }
        if (R & 64)
          return R & 32
            ? ((I = T.avail_in - N),
              (I = O >> 3 < I ? O >> 3 : I),
              (N += I),
              (P -= I),
              (O -= I << 3),
              (b.bitb = D),
              (b.bitk = O),
              (T.avail_in = N),
              (T.total_in += P - T.next_in_index),
              (T.next_in_index = P),
              (b.write = k),
              z)
            : ((T.msg = 'invalid literal/length code'),
              (I = T.avail_in - N),
              (I = O >> 3 < I ? O >> 3 : I),
              (N += I),
              (P -= I),
              (O -= I << 3),
              (b.bitb = D),
              (b.bitk = O),
              (T.avail_in = N),
              (T.total_in += P - T.next_in_index),
              (T.next_in_index = P),
              (b.write = k),
              W);
        if (((S += C[H + 2]), (S += D & Z[R]), (H = (E + S) * 3), (R = C[H]) === 0)) {
          (D >>= C[H + 1]), (O -= C[H + 1]), (b.win[k++] = C[H + 2]), v--;
          break;
        }
      } while (!0);
    } while (v >= 258 && N >= 10);
    return (
      (I = T.avail_in - N),
      (I = O >> 3 < I ? O >> 3 : I),
      (N += I),
      (P -= I),
      (O -= I << 3),
      (b.bitb = D),
      (b.bitk = O),
      (T.avail_in = N),
      (T.total_in += P - T.next_in_index),
      (T.next_in_index = P),
      (b.write = k),
      L
    );
  }
  (n.init = function (c, u, m, w, x, A) {
    (t = ke), (_ = c), (d = u), (p = m), (h = w), (g = x), (y = A), (r = null);
  }),
    (n.proc = function (c, u, m) {
      let w,
        x,
        A,
        b = 0,
        T = 0,
        S = 0,
        C,
        E,
        R,
        D;
      for (
        S = u.next_in_index,
          C = u.avail_in,
          b = c.bitb,
          T = c.bitk,
          E = c.write,
          R = E < c.read ? c.read - E - 1 : c.end - E;
        ;

      )
        switch (t) {
          case ke:
            if (
              R >= 258 &&
              C >= 10 &&
              ((c.bitb = b),
              (c.bitk = T),
              (u.avail_in = C),
              (u.total_in += S - u.next_in_index),
              (u.next_in_index = S),
              (c.write = E),
              (m = f(_, d, p, h, g, y, c, u)),
              (S = u.next_in_index),
              (C = u.avail_in),
              (b = c.bitb),
              (T = c.bitk),
              (E = c.write),
              (R = E < c.read ? c.read - E - 1 : c.end - E),
              m != L)
            ) {
              t = m == z ? qe : De;
              break;
            }
            (i = _), (r = p), (s = h), (t = Nt);
          case Nt:
            for (w = i; T < w; ) {
              if (C !== 0) m = L;
              else
                return (
                  (c.bitb = b),
                  (c.bitk = T),
                  (u.avail_in = C),
                  (u.total_in += S - u.next_in_index),
                  (u.next_in_index = S),
                  (c.write = E),
                  c.inflate_flush(u, m)
                );
              C--, (b |= (u.read_byte(S++) & 255) << T), (T += 8);
            }
            if (
              ((x = (s + (b & Z[w])) * 3), (b >>>= r[x + 1]), (T -= r[x + 1]), (A = r[x]), A === 0)
            ) {
              (a = r[x + 2]), (t = Ut);
              break;
            }
            if (A & 16) {
              (o = A & 15), (e = r[x + 2]), (t = Pt);
              break;
            }
            if (!(A & 64)) {
              (i = A), (s = x / 3 + r[x + 2]);
              break;
            }
            if (A & 32) {
              t = qe;
              break;
            }
            return (
              (t = De),
              (u.msg = 'invalid literal/length code'),
              (m = W),
              (c.bitb = b),
              (c.bitk = T),
              (u.avail_in = C),
              (u.total_in += S - u.next_in_index),
              (u.next_in_index = S),
              (c.write = E),
              c.inflate_flush(u, m)
            );
          case Pt:
            for (w = o; T < w; ) {
              if (C !== 0) m = L;
              else
                return (
                  (c.bitb = b),
                  (c.bitk = T),
                  (u.avail_in = C),
                  (u.total_in += S - u.next_in_index),
                  (u.next_in_index = S),
                  (c.write = E),
                  c.inflate_flush(u, m)
                );
              C--, (b |= (u.read_byte(S++) & 255) << T), (T += 8);
            }
            (e += b & Z[w]), (b >>= w), (T -= w), (i = d), (r = g), (s = y), (t = Lt);
          case Lt:
            for (w = i; T < w; ) {
              if (C !== 0) m = L;
              else
                return (
                  (c.bitb = b),
                  (c.bitk = T),
                  (u.avail_in = C),
                  (u.total_in += S - u.next_in_index),
                  (u.next_in_index = S),
                  (c.write = E),
                  c.inflate_flush(u, m)
                );
              C--, (b |= (u.read_byte(S++) & 255) << T), (T += 8);
            }
            if (
              ((x = (s + (b & Z[w])) * 3), (b >>= r[x + 1]), (T -= r[x + 1]), (A = r[x]), A & 16)
            ) {
              (o = A & 15), (l = r[x + 2]), (t = Ft);
              break;
            }
            if (!(A & 64)) {
              (i = A), (s = x / 3 + r[x + 2]);
              break;
            }
            return (
              (t = De),
              (u.msg = 'invalid distance code'),
              (m = W),
              (c.bitb = b),
              (c.bitk = T),
              (u.avail_in = C),
              (u.total_in += S - u.next_in_index),
              (u.next_in_index = S),
              (c.write = E),
              c.inflate_flush(u, m)
            );
          case Ft:
            for (w = o; T < w; ) {
              if (C !== 0) m = L;
              else
                return (
                  (c.bitb = b),
                  (c.bitk = T),
                  (u.avail_in = C),
                  (u.total_in += S - u.next_in_index),
                  (u.next_in_index = S),
                  (c.write = E),
                  c.inflate_flush(u, m)
                );
              C--, (b |= (u.read_byte(S++) & 255) << T), (T += 8);
            }
            (l += b & Z[w]), (b >>= w), (T -= w), (t = Mt);
          case Mt:
            for (D = E - l; D < 0; ) D += c.end;
            for (; e !== 0; ) {
              if (
                R === 0 &&
                (E == c.end &&
                  c.read !== 0 &&
                  ((E = 0), (R = E < c.read ? c.read - E - 1 : c.end - E)),
                R === 0 &&
                  ((c.write = E),
                  (m = c.inflate_flush(u, m)),
                  (E = c.write),
                  (R = E < c.read ? c.read - E - 1 : c.end - E),
                  E == c.end &&
                    c.read !== 0 &&
                    ((E = 0), (R = E < c.read ? c.read - E - 1 : c.end - E)),
                  R === 0))
              )
                return (
                  (c.bitb = b),
                  (c.bitk = T),
                  (u.avail_in = C),
                  (u.total_in += S - u.next_in_index),
                  (u.next_in_index = S),
                  (c.write = E),
                  c.inflate_flush(u, m)
                );
              (c.win[E++] = c.win[D++]), R--, D == c.end && (D = 0), e--;
            }
            t = ke;
            break;
          case Ut:
            if (
              R === 0 &&
              (E == c.end &&
                c.read !== 0 &&
                ((E = 0), (R = E < c.read ? c.read - E - 1 : c.end - E)),
              R === 0 &&
                ((c.write = E),
                (m = c.inflate_flush(u, m)),
                (E = c.write),
                (R = E < c.read ? c.read - E - 1 : c.end - E),
                E == c.end &&
                  c.read !== 0 &&
                  ((E = 0), (R = E < c.read ? c.read - E - 1 : c.end - E)),
                R === 0))
            )
              return (
                (c.bitb = b),
                (c.bitk = T),
                (u.avail_in = C),
                (u.total_in += S - u.next_in_index),
                (u.next_in_index = S),
                (c.write = E),
                c.inflate_flush(u, m)
              );
            (m = L), (c.win[E++] = a), R--, (t = ke);
            break;
          case qe:
            if (
              (T > 7 && ((T -= 8), C++, S--),
              (c.write = E),
              (m = c.inflate_flush(u, m)),
              (E = c.write),
              (R = E < c.read ? c.read - E - 1 : c.end - E),
              c.read != c.write)
            )
              return (
                (c.bitb = b),
                (c.bitk = T),
                (u.avail_in = C),
                (u.total_in += S - u.next_in_index),
                (u.next_in_index = S),
                (c.write = E),
                c.inflate_flush(u, m)
              );
            t = vt;
          case vt:
            return (
              (m = z),
              (c.bitb = b),
              (c.bitk = T),
              (u.avail_in = C),
              (u.total_in += S - u.next_in_index),
              (u.next_in_index = S),
              (c.write = E),
              c.inflate_flush(u, m)
            );
          case De:
            return (
              (m = W),
              (c.bitb = b),
              (c.bitk = T),
              (u.avail_in = C),
              (u.total_in += S - u.next_in_index),
              (u.next_in_index = S),
              (c.write = E),
              c.inflate_flush(u, m)
            );
          default:
            return (
              (m = V),
              (c.bitb = b),
              (c.bitk = T),
              (u.avail_in = C),
              (u.total_in += S - u.next_in_index),
              (u.next_in_index = S),
              (c.write = E),
              c.inflate_flush(u, m)
            );
        }
    }),
    (n.free = function () {});
}
const Ht = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
  he = 0,
  Ge = 1,
  Wt = 2,
  Bt = 3,
  jt = 4,
  qt = 5,
  Ie = 6,
  Ne = 7,
  Gt = 8,
  fe = 9;
function fs(n, t) {
  const e = this;
  let r = he,
    s = 0,
    i = 0,
    a = 0,
    o;
  const l = [0],
    _ = [0],
    d = new ls();
  let p = 0,
    h = new Int32Array(Rn * 3);
  const g = 0,
    y = new et();
  (e.bitk = 0),
    (e.bitb = 0),
    (e.win = new Uint8Array(t)),
    (e.end = t),
    (e.read = 0),
    (e.write = 0),
    (e.reset = function (f, c) {
      c && (c[0] = g),
        r == Ie && d.free(f),
        (r = he),
        (e.bitk = 0),
        (e.bitb = 0),
        (e.read = e.write = 0);
    }),
    e.reset(n, null),
    (e.inflate_flush = function (f, c) {
      let u, m, w;
      return (
        (m = f.next_out_index),
        (w = e.read),
        (u = (w <= e.write ? e.write : e.end) - w),
        u > f.avail_out && (u = f.avail_out),
        u !== 0 && c == ee && (c = L),
        (f.avail_out -= u),
        (f.total_out += u),
        f.next_out.set(e.win.subarray(w, w + u), m),
        (m += u),
        (w += u),
        w == e.end &&
          ((w = 0),
          e.write == e.end && (e.write = 0),
          (u = e.write - w),
          u > f.avail_out && (u = f.avail_out),
          u !== 0 && c == ee && (c = L),
          (f.avail_out -= u),
          (f.total_out += u),
          f.next_out.set(e.win.subarray(w, w + u), m),
          (m += u),
          (w += u)),
        (f.next_out_index = m),
        (e.read = w),
        c
      );
    }),
    (e.proc = function (f, c) {
      let u, m, w, x, A, b, T, S;
      for (
        x = f.next_in_index,
          A = f.avail_in,
          m = e.bitb,
          w = e.bitk,
          b = e.write,
          T = b < e.read ? e.read - b - 1 : e.end - b;
        ;

      ) {
        let C, E, R, D, O, P, N, k;
        switch (r) {
          case he:
            for (; w < 3; ) {
              if (A !== 0) c = L;
              else
                return (
                  (e.bitb = m),
                  (e.bitk = w),
                  (f.avail_in = A),
                  (f.total_in += x - f.next_in_index),
                  (f.next_in_index = x),
                  (e.write = b),
                  e.inflate_flush(f, c)
                );
              A--, (m |= (f.read_byte(x++) & 255) << w), (w += 8);
            }
            switch (((u = m & 7), (p = u & 1), u >>> 1)) {
              case 0:
                (m >>>= 3), (w -= 3), (u = w & 7), (m >>>= u), (w -= u), (r = Ge);
                break;
              case 1:
                (C = []),
                  (E = []),
                  (R = [[]]),
                  (D = [[]]),
                  et.inflate_trees_fixed(C, E, R, D),
                  d.init(C[0], E[0], R[0], 0, D[0], 0),
                  (m >>>= 3),
                  (w -= 3),
                  (r = Ie);
                break;
              case 2:
                (m >>>= 3), (w -= 3), (r = Bt);
                break;
              case 3:
                return (
                  (m >>>= 3),
                  (w -= 3),
                  (r = fe),
                  (f.msg = 'invalid block type'),
                  (c = W),
                  (e.bitb = m),
                  (e.bitk = w),
                  (f.avail_in = A),
                  (f.total_in += x - f.next_in_index),
                  (f.next_in_index = x),
                  (e.write = b),
                  e.inflate_flush(f, c)
                );
            }
            break;
          case Ge:
            for (; w < 32; ) {
              if (A !== 0) c = L;
              else
                return (
                  (e.bitb = m),
                  (e.bitk = w),
                  (f.avail_in = A),
                  (f.total_in += x - f.next_in_index),
                  (f.next_in_index = x),
                  (e.write = b),
                  e.inflate_flush(f, c)
                );
              A--, (m |= (f.read_byte(x++) & 255) << w), (w += 8);
            }
            if (((~m >>> 16) & 65535) != (m & 65535))
              return (
                (r = fe),
                (f.msg = 'invalid stored block lengths'),
                (c = W),
                (e.bitb = m),
                (e.bitk = w),
                (f.avail_in = A),
                (f.total_in += x - f.next_in_index),
                (f.next_in_index = x),
                (e.write = b),
                e.inflate_flush(f, c)
              );
            (s = m & 65535), (m = w = 0), (r = s !== 0 ? Wt : p !== 0 ? Ne : he);
            break;
          case Wt:
            if (
              A === 0 ||
              (T === 0 &&
                (b == e.end &&
                  e.read !== 0 &&
                  ((b = 0), (T = b < e.read ? e.read - b - 1 : e.end - b)),
                T === 0 &&
                  ((e.write = b),
                  (c = e.inflate_flush(f, c)),
                  (b = e.write),
                  (T = b < e.read ? e.read - b - 1 : e.end - b),
                  b == e.end &&
                    e.read !== 0 &&
                    ((b = 0), (T = b < e.read ? e.read - b - 1 : e.end - b)),
                  T === 0)))
            )
              return (
                (e.bitb = m),
                (e.bitk = w),
                (f.avail_in = A),
                (f.total_in += x - f.next_in_index),
                (f.next_in_index = x),
                (e.write = b),
                e.inflate_flush(f, c)
              );
            if (
              ((c = L),
              (u = s),
              u > A && (u = A),
              u > T && (u = T),
              e.win.set(f.read_buf(x, u), b),
              (x += u),
              (A -= u),
              (b += u),
              (T -= u),
              (s -= u) !== 0)
            )
              break;
            r = p !== 0 ? Ne : he;
            break;
          case Bt:
            for (; w < 14; ) {
              if (A !== 0) c = L;
              else
                return (
                  (e.bitb = m),
                  (e.bitk = w),
                  (f.avail_in = A),
                  (f.total_in += x - f.next_in_index),
                  (f.next_in_index = x),
                  (e.write = b),
                  e.inflate_flush(f, c)
                );
              A--, (m |= (f.read_byte(x++) & 255) << w), (w += 8);
            }
            if (((i = u = m & 16383), (u & 31) > 29 || ((u >> 5) & 31) > 29))
              return (
                (r = fe),
                (f.msg = 'too many length or distance symbols'),
                (c = W),
                (e.bitb = m),
                (e.bitk = w),
                (f.avail_in = A),
                (f.total_in += x - f.next_in_index),
                (f.next_in_index = x),
                (e.write = b),
                e.inflate_flush(f, c)
              );
            if (((u = 258 + (u & 31) + ((u >> 5) & 31)), !o || o.length < u)) o = [];
            else for (S = 0; S < u; S++) o[S] = 0;
            (m >>>= 14), (w -= 14), (a = 0), (r = jt);
          case jt:
            for (; a < 4 + (i >>> 10); ) {
              for (; w < 3; ) {
                if (A !== 0) c = L;
                else
                  return (
                    (e.bitb = m),
                    (e.bitk = w),
                    (f.avail_in = A),
                    (f.total_in += x - f.next_in_index),
                    (f.next_in_index = x),
                    (e.write = b),
                    e.inflate_flush(f, c)
                  );
                A--, (m |= (f.read_byte(x++) & 255) << w), (w += 8);
              }
              (o[Ht[a++]] = m & 7), (m >>>= 3), (w -= 3);
            }
            for (; a < 19; ) o[Ht[a++]] = 0;
            if (((l[0] = 7), (u = y.inflate_trees_bits(o, l, _, h, f)), u != L))
              return (
                (c = u),
                c == W && ((o = null), (r = fe)),
                (e.bitb = m),
                (e.bitk = w),
                (f.avail_in = A),
                (f.total_in += x - f.next_in_index),
                (f.next_in_index = x),
                (e.write = b),
                e.inflate_flush(f, c)
              );
            (a = 0), (r = qt);
          case qt:
            for (; (u = i), !(a >= 258 + (u & 31) + ((u >> 5) & 31)); ) {
              let v, M;
              for (u = l[0]; w < u; ) {
                if (A !== 0) c = L;
                else
                  return (
                    (e.bitb = m),
                    (e.bitk = w),
                    (f.avail_in = A),
                    (f.total_in += x - f.next_in_index),
                    (f.next_in_index = x),
                    (e.write = b),
                    e.inflate_flush(f, c)
                  );
                A--, (m |= (f.read_byte(x++) & 255) << w), (w += 8);
              }
              if (
                ((u = h[(_[0] + (m & Z[u])) * 3 + 1]), (M = h[(_[0] + (m & Z[u])) * 3 + 2]), M < 16)
              )
                (m >>>= u), (w -= u), (o[a++] = M);
              else {
                for (S = M == 18 ? 7 : M - 14, v = M == 18 ? 11 : 3; w < u + S; ) {
                  if (A !== 0) c = L;
                  else
                    return (
                      (e.bitb = m),
                      (e.bitk = w),
                      (f.avail_in = A),
                      (f.total_in += x - f.next_in_index),
                      (f.next_in_index = x),
                      (e.write = b),
                      e.inflate_flush(f, c)
                    );
                  A--, (m |= (f.read_byte(x++) & 255) << w), (w += 8);
                }
                if (
                  ((m >>>= u),
                  (w -= u),
                  (v += m & Z[S]),
                  (m >>>= S),
                  (w -= S),
                  (S = a),
                  (u = i),
                  S + v > 258 + (u & 31) + ((u >> 5) & 31) || (M == 16 && S < 1))
                )
                  return (
                    (o = null),
                    (r = fe),
                    (f.msg = 'invalid bit length repeat'),
                    (c = W),
                    (e.bitb = m),
                    (e.bitk = w),
                    (f.avail_in = A),
                    (f.total_in += x - f.next_in_index),
                    (f.next_in_index = x),
                    (e.write = b),
                    e.inflate_flush(f, c)
                  );
                M = M == 16 ? o[S - 1] : 0;
                do o[S++] = M;
                while (--v !== 0);
                a = S;
              }
            }
            if (
              ((_[0] = -1),
              (O = []),
              (P = []),
              (N = []),
              (k = []),
              (O[0] = 9),
              (P[0] = 6),
              (u = i),
              (u = y.inflate_trees_dynamic(
                257 + (u & 31),
                1 + ((u >> 5) & 31),
                o,
                O,
                P,
                N,
                k,
                h,
                f
              )),
              u != L)
            )
              return (
                u == W && ((o = null), (r = fe)),
                (c = u),
                (e.bitb = m),
                (e.bitk = w),
                (f.avail_in = A),
                (f.total_in += x - f.next_in_index),
                (f.next_in_index = x),
                (e.write = b),
                e.inflate_flush(f, c)
              );
            d.init(O[0], P[0], h, N[0], h, k[0]), (r = Ie);
          case Ie:
            if (
              ((e.bitb = m),
              (e.bitk = w),
              (f.avail_in = A),
              (f.total_in += x - f.next_in_index),
              (f.next_in_index = x),
              (e.write = b),
              (c = d.proc(e, f, c)) != z)
            )
              return e.inflate_flush(f, c);
            if (
              ((c = L),
              d.free(f),
              (x = f.next_in_index),
              (A = f.avail_in),
              (m = e.bitb),
              (w = e.bitk),
              (b = e.write),
              (T = b < e.read ? e.read - b - 1 : e.end - b),
              p === 0)
            ) {
              r = he;
              break;
            }
            r = Ne;
          case Ne:
            if (
              ((e.write = b),
              (c = e.inflate_flush(f, c)),
              (b = e.write),
              (T = b < e.read ? e.read - b - 1 : e.end - b),
              e.read != e.write)
            )
              return (
                (e.bitb = m),
                (e.bitk = w),
                (f.avail_in = A),
                (f.total_in += x - f.next_in_index),
                (f.next_in_index = x),
                (e.write = b),
                e.inflate_flush(f, c)
              );
            r = Gt;
          case Gt:
            return (
              (c = z),
              (e.bitb = m),
              (e.bitk = w),
              (f.avail_in = A),
              (f.total_in += x - f.next_in_index),
              (f.next_in_index = x),
              (e.write = b),
              e.inflate_flush(f, c)
            );
          case fe:
            return (
              (c = W),
              (e.bitb = m),
              (e.bitk = w),
              (f.avail_in = A),
              (f.total_in += x - f.next_in_index),
              (f.next_in_index = x),
              (e.write = b),
              e.inflate_flush(f, c)
            );
          default:
            return (
              (c = V),
              (e.bitb = m),
              (e.bitk = w),
              (f.avail_in = A),
              (f.total_in += x - f.next_in_index),
              (f.next_in_index = x),
              (e.write = b),
              e.inflate_flush(f, c)
            );
        }
      }
    }),
    (e.free = function (f) {
      e.reset(f, null), (e.win = null), (h = null);
    }),
    (e.set_dictionary = function (f, c, u) {
      e.win.set(f.subarray(c, c + u), 0), (e.read = e.write = u);
    }),
    (e.sync_point = function () {
      return r == Ge ? 1 : 0;
    });
}
const us = 32,
  ds = 8,
  _s = 0,
  Yt = 1,
  Vt = 2,
  Zt = 3,
  Kt = 4,
  Xt = 5,
  Ye = 6,
  ye = 7,
  $t = 12,
  ne = 13,
  hs = [0, 0, 255, 255];
function ps() {
  const n = this;
  (n.mode = 0), (n.method = 0), (n.was = [0]), (n.need = 0), (n.marker = 0), (n.wbits = 0);
  function t(e) {
    return !e || !e.istate
      ? V
      : ((e.total_in = e.total_out = 0),
        (e.msg = null),
        (e.istate.mode = ye),
        e.istate.blocks.reset(e, null),
        L);
  }
  (n.inflateEnd = function (e) {
    return n.blocks && n.blocks.free(e), (n.blocks = null), L;
  }),
    (n.inflateInit = function (e, r) {
      return (
        (e.msg = null),
        (n.blocks = null),
        r < 8 || r > 15
          ? (n.inflateEnd(e), V)
          : ((n.wbits = r), (e.istate.blocks = new fs(e, 1 << r)), t(e), L)
      );
    }),
    (n.inflate = function (e, r) {
      let s, i;
      if (!e || !e.istate || !e.next_in) return V;
      const a = e.istate;
      for (r = r == es ? ee : L, s = ee; ; )
        switch (a.mode) {
          case _s:
            if (e.avail_in === 0) return s;
            if (
              ((s = r),
              e.avail_in--,
              e.total_in++,
              ((a.method = e.read_byte(e.next_in_index++)) & 15) != ds)
            ) {
              (a.mode = ne), (e.msg = 'unknown compression method'), (a.marker = 5);
              break;
            }
            if ((a.method >> 4) + 8 > a.wbits) {
              (a.mode = ne), (e.msg = 'invalid win size'), (a.marker = 5);
              break;
            }
            a.mode = Yt;
          case Yt:
            if (e.avail_in === 0) return s;
            if (
              ((s = r),
              e.avail_in--,
              e.total_in++,
              (i = e.read_byte(e.next_in_index++) & 255),
              ((a.method << 8) + i) % 31 !== 0)
            ) {
              (a.mode = ne), (e.msg = 'incorrect header check'), (a.marker = 5);
              break;
            }
            if (!(i & us)) {
              a.mode = ye;
              break;
            }
            a.mode = Vt;
          case Vt:
            if (e.avail_in === 0) return s;
            (s = r),
              e.avail_in--,
              e.total_in++,
              (a.need = ((e.read_byte(e.next_in_index++) & 255) << 24) & 4278190080),
              (a.mode = Zt);
          case Zt:
            if (e.avail_in === 0) return s;
            (s = r),
              e.avail_in--,
              e.total_in++,
              (a.need += ((e.read_byte(e.next_in_index++) & 255) << 16) & 16711680),
              (a.mode = Kt);
          case Kt:
            if (e.avail_in === 0) return s;
            (s = r),
              e.avail_in--,
              e.total_in++,
              (a.need += ((e.read_byte(e.next_in_index++) & 255) << 8) & 65280),
              (a.mode = Xt);
          case Xt:
            return e.avail_in === 0
              ? s
              : ((s = r),
                e.avail_in--,
                e.total_in++,
                (a.need += e.read_byte(e.next_in_index++) & 255),
                (a.mode = Ye),
                Qr);
          case Ye:
            return (a.mode = ne), (e.msg = 'need dictionary'), (a.marker = 0), V;
          case ye:
            if (((s = a.blocks.proc(e, s)), s == W)) {
              (a.mode = ne), (a.marker = 0);
              break;
            }
            if ((s == L && (s = r), s != z)) return s;
            (s = r), a.blocks.reset(e, a.was), (a.mode = $t);
          case $t:
            return (e.avail_in = 0), z;
          case ne:
            return W;
          default:
            return V;
        }
    }),
    (n.inflateSetDictionary = function (e, r, s) {
      let i = 0,
        a = s;
      if (!e || !e.istate || e.istate.mode != Ye) return V;
      const o = e.istate;
      return (
        a >= 1 << o.wbits && ((a = (1 << o.wbits) - 1), (i = s - a)),
        o.blocks.set_dictionary(r, i, a),
        (o.mode = ye),
        L
      );
    }),
    (n.inflateSync = function (e) {
      let r, s, i, a, o;
      if (!e || !e.istate) return V;
      const l = e.istate;
      if ((l.mode != ne && ((l.mode = ne), (l.marker = 0)), (r = e.avail_in) === 0)) return ee;
      for (s = e.next_in_index, i = l.marker; r !== 0 && i < 4; )
        e.read_byte(s) == hs[i] ? i++ : e.read_byte(s) !== 0 ? (i = 0) : (i = 4 - i), s++, r--;
      return (
        (e.total_in += s - e.next_in_index),
        (e.next_in_index = s),
        (e.avail_in = r),
        (l.marker = i),
        i != 4
          ? W
          : ((a = e.total_in),
            (o = e.total_out),
            t(e),
            (e.total_in = a),
            (e.total_out = o),
            (l.mode = ye),
            L)
      );
    }),
    (n.inflateSyncPoint = function (e) {
      return !e || !e.istate || !e.istate.blocks ? V : e.istate.blocks.sync_point();
    });
}
function Cn() {}
Cn.prototype = {
  inflateInit(n) {
    const t = this;
    return (t.istate = new ps()), n || (n = Jr), t.istate.inflateInit(t, n);
  },
  inflate(n) {
    const t = this;
    return t.istate ? t.istate.inflate(t, n) : V;
  },
  inflateEnd() {
    const n = this;
    if (!n.istate) return V;
    const t = n.istate.inflateEnd(n);
    return (n.istate = null), t;
  },
  inflateSync() {
    const n = this;
    return n.istate ? n.istate.inflateSync(n) : V;
  },
  inflateSetDictionary(n, t) {
    const e = this;
    return e.istate ? e.istate.inflateSetDictionary(e, n, t) : V;
  },
  read_byte(n) {
    return this.next_in[n];
  },
  read_buf(n, t) {
    return this.next_in.subarray(n, n + t);
  },
};
function ms(n) {
  const t = this,
    e = new Cn(),
    r = n && n.chunkSize ? Math.floor(n.chunkSize * 2) : 128 * 1024,
    s = zr,
    i = new Uint8Array(r);
  let a = !1;
  e.inflateInit(),
    (e.next_out = i),
    (t.append = function (o, l) {
      const _ = [];
      let d,
        p,
        h = 0,
        g = 0,
        y = 0;
      if (o.length !== 0) {
        (e.next_in_index = 0), (e.next_in = o), (e.avail_in = o.length);
        do {
          if (
            ((e.next_out_index = 0),
            (e.avail_out = r),
            e.avail_in === 0 && !a && ((e.next_in_index = 0), (a = !0)),
            (d = e.inflate(s)),
            a && d === ee)
          ) {
            if (e.avail_in !== 0) throw new Error('inflating: bad input');
          } else if (d !== L && d !== z) throw new Error('inflating: ' + e.msg);
          if ((a || d === z) && e.avail_in === o.length) throw new Error('inflating: bad input');
          e.next_out_index &&
            (e.next_out_index === r
              ? _.push(new Uint8Array(i))
              : _.push(i.subarray(0, e.next_out_index))),
            (y += e.next_out_index),
            l &&
              e.next_in_index > 0 &&
              e.next_in_index != h &&
              (l(e.next_in_index), (h = e.next_in_index));
        } while (e.avail_in > 0 || e.avail_out === 0);
        return (
          _.length > 1
            ? ((p = new Uint8Array(y)),
              _.forEach(function (f) {
                p.set(f, g), (g += f.length);
              }))
            : (p = _[0] ? new Uint8Array(_[0]) : new Uint8Array()),
          p
        );
      }
    }),
    (t.flush = function () {
      e.inflateEnd();
    });
}
const de = 4294967295,
  ae = 65535,
  ws = 8,
  bs = 0,
  gs = 99,
  ys = 67324752,
  xs = 134695760,
  Jt = 33639248,
  Es = 101010256,
  Qt = 101075792,
  Ts = 117853008,
  pe = 22,
  Ve = 20,
  Ze = 56,
  Ss = 1,
  As = 39169,
  Rs = 10,
  Cs = 1,
  Os = 21589,
  ks = 28789,
  Ds = 25461,
  Is = 6534,
  zt = 1,
  Ns = 6,
  en = 8,
  tn = 2048,
  nn = 16,
  Ps = '/',
  $ = void 0,
  Fe = 'undefined',
  On = 'function';
class rn {
  constructor(t) {
    return class extends TransformStream {
      constructor(e, r) {
        const s = new t(r);
        super({
          transform(i, a) {
            a.enqueue(s.append(i));
          },
          flush(i) {
            const a = s.flush();
            a && i.enqueue(a);
          },
        });
      }
    };
  }
}
const Ls = 64;
let kn = 2;
try {
  typeof navigator != Fe && navigator.hardwareConcurrency && (kn = navigator.hardwareConcurrency);
} catch {}
const Fs = {
    chunkSize: 512 * 1024,
    maxWorkers: kn,
    terminateWorkerTimeout: 5e3,
    useWebWorkers: !0,
    useCompressionStream: !0,
    workerScripts: $,
    CompressionStreamNative: typeof CompressionStream != Fe && CompressionStream,
    DecompressionStreamNative: typeof DecompressionStream != Fe && DecompressionStream,
  },
  oe = Object.assign({}, Fs);
function Dn() {
  return oe;
}
function Ms(n) {
  return Math.max(n.chunkSize, Ls);
}
function In(n) {
  const {
    baseURL: t,
    chunkSize: e,
    maxWorkers: r,
    terminateWorkerTimeout: s,
    useCompressionStream: i,
    useWebWorkers: a,
    Deflate: o,
    Inflate: l,
    CompressionStream: _,
    DecompressionStream: d,
    workerScripts: p,
  } = n;
  if (
    (re('baseURL', t),
    re('chunkSize', e),
    re('maxWorkers', r),
    re('terminateWorkerTimeout', s),
    re('useCompressionStream', i),
    re('useWebWorkers', a),
    o && (oe.CompressionStream = new rn(o)),
    l && (oe.DecompressionStream = new rn(l)),
    re('CompressionStream', _),
    re('DecompressionStream', d),
    p !== $)
  ) {
    const { deflate: h, inflate: g } = p;
    if (((h || g) && (oe.workerScripts || (oe.workerScripts = {})), h)) {
      if (!Array.isArray(h)) throw new Error('workerScripts.deflate must be an array');
      oe.workerScripts.deflate = h;
    }
    if (g) {
      if (!Array.isArray(g)) throw new Error('workerScripts.inflate must be an array');
      oe.workerScripts.inflate = g;
    }
  }
}
function re(n, t) {
  t !== $ && (oe[n] = t);
}
function Us() {
  return 'application/octet-stream';
}
const Nn = [];
for (let n = 0; n < 256; n++) {
  let t = n;
  for (let e = 0; e < 8; e++) t & 1 ? (t = (t >>> 1) ^ 3988292384) : (t = t >>> 1);
  Nn[n] = t;
}
class Me {
  constructor(t) {
    this.crc = t || -1;
  }
  append(t) {
    let e = this.crc | 0;
    for (let r = 0, s = t.length | 0; r < s; r++) e = (e >>> 8) ^ Nn[(e ^ t[r]) & 255];
    this.crc = e;
  }
  get() {
    return ~this.crc;
  }
}
class Pn extends TransformStream {
  constructor() {
    let t;
    const e = new Me();
    super({
      transform(r, s) {
        e.append(r), s.enqueue(r);
      },
      flush() {
        const r = new Uint8Array(4);
        new DataView(r.buffer).setUint32(0, e.get()), (t.value = r);
      },
    }),
      (t = this);
  }
}
function vs(n) {
  if (typeof TextEncoder > 'u') {
    n = unescape(encodeURIComponent(n));
    const t = new Uint8Array(n.length);
    for (let e = 0; e < t.length; e++) t[e] = n.charCodeAt(e);
    return t;
  } else return new TextEncoder().encode(n);
}
const Y = {
    concat(n, t) {
      if (n.length === 0 || t.length === 0) return n.concat(t);
      const e = n[n.length - 1],
        r = Y.getPartial(e);
      return r === 32 ? n.concat(t) : Y._shiftRight(t, r, e | 0, n.slice(0, n.length - 1));
    },
    bitLength(n) {
      const t = n.length;
      if (t === 0) return 0;
      const e = n[t - 1];
      return (t - 1) * 32 + Y.getPartial(e);
    },
    clamp(n, t) {
      if (n.length * 32 < t) return n;
      n = n.slice(0, Math.ceil(t / 32));
      const e = n.length;
      return (
        (t = t & 31),
        e > 0 && t && (n[e - 1] = Y.partial(t, n[e - 1] & (2147483648 >> (t - 1)), 1)),
        n
      );
    },
    partial(n, t, e) {
      return n === 32 ? t : (e ? t | 0 : t << (32 - n)) + n * 1099511627776;
    },
    getPartial(n) {
      return Math.round(n / 1099511627776) || 32;
    },
    _shiftRight(n, t, e, r) {
      for (r === void 0 && (r = []); t >= 32; t -= 32) r.push(e), (e = 0);
      if (t === 0) return r.concat(n);
      for (let a = 0; a < n.length; a++) r.push(e | (n[a] >>> t)), (e = n[a] << (32 - t));
      const s = n.length ? n[n.length - 1] : 0,
        i = Y.getPartial(s);
      return r.push(Y.partial((t + i) & 31, t + i > 32 ? e : r.pop(), 1)), r;
    },
  },
  Ue = {
    bytes: {
      fromBits(n) {
        const e = Y.bitLength(n) / 8,
          r = new Uint8Array(e);
        let s;
        for (let i = 0; i < e; i++) i & 3 || (s = n[i / 4]), (r[i] = s >>> 24), (s <<= 8);
        return r;
      },
      toBits(n) {
        const t = [];
        let e,
          r = 0;
        for (e = 0; e < n.length; e++) (r = (r << 8) | n[e]), (e & 3) === 3 && (t.push(r), (r = 0));
        return e & 3 && t.push(Y.partial(8 * (e & 3), r)), t;
      },
    },
  },
  Ln = {};
Ln.sha1 = class {
  constructor(n) {
    const t = this;
    (t.blockSize = 512),
      (t._init = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
      (t._key = [1518500249, 1859775393, 2400959708, 3395469782]),
      n
        ? ((t._h = n._h.slice(0)), (t._buffer = n._buffer.slice(0)), (t._length = n._length))
        : t.reset();
  }
  reset() {
    const n = this;
    return (n._h = n._init.slice(0)), (n._buffer = []), (n._length = 0), n;
  }
  update(n) {
    const t = this;
    typeof n == 'string' && (n = Ue.utf8String.toBits(n));
    const e = (t._buffer = Y.concat(t._buffer, n)),
      r = t._length,
      s = (t._length = r + Y.bitLength(n));
    if (s > 9007199254740991) throw new Error('Cannot hash more than 2^53 - 1 bits');
    const i = new Uint32Array(e);
    let a = 0;
    for (
      let o = t.blockSize + r - ((t.blockSize + r) & (t.blockSize - 1));
      o <= s;
      o += t.blockSize
    )
      t._block(i.subarray(16 * a, 16 * (a + 1))), (a += 1);
    return e.splice(0, 16 * a), t;
  }
  finalize() {
    const n = this;
    let t = n._buffer;
    const e = n._h;
    t = Y.concat(t, [Y.partial(1, 1)]);
    for (let r = t.length + 2; r & 15; r++) t.push(0);
    for (t.push(Math.floor(n._length / 4294967296)), t.push(n._length | 0); t.length; )
      n._block(t.splice(0, 16));
    return n.reset(), e;
  }
  _f(n, t, e, r) {
    if (n <= 19) return (t & e) | (~t & r);
    if (n <= 39) return t ^ e ^ r;
    if (n <= 59) return (t & e) | (t & r) | (e & r);
    if (n <= 79) return t ^ e ^ r;
  }
  _S(n, t) {
    return (t << n) | (t >>> (32 - n));
  }
  _block(n) {
    const t = this,
      e = t._h,
      r = Array(80);
    for (let _ = 0; _ < 16; _++) r[_] = n[_];
    let s = e[0],
      i = e[1],
      a = e[2],
      o = e[3],
      l = e[4];
    for (let _ = 0; _ <= 79; _++) {
      _ >= 16 && (r[_] = t._S(1, r[_ - 3] ^ r[_ - 8] ^ r[_ - 14] ^ r[_ - 16]));
      const d = (t._S(5, s) + t._f(_, i, a, o) + l + r[_] + t._key[Math.floor(_ / 20)]) | 0;
      (l = o), (o = a), (a = t._S(30, i)), (i = s), (s = d);
    }
    (e[0] = (e[0] + s) | 0),
      (e[1] = (e[1] + i) | 0),
      (e[2] = (e[2] + a) | 0),
      (e[3] = (e[3] + o) | 0),
      (e[4] = (e[4] + l) | 0);
  }
};
const Fn = {};
Fn.aes = class {
  constructor(n) {
    const t = this;
    (t._tables = [
      [[], [], [], [], []],
      [[], [], [], [], []],
    ]),
      t._tables[0][0][0] || t._precompute();
    const e = t._tables[0][4],
      r = t._tables[1],
      s = n.length;
    let i,
      a,
      o,
      l = 1;
    if (s !== 4 && s !== 6 && s !== 8) throw new Error('invalid aes key size');
    for (t._key = [(a = n.slice(0)), (o = [])], i = s; i < 4 * s + 28; i++) {
      let _ = a[i - 1];
      (i % s === 0 || (s === 8 && i % s === 4)) &&
        ((_ =
          (e[_ >>> 24] << 24) ^ (e[(_ >> 16) & 255] << 16) ^ (e[(_ >> 8) & 255] << 8) ^ e[_ & 255]),
        i % s === 0 &&
          ((_ = (_ << 8) ^ (_ >>> 24) ^ (l << 24)), (l = (l << 1) ^ ((l >> 7) * 283)))),
        (a[i] = a[i - s] ^ _);
    }
    for (let _ = 0; i; _++, i--) {
      const d = a[_ & 3 ? i : i - 4];
      i <= 4 || _ < 4
        ? (o[_] = d)
        : (o[_] =
            r[0][e[d >>> 24]] ^
            r[1][e[(d >> 16) & 255]] ^
            r[2][e[(d >> 8) & 255]] ^
            r[3][e[d & 255]]);
    }
  }
  encrypt(n) {
    return this._crypt(n, 0);
  }
  decrypt(n) {
    return this._crypt(n, 1);
  }
  _precompute() {
    const n = this._tables[0],
      t = this._tables[1],
      e = n[4],
      r = t[4],
      s = [],
      i = [];
    let a, o, l, _;
    for (let d = 0; d < 256; d++) i[(s[d] = (d << 1) ^ ((d >> 7) * 283)) ^ d] = d;
    for (let d = (a = 0); !e[d]; d ^= o || 1, a = i[a] || 1) {
      let p = a ^ (a << 1) ^ (a << 2) ^ (a << 3) ^ (a << 4);
      (p = (p >> 8) ^ (p & 255) ^ 99), (e[d] = p), (r[p] = d), (_ = s[(l = s[(o = s[d])])]);
      let h = (_ * 16843009) ^ (l * 65537) ^ (o * 257) ^ (d * 16843008),
        g = (s[p] * 257) ^ (p * 16843008);
      for (let y = 0; y < 4; y++)
        (n[y][d] = g = (g << 24) ^ (g >>> 8)), (t[y][p] = h = (h << 24) ^ (h >>> 8));
    }
    for (let d = 0; d < 5; d++) (n[d] = n[d].slice(0)), (t[d] = t[d].slice(0));
  }
  _crypt(n, t) {
    if (n.length !== 4) throw new Error('invalid aes block size');
    const e = this._key[t],
      r = e.length / 4 - 2,
      s = [0, 0, 0, 0],
      i = this._tables[t],
      a = i[0],
      o = i[1],
      l = i[2],
      _ = i[3],
      d = i[4];
    let p = n[0] ^ e[0],
      h = n[t ? 3 : 1] ^ e[1],
      g = n[2] ^ e[2],
      y = n[t ? 1 : 3] ^ e[3],
      f = 4,
      c,
      u,
      m;
    for (let w = 0; w < r; w++)
      (c = a[p >>> 24] ^ o[(h >> 16) & 255] ^ l[(g >> 8) & 255] ^ _[y & 255] ^ e[f]),
        (u = a[h >>> 24] ^ o[(g >> 16) & 255] ^ l[(y >> 8) & 255] ^ _[p & 255] ^ e[f + 1]),
        (m = a[g >>> 24] ^ o[(y >> 16) & 255] ^ l[(p >> 8) & 255] ^ _[h & 255] ^ e[f + 2]),
        (y = a[y >>> 24] ^ o[(p >> 16) & 255] ^ l[(h >> 8) & 255] ^ _[g & 255] ^ e[f + 3]),
        (f += 4),
        (p = c),
        (h = u),
        (g = m);
    for (let w = 0; w < 4; w++)
      (s[t ? 3 & -w : w] =
        (d[p >>> 24] << 24) ^
        (d[(h >> 16) & 255] << 16) ^
        (d[(g >> 8) & 255] << 8) ^
        d[y & 255] ^
        e[f++]),
        (c = p),
        (p = h),
        (h = g),
        (g = y),
        (y = c);
    return s;
  }
};
const Hs = {
    getRandomValues(n) {
      const t = new Uint32Array(n.buffer),
        e = r => {
          let s = 987654321;
          const i = 4294967295;
          return function () {
            return (
              (s = (36969 * (s & 65535) + (s >> 16)) & i),
              (r = (18e3 * (r & 65535) + (r >> 16)) & i),
              ((((s << 16) + r) & i) / 4294967296 + 0.5) * (Math.random() > 0.5 ? 1 : -1)
            );
          };
        };
      for (let r = 0, s; r < n.length; r += 4) {
        const i = e((s || Math.random()) * 4294967296);
        (s = i() * 987654071), (t[r / 4] = (i() * 4294967296) | 0);
      }
      return n;
    },
  },
  Mn = {};
Mn.ctrGladman = class {
  constructor(n, t) {
    (this._prf = n), (this._initIv = t), (this._iv = t);
  }
  reset() {
    this._iv = this._initIv;
  }
  update(n) {
    return this.calculate(this._prf, n, this._iv);
  }
  incWord(n) {
    if (((n >> 24) & 255) === 255) {
      let t = (n >> 16) & 255,
        e = (n >> 8) & 255,
        r = n & 255;
      t === 255 ? ((t = 0), e === 255 ? ((e = 0), r === 255 ? (r = 0) : ++r) : ++e) : ++t,
        (n = 0),
        (n += t << 16),
        (n += e << 8),
        (n += r);
    } else n += 1 << 24;
    return n;
  }
  incCounter(n) {
    (n[0] = this.incWord(n[0])) === 0 && (n[1] = this.incWord(n[1]));
  }
  calculate(n, t, e) {
    let r;
    if (!(r = t.length)) return [];
    const s = Y.bitLength(t);
    for (let i = 0; i < r; i += 4) {
      this.incCounter(e);
      const a = n.encrypt(e);
      (t[i] ^= a[0]), (t[i + 1] ^= a[1]), (t[i + 2] ^= a[2]), (t[i + 3] ^= a[3]);
    }
    return Y.clamp(t, s);
  }
};
const _e = {
  importKey(n) {
    return new _e.hmacSha1(Ue.bytes.toBits(n));
  },
  pbkdf2(n, t, e, r) {
    if (((e = e || 1e4), r < 0 || e < 0)) throw new Error('invalid params to pbkdf2');
    const s = ((r >> 5) + 1) << 2;
    let i, a, o, l, _;
    const d = new ArrayBuffer(s),
      p = new DataView(d);
    let h = 0;
    const g = Y;
    for (t = Ue.bytes.toBits(t), _ = 1; h < (s || 1); _++) {
      for (i = a = n.encrypt(g.concat(t, [_])), o = 1; o < e; o++)
        for (a = n.encrypt(a), l = 0; l < a.length; l++) i[l] ^= a[l];
      for (o = 0; h < (s || 1) && o < i.length; o++) p.setInt32(h, i[o]), (h += 4);
    }
    return d.slice(0, r / 8);
  },
};
_e.hmacSha1 = class {
  constructor(n) {
    const t = this,
      e = (t._hash = Ln.sha1),
      r = [[], []];
    t._baseHash = [new e(), new e()];
    const s = t._baseHash[0].blockSize / 32;
    n.length > s && (n = new e().update(n).finalize());
    for (let i = 0; i < s; i++) (r[0][i] = n[i] ^ 909522486), (r[1][i] = n[i] ^ 1549556828);
    t._baseHash[0].update(r[0]),
      t._baseHash[1].update(r[1]),
      (t._resultHash = new e(t._baseHash[0]));
  }
  reset() {
    const n = this;
    (n._resultHash = new n._hash(n._baseHash[0])), (n._updated = !1);
  }
  update(n) {
    const t = this;
    (t._updated = !0), t._resultHash.update(n);
  }
  digest() {
    const n = this,
      t = n._resultHash.finalize(),
      e = new n._hash(n._baseHash[1]).update(t).finalize();
    return n.reset(), e;
  }
  encrypt(n) {
    if (this._updated) throw new Error('encrypt on already updated hmac called!');
    return this.update(n), this.digest(n);
  }
};
const Ws = typeof crypto < 'u' && typeof crypto.getRandomValues == 'function',
  dt = 'Invalid password',
  _t = 'Invalid signature',
  ht = 'zipjs-abort-check-password';
function Un(n) {
  return Ws ? crypto.getRandomValues(n) : Hs.getRandomValues(n);
}
const me = 16,
  Bs = 'raw',
  vn = { name: 'PBKDF2' },
  js = { name: 'HMAC' },
  qs = 'SHA-1',
  Gs = Object.assign({ hash: js }, vn),
  tt = Object.assign({ iterations: 1e3, hash: { name: qs } }, vn),
  Ys = ['deriveBits'],
  Te = [8, 12, 16],
  xe = [16, 24, 32],
  se = 10,
  Vs = [0, 0, 0, 0],
  Hn = 'undefined',
  Wn = 'function',
  We = typeof crypto != Hn,
  Ce = We && crypto.subtle,
  Bn = We && typeof Ce != Hn,
  J = Ue.bytes,
  Zs = Fn.aes,
  Ks = Mn.ctrGladman,
  Xs = _e.hmacSha1;
let sn = We && Bn && typeof Ce.importKey == Wn,
  an = We && Bn && typeof Ce.deriveBits == Wn;
class $s extends TransformStream {
  constructor({ password: t, signed: e, encryptionStrength: r, checkPasswordOnly: s }) {
    super({
      start() {
        Object.assign(this, {
          ready: new Promise(i => (this.resolveReady = i)),
          password: t,
          signed: e,
          strength: r - 1,
          pending: new Uint8Array(),
        });
      },
      async transform(i, a) {
        const o = this,
          { password: l, strength: _, resolveReady: d, ready: p } = o;
        l
          ? (await Qs(o, _, l, X(i, 0, Te[_] + 2)),
            (i = X(i, Te[_] + 2)),
            s ? a.error(new Error(ht)) : d())
          : await p;
        const h = new Uint8Array(i.length - se - ((i.length - se) % me));
        a.enqueue(jn(o, i, h, 0, se, !0));
      },
      async flush(i) {
        const { signed: a, ctr: o, hmac: l, pending: _, ready: d } = this;
        if (l && o) {
          await d;
          const p = X(_, 0, _.length - se),
            h = X(_, _.length - se);
          let g = new Uint8Array();
          if (p.length) {
            const y = Ae(J, p);
            l.update(y);
            const f = o.update(y);
            g = Se(J, f);
          }
          if (a) {
            const y = X(Se(J, l.digest()), 0, se);
            for (let f = 0; f < se; f++) if (y[f] != h[f]) throw new Error(_t);
          }
          i.enqueue(g);
        }
      },
    });
  }
}
class Js extends TransformStream {
  constructor({ password: t, encryptionStrength: e }) {
    let r;
    super({
      start() {
        Object.assign(this, {
          ready: new Promise(s => (this.resolveReady = s)),
          password: t,
          strength: e - 1,
          pending: new Uint8Array(),
        });
      },
      async transform(s, i) {
        const a = this,
          { password: o, strength: l, resolveReady: _, ready: d } = a;
        let p = new Uint8Array();
        o ? ((p = await zs(a, l, o)), _()) : await d;
        const h = new Uint8Array(p.length + s.length - (s.length % me));
        h.set(p, 0), i.enqueue(jn(a, s, h, p.length, 0));
      },
      async flush(s) {
        const { ctr: i, hmac: a, pending: o, ready: l } = this;
        if (a && i) {
          await l;
          let _ = new Uint8Array();
          if (o.length) {
            const d = i.update(Ae(J, o));
            a.update(d), (_ = Se(J, d));
          }
          (r.signature = Se(J, a.digest()).slice(0, se)), s.enqueue(pt(_, r.signature));
        }
      },
    }),
      (r = this);
  }
}
function jn(n, t, e, r, s, i) {
  const { ctr: a, hmac: o, pending: l } = n,
    _ = t.length - s;
  l.length && ((t = pt(l, t)), (e = ni(e, _ - (_ % me))));
  let d;
  for (d = 0; d <= _ - me; d += me) {
    const p = Ae(J, X(t, d, d + me));
    i && o.update(p);
    const h = a.update(p);
    i || o.update(h), e.set(Se(J, h), d + r);
  }
  return (n.pending = X(t, d)), e;
}
async function Qs(n, t, e, r) {
  const s = await qn(n, t, e, X(r, 0, Te[t])),
    i = X(r, Te[t]);
  if (s[0] != i[0] || s[1] != i[1]) throw new Error(dt);
}
async function zs(n, t, e) {
  const r = Un(new Uint8Array(Te[t])),
    s = await qn(n, t, e, r);
  return pt(r, s);
}
async function qn(n, t, e, r) {
  n.password = null;
  const s = vs(e),
    i = await ei(Bs, s, Gs, !1, Ys),
    a = await ti(Object.assign({ salt: r }, tt), i, 8 * (xe[t] * 2 + 2)),
    o = new Uint8Array(a),
    l = Ae(J, X(o, 0, xe[t])),
    _ = Ae(J, X(o, xe[t], xe[t] * 2)),
    d = X(o, xe[t] * 2);
  return (
    Object.assign(n, {
      keys: { key: l, authentication: _, passwordVerification: d },
      ctr: new Ks(new Zs(l), Array.from(Vs)),
      hmac: new Xs(_),
    }),
    d
  );
}
async function ei(n, t, e, r, s) {
  if (sn)
    try {
      return await Ce.importKey(n, t, e, r, s);
    } catch {
      return (sn = !1), _e.importKey(t);
    }
  else return _e.importKey(t);
}
async function ti(n, t, e) {
  if (an)
    try {
      return await Ce.deriveBits(n, t, e);
    } catch {
      return (an = !1), _e.pbkdf2(t, n.salt, tt.iterations, e);
    }
  else return _e.pbkdf2(t, n.salt, tt.iterations, e);
}
function pt(n, t) {
  let e = n;
  return (
    n.length + t.length &&
      ((e = new Uint8Array(n.length + t.length)), e.set(n, 0), e.set(t, n.length)),
    e
  );
}
function ni(n, t) {
  if (t && t > n.length) {
    const e = n;
    (n = new Uint8Array(t)), n.set(e, 0);
  }
  return n;
}
function X(n, t, e) {
  return n.subarray(t, e);
}
function Se(n, t) {
  return n.fromBits(t);
}
function Ae(n, t) {
  return n.toBits(t);
}
const we = 12;
class ri extends TransformStream {
  constructor({ password: t, passwordVerification: e, checkPasswordOnly: r }) {
    super({
      start() {
        Object.assign(this, { password: t, passwordVerification: e }), Gn(this, t);
      },
      transform(s, i) {
        const a = this;
        if (a.password) {
          const o = on(a, s.subarray(0, we));
          if (((a.password = null), o[we - 1] != a.passwordVerification)) throw new Error(dt);
          s = s.subarray(we);
        }
        r ? i.error(new Error(ht)) : i.enqueue(on(a, s));
      },
    });
  }
}
class si extends TransformStream {
  constructor({ password: t, passwordVerification: e }) {
    super({
      start() {
        Object.assign(this, { password: t, passwordVerification: e }), Gn(this, t);
      },
      transform(r, s) {
        const i = this;
        let a, o;
        if (i.password) {
          i.password = null;
          const l = Un(new Uint8Array(we));
          (l[we - 1] = i.passwordVerification),
            (a = new Uint8Array(r.length + l.length)),
            a.set(cn(i, l), 0),
            (o = we);
        } else (a = new Uint8Array(r.length)), (o = 0);
        a.set(cn(i, r), o), s.enqueue(a);
      },
    });
  }
}
function on(n, t) {
  const e = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) (e[r] = Yn(n) ^ t[r]), mt(n, e[r]);
  return e;
}
function cn(n, t) {
  const e = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) (e[r] = Yn(n) ^ t[r]), mt(n, t[r]);
  return e;
}
function Gn(n, t) {
  const e = [305419896, 591751049, 878082192];
  Object.assign(n, { keys: e, crcKey0: new Me(e[0]), crcKey2: new Me(e[2]) });
  for (let r = 0; r < t.length; r++) mt(n, t.charCodeAt(r));
}
function mt(n, t) {
  let [e, r, s] = n.keys;
  n.crcKey0.append([t]),
    (e = ~n.crcKey0.get()),
    (r = ln(Math.imul(ln(r + Vn(e)), 134775813) + 1)),
    n.crcKey2.append([r >>> 24]),
    (s = ~n.crcKey2.get()),
    (n.keys = [e, r, s]);
}
function Yn(n) {
  const t = n.keys[2] | 2;
  return Vn(Math.imul(t, t ^ 1) >>> 8);
}
function Vn(n) {
  return n & 255;
}
function ln(n) {
  return n & 4294967295;
}
const fn = 'deflate-raw';
class ii extends TransformStream {
  constructor(t, { chunkSize: e, CompressionStream: r, CompressionStreamNative: s }) {
    super({});
    const {
        compressed: i,
        encrypted: a,
        useCompressionStream: o,
        zipCrypto: l,
        signed: _,
        level: d,
      } = t,
      p = this;
    let h,
      g,
      y = Zn(super.readable);
    (!a || l) && _ && ((h = new Pn()), (y = Q(y, h))),
      i && (y = Xn(y, o, { level: d, chunkSize: e }, s, r)),
      a && (l ? (y = Q(y, new si(t))) : ((g = new Js(t)), (y = Q(y, g)))),
      Kn(p, y, () => {
        let f;
        a && !l && (f = g.signature),
          (!a || l) && _ && (f = new DataView(h.value.buffer).getUint32(0)),
          (p.signature = f);
      });
  }
}
class ai extends TransformStream {
  constructor(t, { chunkSize: e, DecompressionStream: r, DecompressionStreamNative: s }) {
    super({});
    const {
      zipCrypto: i,
      encrypted: a,
      signed: o,
      signature: l,
      compressed: _,
      useCompressionStream: d,
    } = t;
    let p,
      h,
      g = Zn(super.readable);
    a && (i ? (g = Q(g, new ri(t))) : ((h = new $s(t)), (g = Q(g, h)))),
      _ && (g = Xn(g, d, { chunkSize: e }, s, r)),
      (!a || i) && o && ((p = new Pn()), (g = Q(g, p))),
      Kn(this, g, () => {
        if ((!a || i) && o) {
          const y = new DataView(p.value.buffer);
          if (l != y.getUint32(0, !1)) throw new Error(_t);
        }
      });
  }
}
function Zn(n) {
  return Q(
    n,
    new TransformStream({
      transform(t, e) {
        t && t.length && e.enqueue(t);
      },
    })
  );
}
function Kn(n, t, e) {
  (t = Q(t, new TransformStream({ flush: e }))),
    Object.defineProperty(n, 'readable', {
      get() {
        return t;
      },
    });
}
function Xn(n, t, e, r, s) {
  try {
    const i = t && r ? r : s;
    n = Q(n, new i(fn, e));
  } catch (i) {
    if (t) n = Q(n, new s(fn, e));
    else throw i;
  }
  return n;
}
function Q(n, t) {
  return n.pipeThrough(t);
}
const oi = 'message',
  ci = 'start',
  li = 'pull',
  un = 'data',
  fi = 'ack',
  ui = 'close',
  di = 'deflate',
  $n = 'inflate';
class _i extends TransformStream {
  constructor(t, e) {
    super({});
    const r = this,
      { codecType: s } = t;
    let i;
    s.startsWith(di) ? (i = ii) : s.startsWith($n) && (i = ai);
    let a = 0;
    const o = new i(t, e),
      l = super.readable,
      _ = new TransformStream({
        transform(d, p) {
          d && d.length && ((a += d.length), p.enqueue(d));
        },
        flush() {
          const { signature: d } = o;
          Object.assign(r, { signature: d, size: a });
        },
      });
    Object.defineProperty(r, 'readable', {
      get() {
        return l.pipeThrough(o).pipeThrough(_);
      },
    });
  }
}
const hi = typeof Worker != Fe;
class Ke {
  constructor(
    t,
    { readable: e, writable: r },
    { options: s, config: i, streamOptions: a, useWebWorkers: o, transferStreams: l, scripts: _ },
    d
  ) {
    const { signal: p } = a;
    return (
      Object.assign(t, {
        busy: !0,
        readable: e.pipeThrough(new pi(e, a, i), { signal: p }),
        writable: r,
        options: Object.assign({}, s),
        scripts: _,
        transferStreams: l,
        terminate() {
          const { worker: h, busy: g } = t;
          h && !g && (h.terminate(), (t.interface = null));
        },
        onTaskFinished() {
          (t.busy = !1), d(t);
        },
      }),
      (o && hi ? wi : mi)(t, i)
    );
  }
}
class pi extends TransformStream {
  constructor(t, { onstart: e, onprogress: r, size: s, onend: i }, { chunkSize: a }) {
    let o = 0;
    super(
      {
        start() {
          e && Xe(e, s);
        },
        async transform(l, _) {
          (o += l.length), r && (await Xe(r, o, s)), _.enqueue(l);
        },
        flush() {
          (t.size = o), i && Xe(i, o);
        },
      },
      { highWaterMark: 1, size: () => a }
    );
  }
}
async function Xe(n, ...t) {
  try {
    await n(...t);
  } catch {}
}
function mi(n, t) {
  return { run: () => bi(n, t) };
}
function wi(n, { baseURL: t, chunkSize: e }) {
  return (
    n.interface ||
      Object.assign(n, {
        worker: xi(n.scripts[0], t, n),
        interface: { run: () => gi(n, { chunkSize: e }) },
      }),
    n.interface
  );
}
async function bi({ options: n, readable: t, writable: e, onTaskFinished: r }, s) {
  const i = new _i(n, s);
  try {
    await t.pipeThrough(i).pipeTo(e, { preventClose: !0, preventAbort: !0 });
    const { signature: a, size: o } = i;
    return { signature: a, size: o };
  } finally {
    r();
  }
}
async function gi(n, t) {
  let e, r;
  const s = new Promise((h, g) => {
    (e = h), (r = g);
  });
  Object.assign(n, { reader: null, writer: null, resolveResult: e, rejectResult: r, result: s });
  const { readable: i, options: a, scripts: o } = n,
    { writable: l, closed: _ } = yi(n.writable);
  nt({ type: ci, scripts: o.slice(1), options: a, config: t, readable: i, writable: l }, n) ||
    Object.assign(n, { reader: i.getReader(), writer: l.getWriter() });
  const p = await s;
  try {
    await l.getWriter().close();
  } catch {}
  return await _, p;
}
function yi(n) {
  const t = n.getWriter();
  let e;
  const r = new Promise(i => (e = i));
  return {
    writable: new WritableStream({
      async write(i) {
        await t.ready, await t.write(i);
      },
      close() {
        t.releaseLock(), e();
      },
      abort(i) {
        return t.abort(i);
      },
    }),
    closed: r,
  };
}
let dn = !0,
  _n = !0;
function xi(n, t, e) {
  const r = { type: 'module' };
  let s, i;
  typeof n == On && (n = n());
  try {
    s = new URL(n, t);
  } catch {
    s = n;
  }
  if (dn)
    try {
      i = new Worker(s);
    } catch {
      (dn = !1), (i = new Worker(s, r));
    }
  else i = new Worker(s, r);
  return i.addEventListener(oi, a => Ei(a, e)), i;
}
function nt(n, { worker: t, writer: e, onTaskFinished: r, transferStreams: s }) {
  try {
    let { value: i, readable: a, writable: o } = n;
    const l = [];
    if (
      (i &&
        (i.byteLength < i.buffer.byteLength
          ? (n.value = i.buffer.slice(0, i.byteLength))
          : (n.value = i.buffer),
        l.push(n.value)),
      s && _n ? (a && l.push(a), o && l.push(o)) : (n.readable = n.writable = null),
      l.length)
    )
      try {
        return t.postMessage(n, l), !0;
      } catch {
        (_n = !1), (n.readable = n.writable = null), t.postMessage(n);
      }
    else t.postMessage(n);
  } catch (i) {
    throw (e && e.releaseLock(), r(), i);
  }
}
async function Ei({ data: n }, t) {
  const { type: e, value: r, messageId: s, result: i, error: a } = n,
    { reader: o, writer: l, resolveResult: _, rejectResult: d, onTaskFinished: p } = t;
  try {
    if (a) {
      const { message: g, stack: y, code: f, name: c } = a,
        u = new Error(g);
      Object.assign(u, { stack: y, code: f, name: c }), h(u);
    } else {
      if (e == li) {
        const { value: g, done: y } = await o.read();
        nt({ type: un, value: g, done: y, messageId: s }, t);
      }
      e == un &&
        (await l.ready, await l.write(new Uint8Array(r)), nt({ type: fi, messageId: s }, t)),
        e == ui && h(null, i);
    }
  } catch (g) {
    h(g);
  }
  function h(g, y) {
    g ? d(g) : _(y), l && l.releaseLock(), p();
  }
}
let ie = [];
const $e = [];
let hn = 0;
async function Ti(n, t) {
  const { options: e, config: r } = t,
    {
      transferStreams: s,
      useWebWorkers: i,
      useCompressionStream: a,
      codecType: o,
      compressed: l,
      signed: _,
      encrypted: d,
    } = e,
    { workerScripts: p, maxWorkers: h, terminateWorkerTimeout: g } = r;
  t.transferStreams = s || s === $;
  const y = !l && !_ && !d && !t.transferStreams;
  (t.useWebWorkers = !y && (i || (i === $ && r.useWebWorkers))),
    (t.scripts = t.useWebWorkers && p ? p[o] : []),
    (e.useCompressionStream = a || (a === $ && r.useCompressionStream));
  let f;
  const c = ie.find(m => !m.busy);
  if (c) rt(c), (f = new Ke(c, n, t, u));
  else if (ie.length < h) {
    const m = { indexWorker: hn };
    hn++, ie.push(m), (f = new Ke(m, n, t, u));
  } else f = await new Promise(m => $e.push({ resolve: m, stream: n, workerOptions: t }));
  return f.run();
  function u(m) {
    if ($e.length) {
      const [{ resolve: w, stream: x, workerOptions: A }] = $e.splice(0, 1);
      w(new Ke(m, x, A, u));
    } else
      m.worker
        ? (rt(m),
          Number.isFinite(g) &&
            g >= 0 &&
            (m.terminateTimeout = setTimeout(() => {
              (ie = ie.filter(w => w != m)), m.terminate();
            }, g)))
        : (ie = ie.filter(w => w != m));
  }
}
function rt(n) {
  const { terminateTimeout: t } = n;
  t && (clearTimeout(t), (n.terminateTimeout = null));
}
function Si() {
  ie.forEach(n => {
    rt(n), n.terminate();
  });
}
const Jn = 'HTTP error ',
  Oe = 'HTTP Range not supported',
  Qn = 'Writer iterator completed too soon',
  Ai = 'text/plain',
  Ri = 'Content-Length',
  Ci = 'Content-Range',
  Oi = 'Accept-Ranges',
  ki = 'Range',
  Di = 'Content-Type',
  Ii = 'HEAD',
  wt = 'GET',
  zn = 'bytes',
  Ni = 64 * 1024,
  bt = 'writable';
class Be {
  constructor() {
    this.size = 0;
  }
  init() {
    this.initialized = !0;
  }
}
class ce extends Be {
  get readable() {
    const t = this,
      { chunkSize: e = Ni } = t,
      r = new ReadableStream({
        start() {
          this.chunkOffset = 0;
        },
        async pull(s) {
          const { offset: i = 0, size: a, diskNumberStart: o } = r,
            { chunkOffset: l } = this;
          s.enqueue(await G(t, i + l, Math.min(e, a - l), o)),
            l + e > a ? s.close() : (this.chunkOffset += e);
        },
      });
    return r;
  }
}
class gt extends Be {
  constructor() {
    super();
    const t = this,
      e = new WritableStream({
        write(r) {
          return t.writeUint8Array(r);
        },
      });
    Object.defineProperty(t, bt, {
      get() {
        return e;
      },
    });
  }
  writeUint8Array() {}
}
class Pi extends ce {
  constructor(t) {
    super();
    let e = t.length;
    for (; t.charAt(e - 1) == '='; ) e--;
    const r = t.indexOf(',') + 1;
    Object.assign(this, { dataURI: t, dataStart: r, size: Math.floor((e - r) * 0.75) });
  }
  readUint8Array(t, e) {
    const { dataStart: r, dataURI: s } = this,
      i = new Uint8Array(e),
      a = Math.floor(t / 3) * 4,
      o = atob(s.substring(a + r, Math.ceil((t + e) / 3) * 4 + r)),
      l = t - Math.floor(a / 4) * 3;
    for (let _ = l; _ < l + e; _++) i[_ - l] = o.charCodeAt(_);
    return i;
  }
}
class Li extends gt {
  constructor(t) {
    super(), Object.assign(this, { data: 'data:' + (t || '') + ';base64,', pending: [] });
  }
  writeUint8Array(t) {
    const e = this;
    let r = 0,
      s = e.pending;
    const i = e.pending.length;
    for (e.pending = '', r = 0; r < Math.floor((i + t.length) / 3) * 3 - i; r++)
      s += String.fromCharCode(t[r]);
    for (; r < t.length; r++) e.pending += String.fromCharCode(t[r]);
    s.length > 2 ? (e.data += btoa(s)) : (e.pending = s);
  }
  getData() {
    return this.data + btoa(this.pending);
  }
}
class yt extends ce {
  constructor(t) {
    super(), Object.assign(this, { blob: t, size: t.size });
  }
  async readUint8Array(t, e) {
    const r = this,
      s = t + e;
    let a = await (t || s < r.size ? r.blob.slice(t, s) : r.blob).arrayBuffer();
    return a.byteLength > e && (a = a.slice(t, s)), new Uint8Array(a);
  }
}
class er extends Be {
  constructor(t) {
    super();
    const e = this,
      r = new TransformStream(),
      s = [];
    t && s.push([Di, t]),
      Object.defineProperty(e, bt, {
        get() {
          return r.writable;
        },
      }),
      (e.blob = new Response(r.readable, { headers: s }).blob());
  }
  getData() {
    return this.blob;
  }
}
class Fi extends yt {
  constructor(t) {
    super(new Blob([t], { type: Ai }));
  }
}
class Mi extends er {
  constructor(t) {
    super(t), Object.assign(this, { encoding: t, utf8: !t || t.toLowerCase() == 'utf-8' });
  }
  async getData() {
    const { encoding: t, utf8: e } = this,
      r = await super.getData();
    if (r.text && e) return r.text();
    {
      const s = new FileReader();
      return new Promise((i, a) => {
        Object.assign(s, { onload: ({ target: o }) => i(o.result), onerror: () => a(s.error) }),
          s.readAsText(r, t);
      });
    }
  }
}
class Ui extends ce {
  constructor(t, e) {
    super(), tr(this, t, e);
  }
  async init() {
    await nr(this, st, pn), super.init();
  }
  readUint8Array(t, e) {
    return rr(this, t, e, st, pn);
  }
}
class vi extends ce {
  constructor(t, e) {
    super(), tr(this, t, e);
  }
  async init() {
    await nr(this, it, mn), super.init();
  }
  readUint8Array(t, e) {
    return rr(this, t, e, it, mn);
  }
}
function tr(n, t, e) {
  const { preventHeadRequest: r, useRangeHeader: s, forceRangeRequests: i } = e;
  (e = Object.assign({}, e)),
    delete e.preventHeadRequest,
    delete e.useRangeHeader,
    delete e.forceRangeRequests,
    delete e.useXHR,
    Object.assign(n, {
      url: t,
      options: e,
      preventHeadRequest: r,
      useRangeHeader: s,
      forceRangeRequests: i,
    });
}
async function nr(n, t, e) {
  const { url: r, useRangeHeader: s, forceRangeRequests: i } = n;
  if (ji(r) && (s || i)) {
    const { headers: a } = await t(wt, n, sr(n));
    if (!i && a.get(Oi) != zn) throw new Error(Oe);
    {
      let o;
      const l = a.get(Ci);
      if (l) {
        const _ = l.trim().split(/\s*\/\s*/);
        if (_.length) {
          const d = _[1];
          d && d != '*' && (o = Number(d));
        }
      }
      o === $ ? await wn(n, t, e) : (n.size = o);
    }
  } else await wn(n, t, e);
}
async function rr(n, t, e, r, s) {
  const { useRangeHeader: i, forceRangeRequests: a, options: o } = n;
  if (i || a) {
    const l = await r(wt, n, sr(n, t, e));
    if (l.status != 206) throw new Error(Oe);
    return new Uint8Array(await l.arrayBuffer());
  } else {
    const { data: l } = n;
    return l || (await s(n, o)), new Uint8Array(n.data.subarray(t, t + e));
  }
}
function sr(n, t = 0, e = 1) {
  return Object.assign({}, xt(n), { [ki]: zn + '=' + t + '-' + (t + e - 1) });
}
function xt({ options: n }) {
  const { headers: t } = n;
  if (t) return Symbol.iterator in t ? Object.fromEntries(t) : t;
}
async function pn(n) {
  await ir(n, st);
}
async function mn(n) {
  await ir(n, it);
}
async function ir(n, t) {
  const e = await t(wt, n, xt(n));
  (n.data = new Uint8Array(await e.arrayBuffer())), n.size || (n.size = n.data.length);
}
async function wn(n, t, e) {
  if (n.preventHeadRequest) await e(n, n.options);
  else {
    const s = (await t(Ii, n, xt(n))).headers.get(Ri);
    s ? (n.size = Number(s)) : await e(n, n.options);
  }
}
async function st(n, { options: t, url: e }, r) {
  const s = await fetch(e, Object.assign({}, t, { method: n, headers: r }));
  if (s.status < 400) return s;
  throw s.status == 416 ? new Error(Oe) : new Error(Jn + (s.statusText || s.status));
}
function it(n, { url: t }, e) {
  return new Promise((r, s) => {
    const i = new XMLHttpRequest();
    if (
      (i.addEventListener(
        'load',
        () => {
          if (i.status < 400) {
            const a = [];
            i
              .getAllResponseHeaders()
              .trim()
              .split(/[\r\n]+/)
              .forEach(o => {
                const l = o.trim().split(/\s*:\s*/);
                (l[0] = l[0].trim().replace(/^[a-z]|-[a-z]/g, _ => _.toUpperCase())), a.push(l);
              }),
              r({ status: i.status, arrayBuffer: () => i.response, headers: new Map(a) });
          } else s(i.status == 416 ? new Error(Oe) : new Error(Jn + (i.statusText || i.status)));
        },
        !1
      ),
      i.addEventListener(
        'error',
        a => s(a.detail ? a.detail.error : new Error('Network error')),
        !1
      ),
      i.open(n, t),
      e)
    )
      for (const a of Object.entries(e)) i.setRequestHeader(a[0], a[1]);
    (i.responseType = 'arraybuffer'), i.send();
  });
}
class ar extends ce {
  constructor(t, e = {}) {
    super(), Object.assign(this, { url: t, reader: e.useXHR ? new vi(t, e) : new Ui(t, e) });
  }
  set size(t) {}
  get size() {
    return this.reader.size;
  }
  async init() {
    await this.reader.init(), super.init();
  }
  readUint8Array(t, e) {
    return this.reader.readUint8Array(t, e);
  }
}
class Hi extends ar {
  constructor(t, e = {}) {
    (e.useRangeHeader = !0), super(t, e);
  }
}
class Wi extends ce {
  constructor(t) {
    super(), Object.assign(this, { array: t, size: t.length });
  }
  readUint8Array(t, e) {
    return this.array.slice(t, t + e);
  }
}
class Bi extends gt {
  init(t = 0) {
    Object.assign(this, { offset: 0, array: new Uint8Array(t) }), super.init();
  }
  writeUint8Array(t) {
    const e = this;
    if (e.offset + t.length > e.array.length) {
      const r = e.array;
      (e.array = new Uint8Array(r.length + t.length)), e.array.set(r);
    }
    e.array.set(t, e.offset), (e.offset += t.length);
  }
  getData() {
    return this.array;
  }
}
class Et extends ce {
  constructor(t) {
    super(), (this.readers = t);
  }
  async init() {
    const t = this,
      { readers: e } = t;
    (t.lastDiskNumber = 0),
      (t.lastDiskOffset = 0),
      await Promise.all(
        e.map(async (r, s) => {
          await r.init(), s != e.length - 1 && (t.lastDiskOffset += r.size), (t.size += r.size);
        })
      ),
      super.init();
  }
  async readUint8Array(t, e, r = 0) {
    const s = this,
      { readers: i } = this;
    let a,
      o = r;
    o == -1 && (o = i.length - 1);
    let l = t;
    for (; l >= i[o].size; ) (l -= i[o].size), o++;
    const _ = i[o],
      d = _.size;
    if (l + e <= d) a = await G(_, l, e);
    else {
      const p = d - l;
      (a = new Uint8Array(e)),
        a.set(await G(_, l, p)),
        a.set(await s.readUint8Array(t + p, e - p, r), p);
    }
    return (s.lastDiskNumber = Math.max(o, s.lastDiskNumber)), a;
  }
}
class ve extends Be {
  constructor(t, e = 4294967295) {
    super();
    const r = this;
    Object.assign(r, { diskNumber: 0, diskOffset: 0, size: 0, maxSize: e, availableSize: e });
    let s, i, a;
    const o = new WritableStream({
      async write(d) {
        const { availableSize: p } = r;
        if (a)
          d.length >= p
            ? (await l(d.slice(0, p)),
              await _(),
              (r.diskOffset += s.size),
              r.diskNumber++,
              (a = null),
              await this.write(d.slice(p)))
            : await l(d);
        else {
          const { value: h, done: g } = await t.next();
          if (g && !h) throw new Error(Qn);
          (s = h),
            (s.size = 0),
            s.maxSize && (r.maxSize = s.maxSize),
            (r.availableSize = r.maxSize),
            await Re(s),
            (i = h.writable),
            (a = i.getWriter()),
            await this.write(d);
        }
      },
      async close() {
        await a.ready, await _();
      },
    });
    Object.defineProperty(r, bt, {
      get() {
        return o;
      },
    });
    async function l(d) {
      const p = d.length;
      p && (await a.ready, await a.write(d), (s.size += p), (r.size += p), (r.availableSize -= p));
    }
    async function _() {
      (i.size = s.size), await a.close();
    }
  }
}
function ji(n) {
  const { baseURL: t } = Dn(),
    { protocol: e } = new URL(n, t);
  return e == 'http:' || e == 'https:';
}
async function Re(n, t) {
  n.init && !n.initialized && (await n.init(t));
}
function or(n) {
  return (
    Array.isArray(n) && (n = new Et(n)), n instanceof ReadableStream && (n = { readable: n }), n
  );
}
function cr(n) {
  n.writable === $ && typeof n.next == On && (n = new ve(n)),
    n instanceof WritableStream && (n = { writable: n });
  const { writable: t } = n;
  return (
    t.size === $ && (t.size = 0),
    n instanceof ve ||
      Object.assign(n, { diskNumber: 0, diskOffset: 0, availableSize: 1 / 0, maxSize: 1 / 0 }),
    n
  );
}
function G(n, t, e, r) {
  return n.readUint8Array(t, e, r);
}
const qi = Et,
  Gi = ve,
  lr =
    '\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ '.split(
      ''
    ),
  Yi = lr.length == 256;
function Vi(n) {
  if (Yi) {
    let t = '';
    for (let e = 0; e < n.length; e++) t += lr[n[e]];
    return t;
  } else return new TextDecoder().decode(n);
}
function at(n, t) {
  return t && t.trim().toLowerCase() == 'cp437' ? Vi(n) : new TextDecoder(t).decode(n);
}
const fr = 'filename',
  ur = 'rawFilename',
  dr = 'comment',
  _r = 'rawComment',
  hr = 'uncompressedSize',
  pr = 'compressedSize',
  mr = 'offset',
  ot = 'diskNumberStart',
  ct = 'lastModDate',
  lt = 'rawLastModDate',
  wr = 'lastAccessDate',
  Zi = 'rawLastAccessDate',
  br = 'creationDate',
  Ki = 'rawCreationDate',
  Xi = 'internalFileAttribute',
  $i = 'externalFileAttribute',
  Ji = 'msDosCompatible',
  Qi = 'zip64',
  zi = [
    fr,
    ur,
    pr,
    hr,
    ct,
    lt,
    dr,
    _r,
    wr,
    br,
    mr,
    ot,
    ot,
    Xi,
    $i,
    Ji,
    Qi,
    'directory',
    'bitFlag',
    'encrypted',
    'signature',
    'filenameUTF8',
    'commentUTF8',
    'compressionMethod',
    'version',
    'versionMadeBy',
    'extraField',
    'rawExtraField',
    'extraFieldZip64',
    'extraFieldUnicodePath',
    'extraFieldUnicodeComment',
    'extraFieldAES',
    'extraFieldNTFS',
    'extraFieldExtendedTimestamp',
  ];
class bn {
  constructor(t) {
    zi.forEach(e => (this[e] = t[e]));
  }
}
const Pe = 'File format is not recognized',
  gr = 'End of central directory not found',
  yr = 'End of Zip64 central directory not found',
  xr = 'End of Zip64 central directory locator not found',
  Er = 'Central directory header not found',
  Tr = 'Local file header not found',
  Sr = 'Zip64 extra field not found',
  Ar = 'File contains encrypted entry',
  Rr = 'Encryption method not supported',
  ft = 'Compression method not supported',
  ut = 'Split zip file',
  gn = 'utf-8',
  yn = 'cp437',
  ea = [
    [hr, de],
    [pr, de],
    [mr, de],
    [ot, ae],
  ],
  ta = { [ae]: { getValue: B, bytes: 4 }, [de]: { getValue: Le, bytes: 8 } };
class na {
  constructor(t, e = {}) {
    Object.assign(this, { reader: or(t), options: e, config: Dn() });
  }
  async *getEntriesGenerator(t = {}) {
    const e = this;
    let { reader: r } = e;
    const { config: s } = e;
    if (
      (await Re(r),
      (r.size === $ || !r.readUint8Array) &&
        ((r = new yt(await new Response(r.readable).blob())), await Re(r)),
      r.size < pe)
    )
      throw new Error(Pe);
    r.chunkSize = Ms(s);
    const i = await ca(r, Es, r.size, pe, ae * 16);
    if (!i) {
      const E = await G(r, 0, 4),
        R = q(E);
      throw B(R) == xs ? new Error(ut) : new Error(gr);
    }
    const a = q(i);
    let o = B(a, 12),
      l = B(a, 16);
    const _ = i.offset,
      d = j(a, 20),
      p = _ + pe + d;
    let h = j(a, 4);
    const g = r.lastDiskNumber || 0;
    let y = j(a, 6),
      f = j(a, 8),
      c = 0,
      u = 0;
    if (l == de || o == de || f == ae || y == ae) {
      const E = await G(r, i.offset - Ve, Ve),
        R = q(E);
      if (B(R, 0) != Ts) throw new Error(yr);
      l = Le(R, 8);
      let D = await G(r, l, Ze, -1),
        O = q(D);
      const P = i.offset - Ve - Ze;
      if (B(O, 0) != Qt && l != P) {
        const N = l;
        (l = P), (c = l - N), (D = await G(r, l, Ze, -1)), (O = q(D));
      }
      if (B(O, 0) != Qt) throw new Error(xr);
      h == ae && (h = B(O, 16)),
        y == ae && (y = B(O, 20)),
        f == ae && (f = Le(O, 32)),
        o == de && (o = Le(O, 40)),
        (l -= o);
    }
    if ((l >= r.size && ((c = r.size - l - o - pe), (l = r.size - o - pe)), g != h))
      throw new Error(ut);
    if (l < 0) throw new Error(Pe);
    let m = 0,
      w = await G(r, l, o, y),
      x = q(w);
    if (o) {
      const E = i.offset - o;
      if (B(x, m) != Jt && l != E) {
        const R = l;
        (l = E), (c += l - R), (w = await G(r, l, o, y)), (x = q(w));
      }
    }
    const A = i.offset - l - (r.lastDiskOffset || 0);
    if (
      (o != A && A >= 0 && ((o = A), (w = await G(r, l, o, y)), (x = q(w))), l < 0 || l >= r.size)
    )
      throw new Error(Pe);
    const b = K(e, t, 'filenameEncoding'),
      T = K(e, t, 'commentEncoding');
    for (let E = 0; E < f; E++) {
      const R = new ra(r, s, e.options);
      if (B(x, m) != Jt) throw new Error(Er);
      Cr(R, x, m + 6);
      const D = !!R.bitFlag.languageEncodingFlag,
        O = m + 46,
        P = O + R.filenameLength,
        N = P + R.extraFieldLength,
        k = j(x, m + 4),
        v = (k & 0) == 0,
        M = w.subarray(O, P),
        ge = j(x, m + 32),
        I = N + ge,
        le = w.subarray(N, I),
        U = D,
        H = D,
        Tt = v && (be(x, m + 38) & nn) == nn,
        St = B(x, m + 42) + c;
      Object.assign(R, {
        versionMadeBy: k,
        msDosCompatible: v,
        compressedSize: 0,
        uncompressedSize: 0,
        commentLength: ge,
        directory: Tt,
        offset: St,
        diskNumberStart: j(x, m + 34),
        internalFileAttribute: j(x, m + 36),
        externalFileAttribute: B(x, m + 38),
        rawFilename: M,
        filenameUTF8: U,
        commentUTF8: H,
        rawExtraField: w.subarray(P, N),
      });
      const [At, Dr] = await Promise.all([at(M, U ? gn : b || yn), at(le, H ? gn : T || yn)]);
      Object.assign(R, {
        rawComment: le,
        filename: At,
        comment: Dr,
        directory: Tt || At.endsWith(Ps),
      }),
        (u = Math.max(St, u)),
        await Or(R, R, x, m + 6);
      const je = new bn(R);
      (je.getData = (Ct, Ir) => R.getData(Ct, je, Ir)), (m = I);
      const { onprogress: Rt } = t;
      if (Rt)
        try {
          await Rt(E + 1, f, new bn(R));
        } catch {}
      yield je;
    }
    const S = K(e, t, 'extractPrependedData'),
      C = K(e, t, 'extractAppendedData');
    return (
      S && (e.prependedData = u > 0 ? await G(r, 0, u) : new Uint8Array()),
      (e.comment = d ? await G(r, _ + pe, d) : new Uint8Array()),
      C && (e.appendedData = p < r.size ? await G(r, p, r.size - p) : new Uint8Array()),
      !0
    );
  }
  async getEntries(t = {}) {
    const e = [];
    for await (const r of this.getEntriesGenerator(t)) e.push(r);
    return e;
  }
  async close() {}
}
class ra {
  constructor(t, e, r) {
    Object.assign(this, { reader: t, config: e, options: r });
  }
  async getData(t, e, r = {}) {
    const s = this,
      {
        reader: i,
        offset: a,
        diskNumberStart: o,
        extraFieldAES: l,
        compressionMethod: _,
        config: d,
        bitFlag: p,
        signature: h,
        rawLastModDate: g,
        uncompressedSize: y,
        compressedSize: f,
      } = s,
      c = (e.localDirectory = {}),
      u = await G(i, a, 30, o),
      m = q(u);
    let w = K(s, r, 'password');
    if (((w = w && w.length && w), l && l.originalCompressionMethod != gs)) throw new Error(ft);
    if (_ != bs && _ != ws) throw new Error(ft);
    if (B(m, 0) != ys) throw new Error(Tr);
    Cr(c, m, 4),
      (c.rawExtraField = c.extraFieldLength
        ? await G(i, a + 30 + c.filenameLength, c.extraFieldLength, o)
        : new Uint8Array()),
      await Or(s, c, m, 4, !0),
      Object.assign(e, { lastAccessDate: c.lastAccessDate, creationDate: c.creationDate });
    const x = s.encrypted && c.encrypted,
      A = x && !l;
    if (x) {
      if (!A && l.strength === $) throw new Error(Rr);
      if (!w) throw new Error(Ar);
    }
    const b = a + 30 + c.filenameLength + c.extraFieldLength,
      T = f,
      S = i.readable;
    Object.assign(S, { diskNumberStart: o, offset: b, size: T });
    const C = K(s, r, 'signal'),
      E = K(s, r, 'checkPasswordOnly');
    E && (t = new WritableStream()), (t = cr(t)), await Re(t, y);
    const { writable: R } = t,
      { onstart: D, onprogress: O, onend: P } = r,
      N = {
        options: {
          codecType: $n,
          password: w,
          zipCrypto: A,
          encryptionStrength: l && l.strength,
          signed: K(s, r, 'checkSignature'),
          passwordVerification: A && (p.dataDescriptor ? (g >>> 8) & 255 : (h >>> 24) & 255),
          signature: h,
          compressed: _ != 0,
          encrypted: x,
          useWebWorkers: K(s, r, 'useWebWorkers'),
          useCompressionStream: K(s, r, 'useCompressionStream'),
          transferStreams: K(s, r, 'transferStreams'),
          checkPasswordOnly: E,
        },
        config: d,
        streamOptions: { signal: C, size: T, onstart: D, onprogress: O, onend: P },
      };
    let k = 0;
    try {
      ({ outputSize: k } = await Ti({ readable: S, writable: R }, N));
    } catch (v) {
      if (!E || v.message != ht) throw v;
    } finally {
      const v = K(s, r, 'preventClose');
      (R.size += k), !v && !R.locked && (await R.getWriter().close());
    }
    return E ? void 0 : t.getData ? t.getData() : R;
  }
}
function Cr(n, t, e) {
  const r = (n.rawBitFlag = j(t, e + 2)),
    s = (r & zt) == zt,
    i = B(t, e + 6);
  Object.assign(n, {
    encrypted: s,
    version: j(t, e),
    bitFlag: {
      level: (r & Ns) >> 1,
      dataDescriptor: (r & en) == en,
      languageEncodingFlag: (r & tn) == tn,
    },
    rawLastModDate: i,
    lastModDate: la(i),
    filenameLength: j(t, e + 22),
    extraFieldLength: j(t, e + 24),
  });
}
async function Or(n, t, e, r, s) {
  const { rawExtraField: i } = t,
    a = (t.extraField = new Map()),
    o = q(new Uint8Array(i));
  let l = 0;
  try {
    for (; l < i.length; ) {
      const u = j(o, l),
        m = j(o, l + 2);
      a.set(u, { type: u, data: i.slice(l + 4, l + 4 + m) }), (l += 4 + m);
    }
  } catch {}
  const _ = j(e, r + 4);
  Object.assign(t, {
    signature: B(e, r + 10),
    uncompressedSize: B(e, r + 18),
    compressedSize: B(e, r + 14),
  });
  const d = a.get(Ss);
  d && (sa(d, t), (t.extraFieldZip64 = d));
  const p = a.get(ks);
  p && (await xn(p, fr, ur, t, n), (t.extraFieldUnicodePath = p));
  const h = a.get(Ds);
  h && (await xn(h, dr, _r, t, n), (t.extraFieldUnicodeComment = h));
  const g = a.get(As);
  g ? (ia(g, t, _), (t.extraFieldAES = g)) : (t.compressionMethod = _);
  const y = a.get(Rs);
  y && (aa(y, t), (t.extraFieldNTFS = y));
  const f = a.get(Os);
  f && (oa(f, t, s), (t.extraFieldExtendedTimestamp = f));
  const c = a.get(Is);
  c && (t.extraFieldUSDZ = c);
}
function sa(n, t) {
  t.zip64 = !0;
  const e = q(n.data),
    r = ea.filter(([s, i]) => t[s] == i);
  for (let s = 0, i = 0; s < r.length; s++) {
    const [a, o] = r[s];
    if (t[a] == o) {
      const l = ta[o];
      (t[a] = n[a] = l.getValue(e, i)), (i += l.bytes);
    } else if (n[a]) throw new Error(Sr);
  }
}
async function xn(n, t, e, r, s) {
  const i = q(n.data),
    a = new Me();
  a.append(s[e]);
  const o = q(new Uint8Array(4));
  o.setUint32(0, a.get(), !0);
  const l = B(i, 1);
  Object.assign(n, {
    version: be(i, 0),
    [t]: at(n.data.subarray(5)),
    valid: !s.bitFlag.languageEncodingFlag && l == B(o, 0),
  }),
    n.valid && ((r[t] = n[t]), (r[t + 'UTF8'] = !0));
}
function ia(n, t, e) {
  const r = q(n.data),
    s = be(r, 4);
  Object.assign(n, {
    vendorVersion: be(r, 0),
    vendorId: be(r, 2),
    strength: s,
    originalCompressionMethod: e,
    compressionMethod: j(r, 5),
  }),
    (t.compressionMethod = n.compressionMethod);
}
function aa(n, t) {
  const e = q(n.data);
  let r = 4,
    s;
  try {
    for (; r < n.data.length && !s; ) {
      const i = j(e, r),
        a = j(e, r + 2);
      i == Cs && (s = n.data.slice(r + 4, r + 4 + a)), (r += 4 + a);
    }
  } catch {}
  try {
    if (s && s.length == 24) {
      const i = q(s),
        a = i.getBigUint64(0, !0),
        o = i.getBigUint64(8, !0),
        l = i.getBigUint64(16, !0);
      Object.assign(n, { rawLastModDate: a, rawLastAccessDate: o, rawCreationDate: l });
      const _ = Je(a),
        d = Je(o),
        p = Je(l),
        h = { lastModDate: _, lastAccessDate: d, creationDate: p };
      Object.assign(n, h), Object.assign(t, h);
    }
  } catch {}
}
function oa(n, t, e) {
  const r = q(n.data),
    s = be(r, 0),
    i = [],
    a = [];
  e
    ? ((s & 1) == 1 && (i.push(ct), a.push(lt)),
      (s & 2) == 2 && (i.push(wr), a.push(Zi)),
      (s & 4) == 4 && (i.push(br), a.push(Ki)))
    : n.data.length >= 5 && (i.push(ct), a.push(lt));
  let o = 1;
  i.forEach((l, _) => {
    if (n.data.length >= o + 4) {
      const d = B(r, o);
      t[l] = n[l] = new Date(d * 1e3);
      const p = a[_];
      n[p] = d;
    }
    o += 4;
  });
}
async function ca(n, t, e, r, s) {
  const i = new Uint8Array(4),
    a = q(i);
  fa(a, 0, t);
  const o = r + s;
  return (await l(r)) || (await l(Math.min(o, e)));
  async function l(_) {
    const d = e - _,
      p = await G(n, d, _);
    for (let h = p.length - r; h >= 0; h--)
      if (p[h] == i[0] && p[h + 1] == i[1] && p[h + 2] == i[2] && p[h + 3] == i[3])
        return { offset: d + h, buffer: p.slice(h, h + r).buffer };
  }
}
function K(n, t, e) {
  return t[e] === $ ? n.options[e] : t[e];
}
function la(n) {
  const t = (n & 4294901760) >> 16,
    e = n & 65535;
  try {
    return new Date(
      1980 + ((t & 65024) >> 9),
      ((t & 480) >> 5) - 1,
      t & 31,
      (e & 63488) >> 11,
      (e & 2016) >> 5,
      (e & 31) * 2,
      0
    );
  } catch {}
}
function Je(n) {
  return new Date(Number(n / BigInt(1e4) - BigInt(116444736e5)));
}
function be(n, t) {
  return n.getUint8(t);
}
function j(n, t) {
  return n.getUint16(t, !0);
}
function B(n, t) {
  return n.getUint32(t, !0);
}
function Le(n, t) {
  return Number(n.getBigUint64(t, !0));
}
function fa(n, t, e) {
  n.setUint32(t, e, !0);
}
function q(n) {
  return new DataView(n.buffer);
}
In({ Inflate: ms });
const ua = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        BlobReader: yt,
        BlobWriter: er,
        Data64URIReader: Pi,
        Data64URIWriter: Li,
        ERR_BAD_FORMAT: Pe,
        ERR_CENTRAL_DIRECTORY_NOT_FOUND: Er,
        ERR_ENCRYPTED: Ar,
        ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND: xr,
        ERR_EOCDR_NOT_FOUND: gr,
        ERR_EOCDR_ZIP64_NOT_FOUND: yr,
        ERR_EXTRAFIELD_ZIP64_NOT_FOUND: Sr,
        ERR_HTTP_RANGE: Oe,
        ERR_INVALID_PASSWORD: dt,
        ERR_INVALID_SIGNATURE: _t,
        ERR_ITERATOR_COMPLETED_TOO_SOON: Qn,
        ERR_LOCAL_FILE_HEADER_NOT_FOUND: Tr,
        ERR_SPLIT_ZIP_FILE: ut,
        ERR_UNSUPPORTED_COMPRESSION: ft,
        ERR_UNSUPPORTED_ENCRYPTION: Rr,
        HttpRangeReader: Hi,
        HttpReader: ar,
        Reader: ce,
        SplitDataReader: Et,
        SplitDataWriter: ve,
        SplitZipReader: qi,
        SplitZipWriter: Gi,
        TextReader: Fi,
        TextWriter: Mi,
        Uint8ArrayReader: Wi,
        Uint8ArrayWriter: Bi,
        Writer: gt,
        ZipReader: na,
        configure: In,
        getMimeType: Us,
        initReader: or,
        initStream: Re,
        initWriter: cr,
        readUint8Array: G,
        terminateWorkers: Si,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Ee = ua;
class da {
  constructor(t, e) {
    F(this, '_zipReader');
    F(this, '_entriesPromise');
    F(this, '_traceURL');
    (this._traceURL = t),
      Ee.configure({ baseURL: self.location.href }),
      (this._zipReader = new Ee.ZipReader(
        new Ee.HttpReader(ha(t), { mode: 'cors', preventHeadRequest: !0 }),
        { useWebWorkers: !1 }
      )),
      (this._entriesPromise = this._zipReader.getEntries({ onprogress: e }).then(r => {
        const s = new Map();
        for (const i of r) s.set(i.filename, i);
        return s;
      }));
  }
  isLive() {
    return !1;
  }
  traceURL() {
    return this._traceURL;
  }
  async entryNames() {
    return [...(await this._entriesPromise).keys()];
  }
  async hasEntry(t) {
    return (await this._entriesPromise).has(t);
  }
  async readText(t) {
    var i;
    const r = (await this._entriesPromise).get(t);
    if (!r) return;
    const s = new Ee.TextWriter();
    return await ((i = r.getData) == null ? void 0 : i.call(r, s)), s.getData();
  }
  async readBlob(t) {
    const r = (await this._entriesPromise).get(t);
    if (!r) return;
    const s = new Ee.BlobWriter();
    return await r.getData(s), s.getData();
  }
}
class _a {
  constructor(t) {
    F(this, '_entriesPromise');
    F(this, '_traceURL');
    (this._traceURL = t),
      (this._entriesPromise = fetch('/trace/file?path=' + encodeURIComponent(t)).then(async e => {
        const r = JSON.parse(await e.text()),
          s = new Map();
        for (const i of r.entries) s.set(i.name, i.path);
        return s;
      }));
  }
  isLive() {
    return !0;
  }
  traceURL() {
    return this._traceURL;
  }
  async entryNames() {
    return [...(await this._entriesPromise).keys()];
  }
  async hasEntry(t) {
    return (await this._entriesPromise).has(t);
  }
  async readText(t) {
    const e = await this._readEntry(t);
    return e == null ? void 0 : e.text();
  }
  async readBlob(t) {
    const e = await this._readEntry(t);
    return (e == null ? void 0 : e.status) === 200 ? await (e == null ? void 0 : e.blob()) : void 0;
  }
  async _readEntry(t) {
    const r = (await this._entriesPromise).get(t);
    if (r) return fetch('/trace/file?path=' + encodeURIComponent(r));
  }
}
function ha(n) {
  let t = n.startsWith('http') || n.startsWith('blob') ? n : `file?path=${encodeURIComponent(n)}`;
  return (
    t.startsWith('https://www.dropbox.com/') &&
      (t = 'https://dl.dropboxusercontent.com/' + t.substring(24)),
    t
  );
}
self.addEventListener('install', function (n) {
  self.skipWaiting();
});
self.addEventListener('activate', function (n) {
  n.waitUntil(self.clients.claim());
});
const pa = new URL(self.registration.scope).pathname,
  ue = new Map(),
  He = new Map();
async function ma(n, t, e, r) {
  var o;
  await kr();
  let s = He.get(e);
  s || ((s = new Set()), He.set(e, s)), s.add(n);
  const i = new $r();
  try {
    const [l, _] = Lr(r, [0.5, 0.4, 0.1]),
      d = n.endsWith('json') ? new _a(n) : new da(n, l);
    await i.load(d, _);
  } catch (l) {
    throw (
      (console.error(l),
      (o = l == null ? void 0 : l.message) != null &&
      o.includes('Cannot find .trace file') &&
      (await i.hasEntry('index.html'))
        ? new Error(
            'Could not load trace. Did you upload a Playwright HTML report instead? Make sure to extract the archive first and then double-click the index.html file or put it on a web server.'
          )
        : l instanceof An
        ? new Error(`Could not load trace from ${t || n}. ${l.message}`)
        : t
        ? new Error(`Could not load trace from ${t}. Make sure to upload a valid Playwright trace.`)
        : new Error(
            `Could not load trace from ${n}. Make sure a valid Playwright Trace is accessible over this url.`
          ))
    );
  }
  const a = new Gr(i.storage(), l => i.resourceForSha1(l));
  return ue.set(n, { traceModel: i, snapshotServer: a }), i;
}
async function wa(n) {
  if (n.request.url.startsWith('chrome-extension://')) return fetch(n.request);
  const t = n.request,
    e = await self.clients.get(n.clientId),
    r = self.registration.scope.startsWith('https://');
  if (t.url.startsWith(self.registration.scope)) {
    const l = new URL(ze(t.url)),
      _ = l.pathname.substring(pa.length - 1);
    if (_ === '/ping') return await kr(), new Response(null, { status: 200 });
    const d = l.searchParams.get('trace');
    if (_ === '/contexts')
      try {
        const p = await ma(d, l.searchParams.get('traceFileName'), n.clientId, (h, g) => {
          e.postMessage({ method: 'progress', params: { done: h, total: g } });
        });
        return new Response(JSON.stringify(p.contextEntries), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (p) {
        return new Response(JSON.stringify({ error: p == null ? void 0 : p.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    if (_.startsWith('/snapshotInfo/')) {
      const { snapshotServer: p } = ue.get(d) || {};
      return p ? p.serveSnapshotInfo(_, l.searchParams) : new Response(null, { status: 404 });
    }
    if (_.startsWith('/snapshot/')) {
      const { snapshotServer: p } = ue.get(d) || {};
      if (!p) return new Response(null, { status: 404 });
      const h = p.serveSnapshot(_, l.searchParams, l.href);
      return r && h.headers.set('Content-Security-Policy', 'upgrade-insecure-requests'), h;
    }
    if (_.startsWith('/sha1/')) {
      const p = l.searchParams.has('download'),
        h = _.slice(6);
      for (const g of ue.values()) {
        const y = await g.traceModel.resourceForSha1(h);
        if (y) return new Response(y, { status: 200, headers: p ? ba(g.traceModel, h) : void 0 });
      }
      return new Response(null, { status: 404 });
    }
    return fetch(n.request);
  }
  const s = ze(e.url),
    i = new URL(s).searchParams.get('trace'),
    { snapshotServer: a } = ue.get(i) || {};
  if (!a) return new Response(null, { status: 404 });
  const o = [t.url];
  return (
    r && t.url.startsWith('https://') && o.push(t.url.replace(/^https/, 'http')),
    a.serveResource(o, t.method, s)
  );
}
function ba(n, t) {
  const e = n.attachmentForSha1(t);
  if (!e) return;
  const r = new Headers();
  return (
    r.set(
      'Content-Disposition',
      `attachment; filename="attachment"; filename*=UTF-8''${encodeURIComponent(e.name)}`
    ),
    e.contentType && r.set('Content-Type', e.contentType),
    r
  );
}
async function kr() {
  const n = await self.clients.matchAll(),
    t = new Set();
  for (const [e, r] of He) n.find(s => s.id === e) ? r.forEach(s => t.add(s)) : He.delete(e);
  for (const e of ue.keys()) t.has(e) || ue.delete(e);
}
self.addEventListener('fetch', function (n) {
  n.respondWith(wa(n));
});
