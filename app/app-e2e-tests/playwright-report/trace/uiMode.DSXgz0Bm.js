function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      './assets/xtermModule-BeNbaIVa.js',
      './xtermModule.DSXBckUd.css',
    ];
  }
  return indexes.map(i => __vite__mapDeps.viteFileDeps[i]);
}
var bt = Object.defineProperty;
var St = (r, t, e) =>
  t in r ? bt(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (r[t] = e);
var F = (r, t, e) => (St(r, typeof t != 'symbol' ? t + '' : t, e), e);
import {
  u as Tt,
  r as V,
  d as kt,
  _ as jt,
  e as yt,
  f as Et,
  j as o,
  R as h,
  s as ut,
  m as It,
  g as X,
  a as N,
  h as Rt,
  i as Bt,
  k as nt,
  W as Ct,
  M as Nt,
  l as Pt,
  T as Dt,
  S as Lt,
  t as Mt,
  b as Ft,
  c as Ot,
} from './assets/testServerConnection-JQMZFCzK.js';
var At = {};
class et {
  constructor(t, e = {}) {
    (this.isListing = !1),
      (this._tests = new Map()),
      (this._rootSuite = new q('', 'root')),
      (this._options = e),
      (this._reporter = t);
  }
  reset() {
    (this._rootSuite._entries = []), this._tests.clear();
  }
  dispatch(t) {
    const { method: e, params: s } = t;
    if (e === 'onConfigure') {
      this._onConfigure(s.config);
      return;
    }
    if (e === 'onProject') {
      this._onProject(s.project);
      return;
    }
    if (e === 'onBegin') {
      this._onBegin();
      return;
    }
    if (e === 'onTestBegin') {
      this._onTestBegin(s.testId, s.result);
      return;
    }
    if (e === 'onTestEnd') {
      this._onTestEnd(s.test, s.result);
      return;
    }
    if (e === 'onStepBegin') {
      this._onStepBegin(s.testId, s.resultId, s.step);
      return;
    }
    if (e === 'onStepEnd') {
      this._onStepEnd(s.testId, s.resultId, s.step);
      return;
    }
    if (e === 'onError') {
      this._onError(s.error);
      return;
    }
    if (e === 'onStdIO') {
      this._onStdIO(s.type, s.testId, s.resultId, s.data, s.isBase64);
      return;
    }
    if (e === 'onEnd') return this._onEnd(s.result);
    if (e === 'onExit') return this._onExit();
  }
  _onConfigure(t) {
    var e, s;
    (this._rootDir = t.rootDir),
      (this._config = this._parseConfig(t)),
      (s = (e = this._reporter).onConfigure) == null || s.call(e, this._config);
  }
  _onProject(t) {
    let e = this._options.mergeProjects
      ? this._rootSuite.suites.find(s => s.project().name === t.name)
      : void 0;
    e || ((e = new q(t.name, 'project')), this._rootSuite._addSuite(e)),
      (e._project = this._parseProject(t));
    for (const s of t.suites) this._mergeSuiteInto(s, e);
  }
  _onBegin() {
    var t, e;
    (e = (t = this._reporter).onBegin) == null || e.call(t, this._rootSuite);
  }
  _onTestBegin(t, e) {
    var d, a;
    const s = this._tests.get(t);
    this._options.clearPreviousResultsWhenTestBegins && (s.results = []);
    const i = s._createTestResult(e.id);
    (i.retry = e.retry),
      (i.workerIndex = e.workerIndex),
      (i.parallelIndex = e.parallelIndex),
      i.setStartTimeNumber(e.startTime),
      (a = (d = this._reporter).onTestBegin) == null || a.call(d, s, i);
  }
  _onTestEnd(t, e) {
    var d, a, f;
    const s = this._tests.get(t.testId);
    (s.timeout = t.timeout), (s.expectedStatus = t.expectedStatus), (s.annotations = t.annotations);
    const i = s.results.find(n => n._id === e.id);
    (i.duration = e.duration),
      (i.status = e.status),
      (i.errors = e.errors),
      (i.error = (d = i.errors) == null ? void 0 : d[0]),
      (i.attachments = this._parseAttachments(e.attachments)),
      (f = (a = this._reporter).onTestEnd) == null || f.call(a, s, i),
      (i._stepMap = new Map());
  }
  _onStepBegin(t, e, s) {
    var m, u;
    const i = this._tests.get(t),
      d = i.results.find(g => g._id === e),
      a = s.parentStepId ? d._stepMap.get(s.parentStepId) : void 0,
      f = this._absoluteLocation(s.location),
      n = new Ut(s, a, f);
    a ? a.steps.push(n) : d.steps.push(n),
      d._stepMap.set(s.id, n),
      (u = (m = this._reporter).onStepBegin) == null || u.call(m, i, d, n);
  }
  _onStepEnd(t, e, s) {
    var f, n;
    const i = this._tests.get(t),
      d = i.results.find(m => m._id === e),
      a = d._stepMap.get(s.id);
    (a.duration = s.duration),
      (a.error = s.error),
      (n = (f = this._reporter).onStepEnd) == null || n.call(f, i, d, a);
  }
  _onError(t) {
    var e, s;
    (s = (e = this._reporter).onError) == null || s.call(e, t);
  }
  _onStdIO(t, e, s, i, d) {
    var m, u, g, k;
    const a = d ? (globalThis.Buffer ? Buffer.from(i, 'base64') : atob(i)) : i,
      f = e ? this._tests.get(e) : void 0,
      n = f && s ? f.results.find(l => l._id === s) : void 0;
    t === 'stdout'
      ? (n == null || n.stdout.push(a),
        (u = (m = this._reporter).onStdOut) == null || u.call(m, a, f, n))
      : (n == null || n.stderr.push(a),
        (k = (g = this._reporter).onStdErr) == null || k.call(g, a, f, n));
  }
  async _onEnd(t) {
    var e, s;
    await ((s = (e = this._reporter).onEnd) == null
      ? void 0
      : s.call(e, { status: t.status, startTime: new Date(t.startTime), duration: t.duration }));
  }
  _onExit() {
    var t, e;
    return (e = (t = this._reporter).onExit) == null ? void 0 : e.call(t);
  }
  _parseConfig(t) {
    const e = { ...Kt, ...t };
    return (
      this._options.configOverrides &&
        ((e.configFile = this._options.configOverrides.configFile),
        (e.reportSlowTests = this._options.configOverrides.reportSlowTests),
        (e.quiet = this._options.configOverrides.quiet),
        (e.reporter = [...this._options.configOverrides.reporter])),
      e
    );
  }
  _parseProject(t) {
    return {
      metadata: t.metadata,
      name: t.name,
      outputDir: this._absolutePath(t.outputDir),
      repeatEach: t.repeatEach,
      retries: t.retries,
      testDir: this._absolutePath(t.testDir),
      testIgnore: Q(t.testIgnore),
      testMatch: Q(t.testMatch),
      timeout: t.timeout,
      grep: Q(t.grep),
      grepInvert: Q(t.grepInvert),
      dependencies: t.dependencies,
      teardown: t.teardown,
      snapshotDir: this._absolutePath(t.snapshotDir),
      use: {},
    };
  }
  _parseAttachments(t) {
    return t.map(e => ({
      ...e,
      body: e.base64 && globalThis.Buffer ? Buffer.from(e.base64, 'base64') : void 0,
    }));
  }
  _mergeSuiteInto(t, e) {
    let s = e.suites.find(i => i.title === t.title);
    s || ((s = new q(t.title, e.type === 'project' ? 'file' : 'describe')), e._addSuite(s)),
      (s.location = this._absoluteLocation(t.location)),
      t.entries.forEach(i => {
        'testId' in i ? this._mergeTestInto(i, s) : this._mergeSuiteInto(i, s);
      });
  }
  _mergeTestInto(t, e) {
    let s = this._options.mergeTestCases
      ? e.tests.find(i => i.title === t.title && i.repeatEachIndex === t.repeatEachIndex)
      : void 0;
    s ||
      ((s = new Wt(t.testId, t.title, this._absoluteLocation(t.location), t.repeatEachIndex)),
      e._addTest(s),
      this._tests.set(s.id, s)),
      this._updateTest(t, s);
  }
  _updateTest(t, e) {
    return (
      (e.id = t.testId),
      (e.location = this._absoluteLocation(t.location)),
      (e.retries = t.retries),
      (e.tags = t.tags ?? []),
      (e.annotations = t.annotations ?? []),
      e
    );
  }
  _absoluteLocation(t) {
    return t && { ...t, file: this._absolutePath(t.file) };
  }
  _absolutePath(t) {
    if (t !== void 0)
      return this._options.resolvePath
        ? this._options.resolvePath(this._rootDir, t)
        : this._rootDir + '/' + t;
  }
}
class q {
  constructor(t, e) {
    (this._entries = []),
      (this._requireFile = ''),
      (this._parallelMode = 'none'),
      (this.title = t),
      (this._type = e);
  }
  get type() {
    return this._type;
  }
  get suites() {
    return this._entries.filter(t => t.type !== 'test');
  }
  get tests() {
    return this._entries.filter(t => t.type === 'test');
  }
  entries() {
    return this._entries;
  }
  allTests() {
    const t = [],
      e = s => {
        for (const i of s.entries()) i.type === 'test' ? t.push(i) : e(i);
      };
    return e(this), t;
  }
  titlePath() {
    const t = this.parent ? this.parent.titlePath() : [];
    return (this.title || this._type !== 'describe') && t.push(this.title), t;
  }
  project() {
    var t;
    return this._project ?? ((t = this.parent) == null ? void 0 : t.project());
  }
  _addTest(t) {
    (t.parent = this), this._entries.push(t);
  }
  _addSuite(t) {
    (t.parent = this), this._entries.push(t);
  }
}
class Wt {
  constructor(t, e, s, i) {
    (this.fn = () => {}),
      (this.results = []),
      (this.type = 'test'),
      (this.expectedStatus = 'passed'),
      (this.timeout = 0),
      (this.annotations = []),
      (this.retries = 0),
      (this.tags = []),
      (this.repeatEachIndex = 0),
      (this.id = t),
      (this.title = e),
      (this.location = s),
      (this.repeatEachIndex = i);
  }
  titlePath() {
    const t = this.parent ? this.parent.titlePath() : [];
    return t.push(this.title), t;
  }
  outcome() {
    return Vt(this);
  }
  ok() {
    const t = this.outcome();
    return t === 'expected' || t === 'flaky' || t === 'skipped';
  }
  _createTestResult(t) {
    const e = new zt(this.results.length, t);
    return this.results.push(e), e;
  }
}
class Ut {
  constructor(t, e, s) {
    (this.duration = -1),
      (this.steps = []),
      (this._startTime = 0),
      (this.title = t.title),
      (this.category = t.category),
      (this.location = s),
      (this.parent = e),
      (this._startTime = t.startTime);
  }
  titlePath() {
    var e;
    return [...(((e = this.parent) == null ? void 0 : e.titlePath()) || []), this.title];
  }
  get startTime() {
    return new Date(this._startTime);
  }
  set startTime(t) {
    this._startTime = +t;
  }
}
class zt {
  constructor(t, e) {
    (this.parallelIndex = -1),
      (this.workerIndex = -1),
      (this.duration = -1),
      (this.stdout = []),
      (this.stderr = []),
      (this.attachments = []),
      (this.status = 'skipped'),
      (this.steps = []),
      (this.errors = []),
      (this._stepMap = new Map()),
      (this._startTime = 0),
      (this.retry = t),
      (this._id = e);
  }
  setStartTimeNumber(t) {
    this._startTime = t;
  }
  get startTime() {
    return new Date(this._startTime);
  }
  set startTime(t) {
    this._startTime = +t;
  }
}
const Kt = {
  forbidOnly: !1,
  fullyParallel: !1,
  globalSetup: null,
  globalTeardown: null,
  globalTimeout: 0,
  grep: /.*/,
  grepInvert: null,
  maxFailures: 0,
  metadata: {},
  preserveOutput: 'always',
  projects: [],
  reporter: [[At.CI ? 'dot' : 'list']],
  reportSlowTests: { max: 5, threshold: 15e3 },
  configFile: '',
  rootDir: '',
  quiet: !1,
  shard: null,
  updateSnapshots: 'missing',
  version: '',
  workers: 0,
  webServer: null,
};
function Q(r) {
  return r.map(t => (t.s ? t.s : new RegExp(t.r.source, t.r.flags)));
}
function Vt(r) {
  let t = 0,
    e = 0,
    s = 0;
  for (const i of r.results)
    i.status === 'interrupted' ||
      (i.status === 'skipped' && r.expectedStatus === 'skipped'
        ? ++t
        : i.status === 'skipped' || (i.status === r.expectedStatus ? ++e : ++s));
  return e === 0 && s === 0
    ? 'skipped'
    : s === 0
    ? 'expected'
    : e === 0 && t === 0
    ? 'unexpected'
    : 'flaky';
}
class at {
  constructor(t, e, s, i, d) {
    (this._treeItemById = new Map()), (this._treeItemByTestId = new Map());
    const a = i && [...i.values()].some(Boolean);
    (this.pathSeparator = d),
      (this.rootItem = {
        kind: 'group',
        subKind: 'folder',
        id: t,
        title: '',
        location: { file: '', line: 0, column: 0 },
        duration: 0,
        parent: void 0,
        children: [],
        status: 'none',
        hasLoadErrors: !1,
      }),
      this._treeItemById.set(t, this.rootItem);
    const f = (n, m, u) => {
      for (const g of m.suites) {
        const k = g.title || '<anonymous>';
        let l = u.children.find(p => p.kind === 'group' && p.title === k);
        l ||
          ((l = {
            kind: 'group',
            subKind: 'describe',
            id: 'suite:' + m.titlePath().join('') + '' + k,
            title: k,
            location: g.location,
            duration: 0,
            parent: u,
            children: [],
            status: 'none',
            hasLoadErrors: !1,
          }),
          this._addChild(u, l)),
          f(n, g, l);
      }
      for (const g of m.tests) {
        const k = g.title;
        let l = u.children.find(I => I.kind !== 'group' && I.title === k);
        l ||
          ((l = {
            kind: 'case',
            id: 'test:' + g.titlePath().join(''),
            title: k,
            parent: u,
            children: [],
            tests: [],
            location: g.location,
            duration: 0,
            status: 'none',
            project: void 0,
            test: void 0,
            tags: g.tags,
          }),
          this._addChild(u, l));
        const p = g.results[0];
        let x = 'none';
        (p == null ? void 0 : p[H]) === 'scheduled'
          ? (x = 'scheduled')
          : (p == null ? void 0 : p[H]) === 'running'
          ? (x = 'running')
          : (p == null ? void 0 : p.status) === 'skipped'
          ? (x = 'skipped')
          : (p == null ? void 0 : p.status) === 'interrupted'
          ? (x = 'none')
          : p && g.outcome() !== 'expected'
          ? (x = 'failed')
          : p && g.outcome() === 'expected' && (x = 'passed'),
          l.tests.push(g);
        const E = {
          kind: 'test',
          id: g.id,
          title: n.name,
          location: g.location,
          test: g,
          parent: l,
          children: [],
          status: x,
          duration: g.results.length ? Math.max(0, g.results[0].duration) : 0,
          project: n,
        };
        this._addChild(l, E),
          this._treeItemByTestId.set(g.id, E),
          (l.duration = l.children.reduce((I, T) => I + T.duration, 0));
      }
    };
    for (const n of (e == null ? void 0 : e.suites) || [])
      if (!(a && !i.get(n.title)))
        for (const m of n.suites) {
          const u = this._fileItem(m.location.file.split(d), !0);
          f(n.project(), m, u);
        }
    for (const n of s) {
      if (!n.location) continue;
      const m = this._fileItem(n.location.file.split(d), !0);
      m.hasLoadErrors = !0;
    }
  }
  _addChild(t, e) {
    t.children.push(e), (e.parent = t), this._treeItemById.set(e.id, e);
  }
  filterTree(t, e, s) {
    const i = t.trim().toLowerCase().split(' '),
      d = [...e.values()].some(Boolean),
      a = n => {
        const m = [...n.tests[0].titlePath(), ...n.tests[0].tags].join(' ').toLowerCase();
        return !i.every(u => m.includes(u)) &&
          !n.tests.some(u => (s == null ? void 0 : s.has(u.id)))
          ? !1
          : ((n.children = n.children.filter(
              u => !d || (s == null ? void 0 : s.has(u.test.id)) || e.get(u.status)
            )),
            (n.tests = n.children.map(u => u.test)),
            !!n.children.length);
      },
      f = n => {
        const m = [];
        for (const u of n.children)
          u.kind === 'case'
            ? a(u) && m.push(u)
            : (f(u), (u.children.length || u.hasLoadErrors) && m.push(u));
        n.children = m;
      };
    f(this.rootItem);
  }
  _fileItem(t, e) {
    if (t.length === 0) return this.rootItem;
    const s = t.join(this.pathSeparator),
      i = this._treeItemById.get(s);
    if (i) return i;
    const d = this._fileItem(t.slice(0, t.length - 1), !1),
      a = {
        kind: 'group',
        subKind: e ? 'file' : 'folder',
        id: s,
        title: t[t.length - 1],
        location: { file: s, line: 0, column: 0 },
        duration: 0,
        parent: d,
        children: [],
        status: 'none',
        hasLoadErrors: !1,
      };
    return this._addChild(d, a), a;
  }
  sortAndPropagateStatus() {
    ht(this.rootItem);
  }
  flattenForSingleProject() {
    const t = e => {
      e.kind === 'case' && e.children.length === 1
        ? ((e.project = e.children[0].project),
          (e.test = e.children[0].test),
          (e.children = []),
          this._treeItemByTestId.set(e.test.id, e))
        : e.children.forEach(t);
    };
    t(this.rootItem);
  }
  shortenRoot() {
    let t = this.rootItem;
    for (
      ;
      t.children.length === 1 &&
      t.children[0].kind === 'group' &&
      t.children[0].subKind === 'folder';

    )
      t = t.children[0];
    (t.location = this.rootItem.location), (this.rootItem = t);
  }
  testIds() {
    const t = new Set(),
      e = s => {
        s.kind === 'case' && s.tests.forEach(i => t.add(i.id)), s.children.forEach(e);
      };
    return e(this.rootItem), t;
  }
  fileNames() {
    const t = new Set(),
      e = s => {
        s.kind === 'group' && s.subKind === 'file' ? t.add(s.id) : s.children.forEach(e);
      };
    return e(this.rootItem), [...t];
  }
  flatTreeItems() {
    const t = [],
      e = s => {
        t.push(s), s.children.forEach(e);
      };
    return e(this.rootItem), t;
  }
  treeItemById(t) {
    return this._treeItemById.get(t);
  }
  collectTestIds(t) {
    return t ? $t(t) : new Set();
  }
}
function ht(r) {
  for (const a of r.children) ht(a);
  r.kind === 'group' &&
    r.children.sort(
      (a, f) => a.location.file.localeCompare(f.location.file) || a.location.line - f.location.line
    );
  let t = r.children.length > 0,
    e = r.children.length > 0,
    s = !1,
    i = !1,
    d = !1;
  for (const a of r.children)
    (e = e && a.status === 'skipped'),
      (t = t && (a.status === 'passed' || a.status === 'skipped')),
      (s = s || a.status === 'failed'),
      (i = i || a.status === 'running'),
      (d = d || a.status === 'scheduled');
  i
    ? (r.status = 'running')
    : d
    ? (r.status = 'scheduled')
    : s
    ? (r.status = 'failed')
    : e
    ? (r.status = 'skipped')
    : t && (r.status = 'passed');
}
function $t(r) {
  const t = new Set(),
    e = s => {
      var i;
      s.kind === 'case'
        ? s.tests.map(d => d.id).forEach(d => t.add(d))
        : s.kind === 'test'
        ? t.add(s.id)
        : (i = s.children) == null || i.forEach(e);
    };
  return e(r), t;
}
const H = Symbol('statusEx');
class qt {
  constructor(t) {
    F(this, 'rootSuite');
    F(this, 'config');
    F(this, 'loadErrors', []);
    F(this, 'progress', { total: 0, passed: 0, failed: 0, skipped: 0 });
    F(this, '_receiver');
    F(this, '_lastRunReceiver');
    F(this, '_lastRunTestCount', 0);
    F(this, '_options');
    F(this, '_testResultsSnapshot');
    (this._receiver = new et(this._createReporter(), {
      mergeProjects: !0,
      mergeTestCases: !0,
      resolvePath: (e, s) => e + t.pathSeparator + s,
      clearPreviousResultsWhenTestBegins: !0,
    })),
      (this._options = t);
  }
  _createReporter() {
    return {
      version: () => 'v2',
      onConfigure: t => {
        (this.config = t),
          (this._lastRunReceiver = new et(
            {
              onBegin: e => {
                (this._lastRunTestCount = e.allTests().length), (this._lastRunReceiver = void 0);
              },
            },
            {
              mergeProjects: !0,
              mergeTestCases: !1,
              resolvePath: (e, s) => e + this._options.pathSeparator + s,
            }
          ));
      },
      onBegin: t => {
        var e;
        if ((this.rootSuite || (this.rootSuite = t), this._testResultsSnapshot)) {
          for (const s of this.rootSuite.allTests())
            s.results =
              ((e = this._testResultsSnapshot) == null ? void 0 : e.get(s.id)) || s.results;
          this._testResultsSnapshot = void 0;
        }
        (this.progress.total = this._lastRunTestCount),
          (this.progress.passed = 0),
          (this.progress.failed = 0),
          (this.progress.skipped = 0),
          this._options.onUpdate(!0);
      },
      onEnd: () => {
        this._options.onUpdate(!0);
      },
      onTestBegin: (t, e) => {
        (e[H] = 'running'), this._options.onUpdate();
      },
      onTestEnd: (t, e) => {
        t.outcome() === 'skipped'
          ? ++this.progress.skipped
          : t.outcome() === 'unexpected'
          ? ++this.progress.failed
          : ++this.progress.passed,
          (e[H] = e.status),
          this._options.onUpdate();
      },
      onError: t => this._handleOnError(t),
      printsToStdio: () => !1,
      onStdOut: () => {},
      onStdErr: () => {},
      onExit: () => {},
      onStepBegin: () => {},
      onStepEnd: () => {},
    };
  }
  processGlobalReport(t) {
    const e = new et({
      onConfigure: s => {
        this.config = s;
      },
      onError: s => this._handleOnError(s),
    });
    for (const s of t) e.dispatch(s);
  }
  processListReport(t) {
    var s;
    const e = ((s = this.rootSuite) == null ? void 0 : s.allTests()) || [];
    (this._testResultsSnapshot = new Map(e.map(i => [i.id, i.results]))), this._receiver.reset();
    for (const i of t) this._receiver.dispatch(i);
  }
  processTestReportEvent(t) {
    var e, s, i;
    (s = (e = this._lastRunReceiver) == null ? void 0 : e.dispatch(t)) == null || s.catch(() => {}),
      (i = this._receiver.dispatch(t)) == null || i.catch(() => {});
  }
  _handleOnError(t) {
    var e, s;
    this.loadErrors.push(t),
      (s = (e = this._options).onError) == null || s.call(e, t),
      this._options.onUpdate();
  }
  asModel() {
    return {
      rootSuite: this.rootSuite || new q('', 'root'),
      config: this.config,
      loadErrors: this.loadErrors,
      progress: this.progress,
    };
  }
}
const Ht = ({ source: r }) => {
    const [t, e] = Tt(),
      [s, i] = V.useState(kt()),
      [d] = V.useState(
        jt(
          () => import('./assets/xtermModule-BeNbaIVa.js'),
          __vite__mapDeps([0, 1]),
          import.meta.url
        ).then(f => f.default)
      ),
      a = V.useRef(null);
    return (
      V.useEffect(() => (yt(i), () => Et(i)), []),
      V.useEffect(() => {
        const f = r.write,
          n = r.clear;
        return (
          (async () => {
            const { Terminal: m, FitAddon: u } = await d,
              g = e.current;
            if (!g) return;
            const k = s === 'dark-mode' ? Qt : Yt;
            if (a.current && a.current.terminal.options.theme === k) return;
            a.current && (g.textContent = '');
            const l = new m({
                convertEol: !0,
                fontSize: 13,
                scrollback: 1e4,
                fontFamily: 'var(--vscode-editor-font-family)',
                theme: k,
              }),
              p = new u();
            l.loadAddon(p);
            for (const x of r.pending) l.write(x);
            (r.write = x => {
              r.pending.push(x), l.write(x);
            }),
              (r.clear = () => {
                (r.pending = []), l.clear();
              }),
              l.open(g),
              p.fit(),
              (a.current = { terminal: l, fitAddon: p });
          })(),
          () => {
            (r.clear = n), (r.write = f);
          }
        );
      }, [d, a, e, r, s]),
      V.useEffect(() => {
        setTimeout(() => {
          a.current &&
            (a.current.fitAddon.fit(), r.resize(a.current.terminal.cols, a.current.terminal.rows));
        }, 250);
      }, [t, r]),
      o.jsx('div', {
        'data-testid': 'output',
        className: 'xterm-wrapper',
        style: { flex: 'auto' },
        ref: e,
      })
    );
  },
  Yt = {
    foreground: '#383a42',
    background: '#fafafa',
    cursor: '#383a42',
    black: '#000000',
    red: '#e45649',
    green: '#50a14f',
    yellow: '#c18401',
    blue: '#4078f2',
    magenta: '#a626a4',
    cyan: '#0184bc',
    white: '#a0a0a0',
    brightBlack: '#000000',
    brightRed: '#e06c75',
    brightGreen: '#98c379',
    brightYellow: '#d19a66',
    brightBlue: '#4078f2',
    brightMagenta: '#a626a4',
    brightCyan: '#0184bc',
    brightWhite: '#383a42',
    selectionBackground: '#d7d7d7',
    selectionForeground: '#383a42',
  },
  Qt = {
    foreground: '#f8f8f2',
    background: '#1e1e1e',
    cursor: '#f8f8f0',
    black: '#000000',
    red: '#ff5555',
    green: '#50fa7b',
    yellow: '#f1fa8c',
    blue: '#bd93f9',
    magenta: '#ff79c6',
    cyan: '#8be9fd',
    white: '#bfbfbf',
    brightBlack: '#4d4d4d',
    brightRed: '#ff6e6e',
    brightGreen: '#69ff94',
    brightYellow: '#ffffa5',
    brightBlue: '#d6acff',
    brightMagenta: '#ff92df',
    brightCyan: '#a4ffff',
    brightWhite: '#e6e6e6',
    selectionBackground: '#44475a',
    selectionForeground: '#f8f8f2',
  },
  st = navigator.userAgent.toLowerCase().includes('windows') ? '\\' : '/',
  Xt = ({ title: r, children: t, setExpanded: e, expanded: s, expandOnTitleClick: i }) =>
    o.jsxs('div', {
      className: 'expandable' + (s ? ' expanded' : ''),
      children: [
        o.jsxs('div', {
          className: 'expandable-title',
          onClick: () => i && e(!s),
          children: [
            o.jsx('div', {
              className: 'codicon codicon-' + (s ? 'chevron-down' : 'chevron-right'),
              style: { cursor: 'pointer', color: 'var(--vscode-foreground)', marginLeft: '5px' },
              onClick: () => !i && e(!s),
            }),
            r,
          ],
        }),
        s && o.jsx('div', { style: { marginLeft: 25 }, children: t }),
      ],
    }),
  Gt = ({
    filterText: r,
    setFilterText: t,
    statusFilters: e,
    setStatusFilters: s,
    projectFilters: i,
    setProjectFilters: d,
    testModel: a,
    runTests: f,
  }) => {
    const [n, m] = h.useState(!1),
      u = h.useRef(null);
    h.useEffect(() => {
      var l;
      (l = u.current) == null || l.focus();
    }, []);
    const g =
        [...e.entries()]
          .filter(([l, p]) => p)
          .map(([l]) => l)
          .join(' ') || 'all',
      k =
        [...i.entries()]
          .filter(([l, p]) => p)
          .map(([l]) => l)
          .join(' ') || 'all';
    return o.jsxs('div', {
      className: 'filters',
      children: [
        o.jsx(Xt, {
          expanded: n,
          setExpanded: m,
          title: o.jsx('input', {
            ref: u,
            type: 'search',
            placeholder: 'Filter (e.g. text, @tag)',
            spellCheck: !1,
            value: r,
            onChange: l => {
              t(l.target.value);
            },
            onKeyDown: l => {
              l.key === 'Enter' && f();
            },
          }),
        }),
        o.jsxs('div', {
          className: 'filter-summary',
          title:
            'Status: ' +
            g +
            `
Projects: ` +
            k,
          onClick: () => m(!n),
          children: [
            o.jsx('span', { className: 'filter-label', children: 'Status:' }),
            ' ',
            g,
            o.jsx('span', { className: 'filter-label', children: 'Projects:' }),
            ' ',
            k,
          ],
        }),
        n &&
          o.jsxs('div', {
            className: 'hbox',
            style: { marginLeft: 14, maxHeight: 200, overflowY: 'auto' },
            children: [
              o.jsx('div', {
                className: 'filter-list',
                children: [...e.entries()].map(([l, p]) =>
                  o.jsx('div', {
                    className: 'filter-entry',
                    children: o.jsxs('label', {
                      children: [
                        o.jsx('input', {
                          type: 'checkbox',
                          checked: p,
                          onClick: () => {
                            const x = new Map(e);
                            x.set(l, !x.get(l)), s(x);
                          },
                        }),
                        o.jsx('div', { children: l }),
                      ],
                    }),
                  })
                ),
              }),
              o.jsx('div', {
                className: 'filter-list',
                children: [...i.entries()].map(([l, p]) =>
                  o.jsx('div', {
                    className: 'filter-entry',
                    children: o.jsxs('label', {
                      children: [
                        o.jsx('input', {
                          type: 'checkbox',
                          checked: p,
                          onClick: () => {
                            var I;
                            const x = new Map(i);
                            x.set(l, !x.get(l)), d(x);
                            const E =
                              (I = a == null ? void 0 : a.config) == null ? void 0 : I.configFile;
                            E &&
                              ut.setObject(
                                E + ':projects',
                                [...x.entries()].filter(([T, U]) => U).map(([T]) => T)
                              );
                          },
                        }),
                        o.jsx('div', { children: l || 'untitled' }),
                      ],
                    }),
                  })
                ),
              }),
            ],
          }),
      ],
    });
  },
  Jt = ({ tag: r, style: t, onClick: e }) =>
    o.jsx('span', {
      className: `tag tag-color-${Zt(r)}`,
      onClick: e,
      style: { margin: '6px 0 0 6px', ...t },
      title: `Click to filter by tag: ${r}`,
      children: r,
    });
function Zt(r) {
  let t = 0;
  for (let e = 0; e < r.length; e++) t = r.charCodeAt(e) + ((t << 8) - t);
  return Math.abs(t % 6);
}
const te = Bt,
  ee = ({
    filterText: r,
    testModel: t,
    testServerConnection: e,
    testTree: s,
    runTests: i,
    runningState: d,
    watchAll: a,
    watchedTreeIds: f,
    setWatchedTreeIds: n,
    isLoading: m,
    onItemSelected: u,
    requestedCollapseAllCount: g,
    setFilterText: k,
  }) => {
    const [l, p] = h.useState({ expandedItems: new Map() }),
      [x, E] = h.useState(),
      [I, T] = h.useState(g);
    h.useEffect(() => {
      if (I !== g) {
        l.expandedItems.clear();
        for (const b of s.flatTreeItems()) l.expandedItems.set(b.id, !1);
        T(g), E(void 0), p({ ...l });
        return;
      }
      if (!d || d.itemSelectedByUser) return;
      let c;
      const j = b => {
        var C;
        b.children.forEach(j),
          !c &&
            b.status === 'failed' &&
            ((b.kind === 'test' && d.testIds.has(b.test.id)) ||
              (b.kind === 'case' && d.testIds.has((C = b.tests[0]) == null ? void 0 : C.id))) &&
            (c = b);
      };
      j(s.rootItem), c && E(c.id);
    }, [d, E, s, I, T, g, l, p]);
    const { selectedTreeItem: U } = h.useMemo(() => {
      if (!t) return { selectedTreeItem: void 0 };
      const c = x ? s.treeItemById(x) : void 0;
      let j;
      c &&
        (j = {
          file: c.location.file,
          line: c.location.line,
          source: {
            errors: t.loadErrors
              .filter(C => {
                var $;
                return (($ = C.location) == null ? void 0 : $.file) === c.location.file;
              })
              .map(C => ({ line: C.location.line, message: C.message })),
            content: void 0,
          },
        });
      let b;
      return (
        (c == null ? void 0 : c.kind) === 'test'
          ? (b = c.test)
          : (c == null ? void 0 : c.kind) === 'case' && c.tests.length === 1 && (b = c.tests[0]),
        u({ treeItem: c, testCase: b, testFile: j }),
        { selectedTreeItem: c }
      );
    }, [u, x, t, s]);
    h.useEffect(() => {
      if (!m)
        if (a) e == null || e.watchNoReply({ fileNames: s.fileNames() });
        else {
          const c = new Set();
          for (const j of f.value) {
            const b = s.treeItemById(j),
              C = b == null ? void 0 : b.location.file;
            C && c.add(C);
          }
          e == null || e.watchNoReply({ fileNames: [...c] });
        }
    }, [m, s, a, f, e]);
    const O = c => {
        E(c.id), i('bounce-if-busy', s.collectTestIds(c));
      },
      G = (c, j) => {
        if ((c.preventDefault(), c.stopPropagation(), c.metaKey || c.ctrlKey)) {
          const b = r.split(' ');
          b.includes(j)
            ? k(
                b
                  .filter(C => C !== j)
                  .join(' ')
                  .trim()
              )
            : k((r + ' ' + j).trim());
        } else
          k(
            (
              r
                .split(' ')
                .filter(b => !b.startsWith('@'))
                .join(' ') +
              ' ' +
              j
            ).trim()
          );
      };
    return o.jsx(te, {
      name: 'tests',
      treeState: l,
      setTreeState: p,
      rootItem: s.rootItem,
      dataTestId: 'test-tree',
      render: c =>
        o.jsxs('div', {
          className: 'hbox ui-mode-list-item',
          children: [
            o.jsxs('div', {
              className: 'ui-mode-list-item-title',
              children: [
                o.jsx('span', { title: c.title, children: c.title }),
                c.kind === 'case'
                  ? c.tags.map(j => o.jsx(Jt, { tag: j.slice(1), onClick: b => G(b, j) }, j))
                  : null,
              ],
            }),
            !!c.duration &&
              c.status !== 'skipped' &&
              o.jsx('div', { className: 'ui-mode-list-item-time', children: It(c.duration) }),
            o.jsxs(X, {
              noMinHeight: !0,
              noShadow: !0,
              children: [
                o.jsx(N, { icon: 'play', title: 'Run', onClick: () => O(c), disabled: !!d }),
                o.jsx(N, {
                  icon: 'go-to-file',
                  title: 'Open in VS Code',
                  onClick: () => (e == null ? void 0 : e.openNoReply({ location: c.location })),
                  style:
                    c.kind === 'group' && c.subKind === 'folder' ? { visibility: 'hidden' } : {},
                }),
                !a &&
                  o.jsx(N, {
                    icon: 'eye',
                    title: 'Watch',
                    onClick: () => {
                      f.value.has(c.id) ? f.value.delete(c.id) : f.value.add(c.id), n({ ...f });
                    },
                    toggled: f.value.has(c.id),
                  }),
              ],
            }),
          ],
        }),
      icon: c => Rt(c.status),
      selectedItem: U,
      onAccepted: O,
      onSelected: c => {
        d && (d.itemSelectedByUser = !0), E(c.id);
      },
      isError: c => (c.kind === 'group' ? c.hasLoadErrors : !1),
      autoExpandDepth: r ? 5 : 1,
      noItemsMessage: m ? 'Loading…' : 'No tests',
    });
  };
function se(r) {
  return `.playwright-artifacts-${r}`;
}
const ie = ({ item: r, rootDir: t }) => {
    var k;
    const [e, s] = h.useState(),
      [i, d] = h.useState(0),
      a = h.useRef(null),
      { outputDir: f } = h.useMemo(
        () => ({ outputDir: r.testCase ? re(r.testCase) : void 0 }),
        [r]
      ),
      [n, m] = h.useState(),
      u = h.useCallback(l => m(nt(l)), [m]),
      g = n ? (e == null ? void 0 : e.model.actions.find(l => nt(l) === n)) : void 0;
    return (
      h.useEffect(() => {
        var E, I;
        a.current && clearTimeout(a.current);
        const l = (E = r.testCase) == null ? void 0 : E.results[0];
        if (!l) {
          s(void 0);
          return;
        }
        const p = l && l.duration >= 0 && l.attachments.find(T => T.name === 'trace');
        if (p && p.path) {
          lt(p.path).then(T => s({ model: T, isLive: !1 }));
          return;
        }
        if (!f) {
          s(void 0);
          return;
        }
        const x = `${f}/${se(l.workerIndex)}/traces/${
          (I = r.testCase) == null ? void 0 : I.id
        }.json`;
        return (
          (a.current = setTimeout(async () => {
            try {
              const T = await lt(x);
              s({ model: T, isLive: !0 });
            } catch {
              s(void 0);
            } finally {
              d(i + 1);
            }
          }, 500)),
          () => {
            a.current && clearTimeout(a.current);
          }
        );
      }, [f, r, s, i, d]),
      o.jsx(
        Ct,
        {
          model: e == null ? void 0 : e.model,
          showSourcesFirst: !0,
          rootDir: t,
          initialSelection: g,
          onSelectionChanged: u,
          fallbackLocation: r.testFile,
          isLive: e == null ? void 0 : e.isLive,
          status: (k = r.treeItem) == null ? void 0 : k.status,
        },
        'workbench'
      )
    );
  },
  re = r => {
    var t;
    for (let e = r.parent; e; e = e.parent)
      if (e.project()) return (t = e.project()) == null ? void 0 : t.outputDir;
  };
async function lt(r) {
  const t = new URLSearchParams();
  t.set('trace', r);
  const s = await (await fetch(`contexts?${t.toString()}`)).json();
  return new Nt(s);
}
let ct = { cols: 80, rows: 24 };
const A = { pending: [], clear: () => {}, write: r => A.pending.push(r), resize: () => {} },
  D = new URLSearchParams(window.location.search),
  oe = D.get('ws'),
  ft = new URL(`../${oe}`, window.location.toString());
ft.protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
const P = {
    args: D.getAll('arg'),
    grep: D.get('grep') || void 0,
    grepInvert: D.get('grepInvert') || void 0,
    projects: D.getAll('project'),
    workers: D.get('workers') || void 0,
    timeout: D.has('timeout') ? +D.get('timeout') : void 0,
    headed: D.has('headed'),
    outputDir: D.get('outputDir') || void 0,
    reporters: D.has('reporter') ? D.getAll('reporter') : void 0,
  },
  dt = navigator.platform === 'MacIntel',
  ne = ({}) => {
    var ot;
    const [r, t] = h.useState(''),
      [e, s] = h.useState(!1),
      [i, d] = h.useState(
        new Map([
          ['passed', !1],
          ['failed', !1],
          ['skipped', !1],
        ])
      ),
      [a, f] = h.useState(new Map()),
      [n, m] = h.useState(),
      [u, g] = h.useState(),
      [k, l] = h.useState({}),
      [p, x] = h.useState(new Set()),
      [E, I] = h.useState(!1),
      [T, U] = h.useState(),
      [O, G] = Pt('watch-all', !1),
      [c, j] = h.useState({ value: new Set() }),
      b = h.useRef(Promise.resolve()),
      C = h.useRef(new Set()),
      [$, pt] = h.useState(0),
      [gt, mt] = h.useState(!1),
      [it, rt] = h.useState(!0),
      [w, _t] = h.useState(),
      wt = h.useRef(null),
      Y = h.useCallback(() => {
        _t(new Dt(ft.toString()));
      }, []);
    h.useEffect(() => {
      var v;
      (v = wt.current) == null || v.focus(), I(!0), Y();
    }, [Y]),
      h.useEffect(() => {
        if (!w) return;
        const v = [
          w.onStdio(_ => {
            if (_.buffer) {
              const y = atob(_.buffer);
              A.write(y);
            } else A.write(_.text);
          }),
          w.onClose(() => mt(!0)),
        ];
        return (
          (A.resize = (_, y) => {
            (ct = { cols: _, rows: y }), w.resizeTerminalNoReply({ cols: _, rows: y });
          }),
          () => {
            for (const _ of v) _.dispose();
          }
        );
      }, [w]),
      h.useEffect(() => {
        if (!w) return;
        let v;
        const _ = new qt({
            onUpdate: S => {
              clearTimeout(v),
                (v = void 0),
                S
                  ? m(_.asModel())
                  : v ||
                    (v = setTimeout(() => {
                      m(_.asModel());
                    }, 250));
            },
            onError: S => {
              A.write(
                (S.stack || S.value || '') +
                  `
`
              );
            },
            pathSeparator: st,
          }),
          y = async () => {
            b.current = b.current.then(async () => {
              I(!0);
              try {
                const S = await w.listTests({ projects: P.projects, locations: P.args });
                _.processListReport(S.report);
              } catch (S) {
                console.log(S);
              } finally {
                I(!1);
              }
            });
          };
        return (
          m(void 0),
          I(!0),
          j({ value: new Set() }),
          (async () => {
            try {
              await w.initialize({ interceptStdio: !0, watchTestDirs: !0 });
              const { status: S, report: B } = await w.runGlobalSetup({});
              if ((_.processGlobalReport(B), S !== 'passed')) return;
              const R = await w.listTests({ projects: P.projects, locations: P.args });
              _.processListReport(R.report),
                w.onListChanged(y),
                w.onReport(L => {
                  _.processTestReportEvent(L);
                });
              const { hasBrowsers: M } = await w.checkBrowsers({});
              rt(M);
            } finally {
              I(!1);
            }
          })(),
          () => {
            clearTimeout(v);
          }
        );
      }, [w]),
      h.useEffect(() => {
        if (!n) return;
        const { config: v, rootSuite: _ } = n,
          y = v.configFile ? ut.getObject(v.configFile + ':projects', void 0) : void 0,
          S = new Map(a);
        for (const B of S.keys()) _.suites.find(R => R.title === B) || S.delete(B);
        for (const B of _.suites)
          S.has(B.title) || S.set(B.title, !!(y != null && y.includes(B.title)));
        !y && S.size && ![...S.values()].includes(!0) && S.set(S.entries().next().value[0], !0),
          (a.size !== S.size || [...a].some(([B, R]) => S.get(B) !== R)) && f(S);
      }, [a, n]),
      h.useEffect(() => {
        T && n != null && n.progress ? g(n.progress) : n || g(void 0);
      }, [n, T]);
    const { testTree: z } = h.useMemo(() => {
        if (!n) return { testTree: new at('', new q('', 'root'), [], a, st) };
        const v = new at('', n.rootSuite, n.loadErrors, a, st);
        return (
          v.filterTree(r, i, T == null ? void 0 : T.testIds),
          v.sortAndPropagateStatus(),
          v.shortenRoot(),
          v.flattenForSingleProject(),
          x(v.testIds()),
          { testTree: v }
        );
      }, [r, n, i, a, x, T]),
      W = h.useCallback(
        (v, _) => {
          !w ||
            !n ||
            (v === 'bounce-if-busy' && T) ||
            ((C.current = new Set([...C.current, ..._])),
            (b.current = b.current.then(async () => {
              var B, R, M;
              const y = C.current;
              if (((C.current = new Set()), !y.size)) return;
              {
                for (const L of ((B = n.rootSuite) == null ? void 0 : B.allTests()) || [])
                  if (y.has(L.id)) {
                    L.results = [];
                    const tt = L._createTestResult('pending');
                    tt[H] = 'scheduled';
                  }
                m({ ...n });
              }
              const S = '  [' + new Date().toLocaleTimeString() + ']';
              A.write('\x1B[2m—'.repeat(Math.max(0, ct.cols - S.length)) + S + '\x1B[22m'),
                g({ total: 0, passed: 0, failed: 0, skipped: 0 }),
                U({ testIds: y }),
                await w.runTests({
                  locations: P.args,
                  grep: P.grep,
                  grepInvert: P.grepInvert,
                  testIds: [...y],
                  projects: [...a].filter(([L, tt]) => tt).map(([L]) => L),
                  workers: P.workers,
                  timeout: P.timeout,
                  headed: P.headed,
                  outputDir: P.outputDir,
                  reporters: P.reporters,
                  trace: 'on',
                });
              for (const L of ((R = n.rootSuite) == null ? void 0 : R.allTests()) || [])
                ((M = L.results[0]) == null ? void 0 : M.duration) === -1 && (L.results = []);
              m({ ...n }), U(void 0);
            })));
        },
        [a, T, n, w]
      );
    h.useEffect(() => {
      if (!w) return;
      const v = w.onTestFilesChanged(_ => {
        const y = [],
          S = new Set(_.testFiles);
        if (O) {
          const B = R => {
            const M = R.location.file;
            M && S.has(M) && y.push(...z.collectTestIds(R)),
              R.kind === 'group' && R.subKind === 'folder' && R.children.forEach(B);
          };
          B(z.rootItem);
        } else
          for (const B of c.value) {
            const R = z.treeItemById(B),
              M = R == null ? void 0 : R.location.file;
            M && S.has(M) && y.push(...z.collectTestIds(R));
          }
        W('queue-if-busy', new Set(y));
      });
      return () => v.dispose();
    }, [W, w, z, O, c]),
      h.useEffect(() => {
        if (!w) return;
        const v = _ => {
          _.code === 'Backquote' && _.ctrlKey
            ? (_.preventDefault(), s(!e))
            : _.code === 'F5' && _.shiftKey
            ? (_.preventDefault(), w == null || w.stopTestsNoReply({}))
            : _.code === 'F5' && (_.preventDefault(), W('bounce-if-busy', p));
        };
        return (
          addEventListener('keydown', v),
          () => {
            removeEventListener('keydown', v);
          }
        );
      }, [W, Y, w, p, e]);
    const K = !!T,
      J = h.useRef(null),
      vt = h.useCallback(v => {
        var _;
        v.preventDefault(), v.stopPropagation(), (_ = J.current) == null || _.showModal();
      }, []),
      Z = h.useCallback(v => {
        var _;
        v.preventDefault(), v.stopPropagation(), (_ = J.current) == null || _.close();
      }, []),
      xt = h.useCallback(
        v => {
          Z(v),
            s(!0),
            w == null ||
              w.installBrowsers({}).then(async () => {
                s(!1);
                const { hasBrowsers: _ } = await (w == null ? void 0 : w.checkBrowsers({}));
                rt(_);
              });
        },
        [Z, w]
      );
    return o.jsxs('div', {
      className: 'vbox ui-mode',
      children: [
        !it &&
          o.jsxs('dialog', {
            ref: J,
            children: [
              o.jsxs('div', {
                className: 'title',
                children: [
                  o.jsx('span', { className: 'codicon codicon-lightbulb' }),
                  'Install browsers',
                ],
              }),
              o.jsxs('div', {
                className: 'body',
                children: [
                  'Playwright did not find installed browsers.',
                  o.jsx('br', {}),
                  'Would you like to run `playwright install`?',
                  o.jsx('br', {}),
                  o.jsx('button', { className: 'button', onClick: xt, children: 'Install' }),
                  o.jsx('button', {
                    className: 'button secondary',
                    onClick: Z,
                    children: 'Dismiss',
                  }),
                ],
              }),
            ],
          }),
        gt &&
          o.jsxs('div', {
            className: 'disconnected',
            children: [
              o.jsx('div', { className: 'title', children: 'UI Mode disconnected' }),
              o.jsxs('div', {
                children: [
                  o.jsx('a', {
                    href: '#',
                    onClick: () => (window.location.href = '/'),
                    children: 'Reload the page',
                  }),
                  ' to reconnect',
                ],
              }),
            ],
          }),
        o.jsxs(Lt, {
          sidebarSize: 250,
          minSidebarSize: 150,
          orientation: 'horizontal',
          sidebarIsFirst: !0,
          settingName: 'testListSidebar',
          children: [
            o.jsxs('div', {
              className: 'vbox',
              children: [
                o.jsxs('div', {
                  className: 'vbox' + (e ? '' : ' hidden'),
                  children: [
                    o.jsxs(X, {
                      children: [
                        o.jsx('div', {
                          className: 'section-title',
                          style: { flex: 'none' },
                          children: 'Output',
                        }),
                        o.jsx(N, {
                          icon: 'circle-slash',
                          title: 'Clear output',
                          onClick: () => A.clear(),
                        }),
                        o.jsx('div', { className: 'spacer' }),
                        o.jsx(N, { icon: 'close', title: 'Close', onClick: () => s(!1) }),
                      ],
                    }),
                    o.jsx(Ht, { source: A }),
                  ],
                }),
                o.jsx('div', {
                  className: 'vbox' + (e ? ' hidden' : ''),
                  children: o.jsx(ie, {
                    item: k,
                    rootDir: (ot = n == null ? void 0 : n.config) == null ? void 0 : ot.rootDir,
                  }),
                }),
              ],
            }),
            o.jsxs('div', {
              className: 'vbox ui-mode-sidebar',
              children: [
                o.jsxs(X, {
                  noShadow: !0,
                  noMinHeight: !0,
                  children: [
                    o.jsx('img', { src: 'playwright-logo.svg', alt: 'Playwright logo' }),
                    o.jsx('div', { className: 'section-title', children: 'Playwright' }),
                    o.jsx(N, {
                      icon: 'color-mode',
                      title: 'Toggle color mode',
                      onClick: () => Mt(),
                    }),
                    o.jsx(N, {
                      icon: 'refresh',
                      title: 'Reload',
                      onClick: () => Y(),
                      disabled: K || E,
                    }),
                    o.jsx(N, {
                      icon: 'terminal',
                      title: 'Toggle output — ' + (dt ? '⌃`' : 'Ctrl + `'),
                      toggled: e,
                      onClick: () => {
                        s(!e);
                      },
                    }),
                    !it &&
                      o.jsx(N, {
                        icon: 'lightbulb-autofix',
                        style: { color: 'var(--vscode-list-warningForeground)' },
                        title: 'Playwright browsers are missing',
                        onClick: vt,
                      }),
                  ],
                }),
                o.jsx(Gt, {
                  filterText: r,
                  setFilterText: t,
                  statusFilters: i,
                  setStatusFilters: d,
                  projectFilters: a,
                  setProjectFilters: f,
                  testModel: n,
                  runTests: () => W('bounce-if-busy', p),
                }),
                o.jsxs(X, {
                  noMinHeight: !0,
                  children: [
                    !K && !u && o.jsx('div', { className: 'section-title', children: 'Tests' }),
                    !K &&
                      u &&
                      o.jsx('div', {
                        'data-testid': 'status-line',
                        className: 'status-line',
                        children: o.jsxs('div', {
                          children: [
                            u.passed,
                            '/',
                            u.total,
                            ' passed (',
                            ((u.passed / u.total) * 100) | 0,
                            '%)',
                          ],
                        }),
                      }),
                    K &&
                      u &&
                      o.jsx('div', {
                        'data-testid': 'status-line',
                        className: 'status-line',
                        children: o.jsxs('div', {
                          children: [
                            'Running ',
                            u.passed,
                            '/',
                            T.testIds.size,
                            ' passed (',
                            ((u.passed / T.testIds.size) * 100) | 0,
                            '%)',
                          ],
                        }),
                      }),
                    o.jsx(N, {
                      icon: 'play',
                      title: 'Run all — F5',
                      onClick: () => W('bounce-if-busy', p),
                      disabled: K || E,
                    }),
                    o.jsx(N, {
                      icon: 'debug-stop',
                      title: 'Stop — ' + (dt ? '⇧F5' : 'Shift + F5'),
                      onClick: () => (w == null ? void 0 : w.stopTests({})),
                      disabled: !K || E,
                    }),
                    o.jsx(N, {
                      icon: 'eye',
                      title: 'Watch all',
                      toggled: O,
                      onClick: () => {
                        j({ value: new Set() }), G(!O);
                      },
                    }),
                    o.jsx(N, {
                      icon: 'collapse-all',
                      title: 'Collapse all',
                      onClick: () => {
                        pt($ + 1);
                      },
                    }),
                  ],
                }),
                o.jsx(ee, {
                  filterText: r,
                  testModel: n,
                  testTree: z,
                  testServerConnection: w,
                  runningState: T,
                  runTests: W,
                  onItemSelected: l,
                  watchAll: O,
                  watchedTreeIds: c,
                  setWatchedTreeIds: j,
                  isLoading: E,
                  requestedCollapseAllCount: $,
                  setFilterText: t,
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
(async () => {
  if ((Ft(), window.location.protocol !== 'file:')) {
    if (
      (window.location.href.includes('isUnderTest=true') &&
        (await new Promise(r => setTimeout(r, 1e3))),
      !navigator.serviceWorker)
    )
      throw new Error(`Service workers are not supported.
Make sure to serve the website (${window.location}) via HTTPS or localhost.`);
    navigator.serviceWorker.register('sw.bundle.js'),
      navigator.serviceWorker.controller ||
        (await new Promise(r => {
          navigator.serviceWorker.oncontrollerchange = () => r();
        })),
      setInterval(function () {
        fetch('ping');
      }, 1e4);
  }
  Ot.render(o.jsx(ne, {}), document.querySelector('#root'));
})();
