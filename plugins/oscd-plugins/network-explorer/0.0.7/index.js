(function(){"use strict";(function(t,o){globalThis.pluginStyle||(globalThis.pluginStyle={}),globalThis.pluginStyle[o.styleId]=t})("@media not print{.network-explorer-print-content.svelte-1vm7axg{display:none}}button.tscd-button.svelte-d1v8ly{--padding:.5rem;display:inline-flex;place-items:center;padding:var(--padding) calc(var(--padding) * 2);font-family:inherit;gap:.5rem;justify-content:center;letter-spacing:2%;line-height:100%;background-color:#000;color:#fff;border-radius:4px;border:none;cursor:pointer;transition:all .1s ease-in-out}button.tscd-button.svelte-d1v8ly:hover{background-color:var(--color-gray-1);color:#000}button.tscd-button.block.svelte-d1v8ly{width:100%}button.tscd-button.primary.dangerous.svelte-d1v8ly,button.tscd-button.secondary.dangerous.svelte-d1v8ly,button.tscd-button.tertiary.dangerous.svelte-d1v8ly{color:var(--color-pink)}button.tscd-button.primary.dangerous.svelte-d1v8ly:hover,button.tscd-button.secondary.dangerous.svelte-d1v8ly:hover,button.tscd-button.tertiary.dangerous.svelte-d1v8ly:hover{background-color:var(--color-pink);color:var(--color-white)}button.tscd-button.primary.svelte-d1v8ly:disabled,button.tscd-button.primary.svelte-d1v8ly:disabled:hover,button.tscd-button.secondary.svelte-d1v8ly:disabled,button.tscd-button.secondary.svelte-d1v8ly:disabled:hover,button.tscd-button.tertiary.svelte-d1v8ly:disabled,button.tscd-button.tertiary.svelte-d1v8ly:disabled:hover{background-color:var(--color-grey-3);color:var(--color-grey-1)}button.tscd-button.primary.svelte-d1v8ly{background-color:var(--color-blue-dark);color:var(--color-white);border:var(--color-blue-dark) thin solid}button.tscd-button.primary.svelte-d1v8ly:hover{background-color:var(--color-blue);color:var(--color-yellow)}button.tscd-button.primary.svelte-d1v8ly:active{background-color:var(--color-blue-light);color:var(--color-black)}button.tscd-button.secondary.svelte-d1v8ly{background-color:var(--color-white);color:var(--color-blue);border:black thin solid}button.tscd-button.secondary.svelte-d1v8ly:hover{background-color:var(--color-blue-light)}button.tscd-button.secondary.svelte-d1v8ly:active{background-color:var(--color-blue-dark);color:var(--color-yellow)}button.tscd-button.tertiary.svelte-d1v8ly{background:none;border:none;color:var(--color-blue)}button.tscd-button.tertiary.svelte-d1v8ly:hover{background:var(--color-blue-light)}button.tscd-button.tertiary.svelte-d1v8ly:active{background:var(--color-blue);color:var(--color-white)}button.tscd-button.tertiary.svelte-d1v8ly:disabled,button.tscd-button.tertiary.svelte-d1v8ly:disabled:hover{background:none}@media print{.network-explorer-web-content.svelte-11ib5po{display:none}}",{styleId:"@oscd-plugins/network-explorer"})})();
var Y = Object.defineProperty;
var Z = (t, e, n) => e in t ? Y(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var D = (t, e, n) => (Z(t, typeof e != "symbol" ? e + "" : e, n), n);
function f() {
}
function J(t) {
  return t();
}
function F() {
  return /* @__PURE__ */ Object.create(null);
}
function B(t) {
  t.forEach(J);
}
function K(t) {
  return typeof t == "function";
}
function v(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function ee(t) {
  return Object.keys(t).length === 0;
}
function I(t) {
  return t ?? "";
}
function m(t, e) {
  t.appendChild(e);
}
function E(t, e, n) {
  t.insertBefore(e, n || null);
}
function b(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function _(t) {
  return document.createElement(t);
}
function Q(t) {
  return document.createTextNode(t);
}
function T() {
  return Q(" ");
}
function te(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function d(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function ne(t) {
  return Array.from(t.childNodes);
}
function re(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function N(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
let y;
function w(t) {
  y = t;
}
function oe() {
  if (!y)
    throw new Error("Function called outside component initialization");
  return y;
}
function ie(t) {
  oe().$$.on_mount.push(t);
}
function le(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((r) => r.call(this, e));
}
const p = [], W = [], M = [], q = [], se = Promise.resolve();
let V = !1;
function ce() {
  V || (V = !0, se.then(U));
}
function j(t) {
  M.push(t);
}
const H = /* @__PURE__ */ new Set();
let g = 0;
function U() {
  if (g !== 0)
    return;
  const t = y;
  do {
    try {
      for (; g < p.length; ) {
        const e = p[g];
        g++, w(e), ue(e.$$);
      }
    } catch (e) {
      throw p.length = 0, g = 0, e;
    }
    for (w(null), p.length = 0, g = 0; W.length; )
      W.pop()();
    for (let e = 0; e < M.length; e += 1) {
      const n = M[e];
      H.has(n) || (H.add(n), n());
    }
    M.length = 0;
  } while (p.length);
  for (; q.length; )
    q.pop()();
  V = !1, H.clear(), w(t);
}
function ue(t) {
  if (t.fragment !== null) {
    t.update(), B(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(j);
  }
}
const L = /* @__PURE__ */ new Set();
let ae;
function x(t, e) {
  t && t.i && (L.delete(t), t.i(e));
}
function P(t, e, n, r) {
  if (t && t.o) {
    if (L.has(t))
      return;
    L.add(t), ae.c.push(() => {
      L.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function A(t) {
  t && t.c();
}
function $(t, e, n, r) {
  const { fragment: i, after_update: l } = t.$$;
  i && i.m(e, n), r || j(() => {
    const o = t.$$.on_mount.map(J).filter(K);
    t.$$.on_destroy ? t.$$.on_destroy.push(...o) : B(o), t.$$.on_mount = [];
  }), l.forEach(j);
}
function k(t, e) {
  const n = t.$$;
  n.fragment !== null && (B(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function fe(t, e) {
  t.$$.dirty[0] === -1 && (p.push(t), ce(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function C(t, e, n, r, i, l, o, s = [-1]) {
  const a = y;
  w(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: f,
    not_equal: i,
    bound: F(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: F(),
    dirty: s,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  o && o(c.root);
  let u = !1;
  if (c.ctx = n ? n(t, e.props || {}, (h, O, ...R) => {
    const z = R.length ? R[0] : O;
    return c.ctx && i(c.ctx[h], c.ctx[h] = z) && (!c.skip_bound && c.bound[h] && c.bound[h](z), u && fe(t, h)), O;
  }) : [], c.update(), u = !0, B(c.before_update), c.fragment = r ? r(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const h = ne(e.target);
      c.fragment && c.fragment.l(h), h.forEach(b);
    } else
      c.fragment && c.fragment.c();
    e.intro && x(t.$$.fragment), $(t, e.target, e.anchor, e.customElement), U();
  }
  w(a);
}
class S {
  $destroy() {
    k(this, 1), this.$destroy = f;
  }
  $on(e, n) {
    if (!K(n))
      return f;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const i = r.indexOf(n);
      i !== -1 && r.splice(i, 1);
    };
  }
  $set(e) {
    this.$$set && !ee(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function de(t) {
  let e;
  return {
    c() {
      e = _("section"), e.innerHTML = "<h1>Print View</h1>", d(e, "class", "network-explorer-print-content svelte-1vm7axg");
    },
    m(n, r) {
      E(n, e, r);
    },
    p: f,
    i: f,
    o: f,
    d(n) {
      n && b(e);
    }
  };
}
class he extends S {
  constructor(e) {
    super(), C(this, e, null, de, v, {});
  }
}
function me(t) {
  let e, n, r, i, l;
  return {
    c() {
      e = _("button"), n = Q(
        /*label*/
        t[2]
      ), d(e, "class", r = I(`tscd-button ${/*type*/
      t[5]}`) + " svelte-d1v8ly"), e.disabled = /*disabled*/
      t[4], d(
        e,
        "data-testid",
        /*testid*/
        t[3]
      ), N(
        e,
        "block",
        /*block*/
        t[0]
      ), N(
        e,
        "dangerous",
        /*dangerous*/
        t[1]
      );
    },
    m(o, s) {
      E(o, e, s), m(e, n), i || (l = te(
        e,
        "click",
        /*click_handler*/
        t[6]
      ), i = !0);
    },
    p(o, [s]) {
      s & /*label*/
      4 && re(
        n,
        /*label*/
        o[2]
      ), s & /*type*/
      32 && r !== (r = I(`tscd-button ${/*type*/
      o[5]}`) + " svelte-d1v8ly") && d(e, "class", r), s & /*disabled*/
      16 && (e.disabled = /*disabled*/
      o[4]), s & /*testid*/
      8 && d(
        e,
        "data-testid",
        /*testid*/
        o[3]
      ), s & /*type, block*/
      33 && N(
        e,
        "block",
        /*block*/
        o[0]
      ), s & /*type, dangerous*/
      34 && N(
        e,
        "dangerous",
        /*dangerous*/
        o[1]
      );
    },
    i: f,
    o: f,
    d(o) {
      o && b(e), i = !1, l();
    }
  };
}
function _e(t, e, n) {
  let { block: r = !1 } = e, { dangerous: i = !1 } = e, { label: l } = e, { testid: o = "" } = e, { disabled: s = !1 } = e, { type: a = "primary" } = e;
  function c(u) {
    le.call(this, t, u);
  }
  return t.$$set = (u) => {
    "block" in u && n(0, r = u.block), "dangerous" in u && n(1, i = u.dangerous), "label" in u && n(2, l = u.label), "testid" in u && n(3, o = u.testid), "disabled" in u && n(4, s = u.disabled), "type" in u && n(5, a = u.type);
  }, [r, i, l, o, s, a, c];
}
class ge extends S {
  constructor(e) {
    super(), C(this, e, _e, me, v, {
      block: 0,
      dangerous: 1,
      label: 2,
      testid: 3,
      disabled: 4,
      type: 5
    });
  }
}
function pe(t) {
  let e, n, r, i, l;
  return i = new ge({ props: { label: "Mach Download!" } }), i.$on("click", be), {
    c() {
      e = _("section"), n = _("h1"), n.textContent = "Web View", r = T(), A(i.$$.fragment), d(e, "class", "network-explorer-web-content svelte-11ib5po");
    },
    m(o, s) {
      E(o, e, s), m(e, n), m(e, r), $(i, e, null), l = !0;
    },
    p: f,
    i(o) {
      l || (x(i.$$.fragment, o), l = !0);
    },
    o(o) {
      P(i.$$.fragment, o), l = !1;
    },
    d(o) {
      o && b(e), k(i);
    }
  };
}
function be() {
  print();
}
class we extends S {
  constructor(e) {
    super(), C(this, e, null, pe, v, {});
  }
}
function ye(t) {
  let e, n, r, i, l;
  return n = new he({}), i = new we({}), {
    c() {
      e = _("network-explorer"), A(n.$$.fragment), r = T(), A(i.$$.fragment);
    },
    m(o, s) {
      E(o, e, s), $(n, e, null), m(e, r), $(i, e, null), l = !0;
    },
    p: f,
    i(o) {
      l || (x(n.$$.fragment, o), x(i.$$.fragment, o), l = !0);
    },
    o(o) {
      P(n.$$.fragment, o), P(i.$$.fragment, o), l = !1;
    },
    d(o) {
      o && b(e), k(n), k(i);
    }
  };
}
function xe(t) {
  return ie(() => {
    Ee();
  }), [];
}
class $e extends S {
  constructor(e) {
    super(), C(this, e, xe, ye, v, {});
  }
}
const ke = [
  "menu",
  "log",
  "diagnostic",
  "info",
  "warning",
  "error",
  "issue",
  "pluginManager",
  "pluginAdd",
  "settings"
], ve = [
  "mwc-circular-progress-four-color",
  "wizard-dialog"
];
function Ee() {
  const t = document.querySelector("open-scd");
  t !== null && (ke.forEach((e) => {
    G(t, "id", e);
  }), ve.forEach((e) => {
    G(t, "component", e);
  }));
}
function G(t, e, n) {
  var l;
  let r;
  const i = document.createElement("style");
  e === "id" ? r = `@media print { #${n} { display: none; } }` : r = `@media print { ${n} { display: none; } }`, i.innerHTML = r, (l = t.shadowRoot) == null || l.appendChild(i);
}
const X = "@oscd-plugins/network-explorer", Ce = "0.0.7";
function Se(t) {
  let e, n, r, i, l, o, s;
  return n = new $e({}), {
    c() {
      e = _("main"), A(n.$$.fragment), r = T(), i = _("input"), l = T(), o = _("input"), d(i, "type", "hidden"), d(i, "name", "package-name"), i.value = X, d(o, "type", "hidden"), d(o, "name", "package-version"), o.value = Ce;
    },
    m(a, c) {
      E(a, e, c), $(n, e, null), m(e, r), m(e, i), m(e, l), m(e, o), s = !0;
    },
    p: f,
    i(a) {
      s || (x(n.$$.fragment, a), s = !0);
    },
    o(a) {
      P(n.$$.fragment, a), s = !1;
    },
    d(a) {
      a && b(e), k(n);
    }
  };
}
function Ne(t, e, n) {
  let { doc: r } = e;
  return t.$$set = (i) => {
    "doc" in i && n(0, r = i.doc);
  }, [r];
}
class Me extends S {
  constructor(e) {
    super(), C(this, e, Ne, Se, v, { doc: 0 });
  }
}
class Te extends HTMLElement {
  constructor() {
    super(...arguments);
    D(this, "plugin");
    D(this, "_doc");
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.plugin = new Me({
      target: this.shadowRoot,
      props: {
        doc: this._doc
      }
    });
    const n = document.createElement("style");
    n.innerHTML = globalThis.pluginStyle[X], this.shadowRoot.appendChild(n);
  }
  set doc(n) {
    this._doc = n, this.plugin && this.plugin.$set({ doc: n });
  }
}
export {
  Te as default
};
