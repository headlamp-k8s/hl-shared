import {
  M as N,
  r as s,
  T as W,
  j as e,
  a as D,
  t as M,
  W as C,
  b as F,
  c as O,
} from './assets/testServerConnection-JQMZFCzK.js';
const A = () => {
    const [i, k] = s.useState(!1),
      [c, h] = s.useState([]),
      [u, U] = s.useState([]),
      [w, S] = s.useState(L),
      [v, m] = s.useState({ done: 0, total: 0 }),
      [T, g] = s.useState(!1),
      [y, f] = s.useState(null),
      [x, E] = s.useState(null),
      p = s.useCallback(t => {
        const o = [],
          a = [],
          r = new URL(window.location.href);
        for (let n = 0; n < t.length; n++) {
          const l = t.item(n);
          if (!l) continue;
          const b = URL.createObjectURL(l);
          o.push(b),
            a.push(l.name),
            r.searchParams.append('trace', b),
            r.searchParams.append('traceFileName', l.name);
        }
        const d = r.toString();
        window.history.pushState({}, '', d), h(o), U(a), g(!1), f(null);
      }, []),
      P = s.useCallback(
        t => {
          t.preventDefault(), p(t.dataTransfer.files);
        },
        [p]
      ),
      R = s.useCallback(
        t => {
          t.preventDefault(), t.target.files && p(t.target.files);
        },
        [p]
      );
    s.useEffect(() => {
      const t = new URL(window.location.href).searchParams,
        o = t.getAll('trace');
      k(t.has('isServer'));
      for (const a of o)
        if (a.startsWith('file:')) {
          E(a || null);
          return;
        }
      if (t.has('isServer')) {
        const a = new URLSearchParams(window.location.search).get('ws'),
          r = new URL(`../${a}`, window.location.toString());
        r.protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        const d = new W(r.toString());
        d.onLoadTraceRequested(async n => {
          h(n.traceUrl ? [n.traceUrl] : []), g(!1), f(null);
        }),
          d.initialize({}).catch(() => {});
      } else o.some(a => a.startsWith('blob:')) || h(o);
    }, []),
      s.useEffect(() => {
        (async () => {
          if (c.length) {
            const t = r => {
              r.data.method === 'progress' && m(r.data.params);
            };
            navigator.serviceWorker.addEventListener('message', t), m({ done: 0, total: 1 });
            const o = [];
            for (let r = 0; r < c.length; r++) {
              const d = c[r],
                n = new URLSearchParams();
              n.set('trace', d), u.length && n.set('traceFileName', u[r]);
              const l = await fetch(`contexts?${n.toString()}`);
              if (!l.ok) {
                i || h([]), f((await l.json()).error);
                return;
              }
              o.push(...(await l.json()));
            }
            navigator.serviceWorker.removeEventListener('message', t);
            const a = new N(o);
            m({ done: 0, total: 0 }), S(a);
          } else S(L);
        })();
      }, [i, c, u]);
    const j = !!(!i && !T && !x && (!c.length || y));
    return e.jsxs('div', {
      className: 'vbox workbench-loader',
      onDragOver: t => {
        t.preventDefault(), g(!0);
      },
      children: [
        e.jsxs('div', {
          className: 'hbox header',
          ...(j ? { inert: 'true' } : {}),
          children: [
            e.jsx('div', {
              className: 'logo',
              children: e.jsx('img', { src: 'playwright-logo.svg', alt: 'Playwright logo' }),
            }),
            e.jsx('div', { className: 'product', children: 'Playwright' }),
            w.title && e.jsx('div', { className: 'title', children: w.title }),
            e.jsx('div', { className: 'spacer' }),
            e.jsx(D, {
              icon: 'color-mode',
              title: 'Toggle color mode',
              toggled: !1,
              onClick: () => M(),
            }),
          ],
        }),
        e.jsx('div', {
          className: 'progress',
          children: e.jsx('div', {
            className: 'inner-progress',
            style: { width: v.total ? (100 * v.done) / v.total + '%' : 0 },
          }),
        }),
        e.jsx(C, { model: w, inert: j }),
        x &&
          e.jsxs('div', {
            className: 'drop-target',
            children: [
              e.jsx('div', {
                children: 'Trace Viewer uses Service Workers to show traces. To view trace:',
              }),
              e.jsxs('div', {
                style: { paddingTop: 20 },
                children: [
                  e.jsxs('div', {
                    children: [
                      '1. Click ',
                      e.jsx('a', { href: x, children: 'here' }),
                      ' to put your trace into the download shelf',
                    ],
                  }),
                  e.jsxs('div', {
                    children: [
                      '2. Go to ',
                      e.jsx('a', {
                        href: 'https://trace.playwright.dev',
                        children: 'trace.playwright.dev',
                      }),
                    ],
                  }),
                  e.jsx('div', {
                    children: '3. Drop the trace from the download shelf into the page',
                  }),
                ],
              }),
            ],
          }),
        j &&
          e.jsxs('div', {
            className: 'drop-target',
            children: [
              e.jsx('div', { className: 'processing-error', role: 'alert', children: y }),
              e.jsx('div', {
                className: 'title',
                role: 'heading',
                'aria-level': 1,
                children: 'Drop Playwright Trace to load',
              }),
              e.jsx('div', { children: 'or' }),
              e.jsx('button', {
                onClick: () => {
                  const t = document.createElement('input');
                  (t.type = 'file'),
                    (t.multiple = !0),
                    t.click(),
                    t.addEventListener('change', o => R(o));
                },
                type: 'button',
                children: 'Select file(s)',
              }),
              e.jsx('div', {
                style: { maxWidth: 400 },
                children:
                  'Playwright Trace Viewer is a Progressive Web App, it does not send your trace anywhere, it opens it locally.',
              }),
            ],
          }),
        i &&
          !c.length &&
          e.jsx('div', {
            className: 'drop-target',
            children: e.jsx('div', {
              className: 'title',
              children: 'Select test to see the trace',
            }),
          }),
        T &&
          e.jsx('div', {
            className: 'drop-target',
            onDragLeave: () => {
              g(!1);
            },
            onDrop: t => P(t),
            children: e.jsx('div', {
              className: 'title',
              children: 'Release to analyse the Playwright Trace',
            }),
          }),
      ],
    });
  },
  L = new N([]);
(async () => {
  if ((F(), window.location.protocol !== 'file:')) {
    if (
      (window.location.href.includes('isUnderTest=true') &&
        (await new Promise(i => setTimeout(i, 1e3))),
      !navigator.serviceWorker)
    )
      throw new Error(`Service workers are not supported.
Make sure to serve the Trace Viewer (${window.location}) via HTTPS or localhost.`);
    navigator.serviceWorker.register('sw.bundle.js'),
      navigator.serviceWorker.controller ||
        (await new Promise(i => {
          navigator.serviceWorker.oncontrollerchange = () => i();
        })),
      setInterval(function () {
        fetch('ping');
      }, 1e4);
  }
  O.render(e.jsx(A, {}), document.querySelector('#root'));
})();
