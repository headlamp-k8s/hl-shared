function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      './codeMirrorModule-BxIIN4UE.js',
      '../codeMirrorModule.ez37Vkbh.css',
    ];
  }
  return indexes.map(i => __vite__mapDeps.viteFileDeps[i]);
}
var Up = Object.defineProperty;
var Bp = (e, t, n) =>
  t in e ? Up(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n);
var B = (e, t, n) => (Bp(e, typeof t != 'symbol' ? t + '' : t, n), n);
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver(i => {
    for (const s of i)
      if (s.type === 'childList')
        for (const o of s.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
var Yw =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {};
function Vp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var Uc = { exports: {} },
  $s = {},
  Bc = { exports: {} },
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var li = Symbol.for('react.element'),
  Wp = Symbol.for('react.portal'),
  qp = Symbol.for('react.fragment'),
  Xp = Symbol.for('react.strict_mode'),
  Qp = Symbol.for('react.profiler'),
  Gp = Symbol.for('react.provider'),
  Kp = Symbol.for('react.context'),
  Yp = Symbol.for('react.forward_ref'),
  Jp = Symbol.for('react.suspense'),
  Zp = Symbol.for('react.memo'),
  em = Symbol.for('react.lazy'),
  Ya = Symbol.iterator;
function tm(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ya && e[Ya]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var Vc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Wc = Object.assign,
  qc = {};
function nr(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = qc), (this.updater = n || Vc);
}
nr.prototype.isReactComponent = {};
nr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
nr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Xc() {}
Xc.prototype = nr.prototype;
function Wl(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = qc), (this.updater = n || Vc);
}
var ql = (Wl.prototype = new Xc());
ql.constructor = Wl;
Wc(ql, nr.prototype);
ql.isPureReactComponent = !0;
var Ja = Array.isArray,
  Qc = Object.prototype.hasOwnProperty,
  Xl = { current: null },
  Gc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kc(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = '' + t.key), t))
      Qc.call(t, r) && !Gc.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps) for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return { $$typeof: li, type: e, key: s, ref: o, props: i, _owner: Xl.current };
}
function nm(e, t) {
  return { $$typeof: li, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ql(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === li;
}
function rm(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Za = /\/+/g;
function oo(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? rm('' + e.key) : t.toString(36);
}
function Di(e, t, n, r, i) {
  var s = typeof e;
  (s === 'undefined' || s === 'boolean') && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case 'string':
      case 'number':
        o = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case li:
          case Wp:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === '' ? '.' + oo(o, 0) : r),
      Ja(i)
        ? ((n = ''),
          e != null && (n = e.replace(Za, '$&/') + '/'),
          Di(i, t, n, '', function (u) {
            return u;
          }))
        : i != null &&
          (Ql(i) &&
            (i = nm(
              i,
              n +
                (!i.key || (o && o.key === i.key) ? '' : ('' + i.key).replace(Za, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), Ja(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + oo(s, l);
      o += Di(s, t, n, a, i);
    }
  else if (((a = tm(e)), typeof a == 'function'))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + oo(s, l++)), (o += Di(s, t, n, a, i));
  else if (s === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return o;
}
function vi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Di(e, r, '', '', function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function im(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ce = { current: null },
  Fi = { transition: null },
  sm = { ReactCurrentDispatcher: Ce, ReactCurrentBatchConfig: Fi, ReactCurrentOwner: Xl };
O.Children = {
  map: vi,
  forEach: function (e, t, n) {
    vi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      vi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      vi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ql(e))
      throw Error('React.Children.only expected to receive a single React element child.');
    return e;
  },
};
O.Component = nr;
O.Fragment = qp;
O.Profiler = Qp;
O.PureComponent = Wl;
O.StrictMode = Xp;
O.Suspense = Jp;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sm;
O.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.'
    );
  var r = Wc({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = Xl.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Qc.call(t, a) &&
        !Gc.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: li, type: e.type, key: i, ref: s, props: r, _owner: o };
};
O.createContext = function (e) {
  return (
    (e = {
      $$typeof: Kp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Gp, _context: e }),
    (e.Consumer = e)
  );
};
O.createElement = Kc;
O.createFactory = function (e) {
  var t = Kc.bind(null, e);
  return (t.type = e), t;
};
O.createRef = function () {
  return { current: null };
};
O.forwardRef = function (e) {
  return { $$typeof: Yp, render: e };
};
O.isValidElement = Ql;
O.lazy = function (e) {
  return { $$typeof: em, _payload: { _status: -1, _result: e }, _init: im };
};
O.memo = function (e, t) {
  return { $$typeof: Zp, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function (e) {
  var t = Fi.transition;
  Fi.transition = {};
  try {
    e();
  } finally {
    Fi.transition = t;
  }
};
O.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
O.useCallback = function (e, t) {
  return Ce.current.useCallback(e, t);
};
O.useContext = function (e) {
  return Ce.current.useContext(e);
};
O.useDebugValue = function () {};
O.useDeferredValue = function (e) {
  return Ce.current.useDeferredValue(e);
};
O.useEffect = function (e, t) {
  return Ce.current.useEffect(e, t);
};
O.useId = function () {
  return Ce.current.useId();
};
O.useImperativeHandle = function (e, t, n) {
  return Ce.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function (e, t) {
  return Ce.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function (e, t) {
  return Ce.current.useLayoutEffect(e, t);
};
O.useMemo = function (e, t) {
  return Ce.current.useMemo(e, t);
};
O.useReducer = function (e, t, n) {
  return Ce.current.useReducer(e, t, n);
};
O.useRef = function (e) {
  return Ce.current.useRef(e);
};
O.useState = function (e) {
  return Ce.current.useState(e);
};
O.useSyncExternalStore = function (e, t, n) {
  return Ce.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function () {
  return Ce.current.useTransition();
};
O.version = '18.2.0';
Bc.exports = O;
var L = Bc.exports;
const Ht = Vp(L);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var om = L,
  lm = Symbol.for('react.element'),
  am = Symbol.for('react.fragment'),
  um = Object.prototype.hasOwnProperty,
  cm = om.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  dm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yc(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = '' + n),
    t.key !== void 0 && (s = '' + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) um.call(t, r) && !dm.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: lm, type: e, key: s, ref: o, props: i, _owner: cm.current };
}
$s.Fragment = am;
$s.jsx = Yc;
$s.jsxs = Yc;
Uc.exports = $s;
var f = Uc.exports;
function fm(e, t, n, r) {
  const [i, s] = Ht.useState(n);
  return (
    Ht.useEffect(() => {
      let o = !1;
      return (
        r !== void 0 && s(r),
        e().then(l => {
          o || s(l);
        }),
        () => {
          o = !0;
        }
      );
    }, t),
    i
  );
}
function vn() {
  const e = Ht.useRef(null),
    [t, n] = Ht.useState(new DOMRect(0, 0, 10, 10));
  return (
    Ht.useLayoutEffect(() => {
      const r = e.current;
      if (!r) return;
      const i = new ResizeObserver(s => {
        const o = s[s.length - 1];
        o && o.contentRect && n(o.contentRect);
      });
      return i.observe(r), () => i.disconnect();
    }, [e]),
    [t, e]
  );
}
function Ke(e) {
  if (e < 0 || !isFinite(e)) return '-';
  if (e === 0) return '0';
  if (e < 1e3) return e.toFixed(0) + 'ms';
  const t = e / 1e3;
  if (t < 60) return t.toFixed(1) + 's';
  const n = t / 60;
  if (n < 60) return n.toFixed(1) + 'm';
  const r = n / 60;
  return r < 24 ? r.toFixed(1) + 'h' : (r / 24).toFixed(1) + 'd';
}
function hm(e) {
  if (e < 0 || !isFinite(e)) return '-';
  if (e === 0) return '0';
  if (e < 1e3) return e.toFixed(0);
  const t = e / 1024;
  if (t < 1e3) return t.toFixed(1) + 'K';
  const n = t / 1024;
  return n < 1e3 ? n.toFixed(1) + 'M' : (n / 1024).toFixed(1) + 'G';
}
function Jc(e, t, n, r, i) {
  let s = r || 0,
    o = i !== void 0 ? i : e.length;
  for (; s < o; ) {
    const l = (s + o) >> 1;
    n(t, e[l]) >= 0 ? (s = l + 1) : (o = l);
  }
  return o;
}
function pm(e) {
  const t = document.createElement('textarea');
  (t.style.position = 'absolute'),
    (t.style.zIndex = '-1000'),
    (t.value = e),
    document.body.appendChild(t),
    t.select(),
    document.execCommand('copy'),
    t.remove();
}
function is(e, t) {
  const n = e ? Ur.getObject(e, t) : t,
    [r, i] = Ht.useState(n);
  return [
    r,
    o => {
      e && Ur.setObject(e, o), i(o);
    },
  ];
}
class mm {
  getString(t, n) {
    return localStorage[t] || n;
  }
  setString(t, n) {
    (localStorage[t] = n), window.saveSettings && window.saveSettings();
  }
  getObject(t, n) {
    if (!localStorage[t]) return n;
    try {
      return JSON.parse(localStorage[t]);
    } catch {
      return n;
    }
  }
  setObject(t, n) {
    (localStorage[t] = JSON.stringify(n)), window.saveSettings && window.saveSettings();
  }
}
const Ur = new mm();
function Jw() {
  if (document.playwrightThemeInitialized) return;
  (document.playwrightThemeInitialized = !0),
    document.defaultView.addEventListener(
      'focus',
      n => {
        n.target.document.nodeType === Node.DOCUMENT_NODE &&
          document.body.classList.remove('inactive');
      },
      !1
    ),
    document.defaultView.addEventListener(
      'blur',
      n => {
        document.body.classList.add('inactive');
      },
      !1
    );
  const e = Ur.getString('theme', 'light-mode'),
    t = window.matchMedia('(prefers-color-scheme: dark)');
  (e === 'dark-mode' || t.matches) && document.body.classList.add('dark-mode');
}
const Gl = new Set();
function Zw() {
  const e = Ur.getString('theme', 'light-mode');
  let t;
  e === 'dark-mode' ? (t = 'light-mode') : (t = 'dark-mode'),
    e && document.body.classList.remove(e),
    document.body.classList.add(t),
    Ur.setString('theme', t);
  for (const n of Gl) n(t);
}
function e1(e) {
  Gl.add(e);
}
function t1(e) {
  Gl.delete(e);
}
function n1() {
  return document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
}
var Zc = { exports: {} },
  Be = {},
  ed = { exports: {} },
  td = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, R) {
    var $ = M.length;
    M.push(R);
    e: for (; 0 < $; ) {
      var q = ($ - 1) >>> 1,
        ne = M[q];
      if (0 < i(ne, R)) (M[q] = R), (M[$] = ne), ($ = q);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var R = M[0],
      $ = M.pop();
    if ($ !== R) {
      M[0] = $;
      e: for (var q = 0, ne = M.length, et = ne >>> 1; q < et; ) {
        var vt = 2 * (q + 1) - 1,
          cr = M[vt],
          yt = vt + 1,
          xn = M[yt];
        if (0 > i(cr, $))
          yt < ne && 0 > i(xn, cr)
            ? ((M[q] = xn), (M[yt] = $), (q = yt))
            : ((M[q] = cr), (M[vt] = $), (q = vt));
        else if (yt < ne && 0 > i(xn, $)) (M[q] = xn), (M[yt] = $), (q = yt);
        else break e;
      }
    }
    return R;
  }
  function i(M, R) {
    var $ = M.sortIndex - R.sortIndex;
    return $ !== 0 ? $ : M.id - R.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    h = null,
    d = 3,
    g = !1,
    y = !1,
    w = !1,
    x = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    m = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(M) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null) r(u);
      else if (R.startTime <= M) r(u), (R.sortIndex = R.expirationTime), t(a, R);
      else break;
      R = n(u);
    }
  }
  function E(M) {
    if (((w = !1), v(M), !y))
      if (n(a) !== null) (y = !0), Le(C);
      else {
        var R = n(u);
        R !== null && ue(E, R.startTime - M);
      }
  }
  function C(M, R) {
    (y = !1), w && ((w = !1), p(S), (S = -1)), (g = !0);
    var $ = d;
    try {
      for (v(R), h = n(a); h !== null && (!(h.expirationTime > R) || (M && !P())); ) {
        var q = h.callback;
        if (typeof q == 'function') {
          (h.callback = null), (d = h.priorityLevel);
          var ne = q(h.expirationTime <= R);
          (R = e.unstable_now()),
            typeof ne == 'function' ? (h.callback = ne) : h === n(a) && r(a),
            v(R);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var et = !0;
      else {
        var vt = n(u);
        vt !== null && ue(E, vt.startTime - R), (et = !1);
      }
      return et;
    } finally {
      (h = null), (d = $), (g = !1);
    }
  }
  var k = !1,
    N = null,
    S = -1,
    _ = 5,
    A = -1;
  function P() {
    return !(e.unstable_now() - A < _);
  }
  function T() {
    if (N !== null) {
      var M = e.unstable_now();
      A = M;
      var R = !0;
      try {
        R = N(!0, M);
      } finally {
        R ? j() : ((k = !1), (N = null));
      }
    } else k = !1;
  }
  var j;
  if (typeof m == 'function')
    j = function () {
      m(T);
    };
  else if (typeof MessageChannel < 'u') {
    var z = new MessageChannel(),
      ae = z.port2;
    (z.port1.onmessage = T),
      (j = function () {
        ae.postMessage(null);
      });
  } else
    j = function () {
      x(T, 0);
    };
  function Le(M) {
    (N = M), k || ((k = !0), j());
  }
  function ue(M, R) {
    S = x(function () {
      M(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), Le(C));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (_ = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (M) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = d;
      }
      var $ = d;
      d = R;
      try {
        return M();
      } finally {
        d = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, R) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var $ = d;
      d = M;
      try {
        return R();
      } finally {
        d = $;
      }
    }),
    (e.unstable_scheduleCallback = function (M, R, $) {
      var q = e.unstable_now();
      switch (
        (typeof $ == 'object' && $ !== null
          ? (($ = $.delay), ($ = typeof $ == 'number' && 0 < $ ? q + $ : q))
          : ($ = q),
        M)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = $ + ne),
        (M = {
          id: c++,
          callback: R,
          priorityLevel: M,
          startTime: $,
          expirationTime: ne,
          sortIndex: -1,
        }),
        $ > q
          ? ((M.sortIndex = $),
            t(u, M),
            n(a) === null && M === n(u) && (w ? (p(S), (S = -1)) : (w = !0), ue(E, $ - q)))
          : ((M.sortIndex = ne), t(a, M), y || g || ((y = !0), Le(C))),
        M
      );
    }),
    (e.unstable_shouldYield = P),
    (e.unstable_wrapCallback = function (M) {
      var R = d;
      return function () {
        var $ = d;
        d = R;
        try {
          return M.apply(this, arguments);
        } finally {
          d = $;
        }
      };
    });
})(td);
ed.exports = td;
var gm = ed.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nd = L,
  He = gm;
function b(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var rd = new Set(),
  Br = {};
function yn(e, t) {
  Gn(e, t), Gn(e + 'Capture', t);
}
function Gn(e, t) {
  for (Br[e] = t, e = 0; e < t.length; e++) rd.add(t[e]);
}
var Ct = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Uo = Object.prototype.hasOwnProperty,
  vm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  eu = {},
  tu = {};
function ym(e) {
  return Uo.call(tu, e) ? !0 : Uo.call(eu, e) ? !1 : vm.test(e) ? (tu[e] = !0) : ((eu[e] = !0), !1);
}
function wm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function xm(e, t, n, r) {
  if (t === null || typeof t > 'u' || wm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function be(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var me = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    me[e] = new be(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  me[t] = new be(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  me[e] = new be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  me[e] = new be(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    me[e] = new be(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  me[e] = new be(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  me[e] = new be(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  me[e] = new be(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  me[e] = new be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Kl = /[\-:]([a-z])/g;
function Yl(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Kl, Yl);
    me[t] = new be(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Kl, Yl);
    me[t] = new be(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Kl, Yl);
  me[t] = new be(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  me[e] = new be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
me.xlinkHref = new be('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  me[e] = new be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Jl(e, t, n, r) {
  var i = me.hasOwnProperty(t) ? me[t] : null;
  (i !== null
    ? i.type !== 0
    : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (xm(t, n, i, r) && (n = null),
    r || i === null
      ? ym(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Mt = nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  yi = Symbol.for('react.element'),
  bn = Symbol.for('react.portal'),
  Ln = Symbol.for('react.fragment'),
  Zl = Symbol.for('react.strict_mode'),
  Bo = Symbol.for('react.profiler'),
  id = Symbol.for('react.provider'),
  sd = Symbol.for('react.context'),
  ea = Symbol.for('react.forward_ref'),
  Vo = Symbol.for('react.suspense'),
  Wo = Symbol.for('react.suspense_list'),
  ta = Symbol.for('react.memo'),
  jt = Symbol.for('react.lazy'),
  od = Symbol.for('react.offscreen'),
  nu = Symbol.iterator;
function fr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (nu && e[nu]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var Y = Object.assign,
  lo;
function Nr(e) {
  if (lo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      lo = (t && t[1]) || '';
    }
  return (
    `
` +
    lo +
    e
  );
}
var ao = !1;
function uo(e, t) {
  if (!e || ao) return '';
  ao = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && i[o] !== s[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== s[l])) {
                var a =
                  `
` + i[o].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (ao = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Nr(e) : '';
}
function _m(e) {
  switch (e.tag) {
    case 5:
      return Nr(e.type);
    case 16:
      return Nr('Lazy');
    case 13:
      return Nr('Suspense');
    case 19:
      return Nr('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = uo(e.type, !1)), e;
    case 11:
      return (e = uo(e.type.render, !1)), e;
    case 1:
      return (e = uo(e.type, !0)), e;
    default:
      return '';
  }
}
function qo(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Ln:
      return 'Fragment';
    case bn:
      return 'Portal';
    case Bo:
      return 'Profiler';
    case Zl:
      return 'StrictMode';
    case Vo:
      return 'Suspense';
    case Wo:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case sd:
        return (e.displayName || 'Context') + '.Consumer';
      case id:
        return (e._context.displayName || 'Context') + '.Provider';
      case ea:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case ta:
        return (t = e.displayName || null), t !== null ? t : qo(e.type) || 'Memo';
      case jt:
        (t = e._payload), (e = e._init);
        try {
          return qo(e(t));
        } catch {}
    }
  return null;
}
function Sm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return qo(t);
    case 8:
      return t === Zl ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Yt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function ld(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function Em(e) {
  var t = ld(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = '' + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = '' + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function wi(e) {
  e._valueTracker || (e._valueTracker = Em(e));
}
function ad(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = ld(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ss(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Xo(e, t) {
  var n = t.checked;
  return Y({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ru(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Yt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    });
}
function ud(e, t) {
  (t = t.checked), t != null && Jl(e, 'checked', t, !1);
}
function Qo(e, t) {
  ud(e, t);
  var n = Yt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Go(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Go(e, t.type, Yt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function iu(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Go(e, t, n) {
  (t !== 'number' || ss(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Cr = Array.isArray;
function Un(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Yt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ko(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(b(91));
  return Y({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function su(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(b(92));
      if (Cr(n)) {
        if (1 < n.length) throw Error(b(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Yt(n) };
}
function cd(e, t) {
  var n = Yt(t.value),
    r = Yt(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function ou(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function dd(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Yo(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? dd(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var xi,
  fd = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
    else {
      for (
        xi = xi || document.createElement('div'),
          xi.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = xi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Vr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var jr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Tm = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(jr).forEach(function (e) {
  Tm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (jr[t] = jr[e]);
  });
});
function hd(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (jr.hasOwnProperty(e) && jr[e])
    ? ('' + t).trim()
    : t + 'px';
}
function pd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = hd(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var km = Y(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Jo(e, t) {
  if (t) {
    if (km[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(b(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(b(60));
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML))
        throw Error(b(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(b(62));
  }
}
function Zo(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var el = null;
function na(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var tl = null,
  Bn = null,
  Vn = null;
function lu(e) {
  if ((e = ci(e))) {
    if (typeof tl != 'function') throw Error(b(280));
    var t = e.stateNode;
    t && ((t = Hs(t)), tl(e.stateNode, e.type, t));
  }
}
function md(e) {
  Bn ? (Vn ? Vn.push(e) : (Vn = [e])) : (Bn = e);
}
function gd() {
  if (Bn) {
    var e = Bn,
      t = Vn;
    if (((Vn = Bn = null), lu(e), t)) for (e = 0; e < t.length; e++) lu(t[e]);
  }
}
function vd(e, t) {
  return e(t);
}
function yd() {}
var co = !1;
function wd(e, t, n) {
  if (co) return e(t, n);
  co = !0;
  try {
    return vd(e, t, n);
  } finally {
    (co = !1), (Bn !== null || Vn !== null) && (yd(), gd());
  }
}
function Wr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Hs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(b(231, t, typeof n));
  return n;
}
var nl = !1;
if (Ct)
  try {
    var hr = {};
    Object.defineProperty(hr, 'passive', {
      get: function () {
        nl = !0;
      },
    }),
      window.addEventListener('test', hr, hr),
      window.removeEventListener('test', hr, hr);
  } catch {
    nl = !1;
  }
function Nm(e, t, n, r, i, s, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Pr = !1,
  os = null,
  ls = !1,
  rl = null,
  Cm = {
    onError: function (e) {
      (Pr = !0), (os = e);
    },
  };
function bm(e, t, n, r, i, s, o, l, a) {
  (Pr = !1), (os = null), Nm.apply(Cm, arguments);
}
function Lm(e, t, n, r, i, s, o, l, a) {
  if ((bm.apply(this, arguments), Pr)) {
    if (Pr) {
      var u = os;
      (Pr = !1), (os = null);
    } else throw Error(b(198));
    ls || ((ls = !0), (rl = u));
  }
}
function wn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function xd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated;
  }
  return null;
}
function au(e) {
  if (wn(e) !== e) throw Error(b(188));
}
function Am(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = wn(e)), t === null)) throw Error(b(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return au(i), e;
        if (s === r) return au(i), t;
        s = s.sibling;
      }
      throw Error(b(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (l === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (l === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(b(189));
      }
    }
    if (n.alternate !== r) throw Error(b(190));
  }
  if (n.tag !== 3) throw Error(b(188));
  return n.stateNode.current === n ? e : t;
}
function _d(e) {
  return (e = Am(e)), e !== null ? Sd(e) : null;
}
function Sd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Sd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ed = He.unstable_scheduleCallback,
  uu = He.unstable_cancelCallback,
  Mm = He.unstable_shouldYield,
  Im = He.unstable_requestPaint,
  ee = He.unstable_now,
  jm = He.unstable_getCurrentPriorityLevel,
  ra = He.unstable_ImmediatePriority,
  Td = He.unstable_UserBlockingPriority,
  as = He.unstable_NormalPriority,
  Pm = He.unstable_LowPriority,
  kd = He.unstable_IdlePriority,
  Os = null,
  mt = null;
function Rm(e) {
  if (mt && typeof mt.onCommitFiberRoot == 'function')
    try {
      mt.onCommitFiberRoot(Os, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var st = Math.clz32 ? Math.clz32 : zm,
  $m = Math.log,
  Om = Math.LN2;
function zm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - (($m(e) / Om) | 0)) | 0;
}
var _i = 64,
  Si = 4194304;
function br(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function us(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = br(l)) : ((s &= o), s !== 0 && (r = br(s)));
  } else (o = n & ~i), o !== 0 ? (r = br(o)) : s !== 0 && (r = br(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - st(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Dm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Fm(e, t) {
  for (
    var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - st(s),
      l = 1 << o,
      a = i[o];
    a === -1 ? (!(l & n) || l & r) && (i[o] = Dm(l, t)) : a <= t && (e.expiredLanes |= l),
      (s &= ~l);
  }
}
function il(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Nd() {
  var e = _i;
  return (_i <<= 1), !(_i & 4194240) && (_i = 64), e;
}
function fo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ai(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - st(t)),
    (e[t] = n);
}
function Hm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - st(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function ia(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - st(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var H = 0;
function Cd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var bd,
  sa,
  Ld,
  Ad,
  Md,
  sl = !1,
  Ei = [],
  Ut = null,
  Bt = null,
  Vt = null,
  qr = new Map(),
  Xr = new Map(),
  Ot = [],
  Um =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function cu(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Ut = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Bt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Vt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      qr.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Xr.delete(t.pointerId);
  }
}
function pr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = ci(t)), t !== null && sa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Bm(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (Ut = pr(Ut, e, t, n, r, i)), !0;
    case 'dragenter':
      return (Bt = pr(Bt, e, t, n, r, i)), !0;
    case 'mouseover':
      return (Vt = pr(Vt, e, t, n, r, i)), !0;
    case 'pointerover':
      var s = i.pointerId;
      return qr.set(s, pr(qr.get(s) || null, e, t, n, r, i)), !0;
    case 'gotpointercapture':
      return (s = i.pointerId), Xr.set(s, pr(Xr.get(s) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Id(e) {
  var t = sn(e.target);
  if (t !== null) {
    var n = wn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = xd(n)), t !== null)) {
          (e.blockedOn = t),
            Md(e.priority, function () {
              Ld(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Hi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ol(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (el = r), n.target.dispatchEvent(r), (el = null);
    } else return (t = ci(n)), t !== null && sa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function du(e, t, n) {
  Hi(e) && n.delete(t);
}
function Vm() {
  (sl = !1),
    Ut !== null && Hi(Ut) && (Ut = null),
    Bt !== null && Hi(Bt) && (Bt = null),
    Vt !== null && Hi(Vt) && (Vt = null),
    qr.forEach(du),
    Xr.forEach(du);
}
function mr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    sl || ((sl = !0), He.unstable_scheduleCallback(He.unstable_NormalPriority, Vm)));
}
function Qr(e) {
  function t(i) {
    return mr(i, e);
  }
  if (0 < Ei.length) {
    mr(Ei[0], e);
    for (var n = 1; n < Ei.length; n++) {
      var r = Ei[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ut !== null && mr(Ut, e),
      Bt !== null && mr(Bt, e),
      Vt !== null && mr(Vt, e),
      qr.forEach(t),
      Xr.forEach(t),
      n = 0;
    n < Ot.length;
    n++
  )
    (r = Ot[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ot.length && ((n = Ot[0]), n.blockedOn === null); )
    Id(n), n.blockedOn === null && Ot.shift();
}
var Wn = Mt.ReactCurrentBatchConfig,
  cs = !0;
function Wm(e, t, n, r) {
  var i = H,
    s = Wn.transition;
  Wn.transition = null;
  try {
    (H = 1), oa(e, t, n, r);
  } finally {
    (H = i), (Wn.transition = s);
  }
}
function qm(e, t, n, r) {
  var i = H,
    s = Wn.transition;
  Wn.transition = null;
  try {
    (H = 4), oa(e, t, n, r);
  } finally {
    (H = i), (Wn.transition = s);
  }
}
function oa(e, t, n, r) {
  if (cs) {
    var i = ol(e, t, n, r);
    if (i === null) So(e, t, r, ds, n), cu(e, r);
    else if (Bm(i, e, t, n, r)) r.stopPropagation();
    else if ((cu(e, r), t & 4 && -1 < Um.indexOf(e))) {
      for (; i !== null; ) {
        var s = ci(i);
        if ((s !== null && bd(s), (s = ol(e, t, n, r)), s === null && So(e, t, r, ds, n), s === i))
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else So(e, t, r, null, n);
  }
}
var ds = null;
function ol(e, t, n, r) {
  if (((ds = null), (e = na(r)), (e = sn(e)), e !== null))
    if (((t = wn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = xd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ds = e), null;
}
function jd(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (jm()) {
        case ra:
          return 1;
        case Td:
          return 4;
        case as:
        case Pm:
          return 16;
        case kd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Dt = null,
  la = null,
  Ui = null;
function Pd() {
  if (Ui) return Ui;
  var e,
    t = la,
    n = t.length,
    r,
    i = 'value' in Dt ? Dt.value : Dt.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (Ui = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Bi(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ti() {
  return !0;
}
function fu() {
  return !1;
}
function Ve(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e) e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Ti
        : fu),
      (this.isPropagationStopped = fu),
      this
    );
  }
  return (
    Y(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Ti));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ti));
      },
      persist: function () {},
      isPersistent: Ti,
    }),
    t
  );
}
var rr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  aa = Ve(rr),
  ui = Y({}, rr, { view: 0, detail: 0 }),
  Xm = Ve(ui),
  ho,
  po,
  gr,
  zs = Y({}, ui, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ua,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== gr &&
            (gr && e.type === 'mousemove'
              ? ((ho = e.screenX - gr.screenX), (po = e.screenY - gr.screenY))
              : (po = ho = 0),
            (gr = e)),
          ho);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : po;
    },
  }),
  hu = Ve(zs),
  Qm = Y({}, zs, { dataTransfer: 0 }),
  Gm = Ve(Qm),
  Km = Y({}, ui, { relatedTarget: 0 }),
  mo = Ve(Km),
  Ym = Y({}, rr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Jm = Ve(Ym),
  Zm = Y({}, rr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  eg = Ve(Zm),
  tg = Y({}, rr, { data: 0 }),
  pu = Ve(tg),
  ng = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  rg = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  ig = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function sg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ig[e]) ? !!t[e] : !1;
}
function ua() {
  return sg;
}
var og = Y({}, ui, {
    key: function (e) {
      if (e.key) {
        var t = ng[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Bi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? rg[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ua,
    charCode: function (e) {
      return e.type === 'keypress' ? Bi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Bi(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  lg = Ve(og),
  ag = Y({}, zs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  mu = Ve(ag),
  ug = Y({}, ui, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ua,
  }),
  cg = Ve(ug),
  dg = Y({}, rr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  fg = Ve(dg),
  hg = Y({}, zs, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  pg = Ve(hg),
  mg = [9, 13, 27, 32],
  ca = Ct && 'CompositionEvent' in window,
  Rr = null;
Ct && 'documentMode' in document && (Rr = document.documentMode);
var gg = Ct && 'TextEvent' in window && !Rr,
  Rd = Ct && (!ca || (Rr && 8 < Rr && 11 >= Rr)),
  gu = ' ',
  vu = !1;
function $d(e, t) {
  switch (e) {
    case 'keyup':
      return mg.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Od(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var An = !1;
function vg(e, t) {
  switch (e) {
    case 'compositionend':
      return Od(t);
    case 'keypress':
      return t.which !== 32 ? null : ((vu = !0), gu);
    case 'textInput':
      return (e = t.data), e === gu && vu ? null : e;
    default:
      return null;
  }
}
function yg(e, t) {
  if (An)
    return e === 'compositionend' || (!ca && $d(e, t))
      ? ((e = Pd()), (Ui = la = Dt = null), (An = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Rd && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var wg = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function yu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!wg[e.type] : t === 'textarea';
}
function zd(e, t, n, r) {
  md(r),
    (t = fs(t, 'onChange')),
    0 < t.length &&
      ((n = new aa('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var $r = null,
  Gr = null;
function xg(e) {
  Gd(e, 0);
}
function Ds(e) {
  var t = jn(e);
  if (ad(t)) return e;
}
function _g(e, t) {
  if (e === 'change') return t;
}
var Dd = !1;
if (Ct) {
  var go;
  if (Ct) {
    var vo = 'oninput' in document;
    if (!vo) {
      var wu = document.createElement('div');
      wu.setAttribute('oninput', 'return;'), (vo = typeof wu.oninput == 'function');
    }
    go = vo;
  } else go = !1;
  Dd = go && (!document.documentMode || 9 < document.documentMode);
}
function xu() {
  $r && ($r.detachEvent('onpropertychange', Fd), (Gr = $r = null));
}
function Fd(e) {
  if (e.propertyName === 'value' && Ds(Gr)) {
    var t = [];
    zd(t, Gr, e, na(e)), wd(xg, t);
  }
}
function Sg(e, t, n) {
  e === 'focusin'
    ? (xu(), ($r = t), (Gr = n), $r.attachEvent('onpropertychange', Fd))
    : e === 'focusout' && xu();
}
function Eg(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Ds(Gr);
}
function Tg(e, t) {
  if (e === 'click') return Ds(t);
}
function kg(e, t) {
  if (e === 'input' || e === 'change') return Ds(t);
}
function Ng(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var lt = typeof Object.is == 'function' ? Object.is : Ng;
function Kr(e, t) {
  if (lt(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Uo.call(t, i) || !lt(e[i], t[i])) return !1;
  }
  return !0;
}
function _u(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Su(e, t) {
  var n = _u(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = _u(n);
  }
}
function Hd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Hd(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ud() {
  for (var e = window, t = ss(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ss(e.document);
  }
  return t;
}
function da(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Cg(e) {
  var t = Ud(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Hd(n.ownerDocument.documentElement, n)) {
    if (r !== null && da(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Su(n, s));
        var o = Su(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var bg = Ct && 'documentMode' in document && 11 >= document.documentMode,
  Mn = null,
  ll = null,
  Or = null,
  al = !1;
function Eu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  al ||
    Mn == null ||
    Mn !== ss(r) ||
    ((r = Mn),
    'selectionStart' in r && da(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Or && Kr(Or, r)) ||
      ((Or = r),
      (r = fs(ll, 'onSelect')),
      0 < r.length &&
        ((t = new aa('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Mn))));
}
function ki(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var In = {
    animationend: ki('Animation', 'AnimationEnd'),
    animationiteration: ki('Animation', 'AnimationIteration'),
    animationstart: ki('Animation', 'AnimationStart'),
    transitionend: ki('Transition', 'TransitionEnd'),
  },
  yo = {},
  Bd = {};
Ct &&
  ((Bd = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete In.animationend.animation,
    delete In.animationiteration.animation,
    delete In.animationstart.animation),
  'TransitionEvent' in window || delete In.transitionend.transition);
function Fs(e) {
  if (yo[e]) return yo[e];
  if (!In[e]) return e;
  var t = In[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Bd) return (yo[e] = t[n]);
  return e;
}
var Vd = Fs('animationend'),
  Wd = Fs('animationiteration'),
  qd = Fs('animationstart'),
  Xd = Fs('transitionend'),
  Qd = new Map(),
  Tu =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Zt(e, t) {
  Qd.set(e, t), yn(t, [e]);
}
for (var wo = 0; wo < Tu.length; wo++) {
  var xo = Tu[wo],
    Lg = xo.toLowerCase(),
    Ag = xo[0].toUpperCase() + xo.slice(1);
  Zt(Lg, 'on' + Ag);
}
Zt(Vd, 'onAnimationEnd');
Zt(Wd, 'onAnimationIteration');
Zt(qd, 'onAnimationStart');
Zt('dblclick', 'onDoubleClick');
Zt('focusin', 'onFocus');
Zt('focusout', 'onBlur');
Zt(Xd, 'onTransitionEnd');
Gn('onMouseEnter', ['mouseout', 'mouseover']);
Gn('onMouseLeave', ['mouseout', 'mouseover']);
Gn('onPointerEnter', ['pointerout', 'pointerover']);
Gn('onPointerLeave', ['pointerout', 'pointerover']);
yn('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
yn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')
);
yn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
yn('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
yn('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
yn('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var Lr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Mg = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Lr));
function ku(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Lm(r, t, void 0, e), (e.currentTarget = null);
}
function Gd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== s && i.isPropagationStopped())) break e;
          ku(i, l, u), (s = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== s && i.isPropagationStopped())
          )
            break e;
          ku(i, l, u), (s = a);
        }
    }
  }
  if (ls) throw ((e = rl), (ls = !1), (rl = null), e);
}
function V(e, t) {
  var n = t[hl];
  n === void 0 && (n = t[hl] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Kd(t, e, 2, !1), n.add(r));
}
function _o(e, t, n) {
  var r = 0;
  t && (r |= 4), Kd(n, e, r, t);
}
var Ni = '_reactListening' + Math.random().toString(36).slice(2);
function Yr(e) {
  if (!e[Ni]) {
    (e[Ni] = !0),
      rd.forEach(function (n) {
        n !== 'selectionchange' && (Mg.has(n) || _o(n, !1, e), _o(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ni] || ((t[Ni] = !0), _o('selectionchange', !1, t));
  }
}
function Kd(e, t, n, r) {
  switch (jd(t)) {
    case 1:
      var i = Wm;
      break;
    case 4:
      i = qm;
      break;
    default:
      i = oa;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !nl || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function So(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo), a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = sn(l)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  wd(function () {
    var u = s,
      c = na(n),
      h = [];
    e: {
      var d = Qd.get(e);
      if (d !== void 0) {
        var g = aa,
          y = e;
        switch (e) {
          case 'keypress':
            if (Bi(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            g = lg;
            break;
          case 'focusin':
            (y = 'focus'), (g = mo);
            break;
          case 'focusout':
            (y = 'blur'), (g = mo);
            break;
          case 'beforeblur':
          case 'afterblur':
            g = mo;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = hu;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = Gm;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = cg;
            break;
          case Vd:
          case Wd:
          case qd:
            g = Jm;
            break;
          case Xd:
            g = fg;
            break;
          case 'scroll':
            g = Xm;
            break;
          case 'wheel':
            g = pg;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            g = eg;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = mu;
        }
        var w = (t & 4) !== 0,
          x = !w && e === 'scroll',
          p = w ? (d !== null ? d + 'Capture' : null) : d;
        w = [];
        for (var m = u, v; m !== null; ) {
          v = m;
          var E = v.stateNode;
          if (
            (v.tag === 5 &&
              E !== null &&
              ((v = E), p !== null && ((E = Wr(m, p)), E != null && w.push(Jr(m, E, v)))),
            x)
          )
            break;
          m = m.return;
        }
        0 < w.length && ((d = new g(d, y, null, n, c)), h.push({ event: d, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          d && n !== el && (y = n.relatedTarget || n.fromElement) && (sn(y) || y[bt]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? sn(y) : null),
              y !== null && ((x = wn(y)), y !== x || (y.tag !== 5 && y.tag !== 6)) && (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((w = hu),
            (E = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (m = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((w = mu), (E = 'onPointerLeave'), (p = 'onPointerEnter'), (m = 'pointer')),
            (x = g == null ? d : jn(g)),
            (v = y == null ? d : jn(y)),
            (d = new w(E, m + 'leave', g, n, c)),
            (d.target = x),
            (d.relatedTarget = v),
            (E = null),
            sn(c) === u &&
              ((w = new w(p, m + 'enter', y, n, c)),
              (w.target = v),
              (w.relatedTarget = x),
              (E = w)),
            (x = E),
            g && y)
          )
            t: {
              for (w = g, p = y, m = 0, v = w; v; v = _n(v)) m++;
              for (v = 0, E = p; E; E = _n(E)) v++;
              for (; 0 < m - v; ) (w = _n(w)), m--;
              for (; 0 < v - m; ) (p = _n(p)), v--;
              for (; m--; ) {
                if (w === p || (p !== null && w === p.alternate)) break t;
                (w = _n(w)), (p = _n(p));
              }
              w = null;
            }
          else w = null;
          g !== null && Nu(h, d, g, w, !1), y !== null && x !== null && Nu(h, x, y, w, !0);
        }
      }
      e: {
        if (
          ((d = u ? jn(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && d.type === 'file'))
        )
          var C = _g;
        else if (yu(d))
          if (Dd) C = kg;
          else {
            C = Eg;
            var k = Sg;
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (C = Tg);
        if (C && (C = C(e, u))) {
          zd(h, C, n, c);
          break e;
        }
        k && k(e, d, u),
          e === 'focusout' &&
            (k = d._wrapperState) &&
            k.controlled &&
            d.type === 'number' &&
            Go(d, 'number', d.value);
      }
      switch (((k = u ? jn(u) : window), e)) {
        case 'focusin':
          (yu(k) || k.contentEditable === 'true') && ((Mn = k), (ll = u), (Or = null));
          break;
        case 'focusout':
          Or = ll = Mn = null;
          break;
        case 'mousedown':
          al = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (al = !1), Eu(h, n, c);
          break;
        case 'selectionchange':
          if (bg) break;
        case 'keydown':
        case 'keyup':
          Eu(h, n, c);
      }
      var N;
      if (ca)
        e: {
          switch (e) {
            case 'compositionstart':
              var S = 'onCompositionStart';
              break e;
            case 'compositionend':
              S = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              S = 'onCompositionUpdate';
              break e;
          }
          S = void 0;
        }
      else
        An
          ? $d(e, n) && (S = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (S = 'onCompositionStart');
      S &&
        (Rd &&
          n.locale !== 'ko' &&
          (An || S !== 'onCompositionStart'
            ? S === 'onCompositionEnd' && An && (N = Pd())
            : ((Dt = c), (la = 'value' in Dt ? Dt.value : Dt.textContent), (An = !0))),
        (k = fs(u, S)),
        0 < k.length &&
          ((S = new pu(S, e, null, n, c)),
          h.push({ event: S, listeners: k }),
          N ? (S.data = N) : ((N = Od(n)), N !== null && (S.data = N)))),
        (N = gg ? vg(e, n) : yg(e, n)) &&
          ((u = fs(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new pu('onBeforeInput', 'beforeinput', null, n, c)),
            h.push({ event: c, listeners: u }),
            (c.data = N)));
    }
    Gd(h, t);
  });
}
function Jr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function fs(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Wr(e, n)),
      s != null && r.unshift(Jr(e, s, i)),
      (s = Wr(e, t)),
      s != null && r.push(Jr(e, s, i))),
      (e = e.return);
  }
  return r;
}
function _n(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Nu(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = Wr(n, s)), a != null && o.unshift(Jr(n, a, l)))
        : i || ((a = Wr(n, s)), a != null && o.push(Jr(n, a, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Ig = /\r\n?/g,
  jg = /\u0000|\uFFFD/g;
function Cu(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Ig,
      `
`
    )
    .replace(jg, '');
}
function Ci(e, t, n) {
  if (((t = Cu(t)), Cu(e) !== t && n)) throw Error(b(425));
}
function hs() {}
var ul = null,
  cl = null;
function dl(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var fl = typeof setTimeout == 'function' ? setTimeout : void 0,
  Pg = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  bu = typeof Promise == 'function' ? Promise : void 0,
  Rg =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof bu < 'u'
      ? function (e) {
          return bu.resolve(null).then(e).catch($g);
        }
      : fl;
function $g(e) {
  setTimeout(function () {
    throw e;
  });
}
function Eo(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Qr(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = i;
  } while (n);
  Qr(t);
}
function Wt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Lu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ir = Math.random().toString(36).slice(2),
  pt = '__reactFiber$' + ir,
  Zr = '__reactProps$' + ir,
  bt = '__reactContainer$' + ir,
  hl = '__reactEvents$' + ir,
  Og = '__reactListeners$' + ir,
  zg = '__reactHandles$' + ir;
function sn(e) {
  var t = e[pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[bt] || n[pt])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Lu(e); e !== null; ) {
          if ((n = e[pt])) return n;
          e = Lu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ci(e) {
  return (
    (e = e[pt] || e[bt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function jn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(b(33));
}
function Hs(e) {
  return e[Zr] || null;
}
var pl = [],
  Pn = -1;
function en(e) {
  return { current: e };
}
function W(e) {
  0 > Pn || ((e.current = pl[Pn]), (pl[Pn] = null), Pn--);
}
function U(e, t) {
  Pn++, (pl[Pn] = e.current), (e.current = t);
}
var Jt = {},
  _e = en(Jt),
  Re = en(!1),
  dn = Jt;
function Kn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Jt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function $e(e) {
  return (e = e.childContextTypes), e != null;
}
function ps() {
  W(Re), W(_e);
}
function Au(e, t, n) {
  if (_e.current !== Jt) throw Error(b(168));
  U(_e, t), U(Re, n);
}
function Yd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(b(108, Sm(e) || 'Unknown', i));
  return Y({}, n, r);
}
function ms(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Jt),
    (dn = _e.current),
    U(_e, e),
    U(Re, Re.current),
    !0
  );
}
function Mu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(b(169));
  n
    ? ((e = Yd(e, t, dn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(Re),
      W(_e),
      U(_e, e))
    : W(Re),
    U(Re, n);
}
var Et = null,
  Us = !1,
  To = !1;
function Jd(e) {
  Et === null ? (Et = [e]) : Et.push(e);
}
function Dg(e) {
  (Us = !0), Jd(e);
}
function tn() {
  if (!To && Et !== null) {
    To = !0;
    var e = 0,
      t = H;
    try {
      var n = Et;
      for (H = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Et = null), (Us = !1);
    } catch (i) {
      throw (Et !== null && (Et = Et.slice(e + 1)), Ed(ra, tn), i);
    } finally {
      (H = t), (To = !1);
    }
  }
  return null;
}
var Rn = [],
  $n = 0,
  gs = null,
  vs = 0,
  We = [],
  qe = 0,
  fn = null,
  Tt = 1,
  kt = '';
function nn(e, t) {
  (Rn[$n++] = vs), (Rn[$n++] = gs), (gs = e), (vs = t);
}
function Zd(e, t, n) {
  (We[qe++] = Tt), (We[qe++] = kt), (We[qe++] = fn), (fn = e);
  var r = Tt;
  e = kt;
  var i = 32 - st(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - st(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Tt = (1 << (32 - st(t) + i)) | (n << i) | r),
      (kt = s + e);
  } else (Tt = (1 << s) | (n << i) | r), (kt = e);
}
function fa(e) {
  e.return !== null && (nn(e, 1), Zd(e, 1, 0));
}
function ha(e) {
  for (; e === gs; ) (gs = Rn[--$n]), (Rn[$n] = null), (vs = Rn[--$n]), (Rn[$n] = null);
  for (; e === fn; )
    (fn = We[--qe]),
      (We[qe] = null),
      (kt = We[--qe]),
      (We[qe] = null),
      (Tt = We[--qe]),
      (We[qe] = null);
}
var Fe = null,
  De = null,
  Q = !1,
  it = null;
function ef(e, t) {
  var n = Qe(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Iu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Fe = e), (De = Wt(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Fe = e), (De = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = fn !== null ? { id: Tt, overflow: kt } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = Qe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Fe = e),
            (De = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ml(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function gl(e) {
  if (Q) {
    var t = De;
    if (t) {
      var n = t;
      if (!Iu(e, t)) {
        if (ml(e)) throw Error(b(418));
        t = Wt(n.nextSibling);
        var r = Fe;
        t && Iu(e, t) ? ef(r, n) : ((e.flags = (e.flags & -4097) | 2), (Q = !1), (Fe = e));
      }
    } else {
      if (ml(e)) throw Error(b(418));
      (e.flags = (e.flags & -4097) | 2), (Q = !1), (Fe = e);
    }
  }
}
function ju(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Fe = e;
}
function bi(e) {
  if (e !== Fe) return !1;
  if (!Q) return ju(e), (Q = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !dl(e.type, e.memoizedProps))),
    t && (t = De))
  ) {
    if (ml(e)) throw (tf(), Error(b(418)));
    for (; t; ) ef(e, t), (t = Wt(t.nextSibling));
  }
  if ((ju(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(b(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              De = Wt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      De = null;
    }
  } else De = Fe ? Wt(e.stateNode.nextSibling) : null;
  return !0;
}
function tf() {
  for (var e = De; e; ) e = Wt(e.nextSibling);
}
function Yn() {
  (De = Fe = null), (Q = !1);
}
function pa(e) {
  it === null ? (it = [e]) : it.push(e);
}
var Fg = Mt.ReactCurrentBatchConfig;
function nt(e, t) {
  if (e && e.defaultProps) {
    (t = Y({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ys = en(null),
  ws = null,
  On = null,
  ma = null;
function ga() {
  ma = On = ws = null;
}
function va(e) {
  var t = ys.current;
  W(ys), (e._currentValue = t);
}
function vl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function qn(e, t) {
  (ws = e),
    (ma = On = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Pe = !0), (e.firstContext = null));
}
function Je(e) {
  var t = e._currentValue;
  if (ma !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), On === null)) {
      if (ws === null) throw Error(b(308));
      (On = e), (ws.dependencies = { lanes: 0, firstContext: e });
    } else On = On.next = e;
  return t;
}
var on = null;
function ya(e) {
  on === null ? (on = [e]) : on.push(e);
}
function nf(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), ya(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Lt(e, r)
  );
}
function Lt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Pt = !1;
function wa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function rf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Nt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), D & 2)) {
    var i = r.pending;
    return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), Lt(e, n);
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), ya(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Lt(e, n)
  );
}
function Vi(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ia(e, n);
  }
}
function Pu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function xs(e, t, n, r) {
  var i = e.updateQueue;
  Pt = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), o === null ? (s = u) : (o.next = u), (o = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== o && (l === null ? (c.firstBaseUpdate = u) : (l.next = u), (c.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var h = i.baseState;
    (o = 0), (c = u = a = null), (l = s);
    do {
      var d = l.lane,
        g = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            w = l;
          switch (((d = t), (g = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == 'function')) {
                h = y.call(g, h, d);
                break e;
              }
              h = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (((y = w.payload), (d = typeof y == 'function' ? y.call(g, h, d) : y), d == null))
                break e;
              h = Y({}, h, d);
              break e;
            case 2:
              Pt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64), (d = i.effects), d === null ? (i.effects = [l]) : d.push(l));
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (a = h)) : (c = c.next = g),
          (o |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l), (l = d.next), (d.next = null), (i.lastBaseUpdate = d), (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = h),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (pn |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function Ru(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function')) throw Error(b(191, i));
        i.call(r);
      }
    }
}
var sf = new nd.Component().refs;
function yl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Y({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Bs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? wn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      i = Qt(e),
      s = Nt(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = qt(e, s, i)),
      t !== null && (ot(t, e, i, r), Vi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      i = Qt(e),
      s = Nt(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = qt(e, s, i)),
      t !== null && (ot(t, e, i, r), Vi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ke(),
      r = Qt(e),
      i = Nt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = qt(e, i, r)),
      t !== null && (ot(t, e, r, n), Vi(t, e, r));
  },
};
function $u(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Kr(n, r) || !Kr(i, s)
      : !0
  );
}
function of(e, t, n) {
  var r = !1,
    i = Jt,
    s = t.contextType;
  return (
    typeof s == 'object' && s !== null
      ? (s = Je(s))
      : ((i = $e(t) ? dn : _e.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Kn(e, i) : Jt)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Bs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Ou(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Bs.enqueueReplaceState(t, t.state, null);
}
function wl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = sf), wa(e);
  var s = t.contextType;
  typeof s == 'object' && s !== null
    ? (i.context = Je(s))
    : ((s = $e(t) ? dn : _e.current), (i.context = Kn(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == 'function' && (yl(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
      t !== i.state && Bs.enqueueReplaceState(i, i.state, null),
      xs(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function vr(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(b(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(b(147, e));
      var i = r,
        s = '' + e;
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            l === sf && (l = i.refs = {}), o === null ? delete l[s] : (l[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != 'string') throw Error(b(284));
    if (!n._owner) throw Error(b(290, e));
  }
  return e;
}
function Li(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      b(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
    ))
  );
}
function zu(e) {
  var t = e._init;
  return t(e._payload);
}
function lf(e) {
  function t(p, m) {
    if (e) {
      var v = p.deletions;
      v === null ? ((p.deletions = [m]), (p.flags |= 16)) : v.push(m);
    }
  }
  function n(p, m) {
    if (!e) return null;
    for (; m !== null; ) t(p, m), (m = m.sibling);
    return null;
  }
  function r(p, m) {
    for (p = new Map(); m !== null; )
      m.key !== null ? p.set(m.key, m) : p.set(m.index, m), (m = m.sibling);
    return p;
  }
  function i(p, m) {
    return (p = Gt(p, m)), (p.index = 0), (p.sibling = null), p;
  }
  function s(p, m, v) {
    return (
      (p.index = v),
      e
        ? ((v = p.alternate),
          v !== null ? ((v = v.index), v < m ? ((p.flags |= 2), m) : v) : ((p.flags |= 2), m))
        : ((p.flags |= 1048576), m)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, m, v, E) {
    return m === null || m.tag !== 6
      ? ((m = Mo(v, p.mode, E)), (m.return = p), m)
      : ((m = i(m, v)), (m.return = p), m);
  }
  function a(p, m, v, E) {
    var C = v.type;
    return C === Ln
      ? c(p, m, v.props.children, E, v.key)
      : m !== null &&
        (m.elementType === C ||
          (typeof C == 'object' && C !== null && C.$$typeof === jt && zu(C) === m.type))
      ? ((E = i(m, v.props)), (E.ref = vr(p, m, v)), (E.return = p), E)
      : ((E = Ki(v.type, v.key, v.props, null, p.mode, E)),
        (E.ref = vr(p, m, v)),
        (E.return = p),
        E);
  }
  function u(p, m, v, E) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== v.containerInfo ||
      m.stateNode.implementation !== v.implementation
      ? ((m = Io(v, p.mode, E)), (m.return = p), m)
      : ((m = i(m, v.children || [])), (m.return = p), m);
  }
  function c(p, m, v, E, C) {
    return m === null || m.tag !== 7
      ? ((m = un(v, p.mode, E, C)), (m.return = p), m)
      : ((m = i(m, v)), (m.return = p), m);
  }
  function h(p, m, v) {
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return (m = Mo('' + m, p.mode, v)), (m.return = p), m;
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case yi:
          return (
            (v = Ki(m.type, m.key, m.props, null, p.mode, v)),
            (v.ref = vr(p, null, m)),
            (v.return = p),
            v
          );
        case bn:
          return (m = Io(m, p.mode, v)), (m.return = p), m;
        case jt:
          var E = m._init;
          return h(p, E(m._payload), v);
      }
      if (Cr(m) || fr(m)) return (m = un(m, p.mode, v, null)), (m.return = p), m;
      Li(p, m);
    }
    return null;
  }
  function d(p, m, v, E) {
    var C = m !== null ? m.key : null;
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return C !== null ? null : l(p, m, '' + v, E);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case yi:
          return v.key === C ? a(p, m, v, E) : null;
        case bn:
          return v.key === C ? u(p, m, v, E) : null;
        case jt:
          return (C = v._init), d(p, m, C(v._payload), E);
      }
      if (Cr(v) || fr(v)) return C !== null ? null : c(p, m, v, E, null);
      Li(p, v);
    }
    return null;
  }
  function g(p, m, v, E, C) {
    if ((typeof E == 'string' && E !== '') || typeof E == 'number')
      return (p = p.get(v) || null), l(m, p, '' + E, C);
    if (typeof E == 'object' && E !== null) {
      switch (E.$$typeof) {
        case yi:
          return (p = p.get(E.key === null ? v : E.key) || null), a(m, p, E, C);
        case bn:
          return (p = p.get(E.key === null ? v : E.key) || null), u(m, p, E, C);
        case jt:
          var k = E._init;
          return g(p, m, v, k(E._payload), C);
      }
      if (Cr(E) || fr(E)) return (p = p.get(v) || null), c(m, p, E, C, null);
      Li(m, E);
    }
    return null;
  }
  function y(p, m, v, E) {
    for (var C = null, k = null, N = m, S = (m = 0), _ = null; N !== null && S < v.length; S++) {
      N.index > S ? ((_ = N), (N = null)) : (_ = N.sibling);
      var A = d(p, N, v[S], E);
      if (A === null) {
        N === null && (N = _);
        break;
      }
      e && N && A.alternate === null && t(p, N),
        (m = s(A, m, S)),
        k === null ? (C = A) : (k.sibling = A),
        (k = A),
        (N = _);
    }
    if (S === v.length) return n(p, N), Q && nn(p, S), C;
    if (N === null) {
      for (; S < v.length; S++)
        (N = h(p, v[S], E)),
          N !== null && ((m = s(N, m, S)), k === null ? (C = N) : (k.sibling = N), (k = N));
      return Q && nn(p, S), C;
    }
    for (N = r(p, N); S < v.length; S++)
      (_ = g(N, p, S, v[S], E)),
        _ !== null &&
          (e && _.alternate !== null && N.delete(_.key === null ? S : _.key),
          (m = s(_, m, S)),
          k === null ? (C = _) : (k.sibling = _),
          (k = _));
    return (
      e &&
        N.forEach(function (P) {
          return t(p, P);
        }),
      Q && nn(p, S),
      C
    );
  }
  function w(p, m, v, E) {
    var C = fr(v);
    if (typeof C != 'function') throw Error(b(150));
    if (((v = C.call(v)), v == null)) throw Error(b(151));
    for (
      var k = (C = null), N = m, S = (m = 0), _ = null, A = v.next();
      N !== null && !A.done;
      S++, A = v.next()
    ) {
      N.index > S ? ((_ = N), (N = null)) : (_ = N.sibling);
      var P = d(p, N, A.value, E);
      if (P === null) {
        N === null && (N = _);
        break;
      }
      e && N && P.alternate === null && t(p, N),
        (m = s(P, m, S)),
        k === null ? (C = P) : (k.sibling = P),
        (k = P),
        (N = _);
    }
    if (A.done) return n(p, N), Q && nn(p, S), C;
    if (N === null) {
      for (; !A.done; S++, A = v.next())
        (A = h(p, A.value, E)),
          A !== null && ((m = s(A, m, S)), k === null ? (C = A) : (k.sibling = A), (k = A));
      return Q && nn(p, S), C;
    }
    for (N = r(p, N); !A.done; S++, A = v.next())
      (A = g(N, p, S, A.value, E)),
        A !== null &&
          (e && A.alternate !== null && N.delete(A.key === null ? S : A.key),
          (m = s(A, m, S)),
          k === null ? (C = A) : (k.sibling = A),
          (k = A));
    return (
      e &&
        N.forEach(function (T) {
          return t(p, T);
        }),
      Q && nn(p, S),
      C
    );
  }
  function x(p, m, v, E) {
    if (
      (typeof v == 'object' &&
        v !== null &&
        v.type === Ln &&
        v.key === null &&
        (v = v.props.children),
      typeof v == 'object' && v !== null)
    ) {
      switch (v.$$typeof) {
        case yi:
          e: {
            for (var C = v.key, k = m; k !== null; ) {
              if (k.key === C) {
                if (((C = v.type), C === Ln)) {
                  if (k.tag === 7) {
                    n(p, k.sibling), (m = i(k, v.props.children)), (m.return = p), (p = m);
                    break e;
                  }
                } else if (
                  k.elementType === C ||
                  (typeof C == 'object' && C !== null && C.$$typeof === jt && zu(C) === k.type)
                ) {
                  n(p, k.sibling),
                    (m = i(k, v.props)),
                    (m.ref = vr(p, k, v)),
                    (m.return = p),
                    (p = m);
                  break e;
                }
                n(p, k);
                break;
              } else t(p, k);
              k = k.sibling;
            }
            v.type === Ln
              ? ((m = un(v.props.children, p.mode, E, v.key)), (m.return = p), (p = m))
              : ((E = Ki(v.type, v.key, v.props, null, p.mode, E)),
                (E.ref = vr(p, m, v)),
                (E.return = p),
                (p = E));
          }
          return o(p);
        case bn:
          e: {
            for (k = v.key; m !== null; ) {
              if (m.key === k)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === v.containerInfo &&
                  m.stateNode.implementation === v.implementation
                ) {
                  n(p, m.sibling), (m = i(m, v.children || [])), (m.return = p), (p = m);
                  break e;
                } else {
                  n(p, m);
                  break;
                }
              else t(p, m);
              m = m.sibling;
            }
            (m = Io(v, p.mode, E)), (m.return = p), (p = m);
          }
          return o(p);
        case jt:
          return (k = v._init), x(p, m, k(v._payload), E);
      }
      if (Cr(v)) return y(p, m, v, E);
      if (fr(v)) return w(p, m, v, E);
      Li(p, v);
    }
    return (typeof v == 'string' && v !== '') || typeof v == 'number'
      ? ((v = '' + v),
        m !== null && m.tag === 6
          ? (n(p, m.sibling), (m = i(m, v)), (m.return = p), (p = m))
          : (n(p, m), (m = Mo(v, p.mode, E)), (m.return = p), (p = m)),
        o(p))
      : n(p, m);
  }
  return x;
}
var Jn = lf(!0),
  af = lf(!1),
  di = {},
  gt = en(di),
  ei = en(di),
  ti = en(di);
function ln(e) {
  if (e === di) throw Error(b(174));
  return e;
}
function xa(e, t) {
  switch ((U(ti, t), U(ei, e), U(gt, di), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Yo(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Yo(t, e));
  }
  W(gt), U(gt, t);
}
function Zn() {
  W(gt), W(ei), W(ti);
}
function uf(e) {
  ln(ti.current);
  var t = ln(gt.current),
    n = Yo(t, e.type);
  t !== n && (U(ei, e), U(gt, n));
}
function _a(e) {
  ei.current === e && (W(gt), W(ei));
}
var G = en(0);
function _s(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!'))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ko = [];
function Sa() {
  for (var e = 0; e < ko.length; e++) ko[e]._workInProgressVersionPrimary = null;
  ko.length = 0;
}
var Wi = Mt.ReactCurrentDispatcher,
  No = Mt.ReactCurrentBatchConfig,
  hn = 0,
  K = null,
  oe = null,
  ce = null,
  Ss = !1,
  zr = !1,
  ni = 0,
  Hg = 0;
function ge() {
  throw Error(b(321));
}
function Ea(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!lt(e[n], t[n])) return !1;
  return !0;
}
function Ta(e, t, n, r, i, s) {
  if (
    ((hn = s),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Wi.current = e === null || e.memoizedState === null ? Wg : qg),
    (e = n(r, i)),
    zr)
  ) {
    s = 0;
    do {
      if (((zr = !1), (ni = 0), 25 <= s)) throw Error(b(301));
      (s += 1), (ce = oe = null), (t.updateQueue = null), (Wi.current = Xg), (e = n(r, i));
    } while (zr);
  }
  if (
    ((Wi.current = Es),
    (t = oe !== null && oe.next !== null),
    (hn = 0),
    (ce = oe = K = null),
    (Ss = !1),
    t)
  )
    throw Error(b(300));
  return e;
}
function ka() {
  var e = ni !== 0;
  return (ni = 0), e;
}
function dt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ce === null ? (K.memoizedState = ce = e) : (ce = ce.next = e), ce;
}
function Ze() {
  if (oe === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = oe.next;
  var t = ce === null ? K.memoizedState : ce.next;
  if (t !== null) (ce = t), (oe = e);
  else {
    if (e === null) throw Error(b(310));
    (oe = e),
      (e = {
        memoizedState: oe.memoizedState,
        baseState: oe.baseState,
        baseQueue: oe.baseQueue,
        queue: oe.queue,
        next: null,
      }),
      ce === null ? (K.memoizedState = ce = e) : (ce = ce.next = e);
  }
  return ce;
}
function ri(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Co(e) {
  var t = Ze(),
    n = t.queue;
  if (n === null) throw Error(b(311));
  n.lastRenderedReducer = e;
  var r = oe,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var l = (o = null),
      a = null,
      u = s;
    do {
      var c = u.lane;
      if ((hn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var h = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = h), (o = r)) : (a = a.next = h), (K.lanes |= c), (pn |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? (o = r) : (a.next = l),
      lt(r, t.memoizedState) || (Pe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (K.lanes |= s), (pn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function bo(e) {
  var t = Ze(),
    n = t.queue;
  if (n === null) throw Error(b(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    lt(s, t.memoizedState) || (Pe = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function cf() {}
function df(e, t) {
  var n = K,
    r = Ze(),
    i = t(),
    s = !lt(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Pe = !0)),
    (r = r.queue),
    Na(pf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ce !== null && ce.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), ii(9, hf.bind(null, n, r, i, t), void 0, null), de === null))
      throw Error(b(349));
    hn & 30 || ff(n, t, i);
  }
  return i;
}
function ff(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (K.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function hf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), mf(t) && gf(e);
}
function pf(e, t, n) {
  return n(function () {
    mf(t) && gf(e);
  });
}
function mf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !lt(e, n);
  } catch {
    return !0;
  }
}
function gf(e) {
  var t = Lt(e, 1);
  t !== null && ot(t, e, 1, -1);
}
function Du(e) {
  var t = dt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ri,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Vg.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function ii(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (K.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function vf() {
  return Ze().memoizedState;
}
function qi(e, t, n, r) {
  var i = dt();
  (K.flags |= e), (i.memoizedState = ii(1 | t, n, void 0, r === void 0 ? null : r));
}
function Vs(e, t, n, r) {
  var i = Ze();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (oe !== null) {
    var o = oe.memoizedState;
    if (((s = o.destroy), r !== null && Ea(r, o.deps))) {
      i.memoizedState = ii(t, n, s, r);
      return;
    }
  }
  (K.flags |= e), (i.memoizedState = ii(1 | t, n, s, r));
}
function Fu(e, t) {
  return qi(8390656, 8, e, t);
}
function Na(e, t) {
  return Vs(2048, 8, e, t);
}
function yf(e, t) {
  return Vs(4, 2, e, t);
}
function wf(e, t) {
  return Vs(4, 4, e, t);
}
function xf(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function _f(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), Vs(4, 4, xf.bind(null, t, e), n);
}
function Ca() {}
function Sf(e, t) {
  var n = Ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ea(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Ef(e, t) {
  var n = Ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ea(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Tf(e, t, n) {
  return hn & 21
    ? (lt(n, t) || ((n = Nd()), (K.lanes |= n), (pn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Pe = !0)), (e.memoizedState = n));
}
function Ug(e, t) {
  var n = H;
  (H = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = No.transition;
  No.transition = {};
  try {
    e(!1), t();
  } finally {
    (H = n), (No.transition = r);
  }
}
function kf() {
  return Ze().memoizedState;
}
function Bg(e, t, n) {
  var r = Qt(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Nf(e)))
    Cf(t, n);
  else if (((n = nf(e, t, n, r)), n !== null)) {
    var i = ke();
    ot(n, e, r, i), bf(n, t, r);
  }
}
function Vg(e, t, n) {
  var r = Qt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Nf(e)) Cf(t, i);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && ((s = t.lastRenderedReducer), s !== null))
      try {
        var o = t.lastRenderedState,
          l = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), lt(l, o))) {
          var a = t.interleaved;
          a === null ? ((i.next = i), ya(t)) : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = nf(e, t, i, r)), n !== null && ((i = ke()), ot(n, e, r, i), bf(n, t, r));
  }
}
function Nf(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function Cf(e, t) {
  zr = Ss = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function bf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ia(e, n);
  }
}
var Es = {
    readContext: Je,
    useCallback: ge,
    useContext: ge,
    useEffect: ge,
    useImperativeHandle: ge,
    useInsertionEffect: ge,
    useLayoutEffect: ge,
    useMemo: ge,
    useReducer: ge,
    useRef: ge,
    useState: ge,
    useDebugValue: ge,
    useDeferredValue: ge,
    useTransition: ge,
    useMutableSource: ge,
    useSyncExternalStore: ge,
    useId: ge,
    unstable_isNewReconciler: !1,
  },
  Wg = {
    readContext: Je,
    useCallback: function (e, t) {
      return (dt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Je,
    useEffect: Fu,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), qi(4194308, 4, xf.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return qi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return qi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = dt();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = dt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Bg.bind(null, K, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = dt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Du,
    useDebugValue: Ca,
    useDeferredValue: function (e) {
      return (dt().memoizedState = e);
    },
    useTransition: function () {
      var e = Du(!1),
        t = e[0];
      return (e = Ug.bind(null, e[1])), (dt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = K,
        i = dt();
      if (Q) {
        if (n === void 0) throw Error(b(407));
        n = n();
      } else {
        if (((n = t()), de === null)) throw Error(b(349));
        hn & 30 || ff(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        Fu(pf.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        ii(9, hf.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = dt(),
        t = de.identifierPrefix;
      if (Q) {
        var n = kt,
          r = Tt;
        (n = (r & ~(1 << (32 - st(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = ni++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Hg++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  qg = {
    readContext: Je,
    useCallback: Sf,
    useContext: Je,
    useEffect: Na,
    useImperativeHandle: _f,
    useInsertionEffect: yf,
    useLayoutEffect: wf,
    useMemo: Ef,
    useReducer: Co,
    useRef: vf,
    useState: function () {
      return Co(ri);
    },
    useDebugValue: Ca,
    useDeferredValue: function (e) {
      var t = Ze();
      return Tf(t, oe.memoizedState, e);
    },
    useTransition: function () {
      var e = Co(ri)[0],
        t = Ze().memoizedState;
      return [e, t];
    },
    useMutableSource: cf,
    useSyncExternalStore: df,
    useId: kf,
    unstable_isNewReconciler: !1,
  },
  Xg = {
    readContext: Je,
    useCallback: Sf,
    useContext: Je,
    useEffect: Na,
    useImperativeHandle: _f,
    useInsertionEffect: yf,
    useLayoutEffect: wf,
    useMemo: Ef,
    useReducer: bo,
    useRef: vf,
    useState: function () {
      return bo(ri);
    },
    useDebugValue: Ca,
    useDeferredValue: function (e) {
      var t = Ze();
      return oe === null ? (t.memoizedState = e) : Tf(t, oe.memoizedState, e);
    },
    useTransition: function () {
      var e = bo(ri)[0],
        t = Ze().memoizedState;
      return [e, t];
    },
    useMutableSource: cf,
    useSyncExternalStore: df,
    useId: kf,
    unstable_isNewReconciler: !1,
  };
function er(e, t) {
  try {
    var n = '',
      r = t;
    do (n += _m(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Lo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Qg = typeof WeakMap == 'function' ? WeakMap : Map;
function Lf(e, t, n) {
  (n = Nt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ks || ((ks = !0), (Al = r)), xl(e, t);
    }),
    n
  );
}
function Af(e, t, n) {
  (n = Nt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        xl(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == 'function' &&
      (n.callback = function () {
        xl(e, t), typeof r != 'function' && (Xt === null ? (Xt = new Set([this])) : Xt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, { componentStack: o !== null ? o : '' });
      }),
    n
  );
}
function Hu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Qg();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = av.bind(null, e, t, n)), t.then(e, e));
}
function Uu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Bu(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null ? (n.tag = 17) : ((t = Nt(-1, 1)), (t.tag = 2), qt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Gg = Mt.ReactCurrentOwner,
  Pe = !1;
function Se(e, t, n, r) {
  t.child = e === null ? af(t, null, n, r) : Jn(t, e.child, n, r);
}
function Vu(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    qn(t, i),
    (r = Ta(e, t, n, r, s, i)),
    (n = ka()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), At(e, t, i))
      : (Q && n && fa(t), (t.flags |= 1), Se(e, t, r, i), t.child)
  );
}
function Wu(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == 'function' &&
      !Ra(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Mf(e, t, s, r, i))
      : ((e = Ki(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : Kr), n(o, r) && e.ref === t.ref))
      return At(e, t, i);
  }
  return (t.flags |= 1), (e = Gt(s, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Mf(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Kr(s, r) && e.ref === t.ref)
      if (((Pe = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0)) e.flags & 131072 && (Pe = !0);
      else return (t.lanes = e.lanes), At(e, t, i);
  }
  return _l(e, t, n, r, i);
}
function If(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(Dn, ze),
        (ze |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          U(Dn, ze),
          (ze |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        U(Dn, ze),
        (ze |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n), U(Dn, ze), (ze |= r);
  return Se(e, t, i, n), t.child;
}
function jf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function _l(e, t, n, r, i) {
  var s = $e(n) ? dn : _e.current;
  return (
    (s = Kn(t, s)),
    qn(t, i),
    (n = Ta(e, t, n, r, s, i)),
    (r = ka()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), At(e, t, i))
      : (Q && r && fa(t), (t.flags |= 1), Se(e, t, n, i), t.child)
  );
}
function qu(e, t, n, r, i) {
  if ($e(n)) {
    var s = !0;
    ms(t);
  } else s = !1;
  if ((qn(t, i), t.stateNode === null)) Xi(e, t), of(t, n, r), wl(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var a = o.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = Je(u))
      : ((u = $e(n) ? dn : _e.current), (u = Kn(t, u)));
    var c = n.getDerivedStateFromProps,
      h = typeof c == 'function' || typeof o.getSnapshotBeforeUpdate == 'function';
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((l !== r || a !== u) && Ou(t, o, r, u)),
      (Pt = !1);
    var d = t.memoizedState;
    (o.state = d),
      xs(t, r, o, i),
      (a = t.memoizedState),
      l !== r || d !== a || Re.current || Pt
        ? (typeof c == 'function' && (yl(t, n, c, r), (a = t.memoizedState)),
          (l = Pt || $u(t, n, l, r, d, a, u))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' && o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = u),
          (r = l))
        : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
  } else {
    (o = t.stateNode),
      rf(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : nt(t.type, l)),
      (o.props = u),
      (h = t.pendingProps),
      (d = o.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = Je(a))
        : ((a = $e(n) ? dn : _e.current), (a = Kn(t, a)));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((l !== h || d !== a) && Ou(t, o, r, a)),
      (Pt = !1),
      (d = t.memoizedState),
      (o.state = d),
      xs(t, r, o, i);
    var y = t.memoizedState;
    l !== h || d !== y || Re.current || Pt
      ? (typeof g == 'function' && (yl(t, n, g, r), (y = t.memoizedState)),
        (u = Pt || $u(t, n, u, r, d, y, a) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' && o.componentWillUpdate(r, y, a),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, y, a)),
            typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = a),
        (r = u))
      : (typeof o.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Sl(e, t, n, r, s, i);
}
function Sl(e, t, n, r, i, s) {
  jf(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Mu(t, n, !1), At(e, t, s);
  (r = t.stateNode), (Gg.current = t);
  var l = o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Jn(t, e.child, null, s)), (t.child = Jn(t, null, l, s)))
      : Se(e, t, l, s),
    (t.memoizedState = r.state),
    i && Mu(t, n, !0),
    t.child
  );
}
function Pf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Au(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Au(e, t.context, !1),
    xa(e, t.containerInfo);
}
function Xu(e, t, n, r, i) {
  return Yn(), pa(i), (t.flags |= 256), Se(e, t, n, r), t.child;
}
var El = { dehydrated: null, treeContext: null, retryLane: 0 };
function Tl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Rf(e, t, n) {
  var r = t.pendingProps,
    i = G.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l ? ((s = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
    U(G, i & 1),
    e === null)
  )
    return (
      gl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Xs(o, r, 0, null)),
              (e = un(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Tl(n)),
              (t.memoizedState = El),
              e)
            : ba(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Kg(e, t, o, r, l, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = a), (t.deletions = null))
        : ((r = Gt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (s = Gt(l, s)) : ((s = un(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Tl(n)
          : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = El),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Gt(s, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ba(e, t) {
  return (t = Xs({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Ai(e, t, n, r) {
  return (
    r !== null && pa(r),
    Jn(t, e.child, null, n),
    (e = ba(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Kg(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Lo(Error(b(422)))), Ai(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = Xs({ mode: 'visible', children: r.children }, i, 0, null)),
        (s = un(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && Jn(t, e.child, null, o),
        (t.child.memoizedState = Tl(o)),
        (t.memoizedState = El),
        s);
  if (!(t.mode & 1)) return Ai(e, t, o, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(b(419))), (r = Lo(s, r, void 0)), Ai(e, t, o, r);
  }
  if (((l = (o & e.childLanes) !== 0), Pe || l)) {
    if (((r = de), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 && i !== s.retryLane && ((s.retryLane = i), Lt(e, i), ot(r, e, i, -1));
    }
    return Pa(), (r = Lo(Error(b(421)))), Ai(e, t, o, r);
  }
  return i.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = uv.bind(null, e)), (i._reactRetry = t), null)
    : ((e = s.treeContext),
      (De = Wt(i.nextSibling)),
      (Fe = t),
      (Q = !0),
      (it = null),
      e !== null &&
        ((We[qe++] = Tt),
        (We[qe++] = kt),
        (We[qe++] = fn),
        (Tt = e.id),
        (kt = e.overflow),
        (fn = t)),
      (t = ba(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Qu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), vl(e.return, t, n);
}
function Ao(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function $f(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Se(e, t, r.children, n), (r = G.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Qu(e, n, t);
        else if (e.tag === 19) Qu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((U(G, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate), e !== null && _s(e) === null && (i = n), (n = n.sibling);
        (n = i),
          n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
          Ao(t, !1, i, n, s);
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && _s(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ao(t, !0, n, null, s);
        break;
      case 'together':
        Ao(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Xi(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function At(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (pn |= t.lanes), !(n & t.childLanes)))
    return null;
  if (e !== null && t.child !== e.child) throw Error(b(153));
  if (t.child !== null) {
    for (e = t.child, n = Gt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = Gt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Yg(e, t, n) {
  switch (t.tag) {
    case 3:
      Pf(t), Yn();
      break;
    case 5:
      uf(t);
      break;
    case 1:
      $e(t.type) && ms(t);
      break;
    case 4:
      xa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      U(ys, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(G, G.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Rf(e, t, n)
          : (U(G, G.current & 1), (e = At(e, t, n)), e !== null ? e.sibling : null);
      U(G, G.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return $f(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        U(G, G.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), If(e, t, n);
  }
  return At(e, t, n);
}
var Of, kl, zf, Df;
Of = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
kl = function () {};
zf = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), ln(gt.current);
    var s = null;
    switch (n) {
      case 'input':
        (i = Xo(e, i)), (r = Xo(e, r)), (s = []);
        break;
      case 'select':
        (i = Y({}, i, { value: void 0 })), (r = Y({}, r, { value: void 0 })), (s = []);
        break;
      case 'textarea':
        (i = Ko(e, i)), (r = Ko(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = hs);
    }
    Jo(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var l = i[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Br.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === 'style')
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) || (a && a.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ''));
            for (o in a) a.hasOwnProperty(o) && l[o] !== a[o] && (n || (n = {}), (n[o] = a[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = a);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(u, a))
            : u === 'children'
            ? (typeof a != 'string' && typeof a != 'number') || (s = s || []).push(u, '' + a)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (Br.hasOwnProperty(u)
                ? (a != null && u === 'onScroll' && V('scroll', e), s || l === a || (s = []))
                : (s = s || []).push(u, a));
    }
    n && (s = s || []).push('style', n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Df = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yr(e, t) {
  if (!Q)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ve(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Jg(e, t, n) {
  var r = t.pendingProps;
  switch ((ha(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ve(t), null;
    case 1:
      return $e(t.type) && ps(), ve(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Zn(),
        W(Re),
        W(_e),
        Sa(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (bi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), it !== null && (jl(it), (it = null)))),
        kl(e, t),
        ve(t),
        null
      );
    case 5:
      _a(t);
      var i = ln(ti.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        zf(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(b(166));
          return ve(t), null;
        }
        if (((e = ln(gt.current)), bi(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[pt] = t), (r[Zr] = s), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              V('cancel', r), V('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              V('load', r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < Lr.length; i++) V(Lr[i], r);
              break;
            case 'source':
              V('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              V('error', r), V('load', r);
              break;
            case 'details':
              V('toggle', r);
              break;
            case 'input':
              ru(r, s), V('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!s.multiple }), V('invalid', r);
              break;
            case 'textarea':
              su(r, s), V('invalid', r);
          }
          Jo(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 && Ci(r.textContent, l, e),
                    (i = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (s.suppressHydrationWarning !== !0 && Ci(r.textContent, l, e),
                    (i = ['children', '' + l]))
                : Br.hasOwnProperty(o) && l != null && o === 'onScroll' && V('scroll', r);
            }
          switch (n) {
            case 'input':
              wi(r), iu(r, s, !0);
              break;
            case 'textarea':
              wi(r), ou(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof s.onClick == 'function' && (r.onclick = hs);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = dd(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = o.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === 'select' &&
                    ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[pt] = t),
            (e[Zr] = r),
            Of(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Zo(n, r)), n)) {
              case 'dialog':
                V('cancel', e), V('close', e), (i = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                V('load', e), (i = r);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < Lr.length; i++) V(Lr[i], e);
                i = r;
                break;
              case 'source':
                V('error', e), (i = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                V('error', e), V('load', e), (i = r);
                break;
              case 'details':
                V('toggle', e), (i = r);
                break;
              case 'input':
                ru(e, r), (i = Xo(e, r)), V('invalid', e);
                break;
              case 'option':
                i = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Y({}, r, { value: void 0 })),
                  V('invalid', e);
                break;
              case 'textarea':
                su(e, r), (i = Ko(e, r)), V('invalid', e);
                break;
              default:
                i = r;
            }
            Jo(n, i), (l = i);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === 'style'
                  ? pd(e, a)
                  : s === 'dangerouslySetInnerHTML'
                  ? ((a = a ? a.__html : void 0), a != null && fd(e, a))
                  : s === 'children'
                  ? typeof a == 'string'
                    ? (n !== 'textarea' || a !== '') && Vr(e, a)
                    : typeof a == 'number' && Vr(e, '' + a)
                  : s !== 'suppressContentEditableWarning' &&
                    s !== 'suppressHydrationWarning' &&
                    s !== 'autoFocus' &&
                    (Br.hasOwnProperty(s)
                      ? a != null && s === 'onScroll' && V('scroll', e)
                      : a != null && Jl(e, s, a, o));
              }
            switch (n) {
              case 'input':
                wi(e), iu(e, r, !1);
                break;
              case 'textarea':
                wi(e), ou(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Yt(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Un(e, !!r.multiple, s, !1)
                    : r.defaultValue != null && Un(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (e.onclick = hs);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ve(t), null;
    case 6:
      if (e && t.stateNode != null) Df(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(b(166));
        if (((n = ln(ti.current)), ln(gt.current), bi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[pt] = t),
            (s = r.nodeValue !== n) && ((e = Fe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ci(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ci(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[pt] = t),
            (t.stateNode = r);
      }
      return ve(t), null;
    case 13:
      if (
        (W(G),
        (r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Q && De !== null && t.mode & 1 && !(t.flags & 128))
          tf(), Yn(), (t.flags |= 98560), (s = !1);
        else if (((s = bi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(b(318));
            if (((s = t.memoizedState), (s = s !== null ? s.dehydrated : null), !s))
              throw Error(b(317));
            s[pt] = t;
          } else Yn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ve(t), (s = !1);
        } else it !== null && (jl(it), (it = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || G.current & 1 ? le === 0 && (le = 3) : Pa())),
          t.updateQueue !== null && (t.flags |= 4),
          ve(t),
          null);
    case 4:
      return Zn(), kl(e, t), e === null && Yr(t.stateNode.containerInfo), ve(t), null;
    case 10:
      return va(t.type._context), ve(t), null;
    case 17:
      return $e(t.type) && ps(), ve(t), null;
    case 19:
      if ((W(G), (s = t.memoizedState), s === null)) return ve(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) yr(s, !1);
        else {
          if (le !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = _s(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    yr(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return U(G, (G.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            ee() > tr &&
            ((t.flags |= 128), (r = !0), yr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = _s(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yr(s, !0),
              s.tail === null && s.tailMode === 'hidden' && !o.alternate && !Q)
            )
              return ve(t), null;
          } else
            2 * ee() - s.renderingStartTime > tr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yr(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last), n !== null ? (n.sibling = o) : (t.child = o), (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = ee()),
          (t.sibling = null),
          (n = G.current),
          U(G, r ? (n & 1) | 2 : n & 1),
          t)
        : (ve(t), null);
    case 22:
    case 23:
      return (
        ja(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ze & 1073741824 && (ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ve(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(b(156, t.tag));
}
function Zg(e, t) {
  switch ((ha(t), t.tag)) {
    case 1:
      return (
        $e(t.type) && ps(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Zn(),
        W(Re),
        W(_e),
        Sa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return _a(t), null;
    case 13:
      if ((W(G), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(b(340));
        Yn();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return W(G), null;
    case 4:
      return Zn(), null;
    case 10:
      return va(t.type._context), null;
    case 22:
    case 23:
      return ja(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Mi = !1,
  we = !1,
  ev = typeof WeakSet == 'function' ? WeakSet : Set,
  I = null;
function zn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else n.current = null;
}
function Nl(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var Gu = !1;
function tv(e, t) {
  if (((ul = cs), (e = Ud()), da(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            h = e,
            d = null;
          t: for (;;) {
            for (
              var g;
              h !== n || (i !== 0 && h.nodeType !== 3) || (l = o + i),
                h !== s || (r !== 0 && h.nodeType !== 3) || (a = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (g = h.firstChild) !== null;

            )
              (d = h), (h = g);
            for (;;) {
              if (h === e) break t;
              if (
                (d === n && ++u === i && (l = o),
                d === s && ++c === r && (a = o),
                (g = h.nextSibling) !== null)
              )
                break;
              (h = d), (d = h.parentNode);
            }
            h = g;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (cl = { focusedElem: e, selectionRange: n }, cs = !1, I = t; I !== null; )
    if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (I = e);
    else
      for (; I !== null; ) {
        t = I;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    x = y.memoizedState,
                    p = t.stateNode,
                    m = p.getSnapshotBeforeUpdate(t.elementType === t.type ? w : nt(t.type, w), x);
                  p.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = '')
                  : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(b(163));
            }
        } catch (E) {
          Z(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (I = e);
          break;
        }
        I = t.return;
      }
  return (y = Gu), (Gu = !1), y;
}
function Dr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Nl(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ws(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Cl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Ff(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ff(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null && (delete t[pt], delete t[Zr], delete t[hl], delete t[Og], delete t[zg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Hf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ku(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Hf(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function bl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = hs));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bl(e, t, n), e = e.sibling; e !== null; ) bl(e, t, n), (e = e.sibling);
}
function Ll(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ll(e, t, n), e = e.sibling; e !== null; ) Ll(e, t, n), (e = e.sibling);
}
var fe = null,
  rt = !1;
function It(e, t, n) {
  for (n = n.child; n !== null; ) Uf(e, t, n), (n = n.sibling);
}
function Uf(e, t, n) {
  if (mt && typeof mt.onCommitFiberUnmount == 'function')
    try {
      mt.onCommitFiberUnmount(Os, n);
    } catch {}
  switch (n.tag) {
    case 5:
      we || zn(n, t);
    case 6:
      var r = fe,
        i = rt;
      (fe = null),
        It(e, t, n),
        (fe = r),
        (rt = i),
        fe !== null &&
          (rt
            ? ((e = fe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : fe.removeChild(n.stateNode));
      break;
    case 18:
      fe !== null &&
        (rt
          ? ((e = fe),
            (n = n.stateNode),
            e.nodeType === 8 ? Eo(e.parentNode, n) : e.nodeType === 1 && Eo(e, n),
            Qr(e))
          : Eo(fe, n.stateNode));
      break;
    case 4:
      (r = fe),
        (i = rt),
        (fe = n.stateNode.containerInfo),
        (rt = !0),
        It(e, t, n),
        (fe = r),
        (rt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!we && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag), o !== void 0 && (s & 2 || s & 4) && Nl(n, t, o), (i = i.next);
        } while (i !== r);
      }
      It(e, t, n);
      break;
    case 1:
      if (!we && (zn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (l) {
          Z(n, t, l);
        }
      It(e, t, n);
      break;
    case 21:
      It(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((we = (r = we) || n.memoizedState !== null), It(e, t, n), (we = r))
        : It(e, t, n);
      break;
    default:
      It(e, t, n);
  }
}
function Yu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ev()),
      t.forEach(function (r) {
        var i = cv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function tt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (fe = l.stateNode), (rt = !1);
              break e;
            case 3:
              (fe = l.stateNode.containerInfo), (rt = !0);
              break e;
            case 4:
              (fe = l.stateNode.containerInfo), (rt = !0);
              break e;
          }
          l = l.return;
        }
        if (fe === null) throw Error(b(160));
        Uf(s, o, i), (fe = null), (rt = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        Z(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Bf(t, e), (t = t.sibling);
}
function Bf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((tt(t, e), at(e), r & 4)) {
        try {
          Dr(3, e, e.return), Ws(3, e);
        } catch (w) {
          Z(e, e.return, w);
        }
        try {
          Dr(5, e, e.return);
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      break;
    case 1:
      tt(t, e), at(e), r & 512 && n !== null && zn(n, n.return);
      break;
    case 5:
      if ((tt(t, e), at(e), r & 512 && n !== null && zn(n, n.return), e.flags & 32)) {
        var i = e.stateNode;
        try {
          Vr(i, '');
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === 'input' && s.type === 'radio' && s.name != null && ud(i, s), Zo(l, o);
            var u = Zo(l, s);
            for (o = 0; o < a.length; o += 2) {
              var c = a[o],
                h = a[o + 1];
              c === 'style'
                ? pd(i, h)
                : c === 'dangerouslySetInnerHTML'
                ? fd(i, h)
                : c === 'children'
                ? Vr(i, h)
                : Jl(i, c, h, u);
            }
            switch (l) {
              case 'input':
                Qo(i, s);
                break;
              case 'textarea':
                cd(i, s);
                break;
              case 'select':
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var g = s.value;
                g != null
                  ? Un(i, !!s.multiple, g, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Un(i, !!s.multiple, s.defaultValue, !0)
                      : Un(i, !!s.multiple, s.multiple ? [] : '', !1));
            }
            i[Zr] = s;
          } catch (w) {
            Z(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((tt(t, e), at(e), r & 4)) {
        if (e.stateNode === null) throw Error(b(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      break;
    case 3:
      if ((tt(t, e), at(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Qr(t.containerInfo);
        } catch (w) {
          Z(e, e.return, w);
        }
      break;
    case 4:
      tt(t, e), at(e);
      break;
    case 13:
      tt(t, e),
        at(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s || (i.alternate !== null && i.alternate.memoizedState !== null) || (Ma = ee())),
        r & 4 && Yu(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((we = (u = we) || c), tt(t, e), (we = u)) : tt(t, e),
        at(e),
        r & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
          for (I = e, c = e.child; c !== null; ) {
            for (h = I = c; I !== null; ) {
              switch (((d = I), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Dr(4, d, d.return);
                  break;
                case 1:
                  zn(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      Z(r, n, w);
                    }
                  }
                  break;
                case 5:
                  zn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Zu(h);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (I = g)) : Zu(h);
            }
            c = c.sibling;
          }
        e: for (c = null, h = e; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                (i = h.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == 'function'
                        ? s.setProperty('display', 'none', 'important')
                        : (s.display = 'none'))
                    : ((l = h.stateNode),
                      (a = h.memoizedProps.style),
                      (o = a != null && a.hasOwnProperty('display') ? a.display : null),
                      (l.style.display = hd('display', o)));
              } catch (w) {
                Z(e, e.return, w);
              }
            }
          } else if (h.tag === 6) {
            if (c === null)
              try {
                h.stateNode.nodeValue = u ? '' : h.memoizedProps;
              } catch (w) {
                Z(e, e.return, w);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) || h.memoizedState === null || h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            c === h && (c = null), (h = h.return);
          }
          c === h && (c = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      tt(t, e), at(e), r & 4 && Yu(e);
      break;
    case 21:
      break;
    default:
      tt(t, e), at(e);
  }
}
function at(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Hf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(b(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Vr(i, ''), (r.flags &= -33));
          var s = Ku(e);
          Ll(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = Ku(e);
          bl(e, l, o);
          break;
        default:
          throw Error(b(161));
      }
    } catch (a) {
      Z(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function nv(e, t, n) {
  (I = e), Vf(e);
}
function Vf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var i = I,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Mi;
      if (!o) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || we;
        l = Mi;
        var u = we;
        if (((Mi = o), (we = a) && !u))
          for (I = i; I !== null; )
            (o = I),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? ec(i)
                : a !== null
                ? ((a.return = o), (I = a))
                : ec(i);
        for (; s !== null; ) (I = s), Vf(s), (s = s.sibling);
        (I = i), (Mi = l), (we = u);
      }
      Ju(e);
    } else i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (I = s)) : Ju(e);
  }
}
function Ju(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              we || Ws(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !we)
                if (n === null) r.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : nt(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var s = t.updateQueue;
              s !== null && Ru(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ru(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus();
                    break;
                  case 'img':
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var h = c.dehydrated;
                    h !== null && Qr(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(b(163));
          }
        we || (t.flags & 512 && Cl(t));
      } catch (d) {
        Z(t, t.return, d);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Zu(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function ec(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ws(4, t);
          } catch (a) {
            Z(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Z(t, i, a);
            }
          }
          var s = t.return;
          try {
            Cl(t);
          } catch (a) {
            Z(t, s, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Cl(t);
          } catch (a) {
            Z(t, o, a);
          }
      }
    } catch (a) {
      Z(t, t.return, a);
    }
    if (t === e) {
      I = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (I = l);
      break;
    }
    I = t.return;
  }
}
var rv = Math.ceil,
  Ts = Mt.ReactCurrentDispatcher,
  La = Mt.ReactCurrentOwner,
  Ye = Mt.ReactCurrentBatchConfig,
  D = 0,
  de = null,
  ie = null,
  pe = 0,
  ze = 0,
  Dn = en(0),
  le = 0,
  si = null,
  pn = 0,
  qs = 0,
  Aa = 0,
  Fr = null,
  Me = null,
  Ma = 0,
  tr = 1 / 0,
  St = null,
  ks = !1,
  Al = null,
  Xt = null,
  Ii = !1,
  Ft = null,
  Ns = 0,
  Hr = 0,
  Ml = null,
  Qi = -1,
  Gi = 0;
function ke() {
  return D & 6 ? ee() : Qi !== -1 ? Qi : (Qi = ee());
}
function Qt(e) {
  return e.mode & 1
    ? D & 2 && pe !== 0
      ? pe & -pe
      : Fg.transition !== null
      ? (Gi === 0 && (Gi = Nd()), Gi)
      : ((e = H), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : jd(e.type))), e)
    : 1;
}
function ot(e, t, n, r) {
  if (50 < Hr) throw ((Hr = 0), (Ml = null), Error(b(185)));
  ai(e, n, r),
    (!(D & 2) || e !== de) &&
      (e === de && (!(D & 2) && (qs |= n), le === 4 && zt(e, pe)),
      Oe(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((tr = ee() + 500), Us && tn()));
}
function Oe(e, t) {
  var n = e.callbackNode;
  Fm(e, t);
  var r = us(e, e === de ? pe : 0);
  if (r === 0) n !== null && uu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && uu(n), t === 1))
      e.tag === 0 ? Dg(tc.bind(null, e)) : Jd(tc.bind(null, e)),
        Rg(function () {
          !(D & 6) && tn();
        }),
        (n = null);
    else {
      switch (Cd(r)) {
        case 1:
          n = ra;
          break;
        case 4:
          n = Td;
          break;
        case 16:
          n = as;
          break;
        case 536870912:
          n = kd;
          break;
        default:
          n = as;
      }
      n = Jf(n, Wf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Wf(e, t) {
  if (((Qi = -1), (Gi = 0), D & 6)) throw Error(b(327));
  var n = e.callbackNode;
  if (Xn() && e.callbackNode !== n) return null;
  var r = us(e, e === de ? pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Cs(e, r);
  else {
    t = r;
    var i = D;
    D |= 2;
    var s = Xf();
    (de !== e || pe !== t) && ((St = null), (tr = ee() + 500), an(e, t));
    do
      try {
        ov();
        break;
      } catch (l) {
        qf(e, l);
      }
    while (!0);
    ga(), (Ts.current = s), (D = i), ie !== null ? (t = 0) : ((de = null), (pe = 0), (t = le));
  }
  if (t !== 0) {
    if ((t === 2 && ((i = il(e)), i !== 0 && ((r = i), (t = Il(e, i)))), t === 1))
      throw ((n = si), an(e, 0), zt(e, r), Oe(e, ee()), n);
    if (t === 6) zt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !iv(i) &&
          ((t = Cs(e, r)), t === 2 && ((s = il(e)), s !== 0 && ((r = s), (t = Il(e, s)))), t === 1))
      )
        throw ((n = si), an(e, 0), zt(e, r), Oe(e, ee()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(b(345));
        case 2:
          rn(e, Me, St);
          break;
        case 3:
          if ((zt(e, r), (r & 130023424) === r && ((t = Ma + 500 - ee()), 10 < t))) {
            if (us(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ke(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = fl(rn.bind(null, e, Me, St), t);
            break;
          }
          rn(e, Me, St);
          break;
        case 4:
          if ((zt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - st(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = ee() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * rv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = fl(rn.bind(null, e, Me, St), r);
            break;
          }
          rn(e, Me, St);
          break;
        case 5:
          rn(e, Me, St);
          break;
        default:
          throw Error(b(329));
      }
    }
  }
  return Oe(e, ee()), e.callbackNode === n ? Wf.bind(null, e) : null;
}
function Il(e, t) {
  var n = Fr;
  return (
    e.current.memoizedState.isDehydrated && (an(e, t).flags |= 256),
    (e = Cs(e, t)),
    e !== 2 && ((t = Me), (Me = n), t !== null && jl(t)),
    e
  );
}
function jl(e) {
  Me === null ? (Me = e) : Me.push.apply(Me, e);
}
function iv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!lt(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function zt(e, t) {
  for (
    t &= ~Aa, t &= ~qs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - st(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function tc(e) {
  if (D & 6) throw Error(b(327));
  Xn();
  var t = us(e, 0);
  if (!(t & 1)) return Oe(e, ee()), null;
  var n = Cs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = il(e);
    r !== 0 && ((t = r), (n = Il(e, r)));
  }
  if (n === 1) throw ((n = si), an(e, 0), zt(e, t), Oe(e, ee()), n);
  if (n === 6) throw Error(b(345));
  return (
    (e.finishedWork = e.current.alternate), (e.finishedLanes = t), rn(e, Me, St), Oe(e, ee()), null
  );
}
function Ia(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && ((tr = ee() + 500), Us && tn());
  }
}
function mn(e) {
  Ft !== null && Ft.tag === 0 && !(D & 6) && Xn();
  var t = D;
  D |= 1;
  var n = Ye.transition,
    r = H;
  try {
    if (((Ye.transition = null), (H = 1), e)) return e();
  } finally {
    (H = r), (Ye.transition = n), (D = t), !(D & 6) && tn();
  }
}
function ja() {
  (ze = Dn.current), W(Dn);
}
function an(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Pg(n)), ie !== null))
    for (n = ie.return; n !== null; ) {
      var r = n;
      switch ((ha(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ps();
          break;
        case 3:
          Zn(), W(Re), W(_e), Sa();
          break;
        case 5:
          _a(r);
          break;
        case 4:
          Zn();
          break;
        case 13:
          W(G);
          break;
        case 19:
          W(G);
          break;
        case 10:
          va(r.type._context);
          break;
        case 22:
        case 23:
          ja();
      }
      n = n.return;
    }
  if (
    ((de = e),
    (ie = e = Gt(e.current, null)),
    (pe = ze = t),
    (le = 0),
    (si = null),
    (Aa = qs = pn = 0),
    (Me = Fr = null),
    on !== null)
  ) {
    for (t = 0; t < on.length; t++)
      if (((n = on[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    on = null;
  }
  return e;
}
function qf(e, t) {
  do {
    var n = ie;
    try {
      if ((ga(), (Wi.current = Es), Ss)) {
        for (var r = K.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Ss = !1;
      }
      if (
        ((hn = 0),
        (ce = oe = K = null),
        (zr = !1),
        (ni = 0),
        (La.current = null),
        n === null || n.return === null)
      ) {
        (le = 1), (si = t), (ie = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          l = n,
          a = t;
        if (
          ((t = pe),
          (l.flags |= 32768),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var u = a,
            c = l,
            h = c.tag;
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = Uu(o);
          if (g !== null) {
            (g.flags &= -257), Bu(g, o, l, s, t), g.mode & 1 && Hu(s, u, t), (t = g), (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Hu(s, u, t), Pa();
              break e;
            }
            a = Error(b(426));
          }
        } else if (Q && l.mode & 1) {
          var x = Uu(o);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), Bu(x, o, l, s, t), pa(er(a, l));
            break e;
          }
        }
        (s = a = er(a, l)), le !== 4 && (le = 2), Fr === null ? (Fr = [s]) : Fr.push(s), (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var p = Lf(s, a, t);
              Pu(s, p);
              break e;
            case 1:
              l = a;
              var m = s.type,
                v = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof m.getDerivedStateFromError == 'function' ||
                  (v !== null &&
                    typeof v.componentDidCatch == 'function' &&
                    (Xt === null || !Xt.has(v))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var E = Af(s, l, t);
                Pu(s, E);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Gf(n);
    } catch (C) {
      (t = C), ie === n && n !== null && (ie = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Xf() {
  var e = Ts.current;
  return (Ts.current = Es), e === null ? Es : e;
}
function Pa() {
  (le === 0 || le === 3 || le === 2) && (le = 4),
    de === null || (!(pn & 268435455) && !(qs & 268435455)) || zt(de, pe);
}
function Cs(e, t) {
  var n = D;
  D |= 2;
  var r = Xf();
  (de !== e || pe !== t) && ((St = null), an(e, t));
  do
    try {
      sv();
      break;
    } catch (i) {
      qf(e, i);
    }
  while (!0);
  if ((ga(), (D = n), (Ts.current = r), ie !== null)) throw Error(b(261));
  return (de = null), (pe = 0), le;
}
function sv() {
  for (; ie !== null; ) Qf(ie);
}
function ov() {
  for (; ie !== null && !Mm(); ) Qf(ie);
}
function Qf(e) {
  var t = Yf(e.alternate, e, ze);
  (e.memoizedProps = e.pendingProps), t === null ? Gf(e) : (ie = t), (La.current = null);
}
function Gf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Zg(n, t)), n !== null)) {
        (n.flags &= 32767), (ie = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (le = 6), (ie = null);
        return;
      }
    } else if (((n = Jg(n, t, ze)), n !== null)) {
      ie = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ie = t;
      return;
    }
    ie = t = e;
  } while (t !== null);
  le === 0 && (le = 5);
}
function rn(e, t, n) {
  var r = H,
    i = Ye.transition;
  try {
    (Ye.transition = null), (H = 1), lv(e, t, n, r);
  } finally {
    (Ye.transition = i), (H = r);
  }
  return null;
}
function lv(e, t, n, r) {
  do Xn();
  while (Ft !== null);
  if (D & 6) throw Error(b(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(b(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (Hm(e, s),
    e === de && ((ie = de = null), (pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ii ||
      ((Ii = !0),
      Jf(as, function () {
        return Xn(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Ye.transition), (Ye.transition = null);
    var o = H;
    H = 1;
    var l = D;
    (D |= 4),
      (La.current = null),
      tv(e, n),
      Bf(n, e),
      Cg(cl),
      (cs = !!ul),
      (cl = ul = null),
      (e.current = n),
      nv(n),
      Im(),
      (D = l),
      (H = o),
      (Ye.transition = s);
  } else e.current = n;
  if (
    (Ii && ((Ii = !1), (Ft = e), (Ns = i)),
    (s = e.pendingLanes),
    s === 0 && (Xt = null),
    Rm(n.stateNode),
    Oe(e, ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ks) throw ((ks = !1), (e = Al), (Al = null), e);
  return (
    Ns & 1 && e.tag !== 0 && Xn(),
    (s = e.pendingLanes),
    s & 1 ? (e === Ml ? Hr++ : ((Hr = 0), (Ml = e))) : (Hr = 0),
    tn(),
    null
  );
}
function Xn() {
  if (Ft !== null) {
    var e = Cd(Ns),
      t = Ye.transition,
      n = H;
    try {
      if (((Ye.transition = null), (H = 16 > e ? 16 : e), Ft === null)) var r = !1;
      else {
        if (((e = Ft), (Ft = null), (Ns = 0), D & 6)) throw Error(b(331));
        var i = D;
        for (D |= 4, I = e.current; I !== null; ) {
          var s = I,
            o = s.child;
          if (I.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (I = u; I !== null; ) {
                  var c = I;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Dr(8, c, s);
                  }
                  var h = c.child;
                  if (h !== null) (h.return = c), (I = h);
                  else
                    for (; I !== null; ) {
                      c = I;
                      var d = c.sibling,
                        g = c.return;
                      if ((Ff(c), c === u)) {
                        I = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = g), (I = d);
                        break;
                      }
                      I = g;
                    }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var x = w.sibling;
                    (w.sibling = null), (w = x);
                  } while (w !== null);
                }
              }
              I = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (I = o);
          else
            e: for (; I !== null; ) {
              if (((s = I), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Dr(9, s, s.return);
                }
              var p = s.sibling;
              if (p !== null) {
                (p.return = s.return), (I = p);
                break e;
              }
              I = s.return;
            }
        }
        var m = e.current;
        for (I = m; I !== null; ) {
          o = I;
          var v = o.child;
          if (o.subtreeFlags & 2064 && v !== null) (v.return = o), (I = v);
          else
            e: for (o = m; I !== null; ) {
              if (((l = I), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ws(9, l);
                  }
                } catch (C) {
                  Z(l, l.return, C);
                }
              if (l === o) {
                I = null;
                break e;
              }
              var E = l.sibling;
              if (E !== null) {
                (E.return = l.return), (I = E);
                break e;
              }
              I = l.return;
            }
        }
        if (((D = i), tn(), mt && typeof mt.onPostCommitFiberRoot == 'function'))
          try {
            mt.onPostCommitFiberRoot(Os, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (H = n), (Ye.transition = t);
    }
  }
  return !1;
}
function nc(e, t, n) {
  (t = er(n, t)),
    (t = Lf(e, t, 1)),
    (e = qt(e, t, 1)),
    (t = ke()),
    e !== null && (ai(e, 1, t), Oe(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) nc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        nc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (Xt === null || !Xt.has(r)))
        ) {
          (e = er(n, e)),
            (e = Af(t, e, 1)),
            (t = qt(t, e, 1)),
            (e = ke()),
            t !== null && (ai(t, 1, e), Oe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function av(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ke()),
    (e.pingedLanes |= e.suspendedLanes & n),
    de === e &&
      (pe & n) === n &&
      (le === 4 || (le === 3 && (pe & 130023424) === pe && 500 > ee() - Ma) ? an(e, 0) : (Aa |= n)),
    Oe(e, t);
}
function Kf(e, t) {
  t === 0 && (e.mode & 1 ? ((t = Si), (Si <<= 1), !(Si & 130023424) && (Si = 4194304)) : (t = 1));
  var n = ke();
  (e = Lt(e, t)), e !== null && (ai(e, t, n), Oe(e, n));
}
function uv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Kf(e, n);
}
function cv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(b(314));
  }
  r !== null && r.delete(t), Kf(e, n);
}
var Yf;
Yf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Re.current) Pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Pe = !1), Yg(e, t, n);
      Pe = !!(e.flags & 131072);
    }
  else (Pe = !1), Q && t.flags & 1048576 && Zd(t, vs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Xi(e, t), (e = t.pendingProps);
      var i = Kn(t, _e.current);
      qn(t, n), (i = Ta(null, t, r, e, i, n));
      var s = ka();
      return (
        (t.flags |= 1),
        typeof i == 'object' && i !== null && typeof i.render == 'function' && i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            $e(r) ? ((s = !0), ms(t)) : (s = !1),
            (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            wa(t),
            (i.updater = Bs),
            (t.stateNode = i),
            (i._reactInternals = t),
            wl(t, r, e, n),
            (t = Sl(null, t, r, !0, s, n)))
          : ((t.tag = 0), Q && s && fa(t), Se(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Xi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = fv(r)),
          (e = nt(r, e)),
          i)
        ) {
          case 0:
            t = _l(null, t, r, e, n);
            break e;
          case 1:
            t = qu(null, t, r, e, n);
            break e;
          case 11:
            t = Vu(null, t, r, e, n);
            break e;
          case 14:
            t = Wu(null, t, r, nt(r.type, e), n);
            break e;
        }
        throw Error(b(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : nt(r, i)),
        _l(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : nt(r, i)),
        qu(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Pf(t), e === null)) throw Error(b(387));
        (r = t.pendingProps), (s = t.memoizedState), (i = s.element), rf(e, t), xs(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = er(Error(b(423)), t)), (t = Xu(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = er(Error(b(424)), t)), (t = Xu(e, t, r, n, i));
            break e;
          } else
            for (
              De = Wt(t.stateNode.containerInfo.firstChild),
                Fe = t,
                Q = !0,
                it = null,
                n = af(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Yn(), r === i)) {
            t = At(e, t, n);
            break e;
          }
          Se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        uf(t),
        e === null && gl(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        dl(r, i) ? (o = null) : s !== null && dl(r, s) && (t.flags |= 32),
        jf(e, t),
        Se(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && gl(t), null;
    case 13:
      return Rf(e, t, n);
    case 4:
      return (
        xa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Jn(t, null, r, n)) : Se(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : nt(r, i)),
        Vu(e, t, r, i, n)
      );
    case 7:
      return Se(e, t, t.pendingProps, n), t.child;
    case 8:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          U(ys, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (lt(s.value, o)) {
            if (s.children === i.children && !Re.current) {
              t = At(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      (a = Nt(-1, n & -n)), (a.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? (a.next = a) : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      vl(s.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(b(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  vl(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Se(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        qn(t, n),
        (i = Je(i)),
        (r = r(i)),
        (t.flags |= 1),
        Se(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (i = nt(r, t.pendingProps)), (i = nt(r.type, i)), Wu(e, t, r, i, n);
    case 15:
      return Mf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : nt(r, i)),
        Xi(e, t),
        (t.tag = 1),
        $e(r) ? ((e = !0), ms(t)) : (e = !1),
        qn(t, n),
        of(t, r, i),
        wl(t, r, i, n),
        Sl(null, t, r, !0, e, n)
      );
    case 19:
      return $f(e, t, n);
    case 22:
      return If(e, t, n);
  }
  throw Error(b(156, t.tag));
};
function Jf(e, t) {
  return Ed(e, t);
}
function dv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Qe(e, t, n, r) {
  return new dv(e, t, n, r);
}
function Ra(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function fv(e) {
  if (typeof e == 'function') return Ra(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ea)) return 11;
    if (e === ta) return 14;
  }
  return 2;
}
function Gt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Qe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ki(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == 'function')) Ra(e) && (o = 1);
  else if (typeof e == 'string') o = 5;
  else
    e: switch (e) {
      case Ln:
        return un(n.children, i, s, t);
      case Zl:
        (o = 8), (i |= 8);
        break;
      case Bo:
        return (e = Qe(12, n, t, i | 2)), (e.elementType = Bo), (e.lanes = s), e;
      case Vo:
        return (e = Qe(13, n, t, i)), (e.elementType = Vo), (e.lanes = s), e;
      case Wo:
        return (e = Qe(19, n, t, i)), (e.elementType = Wo), (e.lanes = s), e;
      case od:
        return Xs(n, i, s, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case id:
              o = 10;
              break e;
            case sd:
              o = 9;
              break e;
            case ea:
              o = 11;
              break e;
            case ta:
              o = 14;
              break e;
            case jt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(b(130, e == null ? e : typeof e, ''));
    }
  return (t = Qe(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t;
}
function un(e, t, n, r) {
  return (e = Qe(7, e, r, t)), (e.lanes = n), e;
}
function Xs(e, t, n, r) {
  return (
    (e = Qe(22, e, r, t)), (e.elementType = od), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e
  );
}
function Mo(e, t, n) {
  return (e = Qe(6, e, null, t)), (e.lanes = n), e;
}
function Io(e, t, n) {
  return (
    (t = Qe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function hv(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = fo(0)),
    (this.expirationTimes = fo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = fo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function $a(e, t, n, r, i, s, o, l, a) {
  return (
    (e = new hv(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Qe(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    wa(s),
    e
  );
}
function pv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: bn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Zf(e) {
  if (!e) return Jt;
  e = e._reactInternals;
  e: {
    if (wn(e) !== e || e.tag !== 1) throw Error(b(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if ($e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(b(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if ($e(n)) return Yd(e, n, t);
  }
  return t;
}
function eh(e, t, n, r, i, s, o, l, a) {
  return (
    (e = $a(n, r, !0, e, i, s, o, l, a)),
    (e.context = Zf(null)),
    (n = e.current),
    (r = ke()),
    (i = Qt(n)),
    (s = Nt(r, i)),
    (s.callback = t ?? null),
    qt(n, s, i),
    (e.current.lanes = i),
    ai(e, i, r),
    Oe(e, r),
    e
  );
}
function Qs(e, t, n, r) {
  var i = t.current,
    s = ke(),
    o = Qt(i);
  return (
    (n = Zf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Nt(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = qt(i, t, o)),
    e !== null && (ot(e, i, o, s), Vi(e, i, o)),
    o
  );
}
function bs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function rc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Oa(e, t) {
  rc(e, t), (e = e.alternate) && rc(e, t);
}
function mv() {
  return null;
}
var th =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function za(e) {
  this._internalRoot = e;
}
Gs.prototype.render = za.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(b(409));
  Qs(e, t, null, null);
};
Gs.prototype.unmount = za.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    mn(function () {
      Qs(null, e, null, null);
    }),
      (t[bt] = null);
  }
};
function Gs(e) {
  this._internalRoot = e;
}
Gs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ad();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ot.length && t !== 0 && t < Ot[n].priority; n++);
    Ot.splice(n, 0, e), n === 0 && Id(e);
  }
};
function Da(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ks(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function ic() {}
function gv(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var s = r;
      r = function () {
        var u = bs(o);
        s.call(u);
      };
    }
    var o = eh(t, r, e, 0, null, !1, !1, '', ic);
    return (
      (e._reactRootContainer = o),
      (e[bt] = o.current),
      Yr(e.nodeType === 8 ? e.parentNode : e),
      mn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == 'function') {
    var l = r;
    r = function () {
      var u = bs(a);
      l.call(u);
    };
  }
  var a = $a(e, 0, !1, null, null, !1, !1, '', ic);
  return (
    (e._reactRootContainer = a),
    (e[bt] = a.current),
    Yr(e.nodeType === 8 ? e.parentNode : e),
    mn(function () {
      Qs(t, a, n, r);
    }),
    a
  );
}
function Ys(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == 'function') {
      var l = i;
      i = function () {
        var a = bs(o);
        l.call(a);
      };
    }
    Qs(t, o, e, i);
  } else o = gv(n, t, e, i, r);
  return bs(o);
}
bd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = br(t.pendingLanes);
        n !== 0 && (ia(t, n | 1), Oe(t, ee()), !(D & 6) && ((tr = ee() + 500), tn()));
      }
      break;
    case 13:
      mn(function () {
        var r = Lt(e, 1);
        if (r !== null) {
          var i = ke();
          ot(r, e, 1, i);
        }
      }),
        Oa(e, 1);
  }
};
sa = function (e) {
  if (e.tag === 13) {
    var t = Lt(e, 134217728);
    if (t !== null) {
      var n = ke();
      ot(t, e, 134217728, n);
    }
    Oa(e, 134217728);
  }
};
Ld = function (e) {
  if (e.tag === 13) {
    var t = Qt(e),
      n = Lt(e, t);
    if (n !== null) {
      var r = ke();
      ot(n, e, t, r);
    }
    Oa(e, t);
  }
};
Ad = function () {
  return H;
};
Md = function (e, t) {
  var n = H;
  try {
    return (H = e), t();
  } finally {
    H = n;
  }
};
tl = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Qo(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Hs(r);
            if (!i) throw Error(b(90));
            ad(r), Qo(r, i);
          }
        }
      }
      break;
    case 'textarea':
      cd(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Un(e, !!n.multiple, t, !1);
  }
};
vd = Ia;
yd = mn;
var vv = { usingClientEntryPoint: !1, Events: [ci, jn, Hs, md, gd, Ia] },
  wr = {
    findFiberByHostInstance: sn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  yv = {
    bundleType: wr.bundleType,
    version: wr.version,
    rendererPackageName: wr.rendererPackageName,
    rendererConfig: wr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Mt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = _d(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wr.findFiberByHostInstance || mv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var ji = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ji.isDisabled && ji.supportsFiber)
    try {
      (Os = ji.inject(yv)), (mt = ji);
    } catch {}
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vv;
Be.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Da(t)) throw Error(b(200));
  return pv(e, t, null, n);
};
Be.createRoot = function (e, t) {
  if (!Da(e)) throw Error(b(299));
  var n = !1,
    r = '',
    i = th;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = $a(e, 1, !1, null, null, n, !1, r, i)),
    (e[bt] = t.current),
    Yr(e.nodeType === 8 ? e.parentNode : e),
    new za(t)
  );
};
Be.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(b(188))
      : ((e = Object.keys(e).join(',')), Error(b(268, e)));
  return (e = _d(t)), (e = e === null ? null : e.stateNode), e;
};
Be.flushSync = function (e) {
  return mn(e);
};
Be.hydrate = function (e, t, n) {
  if (!Ks(t)) throw Error(b(200));
  return Ys(null, e, t, !0, n);
};
Be.hydrateRoot = function (e, t, n) {
  if (!Da(e)) throw Error(b(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = '',
    o = th;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = eh(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[bt] = t.current),
    Yr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Gs(t);
};
Be.render = function (e, t, n) {
  if (!Ks(t)) throw Error(b(200));
  return Ys(null, e, t, !1, n);
};
Be.unmountComponentAtNode = function (e) {
  if (!Ks(e)) throw Error(b(40));
  return e._reactRootContainer
    ? (mn(function () {
        Ys(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[bt] = null);
        });
      }),
      !0)
    : !1;
};
Be.unstable_batchedUpdates = Ia;
Be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ks(n)) throw Error(b(200));
  if (e == null || e._reactInternals === void 0) throw Error(b(38));
  return Ys(e, t, n, !1, r);
};
Be.version = '18.2.0-next-9e3b772b8-20220608';
function nh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nh);
    } catch (e) {
      console.error(e);
    }
}
nh(), (Zc.exports = Be);
var r1 = Zc.exports;
const Qn = ({
    children: e,
    title: t = '',
    icon: n,
    disabled: r = !1,
    toggled: i = !1,
    onClick: s = () => {},
    style: o,
  }) => {
    let l = `toolbar-button ${n}`;
    return (
      i && (l += ' toggled'),
      f.jsxs('button', {
        className: l,
        onMouseDown: sc,
        onClick: s,
        onDoubleClick: sc,
        title: t,
        disabled: !!r,
        style: o,
        children: [
          n &&
            f.jsx('span', {
              className: `codicon codicon-${n}`,
              style: e ? { marginRight: 5 } : {},
            }),
          e,
        ],
      })
    );
  },
  sc = e => {
    e.stopPropagation(), e.preventDefault();
  },
  Ar = Symbol('context'),
  rh = Symbol('next'),
  ih = Symbol('prev'),
  oc = Symbol('events');
class i1 {
  constructor(t) {
    B(this, 'startTime');
    B(this, 'endTime');
    B(this, 'browserName');
    B(this, 'channel');
    B(this, 'platform');
    B(this, 'wallTime');
    B(this, 'title');
    B(this, 'options');
    B(this, 'pages');
    B(this, 'actions');
    B(this, 'events');
    B(this, 'stdio');
    B(this, 'errors');
    B(this, 'errorDescriptors');
    B(this, 'hasSource');
    B(this, 'hasStepData');
    B(this, 'sdkLanguage');
    B(this, 'testIdAttributeName');
    B(this, 'sources');
    B(this, 'resources');
    t.forEach(r => wv(r));
    const n = t.find(r => r.origin === 'library');
    (this.browserName = (n == null ? void 0 : n.browserName) || ''),
      (this.sdkLanguage = n == null ? void 0 : n.sdkLanguage),
      (this.channel = n == null ? void 0 : n.channel),
      (this.testIdAttributeName = n == null ? void 0 : n.testIdAttributeName),
      (this.platform = (n == null ? void 0 : n.platform) || ''),
      (this.title = (n == null ? void 0 : n.title) || ''),
      (this.options = (n == null ? void 0 : n.options) || {}),
      (this.actions = xv(t)),
      (this.pages = [].concat(...t.map(r => r.pages))),
      (this.wallTime = t
        .map(r => r.wallTime)
        .reduce((r, i) => Math.min(r || Number.MAX_VALUE, i), Number.MAX_VALUE)),
      (this.startTime = t.map(r => r.startTime).reduce((r, i) => Math.min(r, i), Number.MAX_VALUE)),
      (this.endTime = t.map(r => r.endTime).reduce((r, i) => Math.max(r, i), Number.MIN_VALUE)),
      (this.events = [].concat(...t.map(r => r.events))),
      (this.stdio = [].concat(...t.map(r => r.stdio))),
      (this.errors = [].concat(...t.map(r => r.errors))),
      (this.hasSource = t.some(r => r.hasSource)),
      (this.hasStepData = t.some(r => r.origin === 'testRunner')),
      (this.resources = [...t.map(r => r.resources)].flat()),
      this.events.sort((r, i) => r.time - i.time),
      this.resources.sort((r, i) => r._monotonicTime - i._monotonicTime),
      (this.errorDescriptors = this.hasStepData
        ? this._errorDescriptorsFromTestRunner()
        : this._errorDescriptorsFromActions()),
      (this.sources = Av(this.actions, this.errorDescriptors));
  }
  failedAction() {
    return this.actions.findLast(t => t.error);
  }
  _errorDescriptorsFromActions() {
    var n;
    const t = [];
    for (const r of this.actions || [])
      (n = r.error) != null &&
        n.message &&
        t.push({ action: r, stack: r.stack, message: r.error.message });
    return t;
  }
  _errorDescriptorsFromTestRunner() {
    const t = [];
    for (const n of this.errors || []) n.message && t.push({ stack: n.stack, message: n.message });
    return t;
  }
}
function wv(e) {
  for (const n of e.pages) n[Ar] = e;
  for (let n = 0; n < e.actions.length; ++n) {
    const r = e.actions[n];
    r[Ar] = e;
  }
  let t;
  for (let n = e.actions.length - 1; n >= 0; n--) {
    const r = e.actions[n];
    (r[rh] = t), r.apiName.includes('route.') || (t = r);
  }
  for (const n of e.events) n[Ar] = e;
  for (const n of e.resources) n[Ar] = e;
}
function xv(e) {
  const t = new Map();
  for (const i of e) {
    const s = i.traceUrl;
    let o = t.get(s);
    o || ((o = []), t.set(s, o)), o.push(i);
  }
  const n = [];
  let r = 0;
  for (const [, i] of t) {
    t.size > 1 && _v(i, ++r);
    const s = Sv(i);
    n.push(...s);
  }
  n.sort((i, s) =>
    s.parentId === i.callId ? -1 : i.parentId === s.callId ? 1 : i.startTime - s.startTime
  );
  for (let i = 1; i < n.length; ++i) n[i][ih] = n[i - 1];
  return n;
}
function _v(e, t) {
  for (const n of e)
    for (const r of n.actions)
      r.callId && (r.callId = `${t}:${r.callId}`),
        r.parentId && (r.parentId = `${t}:${r.parentId}`);
}
function Sv(e) {
  const t = new Map(),
    n = e.filter(l => l.origin === 'library'),
    r = e.filter(l => l.origin === 'testRunner');
  if (!r.length || !n.length) return e.map(l => l.actions.map(a => ({ ...a, context: l }))).flat();
  const i = n.some(l => l.actions.some(a => !!a.stepId));
  for (const l of n)
    for (const a of l.actions) {
      const u = i ? a.stepId : `${a.apiName}@${a.wallTime}`;
      t.set(u, { ...a, context: l });
    }
  const s = Tv(r, t, i);
  s && Ev(n, s);
  const o = new Map();
  for (const l of r)
    for (const a of l.actions) {
      const u = i ? a.callId : `${a.apiName}@${a.wallTime}`,
        c = t.get(u);
      if (c) {
        o.set(a.callId, c.callId),
          a.error && (c.error = a.error),
          a.attachments && (c.attachments = a.attachments),
          a.parentId && (c.parentId = o.get(a.parentId) ?? a.parentId),
          (c.startTime = a.startTime),
          (c.endTime = a.endTime);
        continue;
      }
      a.parentId && (a.parentId = o.get(a.parentId) ?? a.parentId), t.set(u, { ...a, context: l });
    }
  return [...t.values()];
}
function Ev(e, t) {
  for (const n of e) {
    (n.startTime += t), (n.endTime += t);
    for (const r of n.actions) r.startTime && (r.startTime += t), r.endTime && (r.endTime += t);
    for (const r of n.events) r.time += t;
    for (const r of n.stdio) r.timestamp += t;
    for (const r of n.pages) for (const i of r.screencastFrames) i.timestamp += t;
  }
}
function Tv(e, t, n) {
  for (const r of e)
    for (const i of r.actions) {
      if (!i.startTime) continue;
      const s = n ? i.stepId : `${i.apiName}@${i.wallTime}`,
        o = t.get(s);
      if (o) return i.startTime - o.startTime;
    }
  return 0;
}
function kv(e) {
  const t = new Map();
  for (const r of e) t.set(r.callId, { id: r.callId, parent: void 0, children: [], action: r });
  const n = { id: '', parent: void 0, children: [] };
  for (const r of t.values()) {
    const i = (r.action.parentId && t.get(r.action.parentId)) || n;
    i.children.push(r), (r.parent = i);
  }
  return { rootItem: n, itemMap: t };
}
function s1(e) {
  return `${e.pageId || 'none'}:${e.callId}`;
}
function Ls(e) {
  return e[Ar];
}
function Nv(e) {
  return e[rh];
}
function Cv(e) {
  return e[ih];
}
function bv(e) {
  let t = 0,
    n = 0;
  for (const r of Lv(e)) {
    if (r.type === 'console') {
      const i = r.messageType;
      i === 'warning' ? ++n : i === 'error' && ++t;
    }
    r.type === 'event' && r.method === 'pageError' && ++t;
  }
  return { errors: t, warnings: n };
}
function Lv(e) {
  let t = e[oc];
  if (t) return t;
  const n = Nv(e);
  return (
    (t = Ls(e).events.filter(r => r.time >= e.startTime && (!n || r.time < n.startTime))),
    (e[oc] = t),
    t
  );
}
function Av(e, t) {
  var r;
  const n = new Map();
  for (const i of e)
    for (const s of i.stack || []) {
      let o = n.get(s.file);
      o || ((o = { errors: [], content: void 0 }), n.set(s.file, o));
    }
  for (const i of t) {
    const { action: s, stack: o, message: l } = i;
    !s ||
      !o ||
      (r = n.get(o[0].file)) == null ||
      r.errors.push({ line: o[0].line || 0, message: l });
  }
  return n;
}
const Mv = 50,
  As = ({
    sidebarSize: e,
    sidebarHidden: t = !1,
    sidebarIsFirst: n = !1,
    orientation: r = 'vertical',
    minSidebarSize: i = Mv,
    settingName: s,
    children: o,
  }) => {
    const [l, a] = is(s ? s + '.' + r + ':size' : void 0, Math.max(i, e) * window.devicePixelRatio),
      [u, c] = is(s ? s + '.' + r + ':size' : void 0, Math.max(i, e) * window.devicePixelRatio),
      [h, d] = L.useState(null),
      [g, y] = vn();
    let w;
    r === 'vertical'
      ? ((w = u / window.devicePixelRatio), g && g.height < w && (w = g.height - 10))
      : ((w = l / window.devicePixelRatio), g && g.width < w && (w = g.width - 10));
    const x = L.Children.toArray(o);
    document.body.style.userSelect = h ? 'none' : 'inherit';
    let p = {};
    return (
      r === 'vertical'
        ? n
          ? (p = { top: h ? 0 : w - 4, bottom: h ? 0 : void 0, height: h ? 'initial' : 8 })
          : (p = { bottom: h ? 0 : w - 4, top: h ? 0 : void 0, height: h ? 'initial' : 8 })
        : n
        ? (p = { left: h ? 0 : w - 4, right: h ? 0 : void 0, width: h ? 'initial' : 8 })
        : (p = { right: h ? 0 : w - 4, left: h ? 0 : void 0, width: h ? 'initial' : 8 }),
      f.jsxs('div', {
        className: 'split-view ' + r + (n ? ' sidebar-first' : ''),
        ref: y,
        children: [
          f.jsx('div', { className: 'split-view-main', children: x[0] }),
          !t &&
            f.jsx('div', {
              style: { flexBasis: w },
              className: 'split-view-sidebar',
              children: x[1],
            }),
          !t &&
            f.jsx('div', {
              style: p,
              className: 'split-view-resizer',
              onMouseDown: m => d({ offset: r === 'vertical' ? m.clientY : m.clientX, size: w }),
              onMouseUp: () => d(null),
              onMouseMove: m => {
                if (!m.buttons) d(null);
                else if (h) {
                  const E = (r === 'vertical' ? m.clientY : m.clientX) - h.offset,
                    C = n ? h.size + E : h.size - E,
                    N = m.target.parentElement.getBoundingClientRect(),
                    S = Math.min(Math.max(i, C), (r === 'vertical' ? N.height : N.width) - i);
                  r === 'vertical'
                    ? c(S * window.devicePixelRatio)
                    : a(S * window.devicePixelRatio);
                }
              },
            }),
        ],
      })
    );
  };
function Js(e, t = "'") {
  const n = JSON.stringify(e),
    r = n.substring(1, n.length - 1).replace(/\\"/g, '"');
  if (t === "'") return t + r.replace(/[']/g, "\\'") + t;
  if (t === '"') return t + r.replace(/["]/g, '\\"') + t;
  if (t === '`') return t + r.replace(/[`]/g, '`') + t;
  throw new Error('Invalid escape char');
}
function Ms(e) {
  return e.charAt(0).toUpperCase() + e.substring(1);
}
function sh(e) {
  return e
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1_$2')
    .toLowerCase();
}
function Xe(e) {
  let t = '';
  for (let n = 0; n < e.length; n++) t += Iv(e, n);
  return t;
}
function xr(e) {
  return `"${Xe(e).replace(/\\ /g, ' ')}"`;
}
function Iv(e, t) {
  const n = e.charCodeAt(t);
  return n === 0
    ? '�'
    : (n >= 1 && n <= 31) ||
      (n >= 48 && n <= 57 && (t === 0 || (t === 1 && e.charCodeAt(0) === 45)))
    ? '\\' + n.toString(16) + ' '
    : t === 0 && n === 45 && e.length === 1
    ? '\\' + e.charAt(t)
    : n >= 128 ||
      n === 45 ||
      n === 95 ||
      (n >= 48 && n <= 57) ||
      (n >= 65 && n <= 90) ||
      (n >= 97 && n <= 122)
    ? e.charAt(t)
    : '\\' + e.charAt(t);
}
function Ue(e) {
  return e
    .replace(/\u200b/g, '')
    .trim()
    .replace(/\s+/g, ' ');
}
function Zs(e) {
  return e.replace(/(^|[^\\])(\\\\)*\\(['"`])/g, '$1$2$3');
}
function oh(e) {
  return e.unicode || e.unicodeSets
    ? String(e)
    : String(e)
        .replace(/(^|[^\\])(\\\\)*(["'`])/g, '$1$2\\$3')
        .replace(/>>/g, '\\>\\>');
}
function Ge(e, t) {
  return typeof e != 'string' ? oh(e) : `${JSON.stringify(e)}${t ? 's' : 'i'}`;
}
function Ee(e, t) {
  return typeof e != 'string'
    ? oh(e)
    : `"${e.replace(/\\/g, '\\\\').replace(/["]/g, '\\"')}"${t ? 's' : 'i'}`;
}
function jv(e, t, n = '') {
  if (e.length <= t) return e;
  const r = [...e];
  return r.length > t ? r.slice(0, t - n.length).join('') + n : r.join('');
}
function lc(e, t) {
  return jv(e, t, '…');
}
function Pv(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
const re = function (e, t, n) {
  return e >= t && e <= n;
};
function Ae(e) {
  return re(e, 48, 57);
}
function ac(e) {
  return Ae(e) || re(e, 65, 70) || re(e, 97, 102);
}
function Rv(e) {
  return re(e, 65, 90);
}
function $v(e) {
  return re(e, 97, 122);
}
function Ov(e) {
  return Rv(e) || $v(e);
}
function zv(e) {
  return e >= 128;
}
function Yi(e) {
  return Ov(e) || zv(e) || e === 95;
}
function uc(e) {
  return Yi(e) || Ae(e) || e === 45;
}
function Dv(e) {
  return re(e, 0, 8) || e === 11 || re(e, 14, 31) || e === 127;
}
function Ji(e) {
  return e === 10;
}
function wt(e) {
  return Ji(e) || e === 9 || e === 32;
}
const Fv = 1114111;
class Fa extends Error {
  constructor(t) {
    super(t), (this.name = 'InvalidCharacterError');
  }
}
function Hv(e) {
  const t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    if (
      (r === 13 && e.charCodeAt(n + 1) === 10 && ((r = 10), n++),
      (r === 13 || r === 12) && (r = 10),
      r === 0 && (r = 65533),
      re(r, 55296, 56319) && re(e.charCodeAt(n + 1), 56320, 57343))
    ) {
      const i = r - 55296,
        s = e.charCodeAt(n + 1) - 56320;
      (r = Math.pow(2, 16) + i * Math.pow(2, 10) + s), n++;
    }
    t.push(r);
  }
  return t;
}
function se(e) {
  if (e <= 65535) return String.fromCharCode(e);
  e -= Math.pow(2, 16);
  const t = Math.floor(e / Math.pow(2, 10)) + 55296,
    n = (e % Math.pow(2, 10)) + 56320;
  return String.fromCharCode(t) + String.fromCharCode(n);
}
function Uv(e) {
  const t = Hv(e);
  let n = -1;
  const r = [];
  let i;
  const s = function (T) {
      return T >= t.length ? -1 : t[T];
    },
    o = function (T) {
      if ((T === void 0 && (T = 1), T > 3))
        throw 'Spec Error: no more than three codepoints of lookahead.';
      return s(n + T);
    },
    l = function (T) {
      return T === void 0 && (T = 1), (n += T), (i = s(n)), !0;
    },
    a = function () {
      return (n -= 1), !0;
    },
    u = function (T) {
      return T === void 0 && (T = i), T === -1;
    },
    c = function () {
      if ((h(), l(), wt(i))) {
        for (; wt(o()); ) l();
        return new Pl();
      } else {
        if (i === 34) return y();
        if (i === 35)
          if (uc(o()) || p(o(1), o(2))) {
            const T = new _h('');
            return v(o(1), o(2), o(3)) && (T.type = 'id'), (T.value = N()), T;
          } else return new ye(i);
        else
          return i === 36
            ? o() === 61
              ? (l(), new qv())
              : new ye(i)
            : i === 39
            ? y()
            : i === 40
            ? new gh()
            : i === 41
            ? new vh()
            : i === 42
            ? o() === 61
              ? (l(), new Xv())
              : new ye(i)
            : i === 43
            ? k()
              ? (a(), d())
              : new ye(i)
            : i === 44
            ? new fh()
            : i === 45
            ? k()
              ? (a(), d())
              : o(1) === 45 && o(2) === 62
              ? (l(2), new uh())
              : E()
              ? (a(), g())
              : new ye(i)
            : i === 46
            ? k()
              ? (a(), d())
              : new ye(i)
            : i === 58
            ? new ch()
            : i === 59
            ? new dh()
            : i === 60
            ? o(1) === 33 && o(2) === 45 && o(3) === 45
              ? (l(3), new ah())
              : new ye(i)
            : i === 64
            ? v(o(1), o(2), o(3))
              ? new xh(N())
              : new ye(i)
            : i === 91
            ? new mh()
            : i === 92
            ? m()
              ? (a(), g())
              : new ye(i)
            : i === 93
            ? new Rl()
            : i === 94
            ? o() === 61
              ? (l(), new Wv())
              : new ye(i)
            : i === 123
            ? new hh()
            : i === 124
            ? o() === 61
              ? (l(), new Vv())
              : o() === 124
              ? (l(), new yh())
              : new ye(i)
            : i === 125
            ? new ph()
            : i === 126
            ? o() === 61
              ? (l(), new Bv())
              : new ye(i)
            : Ae(i)
            ? (a(), d())
            : Yi(i)
            ? (a(), g())
            : u()
            ? new es()
            : new ye(i);
      }
    },
    h = function () {
      for (; o(1) === 47 && o(2) === 42; )
        for (l(2); ; )
          if ((l(), i === 42 && o() === 47)) {
            l();
            break;
          } else if (u()) return;
    },
    d = function () {
      const T = S();
      if (v(o(1), o(2), o(3))) {
        const j = new Qv();
        return (j.value = T.value), (j.repr = T.repr), (j.type = T.type), (j.unit = N()), j;
      } else if (o() === 37) {
        l();
        const j = new kh();
        return (j.value = T.value), (j.repr = T.repr), j;
      } else {
        const j = new Th();
        return (j.value = T.value), (j.repr = T.repr), (j.type = T.type), j;
      }
    },
    g = function () {
      const T = N();
      if (T.toLowerCase() === 'url' && o() === 40) {
        for (l(); wt(o(1)) && wt(o(2)); ) l();
        return o() === 34 || o() === 39
          ? new ts(T)
          : wt(o()) && (o(2) === 34 || o(2) === 39)
          ? new ts(T)
          : w();
      } else return o() === 40 ? (l(), new ts(T)) : new wh(T);
    },
    y = function (T) {
      T === void 0 && (T = i);
      let j = '';
      for (; l(); ) {
        if (i === T || u()) return new Sh(j);
        if (Ji(i)) return a(), new lh();
        i === 92 ? u(o()) || (Ji(o()) ? l() : (j += se(x()))) : (j += se(i));
      }
      throw new Error('Internal error');
    },
    w = function () {
      const T = new Eh('');
      for (; wt(o()); ) l();
      if (u(o())) return T;
      for (; l(); ) {
        if (i === 41 || u()) return T;
        if (wt(i)) {
          for (; wt(o()); ) l();
          return o() === 41 || u(o()) ? (l(), T) : (A(), new Zi());
        } else {
          if (i === 34 || i === 39 || i === 40 || Dv(i)) return A(), new Zi();
          if (i === 92)
            if (m()) T.value += se(x());
            else return A(), new Zi();
          else T.value += se(i);
        }
      }
      throw new Error('Internal error');
    },
    x = function () {
      if ((l(), ac(i))) {
        const T = [i];
        for (let z = 0; z < 5 && ac(o()); z++) l(), T.push(i);
        wt(o()) && l();
        let j = parseInt(
          T.map(function (z) {
            return String.fromCharCode(z);
          }).join(''),
          16
        );
        return j > Fv && (j = 65533), j;
      } else return u() ? 65533 : i;
    },
    p = function (T, j) {
      return !(T !== 92 || Ji(j));
    },
    m = function () {
      return p(i, o());
    },
    v = function (T, j, z) {
      return T === 45 ? Yi(j) || j === 45 || p(j, z) : Yi(T) ? !0 : T === 92 ? p(T, j) : !1;
    },
    E = function () {
      return v(i, o(1), o(2));
    },
    C = function (T, j, z) {
      return T === 43 || T === 45 ? !!(Ae(j) || (j === 46 && Ae(z))) : T === 46 ? !!Ae(j) : !!Ae(T);
    },
    k = function () {
      return C(i, o(1), o(2));
    },
    N = function () {
      let T = '';
      for (; l(); )
        if (uc(i)) T += se(i);
        else if (m()) T += se(x());
        else return a(), T;
      throw new Error('Internal parse error');
    },
    S = function () {
      let T = '',
        j = 'integer';
      for ((o() === 43 || o() === 45) && (l(), (T += se(i))); Ae(o()); ) l(), (T += se(i));
      if (o(1) === 46 && Ae(o(2)))
        for (l(), T += se(i), l(), T += se(i), j = 'number'; Ae(o()); ) l(), (T += se(i));
      const z = o(1),
        ae = o(2),
        Le = o(3);
      if ((z === 69 || z === 101) && Ae(ae))
        for (l(), T += se(i), l(), T += se(i), j = 'number'; Ae(o()); ) l(), (T += se(i));
      else if ((z === 69 || z === 101) && (ae === 43 || ae === 45) && Ae(Le))
        for (l(), T += se(i), l(), T += se(i), l(), T += se(i), j = 'number'; Ae(o()); )
          l(), (T += se(i));
      const ue = _(T);
      return { type: j, value: ue, repr: T };
    },
    _ = function (T) {
      return +T;
    },
    A = function () {
      for (; l(); ) {
        if (i === 41 || u()) return;
        m() && x();
      }
    };
  let P = 0;
  for (; !u(o()); )
    if ((r.push(c()), P++, P > t.length * 2)) throw new Error("I'm infinite-looping!");
  return r;
}
class te {
  constructor() {
    this.tokenType = '';
  }
  toJSON() {
    return { token: this.tokenType };
  }
  toString() {
    return this.tokenType;
  }
  toSource() {
    return '' + this;
  }
}
class lh extends te {
  constructor() {
    super(...arguments), (this.tokenType = 'BADSTRING');
  }
}
class Zi extends te {
  constructor() {
    super(...arguments), (this.tokenType = 'BADURL');
  }
}
class Pl extends te {
  constructor() {
    super(...arguments), (this.tokenType = 'WHITESPACE');
  }
  toString() {
    return 'WS';
  }
  toSource() {
    return ' ';
  }
}
class ah extends te {
  constructor() {
    super(...arguments), (this.tokenType = 'CDO');
  }
  toSource() {
    return '<!--';
  }
}
class uh extends te {
  constructor() {
    super(...arguments), (this.tokenType = 'CDC');
  }
  toSource() {
    return '-->';
  }
}
class ch extends te {
  constructor() {
    super(...arguments), (this.tokenType = ':');
  }
}
class dh extends te {
  constructor() {
    super(...arguments), (this.tokenType = ';');
  }
}
class fh extends te {
  constructor() {
    super(...arguments), (this.tokenType = ',');
  }
}
class sr extends te {
  constructor() {
    super(...arguments), (this.value = ''), (this.mirror = '');
  }
}
class hh extends sr {
  constructor() {
    super(), (this.tokenType = '{'), (this.value = '{'), (this.mirror = '}');
  }
}
class ph extends sr {
  constructor() {
    super(), (this.tokenType = '}'), (this.value = '}'), (this.mirror = '{');
  }
}
class mh extends sr {
  constructor() {
    super(), (this.tokenType = '['), (this.value = '['), (this.mirror = ']');
  }
}
class Rl extends sr {
  constructor() {
    super(), (this.tokenType = ']'), (this.value = ']'), (this.mirror = '[');
  }
}
class gh extends sr {
  constructor() {
    super(), (this.tokenType = '('), (this.value = '('), (this.mirror = ')');
  }
}
class vh extends sr {
  constructor() {
    super(), (this.tokenType = ')'), (this.value = ')'), (this.mirror = '(');
  }
}
class Bv extends te {
  constructor() {
    super(...arguments), (this.tokenType = '~=');
  }
}
class Vv extends te {
  constructor() {
    super(...arguments), (this.tokenType = '|=');
  }
}
class Wv extends te {
  constructor() {
    super(...arguments), (this.tokenType = '^=');
  }
}
class qv extends te {
  constructor() {
    super(...arguments), (this.tokenType = '$=');
  }
}
class Xv extends te {
  constructor() {
    super(...arguments), (this.tokenType = '*=');
  }
}
class yh extends te {
  constructor() {
    super(...arguments), (this.tokenType = '||');
  }
}
class es extends te {
  constructor() {
    super(...arguments), (this.tokenType = 'EOF');
  }
  toSource() {
    return '';
  }
}
class ye extends te {
  constructor(t) {
    super(), (this.tokenType = 'DELIM'), (this.value = ''), (this.value = se(t));
  }
  toString() {
    return 'DELIM(' + this.value + ')';
  }
  toJSON() {
    const t = this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (t.value = this.value), t;
  }
  toSource() {
    return this.value === '\\'
      ? `\\
`
      : this.value;
  }
}
class or extends te {
  constructor() {
    super(...arguments), (this.value = '');
  }
  ASCIIMatch(t) {
    return this.value.toLowerCase() === t.toLowerCase();
  }
  toJSON() {
    const t = this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (t.value = this.value), t;
  }
}
class wh extends or {
  constructor(t) {
    super(), (this.tokenType = 'IDENT'), (this.value = t);
  }
  toString() {
    return 'IDENT(' + this.value + ')';
  }
  toSource() {
    return fi(this.value);
  }
}
class ts extends or {
  constructor(t) {
    super(), (this.tokenType = 'FUNCTION'), (this.value = t), (this.mirror = ')');
  }
  toString() {
    return 'FUNCTION(' + this.value + ')';
  }
  toSource() {
    return fi(this.value) + '(';
  }
}
class xh extends or {
  constructor(t) {
    super(), (this.tokenType = 'AT-KEYWORD'), (this.value = t);
  }
  toString() {
    return 'AT(' + this.value + ')';
  }
  toSource() {
    return '@' + fi(this.value);
  }
}
class _h extends or {
  constructor(t) {
    super(), (this.tokenType = 'HASH'), (this.value = t), (this.type = 'unrestricted');
  }
  toString() {
    return 'HASH(' + this.value + ')';
  }
  toJSON() {
    const t = this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (t.value = this.value), (t.type = this.type), t;
  }
  toSource() {
    return this.type === 'id' ? '#' + fi(this.value) : '#' + Gv(this.value);
  }
}
class Sh extends or {
  constructor(t) {
    super(), (this.tokenType = 'STRING'), (this.value = t);
  }
  toString() {
    return '"' + Nh(this.value) + '"';
  }
}
class Eh extends or {
  constructor(t) {
    super(), (this.tokenType = 'URL'), (this.value = t);
  }
  toString() {
    return 'URL(' + this.value + ')';
  }
  toSource() {
    return 'url("' + Nh(this.value) + '")';
  }
}
class Th extends te {
  constructor() {
    super(), (this.tokenType = 'NUMBER'), (this.type = 'integer'), (this.repr = '');
  }
  toString() {
    return this.type === 'integer' ? 'INT(' + this.value + ')' : 'NUMBER(' + this.value + ')';
  }
  toJSON() {
    const t = super.toJSON();
    return (t.value = this.value), (t.type = this.type), (t.repr = this.repr), t;
  }
  toSource() {
    return this.repr;
  }
}
class kh extends te {
  constructor() {
    super(), (this.tokenType = 'PERCENTAGE'), (this.repr = '');
  }
  toString() {
    return 'PERCENTAGE(' + this.value + ')';
  }
  toJSON() {
    const t = this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (t.value = this.value), (t.repr = this.repr), t;
  }
  toSource() {
    return this.repr + '%';
  }
}
class Qv extends te {
  constructor() {
    super(),
      (this.tokenType = 'DIMENSION'),
      (this.type = 'integer'),
      (this.repr = ''),
      (this.unit = '');
  }
  toString() {
    return 'DIM(' + this.value + ',' + this.unit + ')';
  }
  toJSON() {
    const t = this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (
      (t.value = this.value), (t.type = this.type), (t.repr = this.repr), (t.unit = this.unit), t
    );
  }
  toSource() {
    const t = this.repr;
    let n = fi(this.unit);
    return (
      n[0].toLowerCase() === 'e' &&
        (n[1] === '-' || re(n.charCodeAt(1), 48, 57)) &&
        (n = '\\65 ' + n.slice(1, n.length)),
      t + n
    );
  }
}
function fi(e) {
  e = '' + e;
  let t = '';
  const n = e.charCodeAt(0);
  for (let r = 0; r < e.length; r++) {
    const i = e.charCodeAt(r);
    if (i === 0) throw new Fa('Invalid character: the input contains U+0000.');
    re(i, 1, 31) ||
    i === 127 ||
    (r === 0 && re(i, 48, 57)) ||
    (r === 1 && re(i, 48, 57) && n === 45)
      ? (t += '\\' + i.toString(16) + ' ')
      : i >= 128 || i === 45 || i === 95 || re(i, 48, 57) || re(i, 65, 90) || re(i, 97, 122)
      ? (t += e[r])
      : (t += '\\' + e[r]);
  }
  return t;
}
function Gv(e) {
  e = '' + e;
  let t = '';
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    if (r === 0) throw new Fa('Invalid character: the input contains U+0000.');
    r >= 128 || r === 45 || r === 95 || re(r, 48, 57) || re(r, 65, 90) || re(r, 97, 122)
      ? (t += e[n])
      : (t += '\\' + r.toString(16) + ' ');
  }
  return t;
}
function Nh(e) {
  e = '' + e;
  let t = '';
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    if (r === 0) throw new Fa('Invalid character: the input contains U+0000.');
    re(r, 1, 31) || r === 127
      ? (t += '\\' + r.toString(16) + ' ')
      : r === 34 || r === 92
      ? (t += '\\' + e[n])
      : (t += e[n]);
  }
  return t;
}
class Ie extends Error {}
function Kv(e, t) {
  let n;
  try {
    (n = Uv(e)), n[n.length - 1] instanceof es || n.push(new es());
  } catch (_) {
    const A = _.message + ` while parsing selector "${e}"`,
      P = (_.stack || '').indexOf(_.message);
    throw (
      (P !== -1 &&
        (_.stack = _.stack.substring(0, P) + A + _.stack.substring(P + _.message.length)),
      (_.message = A),
      _)
    );
  }
  const r = n.find(
    _ =>
      _ instanceof xh ||
      _ instanceof lh ||
      _ instanceof Zi ||
      _ instanceof yh ||
      _ instanceof ah ||
      _ instanceof uh ||
      _ instanceof dh ||
      _ instanceof hh ||
      _ instanceof ph ||
      _ instanceof Eh ||
      _ instanceof kh
  );
  if (r) throw new Ie(`Unsupported token "${r.toSource()}" while parsing selector "${e}"`);
  let i = 0;
  const s = new Set();
  function o() {
    return new Ie(`Unexpected token "${n[i].toSource()}" while parsing selector "${e}"`);
  }
  function l() {
    for (; n[i] instanceof Pl; ) i++;
  }
  function a(_ = i) {
    return n[_] instanceof wh;
  }
  function u(_ = i) {
    return n[_] instanceof Sh;
  }
  function c(_ = i) {
    return n[_] instanceof Th;
  }
  function h(_ = i) {
    return n[_] instanceof fh;
  }
  function d(_ = i) {
    return n[_] instanceof gh;
  }
  function g(_ = i) {
    return n[_] instanceof vh;
  }
  function y(_ = i) {
    return n[_] instanceof ts;
  }
  function w(_ = i) {
    return n[_] instanceof ye && n[_].value === '*';
  }
  function x(_ = i) {
    return n[_] instanceof es;
  }
  function p(_ = i) {
    return n[_] instanceof ye && ['>', '+', '~'].includes(n[_].value);
  }
  function m(_ = i) {
    return h(_) || g(_) || x(_) || p(_) || n[_] instanceof Pl;
  }
  function v() {
    const _ = [E()];
    for (; l(), !!h(); ) i++, _.push(E());
    return _;
  }
  function E() {
    return l(), c() || u() ? n[i++].value : C();
  }
  function C() {
    const _ = { simples: [] };
    for (
      l(),
        p()
          ? _.simples.push({
              selector: { functions: [{ name: 'scope', args: [] }] },
              combinator: '',
            })
          : _.simples.push({ selector: k(), combinator: '' });
      ;

    ) {
      if ((l(), p())) (_.simples[_.simples.length - 1].combinator = n[i++].value), l();
      else if (m()) break;
      _.simples.push({ combinator: '', selector: k() });
    }
    return _;
  }
  function k() {
    let _ = '';
    const A = [];
    for (; !m(); )
      if (a() || w()) _ += n[i++].toSource();
      else if (n[i] instanceof _h) _ += n[i++].toSource();
      else if (n[i] instanceof ye && n[i].value === '.')
        if ((i++, a())) _ += '.' + n[i++].toSource();
        else throw o();
      else if (n[i] instanceof ch)
        if ((i++, a()))
          if (!t.has(n[i].value.toLowerCase())) _ += ':' + n[i++].toSource();
          else {
            const P = n[i++].value.toLowerCase();
            A.push({ name: P, args: [] }), s.add(P);
          }
        else if (y()) {
          const P = n[i++].value.toLowerCase();
          if (
            (t.has(P) ? (A.push({ name: P, args: v() }), s.add(P)) : (_ += `:${P}(${N()})`),
            l(),
            !g())
          )
            throw o();
          i++;
        } else throw o();
      else if (n[i] instanceof mh) {
        for (_ += '[', i++; !(n[i] instanceof Rl) && !x(); ) _ += n[i++].toSource();
        if (!(n[i] instanceof Rl)) throw o();
        (_ += ']'), i++;
      } else throw o();
    if (!_ && !A.length) throw o();
    return { css: _ || void 0, functions: A };
  }
  function N() {
    let _ = '',
      A = 1;
    for (; !x() && ((d() || y()) && A++, g() && A--, !!A); ) _ += n[i++].toSource();
    return _;
  }
  const S = v();
  if (!x()) throw o();
  if (S.some(_ => typeof _ != 'object' || !('simples' in _)))
    throw new Ie(`Error while parsing selector "${e}"`);
  return { selector: S, names: Array.from(s) };
}
const $l = new Set([
    'internal:has',
    'internal:has-not',
    'internal:and',
    'internal:or',
    'internal:chain',
    'left-of',
    'right-of',
    'above',
    'below',
    'near',
  ]),
  Yv = new Set(['left-of', 'right-of', 'above', 'below', 'near']),
  Ch = new Set([
    'not',
    'is',
    'where',
    'has',
    'scope',
    'light',
    'visible',
    'text',
    'text-matches',
    'text-is',
    'has-text',
    'above',
    'below',
    'right-of',
    'left-of',
    'near',
    'nth-match',
  ]);
function eo(e) {
  const t = e0(e),
    n = [];
  for (const r of t.parts) {
    if (r.name === 'css' || r.name === 'css:light') {
      r.name === 'css:light' && (r.body = ':light(' + r.body + ')');
      const i = Kv(r.body, Ch);
      n.push({ name: 'css', body: i.selector, source: r.body });
      continue;
    }
    if ($l.has(r.name)) {
      let i, s;
      try {
        const u = JSON.parse('[' + r.body + ']');
        if (!Array.isArray(u) || u.length < 1 || u.length > 2 || typeof u[0] != 'string')
          throw new Ie(`Malformed selector: ${r.name}=` + r.body);
        if (((i = u[0]), u.length === 2)) {
          if (typeof u[1] != 'number' || !Yv.has(r.name))
            throw new Ie(`Malformed selector: ${r.name}=` + r.body);
          s = u[1];
        }
      } catch {
        throw new Ie(`Malformed selector: ${r.name}=` + r.body);
      }
      const o = { name: r.name, source: r.body, body: { parsed: eo(i), distance: s } },
        l = [...o.body.parsed.parts]
          .reverse()
          .find(u => u.name === 'internal:control' && u.body === 'enter-frame'),
        a = l ? o.body.parsed.parts.indexOf(l) : -1;
      a !== -1 &&
        Jv(o.body.parsed.parts.slice(0, a + 1), n.slice(0, a + 1)) &&
        o.body.parsed.parts.splice(0, a + 1),
        n.push(o);
      continue;
    }
    n.push({ ...r, source: r.body });
  }
  if ($l.has(n[0].name)) throw new Ie(`"${n[0].name}" selector cannot be first`);
  return { capture: t.capture, parts: n };
}
function Jv(e, t) {
  return gn({ parts: e }) === gn({ parts: t });
}
function gn(e, t) {
  return typeof e == 'string'
    ? e
    : e.parts
        .map((n, r) => {
          let i = !0;
          !t &&
            r !== e.capture &&
            (n.name === 'css' ||
              (n.name === 'xpath' && n.source.startsWith('//')) ||
              n.source.startsWith('..')) &&
            (i = !1);
          const s = i ? n.name + '=' : '';
          return `${r === e.capture ? '*' : ''}${s}${n.source}`;
        })
        .join(' >> ');
}
function Zv(e, t) {
  const n = (r, i) => {
    for (const s of r.parts) t(s, i), $l.has(s.name) && n(s.body.parsed, !0);
  };
  n(e, !1);
}
function e0(e) {
  let t = 0,
    n,
    r = 0;
  const i = { parts: [] },
    s = () => {
      const l = e.substring(r, t).trim(),
        a = l.indexOf('=');
      let u, c;
      a !== -1 &&
      l
        .substring(0, a)
        .trim()
        .match(/^[a-zA-Z_0-9-+:*]+$/)
        ? ((u = l.substring(0, a).trim()), (c = l.substring(a + 1)))
        : (l.length > 1 && l[0] === '"' && l[l.length - 1] === '"') ||
          (l.length > 1 && l[0] === "'" && l[l.length - 1] === "'")
        ? ((u = 'text'), (c = l))
        : /^\(*\/\//.test(l) || l.startsWith('..')
        ? ((u = 'xpath'), (c = l))
        : ((u = 'css'), (c = l));
      let h = !1;
      if (
        (u[0] === '*' && ((h = !0), (u = u.substring(1))), i.parts.push({ name: u, body: c }), h)
      ) {
        if (i.capture !== void 0)
          throw new Ie('Only one of the selectors can capture using * modifier');
        i.capture = i.parts.length - 1;
      }
    };
  if (!e.includes('>>')) return (t = e.length), s(), i;
  const o = () => {
    const a = e.substring(r, t).match(/^\s*text\s*=(.*)$/);
    return !!a && !!a[1];
  };
  for (; t < e.length; ) {
    const l = e[t];
    l === '\\' && t + 1 < e.length
      ? (t += 2)
      : l === n
      ? ((n = void 0), t++)
      : !n && (l === '"' || l === "'" || l === '`') && !o()
      ? ((n = l), t++)
      : !n && l === '>' && e[t + 1] === '>'
      ? (s(), (t += 2), (r = t))
      : t++;
  }
  return s(), i;
}
function cn(e, t) {
  let n = 0,
    r = e.length === 0;
  const i = () => e[n] || '',
    s = () => {
      const x = i();
      return ++n, (r = n >= e.length), x;
    },
    o = x => {
      throw r
        ? new Ie(`Unexpected end of selector while parsing selector \`${e}\``)
        : new Ie(
            `Error while parsing selector \`${e}\` - unexpected symbol "${i()}" at position ${n}` +
              (x ? ' during ' + x : '')
          );
    };
  function l() {
    for (; !r && /\s/.test(i()); ) s();
  }
  function a(x) {
    return (
      x >= '' ||
      (x >= '0' && x <= '9') ||
      (x >= 'A' && x <= 'Z') ||
      (x >= 'a' && x <= 'z') ||
      (x >= '0' && x <= '9') ||
      x === '_' ||
      x === '-'
    );
  }
  function u() {
    let x = '';
    for (l(); !r && a(i()); ) x += s();
    return x;
  }
  function c(x) {
    let p = s();
    for (p !== x && o('parsing quoted string'); !r && i() !== x; ) i() === '\\' && s(), (p += s());
    return i() !== x && o('parsing quoted string'), (p += s()), p;
  }
  function h() {
    s() !== '/' && o('parsing regular expression');
    let x = '',
      p = !1;
    for (; !r; ) {
      if (i() === '\\') (x += s()), r && o('parsing regular expression');
      else if (p && i() === ']') p = !1;
      else if (!p && i() === '[') p = !0;
      else if (!p && i() === '/') break;
      x += s();
    }
    s() !== '/' && o('parsing regular expression');
    let m = '';
    for (; !r && i().match(/[dgimsuy]/); ) m += s();
    try {
      return new RegExp(x, m);
    } catch (v) {
      throw new Ie(`Error while parsing selector \`${e}\`: ${v.message}`);
    }
  }
  function d() {
    let x = '';
    return (
      l(),
      i() === "'" || i() === '"' ? (x = c(i()).slice(1, -1)) : (x = u()),
      x || o('parsing property path'),
      x
    );
  }
  function g() {
    l();
    let x = '';
    return (
      r || (x += s()),
      !r && x !== '=' && (x += s()),
      ['=', '*=', '^=', '$=', '|=', '~='].includes(x) || o('parsing operator'),
      x
    );
  }
  function y() {
    s();
    const x = [];
    for (x.push(d()), l(); i() === '.'; ) s(), x.push(d()), l();
    if (i() === ']')
      return (
        s(), { name: x.join('.'), jsonPath: x, op: '<truthy>', value: null, caseSensitive: !1 }
      );
    const p = g();
    let m,
      v = !0;
    if ((l(), i() === '/')) {
      if (p !== '=')
        throw new Ie(
          `Error while parsing selector \`${e}\` - cannot use ${p} in attribute with regular expression`
        );
      m = h();
    } else if (i() === "'" || i() === '"')
      (m = c(i()).slice(1, -1)),
        l(),
        i() === 'i' || i() === 'I'
          ? ((v = !1), s())
          : (i() === 's' || i() === 'S') && ((v = !0), s());
    else {
      for (m = ''; !r && (a(i()) || i() === '+' || i() === '.'); ) m += s();
      m === 'true'
        ? (m = !0)
        : m === 'false'
        ? (m = !1)
        : t || ((m = +m), Number.isNaN(m) && o('parsing attribute value'));
    }
    if ((l(), i() !== ']' && o('parsing attribute value'), s(), p !== '=' && typeof m != 'string'))
      throw new Ie(
        `Error while parsing selector \`${e}\` - cannot use ${p} in attribute with non-string matching value - ${m}`
      );
    return { name: x.join('.'), jsonPath: x, op: p, value: m, caseSensitive: v };
  }
  const w = { name: '', attributes: [] };
  for (w.name = u(), l(); i() === '['; ) w.attributes.push(y()), l();
  if ((r || o(void 0), !w.name && !w.attributes.length))
    throw new Ie(`Error while parsing selector \`${e}\` - selector cannot be empty`);
  return w;
}
function Kt(e, t, n = !1) {
  return bh(e, t, n)[0];
}
function bh(e, t, n = !1, r = 20, i) {
  try {
    return Nn(new l0[e](i), eo(t), n, r);
  } catch {
    return [t];
  }
}
function Nn(e, t, n = !1, r = 20) {
  const i = [...t.parts];
  for (let l = 0; l < i.length - 1; l++)
    if (
      i[l].name === 'nth' &&
      i[l + 1].name === 'internal:control' &&
      i[l + 1].body === 'enter-frame'
    ) {
      const [a] = i.splice(l, 1);
      i.splice(l + 1, 0, a);
    }
  const s = [];
  let o = n ? 'frame-locator' : 'page';
  for (let l = 0; l < i.length; l++) {
    const a = i[l],
      u = o;
    if (((o = 'locator'), a.name === 'nth')) {
      a.body === '0'
        ? s.push([e.generateLocator(u, 'first', ''), e.generateLocator(u, 'nth', '0')])
        : a.body === '-1'
        ? s.push([e.generateLocator(u, 'last', ''), e.generateLocator(u, 'nth', '-1')])
        : s.push([e.generateLocator(u, 'nth', a.body)]);
      continue;
    }
    if (a.name === 'internal:text') {
      const { exact: w, text: x } = _r(a.body);
      s.push([e.generateLocator(u, 'text', x, { exact: w })]);
      continue;
    }
    if (a.name === 'internal:has-text') {
      const { exact: w, text: x } = _r(a.body);
      if (!w) {
        s.push([e.generateLocator(u, 'has-text', x, { exact: w })]);
        continue;
      }
    }
    if (a.name === 'internal:has-not-text') {
      const { exact: w, text: x } = _r(a.body);
      if (!w) {
        s.push([e.generateLocator(u, 'has-not-text', x, { exact: w })]);
        continue;
      }
    }
    if (a.name === 'internal:has') {
      const w = Nn(e, a.body.parsed, !1, r);
      s.push(w.map(x => e.generateLocator(u, 'has', x)));
      continue;
    }
    if (a.name === 'internal:has-not') {
      const w = Nn(e, a.body.parsed, !1, r);
      s.push(w.map(x => e.generateLocator(u, 'hasNot', x)));
      continue;
    }
    if (a.name === 'internal:and') {
      const w = Nn(e, a.body.parsed, !1, r);
      s.push(w.map(x => e.generateLocator(u, 'and', x)));
      continue;
    }
    if (a.name === 'internal:or') {
      const w = Nn(e, a.body.parsed, !1, r);
      s.push(w.map(x => e.generateLocator(u, 'or', x)));
      continue;
    }
    if (a.name === 'internal:chain') {
      const w = Nn(e, a.body.parsed, !1, r);
      s.push(w.map(x => e.generateLocator(u, 'chain', x)));
      continue;
    }
    if (a.name === 'internal:label') {
      const { exact: w, text: x } = _r(a.body);
      s.push([e.generateLocator(u, 'label', x, { exact: w })]);
      continue;
    }
    if (a.name === 'internal:role') {
      const w = cn(a.body, !0),
        x = { attrs: [] };
      for (const p of w.attributes)
        p.name === 'name'
          ? ((x.exact = p.caseSensitive), (x.name = p.value))
          : (p.name === 'level' && typeof p.value == 'string' && (p.value = +p.value),
            x.attrs.push({
              name: p.name === 'include-hidden' ? 'includeHidden' : p.name,
              value: p.value,
            }));
      s.push([e.generateLocator(u, 'role', w.name, x)]);
      continue;
    }
    if (a.name === 'internal:testid') {
      const w = cn(a.body, !0),
        { value: x } = w.attributes[0];
      s.push([e.generateLocator(u, 'test-id', x)]);
      continue;
    }
    if (a.name === 'internal:attr') {
      const w = cn(a.body, !0),
        { name: x, value: p, caseSensitive: m } = w.attributes[0],
        v = p,
        E = !!m;
      if (x === 'placeholder') {
        s.push([e.generateLocator(u, 'placeholder', v, { exact: E })]);
        continue;
      }
      if (x === 'alt') {
        s.push([e.generateLocator(u, 'alt', v, { exact: E })]);
        continue;
      }
      if (x === 'title') {
        s.push([e.generateLocator(u, 'title', v, { exact: E })]);
        continue;
      }
    }
    let c = 'default';
    const h = i[l + 1];
    h &&
      h.name === 'internal:control' &&
      h.body === 'enter-frame' &&
      ((c = 'frame'), (o = 'frame-locator'), l++);
    const d = gn({ parts: [a] }),
      g = e.generateLocator(u, c, d);
    if (c === 'default' && h && ['internal:has-text', 'internal:has-not-text'].includes(h.name)) {
      const { exact: w, text: x } = _r(h.body);
      if (!w) {
        const p = e.generateLocator(
            'locator',
            h.name === 'internal:has-text' ? 'has-text' : 'has-not-text',
            x,
            { exact: w }
          ),
          m = {};
        h.name === 'internal:has-text' ? (m.hasText = x) : (m.hasNotText = x);
        const v = e.generateLocator(u, 'default', d, m);
        s.push([e.chainLocators([g, p]), v]), l++;
        continue;
      }
    }
    let y;
    if (['xpath', 'css'].includes(a.name)) {
      const w = gn({ parts: [a] }, !0);
      y = e.generateLocator(u, c, w);
    }
    s.push([g, y].filter(Boolean));
  }
  return t0(e, s, r);
}
function t0(e, t, n) {
  const r = t.map(() => ''),
    i = [],
    s = o => {
      if (o === t.length) return i.push(e.chainLocators(r)), r.length < n;
      for (const l of t[o]) if (((r[o] = l), !s(o + 1))) return !1;
      return !0;
    };
  return s(0), i;
}
function _r(e) {
  let t = !1;
  const n = e.match(/^\/(.*)\/([igm]*)$/);
  return n
    ? { text: new RegExp(n[1], n[2]) }
    : (e.endsWith('"')
        ? ((e = JSON.parse(e)), (t = !0))
        : e.endsWith('"s')
        ? ((e = JSON.parse(e.substring(0, e.length - 1))), (t = !0))
        : e.endsWith('"i') && ((e = JSON.parse(e.substring(0, e.length - 1))), (t = !1)),
      { exact: t, text: e });
}
class n0 {
  constructor(t) {
    this.preferredQuote = t;
  }
  generateLocator(t, n, r, i = {}) {
    switch (n) {
      case 'default':
        return i.hasText !== void 0
          ? `locator(${this.quote(r)}, { hasText: ${this.toHasText(i.hasText)} })`
          : i.hasNotText !== void 0
          ? `locator(${this.quote(r)}, { hasNotText: ${this.toHasText(i.hasNotText)} })`
          : `locator(${this.quote(r)})`;
      case 'frame':
        return `frameLocator(${this.quote(r)})`;
      case 'nth':
        return `nth(${r})`;
      case 'first':
        return 'first()';
      case 'last':
        return 'last()';
      case 'role':
        const s = [];
        he(i.name)
          ? s.push(`name: ${this.regexToSourceString(i.name)}`)
          : typeof i.name == 'string' &&
            (s.push(`name: ${this.quote(i.name)}`), i.exact && s.push('exact: true'));
        for (const { name: l, value: a } of i.attrs)
          s.push(`${l}: ${typeof a == 'string' ? this.quote(a) : a}`);
        const o = s.length ? `, { ${s.join(', ')} }` : '';
        return `getByRole(${this.quote(r)}${o})`;
      case 'has-text':
        return `filter({ hasText: ${this.toHasText(r)} })`;
      case 'has-not-text':
        return `filter({ hasNotText: ${this.toHasText(r)} })`;
      case 'has':
        return `filter({ has: ${r} })`;
      case 'hasNot':
        return `filter({ hasNot: ${r} })`;
      case 'and':
        return `and(${r})`;
      case 'or':
        return `or(${r})`;
      case 'chain':
        return `locator(${r})`;
      case 'test-id':
        return `getByTestId(${this.toTestIdValue(r)})`;
      case 'text':
        return this.toCallWithExact('getByText', r, !!i.exact);
      case 'alt':
        return this.toCallWithExact('getByAltText', r, !!i.exact);
      case 'placeholder':
        return this.toCallWithExact('getByPlaceholder', r, !!i.exact);
      case 'label':
        return this.toCallWithExact('getByLabel', r, !!i.exact);
      case 'title':
        return this.toCallWithExact('getByTitle', r, !!i.exact);
      default:
        throw new Error('Unknown selector kind ' + n);
    }
  }
  chainLocators(t) {
    return t.join('.');
  }
  regexToSourceString(t) {
    return Zs(String(t));
  }
  toCallWithExact(t, n, r) {
    return he(n)
      ? `${t}(${this.regexToSourceString(n)})`
      : r
      ? `${t}(${this.quote(n)}, { exact: true })`
      : `${t}(${this.quote(n)})`;
  }
  toHasText(t) {
    return he(t) ? this.regexToSourceString(t) : this.quote(t);
  }
  toTestIdValue(t) {
    return he(t) ? this.regexToSourceString(t) : this.quote(t);
  }
  quote(t) {
    return Js(t, this.preferredQuote ?? "'");
  }
}
class r0 {
  generateLocator(t, n, r, i = {}) {
    switch (n) {
      case 'default':
        return i.hasText !== void 0
          ? `locator(${this.quote(r)}, has_text=${this.toHasText(i.hasText)})`
          : i.hasNotText !== void 0
          ? `locator(${this.quote(r)}, has_not_text=${this.toHasText(i.hasNotText)})`
          : `locator(${this.quote(r)})`;
      case 'frame':
        return `frame_locator(${this.quote(r)})`;
      case 'nth':
        return `nth(${r})`;
      case 'first':
        return 'first';
      case 'last':
        return 'last';
      case 'role':
        const s = [];
        he(i.name)
          ? s.push(`name=${this.regexToString(i.name)}`)
          : typeof i.name == 'string' &&
            (s.push(`name=${this.quote(i.name)}`), i.exact && s.push('exact=True'));
        for (const { name: l, value: a } of i.attrs) {
          let u = typeof a == 'string' ? this.quote(a) : a;
          typeof a == 'boolean' && (u = a ? 'True' : 'False'), s.push(`${sh(l)}=${u}`);
        }
        const o = s.length ? `, ${s.join(', ')}` : '';
        return `get_by_role(${this.quote(r)}${o})`;
      case 'has-text':
        return `filter(has_text=${this.toHasText(r)})`;
      case 'has-not-text':
        return `filter(has_not_text=${this.toHasText(r)})`;
      case 'has':
        return `filter(has=${r})`;
      case 'hasNot':
        return `filter(has_not=${r})`;
      case 'and':
        return `and_(${r})`;
      case 'or':
        return `or_(${r})`;
      case 'chain':
        return `locator(${r})`;
      case 'test-id':
        return `get_by_test_id(${this.toTestIdValue(r)})`;
      case 'text':
        return this.toCallWithExact('get_by_text', r, !!i.exact);
      case 'alt':
        return this.toCallWithExact('get_by_alt_text', r, !!i.exact);
      case 'placeholder':
        return this.toCallWithExact('get_by_placeholder', r, !!i.exact);
      case 'label':
        return this.toCallWithExact('get_by_label', r, !!i.exact);
      case 'title':
        return this.toCallWithExact('get_by_title', r, !!i.exact);
      default:
        throw new Error('Unknown selector kind ' + n);
    }
  }
  chainLocators(t) {
    return t.join('.');
  }
  regexToString(t) {
    const n = t.flags.includes('i') ? ', re.IGNORECASE' : '';
    return `re.compile(r"${Zs(t.source).replace(/\\\//, '/').replace(/"/g, '\\"')}"${n})`;
  }
  toCallWithExact(t, n, r) {
    return he(n)
      ? `${t}(${this.regexToString(n)})`
      : r
      ? `${t}(${this.quote(n)}, exact=True)`
      : `${t}(${this.quote(n)})`;
  }
  toHasText(t) {
    return he(t) ? this.regexToString(t) : `${this.quote(t)}`;
  }
  toTestIdValue(t) {
    return he(t) ? this.regexToString(t) : this.quote(t);
  }
  quote(t) {
    return Js(t, '"');
  }
}
class i0 {
  generateLocator(t, n, r, i = {}) {
    let s;
    switch (t) {
      case 'page':
        s = 'Page';
        break;
      case 'frame-locator':
        s = 'FrameLocator';
        break;
      case 'locator':
        s = 'Locator';
        break;
    }
    switch (n) {
      case 'default':
        return i.hasText !== void 0
          ? `locator(${this.quote(r)}, new ${s}.LocatorOptions().setHasText(${this.toHasText(
              i.hasText
            )}))`
          : i.hasNotText !== void 0
          ? `locator(${this.quote(r)}, new ${s}.LocatorOptions().setHasNotText(${this.toHasText(
              i.hasNotText
            )}))`
          : `locator(${this.quote(r)})`;
      case 'frame':
        return `frameLocator(${this.quote(r)})`;
      case 'nth':
        return `nth(${r})`;
      case 'first':
        return 'first()';
      case 'last':
        return 'last()';
      case 'role':
        const o = [];
        he(i.name)
          ? o.push(`.setName(${this.regexToString(i.name)})`)
          : typeof i.name == 'string' &&
            (o.push(`.setName(${this.quote(i.name)})`), i.exact && o.push('.setExact(true)'));
        for (const { name: a, value: u } of i.attrs)
          o.push(`.set${Ms(a)}(${typeof u == 'string' ? this.quote(u) : u})`);
        const l = o.length ? `, new ${s}.GetByRoleOptions()${o.join('')}` : '';
        return `getByRole(AriaRole.${sh(r).toUpperCase()}${l})`;
      case 'has-text':
        return `filter(new ${s}.FilterOptions().setHasText(${this.toHasText(r)}))`;
      case 'has-not-text':
        return `filter(new ${s}.FilterOptions().setHasNotText(${this.toHasText(r)}))`;
      case 'has':
        return `filter(new ${s}.FilterOptions().setHas(${r}))`;
      case 'hasNot':
        return `filter(new ${s}.FilterOptions().setHasNot(${r}))`;
      case 'and':
        return `and(${r})`;
      case 'or':
        return `or(${r})`;
      case 'chain':
        return `locator(${r})`;
      case 'test-id':
        return `getByTestId(${this.toTestIdValue(r)})`;
      case 'text':
        return this.toCallWithExact(s, 'getByText', r, !!i.exact);
      case 'alt':
        return this.toCallWithExact(s, 'getByAltText', r, !!i.exact);
      case 'placeholder':
        return this.toCallWithExact(s, 'getByPlaceholder', r, !!i.exact);
      case 'label':
        return this.toCallWithExact(s, 'getByLabel', r, !!i.exact);
      case 'title':
        return this.toCallWithExact(s, 'getByTitle', r, !!i.exact);
      default:
        throw new Error('Unknown selector kind ' + n);
    }
  }
  chainLocators(t) {
    return t.join('.');
  }
  regexToString(t) {
    const n = t.flags.includes('i') ? ', Pattern.CASE_INSENSITIVE' : '';
    return `Pattern.compile(${this.quote(Zs(t.source))}${n})`;
  }
  toCallWithExact(t, n, r, i) {
    return he(r)
      ? `${n}(${this.regexToString(r)})`
      : i
      ? `${n}(${this.quote(r)}, new ${t}.${Ms(n)}Options().setExact(true))`
      : `${n}(${this.quote(r)})`;
  }
  toHasText(t) {
    return he(t) ? this.regexToString(t) : this.quote(t);
  }
  toTestIdValue(t) {
    return he(t) ? this.regexToString(t) : this.quote(t);
  }
  quote(t) {
    return Js(t, '"');
  }
}
class s0 {
  generateLocator(t, n, r, i = {}) {
    switch (n) {
      case 'default':
        return i.hasText !== void 0
          ? `Locator(${this.quote(r)}, new() { ${this.toHasText(i.hasText)} })`
          : i.hasNotText !== void 0
          ? `Locator(${this.quote(r)}, new() { ${this.toHasNotText(i.hasNotText)} })`
          : `Locator(${this.quote(r)})`;
      case 'frame':
        return `FrameLocator(${this.quote(r)})`;
      case 'nth':
        return `Nth(${r})`;
      case 'first':
        return 'First';
      case 'last':
        return 'Last';
      case 'role':
        const s = [];
        he(i.name)
          ? s.push(`NameRegex = ${this.regexToString(i.name)}`)
          : typeof i.name == 'string' &&
            (s.push(`Name = ${this.quote(i.name)}`), i.exact && s.push('Exact = true'));
        for (const { name: l, value: a } of i.attrs)
          s.push(`${Ms(l)} = ${typeof a == 'string' ? this.quote(a) : a}`);
        const o = s.length ? `, new() { ${s.join(', ')} }` : '';
        return `GetByRole(AriaRole.${Ms(r)}${o})`;
      case 'has-text':
        return `Filter(new() { ${this.toHasText(r)} })`;
      case 'has-not-text':
        return `Filter(new() { ${this.toHasNotText(r)} })`;
      case 'has':
        return `Filter(new() { Has = ${r} })`;
      case 'hasNot':
        return `Filter(new() { HasNot = ${r} })`;
      case 'and':
        return `And(${r})`;
      case 'or':
        return `Or(${r})`;
      case 'chain':
        return `Locator(${r})`;
      case 'test-id':
        return `GetByTestId(${this.toTestIdValue(r)})`;
      case 'text':
        return this.toCallWithExact('GetByText', r, !!i.exact);
      case 'alt':
        return this.toCallWithExact('GetByAltText', r, !!i.exact);
      case 'placeholder':
        return this.toCallWithExact('GetByPlaceholder', r, !!i.exact);
      case 'label':
        return this.toCallWithExact('GetByLabel', r, !!i.exact);
      case 'title':
        return this.toCallWithExact('GetByTitle', r, !!i.exact);
      default:
        throw new Error('Unknown selector kind ' + n);
    }
  }
  chainLocators(t) {
    return t.join('.');
  }
  regexToString(t) {
    const n = t.flags.includes('i') ? ', RegexOptions.IgnoreCase' : '';
    return `new Regex(${this.quote(Zs(t.source))}${n})`;
  }
  toCallWithExact(t, n, r) {
    return he(n)
      ? `${t}(${this.regexToString(n)})`
      : r
      ? `${t}(${this.quote(n)}, new() { Exact = true })`
      : `${t}(${this.quote(n)})`;
  }
  toHasText(t) {
    return he(t) ? `HasTextRegex = ${this.regexToString(t)}` : `HasText = ${this.quote(t)}`;
  }
  toTestIdValue(t) {
    return he(t) ? this.regexToString(t) : this.quote(t);
  }
  toHasNotText(t) {
    return he(t) ? `HasNotTextRegex = ${this.regexToString(t)}` : `HasNotText = ${this.quote(t)}`;
  }
  quote(t) {
    return Js(t, '"');
  }
}
class o0 {
  generateLocator(t, n, r, i = {}) {
    return JSON.stringify({ kind: n, body: r, options: i });
  }
  chainLocators(t) {
    const n = t.map(r => JSON.parse(r));
    for (let r = 0; r < n.length - 1; ++r) n[r].next = n[r + 1];
    return JSON.stringify(n[0]);
  }
}
const l0 = { javascript: n0, python: r0, java: i0, csharp: s0, jsonl: o0 };
function he(e) {
  return e instanceof RegExp;
}
const cc = new Map();
function hi({
  name: e,
  items: t = [],
  id: n,
  render: r,
  icon: i,
  isError: s,
  isWarning: o,
  isInfo: l,
  indent: a,
  selectedItem: u,
  onAccepted: c,
  onSelected: h,
  onLeftArrow: d,
  onRightArrow: g,
  onHighlighted: y,
  onIconClicked: w,
  noItemsMessage: x,
  dataTestId: p,
  noHighlightOnHover: m,
}) {
  const v = L.useRef(null),
    [E, C] = L.useState();
  return (
    L.useEffect(() => {
      y == null || y(E);
    }, [y, E]),
    L.useEffect(() => {
      const k = v.current;
      if (!k) return;
      const N = () => {
        cc.set(e, k.scrollTop);
      };
      return (
        k.addEventListener('scroll', N, { passive: !0 }), () => k.removeEventListener('scroll', N)
      );
    }, [e]),
    L.useEffect(() => {
      v.current && (v.current.scrollTop = cc.get(e) || 0);
    }, [e]),
    f.jsx('div', {
      className: 'list-view vbox ' + e + '-list-view',
      role: t.length > 0 ? 'list' : void 0,
      'data-testid': p || e + '-list',
      children: f.jsxs('div', {
        className: 'list-view-content',
        tabIndex: 0,
        onDoubleClick: () => u && (c == null ? void 0 : c(u, t.indexOf(u))),
        onKeyDown: k => {
          var A;
          if (u && k.key === 'Enter') {
            c == null || c(u, t.indexOf(u));
            return;
          }
          if (
            k.key !== 'ArrowDown' &&
            k.key !== 'ArrowUp' &&
            k.key !== 'ArrowLeft' &&
            k.key !== 'ArrowRight'
          )
            return;
          if ((k.stopPropagation(), k.preventDefault(), u && k.key === 'ArrowLeft')) {
            d == null || d(u, t.indexOf(u));
            return;
          }
          if (u && k.key === 'ArrowRight') {
            g == null || g(u, t.indexOf(u));
            return;
          }
          const N = u ? t.indexOf(u) : -1;
          let S = N;
          k.key === 'ArrowDown' && (N === -1 ? (S = 0) : (S = Math.min(N + 1, t.length - 1))),
            k.key === 'ArrowUp' && (N === -1 ? (S = t.length - 1) : (S = Math.max(N - 1, 0)));
          const _ = (A = v.current) == null ? void 0 : A.children.item(S);
          a0(_ || void 0), y == null || y(void 0), h == null || h(t[S], S);
        },
        ref: v,
        children: [
          x && t.length === 0 && f.jsx('div', { className: 'list-view-empty', children: x }),
          t.map((k, N) => {
            const S = u === k ? ' selected' : '',
              _ = !m && E === k ? ' highlighted' : '',
              A = s != null && s(k, N) ? ' error' : '',
              P = o != null && o(k, N) ? ' warning' : '',
              T = l != null && l(k, N) ? ' info' : '',
              j = (a == null ? void 0 : a(k, N)) || 0,
              z = r(k, N);
            return f.jsxs(
              'div',
              {
                role: 'listitem',
                className: 'list-view-entry' + S + _ + A + P + T,
                onClick: () => (h == null ? void 0 : h(k, N)),
                onMouseEnter: () => C(k),
                onMouseLeave: () => C(void 0),
                children: [
                  j
                    ? new Array(j)
                        .fill(0)
                        .map(() => f.jsx('div', { className: 'list-view-indent' }))
                    : void 0,
                  i &&
                    f.jsx('div', {
                      className: 'codicon ' + (i(k, N) || 'codicon-blank'),
                      style: { minWidth: 16, marginRight: 4 },
                      onDoubleClick: ae => {
                        ae.preventDefault(), ae.stopPropagation();
                      },
                      onClick: ae => {
                        ae.stopPropagation(), ae.preventDefault(), w == null || w(k, N);
                      },
                    }),
                  typeof z == 'string'
                    ? f.jsx('div', {
                        style: { textOverflow: 'ellipsis', overflow: 'hidden' },
                        children: z,
                      })
                    : z,
                ],
              },
              (n == null ? void 0 : n(k, N)) || N
            );
          }),
        ],
      }),
    })
  );
}
function a0(e) {
  e &&
    (e != null && e.scrollIntoViewIfNeeded
      ? e.scrollIntoViewIfNeeded(!1)
      : e == null || e.scrollIntoView());
}
const u0 = hi;
function c0({
  name: e,
  rootItem: t,
  render: n,
  icon: r,
  isError: i,
  isVisible: s,
  selectedItem: o,
  onAccepted: l,
  onSelected: a,
  onHighlighted: u,
  treeState: c,
  setTreeState: h,
  noItemsMessage: d,
  dataTestId: g,
  autoExpandDepth: y,
}) {
  const w = L.useMemo(() => d0(t, o, c.expandedItems, y || 0), [t, o, c, y]),
    x = L.useMemo(() => {
      if (!s) return [...w.keys()];
      const p = new Map(),
        m = E => {
          const C = p.get(E);
          if (C !== void 0) return C;
          let k = E.children.some(S => m(S));
          for (const S of E.children) {
            const _ = m(S);
            k = k || _;
          }
          const N = s(E) || k;
          return p.set(E, N), N;
        };
      for (const E of w.keys()) m(E);
      const v = [];
      for (const E of w.keys()) s(E) && v.push(E);
      return v;
    }, [w, s]);
  return f.jsx(u0, {
    name: e,
    items: x,
    id: p => p.id,
    dataTestId: g || e + '-tree',
    render: p => {
      const m = n(p);
      return f.jsxs(f.Fragment, {
        children: [
          r &&
            f.jsx('div', {
              className: 'codicon ' + (r(p) || 'blank'),
              style: { minWidth: 16, marginRight: 4 },
            }),
          typeof m == 'string'
            ? f.jsx('div', { style: { textOverflow: 'ellipsis', overflow: 'hidden' }, children: m })
            : m,
        ],
      });
    },
    icon: p => {
      const m = w.get(p).expanded;
      if (typeof m == 'boolean') return m ? 'codicon-chevron-down' : 'codicon-chevron-right';
    },
    isError: p => (i == null ? void 0 : i(p)) || !1,
    indent: p => w.get(p).depth,
    selectedItem: o,
    onAccepted: p => (l == null ? void 0 : l(p)),
    onSelected: p => (a == null ? void 0 : a(p)),
    onHighlighted: p => (u == null ? void 0 : u(p)),
    onLeftArrow: p => {
      const { expanded: m, parent: v } = w.get(p);
      m ? (c.expandedItems.set(p.id, !1), h({ ...c })) : v && (a == null || a(v));
    },
    onRightArrow: p => {
      p.children.length && (c.expandedItems.set(p.id, !0), h({ ...c }));
    },
    onIconClicked: p => {
      const { expanded: m } = w.get(p);
      if (m) {
        for (let v = o; v; v = v.parent)
          if (v === p) {
            a == null || a(p);
            break;
          }
        c.expandedItems.set(p.id, !1);
      } else c.expandedItems.set(p.id, !0);
      h({ ...c });
    },
    noItemsMessage: d,
  });
}
function d0(e, t, n, r) {
  const i = new Map(),
    s = new Set();
  for (let l = t == null ? void 0 : t.parent; l; l = l.parent) s.add(l.id);
  const o = (l, a) => {
    for (const u of l.children) {
      const c = s.has(u.id) || n.get(u.id),
        h = r > a && i.size < 25 && c !== !1,
        d = u.children.length ? c ?? h : void 0;
      i.set(u, { depth: a, expanded: d, parent: e === l ? null : l }), d && o(u, a + 1);
    }
  };
  return o(e, 0), i;
}
const f0 = c0,
  h0 = ({
    actions: e,
    selectedAction: t,
    selectedTime: n,
    setSelectedTime: r,
    sdkLanguage: i,
    onSelected: s,
    onHighlighted: o,
    revealConsole: l,
    isLive: a,
  }) => {
    const [u, c] = L.useState({ expandedItems: new Map() }),
      { rootItem: h, itemMap: d } = L.useMemo(() => kv(e), [e]),
      { selectedItem: g } = L.useMemo(
        () => ({ selectedItem: t ? d.get(t.callId) : void 0 }),
        [d, t]
      );
    return f.jsxs('div', {
      className: 'vbox',
      children: [
        n &&
          f.jsxs('div', {
            className: 'action-list-show-all',
            onClick: () => r(void 0),
            children: [f.jsx('span', { className: 'codicon codicon-triangle-left' }), 'Show all'],
          }),
        f.jsx(f0, {
          name: 'actions',
          rootItem: h,
          treeState: u,
          setTreeState: c,
          selectedItem: g,
          onSelected: y => s(y.action),
          onHighlighted: y => o(y == null ? void 0 : y.action),
          onAccepted: y => r({ minimum: y.action.startTime, maximum: y.action.endTime }),
          isError: y => {
            var w, x;
            return !!((x = (w = y.action) == null ? void 0 : w.error) != null && x.message);
          },
          isVisible: y => !n || (y.action.startTime <= n.maximum && y.action.endTime >= n.minimum),
          render: y =>
            Ha(y.action, {
              sdkLanguage: i,
              revealConsole: l,
              isLive: a,
              showDuration: !0,
              showBadges: !0,
            }),
        }),
      ],
    });
  },
  Ha = (e, t) => {
    const { sdkLanguage: n, revealConsole: r, isLive: i, showDuration: s, showBadges: o } = t,
      { errors: l, warnings: a } = bv(e),
      u = e.params.selector ? Kt(n || 'javascript', e.params.selector) : void 0;
    let c = '';
    return (
      e.endTime ? (c = Ke(e.endTime - e.startTime)) : e.error ? (c = 'Timed out') : i || (c = '-'),
      f.jsxs(f.Fragment, {
        children: [
          f.jsxs('div', {
            className: 'action-title',
            title: e.apiName,
            children: [
              f.jsx('span', { children: e.apiName }),
              u && f.jsx('div', { className: 'action-selector', title: u, children: u }),
              e.method === 'goto' &&
                e.params.url &&
                f.jsx('div', {
                  className: 'action-url',
                  title: e.params.url,
                  children: e.params.url,
                }),
            ],
          }),
          (s || o) && f.jsx('div', { className: 'spacer' }),
          s &&
            f.jsx('div', {
              className: 'action-duration',
              children: c || f.jsx('span', { className: 'codicon codicon-loading' }),
            }),
          o &&
            f.jsxs('div', {
              className: 'action-icons',
              onClick: () => (r == null ? void 0 : r()),
              children: [
                !!l &&
                  f.jsxs('div', {
                    className: 'action-icon',
                    children: [
                      f.jsx('span', { className: 'codicon codicon-error' }),
                      f.jsx('span', { className: 'action-icon-value', children: l }),
                    ],
                  }),
                !!a &&
                  f.jsxs('div', {
                    className: 'action-icon',
                    children: [
                      f.jsx('span', { className: 'codicon codicon-warning' }),
                      f.jsx('span', { className: 'action-icon-value', children: a }),
                    ],
                  }),
              ],
            }),
        ],
      })
    );
  },
  p0 = ({ value: e }) => {
    const [t, n] = L.useState('codicon-clippy'),
      r = L.useCallback(() => {
        navigator.clipboard.writeText(e).then(
          () => {
            n('codicon-check'),
              setTimeout(() => {
                n('codicon-clippy');
              }, 3e3);
          },
          () => {
            n('codicon-close');
          }
        );
      }, [e]);
    return f.jsx('span', { className: `copy-icon codicon ${t}`, onClick: r });
  },
  lr = ({ text: e }) =>
    f.jsx('div', {
      className: 'fill',
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        opacity: 0.5,
      },
      children: e,
    }),
  m0 = ({ action: e, sdkLanguage: t }) => {
    if (!e) return f.jsx(lr, { text: 'No action selected' });
    const n = { ...e.params };
    delete n.info;
    const r = Object.keys(n),
      i = e.startTime + (e.context.wallTime - e.context.startTime),
      s = new Date(i).toLocaleString(),
      o = e.endTime ? Ke(e.endTime - e.startTime) : 'Timed Out';
    return f.jsxs('div', {
      className: 'call-tab',
      children: [
        f.jsx('div', { className: 'call-line', children: e.apiName }),
        f.jsxs(f.Fragment, {
          children: [
            f.jsx('div', { className: 'call-section', children: 'Time' }),
            s &&
              f.jsxs('div', {
                className: 'call-line',
                children: [
                  'wall time:',
                  f.jsx('span', { className: 'call-value datetime', title: s, children: s }),
                ],
              }),
            f.jsxs('div', {
              className: 'call-line',
              children: [
                'duration:',
                f.jsx('span', { className: 'call-value datetime', title: o, children: o }),
              ],
            }),
          ],
        }),
        !!r.length && f.jsx('div', { className: 'call-section', children: 'Parameters' }),
        !!r.length && r.map((l, a) => dc(fc(e, l, n[l], t), 'param-' + a)),
        !!e.result && f.jsx('div', { className: 'call-section', children: 'Return value' }),
        !!e.result &&
          Object.keys(e.result).map((l, a) => dc(fc(e, l, e.result[l], t), 'result-' + a)),
      ],
    });
  };
function dc(e, t) {
  let n = e.text.replace(/\n/g, '↵');
  return (
    e.type === 'string' && (n = `"${n}"`),
    f.jsxs(
      'div',
      {
        className: 'call-line',
        children: [
          e.name,
          ':',
          f.jsx('span', { className: `call-value ${e.type}`, title: e.text, children: n }),
          ['string', 'number', 'object', 'locator'].includes(e.type) &&
            f.jsx(p0, { value: e.text }),
        ],
      },
      t
    )
  );
}
function fc(e, t, n, r) {
  const i = e.method.includes('eval') || e.method === 'waitForFunction';
  if (t === 'files') return { text: '<files>', type: 'string', name: t };
  if (
    ((t === 'eventInit' || t === 'expectedValue' || (t === 'arg' && i)) &&
      (n = Is(n.value, new Array(10).fill({ handle: '<handle>' }))),
    ((t === 'value' && i) || (t === 'received' && e.method === 'expect')) &&
      (n = Is(n, new Array(10).fill({ handle: '<handle>' }))),
    t === 'selector')
  )
    return { text: Kt(r || 'javascript', e.params.selector), type: 'locator', name: 'locator' };
  const s = typeof n;
  return s !== 'object' || n === null
    ? { text: String(n), type: s, name: t }
    : n.guid
    ? { text: '<handle>', type: 'handle', name: t }
    : { text: JSON.stringify(n).slice(0, 1e3), type: 'object', name: t };
}
function Is(e, t) {
  if (e.n !== void 0) return e.n;
  if (e.s !== void 0) return e.s;
  if (e.b !== void 0) return e.b;
  if (e.v !== void 0) {
    if (e.v === 'undefined') return;
    if (e.v === 'null') return null;
    if (e.v === 'NaN') return NaN;
    if (e.v === 'Infinity') return 1 / 0;
    if (e.v === '-Infinity') return -1 / 0;
    if (e.v === '-0') return -0;
  }
  if (e.d !== void 0) return new Date(e.d);
  if (e.r !== void 0) return new RegExp(e.r.p, e.r.f);
  if (e.a !== void 0) return e.a.map(n => Is(n, t));
  if (e.o !== void 0) {
    const n = {};
    for (const { k: r, v: i } of e.o) n[r] = Is(i, t);
    return n;
  }
  return e.h !== void 0 ? (t === void 0 ? '<object>' : t[e.h]) : '<object>';
}
const g0 = hi,
  v0 = ({ action: e, isLive: t }) => {
    const n = L.useMemo(() => {
      var o;
      if (!e || !e.log.length) return [];
      const r = e.log,
        i = e.context.wallTime - e.context.startTime,
        s = [];
      for (let l = 0; l < r.length; ++l) {
        let a = '';
        if (r[l].time !== -1) {
          const u = (o = r[l]) == null ? void 0 : o.time;
          l + 1 < r.length
            ? (a = Ke(r[l + 1].time - u))
            : e.endTime > 0
            ? (a = Ke(e.endTime - u))
            : t
            ? (a = Ke(Date.now() - i - u))
            : (a = '-');
        }
        s.push({ message: r[l].message, time: a });
      }
      return s;
    }, [e, t]);
    return n.length
      ? f.jsx(g0, {
          name: 'log',
          items: n,
          render: r =>
            f.jsxs('div', {
              className: 'log-list-item',
              children: [
                f.jsx('span', { className: 'log-list-duration', children: r.time }),
                r.message,
              ],
            }),
          noHighlightOnHover: !0,
        })
      : f.jsx(lr, { text: 'No log entries' });
  };
function oi(e) {
  const t = /(\x1b\[(\d+(;\d+)*)m)|([^\x1b]+)/g,
    n = [];
  let r,
    i = {};
  for (; (r = t.exec(e)) !== null; ) {
    const [, , s, , o] = r;
    if (s) {
      const l = +s;
      switch (l) {
        case 0:
          i = {};
          break;
        case 1:
          i['font-weight'] = 'bold';
          break;
        case 3:
          i['font-style'] = 'italic';
          break;
        case 4:
          i['text-decoration'] = 'underline';
          break;
        case 8:
          i.display = 'none';
          break;
        case 9:
          i['text-decoration'] = 'line-through';
          break;
        case 22:
          i = { ...i, 'font-weight': void 0, 'font-style': void 0, 'text-decoration': void 0 };
          break;
        case 23:
          i = { ...i, 'font-weight': void 0, 'font-style': void 0 };
          break;
        case 24:
          i = { ...i, 'text-decoration': void 0 };
          break;
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
          i.color = hc[l - 30];
          break;
        case 39:
          i = { ...i, color: void 0 };
          break;
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
          i['background-color'] = hc[l - 40];
          break;
        case 49:
          i = { ...i, 'background-color': void 0 };
          break;
        case 53:
          i['text-decoration'] = 'overline';
          break;
        case 90:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 97:
          i.color = pc[l - 90];
          break;
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
          i['background-color'] = pc[l - 100];
          break;
      }
    } else o && n.push(`<span style="${w0(i)}">${y0(o)}</span>`);
  }
  return n.join('');
}
const hc = {
    0: 'var(--vscode-terminal-ansiBlack)',
    1: 'var(--vscode-terminal-ansiRed)',
    2: 'var(--vscode-terminal-ansiGreen)',
    3: 'var(--vscode-terminal-ansiYellow)',
    4: 'var(--vscode-terminal-ansiBlue)',
    5: 'var(--vscode-terminal-ansiMagenta)',
    6: 'var(--vscode-terminal-ansiCyan)',
    7: 'var(--vscode-terminal-ansiWhite)',
  },
  pc = {
    0: 'var(--vscode-terminal-ansiBrightBlack)',
    1: 'var(--vscode-terminal-ansiBrightRed)',
    2: 'var(--vscode-terminal-ansiBrightGreen)',
    3: 'var(--vscode-terminal-ansiBrightYellow)',
    4: 'var(--vscode-terminal-ansiBrightBlue)',
    5: 'var(--vscode-terminal-ansiBrightMagenta)',
    6: 'var(--vscode-terminal-ansiBrightCyan)',
    7: 'var(--vscode-terminal-ansiBrightWhite)',
  };
function y0(e) {
  return e.replace(/[&"<>]/g, t => ({ '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' }[t]));
}
function w0(e) {
  return Object.entries(e)
    .map(([t, n]) => `${t}: ${n}`)
    .join('; ');
}
const x0 = ({ error: e }) => {
  const t = L.useMemo(() => oi(e), [e]);
  return f.jsx('div', { className: 'error-message', dangerouslySetInnerHTML: { __html: t || '' } });
};
function _0(e) {
  return L.useMemo(() => {
    if (!e) return { errors: new Map() };
    const t = new Map();
    for (const n of e.errorDescriptors) t.set(n.message, n);
    return { errors: t };
  }, [e]);
}
const S0 = ({ errorsModel: e, sdkLanguage: t, revealInSource: n }) =>
    e.errors.size
      ? f.jsx('div', {
          className: 'fill',
          style: { overflow: 'auto' },
          children: [...e.errors.entries()].map(([r, i]) => {
            var a;
            let s, o;
            const l = (a = i.stack) == null ? void 0 : a[0];
            return (
              l &&
                ((s = l.file.replace(/.*[/\\](.*)/, '$1') + ':' + l.line),
                (o = l.file + ':' + l.line)),
              f.jsxs(
                'div',
                {
                  children: [
                    f.jsxs('div', {
                      className: 'hbox',
                      style: {
                        alignItems: 'center',
                        padding: '5px 10px',
                        minHeight: 36,
                        fontWeight: 'bold',
                        color: 'var(--vscode-errorForeground)',
                      },
                      children: [
                        i.action && Ha(i.action, { sdkLanguage: t }),
                        s &&
                          f.jsxs('div', {
                            className: 'action-location',
                            children: [
                              '@ ',
                              f.jsx('span', { title: o, onClick: () => n(i), children: s }),
                            ],
                          }),
                      ],
                    }),
                    f.jsx(x0, { error: r }),
                  ],
                },
                r
              )
            );
          }),
        })
      : f.jsx(lr, { text: 'No errors' }),
  E0 = hi;
function T0(e, t) {
  const { entries: n } = L.useMemo(() => {
    if (!e) return { entries: [] };
    const i = [];
    for (const s of e.events) {
      if (s.type === 'console') {
        const o = s.args && s.args.length ? N0(s.args) : Lh(s.text),
          l = s.location.url,
          u = `${l ? l.substring(l.lastIndexOf('/') + 1) : '<anonymous>'}:${s.location.lineNumber}`;
        i.push({
          browserMessage: { body: o, location: u },
          isError: s.messageType === 'error',
          isWarning: s.messageType === 'warning',
          timestamp: s.time,
        });
      }
      s.type === 'event' &&
        s.method === 'pageError' &&
        i.push({ browserError: s.params.error, isError: !0, isWarning: !1, timestamp: s.time });
    }
    for (const s of e.stdio) {
      let o = '';
      s.text && (o = oi(s.text.trim()) || ''),
        s.base64 && (o = oi(atob(s.base64).trim()) || ''),
        i.push({
          nodeMessage: { html: o },
          isError: s.type === 'stderr',
          isWarning: !1,
          timestamp: s.timestamp,
        });
    }
    return i.sort((s, o) => s.timestamp - o.timestamp), { entries: i };
  }, [e]);
  return {
    entries: L.useMemo(
      () => (t ? n.filter(i => i.timestamp >= t.minimum && i.timestamp <= t.maximum) : n),
      [n, t]
    ),
  };
}
const k0 = ({ consoleModel: e, boundaries: t }) =>
  e.entries.length
    ? f.jsx('div', {
        className: 'console-tab',
        children: f.jsx(E0, {
          name: 'console',
          items: e.entries,
          isError: n => n.isError,
          isWarning: n => n.isWarning,
          render: n => {
            const r = Ke(n.timestamp - t.minimum),
              i = f.jsx('span', { className: 'console-time', children: r }),
              s = n.isError ? ' status-error' : n.isWarning ? ' status-warning' : ' status-none',
              o =
                n.browserMessage || n.browserError
                  ? f.jsx('span', {
                      className: 'codicon codicon-browser' + s,
                      title: 'Browser message',
                    })
                  : f.jsx('span', {
                      className: 'codicon codicon-file' + s,
                      title: 'Runner message',
                    });
            let l, a, u, c;
            const { browserMessage: h, browserError: d, nodeMessage: g } = n;
            if ((h && ((l = h.location), (a = h.body)), d)) {
              const { error: y, value: w } = d;
              y ? ((a = y.message), (c = y.stack)) : (a = String(w));
            }
            return (
              g && (u = g.html),
              f.jsxs('div', {
                className: 'console-line',
                children: [
                  i,
                  o,
                  l && f.jsx('span', { className: 'console-location', children: l }),
                  a && f.jsx('span', { className: 'console-line-message', children: a }),
                  u &&
                    f.jsx('span', {
                      className: 'console-line-message',
                      dangerouslySetInnerHTML: { __html: u },
                    }),
                  c && f.jsx('div', { className: 'console-stack', children: c }),
                ],
              })
            );
          },
        }),
      })
    : f.jsx(lr, { text: 'No console entries' });
function N0(e) {
  if (e.length === 1) return Lh(e[0].preview);
  const t = typeof e[0].value == 'string' && e[0].value.includes('%'),
    n = t ? e[0].value : '',
    r = t ? e.slice(1) : e;
  let i = 0;
  const s = /%([%sdifoOc])/g;
  let o;
  const l = [];
  let a = [];
  l.push(f.jsx('span', { children: a }));
  let u = 0;
  for (; (o = s.exec(n)) !== null; ) {
    const c = n.substring(u, o.index);
    a.push(f.jsx('span', { children: c })), (u = o.index + 2);
    const h = o[0][1];
    if (h === '%') a.push(f.jsx('span', { children: '%' }));
    else if (h === 's' || h === 'o' || h === 'O' || h === 'd' || h === 'i' || h === 'f') {
      const d = r[i++],
        g = {};
      typeof (d == null ? void 0 : d.value) != 'string' &&
        (g.color = 'var(--vscode-debugTokenExpression-number)'),
        a.push(f.jsx('span', { style: g, children: (d == null ? void 0 : d.preview) || '' }));
    } else if (h === 'c') {
      a = [];
      const d = r[i++],
        g = d ? C0(d.preview) : {};
      l.push(f.jsx('span', { style: g, children: a }));
    }
  }
  for (u < n.length && a.push(f.jsx('span', { children: n.substring(u) })); i < r.length; i++) {
    const c = r[i],
      h = {};
    a.length && a.push(f.jsx('span', { children: ' ' })),
      typeof (c == null ? void 0 : c.value) != 'string' &&
        (h.color = 'var(--vscode-debugTokenExpression-number)'),
      a.push(f.jsx('span', { style: h, children: (c == null ? void 0 : c.preview) || '' }));
  }
  return l;
}
function Lh(e) {
  return [f.jsx('span', { dangerouslySetInnerHTML: { __html: oi(e.trim()) } })];
}
function C0(e) {
  try {
    const t = {},
      n = e.split(';');
    for (const r of n) {
      const i = r.trim();
      if (!i) continue;
      let [s, o] = i.split(':');
      if (((s = s.trim()), (o = o.trim()), !b0(s))) continue;
      const l = s.replace(/-([a-z])/g, a => a[1].toUpperCase());
      t[l] = o;
    }
    return t;
  } catch {
    return {};
  }
}
function b0(e) {
  return ['background', 'border', 'color', 'font', 'line', 'margin', 'padding', 'text'].some(n =>
    e.startsWith(n)
  );
}
const Ah = ({ noShadow: e, children: t, noMinHeight: n }) =>
    f.jsx('div', {
      className: 'toolbar' + (e ? ' no-shadow' : '') + (n ? ' no-min-height' : ''),
      children: t,
    }),
  Ol = ({
    tabs: e,
    selectedTab: t,
    setSelectedTab: n,
    leftToolbar: r,
    rightToolbar: i,
    dataTestId: s,
    mode: o,
  }) => (
    o || (o = 'default'),
    f.jsx('div', {
      className: 'tabbed-pane',
      'data-testid': s,
      children: f.jsxs('div', {
        className: 'vbox',
        children: [
          f.jsxs(Ah, {
            children: [
              r &&
                f.jsxs('div', {
                  style: { flex: 'none', display: 'flex', margin: '0 4px', alignItems: 'center' },
                  children: [...r],
                }),
              o === 'default' &&
                f.jsx('div', {
                  style: { flex: 'auto', display: 'flex', height: '100%', overflow: 'hidden' },
                  children: [
                    ...e.map(l =>
                      f.jsx(Mh, {
                        id: l.id,
                        title: l.title,
                        count: l.count,
                        errorCount: l.errorCount,
                        selected: t === l.id,
                        onSelect: n,
                      })
                    ),
                  ],
                }),
              o === 'select' &&
                f.jsx('div', {
                  style: { flex: 'auto', display: 'flex', height: '100%', overflow: 'hidden' },
                  children: f.jsx('select', {
                    style: { width: '100%', background: 'none', cursor: 'pointer' },
                    onChange: l => {
                      n(e[l.currentTarget.selectedIndex].id);
                    },
                    children: e.map(l => {
                      let a = '';
                      return (
                        l.count === 1 ? (a = ' 🔵') : l.count && (a = ` 🔵✖️${l.count}`),
                        l.errorCount === 1
                          ? (a = ' 🔴')
                          : l.errorCount && (a = ` 🔴✖️${l.errorCount}`),
                        f.jsxs('option', {
                          value: l.id,
                          selected: l.id === t,
                          children: [l.title, a],
                        })
                      );
                    }),
                  }),
                }),
              i &&
                f.jsxs('div', {
                  style: { flex: 'none', display: 'flex', alignItems: 'center' },
                  children: [...i],
                }),
            ],
          }),
          e.map(l => {
            const a = 'tab-content tab-' + l.id;
            if (l.component)
              return f.jsx(
                'div',
                {
                  className: a,
                  style: { display: t === l.id ? 'inherit' : 'none' },
                  children: l.component,
                },
                l.id
              );
            if (t === l.id) return f.jsx('div', { className: a, children: l.render() }, l.id);
          }),
        ],
      }),
    })
  ),
  Mh = ({ id: e, title: t, count: n, errorCount: r, selected: i, onSelect: s }) =>
    f.jsxs(
      'div',
      {
        className: 'tabbed-pane-tab ' + (i ? 'selected' : ''),
        onClick: () => s(e),
        title: t,
        children: [
          f.jsx('div', { className: 'tabbed-pane-tab-label', children: t }),
          !!n && f.jsx('div', { className: 'tabbed-pane-tab-counter', children: n }),
          !!r && f.jsx('div', { className: 'tabbed-pane-tab-counter error', children: r }),
        ],
      },
      e
    ),
  L0 = 'modulepreload',
  A0 = function (e, t) {
    return new URL(e, t).href;
  },
  mc = {},
  M0 = function (t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      const s = document.getElementsByTagName('link'),
        o = document.querySelector('meta[property=csp-nonce]'),
        l = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute('nonce'));
      i = Promise.all(
        n.map(a => {
          if (((a = A0(a, r)), a in mc)) return;
          mc[a] = !0;
          const u = a.endsWith('.css'),
            c = u ? '[rel="stylesheet"]' : '';
          if (!!r)
            for (let g = s.length - 1; g >= 0; g--) {
              const y = s[g];
              if (y.href === a && (!u || y.rel === 'stylesheet')) return;
            }
          else if (document.querySelector(`link[href="${a}"]${c}`)) return;
          const d = document.createElement('link');
          if (
            ((d.rel = u ? 'stylesheet' : L0),
            u || ((d.as = 'script'), (d.crossOrigin = '')),
            (d.href = a),
            l && d.setAttribute('nonce', l),
            document.head.appendChild(d),
            u)
          )
            return new Promise((g, y) => {
              d.addEventListener('load', g),
                d.addEventListener('error', () => y(new Error(`Unable to preload CSS for ${a}`)));
            });
        })
      );
    }
    return i
      .then(() => t())
      .catch(s => {
        const o = new Event('vite:preloadError', { cancelable: !0 });
        if (((o.payload = s), window.dispatchEvent(o), !o.defaultPrevented)) throw s;
      });
  },
  to = ({
    text: e,
    language: t,
    readOnly: n,
    highlight: r,
    revealLine: i,
    lineNumbers: s,
    isFocused: o,
    focusOnChange: l,
    wrapLines: a,
    onChange: u,
  }) => {
    const [c, h] = vn(),
      [d] = L.useState(
        M0(
          () => import('./codeMirrorModule-BxIIN4UE.js'),
          __vite__mapDeps([0, 1]),
          import.meta.url
        ).then(x => x.default)
      ),
      g = L.useRef(null),
      [y, w] = L.useState();
    return (
      L.useEffect(() => {
        (async () => {
          var E, C;
          const x = await d,
            p = h.current;
          if (!p) return;
          let m = '';
          if (
            (t === 'javascript' && (m = 'javascript'),
            t === 'python' && (m = 'python'),
            t === 'java' && (m = 'text/x-java'),
            t === 'csharp' && (m = 'text/x-csharp'),
            t === 'html' && (m = 'htmlmixed'),
            t === 'css' && (m = 'css'),
            g.current &&
              m === g.current.cm.getOption('mode') &&
              !!n === g.current.cm.getOption('readOnly') &&
              s === g.current.cm.getOption('lineNumbers') &&
              a === g.current.cm.getOption('lineWrapping'))
          )
            return;
          (C = (E = g.current) == null ? void 0 : E.cm) == null || C.getWrapperElement().remove();
          const v = x(p, { value: '', mode: m, readOnly: !!n, lineNumbers: s, lineWrapping: a });
          return (g.current = { cm: v }), o && v.focus(), w(v), v;
        })();
      }, [d, y, h, t, s, a, n, o]),
      L.useEffect(() => {
        g.current && g.current.cm.setSize(c.width, c.height);
      }, [c]),
      L.useLayoutEffect(() => {
        var m;
        if (!y) return;
        let x = !1;
        if (
          (y.getValue() !== e &&
            (y.setValue(e), (x = !0), l && (y.execCommand('selectAll'), y.focus())),
          x || JSON.stringify(r) !== JSON.stringify(g.current.highlight))
        ) {
          for (const E of g.current.highlight || []) y.removeLineClass(E.line - 1, 'wrap');
          for (const E of r || []) y.addLineClass(E.line - 1, 'wrap', `source-line-${E.type}`);
          for (const E of g.current.widgets || []) y.removeLineWidget(E);
          const v = [];
          for (const E of r || []) {
            if (E.type !== 'error') continue;
            const C = (m = g.current) == null ? void 0 : m.cm.getLine(E.line - 1);
            if (C) {
              const N = document.createElement('div');
              (N.className = 'source-line-error-underline'),
                (N.innerHTML = '&nbsp;'.repeat(C.length || 1)),
                v.push(y.addLineWidget(E.line, N, { above: !0, coverGutter: !1 }));
            }
            const k = document.createElement('div');
            (k.innerHTML = oi(E.message || '')),
              (k.className = 'source-line-error-widget'),
              v.push(y.addLineWidget(E.line, k, { above: !0, coverGutter: !1 }));
          }
          (g.current.highlight = r), (g.current.widgets = v);
        }
        typeof i == 'number' &&
          g.current.cm.lineCount() >= i &&
          y.scrollIntoView({ line: Math.max(0, i - 1), ch: 0 }, 50);
        let p;
        return (
          u && ((p = () => u(y.getValue())), y.on('change', p)),
          () => {
            p && y.off('change', p);
          }
        );
      }, [y, e, r, i, l, u]),
      f.jsx('div', { className: 'cm-wrapper', ref: h })
    );
  },
  I0 = ({ resource: e, onClose: t }) => {
    const [n, r] = L.useState('request');
    return f.jsx(Ol, {
      dataTestId: 'network-request-details',
      leftToolbar: [f.jsx(Qn, { icon: 'close', title: 'Close', onClick: t })],
      tabs: [
        { id: 'request', title: 'Request', render: () => f.jsx(j0, { resource: e }) },
        { id: 'response', title: 'Response', render: () => f.jsx(P0, { resource: e }) },
        { id: 'body', title: 'Body', render: () => f.jsx(R0, { resource: e }) },
      ],
      selectedTab: n,
      setSelectedTab: r,
    });
  },
  j0 = ({ resource: e }) => {
    const [t, n] = L.useState(null);
    return (
      L.useEffect(() => {
        (async () => {
          if (e.request.postData) {
            const i = e.request.headers.find(l => l.name === 'Content-Type'),
              s = i ? i.value : '',
              o = Ih(s);
            if (e.request.postData._sha1) {
              const l = await fetch(`sha1/${e.request.postData._sha1}`);
              n({ text: zl(await l.text(), s), language: o });
            } else n({ text: zl(e.request.postData.text, s), language: o });
          } else n(null);
        })();
      }, [e]),
      f.jsxs('div', {
        className: 'network-request-details-tab',
        children: [
          f.jsx('div', { className: 'network-request-details-header', children: 'URL' }),
          f.jsx('div', { className: 'network-request-details-url', children: e.request.url }),
          f.jsx('div', {
            className: 'network-request-details-header',
            children: 'Request Headers',
          }),
          f.jsx('div', {
            className: 'network-request-details-headers',
            children: e.request.headers.map(r => `${r.name}: ${r.value}`).join(`
`),
          }),
          t &&
            f.jsx('div', { className: 'network-request-details-header', children: 'Request Body' }),
          t && f.jsx(to, { text: t.text, language: t.language, readOnly: !0, lineNumbers: !0 }),
        ],
      })
    );
  },
  P0 = ({ resource: e }) =>
    f.jsxs('div', {
      className: 'network-request-details-tab',
      children: [
        f.jsx('div', { className: 'network-request-details-header', children: 'Response Headers' }),
        f.jsx('div', {
          className: 'network-request-details-headers',
          children: e.response.headers.map(t => `${t.name}: ${t.value}`).join(`
`),
        }),
      ],
    }),
  R0 = ({ resource: e }) => {
    const [t, n] = L.useState(null);
    return (
      L.useEffect(() => {
        (async () => {
          if (e.response.content._sha1) {
            const i = e.response.content.mimeType.includes('image'),
              s = await fetch(`sha1/${e.response.content._sha1}`);
            if (i) {
              const o = await s.blob(),
                l = new FileReader(),
                a = new Promise(u => (l.onload = u));
              l.readAsDataURL(o), n({ dataUrl: (await a).target.result });
            } else {
              const o = zl(await s.text(), e.response.content.mimeType),
                l = Ih(e.response.content.mimeType);
              n({ text: o, language: l });
            }
          }
        })();
      }, [e]),
      f.jsxs('div', {
        className: 'network-request-details-tab',
        children: [
          !e.response.content._sha1 &&
            f.jsx('div', { children: 'Response body is not available for this request.' }),
          t && t.dataUrl && f.jsx('img', { draggable: 'false', src: t.dataUrl }),
          t &&
            t.text &&
            f.jsx(to, { text: t.text, language: t.language, readOnly: !0, lineNumbers: !0 }),
        ],
      })
    );
  };
function zl(e, t) {
  if (e === null) return 'Loading...';
  const n = e;
  if (n === '') return '<Empty>';
  if (t.includes('application/json'))
    try {
      return JSON.stringify(JSON.parse(n), null, 2);
    } catch {
      return n;
    }
  return t.includes('application/x-www-form-urlencoded') ? decodeURIComponent(n) : n;
}
function Ih(e) {
  if (e.includes('javascript') || e.includes('json')) return 'javascript';
  if (e.includes('html')) return 'html';
  if (e.includes('css')) return 'css';
}
const jh = ({ cursor: e, onPaneMouseMove: t, onPaneMouseUp: n, onPaneDoubleClick: r }) => (
    Ht.useEffect(() => {
      const i = document.createElement('div');
      return (
        (i.style.position = 'fixed'),
        (i.style.top = '0'),
        (i.style.right = '0'),
        (i.style.bottom = '0'),
        (i.style.left = '0'),
        (i.style.zIndex = '9999'),
        (i.style.cursor = e),
        document.body.appendChild(i),
        t && i.addEventListener('mousemove', t),
        n && i.addEventListener('mouseup', n),
        r && document.body.addEventListener('dblclick', r),
        () => {
          t && i.removeEventListener('mousemove', t),
            n && i.removeEventListener('mouseup', n),
            r && document.body.removeEventListener('dblclick', r),
            document.body.removeChild(i);
        }
      );
    }, [e, t, n, r]),
    f.jsx(f.Fragment, {})
  ),
  $0 = { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 },
  Ph = ({
    orientation: e,
    offsets: t,
    setOffsets: n,
    resizerColor: r,
    resizerWidth: i,
    minColumnWidth: s,
  }) => {
    const o = s || 0,
      [l, a] = Ht.useState(null),
      [u, c] = vn(),
      h = {
        position: 'absolute',
        right: e === 'horizontal' ? void 0 : 0,
        bottom: e === 'horizontal' ? 0 : void 0,
        width: e === 'horizontal' ? 7 : void 0,
        height: e === 'horizontal' ? void 0 : 7,
        borderTopWidth: e === 'horizontal' ? void 0 : (7 - i) / 2,
        borderRightWidth: e === 'horizontal' ? (7 - i) / 2 : void 0,
        borderBottomWidth: e === 'horizontal' ? void 0 : (7 - i) / 2,
        borderLeftWidth: e === 'horizontal' ? (7 - i) / 2 : void 0,
        borderColor: 'transparent',
        borderStyle: 'solid',
        cursor: e === 'horizontal' ? 'ew-resize' : 'ns-resize',
      };
    return f.jsxs('div', {
      style: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: -(7 - i) / 2,
        zIndex: 100,
        pointerEvents: 'none',
      },
      ref: c,
      children: [
        !!l &&
          f.jsx(jh, {
            cursor: e === 'horizontal' ? 'ew-resize' : 'ns-resize',
            onPaneMouseUp: () => a(null),
            onPaneMouseMove: d => {
              if (!d.buttons) a(null);
              else if (l) {
                const g = e === 'horizontal' ? d.clientX - l.clientX : d.clientY - l.clientY,
                  y = l.offset + g,
                  w = l.index > 0 ? t[l.index - 1] : 0,
                  x = e === 'horizontal' ? u.width : u.height,
                  p = Math.min(Math.max(w + o, y), x - o) - t[l.index];
                for (let m = l.index; m < t.length; ++m) t[m] = t[m] + p;
                n([...t]);
              }
            },
          }),
        t.map((d, g) =>
          f.jsx('div', {
            style: {
              ...h,
              top: e === 'horizontal' ? 0 : d,
              left: e === 'horizontal' ? d : 0,
              pointerEvents: 'initial',
            },
            onMouseDown: y => a({ clientX: y.clientX, clientY: y.clientY, offset: d, index: g }),
            children: f.jsx('div', { style: { ...$0, background: r } }),
          })
        ),
      ],
    });
  };
function O0(e) {
  const [t, n] = L.useState([]);
  L.useEffect(() => {
    const s = [];
    for (let o = 0; o < e.columns.length - 1; ++o) {
      const l = e.columns[o];
      s[o] = (s[o - 1] || 0) + e.columnWidths.get(l);
    }
    n(s);
  }, [e.columns, e.columnWidths]);
  function r(s) {
    const o = new Map(e.columnWidths.entries());
    for (let l = 0; l < s.length; ++l) {
      const a = s[l] - (s[l - 1] || 0),
        u = e.columns[l];
      o.set(u, a);
    }
    e.setColumnWidths(o);
  }
  const i = L.useCallback(
    s => {
      var o, l;
      (l = e.setSorting) == null ||
        l.call(e, {
          by: s,
          negate: ((o = e.sorting) == null ? void 0 : o.by) === s ? !e.sorting.negate : !1,
        });
    },
    [e]
  );
  return f.jsxs('div', {
    className: `grid-view ${e.name}-grid-view`,
    children: [
      f.jsx(Ph, {
        orientation: 'horizontal',
        offsets: t,
        setOffsets: r,
        resizerColor: 'var(--vscode-panel-border)',
        resizerWidth: 1,
        minColumnWidth: 25,
      }),
      f.jsxs('div', {
        className: 'vbox',
        children: [
          f.jsx('div', {
            className: 'grid-view-header',
            children: e.columns.map((s, o) =>
              f.jsxs('div', {
                className: 'grid-view-header-cell ' + z0(s, e.sorting),
                style: { width: o < e.columns.length - 1 ? e.columnWidths.get(s) : void 0 },
                onClick: () => e.setSorting && i(s),
                children: [
                  f.jsx('span', {
                    className: 'grid-view-header-cell-title',
                    children: e.columnTitle(s),
                  }),
                  f.jsx('span', { className: 'codicon codicon-triangle-up' }),
                  f.jsx('span', { className: 'codicon codicon-triangle-down' }),
                ],
              })
            ),
          }),
          f.jsx(hi, {
            name: e.name,
            items: e.items,
            id: e.id,
            render: (s, o) =>
              f.jsx(f.Fragment, {
                children: e.columns.map((l, a) => {
                  const { body: u, title: c } = e.render(s, l, o);
                  return f.jsx('div', {
                    className: `grid-view-cell grid-view-column-${String(l)}`,
                    title: c,
                    style: { width: a < e.columns.length - 1 ? e.columnWidths.get(l) : void 0 },
                    children: u,
                  });
                }),
              }),
            icon: e.icon,
            indent: e.indent,
            isError: e.isError,
            isWarning: e.isWarning,
            isInfo: e.isInfo,
            selectedItem: e.selectedItem,
            onAccepted: e.onAccepted,
            onSelected: e.onSelected,
            onLeftArrow: e.onLeftArrow,
            onRightArrow: e.onRightArrow,
            onHighlighted: e.onHighlighted,
            onIconClicked: e.onIconClicked,
            noItemsMessage: e.noItemsMessage,
            dataTestId: e.dataTestId,
            noHighlightOnHover: e.noHighlightOnHover,
          }),
        ],
      }),
    ],
  });
}
function z0(e, t) {
  return e === (t == null ? void 0 : t.by) ? ' filter-' + (t.negate ? 'negative' : 'positive') : '';
}
const D0 = O0;
function F0(e, t) {
  const n = L.useMemo(
      () =>
        ((e == null ? void 0 : e.resources) || []).filter(o =>
          t
            ? !!o._monotonicTime && o._monotonicTime >= t.minimum && o._monotonicTime <= t.maximum
            : !0
        ),
      [e, t]
    ),
    r = L.useMemo(() => new q0(e), [e]);
  return { resources: n, contextIdMap: r };
}
const H0 = ({ boundaries: e, networkModel: t, onEntryHovered: n }) => {
    const [r, i] = L.useState(void 0),
      [s, o] = L.useState(void 0),
      { renderedEntries: l } = L.useMemo(() => {
        const h = t.resources.map(d => X0(d, e, t.contextIdMap));
        return r && G0(h, r), { renderedEntries: h };
      }, [t.resources, t.contextIdMap, r, e]),
      [a, u] = L.useState(() => new Map(Rh().map(h => [h, B0(h)])));
    if (!t.resources.length) return f.jsx(lr, { text: 'No network calls' });
    const c = f.jsx(D0, {
      name: 'network',
      items: l,
      selectedItem: s,
      onSelected: h => o(h),
      onHighlighted: h => n(h == null ? void 0 : h.resource),
      columns: V0(!!s, l),
      columnTitle: U0,
      columnWidths: a,
      setColumnWidths: u,
      isError: h => h.status.code >= 400,
      isInfo: h => !!h.route,
      render: (h, d) => W0(h, d),
      sorting: r,
      setSorting: i,
    });
    return f.jsxs(f.Fragment, {
      children: [
        !s && c,
        s &&
          f.jsxs(As, {
            sidebarSize: a.get('name'),
            sidebarIsFirst: !0,
            orientation: 'horizontal',
            settingName: 'networkResourceDetails',
            children: [f.jsx(I0, { resource: s.resource, onClose: () => o(void 0) }), c],
          }),
      ],
    });
  },
  U0 = e =>
    e === 'contextId'
      ? 'Source'
      : e === 'name'
      ? 'Name'
      : e === 'method'
      ? 'Method'
      : e === 'status'
      ? 'Status'
      : e === 'contentType'
      ? 'Content Type'
      : e === 'duration'
      ? 'Duration'
      : e === 'size'
      ? 'Size'
      : e === 'start'
      ? 'Start'
      : e === 'route'
      ? 'Route'
      : '',
  B0 = e =>
    e === 'name'
      ? 200
      : e === 'method' || e === 'status'
      ? 60
      : e === 'contentType'
      ? 200
      : e === 'contextId'
      ? 60
      : 100;
function V0(e, t) {
  if (e) {
    const r = ['name'];
    return gc(t) && r.unshift('contextId'), r;
  }
  let n = Rh();
  return gc(t) || (n = n.filter(r => r !== 'contextId')), n;
}
function Rh() {
  return [
    'contextId',
    'name',
    'method',
    'status',
    'contentType',
    'duration',
    'size',
    'start',
    'route',
  ];
}
const W0 = (e, t) =>
  t === 'contextId'
    ? { body: e.contextId, title: e.name.url }
    : t === 'name'
    ? { body: e.name.name, title: e.name.url }
    : t === 'method'
    ? { body: e.method }
    : t === 'status'
    ? { body: e.status.code > 0 ? e.status.code : '', title: e.status.text }
    : t === 'contentType'
    ? { body: e.contentType }
    : t === 'duration'
    ? { body: Ke(e.duration) }
    : t === 'size'
    ? { body: hm(e.size) }
    : t === 'start'
    ? { body: Ke(e.start) }
    : t === 'route'
    ? { body: e.route }
    : { body: '' };
class q0 {
  constructor(t) {
    B(this, '_pagerefToShortId', new Map());
    B(this, '_contextToId', new Map());
    B(this, '_lastPageId', 0);
    B(this, '_lastApiRequestContextId', 0);
  }
  contextId(t) {
    return t.pageref ? this._pageId(t.pageref) : t._apiRequest ? this._apiRequestContextId(t) : '';
  }
  _pageId(t) {
    let n = this._pagerefToShortId.get(t);
    return (
      n || (++this._lastPageId, (n = 'page#' + this._lastPageId), this._pagerefToShortId.set(t, n)),
      n
    );
  }
  _apiRequestContextId(t) {
    const n = Ls(t);
    if (!n) return '';
    let r = this._contextToId.get(n);
    return (
      r ||
        (++this._lastApiRequestContextId,
        (r = 'api#' + this._lastApiRequestContextId),
        this._contextToId.set(n, r)),
      r
    );
  }
}
function gc(e) {
  const t = new Set();
  for (const n of e) if ((t.add(n.contextId), t.size > 1)) return !0;
  return !1;
}
const X0 = (e, t, n) => {
  const r = Q0(e);
  let i;
  try {
    const l = new URL(e.request.url);
    (i = l.pathname.substring(l.pathname.lastIndexOf('/') + 1)), i || (i = l.host);
  } catch {
    i = e.request.url;
  }
  let s = e.response.content.mimeType;
  const o = s.match(/^(.*);\s*charset=.*$/);
  return (
    o && (s = o[1]),
    {
      name: { name: i, url: e.request.url },
      method: e.request.method,
      status: { code: e.response.status, text: e.response.statusText },
      contentType: s,
      duration: e.time,
      size: e.response._transferSize > 0 ? e.response._transferSize : e.response.bodySize,
      start: e._monotonicTime - t.minimum,
      route: r,
      resource: e,
      contextId: n.contextId(e),
    }
  );
};
function Q0(e) {
  return e._wasAborted
    ? 'aborted'
    : e._wasContinued
    ? 'continued'
    : e._wasFulfilled
    ? 'fulfilled'
    : e._apiRequest
    ? 'api'
    : '';
}
function G0(e, t) {
  const n = K0(t == null ? void 0 : t.by);
  n && e.sort(n), t.negate && e.reverse();
}
function K0(e) {
  if (e === 'start') return (t, n) => t.start - n.start;
  if (e === 'duration') return (t, n) => t.duration - n.duration;
  if (e === 'status') return (t, n) => t.status.code - n.status.code;
  if (e === 'method')
    return (t, n) => {
      const r = t.method,
        i = n.method;
      return r.localeCompare(i);
    };
  if (e === 'size') return (t, n) => t.size - n.size;
  if (e === 'contentType') return (t, n) => t.contentType.localeCompare(n.contentType);
  if (e === 'name') return (t, n) => t.name.name.localeCompare(n.name.name);
  if (e === 'route') return (t, n) => t.route.localeCompare(n.route);
  if (e === 'contextId') return (t, n) => t.contextId.localeCompare(n.contextId);
}
const vc = {
  queryAll(e, t) {
    t.startsWith('/') && e.nodeType !== Node.DOCUMENT_NODE && (t = '.' + t);
    const n = [],
      r = e.ownerDocument || e;
    if (!r) return n;
    const i = r.evaluate(t, e, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE);
    for (let s = i.iterateNext(); s; s = i.iterateNext())
      s.nodeType === Node.ELEMENT_NODE && n.push(s);
    return n;
  },
};
let $h = '';
function Y0(e) {
  $h = e;
}
function no(e, t) {
  for (; t; ) {
    if (e.contains(t)) return !0;
    t = zh(t);
  }
  return !1;
}
function Te(e) {
  if (e.parentElement) return e.parentElement;
  if (e.parentNode && e.parentNode.nodeType === 11 && e.parentNode.host) return e.parentNode.host;
}
function Oh(e) {
  let t = e;
  for (; t.parentNode; ) t = t.parentNode;
  if (t.nodeType === 11 || t.nodeType === 9) return t;
}
function zh(e) {
  for (; e.parentElement; ) e = e.parentElement;
  return Te(e);
}
function Mr(e, t, n) {
  for (; e; ) {
    const r = e.closest(t);
    if (n && r !== n && r != null && r.contains(n)) return;
    if (r) return r;
    e = zh(e);
  }
}
function ar(e, t) {
  return e.ownerDocument && e.ownerDocument.defaultView
    ? e.ownerDocument.defaultView.getComputedStyle(e, t)
    : void 0;
}
function Dh(e, t) {
  if (((t = t ?? ar(e)), !t)) return !0;
  if (Element.prototype.checkVisibility && $h !== 'webkit') {
    if (!e.checkVisibility()) return !1;
  } else {
    const n = e.closest('details,summary');
    if (n !== e && (n == null ? void 0 : n.nodeName) === 'DETAILS' && !n.open) return !1;
  }
  return t.visibility === 'visible';
}
function js(e) {
  const t = ar(e);
  if (!t) return !0;
  if (t.display === 'contents') {
    for (let r = e.firstChild; r; r = r.nextSibling)
      if ((r.nodeType === 1 && js(r)) || (r.nodeType === 3 && Fh(r))) return !0;
    return !1;
  }
  if (!Dh(e, t)) return !1;
  const n = e.getBoundingClientRect();
  return n.width > 0 && n.height > 0;
}
function Fh(e) {
  const t = e.ownerDocument.createRange();
  t.selectNode(e);
  const n = t.getBoundingClientRect();
  return n.width > 0 && n.height > 0;
}
function xe(e) {
  return e instanceof HTMLFormElement ? 'FORM' : e.tagName.toUpperCase();
}
function yc(e) {
  return e.hasAttribute('aria-label') || e.hasAttribute('aria-labelledby');
}
const wc =
    'article:not([role]), aside:not([role]), main:not([role]), nav:not([role]), section:not([role]), [role=article], [role=complementary], [role=main], [role=navigation], [role=region]',
  J0 = new Map([
    ['aria-atomic', void 0],
    ['aria-busy', void 0],
    ['aria-controls', void 0],
    ['aria-current', void 0],
    ['aria-describedby', void 0],
    ['aria-details', void 0],
    ['aria-dropeffect', void 0],
    ['aria-flowto', void 0],
    ['aria-grabbed', void 0],
    ['aria-hidden', void 0],
    ['aria-keyshortcuts', void 0],
    [
      'aria-label',
      new Set([
        'caption',
        'code',
        'deletion',
        'emphasis',
        'generic',
        'insertion',
        'paragraph',
        'presentation',
        'strong',
        'subscript',
        'superscript',
      ]),
    ],
    [
      'aria-labelledby',
      new Set([
        'caption',
        'code',
        'deletion',
        'emphasis',
        'generic',
        'insertion',
        'paragraph',
        'presentation',
        'strong',
        'subscript',
        'superscript',
      ]),
    ],
    ['aria-live', void 0],
    ['aria-owns', void 0],
    ['aria-relevant', void 0],
    ['aria-roledescription', new Set(['generic'])],
  ]);
function Hh(e, t) {
  return [...J0].some(([n, r]) => !(r != null && r.has(t || '')) && e.hasAttribute(n));
}
function Uh(e) {
  return !Number.isNaN(Number(String(e.getAttribute('tabindex'))));
}
function Z0(e) {
  return !ep(e) && (ey(e) || Uh(e));
}
function ey(e) {
  const t = xe(e);
  return ['BUTTON', 'DETAILS', 'SELECT', 'TEXTAREA'].includes(t)
    ? !0
    : t === 'A' || t === 'AREA'
    ? e.hasAttribute('href')
    : t === 'INPUT'
    ? !e.hidden
    : !1;
}
const jo = {
    A: e => (e.hasAttribute('href') ? 'link' : null),
    AREA: e => (e.hasAttribute('href') ? 'link' : null),
    ARTICLE: () => 'article',
    ASIDE: () => 'complementary',
    BLOCKQUOTE: () => 'blockquote',
    BUTTON: () => 'button',
    CAPTION: () => 'caption',
    CODE: () => 'code',
    DATALIST: () => 'listbox',
    DD: () => 'definition',
    DEL: () => 'deletion',
    DETAILS: () => 'group',
    DFN: () => 'term',
    DIALOG: () => 'dialog',
    DT: () => 'term',
    EM: () => 'emphasis',
    FIELDSET: () => 'group',
    FIGURE: () => 'figure',
    FOOTER: e => (Mr(e, wc) ? null : 'contentinfo'),
    FORM: e => (yc(e) ? 'form' : null),
    H1: () => 'heading',
    H2: () => 'heading',
    H3: () => 'heading',
    H4: () => 'heading',
    H5: () => 'heading',
    H6: () => 'heading',
    HEADER: e => (Mr(e, wc) ? null : 'banner'),
    HR: () => 'separator',
    HTML: () => 'document',
    IMG: e =>
      e.getAttribute('alt') === '' && !e.getAttribute('title') && !Hh(e) && !Uh(e)
        ? 'presentation'
        : 'img',
    INPUT: e => {
      const t = e.type.toLowerCase();
      if (t === 'search') return e.hasAttribute('list') ? 'combobox' : 'searchbox';
      if (['email', 'tel', 'text', 'url', ''].includes(t)) {
        const n = pi(e, e.getAttribute('list'))[0];
        return n && xe(n) === 'DATALIST' ? 'combobox' : 'textbox';
      }
      return t === 'hidden'
        ? ''
        : {
            button: 'button',
            checkbox: 'checkbox',
            image: 'button',
            number: 'spinbutton',
            radio: 'radio',
            range: 'slider',
            reset: 'button',
            submit: 'button',
          }[t] || 'textbox';
    },
    INS: () => 'insertion',
    LI: () => 'listitem',
    MAIN: () => 'main',
    MARK: () => 'mark',
    MATH: () => 'math',
    MENU: () => 'list',
    METER: () => 'meter',
    NAV: () => 'navigation',
    OL: () => 'list',
    OPTGROUP: () => 'group',
    OPTION: () => 'option',
    OUTPUT: () => 'status',
    P: () => 'paragraph',
    PROGRESS: () => 'progressbar',
    SECTION: e => (yc(e) ? 'region' : null),
    SELECT: e => (e.hasAttribute('multiple') || e.size > 1 ? 'listbox' : 'combobox'),
    STRONG: () => 'strong',
    SUB: () => 'subscript',
    SUP: () => 'superscript',
    SVG: () => 'img',
    TABLE: () => 'table',
    TBODY: () => 'rowgroup',
    TD: e => {
      const t = Mr(e, 'table'),
        n = t ? Ps(t) : '';
      return n === 'grid' || n === 'treegrid' ? 'gridcell' : 'cell';
    },
    TEXTAREA: () => 'textbox',
    TFOOT: () => 'rowgroup',
    TH: e => {
      if (e.getAttribute('scope') === 'col') return 'columnheader';
      if (e.getAttribute('scope') === 'row') return 'rowheader';
      const t = Mr(e, 'table'),
        n = t ? Ps(t) : '';
      return n === 'grid' || n === 'treegrid' ? 'gridcell' : 'cell';
    },
    THEAD: () => 'rowgroup',
    TIME: () => 'time',
    TR: () => 'row',
    UL: () => 'list',
  },
  ty = {
    DD: ['DL', 'DIV'],
    DIV: ['DL'],
    DT: ['DL', 'DIV'],
    LI: ['OL', 'UL'],
    TBODY: ['TABLE'],
    TD: ['TR'],
    TFOOT: ['TABLE'],
    TH: ['TR'],
    THEAD: ['TABLE'],
    TR: ['THEAD', 'TBODY', 'TFOOT', 'TABLE'],
  };
function xc(e) {
  var r;
  const t = ((r = jo[xe(e)]) == null ? void 0 : r.call(jo, e)) || '';
  if (!t) return null;
  let n = e;
  for (; n; ) {
    const i = Te(n),
      s = ty[xe(n)];
    if (!s || !i || !s.includes(xe(i))) break;
    const o = Ps(i);
    if ((o === 'none' || o === 'presentation') && !Bh(i, o)) return o;
    n = i;
  }
  return t;
}
const ny = [
    'alert',
    'alertdialog',
    'application',
    'article',
    'banner',
    'blockquote',
    'button',
    'caption',
    'cell',
    'checkbox',
    'code',
    'columnheader',
    'combobox',
    'command',
    'complementary',
    'composite',
    'contentinfo',
    'definition',
    'deletion',
    'dialog',
    'directory',
    'document',
    'emphasis',
    'feed',
    'figure',
    'form',
    'generic',
    'grid',
    'gridcell',
    'group',
    'heading',
    'img',
    'input',
    'insertion',
    'landmark',
    'link',
    'list',
    'listbox',
    'listitem',
    'log',
    'main',
    'marquee',
    'math',
    'meter',
    'menu',
    'menubar',
    'menuitem',
    'menuitemcheckbox',
    'menuitemradio',
    'navigation',
    'none',
    'note',
    'option',
    'paragraph',
    'presentation',
    'progressbar',
    'radio',
    'radiogroup',
    'range',
    'region',
    'roletype',
    'row',
    'rowgroup',
    'rowheader',
    'scrollbar',
    'search',
    'searchbox',
    'section',
    'sectionhead',
    'select',
    'separator',
    'slider',
    'spinbutton',
    'status',
    'strong',
    'structure',
    'subscript',
    'superscript',
    'switch',
    'tab',
    'table',
    'tablist',
    'tabpanel',
    'term',
    'textbox',
    'time',
    'timer',
    'toolbar',
    'tooltip',
    'tree',
    'treegrid',
    'treeitem',
    'widget',
    'window',
  ],
  ry = [
    'command',
    'composite',
    'input',
    'landmark',
    'range',
    'roletype',
    'section',
    'sectionhead',
    'select',
    'structure',
    'widget',
    'window',
  ],
  iy = ny.filter(e => !ry.includes(e));
function Ps(e) {
  return (
    (e.getAttribute('role') || '')
      .split(' ')
      .map(n => n.trim())
      .find(n => iy.includes(n)) || null
  );
}
function Bh(e, t) {
  return Hh(e, t) || Z0(e);
}
function Ne(e) {
  const t = Ps(e);
  if (!t) return xc(e);
  if (t === 'none' || t === 'presentation') {
    const n = xc(e);
    if (Bh(e, n)) return n;
  }
  return t;
}
function Vh(e) {
  return e === null ? void 0 : e.toLowerCase() === 'true';
}
function ht(e) {
  if (['STYLE', 'SCRIPT', 'NOSCRIPT', 'TEMPLATE'].includes(xe(e))) return !0;
  const t = ar(e),
    n = e.nodeName === 'SLOT';
  if ((t == null ? void 0 : t.display) === 'contents' && !n) {
    for (let i = e.firstChild; i; i = i.nextSibling)
      if ((i.nodeType === 1 && !ht(i)) || (i.nodeType === 3 && Fh(i))) return !1;
    return !0;
  }
  return !(e.nodeName === 'OPTION' && !!e.closest('select')) && !n && !Dh(e, t) ? !0 : Wh(e);
}
function Wh(e) {
  let t = Rt == null ? void 0 : Rt.get(e);
  if (t === void 0) {
    if (
      ((t = !1), e.parentElement && e.parentElement.shadowRoot && !e.assignedSlot && (t = !0), !t)
    ) {
      const n = ar(e);
      t = !n || n.display === 'none' || Vh(e.getAttribute('aria-hidden')) === !0;
    }
    if (!t) {
      const n = Te(e);
      n && (t = Wh(n));
    }
    Rt == null || Rt.set(e, t);
  }
  return t;
}
function pi(e, t) {
  if (!t) return [];
  const n = Oh(e);
  if (!n) return [];
  try {
    const r = t.split(' ').filter(s => !!s),
      i = new Set();
    for (const s of r) {
      const o = n.querySelector('#' + CSS.escape(s));
      o && i.add(o);
    }
    return [...i];
  } catch {
    return [];
  }
}
function xt(e) {
  return e.trim();
}
function ns(e) {
  return e
    .split(' ')
    .map(t =>
      t
        .replace(
          /\r\n/g,
          `
`
        )
        .replace(/\s\s*/g, ' ')
    )
    .join(' ')
    .trim();
}
function _c(e, t) {
  const n = [...e.querySelectorAll(t)];
  for (const r of pi(e, e.getAttribute('aria-owns')))
    r.matches(t) && n.push(r), n.push(...r.querySelectorAll(t));
  return n;
}
function Sc(e, t) {
  const n = t === '::before' ? qa : Xa;
  if (n != null && n.has(e)) return (n == null ? void 0 : n.get(e)) || '';
  const r = ar(e, t),
    i = sy(r);
  return n && n.set(e, i), i;
}
function sy(e) {
  if (!e) return '';
  const t = e.content;
  if ((t[0] === "'" && t[t.length - 1] === "'") || (t[0] === '"' && t[t.length - 1] === '"')) {
    const n = t.substring(1, t.length - 1);
    return (e.display || 'inline') !== 'inline' ? ' ' + n + ' ' : n;
  }
  return '';
}
function qh(e) {
  const t = e.getAttribute('aria-labelledby');
  return t === null ? null : pi(e, t);
}
function oy(e, t) {
  const n = [
      'button',
      'cell',
      'checkbox',
      'columnheader',
      'gridcell',
      'heading',
      'link',
      'menuitem',
      'menuitemcheckbox',
      'menuitemradio',
      'option',
      'radio',
      'row',
      'rowheader',
      'switch',
      'tab',
      'tooltip',
      'treeitem',
    ].includes(e),
    r =
      t &&
      [
        '',
        'caption',
        'code',
        'contentinfo',
        'definition',
        'deletion',
        'emphasis',
        'insertion',
        'list',
        'listitem',
        'mark',
        'none',
        'paragraph',
        'presentation',
        'region',
        'row',
        'rowgroup',
        'section',
        'strong',
        'subscript',
        'superscript',
        'table',
        'term',
        'time',
      ].includes(e);
  return n || r;
}
function Rs(e, t) {
  const n = t ? Ba : Ua;
  let r = n == null ? void 0 : n.get(e);
  return (
    r === void 0 &&
      ((r = ''),
      [
        'caption',
        'code',
        'definition',
        'deletion',
        'emphasis',
        'generic',
        'insertion',
        'mark',
        'paragraph',
        'presentation',
        'strong',
        'subscript',
        'suggestion',
        'superscript',
        'term',
        'time',
      ].includes(Ne(e) || '') ||
        (r = ns(
          ft(e, {
            includeHidden: t,
            visitedElements: new Set(),
            embeddedInDescribedBy: void 0,
            embeddedInLabelledBy: void 0,
            embeddedInLabel: void 0,
            embeddedInNativeTextAlternative: void 0,
            embeddedInTargetElement: 'self',
          })
        )),
      n == null || n.set(e, r)),
    r
  );
}
function Ec(e, t) {
  const n = t ? Wa : Va;
  let r = n == null ? void 0 : n.get(e);
  if (r === void 0) {
    if (((r = ''), e.hasAttribute('aria-describedby'))) {
      const i = pi(e, e.getAttribute('aria-describedby'));
      r = ns(
        i
          .map(s =>
            ft(s, {
              includeHidden: t,
              visitedElements: new Set(),
              embeddedInLabelledBy: void 0,
              embeddedInLabel: void 0,
              embeddedInNativeTextAlternative: void 0,
              embeddedInTargetElement: 'none',
              embeddedInDescribedBy: { element: s, hidden: ht(s) },
            })
          )
          .join(' ')
      );
    } else
      e.hasAttribute('aria-description')
        ? (r = ns(e.getAttribute('aria-description') || ''))
        : (r = ns(e.getAttribute('title') || ''));
    n == null || n.set(e, r);
  }
  return r;
}
function ft(e, t) {
  var a, u, c, h;
  if (t.visitedElements.has(e)) return '';
  const n = {
    ...t,
    embeddedInTargetElement:
      t.embeddedInTargetElement === 'self' ? 'descendant' : t.embeddedInTargetElement,
  };
  if (
    !t.includeHidden &&
    !((a = t.embeddedInLabelledBy) != null && a.hidden) &&
    !((u = t.embeddedInDescribedBy) != null && u.hidden) &&
    !((c = t == null ? void 0 : t.embeddedInNativeTextAlternative) != null && c.hidden) &&
    !((h = t == null ? void 0 : t.embeddedInLabel) != null && h.hidden) &&
    ht(e)
  )
    return t.visitedElements.add(e), '';
  const r = qh(e);
  if (!t.embeddedInLabelledBy) {
    const d = (r || [])
      .map(g =>
        ft(g, {
          ...t,
          embeddedInLabelledBy: { element: g, hidden: ht(g) },
          embeddedInDescribedBy: void 0,
          embeddedInTargetElement: 'none',
          embeddedInLabel: void 0,
          embeddedInNativeTextAlternative: void 0,
        })
      )
      .join(' ');
    if (d) return d;
  }
  const i = Ne(e) || '',
    s = xe(e);
  if (t.embeddedInLabel || t.embeddedInLabelledBy || t.embeddedInTargetElement === 'descendant') {
    const d = [...(e.labels || [])].includes(e),
      g = (r || []).includes(e);
    if (!d && !g) {
      if (i === 'textbox')
        return (
          t.visitedElements.add(e),
          s === 'INPUT' || s === 'TEXTAREA' ? e.value : e.textContent || ''
        );
      if (['combobox', 'listbox'].includes(i)) {
        t.visitedElements.add(e);
        let y;
        if (s === 'SELECT')
          (y = [...e.selectedOptions]), !y.length && e.options.length && y.push(e.options[0]);
        else {
          const w = i === 'combobox' ? _c(e, '*').find(x => Ne(x) === 'listbox') : e;
          y = w ? _c(w, '[aria-selected="true"]').filter(x => Ne(x) === 'option') : [];
        }
        return !y.length && s === 'INPUT' ? e.value : y.map(w => ft(w, n)).join(' ');
      }
      if (['progressbar', 'scrollbar', 'slider', 'spinbutton', 'meter'].includes(i))
        return (
          t.visitedElements.add(e),
          e.hasAttribute('aria-valuetext')
            ? e.getAttribute('aria-valuetext') || ''
            : e.hasAttribute('aria-valuenow')
            ? e.getAttribute('aria-valuenow') || ''
            : e.getAttribute('value') || ''
        );
      if (['menu'].includes(i)) return t.visitedElements.add(e), '';
    }
  }
  const o = e.getAttribute('aria-label') || '';
  if (xt(o)) return t.visitedElements.add(e), o;
  if (!['presentation', 'none'].includes(i)) {
    if (s === 'INPUT' && ['button', 'submit', 'reset'].includes(e.type)) {
      t.visitedElements.add(e);
      const d = e.value || '';
      return xt(d)
        ? d
        : e.type === 'submit'
        ? 'Submit'
        : e.type === 'reset'
        ? 'Reset'
        : e.getAttribute('title') || '';
    }
    if (s === 'INPUT' && e.type === 'image') {
      t.visitedElements.add(e);
      const d = e.labels || [];
      if (d.length && !t.embeddedInLabelledBy) return Pi(d, t);
      const g = e.getAttribute('alt') || '';
      if (xt(g)) return g;
      const y = e.getAttribute('title') || '';
      return xt(y) ? y : 'Submit';
    }
    if (!r && s === 'BUTTON') {
      t.visitedElements.add(e);
      const d = e.labels || [];
      if (d.length) return Pi(d, t);
    }
    if (!r && s === 'OUTPUT') {
      t.visitedElements.add(e);
      const d = e.labels || [];
      return d.length ? Pi(d, t) : e.getAttribute('title') || '';
    }
    if (!r && (s === 'TEXTAREA' || s === 'SELECT' || s === 'INPUT')) {
      t.visitedElements.add(e);
      const d = e.labels || [];
      if (d.length) return Pi(d, t);
      const g =
          (s === 'INPUT' &&
            ['text', 'password', 'search', 'tel', 'email', 'url'].includes(e.type)) ||
          s === 'TEXTAREA',
        y = e.getAttribute('placeholder') || '',
        w = e.getAttribute('title') || '';
      return !g || w ? w : y;
    }
    if (!r && s === 'FIELDSET') {
      t.visitedElements.add(e);
      for (let g = e.firstElementChild; g; g = g.nextElementSibling)
        if (xe(g) === 'LEGEND')
          return ft(g, { ...n, embeddedInNativeTextAlternative: { element: g, hidden: ht(g) } });
      return e.getAttribute('title') || '';
    }
    if (!r && s === 'FIGURE') {
      t.visitedElements.add(e);
      for (let g = e.firstElementChild; g; g = g.nextElementSibling)
        if (xe(g) === 'FIGCAPTION')
          return ft(g, { ...n, embeddedInNativeTextAlternative: { element: g, hidden: ht(g) } });
      return e.getAttribute('title') || '';
    }
    if (s === 'IMG') {
      t.visitedElements.add(e);
      const d = e.getAttribute('alt') || '';
      return xt(d) ? d : e.getAttribute('title') || '';
    }
    if (s === 'TABLE') {
      t.visitedElements.add(e);
      for (let g = e.firstElementChild; g; g = g.nextElementSibling)
        if (xe(g) === 'CAPTION')
          return ft(g, { ...n, embeddedInNativeTextAlternative: { element: g, hidden: ht(g) } });
      const d = e.getAttribute('summary') || '';
      if (d) return d;
    }
    if (s === 'AREA') {
      t.visitedElements.add(e);
      const d = e.getAttribute('alt') || '';
      return xt(d) ? d : e.getAttribute('title') || '';
    }
    if (s === 'SVG' || e.ownerSVGElement) {
      t.visitedElements.add(e);
      for (let d = e.firstElementChild; d; d = d.nextElementSibling)
        if (xe(d) === 'TITLE' && d.ownerSVGElement)
          return ft(d, { ...n, embeddedInLabelledBy: { element: d, hidden: ht(d) } });
    }
    if (e.ownerSVGElement && s === 'A') {
      const d = e.getAttribute('xlink:title') || '';
      if (xt(d)) return t.visitedElements.add(e), d;
    }
  }
  const l = s === 'SUMMARY' && !['presentation', 'none'].includes(i);
  if (
    oy(i, t.embeddedInTargetElement === 'descendant') ||
    l ||
    t.embeddedInLabelledBy ||
    t.embeddedInDescribedBy ||
    t.embeddedInLabel ||
    t.embeddedInNativeTextAlternative
  ) {
    t.visitedElements.add(e);
    const d = [],
      g = (p, m) => {
        var v;
        if (!(m && p.assignedSlot))
          if (p.nodeType === 1) {
            const E = ((v = ar(p)) == null ? void 0 : v.display) || 'inline';
            let C = ft(p, n);
            (E !== 'inline' || p.nodeName === 'BR') && (C = ' ' + C + ' '), d.push(C);
          } else p.nodeType === 3 && d.push(p.textContent || '');
      };
    d.push(Sc(e, '::before'));
    const y = e.nodeName === 'SLOT' ? e.assignedNodes() : [];
    if (y.length) for (const p of y) g(p, !1);
    else {
      for (let p = e.firstChild; p; p = p.nextSibling) g(p, !0);
      if (e.shadowRoot) for (let p = e.shadowRoot.firstChild; p; p = p.nextSibling) g(p, !0);
      for (const p of pi(e, e.getAttribute('aria-owns'))) g(p, !0);
    }
    d.push(Sc(e, '::after'));
    const w = d.join('');
    if (t.embeddedInTargetElement === 'self' ? xt(w) : w) return w;
  }
  if (!['presentation', 'none'].includes(i) || s === 'IFRAME') {
    t.visitedElements.add(e);
    const d = e.getAttribute('title') || '';
    if (xt(d)) return d;
  }
  return t.visitedElements.add(e), '';
}
const Xh = ['gridcell', 'option', 'row', 'tab', 'rowheader', 'columnheader', 'treeitem'];
function ly(e) {
  return xe(e) === 'OPTION'
    ? e.selected
    : Xh.includes(Ne(e) || '')
    ? Vh(e.getAttribute('aria-selected')) === !0
    : !1;
}
const Qh = [
  'checkbox',
  'menuitemcheckbox',
  'option',
  'radio',
  'switch',
  'menuitemradio',
  'treeitem',
];
function ay(e) {
  const t = Gh(e, !0);
  return t === 'error' ? !1 : t;
}
function Gh(e, t) {
  const n = xe(e);
  if (t && n === 'INPUT' && e.indeterminate) return 'mixed';
  if (n === 'INPUT' && ['checkbox', 'radio'].includes(e.type)) return e.checked;
  if (Qh.includes(Ne(e) || '')) {
    const r = e.getAttribute('aria-checked');
    return r === 'true' ? !0 : t && r === 'mixed' ? 'mixed' : !1;
  }
  return 'error';
}
const Kh = ['button'];
function uy(e) {
  if (Kh.includes(Ne(e) || '')) {
    const t = e.getAttribute('aria-pressed');
    if (t === 'true') return !0;
    if (t === 'mixed') return 'mixed';
  }
  return !1;
}
const Yh = [
  'application',
  'button',
  'checkbox',
  'combobox',
  'gridcell',
  'link',
  'listbox',
  'menuitem',
  'row',
  'rowheader',
  'tab',
  'treeitem',
  'columnheader',
  'menuitemcheckbox',
  'menuitemradio',
  'rowheader',
  'switch',
];
function cy(e) {
  if (xe(e) === 'DETAILS') return e.open;
  if (Yh.includes(Ne(e) || '')) {
    const t = e.getAttribute('aria-expanded');
    return t === null ? 'none' : t === 'true';
  }
  return 'none';
}
const Jh = ['heading', 'listitem', 'row', 'treeitem'];
function dy(e) {
  const t = { H1: 1, H2: 2, H3: 3, H4: 4, H5: 5, H6: 6 }[xe(e)];
  if (t) return t;
  if (Jh.includes(Ne(e) || '')) {
    const n = e.getAttribute('aria-level'),
      r = n === null ? Number.NaN : Number(n);
    if (Number.isInteger(r) && r >= 1) return r;
  }
  return 0;
}
const fy = [
  'application',
  'button',
  'composite',
  'gridcell',
  'group',
  'input',
  'link',
  'menuitem',
  'scrollbar',
  'separator',
  'tab',
  'checkbox',
  'columnheader',
  'combobox',
  'grid',
  'listbox',
  'menu',
  'menubar',
  'menuitemcheckbox',
  'menuitemradio',
  'option',
  'radio',
  'radiogroup',
  'row',
  'rowheader',
  'searchbox',
  'select',
  'slider',
  'spinbutton',
  'switch',
  'tablist',
  'textbox',
  'toolbar',
  'tree',
  'treegrid',
  'treeitem',
];
function Zh(e) {
  return ep(e) || np(e);
}
function ep(e) {
  return (
    ['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'OPTION', 'OPTGROUP'].includes(e.tagName) &&
    (e.hasAttribute('disabled') || tp(e))
  );
}
function tp(e) {
  return e ? (xe(e) === 'FIELDSET' && e.hasAttribute('disabled') ? !0 : tp(e.parentElement)) : !1;
}
function np(e) {
  if (!e) return !1;
  if (fy.includes(Ne(e) || '')) {
    const t = (e.getAttribute('aria-disabled') || '').toLowerCase();
    if (t === 'true') return !0;
    if (t === 'false') return !1;
  }
  return np(Te(e));
}
function Pi(e, t) {
  return [...e]
    .map(n =>
      ft(n, {
        ...t,
        embeddedInLabel: { element: n, hidden: ht(n) },
        embeddedInNativeTextAlternative: void 0,
        embeddedInLabelledBy: void 0,
        embeddedInDescribedBy: void 0,
        embeddedInTargetElement: 'none',
      })
    )
    .filter(n => !!n)
    .join(' ');
}
let Ua,
  Ba,
  Va,
  Wa,
  Rt,
  qa,
  Xa,
  rp = 0;
function ip() {
  ++rp,
    Ua ?? (Ua = new Map()),
    Ba ?? (Ba = new Map()),
    Va ?? (Va = new Map()),
    Wa ?? (Wa = new Map()),
    Rt ?? (Rt = new Map()),
    qa ?? (qa = new Map()),
    Xa ?? (Xa = new Map());
}
function sp() {
  --rp ||
    ((Ua = void 0),
    (Ba = void 0),
    (Va = void 0),
    (Wa = void 0),
    (Rt = void 0),
    (qa = void 0),
    (Xa = void 0));
}
function op(e, t) {
  for (const n of t.jsonPath) e != null && (e = e[n]);
  return lp(e, t);
}
function lp(e, t) {
  const n = typeof e == 'string' && !t.caseSensitive ? e.toUpperCase() : e,
    r = typeof t.value == 'string' && !t.caseSensitive ? t.value.toUpperCase() : t.value;
  return t.op === '<truthy>'
    ? !!n
    : t.op === '='
    ? r instanceof RegExp
      ? typeof n == 'string' && !!n.match(r)
      : n === r
    : typeof n != 'string' || typeof r != 'string'
    ? !1
    : t.op === '*='
    ? n.includes(r)
    : t.op === '^='
    ? n.startsWith(r)
    : t.op === '$='
    ? n.endsWith(r)
    : t.op === '|='
    ? n === r || n.startsWith(r + '-')
    : t.op === '~='
    ? n.split(' ').includes(r)
    : !1;
}
function Qa(e) {
  const t = e.ownerDocument;
  return (
    e.nodeName === 'SCRIPT' ||
    e.nodeName === 'NOSCRIPT' ||
    e.nodeName === 'STYLE' ||
    (t.head && t.head.contains(e))
  );
}
function je(e, t) {
  let n = e.get(t);
  if (n === void 0) {
    if (((n = { full: '', normalized: '', immediate: [] }), !Qa(t))) {
      let r = '';
      if (t instanceof HTMLInputElement && (t.type === 'submit' || t.type === 'button'))
        n = { full: t.value, normalized: Ue(t.value), immediate: [t.value] };
      else {
        for (let i = t.firstChild; i; i = i.nextSibling)
          i.nodeType === Node.TEXT_NODE
            ? ((n.full += i.nodeValue || ''), (r += i.nodeValue || ''))
            : (r && n.immediate.push(r),
              (r = ''),
              i.nodeType === Node.ELEMENT_NODE && (n.full += je(e, i).full));
        r && n.immediate.push(r),
          t.shadowRoot && (n.full += je(e, t.shadowRoot).full),
          n.full && (n.normalized = Ue(n.full));
      }
    }
    e.set(t, n);
  }
  return n;
}
function ro(e, t, n) {
  if (Qa(t) || !n(je(e, t))) return 'none';
  for (let r = t.firstChild; r; r = r.nextSibling)
    if (r.nodeType === Node.ELEMENT_NODE && n(je(e, r))) return 'selfAndChildren';
  return t.shadowRoot && n(je(e, t.shadowRoot)) ? 'selfAndChildren' : 'self';
}
function ap(e, t) {
  const n = qh(t);
  if (n) return n.map(s => je(e, s));
  const r = t.getAttribute('aria-label');
  if (r !== null && r.trim()) return [{ full: r, normalized: Ue(r), immediate: [r] }];
  const i = t.nodeName === 'INPUT' && t.type !== 'hidden';
  if (['BUTTON', 'METER', 'OUTPUT', 'PROGRESS', 'SELECT', 'TEXTAREA'].includes(t.nodeName) || i) {
    const s = t.labels;
    if (s) return [...s].map(o => je(e, o));
  }
  return [];
}
function Tc(e) {
  return e.displayName || e.name || 'Anonymous';
}
function hy(e) {
  if (e.type)
    switch (typeof e.type) {
      case 'function':
        return Tc(e.type);
      case 'string':
        return e.type;
      case 'object':
        return e.type.displayName || (e.type.render ? Tc(e.type.render) : '');
    }
  if (e._currentElement) {
    const t = e._currentElement.type;
    if (typeof t == 'string') return t;
    if (typeof t == 'function') return t.displayName || t.name || 'Anonymous';
  }
  return '';
}
function py(e) {
  var t;
  return e.key ?? ((t = e._currentElement) == null ? void 0 : t.key);
}
function my(e) {
  if (e.child) {
    const n = [];
    for (let r = e.child; r; r = r.sibling) n.push(r);
    return n;
  }
  if (!e._currentElement) return [];
  const t = n => {
    var i;
    const r = (i = n._currentElement) == null ? void 0 : i.type;
    return typeof r == 'function' || typeof r == 'string';
  };
  if (e._renderedComponent) {
    const n = e._renderedComponent;
    return t(n) ? [n] : [];
  }
  return e._renderedChildren ? [...Object.values(e._renderedChildren)].filter(t) : [];
}
function gy(e) {
  var r;
  const t = e.memoizedProps || ((r = e._currentElement) == null ? void 0 : r.props);
  if (!t || typeof t == 'string') return t;
  const n = { ...t };
  return delete n.children, n;
}
function up(e) {
  var r;
  const t = { key: py(e), name: hy(e), children: my(e).map(up), rootElements: [], props: gy(e) },
    n = e.stateNode || e._hostNode || ((r = e._renderedComponent) == null ? void 0 : r._hostNode);
  if (n instanceof Element) t.rootElements.push(n);
  else for (const i of t.children) t.rootElements.push(...i.rootElements);
  return t;
}
function cp(e, t, n = []) {
  t(e) && n.push(e);
  for (const r of e.children) cp(r, t, n);
  return n;
}
function dp(e, t = []) {
  const r = (e.ownerDocument || e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT);
  do {
    const i = r.currentNode,
      s = i,
      o = Object.keys(s).find(a => a.startsWith('__reactContainer') && s[a] !== null);
    if (o) t.push(s[o].stateNode.current);
    else {
      const a = '_reactRootContainer';
      s.hasOwnProperty(a) && s[a] !== null && t.push(s[a]._internalRoot.current);
    }
    if (i instanceof Element && i.hasAttribute('data-reactroot'))
      for (const a of Object.keys(i))
        (a.startsWith('__reactInternalInstance') || a.startsWith('__reactFiber')) && t.push(i[a]);
    const l = i instanceof Element ? i.shadowRoot : null;
    l && dp(l, t);
  } while (r.nextNode());
  return t;
}
const vy = {
  queryAll(e, t) {
    const { name: n, attributes: r } = cn(t, !1),
      o = dp(e.ownerDocument || e)
        .map(a => up(a))
        .map(a =>
          cp(a, u => {
            const c = u.props ?? {};
            if (
              (u.key !== void 0 && (c.key = u.key),
              (n && u.name !== n) || u.rootElements.some(h => !no(e, h)))
            )
              return !1;
            for (const h of r) if (!op(c, h)) return !1;
            return !0;
          })
        )
        .flat(),
      l = new Set();
    for (const a of o) for (const u of a.rootElements) l.add(u);
    return [...l];
  },
};
function fp(e, t) {
  const n = e.replace(/^[a-zA-Z]:/, '').replace(/\\/g, '/');
  let r = n.substring(n.lastIndexOf('/') + 1);
  return t && r.endsWith(t) && (r = r.substring(0, r.length - t.length)), r;
}
function yy(e, t) {
  return t ? t.toUpperCase() : '';
}
const wy = /(?:^|[-_/])(\w)/g,
  hp = e => e && e.replace(wy, yy);
function xy(e) {
  function t(c) {
    const h = c.name || c._componentTag || c.__playwright_guessedName;
    if (h) return h;
    const d = c.__file;
    if (d) return hp(fp(d, '.vue'));
  }
  function n(c, h) {
    return (c.type.__playwright_guessedName = h), h;
  }
  function r(c) {
    var d, g, y, w;
    const h = t(c.type || {});
    if (h) return h;
    if (c.root === c) return 'Root';
    for (const x in (g = (d = c.parent) == null ? void 0 : d.type) == null ? void 0 : g.components)
      if (((y = c.parent) == null ? void 0 : y.type.components[x]) === c.type) return n(c, x);
    for (const x in (w = c.appContext) == null ? void 0 : w.components)
      if (c.appContext.components[x] === c.type) return n(c, x);
    return 'Anonymous Component';
  }
  function i(c) {
    return c._isBeingDestroyed || c.isUnmounted;
  }
  function s(c) {
    return c.subTree.type.toString() === 'Symbol(Fragment)';
  }
  function o(c) {
    const h = [];
    return (
      c.component && h.push(c.component),
      c.suspense && h.push(...o(c.suspense.activeBranch)),
      Array.isArray(c.children) &&
        c.children.forEach(d => {
          d.component ? h.push(d.component) : h.push(...o(d));
        }),
      h.filter(d => {
        var g;
        return !i(d) && !((g = d.type.devtools) != null && g.hide);
      })
    );
  }
  function l(c) {
    return s(c) ? a(c.subTree) : [c.subTree.el];
  }
  function a(c) {
    if (!c.children) return [];
    const h = [];
    for (let d = 0, g = c.children.length; d < g; d++) {
      const y = c.children[d];
      y.component ? h.push(...l(y.component)) : y.el && h.push(y.el);
    }
    return h;
  }
  function u(c) {
    return { name: r(c), children: o(c.subTree).map(u), rootElements: l(c), props: c.props };
  }
  return u(e);
}
function _y(e) {
  function t(s) {
    const o = s.displayName || s.name || s._componentTag;
    if (o) return o;
    const l = s.__file;
    if (l) return hp(fp(l, '.vue'));
  }
  function n(s) {
    const o = t(s.$options || s.fnOptions || {});
    return o || (s.$root === s ? 'Root' : 'Anonymous Component');
  }
  function r(s) {
    return s.$children
      ? s.$children
      : Array.isArray(s.subTree.children)
      ? s.subTree.children.filter(o => !!o.component).map(o => o.component)
      : [];
  }
  function i(s) {
    return { name: n(s), children: r(s).map(i), rootElements: [s.$el], props: s._props };
  }
  return i(e);
}
function pp(e, t, n = []) {
  t(e) && n.push(e);
  for (const r of e.children) pp(r, t, n);
  return n;
}
function mp(e, t = []) {
  const r = (e.ownerDocument || e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT),
    i = new Set();
  do {
    const s = r.currentNode;
    s.__vue__ && i.add(s.__vue__.$root),
      s.__vue_app__ &&
        s._vnode &&
        s._vnode.component &&
        t.push({ root: s._vnode.component, version: 3 });
    const o = s instanceof Element ? s.shadowRoot : null;
    o && mp(o, t);
  } while (r.nextNode());
  for (const s of i) t.push({ version: 2, root: s });
  return t;
}
const Sy = {
    queryAll(e, t) {
      const n = e.ownerDocument || e,
        { name: r, attributes: i } = cn(t, !1),
        l = mp(n)
          .map(u => (u.version === 3 ? xy(u.root) : _y(u.root)))
          .map(u =>
            pp(u, c => {
              if ((r && c.name !== r) || c.rootElements.some(h => !no(e, h))) return !1;
              for (const h of i) if (!op(c.props, h)) return !1;
              return !0;
            })
          )
          .flat(),
        a = new Set();
      for (const u of l) for (const c of u.rootElements) a.add(c);
      return [...a];
    },
  },
  gp = [
    'selected',
    'checked',
    'pressed',
    'expanded',
    'level',
    'disabled',
    'name',
    'include-hidden',
  ];
gp.sort();
function Sr(e, t, n) {
  if (!t.includes(n))
    throw new Error(
      `"${e}" attribute is only supported for roles: ${t
        .slice()
        .sort()
        .map(r => `"${r}"`)
        .join(', ')}`
    );
}
function Sn(e, t) {
  if (e.op !== '<truthy>' && !t.includes(e.value))
    throw new Error(`"${e.name}" must be one of ${t.map(n => JSON.stringify(n)).join(', ')}`);
}
function En(e, t) {
  if (!t.includes(e.op)) throw new Error(`"${e.name}" does not support "${e.op}" matcher`);
}
function Ey(e, t) {
  const n = { role: t };
  for (const r of e)
    switch (r.name) {
      case 'checked': {
        Sr(r.name, Qh, t),
          Sn(r, [!0, !1, 'mixed']),
          En(r, ['<truthy>', '=']),
          (n.checked = r.op === '<truthy>' ? !0 : r.value);
        break;
      }
      case 'pressed': {
        Sr(r.name, Kh, t),
          Sn(r, [!0, !1, 'mixed']),
          En(r, ['<truthy>', '=']),
          (n.pressed = r.op === '<truthy>' ? !0 : r.value);
        break;
      }
      case 'selected': {
        Sr(r.name, Xh, t),
          Sn(r, [!0, !1]),
          En(r, ['<truthy>', '=']),
          (n.selected = r.op === '<truthy>' ? !0 : r.value);
        break;
      }
      case 'expanded': {
        Sr(r.name, Yh, t),
          Sn(r, [!0, !1]),
          En(r, ['<truthy>', '=']),
          (n.expanded = r.op === '<truthy>' ? !0 : r.value);
        break;
      }
      case 'level': {
        if (
          (Sr(r.name, Jh, t),
          typeof r.value == 'string' && (r.value = +r.value),
          r.op !== '=' || typeof r.value != 'number' || Number.isNaN(r.value))
        )
          throw new Error('"level" attribute must be compared to a number');
        n.level = r.value;
        break;
      }
      case 'disabled': {
        Sn(r, [!0, !1]),
          En(r, ['<truthy>', '=']),
          (n.disabled = r.op === '<truthy>' ? !0 : r.value);
        break;
      }
      case 'name': {
        if (r.op === '<truthy>') throw new Error('"name" attribute must have a value');
        if (typeof r.value != 'string' && !(r.value instanceof RegExp))
          throw new Error('"name" attribute must be a string or a regular expression');
        (n.name = r.value), (n.nameOp = r.op), (n.exact = r.caseSensitive);
        break;
      }
      case 'include-hidden': {
        Sn(r, [!0, !1]),
          En(r, ['<truthy>', '=']),
          (n.includeHidden = r.op === '<truthy>' ? !0 : r.value);
        break;
      }
      default:
        throw new Error(
          `Unknown attribute "${r.name}", must be one of ${gp.map(i => `"${i}"`).join(', ')}.`
        );
    }
  return n;
}
function Ty(e, t, n) {
  const r = [],
    i = o => {
      if (
        Ne(o) === t.role &&
        !(t.selected !== void 0 && ly(o) !== t.selected) &&
        !(t.checked !== void 0 && ay(o) !== t.checked) &&
        !(t.pressed !== void 0 && uy(o) !== t.pressed) &&
        !(t.expanded !== void 0 && cy(o) !== t.expanded) &&
        !(t.level !== void 0 && dy(o) !== t.level) &&
        !(t.disabled !== void 0 && Zh(o) !== t.disabled) &&
        !(!t.includeHidden && ht(o))
      ) {
        if (t.name !== void 0) {
          const l = Ue(Rs(o, !!t.includeHidden));
          if (
            (typeof t.name == 'string' && (t.name = Ue(t.name)),
            n && !t.exact && t.nameOp === '=' && (t.nameOp = '*='),
            !lp(l, {
              name: '',
              jsonPath: [],
              op: t.nameOp || '=',
              value: t.name,
              caseSensitive: !!t.exact,
            }))
          )
            return;
        }
        r.push(o);
      }
    },
    s = o => {
      const l = [];
      o.shadowRoot && l.push(o.shadowRoot);
      for (const a of o.querySelectorAll('*')) i(a), a.shadowRoot && l.push(a.shadowRoot);
      l.forEach(s);
    };
  return s(e), r;
}
function kc(e) {
  return {
    queryAll: (t, n) => {
      const r = cn(n, !0),
        i = r.name.toLowerCase();
      if (!i) throw new Error('Role must not be empty');
      const s = Ey(r.attributes, i);
      ip();
      try {
        return Ty(t, s, e);
      } finally {
        sp();
      }
    },
  };
}
function ky(e, t, n) {
  const r = e.left - t.right;
  if (!(r < 0 || (n !== void 0 && r > n)))
    return r + Math.max(t.bottom - e.bottom, 0) + Math.max(e.top - t.top, 0);
}
function Ny(e, t, n) {
  const r = t.left - e.right;
  if (!(r < 0 || (n !== void 0 && r > n)))
    return r + Math.max(t.bottom - e.bottom, 0) + Math.max(e.top - t.top, 0);
}
function Cy(e, t, n) {
  const r = t.top - e.bottom;
  if (!(r < 0 || (n !== void 0 && r > n)))
    return r + Math.max(e.left - t.left, 0) + Math.max(t.right - e.right, 0);
}
function by(e, t, n) {
  const r = e.top - t.bottom;
  if (!(r < 0 || (n !== void 0 && r > n)))
    return r + Math.max(e.left - t.left, 0) + Math.max(t.right - e.right, 0);
}
function Ly(e, t, n) {
  const r = n === void 0 ? 50 : n;
  let i = 0;
  return (
    e.left - t.right >= 0 && (i += e.left - t.right),
    t.left - e.right >= 0 && (i += t.left - e.right),
    t.top - e.bottom >= 0 && (i += t.top - e.bottom),
    e.top - t.bottom >= 0 && (i += e.top - t.bottom),
    i > r ? void 0 : i
  );
}
const Ay = ['left-of', 'right-of', 'above', 'below', 'near'];
function vp(e, t, n, r) {
  const i = t.getBoundingClientRect(),
    s = { 'left-of': Ny, 'right-of': ky, above: Cy, below: by, near: Ly }[e];
  let o;
  for (const l of n) {
    if (l === t) continue;
    const a = s(i, l.getBoundingClientRect(), r);
    a !== void 0 && (o === void 0 || a < o) && (o = a);
  }
  return o;
}
class My {
  constructor(t) {
    (this._engines = new Map()),
      (this._cacheQueryCSS = new Map()),
      (this._cacheMatches = new Map()),
      (this._cacheQuery = new Map()),
      (this._cacheMatchesSimple = new Map()),
      (this._cacheMatchesParents = new Map()),
      (this._cacheCallMatches = new Map()),
      (this._cacheCallQuery = new Map()),
      (this._cacheQuerySimple = new Map()),
      (this._cacheText = new Map()),
      (this._retainCacheCounter = 0);
    for (const [i, s] of t) this._engines.set(i, s);
    this._engines.set('not', Py),
      this._engines.set('is', Ir),
      this._engines.set('where', Ir),
      this._engines.set('has', Iy),
      this._engines.set('scope', jy),
      this._engines.set('light', Ry),
      this._engines.set('visible', $y),
      this._engines.set('text', Oy),
      this._engines.set('text-is', zy),
      this._engines.set('text-matches', Dy),
      this._engines.set('has-text', Fy),
      this._engines.set('right-of', Er('right-of')),
      this._engines.set('left-of', Er('left-of')),
      this._engines.set('above', Er('above')),
      this._engines.set('below', Er('below')),
      this._engines.set('near', Er('near')),
      this._engines.set('nth-match', Hy);
    const n = [...this._engines.keys()];
    n.sort();
    const r = [...Ch];
    if ((r.sort(), n.join('|') !== r.join('|')))
      throw new Error(
        `Please keep customCSSNames in sync with evaluator engines: ${n.join('|')} vs ${r.join(
          '|'
        )}`
      );
  }
  begin() {
    ++this._retainCacheCounter;
  }
  end() {
    --this._retainCacheCounter,
      this._retainCacheCounter ||
        (this._cacheQueryCSS.clear(),
        this._cacheMatches.clear(),
        this._cacheQuery.clear(),
        this._cacheMatchesSimple.clear(),
        this._cacheMatchesParents.clear(),
        this._cacheCallMatches.clear(),
        this._cacheCallQuery.clear(),
        this._cacheQuerySimple.clear(),
        this._cacheText.clear());
  }
  _cached(t, n, r, i) {
    t.has(n) || t.set(n, []);
    const s = t.get(n),
      o = s.find(a => r.every((u, c) => a.rest[c] === u));
    if (o) return o.result;
    const l = i();
    return s.push({ rest: r, result: l }), l;
  }
  _checkSelector(t) {
    if (!(typeof t == 'object' && t && (Array.isArray(t) || ('simples' in t && t.simples.length))))
      throw new Error(`Malformed selector "${t}"`);
    return t;
  }
  matches(t, n, r) {
    const i = this._checkSelector(n);
    this.begin();
    try {
      return this._cached(
        this._cacheMatches,
        t,
        [i, r.scope, r.pierceShadow, r.originalScope],
        () =>
          Array.isArray(i)
            ? this._matchesEngine(Ir, t, i, r)
            : (this._hasScopeClause(i) && (r = this._expandContextForScopeMatching(r)),
              this._matchesSimple(t, i.simples[i.simples.length - 1].selector, r)
                ? this._matchesParents(t, i, i.simples.length - 2, r)
                : !1)
      );
    } finally {
      this.end();
    }
  }
  query(t, n) {
    const r = this._checkSelector(n);
    this.begin();
    try {
      return this._cached(this._cacheQuery, r, [t.scope, t.pierceShadow, t.originalScope], () => {
        if (Array.isArray(r)) return this._queryEngine(Ir, t, r);
        this._hasScopeClause(r) && (t = this._expandContextForScopeMatching(t));
        const i = this._scoreMap;
        this._scoreMap = new Map();
        let s = this._querySimple(t, r.simples[r.simples.length - 1].selector);
        return (
          (s = s.filter(o => this._matchesParents(o, r, r.simples.length - 2, t))),
          this._scoreMap.size &&
            s.sort((o, l) => {
              const a = this._scoreMap.get(o),
                u = this._scoreMap.get(l);
              return a === u ? 0 : a === void 0 ? 1 : u === void 0 ? -1 : a - u;
            }),
          (this._scoreMap = i),
          s
        );
      });
    } finally {
      this.end();
    }
  }
  _markScore(t, n) {
    this._scoreMap && this._scoreMap.set(t, n);
  }
  _hasScopeClause(t) {
    return t.simples.some(n => n.selector.functions.some(r => r.name === 'scope'));
  }
  _expandContextForScopeMatching(t) {
    if (t.scope.nodeType !== 1) return t;
    const n = Te(t.scope);
    return n ? { ...t, scope: n, originalScope: t.originalScope || t.scope } : t;
  }
  _matchesSimple(t, n, r) {
    return this._cached(
      this._cacheMatchesSimple,
      t,
      [n, r.scope, r.pierceShadow, r.originalScope],
      () => {
        if (t === r.scope || (n.css && !this._matchesCSS(t, n.css))) return !1;
        for (const i of n.functions)
          if (!this._matchesEngine(this._getEngine(i.name), t, i.args, r)) return !1;
        return !0;
      }
    );
  }
  _querySimple(t, n) {
    return n.functions.length
      ? this._cached(this._cacheQuerySimple, n, [t.scope, t.pierceShadow, t.originalScope], () => {
          let r = n.css;
          const i = n.functions;
          r === '*' && i.length && (r = void 0);
          let s,
            o = -1;
          r !== void 0
            ? (s = this._queryCSS(t, r))
            : ((o = i.findIndex(l => this._getEngine(l.name).query !== void 0)),
              o === -1 && (o = 0),
              (s = this._queryEngine(this._getEngine(i[o].name), t, i[o].args)));
          for (let l = 0; l < i.length; l++) {
            if (l === o) continue;
            const a = this._getEngine(i[l].name);
            a.matches !== void 0 && (s = s.filter(u => this._matchesEngine(a, u, i[l].args, t)));
          }
          for (let l = 0; l < i.length; l++) {
            if (l === o) continue;
            const a = this._getEngine(i[l].name);
            a.matches === void 0 && (s = s.filter(u => this._matchesEngine(a, u, i[l].args, t)));
          }
          return s;
        })
      : this._queryCSS(t, n.css || '*');
  }
  _matchesParents(t, n, r, i) {
    return r < 0
      ? !0
      : this._cached(
          this._cacheMatchesParents,
          t,
          [n, r, i.scope, i.pierceShadow, i.originalScope],
          () => {
            const { selector: s, combinator: o } = n.simples[r];
            if (o === '>') {
              const l = Ri(t, i);
              return !l || !this._matchesSimple(l, s, i)
                ? !1
                : this._matchesParents(l, n, r - 1, i);
            }
            if (o === '+') {
              const l = Po(t, i);
              return !l || !this._matchesSimple(l, s, i)
                ? !1
                : this._matchesParents(l, n, r - 1, i);
            }
            if (o === '') {
              let l = Ri(t, i);
              for (; l; ) {
                if (this._matchesSimple(l, s, i)) {
                  if (this._matchesParents(l, n, r - 1, i)) return !0;
                  if (n.simples[r - 1].combinator === '') break;
                }
                l = Ri(l, i);
              }
              return !1;
            }
            if (o === '~') {
              let l = Po(t, i);
              for (; l; ) {
                if (this._matchesSimple(l, s, i)) {
                  if (this._matchesParents(l, n, r - 1, i)) return !0;
                  if (n.simples[r - 1].combinator === '~') break;
                }
                l = Po(l, i);
              }
              return !1;
            }
            if (o === '>=') {
              let l = t;
              for (; l; ) {
                if (this._matchesSimple(l, s, i)) {
                  if (this._matchesParents(l, n, r - 1, i)) return !0;
                  if (n.simples[r - 1].combinator === '') break;
                }
                l = Ri(l, i);
              }
              return !1;
            }
            throw new Error(`Unsupported combinator "${o}"`);
          }
        );
  }
  _matchesEngine(t, n, r, i) {
    if (t.matches) return this._callMatches(t, n, r, i);
    if (t.query) return this._callQuery(t, r, i).includes(n);
    throw new Error('Selector engine should implement "matches" or "query"');
  }
  _queryEngine(t, n, r) {
    if (t.query) return this._callQuery(t, r, n);
    if (t.matches) return this._queryCSS(n, '*').filter(i => this._callMatches(t, i, r, n));
    throw new Error('Selector engine should implement "matches" or "query"');
  }
  _callMatches(t, n, r, i) {
    return this._cached(
      this._cacheCallMatches,
      n,
      [t, i.scope, i.pierceShadow, i.originalScope, ...r],
      () => t.matches(n, r, i, this)
    );
  }
  _callQuery(t, n, r) {
    return this._cached(
      this._cacheCallQuery,
      t,
      [r.scope, r.pierceShadow, r.originalScope, ...n],
      () => t.query(r, n, this)
    );
  }
  _matchesCSS(t, n) {
    return t.matches(n);
  }
  _queryCSS(t, n) {
    return this._cached(this._cacheQueryCSS, n, [t.scope, t.pierceShadow, t.originalScope], () => {
      let r = [];
      function i(s) {
        if (((r = r.concat([...s.querySelectorAll(n)])), !!t.pierceShadow)) {
          s.shadowRoot && i(s.shadowRoot);
          for (const o of s.querySelectorAll('*')) o.shadowRoot && i(o.shadowRoot);
        }
      }
      return i(t.scope), r;
    });
  }
  _getEngine(t) {
    const n = this._engines.get(t);
    if (!n) throw new Error(`Unknown selector engine "${t}"`);
    return n;
  }
}
const Ir = {
    matches(e, t, n, r) {
      if (t.length === 0) throw new Error('"is" engine expects non-empty selector list');
      return t.some(i => r.matches(e, i, n));
    },
    query(e, t, n) {
      if (t.length === 0) throw new Error('"is" engine expects non-empty selector list');
      let r = [];
      for (const i of t) r = r.concat(n.query(e, i));
      return t.length === 1 ? r : yp(r);
    },
  },
  Iy = {
    matches(e, t, n, r) {
      if (t.length === 0) throw new Error('"has" engine expects non-empty selector list');
      return r.query({ ...n, scope: e }, t).length > 0;
    },
  },
  jy = {
    matches(e, t, n, r) {
      if (t.length !== 0) throw new Error('"scope" engine expects no arguments');
      const i = n.originalScope || n.scope;
      return i.nodeType === 9 ? e === i.documentElement : e === i;
    },
    query(e, t, n) {
      if (t.length !== 0) throw new Error('"scope" engine expects no arguments');
      const r = e.originalScope || e.scope;
      if (r.nodeType === 9) {
        const i = r.documentElement;
        return i ? [i] : [];
      }
      return r.nodeType === 1 ? [r] : [];
    },
  },
  Py = {
    matches(e, t, n, r) {
      if (t.length === 0) throw new Error('"not" engine expects non-empty selector list');
      return !r.matches(e, t, n);
    },
  },
  Ry = {
    query(e, t, n) {
      return n.query({ ...e, pierceShadow: !1 }, t);
    },
    matches(e, t, n, r) {
      return r.matches(e, t, { ...n, pierceShadow: !1 });
    },
  },
  $y = {
    matches(e, t, n, r) {
      if (t.length) throw new Error('"visible" engine expects no arguments');
      return js(e);
    },
  },
  Oy = {
    matches(e, t, n, r) {
      if (t.length !== 1 || typeof t[0] != 'string')
        throw new Error('"text" engine expects a single string');
      const i = Ue(t[0]).toLowerCase(),
        s = o => o.normalized.toLowerCase().includes(i);
      return ro(r._cacheText, e, s) === 'self';
    },
  },
  zy = {
    matches(e, t, n, r) {
      if (t.length !== 1 || typeof t[0] != 'string')
        throw new Error('"text-is" engine expects a single string');
      const i = Ue(t[0]),
        s = o => (!i && !o.immediate.length ? !0 : o.immediate.some(l => Ue(l) === i));
      return ro(r._cacheText, e, s) !== 'none';
    },
  },
  Dy = {
    matches(e, t, n, r) {
      if (
        t.length === 0 ||
        typeof t[0] != 'string' ||
        t.length > 2 ||
        (t.length === 2 && typeof t[1] != 'string')
      )
        throw new Error('"text-matches" engine expects a regexp body and optional regexp flags');
      const i = new RegExp(t[0], t.length === 2 ? t[1] : void 0),
        s = o => i.test(o.full);
      return ro(r._cacheText, e, s) === 'self';
    },
  },
  Fy = {
    matches(e, t, n, r) {
      if (t.length !== 1 || typeof t[0] != 'string')
        throw new Error('"has-text" engine expects a single string');
      if (Qa(e)) return !1;
      const i = Ue(t[0]).toLowerCase();
      return (o => o.normalized.toLowerCase().includes(i))(je(r._cacheText, e));
    },
  };
function Er(e) {
  return {
    matches(t, n, r, i) {
      const s = n.length && typeof n[n.length - 1] == 'number' ? n[n.length - 1] : void 0,
        o = s === void 0 ? n : n.slice(0, n.length - 1);
      if (n.length < 1 + (s === void 0 ? 0 : 1))
        throw new Error(
          `"${e}" engine expects a selector list and optional maximum distance in pixels`
        );
      const l = i.query(r, o),
        a = vp(e, t, l, s);
      return a === void 0 ? !1 : (i._markScore(t, a), !0);
    },
  };
}
const Hy = {
  query(e, t, n) {
    let r = t[t.length - 1];
    if (t.length < 2)
      throw new Error('"nth-match" engine expects non-empty selector list and an index argument');
    if (typeof r != 'number' || r < 1)
      throw new Error('"nth-match" engine expects a one-based index as the last argument');
    const i = Ir.query(e, t.slice(0, t.length - 1), n);
    return r--, r < i.length ? [i[r]] : [];
  },
};
function Ri(e, t) {
  if (e !== t.scope) return t.pierceShadow ? Te(e) : e.parentElement || void 0;
}
function Po(e, t) {
  if (e !== t.scope) return e.previousElementSibling || void 0;
}
function yp(e) {
  const t = new Map(),
    n = [],
    r = [];
  function i(o) {
    let l = t.get(o);
    if (l) return l;
    const a = Te(o);
    return a ? i(a).children.push(o) : n.push(o), (l = { children: [], taken: !1 }), t.set(o, l), l;
  }
  for (const o of e) i(o).taken = !0;
  function s(o) {
    const l = t.get(o);
    if ((l.taken && r.push(o), l.children.length > 1)) {
      const a = new Set(l.children);
      l.children = [];
      let u = o.firstElementChild;
      for (; u && l.children.length < a.size; )
        a.has(u) && l.children.push(u), (u = u.nextElementSibling);
      for (
        u = o.shadowRoot ? o.shadowRoot.firstElementChild : null;
        u && l.children.length < a.size;

      )
        a.has(u) && l.children.push(u), (u = u.nextElementSibling);
    }
    l.children.forEach(s);
  }
  return n.forEach(s), r;
}
const Dl = new Map(),
  Fl = new Map(),
  wp = 10,
  ur = wp / 2,
  Nc = 1,
  Uy = 2,
  By = 10,
  Vy = 50,
  xp = 100,
  _p = 120,
  Sp = 140,
  Ep = 160,
  Hl = 180,
  Tp = 200,
  Wy = 250,
  qy = xp + ur,
  Xy = _p + ur,
  Qy = Sp + ur,
  Gy = Ep + ur,
  Ky = Hl + ur,
  Yy = Tp + ur,
  Jy = 300,
  Zy = 500,
  ew = 510,
  Ro = 520,
  kp = 530,
  Np = 1e4,
  tw = 1e7,
  nw = 1e3;
function Cc(e, t, n) {
  e._evaluator.begin(), ip();
  try {
    let r = [];
    if (n.forTextExpect) {
      let o = $i(e, t.ownerDocument.documentElement, n);
      for (let l = t; l; l = Te(l)) {
        const a = Tn(e, l, { ...n, noText: !0 });
        if (!a) continue;
        if ($t(a) <= nw) {
          o = a;
          break;
        }
      }
      r = [rs(o)];
    } else if (
      ((t =
        Mr(
          t,
          'button,select,input,[role=button],[role=checkbox],[role=radio],a,[role=link]',
          n.root
        ) || t),
      n.multiple)
    ) {
      const o = Tn(e, t, n),
        l = Tn(e, t, { ...n, noText: !0 });
      let a = [o, l];
      if (
        (Dl.clear(),
        Fl.clear(),
        o && $o(o) && a.push(Tn(e, t, { ...n, noCSSId: !0 })),
        l && $o(l) && a.push(Tn(e, t, { ...n, noText: !0, noCSSId: !0 })),
        (a = a.filter(Boolean)),
        !a.length)
      ) {
        const u = $i(e, t, n);
        a.push(u), $o(u) && a.push($i(e, t, { ...n, noCSSId: !0 }));
      }
      r = [...new Set(a.map(u => rs(u)))];
    } else {
      const o = Tn(e, t, n) || $i(e, t, n);
      r = [rs(o)];
    }
    const i = r[0],
      s = e.parseSelector(i);
    return {
      selector: i,
      selectors: r,
      elements: e.querySelectorAll(s, n.root ?? t.ownerDocument),
    };
  } finally {
    Dl.clear(), Fl.clear(), sp(), e._evaluator.end();
  }
}
function bc(e) {
  return e.filter(t => t[0].selector[0] !== '/');
}
function Tn(e, t, n) {
  if (n.root && !no(n.root, t)) throw new Error("Target element must belong to the root's subtree");
  if (t === n.root) return [{ engine: 'css', selector: ':scope', score: 1 }];
  if (t.ownerDocument.documentElement === t) return [{ engine: 'css', selector: 'html', score: 1 }];
  const r = (s, o) => {
      const l = s === t;
      let a = o ? iw(e, s, s === t) : [];
      s !== t && (a = bc(a));
      const u = rw(e, s, n)
        .filter(d => !n.omitInternalEngines || !d.engine.startsWith('internal:'))
        .map(d => [d]);
      let c = Lc(e, n.root ?? t.ownerDocument, s, [...a, ...u], l);
      a = bc(a);
      const h = d => {
        const g = o && !d.length,
          y = [...d, ...u].filter(x => (c ? $t(x) < $t(c) : !0));
        let w = y[0];
        if (w)
          for (let x = Te(s); x && x !== n.root; x = Te(x)) {
            const p = i(x, g);
            if (!p || (c && $t([...p, ...w]) >= $t(c))) continue;
            if (((w = Lc(e, x, s, y, l)), !w)) return;
            const m = [...p, ...w];
            (!c || $t(m) < $t(c)) && (c = m);
          }
      };
      return h(a), s === t && a.length && h([]), c;
    },
    i = (s, o) => {
      const l = o ? Dl : Fl;
      let a = l.get(s);
      return a === void 0 && ((a = r(s, o)), l.set(s, a)), a;
    };
  return r(t, !n.noText);
}
function rw(e, t, n) {
  const r = [];
  {
    for (const o of ['data-testid', 'data-test-id', 'data-test'])
      o !== n.testIdAttributeName &&
        t.getAttribute(o) &&
        r.push({ engine: 'css', selector: `[${o}=${xr(t.getAttribute(o))}]`, score: Uy });
    if (!n.noCSSId) {
      const o = t.getAttribute('id');
      o && !sw(o) && r.push({ engine: 'css', selector: Cp(o), score: Zy });
    }
    r.push({ engine: 'css', selector: Xe(t.nodeName.toLowerCase()), score: kp });
  }
  if (t.nodeName === 'IFRAME') {
    for (const o of ['name', 'title'])
      t.getAttribute(o) &&
        r.push({
          engine: 'css',
          selector: `${Xe(t.nodeName.toLowerCase())}[${o}=${xr(t.getAttribute(o))}]`,
          score: By,
        });
    return (
      t.getAttribute(n.testIdAttributeName) &&
        r.push({
          engine: 'css',
          selector: `[${n.testIdAttributeName}=${xr(t.getAttribute(n.testIdAttributeName))}]`,
          score: Nc,
        }),
      Ul([r]),
      r
    );
  }
  if (
    (t.getAttribute(n.testIdAttributeName) &&
      r.push({
        engine: 'internal:testid',
        selector: `[${n.testIdAttributeName}=${Ee(t.getAttribute(n.testIdAttributeName), !0)}]`,
        score: Nc,
      }),
    t.nodeName === 'INPUT' || t.nodeName === 'TEXTAREA')
  ) {
    const o = t;
    if (o.placeholder) {
      r.push({
        engine: 'internal:attr',
        selector: `[placeholder=${Ee(o.placeholder, !0)}]`,
        score: qy,
      });
      for (const l of Fn(o.placeholder))
        r.push({
          engine: 'internal:attr',
          selector: `[placeholder=${Ee(l.text, !1)}]`,
          score: xp - l.scoreBouns,
        });
    }
  }
  const i = ap(e._evaluator._cacheText, t);
  for (const o of i) {
    const l = o.normalized;
    r.push({ engine: 'internal:label', selector: Ge(l, !0), score: Xy });
    for (const a of Fn(l))
      r.push({ engine: 'internal:label', selector: Ge(a.text, !1), score: _p - a.scoreBouns });
  }
  const s = Ne(t);
  return (
    s &&
      !['none', 'presentation'].includes(s) &&
      r.push({ engine: 'internal:role', selector: s, score: ew }),
    t.getAttribute('name') &&
      [
        'BUTTON',
        'FORM',
        'FIELDSET',
        'FRAME',
        'IFRAME',
        'INPUT',
        'KEYGEN',
        'OBJECT',
        'OUTPUT',
        'SELECT',
        'TEXTAREA',
        'MAP',
        'META',
        'PARAM',
      ].includes(t.nodeName) &&
      r.push({
        engine: 'css',
        selector: `${Xe(t.nodeName.toLowerCase())}[name=${xr(t.getAttribute('name'))}]`,
        score: Ro,
      }),
    ['INPUT', 'TEXTAREA'].includes(t.nodeName) &&
      t.getAttribute('type') !== 'hidden' &&
      t.getAttribute('type') &&
      r.push({
        engine: 'css',
        selector: `${Xe(t.nodeName.toLowerCase())}[type=${xr(t.getAttribute('type'))}]`,
        score: Ro,
      }),
    ['INPUT', 'TEXTAREA', 'SELECT'].includes(t.nodeName) &&
      t.getAttribute('type') !== 'hidden' &&
      r.push({ engine: 'css', selector: Xe(t.nodeName.toLowerCase()), score: Ro + 1 }),
    Ul([r]),
    r
  );
}
function iw(e, t, n) {
  if (t.nodeName === 'SELECT') return [];
  const r = [],
    i = t.getAttribute('title');
  if (i) {
    r.push([{ engine: 'internal:attr', selector: `[title=${Ee(i, !0)}]`, score: Yy }]);
    for (const a of Fn(i))
      r.push([
        {
          engine: 'internal:attr',
          selector: `[title=${Ee(a.text, !1)}]`,
          score: Tp - a.scoreBouns,
        },
      ]);
  }
  const s = t.getAttribute('alt');
  if (s && ['APPLET', 'AREA', 'IMG', 'INPUT'].includes(t.nodeName)) {
    r.push([{ engine: 'internal:attr', selector: `[alt=${Ee(s, !0)}]`, score: Gy }]);
    for (const a of Fn(s))
      r.push([
        { engine: 'internal:attr', selector: `[alt=${Ee(a.text, !1)}]`, score: Ep - a.scoreBouns },
      ]);
  }
  const o = je(e._evaluator._cacheText, t).normalized;
  if (o) {
    const a = Fn(o);
    if (n) {
      o.length <= 80 && r.push([{ engine: 'internal:text', selector: Ge(o, !0), score: Ky }]);
      for (const c of a)
        r.push([{ engine: 'internal:text', selector: Ge(c.text, !1), score: Hl - c.scoreBouns }]);
    }
    const u = { engine: 'css', selector: Xe(t.nodeName.toLowerCase()), score: kp };
    for (const c of a)
      r.push([
        u,
        { engine: 'internal:has-text', selector: Ge(c.text, !1), score: Hl - c.scoreBouns },
      ]);
    if (o.length <= 80) {
      const c = new RegExp('^' + Pv(o) + '$');
      r.push([u, { engine: 'internal:has-text', selector: Ge(c, !1), score: Wy }]);
    }
  }
  const l = Ne(t);
  if (l && !['none', 'presentation'].includes(l)) {
    const a = Rs(t, !1);
    if (a) {
      r.push([{ engine: 'internal:role', selector: `${l}[name=${Ee(a, !0)}]`, score: Qy }]);
      for (const u of Fn(a))
        r.push([
          {
            engine: 'internal:role',
            selector: `${l}[name=${Ee(u.text, !1)}]`,
            score: Sp - u.scoreBouns,
          },
        ]);
    }
  }
  return Ul(r), r;
}
function Cp(e) {
  return /^[a-zA-Z][a-zA-Z0-9\-\_]+$/.test(e) ? '#' + e : `[id="${Xe(e)}"]`;
}
function $o(e) {
  return e.some(
    t => t.engine === 'css' && (t.selector.startsWith('#') || t.selector.startsWith('[id="'))
  );
}
function $i(e, t, n) {
  const r = n.root ?? t.ownerDocument,
    i = [];
  function s(l) {
    const a = i.slice();
    l && a.unshift(l);
    const u = a.join(' > '),
      c = e.parseSelector(u);
    return e.querySelector(c, r, !1) === t ? u : void 0;
  }
  function o(l) {
    const a = { engine: 'css', selector: l, score: tw },
      u = e.parseSelector(l),
      c = e.querySelectorAll(u, r);
    if (c.length === 1) return [a];
    const h = { engine: 'nth', selector: String(c.indexOf(t)), score: Np };
    return [a, h];
  }
  for (let l = t; l && l !== r; l = Te(l)) {
    const a = l.nodeName.toLowerCase();
    let u = '';
    if (l.id && !n.noCSSId) {
      const d = Cp(l.id),
        g = s(d);
      if (g) return o(g);
      u = d;
    }
    const c = l.parentNode,
      h = [...l.classList];
    for (let d = 0; d < h.length; ++d) {
      const g = '.' + Xe(h.slice(0, d + 1).join('.')),
        y = s(g);
      if (y) return o(y);
      !u && c && c.querySelectorAll(g).length === 1 && (u = g);
    }
    if (c) {
      const d = [...c.children],
        y =
          d.filter(x => x.nodeName.toLowerCase() === a).indexOf(l) === 0
            ? Xe(a)
            : `${Xe(a)}:nth-child(${1 + d.indexOf(l)})`,
        w = s(y);
      if (w) return o(w);
      u || (u = y);
    } else u || (u = Xe(a));
    i.unshift(u);
  }
  return o(s());
}
function Ul(e) {
  for (const t of e)
    for (const n of t)
      n.score > Vy && n.score < Jy && (n.score += Math.min(wp, (n.selector.length / 10) | 0));
}
function rs(e) {
  const t = [];
  let n = '';
  for (const { engine: r, selector: i } of e)
    t.length && (n !== 'css' || r !== 'css' || i.startsWith(':nth-match(')) && t.push('>>'),
      (n = r),
      r === 'css' ? t.push(i) : t.push(`${r}=${i}`);
  return t.join(' ');
}
function $t(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t += e[n].score * (e.length - n);
  return t;
}
function Lc(e, t, n, r, i) {
  const s = r.map(l => ({ tokens: l, score: $t(l) }));
  s.sort((l, a) => l.score - a.score);
  let o = null;
  for (const { tokens: l } of s) {
    const a = e.parseSelector(rs(l)),
      u = e.querySelectorAll(a, t);
    if (u[0] === n && u.length === 1) return l;
    const c = u.indexOf(n);
    if (!i || o || c === -1 || u.length > 5) continue;
    const h = { engine: 'nth', selector: String(c), score: Np };
    o = [...l, h];
  }
  return o;
}
function sw(e) {
  let t,
    n = 0;
  for (let r = 0; r < e.length; ++r) {
    const i = e[r];
    let s;
    if (!(i === '-' || i === '_')) {
      if (
        (i >= 'a' && i <= 'z'
          ? (s = 'lower')
          : i >= 'A' && i <= 'Z'
          ? (s = 'upper')
          : i >= '0' && i <= '9'
          ? (s = 'digit')
          : (s = 'other'),
        s === 'lower' && t === 'upper')
      ) {
        t = s;
        continue;
      }
      t && t !== s && ++n, (t = s);
    }
  }
  return n >= e.length / 4;
}
function Ac(e, t) {
  if (e.length <= t) return e;
  e = e.substring(0, t);
  const n = e.match(/^(.*)\b(.+?)$/);
  return n ? n[1].trimEnd() : '';
}
function Fn(e) {
  let t = [];
  {
    const n = e.match(/^([\d.,]+)[^.,\w]/),
      r = n ? n[1].length : 0;
    if (r) {
      const i = e.substring(r).trimStart();
      t.push({ text: i, scoreBouns: i.length <= 30 ? 2 : 1 });
    }
  }
  {
    const n = e.match(/[^.,\w]([\d.,]+)$/),
      r = n ? n[1].length : 0;
    if (r) {
      const i = e.substring(0, e.length - r).trimEnd();
      t.push({ text: i, scoreBouns: i.length <= 30 ? 2 : 1 });
    }
  }
  return (
    e.length <= 30
      ? t.push({ text: e, scoreBouns: 0 })
      : (t.push({ text: Ac(e, 80), scoreBouns: 0 }), t.push({ text: Ac(e, 30), scoreBouns: 1 })),
    (t = t.filter(n => n.text)),
    t.length || t.push({ text: e.substring(0, 80), scoreBouns: 0 }),
    t
  );
}
const Mc =
  ':host{font-size:13px;font-family:system-ui,Ubuntu,Droid Sans,sans-serif;color:#333}svg{position:absolute;height:0}x-pw-tooltip{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:#fff;border-radius:6px;box-shadow:0 .5rem 1.2rem #0000004d;display:none;font-size:12.8px;font-weight:400;left:0;line-height:1.5;max-width:600px;position:absolute;top:0;padding:0;flex-direction:column;overflow:hidden}x-pw-tooltip-line{display:flex;max-width:600px;padding:6px;-webkit-user-select:none;user-select:none;cursor:pointer}x-pw-tooltip-line.selectable:hover{background-color:#f2f2f2;overflow:hidden}x-pw-tooltip-footer{display:flex;max-width:600px;padding:6px;-webkit-user-select:none;user-select:none;color:#777}x-pw-dialog{background-color:#fff;pointer-events:auto;border-radius:6px;box-shadow:0 .5rem 1.2rem #0000004d;display:flex;flex-direction:column;position:absolute;width:400px;height:150px;z-index:10;font-size:13px}x-pw-dialog-body{display:flex;flex-direction:column;flex:auto}x-pw-dialog-body label{margin:5px 8px;display:flex;flex-direction:row;align-items:center}x-pw-highlight{position:absolute;top:0;left:0;width:0;height:0}x-pw-action-point{position:absolute;width:20px;height:20px;background:red;border-radius:10px;margin:-10px 0 0 -10px;z-index:2}x-pw-separator{height:1px;margin:6px 9px;background:#949494e5}x-pw-tool-gripper{height:28px;width:24px;margin:2px 0;cursor:grab}x-pw-tool-gripper:active{cursor:grabbing}x-pw-tool-gripper>x-div{width:16px;height:16px;margin:6px 4px;clip-path:url(#icon-gripper);background-color:#555}x-pw-tools-list>label{display:flex;align-items:center;margin:0 10px;-webkit-user-select:none;user-select:none}x-pw-tools-list{display:flex;width:100%;border-bottom:1px solid #dddddd}x-pw-tool-item{pointer-events:auto;cursor:pointer;height:28px;width:28px;border-radius:3px}x-pw-tool-item:not(.disabled):hover{background-color:#dbdbdb}x-pw-tool-item.active{background-color:#8acae480}x-pw-tool-item.active:not(.disabled):hover{background-color:#8acae4c4}x-pw-tool-item>x-div{width:16px;height:16px;margin:6px;background-color:#3a3a3a}x-pw-tool-item.disabled>x-div{background-color:#61616180;cursor:default}x-pw-tool-item.record.active{background-color:transparent}x-pw-tool-item.record.active:hover{background-color:#dbdbdb}x-pw-tool-item.record.active>x-div{background-color:#a1260d}x-pw-tool-item.accept>x-div{background-color:#388a34}x-pw-tool-item.record>x-div{clip-path:url(#icon-circle-large-filled)}x-pw-tool-item.pick-locator>x-div{clip-path:url(#icon-inspect)}x-pw-tool-item.text>x-div{clip-path:url(#icon-whole-word)}x-pw-tool-item.visibility>x-div{clip-path:url(#icon-eye)}x-pw-tool-item.value>x-div{clip-path:url(#icon-symbol-constant)}x-pw-tool-item.accept>x-div{clip-path:url(#icon-check)}x-pw-tool-item.cancel>x-div{clip-path:url(#icon-close)}x-pw-tool-item.succeeded>x-div{clip-path:url(#icon-pass);background-color:#388a34!important}x-pw-overlay{position:absolute;top:0;max-width:min-content;z-index:2147483647;background:transparent;pointer-events:auto}x-pw-overlay x-pw-tools-list{background-color:#fffd;box-shadow:#0000001a 0 5px 5px;border-radius:3px;border-bottom:none}x-pw-overlay x-pw-tool-item{margin:2px}textarea.text-editor{font-family:system-ui,Ubuntu,Droid Sans,sans-serif;flex:auto;border:none;margin:6px 10px;color:#333;outline:1px solid transparent!important;resize:none;padding:0;font-size:13px}textarea.text-editor.does-not-match{outline:1px solid red!important}x-div{display:block}x-spacer{flex:auto}*{box-sizing:border-box}*[hidden]{display:none!important}x-locator-editor{flex:none;width:100%;height:60px;padding:4px;border-bottom:1px solid #dddddd;outline:1px solid transparent}x-locator-editor.does-not-match{outline:1px solid red}.CodeMirror{width:100%!important;height:100%!important}';
class Oo {
  constructor(t) {
    (this._highlightEntries = []),
      (this._highlightOptions = {}),
      (this._language = 'javascript'),
      (this._injectedScript = t);
    const n = t.document;
    (this._isUnderTest = t.isUnderTest),
      (this._glassPaneElement = n.createElement('x-pw-glass')),
      (this._glassPaneElement.style.position = 'fixed'),
      (this._glassPaneElement.style.top = '0'),
      (this._glassPaneElement.style.right = '0'),
      (this._glassPaneElement.style.bottom = '0'),
      (this._glassPaneElement.style.left = '0'),
      (this._glassPaneElement.style.zIndex = '2147483646'),
      (this._glassPaneElement.style.pointerEvents = 'none'),
      (this._glassPaneElement.style.display = 'flex'),
      (this._glassPaneElement.style.backgroundColor = 'transparent');
    for (const r of [
      'click',
      'auxclick',
      'dragstart',
      'input',
      'keydown',
      'keyup',
      'pointerdown',
      'pointerup',
      'mousedown',
      'mouseup',
      'mouseleave',
      'focus',
      'scroll',
    ])
      this._glassPaneElement.addEventListener(r, i => {
        i.stopPropagation(),
          i.stopImmediatePropagation(),
          i.type === 'click' &&
            i.button === 0 &&
            this._highlightOptions.tooltipListItemSelected &&
            this._highlightOptions.tooltipListItemSelected(void 0);
      });
    if (
      ((this._actionPointElement = n.createElement('x-pw-action-point')),
      this._actionPointElement.setAttribute('hidden', 'true'),
      (this._glassPaneShadow = this._glassPaneElement.attachShadow({
        mode: this._isUnderTest ? 'open' : 'closed',
      })),
      typeof this._glassPaneShadow.adoptedStyleSheets.push == 'function')
    ) {
      const r = new this._injectedScript.window.CSSStyleSheet();
      r.replaceSync(Mc), this._glassPaneShadow.adoptedStyleSheets.push(r);
    } else {
      const r = this._injectedScript.document.createElement('style');
      (r.textContent = Mc), this._glassPaneShadow.appendChild(r);
    }
    this._glassPaneShadow.appendChild(this._actionPointElement);
  }
  install() {
    this._injectedScript.document.documentElement.appendChild(this._glassPaneElement);
  }
  setLanguage(t) {
    this._language = t;
  }
  runHighlightOnRaf(t) {
    this._rafRequest && cancelAnimationFrame(this._rafRequest),
      this.updateHighlight(
        this._injectedScript.querySelectorAll(t, this._injectedScript.document.documentElement),
        { tooltipText: Kt(this._language, gn(t)) }
      ),
      (this._rafRequest = this._injectedScript.builtinRequestAnimationFrame(() =>
        this.runHighlightOnRaf(t)
      ));
  }
  uninstall() {
    this._rafRequest && cancelAnimationFrame(this._rafRequest), this._glassPaneElement.remove();
  }
  showActionPoint(t, n) {
    (this._actionPointElement.style.top = n + 'px'),
      (this._actionPointElement.style.left = t + 'px'),
      (this._actionPointElement.hidden = !1);
  }
  hideActionPoint() {
    this._actionPointElement.hidden = !0;
  }
  clearHighlight() {
    var t, n;
    for (const r of this._highlightEntries)
      (t = r.highlightElement) == null || t.remove(), (n = r.tooltipElement) == null || n.remove();
    (this._highlightEntries = []),
      (this._highlightOptions = {}),
      (this._glassPaneElement.style.pointerEvents = 'none');
  }
  updateHighlight(t, n) {
    this._innerUpdateHighlight(t, n);
  }
  maskElements(t, n) {
    this._innerUpdateHighlight(t, { color: n });
  }
  _innerUpdateHighlight(t, n) {
    let r = n.color;
    if ((r || (r = t.length > 1 ? '#f6b26b7f' : '#6fa8dc7f'), !this._highlightIsUpToDate(t, n))) {
      this.clearHighlight(),
        (this._highlightOptions = n),
        (this._glassPaneElement.style.pointerEvents = n.tooltipListItemSelected
          ? 'initial'
          : 'none');
      for (let i = 0; i < t.length; ++i) {
        const s = this._createHighlightElement();
        this._glassPaneShadow.appendChild(s);
        let o;
        if (n.tooltipList || n.tooltipText || n.tooltipFooter) {
          (o = this._injectedScript.document.createElement('x-pw-tooltip')),
            this._glassPaneShadow.appendChild(o),
            (o.style.top = '0'),
            (o.style.left = '0'),
            (o.style.display = 'flex');
          let l = [];
          if (n.tooltipList) l = n.tooltipList;
          else if (n.tooltipText) {
            const a = t.length > 1 ? ` [${i + 1} of ${t.length}]` : '';
            l = [n.tooltipText + a];
          }
          for (let a = 0; a < l.length; a++) {
            const u = this._injectedScript.document.createElement('x-pw-tooltip-line');
            (u.textContent = l[a]),
              o.appendChild(u),
              n.tooltipListItemSelected &&
                (u.classList.add('selectable'),
                u.addEventListener('click', () => {
                  var c;
                  return (c = n.tooltipListItemSelected) == null ? void 0 : c.call(n, a);
                }));
          }
          if (n.tooltipFooter) {
            const a = this._injectedScript.document.createElement('x-pw-tooltip-footer');
            (a.textContent = n.tooltipFooter), o.appendChild(a);
          }
        }
        this._highlightEntries.push({
          targetElement: t[i],
          tooltipElement: o,
          highlightElement: s,
        });
      }
      for (const i of this._highlightEntries) {
        if (((i.box = i.targetElement.getBoundingClientRect()), !i.tooltipElement)) continue;
        const { anchorLeft: s, anchorTop: o } = this.tooltipPosition(i.box, i.tooltipElement);
        (i.tooltipTop = o), (i.tooltipLeft = s);
      }
      for (const i of this._highlightEntries) {
        i.tooltipElement &&
          ((i.tooltipElement.style.top = i.tooltipTop + 'px'),
          (i.tooltipElement.style.left = i.tooltipLeft + 'px'));
        const s = i.box;
        (i.highlightElement.style.backgroundColor = r),
          (i.highlightElement.style.left = s.x + 'px'),
          (i.highlightElement.style.top = s.y + 'px'),
          (i.highlightElement.style.width = s.width + 'px'),
          (i.highlightElement.style.height = s.height + 'px'),
          (i.highlightElement.style.display = 'block'),
          this._isUnderTest &&
            console.error(
              'Highlight box for test: ' +
                JSON.stringify({ x: s.x, y: s.y, width: s.width, height: s.height })
            );
      }
    }
  }
  firstBox() {
    var t;
    return (t = this._highlightEntries[0]) == null ? void 0 : t.box;
  }
  tooltipPosition(t, n) {
    const r = n.offsetWidth,
      i = n.offsetHeight,
      s = this._glassPaneElement.offsetWidth,
      o = this._glassPaneElement.offsetHeight;
    let l = t.left;
    l + r > s - 5 && (l = s - r - 5);
    let a = t.bottom + 5;
    return (
      a + i > o - 5 && (t.top > i + 5 ? (a = t.top - i - 5) : (a = o - 5 - i)),
      { anchorLeft: l, anchorTop: a }
    );
  }
  _highlightIsUpToDate(t, n) {
    var r, i;
    if (
      n.tooltipText !== this._highlightOptions.tooltipText ||
      n.tooltipListItemSelected !== this._highlightOptions.tooltipListItemSelected ||
      n.tooltipFooter !== this._highlightOptions.tooltipFooter ||
      ((r = n.tooltipList) == null ? void 0 : r.length) !==
        ((i = this._highlightOptions.tooltipList) == null ? void 0 : i.length)
    )
      return !1;
    if (n.tooltipList && this._highlightOptions.tooltipList) {
      for (let s = 0; s < n.tooltipList.length; s++)
        if (n.tooltipList[s] !== this._highlightOptions.tooltipList[s]) return !1;
    }
    if (t.length !== this._highlightEntries.length) return !1;
    for (let s = 0; s < this._highlightEntries.length; ++s) {
      if (t[s] !== this._highlightEntries[s].targetElement) return !1;
      const o = this._highlightEntries[s].box;
      if (!o) return !1;
      const l = t[s].getBoundingClientRect();
      if (l.top !== o.top || l.right !== o.right || l.bottom !== o.bottom || l.left !== o.left)
        return !1;
    }
    return !0;
  }
  _createHighlightElement() {
    return this._injectedScript.document.createElement('x-pw-highlight');
  }
  appendChild(t) {
    this._glassPaneShadow.appendChild(t);
  }
}
class bp {
  constructor(t, n, r, i, s, o, l) {
    (this.onGlobalListenersRemoved = new Set()),
      (this._testIdAttributeNameForStrictErrorAndConsoleCodegen = 'data-testid'),
      (this.utils = { isInsideScope: no, elementText: je, asLocator: Kt, normalizeWhiteSpace: Ue }),
      (this.window = t),
      (this.document = t.document),
      (this.isUnderTest = n),
      (this._sdkLanguage = r),
      (this._testIdAttributeNameForStrictErrorAndConsoleCodegen = i),
      (this._evaluator = new My(new Map())),
      (this._engines = new Map()),
      this._engines.set('xpath', vc),
      this._engines.set('xpath:light', vc),
      this._engines.set('_react', vy),
      this._engines.set('_vue', Sy),
      this._engines.set('role', kc(!1)),
      this._engines.set('text', this._createTextEngine(!0, !1)),
      this._engines.set('text:light', this._createTextEngine(!1, !1)),
      this._engines.set('id', this._createAttributeEngine('id', !0)),
      this._engines.set('id:light', this._createAttributeEngine('id', !1)),
      this._engines.set('data-testid', this._createAttributeEngine('data-testid', !0)),
      this._engines.set('data-testid:light', this._createAttributeEngine('data-testid', !1)),
      this._engines.set('data-test-id', this._createAttributeEngine('data-test-id', !0)),
      this._engines.set('data-test-id:light', this._createAttributeEngine('data-test-id', !1)),
      this._engines.set('data-test', this._createAttributeEngine('data-test', !0)),
      this._engines.set('data-test:light', this._createAttributeEngine('data-test', !1)),
      this._engines.set('css', this._createCSSEngine()),
      this._engines.set('nth', { queryAll: () => [] }),
      this._engines.set('visible', this._createVisibleEngine()),
      this._engines.set('internal:control', this._createControlEngine()),
      this._engines.set('internal:has', this._createHasEngine()),
      this._engines.set('internal:has-not', this._createHasNotEngine()),
      this._engines.set('internal:and', { queryAll: () => [] }),
      this._engines.set('internal:or', { queryAll: () => [] }),
      this._engines.set('internal:chain', this._createInternalChainEngine()),
      this._engines.set('internal:label', this._createInternalLabelEngine()),
      this._engines.set('internal:text', this._createTextEngine(!0, !0)),
      this._engines.set('internal:has-text', this._createInternalHasTextEngine()),
      this._engines.set('internal:has-not-text', this._createInternalHasNotTextEngine()),
      this._engines.set('internal:attr', this._createNamedAttributeEngine()),
      this._engines.set('internal:testid', this._createNamedAttributeEngine()),
      this._engines.set('internal:role', kc(!0));
    for (const { name: a, engine: u } of l) this._engines.set(a, u);
    (this._stableRafCount = s),
      (this._browserName = o),
      Y0(o),
      this._setupGlobalListenersRemovalDetection(),
      this._setupHitTargetInterceptors(),
      n && (this.window.__injectedScript = this);
  }
  builtinSetTimeout(t, n) {
    var r;
    return (r = this.window.__pwClock) != null && r.builtin
      ? this.window.__pwClock.builtin.setTimeout(t, n)
      : setTimeout(t, n);
  }
  builtinRequestAnimationFrame(t) {
    var n;
    return (n = this.window.__pwClock) != null && n.builtin
      ? this.window.__pwClock.builtin.requestAnimationFrame(t)
      : requestAnimationFrame(t);
  }
  eval(t) {
    return this.window.eval(t);
  }
  testIdAttributeNameForStrictErrorAndConsoleCodegen() {
    return this._testIdAttributeNameForStrictErrorAndConsoleCodegen;
  }
  parseSelector(t) {
    const n = eo(t);
    return (
      Zv(n, r => {
        if (!this._engines.has(r.name))
          throw this.createStacklessError(`Unknown engine "${r.name}" while parsing selector ${t}`);
      }),
      n
    );
  }
  generateSelector(t, n) {
    return Cc(this, t, n);
  }
  generateSelectorSimple(t, n) {
    return Cc(this, t, {
      ...n,
      testIdAttributeName: this._testIdAttributeNameForStrictErrorAndConsoleCodegen,
    }).selector;
  }
  querySelector(t, n, r) {
    const i = this.querySelectorAll(t, n);
    if (r && i.length > 1) throw this.strictModeViolationError(t, i);
    return i[0];
  }
  _queryNth(t, n) {
    const r = [...t];
    let i = +n.body;
    return i === -1 && (i = r.length - 1), new Set(r.slice(i, i + 1));
  }
  _queryLayoutSelector(t, n, r) {
    const i = n.name,
      s = n.body,
      o = [],
      l = this.querySelectorAll(s.parsed, r);
    for (const a of t) {
      const u = vp(i, a, l, s.distance);
      u !== void 0 && o.push({ element: a, score: u });
    }
    return o.sort((a, u) => a.score - u.score), new Set(o.map(a => a.element));
  }
  querySelectorAll(t, n) {
    if (t.capture !== void 0) {
      if (t.parts.some(i => i.name === 'nth'))
        throw this.createStacklessError("Can't query n-th element in a request with the capture.");
      const r = { parts: t.parts.slice(0, t.capture + 1) };
      if (t.capture < t.parts.length - 1) {
        const i = { parts: t.parts.slice(t.capture + 1) },
          s = { name: 'internal:has', body: { parsed: i }, source: gn(i) };
        r.parts.push(s);
      }
      return this.querySelectorAll(r, n);
    }
    if (!n.querySelectorAll) throw this.createStacklessError('Node is not queryable.');
    if (t.capture !== void 0)
      throw this.createStacklessError(
        'Internal error: there should not be a capture in the selector.'
      );
    if (
      n.nodeType === 11 &&
      t.parts.length === 1 &&
      t.parts[0].name === 'css' &&
      t.parts[0].source === ':scope'
    )
      return [n];
    this._evaluator.begin();
    try {
      let r = new Set([n]);
      for (const i of t.parts)
        if (i.name === 'nth') r = this._queryNth(r, i);
        else if (i.name === 'internal:and') {
          const s = this.querySelectorAll(i.body.parsed, n);
          r = new Set(s.filter(o => r.has(o)));
        } else if (i.name === 'internal:or') {
          const s = this.querySelectorAll(i.body.parsed, n);
          r = new Set(yp(new Set([...r, ...s])));
        } else if (Ay.includes(i.name)) r = this._queryLayoutSelector(r, i, n);
        else {
          const s = new Set();
          for (const o of r) {
            const l = this._queryEngineAll(i, o);
            for (const a of l) s.add(a);
          }
          r = s;
        }
      return [...r];
    } finally {
      this._evaluator.end();
    }
  }
  _queryEngineAll(t, n) {
    const r = this._engines.get(t.name).queryAll(n, t.body);
    for (const i of r)
      if (!('nodeName' in i))
        throw this.createStacklessError(
          `Expected a Node but got ${Object.prototype.toString.call(i)}`
        );
    return r;
  }
  _createAttributeEngine(t, n) {
    const r = i => [
      {
        simples: [
          { selector: { css: `[${t}=${JSON.stringify(i)}]`, functions: [] }, combinator: '' },
        ],
      },
    ];
    return { queryAll: (i, s) => this._evaluator.query({ scope: i, pierceShadow: n }, r(s)) };
  }
  _createCSSEngine() {
    return { queryAll: (t, n) => this._evaluator.query({ scope: t, pierceShadow: !0 }, n) };
  }
  _createTextEngine(t, n) {
    return {
      queryAll: (i, s) => {
        const { matcher: o, kind: l } = zi(s, n),
          a = [];
        let u = null;
        const c = d => {
          if (l === 'lax' && u && u.contains(d)) return !1;
          const g = ro(this._evaluator._cacheText, d, o);
          g === 'none' && (u = d),
            (g === 'self' || (g === 'selfAndChildren' && l === 'strict' && !n)) && a.push(d);
        };
        i.nodeType === Node.ELEMENT_NODE && c(i);
        const h = this._evaluator._queryCSS({ scope: i, pierceShadow: t }, '*');
        for (const d of h) c(d);
        return a;
      },
    };
  }
  _createInternalHasTextEngine() {
    return {
      queryAll: (t, n) => {
        if (t.nodeType !== 1) return [];
        const r = t,
          i = je(this._evaluator._cacheText, r),
          { matcher: s } = zi(n, !0);
        return s(i) ? [r] : [];
      },
    };
  }
  _createInternalHasNotTextEngine() {
    return {
      queryAll: (t, n) => {
        if (t.nodeType !== 1) return [];
        const r = t,
          i = je(this._evaluator._cacheText, r),
          { matcher: s } = zi(n, !0);
        return s(i) ? [] : [r];
      },
    };
  }
  _createInternalLabelEngine() {
    return {
      queryAll: (t, n) => {
        const { matcher: r } = zi(n, !0);
        return this._evaluator
          ._queryCSS({ scope: t, pierceShadow: !0 }, '*')
          .filter(s => ap(this._evaluator._cacheText, s).some(o => r(o)));
      },
    };
  }
  _createNamedAttributeEngine() {
    return {
      queryAll: (n, r) => {
        const i = cn(r, !0);
        if (i.name || i.attributes.length !== 1)
          throw new Error('Malformed attribute selector: ' + r);
        const { name: s, value: o, caseSensitive: l } = i.attributes[0],
          a = l ? null : o.toLowerCase();
        let u;
        return (
          o instanceof RegExp
            ? (u = h => !!h.match(o))
            : l
            ? (u = h => h === o)
            : (u = h => h.toLowerCase().includes(a)),
          this._evaluator
            ._queryCSS({ scope: n, pierceShadow: !0 }, `[${s}]`)
            .filter(h => u(h.getAttribute(s)))
        );
      },
    };
  }
  _createControlEngine() {
    return {
      queryAll(t, n) {
        if (n === 'enter-frame') return [];
        if (n === 'return-empty') return [];
        if (n === 'component')
          return t.nodeType !== 1 ? [] : [t.childElementCount === 1 ? t.firstElementChild : t];
        throw new Error(`Internal error, unknown internal:control selector ${n}`);
      },
    };
  }
  _createHasEngine() {
    return {
      queryAll: (n, r) =>
        n.nodeType !== 1 ? [] : !!this.querySelector(r.parsed, n, !1) ? [n] : [],
    };
  }
  _createHasNotEngine() {
    return {
      queryAll: (n, r) =>
        n.nodeType !== 1 ? [] : !!this.querySelector(r.parsed, n, !1) ? [] : [n],
    };
  }
  _createVisibleEngine() {
    return { queryAll: (n, r) => (n.nodeType !== 1 ? [] : js(n) === !!r ? [n] : []) };
  }
  _createInternalChainEngine() {
    return { queryAll: (n, r) => this.querySelectorAll(r.parsed, n) };
  }
  extend(t, n) {
    const r = this.window.eval(`
    (() => {
      const module = {};
      ${t}
      return module.exports.default();
    })()`);
    return new r(this, n);
  }
  isVisible(t) {
    return js(t);
  }
  async viewportRatio(t) {
    return await new Promise(n => {
      const r = new IntersectionObserver(i => {
        n(i[0].intersectionRatio), r.disconnect();
      });
      r.observe(t), this.builtinRequestAnimationFrame(() => {});
    });
  }
  getElementBorderWidth(t) {
    if (t.nodeType !== Node.ELEMENT_NODE || !t.ownerDocument || !t.ownerDocument.defaultView)
      return { left: 0, top: 0 };
    const n = t.ownerDocument.defaultView.getComputedStyle(t);
    return {
      left: parseInt(n.borderLeftWidth || '', 10),
      top: parseInt(n.borderTopWidth || '', 10),
    };
  }
  describeIFrameStyle(t) {
    if (!t.ownerDocument || !t.ownerDocument.defaultView) return 'error:notconnected';
    const n = t.ownerDocument.defaultView;
    for (let i = t; i; i = Te(i))
      if (n.getComputedStyle(i).transform !== 'none') return 'transformed';
    const r = n.getComputedStyle(t);
    return {
      left: parseInt(r.borderLeftWidth || '', 10) + parseInt(r.paddingLeft || '', 10),
      top: parseInt(r.borderTopWidth || '', 10) + parseInt(r.paddingTop || '', 10),
    };
  }
  retarget(t, n) {
    let r = t.nodeType === Node.ELEMENT_NODE ? t : t.parentElement;
    return r
      ? (n === 'none' ||
          (!r.matches('input, textarea, select') &&
            !r.isContentEditable &&
            (n === 'button-link'
              ? (r = r.closest('button, [role=button], a, [role=link]') || r)
              : (r = r.closest('button, [role=button], [role=checkbox], [role=radio]') || r)),
          n === 'follow-label' &&
            (!r.matches(
              'input, textarea, button, select, [role=button], [role=checkbox], [role=radio]'
            ) &&
              !r.isContentEditable &&
              (r = r.closest('label') || r),
            r.nodeName === 'LABEL' && (r = r.control || r))),
        r)
      : null;
  }
  async checkElementStates(t, n) {
    if (n.includes('stable')) {
      const r = await this._checkElementIsStable(t);
      if (r === !1) return { missingState: 'stable' };
      if (r === 'error:notconnected') return r;
    }
    for (const r of n)
      if (r !== 'stable') {
        const i = this.elementState(t, r);
        if (i === !1) return { missingState: r };
        if (i === 'error:notconnected') return i;
      }
  }
  async _checkElementIsStable(t) {
    const n = Symbol('continuePolling');
    let r,
      i = 0,
      s = 0;
    const o = () => {
      const h = this.retarget(t, 'no-follow-label');
      if (!h) return 'error:notconnected';
      const d = performance.now();
      if (this._stableRafCount > 1 && d - s < 15) return n;
      s = d;
      const g = h.getBoundingClientRect(),
        y = { x: g.top, y: g.left, width: g.width, height: g.height };
      if (r) {
        if (!(y.x === r.x && y.y === r.y && y.width === r.width && y.height === r.height))
          return !1;
        if (++i >= this._stableRafCount) return !0;
      }
      return (r = y), n;
    };
    let l, a;
    const u = new Promise((h, d) => {
        (l = h), (a = d);
      }),
      c = () => {
        try {
          const h = o();
          h !== n ? l(h) : this.builtinRequestAnimationFrame(c);
        } catch (h) {
          a(h);
        }
      };
    return this.builtinRequestAnimationFrame(c), u;
  }
  elementState(t, n) {
    const r = this.retarget(
      t,
      ['stable', 'visible', 'hidden'].includes(n) ? 'none' : 'follow-label'
    );
    if (!r || !r.isConnected) return n === 'hidden' ? !0 : 'error:notconnected';
    if (n === 'visible') return this.isVisible(r);
    if (n === 'hidden') return !this.isVisible(r);
    const i = Zh(r);
    if (n === 'disabled') return i;
    if (n === 'enabled') return !i;
    const s = !(['INPUT', 'TEXTAREA', 'SELECT'].includes(r.nodeName) && r.hasAttribute('readonly'));
    if (n === 'editable') return !i && s;
    if (n === 'checked' || n === 'unchecked') {
      const o = n === 'checked',
        l = Gh(r, !1);
      if (l === 'error') throw this.createStacklessError('Not a checkbox or radio button');
      return o === l;
    }
    throw this.createStacklessError(`Unexpected element state "${n}"`);
  }
  selectOptions(t, n) {
    const r = this.retarget(t, 'follow-label');
    if (!r) return 'error:notconnected';
    if (r.nodeName.toLowerCase() !== 'select')
      throw this.createStacklessError('Element is not a <select> element');
    const i = r,
      s = [...i.options],
      o = [];
    let l = n.slice();
    for (let a = 0; a < s.length; a++) {
      const u = s[a],
        c = h => {
          if (h instanceof Node) return u === h;
          let d = !0;
          return (
            h.valueOrLabel !== void 0 &&
              (d = d && (h.valueOrLabel === u.value || h.valueOrLabel === u.label)),
            h.value !== void 0 && (d = d && h.value === u.value),
            h.label !== void 0 && (d = d && h.label === u.label),
            h.index !== void 0 && (d = d && h.index === a),
            d
          );
        };
      if (l.some(c))
        if ((o.push(u), i.multiple)) l = l.filter(h => !c(h));
        else {
          l = [];
          break;
        }
    }
    return l.length
      ? 'error:optionsnotfound'
      : ((i.value = void 0),
        o.forEach(a => (a.selected = !0)),
        i.dispatchEvent(new Event('input', { bubbles: !0, composed: !0 })),
        i.dispatchEvent(new Event('change', { bubbles: !0 })),
        o.map(a => a.value));
  }
  fill(t, n) {
    const r = this.retarget(t, 'follow-label');
    if (!r) return 'error:notconnected';
    if (r.nodeName.toLowerCase() === 'input') {
      const i = r,
        s = i.type.toLowerCase(),
        o = new Set(['color', 'date', 'time', 'datetime-local', 'month', 'range', 'week']);
      if (
        !new Set(['', 'email', 'number', 'password', 'search', 'tel', 'text', 'url']).has(s) &&
        !o.has(s)
      )
        throw this.createStacklessError(`Input of type "${s}" cannot be filled`);
      if (s === 'number' && ((n = n.trim()), isNaN(Number(n))))
        throw this.createStacklessError('Cannot type text into input[type=number]');
      if (o.has(s)) {
        if (((n = n.trim()), i.focus(), (i.value = n), i.value !== n))
          throw this.createStacklessError('Malformed value');
        return (
          r.dispatchEvent(new Event('input', { bubbles: !0, composed: !0 })),
          r.dispatchEvent(new Event('change', { bubbles: !0 })),
          'done'
        );
      }
    } else if (r.nodeName.toLowerCase() !== 'textarea') {
      if (!r.isContentEditable)
        throw this.createStacklessError(
          'Element is not an <input>, <textarea> or [contenteditable] element'
        );
    }
    return this.selectText(r), 'needsinput';
  }
  selectText(t) {
    const n = this.retarget(t, 'follow-label');
    if (!n) return 'error:notconnected';
    if (n.nodeName.toLowerCase() === 'input') {
      const s = n;
      return s.select(), s.focus(), 'done';
    }
    if (n.nodeName.toLowerCase() === 'textarea') {
      const s = n;
      return (s.selectionStart = 0), (s.selectionEnd = s.value.length), s.focus(), 'done';
    }
    const r = n.ownerDocument.createRange();
    r.selectNodeContents(n);
    const i = n.ownerDocument.defaultView.getSelection();
    return i && (i.removeAllRanges(), i.addRange(r)), n.focus(), 'done';
  }
  _activelyFocused(t) {
    const n = t.getRootNode().activeElement,
      r = n === t && !!t.ownerDocument && t.ownerDocument.hasFocus();
    return { activeElement: n, isFocused: r };
  }
  focusNode(t, n) {
    if (!t.isConnected) return 'error:notconnected';
    if (t.nodeType !== Node.ELEMENT_NODE) throw this.createStacklessError('Node is not an element');
    const { activeElement: r, isFocused: i } = this._activelyFocused(t);
    if (
      (t.isContentEditable && !i && r && r.blur && r.blur(),
      t.focus(),
      t.focus(),
      n && !i && t.nodeName.toLowerCase() === 'input')
    )
      try {
        t.setSelectionRange(0, 0);
      } catch {}
    return 'done';
  }
  blurNode(t) {
    if (!t.isConnected) return 'error:notconnected';
    if (t.nodeType !== Node.ELEMENT_NODE) throw this.createStacklessError('Node is not an element');
    return t.blur(), 'done';
  }
  setInputFiles(t, n) {
    if (t.nodeType !== Node.ELEMENT_NODE) return 'Node is not of type HTMLElement';
    const r = t;
    if (r.nodeName !== 'INPUT') return 'Not an <input> element';
    const i = r;
    if ((i.getAttribute('type') || '').toLowerCase() !== 'file')
      return 'Not an input[type=file] element';
    const o = n.map(a => {
        const u = Uint8Array.from(atob(a.buffer), c => c.charCodeAt(0));
        return new File([u], a.name, { type: a.mimeType, lastModified: a.lastModifiedMs });
      }),
      l = new DataTransfer();
    for (const a of o) l.items.add(a);
    (i.files = l.files),
      i.dispatchEvent(new Event('input', { bubbles: !0, composed: !0 })),
      i.dispatchEvent(new Event('change', { bubbles: !0 }));
  }
  expectHitTarget(t, n) {
    const r = [];
    let i = n;
    for (; i; ) {
      const c = Oh(i);
      if (!c || (r.push(c), c.nodeType === 9)) break;
      i = c.host;
    }
    let s;
    for (let c = r.length - 1; c >= 0; c--) {
      const h = r[c],
        d = h.elementsFromPoint(t.x, t.y),
        g = h.elementFromPoint(t.x, t.y);
      if (g && d[0] && Te(g) === d[0]) {
        const w = this.window.getComputedStyle(g);
        (w == null ? void 0 : w.display) === 'contents' && d.unshift(g);
      }
      d[0] && d[0].shadowRoot === h && d[1] === g && d.shift();
      const y = d[0];
      if (!y || ((s = y), c && y !== r[c - 1].host)) break;
    }
    const o = [];
    for (; s && s !== n; ) o.push(s), (s = Te(s));
    if (s === n) return 'done';
    const l = this.previewNode(o[0] || this.document.documentElement);
    let a,
      u = n;
    for (; u; ) {
      const c = o.indexOf(u);
      if (c !== -1) {
        c > 1 && (a = this.previewNode(o[c - 1]));
        break;
      }
      u = Te(u);
    }
    return a ? { hitTargetDescription: `${l} from ${a} subtree` } : { hitTargetDescription: l };
  }
  setupHitTargetInterceptor(t, n, r, i) {
    const s = this.retarget(t, 'button-link');
    if (!s || !s.isConnected) return 'error:notconnected';
    if (r) {
      const c = this.expectHitTarget(r, s);
      if (c !== 'done') return c.hitTargetDescription;
    }
    if (n === 'drag') return { stop: () => 'done' };
    const o = { hover: Lp, tap: Ap, mouse: Mp }[n];
    let l;
    const a = c => {
        if (!o.has(c.type) || !c.isTrusted) return;
        const h = this.window.TouchEvent && c instanceof this.window.TouchEvent ? c.touches[0] : c;
        l === void 0 && h && (l = this.expectHitTarget({ x: h.clientX, y: h.clientY }, s)),
          (i || (l !== 'done' && l !== void 0)) &&
            (c.preventDefault(), c.stopPropagation(), c.stopImmediatePropagation());
      },
      u = () => (
        this._hitTargetInterceptor === a && (this._hitTargetInterceptor = void 0), l || 'done'
      );
    return (this._hitTargetInterceptor = a), { stop: u };
  }
  dispatchEvent(t, n, r) {
    let i;
    switch (((r = { bubbles: !0, cancelable: !0, composed: !0, ...r }), aw.get(n))) {
      case 'mouse':
        i = new MouseEvent(n, r);
        break;
      case 'keyboard':
        i = new KeyboardEvent(n, r);
        break;
      case 'touch':
        i = new TouchEvent(n, r);
        break;
      case 'pointer':
        i = new PointerEvent(n, r);
        break;
      case 'focus':
        i = new FocusEvent(n, r);
        break;
      case 'drag':
        i = new DragEvent(n, r);
        break;
      case 'wheel':
        i = new WheelEvent(n, r);
        break;
      case 'deviceorientation':
        try {
          i = new DeviceOrientationEvent(n, r);
        } catch {
          const { bubbles: s, cancelable: o, alpha: l, beta: a, gamma: u, absolute: c } = r;
          (i = this.document.createEvent('DeviceOrientationEvent')),
            i.initDeviceOrientationEvent(n, s, o, l, a, u, c);
        }
        break;
      case 'devicemotion':
        try {
          i = new DeviceMotionEvent(n, r);
        } catch {
          const {
            bubbles: s,
            cancelable: o,
            acceleration: l,
            accelerationIncludingGravity: a,
            rotationRate: u,
            interval: c,
          } = r;
          (i = this.document.createEvent('DeviceMotionEvent')),
            i.initDeviceMotionEvent(n, s, o, l, a, u, c);
        }
        break;
      default:
        i = new Event(n, r);
        break;
    }
    t.dispatchEvent(i);
  }
  previewNode(t) {
    if (t.nodeType === Node.TEXT_NODE) return Oi(`#text=${t.nodeValue || ''}`);
    if (t.nodeType !== Node.ELEMENT_NODE) return Oi(`<${t.nodeName.toLowerCase()} />`);
    const n = t,
      r = [];
    for (let a = 0; a < n.attributes.length; a++) {
      const { name: u, value: c } = n.attributes[a];
      u !== 'style' && (!c && lw.has(u) ? r.push(` ${u}`) : r.push(` ${u}="${c}"`));
    }
    r.sort((a, u) => a.length - u.length);
    const i = lc(r.join(''), 500);
    if (ow.has(n.nodeName)) return Oi(`<${n.nodeName.toLowerCase()}${i}/>`);
    const s = n.childNodes;
    let o = !1;
    if (s.length <= 5) {
      o = !0;
      for (let a = 0; a < s.length; a++) o = o && s[a].nodeType === Node.TEXT_NODE;
    }
    const l = o ? n.textContent || '' : s.length ? '…' : '';
    return Oi(`<${n.nodeName.toLowerCase()}${i}>${lc(l, 50)}</${n.nodeName.toLowerCase()}>`);
  }
  strictModeViolationError(t, n) {
    const r = n
        .slice(0, 10)
        .map(s => ({ preview: this.previewNode(s), selector: this.generateSelectorSimple(s) })),
      i = r.map(
        (s, o) => `
    ${o + 1}) ${s.preview} aka ${Kt(this._sdkLanguage, s.selector)}`
      );
    return (
      r.length < n.length &&
        i.push(`
    ...`),
      this.createStacklessError(`strict mode violation: ${Kt(
        this._sdkLanguage,
        gn(t)
      )} resolved to ${n.length} elements:${i.join('')}
`)
    );
  }
  createStacklessError(t) {
    if (this._browserName === 'firefox') {
      const r = new Error('Error: ' + t);
      return (r.stack = ''), r;
    }
    const n = new Error(t);
    return delete n.stack, n;
  }
  createHighlight() {
    return new Oo(this);
  }
  maskSelectors(t, n) {
    this._highlight && this.hideHighlight(),
      (this._highlight = new Oo(this)),
      this._highlight.install();
    const r = [];
    for (const i of t) r.push(this.querySelectorAll(i, this.document.documentElement));
    this._highlight.maskElements(r.flat(), n);
  }
  highlight(t) {
    this._highlight || ((this._highlight = new Oo(this)), this._highlight.install()),
      this._highlight.runHighlightOnRaf(t);
  }
  hideHighlight() {
    this._highlight && (this._highlight.uninstall(), delete this._highlight);
  }
  markTargetElements(t, n) {
    const r = new CustomEvent('__playwright_target__', {
      bubbles: !0,
      cancelable: !0,
      detail: n,
      composed: !0,
    });
    for (const i of t) i.dispatchEvent(r);
  }
  _setupGlobalListenersRemovalDetection() {
    const t = '__playwright_global_listeners_check__';
    let n = !1;
    const r = () => (n = !0);
    this.window.addEventListener(t, r),
      new MutationObserver(i => {
        if (
          i.some(o => Array.from(o.addedNodes).includes(this.document.documentElement)) &&
          ((n = !1), this.window.dispatchEvent(new CustomEvent(t)), !n)
        ) {
          this.window.addEventListener(t, r);
          for (const o of this.onGlobalListenersRemoved) o();
        }
      }).observe(this.document, { childList: !0 });
  }
  _setupHitTargetInterceptors() {
    const t = r => {
        var i;
        return (i = this._hitTargetInterceptor) == null ? void 0 : i.call(this, r);
      },
      n = () => {
        for (const r of uw) this.window.addEventListener(r, t, { capture: !0, passive: !1 });
      };
    n(), this.onGlobalListenersRemoved.add(n);
  }
  async expect(t, n, r) {
    return n.expression === 'to.have.count' || n.expression.endsWith('.array')
      ? this.expectArray(r, n)
      : t
      ? await this.expectSingleElement(t, n)
      : !n.isNot && n.expression === 'to.be.hidden'
      ? { matches: !0 }
      : n.isNot && n.expression === 'to.be.visible'
      ? { matches: !1 }
      : !n.isNot && n.expression === 'to.be.detached'
      ? { matches: !0 }
      : n.isNot && n.expression === 'to.be.attached'
      ? { matches: !1 }
      : n.isNot && n.expression === 'to.be.in.viewport'
      ? { matches: !1 }
      : { matches: n.isNot, missingReceived: !0 };
  }
  async expectSingleElement(t, n) {
    var i;
    const r = n.expression;
    {
      let s;
      if (
        (r === 'to.have.attribute'
          ? (s = t.hasAttribute(n.expressionArg))
          : r === 'to.be.checked'
          ? (s = this.elementState(t, 'checked'))
          : r === 'to.be.unchecked'
          ? (s = this.elementState(t, 'unchecked'))
          : r === 'to.be.disabled'
          ? (s = this.elementState(t, 'disabled'))
          : r === 'to.be.editable'
          ? (s = this.elementState(t, 'editable'))
          : r === 'to.be.readonly'
          ? (s = !this.elementState(t, 'editable'))
          : r === 'to.be.empty'
          ? t.nodeName === 'INPUT' || t.nodeName === 'TEXTAREA'
            ? (s = !t.value)
            : (s = !((i = t.textContent) != null && i.trim()))
          : r === 'to.be.enabled'
          ? (s = this.elementState(t, 'enabled'))
          : r === 'to.be.focused'
          ? (s = this._activelyFocused(t).isFocused)
          : r === 'to.be.hidden'
          ? (s = this.elementState(t, 'hidden'))
          : r === 'to.be.visible'
          ? (s = this.elementState(t, 'visible'))
          : r === 'to.be.attached'
          ? (s = !0)
          : r === 'to.be.detached' && (s = !1),
        s !== void 0)
      ) {
        if (s === 'error:notcheckbox') throw this.createStacklessError('Element is not a checkbox');
        if (s === 'error:notconnected') throw this.createStacklessError('Element is not connected');
        return { received: s, matches: s };
      }
    }
    if (r === 'to.have.property') {
      let s = t;
      const o = n.expressionArg.split('.');
      for (let u = 0; u < o.length - 1; u++) {
        if (typeof s != 'object' || !(o[u] in s)) return { received: void 0, matches: !1 };
        s = s[o[u]];
      }
      const l = s[o[o.length - 1]],
        a = Bl(l, n.expectedValue);
      return { received: l, matches: a };
    }
    if (r === 'to.be.in.viewport') {
      const s = await this.viewportRatio(t);
      return {
        received: `viewport ratio ${s}`,
        matches: s > 0 && s > (n.expectedNumber ?? 0) - 1e-9,
      };
    }
    if (r === 'to.have.values') {
      if (((t = this.retarget(t, 'follow-label')), t.nodeName !== 'SELECT' || !t.multiple))
        throw this.createStacklessError('Not a select element with a multiple attribute');
      const s = [...t.selectedOptions].map(o => o.value);
      return s.length !== n.expectedText.length
        ? { received: s, matches: !1 }
        : {
            received: s,
            matches: s.map((o, l) => new zo(n.expectedText[l]).matches(o)).every(Boolean),
          };
    }
    {
      let s;
      if (r === 'to.have.attribute.value') {
        const o = t.getAttribute(n.expressionArg);
        if (o === null) return { received: null, matches: !1 };
        s = o;
      } else if (r === 'to.have.class') s = t.classList.toString();
      else if (r === 'to.have.css')
        s = this.window.getComputedStyle(t).getPropertyValue(n.expressionArg);
      else if (r === 'to.have.id') s = t.id;
      else if (r === 'to.have.text') s = n.useInnerText ? t.innerText : je(new Map(), t).full;
      else if (r === 'to.have.accessible.name') s = Rs(t, !1);
      else if (r === 'to.have.accessible.description') s = Ec(t, !1);
      else if (r === 'to.have.role') s = Ne(t) || '';
      else if (r === 'to.have.title') s = this.document.title;
      else if (r === 'to.have.url') s = this.document.location.href;
      else if (r === 'to.have.value') {
        if (
          ((t = this.retarget(t, 'follow-label')),
          t.nodeName !== 'INPUT' && t.nodeName !== 'TEXTAREA' && t.nodeName !== 'SELECT')
        )
          throw this.createStacklessError('Not an input element');
        s = t.value;
      }
      if (s !== void 0 && n.expectedText) {
        const o = new zo(n.expectedText[0]);
        return { received: s, matches: o.matches(s) };
      }
    }
    throw this.createStacklessError('Unknown expect matcher: ' + r);
  }
  expectArray(t, n) {
    const r = n.expression;
    if (r === 'to.have.count') {
      const s = t.length,
        o = s === n.expectedNumber;
      return { received: s, matches: o };
    }
    let i;
    if (
      (r === 'to.have.text.array' || r === 'to.contain.text.array'
        ? (i = t.map(s => (n.useInnerText ? s.innerText : je(new Map(), s).full)))
        : r === 'to.have.class.array' && (i = t.map(s => s.classList.toString())),
      i && n.expectedText)
    ) {
      const s = r !== 'to.contain.text.array';
      if (!(i.length === n.expectedText.length || !s)) return { received: i, matches: !1 };
      const l = n.expectedText.map(c => new zo(c));
      let a = 0,
        u = 0;
      for (; a < l.length && u < i.length; ) l[a].matches(i[u]) && ++a, ++u;
      return { received: i, matches: a === l.length };
    }
    throw this.createStacklessError('Unknown expect matcher: ' + r);
  }
  getElementAccessibleName(t, n) {
    return Rs(t, !!n);
  }
  getElementAccessibleDescription(t, n) {
    return Ec(t, !!n);
  }
  getAriaRole(t) {
    return Ne(t);
  }
}
const ow = new Set([
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
  lw = new Set(['checked', 'selected', 'disabled', 'readonly', 'multiple']);
function Oi(e) {
  return e.replace(/\n/g, '↵').replace(/\t/g, '⇆');
}
const aw = new Map([
    ['auxclick', 'mouse'],
    ['click', 'mouse'],
    ['dblclick', 'mouse'],
    ['mousedown', 'mouse'],
    ['mouseeenter', 'mouse'],
    ['mouseleave', 'mouse'],
    ['mousemove', 'mouse'],
    ['mouseout', 'mouse'],
    ['mouseover', 'mouse'],
    ['mouseup', 'mouse'],
    ['mouseleave', 'mouse'],
    ['mousewheel', 'mouse'],
    ['keydown', 'keyboard'],
    ['keyup', 'keyboard'],
    ['keypress', 'keyboard'],
    ['textInput', 'keyboard'],
    ['touchstart', 'touch'],
    ['touchmove', 'touch'],
    ['touchend', 'touch'],
    ['touchcancel', 'touch'],
    ['pointerover', 'pointer'],
    ['pointerout', 'pointer'],
    ['pointerenter', 'pointer'],
    ['pointerleave', 'pointer'],
    ['pointerdown', 'pointer'],
    ['pointerup', 'pointer'],
    ['pointermove', 'pointer'],
    ['pointercancel', 'pointer'],
    ['gotpointercapture', 'pointer'],
    ['lostpointercapture', 'pointer'],
    ['focus', 'focus'],
    ['blur', 'focus'],
    ['drag', 'drag'],
    ['dragstart', 'drag'],
    ['dragend', 'drag'],
    ['dragover', 'drag'],
    ['dragenter', 'drag'],
    ['dragleave', 'drag'],
    ['dragexit', 'drag'],
    ['drop', 'drag'],
    ['wheel', 'wheel'],
    ['deviceorientation', 'deviceorientation'],
    ['deviceorientationabsolute', 'deviceorientation'],
    ['devicemotion', 'devicemotion'],
  ]),
  Lp = new Set(['mousemove']),
  Ap = new Set(['pointerdown', 'pointerup', 'touchstart', 'touchend', 'touchcancel']),
  Mp = new Set([
    'mousedown',
    'mouseup',
    'pointerdown',
    'pointerup',
    'click',
    'auxclick',
    'dblclick',
    'contextmenu',
  ]),
  uw = new Set([...Lp, ...Ap, ...Mp]);
function cw(e) {
  if (((e = e.substring(1, e.length - 1)), !e.includes('\\'))) return e;
  const t = [];
  let n = 0;
  for (; n < e.length; ) e[n] === '\\' && n + 1 < e.length && n++, t.push(e[n++]);
  return t.join('');
}
function zi(e, t) {
  if (e[0] === '/' && e.lastIndexOf('/') > 0) {
    const i = e.lastIndexOf('/'),
      s = new RegExp(e.substring(1, i), e.substring(i + 1));
    return { matcher: o => s.test(o.full), kind: 'regex' };
  }
  const n = t ? JSON.parse.bind(JSON) : cw;
  let r = !1;
  return (
    e.length > 1 && e[0] === '"' && e[e.length - 1] === '"'
      ? ((e = n(e)), (r = !0))
      : t && e.length > 1 && e[0] === '"' && e[e.length - 2] === '"' && e[e.length - 1] === 'i'
      ? ((e = n(e.substring(0, e.length - 1))), (r = !1))
      : t && e.length > 1 && e[0] === '"' && e[e.length - 2] === '"' && e[e.length - 1] === 's'
      ? ((e = n(e.substring(0, e.length - 1))), (r = !0))
      : e.length > 1 && e[0] === "'" && e[e.length - 1] === "'" && ((e = n(e)), (r = !0)),
    (e = Ue(e)),
    r
      ? t
        ? { kind: 'strict', matcher: s => s.normalized === e }
        : {
            matcher: s => (!e && !s.immediate.length ? !0 : s.immediate.some(o => Ue(o) === e)),
            kind: 'strict',
          }
      : ((e = e.toLowerCase()),
        { kind: 'lax', matcher: i => i.normalized.toLowerCase().includes(e) })
  );
}
class zo {
  constructor(t) {
    if (
      ((this._normalizeWhiteSpace = t.normalizeWhiteSpace),
      (this._ignoreCase = t.ignoreCase),
      (this._string = t.matchSubstring ? void 0 : this.normalize(t.string)),
      (this._substring = t.matchSubstring ? this.normalize(t.string) : void 0),
      t.regexSource)
    ) {
      const n = new Set((t.regexFlags || '').split(''));
      t.ignoreCase === !1 && n.delete('i'),
        t.ignoreCase === !0 && n.add('i'),
        (this._regex = new RegExp(t.regexSource, [...n].join('')));
    }
  }
  matches(t) {
    return (
      this._regex || (t = this.normalize(t)),
      this._string !== void 0
        ? t === this._string
        : this._substring !== void 0
        ? t.includes(this._substring)
        : this._regex
        ? !!this._regex.test(t)
        : !1
    );
  }
  normalize(t) {
    return (
      t &&
      (this._normalizeWhiteSpace && (t = Ue(t)), this._ignoreCase && (t = t.toLocaleLowerCase()), t)
    );
  }
}
function Bl(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == 'object' && typeof t == 'object') {
    if (e.constructor !== t.constructor) return !1;
    if (Array.isArray(e)) {
      if (e.length !== t.length) return !1;
      for (let r = 0; r < e.length; ++r) if (!Bl(e[r], t[r])) return !1;
      return !0;
    }
    if (e instanceof RegExp) return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
    const n = Object.keys(e);
    if (n.length !== Object.keys(t).length) return !1;
    for (let r = 0; r < n.length; ++r) if (!t.hasOwnProperty(n[r])) return !1;
    for (const r of n) if (!Bl(e[r], t[r])) return !1;
    return !0;
  }
  return typeof e == 'number' && typeof t == 'number' ? isNaN(e) && isNaN(t) : !1;
}
const dw = {
  tagName: 'svg',
  children: [
    {
      tagName: 'defs',
      children: [
        {
          tagName: 'clipPath',
          attrs: {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            id: 'icon-gripper',
          },
          children: [
            {
              tagName: 'path',
              attrs: { d: 'M5 3h2v2H5zm0 4h2v2H5zm0 4h2v2H5zm4-8h2v2H9zm0 4h2v2H9zm0 4h2v2H9z' },
            },
          ],
        },
        {
          tagName: 'clipPath',
          attrs: {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            id: 'icon-circle-large-filled',
          },
          children: [
            {
              tagName: 'path',
              attrs: {
                d: 'M8 1a6.8 6.8 0 0 1 1.86.253 6.899 6.899 0 0 1 3.083 1.805 6.903 6.903 0 0 1 1.804 3.083C14.916 6.738 15 7.357 15 8s-.084 1.262-.253 1.86a6.9 6.9 0 0 1-.704 1.674 7.157 7.157 0 0 1-2.516 2.509 6.966 6.966 0 0 1-1.668.71A6.984 6.984 0 0 1 8 15a6.984 6.984 0 0 1-1.86-.246 7.098 7.098 0 0 1-1.674-.711 7.3 7.3 0 0 1-1.415-1.094 7.295 7.295 0 0 1-1.094-1.415 7.098 7.098 0 0 1-.71-1.675A6.985 6.985 0 0 1 1 8c0-.643.082-1.262.246-1.86a6.968 6.968 0 0 1 .711-1.667 7.156 7.156 0 0 1 2.509-2.516 6.895 6.895 0 0 1 1.675-.704A6.808 6.808 0 0 1 8 1z',
              },
            },
          ],
        },
        {
          tagName: 'clipPath',
          attrs: {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            id: 'icon-inspect',
          },
          children: [
            {
              tagName: 'path',
              attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M1 3l1-1h12l1 1v6h-1V3H2v8h5v1H2l-1-1V3zm14.707 9.707L9 6v9.414l2.707-2.707h4zM10 13V8.414l3.293 3.293h-2L10 13z',
              },
            },
          ],
        },
        {
          tagName: 'clipPath',
          attrs: {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            id: 'icon-whole-word',
          },
          children: [
            {
              tagName: 'path',
              attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M0 11H1V13H15V11H16V14H15H1H0V11Z',
              },
            },
            {
              tagName: 'path',
              attrs: {
                d: 'M6.84048 11H5.95963V10.1406H5.93814C5.555 10.7995 4.99104 11.1289 4.24625 11.1289C3.69839 11.1289 3.26871 10.9839 2.95718 10.6938C2.64924 10.4038 2.49527 10.0189 2.49527 9.53906C2.49527 8.51139 3.10041 7.91341 4.3107 7.74512L5.95963 7.51416C5.95963 6.57959 5.58186 6.1123 4.82632 6.1123C4.16389 6.1123 3.56591 6.33789 3.03238 6.78906V5.88672C3.57307 5.54297 4.19612 5.37109 4.90152 5.37109C6.19416 5.37109 6.84048 6.05501 6.84048 7.42285V11ZM5.95963 8.21777L4.63297 8.40039C4.22476 8.45768 3.91682 8.55973 3.70914 8.70654C3.50145 8.84977 3.39761 9.10579 3.39761 9.47461C3.39761 9.74316 3.4925 9.96338 3.68228 10.1353C3.87564 10.3035 4.13166 10.3877 4.45035 10.3877C4.8872 10.3877 5.24706 10.2355 5.52994 9.93115C5.8164 9.62321 5.95963 9.2347 5.95963 8.76562V8.21777Z',
              },
            },
            {
              tagName: 'path',
              attrs: {
                d: 'M9.3475 10.2051H9.32601V11H8.44515V2.85742H9.32601V6.4668H9.3475C9.78076 5.73633 10.4146 5.37109 11.2489 5.37109C11.9543 5.37109 12.5057 5.61816 12.9032 6.1123C13.3042 6.60286 13.5047 7.26172 13.5047 8.08887C13.5047 9.00911 13.2809 9.74674 12.8333 10.3018C12.3857 10.8532 11.7734 11.1289 10.9964 11.1289C10.2695 11.1289 9.71989 10.821 9.3475 10.2051ZM9.32601 7.98682V8.75488C9.32601 9.20964 9.47282 9.59635 9.76644 9.91504C10.0636 10.2301 10.4396 10.3877 10.8944 10.3877C11.4279 10.3877 11.8451 10.1836 12.1458 9.77539C12.4502 9.36719 12.6024 8.79964 12.6024 8.07275C12.6024 7.46045 12.4609 6.98063 12.1781 6.6333C11.8952 6.28597 11.512 6.1123 11.0286 6.1123C10.5166 6.1123 10.1048 6.29134 9.7933 6.64941C9.48177 7.00391 9.32601 7.44971 9.32601 7.98682Z',
              },
            },
          ],
        },
        {
          tagName: 'clipPath',
          attrs: {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            id: 'icon-eye',
          },
          children: [
            {
              tagName: 'path',
              attrs: {
                d: 'M7.99993 6.00316C9.47266 6.00316 10.6666 7.19708 10.6666 8.66981C10.6666 10.1426 9.47266 11.3365 7.99993 11.3365C6.52715 11.3365 5.33324 10.1426 5.33324 8.66981C5.33324 7.19708 6.52715 6.00316 7.99993 6.00316ZM7.99993 7.00315C7.07946 7.00315 6.33324 7.74935 6.33324 8.66981C6.33324 9.59028 7.07946 10.3365 7.99993 10.3365C8.9204 10.3365 9.6666 9.59028 9.6666 8.66981C9.6666 7.74935 8.9204 7.00315 7.99993 7.00315ZM7.99993 3.66675C11.0756 3.66675 13.7307 5.76675 14.4673 8.70968C14.5344 8.97755 14.3716 9.24908 14.1037 9.31615C13.8358 9.38315 13.5643 9.22041 13.4973 8.95248C12.8713 6.45205 10.6141 4.66675 7.99993 4.66675C5.38454 4.66675 3.12664 6.45359 2.50182 8.95555C2.43491 9.22341 2.16348 9.38635 1.89557 9.31948C1.62766 9.25255 1.46471 8.98115 1.53162 8.71321C2.26701 5.76856 4.9229 3.66675 7.99993 3.66675Z',
              },
            },
          ],
        },
        {
          tagName: 'clipPath',
          attrs: {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            id: 'icon-symbol-constant',
          },
          children: [
            {
              tagName: 'path',
              attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M4 6h8v1H4V6zm8 3H4v1h8V9z',
              },
            },
            {
              tagName: 'path',
              attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M1 4l1-1h12l1 1v8l-1 1H2l-1-1V4zm1 0v8h12V4H2z',
              },
            },
          ],
        },
        {
          tagName: 'clipPath',
          attrs: {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            id: 'icon-check',
          },
          children: [
            {
              tagName: 'path',
              attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z',
              },
            },
          ],
        },
        {
          tagName: 'clipPath',
          attrs: {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            id: 'icon-close',
          },
          children: [
            {
              tagName: 'path',
              attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z',
              },
            },
          ],
        },
        {
          tagName: 'clipPath',
          attrs: {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'currentColor',
            id: 'icon-pass',
          },
          children: [
            {
              tagName: 'path',
              attrs: { d: 'M6.27 10.87h.71l4.56-4.56-.71-.71-4.2 4.21-1.92-1.92L4 8.6l2.27 2.27z' },
            },
            {
              tagName: 'path',
              attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M8.6 1c1.6.1 3.1.9 4.2 2 1.3 1.4 2 3.1 2 5.1 0 1.6-.6 3.1-1.6 4.4-1 1.2-2.4 2.1-4 2.4-1.6.3-3.2.1-4.6-.7-1.4-.8-2.5-2-3.1-3.5C.9 9.2.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1zm.5 12.9c1.3-.3 2.5-1 3.4-2.1.8-1.1 1.3-2.4 1.2-3.8 0-1.6-.6-3.2-1.7-4.3-1-1-2.2-1.6-3.6-1.7-1.3-.1-2.7.2-3.8 1-1.1.8-1.9 1.9-2.3 3.3-.4 1.3-.4 2.7.2 4 .6 1.3 1.5 2.3 2.7 3 1.2.7 2.6.9 3.9.6z',
              },
            },
          ],
        },
      ],
    },
  ],
};
class Ic {
  cursor() {
    return 'default';
  }
}
class Do {
  constructor(t, n) {
    (this._hoveredModel = null),
      (this._hoveredElement = null),
      (this._hoveredSelectors = null),
      (this._recorder = t),
      (this._assertVisibility = n);
  }
  cursor() {
    return 'pointer';
  }
  cleanup() {
    (this._hoveredModel = null), (this._hoveredElement = null), (this._hoveredSelectors = null);
  }
  onClick(t) {
    var n;
    X(t),
      t.button === 0 &&
        (n = this._hoveredModel) != null &&
        n.selector &&
        this._commit(this._hoveredModel.selector);
  }
  onContextMenu(t) {
    if (
      this._hoveredModel &&
      !this._hoveredModel.tooltipListItemSelected &&
      this._hoveredSelectors &&
      this._hoveredSelectors.length > 1
    ) {
      X(t);
      const n = this._hoveredSelectors;
      (this._hoveredModel.tooltipFooter = void 0),
        (this._hoveredModel.tooltipList = n.map(r =>
          this._recorder.injectedScript.utils.asLocator(this._recorder.state.language, r)
        )),
        (this._hoveredModel.tooltipListItemSelected = r => {
          r === void 0 ? this._reset(!0) : this._commit(n[r]);
        }),
        this._recorder.updateHighlight(this._hoveredModel, !0);
    }
  }
  onPointerDown(t) {
    X(t);
  }
  onPointerUp(t) {
    X(t);
  }
  onMouseDown(t) {
    X(t);
  }
  onMouseUp(t) {
    X(t);
  }
  onMouseMove(t) {
    var s;
    X(t);
    let n = this._recorder.deepEventTarget(t);
    if ((n.isConnected || (n = null), this._hoveredElement === n)) return;
    this._hoveredElement = n;
    let r = null,
      i = [];
    if (this._hoveredElement) {
      const o = this._recorder.injectedScript.generateSelector(this._hoveredElement, {
        testIdAttributeName: this._recorder.state.testIdAttributeName,
        multiple: !1,
      });
      (i = o.selectors),
        (r = {
          selector: o.selector,
          elements: o.elements,
          tooltipText: this._recorder.injectedScript.utils.asLocator(
            this._recorder.state.language,
            o.selector
          ),
          tooltipFooter: i.length > 1 ? 'Click to select, right-click for more options' : void 0,
          color: this._assertVisibility ? '#8acae480' : void 0,
        });
    }
    ((s = this._hoveredModel) == null ? void 0 : s.selector) !==
      (r == null ? void 0 : r.selector) &&
      ((this._hoveredModel = r),
      (this._hoveredSelectors = i),
      this._recorder.updateHighlight(r, !0));
  }
  onMouseEnter(t) {
    X(t);
  }
  onMouseLeave(t) {
    X(t);
    const n = this._recorder.injectedScript.window;
    n.top !== n &&
      this._recorder.deepEventTarget(t).nodeType === Node.DOCUMENT_NODE &&
      this._reset(!0);
  }
  onKeyDown(t) {
    var n, r, i;
    X(t),
      t.key === 'Escape' &&
        ((n = this._hoveredModel) != null && n.tooltipListItemSelected
          ? this._reset(!0)
          : this._assertVisibility &&
            ((i = (r = this._recorder.delegate).setMode) == null || i.call(r, 'recording')));
  }
  onKeyUp(t) {
    X(t);
  }
  onScroll(t) {
    this._reset(!1);
  }
  _commit(t) {
    var n, r, i, s, o, l, a;
    this._assertVisibility
      ? ((r = (n = this._recorder.delegate).recordAction) == null ||
          r.call(n, { name: 'assertVisible', selector: t, signals: [] }),
        (s = (i = this._recorder.delegate).setMode) == null || s.call(i, 'recording'),
        (o = this._recorder.overlay) == null || o.flashToolSucceeded('assertingVisibility'))
      : (a = (l = this._recorder.delegate).setSelector) == null || a.call(l, t);
  }
  _reset(t) {
    (this._hoveredElement = null),
      (this._hoveredModel = null),
      (this._hoveredSelectors = null),
      this._recorder.updateHighlight(null, t);
  }
}
class fw {
  constructor(t) {
    (this._performingAction = !1),
      (this._hoveredModel = null),
      (this._hoveredElement = null),
      (this._activeModel = null),
      (this._expectProgrammaticKeyUp = !1),
      (this._recorder = t);
  }
  cursor() {
    return 'pointer';
  }
  cleanup() {
    (this._hoveredModel = null),
      (this._hoveredElement = null),
      (this._activeModel = null),
      (this._expectProgrammaticKeyUp = !1);
  }
  onClick(t) {
    if (
      Rc(this._hoveredElement) ||
      this._shouldIgnoreMouseEvent(t) ||
      this._actionInProgress(t) ||
      this._consumedDueToNoModel(t, this._hoveredModel)
    )
      return;
    const n = Fo(this._recorder.deepEventTarget(t));
    if (n) {
      this._performAction({
        name: n.checked ? 'check' : 'uncheck',
        selector: this._hoveredModel.selector,
        signals: [],
      });
      return;
    }
    this._performAction({
      name: 'click',
      selector: this._hoveredModel.selector,
      position: vw(t),
      signals: [],
      button: gw(t),
      modifiers: Pc(t),
      clickCount: t.detail,
    });
  }
  onPointerDown(t) {
    this._shouldIgnoreMouseEvent(t) || this._performingAction || X(t);
  }
  onPointerUp(t) {
    this._shouldIgnoreMouseEvent(t) || this._performingAction || X(t);
  }
  onMouseDown(t) {
    this._shouldIgnoreMouseEvent(t) ||
      (this._performingAction || X(t), (this._activeModel = this._hoveredModel));
  }
  onMouseUp(t) {
    this._shouldIgnoreMouseEvent(t) || this._performingAction || X(t);
  }
  onMouseMove(t) {
    const n = this._recorder.deepEventTarget(t);
    this._hoveredElement !== n &&
      ((this._hoveredElement = n), this._updateModelForHoveredElement());
  }
  onMouseLeave(t) {
    const n = this._recorder.injectedScript.window;
    n.top !== n &&
      this._recorder.deepEventTarget(t).nodeType === Node.DOCUMENT_NODE &&
      ((this._hoveredElement = null), this._updateModelForHoveredElement());
  }
  onFocus(t) {
    this._onFocus(!0);
  }
  onInput(t) {
    var r, i, s, o, l, a;
    const n = this._recorder.deepEventTarget(t);
    if (n.nodeName === 'INPUT' && n.type.toLowerCase() === 'file') {
      (i = (r = this._recorder.delegate).recordAction) == null ||
        i.call(r, {
          name: 'setInputFiles',
          selector: this._activeModel.selector,
          signals: [],
          files: [...(n.files || [])].map(u => u.name),
        });
      return;
    }
    if (Rc(n)) {
      (o = (s = this._recorder.delegate).recordAction) == null ||
        o.call(s, {
          name: 'fill',
          selector: this._hoveredModel.selector,
          signals: [],
          text: n.value,
        });
      return;
    }
    if (['INPUT', 'TEXTAREA'].includes(n.nodeName) || n.isContentEditable) {
      if (
        (n.nodeName === 'INPUT' && ['checkbox', 'radio'].includes(n.type.toLowerCase())) ||
        this._consumedDueWrongTarget(t)
      )
        return;
      (a = (l = this._recorder.delegate).recordAction) == null ||
        a.call(l, {
          name: 'fill',
          selector: this._activeModel.selector,
          signals: [],
          text: n.isContentEditable ? n.innerText : n.value,
        });
    }
    if (n.nodeName === 'SELECT') {
      const u = n;
      if (this._actionInProgress(t)) return;
      this._performAction({
        name: 'select',
        selector: this._hoveredModel.selector,
        options: [...u.selectedOptions].map(c => c.value),
        signals: [],
      });
    }
  }
  onKeyDown(t) {
    if (this._shouldGenerateKeyPressFor(t)) {
      if (this._actionInProgress(t)) {
        this._expectProgrammaticKeyUp = !0;
        return;
      }
      if (!this._consumedDueWrongTarget(t)) {
        if (t.key === ' ') {
          const n = Fo(this._recorder.deepEventTarget(t));
          if (n) {
            this._performAction({
              name: n.checked ? 'uncheck' : 'check',
              selector: this._activeModel.selector,
              signals: [],
            });
            return;
          }
        }
        this._performAction({
          name: 'press',
          selector: this._activeModel.selector,
          signals: [],
          key: t.key,
          modifiers: Pc(t),
        });
      }
    }
  }
  onKeyUp(t) {
    if (this._shouldGenerateKeyPressFor(t)) {
      if (!this._expectProgrammaticKeyUp) {
        X(t);
        return;
      }
      this._expectProgrammaticKeyUp = !1;
    }
  }
  onScroll(t) {
    (this._hoveredModel = null),
      (this._hoveredElement = null),
      this._recorder.updateHighlight(null, !1);
  }
  _onFocus(t) {
    const n = mw(this._recorder.document);
    if (t && n === this._recorder.document.body) return;
    const r = n
      ? this._recorder.injectedScript.generateSelector(n, {
          testIdAttributeName: this._recorder.state.testIdAttributeName,
        })
      : null;
    (this._activeModel = r && r.selector ? r : null),
      t && (this._hoveredElement = n),
      this._updateModelForHoveredElement();
  }
  _shouldIgnoreMouseEvent(t) {
    const n = this._recorder.deepEventTarget(t),
      r = n.nodeName;
    return !!(
      r === 'SELECT' ||
      r === 'OPTION' ||
      (r === 'INPUT' && ['date', 'range'].includes(n.type))
    );
  }
  _actionInProgress(t) {
    return this._performingAction ? !0 : (X(t), !1);
  }
  _consumedDueToNoModel(t, n) {
    return n ? !1 : (X(t), !0);
  }
  _consumedDueWrongTarget(t) {
    return this._activeModel && this._activeModel.elements[0] === this._recorder.deepEventTarget(t)
      ? !1
      : (X(t), !0);
  }
  async _performAction(t) {
    var n, r;
    (this._hoveredElement = null),
      (this._hoveredModel = null),
      (this._activeModel = null),
      this._recorder.updateHighlight(null, !1),
      (this._performingAction = !0),
      await ((r = (n = this._recorder.delegate).performAction) == null
        ? void 0
        : r.call(n, t).catch(() => {})),
      (this._performingAction = !1),
      this._onFocus(!1),
      this._recorder.injectedScript.isUnderTest &&
        console.error(
          'Action performed for test: ' +
            JSON.stringify({
              hovered: this._hoveredModel ? this._hoveredModel.selector : null,
              active: this._activeModel ? this._activeModel.selector : null,
            })
        );
  }
  _shouldGenerateKeyPressFor(t) {
    if (
      (t.key === 'Enter' &&
        (this._recorder.deepEventTarget(t).nodeName === 'TEXTAREA' ||
          this._recorder.deepEventTarget(t).isContentEditable)) ||
      ['Backspace', 'Delete', 'AltGraph'].includes(t.key) ||
      (t.key === '@' && t.code === 'KeyL')
    )
      return !1;
    if (navigator.platform.includes('Mac')) {
      if (t.key === 'v' && t.metaKey) return !1;
    } else if ((t.key === 'v' && t.ctrlKey) || (t.key === 'Insert' && t.shiftKey)) return !1;
    if (['Shift', 'Control', 'Meta', 'Alt', 'Process'].includes(t.key)) return !1;
    const n = t.ctrlKey || t.altKey || t.metaKey;
    return t.key.length === 1 && !n ? !!Fo(this._recorder.deepEventTarget(t)) : !0;
  }
  _updateModelForHoveredElement() {
    if (!this._hoveredElement || !this._hoveredElement.isConnected) {
      (this._hoveredModel = null),
        (this._hoveredElement = null),
        this._recorder.updateHighlight(null, !0);
      return;
    }
    const { selector: t, elements: n } = this._recorder.injectedScript.generateSelector(
      this._hoveredElement,
      { testIdAttributeName: this._recorder.state.testIdAttributeName }
    );
    (this._hoveredModel && this._hoveredModel.selector === t) ||
      ((this._hoveredModel = t ? { selector: t, elements: n, color: '#dc6f6f7f' } : null),
      this._recorder.updateHighlight(this._hoveredModel, !0));
  }
}
class jc {
  constructor(t, n) {
    (this._hoverHighlight = null),
      (this._action = null),
      (this._dialogElement = null),
      (this._textCache = new Map()),
      (this._recorder = t),
      (this._kind = n),
      (this._acceptButton = this._recorder.document.createElement('x-pw-tool-item')),
      (this._acceptButton.title = 'Accept'),
      this._acceptButton.classList.add('accept'),
      this._acceptButton.appendChild(this._recorder.document.createElement('x-div')),
      this._acceptButton.addEventListener('click', () => this._commit()),
      (this._cancelButton = this._recorder.document.createElement('x-pw-tool-item')),
      (this._cancelButton.title = 'Close'),
      this._cancelButton.classList.add('cancel'),
      this._cancelButton.appendChild(this._recorder.document.createElement('x-div')),
      this._cancelButton.addEventListener('click', () => this._closeDialog());
  }
  cursor() {
    return 'pointer';
  }
  cleanup() {
    this._closeDialog(), (this._hoverHighlight = null);
  }
  onClick(t) {
    X(t),
      this._kind === 'value'
        ? this._commitAssertValue()
        : this._dialogElement || this._showDialog();
  }
  onMouseDown(t) {
    const n = this._recorder.deepEventTarget(t);
    this._elementHasValue(n) && t.preventDefault();
  }
  onPointerUp(t) {
    var r;
    const n = (r = this._hoverHighlight) == null ? void 0 : r.elements[0];
    this._kind === 'value' &&
      n &&
      n.nodeName === 'INPUT' &&
      n.disabled &&
      this._commitAssertValue();
  }
  onMouseMove(t) {
    var r;
    if (this._dialogElement) return;
    const n = this._recorder.deepEventTarget(t);
    ((r = this._hoverHighlight) == null ? void 0 : r.elements[0]) !== n &&
      (this._kind === 'text'
        ? (this._hoverHighlight = this._recorder.injectedScript.utils.elementText(
            this._textCache,
            n
          ).full
            ? { elements: [n], selector: '' }
            : null)
        : (this._hoverHighlight = this._elementHasValue(n)
            ? this._recorder.injectedScript.generateSelector(n, {
                testIdAttributeName: this._recorder.state.testIdAttributeName,
              })
            : null),
      this._hoverHighlight && (this._hoverHighlight.color = '#8acae480'),
      this._recorder.updateHighlight(this._hoverHighlight, !0));
  }
  onKeyDown(t) {
    var n, r;
    t.key === 'Escape' &&
      ((r = (n = this._recorder.delegate).setMode) == null || r.call(n, 'recording')),
      X(t);
  }
  onScroll(t) {
    this._recorder.updateHighlight(this._hoverHighlight, !1);
  }
  _elementHasValue(t) {
    return (
      t.nodeName === 'TEXTAREA' ||
      t.nodeName === 'SELECT' ||
      (t.nodeName === 'INPUT' && !['button', 'image', 'reset', 'submit'].includes(t.type))
    );
  }
  _generateAction() {
    var n;
    this._textCache.clear();
    const t = (n = this._hoverHighlight) == null ? void 0 : n.elements[0];
    if (!t) return null;
    if (this._kind === 'value') {
      if (!this._elementHasValue(t)) return null;
      const { selector: r } = this._recorder.injectedScript.generateSelector(t, {
        testIdAttributeName: this._recorder.state.testIdAttributeName,
      });
      return t.nodeName === 'INPUT' && ['checkbox', 'radio'].includes(t.type.toLowerCase())
        ? { name: 'assertChecked', selector: r, signals: [], checked: !t.checked }
        : { name: 'assertValue', selector: r, signals: [], value: t.value };
    } else
      return (
        (this._hoverHighlight = this._recorder.injectedScript.generateSelector(t, {
          testIdAttributeName: this._recorder.state.testIdAttributeName,
          forTextExpect: !0,
        })),
        (this._hoverHighlight.color = '#8acae480'),
        this._recorder.updateHighlight(this._hoverHighlight, !0),
        {
          name: 'assertText',
          selector: this._hoverHighlight.selector,
          signals: [],
          text: this._recorder.injectedScript.utils.elementText(this._textCache, t).normalized,
          substring: !0,
        }
      );
  }
  _renderValue(t) {
    return (t == null ? void 0 : t.name) === 'assertText'
      ? this._recorder.injectedScript.utils.normalizeWhiteSpace(t.text)
      : (t == null ? void 0 : t.name) === 'assertChecked'
      ? String(t.checked)
      : (t == null ? void 0 : t.name) === 'assertValue'
      ? t.value
      : '';
  }
  _commit() {
    var t, n, r, i;
    !this._action ||
      !this._dialogElement ||
      (this._closeDialog(),
      (n = (t = this._recorder.delegate).recordAction) == null || n.call(t, this._action),
      (i = (r = this._recorder.delegate).setMode) == null || i.call(r, 'recording'));
  }
  _showDialog() {
    var a;
    if (
      !((a = this._hoverHighlight) != null && a.elements[0]) ||
      ((this._action = this._generateAction()), !this._action || this._action.name !== 'assertText')
    )
      return;
    (this._dialogElement = this._recorder.document.createElement('x-pw-dialog')),
      (this._keyboardListener = u => {
        if (u.key === 'Escape') {
          this._closeDialog();
          return;
        }
        if (u.key === 'Enter' && (u.ctrlKey || u.metaKey)) {
          this._dialogElement && this._commit();
          return;
        }
      }),
      this._recorder.document.addEventListener('keydown', this._keyboardListener, !0);
    const t = this._recorder.document.createElement('x-pw-tools-list'),
      n = this._recorder.document.createElement('label');
    (n.textContent = 'Assert that element contains text'),
      t.appendChild(n),
      t.appendChild(this._recorder.document.createElement('x-spacer')),
      t.appendChild(this._acceptButton),
      t.appendChild(this._cancelButton),
      this._dialogElement.appendChild(t);
    const r = this._recorder.document.createElement('x-pw-dialog-body'),
      i = this._action,
      s = this._recorder.document.createElement('textarea');
    s.setAttribute('spellcheck', 'false'),
      (s.value = this._renderValue(this._action)),
      s.classList.add('text-editor');
    const o = () => {
      var g;
      const u = this._recorder.injectedScript.utils.normalizeWhiteSpace(s.value),
        c = (g = this._hoverHighlight) == null ? void 0 : g.elements[0];
      if (!c) return;
      i.text = u;
      const h = this._recorder.injectedScript.utils.elementText(this._textCache, c).normalized,
        d = u && h.includes(u);
      s.classList.toggle('does-not-match', !d);
    };
    s.addEventListener('input', o),
      r.appendChild(s),
      this._dialogElement.appendChild(r),
      this._recorder.highlight.appendChild(this._dialogElement);
    const l = this._recorder.highlight.tooltipPosition(
      this._recorder.highlight.firstBox(),
      this._dialogElement
    );
    (this._dialogElement.style.top = l.anchorTop + 'px'),
      (this._dialogElement.style.left = l.anchorLeft + 'px'),
      s.focus();
  }
  _closeDialog() {
    this._dialogElement &&
      (this._dialogElement.remove(),
      this._recorder.document.removeEventListener('keydown', this._keyboardListener),
      (this._dialogElement = null));
  }
  _commitAssertValue() {
    var n, r, i, s, o;
    if (this._kind !== 'value') return;
    const t = this._generateAction();
    t &&
      ((r = (n = this._recorder.delegate).recordAction) == null || r.call(n, t),
      (s = (i = this._recorder.delegate).setMode) == null || s.call(i, 'recording'),
      (o = this._recorder.overlay) == null || o.flashToolSucceeded('assertingValue'));
  }
}
class hw {
  constructor(t) {
    (this._listeners = []),
      (this._offsetX = 0),
      (this._measure = { width: 0, height: 0 }),
      (this._recorder = t);
    const n = this._recorder.document;
    (this._overlayElement = n.createElement('x-pw-overlay')),
      this._overlayElement.appendChild(jp(this._recorder.document, dw));
    const r = n.createElement('x-pw-tools-list');
    this._overlayElement.appendChild(r),
      (this._dragHandle = n.createElement('x-pw-tool-gripper')),
      this._dragHandle.appendChild(n.createElement('x-div')),
      r.appendChild(this._dragHandle),
      (this._recordToggle = this._recorder.document.createElement('x-pw-tool-item')),
      (this._recordToggle.title = 'Record'),
      this._recordToggle.classList.add('record'),
      this._recordToggle.appendChild(this._recorder.document.createElement('x-div')),
      r.appendChild(this._recordToggle),
      (this._pickLocatorToggle = this._recorder.document.createElement('x-pw-tool-item')),
      (this._pickLocatorToggle.title = 'Pick locator'),
      this._pickLocatorToggle.classList.add('pick-locator'),
      this._pickLocatorToggle.appendChild(this._recorder.document.createElement('x-div')),
      r.appendChild(this._pickLocatorToggle),
      (this._assertVisibilityToggle = this._recorder.document.createElement('x-pw-tool-item')),
      (this._assertVisibilityToggle.title = 'Assert visibility'),
      this._assertVisibilityToggle.classList.add('visibility'),
      this._assertVisibilityToggle.appendChild(this._recorder.document.createElement('x-div')),
      r.appendChild(this._assertVisibilityToggle),
      (this._assertTextToggle = this._recorder.document.createElement('x-pw-tool-item')),
      (this._assertTextToggle.title = 'Assert text'),
      this._assertTextToggle.classList.add('text'),
      this._assertTextToggle.appendChild(this._recorder.document.createElement('x-div')),
      r.appendChild(this._assertTextToggle),
      (this._assertValuesToggle = this._recorder.document.createElement('x-pw-tool-item')),
      (this._assertValuesToggle.title = 'Assert value'),
      this._assertValuesToggle.classList.add('value'),
      this._assertValuesToggle.appendChild(this._recorder.document.createElement('x-div')),
      r.appendChild(this._assertValuesToggle),
      this._updateVisualPosition(),
      this._refreshListeners();
  }
  _refreshListeners() {
    Ip(this._listeners),
      (this._listeners = [
        J(this._dragHandle, 'mousedown', t => {
          this._dragState = { offsetX: this._offsetX, dragStart: { x: t.clientX, y: 0 } };
        }),
        J(this._recordToggle, 'click', () => {
          var t, n;
          (n = (t = this._recorder.delegate).setMode) == null ||
            n.call(
              t,
              this._recorder.state.mode === 'none' ||
                this._recorder.state.mode === 'standby' ||
                this._recorder.state.mode === 'inspecting'
                ? 'recording'
                : 'standby'
            );
        }),
        J(this._pickLocatorToggle, 'click', () => {
          var n, r;
          const t = {
            inspecting: 'standby',
            none: 'inspecting',
            standby: 'inspecting',
            recording: 'recording-inspecting',
            'recording-inspecting': 'recording',
            assertingText: 'recording-inspecting',
            assertingVisibility: 'recording-inspecting',
            assertingValue: 'recording-inspecting',
          };
          (r = (n = this._recorder.delegate).setMode) == null ||
            r.call(n, t[this._recorder.state.mode]);
        }),
        J(this._assertVisibilityToggle, 'click', () => {
          var t, n;
          this._assertVisibilityToggle.classList.contains('disabled') ||
            (n = (t = this._recorder.delegate).setMode) == null ||
            n.call(
              t,
              this._recorder.state.mode === 'assertingVisibility'
                ? 'recording'
                : 'assertingVisibility'
            );
        }),
        J(this._assertTextToggle, 'click', () => {
          var t, n;
          this._assertTextToggle.classList.contains('disabled') ||
            (n = (t = this._recorder.delegate).setMode) == null ||
            n.call(
              t,
              this._recorder.state.mode === 'assertingText' ? 'recording' : 'assertingText'
            );
        }),
        J(this._assertValuesToggle, 'click', () => {
          var t, n;
          this._assertValuesToggle.classList.contains('disabled') ||
            (n = (t = this._recorder.delegate).setMode) == null ||
            n.call(
              t,
              this._recorder.state.mode === 'assertingValue' ? 'recording' : 'assertingValue'
            );
        }),
      ]);
  }
  install() {
    this._recorder.highlight.appendChild(this._overlayElement),
      this._refreshListeners(),
      this._updateVisualPosition();
  }
  contains(t) {
    return this._recorder.injectedScript.utils.isInsideScope(this._overlayElement, t);
  }
  setUIState(t) {
    this._recordToggle.classList.toggle(
      'active',
      t.mode === 'recording' ||
        t.mode === 'assertingText' ||
        t.mode === 'assertingVisibility' ||
        t.mode === 'assertingValue' ||
        t.mode === 'recording-inspecting'
    ),
      this._pickLocatorToggle.classList.toggle(
        'active',
        t.mode === 'inspecting' || t.mode === 'recording-inspecting'
      ),
      this._assertVisibilityToggle.classList.toggle('active', t.mode === 'assertingVisibility'),
      this._assertVisibilityToggle.classList.toggle(
        'disabled',
        t.mode === 'none' || t.mode === 'standby' || t.mode === 'inspecting'
      ),
      this._assertTextToggle.classList.toggle('active', t.mode === 'assertingText'),
      this._assertTextToggle.classList.toggle(
        'disabled',
        t.mode === 'none' || t.mode === 'standby' || t.mode === 'inspecting'
      ),
      this._assertValuesToggle.classList.toggle('active', t.mode === 'assertingValue'),
      this._assertValuesToggle.classList.toggle(
        'disabled',
        t.mode === 'none' || t.mode === 'standby' || t.mode === 'inspecting'
      ),
      this._offsetX !== t.overlay.offsetX &&
        ((this._offsetX = t.overlay.offsetX), this._updateVisualPosition()),
      t.mode === 'none' ? this._hideOverlay() : this._showOverlay();
  }
  flashToolSucceeded(t) {
    const n = t === 'assertingVisibility' ? this._assertVisibilityToggle : this._assertValuesToggle;
    n.classList.add('succeeded'),
      this._recorder.injectedScript.builtinSetTimeout(() => n.classList.remove('succeeded'), 2e3);
  }
  _hideOverlay() {
    this._overlayElement.setAttribute('hidden', 'true');
  }
  _showOverlay() {
    this._overlayElement.hasAttribute('hidden') &&
      (this._overlayElement.removeAttribute('hidden'), this._updateVisualPosition());
  }
  _updateVisualPosition() {
    (this._measure = this._overlayElement.getBoundingClientRect()),
      (this._overlayElement.style.left =
        (this._recorder.injectedScript.window.innerWidth - this._measure.width) / 2 +
        this._offsetX +
        'px');
  }
  onMouseMove(t) {
    var n, r;
    if (!t.buttons) return (this._dragState = void 0), !1;
    if (this._dragState) {
      this._offsetX = this._dragState.offsetX + t.clientX - this._dragState.dragStart.x;
      const i = (this._recorder.injectedScript.window.innerWidth - this._measure.width) / 2 - 10;
      return (
        (this._offsetX = Math.max(-i, Math.min(i, this._offsetX))),
        this._updateVisualPosition(),
        (r = (n = this._recorder.delegate).setOverlayState) == null ||
          r.call(n, { offsetX: this._offsetX }),
        X(t),
        !0
      );
    }
    return !1;
  }
  onMouseUp(t) {
    return this._dragState ? (X(t), !0) : !1;
  }
  onClick(t) {
    return this._dragState ? ((this._dragState = void 0), X(t), !0) : !1;
  }
}
class pw {
  constructor(t) {
    (this._listeners = []),
      (this._actionSelectorModel = null),
      (this.state = {
        mode: 'none',
        testIdAttributeName: 'data-testid',
        language: 'javascript',
        overlay: { offsetX: 0 },
      }),
      (this.delegate = {}),
      (this.document = t.document),
      (this.injectedScript = t),
      (this.highlight = t.createHighlight()),
      (this._tools = {
        none: new Ic(),
        standby: new Ic(),
        inspecting: new Do(this, !1),
        recording: new fw(this),
        'recording-inspecting': new Do(this, !1),
        assertingText: new jc(this, 'text'),
        assertingVisibility: new Do(this, !0),
        assertingValue: new jc(this, 'value'),
      }),
      (this._currentTool = this._tools.none),
      t.window.top === t.window &&
        ((this.overlay = new hw(this)), this.overlay.setUIState(this.state)),
      (this._stylesheet = new t.window.CSSStyleSheet()),
      this._stylesheet.replaceSync(`
      body[data-pw-cursor=pointer] *, body[data-pw-cursor=pointer] *::after { cursor: pointer !important; }
      body[data-pw-cursor=text] *, body[data-pw-cursor=text] *::after { cursor: text !important; }
    `),
      this.installListeners(),
      t.isUnderTest && console.error('Recorder script ready for test');
  }
  installListeners() {
    var t;
    Ip(this._listeners),
      (this._listeners = [
        J(this.document, 'click', n => this._onClick(n), !0),
        J(this.document, 'auxclick', n => this._onClick(n), !0),
        J(this.document, 'contextmenu', n => this._onContextMenu(n), !0),
        J(this.document, 'dragstart', n => this._onDragStart(n), !0),
        J(this.document, 'input', n => this._onInput(n), !0),
        J(this.document, 'keydown', n => this._onKeyDown(n), !0),
        J(this.document, 'keyup', n => this._onKeyUp(n), !0),
        J(this.document, 'pointerdown', n => this._onPointerDown(n), !0),
        J(this.document, 'pointerup', n => this._onPointerUp(n), !0),
        J(this.document, 'mousedown', n => this._onMouseDown(n), !0),
        J(this.document, 'mouseup', n => this._onMouseUp(n), !0),
        J(this.document, 'mousemove', n => this._onMouseMove(n), !0),
        J(this.document, 'mouseleave', n => this._onMouseLeave(n), !0),
        J(this.document, 'mouseenter', n => this._onMouseEnter(n), !0),
        J(this.document, 'focus', n => this._onFocus(n), !0),
        J(this.document, 'scroll', n => this._onScroll(n), !0),
      ]),
      this.highlight.install(),
      (t = this.overlay) == null || t.install(),
      this.document.adoptedStyleSheets.push(this._stylesheet);
  }
  _switchCurrentTool() {
    var n, r, i;
    const t = this._tools[this.state.mode];
    t !== this._currentTool &&
      ((r = (n = this._currentTool).cleanup) == null || r.call(n),
      this.clearHighlight(),
      (this._currentTool = t),
      (i = this.injectedScript.document.body) == null ||
        i.setAttribute('data-pw-cursor', t.cursor()));
  }
  setUIState(t, n) {
    var r, i, s, o;
    (this.delegate = n),
      (t.actionPoint &&
        this.state.actionPoint &&
        t.actionPoint.x === this.state.actionPoint.x &&
        t.actionPoint.y === this.state.actionPoint.y) ||
        (!t.actionPoint && !this.state.actionPoint) ||
        (t.actionPoint
          ? this.highlight.showActionPoint(t.actionPoint.x, t.actionPoint.y)
          : this.highlight.hideActionPoint()),
      (this.state = t),
      this.highlight.setLanguage(t.language),
      this._switchCurrentTool(),
      (r = this.overlay) == null || r.setUIState(t),
      (i = this._actionSelectorModel) != null &&
        i.selector &&
        !((s = this._actionSelectorModel) != null && s.elements.length) &&
        (this._actionSelectorModel = null),
      t.actionSelector !== ((o = this._actionSelectorModel) == null ? void 0 : o.selector) &&
        (this._actionSelectorModel = t.actionSelector
          ? yw(this.injectedScript, t.actionSelector, this.document)
          : null),
      (this.state.mode === 'none' || this.state.mode === 'standby') &&
        this.updateHighlight(this._actionSelectorModel, !1);
  }
  clearHighlight() {
    var t, n;
    (n = (t = this._currentTool).cleanup) == null || n.call(t), this.updateHighlight(null, !1);
  }
  _onClick(t) {
    var n, r, i;
    t.isTrusted &&
      (((n = this.overlay) != null && n.onClick(t)) ||
        this._ignoreOverlayEvent(t) ||
        (i = (r = this._currentTool).onClick) == null ||
        i.call(r, t));
  }
  _onContextMenu(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onContextMenu) == null ||
        r.call(n, t));
  }
  _onDragStart(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onDragStart) == null ||
        r.call(n, t));
  }
  _onPointerDown(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onPointerDown) == null ||
        r.call(n, t));
  }
  _onPointerUp(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onPointerUp) == null ||
        r.call(n, t));
  }
  _onMouseDown(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onMouseDown) == null ||
        r.call(n, t));
  }
  _onMouseUp(t) {
    var n, r, i;
    t.isTrusted &&
      (((n = this.overlay) != null && n.onMouseUp(t)) ||
        this._ignoreOverlayEvent(t) ||
        (i = (r = this._currentTool).onMouseUp) == null ||
        i.call(r, t));
  }
  _onMouseMove(t) {
    var n, r, i;
    t.isTrusted &&
      (((n = this.overlay) != null && n.onMouseMove(t)) ||
        this._ignoreOverlayEvent(t) ||
        (i = (r = this._currentTool).onMouseMove) == null ||
        i.call(r, t));
  }
  _onMouseEnter(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onMouseEnter) == null ||
        r.call(n, t));
  }
  _onMouseLeave(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onMouseLeave) == null ||
        r.call(n, t));
  }
  _onFocus(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onFocus) == null ||
        r.call(n, t));
  }
  _onScroll(t) {
    var n, r;
    t.isTrusted &&
      (this.highlight.hideActionPoint(),
      (r = (n = this._currentTool).onScroll) == null || r.call(n, t));
  }
  _onInput(t) {
    var n, r;
    this._ignoreOverlayEvent(t) || (r = (n = this._currentTool).onInput) == null || r.call(n, t);
  }
  _onKeyDown(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onKeyDown) == null ||
        r.call(n, t));
  }
  _onKeyUp(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onKeyUp) == null ||
        r.call(n, t));
  }
  updateHighlight(t, n) {
    var i, s;
    let r = t == null ? void 0 : t.tooltipText;
    r === void 0 &&
      !(t != null && t.tooltipList) &&
      t != null &&
      t.selector &&
      (r = this.injectedScript.utils.asLocator(this.state.language, t.selector)),
      this.highlight.updateHighlight((t == null ? void 0 : t.elements) || [], {
        ...t,
        tooltipText: r,
      }),
      n && ((s = (i = this.delegate).highlightUpdated) == null || s.call(i));
  }
  _ignoreOverlayEvent(t) {
    return t.composedPath().some(n => (n.nodeName || '').toLowerCase() === 'x-pw-glass');
  }
  deepEventTarget(t) {
    var n;
    for (const r of t.composedPath()) if (!((n = this.overlay) != null && n.contains(r))) return r;
    return t.composedPath()[0];
  }
}
function mw(e) {
  let t = e.activeElement;
  for (; t && t.shadowRoot && t.shadowRoot.activeElement; ) t = t.shadowRoot.activeElement;
  return t;
}
function Pc(e) {
  return (e.altKey ? 1 : 0) | (e.ctrlKey ? 2 : 0) | (e.metaKey ? 4 : 0) | (e.shiftKey ? 8 : 0);
}
function gw(e) {
  switch (e.which) {
    case 1:
      return 'left';
    case 2:
      return 'middle';
    case 3:
      return 'right';
  }
  return 'left';
}
function vw(e) {
  if (e.target.nodeName === 'CANVAS') return { x: e.offsetX, y: e.offsetY };
}
function X(e) {
  e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
}
function Fo(e) {
  if (!e || e.nodeName !== 'INPUT') return null;
  const t = e;
  return ['checkbox', 'radio'].includes(t.type) ? t : null;
}
function Rc(e) {
  return !e || e.nodeName !== 'INPUT' ? !1 : e.type.toLowerCase() === 'range';
}
function J(e, t, n, r) {
  return (
    e.addEventListener(t, n, r),
    () => {
      e.removeEventListener(t, n, r);
    }
  );
}
function Ip(e) {
  for (const t of e) t();
  e.splice(0, e.length);
}
function yw(e, t, n) {
  try {
    const r = e.parseSelector(t);
    return { selector: t, elements: e.querySelectorAll(r, n) };
  } catch {
    return { selector: t, elements: [] };
  }
}
function jp(e, { tagName: t, attrs: n, children: r }) {
  const i = e.createElementNS('http://www.w3.org/2000/svg', t);
  if (n) for (const [s, o] of Object.entries(n)) i.setAttribute(s, o);
  if (r) for (const s of r) i.appendChild(jp(e, s));
  return i;
}
function Ga(e, t, n) {
  return `internal:attr=[${e}=${Ee(t, (n == null ? void 0 : n.exact) || !1)}]`;
}
function ww(e, t) {
  return `internal:testid=[${e}=${Ee(t, !0)}]`;
}
function xw(e, t) {
  return 'internal:label=' + Ge(e, !!(t != null && t.exact));
}
function _w(e, t) {
  return Ga('alt', e, t);
}
function Sw(e, t) {
  return Ga('title', e, t);
}
function Ew(e, t) {
  return Ga('placeholder', e, t);
}
function Tw(e, t) {
  return 'internal:text=' + Ge(e, !!(t != null && t.exact));
}
function kw(e, t = {}) {
  const n = [];
  return (
    t.checked !== void 0 && n.push(['checked', String(t.checked)]),
    t.disabled !== void 0 && n.push(['disabled', String(t.disabled)]),
    t.selected !== void 0 && n.push(['selected', String(t.selected)]),
    t.expanded !== void 0 && n.push(['expanded', String(t.expanded)]),
    t.includeHidden !== void 0 && n.push(['include-hidden', String(t.includeHidden)]),
    t.level !== void 0 && n.push(['level', String(t.level)]),
    t.name !== void 0 && n.push(['name', Ee(t.name, !!t.exact)]),
    t.pressed !== void 0 && n.push(['pressed', String(t.pressed)]),
    `internal:role=${e}${n.map(([r, i]) => `[${r}=${i}]`).join('')}`
  );
}
const Tr = Symbol('selector');
class Hn {
  constructor(t, n, r) {
    if (
      (r != null && r.hasText && (n += ` >> internal:has-text=${Ge(r.hasText, !1)}`),
      r != null && r.hasNotText && (n += ` >> internal:has-not-text=${Ge(r.hasNotText, !1)}`),
      r != null && r.has && (n += ' >> internal:has=' + JSON.stringify(r.has[Tr])),
      r != null && r.hasNot && (n += ' >> internal:has-not=' + JSON.stringify(r.hasNot[Tr])),
      (this[Tr] = n),
      n)
    ) {
      const o = t.parseSelector(n);
      (this.element = t.querySelector(o, t.document, !1)),
        (this.elements = t.querySelectorAll(o, t.document));
    }
    const i = n,
      s = this;
    (s.locator = (o, l) => new Hn(t, i ? i + ' >> ' + o : o, l)),
      (s.getByTestId = o =>
        s.locator(ww(t.testIdAttributeNameForStrictErrorAndConsoleCodegen(), o))),
      (s.getByAltText = (o, l) => s.locator(_w(o, l))),
      (s.getByLabel = (o, l) => s.locator(xw(o, l))),
      (s.getByPlaceholder = (o, l) => s.locator(Ew(o, l))),
      (s.getByText = (o, l) => s.locator(Tw(o, l))),
      (s.getByTitle = (o, l) => s.locator(Sw(o, l))),
      (s.getByRole = (o, l = {}) => s.locator(kw(o, l))),
      (s.filter = o => new Hn(t, n, o)),
      (s.first = () => s.locator('nth=0')),
      (s.last = () => s.locator('nth=-1')),
      (s.nth = o => s.locator(`nth=${o}`)),
      (s.and = o => new Hn(t, i + ' >> internal:and=' + JSON.stringify(o[Tr]))),
      (s.or = o => new Hn(t, i + ' >> internal:or=' + JSON.stringify(o[Tr])));
  }
}
class Nw {
  constructor(t) {
    (this._injectedScript = t),
      !this._injectedScript.window.playwright &&
        ((this._injectedScript.window.playwright = {
          $: (n, r) => this._querySelector(n, !!r),
          $$: n => this._querySelectorAll(n),
          inspect: n => this._inspect(n),
          selector: n => this._selector(n),
          generateLocator: (n, r) => this._generateLocator(n, r),
          resume: () => this._resume(),
          ...new Hn(t, ''),
        }),
        delete this._injectedScript.window.playwright.filter,
        delete this._injectedScript.window.playwright.first,
        delete this._injectedScript.window.playwright.last,
        delete this._injectedScript.window.playwright.nth,
        delete this._injectedScript.window.playwright.and,
        delete this._injectedScript.window.playwright.or);
  }
  _querySelector(t, n) {
    if (typeof t != 'string') throw new Error("Usage: playwright.query('Playwright >> selector').");
    const r = this._injectedScript.parseSelector(t);
    return this._injectedScript.querySelector(r, this._injectedScript.document, n);
  }
  _querySelectorAll(t) {
    if (typeof t != 'string') throw new Error("Usage: playwright.$$('Playwright >> selector').");
    const n = this._injectedScript.parseSelector(t);
    return this._injectedScript.querySelectorAll(n, this._injectedScript.document);
  }
  _inspect(t) {
    if (typeof t != 'string')
      throw new Error("Usage: playwright.inspect('Playwright >> selector').");
    this._injectedScript.window.inspect(this._querySelector(t, !1));
  }
  _selector(t) {
    if (!(t instanceof Element)) throw new Error('Usage: playwright.selector(element).');
    return this._injectedScript.generateSelectorSimple(t);
  }
  _generateLocator(t, n) {
    if (!(t instanceof Element)) throw new Error('Usage: playwright.locator(element).');
    const r = this._injectedScript.generateSelectorSimple(t);
    return Kt(n || 'javascript', r);
  }
  _resume() {
    this._injectedScript.window.__pw_resume().catch(() => {});
  }
}
function Cw(e, t) {
  e = e
    .replace(/AriaRole\s*\.\s*([\w]+)/g, (s, o) => o.toLowerCase())
    .replace(
      /(get_by_role|getByRole)\s*\(\s*(?:["'`])([^'"`]+)['"`]/g,
      (s, o, l) => `${o}(${l.toLowerCase()}`
    );
  const n = [];
  let r = '';
  for (let s = 0; s < e.length; ++s) {
    const o = e[s];
    if (o !== '"' && o !== "'" && o !== '`' && o !== '/') {
      r += o;
      continue;
    }
    const l = e[s - 1] === 'r' || e[s] === '/';
    ++s;
    let a = '';
    for (; s < e.length; ) {
      if (e[s] === '\\') {
        l
          ? (e[s + 1] !== o && (a += e[s]), ++s, (a += e[s]))
          : (++s,
            e[s] === 'n'
              ? (a += `
`)
              : e[s] === 'r'
              ? (a += '\r')
              : e[s] === 't'
              ? (a += '	')
              : (a += e[s])),
          ++s;
        continue;
      }
      if (e[s] !== o) {
        a += e[s++];
        continue;
      }
      break;
    }
    n.push({ quote: o, text: a }), (r += (o === '/' ? 'r' : '') + '$' + n.length);
  }
  r = r
    .toLowerCase()
    .replace(/get_by_alt_text/g, 'getbyalttext')
    .replace(/get_by_test_id/g, 'getbytestid')
    .replace(/get_by_([\w]+)/g, 'getby$1')
    .replace(/has_not_text/g, 'hasnottext')
    .replace(/has_text/g, 'hastext')
    .replace(/has_not/g, 'hasnot')
    .replace(/frame_locator/g, 'framelocator')
    .replace(/[{}\s]/g, '')
    .replace(/new\(\)/g, '')
    .replace(/new[\w]+\.[\w]+options\(\)/g, '')
    .replace(/\.set/g, ',set')
    .replace(/\.or_\(/g, 'or(')
    .replace(/\.and_\(/g, 'and(')
    .replace(/:/g, '=')
    .replace(/,re\.ignorecase/g, 'i')
    .replace(/,pattern.case_insensitive/g, 'i')
    .replace(/,regexoptions.ignorecase/g, 'i')
    .replace(/re.compile\(([^)]+)\)/g, '$1')
    .replace(/pattern.compile\(([^)]+)\)/g, 'r$1')
    .replace(/newregex\(([^)]+)\)/g, 'r$1')
    .replace(/string=/g, '=')
    .replace(/regex=/g, '=')
    .replace(/,,/g, ',');
  const i = n.map(s => s.quote).filter(s => '\'"`'.includes(s))[0];
  return { selector: Pp(r, n, t), preferredQuote: i };
}
function $c(e) {
  return [...e.matchAll(/\$\d+/g)].length;
}
function Oc(e, t) {
  return e.replace(/\$(\d+)/g, (n, r) => `$${r - t}`);
}
function Pp(e, t, n) {
  for (;;) {
    const i = e.match(/filter\(,?(has=|hasnot=|sethas\(|sethasnot\()/);
    if (!i) break;
    const s = i.index + i[0].length;
    let o = 0,
      l = s;
    for (; l < e.length && (e[l] === '(' ? o++ : e[l] === ')' && o--, !(o < 0)); l++);
    let a = e.substring(0, s),
      u = 0;
    ['sethas(', 'sethasnot('].includes(i[1]) &&
      ((u = 1), (a = a.replace(/sethas\($/, 'has=').replace(/sethasnot\($/, 'hasnot=')));
    const c = $c(e.substring(0, s)),
      h = Oc(e.substring(s, l), c),
      d = $c(h),
      g = t.slice(c, c + d),
      y = JSON.stringify(Pp(h, g, n));
    e = a.replace(/=$/, '2=') + `$${c + 1}` + Oc(e.substring(l + u), d - 1);
    const w = t.slice(0, c),
      x = t.slice(c + d);
    t = w.concat([{ quote: '"', text: y }]).concat(x);
  }
  e = e
    .replace(/\,set([\w]+)\(([^)]+)\)/g, (i, s, o) => ',' + s.toLowerCase() + '=' + o.toLowerCase())
    .replace(/framelocator\(([^)]+)\)/g, '$1.internal:control=enter-frame')
    .replace(/locator\(([^)]+),hastext=([^),]+)\)/g, 'locator($1).internal:has-text=$2')
    .replace(/locator\(([^)]+),hasnottext=([^),]+)\)/g, 'locator($1).internal:has-not-text=$2')
    .replace(/locator\(([^)]+),hastext=([^),]+)\)/g, 'locator($1).internal:has-text=$2')
    .replace(/locator\(([^)]+)\)/g, '$1')
    .replace(/getbyrole\(([^)]+)\)/g, 'internal:role=$1')
    .replace(/getbytext\(([^)]+)\)/g, 'internal:text=$1')
    .replace(/getbylabel\(([^)]+)\)/g, 'internal:label=$1')
    .replace(/getbytestid\(([^)]+)\)/g, `internal:testid=[${n}=$1]`)
    .replace(/getby(placeholder|alt|title)(?:text)?\(([^)]+)\)/g, 'internal:attr=[$1=$2]')
    .replace(/first(\(\))?/g, 'nth=0')
    .replace(/last(\(\))?/g, 'nth=-1')
    .replace(/nth\(([^)]+)\)/g, 'nth=$1')
    .replace(/filter\(,?hastext=([^)]+)\)/g, 'internal:has-text=$1')
    .replace(/filter\(,?hasnottext=([^)]+)\)/g, 'internal:has-not-text=$1')
    .replace(/filter\(,?has2=([^)]+)\)/g, 'internal:has=$1')
    .replace(/filter\(,?hasnot2=([^)]+)\)/g, 'internal:has-not=$1')
    .replace(/,exact=false/g, '')
    .replace(/,exact=true/g, 's')
    .replace(/\,/g, '][');
  const r = e.split('.');
  for (let i = 0; i < r.length - 1; i++)
    if (r[i] === 'internal:control=enter-frame' && r[i + 1].startsWith('nth=')) {
      const [s] = r.splice(i, 1);
      r.splice(i + 1, 0, s);
    }
  return r
    .map(i =>
      !i.startsWith('internal:') || i === 'internal:control'
        ? i.replace(/\$(\d+)/g, (s, o) => t[+o - 1].text)
        : ((i = i.includes('[') ? i.replace(/\]/, '') + ']' : i),
          (i = i
            .replace(/(?:r)\$(\d+)(i)?/g, (s, o, l) => {
              const a = t[+o - 1];
              return i.startsWith('internal:attr') ||
                i.startsWith('internal:testid') ||
                i.startsWith('internal:role')
                ? Ee(new RegExp(a.text), !1) + (l || '')
                : Ge(new RegExp(a.text, l), !1);
            })
            .replace(/\$(\d+)(i|s)?/g, (s, o, l) => {
              const a = t[+o - 1];
              return i.startsWith('internal:has=') || i.startsWith('internal:has-not=')
                ? a.text
                : i.startsWith('internal:testid')
                ? Ee(a.text, !0)
                : i.startsWith('internal:attr') || i.startsWith('internal:role')
                ? Ee(a.text, l === 's')
                : Ge(a.text, l === 's');
            })),
          i)
    )
    .join(' >> ');
}
function bw(e, t, n) {
  try {
    return eo(t), t;
  } catch {}
  try {
    const { selector: r, preferredQuote: i } = Cw(t, n),
      s = bh(e, r, void 0, void 0, i),
      o = zc(e, t);
    if (s.some(l => zc(e, l) === o)) return r;
  } catch {}
  return '';
}
function zc(e, t) {
  return (t = t.replace(/\s/g, '')), e === 'javascript' && (t = t.replace(/\\?["`]/g, "'")), t;
}
const Lw = ({ url: e }) =>
    f.jsxs('div', {
      className: 'browser-frame-header',
      children: [
        f.jsxs('div', {
          style: { whiteSpace: 'nowrap' },
          children: [
            f.jsx('span', {
              className: 'browser-frame-dot',
              style: { backgroundColor: 'rgb(242, 95, 88)' },
            }),
            f.jsx('span', {
              className: 'browser-frame-dot',
              style: { backgroundColor: 'rgb(251, 190, 60)' },
            }),
            f.jsx('span', {
              className: 'browser-frame-dot',
              style: { backgroundColor: 'rgb(88, 203, 66)' },
            }),
          ],
        }),
        f.jsx('div', {
          className: 'browser-frame-address-bar',
          title: e || 'about:blank',
          children: e || 'about:blank',
        }),
        f.jsx('div', {
          style: { marginLeft: 'auto' },
          children: f.jsxs('div', {
            children: [
              f.jsx('span', { className: 'browser-frame-menu-bar' }),
              f.jsx('span', { className: 'browser-frame-menu-bar' }),
              f.jsx('span', { className: 'browser-frame-menu-bar' }),
            ],
          }),
        }),
      ],
    }),
  Aw = ({
    action: e,
    sdkLanguage: t,
    testIdAttributeName: n,
    isInspecting: r,
    setIsInspecting: i,
    highlightedLocator: s,
    setHighlightedLocator: o,
  }) => {
    const [l, a] = vn(),
      [u, c] = L.useState('action'),
      { snapshots: h } = L.useMemo(() => {
        if (!e) return { snapshots: {} };
        let S = e.beforeSnapshot ? { action: e, snapshotName: e.beforeSnapshot } : void 0,
          _ = e;
        for (; !S && _; )
          (_ = Cv(_)),
            (S =
              _ != null && _.afterSnapshot
                ? { action: _, snapshotName: _ == null ? void 0 : _.afterSnapshot }
                : void 0);
        const A = e.afterSnapshot ? { action: e, snapshotName: e.afterSnapshot } : S,
          P = e.inputSnapshot ? { action: e, snapshotName: e.inputSnapshot } : A;
        return P && (P.point = e.point), { snapshots: { action: P, before: S, after: A } };
      }, [e]),
      {
        snapshotInfoUrl: d,
        snapshotUrl: g,
        popoutUrl: y,
      } = L.useMemo(() => {
        const S = h[u];
        if (!S) return { snapshotUrl: Iw };
        const _ = new URLSearchParams();
        _.set('trace', Ls(S.action).traceUrl),
          _.set('name', S.snapshotName),
          S.point && (_.set('pointX', String(S.point.x)), _.set('pointY', String(S.point.y)));
        const A = new URL(
            `snapshot/${S.action.pageId}?${_.toString()}`,
            window.location.href
          ).toString(),
          P = new URL(
            `snapshotInfo/${S.action.pageId}?${_.toString()}`,
            window.location.href
          ).toString(),
          T = new URLSearchParams();
        T.set('r', A),
          T.set('trace', Ls(S.action).traceUrl),
          S.point && (T.set('pointX', String(S.point.x)), T.set('pointY', String(S.point.y)));
        const j = new URL(`snapshot.html?${T.toString()}`, window.location.href).toString();
        return { snapshots: h, snapshotInfoUrl: P, snapshotUrl: A, popoutUrl: j };
      }, [h, u]),
      w = L.useRef(null),
      x = L.useRef(null),
      [p, m] = L.useState({ viewport: Fc, url: '' }),
      v = L.useRef({ iteration: 0, visibleIframe: 0 });
    L.useEffect(() => {
      (async () => {
        const S = v.current.iteration + 1,
          _ = 1 - v.current.visibleIframe;
        v.current.iteration = S;
        const A = { url: '', viewport: Fc };
        if (d) {
          const j = await (await fetch(d)).json();
          j.error || ((A.url = j.url), (A.viewport = j.viewport));
        }
        if (v.current.iteration !== S) return;
        const P = [w, x][_].current;
        if (P) {
          let T = () => {};
          const j = new Promise(z => (T = z));
          try {
            P.addEventListener('load', T),
              P.addEventListener('error', T),
              P.contentWindow ? P.contentWindow.location.replace(g) : (P.src = g),
              await j;
          } catch {
          } finally {
            P.removeEventListener('load', T), P.removeEventListener('error', T);
          }
        }
        v.current.iteration === S && ((v.current.visibleIframe = _), m(A));
      })();
    }, [g, d]);
    const C = { width: p.viewport.width, height: p.viewport.height + 40 },
      k = Math.min(l.width / C.width, l.height / C.height, 1),
      N = { x: (l.width - C.width) / 2, y: (l.height - C.height) / 2 };
    return f.jsxs('div', {
      className: 'snapshot-tab',
      tabIndex: 0,
      onKeyDown: S => {
        S.key === 'Escape' && r && i(!1);
      },
      children: [
        f.jsx(Dc, {
          isInspecting: r,
          sdkLanguage: t,
          testIdAttributeName: n,
          highlightedLocator: s,
          setHighlightedLocator: o,
          iframe: w.current,
          iteration: v.current.iteration,
        }),
        f.jsx(Dc, {
          isInspecting: r,
          sdkLanguage: t,
          testIdAttributeName: n,
          highlightedLocator: s,
          setHighlightedLocator: o,
          iframe: x.current,
          iteration: v.current.iteration,
        }),
        f.jsxs(Ah, {
          children: [
            ['action', 'before', 'after'].map(S =>
              f.jsx(Mh, { id: S, title: Mw(S), selected: u === S, onSelect: () => c(S) })
            ),
            f.jsx('div', { style: { flex: 'auto' } }),
            f.jsx(Qn, {
              icon: 'link-external',
              title: 'Open snapshot in a new tab',
              disabled: !y,
              onClick: () => {
                const S = window.open(y || '', '_blank');
                S == null ||
                  S.addEventListener('DOMContentLoaded', () => {
                    const _ = new bp(S, !1, t, n, 1, 'chromium', []);
                    new Nw(_);
                  });
              },
            }),
          ],
        }),
        f.jsx('div', {
          ref: a,
          className: 'snapshot-wrapper',
          children: f.jsxs('div', {
            className: 'snapshot-container',
            style: {
              width: C.width + 'px',
              height: C.height + 'px',
              transform: `translate(${N.x}px, ${N.y}px) scale(${k})`,
            },
            children: [
              f.jsx(Lw, { url: p.url }),
              f.jsxs('div', {
                className: 'snapshot-switcher',
                children: [
                  f.jsx('iframe', {
                    ref: w,
                    name: 'snapshot',
                    title: 'DOM Snapshot',
                    className: v.current.visibleIframe === 0 ? 'snapshot-visible' : '',
                  }),
                  f.jsx('iframe', {
                    ref: x,
                    name: 'snapshot',
                    title: 'DOM Snapshot',
                    className: v.current.visibleIframe === 1 ? 'snapshot-visible' : '',
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  };
function Mw(e) {
  return e === 'before' ? 'Before' : e === 'after' ? 'After' : e === 'action' ? 'Action' : e;
}
const Dc = ({
  iframe: e,
  isInspecting: t,
  sdkLanguage: n,
  testIdAttributeName: r,
  highlightedLocator: i,
  setHighlightedLocator: s,
  iteration: o,
}) => (
  L.useEffect(() => {
    const l = [],
      a = new URLSearchParams(window.location.search).get('isUnderTest') === 'true';
    try {
      Rp(l, n, r, a, '', e == null ? void 0 : e.contentWindow);
    } catch {}
    for (const { recorder: u, frameSelector: c } of l) {
      const h = bw(n, i, r);
      u.setUIState(
        {
          mode: t ? 'inspecting' : 'none',
          actionSelector: h.startsWith(c) ? h.substring(c.length).trim() : void 0,
          language: n,
          testIdAttributeName: r,
          overlay: { offsetX: 0 },
        },
        {
          async setSelector(d) {
            s(Kt(n, c + d));
          },
          highlightUpdated() {
            for (const d of l) d.recorder !== u && d.recorder.clearHighlight();
          },
        }
      );
    }
  }, [e, t, i, s, n, r, o]),
  f.jsx(f.Fragment, {})
);
function Rp(e, t, n, r, i, s) {
  if (!s) return;
  const o = s;
  if (!o._recorder) {
    const l = new bp(s, r, t, n, 1, 'chromium', []),
      a = new pw(l);
    (o._injectedScript = l), (o._recorder = { recorder: a, frameSelector: i });
  }
  e.push(o._recorder);
  for (let l = 0; l < s.frames.length; ++l) {
    const a = s.frames[l],
      u = a.frameElement
        ? o._injectedScript.generateSelectorSimple(a.frameElement, {
            omitInternalEngines: !0,
            testIdAttributeName: n,
          }) + ' >> internal:control=enter-frame >> '
        : '';
    Rp(e, t, n, r, i + u, a);
  }
}
const Fc = { width: 1280, height: 720 },
  Iw = 'data:text/html,<body style="background: #ddd"></body>',
  jw = hi,
  Pw = ({ stack: e, setSelectedFrame: t, selectedFrame: n }) => {
    const r = e || [];
    return f.jsx(jw, {
      name: 'stack-trace',
      items: r,
      selectedItem: r[n],
      render: i => {
        const s = i.file[1] === ':' ? '\\' : '/';
        return f.jsxs(f.Fragment, {
          children: [
            f.jsx('span', {
              className: 'stack-trace-frame-function',
              children: i.function || '(anonymous)',
            }),
            f.jsx('span', {
              className: 'stack-trace-frame-location',
              children: i.file.split(s).pop(),
            }),
            f.jsx('span', { className: 'stack-trace-frame-line', children: ':' + i.line }),
          ],
        });
      },
      onSelected: i => t(r.indexOf(i)),
    });
  },
  Rw = ({ stack: e, sources: t, rootDir: n, fallbackLocation: r, stackFrameLocation: i }) => {
    const [s, o] = L.useState(),
      [l, a] = L.useState(0);
    L.useEffect(() => {
      s !== e && (o(e), a(0));
    }, [e, s, o, a]);
    const {
        source: u,
        highlight: c,
        targetLine: h,
        fileName: d,
      } = fm(
        async () => {
          var C, k;
          const y = e == null ? void 0 : e[l],
            w = !(y != null && y.file);
          if (w && !r)
            return {
              source: { file: '', errors: [], content: void 0 },
              targetLine: 0,
              highlight: [],
            };
          const x = w ? r.file : y.file;
          let p = t.get(x);
          p ||
            ((p = {
              errors: ((C = r == null ? void 0 : r.source) == null ? void 0 : C.errors) || [],
              content: void 0,
            }),
            t.set(x, p));
          const m = w
              ? (r == null ? void 0 : r.line) || ((k = p.errors[0]) == null ? void 0 : k.line) || 0
              : y.line,
            v = n && x.startsWith(n) ? x.substring(n.length + 1) : x,
            E = p.errors.map(N => ({ type: 'error', line: N.line, message: N.message }));
          if ((E.push({ line: m, type: 'running' }), p.content === void 0 || w)) {
            const N = await $w(x);
            try {
              let S = await fetch(`sha1/src@${N}.txt`);
              S.status === 404 && (S = await fetch(`file?path=${encodeURIComponent(x)}`)),
                S.status >= 400
                  ? (p.content = `<Unable to read "${x}">`)
                  : (p.content = await S.text());
            } catch {
              p.content = `<Unable to read "${x}">`;
            }
          }
          return { source: p, highlight: E, targetLine: m, fileName: v };
        },
        [e, l, n, r],
        { source: { errors: [], content: 'Loading…' }, highlight: [] }
      ),
      g = ((e == null ? void 0 : e.length) ?? 0) > 1;
    return f.jsxs(As, {
      sidebarSize: 200,
      orientation: i === 'bottom' ? 'vertical' : 'horizontal',
      sidebarHidden: !g,
      children: [
        f.jsxs('div', {
          className: 'vbox',
          'data-testid': 'source-code',
          children: [
            d && f.jsx('div', { className: 'source-tab-file-name', children: d }),
            f.jsx(to, {
              text: u.content || '',
              language: 'javascript',
              highlight: c,
              revealLine: h,
              readOnly: !0,
              lineNumbers: !0,
            }),
          ],
        }),
        f.jsx(Pw, { stack: e, selectedFrame: l, setSelectedFrame: a }),
      ],
    });
  };
async function $w(e) {
  const t = new TextEncoder().encode(e),
    n = await crypto.subtle.digest('SHA-1', t),
    r = [],
    i = new DataView(n);
  for (let s = 0; s < i.byteLength; s += 1) {
    const o = i.getUint8(s).toString(16).padStart(2, '0');
    r.push(o);
  }
  return r.join('');
}
const $p = { width: 200, height: 45 },
  Cn = 2.5,
  Ow = $p.height + Cn * 2,
  zw = ({ model: e, boundaries: t, previewPoint: n }) => {
    var c, h;
    const [r, i] = vn(),
      s = L.useRef(null);
    let o = 0;
    if (s.current && n) {
      const d = s.current.getBoundingClientRect();
      o = ((n.clientY - d.top + s.current.scrollTop) / Ow) | 0;
    }
    const l =
      (h = (c = e == null ? void 0 : e.pages) == null ? void 0 : c[o]) == null
        ? void 0
        : h.screencastFrames;
    let a, u;
    if (n !== void 0 && l && l.length) {
      const d = t.minimum + ((t.maximum - t.minimum) * n.x) / r.width;
      a = l[Jc(l, d, Op) - 1];
      const g = {
        width: Math.min(800, (window.innerWidth / 2) | 0),
        height: Math.min(800, (window.innerHeight / 2) | 0),
      };
      u = a ? zp({ width: a.width, height: a.height }, g) : void 0;
    }
    return f.jsxs('div', {
      className: 'film-strip',
      ref: i,
      children: [
        f.jsx('div', {
          className: 'film-strip-lanes',
          ref: s,
          children:
            e == null
              ? void 0
              : e.pages.map((d, g) =>
                  d.screencastFrames.length
                    ? f.jsx(Dw, { boundaries: t, page: d, width: r.width }, g)
                    : null
                ),
        }),
        (n == null ? void 0 : n.x) !== void 0 &&
          f.jsxs('div', {
            className: 'film-strip-hover',
            style: { top: r.bottom + 5, left: Math.min(n.x, r.width - (u ? u.width : 0) - 10) },
            children: [
              n.action &&
                f.jsx('div', { className: 'film-strip-hover-title', children: Ha(n.action, n) }),
              a &&
                u &&
                f.jsx('div', {
                  style: { width: u.width, height: u.height },
                  children: f.jsx('img', {
                    src: `sha1/${a.sha1}`,
                    width: u.width,
                    height: u.height,
                  }),
                }),
            ],
          }),
      ],
    });
  },
  Dw = ({ boundaries: e, page: t, width: n }) => {
    const r = { width: 0, height: 0 },
      i = t.screencastFrames;
    for (const w of i)
      (r.width = Math.max(r.width, w.width)), (r.height = Math.max(r.height, w.height));
    const s = zp(r, $p),
      o = i[0].timestamp,
      l = i[i.length - 1].timestamp,
      a = e.maximum - e.minimum,
      u = ((o - e.minimum) / a) * n,
      c = ((e.maximum - l) / a) * n,
      d = ((((l - o) / a) * n) / (s.width + 2 * Cn)) | 0,
      g = (l - o) / d,
      y = [];
    for (let w = 0; o && g && w < d; ++w) {
      const x = o + g * w,
        p = Jc(i, x, Op) - 1;
      y.push(
        f.jsx(
          'div',
          {
            className: 'film-strip-frame',
            style: {
              width: s.width,
              height: s.height,
              backgroundImage: `url(sha1/${i[p].sha1})`,
              backgroundSize: `${s.width}px ${s.height}px`,
              margin: Cn,
              marginRight: Cn,
            },
          },
          w
        )
      );
    }
    return (
      y.push(
        f.jsx(
          'div',
          {
            className: 'film-strip-frame',
            style: {
              width: s.width,
              height: s.height,
              backgroundImage: `url(sha1/${i[i.length - 1].sha1})`,
              backgroundSize: `${s.width}px ${s.height}px`,
              margin: Cn,
              marginRight: Cn,
            },
          },
          y.length
        )
      ),
      f.jsx('div', {
        className: 'film-strip-lane',
        style: { marginLeft: u + 'px', marginRight: c + 'px' },
        children: y,
      })
    );
  };
function Op(e, t) {
  return e - t.timestamp;
}
function zp(e, t) {
  const n = Math.max(e.width / t.width, e.height / t.height);
  return { width: (e.width / n) | 0, height: (e.height / n) | 0 };
}
const Fw = ({
  model: e,
  boundaries: t,
  onSelected: n,
  highlightedAction: r,
  highlightedEntry: i,
  selectedTime: s,
  setSelectedTime: o,
  sdkLanguage: l,
}) => {
  const [a, u] = vn(),
    [c, h] = L.useState(),
    [d, g] = L.useState(),
    {
      offsets: y,
      curtainLeft: w,
      curtainRight: x,
    } = L.useMemo(() => {
      let S = s || t;
      if (c && c.startX !== c.endX) {
        const T = ut(a.width, t, c.startX),
          j = ut(a.width, t, c.endX);
        S = { minimum: Math.min(T, j), maximum: Math.max(T, j) };
      }
      const _ = ct(a.width, t, S.minimum),
        P = ct(a.width, t, t.maximum) - ct(a.width, t, S.maximum);
      return { offsets: Hw(a.width, t), curtainLeft: _, curtainRight: P };
    }, [s, t, c, a]),
    p = L.useMemo(() => {
      const S = [];
      for (const _ of (e == null ? void 0 : e.actions) || [])
        _.class !== 'Test' &&
          S.push({
            action: _,
            leftTime: _.startTime,
            rightTime: _.endTime || t.maximum,
            leftPosition: ct(a.width, t, _.startTime),
            rightPosition: ct(a.width, t, _.endTime || t.maximum),
            active: !1,
            error: !!_.error,
          });
      for (const _ of (e == null ? void 0 : e.resources) || []) {
        const A = _._monotonicTime,
          P = _._monotonicTime + _.time;
        S.push({
          resource: _,
          leftTime: A,
          rightTime: P,
          leftPosition: ct(a.width, t, A),
          rightPosition: ct(a.width, t, P),
          active: !1,
          error: !1,
        });
      }
      return S;
    }, [e, t, a]);
  L.useMemo(() => {
    for (const S of p) S.active = (!!r && S.action === r) || (!!i && S.resource === i);
  }, [p, r, i]);
  const m = L.useCallback(
      S => {
        if ((g(void 0), !u.current)) return;
        const _ = S.clientX - u.current.getBoundingClientRect().left,
          A = ut(a.width, t, _),
          P = s ? ct(a.width, t, s.minimum) : 0,
          T = s ? ct(a.width, t, s.maximum) : 0;
        s && Math.abs(_ - P) < 10
          ? h({ startX: T, endX: _, type: 'resize' })
          : s && Math.abs(_ - T) < 10
          ? h({ startX: P, endX: _, type: 'resize' })
          : s &&
            A > s.minimum &&
            A < s.maximum &&
            S.clientY - u.current.getBoundingClientRect().top < 20
          ? h({ startX: P, endX: T, pivot: _, type: 'move' })
          : h({ startX: _, endX: _, type: 'resize' });
      },
      [t, a, u, s]
    ),
    v = L.useCallback(
      S => {
        if (!u.current) return;
        const _ = S.clientX - u.current.getBoundingClientRect().left,
          A = ut(a.width, t, _),
          P = e == null ? void 0 : e.actions.findLast(ae => ae.startTime <= A);
        if (!S.buttons) {
          h(void 0);
          return;
        }
        if ((P && n(P), !c)) return;
        let T = c;
        if (c.type === 'resize') T = { ...c, endX: _ };
        else {
          const ae = _ - c.pivot;
          let Le = c.startX + ae,
            ue = c.endX + ae;
          Le < 0 && ((Le = 0), (ue = Le + (c.endX - c.startX))),
            ue > a.width && ((ue = a.width), (Le = ue - (c.endX - c.startX))),
            (T = { ...c, startX: Le, endX: ue, pivot: _ });
        }
        h(T);
        const j = ut(a.width, t, T.startX),
          z = ut(a.width, t, T.endX);
        j !== z && o({ minimum: Math.min(j, z), maximum: Math.max(j, z) });
      },
      [t, c, a, e, n, u, o]
    ),
    E = L.useCallback(() => {
      if ((g(void 0), !!c)) {
        if (c.startX !== c.endX) {
          const S = ut(a.width, t, c.startX),
            _ = ut(a.width, t, c.endX);
          o({ minimum: Math.min(S, _), maximum: Math.max(S, _) });
        } else {
          const S = ut(a.width, t, c.startX),
            _ = e == null ? void 0 : e.actions.findLast(A => A.startTime <= S);
          _ && n(_), o(void 0);
        }
        h(void 0);
      }
    }, [t, c, a, e, o, n]),
    C = L.useCallback(
      S => {
        if (!u.current) return;
        const _ = S.clientX - u.current.getBoundingClientRect().left,
          A = ut(a.width, t, _),
          P = e == null ? void 0 : e.actions.findLast(T => T.startTime <= A);
        g({ x: _, clientY: S.clientY, action: P, sdkLanguage: l });
      },
      [t, a, e, u, l]
    ),
    k = L.useCallback(() => {
      g(void 0);
    }, []),
    N = L.useCallback(() => {
      o(void 0);
    }, [o]);
  return f.jsxs('div', {
    style: { flex: 'none', borderBottom: '1px solid var(--vscode-panel-border)' },
    children: [
      !!c &&
        f.jsx(jh, {
          cursor: (c == null ? void 0 : c.type) === 'resize' ? 'ew-resize' : 'grab',
          onPaneMouseUp: E,
          onPaneMouseMove: v,
          onPaneDoubleClick: N,
        }),
      f.jsxs('div', {
        ref: u,
        className: 'timeline-view',
        onMouseDown: m,
        onMouseMove: C,
        onMouseLeave: k,
        children: [
          f.jsx('div', {
            className: 'timeline-grid',
            children: y.map((S, _) =>
              f.jsx(
                'div',
                {
                  className: 'timeline-divider',
                  style: { left: S.position + 'px' },
                  children: f.jsx('div', {
                    className: 'timeline-time',
                    children: Ke(S.time - t.minimum),
                  }),
                },
                _
              )
            ),
          }),
          f.jsx('div', { style: { height: 8 } }),
          f.jsx(zw, { model: e, boundaries: t, previewPoint: d }),
          f.jsx('div', {
            className: 'timeline-bars',
            children: p.map((S, _) =>
              f.jsx(
                'div',
                {
                  className:
                    'timeline-bar' +
                    (S.action ? ' action' : '') +
                    (S.resource ? ' network' : '') +
                    (S.active ? ' active' : '') +
                    (S.error ? ' error' : ''),
                  style: {
                    left: S.leftPosition,
                    width: Math.max(1, S.rightPosition - S.leftPosition),
                    top: Uw(S),
                    bottom: 0,
                  },
                },
                _
              )
            ),
          }),
          f.jsx('div', {
            className: 'timeline-marker',
            style: {
              display: d !== void 0 ? 'block' : 'none',
              left: ((d == null ? void 0 : d.x) || 0) + 'px',
            },
          }),
          s &&
            f.jsxs('div', {
              className: 'timeline-window',
              children: [
                f.jsx('div', { className: 'timeline-window-curtain left', style: { width: w } }),
                f.jsx('div', { className: 'timeline-window-resizer', style: { left: -5 } }),
                f.jsx('div', {
                  className: 'timeline-window-center',
                  children: f.jsx('div', { className: 'timeline-window-drag' }),
                }),
                f.jsx('div', { className: 'timeline-window-resizer', style: { left: 5 } }),
                f.jsx('div', { className: 'timeline-window-curtain right', style: { width: x } }),
              ],
            }),
        ],
      }),
    ],
  });
};
function Hw(e, t) {
  let r = e / 64;
  const i = t.maximum - t.minimum,
    s = e / i;
  let o = i / r;
  const l = Math.ceil(Math.log(o) / Math.LN10);
  (o = Math.pow(10, l)), o * s >= 5 * 64 && (o = o / 5), o * s >= 2 * 64 && (o = o / 2);
  const a = t.minimum;
  let u = t.maximum;
  (u += 64 / s), (r = Math.ceil((u - a) / o)), o || (r = 0);
  const c = [];
  for (let h = 0; h < r; ++h) {
    const d = a + o * h;
    c.push({ position: ct(e, t, d), time: d });
  }
  return c;
}
function ct(e, t, n) {
  return ((n - t.minimum) / (t.maximum - t.minimum)) * e;
}
function ut(e, t, n) {
  return (n / e) * (t.maximum - t.minimum) + t.minimum;
}
function Uw(e) {
  return e.resource ? 25 : 20;
}
const Bw = ({ model: e }) => {
  var t, n;
  return e
    ? f.jsxs('div', {
        className: 'metadata-view vbox',
        children: [
          f.jsx('div', { className: 'call-section', style: { paddingTop: 2 }, children: 'Time' }),
          !!e.wallTime &&
            f.jsxs('div', {
              className: 'call-line',
              children: [
                'start time:',
                f.jsx('span', {
                  className: 'call-value datetime',
                  title: new Date(e.wallTime).toLocaleString(),
                  children: new Date(e.wallTime).toLocaleString(),
                }),
              ],
            }),
          f.jsxs('div', {
            className: 'call-line',
            children: [
              'duration:',
              f.jsx('span', {
                className: 'call-value number',
                title: Ke(e.endTime - e.startTime),
                children: Ke(e.endTime - e.startTime),
              }),
            ],
          }),
          f.jsx('div', { className: 'call-section', children: 'Browser' }),
          f.jsxs('div', {
            className: 'call-line',
            children: [
              'engine:',
              f.jsx('span', {
                className: 'call-value string',
                title: e.browserName,
                children: e.browserName,
              }),
            ],
          }),
          e.channel &&
            f.jsxs('div', {
              className: 'call-line',
              children: [
                'channel:',
                f.jsx('span', {
                  className: 'call-value string',
                  title: e.channel,
                  children: e.channel,
                }),
              ],
            }),
          e.platform &&
            f.jsxs('div', {
              className: 'call-line',
              children: [
                'platform:',
                f.jsx('span', {
                  className: 'call-value string',
                  title: e.platform,
                  children: e.platform,
                }),
              ],
            }),
          e.options.userAgent &&
            f.jsxs('div', {
              className: 'call-line',
              children: [
                'user agent:',
                f.jsx('span', {
                  className: 'call-value datetime',
                  title: e.options.userAgent,
                  children: e.options.userAgent,
                }),
              ],
            }),
          f.jsx('div', { className: 'call-section', children: 'Viewport' }),
          e.options.viewport &&
            f.jsxs('div', {
              className: 'call-line',
              children: [
                'width:',
                f.jsx('span', {
                  className: 'call-value number',
                  title: String(!!((t = e.options.viewport) != null && t.width)),
                  children: e.options.viewport.width,
                }),
              ],
            }),
          e.options.viewport &&
            f.jsxs('div', {
              className: 'call-line',
              children: [
                'height:',
                f.jsx('span', {
                  className: 'call-value number',
                  title: String(!!((n = e.options.viewport) != null && n.height)),
                  children: e.options.viewport.height,
                }),
              ],
            }),
          f.jsxs('div', {
            className: 'call-line',
            children: [
              'is mobile:',
              f.jsx('span', {
                className: 'call-value boolean',
                title: String(!!e.options.isMobile),
                children: String(!!e.options.isMobile),
              }),
            ],
          }),
          e.options.deviceScaleFactor &&
            f.jsxs('div', {
              className: 'call-line',
              children: [
                'device scale:',
                f.jsx('span', {
                  className: 'call-value number',
                  title: String(e.options.deviceScaleFactor),
                  children: String(e.options.deviceScaleFactor),
                }),
              ],
            }),
          f.jsx('div', { className: 'call-section', children: 'Counts' }),
          f.jsxs('div', {
            className: 'call-line',
            children: [
              'pages:',
              f.jsx('span', { className: 'call-value number', children: e.pages.length }),
            ],
          }),
          f.jsxs('div', {
            className: 'call-line',
            children: [
              'actions:',
              f.jsx('span', { className: 'call-value number', children: e.actions.length }),
            ],
          }),
          f.jsxs('div', {
            className: 'call-line',
            children: [
              'events:',
              f.jsx('span', { className: 'call-value number', children: e.events.length }),
            ],
          }),
        ],
      })
    : f.jsx(f.Fragment, {});
};
async function Ho(e) {
  const t = new Image();
  return (
    e &&
      ((t.src = e),
      await new Promise((n, r) => {
        (t.onload = n), (t.onerror = n);
      })),
    t
  );
}
const Vl = {
    backgroundImage: `linear-gradient(45deg, #80808020 25%, transparent 25%),
                    linear-gradient(-45deg, #80808020 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, #80808020 75%),
                    linear-gradient(-45deg, transparent 75%, #80808020 75%)`,
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
    boxShadow: `rgb(0 0 0 / 10%) 0px 1.8px 1.9px,
              rgb(0 0 0 / 15%) 0px 6.1px 6.3px,
              rgb(0 0 0 / 10%) 0px -2px 4px,
              rgb(0 0 0 / 15%) 0px -6.1px 12px,
              rgb(0 0 0 / 25%) 0px 6px 12px`,
  },
  Vw = ({ diff: e }) => {
    const [t, n] = L.useState(e.diff ? 'diff' : 'actual'),
      [r, i] = L.useState(!1),
      [s, o] = L.useState(null),
      [l, a] = L.useState(null),
      [u, c] = L.useState(null),
      [h, d] = vn();
    L.useEffect(() => {
      (async () => {
        var C, k, N;
        o(await Ho((C = e.expected) == null ? void 0 : C.attachment.path)),
          a(await Ho((k = e.actual) == null ? void 0 : k.attachment.path)),
          c(await Ho((N = e.diff) == null ? void 0 : N.attachment.path));
      })();
    }, [e]);
    const g = s && l && u,
      y = g ? Math.max(s.naturalWidth, l.naturalWidth, 200) : 500,
      w = g ? Math.max(s.naturalHeight, l.naturalHeight, 200) : 500,
      x = Math.min(1, (h.width - 30) / y),
      p = Math.min(1, (h.width - 50) / y / 2),
      m = y * x,
      v = w * x,
      E = { flex: 'none', margin: '0 10px', cursor: 'pointer', userSelect: 'none' };
    return f.jsx('div', {
      'data-testid': 'test-result-image-mismatch',
      style: { display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 'auto' },
      ref: d,
      children:
        g &&
        f.jsxs(f.Fragment, {
          children: [
            f.jsxs('div', {
              'data-testid': 'test-result-image-mismatch-tabs',
              style: { display: 'flex', margin: '10px 0 20px' },
              children: [
                e.diff &&
                  f.jsx('div', {
                    style: { ...E, fontWeight: t === 'diff' ? 600 : 'initial' },
                    onClick: () => n('diff'),
                    children: 'Diff',
                  }),
                f.jsx('div', {
                  style: { ...E, fontWeight: t === 'actual' ? 600 : 'initial' },
                  onClick: () => n('actual'),
                  children: 'Actual',
                }),
                f.jsx('div', {
                  style: { ...E, fontWeight: t === 'expected' ? 600 : 'initial' },
                  onClick: () => n('expected'),
                  children: 'Expected',
                }),
                f.jsx('div', {
                  style: { ...E, fontWeight: t === 'sxs' ? 600 : 'initial' },
                  onClick: () => n('sxs'),
                  children: 'Side by side',
                }),
                f.jsx('div', {
                  style: { ...E, fontWeight: t === 'slider' ? 600 : 'initial' },
                  onClick: () => n('slider'),
                  children: 'Slider',
                }),
              ],
            }),
            f.jsxs('div', {
              style: { display: 'flex', justifyContent: 'center', flex: 'auto', minHeight: v + 60 },
              children: [
                e.diff &&
                  t === 'diff' &&
                  f.jsx(_t, { image: u, alt: 'Diff', canvasWidth: m, canvasHeight: v, scale: x }),
                e.diff &&
                  t === 'actual' &&
                  f.jsx(_t, { image: l, alt: 'Actual', canvasWidth: m, canvasHeight: v, scale: x }),
                e.diff &&
                  t === 'expected' &&
                  f.jsx(_t, {
                    image: s,
                    alt: 'Expected',
                    canvasWidth: m,
                    canvasHeight: v,
                    scale: x,
                  }),
                e.diff &&
                  t === 'slider' &&
                  f.jsx(Ww, {
                    expectedImage: s,
                    actualImage: l,
                    canvasWidth: m,
                    canvasHeight: v,
                    scale: x,
                  }),
                e.diff &&
                  t === 'sxs' &&
                  f.jsxs('div', {
                    style: { display: 'flex' },
                    children: [
                      f.jsx(_t, {
                        image: s,
                        title: 'Expected',
                        canvasWidth: p * y,
                        canvasHeight: p * w,
                        scale: p,
                      }),
                      f.jsx(_t, {
                        image: r ? u : l,
                        title: r ? 'Diff' : 'Actual',
                        onClick: () => i(!r),
                        canvasWidth: p * y,
                        canvasHeight: p * w,
                        scale: p,
                      }),
                    ],
                  }),
                !e.diff &&
                  t === 'actual' &&
                  f.jsx(_t, {
                    image: l,
                    title: 'Actual',
                    canvasWidth: m,
                    canvasHeight: v,
                    scale: x,
                  }),
                !e.diff &&
                  t === 'expected' &&
                  f.jsx(_t, {
                    image: s,
                    title: 'Expected',
                    canvasWidth: m,
                    canvasHeight: v,
                    scale: x,
                  }),
                !e.diff &&
                  t === 'sxs' &&
                  f.jsxs('div', {
                    style: { display: 'flex' },
                    children: [
                      f.jsx(_t, {
                        image: s,
                        title: 'Expected',
                        canvasWidth: p * y,
                        canvasHeight: p * w,
                        scale: p,
                      }),
                      f.jsx(_t, {
                        image: l,
                        title: 'Actual',
                        canvasWidth: p * y,
                        canvasHeight: p * w,
                        scale: p,
                      }),
                    ],
                  }),
              ],
            }),
            f.jsxs('div', {
              style: { alignSelf: 'start', lineHeight: '18px' },
              children: [
                f.jsx('div', {
                  children:
                    e.diff &&
                    f.jsx('a', {
                      target: '_blank',
                      href: e.diff.attachment.path,
                      children: e.diff.attachment.name,
                    }),
                }),
                f.jsx('div', {
                  children: f.jsx('a', {
                    target: '_blank',
                    href: e.actual.attachment.path,
                    children: e.actual.attachment.name,
                  }),
                }),
                f.jsx('div', {
                  children: f.jsx('a', {
                    target: '_blank',
                    href: e.expected.attachment.path,
                    children: e.expected.attachment.name,
                  }),
                }),
              ],
            }),
          ],
        }),
    });
  },
  Ww = ({ expectedImage: e, actualImage: t, canvasWidth: n, canvasHeight: r, scale: i }) => {
    const s = { position: 'absolute', top: 0, left: 0 },
      [o, l] = L.useState(n / 2),
      a = e.naturalWidth === t.naturalWidth && e.naturalHeight === t.naturalHeight;
    return f.jsxs('div', {
      style: {
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        userSelect: 'none',
      },
      children: [
        f.jsxs('div', {
          style: { margin: 5 },
          children: [
            !a &&
              f.jsx('span', { style: { flex: 'none', margin: '0 5px' }, children: 'Expected ' }),
            f.jsx('span', { children: e.naturalWidth }),
            f.jsx('span', { style: { flex: 'none', margin: '0 5px' }, children: 'x' }),
            f.jsx('span', { children: e.naturalHeight }),
            !a &&
              f.jsx('span', {
                style: { flex: 'none', margin: '0 5px 0 15px' },
                children: 'Actual ',
              }),
            !a && f.jsx('span', { children: t.naturalWidth }),
            !a && f.jsx('span', { style: { flex: 'none', margin: '0 5px' }, children: 'x' }),
            !a && f.jsx('span', { children: t.naturalHeight }),
          ],
        }),
        f.jsxs('div', {
          style: { position: 'relative', width: n, height: r, margin: 15, ...Vl },
          children: [
            f.jsx(Ph, {
              orientation: 'horizontal',
              offsets: [o],
              setOffsets: u => l(u[0]),
              resizerColor: '#57606a80',
              resizerWidth: 6,
            }),
            f.jsx('img', {
              alt: 'Expected',
              style: { width: e.naturalWidth * i, height: e.naturalHeight * i },
              draggable: 'false',
              src: e.src,
            }),
            f.jsx('div', {
              style: { ...s, bottom: 0, overflow: 'hidden', width: o, ...Vl },
              children: f.jsx('img', {
                alt: 'Actual',
                style: { width: t.naturalWidth * i, height: t.naturalHeight * i },
                draggable: 'false',
                src: t.src,
              }),
            }),
          ],
        }),
      ],
    });
  },
  _t = ({ image: e, title: t, alt: n, canvasWidth: r, canvasHeight: i, scale: s, onClick: o }) =>
    f.jsxs('div', {
      style: { flex: 'none', display: 'flex', alignItems: 'center', flexDirection: 'column' },
      children: [
        f.jsxs('div', {
          style: { margin: 5 },
          children: [
            t && f.jsx('span', { style: { flex: 'none', margin: '0 5px' }, children: t }),
            f.jsx('span', { children: e.naturalWidth }),
            f.jsx('span', { style: { flex: 'none', margin: '0 5px' }, children: 'x' }),
            f.jsx('span', { children: e.naturalHeight }),
          ],
        }),
        f.jsx('div', {
          style: { display: 'flex', flex: 'none', width: r, height: i, margin: 15, ...Vl },
          children: f.jsx('img', {
            width: e.naturalWidth * s,
            height: e.naturalHeight * s,
            alt: t || n,
            style: { cursor: o ? 'pointer' : 'initial' },
            draggable: 'false',
            src: e.src,
            onClick: o,
          }),
        }),
      ],
    }),
  qw = ({ model: e }) => {
    const {
      diffMap: t,
      screenshots: n,
      attachments: r,
    } = L.useMemo(() => {
      const i = new Set(),
        s = new Set();
      for (const l of (e == null ? void 0 : e.actions) || []) {
        const a = l.context.traceUrl;
        for (const u of l.attachments || []) i.add({ ...u, traceUrl: a });
      }
      const o = new Map();
      for (const l of i) {
        if (!l.path && !l.sha1) continue;
        const a = l.name.match(/^(.*)-(expected|actual|diff)\.png$/);
        if (a) {
          const u = a[1],
            c = a[2],
            h = o.get(u) || { expected: void 0, actual: void 0, diff: void 0 };
          (h[c] = l), o.set(u, h);
        }
        l.contentType.startsWith('image/') && (s.add(l), i.delete(l));
      }
      return { diffMap: o, attachments: i, screenshots: s };
    }, [e]);
    return !t.size && !n.size && !r.size
      ? f.jsx(lr, { text: 'No attachments' })
      : f.jsxs('div', {
          className: 'attachments-tab',
          children: [
            [...t.values()].map(({ expected: i, actual: s, diff: o }) =>
              f.jsxs(f.Fragment, {
                children: [
                  i &&
                    s &&
                    f.jsx('div', { className: 'attachments-section', children: 'Image diff' }),
                  i &&
                    s &&
                    f.jsx(Vw, {
                      diff: {
                        name: 'Image diff',
                        expected: { attachment: { ...i, path: kr(i) }, title: 'Expected' },
                        actual: { attachment: { ...s, path: kr(s) } },
                        diff: o ? { attachment: { ...o, path: kr(o) } } : void 0,
                      },
                    }),
                ],
              })
            ),
            n.size
              ? f.jsx('div', { className: 'attachments-section', children: 'Screenshots' })
              : void 0,
            [...n.values()].map((i, s) => {
              const o = kr(i);
              return f.jsxs(
                'div',
                {
                  className: 'attachment-item',
                  children: [
                    f.jsx('div', { children: f.jsx('img', { draggable: 'false', src: o }) }),
                    f.jsx('div', {
                      children: f.jsx('a', { target: '_blank', href: o, children: i.name }),
                    }),
                  ],
                },
                `screenshot-${s}`
              );
            }),
            r.size
              ? f.jsx('div', { className: 'attachments-section', children: 'Attachments' })
              : void 0,
            [...r.values()].map((i, s) =>
              f.jsx(
                'div',
                {
                  className: 'attachment-item',
                  children: f.jsx('a', { href: kr(i) + '&download', children: i.name }),
                },
                `attachment-${s}`
              )
            ),
          ],
        });
  };
function kr(e) {
  return e.sha1
    ? 'sha1/' + e.sha1 + '?trace=' + encodeURIComponent(e.traceUrl)
    : 'file?path=' + encodeURIComponent(e.path);
}
const Xw = ({
  sdkLanguage: e,
  setIsInspecting: t,
  highlightedLocator: n,
  setHighlightedLocator: r,
}) =>
  f.jsxs('div', {
    className: 'vbox',
    style: { backgroundColor: 'var(--vscode-sideBar-background)' },
    children: [
      f.jsx('div', {
        style: {
          margin: '10px 0px 10px 10px',
          color: 'var(--vscode-editorCodeLens-foreground)',
          flex: 'none',
        },
        children: 'Locator',
      }),
      f.jsx('div', {
        style: { margin: '0 10px 10px', flex: 'auto' },
        children: f.jsx(to, {
          text: n,
          language: e,
          focusOnChange: !0,
          isFocused: !0,
          wrapLines: !0,
          onChange: i => {
            r(i), t(!1);
          },
        }),
      }),
      f.jsx('div', {
        style: { position: 'absolute', right: 5, top: 5 },
        children: f.jsx(Qn, {
          icon: 'files',
          title: 'Copy locator',
          onClick: () => {
            pm(n);
          },
        }),
      }),
    ],
  });
function Qw(e) {
  return e === 'scheduled'
    ? 'codicon-clock'
    : e === 'running'
    ? 'codicon-loading'
    : e === 'failed'
    ? 'codicon-error'
    : e === 'passed'
    ? 'codicon-check'
    : e === 'skipped'
    ? 'codicon-circle-slash'
    : 'codicon-circle-outline';
}
function Gw(e) {
  return e === 'scheduled'
    ? 'Pending'
    : e === 'running'
    ? 'Running'
    : e === 'failed'
    ? 'Failed'
    : e === 'passed'
    ? 'Passed'
    : e === 'skipped'
    ? 'Skipped'
    : 'Did not run';
}
const o1 = ({
  model: e,
  showSourcesFirst: t,
  rootDir: n,
  fallbackLocation: r,
  initialSelection: i,
  onSelectionChanged: s,
  isLive: o,
  status: l,
  inert: a,
}) => {
  const [u, c] = L.useState(void 0),
    [h, d] = L.useState(void 0),
    [g, y] = L.useState(),
    [w, x] = L.useState(),
    [p, m] = L.useState('actions'),
    [v, E] = is('propertiesTab', t ? 'source' : 'call'),
    [C, k] = L.useState(!1),
    [N, S] = L.useState(''),
    _ = e ? g || u : void 0,
    [A, P] = L.useState(),
    [T, j] = is('propertiesSidebarLocation', 'bottom'),
    z = L.useCallback(
      F => {
        c(F), d(F == null ? void 0 : F.stack);
      },
      [c, d]
    ),
    ae = L.useMemo(() => (e == null ? void 0 : e.sources) || new Map(), [e]);
  L.useEffect(() => {
    P(void 0);
  }, [e]),
    L.useEffect(() => {
      if (u && e != null && e.actions.includes(u)) return;
      const F = e == null ? void 0 : e.failedAction();
      if (i && e != null && e.actions.includes(i)) z(i);
      else if (F) z(F);
      else if (e != null && e.actions.length) {
        let Ka = e.actions.length - 1;
        for (let dr = 0; dr < e.actions.length; ++dr)
          if (e.actions[dr].apiName === 'After Hooks' && dr) {
            Ka = dr - 1;
            break;
          }
        z(e.actions[Ka]);
      }
    }, [e, u, z, i]);
  const Le = L.useCallback(
      F => {
        z(F), s == null || s(F);
      },
      [z, s]
    ),
    ue = L.useCallback(
      F => {
        E(F), F !== 'inspector' && k(!1);
      },
      [E]
    ),
    M = L.useCallback(
      F => {
        S(F), ue('inspector');
      },
      [ue]
    ),
    R = T0(e, A),
    $ = F0(e, A),
    q = _0(e),
    ne = L.useMemo(
      () => (e == null ? void 0 : e.actions.map(F => F.attachments || []).flat()) || [],
      [e]
    ),
    et = (e == null ? void 0 : e.sdkLanguage) || 'javascript',
    vt = {
      id: 'inspector',
      title: 'Locator',
      render: () =>
        f.jsx(Xw, {
          sdkLanguage: et,
          setIsInspecting: k,
          highlightedLocator: N,
          setHighlightedLocator: S,
        }),
    },
    cr = { id: 'call', title: 'Call', render: () => f.jsx(m0, { action: _, sdkLanguage: et }) },
    yt = { id: 'log', title: 'Log', render: () => f.jsx(v0, { action: _, isLive: o }) },
    xn = {
      id: 'errors',
      title: 'Errors',
      errorCount: q.errors.size,
      render: () =>
        f.jsx(S0, {
          errorsModel: q,
          sdkLanguage: et,
          revealInSource: F => {
            F.action ? z(F.action) : d(F.stack), ue('source');
          },
        }),
    },
    io = {
      id: 'source',
      title: 'Source',
      render: () =>
        f.jsx(Rw, {
          stack: h,
          sources: ae,
          rootDir: n,
          stackFrameLocation: T === 'bottom' ? 'right' : 'bottom',
          fallbackLocation: r,
        }),
    },
    Dp = {
      id: 'console',
      title: 'Console',
      count: R.entries.length,
      render: () => f.jsx(k0, { consoleModel: R, boundaries: so, selectedTime: A }),
    },
    Fp = {
      id: 'network',
      title: 'Network',
      count: $.resources.length,
      render: () => f.jsx(H0, { boundaries: so, networkModel: $, onEntryHovered: x }),
    },
    Hp = {
      id: 'attachments',
      title: 'Attachments',
      count: ne.length,
      render: () => f.jsx(qw, { model: e }),
    },
    mi = [vt, cr, yt, xn, Dp, Fp, io, Hp];
  if (t) {
    const F = mi.indexOf(io);
    mi.splice(F, 1), mi.splice(1, 0, io);
  }
  const { boundaries: so } = L.useMemo(() => {
    const F = {
      minimum: (e == null ? void 0 : e.startTime) || 0,
      maximum: (e == null ? void 0 : e.endTime) || 3e4,
    };
    return (
      F.minimum > F.maximum && ((F.minimum = 0), (F.maximum = 3e4)),
      (F.maximum += (F.maximum - F.minimum) / 20),
      { boundaries: F }
    );
  }, [e]);
  let gi = 0;
  return (
    !o && e && e.endTime >= 0
      ? (gi = e.endTime - e.startTime)
      : e && e.wallTime && (gi = Date.now() - e.wallTime),
    f.jsxs('div', {
      className: 'vbox workbench',
      ...(a ? { inert: 'true' } : {}),
      children: [
        f.jsx(Fw, {
          model: e,
          boundaries: so,
          highlightedAction: g,
          highlightedEntry: w,
          onSelected: Le,
          sdkLanguage: et,
          selectedTime: A,
          setSelectedTime: P,
        }),
        f.jsxs(As, {
          sidebarSize: 250,
          orientation: T === 'bottom' ? 'vertical' : 'horizontal',
          settingName: 'propertiesSidebar',
          children: [
            f.jsxs(As, {
              sidebarSize: 250,
              orientation: 'horizontal',
              sidebarIsFirst: !0,
              settingName: 'actionListSidebar',
              children: [
                f.jsx(Aw, {
                  action: _,
                  sdkLanguage: et,
                  testIdAttributeName:
                    (e == null ? void 0 : e.testIdAttributeName) || 'data-testid',
                  isInspecting: C,
                  setIsInspecting: k,
                  highlightedLocator: N,
                  setHighlightedLocator: M,
                }),
                f.jsx(Ol, {
                  tabs: [
                    {
                      id: 'actions',
                      title: 'Actions',
                      component: f.jsxs('div', {
                        className: 'vbox',
                        children: [
                          l &&
                            f.jsxs('div', {
                              className: 'workbench-run-status',
                              children: [
                                f.jsx('span', { className: `codicon ${Qw(l)}` }),
                                f.jsx('div', { children: Gw(l) }),
                                f.jsx('div', { className: 'spacer' }),
                                f.jsx('div', {
                                  className: 'workbench-run-duration',
                                  children: gi ? Ke(gi) : '',
                                }),
                              ],
                            }),
                          f.jsx(h0, {
                            sdkLanguage: et,
                            actions: (e == null ? void 0 : e.actions) || [],
                            selectedAction: e ? u : void 0,
                            selectedTime: A,
                            setSelectedTime: P,
                            onSelected: Le,
                            onHighlighted: y,
                            revealConsole: () => ue('console'),
                            isLive: o,
                          }),
                        ],
                      }),
                    },
                    { id: 'metadata', title: 'Metadata', component: f.jsx(Bw, { model: e }) },
                  ],
                  selectedTab: p,
                  setSelectedTab: m,
                }),
              ],
            }),
            f.jsx(Ol, {
              tabs: mi,
              selectedTab: v,
              setSelectedTab: ue,
              leftToolbar: [
                f.jsx(Qn, {
                  title: 'Pick locator',
                  icon: 'target',
                  toggled: C,
                  onClick: () => {
                    C || ue('inspector'), k(!C);
                  },
                }),
              ],
              rightToolbar: [
                T === 'bottom'
                  ? f.jsx(Qn, {
                      title: 'Dock to right',
                      icon: 'layout-sidebar-right-off',
                      onClick: () => {
                        j('right');
                      },
                    })
                  : f.jsx(Qn, {
                      title: 'Dock to bottom',
                      icon: 'layout-panel-off',
                      onClick: () => {
                        j('bottom');
                      },
                    }),
              ],
              mode: T === 'bottom' ? 'default' : 'select',
            }),
          ],
        }),
      ],
    })
  );
};
var Hc;
(e => {
  function t(n) {
    for (const r of n.splice(0)) r.dispose();
  }
  e.disposeAll = t;
})(Hc || (Hc = {}));
class kn {
  constructor() {
    (this._listeners = new Set()),
      (this.event = (t, n) => {
        this._listeners.add(t);
        let r = !1;
        const i = this,
          s = {
            dispose() {
              r || ((r = !0), i._listeners.delete(t));
            },
          };
        return n && n.push(s), s;
      });
  }
  fire(t) {
    const n = !this._deliveryQueue;
    this._deliveryQueue || (this._deliveryQueue = []);
    for (const r of this._listeners) this._deliveryQueue.push({ listener: r, event: t });
    if (n) {
      for (let r = 0; r < this._deliveryQueue.length; r++) {
        const { listener: i, event: s } = this._deliveryQueue[r];
        i.call(null, s);
      }
      this._deliveryQueue = void 0;
    }
  }
  dispose() {
    this._listeners.clear(), this._deliveryQueue && (this._deliveryQueue = []);
  }
}
class l1 {
  constructor(t) {
    (this._onCloseEmitter = new kn()),
      (this._onReportEmitter = new kn()),
      (this._onStdioEmitter = new kn()),
      (this._onListChangedEmitter = new kn()),
      (this._onTestFilesChangedEmitter = new kn()),
      (this._onLoadTraceRequestedEmitter = new kn()),
      (this._lastId = 0),
      (this._callbacks = new Map()),
      (this.onClose = this._onCloseEmitter.event),
      (this.onReport = this._onReportEmitter.event),
      (this.onStdio = this._onStdioEmitter.event),
      (this.onListChanged = this._onListChangedEmitter.event),
      (this.onTestFilesChanged = this._onTestFilesChangedEmitter.event),
      (this.onLoadTraceRequested = this._onLoadTraceRequestedEmitter.event),
      (this._ws = new WebSocket(t)),
      this._ws.addEventListener('message', r => {
        const i = JSON.parse(String(r.data)),
          { id: s, result: o, error: l, method: a, params: u } = i;
        if (s) {
          const c = this._callbacks.get(s);
          if (!c) return;
          this._callbacks.delete(s), l ? c.reject(new Error(l)) : c.resolve(o);
        } else this._dispatchEvent(a, u);
      });
    const n = setInterval(() => this._sendMessage('ping').catch(() => {}), 3e4);
    (this._connectedPromise = new Promise((r, i) => {
      this._ws.addEventListener('open', () => r()), this._ws.addEventListener('error', i);
    })),
      this._ws.addEventListener('close', () => {
        this._onCloseEmitter.fire(), clearInterval(n);
      });
  }
  async _sendMessage(t, n) {
    const r = globalThis.__logForTest;
    r == null || r({ method: t, params: n }), await this._connectedPromise;
    const i = ++this._lastId,
      s = { id: i, method: t, params: n };
    return (
      this._ws.send(JSON.stringify(s)),
      new Promise((o, l) => {
        this._callbacks.set(i, { resolve: o, reject: l });
      })
    );
  }
  _sendMessageNoReply(t, n) {
    this._sendMessage(t, n).catch(() => {});
  }
  _dispatchEvent(t, n) {
    t === 'report'
      ? this._onReportEmitter.fire(n)
      : t === 'stdio'
      ? this._onStdioEmitter.fire(n)
      : t === 'listChanged'
      ? this._onListChangedEmitter.fire(n)
      : t === 'testFilesChanged'
      ? this._onTestFilesChangedEmitter.fire(n)
      : t === 'loadTraceRequested' && this._onLoadTraceRequestedEmitter.fire(n);
  }
  async initialize(t) {
    await this._sendMessage('initialize', t);
  }
  async ping(t) {
    await this._sendMessage('ping', t);
  }
  async pingNoReply(t) {
    this._sendMessageNoReply('ping', t);
  }
  async watch(t) {
    await this._sendMessage('watch', t);
  }
  watchNoReply(t) {
    this._sendMessageNoReply('watch', t);
  }
  async open(t) {
    await this._sendMessage('open', t);
  }
  openNoReply(t) {
    this._sendMessageNoReply('open', t);
  }
  async resizeTerminal(t) {
    await this._sendMessage('resizeTerminal', t);
  }
  resizeTerminalNoReply(t) {
    this._sendMessageNoReply('resizeTerminal', t);
  }
  async checkBrowsers(t) {
    return await this._sendMessage('checkBrowsers', t);
  }
  async installBrowsers(t) {
    await this._sendMessage('installBrowsers', t);
  }
  async runGlobalSetup(t) {
    return await this._sendMessage('runGlobalSetup', t);
  }
  async runGlobalTeardown(t) {
    return await this._sendMessage('runGlobalTeardown', t);
  }
  async startDevServer(t) {
    return await this._sendMessage('startDevServer', t);
  }
  async stopDevServer(t) {
    return await this._sendMessage('stopDevServer', t);
  }
  async clearCache(t) {
    return await this._sendMessage('clearCache', t);
  }
  async listFiles(t) {
    return await this._sendMessage('listFiles', t);
  }
  async listTests(t) {
    return await this._sendMessage('listTests', t);
  }
  async runTests(t) {
    return await this._sendMessage('runTests', t);
  }
  async findRelatedTestFiles(t) {
    return await this._sendMessage('findRelatedTestFiles', t);
  }
  async stopTests(t) {
    await this._sendMessage('stopTests', t);
  }
  stopTestsNoReply(t) {
    this._sendMessageNoReply('stopTests', t);
  }
  async closeGracefully(t) {
    await this._sendMessage('closeGracefully', t);
  }
  close() {
    try {
      this._ws.close();
    } catch {}
  }
}
export {
  i1 as M,
  Ht as R,
  As as S,
  l1 as T,
  o1 as W,
  M0 as _,
  Qn as a,
  Jw as b,
  r1 as c,
  n1 as d,
  e1 as e,
  t1 as f,
  Ah as g,
  Qw as h,
  c0 as i,
  f as j,
  s1 as k,
  is as l,
  Ke as m,
  Yw as n,
  Vp as o,
  L as r,
  Ur as s,
  Zw as t,
  vn as u,
};
