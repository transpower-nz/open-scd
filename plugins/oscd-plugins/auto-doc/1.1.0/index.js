var or = Object.defineProperty;
var ur = (t, e, n) => e in t ? or(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Fe = (t, e, n) => ur(t, typeof e != "symbol" ? e + "" : e, n);
function re() {
}
function F(t, e) {
  for (const n in e) t[n] = e[n];
  return (
    /** @type {T & S} */
    t
  );
}
function Ml(t) {
  return t();
}
function ai() {
  return /* @__PURE__ */ Object.create(null);
}
function Te(t) {
  t.forEach(Ml);
}
function Ce(t) {
  return typeof t == "function";
}
function le(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let tn;
function oi(t, e) {
  return t === e ? !0 : (tn || (tn = document.createElement("a")), tn.href = e, t === tn.href);
}
function cr(t) {
  return Object.keys(t).length === 0;
}
function bn(t, ...e) {
  if (t == null) {
    for (const i of e)
      i(void 0);
    return re;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Ge(t) {
  let e;
  return bn(t, (n) => e = n)(), e;
}
function wt(t, e, n) {
  t.$$.on_destroy.push(bn(e, n));
}
function fe(t, e, n, i) {
  if (t) {
    const l = $l(t, e, n, i);
    return t[0](l);
  }
}
function $l(t, e, n, i) {
  return t[1] && i ? F(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function de(t, e, n, i) {
  if (t[2] && i) {
    const l = t[2](i(n));
    if (e.dirty === void 0)
      return l;
    if (typeof l == "object") {
      const s = [], o = Math.max(e.dirty.length, l.length);
      for (let r = 0; r < o; r += 1)
        s[r] = e.dirty[r] | l[r];
      return s;
    }
    return e.dirty | l;
  }
  return e.dirty;
}
function me(t, e, n, i, l, s) {
  if (l) {
    const o = $l(e, n, i, s);
    t.p(o, l);
  }
}
function he(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let i = 0; i < n; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
function Re(t) {
  const e = {};
  for (const n in t) n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function se(t, e) {
  const n = {};
  e = new Set(e);
  for (const i in t) !e.has(i) && i[0] !== "$" && (n[i] = t[i]);
  return n;
}
function Gn(t) {
  const e = {};
  for (const n in t)
    e[n] = !0;
  return e;
}
function Bn(t, e, n) {
  return t.set(n), e;
}
function ee(t) {
  return t && Ce(t.destroy) ? t.destroy : re;
}
const fr = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function j(t, e) {
  t.appendChild(e);
}
function We(t, e, n) {
  const i = dr(t);
  if (!i.getElementById(e)) {
    const l = V("style");
    l.id = e, l.textContent = n, mr(i, l);
  }
}
function dr(t) {
  if (!t) return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function mr(t, e) {
  return j(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function O(t, e, n) {
  t.insertBefore(e, n || null);
}
function R(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function vn(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function V(t) {
  return document.createElement(t);
}
function Ct(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function Ee(t) {
  return document.createTextNode(t);
}
function K() {
  return Ee(" ");
}
function Oe() {
  return Ee("");
}
function x(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function Nl(t) {
  return function(e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function N(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const hr = ["width", "height"];
function ce(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const i in e)
    e[i] == null ? t.removeAttribute(i) : i === "style" ? t.style.cssText = e[i] : i === "__value" ? t.value = t[i] = e[i] : n[i] && n[i].set && hr.indexOf(i) === -1 ? t[i] = e[i] : N(t, i, e[i]);
}
function hn(t, e) {
  for (const n in e)
    N(t, n, e[n]);
}
function pr(t, e) {
  Object.keys(e).forEach((n) => {
    zt(t, n, e[n]);
  });
}
function zt(t, e, n) {
  const i = e.toLowerCase();
  i in t ? t[i] = typeof t[i] == "boolean" && n === "" ? !0 : n : e in t ? t[e] = typeof t[e] == "boolean" && n === "" ? !0 : n : N(t, e, n);
}
function pn(t) {
  return /-/.test(t) ? pr : ce;
}
function gr(t) {
  return Array.from(t.childNodes);
}
function Ye(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function gn(t, e) {
  t.value = e ?? "";
}
function _r(t, e, n, i) {
  t.style.setProperty(e, n, "");
}
function nn(t, e, n) {
  t.classList.toggle(e, !!n);
}
function br(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: i });
}
function vr(t) {
  const e = {};
  return t.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      e[n.slot || "default"] = !0;
    }
  ), e;
}
function Be(t, e) {
  return new t(e);
}
let Wt;
function Kt(t) {
  Wt = t;
}
function we() {
  if (!Wt) throw new Error("Function called outside component initialization");
  return Wt;
}
function Qe(t) {
  we().$$.on_mount.push(t);
}
function Cr(t) {
  we().$$.after_update.push(t);
}
function St(t) {
  we().$$.on_destroy.push(t);
}
function Kn() {
  const t = we();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const l = t.$$.callbacks[e];
    if (l) {
      const s = br(
        /** @type {string} */
        e,
        n,
        { cancelable: i }
      );
      return l.slice().forEach((o) => {
        o.call(t, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
function He(t, e) {
  return we().$$.context.set(t, e), e;
}
function Ue(t) {
  return we().$$.context.get(t);
}
function mt(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const Pt = [], ie = [];
let Vt = [];
const Un = [], Bl = /* @__PURE__ */ Promise.resolve();
let Pn = !1;
function Ul() {
  Pn || (Pn = !0, Bl.then(y));
}
function Wn() {
  return Ul(), Bl;
}
function Fn(t) {
  Vt.push(t);
}
function ut(t) {
  Un.push(t);
}
const Ln = /* @__PURE__ */ new Set();
let Nt = 0;
function y() {
  if (Nt !== 0)
    return;
  const t = Wt;
  do {
    try {
      for (; Nt < Pt.length; ) {
        const e = Pt[Nt];
        Nt++, Kt(e), yr(e.$$);
      }
    } catch (e) {
      throw Pt.length = 0, Nt = 0, e;
    }
    for (Kt(null), Pt.length = 0, Nt = 0; ie.length; ) ie.pop()();
    for (let e = 0; e < Vt.length; e += 1) {
      const n = Vt[e];
      Ln.has(n) || (Ln.add(n), n());
    }
    Vt.length = 0;
  } while (Pt.length);
  for (; Un.length; )
    Un.pop()();
  Pn = !1, Ln.clear(), Kt(t);
}
function yr(t) {
  if (t.fragment !== null) {
    t.update(), Te(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Fn);
  }
}
function Ar(t) {
  const e = [], n = [];
  Vt.forEach((i) => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), Vt = e;
}
const fn = /* @__PURE__ */ new Set();
let Ot;
function ge() {
  Ot = {
    r: 0,
    c: [],
    p: Ot
    // parent group
  };
}
function _e() {
  Ot.r || Te(Ot.c), Ot = Ot.p;
}
function b(t, e) {
  t && t.i && (fn.delete(t), t.i(e));
}
function C(t, e, n, i) {
  if (t && t.o) {
    if (fn.has(t)) return;
    fn.add(t), Ot.c.push(() => {
      fn.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else i && i();
}
function ht(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function Er(t, e) {
  C(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function Ir(t, e, n, i, l, s, o, r, a, u, c, f) {
  let d = t.length, m = s.length, h = d;
  const _ = {};
  for (; h--; ) _[t[h].key] = h;
  const p = [], E = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), M = [];
  for (h = m; h--; ) {
    const g = f(l, s, h), T = n(g);
    let q = o.get(T);
    q ? M.push(() => q.p(g, e)) : (q = u(T, g), q.c()), E.set(T, p[h] = q), T in _ && S.set(T, Math.abs(h - _[T]));
  }
  const A = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set();
  function I(g) {
    b(g, 1), g.m(r, c), o.set(g.key, g), c = g.first, m--;
  }
  for (; d && m; ) {
    const g = p[m - 1], T = t[d - 1], q = g.key, H = T.key;
    g === T ? (c = g.first, d--, m--) : E.has(H) ? !o.has(q) || A.has(q) ? I(g) : v.has(H) ? d-- : S.get(q) > S.get(H) ? (v.add(q), I(g)) : (A.add(H), d--) : (a(T, o), d--);
  }
  for (; d--; ) {
    const g = t[d];
    E.has(g.key) || a(g, o);
  }
  for (; m; ) I(p[m - 1]);
  return Te(M), p;
}
function ne(t, e) {
  const n = {}, i = {}, l = { $$scope: 1 };
  let s = t.length;
  for (; s--; ) {
    const o = t[s], r = e[s];
    if (r) {
      for (const a in o)
        a in r || (i[a] = 1);
      for (const a in r)
        l[a] || (n[a] = r[a], l[a] = 1);
      t[s] = r;
    } else
      for (const a in o)
        l[a] = 1;
  }
  for (const o in i)
    o in n || (n[o] = void 0);
  return n;
}
function pe(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function ct(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && (t.$$.bound[i] = n, n(t.$$.ctx[i]));
}
function P(t) {
  t && t.c();
}
function B(t, e, n) {
  const { fragment: i, after_update: l } = t.$$;
  i && i.m(e, n), Fn(() => {
    const s = t.$$.on_mount.map(Ml).filter(Ce);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : Te(s), t.$$.on_mount = [];
  }), l.forEach(Fn);
}
function U(t, e) {
  const n = t.$$;
  n.fragment !== null && (Ar(n.after_update), Te(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Tr(t, e) {
  t.$$.dirty[0] === -1 && (Pt.push(t), Ul(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ae(t, e, n, i, l, s, o = null, r = [-1]) {
  const a = Wt;
  Kt(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: re,
    not_equal: l,
    bound: ai(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: ai(),
    dirty: r,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  o && o(u.root);
  let c = !1;
  if (u.ctx = n ? n(t, e.props || {}, (f, d, ...m) => {
    const h = m.length ? m[0] : d;
    return u.ctx && l(u.ctx[f], u.ctx[f] = h) && (!u.skip_bound && u.bound[f] && u.bound[f](h), c && Tr(t, f)), d;
  }) : [], u.update(), c = !0, Te(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = gr(e.target);
      u.fragment && u.fragment.l(f), f.forEach(R);
    } else
      u.fragment && u.fragment.c();
    e.intro && b(t.$$.fragment), B(t, e.target, e.anchor), y();
  }
  Kt(a);
}
let Pl;
typeof HTMLElement == "function" && (Pl = class extends HTMLElement {
  constructor(e, n, i) {
    super();
    /** The Svelte component constructor */
    Fe(this, "$$ctor");
    /** Slots */
    Fe(this, "$$s");
    /** The Svelte component instance */
    Fe(this, "$$c");
    /** Whether or not the custom element is connected */
    Fe(this, "$$cn", !1);
    /** Component props data */
    Fe(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Fe(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Fe(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    Fe(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    Fe(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = n, i && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, n, i) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(n), this.$$c) {
      const l = this.$$c.$on(e, n);
      this.$$l_u.set(n, l);
    }
    super.addEventListener(e, n, i);
  }
  removeEventListener(e, n, i) {
    if (super.removeEventListener(e, n, i), this.$$c) {
      const l = this.$$l_u.get(n);
      l && (l(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(s) {
        return () => {
          let o;
          return {
            c: function() {
              o = V("slot"), s !== "default" && N(o, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(u, c) {
              O(u, o, c);
            },
            d: function(u) {
              u && R(o);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, i = vr(this);
      for (const s of this.$$s)
        s in i && (n[s] = [e(s)]);
      for (const s of this.attributes) {
        const o = this.$$g_p(s.name);
        o in this.$$d || (this.$$d[o] = dn(o, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$scope: {
            ctx: []
          }
        }
      });
      const l = () => {
        this.$$r = !0;
        for (const s in this.$$p_d)
          if (this.$$d[s] = this.$$c.$$.ctx[this.$$c.$$.props[s]], this.$$p_d[s].reflect) {
            const o = dn(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, o);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(l), l();
      for (const s in this.$$l)
        for (const o of this.$$l[s]) {
          const r = this.$$c.$on(s, o);
          this.$$l_u.set(o, r);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, n, i) {
    var l;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = dn(e, i, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(e) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function dn(t, e, n, i) {
  var s;
  const l = (s = n[t]) == null ? void 0 : s.type;
  if (e = l === "Boolean" && typeof e != "boolean" ? e != null : e, !i || !n[t])
    return e;
  if (i === "toAttribute")
    switch (l) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (l) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function oe(t, e, n, i, l, s) {
  let o = class extends Pl {
    constructor() {
      super(t, n, l), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (r) => (e[r].attribute || r).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((r) => {
    Object.defineProperty(o.prototype, r, {
      get() {
        return this.$$c && r in this.$$c ? this.$$c[r] : this.$$d[r];
      },
      set(a) {
        var u;
        a = dn(r, a, e), this.$$d[r] = a, (u = this.$$c) == null || u.$set({ [r]: a });
      }
    });
  }), i.forEach((r) => {
    Object.defineProperty(o.prototype, r, {
      get() {
        var a;
        return (a = this.$$c) == null ? void 0 : a[r];
      }
    });
  }), t.element = /** @type {any} */
  o, o;
}
class ue {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Fe(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Fe(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    U(this, 1), this.$destroy = re;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!Ce(n))
      return re;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const l = i.indexOf(n);
      l !== -1 && i.splice(l, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !cr(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const wr = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(wr);
const Sr = {
  upload_file: "M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z",
  download: "M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z",
  visibility: "M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z",
  visibility_off: "m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z",
  close: "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z",
  nearby: "M480-304 304-480l176-176 176 176-176 176Zm56 199q-11 11-26 17t-30 6q-15 0-30-6t-26-17L105-424q-11-11-17-26t-6-30q0-15 6-30t17-26l318-318q12-12 26.5-18t30.5-6q16 0 30.5 6t26.5 18l318 318q11 11 17 26t6 30q0 15-6 30t-17 26L536-105Zm-56-87 288-288-288-288-288 288 288 288Z",
  nearby_empty: "M536-105c-7.333 7.333-16 13-26 17s-20 6-30 6-20-2-30-6-18.667-9.667-26-17L105-424c-7.333-7.333-13-16-17-26s-6-20-6-30 2-20 6-30 9.667-18.667 17-26l318-318c8-8 16.833-14 26.5-18 9.667-4 19.833-6 30.5-6 10.667 0 20.833 2 30.5 6 9.667 4 18.5 10 26.5 18l318 318c7.333 7.333 13 16 17 26s6 20 6 30-2 20-6 30-9.667 18.667-17 26zm-56-87 288-288-288-288-288 288z",
  more_vert: "M480.34-95Q438-95 409-124.42t-29-70.74q0-42.14 29.07-71.99Q438.13-297 479.66-297 522-297 551-267.26t29 71.5q0 41.76-29.02 71.26Q521.97-95 480.34-95Zm0-285Q438-380 409-409.07q-29-29.06-29-70.59Q380-522 409.07-551q29.06-29 70.59-29Q522-580 551-550.98q29 29.01 29 70.64Q580-438 550.98-409q-29.01 29-70.64 29Zm0-283Q438-663 409-692.95q-29-29.94-29-72Q380-807 409.07-836q29.06-29 70.59-29Q522-865 551-835.98q29 29.01 29 70.86 0 42.25-29.02 72.19Q521.97-663 480.34-663Z",
  keyboard_arrow_down: "M480-305 200-586l95-94 185 185 186-185 95 94-281 281Z",
  keyboard_arrow_right: "M466-480 281-665l95-95 280 280-280 279-95-95 185-184Z",
  edit: "M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z",
  delete: "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z",
  content_copy: "M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z",
  add: "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z",
  arrow_back: "m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z",
  arrow_upward: "M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z",
  arrow_downward: "M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"
};
function kr(t) {
  let e, n, i, l, s;
  return {
    c() {
      e = Ct("svg"), n = Ct("title"), i = Ee("icon "), l = Ee(
        /*icon*/
        t[1]
      ), s = Ct("path"), N(
        s,
        "d",
        /*draw*/
        t[3]
      ), N(
        e,
        "class",
        /*className*/
        t[2]
      ), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "height", "24px"), N(e, "viewBox", "0 -960 960 960"), N(e, "width", "24px"), N(
        e,
        "fill",
        /*fillColor*/
        t[0]
      );
    },
    m(o, r) {
      O(o, e, r), j(e, n), j(n, i), j(n, l), j(e, s);
    },
    p(o, [r]) {
      r & /*icon*/
      2 && Ye(
        l,
        /*icon*/
        o[1]
      ), r & /*draw*/
      8 && N(
        s,
        "d",
        /*draw*/
        o[3]
      ), r & /*className*/
      4 && N(
        e,
        "class",
        /*className*/
        o[2]
      ), r & /*fillColor*/
      1 && N(
        e,
        "fill",
        /*fillColor*/
        o[0]
      );
    },
    i: re,
    o: re,
    d(o) {
      o && R(e);
    }
  };
}
function Lr(t) {
  return t === "primary" ? "var(--mdc-theme-primary)" : t === "secondary" ? "var(--mdc-theme-secondary)" : t;
}
function Dr(t, e, n) {
  let i, { fillColor: l = "primary" } = e, { icon: s } = e, { class: o = "" } = e;
  function r(a) {
    return Sr[a];
  }
  return t.$$set = (a) => {
    "fillColor" in a && n(0, l = a.fillColor), "icon" in a && n(1, s = a.icon), "class" in a && n(2, o = a.class);
  }, t.$$.update = () => {
    t.$$.dirty & /*icon*/
    2 && n(3, i = r(s)), t.$$.dirty & /*fillColor*/
    1 && n(0, l = Lr(l));
  }, [l, s, o, i];
}
class Cn extends ue {
  constructor(e) {
    super(), ae(this, e, Dr, kr, le, { fillColor: 0, icon: 1, class: 2 });
  }
  get fillColor() {
    return this.$$.ctx[0];
  }
  set fillColor(e) {
    this.$$set({ fillColor: e }), y();
  }
  get icon() {
    return this.$$.ctx[1];
  }
  set icon(e) {
    this.$$set({ icon: e }), y();
  }
  get class() {
    return this.$$.ctx[2];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
}
oe(Cn, { fillColor: {}, icon: {}, class: {} }, [], [], !0);
var zn = function(t, e) {
  return zn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var l in i) Object.prototype.hasOwnProperty.call(i, l) && (n[l] = i[l]);
  }, zn(t, e);
};
function et(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  zn(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var $e = function() {
  return $e = Object.assign || function(e) {
    for (var n, i = 1, l = arguments.length; i < l; i++) {
      n = arguments[i];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
    }
    return e;
  }, $e.apply(this, arguments);
};
function Rr(t, e, n, i) {
  function l(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function r(c) {
      try {
        u(i.next(c));
      } catch (f) {
        o(f);
      }
    }
    function a(c) {
      try {
        u(i.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : l(c.value).then(r, a);
    }
    u((i = i.apply(t, e || [])).next());
  });
}
function Or(t, e) {
  var n = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, i, l, s, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = r(0), o.throw = r(1), o.return = r(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function r(u) {
    return function(c) {
      return a([u, c]);
    };
  }
  function a(u) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, u[0] && (n = 0)), n; ) try {
      if (i = 1, l && (s = u[0] & 2 ? l.return : u[0] ? l.throw || ((s = l.return) && s.call(l), 0) : l.next) && !(s = s.call(l, u[1])).done) return s;
      switch (l = 0, s && (u = [u[0] & 2, s.value]), u[0]) {
        case 0:
        case 1:
          s = u;
          break;
        case 4:
          return n.label++, { value: u[1], done: !1 };
        case 5:
          n.label++, l = u[1], u = [0];
          continue;
        case 7:
          u = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (s = n.trys, !(s = s.length > 0 && s[s.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            n = 0;
            continue;
          }
          if (u[0] === 3 && (!s || u[1] > s[0] && u[1] < s[3])) {
            n.label = u[1];
            break;
          }
          if (u[0] === 6 && n.label < s[1]) {
            n.label = s[1], s = u;
            break;
          }
          if (s && n.label < s[2]) {
            n.label = s[2], n.ops.push(u);
            break;
          }
          s[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      u = e.call(t, n);
    } catch (c) {
      u = [6, c], l = 0;
    } finally {
      i = s = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function Tt(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], i = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && i >= t.length && (t = void 0), { value: t && t[i++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var gt = (
  /** @class */
  function() {
    function t(e) {
      e === void 0 && (e = {}), this.adapter = e;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.init = function() {
    }, t.prototype.destroy = function() {
    }, t;
  }()
);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function Hr(t) {
  return t === void 0 && (t = window), Mr(t) ? { passive: !0 } : !1;
}
function Mr(t) {
  t === void 0 && (t = window);
  var e = !1;
  try {
    var n = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        return e = !0, !1;
      }
    }, i = function() {
    };
    t.document.addEventListener("test", i, n), t.document.removeEventListener("test", i, n);
  } catch {
    e = !1;
  }
  return e;
}
const Fl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Hr
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function $r(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (zl(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function zl(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function Nr(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var i = n.scrollWidth;
  return document.documentElement.removeChild(n), i;
}
const Vl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: $r,
  estimateScrollWidth: Nr,
  matches: zl
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Br = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Ur = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, ui = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
}, ln;
function Pr(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, i = ln;
  if (typeof ln == "boolean" && !e)
    return ln;
  var l = n && typeof n.supports == "function";
  if (!l)
    return !1;
  var s = n.supports("--css-vars", "yes"), o = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return i = s || o, e || (ln = i), i;
}
function Fr(t, e, n) {
  if (!t)
    return { x: 0, y: 0 };
  var i = e.x, l = e.y, s = i + n.left, o = l + n.top, r, a;
  if (t.type === "touchstart") {
    var u = t;
    r = u.changedTouches[0].pageX - s, a = u.changedTouches[0].pageY - o;
  } else {
    var c = t;
    r = c.pageX - s, a = c.pageY - o;
  }
  return { x: r, y: a };
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ci = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], fi = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], sn = [], zr = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var i = t.call(this, $e($e({}, e.defaultAdapter), n)) || this;
      return i.activationAnimationHasEnded = !1, i.activationTimer = 0, i.fgDeactivationRemovalTimer = 0, i.fgScale = "0", i.frame = { width: 0, height: 0 }, i.initialSize = 0, i.layoutFrame = 0, i.maxRadius = 0, i.unboundedCoords = { left: 0, top: 0 }, i.activationState = i.defaultActivationState(), i.activationTimerCallback = function() {
        i.activationAnimationHasEnded = !0, i.runDeactivationUXLogicIfReady();
      }, i.activateHandler = function(l) {
        i.activateImpl(l);
      }, i.deactivateHandler = function() {
        i.deactivateImpl();
      }, i.focusHandler = function() {
        i.handleFocus();
      }, i.blurHandler = function() {
        i.handleBlur();
      }, i.resizeHandler = function() {
        i.layout();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Br;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ur;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ui;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          browserSupportsCssVars: function() {
            return !0;
          },
          computeBoundingRect: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          containsEventTarget: function() {
            return !0;
          },
          deregisterDocumentInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          },
          deregisterResizeHandler: function() {
          },
          getWindowPageOffset: function() {
            return { x: 0, y: 0 };
          },
          isSurfaceActive: function() {
            return !0;
          },
          isSurfaceDisabled: function() {
            return !0;
          },
          isUnbounded: function() {
            return !0;
          },
          registerDocumentInteractionHandler: function() {
          },
          registerInteractionHandler: function() {
          },
          registerResizeHandler: function() {
          },
          removeClass: function() {
          },
          updateCssVariable: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n = this, i = this.supportsPressRipple();
      if (this.registerRootHandlers(i), i) {
        var l = e.cssClasses, s = l.ROOT, o = l.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.addClass(s), n.adapter.isUnbounded() && (n.adapter.addClass(o), n.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var n = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var i = e.cssClasses, l = i.ROOT, s = i.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.removeClass(l), n.adapter.removeClass(s), n.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, e.prototype.activate = function(n) {
      this.activateImpl(n);
    }, e.prototype.deactivate = function() {
      this.deactivateImpl();
    }, e.prototype.layout = function() {
      var n = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        n.layoutInternal(), n.layoutFrame = 0;
      });
    }, e.prototype.setUnbounded = function(n) {
      var i = e.cssClasses.UNBOUNDED;
      n ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.handleFocus = function() {
      var n = this;
      requestAnimationFrame(function() {
        return n.adapter.addClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.handleBlur = function() {
      var n = this;
      requestAnimationFrame(function() {
        return n.adapter.removeClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.supportsPressRipple = function() {
      return this.adapter.browserSupportsCssVars();
    }, e.prototype.defaultActivationState = function() {
      return {
        activationEvent: void 0,
        hasDeactivationUXRun: !1,
        isActivated: !1,
        isProgrammatic: !1,
        wasActivatedByPointer: !1,
        wasElementMadeActive: !1
      };
    }, e.prototype.registerRootHandlers = function(n) {
      var i, l;
      if (n) {
        try {
          for (var s = Tt(ci), o = s.next(); !o.done; o = s.next()) {
            var r = o.value;
            this.adapter.registerInteractionHandler(r, this.activateHandler);
          }
        } catch (a) {
          i = { error: a };
        } finally {
          try {
            o && !o.done && (l = s.return) && l.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(n) {
      var i, l;
      if (n.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var s = Tt(fi), o = s.next(); !o.done; o = s.next()) {
            var r = o.value;
            this.adapter.registerDocumentInteractionHandler(r, this.deactivateHandler);
          }
        } catch (a) {
          i = { error: a };
        } finally {
          try {
            o && !o.done && (l = s.return) && l.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var n, i;
      try {
        for (var l = Tt(ci), s = l.next(); !s.done; s = l.next()) {
          var o = s.value;
          this.adapter.deregisterInteractionHandler(o, this.activateHandler);
        }
      } catch (r) {
        n = { error: r };
      } finally {
        try {
          s && !s.done && (i = l.return) && i.call(l);
        } finally {
          if (n) throw n.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var n, i;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var l = Tt(fi), s = l.next(); !s.done; s = l.next()) {
          var o = s.value;
          this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler);
        }
      } catch (r) {
        n = { error: r };
      } finally {
        try {
          s && !s.done && (i = l.return) && i.call(l);
        } finally {
          if (n) throw n.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var n = this, i = e.strings, l = Object.keys(i);
      l.forEach(function(s) {
        s.indexOf("VAR_") === 0 && n.adapter.updateCssVariable(i[s], null);
      });
    }, e.prototype.activateImpl = function(n) {
      var i = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var l = this.activationState;
        if (!l.isActivated) {
          var s = this.previousActivationEvent, o = s && n !== void 0 && s.type !== n.type;
          if (!o) {
            l.isActivated = !0, l.isProgrammatic = n === void 0, l.activationEvent = n, l.wasActivatedByPointer = l.isProgrammatic ? !1 : n !== void 0 && (n.type === "mousedown" || n.type === "touchstart" || n.type === "pointerdown");
            var r = n !== void 0 && sn.length > 0 && sn.some(function(a) {
              return i.adapter.containsEventTarget(a);
            });
            if (r) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (sn.push(n.target), this.registerDeactivationHandlers(n)), l.wasElementMadeActive = this.checkElementMadeActive(n), l.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              sn = [], !l.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (l.wasElementMadeActive = i.checkElementMadeActive(n), l.wasElementMadeActive && i.animateActivation()), l.wasElementMadeActive || (i.activationState = i.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(n) {
      return n !== void 0 && n.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var n = this, i = e.strings, l = i.VAR_FG_TRANSLATE_START, s = i.VAR_FG_TRANSLATE_END, o = e.cssClasses, r = o.FG_DEACTIVATION, a = o.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var c = "", f = "";
      if (!this.adapter.isUnbounded()) {
        var d = this.getFgTranslationCoordinates(), m = d.startPoint, h = d.endPoint;
        c = m.x + "px, " + m.y + "px", f = h.x + "px, " + h.y + "px";
      }
      this.adapter.updateCssVariable(l, c), this.adapter.updateCssVariable(s, f), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(r), this.adapter.computeBoundingRect(), this.adapter.addClass(a), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, i = n.activationEvent, l = n.wasActivatedByPointer, s;
      l ? s = Fr(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : s = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, s = {
        x: s.x - this.initialSize / 2,
        y: s.y - this.initialSize / 2
      };
      var o = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: s, endPoint: o };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var n = this, i = e.cssClasses.FG_DEACTIVATION, l = this.activationState, s = l.hasDeactivationUXRun, o = l.isActivated, r = s || !o;
      r && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(i), this.fgDeactivationRemovalTimer = setTimeout(function() {
        n.adapter.removeClass(i);
      }, ui.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var n = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(n), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var n = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return n.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var n = this, i = this.activationState;
      if (i.isActivated) {
        var l = $e({}, i);
        i.isProgrammatic ? (requestAnimationFrame(function() {
          n.animateDeactivation(l);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          n.activationState.hasDeactivationUXRun = !0, n.animateDeactivation(l), n.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(n) {
      var i = n.wasActivatedByPointer, l = n.wasElementMadeActive;
      (i || l) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var n = this;
      this.frame = this.adapter.computeBoundingRect();
      var i = Math.max(this.frame.height, this.frame.width), l = function() {
        var o = Math.sqrt(Math.pow(n.frame.width, 2) + Math.pow(n.frame.height, 2));
        return o + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? i : l();
      var s = Math.floor(i * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && s % 2 !== 0 ? this.initialSize = s - 1 : this.initialSize = s, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var n = e.strings, i = n.VAR_FG_SIZE, l = n.VAR_LEFT, s = n.VAR_TOP, o = n.VAR_FG_SCALE;
      this.adapter.updateCssVariable(i, this.initialSize + "px"), this.adapter.updateCssVariable(o, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(l, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(s, this.unboundedCoords.top + "px"));
    }, e;
  }(gt)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var rn = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, bt = {
  ARIA_LABEL: "aria-label",
  ARIA_PRESSED: "aria-pressed",
  DATA_ARIA_LABEL_OFF: "data-aria-label-off",
  DATA_ARIA_LABEL_ON: "data-aria-label-on",
  CHANGE_EVENT: "MDCIconButtonToggle:change"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Vr = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var i = t.call(this, $e($e({}, e.defaultAdapter), n)) || this;
      return i.hasToggledAriaLabel = !1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return rn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return bt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          notifyChange: function() {
          },
          removeClass: function() {
          },
          getAttr: function() {
            return null;
          },
          setAttr: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n = this.adapter.getAttr(bt.DATA_ARIA_LABEL_ON), i = this.adapter.getAttr(bt.DATA_ARIA_LABEL_OFF);
      if (n && i) {
        if (this.adapter.getAttr(bt.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(bt.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(rn.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(rn.ICON_BUTTON_ON) : this.adapter.removeClass(rn.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var i = n ? this.adapter.getAttr(bt.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(bt.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(bt.ARIA_LABEL, i || "");
      } else
        this.adapter.setAttr(bt.ARIA_PRESSED, "" + n);
    }, e;
  }(gt)
);
function Y(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function Ae(t, e, n, i = { bubbles: !0 }, l = !1) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!t)
    throw new Error("Tried to dipatch event without element.");
  const s = new CustomEvent(e, Object.assign(Object.assign({}, i), { detail: n }));
  if (t == null || t.dispatchEvent(s), l && e.startsWith("SMUI")) {
    const o = new CustomEvent(e.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, i), { detail: n }));
    t == null || t.dispatchEvent(o), o.defaultPrevented && s.preventDefault();
  }
  return s;
}
function pt(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const i = {};
  for (let l = 0; l < n.length; l++) {
    const s = n[l], o = s.indexOf("$");
    o !== -1 && e.indexOf(s.substring(0, o + 1)) !== -1 || e.indexOf(s) === -1 && (i[s] = t[s]);
  }
  return i;
}
const di = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, qr = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function Me(t) {
  let e, n = [];
  t.$on = (l, s) => {
    let o = l, r = () => {
    };
    return e ? r = e(o, s) : n.push([o, s]), o.match(di) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', o), () => {
      r();
    };
  };
  function i(l) {
    const s = t.$$.callbacks[l.type];
    s && s.slice().forEach((o) => o.call(this, l));
  }
  return (l) => {
    const s = [], o = {};
    e = (r, a) => {
      let u = r, c = a, f = !1;
      const d = u.match(di), m = u.match(qr), h = d || m;
      if (u.match(/^SMUI:\w+:/)) {
        const E = u.split(":");
        let S = "";
        for (let M = 0; M < E.length; M++)
          S += M === E.length - 1 ? ":" + E[M] : E[M].split("-").map((A) => A.slice(0, 1).toUpperCase() + A.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${S.split("$")[0]}.`), u = S;
      }
      if (h) {
        const E = u.split(d ? ":" : "$");
        u = E[0];
        const S = E.slice(1).reduce((M, A) => (M[A] = !0, M), {});
        S.passive && (f = f || {}, f.passive = !0), S.nonpassive && (f = f || {}, f.passive = !1), S.capture && (f = f || {}, f.capture = !0), S.once && (f = f || {}, f.once = !0), S.preventDefault && (c = jr(c)), S.stopPropagation && (c = Zr(c)), S.stopImmediatePropagation && (c = Gr(c)), S.self && (c = Kr(l, c)), S.trusted && (c = Wr(c));
      }
      const _ = mi(l, u, c, f), p = () => {
        _();
        const E = s.indexOf(p);
        E > -1 && s.splice(E, 1);
      };
      return s.push(p), u in o || (o[u] = mi(l, u, i)), p;
    };
    for (let r = 0; r < n.length; r++)
      e(n[r][0], n[r][1]);
    return {
      destroy: () => {
        for (let r = 0; r < s.length; r++)
          s[r]();
        for (let r of Object.entries(o))
          r[1]();
      }
    };
  };
}
function mi(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function jr(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function Zr(t) {
  return function(e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function Gr(t) {
  return function(e) {
    return e.stopImmediatePropagation(), t.call(this, e);
  };
}
function Kr(t, e) {
  return function(n) {
    if (n.target === t)
      return e.call(this, n);
  };
}
function Wr(t) {
  return function(e) {
    if (e.isTrusted)
      return t.call(this, e);
  };
}
function Ne(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const i = {};
  for (let l = 0; l < n.length; l++) {
    const s = n[l];
    s.substring(0, e.length) === e && (i[s.substring(e.length)] = t[s]);
  }
  return i;
}
function De(t, e) {
  let n = [];
  if (e)
    for (let i = 0; i < e.length; i++) {
      const l = e[i], s = Array.isArray(l) ? l[0] : l;
      Array.isArray(l) && l.length > 1 ? n.push(s(t, l[1])) : n.push(s(t));
    }
  return {
    update(i) {
      if ((i && i.length || 0) != n.length)
        throw new Error("You must not change the length of an actions array.");
      if (i)
        for (let l = 0; l < i.length; l++) {
          const s = n[l];
          if (s && s.update) {
            const o = i[l];
            Array.isArray(o) && o.length > 1 ? s.update(o[1]) : s.update();
          }
        }
    },
    destroy() {
      for (let i = 0; i < n.length; i++) {
        const l = n[i];
        l && l.destroy && l.destroy();
      }
    }
  };
}
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Dn = "mdc-dom-focus-sentinel", Xr = (
  /** @class */
  function() {
    function t(e, n) {
      n === void 0 && (n = {}), this.root = e, this.options = n, this.elFocusedBeforeTrapFocus = null;
    }
    return t.prototype.trapFocus = function() {
      var e = this.getFocusableElements(this.root);
      if (e.length === 0)
        throw new Error("FocusTrap: Element must have at least one focusable child.");
      this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null, this.wrapTabFocus(this.root), this.options.skipInitialFocus || this.focusInitialElement(e, this.options.initialFocusEl);
    }, t.prototype.releaseFocus = function() {
      [].slice.call(this.root.querySelectorAll("." + Dn)).forEach(function(e) {
        e.parentElement.removeChild(e);
      }), !this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus && this.elFocusedBeforeTrapFocus.focus();
    }, t.prototype.wrapTabFocus = function(e) {
      var n = this, i = this.createSentinel(), l = this.createSentinel();
      i.addEventListener("focus", function() {
        var s = n.getFocusableElements(e);
        s.length > 0 && s[s.length - 1].focus();
      }), l.addEventListener("focus", function() {
        var s = n.getFocusableElements(e);
        s.length > 0 && s[0].focus();
      }), e.insertBefore(i, e.children[0]), e.appendChild(l);
    }, t.prototype.focusInitialElement = function(e, n) {
      var i = 0;
      n && (i = Math.max(e.indexOf(n), 0)), e[i].focus();
    }, t.prototype.getFocusableElements = function(e) {
      var n = [].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));
      return n.filter(function(i) {
        var l = i.getAttribute("aria-disabled") === "true" || i.getAttribute("disabled") != null || i.getAttribute("hidden") != null || i.getAttribute("aria-hidden") === "true", s = i.tabIndex >= 0 && i.getBoundingClientRect().width > 0 && !i.classList.contains(Dn) && !l, o = !1;
        if (s) {
          var r = getComputedStyle(i);
          o = r.display === "none" || r.visibility === "hidden";
        }
        return s && !o;
      });
    }, t.prototype.createSentinel = function() {
      var e = document.createElement("div");
      return e.setAttribute("tabindex", "0"), e.setAttribute("aria-hidden", "true"), e.classList.add(Dn), e;
    }, t;
  }()
);
const Qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: Xr
}, Symbol.toStringTag, { value: "Module" })), { applyPassive: an } = Fl, { matches: Yr } = Vl;
function yt(t, { ripple: e = !0, surface: n = !1, unbounded: i = !1, disabled: l = !1, color: s, active: o, rippleElement: r, eventTarget: a, activeTarget: u, addClass: c = (h) => t.classList.add(h), removeClass: f = (h) => t.classList.remove(h), addStyle: d = (h, _) => t.style.setProperty(h, _), initPromise: m = Promise.resolve() } = {}) {
  let h, _ = Ue("SMUI:addLayoutListener"), p, E = o, S = a, M = u;
  function A() {
    n ? (c("mdc-ripple-surface"), s === "primary" ? (c("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : s === "secondary" ? (f("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary"))) : (f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), h && E !== o && (E = o, o ? h.activate() : o === !1 && h.deactivate()), e && !h ? (h = new zr({
      addClass: c,
      browserSupportsCssVars: () => Pr(window),
      computeBoundingRect: () => (r || t).getBoundingClientRect(),
      containsEventTarget: (I) => t.contains(I),
      deregisterDocumentInteractionHandler: (I, g) => document.documentElement.removeEventListener(I, g, an()),
      deregisterInteractionHandler: (I, g) => (a || t).removeEventListener(I, g, an()),
      deregisterResizeHandler: (I) => window.removeEventListener("resize", I),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => o ?? Yr(u || t, ":active"),
      isSurfaceDisabled: () => !!l,
      isUnbounded: () => !!i,
      registerDocumentInteractionHandler: (I, g) => document.documentElement.addEventListener(I, g, an()),
      registerInteractionHandler: (I, g) => (a || t).addEventListener(I, g, an()),
      registerResizeHandler: (I) => window.addEventListener("resize", I),
      removeClass: f,
      updateCssVariable: d
    }), m.then(() => {
      h && (h.init(), h.setUnbounded(i));
    })) : h && !e && m.then(() => {
      h && (h.destroy(), h = void 0);
    }), h && (S !== a || M !== u) && (S = a, M = u, h.destroy(), requestAnimationFrame(() => {
      h && (h.init(), h.setUnbounded(i));
    })), !e && i && c("mdc-ripple-upgraded--unbounded");
  }
  A(), _ && (p = _(v));
  function v() {
    h && h.layout();
  }
  return {
    update(I) {
      ({
        ripple: e,
        surface: n,
        unbounded: i,
        disabled: l,
        color: s,
        active: o,
        rippleElement: r,
        eventTarget: a,
        activeTarget: u,
        addClass: c,
        removeClass: f,
        addStyle: d,
        initPromise: m
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (g) => t.classList.add(g), removeClass: (g) => t.classList.remove(g), addStyle: (g, T) => t.style.setProperty(g, T), initPromise: Promise.resolve() }, I)), A();
    },
    destroy() {
      h && (h.destroy(), h = void 0, f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), p && p();
    }
  };
}
function Jr(t) {
  let e;
  const n = (
    /*#slots*/
    t[10].default
  ), i = fe(
    n,
    t,
    /*$$scope*/
    t[12],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(l, s) {
      i && i.m(l, s), e = !0;
    },
    p(l, s) {
      i && i.p && (!e || s & /*$$scope*/
      4096) && me(
        i,
        n,
        l,
        /*$$scope*/
        l[12],
        e ? de(
          n,
          /*$$scope*/
          l[12],
          s,
          null
        ) : he(
          /*$$scope*/
          l[12]
        ),
        null
      );
    },
    i(l) {
      e || (b(i, l), e = !0);
    },
    o(l) {
      C(i, l), e = !1;
    },
    d(l) {
      i && i.d(l);
    }
  };
}
function xr(t) {
  let e, n, i;
  const l = [
    { tag: (
      /*tag*/
      t[3]
    ) },
    {
      use: [
        /*forwardEvents*/
        t[5],
        .../*use*/
        t[0]
      ]
    },
    {
      class: Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-button__label": (
          /*context*/
          t[6] === "button"
        ),
        "mdc-fab__label": (
          /*context*/
          t[6] === "fab"
        ),
        "mdc-tab__text-label": (
          /*context*/
          t[6] === "tab"
        ),
        "mdc-image-list__label": (
          /*context*/
          t[6] === "image-list"
        ),
        "mdc-snackbar__label": (
          /*context*/
          t[6] === "snackbar"
        ),
        "mdc-banner__text": (
          /*context*/
          t[6] === "banner"
        ),
        "mdc-segmented-button__label": (
          /*context*/
          t[6] === "segmented-button"
        ),
        "mdc-data-table__pagination-rows-per-page-label": (
          /*context*/
          t[6] === "data-table:pagination"
        ),
        "mdc-data-table__header-cell-label": (
          /*context*/
          t[6] === "data-table:sortable-header-cell"
        )
      })
    },
    /*context*/
    t[6] === "snackbar" ? { "aria-atomic": "false" } : {},
    { tabindex: (
      /*tabindex*/
      t[7]
    ) },
    /*$$restProps*/
    t[8]
  ];
  var s = (
    /*component*/
    t[2]
  );
  function o(r, a) {
    let u = {
      $$slots: { default: [Jr] },
      $$scope: { ctx: r }
    };
    for (let c = 0; c < l.length; c += 1)
      u = F(u, l[c]);
    return a !== void 0 && a & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
    491 && (u = F(u, ne(l, [
      a & /*tag*/
      8 && { tag: (
        /*tag*/
        r[3]
      ) },
      a & /*forwardEvents, use*/
      33 && {
        use: [
          /*forwardEvents*/
          r[5],
          .../*use*/
          r[0]
        ]
      },
      a & /*className, context*/
      66 && {
        class: Y({
          [
            /*className*/
            r[1]
          ]: !0,
          "mdc-button__label": (
            /*context*/
            r[6] === "button"
          ),
          "mdc-fab__label": (
            /*context*/
            r[6] === "fab"
          ),
          "mdc-tab__text-label": (
            /*context*/
            r[6] === "tab"
          ),
          "mdc-image-list__label": (
            /*context*/
            r[6] === "image-list"
          ),
          "mdc-snackbar__label": (
            /*context*/
            r[6] === "snackbar"
          ),
          "mdc-banner__text": (
            /*context*/
            r[6] === "banner"
          ),
          "mdc-segmented-button__label": (
            /*context*/
            r[6] === "segmented-button"
          ),
          "mdc-data-table__pagination-rows-per-page-label": (
            /*context*/
            r[6] === "data-table:pagination"
          ),
          "mdc-data-table__header-cell-label": (
            /*context*/
            r[6] === "data-table:sortable-header-cell"
          )
        })
      },
      a & /*context*/
      64 && pe(
        /*context*/
        r[6] === "snackbar" ? { "aria-atomic": "false" } : {}
      ),
      a & /*tabindex*/
      128 && { tabindex: (
        /*tabindex*/
        r[7]
      ) },
      a & /*$$restProps*/
      256 && pe(
        /*$$restProps*/
        r[8]
      )
    ]))), { props: u };
  }
  return s && (e = Be(s, o(t)), t[11](e)), {
    c() {
      e && P(e.$$.fragment), n = Oe();
    },
    m(r, a) {
      e && B(e, r, a), O(r, n, a), i = !0;
    },
    p(r, [a]) {
      if (a & /*component*/
      4 && s !== (s = /*component*/
      r[2])) {
        if (e) {
          ge();
          const u = e;
          C(u.$$.fragment, 1, 0, () => {
            U(u, 1);
          }), _e();
        }
        s ? (e = Be(s, o(r, a)), r[11](e), P(e.$$.fragment), b(e.$$.fragment, 1), B(e, n.parentNode, n)) : e = null;
      } else if (s) {
        const u = a & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
        491 ? ne(l, [
          a & /*tag*/
          8 && { tag: (
            /*tag*/
            r[3]
          ) },
          a & /*forwardEvents, use*/
          33 && {
            use: [
              /*forwardEvents*/
              r[5],
              .../*use*/
              r[0]
            ]
          },
          a & /*className, context*/
          66 && {
            class: Y({
              [
                /*className*/
                r[1]
              ]: !0,
              "mdc-button__label": (
                /*context*/
                r[6] === "button"
              ),
              "mdc-fab__label": (
                /*context*/
                r[6] === "fab"
              ),
              "mdc-tab__text-label": (
                /*context*/
                r[6] === "tab"
              ),
              "mdc-image-list__label": (
                /*context*/
                r[6] === "image-list"
              ),
              "mdc-snackbar__label": (
                /*context*/
                r[6] === "snackbar"
              ),
              "mdc-banner__text": (
                /*context*/
                r[6] === "banner"
              ),
              "mdc-segmented-button__label": (
                /*context*/
                r[6] === "segmented-button"
              ),
              "mdc-data-table__pagination-rows-per-page-label": (
                /*context*/
                r[6] === "data-table:pagination"
              ),
              "mdc-data-table__header-cell-label": (
                /*context*/
                r[6] === "data-table:sortable-header-cell"
              )
            })
          },
          a & /*context*/
          64 && pe(
            /*context*/
            r[6] === "snackbar" ? { "aria-atomic": "false" } : {}
          ),
          a & /*tabindex*/
          128 && { tabindex: (
            /*tabindex*/
            r[7]
          ) },
          a & /*$$restProps*/
          256 && pe(
            /*$$restProps*/
            r[8]
          )
        ]) : {};
        a & /*$$scope*/
        4096 && (u.$$scope = { dirty: a, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      i || (e && b(e.$$.fragment, r), i = !0);
    },
    o(r) {
      e && C(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && R(n), t[11](null), e && U(e, r);
    }
  };
}
function ea(t, e, n) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let l = se(e, i), { $$slots: s = {}, $$scope: o } = e;
  const r = Me(we());
  let { use: a = [] } = e, { class: u = "" } = e, c, { component: f = Je } = e, { tag: d = f === Je ? "span" : void 0 } = e;
  const m = Ue("SMUI:label:context"), h = Ue("SMUI:label:tabindex");
  function _() {
    return c.getElement();
  }
  function p(E) {
    ie[E ? "unshift" : "push"](() => {
      c = E, n(4, c);
    });
  }
  return t.$$set = (E) => {
    e = F(F({}, e), Re(E)), n(8, l = se(e, i)), "use" in E && n(0, a = E.use), "class" in E && n(1, u = E.class), "component" in E && n(2, f = E.component), "tag" in E && n(3, d = E.tag), "$$scope" in E && n(12, o = E.$$scope);
  }, [
    a,
    u,
    f,
    d,
    c,
    r,
    m,
    h,
    l,
    _,
    s,
    p,
    o
  ];
}
class Xn extends ue {
  constructor(e) {
    super(), ae(this, e, ea, xr, le, {
      use: 0,
      class: 1,
      component: 2,
      tag: 3,
      getElement: 9
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get component() {
    return this.$$.ctx[2];
  }
  set component(e) {
    this.$$set({ component: e }), y();
  }
  get tag() {
    return this.$$.ctx[3];
  }
  set tag(e) {
    this.$$set({ tag: e }), y();
  }
  get getElement() {
    return this.$$.ctx[9];
  }
}
oe(Xn, { use: {}, class: {}, component: {}, tag: {} }, ["default"], ["getElement"], !0);
function ta(t) {
  let e;
  const n = (
    /*#slots*/
    t[11].default
  ), i = fe(
    n,
    t,
    /*$$scope*/
    t[13],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(l, s) {
      i && i.m(l, s), e = !0;
    },
    p(l, s) {
      i && i.p && (!e || s & /*$$scope*/
      8192) && me(
        i,
        n,
        l,
        /*$$scope*/
        l[13],
        e ? de(
          n,
          /*$$scope*/
          l[13],
          s,
          null
        ) : he(
          /*$$scope*/
          l[13]
        ),
        null
      );
    },
    i(l) {
      e || (b(i, l), e = !0);
    },
    o(l) {
      C(i, l), e = !1;
    },
    d(l) {
      i && i.d(l);
    }
  };
}
function na(t) {
  let e, n, i;
  const l = [
    { tag: (
      /*tag*/
      t[4]
    ) },
    {
      use: [
        /*forwardEvents*/
        t[6],
        .../*use*/
        t[0]
      ]
    },
    {
      class: Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-button__icon": (
          /*context*/
          t[8] === "button"
        ),
        "mdc-fab__icon": (
          /*context*/
          t[8] === "fab"
        ),
        "mdc-icon-button__icon": (
          /*context*/
          t[8] === "icon-button"
        ),
        "mdc-icon-button__icon--on": (
          /*context*/
          t[8] === "icon-button" && /*on*/
          t[2]
        ),
        "mdc-tab__icon": (
          /*context*/
          t[8] === "tab"
        ),
        "mdc-banner__icon": (
          /*context*/
          t[8] === "banner"
        ),
        "mdc-segmented-button__icon": (
          /*context*/
          t[8] === "segmented-button"
        )
      })
    },
    { "aria-hidden": "true" },
    /*svg*/
    t[7] ? { focusable: "false", tabindex: "-1" } : {},
    /*$$restProps*/
    t[9]
  ];
  var s = (
    /*component*/
    t[3]
  );
  function o(r, a) {
    let u = {
      $$slots: { default: [ta] },
      $$scope: { ctx: r }
    };
    for (let c = 0; c < l.length; c += 1)
      u = F(u, l[c]);
    return a !== void 0 && a & /*tag, forwardEvents, use, className, context, on, svg, $$restProps*/
    983 && (u = F(u, ne(l, [
      a & /*tag*/
      16 && { tag: (
        /*tag*/
        r[4]
      ) },
      a & /*forwardEvents, use*/
      65 && {
        use: [
          /*forwardEvents*/
          r[6],
          .../*use*/
          r[0]
        ]
      },
      a & /*className, context, on*/
      262 && {
        class: Y({
          [
            /*className*/
            r[1]
          ]: !0,
          "mdc-button__icon": (
            /*context*/
            r[8] === "button"
          ),
          "mdc-fab__icon": (
            /*context*/
            r[8] === "fab"
          ),
          "mdc-icon-button__icon": (
            /*context*/
            r[8] === "icon-button"
          ),
          "mdc-icon-button__icon--on": (
            /*context*/
            r[8] === "icon-button" && /*on*/
            r[2]
          ),
          "mdc-tab__icon": (
            /*context*/
            r[8] === "tab"
          ),
          "mdc-banner__icon": (
            /*context*/
            r[8] === "banner"
          ),
          "mdc-segmented-button__icon": (
            /*context*/
            r[8] === "segmented-button"
          )
        })
      },
      l[3],
      a & /*svg*/
      128 && pe(
        /*svg*/
        r[7] ? { focusable: "false", tabindex: "-1" } : {}
      ),
      a & /*$$restProps*/
      512 && pe(
        /*$$restProps*/
        r[9]
      )
    ]))), { props: u };
  }
  return s && (e = Be(s, o(t)), t[12](e)), {
    c() {
      e && P(e.$$.fragment), n = Oe();
    },
    m(r, a) {
      e && B(e, r, a), O(r, n, a), i = !0;
    },
    p(r, [a]) {
      if (a & /*component*/
      8 && s !== (s = /*component*/
      r[3])) {
        if (e) {
          ge();
          const u = e;
          C(u.$$.fragment, 1, 0, () => {
            U(u, 1);
          }), _e();
        }
        s ? (e = Be(s, o(r, a)), r[12](e), P(e.$$.fragment), b(e.$$.fragment, 1), B(e, n.parentNode, n)) : e = null;
      } else if (s) {
        const u = a & /*tag, forwardEvents, use, className, context, on, svg, $$restProps*/
        983 ? ne(l, [
          a & /*tag*/
          16 && { tag: (
            /*tag*/
            r[4]
          ) },
          a & /*forwardEvents, use*/
          65 && {
            use: [
              /*forwardEvents*/
              r[6],
              .../*use*/
              r[0]
            ]
          },
          a & /*className, context, on*/
          262 && {
            class: Y({
              [
                /*className*/
                r[1]
              ]: !0,
              "mdc-button__icon": (
                /*context*/
                r[8] === "button"
              ),
              "mdc-fab__icon": (
                /*context*/
                r[8] === "fab"
              ),
              "mdc-icon-button__icon": (
                /*context*/
                r[8] === "icon-button"
              ),
              "mdc-icon-button__icon--on": (
                /*context*/
                r[8] === "icon-button" && /*on*/
                r[2]
              ),
              "mdc-tab__icon": (
                /*context*/
                r[8] === "tab"
              ),
              "mdc-banner__icon": (
                /*context*/
                r[8] === "banner"
              ),
              "mdc-segmented-button__icon": (
                /*context*/
                r[8] === "segmented-button"
              )
            })
          },
          l[3],
          a & /*svg*/
          128 && pe(
            /*svg*/
            r[7] ? { focusable: "false", tabindex: "-1" } : {}
          ),
          a & /*$$restProps*/
          512 && pe(
            /*$$restProps*/
            r[9]
          )
        ]) : {};
        a & /*$$scope*/
        8192 && (u.$$scope = { dirty: a, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      i || (e && b(e.$$.fragment, r), i = !0);
    },
    o(r) {
      e && C(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && R(n), t[12](null), e && U(e, r);
    }
  };
}
function ia(t, e, n) {
  const i = ["use", "class", "on", "component", "tag", "getElement"];
  let l = se(e, i), { $$slots: s = {}, $$scope: o } = e;
  const r = Me(we());
  let { use: a = [] } = e, { class: u = "" } = e, { on: c = !1 } = e, f, { component: d = Je } = e, { tag: m = d === Je ? "i" : void 0 } = e;
  const h = d === ql, _ = Ue("SMUI:icon:context");
  function p() {
    return f.getElement();
  }
  function E(S) {
    ie[S ? "unshift" : "push"](() => {
      f = S, n(5, f);
    });
  }
  return t.$$set = (S) => {
    e = F(F({}, e), Re(S)), n(9, l = se(e, i)), "use" in S && n(0, a = S.use), "class" in S && n(1, u = S.class), "on" in S && n(2, c = S.on), "component" in S && n(3, d = S.component), "tag" in S && n(4, m = S.tag), "$$scope" in S && n(13, o = S.$$scope);
  }, [
    a,
    u,
    c,
    d,
    m,
    f,
    r,
    h,
    _,
    l,
    p,
    s,
    E,
    o
  ];
}
class la extends ue {
  constructor(e) {
    super(), ae(this, e, ia, na, le, {
      use: 0,
      class: 1,
      on: 2,
      component: 3,
      tag: 4,
      getElement: 10
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get on() {
    return this.$$.ctx[2];
  }
  set on(e) {
    this.$$set({ on: e }), y();
  }
  get component() {
    return this.$$.ctx[3];
  }
  set component(e) {
    this.$$set({ component: e }), y();
  }
  get tag() {
    return this.$$.ctx[4];
  }
  set tag(e) {
    this.$$set({ tag: e }), y();
  }
  get getElement() {
    return this.$$.ctx[10];
  }
}
oe(la, { use: {}, class: {}, on: { type: "Boolean" }, component: {}, tag: {} }, ["default"], ["getElement"], !0);
function sa(t) {
  let e = (
    /*tag*/
    t[1]
  ), n, i, l = (
    /*tag*/
    t[1] && Rn(t)
  );
  return {
    c() {
      l && l.c(), n = Oe();
    },
    m(s, o) {
      l && l.m(s, o), O(s, n, o), i = !0;
    },
    p(s, o) {
      /*tag*/
      s[1] ? e ? le(
        e,
        /*tag*/
        s[1]
      ) ? (l.d(1), l = Rn(s), e = /*tag*/
      s[1], l.c(), l.m(n.parentNode, n)) : l.p(s, o) : (l = Rn(s), e = /*tag*/
      s[1], l.c(), l.m(n.parentNode, n)) : e && (l.d(1), l = null, e = /*tag*/
      s[1]);
    },
    i(s) {
      i || (b(l, s), i = !0);
    },
    o(s) {
      C(l, s), i = !1;
    },
    d(s) {
      s && R(n), l && l.d(s);
    }
  };
}
function ra(t) {
  let e = (
    /*tag*/
    t[1]
  ), n, i = (
    /*tag*/
    t[1] && On(t)
  );
  return {
    c() {
      i && i.c(), n = Oe();
    },
    m(l, s) {
      i && i.m(l, s), O(l, n, s);
    },
    p(l, s) {
      /*tag*/
      l[1] ? e ? le(
        e,
        /*tag*/
        l[1]
      ) ? (i.d(1), i = On(l), e = /*tag*/
      l[1], i.c(), i.m(n.parentNode, n)) : i.p(l, s) : (i = On(l), e = /*tag*/
      l[1], i.c(), i.m(n.parentNode, n)) : e && (i.d(1), i = null, e = /*tag*/
      l[1]);
    },
    i: re,
    o: re,
    d(l) {
      l && R(n), i && i.d(l);
    }
  };
}
function aa(t) {
  let e, n, i, l, s;
  const o = (
    /*#slots*/
    t[8].default
  ), r = fe(
    o,
    t,
    /*$$scope*/
    t[7],
    null
  );
  let a = [
    /*$$restProps*/
    t[5]
  ], u = {};
  for (let c = 0; c < a.length; c += 1)
    u = F(u, a[c]);
  return {
    c() {
      e = Ct("svg"), r && r.c(), hn(e, u);
    },
    m(c, f) {
      O(c, e, f), r && r.m(e, null), t[9](e), i = !0, l || (s = [
        ee(n = De.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        ee(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], l = !0);
    },
    p(c, f) {
      r && r.p && (!i || f & /*$$scope*/
      128) && me(
        r,
        o,
        c,
        /*$$scope*/
        c[7],
        i ? de(
          o,
          /*$$scope*/
          c[7],
          f,
          null
        ) : he(
          /*$$scope*/
          c[7]
        ),
        null
      ), hn(e, u = ne(a, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), n && Ce(n.update) && f & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (b(r, c), i = !0);
    },
    o(c) {
      C(r, c), i = !1;
    },
    d(c) {
      c && R(e), r && r.d(c), t[9](null), l = !1, Te(s);
    }
  };
}
function Rn(t) {
  let e, n, i, l, s;
  const o = (
    /*#slots*/
    t[8].default
  ), r = fe(
    o,
    t,
    /*$$scope*/
    t[7],
    null
  );
  let a = [
    /*$$restProps*/
    t[5]
  ], u = {};
  for (let c = 0; c < a.length; c += 1)
    u = F(u, a[c]);
  return {
    c() {
      e = V(
        /*tag*/
        t[1]
      ), r && r.c(), pn(
        /*tag*/
        t[1]
      )(e, u);
    },
    m(c, f) {
      O(c, e, f), r && r.m(e, null), t[11](e), i = !0, l || (s = [
        ee(n = De.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        ee(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], l = !0);
    },
    p(c, f) {
      r && r.p && (!i || f & /*$$scope*/
      128) && me(
        r,
        o,
        c,
        /*$$scope*/
        c[7],
        i ? de(
          o,
          /*$$scope*/
          c[7],
          f,
          null
        ) : he(
          /*$$scope*/
          c[7]
        ),
        null
      ), pn(
        /*tag*/
        c[1]
      )(e, u = ne(a, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), n && Ce(n.update) && f & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (b(r, c), i = !0);
    },
    o(c) {
      C(r, c), i = !1;
    },
    d(c) {
      c && R(e), r && r.d(c), t[11](null), l = !1, Te(s);
    }
  };
}
function On(t) {
  let e, n, i, l, s = [
    /*$$restProps*/
    t[5]
  ], o = {};
  for (let r = 0; r < s.length; r += 1)
    o = F(o, s[r]);
  return {
    c() {
      e = V(
        /*tag*/
        t[1]
      ), pn(
        /*tag*/
        t[1]
      )(e, o);
    },
    m(r, a) {
      O(r, e, a), t[10](e), i || (l = [
        ee(n = De.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        ee(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], i = !0);
    },
    p(r, a) {
      pn(
        /*tag*/
        r[1]
      )(e, o = ne(s, [a & /*$$restProps*/
      32 && /*$$restProps*/
      r[5]])), n && Ce(n.update) && a & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        r[0]
      );
    },
    d(r) {
      r && R(e), t[10](null), i = !1, Te(l);
    }
  };
}
function oa(t) {
  let e, n, i, l;
  const s = [aa, ra, sa], o = [];
  function r(a, u) {
    return (
      /*tag*/
      a[1] === "svg" ? 0 : (
        /*selfClosing*/
        a[3] ? 1 : 2
      )
    );
  }
  return e = r(t), n = o[e] = s[e](t), {
    c() {
      n.c(), i = Oe();
    },
    m(a, u) {
      o[e].m(a, u), O(a, i, u), l = !0;
    },
    p(a, [u]) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, u) : (ge(), C(o[c], 1, 1, () => {
        o[c] = null;
      }), _e(), n = o[e], n ? n.p(a, u) : (n = o[e] = s[e](a), n.c()), b(n, 1), n.m(i.parentNode, i));
    },
    i(a) {
      l || (b(n), l = !0);
    },
    o(a) {
      C(n), l = !1;
    },
    d(a) {
      a && R(i), o[e].d(a);
    }
  };
}
function ua(t, e, n) {
  let i;
  const l = ["use", "tag", "getElement"];
  let s = se(e, l), { $$slots: o = {}, $$scope: r } = e, { use: a = [] } = e, { tag: u } = e;
  const c = Me(we());
  let f;
  function d() {
    return f;
  }
  function m(p) {
    ie[p ? "unshift" : "push"](() => {
      f = p, n(2, f);
    });
  }
  function h(p) {
    ie[p ? "unshift" : "push"](() => {
      f = p, n(2, f);
    });
  }
  function _(p) {
    ie[p ? "unshift" : "push"](() => {
      f = p, n(2, f);
    });
  }
  return t.$$set = (p) => {
    e = F(F({}, e), Re(p)), n(5, s = se(e, l)), "use" in p && n(0, a = p.use), "tag" in p && n(1, u = p.tag), "$$scope" in p && n(7, r = p.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*tag*/
    2 && n(3, i = [
      "area",
      "base",
      "br",
      "col",
      "embed",
      "hr",
      "img",
      "input",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr"
    ].indexOf(u) > -1);
  }, [
    a,
    u,
    f,
    i,
    c,
    s,
    d,
    r,
    o,
    m,
    h,
    _
  ];
}
class Je extends ue {
  constructor(e) {
    super(), ae(this, e, ua, oa, le, { use: 0, tag: 1, getElement: 6 });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get tag() {
    return this.$$.ctx[1];
  }
  set tag(e) {
    this.$$set({ tag: e }), y();
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
oe(Je, { use: {}, tag: {} }, ["default"], ["getElement"], !0);
function ca(t) {
  let e, n, i, l, s;
  const o = (
    /*#slots*/
    t[6].default
  ), r = fe(
    o,
    t,
    /*$$scope*/
    t[5],
    null
  );
  let a = [
    /*$$restProps*/
    t[3]
  ], u = {};
  for (let c = 0; c < a.length; c += 1)
    u = F(u, a[c]);
  return {
    c() {
      e = Ct("svg"), r && r.c(), hn(e, u);
    },
    m(c, f) {
      O(c, e, f), r && r.m(e, null), t[7](e), i = !0, l || (s = [
        ee(n = De.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        ee(
          /*forwardEvents*/
          t[2].call(null, e)
        )
      ], l = !0);
    },
    p(c, [f]) {
      r && r.p && (!i || f & /*$$scope*/
      32) && me(
        r,
        o,
        c,
        /*$$scope*/
        c[5],
        i ? de(
          o,
          /*$$scope*/
          c[5],
          f,
          null
        ) : he(
          /*$$scope*/
          c[5]
        ),
        null
      ), hn(e, u = ne(a, [f & /*$$restProps*/
      8 && /*$$restProps*/
      c[3]])), n && Ce(n.update) && f & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (b(r, c), i = !0);
    },
    o(c) {
      C(r, c), i = !1;
    },
    d(c) {
      c && R(e), r && r.d(c), t[7](null), l = !1, Te(s);
    }
  };
}
function fa(t, e, n) {
  const i = ["use", "getElement"];
  let l = se(e, i), { $$slots: s = {}, $$scope: o } = e;
  console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let { use: r = [] } = e;
  const a = Me(we());
  let u;
  function c() {
    return u;
  }
  function f(d) {
    ie[d ? "unshift" : "push"](() => {
      u = d, n(1, u);
    });
  }
  return t.$$set = (d) => {
    e = F(F({}, e), Re(d)), n(3, l = se(e, i)), "use" in d && n(0, r = d.use), "$$scope" in d && n(5, o = d.$$scope);
  }, [
    r,
    u,
    a,
    l,
    c,
    o,
    s,
    f
  ];
}
class ql extends ue {
  constructor(e) {
    super(), ae(this, e, fa, ca, le, { use: 0, getElement: 4 });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
oe(ql, { use: {} }, ["default"], ["getElement"], !0);
const Bt = [];
function Qn(t, e) {
  return {
    subscribe: lt(t, e).subscribe
  };
}
function lt(t, e = re) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function l(r) {
    if (le(t, r) && (t = r, n)) {
      const a = !Bt.length;
      for (const u of i)
        u[1](), Bt.push(u, t);
      if (a) {
        for (let u = 0; u < Bt.length; u += 2)
          Bt[u][0](Bt[u + 1]);
        Bt.length = 0;
      }
    }
  }
  function s(r) {
    l(r(t));
  }
  function o(r, a = re) {
    const u = [r, a];
    return i.add(u), i.size === 1 && (n = e(l, s) || re), r(t), () => {
      i.delete(u), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: l, update: s, subscribe: o };
}
function jl(t, e, n) {
  const i = !Array.isArray(t), l = i ? [t] : t;
  if (!l.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const s = e.length < 2;
  return Qn(n, (o, r) => {
    let a = !1;
    const u = [];
    let c = 0, f = re;
    const d = () => {
      if (c)
        return;
      f();
      const h = e(i ? u[0] : u, o, r);
      s ? o(h) : f = Ce(h) ? h : re;
    }, m = l.map(
      (h, _) => bn(
        h,
        (p) => {
          u[_] = p, c &= ~(1 << _), a && d();
        },
        () => {
          c |= 1 << _;
        }
      )
    );
    return a = !0, d(), function() {
      Te(m), f(), a = !1;
    };
  });
}
function da(t) {
  let e;
  const n = (
    /*#slots*/
    t[4].default
  ), i = fe(
    n,
    t,
    /*$$scope*/
    t[3],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(l, s) {
      i && i.m(l, s), e = !0;
    },
    p(l, [s]) {
      i && i.p && (!e || s & /*$$scope*/
      8) && me(
        i,
        n,
        l,
        /*$$scope*/
        l[3],
        e ? de(
          n,
          /*$$scope*/
          l[3],
          s,
          null
        ) : he(
          /*$$scope*/
          l[3]
        ),
        null
      );
    },
    i(l) {
      e || (b(i, l), e = !0);
    },
    o(l) {
      C(i, l), e = !1;
    },
    d(l) {
      i && i.d(l);
    }
  };
}
function ma(t, e, n) {
  let i, { $$slots: l = {}, $$scope: s } = e, { key: o } = e, { value: r } = e;
  const a = lt(r);
  return wt(t, a, (u) => n(5, i = u)), He(o, a), St(() => {
    a.set(void 0);
  }), t.$$set = (u) => {
    "key" in u && n(1, o = u.key), "value" in u && n(2, r = u.value), "$$scope" in u && n(3, s = u.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*value*/
    4 && Bn(a, i = r, i);
  }, [a, o, r, s, l];
}
class Xt extends ue {
  constructor(e) {
    super(), ae(this, e, ma, da, le, { key: 1, value: 2 });
  }
  get key() {
    return this.$$.ctx[1];
  }
  set key(e) {
    this.$$set({ key: e }), y();
  }
  get value() {
    return this.$$.ctx[2];
  }
  set value(e) {
    this.$$set({ value: e }), y();
  }
}
oe(Xt, { key: {}, value: {} }, ["default"], [], !0);
function hi(t) {
  let e;
  return {
    c() {
      e = V("div"), N(e, "class", "mdc-icon-button__touch");
    },
    m(n, i) {
      O(n, e, i);
    },
    d(n) {
      n && R(e);
    }
  };
}
function ha(t) {
  let e, n, i, l;
  const s = (
    /*#slots*/
    t[33].default
  ), o = fe(
    s,
    t,
    /*$$scope*/
    t[37],
    null
  );
  let r = (
    /*touch*/
    t[8] && hi()
  );
  return {
    c() {
      e = V("div"), n = K(), o && o.c(), r && r.c(), i = Oe(), N(e, "class", "mdc-icon-button__ripple");
    },
    m(a, u) {
      O(a, e, u), O(a, n, u), o && o.m(a, u), r && r.m(a, u), O(a, i, u), l = !0;
    },
    p(a, u) {
      o && o.p && (!l || u[1] & /*$$scope*/
      64) && me(
        o,
        s,
        a,
        /*$$scope*/
        a[37],
        l ? de(
          s,
          /*$$scope*/
          a[37],
          u,
          null
        ) : he(
          /*$$scope*/
          a[37]
        ),
        null
      ), /*touch*/
      a[8] ? r || (r = hi(), r.c(), r.m(i.parentNode, i)) : r && (r.d(1), r = null);
    },
    i(a) {
      l || (b(o, a), l = !0);
    },
    o(a) {
      C(o, a), l = !1;
    },
    d(a) {
      a && (R(e), R(n), R(i)), o && o.d(a), r && r.d(a);
    }
  };
}
function pa(t) {
  let e, n, i;
  const l = [
    { tag: (
      /*tag*/
      t[14]
    ) },
    {
      use: [
        [
          yt,
          {
            ripple: (
              /*ripple*/
              t[4]
            ),
            unbounded: !0,
            color: (
              /*color*/
              t[5]
            ),
            disabled: !!/*$$restProps*/
            t[29].disabled,
            addClass: (
              /*addClass*/
              t[26]
            ),
            removeClass: (
              /*removeClass*/
              t[27]
            ),
            addStyle: (
              /*addStyle*/
              t[28]
            )
          }
        ],
        /*forwardEvents*/
        t[22],
        .../*use*/
        t[1]
      ]
    },
    {
      class: Y({
        [
          /*className*/
          t[2]
        ]: !0,
        "mdc-icon-button": !0,
        "mdc-icon-button--on": !/*isUninitializedValue*/
        t[23](
          /*pressed*/
          t[0]
        ) && /*pressed*/
        t[0],
        "mdc-icon-button--touch": (
          /*touch*/
          t[8]
        ),
        "mdc-icon-button--display-flex": (
          /*displayFlex*/
          t[9]
        ),
        "smui-icon-button--size-button": (
          /*size*/
          t[10] === "button"
        ),
        "smui-icon-button--size-mini": (
          /*size*/
          t[10] === "mini"
        ),
        "mdc-icon-button--reduced-size": (
          /*size*/
          t[10] === "mini" || /*size*/
          t[10] === "button"
        ),
        "mdc-card__action": (
          /*context*/
          t[24] === "card:action"
        ),
        "mdc-card__action--icon": (
          /*context*/
          t[24] === "card:action"
        ),
        "mdc-top-app-bar__navigation-icon": (
          /*context*/
          t[24] === "top-app-bar:navigation"
        ),
        "mdc-top-app-bar__action-item": (
          /*context*/
          t[24] === "top-app-bar:action"
        ),
        "mdc-snackbar__dismiss": (
          /*context*/
          t[24] === "snackbar:actions"
        ),
        "mdc-data-table__pagination-button": (
          /*context*/
          t[24] === "data-table:pagination"
        ),
        "mdc-data-table__sort-icon-button": (
          /*context*/
          t[24] === "data-table:sortable-header-cell"
        ),
        "mdc-dialog__close": (
          /*context*/
          (t[24] === "dialog:header" || /*context*/
          t[24] === "dialog:sheet") && /*action*/
          t[12] === "close"
        ),
        .../*internalClasses*/
        t[18]
      })
    },
    {
      style: Object.entries(
        /*internalStyles*/
        t[19]
      ).map(Hn).concat([
        /*style*/
        t[3]
      ]).join(" ")
    },
    {
      "aria-pressed": /*isUninitializedValue*/ t[23](
        /*pressed*/
        t[0]
      ) ? null : (
        /*pressed*/
        t[0] ? "true" : "false"
      )
    },
    {
      "aria-label": (
        /*pressed*/
        t[0] ? (
          /*ariaLabelOn*/
          t[6]
        ) : (
          /*ariaLabelOff*/
          t[7]
        )
      )
    },
    {
      "data-aria-label-on": (
        /*ariaLabelOn*/
        t[6]
      )
    },
    {
      "data-aria-label-off": (
        /*ariaLabelOff*/
        t[7]
      )
    },
    {
      "aria-describedby": (
        /*ariaDescribedby*/
        t[25]
      )
    },
    { href: (
      /*href*/
      t[11]
    ) },
    /*actionProp*/
    t[21],
    /*internalAttrs*/
    t[20],
    /*$$restProps*/
    t[29]
  ];
  var s = (
    /*component*/
    t[13]
  );
  function o(r, a) {
    let u = {
      $$slots: { default: [ha] },
      $$scope: { ctx: r }
    };
    for (let c = 0; c < l.length; c += 1)
      u = F(u, l[c]);
    return a !== void 0 && a[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
    1073504255 && (u = F(u, ne(l, [
      a[0] & /*tag*/
      16384 && { tag: (
        /*tag*/
        r[14]
      ) },
      a[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      1010827314 && {
        use: [
          [
            yt,
            {
              ripple: (
                /*ripple*/
                r[4]
              ),
              unbounded: !0,
              color: (
                /*color*/
                r[5]
              ),
              disabled: !!/*$$restProps*/
              r[29].disabled,
              addClass: (
                /*addClass*/
                r[26]
              ),
              removeClass: (
                /*removeClass*/
                r[27]
              ),
              addStyle: (
                /*addStyle*/
                r[28]
              )
            }
          ],
          /*forwardEvents*/
          r[22],
          .../*use*/
          r[1]
        ]
      },
      a[0] & /*className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses*/
      25433861 && {
        class: Y({
          [
            /*className*/
            r[2]
          ]: !0,
          "mdc-icon-button": !0,
          "mdc-icon-button--on": !/*isUninitializedValue*/
          r[23](
            /*pressed*/
            r[0]
          ) && /*pressed*/
          r[0],
          "mdc-icon-button--touch": (
            /*touch*/
            r[8]
          ),
          "mdc-icon-button--display-flex": (
            /*displayFlex*/
            r[9]
          ),
          "smui-icon-button--size-button": (
            /*size*/
            r[10] === "button"
          ),
          "smui-icon-button--size-mini": (
            /*size*/
            r[10] === "mini"
          ),
          "mdc-icon-button--reduced-size": (
            /*size*/
            r[10] === "mini" || /*size*/
            r[10] === "button"
          ),
          "mdc-card__action": (
            /*context*/
            r[24] === "card:action"
          ),
          "mdc-card__action--icon": (
            /*context*/
            r[24] === "card:action"
          ),
          "mdc-top-app-bar__navigation-icon": (
            /*context*/
            r[24] === "top-app-bar:navigation"
          ),
          "mdc-top-app-bar__action-item": (
            /*context*/
            r[24] === "top-app-bar:action"
          ),
          "mdc-snackbar__dismiss": (
            /*context*/
            r[24] === "snackbar:actions"
          ),
          "mdc-data-table__pagination-button": (
            /*context*/
            r[24] === "data-table:pagination"
          ),
          "mdc-data-table__sort-icon-button": (
            /*context*/
            r[24] === "data-table:sortable-header-cell"
          ),
          "mdc-dialog__close": (
            /*context*/
            (r[24] === "dialog:header" || /*context*/
            r[24] === "dialog:sheet") && /*action*/
            r[12] === "close"
          ),
          .../*internalClasses*/
          r[18]
        })
      },
      a[0] & /*internalStyles, style*/
      524296 && {
        style: Object.entries(
          /*internalStyles*/
          r[19]
        ).map(Hn).concat([
          /*style*/
          r[3]
        ]).join(" ")
      },
      a[0] & /*isUninitializedValue, pressed*/
      8388609 && {
        "aria-pressed": /*isUninitializedValue*/ r[23](
          /*pressed*/
          r[0]
        ) ? null : (
          /*pressed*/
          r[0] ? "true" : "false"
        )
      },
      a[0] & /*pressed, ariaLabelOn, ariaLabelOff*/
      193 && {
        "aria-label": (
          /*pressed*/
          r[0] ? (
            /*ariaLabelOn*/
            r[6]
          ) : (
            /*ariaLabelOff*/
            r[7]
          )
        )
      },
      a[0] & /*ariaLabelOn*/
      64 && {
        "data-aria-label-on": (
          /*ariaLabelOn*/
          r[6]
        )
      },
      a[0] & /*ariaLabelOff*/
      128 && {
        "data-aria-label-off": (
          /*ariaLabelOff*/
          r[7]
        )
      },
      a[0] & /*ariaDescribedby*/
      33554432 && {
        "aria-describedby": (
          /*ariaDescribedby*/
          r[25]
        )
      },
      a[0] & /*href*/
      2048 && { href: (
        /*href*/
        r[11]
      ) },
      a[0] & /*actionProp*/
      2097152 && pe(
        /*actionProp*/
        r[21]
      ),
      a[0] & /*internalAttrs*/
      1048576 && pe(
        /*internalAttrs*/
        r[20]
      ),
      a[0] & /*$$restProps*/
      536870912 && pe(
        /*$$restProps*/
        r[29]
      )
    ]))), { props: u };
  }
  return s && (e = Be(s, o(t)), t[34](e), e.$on(
    "click",
    /*click_handler*/
    t[35]
  ), e.$on(
    "click",
    /*click_handler_1*/
    t[36]
  )), {
    c() {
      e && P(e.$$.fragment), n = Oe();
    },
    m(r, a) {
      e && B(e, r, a), O(r, n, a), i = !0;
    },
    p(r, a) {
      if (a[0] & /*component*/
      8192 && s !== (s = /*component*/
      r[13])) {
        if (e) {
          ge();
          const u = e;
          C(u.$$.fragment, 1, 0, () => {
            U(u, 1);
          }), _e();
        }
        s ? (e = Be(s, o(r, a)), r[34](e), e.$on(
          "click",
          /*click_handler*/
          r[35]
        ), e.$on(
          "click",
          /*click_handler_1*/
          r[36]
        ), P(e.$$.fragment), b(e.$$.fragment, 1), B(e, n.parentNode, n)) : e = null;
      } else if (s) {
        const u = a[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
        1073504255 ? ne(l, [
          a[0] & /*tag*/
          16384 && { tag: (
            /*tag*/
            r[14]
          ) },
          a[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          1010827314 && {
            use: [
              [
                yt,
                {
                  ripple: (
                    /*ripple*/
                    r[4]
                  ),
                  unbounded: !0,
                  color: (
                    /*color*/
                    r[5]
                  ),
                  disabled: !!/*$$restProps*/
                  r[29].disabled,
                  addClass: (
                    /*addClass*/
                    r[26]
                  ),
                  removeClass: (
                    /*removeClass*/
                    r[27]
                  ),
                  addStyle: (
                    /*addStyle*/
                    r[28]
                  )
                }
              ],
              /*forwardEvents*/
              r[22],
              .../*use*/
              r[1]
            ]
          },
          a[0] & /*className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses*/
          25433861 && {
            class: Y({
              [
                /*className*/
                r[2]
              ]: !0,
              "mdc-icon-button": !0,
              "mdc-icon-button--on": !/*isUninitializedValue*/
              r[23](
                /*pressed*/
                r[0]
              ) && /*pressed*/
              r[0],
              "mdc-icon-button--touch": (
                /*touch*/
                r[8]
              ),
              "mdc-icon-button--display-flex": (
                /*displayFlex*/
                r[9]
              ),
              "smui-icon-button--size-button": (
                /*size*/
                r[10] === "button"
              ),
              "smui-icon-button--size-mini": (
                /*size*/
                r[10] === "mini"
              ),
              "mdc-icon-button--reduced-size": (
                /*size*/
                r[10] === "mini" || /*size*/
                r[10] === "button"
              ),
              "mdc-card__action": (
                /*context*/
                r[24] === "card:action"
              ),
              "mdc-card__action--icon": (
                /*context*/
                r[24] === "card:action"
              ),
              "mdc-top-app-bar__navigation-icon": (
                /*context*/
                r[24] === "top-app-bar:navigation"
              ),
              "mdc-top-app-bar__action-item": (
                /*context*/
                r[24] === "top-app-bar:action"
              ),
              "mdc-snackbar__dismiss": (
                /*context*/
                r[24] === "snackbar:actions"
              ),
              "mdc-data-table__pagination-button": (
                /*context*/
                r[24] === "data-table:pagination"
              ),
              "mdc-data-table__sort-icon-button": (
                /*context*/
                r[24] === "data-table:sortable-header-cell"
              ),
              "mdc-dialog__close": (
                /*context*/
                (r[24] === "dialog:header" || /*context*/
                r[24] === "dialog:sheet") && /*action*/
                r[12] === "close"
              ),
              .../*internalClasses*/
              r[18]
            })
          },
          a[0] & /*internalStyles, style*/
          524296 && {
            style: Object.entries(
              /*internalStyles*/
              r[19]
            ).map(Hn).concat([
              /*style*/
              r[3]
            ]).join(" ")
          },
          a[0] & /*isUninitializedValue, pressed*/
          8388609 && {
            "aria-pressed": /*isUninitializedValue*/ r[23](
              /*pressed*/
              r[0]
            ) ? null : (
              /*pressed*/
              r[0] ? "true" : "false"
            )
          },
          a[0] & /*pressed, ariaLabelOn, ariaLabelOff*/
          193 && {
            "aria-label": (
              /*pressed*/
              r[0] ? (
                /*ariaLabelOn*/
                r[6]
              ) : (
                /*ariaLabelOff*/
                r[7]
              )
            )
          },
          a[0] & /*ariaLabelOn*/
          64 && {
            "data-aria-label-on": (
              /*ariaLabelOn*/
              r[6]
            )
          },
          a[0] & /*ariaLabelOff*/
          128 && {
            "data-aria-label-off": (
              /*ariaLabelOff*/
              r[7]
            )
          },
          a[0] & /*ariaDescribedby*/
          33554432 && {
            "aria-describedby": (
              /*ariaDescribedby*/
              r[25]
            )
          },
          a[0] & /*href*/
          2048 && { href: (
            /*href*/
            r[11]
          ) },
          a[0] & /*actionProp*/
          2097152 && pe(
            /*actionProp*/
            r[21]
          ),
          a[0] & /*internalAttrs*/
          1048576 && pe(
            /*internalAttrs*/
            r[20]
          ),
          a[0] & /*$$restProps*/
          536870912 && pe(
            /*$$restProps*/
            r[29]
          )
        ]) : {};
        a[0] & /*touch*/
        256 | a[1] & /*$$scope*/
        64 && (u.$$scope = { dirty: a, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      i || (e && b(e.$$.fragment, r), i = !0);
    },
    o(r) {
      e && C(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && R(n), t[34](null), e && U(e, r);
    }
  };
}
const Hn = ([t, e]) => `${t}: ${e};`;
function ga(t, e, n) {
  let i;
  const l = [
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "toggle",
    "pressed",
    "ariaLabelOn",
    "ariaLabelOff",
    "touch",
    "displayFlex",
    "size",
    "href",
    "action",
    "component",
    "tag",
    "getElement"
  ];
  let s = se(e, l), { $$slots: o = {}, $$scope: r } = e;
  const a = Me(we());
  let u = () => {
  };
  function c(W) {
    return W === u;
  }
  let { use: f = [] } = e, { class: d = "" } = e, { style: m = "" } = e, { ripple: h = !0 } = e, { color: _ = void 0 } = e, { toggle: p = !1 } = e, { pressed: E = u } = e, { ariaLabelOn: S = void 0 } = e, { ariaLabelOff: M = void 0 } = e, { touch: A = !1 } = e, { displayFlex: v = !0 } = e, { size: I = "normal" } = e, { href: g = void 0 } = e, { action: T = void 0 } = e, q, H, w = {}, z = {}, L = {}, Z = Ue("SMUI:icon-button:context"), ke = Ue("SMUI:icon-button:aria-describedby"), { component: ve = Je } = e, { tag: be = ve === Je ? g == null ? "button" : "a" : void 0 } = e, X = s.disabled;
  He("SMUI:icon:context", "icon-button");
  let k = null;
  St(() => {
    H && H.destroy();
  });
  function Q(W) {
    return W in w ? w[W] : je().classList.contains(W);
  }
  function Se(W) {
    w[W] || n(18, w[W] = !0, w);
  }
  function Le(W) {
    (!(W in w) || w[W]) && n(18, w[W] = !1, w);
  }
  function Ve(W, G) {
    z[W] != G && (G === "" || G == null ? (delete z[W], n(19, z)) : n(19, z[W] = G, z));
  }
  function J(W) {
    var G;
    return W in L ? (G = L[W]) !== null && G !== void 0 ? G : null : je().getAttribute(W);
  }
  function ye(W, G) {
    L[W] !== G && n(20, L[W] = G, L);
  }
  function Xe(W) {
    n(0, E = W.isOn);
  }
  function je() {
    return q.getElement();
  }
  function rt(W) {
    ie[W ? "unshift" : "push"](() => {
      q = W, n(16, q);
    });
  }
  const at = () => H && H.handleClick(), Et = () => Z === "top-app-bar:navigation" && Ae(je(), "SMUITopAppBarIconButton:nav");
  return t.$$set = (W) => {
    e = F(F({}, e), Re(W)), n(29, s = se(e, l)), "use" in W && n(1, f = W.use), "class" in W && n(2, d = W.class), "style" in W && n(3, m = W.style), "ripple" in W && n(4, h = W.ripple), "color" in W && n(5, _ = W.color), "toggle" in W && n(30, p = W.toggle), "pressed" in W && n(0, E = W.pressed), "ariaLabelOn" in W && n(6, S = W.ariaLabelOn), "ariaLabelOff" in W && n(7, M = W.ariaLabelOff), "touch" in W && n(8, A = W.touch), "displayFlex" in W && n(9, v = W.displayFlex), "size" in W && n(10, I = W.size), "href" in W && n(11, g = W.href), "action" in W && n(12, T = W.action), "component" in W && n(13, ve = W.component), "tag" in W && n(14, be = W.tag), "$$scope" in W && n(37, r = W.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*action*/
    4096 && n(21, i = (() => {
      if (Z === "data-table:pagination")
        switch (T) {
          case "first-page":
            return { "data-first-page": "true" };
          case "prev-page":
            return { "data-prev-page": "true" };
          case "next-page":
            return { "data-next-page": "true" };
          case "last-page":
            return { "data-last-page": "true" };
          default:
            return { "data-action": "true" };
        }
      else return Z === "dialog:header" || Z === "dialog:sheet" ? { "data-mdc-dialog-action": T } : { action: T };
    })()), X !== s.disabled) {
      if (q) {
        const W = je();
        "blur" in W && W.blur();
      }
      n(31, X = s.disabled);
    }
    t.$$.dirty[0] & /*element, toggle, instance*/
    1073938432 | t.$$.dirty[1] & /*oldToggle*/
    2 && q && je() && p !== k && (p && !H ? (n(17, H = new Vr({
      addClass: Se,
      hasClass: Q,
      notifyChange: (W) => {
        Xe(W), Ae(je(), "SMUIIconButtonToggle:change", W, void 0, !0);
      },
      removeClass: Le,
      getAttr: J,
      setAttr: ye
    })), H.init()) : !p && H && (H.destroy(), n(17, H = void 0), n(18, w = {}), n(20, L = {})), n(32, k = p)), t.$$.dirty[0] & /*instance, pressed*/
    131073 && H && !c(E) && H.isOn() !== E && H.toggle(E);
  }, [
    E,
    f,
    d,
    m,
    h,
    _,
    S,
    M,
    A,
    v,
    I,
    g,
    T,
    ve,
    be,
    je,
    q,
    H,
    w,
    z,
    L,
    i,
    a,
    c,
    Z,
    ke,
    Se,
    Le,
    Ve,
    s,
    p,
    X,
    k,
    o,
    rt,
    at,
    Et,
    r
  ];
}
class Zl extends ue {
  constructor(e) {
    super(), ae(
      this,
      e,
      ga,
      pa,
      le,
      {
        use: 1,
        class: 2,
        style: 3,
        ripple: 4,
        color: 5,
        toggle: 30,
        pressed: 0,
        ariaLabelOn: 6,
        ariaLabelOff: 7,
        touch: 8,
        displayFlex: 9,
        size: 10,
        href: 11,
        action: 12,
        component: 13,
        tag: 14,
        getElement: 15
      },
      null,
      [-1, -1]
    );
  }
  get use() {
    return this.$$.ctx[1];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[2];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get style() {
    return this.$$.ctx[3];
  }
  set style(e) {
    this.$$set({ style: e }), y();
  }
  get ripple() {
    return this.$$.ctx[4];
  }
  set ripple(e) {
    this.$$set({ ripple: e }), y();
  }
  get color() {
    return this.$$.ctx[5];
  }
  set color(e) {
    this.$$set({ color: e }), y();
  }
  get toggle() {
    return this.$$.ctx[30];
  }
  set toggle(e) {
    this.$$set({ toggle: e }), y();
  }
  get pressed() {
    return this.$$.ctx[0];
  }
  set pressed(e) {
    this.$$set({ pressed: e }), y();
  }
  get ariaLabelOn() {
    return this.$$.ctx[6];
  }
  set ariaLabelOn(e) {
    this.$$set({ ariaLabelOn: e }), y();
  }
  get ariaLabelOff() {
    return this.$$.ctx[7];
  }
  set ariaLabelOff(e) {
    this.$$set({ ariaLabelOff: e }), y();
  }
  get touch() {
    return this.$$.ctx[8];
  }
  set touch(e) {
    this.$$set({ touch: e }), y();
  }
  get displayFlex() {
    return this.$$.ctx[9];
  }
  set displayFlex(e) {
    this.$$set({ displayFlex: e }), y();
  }
  get size() {
    return this.$$.ctx[10];
  }
  set size(e) {
    this.$$set({ size: e }), y();
  }
  get href() {
    return this.$$.ctx[11];
  }
  set href(e) {
    this.$$set({ href: e }), y();
  }
  get action() {
    return this.$$.ctx[12];
  }
  set action(e) {
    this.$$set({ action: e }), y();
  }
  get component() {
    return this.$$.ctx[13];
  }
  set component(e) {
    this.$$set({ component: e }), y();
  }
  get tag() {
    return this.$$.ctx[14];
  }
  set tag(e) {
    this.$$set({ tag: e }), y();
  }
  get getElement() {
    return this.$$.ctx[15];
  }
}
oe(Zl, { use: {}, class: {}, style: {}, ripple: { type: "Boolean" }, color: {}, toggle: { type: "Boolean" }, pressed: {}, ariaLabelOn: {}, ariaLabelOff: {}, touch: { type: "Boolean" }, displayFlex: { type: "Boolean" }, size: {}, href: {}, action: {}, component: {}, tag: {} }, ["default"], ["getElement"], !0);
function Gl(t) {
  return Object.entries(t).map(([e, n]) => `--${e}:${n}`).join(";");
}
function _a(t) {
  We(t, "svelte-4hwpwb", "svg.custom-icon-button-wrapper{padding:.25rem}.mdc-icon-button.smui-icon-button--size-button, .mdc-icon-button.smui-icon-button--size-button svg{width:var(--button-size)!important;height:var(--button-size)!important}");
}
function ba(t) {
  let e, n;
  return e = new Cn({
    props: {
      icon: (
        /*icon*/
        t[0]
      ),
      fillColor: (
        /*color*/
        t[1]
      ),
      class: "custom-icon-button-wrapper"
    }
  }), {
    c() {
      P(e.$$.fragment);
    },
    m(i, l) {
      B(e, i, l), n = !0;
    },
    p(i, l) {
      const s = {};
      l & /*icon*/
      1 && (s.icon = /*icon*/
      i[0]), l & /*color*/
      2 && (s.fillColor = /*color*/
      i[1]), e.$set(s);
    },
    i(i) {
      n || (b(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      U(e, i);
    }
  };
}
function va(t) {
  let e, n;
  return e = new Zl({
    props: {
      size: "button",
      style: (
        /*cssDynamicStyles*/
        t[3]
      ),
      class: (
        /*className*/
        t[2]
      ),
      $$slots: { default: [ba] },
      $$scope: { ctx: t }
    }
  }), e.$on(
    "click",
    /*click_handler*/
    t[6]
  ), {
    c() {
      P(e.$$.fragment);
    },
    m(i, l) {
      B(e, i, l), n = !0;
    },
    p(i, [l]) {
      const s = {};
      l & /*cssDynamicStyles*/
      8 && (s.style = /*cssDynamicStyles*/
      i[3]), l & /*className*/
      4 && (s.class = /*className*/
      i[2]), l & /*$$scope, icon, color*/
      131 && (s.$$scope = { dirty: l, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (b(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      U(e, i);
    }
  };
}
function Ca(t) {
  return t === "small" ? "42px" : t === "large" ? "56px" : "48px";
}
function ya(t, e, n) {
  let i, { icon: l } = e, { size: s = "medium" } = e, { color: o = "primary" } = e, { class: r = "" } = e;
  const a = { "button-size": "" };
  function u(c) {
    mt.call(this, t, c);
  }
  return t.$$set = (c) => {
    "icon" in c && n(0, l = c.icon), "size" in c && n(4, s = c.size), "color" in c && n(1, o = c.color), "class" in c && n(2, r = c.class);
  }, t.$$.update = () => {
    t.$$.dirty & /*size*/
    16 && n(5, a["button-size"] = Ca(s), a), t.$$.dirty & /*cssFixedStyles*/
    32 && n(3, i = Gl(a));
  }, [l, o, r, i, s, a, u];
}
class nt extends ue {
  constructor(e) {
    super(), ae(this, e, ya, va, le, { icon: 0, size: 4, color: 1, class: 2 }, _a);
  }
  get icon() {
    return this.$$.ctx[0];
  }
  set icon(e) {
    this.$$set({ icon: e }), y();
  }
  get size() {
    return this.$$.ctx[4];
  }
  set size(e) {
    this.$$set({ size: e }), y();
  }
  get color() {
    return this.$$.ctx[1];
  }
  set color(e) {
    this.$$set({ color: e }), y();
  }
  get class() {
    return this.$$.ctx[2];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
}
oe(nt, { icon: {}, size: {}, color: {}, class: {} }, [], [], !0);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var xe = {
  ANIMATE: "mdc-drawer--animate",
  CLOSING: "mdc-drawer--closing",
  DISMISSIBLE: "mdc-drawer--dismissible",
  MODAL: "mdc-drawer--modal",
  OPEN: "mdc-drawer--open",
  OPENING: "mdc-drawer--opening",
  ROOT: "mdc-drawer"
}, Aa = {
  APP_CONTENT_SELECTOR: ".mdc-drawer-app-content",
  CLOSE_EVENT: "MDCDrawer:closed",
  OPEN_EVENT: "MDCDrawer:opened",
  SCRIM_SELECTOR: ".mdc-drawer-scrim",
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  LIST_ITEM_ACTIVATED_SELECTOR: ".mdc-list-item--activated,.mdc-deprecated-list-item--activated"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Kl = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var i = t.call(this, $e($e({}, e.defaultAdapter), n)) || this;
      return i.animationFrame = 0, i.animationTimer = 0, i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Aa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return xe;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          elementHasClass: function() {
            return !1;
          },
          notifyClose: function() {
          },
          notifyOpen: function() {
          },
          saveFocus: function() {
          },
          restoreFocus: function() {
          },
          focusActiveNavigationItem: function() {
          },
          trapFocus: function() {
          },
          releaseFocus: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.destroy = function() {
      this.animationFrame && cancelAnimationFrame(this.animationFrame), this.animationTimer && clearTimeout(this.animationTimer);
    }, e.prototype.open = function() {
      var n = this;
      this.isOpen() || this.isOpening() || this.isClosing() || (this.adapter.addClass(xe.OPEN), this.adapter.addClass(xe.ANIMATE), this.runNextAnimationFrame(function() {
        n.adapter.addClass(xe.OPENING);
      }), this.adapter.saveFocus());
    }, e.prototype.close = function() {
      !this.isOpen() || this.isOpening() || this.isClosing() || this.adapter.addClass(xe.CLOSING);
    }, e.prototype.isOpen = function() {
      return this.adapter.hasClass(xe.OPEN);
    }, e.prototype.isOpening = function() {
      return this.adapter.hasClass(xe.OPENING) || this.adapter.hasClass(xe.ANIMATE);
    }, e.prototype.isClosing = function() {
      return this.adapter.hasClass(xe.CLOSING);
    }, e.prototype.handleKeydown = function(n) {
      var i = n.keyCode, l = n.key, s = l === "Escape" || i === 27;
      s && this.close();
    }, e.prototype.handleTransitionEnd = function(n) {
      var i = xe.OPENING, l = xe.CLOSING, s = xe.OPEN, o = xe.ANIMATE, r = xe.ROOT, a = this.isElement(n.target) && this.adapter.elementHasClass(n.target, r);
      a && (this.isClosing() ? (this.adapter.removeClass(s), this.closed(), this.adapter.restoreFocus(), this.adapter.notifyClose()) : (this.adapter.focusActiveNavigationItem(), this.opened(), this.adapter.notifyOpen()), this.adapter.removeClass(o), this.adapter.removeClass(i), this.adapter.removeClass(l));
    }, e.prototype.opened = function() {
    }, e.prototype.closed = function() {
    }, e.prototype.runNextAnimationFrame = function(n) {
      var i = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        i.animationFrame = 0, clearTimeout(i.animationTimer), i.animationTimer = setTimeout(n, 0);
      });
    }, e.prototype.isElement = function(n) {
      return !!n.classList;
    }, e;
  }(gt)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ea = (
  /** @class */
  function(t) {
    et(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.handleScrimClick = function() {
      this.close();
    }, e.prototype.opened = function() {
      this.adapter.trapFocus();
    }, e.prototype.closed = function() {
      this.adapter.releaseFocus();
    }, e;
  }(Kl)
);
function Ia(t) {
  let e, n, i, l, s, o;
  const r = (
    /*#slots*/
    t[15].default
  ), a = fe(
    r,
    t,
    /*$$scope*/
    t[14],
    null
  );
  let u = [
    {
      class: n = Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-drawer": !0,
        "mdc-drawer--dismissible": (
          /*variant*/
          t[2] === "dismissible"
        ),
        "mdc-drawer--modal": (
          /*variant*/
          t[2] === "modal"
        ),
        "smui-drawer__absolute": (
          /*variant*/
          t[2] === "modal" && !/*fixed*/
          t[3]
        ),
        .../*internalClasses*/
        t[6]
      })
    },
    /*$$restProps*/
    t[8]
  ], c = {};
  for (let f = 0; f < u.length; f += 1)
    c = F(c, u[f]);
  return {
    c() {
      e = V("aside"), a && a.c(), ce(e, c);
    },
    m(f, d) {
      O(f, e, d), a && a.m(e, null), t[16](e), l = !0, s || (o = [
        ee(i = De.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        ee(
          /*forwardEvents*/
          t[7].call(null, e)
        ),
        x(e, "keydown", function() {
          Ce(
            /*instance*/
            t[4] && /*instance*/
            t[4].handleKeydown.bind(
              /*instance*/
              t[4]
            )
          ) && /*instance*/
          (t[4] && /*instance*/
          t[4].handleKeydown.bind(
            /*instance*/
            t[4]
          )).apply(this, arguments);
        }),
        x(e, "transitionend", function() {
          Ce(
            /*instance*/
            t[4] && /*instance*/
            t[4].handleTransitionEnd.bind(
              /*instance*/
              t[4]
            )
          ) && /*instance*/
          (t[4] && /*instance*/
          t[4].handleTransitionEnd.bind(
            /*instance*/
            t[4]
          )).apply(this, arguments);
        })
      ], s = !0);
    },
    p(f, [d]) {
      t = f, a && a.p && (!l || d & /*$$scope*/
      16384) && me(
        a,
        r,
        t,
        /*$$scope*/
        t[14],
        l ? de(
          r,
          /*$$scope*/
          t[14],
          d,
          null
        ) : he(
          /*$$scope*/
          t[14]
        ),
        null
      ), ce(e, c = ne(u, [
        (!l || d & /*className, variant, fixed, internalClasses*/
        78 && n !== (n = Y({
          [
            /*className*/
            t[1]
          ]: !0,
          "mdc-drawer": !0,
          "mdc-drawer--dismissible": (
            /*variant*/
            t[2] === "dismissible"
          ),
          "mdc-drawer--modal": (
            /*variant*/
            t[2] === "modal"
          ),
          "smui-drawer__absolute": (
            /*variant*/
            t[2] === "modal" && !/*fixed*/
            t[3]
          ),
          .../*internalClasses*/
          t[6]
        }))) && { class: n },
        d & /*$$restProps*/
        256 && /*$$restProps*/
        t[8]
      ])), i && Ce(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        t[0]
      );
    },
    i(f) {
      l || (b(a, f), l = !0);
    },
    o(f) {
      C(a, f), l = !1;
    },
    d(f) {
      f && R(e), a && a.d(f), t[16](null), s = !1, Te(o);
    }
  };
}
function Ta(t, e, n) {
  const i = ["use", "class", "variant", "open", "fixed", "setOpen", "isOpen", "getElement"];
  let l = se(e, i), { $$slots: s = {}, $$scope: o } = e;
  const { FocusTrap: r } = Qr, a = Me(we());
  let { use: u = [] } = e, { class: c = "" } = e, { variant: f = void 0 } = e, { open: d = !1 } = e, { fixed: m = !0 } = e, h, _, p = {}, E = null, S, M = !1;
  He("SMUI:list:nav", !0), He("SMUI:list:item:nav", !0), He("SMUI:list:wrapFocus", !0);
  let A = f;
  Qe(() => {
    S = new r(
      h,
      {
        // Component handles focusing on active nav item.
        skipInitialFocus: !0
      }
    ), n(4, _ = v()), _ && _.init();
  }), St(() => {
    _ && _.destroy(), M && M.removeEventListener("SMUIDrawerScrim:click", q);
  });
  function v() {
    var Z, ke;
    M && M.removeEventListener("SMUIDrawerScrim:click", q), f === "modal" && (M = (ke = (Z = h.parentNode) === null || Z === void 0 ? void 0 : Z.querySelector(".mdc-drawer-scrim")) !== null && ke !== void 0 ? ke : !1, M && M.addEventListener("SMUIDrawerScrim:click", q));
    const ve = f === "dismissible" ? Kl : f === "modal" ? Ea : void 0;
    return ve ? new ve({
      addClass: g,
      removeClass: T,
      hasClass: I,
      elementHasClass: (be, X) => be.classList.contains(X),
      saveFocus: () => E = document.activeElement,
      restoreFocus: () => {
        E && "focus" in E && h.contains(document.activeElement) && E.focus();
      },
      focusActiveNavigationItem: () => {
        const be = h.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");
        be && be.focus();
      },
      notifyClose: () => {
        n(9, d = !1), Ae(h, "SMUIDrawer:closed", void 0, void 0, !0);
      },
      notifyOpen: () => {
        n(9, d = !0), Ae(h, "SMUIDrawer:opened", void 0, void 0, !0);
      },
      trapFocus: () => S.trapFocus(),
      releaseFocus: () => S.releaseFocus()
    }) : void 0;
  }
  function I(Z) {
    return Z in p ? p[Z] : z().classList.contains(Z);
  }
  function g(Z) {
    p[Z] || n(6, p[Z] = !0, p);
  }
  function T(Z) {
    (!(Z in p) || p[Z]) && n(6, p[Z] = !1, p);
  }
  function q() {
    _ && "handleScrimClick" in _ && _.handleScrimClick();
  }
  function H(Z) {
    n(9, d = Z);
  }
  function w() {
    return d;
  }
  function z() {
    return h;
  }
  function L(Z) {
    ie[Z ? "unshift" : "push"](() => {
      h = Z, n(5, h);
    });
  }
  return t.$$set = (Z) => {
    e = F(F({}, e), Re(Z)), n(8, l = se(e, i)), "use" in Z && n(0, u = Z.use), "class" in Z && n(1, c = Z.class), "variant" in Z && n(2, f = Z.variant), "open" in Z && n(9, d = Z.open), "fixed" in Z && n(3, m = Z.fixed), "$$scope" in Z && n(14, o = Z.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*oldVariant, variant, instance*/
    8212 && A !== f && (n(13, A = f), _ && _.destroy(), n(6, p = {}), n(4, _ = v()), _ && _.init()), t.$$.dirty & /*instance, open*/
    528 && _ && _.isOpen() !== d && (d ? _.open() : _.close());
  }, [
    u,
    c,
    f,
    m,
    _,
    h,
    p,
    a,
    l,
    d,
    H,
    w,
    z,
    A,
    o,
    s,
    L
  ];
}
class Wl extends ue {
  constructor(e) {
    super(), ae(this, e, Ta, Ia, le, {
      use: 0,
      class: 1,
      variant: 2,
      open: 9,
      fixed: 3,
      setOpen: 10,
      isOpen: 11,
      getElement: 12
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get variant() {
    return this.$$.ctx[2];
  }
  set variant(e) {
    this.$$set({ variant: e }), y();
  }
  get open() {
    return this.$$.ctx[9];
  }
  set open(e) {
    this.$$set({ open: e }), y();
  }
  get fixed() {
    return this.$$.ctx[3];
  }
  set fixed(e) {
    this.$$set({ fixed: e }), y();
  }
  get setOpen() {
    return this.$$.ctx[10];
  }
  get isOpen() {
    return this.$$.ctx[11];
  }
  get getElement() {
    return this.$$.ctx[12];
  }
}
oe(Wl, { use: {}, class: {}, variant: {}, open: { type: "Boolean" }, fixed: { type: "Boolean" } }, ["default"], ["setOpen", "isOpen", "getElement"], !0);
function wa(t) {
  let e;
  const n = (
    /*#slots*/
    t[11].default
  ), i = fe(
    n,
    t,
    /*$$scope*/
    t[13],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(l, s) {
      i && i.m(l, s), e = !0;
    },
    p(l, s) {
      i && i.p && (!e || s & /*$$scope*/
      8192) && me(
        i,
        n,
        l,
        /*$$scope*/
        l[13],
        e ? de(
          n,
          /*$$scope*/
          l[13],
          s,
          null
        ) : he(
          /*$$scope*/
          l[13]
        ),
        null
      );
    },
    i(l) {
      e || (b(i, l), e = !0);
    },
    o(l) {
      C(i, l), e = !1;
    },
    d(l) {
      i && i.d(l);
    }
  };
}
function Sa(t) {
  let e, n, i;
  const l = [
    { tag: (
      /*tag*/
      t[3]
    ) },
    {
      use: [
        /*forwardEvents*/
        t[8],
        .../*use*/
        t[0]
      ]
    },
    {
      class: Y({
        [
          /*className*/
          t[1]
        ]: !0,
        [
          /*smuiClass*/
          t[6]
        ]: !0,
        .../*smuiClassMap*/
        t[5]
      })
    },
    /*props*/
    t[7],
    /*$$restProps*/
    t[9]
  ];
  var s = (
    /*component*/
    t[2]
  );
  function o(r, a) {
    let u = {
      $$slots: { default: [wa] },
      $$scope: { ctx: r }
    };
    for (let c = 0; c < l.length; c += 1)
      u = F(u, l[c]);
    return a !== void 0 && a & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = F(u, ne(l, [
      a & /*tag*/
      8 && { tag: (
        /*tag*/
        r[3]
      ) },
      a & /*forwardEvents, use*/
      257 && {
        use: [
          /*forwardEvents*/
          r[8],
          .../*use*/
          r[0]
        ]
      },
      a & /*className, smuiClass, smuiClassMap*/
      98 && {
        class: Y({
          [
            /*className*/
            r[1]
          ]: !0,
          [
            /*smuiClass*/
            r[6]
          ]: !0,
          .../*smuiClassMap*/
          r[5]
        })
      },
      a & /*props*/
      128 && pe(
        /*props*/
        r[7]
      ),
      a & /*$$restProps*/
      512 && pe(
        /*$$restProps*/
        r[9]
      )
    ]))), { props: u };
  }
  return s && (e = Be(s, o(t)), t[12](e)), {
    c() {
      e && P(e.$$.fragment), n = Oe();
    },
    m(r, a) {
      e && B(e, r, a), O(r, n, a), i = !0;
    },
    p(r, [a]) {
      if (a & /*component*/
      4 && s !== (s = /*component*/
      r[2])) {
        if (e) {
          ge();
          const u = e;
          C(u.$$.fragment, 1, 0, () => {
            U(u, 1);
          }), _e();
        }
        s ? (e = Be(s, o(r, a)), r[12](e), P(e.$$.fragment), b(e.$$.fragment, 1), B(e, n.parentNode, n)) : e = null;
      } else if (s) {
        const u = a & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? ne(l, [
          a & /*tag*/
          8 && { tag: (
            /*tag*/
            r[3]
          ) },
          a & /*forwardEvents, use*/
          257 && {
            use: [
              /*forwardEvents*/
              r[8],
              .../*use*/
              r[0]
            ]
          },
          a & /*className, smuiClass, smuiClassMap*/
          98 && {
            class: Y({
              [
                /*className*/
                r[1]
              ]: !0,
              [
                /*smuiClass*/
                r[6]
              ]: !0,
              .../*smuiClassMap*/
              r[5]
            })
          },
          a & /*props*/
          128 && pe(
            /*props*/
            r[7]
          ),
          a & /*$$restProps*/
          512 && pe(
            /*$$restProps*/
            r[9]
          )
        ]) : {};
        a & /*$$scope*/
        8192 && (u.$$scope = { dirty: a, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      i || (e && b(e.$$.fragment, r), i = !0);
    },
    o(r) {
      e && C(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && R(n), t[12](null), e && U(e, r);
    }
  };
}
const vt = {
  component: Je,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function ka(t, e, n) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let l = se(e, i), { $$slots: s = {}, $$scope: o } = e, { use: r = [] } = e, { class: a = "" } = e, u;
  const c = vt.class, f = {}, d = [], m = vt.contexts, h = vt.props;
  let { component: _ = vt.component } = e, { tag: p = _ === Je ? vt.tag : void 0 } = e;
  Object.entries(vt.classMap).forEach(([A, v]) => {
    const I = Ue(v);
    I && "subscribe" in I && d.push(I.subscribe((g) => {
      n(5, f[A] = g, f);
    }));
  });
  const E = Me(we());
  for (let A in m)
    m.hasOwnProperty(A) && He(A, m[A]);
  St(() => {
    for (const A of d)
      A();
  });
  function S() {
    return u.getElement();
  }
  function M(A) {
    ie[A ? "unshift" : "push"](() => {
      u = A, n(4, u);
    });
  }
  return t.$$set = (A) => {
    e = F(F({}, e), Re(A)), n(9, l = se(e, i)), "use" in A && n(0, r = A.use), "class" in A && n(1, a = A.class), "component" in A && n(2, _ = A.component), "tag" in A && n(3, p = A.tag), "$$scope" in A && n(13, o = A.$$scope);
  }, [
    r,
    a,
    _,
    p,
    u,
    f,
    c,
    h,
    E,
    l,
    S,
    s,
    M,
    o
  ];
}
class Xl extends ue {
  constructor(e) {
    super(), ae(this, e, ka, Sa, le, {
      use: 0,
      class: 1,
      component: 2,
      tag: 3,
      getElement: 10
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get component() {
    return this.$$.ctx[2];
  }
  set component(e) {
    this.$$set({ component: e }), y();
  }
  get tag() {
    return this.$$.ctx[3];
  }
  set tag(e) {
    this.$$set({ tag: e }), y();
  }
  get getElement() {
    return this.$$.ctx[10];
  }
}
oe(Xl, { use: {}, class: {}, component: {}, tag: {} }, ["default"], ["getElement"], !0);
const pi = Object.assign({}, vt);
function _t(t) {
  return new Proxy(Xl, {
    construct: function(e, n) {
      return Object.assign(vt, pi, t), new e(...n);
    },
    get: function(e, n) {
      return Object.assign(vt, pi, t), e[n];
    }
  });
}
const La = _t({
  class: "mdc-drawer-app-content",
  tag: "div"
}), Da = _t({
  class: "mdc-drawer__content",
  tag: "div"
}), Ra = _t({
  class: "mdc-drawer__header",
  tag: "div"
}), Oa = _t({
  class: "mdc-drawer__title",
  tag: "h1"
}), Ha = _t({
  class: "mdc-drawer__subtitle",
  tag: "h2"
});
function Ma(t) {
  let e;
  const n = (
    /*#slots*/
    t[10].default
  ), i = fe(
    n,
    t,
    /*$$scope*/
    t[12],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(l, s) {
      i && i.m(l, s), e = !0;
    },
    p(l, s) {
      i && i.p && (!e || s & /*$$scope*/
      4096) && me(
        i,
        n,
        l,
        /*$$scope*/
        l[12],
        e ? de(
          n,
          /*$$scope*/
          l[12],
          s,
          null
        ) : he(
          /*$$scope*/
          l[12]
        ),
        null
      );
    },
    i(l) {
      e || (b(i, l), e = !0);
    },
    o(l) {
      C(i, l), e = !1;
    },
    d(l) {
      i && i.d(l);
    }
  };
}
function $a(t) {
  let e, n, i;
  const l = [
    { tag: (
      /*tag*/
      t[4]
    ) },
    {
      use: [
        /*forwardEvents*/
        t[6],
        .../*use*/
        t[0]
      ]
    },
    {
      class: Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-drawer-scrim": !0,
        "smui-drawer-scrim__absolute": !/*fixed*/
        t[2]
      })
    },
    /*$$restProps*/
    t[8]
  ];
  var s = (
    /*component*/
    t[3]
  );
  function o(r, a) {
    let u = {
      $$slots: { default: [Ma] },
      $$scope: { ctx: r }
    };
    for (let c = 0; c < l.length; c += 1)
      u = F(u, l[c]);
    return a !== void 0 && a & /*tag, forwardEvents, use, className, fixed, $$restProps*/
    343 && (u = F(u, ne(l, [
      a & /*tag*/
      16 && { tag: (
        /*tag*/
        r[4]
      ) },
      a & /*forwardEvents, use*/
      65 && {
        use: [
          /*forwardEvents*/
          r[6],
          .../*use*/
          r[0]
        ]
      },
      a & /*className, fixed*/
      6 && {
        class: Y({
          [
            /*className*/
            r[1]
          ]: !0,
          "mdc-drawer-scrim": !0,
          "smui-drawer-scrim__absolute": !/*fixed*/
          r[2]
        })
      },
      a & /*$$restProps*/
      256 && pe(
        /*$$restProps*/
        r[8]
      )
    ]))), { props: u };
  }
  return s && (e = Be(s, o(t)), t[11](e), e.$on(
    "click",
    /*handleClick*/
    t[7]
  )), {
    c() {
      e && P(e.$$.fragment), n = Oe();
    },
    m(r, a) {
      e && B(e, r, a), O(r, n, a), i = !0;
    },
    p(r, [a]) {
      if (a & /*component*/
      8 && s !== (s = /*component*/
      r[3])) {
        if (e) {
          ge();
          const u = e;
          C(u.$$.fragment, 1, 0, () => {
            U(u, 1);
          }), _e();
        }
        s ? (e = Be(s, o(r, a)), r[11](e), e.$on(
          "click",
          /*handleClick*/
          r[7]
        ), P(e.$$.fragment), b(e.$$.fragment, 1), B(e, n.parentNode, n)) : e = null;
      } else if (s) {
        const u = a & /*tag, forwardEvents, use, className, fixed, $$restProps*/
        343 ? ne(l, [
          a & /*tag*/
          16 && { tag: (
            /*tag*/
            r[4]
          ) },
          a & /*forwardEvents, use*/
          65 && {
            use: [
              /*forwardEvents*/
              r[6],
              .../*use*/
              r[0]
            ]
          },
          a & /*className, fixed*/
          6 && {
            class: Y({
              [
                /*className*/
                r[1]
              ]: !0,
              "mdc-drawer-scrim": !0,
              "smui-drawer-scrim__absolute": !/*fixed*/
              r[2]
            })
          },
          a & /*$$restProps*/
          256 && pe(
            /*$$restProps*/
            r[8]
          )
        ]) : {};
        a & /*$$scope*/
        4096 && (u.$$scope = { dirty: a, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      i || (e && b(e.$$.fragment, r), i = !0);
    },
    o(r) {
      e && C(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && R(n), t[11](null), e && U(e, r);
    }
  };
}
function Na(t, e, n) {
  const i = ["use", "class", "fixed", "component", "tag", "getElement"];
  let l = se(e, i), { $$slots: s = {}, $$scope: o } = e;
  const r = Me(we());
  let { use: a = [] } = e, { class: u = "" } = e, { fixed: c = !0 } = e, f, { component: d = Je } = e, { tag: m = d === Je ? "div" : void 0 } = e;
  function h(E) {
    Ae(_(), "SMUIDrawerScrim:click", E);
  }
  function _() {
    return f.getElement();
  }
  function p(E) {
    ie[E ? "unshift" : "push"](() => {
      f = E, n(5, f);
    });
  }
  return t.$$set = (E) => {
    e = F(F({}, e), Re(E)), n(8, l = se(e, i)), "use" in E && n(0, a = E.use), "class" in E && n(1, u = E.class), "fixed" in E && n(2, c = E.fixed), "component" in E && n(3, d = E.component), "tag" in E && n(4, m = E.tag), "$$scope" in E && n(12, o = E.$$scope);
  }, [
    a,
    u,
    c,
    d,
    m,
    f,
    r,
    h,
    l,
    _,
    s,
    p,
    o
  ];
}
class Ba extends ue {
  constructor(e) {
    super(), ae(this, e, Na, $a, le, {
      use: 0,
      class: 1,
      fixed: 2,
      component: 3,
      tag: 4,
      getElement: 9
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get fixed() {
    return this.$$.ctx[2];
  }
  set fixed(e) {
    this.$$set({ fixed: e }), y();
  }
  get component() {
    return this.$$.ctx[3];
  }
  set component(e) {
    this.$$set({ component: e }), y();
  }
  get tag() {
    return this.$$.ctx[4];
  }
  set tag(e) {
    this.$$set({ tag: e }), y();
  }
  get getElement() {
    return this.$$.ctx[9];
  }
}
oe(Ba, { use: {}, class: {}, fixed: { type: "Boolean" }, component: {}, tag: {} }, ["default"], ["getElement"], !0);
const Ql = {
  isOpen: !1,
  title: "",
  description: "",
  component: void 0,
  componentProps: void 0
}, yn = lt(Ql);
function Yl({
  title: t,
  description: e,
  component: n,
  componentProps: i
}) {
  yn.update(() => ({
    isOpen: !0,
    title: t,
    description: e || "",
    component: n,
    componentProps: i
  }));
}
function Jl() {
  yn.update(() => Ql);
}
function Ua({
  title: t,
  description: e,
  component: n,
  componentProps: i
}) {
  Ge(yn).isOpen ? Jl() : Yl({ title: t, description: e, component: n, componentProps: i });
}
const Pa = {
  //state
  drawer: yn,
  //actions
  handleOpenDrawer: Yl,
  handleCloseDrawer: Jl,
  handleSwitchDrawer: Ua
};
function Fa(t) {
  We(t, "svelte-5syy2s", `#custom-drawer.svelte-5syy2s .mdc-drawer--dismissible{left:initial;right:0;border-right-width:0;border-left-width:1px;border-right-style:none;border-left-style:solid
	}#custom-drawer.svelte-5syy2s .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing) + .mdc-drawer-app-content{margin-right:256px;margin-left:0}#custom-drawer.svelte-5syy2s .mdc-drawer__content{overflow:hidden}#custom-drawer.svelte-5syy2s .mdc-drawer--animate{transform:translateX(100%)
	}#custom-drawer.svelte-5syy2s .mdc-drawer--opening{transform:translateX(0);transition-duration:250ms
	}#custom-drawer.svelte-5syy2s .mdc-drawer--closing{transform:translateX(100%)
	}#custom-drawer.svelte-5syy2s,#custom-drawer.svelte-5syy2s .app-content{height:100%}`);
}
function za(t) {
  let e = (
    /*$drawer*/
    t[0].title + ""
  ), n;
  return {
    c() {
      n = Ee(e);
    },
    m(i, l) {
      O(i, n, l);
    },
    p(i, l) {
      l & /*$drawer*/
      1 && e !== (e = /*$drawer*/
      i[0].title + "") && Ye(n, e);
    },
    d(i) {
      i && R(n);
    }
  };
}
function Va(t) {
  let e = (
    /*$drawer*/
    t[0].description + ""
  ), n;
  return {
    c() {
      n = Ee(e);
    },
    m(i, l) {
      O(i, n, l);
    },
    p(i, l) {
      l & /*$drawer*/
      1 && e !== (e = /*$drawer*/
      i[0].description + "") && Ye(n, e);
    },
    d(i) {
      i && R(n);
    }
  };
}
function qa(t) {
  let e, n, i, l;
  return e = new Oa({
    props: {
      $$slots: { default: [za] },
      $$scope: { ctx: t }
    }
  }), i = new Ha({
    props: {
      $$slots: { default: [Va] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      P(e.$$.fragment), n = K(), P(i.$$.fragment);
    },
    m(s, o) {
      B(e, s, o), O(s, n, o), B(i, s, o), l = !0;
    },
    p(s, o) {
      const r = {};
      o & /*$$scope, $drawer*/
      33 && (r.$$scope = { dirty: o, ctx: s }), e.$set(r);
      const a = {};
      o & /*$$scope, $drawer*/
      33 && (a.$$scope = { dirty: o, ctx: s }), i.$set(a);
    },
    i(s) {
      l || (b(e.$$.fragment, s), b(i.$$.fragment, s), l = !0);
    },
    o(s) {
      C(e.$$.fragment, s), C(i.$$.fragment, s), l = !1;
    },
    d(s) {
      s && R(n), U(e, s), U(i, s);
    }
  };
}
function gi(t) {
  let e, n, i;
  const l = [
    /*$drawer*/
    t[0].componentProps
  ];
  var s = (
    /*InnerComponent*/
    t[1]
  );
  function o(r, a) {
    let u = {};
    for (let c = 0; c < l.length; c += 1)
      u = F(u, l[c]);
    return a !== void 0 && a & /*$drawer*/
    1 && (u = F(u, ne(l, [pe(
      /*$drawer*/
      r[0].componentProps
    )]))), { props: u };
  }
  return s && (e = Be(s, o(t))), {
    c() {
      e && P(e.$$.fragment), n = Oe();
    },
    m(r, a) {
      e && B(e, r, a), O(r, n, a), i = !0;
    },
    p(r, a) {
      if (a & /*InnerComponent*/
      2 && s !== (s = /*InnerComponent*/
      r[1])) {
        if (e) {
          ge();
          const u = e;
          C(u.$$.fragment, 1, 0, () => {
            U(u, 1);
          }), _e();
        }
        s ? (e = Be(s, o(r, a)), P(e.$$.fragment), b(e.$$.fragment, 1), B(e, n.parentNode, n)) : e = null;
      } else if (s) {
        const u = a & /*$drawer*/
        1 ? ne(l, [pe(
          /*$drawer*/
          r[0].componentProps
        )]) : {};
        e.$set(u);
      }
    },
    i(r) {
      i || (e && b(e.$$.fragment, r), i = !0);
    },
    o(r) {
      e && C(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && R(n), e && U(e, r);
    }
  };
}
function ja(t) {
  let e, n, i = (
    /*$drawer*/
    t[0].component && gi(t)
  );
  return {
    c() {
      i && i.c(), e = Oe();
    },
    m(l, s) {
      i && i.m(l, s), O(l, e, s), n = !0;
    },
    p(l, s) {
      /*$drawer*/
      l[0].component ? i ? (i.p(l, s), s & /*$drawer*/
      1 && b(i, 1)) : (i = gi(l), i.c(), b(i, 1), i.m(e.parentNode, e)) : i && (ge(), C(i, 1, 1, () => {
        i = null;
      }), _e());
    },
    i(l) {
      n || (b(i), n = !0);
    },
    o(l) {
      C(i), n = !1;
    },
    d(l) {
      l && R(e), i && i.d(l);
    }
  };
}
function Za(t) {
  let e, n, i, l;
  return e = new Ra({
    props: {
      $$slots: { default: [qa] },
      $$scope: { ctx: t }
    }
  }), i = new Da({
    props: {
      $$slots: { default: [ja] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      P(e.$$.fragment), n = K(), P(i.$$.fragment);
    },
    m(s, o) {
      B(e, s, o), O(s, n, o), B(i, s, o), l = !0;
    },
    p(s, o) {
      const r = {};
      o & /*$$scope, $drawer*/
      33 && (r.$$scope = { dirty: o, ctx: s }), e.$set(r);
      const a = {};
      o & /*$$scope, InnerComponent, $drawer*/
      35 && (a.$$scope = { dirty: o, ctx: s }), i.$set(a);
    },
    i(s) {
      l || (b(e.$$.fragment, s), b(i.$$.fragment, s), l = !0);
    },
    o(s) {
      C(e.$$.fragment, s), C(i.$$.fragment, s), l = !1;
    },
    d(s) {
      s && R(n), U(e, s), U(i, s);
    }
  };
}
function Ga(t) {
  let e;
  const n = (
    /*#slots*/
    t[3].default
  ), i = fe(
    n,
    t,
    /*$$scope*/
    t[5],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(l, s) {
      i && i.m(l, s), e = !0;
    },
    p(l, s) {
      i && i.p && (!e || s & /*$$scope*/
      32) && me(
        i,
        n,
        l,
        /*$$scope*/
        l[5],
        e ? de(
          n,
          /*$$scope*/
          l[5],
          s,
          null
        ) : he(
          /*$$scope*/
          l[5]
        ),
        null
      );
    },
    i(l) {
      e || (b(i, l), e = !0);
    },
    o(l) {
      C(i, l), e = !1;
    },
    d(l) {
      i && i.d(l);
    }
  };
}
function Ka(t) {
  let e, n, i, l, s, o;
  function r(u) {
    t[4](u);
  }
  let a = {
    variant: "dismissible",
    $$slots: { default: [Za] },
    $$scope: { ctx: t }
  };
  return (
    /*$drawer*/
    t[0].isOpen !== void 0 && (a.open = /*$drawer*/
    t[0].isOpen), n = new Wl({ props: a }), ie.push(() => ct(n, "open", r)), s = new La({
      props: {
        class: "app-content",
        $$slots: { default: [Ga] },
        $$scope: { ctx: t }
      }
    }), {
      c() {
        e = V("div"), P(n.$$.fragment), l = K(), P(s.$$.fragment), N(e, "id", "custom-drawer"), N(e, "class", "svelte-5syy2s");
      },
      m(u, c) {
        O(u, e, c), B(n, e, null), j(e, l), B(s, e, null), o = !0;
      },
      p(u, [c]) {
        const f = {};
        c & /*$$scope, InnerComponent, $drawer*/
        35 && (f.$$scope = { dirty: c, ctx: u }), !i && c & /*$drawer*/
        1 && (i = !0, f.open = /*$drawer*/
        u[0].isOpen, ut(() => i = !1)), n.$set(f);
        const d = {};
        c & /*$$scope*/
        32 && (d.$$scope = { dirty: c, ctx: u }), s.$set(d);
      },
      i(u) {
        o || (b(n.$$.fragment, u), b(s.$$.fragment, u), o = !0);
      },
      o(u) {
        C(n.$$.fragment, u), C(s.$$.fragment, u), o = !1;
      },
      d(u) {
        u && R(e), U(n), U(s);
      }
    }
  );
}
function Wa(t, e, n) {
  let i, l, { $$slots: s = {}, $$scope: o } = e;
  const { drawer: r } = Pa;
  wt(t, r, (u) => n(0, l = u));
  function a(u) {
    t.$$.not_equal(l.isOpen, u) && (l.isOpen = u, r.set(l));
  }
  return t.$$set = (u) => {
    "$$scope" in u && n(5, o = u.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*$drawer*/
    1 && n(1, i = l.component || null);
  }, [l, i, r, s, a, o];
}
class Xa extends ue {
  constructor(e) {
    super(), ae(this, e, Wa, Ka, le, {}, Fa);
  }
}
oe(Xa, {}, ["default"], [], !0);
const Qa = "/fonts.css", Ya = "/theme.css", Ja = "/bare.css";
var xa = ((t) => (t.GOOSE = "GOOSE", t.MMS = "MMS", t.SampledValues = "SampledValues", t.Unknown = "Unknown", t))(xa || {}), eo = class {
  constructor(t) {
    this.root = t;
  }
  retrieveAncestorsNameBySelectorWithAttribute({ ancestor: t, selector: e, attribute: n }) {
    var r;
    let i = this.determineRoot(), l = `${e}[${n}]`, s = Array.from(i.querySelectorAll(l)), o = /* @__PURE__ */ new Set();
    for (let a of s) {
      let u = (r = a.closest(t)) == null ? void 0 : r.getAttribute("name");
      u && o.add(u);
    }
    return o;
  }
  determineRoot(t) {
    return (t == null ? void 0 : t.root) || this.root;
  }
  searchElement(t, e, n) {
    let i = this.determineRoot(n);
    return Array.from(i.querySelectorAll(t)).map((l) => this.createElement(l, e));
  }
  searchElements(t, e, n) {
    let i = this.determineRoot(n);
    return Array.from(i.querySelectorAll(t)).map((l) => this.createElement(l, e));
  }
  searchElementsWithChildren({ selector: t, childrenKey: e, attributeList: n, options: i }) {
    let l = this.determineRoot(i);
    return Array.from(l.querySelectorAll(t)).map((s) => ({ ...this.createElement(s, n), [e]: Array.from(s.children).map((o) => this.createElement(o)) }));
  }
  searchSingleElement(t, e, n) {
    let i = this.determineRoot(n).querySelector(t);
    return i === null ? null : this.createElement(i, e);
  }
  searchElementParent(t, e, n) {
    let i = t.closest(e);
    if (i) return this.createElement(i, n);
  }
  createElement(t, e) {
    let n = { element: t };
    if (e) for (let i of e) {
      let l = i;
      n[l] = t.getAttribute(l) ?? "";
    }
    else for (let i of Array.from(t.attributes)) n[i.name] = i.value;
    return n;
  }
}, It = ["id", "name", "desc"], Ut = { substation: { element: { tag: "Substation", name: "Substation", standardAttributes: [...It], customAttributes: [] }, type: { tag: "td:SubstationType", baseName: "SubstationType_", baseId: "substation-type-", insertBefore: "voltageLevelTypes" }, typeRef: { tag: void 0, to: void 0, from: "voltageLevel" } }, voltageLevel: { element: { tag: "VoltageLevel", name: "Voltage Level", standardAttributes: [...It, "nomFreq", "numPhases"], customAttributes: [] }, type: { tag: "td:VoltageLevelType", baseName: "VoltageLevelType_", baseId: "voltage-level-type-", insertBefore: "bayTypes" }, typeRef: { tag: "td:VoltageLevelTypeRef", to: "substation", from: "bay" } }, bay: { element: { tag: "Bay", name: "Bay", standardAttributes: [...It], customAttributes: [] }, type: { tag: "td:BayType", baseName: "BayType_", baseId: "bay-type-", insertBefore: "iedTypes" }, typeRef: { tag: "td:BayTypeRef", to: "voltageLevel", from: "ied" } }, ied: { element: { tag: "IED", name: "IED", standardAttributes: [...It, "originalSclRevision", "originalSclVersion", "configVersion", "owner", "manufacturer", "type"], customAttributes: [] }, type: { tag: "td:IEDType", baseName: "IEDType_", baseId: "ied-type-", insertBefore: "lDeviceTypes" }, typeRef: { tag: "td:IEDTypeRef", to: "bay", from: "lDevice" } }, lDevice: { element: { tag: "LDevice", name: "Logical Device", standardAttributes: [...It, "inst"], customAttributes: [] }, type: { tag: "td:LDeviceType", baseName: "LDeviceType_", baseId: "ldevice-type-", insertBefore: void 0 }, typeRef: { tag: "td:LDeviceTypeRef", to: "ied", from: "lNode" } }, lNode: { element: { tag: "LNode", name: "Logical Node", standardAttributes: [...It, "lnClass"], customAttributes: [] }, type: { tag: "LNodeType", baseName: "LNodeType_", baseId: "lnode-type-", insertBefore: void 0 }, typeRef: { tag: "td:LNodeTypeRef", to: "lDevice", from: void 0 } }, reportControl: { element: { tag: "ReportControl", name: "Report Control", standardAttributes: [...It, "confRev", "datSet", "intgPd", "buffered", "bufTime", "indexed", "rptID"], customAttributes: [] }, type: void 0, typeRef: void 0 }, clientLN: { element: { tag: "ClientLN", name: "Client LNode", standardAttributes: [...It, "iedName", "ldInst", "prefix", "lnClass", "lnInst"], customAttributes: [] }, type: void 0, typeRef: void 0 }, inputs: { element: { tag: "Inputs", name: "Inputs", standardAttributes: [], customAttributes: [] }, type: void 0, typeRef: void 0 }, extRef: { element: { tag: "ExtRef", name: "External Reference", standardAttributes: ["iedName", "serviceType", "ldInst", "lnClass", "lnInst", "prefix", "doName", "daName", "srcLDInst", "srcPrefix", "srcCBName", "intAddr"], customAttributes: [] }, type: void 0, typeRef: void 0 }, gseControl: { element: { tag: "GSEControl", name: "GSE Control", standaAttributes: ["appID", "datSet", "confRev", "fixedOffs", "type"], customAttributes: [] }, type: void 0, typeRef: void 0 } }, qe, to = (qe = class extends eo {
  searchDataTypeTemplates() {
    return this.searchSingleElement(qe.SelectorDataTypeTemplates, []);
  }
  searchPrivateElement(e, n) {
    return this.searchElements(e, [], n)[0] || null;
  }
  searchSubstationTypeElements(e) {
    return this.searchElementsWithChildren({ selector: qe.SelectorSubstationType, childrenKey: "typeRefs", attributeList: [...Ut.substation.element.standardAttributes], options: e });
  }
  searchVoltageLevelTypeElements(e) {
    return this.searchElementsWithChildren({ selector: qe.SelectorVoltageLevelType, childrenKey: "typeRefs", attributeList: [...Ut.voltageLevel.element.standardAttributes], options: e });
  }
  searchBayTypeElements(e) {
    return this.searchElementsWithChildren({ selector: qe.SelectorBayType, childrenKey: "typeRefs", attributeList: [...Ut.bay.element.standardAttributes], options: e });
  }
  searchIEDTypeElements(e) {
    return this.searchElementsWithChildren({ selector: qe.SelectorIEDType, childrenKey: "typeRefs", attributeList: [...Ut.ied.element.standardAttributes], options: e });
  }
  searchLDeviceTypeElements(e) {
    return this.searchElementsWithChildren({ selector: qe.SelectorLDeviceType, childrenKey: "typeRefs", attributeList: [...Ut.lDevice.element.standardAttributes], options: e });
  }
  searchLNodeTypeElements(e) {
    return this.searchElements(qe.SelectorLNodeType, [...Ut.lNode.element.standardAttributes], e).map((n) => ({ ...n, typeRefs: void 0 }));
  }
}, Fe(qe, "SelectorDataTypeTemplates", "DataTypeTemplates"), Fe(qe, "SelectorSubstationType", "SubstationType"), Fe(qe, "SelectorVoltageLevelType", "VoltageLevelType"), Fe(qe, "SelectorBayType", "BayType"), Fe(qe, "SelectorIEDType", "IEDType"), Fe(qe, "SelectorLDeviceType", "LDeviceType"), Fe(qe, "SelectorLNodeType", "LNodeType"), qe), xl = class {
  constructor(t) {
    Fe(this, "dataTypeTemplatesQueries");
    this.root = t, this.dataTypeTemplatesQueries = new to(this.root);
  }
  findDataTypesElement() {
    return this.dataTypeTemplatesQueries.searchDataTypeTemplates();
  }
  findPrivateElement(t, e) {
    return this.dataTypeTemplatesQueries.searchPrivateElement(t, e);
  }
  findTypeElements(t) {
    return { substationTypes: this.dataTypeTemplatesQueries.searchSubstationTypeElements(t), voltageLevelTypes: this.dataTypeTemplatesQueries.searchVoltageLevelTypeElements(t), bayTypes: this.dataTypeTemplatesQueries.searchBayTypeElements(t), iedTypes: this.dataTypeTemplatesQueries.searchIEDTypeElements(t), lDeviceTypes: this.dataTypeTemplatesQueries.searchLDeviceTypeElements(t), lNodeTypes: this.dataTypeTemplatesQueries.searchLNodeTypeElements() };
  }
};
function Qt(t, e, n) {
  let i = t.createElementNS(t.documentElement.namespaceURI, e);
  return Object.entries(n).filter(([l, s]) => s !== null).forEach(([l, s]) => i.setAttribute(l, s)), i;
}
function no(t) {
  let e = new XMLSerializer().serializeToString(t);
  return e.startsWith("<?xml") ? e : `<?xml version="1.0" encoding="UTF-8"?>
` + e;
}
function io(t) {
  var e, n;
  return t.old === void 0 && ((e = t.new) == null ? void 0 : e.parent) !== void 0 && ((n = t.new) == null ? void 0 : n.element) !== void 0;
}
function lo(t) {
  var e, n;
  return ((e = t.old) == null ? void 0 : e.parent) !== void 0 && ((n = t.old) == null ? void 0 : n.element) !== void 0 && t.new === void 0;
}
function so(t) {
  var e, n, i, l;
  return ((e = t.old) == null ? void 0 : e.parent) !== void 0 && ((n = t.old) == null ? void 0 : n.element) !== void 0 && ((i = t.new) == null ? void 0 : i.parent) !== void 0 && ((l = t.new) == null ? void 0 : l.element) == null;
}
function ro(t) {
  var e, n, i, l;
  return ((e = t.old) == null ? void 0 : e.parent) === void 0 && ((n = t.old) == null ? void 0 : n.element) !== void 0 && ((i = t.new) == null ? void 0 : i.parent) === void 0 && ((l = t.new) == null ? void 0 : l.element) !== void 0;
}
function ao(t) {
  return t.old === void 0 && t.new === void 0 && t.element !== void 0 && t.newAttributes !== void 0 && t.oldAttributes !== void 0;
}
function oo(t, e) {
  let n = {};
  return Array.from(t.attributes).forEach((i) => {
    n[i.name] = i.value;
  }), { element: t, oldAttributes: n, newAttributes: e };
}
function An(t, e = "user", n) {
  return new CustomEvent("editor-action", { bubbles: !0, composed: !0, ...n, detail: { action: t, initiator: e, ...n == null ? void 0 : n.detail } });
}
function uo(t, e, n) {
  return new CustomEvent("open-doc", { bubbles: !0, composed: !0, ...n, detail: { doc: t, docName: e, ...n == null ? void 0 : n.detail } });
}
function co(t) {
  function e() {
    return Reflect.construct(HTMLElement, [], new.target);
  }
  return e.prototype = Object.create(HTMLElement.prototype), e.prototype.pluginInstance = void 0, e.prototype.localDoc = void 0, e.prototype.localDocName = void 0, e.prototype.localEditCount = -1, Object.defineProperty(e.prototype, "doc", { get: function() {
    return this.localDoc;
  }, set: function(n) {
    this.localDoc = n, this.pluginInstance && this.pluginInstance.$set({ xmlDocument: n });
  } }), Object.defineProperty(e.prototype, "docName", { get: function() {
    return this.localDocName;
  }, set: function(n) {
    this.localDocName = n;
  } }), Object.defineProperty(e.prototype, "editCount", { get: function() {
    return this.localEditCount;
  }, set: function(n) {
    this.localEditCount = n, this.pluginInstance && this.pluginInstance.$set({ editCount: n });
  } }), e.prototype.connectedCallback = function() {
    this.pluginInstance = new t({ target: this.attachShadow({ mode: "open" }), props: { xmlDocument: this.localDoc, pluginHostElement: this, editCount: this.localEditCount } });
  }, e;
}
function fo(t) {
  function e() {
    return Reflect.construct(HTMLElement, [], new.target);
  }
  return e.prototype = Object.create(HTMLElement.prototype), e.prototype.pluginInstance = void 0, e.prototype.run = function() {
    return this.pluginInstance.run();
  }, e.prototype.connectedCallback = function() {
    this.pluginInstance = new t({ target: this.attachShadow({ mode: "open" }) });
  }, e;
}
function mo(t) {
  function e() {
    return Reflect.construct(HTMLElement, [], this.constructor);
  }
  return e.prototype = Object.create(HTMLElement.prototype), e.prototype.pluginInstance = null, e.prototype.connectedCallback = function() {
    this.pluginInstance = new t({ target: this.attachShadow({ mode: "open" }) });
  }, e;
}
function ho(t) {
  console.warn("TODO onCreate", t);
}
function po(t) {
  t.new.parent.insertBefore(t.new.element, t.new.reference ?? null);
}
function go(t) {
  t.old.reference || (t.old.reference = t.old.element.nextSibling), t.old.element.parentNode === t.old.parent && t.old.parent.removeChild(t.old.element);
}
function _o(t) {
  console.warn("TODO onReplace", t);
}
function bo(t) {
  for (let e of Array.from(t.element.attributes)) t.element.removeAttributeNode(e);
  for (let [e, n] of Object.entries(t.newAttributes)) t.element.setAttribute(e, n ?? "");
}
function vo(t, e) {
  t.doc = e.detail.doc, t.docName = e.detail.docName;
}
function Co(t) {
  if (!t.doc) return;
  let e = no(t.doc), n = new Blob([e], { type: "application/xml" }), i = URL.createObjectURL(n), l = document.createElement("a");
  l.href = i, l.download = t.docName || "file.xml", document.body.appendChild(l), l.click(), document.body.removeChild(l), URL.revokeObjectURL(i);
}
function yo(t, e) {
  let { action: n } = e.detail;
  so(n) && ho(n), io(n) && po(n), lo(n) && go(n), ro(n) && _o(n), ao(n) && bo(n), t.editCount++;
}
function Ao(t, e) {
  customElements.define("stand-alone-plugin", t);
  let n = document.createElement("stand-alone-plugin");
  document.body.appendChild(n), e === "editor" && Eo(n);
}
function Eo(t) {
  document.addEventListener("open-doc", (e) => vo(t, e)), document.addEventListener("save-doc", () => Co(t)), document.addEventListener("editor-action", (e) => yo(t, e));
}
function Io({ pluginType: t, isStandAlone: e, pluginComponent: n }) {
  let i = { editor: co(n), menu: fo(n), validator: mo(n) };
  return e ? Ao(i[t], t) : i[t];
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ht = {
  FIXED_CLASS: "mdc-top-app-bar--fixed",
  FIXED_SCROLLED_CLASS: "mdc-top-app-bar--fixed-scrolled",
  SHORT_CLASS: "mdc-top-app-bar--short",
  SHORT_COLLAPSED_CLASS: "mdc-top-app-bar--short-collapsed",
  SHORT_HAS_ACTION_ITEM_CLASS: "mdc-top-app-bar--short-has-action-item"
}, mn = {
  DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
  MAX_TOP_APP_BAR_HEIGHT: 128
}, To = {
  ACTION_ITEM_SELECTOR: ".mdc-top-app-bar__action-item",
  NAVIGATION_EVENT: "MDCTopAppBar:nav",
  NAVIGATION_ICON_SELECTOR: ".mdc-top-app-bar__navigation-icon",
  ROOT_SELECTOR: ".mdc-top-app-bar",
  TITLE_SELECTOR: ".mdc-top-app-bar__title"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Yn = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      return t.call(this, $e($e({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return To;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ht;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return mn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCTopAppBarAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          setStyle: function() {
          },
          getTopAppBarHeight: function() {
            return 0;
          },
          notifyNavigationIconClicked: function() {
          },
          getViewportScrollY: function() {
            return 0;
          },
          getTotalActionItems: function() {
            return 0;
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.handleTargetScroll = function() {
    }, e.prototype.handleWindowResize = function() {
    }, e.prototype.handleNavigationClick = function() {
      this.adapter.notifyNavigationIconClicked();
    }, e;
  }(gt)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var on = 0, Vn = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var i = t.call(this, n) || this;
      return i.wasDocked = !0, i.isDockedShowing = !0, i.currentAppBarOffsetTop = 0, i.isCurrentlyBeingResized = !1, i.resizeThrottleId = on, i.resizeDebounceId = on, i.lastScrollPosition = i.adapter.getViewportScrollY(), i.topAppBarHeight = i.adapter.getTopAppBarHeight(), i;
    }
    return e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.adapter.setStyle("top", "");
    }, e.prototype.handleTargetScroll = function() {
      var n = Math.max(this.adapter.getViewportScrollY(), 0), i = n - this.lastScrollPosition;
      this.lastScrollPosition = n, this.isCurrentlyBeingResized || (this.currentAppBarOffsetTop -= i, this.currentAppBarOffsetTop > 0 ? this.currentAppBarOffsetTop = 0 : Math.abs(this.currentAppBarOffsetTop) > this.topAppBarHeight && (this.currentAppBarOffsetTop = -this.topAppBarHeight), this.moveTopAppBar());
    }, e.prototype.handleWindowResize = function() {
      var n = this;
      this.resizeThrottleId || (this.resizeThrottleId = setTimeout(function() {
        n.resizeThrottleId = on, n.throttledResizeHandler();
      }, mn.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)), this.isCurrentlyBeingResized = !0, this.resizeDebounceId && clearTimeout(this.resizeDebounceId), this.resizeDebounceId = setTimeout(function() {
        n.handleTargetScroll(), n.isCurrentlyBeingResized = !1, n.resizeDebounceId = on;
      }, mn.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
    }, e.prototype.checkForUpdate = function() {
      var n = -this.topAppBarHeight, i = this.currentAppBarOffsetTop < 0, l = this.currentAppBarOffsetTop > n, s = i && l;
      if (s)
        this.wasDocked = !1;
      else if (this.wasDocked) {
        if (this.isDockedShowing !== l)
          return this.isDockedShowing = l, !0;
      } else return this.wasDocked = !0, !0;
      return s;
    }, e.prototype.moveTopAppBar = function() {
      if (this.checkForUpdate()) {
        var n = this.currentAppBarOffsetTop;
        Math.abs(n) >= this.topAppBarHeight && (n = -mn.MAX_TOP_APP_BAR_HEIGHT), this.adapter.setStyle("top", n + "px");
      }
    }, e.prototype.throttledResizeHandler = function() {
      var n = this.adapter.getTopAppBarHeight();
      this.topAppBarHeight !== n && (this.wasDocked = !1, this.currentAppBarOffsetTop -= this.topAppBarHeight - n, this.topAppBarHeight = n), this.handleTargetScroll();
    }, e;
  }(Yn)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var wo = (
  /** @class */
  function(t) {
    et(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.wasScrolled = !1, n;
    }
    return e.prototype.handleTargetScroll = function() {
      var n = this.adapter.getViewportScrollY();
      n <= 0 ? this.wasScrolled && (this.adapter.removeClass(Ht.FIXED_SCROLLED_CLASS), this.wasScrolled = !1) : this.wasScrolled || (this.adapter.addClass(Ht.FIXED_SCROLLED_CLASS), this.wasScrolled = !0);
    }, e;
  }(Vn)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var So = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var i = t.call(this, n) || this;
      return i.collapsed = !1, i.isAlwaysCollapsed = !1, i;
    }
    return Object.defineProperty(e.prototype, "isCollapsed", {
      // Public visibility for backward compatibility.
      get: function() {
        return this.collapsed;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      t.prototype.init.call(this), this.adapter.getTotalActionItems() > 0 && this.adapter.addClass(Ht.SHORT_HAS_ACTION_ITEM_CLASS), this.setAlwaysCollapsed(this.adapter.hasClass(Ht.SHORT_COLLAPSED_CLASS));
    }, e.prototype.setAlwaysCollapsed = function(n) {
      this.isAlwaysCollapsed = !!n, this.isAlwaysCollapsed ? this.collapse() : this.maybeCollapseBar();
    }, e.prototype.getAlwaysCollapsed = function() {
      return this.isAlwaysCollapsed;
    }, e.prototype.handleTargetScroll = function() {
      this.maybeCollapseBar();
    }, e.prototype.maybeCollapseBar = function() {
      if (!this.isAlwaysCollapsed) {
        var n = this.adapter.getViewportScrollY();
        n <= 0 ? this.collapsed && this.uncollapse() : this.collapsed || this.collapse();
      }
    }, e.prototype.uncollapse = function() {
      this.adapter.removeClass(Ht.SHORT_COLLAPSED_CLASS), this.collapsed = !1;
    }, e.prototype.collapse = function() {
      this.adapter.addClass(Ht.SHORT_COLLAPSED_CLASS), this.collapsed = !0;
    }, e;
  }(Yn)
);
const { window: _i } = fr;
function ko(t) {
  let e, n, i, l, s, o, r;
  const a = (
    /*#slots*/
    t[22].default
  ), u = fe(
    a,
    t,
    /*$$scope*/
    t[21],
    null
  );
  let c = [
    {
      class: n = Y({
        [
          /*className*/
          t[2]
        ]: !0,
        "mdc-top-app-bar": !0,
        "mdc-top-app-bar--short": (
          /*variant*/
          t[4] === "short"
        ),
        "mdc-top-app-bar--short-collapsed": (
          /*collapsed*/
          t[0]
        ),
        "mdc-top-app-bar--fixed": (
          /*variant*/
          t[4] === "fixed"
        ),
        "smui-top-app-bar--static": (
          /*variant*/
          t[4] === "static"
        ),
        "smui-top-app-bar--color-secondary": (
          /*color*/
          t[5] === "secondary"
        ),
        "mdc-top-app-bar--prominent": (
          /*prominent*/
          t[6]
        ),
        "mdc-top-app-bar--dense": (
          /*dense*/
          t[7]
        ),
        .../*internalClasses*/
        t[11]
      })
    },
    {
      style: i = Object.entries(
        /*internalStyles*/
        t[12]
      ).map(bi).concat([
        /*style*/
        t[3]
      ]).join(" ")
    },
    /*$$restProps*/
    t[15]
  ], f = {};
  for (let d = 0; d < c.length; d += 1)
    f = F(f, c[d]);
  return {
    c() {
      e = V("header"), u && u.c(), ce(e, f);
    },
    m(d, m) {
      O(d, e, m), u && u.m(e, null), t[25](e), s = !0, o || (r = [
        x(
          _i,
          "resize",
          /*resize_handler*/
          t[23]
        ),
        x(
          _i,
          "scroll",
          /*scroll_handler*/
          t[24]
        ),
        ee(l = De.call(
          null,
          e,
          /*use*/
          t[1]
        )),
        ee(
          /*forwardEvents*/
          t[13].call(null, e)
        ),
        x(
          e,
          "SMUITopAppBarIconButton:nav",
          /*SMUITopAppBarIconButton_nav_handler*/
          t[26]
        )
      ], o = !0);
    },
    p(d, m) {
      u && u.p && (!s || m[0] & /*$$scope*/
      2097152) && me(
        u,
        a,
        d,
        /*$$scope*/
        d[21],
        s ? de(
          a,
          /*$$scope*/
          d[21],
          m,
          null
        ) : he(
          /*$$scope*/
          d[21]
        ),
        null
      ), ce(e, f = ne(c, [
        (!s || m[0] & /*className, variant, collapsed, color, prominent, dense, internalClasses*/
        2293 && n !== (n = Y({
          [
            /*className*/
            d[2]
          ]: !0,
          "mdc-top-app-bar": !0,
          "mdc-top-app-bar--short": (
            /*variant*/
            d[4] === "short"
          ),
          "mdc-top-app-bar--short-collapsed": (
            /*collapsed*/
            d[0]
          ),
          "mdc-top-app-bar--fixed": (
            /*variant*/
            d[4] === "fixed"
          ),
          "smui-top-app-bar--static": (
            /*variant*/
            d[4] === "static"
          ),
          "smui-top-app-bar--color-secondary": (
            /*color*/
            d[5] === "secondary"
          ),
          "mdc-top-app-bar--prominent": (
            /*prominent*/
            d[6]
          ),
          "mdc-top-app-bar--dense": (
            /*dense*/
            d[7]
          ),
          .../*internalClasses*/
          d[11]
        }))) && { class: n },
        (!s || m[0] & /*internalStyles, style*/
        4104 && i !== (i = Object.entries(
          /*internalStyles*/
          d[12]
        ).map(bi).concat([
          /*style*/
          d[3]
        ]).join(" "))) && { style: i },
        m[0] & /*$$restProps*/
        32768 && /*$$restProps*/
        d[15]
      ])), l && Ce(l.update) && m[0] & /*use*/
      2 && l.update.call(
        null,
        /*use*/
        d[1]
      );
    },
    i(d) {
      s || (b(u, d), s = !0);
    },
    o(d) {
      C(u, d), s = !1;
    },
    d(d) {
      d && R(e), u && u.d(d), t[25](null), o = !1, Te(r);
    }
  };
}
const bi = ([t, e]) => `${t}: ${e};`;
function Lo(t, e, n) {
  const i = [
    "use",
    "class",
    "style",
    "variant",
    "color",
    "collapsed",
    "prominent",
    "dense",
    "scrollTarget",
    "getPropStore",
    "getElement"
  ];
  let l = se(e, i), { $$slots: s = {}, $$scope: o } = e;
  const r = Me(we());
  let a = () => {
  };
  function u(J) {
    return J === a;
  }
  let { use: c = [] } = e, { class: f = "" } = e, { style: d = "" } = e, { variant: m = "standard" } = e, { color: h = "primary" } = e, { collapsed: _ = a } = e;
  const p = !u(_) && !!_;
  u(_) && (_ = !1);
  let { prominent: E = !1 } = e, { dense: S = !1 } = e, { scrollTarget: M = void 0 } = e, A, v, I = {}, g = {}, T, q = Qn({ variant: m, prominent: E, dense: S }, (J) => {
    n(18, T = J);
  }), H, w = m;
  Qe(() => (n(9, v = z()), v.init(), () => {
    v.destroy();
  }));
  function z() {
    const J = {
      static: Yn,
      short: So,
      fixed: wo,
      standard: Vn
    }[m] || Vn;
    return new J({
      hasClass: L,
      addClass: Z,
      removeClass: ke,
      setStyle: ve,
      getTopAppBarHeight: () => A.clientHeight,
      notifyNavigationIconClicked: () => Ae(A, "SMUITopAppBar:nav", void 0, void 0, !0),
      getViewportScrollY: () => M == null ? window.pageYOffset : M.scrollTop,
      getTotalActionItems: () => A.querySelectorAll(".mdc-top-app-bar__action-item").length
    });
  }
  function L(J) {
    return J in I ? I[J] : k().classList.contains(J);
  }
  function Z(J) {
    I[J] || n(11, I[J] = !0, I);
  }
  function ke(J) {
    (!(J in I) || I[J]) && n(11, I[J] = !1, I);
  }
  function ve(J, ye) {
    g[J] != ye && (ye === "" || ye == null ? (delete g[J], n(12, g), n(20, w), n(4, m), n(9, v)) : n(12, g[J] = ye, g));
  }
  function be() {
    v && (v.handleTargetScroll(), m === "short" && n(0, _ = "isCollapsed" in v && v.isCollapsed));
  }
  function X() {
    return q;
  }
  function k() {
    return A;
  }
  const Q = () => m !== "short" && m !== "fixed" && v && v.handleWindowResize(), Se = () => M == null && be();
  function Le(J) {
    ie[J ? "unshift" : "push"](() => {
      A = J, n(10, A);
    });
  }
  const Ve = () => v && v.handleNavigationClick();
  return t.$$set = (J) => {
    e = F(F({}, e), Re(J)), n(15, l = se(e, i)), "use" in J && n(1, c = J.use), "class" in J && n(2, f = J.class), "style" in J && n(3, d = J.style), "variant" in J && n(4, m = J.variant), "color" in J && n(5, h = J.color), "collapsed" in J && n(0, _ = J.collapsed), "prominent" in J && n(6, E = J.prominent), "dense" in J && n(7, S = J.dense), "scrollTarget" in J && n(8, M = J.scrollTarget), "$$scope" in J && n(21, o = J.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*propStoreSet, variant, prominent, dense*/
    262352 && T && T({ variant: m, prominent: E, dense: S }), t.$$.dirty[0] & /*oldVariant, variant, instance*/
    1049104 && w !== m && v && (n(20, w = m), v.destroy(), n(11, I = {}), n(12, g = {}), n(9, v = z()), v.init()), t.$$.dirty[0] & /*instance, variant*/
    528 && v && m === "short" && "setAlwaysCollapsed" in v && v.setAlwaysCollapsed(p), t.$$.dirty[0] & /*oldScrollTarget, scrollTarget*/
    524544 && H !== M && (H && H.removeEventListener("scroll", be), M && M.addEventListener("scroll", be), n(19, H = M));
  }, [
    _,
    c,
    f,
    d,
    m,
    h,
    E,
    S,
    M,
    v,
    A,
    I,
    g,
    r,
    be,
    l,
    X,
    k,
    T,
    H,
    w,
    o,
    s,
    Q,
    Se,
    Le,
    Ve
  ];
}
class es extends ue {
  constructor(e) {
    super(), ae(
      this,
      e,
      Lo,
      ko,
      le,
      {
        use: 1,
        class: 2,
        style: 3,
        variant: 4,
        color: 5,
        collapsed: 0,
        prominent: 6,
        dense: 7,
        scrollTarget: 8,
        getPropStore: 16,
        getElement: 17
      },
      null,
      [-1, -1]
    );
  }
  get use() {
    return this.$$.ctx[1];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[2];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get style() {
    return this.$$.ctx[3];
  }
  set style(e) {
    this.$$set({ style: e }), y();
  }
  get variant() {
    return this.$$.ctx[4];
  }
  set variant(e) {
    this.$$set({ variant: e }), y();
  }
  get color() {
    return this.$$.ctx[5];
  }
  set color(e) {
    this.$$set({ color: e }), y();
  }
  get collapsed() {
    return this.$$.ctx[0];
  }
  set collapsed(e) {
    this.$$set({ collapsed: e }), y();
  }
  get prominent() {
    return this.$$.ctx[6];
  }
  set prominent(e) {
    this.$$set({ prominent: e }), y();
  }
  get dense() {
    return this.$$.ctx[7];
  }
  set dense(e) {
    this.$$set({ dense: e }), y();
  }
  get scrollTarget() {
    return this.$$.ctx[8];
  }
  set scrollTarget(e) {
    this.$$set({ scrollTarget: e }), y();
  }
  get getPropStore() {
    return this.$$.ctx[16];
  }
  get getElement() {
    return this.$$.ctx[17];
  }
}
oe(es, { use: {}, class: {}, style: {}, variant: {}, color: {}, collapsed: {}, prominent: { type: "Boolean" }, dense: { type: "Boolean" }, scrollTarget: {} }, ["default"], ["getPropStore", "getElement"], !0);
const Do = _t({
  class: "mdc-top-app-bar__row",
  tag: "div"
});
function Ro(t) {
  let e, n, i, l, s, o;
  const r = (
    /*#slots*/
    t[9].default
  ), a = fe(
    r,
    t,
    /*$$scope*/
    t[8],
    null
  );
  let u = [
    {
      class: n = Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-top-app-bar__section": !0,
        "mdc-top-app-bar__section--align-start": (
          /*align*/
          t[2] === "start"
        ),
        "mdc-top-app-bar__section--align-end": (
          /*align*/
          t[2] === "end"
        )
      })
    },
    /*toolbar*/
    t[3] ? { role: "toolbar" } : {},
    /*$$restProps*/
    t[6]
  ], c = {};
  for (let f = 0; f < u.length; f += 1)
    c = F(c, u[f]);
  return {
    c() {
      e = V("section"), a && a.c(), ce(e, c);
    },
    m(f, d) {
      O(f, e, d), a && a.m(e, null), t[10](e), l = !0, s || (o = [
        ee(i = De.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        ee(
          /*forwardEvents*/
          t[5].call(null, e)
        )
      ], s = !0);
    },
    p(f, [d]) {
      a && a.p && (!l || d & /*$$scope*/
      256) && me(
        a,
        r,
        f,
        /*$$scope*/
        f[8],
        l ? de(
          r,
          /*$$scope*/
          f[8],
          d,
          null
        ) : he(
          /*$$scope*/
          f[8]
        ),
        null
      ), ce(e, c = ne(u, [
        (!l || d & /*className, align*/
        6 && n !== (n = Y({
          [
            /*className*/
            f[1]
          ]: !0,
          "mdc-top-app-bar__section": !0,
          "mdc-top-app-bar__section--align-start": (
            /*align*/
            f[2] === "start"
          ),
          "mdc-top-app-bar__section--align-end": (
            /*align*/
            f[2] === "end"
          )
        }))) && { class: n },
        d & /*toolbar*/
        8 && /*toolbar*/
        (f[3] ? { role: "toolbar" } : {}),
        d & /*$$restProps*/
        64 && /*$$restProps*/
        f[6]
      ])), i && Ce(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      l || (b(a, f), l = !0);
    },
    o(f) {
      C(a, f), l = !1;
    },
    d(f) {
      f && R(e), a && a.d(f), t[10](null), s = !1, Te(o);
    }
  };
}
function Oo(t, e, n) {
  const i = ["use", "class", "align", "toolbar", "getElement"];
  let l = se(e, i), { $$slots: s = {}, $$scope: o } = e;
  const r = Me(we());
  let { use: a = [] } = e, { class: u = "" } = e, { align: c = "start" } = e, { toolbar: f = !1 } = e, d;
  He("SMUI:icon-button:context", f ? "top-app-bar:action" : "top-app-bar:navigation"), He("SMUI:button:context", f ? "top-app-bar:action" : "top-app-bar:navigation");
  function m() {
    return d;
  }
  function h(_) {
    ie[_ ? "unshift" : "push"](() => {
      d = _, n(4, d);
    });
  }
  return t.$$set = (_) => {
    e = F(F({}, e), Re(_)), n(6, l = se(e, i)), "use" in _ && n(0, a = _.use), "class" in _ && n(1, u = _.class), "align" in _ && n(2, c = _.align), "toolbar" in _ && n(3, f = _.toolbar), "$$scope" in _ && n(8, o = _.$$scope);
  }, [
    a,
    u,
    c,
    f,
    d,
    r,
    l,
    m,
    o,
    s,
    h
  ];
}
class qn extends ue {
  constructor(e) {
    super(), ae(this, e, Oo, Ro, le, {
      use: 0,
      class: 1,
      align: 2,
      toolbar: 3,
      getElement: 7
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get align() {
    return this.$$.ctx[2];
  }
  set align(e) {
    this.$$set({ align: e }), y();
  }
  get toolbar() {
    return this.$$.ctx[3];
  }
  set toolbar(e) {
    this.$$set({ toolbar: e }), y();
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
oe(qn, { use: {}, class: {}, align: {}, toolbar: { type: "Boolean" } }, ["default"], ["getElement"], !0);
const Ho = _t({
  class: "mdc-top-app-bar__title",
  tag: "span"
});
function Mo(t) {
  let e;
  const n = (
    /*#slots*/
    t[12].default
  ), i = fe(
    n,
    t,
    /*$$scope*/
    t[14],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(l, s) {
      i && i.m(l, s), e = !0;
    },
    p(l, s) {
      i && i.p && (!e || s & /*$$scope*/
      16384) && me(
        i,
        n,
        l,
        /*$$scope*/
        l[14],
        e ? de(
          n,
          /*$$scope*/
          l[14],
          s,
          null
        ) : he(
          /*$$scope*/
          l[14]
        ),
        null
      );
    },
    i(l) {
      e || (b(i, l), e = !0);
    },
    o(l) {
      C(i, l), e = !1;
    },
    d(l) {
      i && i.d(l);
    }
  };
}
function $o(t) {
  let e, n, i;
  const l = [
    { tag: (
      /*tag*/
      t[3]
    ) },
    {
      use: [
        /*forwardEvents*/
        t[7],
        .../*use*/
        t[0]
      ]
    },
    {
      class: Y({
        [
          /*className*/
          t[1]
        ]: !0,
        [
          /*adjustClass*/
          t[6]
        ]: !0
      })
    },
    /*$$restProps*/
    t[8]
  ];
  var s = (
    /*component*/
    t[2]
  );
  function o(r, a) {
    let u = {
      $$slots: { default: [Mo] },
      $$scope: { ctx: r }
    };
    for (let c = 0; c < l.length; c += 1)
      u = F(u, l[c]);
    return a !== void 0 && a & /*tag, forwardEvents, use, className, adjustClass, $$restProps*/
    459 && (u = F(u, ne(l, [
      a & /*tag*/
      8 && { tag: (
        /*tag*/
        r[3]
      ) },
      a & /*forwardEvents, use*/
      129 && {
        use: [
          /*forwardEvents*/
          r[7],
          .../*use*/
          r[0]
        ]
      },
      a & /*className, adjustClass*/
      66 && {
        class: Y({
          [
            /*className*/
            r[1]
          ]: !0,
          [
            /*adjustClass*/
            r[6]
          ]: !0
        })
      },
      a & /*$$restProps*/
      256 && pe(
        /*$$restProps*/
        r[8]
      )
    ]))), { props: u };
  }
  return s && (e = Be(s, o(t)), t[13](e)), {
    c() {
      e && P(e.$$.fragment), n = Oe();
    },
    m(r, a) {
      e && B(e, r, a), O(r, n, a), i = !0;
    },
    p(r, [a]) {
      if (a & /*component*/
      4 && s !== (s = /*component*/
      r[2])) {
        if (e) {
          ge();
          const u = e;
          C(u.$$.fragment, 1, 0, () => {
            U(u, 1);
          }), _e();
        }
        s ? (e = Be(s, o(r, a)), r[13](e), P(e.$$.fragment), b(e.$$.fragment, 1), B(e, n.parentNode, n)) : e = null;
      } else if (s) {
        const u = a & /*tag, forwardEvents, use, className, adjustClass, $$restProps*/
        459 ? ne(l, [
          a & /*tag*/
          8 && { tag: (
            /*tag*/
            r[3]
          ) },
          a & /*forwardEvents, use*/
          129 && {
            use: [
              /*forwardEvents*/
              r[7],
              .../*use*/
              r[0]
            ]
          },
          a & /*className, adjustClass*/
          66 && {
            class: Y({
              [
                /*className*/
                r[1]
              ]: !0,
              [
                /*adjustClass*/
                r[6]
              ]: !0
            })
          },
          a & /*$$restProps*/
          256 && pe(
            /*$$restProps*/
            r[8]
          )
        ]) : {};
        a & /*$$scope*/
        16384 && (u.$$scope = { dirty: a, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      i || (e && b(e.$$.fragment, r), i = !0);
    },
    o(r) {
      e && C(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && R(n), t[13](null), e && U(e, r);
    }
  };
}
function No(t, e, n) {
  let i, l;
  const s = ["use", "class", "topAppBar", "component", "tag", "getElement"];
  let o = se(e, s), r, a = re, u = () => (a(), a = bn(i, (v) => n(11, r = v)), i);
  t.$$.on_destroy.push(() => a());
  let { $$slots: c = {}, $$scope: f } = e;
  const d = Me(we());
  let { use: m = [] } = e, { class: h = "" } = e, { topAppBar: _ } = e, p, { component: E = Je } = e, { tag: S = E === Je ? "main" : void 0 } = e;
  function M() {
    return p.getElement();
  }
  function A(v) {
    ie[v ? "unshift" : "push"](() => {
      p = v, n(5, p);
    });
  }
  return t.$$set = (v) => {
    e = F(F({}, e), Re(v)), n(8, o = se(e, s)), "use" in v && n(0, m = v.use), "class" in v && n(1, h = v.class), "topAppBar" in v && n(9, _ = v.topAppBar), "component" in v && n(2, E = v.component), "tag" in v && n(3, S = v.tag), "$$scope" in v && n(14, f = v.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*topAppBar*/
    512 && u(n(4, i = _ && _.getPropStore())), t.$$.dirty & /*propStore, $propStore*/
    2064 && n(6, l = !i || r.variant === "static" ? "" : r.variant === "short" ? "mdc-top-app-bar--short-fixed-adjust" : r.prominent && r.dense ? "mdc-top-app-bar--dense-prominent-fixed-adjust" : r.prominent ? "mdc-top-app-bar--prominent-fixed-adjust" : r.dense ? "mdc-top-app-bar--dense-fixed-adjust" : "mdc-top-app-bar--fixed-adjust");
  }, [
    m,
    h,
    E,
    S,
    i,
    p,
    l,
    d,
    o,
    _,
    M,
    r,
    c,
    A,
    f
  ];
}
class Bo extends ue {
  constructor(e) {
    super(), ae(this, e, No, $o, le, {
      use: 0,
      class: 1,
      topAppBar: 9,
      component: 2,
      tag: 3,
      getElement: 10
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get topAppBar() {
    return this.$$.ctx[9];
  }
  set topAppBar(e) {
    this.$$set({ topAppBar: e }), y();
  }
  get component() {
    return this.$$.ctx[2];
  }
  set component(e) {
    this.$$set({ component: e }), y();
  }
  get tag() {
    return this.$$.ctx[3];
  }
  set tag(e) {
    this.$$set({ tag: e }), y();
  }
  get getElement() {
    return this.$$.ctx[10];
  }
}
oe(Bo, { use: {}, class: {}, topAppBar: {}, component: {}, tag: {} }, ["default"], ["getElement"], !0);
function Uo(t) {
  We(t, "svelte-a9zr3a", ".editor-buttons.svelte-a9zr3a{display:flex;gap:.5rem}");
}
function Po(t) {
  let e;
  return {
    c() {
      e = Ee("Dev Menu Bar");
    },
    m(n, i) {
      O(n, e, i);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Fo(t) {
  let e, n;
  return e = new Ho({
    props: {
      $$slots: { default: [Po] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      P(e.$$.fragment);
    },
    m(i, l) {
      B(e, i, l), n = !0;
    },
    p(i, l) {
      const s = {};
      l & /*$$scope*/
      32 && (s.$$scope = { dirty: l, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (b(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      U(e, i);
    }
  };
}
function vi(t) {
  let e, n, i, l, s, o, r, a, u;
  return n = new nt({
    props: { icon: "upload_file", color: "white" }
  }), n.$on(
    "click",
    /*handleUpload*/
    t[2]
  ), o = new nt({
    props: { icon: "download", color: "white" }
  }), o.$on("click", Zo), {
    c() {
      e = V("div"), P(n.$$.fragment), i = K(), l = V("input"), s = K(), P(o.$$.fragment), N(l, "type", "file"), _r(l, "display", "none"), N(l, "accept", ".scd"), N(l, "name", "xmlDocument"), N(e, "class", "editor-buttons svelte-a9zr3a");
    },
    m(c, f) {
      O(c, e, f), B(n, e, null), j(e, i), j(e, l), t[4](l), j(e, s), B(o, e, null), r = !0, a || (u = x(
        l,
        "change",
        /*handleFileChange*/
        t[3]
      ), a = !0);
    },
    p: re,
    i(c) {
      r || (b(n.$$.fragment, c), b(o.$$.fragment, c), r = !0);
    },
    o(c) {
      C(n.$$.fragment, c), C(o.$$.fragment, c), r = !1;
    },
    d(c) {
      c && R(e), U(n), t[4](null), U(o), a = !1, u();
    }
  };
}
function zo(t) {
  let e, n, i = (
    /*pluginType*/
    t[0] && /*pluginType*/
    t[0] === "editor" && vi(t)
  );
  return {
    c() {
      i && i.c(), e = Oe();
    },
    m(l, s) {
      i && i.m(l, s), O(l, e, s), n = !0;
    },
    p(l, s) {
      /*pluginType*/
      l[0] && /*pluginType*/
      l[0] === "editor" ? i ? (i.p(l, s), s & /*pluginType*/
      1 && b(i, 1)) : (i = vi(l), i.c(), b(i, 1), i.m(e.parentNode, e)) : i && (ge(), C(i, 1, 1, () => {
        i = null;
      }), _e());
    },
    i(l) {
      n || (b(i), n = !0);
    },
    o(l) {
      C(i), n = !1;
    },
    d(l) {
      l && R(e), i && i.d(l);
    }
  };
}
function Vo(t) {
  let e, n, i, l;
  return e = new qn({
    props: {
      $$slots: { default: [Fo] },
      $$scope: { ctx: t }
    }
  }), i = new qn({
    props: {
      align: "end",
      toolbar: !0,
      $$slots: { default: [zo] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      P(e.$$.fragment), n = K(), P(i.$$.fragment);
    },
    m(s, o) {
      B(e, s, o), O(s, n, o), B(i, s, o), l = !0;
    },
    p(s, o) {
      const r = {};
      o & /*$$scope*/
      32 && (r.$$scope = { dirty: o, ctx: s }), e.$set(r);
      const a = {};
      o & /*$$scope, fileInput, pluginType*/
      35 && (a.$$scope = { dirty: o, ctx: s }), i.$set(a);
    },
    i(s) {
      l || (b(e.$$.fragment, s), b(i.$$.fragment, s), l = !0);
    },
    o(s) {
      C(e.$$.fragment, s), C(i.$$.fragment, s), l = !1;
    },
    d(s) {
      s && R(n), U(e, s), U(i, s);
    }
  };
}
function qo(t) {
  let e, n;
  return e = new Do({
    props: {
      $$slots: { default: [Vo] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      P(e.$$.fragment);
    },
    m(i, l) {
      B(e, i, l), n = !0;
    },
    p(i, l) {
      const s = {};
      l & /*$$scope, fileInput, pluginType*/
      35 && (s.$$scope = { dirty: l, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (b(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      U(e, i);
    }
  };
}
function jo(t) {
  let e, n;
  return e = new es({
    props: {
      variant: "static",
      color: "primary",
      $$slots: { default: [qo] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      P(e.$$.fragment);
    },
    m(i, l) {
      B(e, i, l), n = !0;
    },
    p(i, [l]) {
      const s = {};
      l & /*$$scope, fileInput, pluginType*/
      35 && (s.$$scope = { dirty: l, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (b(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      U(e, i);
    }
  };
}
function Zo() {
  document.dispatchEvent(new Event("save-doc"));
}
function Go(t, e, n) {
  let { pluginType: i = void 0 } = e, l;
  function s() {
    l.click();
  }
  async function o(a) {
    var h;
    const c = (h = a.target.files) == null ? void 0 : h[0];
    if (!c) return;
    const f = await c.text(), d = c.name, m = new DOMParser().parseFromString(f, "application/xml");
    document.dispatchEvent(uo(m, d));
  }
  function r(a) {
    ie[a ? "unshift" : "push"](() => {
      l = a, n(1, l);
    });
  }
  return t.$$set = (a) => {
    "pluginType" in a && n(0, i = a.pluginType);
  }, [i, l, s, o, r];
}
class ts extends ue {
  constructor(e) {
    super(), ae(this, e, Go, jo, le, { pluginType: 0 }, Uo);
  }
  get pluginType() {
    return this.$$.ctx[0];
  }
  set pluginType(e) {
    this.$$set({ pluginType: e }), y();
  }
}
oe(ts, { pluginType: {} }, [], [], !0);
function Ko(t) {
  We(t, "svelte-v32xo8", 'tscd-theme.svelte-v32xo8{font-family:"Roboto", sans-serif;height:var(--global-height);display:block;position:relative;background-color:var(--global-background-color)}');
}
function Ci(t) {
  let e, n;
  return e = new ts({
    props: { pluginType: (
      /*pluginType*/
      t[0]
    ) }
  }), {
    c() {
      P(e.$$.fragment);
    },
    m(i, l) {
      B(e, i, l), n = !0;
    },
    p(i, l) {
      const s = {};
      l & /*pluginType*/
      1 && (s.pluginType = /*pluginType*/
      i[0]), e.$set(s);
    },
    i(i) {
      n || (b(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      U(e, i);
    }
  };
}
function Wo(t) {
  let e, n, i, l, s, o, r, a, u, c = (
    /*mode*/
    t[1].isStandAlone && Ci(t)
  );
  const f = (
    /*#slots*/
    t[8].default
  ), d = fe(
    f,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = V("link"), n = K(), i = V("link"), l = K(), s = V("link"), o = K(), c && c.c(), r = K(), a = V("tscd-theme"), d && d.c(), N(e, "rel", "stylesheet"), N(
        e,
        "href",
        /*fontCss*/
        t[3]
      ), N(i, "rel", "stylesheet"), N(
        i,
        "href",
        /*themeCss*/
        t[4]
      ), N(s, "rel", "stylesheet"), N(
        s,
        "href",
        /*svelteMaterialUiCss*/
        t[5]
      ), zt(
        a,
        "style",
        /*cssDynamicStyles*/
        t[2]
      ), zt(a, "class", "svelte-v32xo8");
    },
    m(m, h) {
      O(m, e, h), O(m, n, h), O(m, i, h), O(m, l, h), O(m, s, h), O(m, o, h), c && c.m(m, h), O(m, r, h), O(m, a, h), d && d.m(a, null), u = !0;
    },
    p(m, [h]) {
      /*mode*/
      m[1].isStandAlone ? c ? (c.p(m, h), h & /*mode*/
      2 && b(c, 1)) : (c = Ci(m), c.c(), b(c, 1), c.m(r.parentNode, r)) : c && (ge(), C(c, 1, 1, () => {
        c = null;
      }), _e()), d && d.p && (!u || h & /*$$scope*/
      128) && me(
        d,
        f,
        m,
        /*$$scope*/
        m[7],
        u ? de(
          f,
          /*$$scope*/
          m[7],
          h,
          null
        ) : he(
          /*$$scope*/
          m[7]
        ),
        null
      ), (!u || h & /*cssDynamicStyles*/
      4) && zt(
        a,
        "style",
        /*cssDynamicStyles*/
        m[2]
      );
    },
    i(m) {
      u || (b(c), b(d, m), u = !0);
    },
    o(m) {
      C(c), C(d, m), u = !1;
    },
    d(m) {
      m && (R(e), R(n), R(i), R(l), R(s), R(o), R(r), R(a)), c && c.d(m), d && d.d(m);
    }
  };
}
function Xo(t) {
  return t.isStorybook ? "inherit" : "calc(100vh - var(--header-height))";
}
function Qo(t) {
  return t.isStorybook ? "0px" : t.isStandAlone ? "64px" : "112px";
}
function Yo(t) {
  return t.isStorybook ? "inherit" : "var(--mdc-theme-surface)";
}
function Jo(t, e, n) {
  let i, l, { $$slots: s = {}, $$scope: o } = e, { pluginType: r = void 0 } = e;
  const a = new URL(import.meta.url), u = new URL(Qa, a).href, c = new URL(Ya, a).href, f = new URL(Ja, a).href, d = {
    "header-height": "",
    "global-height": "",
    "global-background-color": ""
  };
  return t.$$set = (m) => {
    "pluginType" in m && n(0, r = m.pluginType), "$$scope" in m && n(7, o = m.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*mode*/
    2 && i.isStandAlone && Promise.resolve({              }), t.$$.dirty & /*mode*/
    2 && n(6, d["header-height"] = Qo(i), d), t.$$.dirty & /*mode*/
    2 && n(6, d["global-height"] = Xo(i), d), t.$$.dirty & /*mode*/
    2 && n(6, d["global-background-color"] = Yo(i), d), t.$$.dirty & /*cssFixedStyles*/
    64 && n(2, l = Gl(d));
  }, n(1, i = {
    isStandAlone: !1,
    isStorybook: !1
  }), [
    r,
    i,
    l,
    u,
    c,
    f,
    d,
    o,
    s
  ];
}
class ns extends ue {
  constructor(e) {
    super(), ae(this, e, Jo, Wo, le, { pluginType: 0 }, Ko);
  }
  get pluginType() {
    return this.$$.ctx[0];
  }
  set pluginType(e) {
    this.$$set({ pluginType: e }), y();
  }
}
oe(ns, { pluginType: {} }, ["default"], [], !0);
function xo(t, e) {
  if (t instanceof RegExp) return { keys: !1, pattern: t };
  var n, i, l, s, o = [], r = "", a = t.split("/");
  for (a[0] || a.shift(); l = a.shift(); )
    n = l[0], n === "*" ? (o.push("wild"), r += "/(.*)") : n === ":" ? (i = l.indexOf("?", 1), s = l.indexOf(".", 1), o.push(l.substring(1, ~i ? i : ~s ? s : l.length)), r += ~i && !~s ? "(?:/([^/]+?))?" : "/([^/]+?)", ~s && (r += (~i ? "?" : "") + "\\" + l.substring(s))) : r += "/" + l;
  return {
    keys: o,
    pattern: new RegExp("^" + r + "/?$", "i")
  };
}
function eu(t) {
  let e, n, i;
  const l = [
    /*props*/
    t[2]
  ];
  var s = (
    /*component*/
    t[0]
  );
  function o(r, a) {
    let u = {};
    for (let c = 0; c < l.length; c += 1)
      u = F(u, l[c]);
    return a !== void 0 && a & /*props*/
    4 && (u = F(u, ne(l, [pe(
      /*props*/
      r[2]
    )]))), { props: u };
  }
  return s && (e = Be(s, o(t)), e.$on(
    "routeEvent",
    /*routeEvent_handler_1*/
    t[7]
  )), {
    c() {
      e && P(e.$$.fragment), n = Oe();
    },
    m(r, a) {
      e && B(e, r, a), O(r, n, a), i = !0;
    },
    p(r, a) {
      if (a & /*component*/
      1 && s !== (s = /*component*/
      r[0])) {
        if (e) {
          ge();
          const u = e;
          C(u.$$.fragment, 1, 0, () => {
            U(u, 1);
          }), _e();
        }
        s ? (e = Be(s, o(r, a)), e.$on(
          "routeEvent",
          /*routeEvent_handler_1*/
          r[7]
        ), P(e.$$.fragment), b(e.$$.fragment, 1), B(e, n.parentNode, n)) : e = null;
      } else if (s) {
        const u = a & /*props*/
        4 ? ne(l, [pe(
          /*props*/
          r[2]
        )]) : {};
        e.$set(u);
      }
    },
    i(r) {
      i || (e && b(e.$$.fragment, r), i = !0);
    },
    o(r) {
      e && C(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && R(n), e && U(e, r);
    }
  };
}
function tu(t) {
  let e, n, i;
  const l = [
    { params: (
      /*componentParams*/
      t[1]
    ) },
    /*props*/
    t[2]
  ];
  var s = (
    /*component*/
    t[0]
  );
  function o(r, a) {
    let u = {};
    for (let c = 0; c < l.length; c += 1)
      u = F(u, l[c]);
    return a !== void 0 && a & /*componentParams, props*/
    6 && (u = F(u, ne(l, [
      a & /*componentParams*/
      2 && { params: (
        /*componentParams*/
        r[1]
      ) },
      a & /*props*/
      4 && pe(
        /*props*/
        r[2]
      )
    ]))), { props: u };
  }
  return s && (e = Be(s, o(t)), e.$on(
    "routeEvent",
    /*routeEvent_handler*/
    t[6]
  )), {
    c() {
      e && P(e.$$.fragment), n = Oe();
    },
    m(r, a) {
      e && B(e, r, a), O(r, n, a), i = !0;
    },
    p(r, a) {
      if (a & /*component*/
      1 && s !== (s = /*component*/
      r[0])) {
        if (e) {
          ge();
          const u = e;
          C(u.$$.fragment, 1, 0, () => {
            U(u, 1);
          }), _e();
        }
        s ? (e = Be(s, o(r, a)), e.$on(
          "routeEvent",
          /*routeEvent_handler*/
          r[6]
        ), P(e.$$.fragment), b(e.$$.fragment, 1), B(e, n.parentNode, n)) : e = null;
      } else if (s) {
        const u = a & /*componentParams, props*/
        6 ? ne(l, [
          a & /*componentParams*/
          2 && { params: (
            /*componentParams*/
            r[1]
          ) },
          a & /*props*/
          4 && pe(
            /*props*/
            r[2]
          )
        ]) : {};
        e.$set(u);
      }
    },
    i(r) {
      i || (e && b(e.$$.fragment, r), i = !0);
    },
    o(r) {
      e && C(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && R(n), e && U(e, r);
    }
  };
}
function nu(t) {
  let e, n, i, l;
  const s = [tu, eu], o = [];
  function r(a, u) {
    return (
      /*componentParams*/
      a[1] ? 0 : 1
    );
  }
  return e = r(t), n = o[e] = s[e](t), {
    c() {
      n.c(), i = Oe();
    },
    m(a, u) {
      o[e].m(a, u), O(a, i, u), l = !0;
    },
    p(a, [u]) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, u) : (ge(), C(o[c], 1, 1, () => {
        o[c] = null;
      }), _e(), n = o[e], n ? n.p(a, u) : (n = o[e] = s[e](a), n.c()), b(n, 1), n.m(i.parentNode, i));
    },
    i(a) {
      l || (b(n), l = !0);
    },
    o(a) {
      C(n), l = !1;
    },
    d(a) {
      a && R(i), o[e].d(a);
    }
  };
}
function yi() {
  const t = window.location.href.indexOf("#/");
  let e = t > -1 ? window.location.href.substr(t + 1) : "/";
  const n = e.indexOf("?");
  let i = "";
  return n > -1 && (i = e.substr(n + 1), e = e.substr(0, n)), { location: e, querystring: i };
}
const Jn = Qn(
  null,
  // eslint-disable-next-line prefer-arrow-callback
  function(e) {
    e(yi());
    const n = () => {
      e(yi());
    };
    return window.addEventListener("hashchange", n, !1), function() {
      window.removeEventListener("hashchange", n, !1);
    };
  }
);
jl(Jn, (t) => t.location);
jl(Jn, (t) => t.querystring);
const Ai = lt(void 0);
async function is(t) {
  if (!t || t.length < 1 || t.charAt(0) != "/" && t.indexOf("#/") !== 0)
    throw Error("Invalid parameter location");
  await Wn(), history.replaceState(
    {
      ...history.state,
      __svelte_spa_router_scrollX: window.scrollX,
      __svelte_spa_router_scrollY: window.scrollY
    },
    void 0
  ), window.location.hash = (t.charAt(0) == "#" ? "" : "#") + t;
}
function iu(t) {
  t ? window.scrollTo(t.__svelte_spa_router_scrollX, t.__svelte_spa_router_scrollY) : window.scrollTo(0, 0);
}
function lu(t, e, n) {
  let { routes: i = {} } = e, { prefix: l = "" } = e, { restoreScrollState: s = !1 } = e;
  class o {
    /**
    * Initializes the object and creates a regular expression from the path, using regexparam.
    *
    * @param {string} path - Path to the route (must start with '/' or '*')
    * @param {SvelteComponent|WrappedComponent} component - Svelte component for the route, optionally wrapped
    */
    constructor(v, I) {
      if (!I || typeof I != "function" && (typeof I != "object" || I._sveltesparouter !== !0))
        throw Error("Invalid component object");
      if (!v || typeof v == "string" && (v.length < 1 || v.charAt(0) != "/" && v.charAt(0) != "*") || typeof v == "object" && !(v instanceof RegExp))
        throw Error('Invalid value for "path" argument - strings must start with / or *');
      const { pattern: g, keys: T } = xo(v);
      this.path = v, typeof I == "object" && I._sveltesparouter === !0 ? (this.component = I.component, this.conditions = I.conditions || [], this.userData = I.userData, this.props = I.props || {}) : (this.component = () => Promise.resolve(I), this.conditions = [], this.props = {}), this._pattern = g, this._keys = T;
    }
    /**
    * Checks if `path` matches the current route.
    * If there's a match, will return the list of parameters from the URL (if any).
    * In case of no match, the method will return `null`.
    *
    * @param {string} path - Path to test
    * @returns {null|Object.<string, string>} List of paramters from the URL if there's a match, or `null` otherwise.
    */
    match(v) {
      if (l) {
        if (typeof l == "string")
          if (v.startsWith(l))
            v = v.substr(l.length) || "/";
          else
            return null;
        else if (l instanceof RegExp) {
          const q = v.match(l);
          if (q && q[0])
            v = v.substr(q[0].length) || "/";
          else
            return null;
        }
      }
      const I = this._pattern.exec(v);
      if (I === null)
        return null;
      if (this._keys === !1)
        return I;
      const g = {};
      let T = 0;
      for (; T < this._keys.length; ) {
        try {
          g[this._keys[T]] = decodeURIComponent(I[T + 1] || "") || null;
        } catch {
          g[this._keys[T]] = null;
        }
        T++;
      }
      return g;
    }
    /**
    * Dictionary with route details passed to the pre-conditions functions, as well as the `routeLoading`, `routeLoaded` and `conditionsFailed` events
    * @typedef {Object} RouteDetail
    * @property {string|RegExp} route - Route matched as defined in the route definition (could be a string or a reguar expression object)
    * @property {string} location - Location path
    * @property {string} querystring - Querystring from the hash
    * @property {object} [userData] - Custom data passed by the user
    * @property {SvelteComponent} [component] - Svelte component (only in `routeLoaded` events)
    * @property {string} [name] - Name of the Svelte component (only in `routeLoaded` events)
    */
    /**
    * Executes all conditions (if any) to control whether the route can be shown. Conditions are executed in the order they are defined, and if a condition fails, the following ones aren't executed.
    * 
    * @param {RouteDetail} detail - Route detail
    * @returns {boolean} Returns true if all the conditions succeeded
    */
    async checkConditions(v) {
      for (let I = 0; I < this.conditions.length; I++)
        if (!await this.conditions[I](v))
          return !1;
      return !0;
    }
  }
  const r = [];
  i instanceof Map ? i.forEach((A, v) => {
    r.push(new o(v, A));
  }) : Object.keys(i).forEach((A) => {
    r.push(new o(A, i[A]));
  });
  let a = null, u = null, c = {};
  const f = Kn();
  async function d(A, v) {
    await Wn(), f(A, v);
  }
  let m = null, h = null;
  s && (h = (A) => {
    A.state && (A.state.__svelte_spa_router_scrollY || A.state.__svelte_spa_router_scrollX) ? m = A.state : m = null;
  }, window.addEventListener("popstate", h), Cr(() => {
    iu(m);
  }));
  let _ = null, p = null;
  const E = Jn.subscribe(async (A) => {
    _ = A;
    let v = 0;
    for (; v < r.length; ) {
      const I = r[v].match(A.location);
      if (!I) {
        v++;
        continue;
      }
      const g = {
        route: r[v].path,
        location: A.location,
        querystring: A.querystring,
        userData: r[v].userData,
        params: I && typeof I == "object" && Object.keys(I).length ? I : null
      };
      if (!await r[v].checkConditions(g)) {
        n(0, a = null), p = null, d("conditionsFailed", g);
        return;
      }
      d("routeLoading", Object.assign({}, g));
      const T = r[v].component;
      if (p != T) {
        T.loading ? (n(0, a = T.loading), p = T, n(1, u = T.loadingParams), n(2, c = {}), d("routeLoaded", Object.assign({}, g, {
          component: a,
          name: a.name,
          params: u
        }))) : (n(0, a = null), p = null);
        const q = await T();
        if (A != _)
          return;
        n(0, a = q && q.default || q), p = T;
      }
      I && typeof I == "object" && Object.keys(I).length ? n(1, u = I) : n(1, u = null), n(2, c = r[v].props), d("routeLoaded", Object.assign({}, g, {
        component: a,
        name: a.name,
        params: u
      })).then(() => {
        Ai.set(u);
      });
      return;
    }
    n(0, a = null), p = null, Ai.set(void 0);
  });
  St(() => {
    E(), h && window.removeEventListener("popstate", h);
  });
  function S(A) {
    mt.call(this, t, A);
  }
  function M(A) {
    mt.call(this, t, A);
  }
  return t.$$set = (A) => {
    "routes" in A && n(3, i = A.routes), "prefix" in A && n(4, l = A.prefix), "restoreScrollState" in A && n(5, s = A.restoreScrollState);
  }, t.$$.update = () => {
    t.$$.dirty & /*restoreScrollState*/
    32 && (history.scrollRestoration = s ? "manual" : "auto");
  }, [
    a,
    u,
    c,
    i,
    l,
    s,
    S,
    M
  ];
}
class ls extends ue {
  constructor(e) {
    super(), ae(this, e, lu, nu, le, {
      routes: 3,
      prefix: 4,
      restoreScrollState: 5
    });
  }
  get routes() {
    return this.$$.ctx[3];
  }
  set routes(e) {
    this.$$set({ routes: e }), y();
  }
  get prefix() {
    return this.$$.ctx[4];
  }
  set prefix(e) {
    this.$$set({ prefix: e }), y();
  }
  get restoreScrollState() {
    return this.$$.ctx[5];
  }
  set restoreScrollState(e) {
    this.$$set({ restoreScrollState: e }), y();
  }
}
oe(ls, { routes: {}, prefix: {}, restoreScrollState: { type: "Boolean" } }, [], [], !0);
function Ei(t) {
  let e;
  return {
    c() {
      e = V("div"), N(e, "class", "mdc-button__touch");
    },
    m(n, i) {
      O(n, e, i);
    },
    d(n) {
      n && R(e);
    }
  };
}
function su(t) {
  let e, n, i, l;
  const s = (
    /*#slots*/
    t[28].default
  ), o = fe(
    s,
    t,
    /*$$scope*/
    t[30],
    null
  );
  let r = (
    /*touch*/
    t[6] && Ei()
  );
  return {
    c() {
      e = V("div"), n = K(), o && o.c(), r && r.c(), i = Oe(), N(e, "class", "mdc-button__ripple");
    },
    m(a, u) {
      O(a, e, u), O(a, n, u), o && o.m(a, u), r && r.m(a, u), O(a, i, u), l = !0;
    },
    p(a, u) {
      o && o.p && (!l || u[0] & /*$$scope*/
      1073741824) && me(
        o,
        s,
        a,
        /*$$scope*/
        a[30],
        l ? de(
          s,
          /*$$scope*/
          a[30],
          u,
          null
        ) : he(
          /*$$scope*/
          a[30]
        ),
        null
      ), /*touch*/
      a[6] ? r || (r = Ei(), r.c(), r.m(i.parentNode, i)) : r && (r.d(1), r = null);
    },
    i(a) {
      l || (b(o, a), l = !0);
    },
    o(a) {
      C(o, a), l = !1;
    },
    d(a) {
      a && (R(e), R(n), R(i)), o && o.d(a), r && r.d(a);
    }
  };
}
function ru(t) {
  let e, n, i;
  const l = [
    { tag: (
      /*tag*/
      t[10]
    ) },
    {
      use: [
        [
          yt,
          {
            ripple: (
              /*ripple*/
              t[3]
            ),
            unbounded: !1,
            color: (
              /*color*/
              t[4]
            ),
            disabled: !!/*$$restProps*/
            t[23].disabled,
            addClass: (
              /*addClass*/
              t[19]
            ),
            removeClass: (
              /*removeClass*/
              t[20]
            ),
            addStyle: (
              /*addStyle*/
              t[21]
            )
          }
        ],
        /*forwardEvents*/
        t[17],
        .../*use*/
        t[0]
      ]
    },
    {
      class: Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-button": !0,
        "mdc-button--raised": (
          /*variant*/
          t[5] === "raised"
        ),
        "mdc-button--unelevated": (
          /*variant*/
          t[5] === "unelevated"
        ),
        "mdc-button--outlined": (
          /*variant*/
          t[5] === "outlined"
        ),
        "smui-button--color-secondary": (
          /*color*/
          t[4] === "secondary"
        ),
        "mdc-button--touch": (
          /*touch*/
          t[6]
        ),
        "mdc-card__action": (
          /*context*/
          t[18] === "card:action"
        ),
        "mdc-card__action--button": (
          /*context*/
          t[18] === "card:action"
        ),
        "mdc-dialog__button": (
          /*context*/
          t[18] === "dialog:action"
        ),
        "mdc-top-app-bar__navigation-icon": (
          /*context*/
          t[18] === "top-app-bar:navigation"
        ),
        "mdc-top-app-bar__action-item": (
          /*context*/
          t[18] === "top-app-bar:action"
        ),
        "mdc-snackbar__action": (
          /*context*/
          t[18] === "snackbar:actions"
        ),
        "mdc-banner__secondary-action": (
          /*context*/
          t[18] === "banner" && /*secondary*/
          t[8]
        ),
        "mdc-banner__primary-action": (
          /*context*/
          t[18] === "banner" && !/*secondary*/
          t[8]
        ),
        "mdc-tooltip__action": (
          /*context*/
          t[18] === "tooltip:rich-actions"
        ),
        .../*internalClasses*/
        t[12]
      })
    },
    {
      style: Object.entries(
        /*internalStyles*/
        t[13]
      ).map(Mn).concat([
        /*style*/
        t[2]
      ]).join(" ")
    },
    /*actionProp*/
    t[16],
    /*defaultProp*/
    t[15],
    /*secondaryProp*/
    t[14],
    { href: (
      /*href*/
      t[7]
    ) },
    /*$$restProps*/
    t[23]
  ];
  var s = (
    /*component*/
    t[9]
  );
  function o(r, a) {
    let u = {
      $$slots: { default: [su] },
      $$scope: { ctx: r }
    };
    for (let c = 0; c < l.length; c += 1)
      u = F(u, l[c]);
    return a !== void 0 && a[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
    12580351 && (u = F(u, ne(l, [
      a[0] & /*tag*/
      1024 && { tag: (
        /*tag*/
        r[10]
      ) },
      a[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      12189721 && {
        use: [
          [
            yt,
            {
              ripple: (
                /*ripple*/
                r[3]
              ),
              unbounded: !1,
              color: (
                /*color*/
                r[4]
              ),
              disabled: !!/*$$restProps*/
              r[23].disabled,
              addClass: (
                /*addClass*/
                r[19]
              ),
              removeClass: (
                /*removeClass*/
                r[20]
              ),
              addStyle: (
                /*addStyle*/
                r[21]
              )
            }
          ],
          /*forwardEvents*/
          r[17],
          .../*use*/
          r[0]
        ]
      },
      a[0] & /*className, variant, color, touch, context, secondary, internalClasses*/
      266610 && {
        class: Y({
          [
            /*className*/
            r[1]
          ]: !0,
          "mdc-button": !0,
          "mdc-button--raised": (
            /*variant*/
            r[5] === "raised"
          ),
          "mdc-button--unelevated": (
            /*variant*/
            r[5] === "unelevated"
          ),
          "mdc-button--outlined": (
            /*variant*/
            r[5] === "outlined"
          ),
          "smui-button--color-secondary": (
            /*color*/
            r[4] === "secondary"
          ),
          "mdc-button--touch": (
            /*touch*/
            r[6]
          ),
          "mdc-card__action": (
            /*context*/
            r[18] === "card:action"
          ),
          "mdc-card__action--button": (
            /*context*/
            r[18] === "card:action"
          ),
          "mdc-dialog__button": (
            /*context*/
            r[18] === "dialog:action"
          ),
          "mdc-top-app-bar__navigation-icon": (
            /*context*/
            r[18] === "top-app-bar:navigation"
          ),
          "mdc-top-app-bar__action-item": (
            /*context*/
            r[18] === "top-app-bar:action"
          ),
          "mdc-snackbar__action": (
            /*context*/
            r[18] === "snackbar:actions"
          ),
          "mdc-banner__secondary-action": (
            /*context*/
            r[18] === "banner" && /*secondary*/
            r[8]
          ),
          "mdc-banner__primary-action": (
            /*context*/
            r[18] === "banner" && !/*secondary*/
            r[8]
          ),
          "mdc-tooltip__action": (
            /*context*/
            r[18] === "tooltip:rich-actions"
          ),
          .../*internalClasses*/
          r[12]
        })
      },
      a[0] & /*internalStyles, style*/
      8196 && {
        style: Object.entries(
          /*internalStyles*/
          r[13]
        ).map(Mn).concat([
          /*style*/
          r[2]
        ]).join(" ")
      },
      a[0] & /*actionProp*/
      65536 && pe(
        /*actionProp*/
        r[16]
      ),
      a[0] & /*defaultProp*/
      32768 && pe(
        /*defaultProp*/
        r[15]
      ),
      a[0] & /*secondaryProp*/
      16384 && pe(
        /*secondaryProp*/
        r[14]
      ),
      a[0] & /*href*/
      128 && { href: (
        /*href*/
        r[7]
      ) },
      a[0] & /*$$restProps*/
      8388608 && pe(
        /*$$restProps*/
        r[23]
      )
    ]))), { props: u };
  }
  return s && (e = Be(s, o(t)), t[29](e), e.$on(
    "click",
    /*handleClick*/
    t[22]
  )), {
    c() {
      e && P(e.$$.fragment), n = Oe();
    },
    m(r, a) {
      e && B(e, r, a), O(r, n, a), i = !0;
    },
    p(r, a) {
      if (a[0] & /*component*/
      512 && s !== (s = /*component*/
      r[9])) {
        if (e) {
          ge();
          const u = e;
          C(u.$$.fragment, 1, 0, () => {
            U(u, 1);
          }), _e();
        }
        s ? (e = Be(s, o(r, a)), r[29](e), e.$on(
          "click",
          /*handleClick*/
          r[22]
        ), P(e.$$.fragment), b(e.$$.fragment, 1), B(e, n.parentNode, n)) : e = null;
      } else if (s) {
        const u = a[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
        12580351 ? ne(l, [
          a[0] & /*tag*/
          1024 && { tag: (
            /*tag*/
            r[10]
          ) },
          a[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          12189721 && {
            use: [
              [
                yt,
                {
                  ripple: (
                    /*ripple*/
                    r[3]
                  ),
                  unbounded: !1,
                  color: (
                    /*color*/
                    r[4]
                  ),
                  disabled: !!/*$$restProps*/
                  r[23].disabled,
                  addClass: (
                    /*addClass*/
                    r[19]
                  ),
                  removeClass: (
                    /*removeClass*/
                    r[20]
                  ),
                  addStyle: (
                    /*addStyle*/
                    r[21]
                  )
                }
              ],
              /*forwardEvents*/
              r[17],
              .../*use*/
              r[0]
            ]
          },
          a[0] & /*className, variant, color, touch, context, secondary, internalClasses*/
          266610 && {
            class: Y({
              [
                /*className*/
                r[1]
              ]: !0,
              "mdc-button": !0,
              "mdc-button--raised": (
                /*variant*/
                r[5] === "raised"
              ),
              "mdc-button--unelevated": (
                /*variant*/
                r[5] === "unelevated"
              ),
              "mdc-button--outlined": (
                /*variant*/
                r[5] === "outlined"
              ),
              "smui-button--color-secondary": (
                /*color*/
                r[4] === "secondary"
              ),
              "mdc-button--touch": (
                /*touch*/
                r[6]
              ),
              "mdc-card__action": (
                /*context*/
                r[18] === "card:action"
              ),
              "mdc-card__action--button": (
                /*context*/
                r[18] === "card:action"
              ),
              "mdc-dialog__button": (
                /*context*/
                r[18] === "dialog:action"
              ),
              "mdc-top-app-bar__navigation-icon": (
                /*context*/
                r[18] === "top-app-bar:navigation"
              ),
              "mdc-top-app-bar__action-item": (
                /*context*/
                r[18] === "top-app-bar:action"
              ),
              "mdc-snackbar__action": (
                /*context*/
                r[18] === "snackbar:actions"
              ),
              "mdc-banner__secondary-action": (
                /*context*/
                r[18] === "banner" && /*secondary*/
                r[8]
              ),
              "mdc-banner__primary-action": (
                /*context*/
                r[18] === "banner" && !/*secondary*/
                r[8]
              ),
              "mdc-tooltip__action": (
                /*context*/
                r[18] === "tooltip:rich-actions"
              ),
              .../*internalClasses*/
              r[12]
            })
          },
          a[0] & /*internalStyles, style*/
          8196 && {
            style: Object.entries(
              /*internalStyles*/
              r[13]
            ).map(Mn).concat([
              /*style*/
              r[2]
            ]).join(" ")
          },
          a[0] & /*actionProp*/
          65536 && pe(
            /*actionProp*/
            r[16]
          ),
          a[0] & /*defaultProp*/
          32768 && pe(
            /*defaultProp*/
            r[15]
          ),
          a[0] & /*secondaryProp*/
          16384 && pe(
            /*secondaryProp*/
            r[14]
          ),
          a[0] & /*href*/
          128 && { href: (
            /*href*/
            r[7]
          ) },
          a[0] & /*$$restProps*/
          8388608 && pe(
            /*$$restProps*/
            r[23]
          )
        ]) : {};
        a[0] & /*$$scope, touch*/
        1073741888 && (u.$$scope = { dirty: a, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      i || (e && b(e.$$.fragment, r), i = !0);
    },
    o(r) {
      e && C(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && R(n), t[29](null), e && U(e, r);
    }
  };
}
const Mn = ([t, e]) => `${t}: ${e};`;
function au(t, e, n) {
  let i, l, s;
  const o = [
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "variant",
    "touch",
    "href",
    "action",
    "defaultAction",
    "secondary",
    "component",
    "tag",
    "getElement"
  ];
  let r = se(e, o), { $$slots: a = {}, $$scope: u } = e;
  const c = Me(we());
  let { use: f = [] } = e, { class: d = "" } = e, { style: m = "" } = e, { ripple: h = !0 } = e, { color: _ = "primary" } = e, { variant: p = "text" } = e, { touch: E = !1 } = e, { href: S = void 0 } = e, { action: M = "close" } = e, { defaultAction: A = !1 } = e, { secondary: v = !1 } = e, I, g = {}, T = {}, q = Ue("SMUI:button:context"), { component: H = Je } = e, { tag: w = H === Je ? S == null ? "button" : "a" : void 0 } = e, z = r.disabled;
  He("SMUI:label:context", "button"), He("SMUI:icon:context", "button");
  function L(k) {
    g[k] || n(12, g[k] = !0, g);
  }
  function Z(k) {
    (!(k in g) || g[k]) && n(12, g[k] = !1, g);
  }
  function ke(k, Q) {
    T[k] != Q && (Q === "" || Q == null ? (delete T[k], n(13, T)) : n(13, T[k] = Q, T));
  }
  function ve() {
    q === "banner" && Ae(be(), v ? "SMUIBannerButton:secondaryActionClick" : "SMUIBannerButton:primaryActionClick");
  }
  function be() {
    return I.getElement();
  }
  function X(k) {
    ie[k ? "unshift" : "push"](() => {
      I = k, n(11, I);
    });
  }
  return t.$$set = (k) => {
    n(31, e = F(F({}, e), Re(k))), n(23, r = se(e, o)), "use" in k && n(0, f = k.use), "class" in k && n(1, d = k.class), "style" in k && n(2, m = k.style), "ripple" in k && n(3, h = k.ripple), "color" in k && n(4, _ = k.color), "variant" in k && n(5, p = k.variant), "touch" in k && n(6, E = k.touch), "href" in k && n(7, S = k.href), "action" in k && n(24, M = k.action), "defaultAction" in k && n(25, A = k.defaultAction), "secondary" in k && n(8, v = k.secondary), "component" in k && n(9, H = k.component), "tag" in k && n(10, w = k.tag), "$$scope" in k && n(30, u = k.$$scope);
  }, t.$$.update = () => {
    if (n(16, i = q === "dialog:action" && M != null ? { "data-mdc-dialog-action": M } : { action: e.action }), n(15, l = q === "dialog:action" && A ? { "data-mdc-dialog-button-default": "" } : { default: e.default }), n(14, s = q === "banner" ? {} : { secondary: e.secondary }), z !== r.disabled) {
      if (I) {
        const k = be();
        "blur" in k && k.blur();
      }
      n(27, z = r.disabled);
    }
  }, e = Re(e), [
    f,
    d,
    m,
    h,
    _,
    p,
    E,
    S,
    v,
    H,
    w,
    I,
    g,
    T,
    s,
    l,
    i,
    c,
    q,
    L,
    Z,
    ke,
    ve,
    r,
    M,
    A,
    be,
    z,
    a,
    X,
    u
  ];
}
class ft extends ue {
  constructor(e) {
    super(), ae(
      this,
      e,
      au,
      ru,
      le,
      {
        use: 0,
        class: 1,
        style: 2,
        ripple: 3,
        color: 4,
        variant: 5,
        touch: 6,
        href: 7,
        action: 24,
        defaultAction: 25,
        secondary: 8,
        component: 9,
        tag: 10,
        getElement: 26
      },
      null,
      [-1, -1]
    );
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get style() {
    return this.$$.ctx[2];
  }
  set style(e) {
    this.$$set({ style: e }), y();
  }
  get ripple() {
    return this.$$.ctx[3];
  }
  set ripple(e) {
    this.$$set({ ripple: e }), y();
  }
  get color() {
    return this.$$.ctx[4];
  }
  set color(e) {
    this.$$set({ color: e }), y();
  }
  get variant() {
    return this.$$.ctx[5];
  }
  set variant(e) {
    this.$$set({ variant: e }), y();
  }
  get touch() {
    return this.$$.ctx[6];
  }
  set touch(e) {
    this.$$set({ touch: e }), y();
  }
  get href() {
    return this.$$.ctx[7];
  }
  set href(e) {
    this.$$set({ href: e }), y();
  }
  get action() {
    return this.$$.ctx[24];
  }
  set action(e) {
    this.$$set({ action: e }), y();
  }
  get defaultAction() {
    return this.$$.ctx[25];
  }
  set defaultAction(e) {
    this.$$set({ defaultAction: e }), y();
  }
  get secondary() {
    return this.$$.ctx[8];
  }
  set secondary(e) {
    this.$$set({ secondary: e }), y();
  }
  get component() {
    return this.$$.ctx[9];
  }
  set component(e) {
    this.$$set({ component: e }), y();
  }
  get tag() {
    return this.$$.ctx[10];
  }
  set tag(e) {
    this.$$set({ tag: e }), y();
  }
  get getElement() {
    return this.$$.ctx[26];
  }
}
oe(ft, { use: {}, class: {}, style: {}, ripple: { type: "Boolean" }, color: {}, variant: {}, touch: { type: "Boolean" }, href: {}, action: {}, defaultAction: { type: "Boolean" }, secondary: { type: "Boolean" }, component: {}, tag: {} }, ["default"], ["getElement"], !0);
function ou(t) {
  let e, n, i, l, s, o;
  const r = (
    /*#slots*/
    t[8].default
  ), a = fe(
    r,
    t,
    /*$$scope*/
    t[7],
    null
  );
  let u = [
    {
      class: n = Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "smui-button__group": !0,
        "smui-button__group--raised": (
          /*variant*/
          t[2] === "raised"
        )
      })
    },
    /*$$restProps*/
    t[5]
  ], c = {};
  for (let f = 0; f < u.length; f += 1)
    c = F(c, u[f]);
  return {
    c() {
      e = V("div"), a && a.c(), ce(e, c);
    },
    m(f, d) {
      O(f, e, d), a && a.m(e, null), t[9](e), l = !0, s || (o = [
        ee(i = De.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        ee(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], s = !0);
    },
    p(f, [d]) {
      a && a.p && (!l || d & /*$$scope*/
      128) && me(
        a,
        r,
        f,
        /*$$scope*/
        f[7],
        l ? de(
          r,
          /*$$scope*/
          f[7],
          d,
          null
        ) : he(
          /*$$scope*/
          f[7]
        ),
        null
      ), ce(e, c = ne(u, [
        (!l || d & /*className, variant*/
        6 && n !== (n = Y({
          [
            /*className*/
            f[1]
          ]: !0,
          "smui-button__group": !0,
          "smui-button__group--raised": (
            /*variant*/
            f[2] === "raised"
          )
        }))) && { class: n },
        d & /*$$restProps*/
        32 && /*$$restProps*/
        f[5]
      ])), i && Ce(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      l || (b(a, f), l = !0);
    },
    o(f) {
      C(a, f), l = !1;
    },
    d(f) {
      f && R(e), a && a.d(f), t[9](null), s = !1, Te(o);
    }
  };
}
function uu(t, e, n) {
  const i = ["use", "class", "variant", "getElement"];
  let l = se(e, i), { $$slots: s = {}, $$scope: o } = e;
  const r = Me(we());
  let { use: a = [] } = e, { class: u = "" } = e, { variant: c = "text" } = e, f;
  function d() {
    return f;
  }
  function m(h) {
    ie[h ? "unshift" : "push"](() => {
      f = h, n(3, f);
    });
  }
  return t.$$set = (h) => {
    e = F(F({}, e), Re(h)), n(5, l = se(e, i)), "use" in h && n(0, a = h.use), "class" in h && n(1, u = h.class), "variant" in h && n(2, c = h.variant), "$$scope" in h && n(7, o = h.$$scope);
  }, [
    a,
    u,
    c,
    f,
    r,
    l,
    d,
    o,
    s,
    m
  ];
}
class cu extends ue {
  constructor(e) {
    super(), ae(this, e, uu, ou, le, {
      use: 0,
      class: 1,
      variant: 2,
      getElement: 6
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get variant() {
    return this.$$.ctx[2];
  }
  set variant(e) {
    this.$$set({ variant: e }), y();
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
oe(cu, { use: {}, class: {}, variant: {} }, ["default"], ["getElement"], !0);
const ss = lt(void 0), rs = lt();
function fu({
  newXMLDocument: t,
  newPluginHostElement: e
}) {
  ss.set(t), rs.set(e);
}
const En = {
  //state
  xmlDocument: ss,
  pluginHostElement: rs,
  //initialization
  init: fu
}, { xmlDocument: xn } = En;
function du(t, e) {
  var o;
  const { dataTypeTemplatesRootElement: n } = us, i = Ge(xn);
  if (!i)
    throw new Error("XML Document is not defined");
  const l = Qt(
    i,
    t,
    e
  ), s = ((o = Ge(n)) == null ? void 0 : o.element) ?? mu();
  return st.createAndDispatchActionEvent(s, l);
}
function mu() {
  const t = Ge(xn);
  if (!t)
    throw new Error("XML Document is not defined");
  const e = Qt(
    t,
    "DataTypeTemplates",
    {}
  );
  return us.dataTypeTemplatesRootElement.set({
    element: e
  }), st.createAndDispatchActionEvent(
    t.documentElement,
    e
  ), e;
}
const as = {
  //state
  xmlDocument: xn,
  //actions
  addElementToXmlDocument: du
}, { pluginHostElement: In } = En;
function hu(t, e) {
  const n = An({
    new: {
      parent: t,
      element: e
    }
  });
  Ge(In).dispatchEvent(n);
}
function pu(t, e) {
  const n = An({
    old: {
      parent: t,
      element: e
    }
  });
  Ge(In).dispatchEvent(n);
}
function gu(t, e, n, i) {
  const l = An({
    old: {
      parent: t,
      element: n
    },
    new: {
      parent: e,
      element: n,
      position: i
    }
  });
  Ge(In).dispatchEvent(l);
}
function _u(t, e) {
  const n = oo(t, e), i = An(n);
  Ge(In).dispatchEvent(i);
}
const st = {
  //actions
  createAndDispatchActionEvent: hu,
  updateAndDispatchActionEvent: _u,
  deleteAndDispatchActionEvent: pu,
  moveAndDispatchActionEvent: gu
}, ei = lt(null), os = lt();
function bu(t) {
  const n = new xl(t).findDataTypesElement();
  ei.set(n);
}
function vu(t) {
  var i;
  const n = new xl(t).findTypeDesignerElements({
    root: (i = Ge(ei)) == null ? void 0 : i.element
  });
  os.set(n);
}
function Cu(t) {
  t && (bu(t), vu(t));
}
const us = {
  //state
  dataTypeTemplatesRootElement: ei,
  dataTypeTemplatesSubElements: os,
  //actions
  init: Cu
};
var Ke = [];
for (var $n = 0; $n < 256; ++$n)
  Ke.push(($n + 256).toString(16).slice(1));
function yu(t, e = 0) {
  return (Ke[t[e + 0]] + Ke[t[e + 1]] + Ke[t[e + 2]] + Ke[t[e + 3]] + "-" + Ke[t[e + 4]] + Ke[t[e + 5]] + "-" + Ke[t[e + 6]] + Ke[t[e + 7]] + "-" + Ke[t[e + 8]] + Ke[t[e + 9]] + "-" + Ke[t[e + 10]] + Ke[t[e + 11]] + Ke[t[e + 12]] + Ke[t[e + 13]] + Ke[t[e + 14]] + Ke[t[e + 15]]).toLowerCase();
}
var un, Au = new Uint8Array(16);
function Eu() {
  if (!un && (un = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !un))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return un(Au);
}
var Iu = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Ii = {
  randomUUID: Iu
};
function _n(t, e, n) {
  if (Ii.randomUUID && !e && !t)
    return Ii.randomUUID();
  t = t || {};
  var i = t.random || (t.rng || Eu)();
  return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, yu(i);
}
const { xmlDocument: Tn } = En, Mt = lt(null);
function Tu() {
  const t = Ge(Tn);
  if (!t)
    throw new Error("XML Document is not defined");
  const e = wu(t);
  Mt.set(e);
}
function wu(t) {
  const e = t.documentElement, n = e.querySelector('Private[type="AUTO_DOC"]');
  if (n)
    return n;
  const i = Qt(t, "Private", { type: "AUTO_DOC" });
  return e.appendChild(i), st.createAndDispatchActionEvent(e, i), i;
}
function cs(t, e, n) {
  n >= 0 && n < t.children.length ? t.insertBefore(e, t.children[n]) : t.appendChild(e);
}
function qt(t) {
  const e = Ge(Mt);
  return e ? e.querySelector(`DocumentTemplate[id="${t}"]`) : null;
}
function Su() {
  const t = Ge(Mt);
  return t ? Array.from(t.querySelectorAll("DocumentTemplate")) : [];
}
function ku(t) {
  const e = qt(t);
  return e ? Array.from(e.querySelectorAll("Block")) : [];
}
function Lu(t, e) {
  const n = qt(t);
  return n ? n.querySelector(`Block[id="${e}"]`) : null;
}
function Du() {
  let t = null;
  const e = Ge(Tn);
  if (!e)
    throw new Error("XML Document is not defined");
  const n = Ge(Mt);
  if (n) {
    const i = _n(), l = Qt(e, "DocumentTemplate", {
      id: i,
      date: (/* @__PURE__ */ new Date()).toISOString()
    });
    n.appendChild(l), st.createAndDispatchActionEvent(n, l), t = i;
  }
  return t;
}
function Ru(t, e, n) {
  const i = qt(t);
  if (i) {
    const l = {};
    e && (i.setAttribute("title", e), l.title = e), n && (i.setAttribute("description", n), l.description = n);
    const s = i.getAttribute("id");
    s && (l.id = s);
    const o = i.getAttribute("date");
    o && (l.date = o), Object.keys(l).length > 0 && st.updateAndDispatchActionEvent(i, l);
  }
}
function Ou(t, e, n, i) {
  const l = _n(), s = Ge(Tn);
  if (!s)
    throw new Error("XML Document is not defined");
  const o = Qt(s, "Block", {
    id: l,
    type: n
  });
  return o.textContent = e, t.appendChild(o), cs(t, o, i), st.createAndDispatchActionEvent(t, o), st.moveAndDispatchActionEvent(t, t, o, i), l;
}
function Hu(t, e, n) {
  const i = t.querySelector(`Block[id="${e}"]`);
  i && (i.textContent = n, st.updateAndDispatchActionEvent(i, { content: n }));
}
function Mu(t, e, n) {
  const i = t.querySelector(`Block[id="${e}"]`);
  i && (cs(t, i, n), st.moveAndDispatchActionEvent(t, t, i, n));
}
function $u(t, e) {
  const n = t.querySelector(`Block[id="${e}"]`);
  n && n.parentNode === t && (t.removeChild(n), st.deleteAndDispatchActionEvent(t, n));
}
function Nu(t) {
  const e = Ge(Mt);
  if (e) {
    const n = qt(t);
    n && (e.removeChild(n), st.deleteAndDispatchActionEvent(e, n));
  }
}
function Bu(t, e, n) {
  if (!Ge(Tn))
    throw new Error("XML Document is not defined");
  const l = Ge(Mt);
  if (l) {
    const s = qt(t);
    if (s) {
      const o = s.cloneNode(!0);
      o.setAttribute("id", _n()), o.setAttribute("date", (/* @__PURE__ */ new Date()).toISOString()), o.setAttribute("title", e), o.setAttribute("description", n);
      const r = o.querySelectorAll("Block");
      for (const a of r)
        a.setAttribute("id", _n());
      l.appendChild(o), st.createAndDispatchActionEvent(l, o);
    }
  }
}
function Uu() {
  Tu();
}
const At = {
  // state
  privateArea: Mt,
  // actions
  init: Uu,
  addDocumentTemplate: Du,
  addBlockToDocumentTemplate: Ou,
  getDocumentTemplate: qt,
  getAllDocumentTemplates: Su,
  getBlockOfDocumentTemplate: Lu,
  getAllBlocksOfDocumentTemplate: ku,
  moveBlockInDocumentTemplate: Mu,
  editDocumentTemplateTitleAndDescription: Ru,
  editBlockContentOfDocumentTemplate: Hu,
  deleteDocumentTemplate: Nu,
  deleteBlockFromDocumentTemplate: $u,
  duplicateDocumentTemplate: Bu
};
function Pu(t) {
  We(t, "svelte-1ffwnct", ".container.svelte-1ffwnct{position:fixed;bottom:0;right:0;display:flex;flex-direction:column;align-items:flex-end;gap:8px;padding:16px}");
}
function Ti(t, e, n) {
  const i = t.slice();
  return i[10] = e[n].name, i[11] = e[n].onClick, i;
}
function wi(t, e, n) {
  const i = t.slice();
  return i[14] = e[n], i;
}
function Si(t) {
  let e, n, i, l, s = ht(
    /*fieldsConfig*/
    t[3][
      /*currentFieldsToShow*/
      t[1]
    ]
  ), o = [];
  for (let r = 0; r < s.length; r += 1)
    o[r] = ki(wi(t, s, r));
  return i = new ft({
    props: {
      $$slots: { default: [Fu] },
      $$scope: { ctx: t }
    }
  }), i.$on(
    "click",
    /*addElement*/
    t[6]
  ), {
    c() {
      e = V("div");
      for (let r = 0; r < o.length; r += 1)
        o[r].c();
      n = K(), P(i.$$.fragment), N(e, "class", "input-fields");
    },
    m(r, a) {
      O(r, e, a);
      for (let u = 0; u < o.length; u += 1)
        o[u] && o[u].m(e, null);
      j(e, n), B(i, e, null), l = !0;
    },
    p(r, a) {
      if (a & /*fieldsConfig, currentFieldsToShow, handleInputChange*/
      42) {
        s = ht(
          /*fieldsConfig*/
          r[3][
            /*currentFieldsToShow*/
            r[1]
          ]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const f = wi(r, s, c);
          o[c] ? o[c].p(f, a) : (o[c] = ki(f), o[c].c(), o[c].m(e, n));
        }
        for (; c < o.length; c += 1)
          o[c].d(1);
        o.length = s.length;
      }
      const u = {};
      a & /*$$scope*/
      131072 && (u.$$scope = { dirty: a, ctx: r }), i.$set(u);
    },
    i(r) {
      l || (b(i.$$.fragment, r), l = !0);
    },
    o(r) {
      C(i.$$.fragment, r), l = !1;
    },
    d(r) {
      r && R(e), vn(o, r), U(i);
    }
  };
}
function ki(t) {
  let e, n = (
    /*field*/
    t[14].label + ""
  ), i, l, s, o, r, a, u, c, f, d;
  return {
    c() {
      e = V("label"), i = Ee(n), l = Ee(":"), o = K(), r = V("input"), N(e, "for", s = /*field*/
      t[14].name), N(r, "type", a = /*field*/
      t[14].type), N(r, "id", u = /*field*/
      t[14].name), N(r, "name", c = /*field*/
      t[14].name);
    },
    m(m, h) {
      O(m, e, h), j(e, i), j(e, l), O(m, o, h), O(m, r, h), f || (d = x(
        r,
        "input",
        /*handleInputChange*/
        t[5]
      ), f = !0);
    },
    p(m, h) {
      h & /*currentFieldsToShow*/
      2 && n !== (n = /*field*/
      m[14].label + "") && Ye(i, n), h & /*currentFieldsToShow*/
      2 && s !== (s = /*field*/
      m[14].name) && N(e, "for", s), h & /*currentFieldsToShow*/
      2 && a !== (a = /*field*/
      m[14].type) && N(r, "type", a), h & /*currentFieldsToShow*/
      2 && u !== (u = /*field*/
      m[14].name) && N(r, "id", u), h & /*currentFieldsToShow*/
      2 && c !== (c = /*field*/
      m[14].name) && N(r, "name", c);
    },
    d(m) {
      m && (R(e), R(o), R(r)), f = !1, d();
    }
  };
}
function Fu(t) {
  let e;
  return {
    c() {
      e = Ee("Create element");
    },
    m(n, i) {
      O(n, e, i);
    },
    d(n) {
      n && R(e);
    }
  };
}
function zu(t) {
  let e = (
    /*name*/
    t[10] + ""
  ), n;
  return {
    c() {
      n = Ee(e);
    },
    m(i, l) {
      O(i, n, l);
    },
    p: re,
    d(i) {
      i && R(n);
    }
  };
}
function Li(t) {
  let e, n;
  return e = new ft({
    props: {
      $$slots: { default: [zu] },
      $$scope: { ctx: t }
    }
  }), e.$on(
    "click",
    /*onClick*/
    t[11]
  ), {
    c() {
      P(e.$$.fragment);
    },
    m(i, l) {
      B(e, i, l), n = !0;
    },
    p(i, l) {
      const s = {};
      l & /*$$scope*/
      131072 && (s.$$scope = { dirty: l, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (b(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      U(e, i);
    }
  };
}
function Vu(t) {
  let e, n, i, l = (
    /*showFields*/
    t[0] && Si(t)
  ), s = ht(
    /*buttons*/
    t[4]
  ), o = [];
  for (let a = 0; a < s.length; a += 1)
    o[a] = Li(Ti(t, s, a));
  const r = (a) => C(o[a], 1, 1, () => {
    o[a] = null;
  });
  return {
    c() {
      e = V("div"), l && l.c(), n = K();
      for (let a = 0; a < o.length; a += 1)
        o[a].c();
      N(e, "class", "container svelte-1ffwnct");
    },
    m(a, u) {
      O(a, e, u), l && l.m(e, null), j(e, n);
      for (let c = 0; c < o.length; c += 1)
        o[c] && o[c].m(e, null);
      t[7](e), i = !0;
    },
    p(a, [u]) {
      if (/*showFields*/
      a[0] ? l ? (l.p(a, u), u & /*showFields*/
      1 && b(l, 1)) : (l = Si(a), l.c(), b(l, 1), l.m(e, n)) : l && (ge(), C(l, 1, 1, () => {
        l = null;
      }), _e()), u & /*buttons*/
      16) {
        s = ht(
          /*buttons*/
          a[4]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const f = Ti(a, s, c);
          o[c] ? (o[c].p(f, u), b(o[c], 1)) : (o[c] = Li(f), o[c].c(), b(o[c], 1), o[c].m(e, null));
        }
        for (ge(), c = s.length; c < o.length; c += 1)
          r(c);
        _e();
      }
    },
    i(a) {
      if (!i) {
        b(l);
        for (let u = 0; u < s.length; u += 1)
          b(o[u]);
        i = !0;
      }
    },
    o(a) {
      C(l), o = o.filter(Boolean);
      for (let u = 0; u < o.length; u += 1)
        C(o[u]);
      i = !1;
    },
    d(a) {
      a && R(e), l && l.d(), vn(o, a), t[7](null);
    }
  };
}
function qu(t, e, n) {
  const i = {
    ied: [
      { name: "id", label: "ID", type: "text" },
      {
        name: "name",
        label: "Name",
        type: "text"
      },
      {
        name: "desc",
        label: "Description",
        type: "text"
      },
      {
        name: "manufacturer",
        label: "Manufacturer",
        type: "text"
      },
      {
        name: "type",
        label: "Type",
        type: "text"
      },
      {
        name: "originalSclRevision",
        label: "SclRevision",
        type: "text"
      },
      {
        name: "originalSclVersion",
        label: "SclVersion",
        type: "text"
      },
      {
        name: "owner",
        label: "Owner",
        type: "text"
      }
    ],
    lDevice: [
      { name: "id", label: "ID", type: "text" },
      {
        name: "desc",
        label: "Description",
        type: "text"
      },
      {
        name: "inst",
        label: "Instance",
        type: "text"
      }
    ]
  }, l = [
    {
      name: "IED",
      onClick: () => u("ied")
    },
    {
      name: "LDevice",
      onClick: () => u("lDevice")
    }
  ];
  let s = !1, o, r = {}, a;
  function u(m) {
    n(0, s = !0), n(1, o = m), r = {};
  }
  function c(m) {
    const h = m.target;
    r[h.name] = h.value;
  }
  function f() {
    as.addElementToXmlDocument("SubstationType", r, a), n(0, s = !1);
  }
  function d(m) {
    ie[m ? "unshift" : "push"](() => {
      a = m, n(2, a);
    });
  }
  return [
    s,
    o,
    a,
    i,
    l,
    c,
    f,
    d
  ];
}
class fs extends ue {
  constructor(e) {
    super(), ae(this, e, qu, Vu, le, {}, Pu);
  }
}
oe(fs, {}, [], [], !0);
function ju(t) {
  let e;
  return {
    c() {
      e = V("p"), e.textContent = "No xml document loaded";
    },
    m(n, i) {
      O(n, e, i);
    },
    i: re,
    o: re,
    d(n) {
      n && R(e);
    }
  };
}
function Zu(t) {
  let e, n;
  return e = new fs({}), {
    c() {
      P(e.$$.fragment);
    },
    m(i, l) {
      B(e, i, l), n = !0;
    },
    i(i) {
      n || (b(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      U(e, i);
    }
  };
}
function Gu(t) {
  let e, n, i, l;
  const s = [Zu, ju], o = [];
  function r(a, u) {
    return (
      /*$xmlDocument*/
      a[0] ? 0 : 1
    );
  }
  return e = r(t), n = o[e] = s[e](t), {
    c() {
      n.c(), i = Oe();
    },
    m(a, u) {
      o[e].m(a, u), O(a, i, u), l = !0;
    },
    p(a, [u]) {
      let c = e;
      e = r(a), e !== c && (ge(), C(o[c], 1, 1, () => {
        o[c] = null;
      }), _e(), n = o[e], n || (n = o[e] = s[e](a), n.c()), b(n, 1), n.m(i.parentNode, i));
    },
    i(a) {
      l || (b(n), l = !0);
    },
    o(a) {
      C(n), l = !1;
    },
    d(a) {
      a && R(i), o[e].d(a);
    }
  };
}
function Ku(t, e, n) {
  let i;
  const { xmlDocument: l } = as;
  return wt(t, l, (s) => n(0, i = s)), [i, l];
}
class Wu extends ue {
  constructor(e) {
    super(), ae(this, e, Ku, Gu, le, {});
  }
}
oe(Wu, {}, [], [], !0);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Gt = {
  ANIM_CHECKED_INDETERMINATE: "mdc-checkbox--anim-checked-indeterminate",
  ANIM_CHECKED_UNCHECKED: "mdc-checkbox--anim-checked-unchecked",
  ANIM_INDETERMINATE_CHECKED: "mdc-checkbox--anim-indeterminate-checked",
  ANIM_INDETERMINATE_UNCHECKED: "mdc-checkbox--anim-indeterminate-unchecked",
  ANIM_UNCHECKED_CHECKED: "mdc-checkbox--anim-unchecked-checked",
  ANIM_UNCHECKED_INDETERMINATE: "mdc-checkbox--anim-unchecked-indeterminate",
  BACKGROUND: "mdc-checkbox__background",
  CHECKED: "mdc-checkbox--checked",
  CHECKMARK: "mdc-checkbox__checkmark",
  CHECKMARK_PATH: "mdc-checkbox__checkmark-path",
  DISABLED: "mdc-checkbox--disabled",
  INDETERMINATE: "mdc-checkbox--indeterminate",
  MIXEDMARK: "mdc-checkbox__mixedmark",
  NATIVE_CONTROL: "mdc-checkbox__native-control",
  ROOT: "mdc-checkbox",
  SELECTED: "mdc-checkbox--selected",
  UPGRADED: "mdc-checkbox--upgraded"
}, it = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_CHECKED_INDETERMINATE_VALUE: "mixed",
  DATA_INDETERMINATE_ATTR: "data-indeterminate",
  NATIVE_CONTROL_SELECTOR: ".mdc-checkbox__native-control",
  TRANSITION_STATE_CHECKED: "checked",
  TRANSITION_STATE_INDETERMINATE: "indeterminate",
  TRANSITION_STATE_INIT: "init",
  TRANSITION_STATE_UNCHECKED: "unchecked"
}, Di = {
  ANIM_END_LATCH_MS: 250
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Xu = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var i = t.call(this, $e($e({}, e.defaultAdapter), n)) || this;
      return i.currentCheckState = it.TRANSITION_STATE_INIT, i.currentAnimationClass = "", i.animEndLatchTimer = 0, i.enableAnimationEndHandler = !1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Gt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return it;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Di;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          forceLayout: function() {
          },
          hasNativeControl: function() {
            return !1;
          },
          isAttachedToDOM: function() {
            return !1;
          },
          isChecked: function() {
            return !1;
          },
          isIndeterminate: function() {
            return !1;
          },
          removeClass: function() {
          },
          removeNativeControlAttr: function() {
          },
          setNativeControlAttr: function() {
          },
          setNativeControlDisabled: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.currentCheckState = this.determineCheckState(), this.updateAriaChecked(), this.adapter.addClass(Gt.UPGRADED);
    }, e.prototype.destroy = function() {
      clearTimeout(this.animEndLatchTimer);
    }, e.prototype.setDisabled = function(n) {
      this.adapter.setNativeControlDisabled(n), n ? this.adapter.addClass(Gt.DISABLED) : this.adapter.removeClass(Gt.DISABLED);
    }, e.prototype.handleAnimationEnd = function() {
      var n = this;
      this.enableAnimationEndHandler && (clearTimeout(this.animEndLatchTimer), this.animEndLatchTimer = setTimeout(function() {
        n.adapter.removeClass(n.currentAnimationClass), n.enableAnimationEndHandler = !1;
      }, Di.ANIM_END_LATCH_MS));
    }, e.prototype.handleChange = function() {
      this.transitionCheckState();
    }, e.prototype.transitionCheckState = function() {
      if (this.adapter.hasNativeControl()) {
        var n = this.currentCheckState, i = this.determineCheckState();
        if (n !== i) {
          this.updateAriaChecked();
          var l = it.TRANSITION_STATE_UNCHECKED, s = Gt.SELECTED;
          i === l ? this.adapter.removeClass(s) : this.adapter.addClass(s), this.currentAnimationClass.length > 0 && (clearTimeout(this.animEndLatchTimer), this.adapter.forceLayout(), this.adapter.removeClass(this.currentAnimationClass)), this.currentAnimationClass = this.getTransitionAnimationClass(n, i), this.currentCheckState = i, this.adapter.isAttachedToDOM() && this.currentAnimationClass.length > 0 && (this.adapter.addClass(this.currentAnimationClass), this.enableAnimationEndHandler = !0);
        }
      }
    }, e.prototype.determineCheckState = function() {
      var n = it.TRANSITION_STATE_INDETERMINATE, i = it.TRANSITION_STATE_CHECKED, l = it.TRANSITION_STATE_UNCHECKED;
      return this.adapter.isIndeterminate() ? n : this.adapter.isChecked() ? i : l;
    }, e.prototype.getTransitionAnimationClass = function(n, i) {
      var l = it.TRANSITION_STATE_INIT, s = it.TRANSITION_STATE_CHECKED, o = it.TRANSITION_STATE_UNCHECKED, r = e.cssClasses, a = r.ANIM_UNCHECKED_CHECKED, u = r.ANIM_UNCHECKED_INDETERMINATE, c = r.ANIM_CHECKED_UNCHECKED, f = r.ANIM_CHECKED_INDETERMINATE, d = r.ANIM_INDETERMINATE_CHECKED, m = r.ANIM_INDETERMINATE_UNCHECKED;
      switch (n) {
        case l:
          return i === o ? "" : i === s ? d : m;
        case o:
          return i === s ? a : u;
        case s:
          return i === o ? c : f;
        default:
          return i === s ? d : m;
      }
    }, e.prototype.updateAriaChecked = function() {
      this.adapter.isIndeterminate() ? this.adapter.setNativeControlAttr(it.ARIA_CHECKED_ATTR, it.ARIA_CHECKED_INDETERMINATE_VALUE) : this.adapter.removeNativeControlAttr(it.ARIA_CHECKED_ATTR);
    }, e;
  }(gt)
);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ze = {
  CELL: "mdc-data-table__cell",
  CELL_NUMERIC: "mdc-data-table__cell--numeric",
  CONTENT: "mdc-data-table__content",
  HEADER_CELL: "mdc-data-table__header-cell",
  HEADER_CELL_LABEL: "mdc-data-table__header-cell-label",
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  HEADER_CELL_WITH_SORT: "mdc-data-table__header-cell--with-sort",
  HEADER_CELL_WRAPPER: "mdc-data-table__header-cell-wrapper",
  HEADER_ROW: "mdc-data-table__header-row",
  HEADER_ROW_CHECKBOX: "mdc-data-table__header-row-checkbox",
  IN_PROGRESS: "mdc-data-table--in-progress",
  LINEAR_PROGRESS: "mdc-data-table__linear-progress",
  PAGINATION_ROWS_PER_PAGE_LABEL: "mdc-data-table__pagination-rows-per-page-label",
  PAGINATION_ROWS_PER_PAGE_SELECT: "mdc-data-table__pagination-rows-per-page-select",
  PROGRESS_INDICATOR: "mdc-data-table__progress-indicator",
  ROOT: "mdc-data-table",
  ROW: "mdc-data-table__row",
  ROW_CHECKBOX: "mdc-data-table__row-checkbox",
  ROW_SELECTED: "mdc-data-table__row--selected",
  SORT_ICON_BUTTON: "mdc-data-table__sort-icon-button",
  SORT_STATUS_LABEL: "mdc-data-table__sort-status-label",
  TABLE_CONTAINER: "mdc-data-table__table-container"
}, Ri = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, Qu = {
  COLUMN_ID: "data-column-id",
  ROW_ID: "data-row-id"
}, cn = {
  CONTENT: "." + ze.CONTENT,
  HEADER_CELL: "." + ze.HEADER_CELL,
  HEADER_CELL_WITH_SORT: "." + ze.HEADER_CELL_WITH_SORT,
  HEADER_ROW: "." + ze.HEADER_ROW,
  HEADER_ROW_CHECKBOX: "." + ze.HEADER_ROW_CHECKBOX,
  PROGRESS_INDICATOR: "." + ze.PROGRESS_INDICATOR,
  ROW: "." + ze.ROW,
  ROW_CHECKBOX: "." + ze.ROW_CHECKBOX,
  ROW_SELECTED: "." + ze.ROW_SELECTED,
  SORT_ICON_BUTTON: "." + ze.SORT_ICON_BUTTON,
  SORT_STATUS_LABEL: "." + ze.SORT_STATUS_LABEL
}, Dt = {
  ARIA_SELECTED: Ri.ARIA_SELECTED,
  ARIA_SORT: Ri.ARIA_SORT,
  DATA_ROW_ID_ATTR: Qu.ROW_ID,
  HEADER_ROW_CHECKBOX_SELECTOR: cn.HEADER_ROW_CHECKBOX,
  ROW_CHECKBOX_SELECTOR: cn.ROW_CHECKBOX,
  ROW_SELECTED_SELECTOR: cn.ROW_SELECTED,
  ROW_SELECTOR: cn.ROW
}, tt;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(tt || (tt = {}));
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Yu = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      return t.call(this, $e($e({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          addClassAtRowIndex: function() {
          },
          getAttributeByHeaderCellIndex: function() {
            return "";
          },
          getHeaderCellCount: function() {
            return 0;
          },
          getHeaderCellElements: function() {
            return [];
          },
          getRowCount: function() {
            return 0;
          },
          getRowElements: function() {
            return [];
          },
          getRowIdAtIndex: function() {
            return "";
          },
          getRowIndexByChildElement: function() {
            return 0;
          },
          getSelectedRowCount: function() {
            return 0;
          },
          getTableContainerHeight: function() {
            return 0;
          },
          getTableHeaderHeight: function() {
            return 0;
          },
          isCheckboxAtRowIndexChecked: function() {
            return !1;
          },
          isHeaderRowCheckboxChecked: function() {
            return !1;
          },
          isRowsSelectable: function() {
            return !1;
          },
          notifyRowSelectionChanged: function() {
          },
          notifySelectedAll: function() {
          },
          notifySortAction: function() {
          },
          notifyUnselectedAll: function() {
          },
          notifyRowClick: function() {
          },
          registerHeaderRowCheckbox: function() {
          },
          registerRowCheckboxes: function() {
          },
          removeClass: function() {
          },
          removeClassAtRowIndex: function() {
          },
          removeClassNameByHeaderCellIndex: function() {
          },
          setAttributeAtRowIndex: function() {
          },
          setAttributeByHeaderCellIndex: function() {
          },
          setClassNameByHeaderCellIndex: function() {
          },
          setHeaderRowCheckboxChecked: function() {
          },
          setHeaderRowCheckboxIndeterminate: function() {
          },
          setProgressIndicatorStyles: function() {
          },
          setRowCheckboxCheckedAtIndex: function() {
          },
          setSortStatusLabelByHeaderCellIndex: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.layout = function() {
      this.adapter.isRowsSelectable() && (this.adapter.registerHeaderRowCheckbox(), this.adapter.registerRowCheckboxes(), this.setHeaderRowCheckboxState());
    }, e.prototype.layoutAsync = function() {
      return Rr(this, void 0, void 0, function() {
        return Or(this, function(n) {
          switch (n.label) {
            case 0:
              return this.adapter.isRowsSelectable() ? [4, this.adapter.registerHeaderRowCheckbox()] : [3, 3];
            case 1:
              return n.sent(), [4, this.adapter.registerRowCheckboxes()];
            case 2:
              n.sent(), this.setHeaderRowCheckboxState(), n.label = 3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.getRows = function() {
      return this.adapter.getRowElements();
    }, e.prototype.getHeaderCells = function() {
      return this.adapter.getHeaderCellElements();
    }, e.prototype.setSelectedRowIds = function(n) {
      for (var i = 0; i < this.adapter.getRowCount(); i++) {
        var l = this.adapter.getRowIdAtIndex(i), s = !1;
        l && n.indexOf(l) >= 0 && (s = !0), this.adapter.setRowCheckboxCheckedAtIndex(i, s), this.selectRowAtIndex(i, s);
      }
      this.setHeaderRowCheckboxState();
    }, e.prototype.getRowIds = function() {
      for (var n = [], i = 0; i < this.adapter.getRowCount(); i++)
        n.push(this.adapter.getRowIdAtIndex(i));
      return n;
    }, e.prototype.getSelectedRowIds = function() {
      for (var n = [], i = 0; i < this.adapter.getRowCount(); i++)
        this.adapter.isCheckboxAtRowIndexChecked(i) && n.push(this.adapter.getRowIdAtIndex(i));
      return n;
    }, e.prototype.handleHeaderRowCheckboxChange = function() {
      for (var n = this.adapter.isHeaderRowCheckboxChecked(), i = 0; i < this.adapter.getRowCount(); i++)
        this.adapter.setRowCheckboxCheckedAtIndex(i, n), this.selectRowAtIndex(i, n);
      n ? this.adapter.notifySelectedAll() : this.adapter.notifyUnselectedAll();
    }, e.prototype.handleRowCheckboxChange = function(n) {
      var i = this.adapter.getRowIndexByChildElement(n.target);
      if (i !== -1) {
        var l = this.adapter.isCheckboxAtRowIndexChecked(i);
        this.selectRowAtIndex(i, l), this.setHeaderRowCheckboxState();
        var s = this.adapter.getRowIdAtIndex(i);
        this.adapter.notifyRowSelectionChanged({ rowId: s, rowIndex: i, selected: l });
      }
    }, e.prototype.handleSortAction = function(n) {
      for (var i = n.columnId, l = n.columnIndex, s = n.headerCell, o = 0; o < this.adapter.getHeaderCellCount(); o++)
        o !== l && (this.adapter.removeClassNameByHeaderCellIndex(o, ze.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, ze.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, Dt.ARIA_SORT, tt.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, tt.NONE));
      this.adapter.setClassNameByHeaderCellIndex(l, ze.HEADER_CELL_SORTED);
      var r = this.adapter.getAttributeByHeaderCellIndex(l, Dt.ARIA_SORT), a = tt.NONE;
      r === tt.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(l, ze.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(l, Dt.ARIA_SORT, tt.DESCENDING), a = tt.DESCENDING) : r === tt.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(l, ze.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(l, Dt.ARIA_SORT, tt.ASCENDING), a = tt.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(l, Dt.ARIA_SORT, tt.ASCENDING), a = tt.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(l, a), this.adapter.notifySortAction({
        columnId: i,
        columnIndex: l,
        headerCell: s,
        sortValue: a
      });
    }, e.prototype.handleRowClick = function(n) {
      var i = n.rowId, l = n.row;
      this.adapter.notifyRowClick({
        rowId: i,
        row: l
      });
    }, e.prototype.showProgress = function() {
      var n = this.adapter.getTableHeaderHeight(), i = this.adapter.getTableContainerHeight() - n, l = n;
      this.adapter.setProgressIndicatorStyles({
        height: i + "px",
        top: l + "px"
      }), this.adapter.addClass(ze.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(ze.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, i) {
      i ? (this.adapter.addClassAtRowIndex(n, ze.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Dt.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, ze.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Dt.ARIA_SELECTED, "false"));
    }, e;
  }(gt)
);
const Ju = (t) => ({}), Oi = (t) => ({}), xu = (t) => ({}), Hi = (t) => ({});
function Mi(t) {
  let e, n, i, l, s;
  const o = (
    /*#slots*/
    t[36].progress
  ), r = fe(
    o,
    t,
    /*$$scope*/
    t[35],
    Hi
  );
  return {
    c() {
      e = V("div"), n = V("div"), i = K(), r && r.c(), N(n, "class", "mdc-data-table__scrim"), N(e, "class", "mdc-data-table__progress-indicator"), N(e, "style", l = Object.entries(
        /*progressIndicatorStyles*/
        t[13]
      ).map($i).join(" "));
    },
    m(a, u) {
      O(a, e, u), j(e, n), j(e, i), r && r.m(e, null), s = !0;
    },
    p(a, u) {
      r && r.p && (!s || u[1] & /*$$scope*/
      16) && me(
        r,
        o,
        a,
        /*$$scope*/
        a[35],
        s ? de(
          o,
          /*$$scope*/
          a[35],
          u,
          xu
        ) : he(
          /*$$scope*/
          a[35]
        ),
        Hi
      ), (!s || u[0] & /*progressIndicatorStyles*/
      8192 && l !== (l = Object.entries(
        /*progressIndicatorStyles*/
        a[13]
      ).map($i).join(" "))) && N(e, "style", l);
    },
    i(a) {
      s || (b(r, a), s = !0);
    },
    o(a) {
      C(r, a), s = !1;
    },
    d(a) {
      a && R(e), r && r.d(a);
    }
  };
}
function ec(t) {
  let e, n, i, l, s, o, r, a, u, c, f, d, m, h;
  const _ = (
    /*#slots*/
    t[36].default
  ), p = fe(
    _,
    t,
    /*$$scope*/
    t[35],
    null
  );
  let E = [
    {
      class: l = Y({
        [
          /*table$class*/
          t[6]
        ]: !0,
        "mdc-data-table__table": !0
      })
    },
    Ne(
      /*$$restProps*/
      t[25],
      "table$"
    )
  ], S = {};
  for (let H = 0; H < E.length; H += 1)
    S = F(S, E[H]);
  let M = [
    {
      class: o = Y({
        [
          /*container$class*/
          t[4]
        ]: !0,
        "mdc-data-table__table-container": !0
      })
    },
    Ne(
      /*$$restProps*/
      t[25],
      "container$"
    )
  ], A = {};
  for (let H = 0; H < M.length; H += 1)
    A = F(A, M[H]);
  let v = (
    /*$$slots*/
    t[24].progress && Mi(t)
  );
  const I = (
    /*#slots*/
    t[36].paginate
  ), g = fe(
    I,
    t,
    /*$$scope*/
    t[35],
    Oi
  );
  let T = [
    {
      class: c = Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": (
          /*stickyHeader*/
          t[2]
        ),
        .../*internalClasses*/
        t[12]
      })
    },
    pt(
      /*$$restProps*/
      t[25],
      ["container$", "table$"]
    )
  ], q = {};
  for (let H = 0; H < T.length; H += 1)
    q = F(q, T[H]);
  return {
    c() {
      e = V("div"), n = V("div"), i = V("table"), p && p.c(), a = K(), v && v.c(), u = K(), g && g.c(), ce(i, S), ce(n, A), ce(e, q);
    },
    m(H, w) {
      O(H, e, w), j(e, n), j(n, i), p && p.m(i, null), t[37](n), j(e, a), v && v.m(e, null), j(e, u), g && g.m(e, null), t[38](e), d = !0, m || (h = [
        ee(s = De.call(
          null,
          i,
          /*table$use*/
          t[5]
        )),
        ee(r = De.call(
          null,
          n,
          /*container$use*/
          t[3]
        )),
        ee(f = De.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        ee(
          /*forwardEvents*/
          t[15].call(null, e)
        ),
        x(
          e,
          "SMUICheckbox:mount",
          /*SMUICheckbox_mount_handler*/
          t[39]
        ),
        x(
          e,
          "SMUIDataTableHeader:mount",
          /*handleHeaderMount*/
          t[19]
        ),
        x(
          e,
          "SMUIDataTableHeader:unmount",
          /*SMUIDataTableHeader_unmount_handler*/
          t[40]
        ),
        x(
          e,
          "SMUIDataTableBody:mount",
          /*handleBodyMount*/
          t[20]
        ),
        x(
          e,
          "SMUIDataTableBody:unmount",
          /*SMUIDataTableBody_unmount_handler*/
          t[41]
        ),
        x(
          e,
          "SMUIDataTableHeaderCheckbox:change",
          /*SMUIDataTableHeaderCheckbox_change_handler*/
          t[42]
        ),
        x(
          e,
          "SMUIDataTableHeader:click",
          /*handleHeaderRowClick*/
          t[22]
        ),
        x(
          e,
          "SMUIDataTableRow:click",
          /*handleRowClick*/
          t[23]
        ),
        x(
          e,
          "SMUIDataTableBodyCheckbox:change",
          /*handleBodyCheckboxChange*/
          t[21]
        )
      ], m = !0);
    },
    p(H, w) {
      p && p.p && (!d || w[1] & /*$$scope*/
      16) && me(
        p,
        _,
        H,
        /*$$scope*/
        H[35],
        d ? de(
          _,
          /*$$scope*/
          H[35],
          w,
          null
        ) : he(
          /*$$scope*/
          H[35]
        ),
        null
      ), ce(i, S = ne(E, [
        (!d || w[0] & /*table$class*/
        64 && l !== (l = Y({
          [
            /*table$class*/
            H[6]
          ]: !0,
          "mdc-data-table__table": !0
        }))) && { class: l },
        w[0] & /*$$restProps*/
        33554432 && Ne(
          /*$$restProps*/
          H[25],
          "table$"
        )
      ])), s && Ce(s.update) && w[0] & /*table$use*/
      32 && s.update.call(
        null,
        /*table$use*/
        H[5]
      ), ce(n, A = ne(M, [
        (!d || w[0] & /*container$class*/
        16 && o !== (o = Y({
          [
            /*container$class*/
            H[4]
          ]: !0,
          "mdc-data-table__table-container": !0
        }))) && { class: o },
        w[0] & /*$$restProps*/
        33554432 && Ne(
          /*$$restProps*/
          H[25],
          "container$"
        )
      ])), r && Ce(r.update) && w[0] & /*container$use*/
      8 && r.update.call(
        null,
        /*container$use*/
        H[3]
      ), /*$$slots*/
      H[24].progress ? v ? (v.p(H, w), w[0] & /*$$slots*/
      16777216 && b(v, 1)) : (v = Mi(H), v.c(), b(v, 1), v.m(e, u)) : v && (ge(), C(v, 1, 1, () => {
        v = null;
      }), _e()), g && g.p && (!d || w[1] & /*$$scope*/
      16) && me(
        g,
        I,
        H,
        /*$$scope*/
        H[35],
        d ? de(
          I,
          /*$$scope*/
          H[35],
          w,
          Ju
        ) : he(
          /*$$scope*/
          H[35]
        ),
        Oi
      ), ce(e, q = ne(T, [
        (!d || w[0] & /*className, stickyHeader, internalClasses*/
        4102 && c !== (c = Y({
          [
            /*className*/
            H[1]
          ]: !0,
          "mdc-data-table": !0,
          "mdc-data-table--sticky-header": (
            /*stickyHeader*/
            H[2]
          ),
          .../*internalClasses*/
          H[12]
        }))) && { class: c },
        w[0] & /*$$restProps*/
        33554432 && pt(
          /*$$restProps*/
          H[25],
          ["container$", "table$"]
        )
      ])), f && Ce(f.update) && w[0] & /*use*/
      1 && f.update.call(
        null,
        /*use*/
        H[0]
      );
    },
    i(H) {
      d || (b(p, H), b(v), b(g, H), d = !0);
    },
    o(H) {
      C(p, H), C(v), C(g, H), d = !1;
    },
    d(H) {
      H && R(e), p && p.d(H), t[37](null), v && v.d(), g && g.d(H), t[38](null), m = !1, Te(h);
    }
  };
}
const $i = ([t, e]) => `${t}: ${e};`;
function tc(t, e, n) {
  const i = [
    "use",
    "class",
    "stickyHeader",
    "sortable",
    "sort",
    "sortDirection",
    "sortAscendingAriaLabel",
    "sortDescendingAriaLabel",
    "container$use",
    "container$class",
    "table$use",
    "table$class",
    "layout",
    "getElement"
  ];
  let l = se(e, i), s, o, r, { $$slots: a = {}, $$scope: u } = e;
  const c = Gn(a), { closest: f } = Vl, d = Me(we());
  let { use: m = [] } = e, { class: h = "" } = e, { stickyHeader: _ = !1 } = e, { sortable: p = !1 } = e, { sort: E = null } = e, { sortDirection: S = "ascending" } = e, { sortAscendingAriaLabel: M = "sorted, ascending" } = e, { sortDescendingAriaLabel: A = "sorted, descending" } = e, { container$use: v = [] } = e, { container$class: I = "" } = e, { table$use: g = [] } = e, { table$class: T = "" } = e, q, H, w, z, L, Z = {}, ke = { height: "auto", top: "initial" }, ve = Ue("SMUI:addLayoutListener"), be, X = !1, k = lt(!1);
  wt(t, k, ($) => n(34, s = $));
  let Q = lt(E);
  wt(t, Q, ($) => n(45, r = $));
  let Se = lt(S);
  wt(t, Se, ($) => n(44, o = $)), He("SMUI:checkbox:context", "data-table"), He("SMUI:linear-progress:context", "data-table"), He("SMUI:linear-progress:closed", k), He("SMUI:data-table:sortable", p), He("SMUI:data-table:sort", Q), He("SMUI:data-table:sortDirection", Se), He("SMUI:data-table:sortAscendingAriaLabel", M), He("SMUI:data-table:sortDescendingAriaLabel", A), ve && (be = ve(G));
  let Le;
  Qe(() => (n(7, H = new Yu({
    addClass: Xe,
    removeClass: je,
    getHeaderCellElements: () => {
      var $;
      return ($ = z == null ? void 0 : z.cells.map((te) => te.element)) !== null && $ !== void 0 ? $ : [];
    },
    getHeaderCellCount: () => {
      var $;
      return ($ = z == null ? void 0 : z.cells.length) !== null && $ !== void 0 ? $ : 0;
    },
    getAttributeByHeaderCellIndex: ($, te) => {
      var Ze;
      return (Ze = z == null ? void 0 : z.orderedCells[$].getAttr(te)) !== null && Ze !== void 0 ? Ze : null;
    },
    setAttributeByHeaderCellIndex: ($, te, Ze) => {
      z == null || z.orderedCells[$].addAttr(te, Ze);
    },
    setClassNameByHeaderCellIndex: ($, te) => {
      z == null || z.orderedCells[$].addClass(te);
    },
    removeClassNameByHeaderCellIndex: ($, te) => {
      z == null || z.orderedCells[$].removeClass(te);
    },
    notifySortAction: ($) => {
      n(26, E = $.columnId), n(27, S = $.sortValue), Ae(Ie(), "SMUIDataTable:sorted", $, void 0, !0);
    },
    getTableContainerHeight: () => w.getBoundingClientRect().height,
    getTableHeaderHeight: () => {
      const $ = Ie().querySelector(".mdc-data-table__header-row");
      if (!$)
        throw new Error("MDCDataTable: Table header element not found.");
      return $.getBoundingClientRect().height;
    },
    setProgressIndicatorStyles: ($) => {
      n(13, ke = $);
    },
    addClassAtRowIndex: ($, te) => {
      L == null || L.orderedRows[$].addClass(te);
    },
    getRowCount: () => {
      var $;
      return ($ = L == null ? void 0 : L.rows.length) !== null && $ !== void 0 ? $ : 0;
    },
    getRowElements: () => {
      var $;
      return ($ = L == null ? void 0 : L.rows.map((te) => te.element)) !== null && $ !== void 0 ? $ : [];
    },
    getRowIdAtIndex: ($) => {
      var te;
      return (te = L == null ? void 0 : L.orderedRows[$].rowId) !== null && te !== void 0 ? te : null;
    },
    getRowIndexByChildElement: ($) => {
      var te;
      return (te = L == null ? void 0 : L.orderedRows.map((Ze) => Ze.element).indexOf(f($, ".mdc-data-table__row"))) !== null && te !== void 0 ? te : -1;
    },
    getSelectedRowCount: () => {
      var $;
      return ($ = L == null ? void 0 : L.rows.filter((te) => te.selected).length) !== null && $ !== void 0 ? $ : 0;
    },
    isCheckboxAtRowIndexChecked: ($) => {
      const te = L == null ? void 0 : L.orderedRows[$].checkbox;
      return te ? te.checked : !1;
    },
    isHeaderRowCheckboxChecked: () => {
      const $ = z == null ? void 0 : z.checkbox;
      return $ ? $.checked : !1;
    },
    isRowsSelectable: () => !!Ie().querySelector(".mdc-data-table__row-checkbox") || !!Ie().querySelector(".mdc-data-table__header-row-checkbox"),
    notifyRowSelectionChanged: ($) => {
      const te = L == null ? void 0 : L.orderedRows[$.rowIndex];
      te && Ae(
        Ie(),
        "SMUIDataTable:rowSelectionChanged",
        {
          row: te.element,
          rowId: te.rowId,
          rowIndex: $.rowIndex,
          selected: $.selected
        },
        void 0,
        !0
      );
    },
    notifySelectedAll: () => {
      rt(!1), Ae(Ie(), "SMUIDataTable:selectedAll", void 0, void 0, !0);
    },
    notifyUnselectedAll: () => {
      rt(!1), Ae(Ie(), "SMUIDataTable:unselectedAll", void 0, void 0, !0);
    },
    notifyRowClick: ($) => {
      Ae(Ie(), "SMUIDataTable:rowClick", $, void 0, !0);
    },
    registerHeaderRowCheckbox: () => {
    },
    // Handled automatically.
    registerRowCheckboxes: () => {
    },
    // Handled automatically.
    removeClassAtRowIndex: ($, te) => {
      L == null || L.orderedRows[$].removeClass(te);
    },
    setAttributeAtRowIndex: ($, te, Ze) => {
      L == null || L.orderedRows[$].addAttr(te, Ze);
    },
    setHeaderRowCheckboxChecked: ($) => {
      const te = z == null ? void 0 : z.checkbox;
      te && (te.checked = $);
    },
    setHeaderRowCheckboxIndeterminate: rt,
    setRowCheckboxCheckedAtIndex: ($, te) => {
      const Ze = L == null ? void 0 : L.orderedRows[$].checkbox;
      Ze && (Ze.checked = te);
    },
    setSortStatusLabelByHeaderCellIndex: ($, te) => {
    }
    // Handled automatically.
  })), H.init(), H.layout(), n(14, X = !0), () => {
    H.destroy();
  })), St(() => {
    be && be();
  });
  function Ve($) {
    n(10, z = $.detail);
  }
  function J($) {
    n(11, L = $.detail);
  }
  function ye($) {
    H && H.handleRowCheckboxChange($);
  }
  function Xe($) {
    Z[$] || n(12, Z[$] = !0, Z);
  }
  function je($) {
    (!($ in Z) || Z[$]) && n(12, Z[$] = !1, Z);
  }
  function rt($) {
    const te = z == null ? void 0 : z.checkbox;
    te && (te.indeterminate = $);
  }
  function at($) {
    if (!H || !$.detail.target)
      return;
    const te = f($.detail.target, ".mdc-data-table__header-cell--with-sort");
    te && W(te);
  }
  function Et($) {
    if (!H || !$.detail.target)
      return;
    const te = f($.detail.target, ".mdc-data-table__row");
    te && H && H.handleRowClick({ rowId: $.detail.rowId, row: te });
  }
  function W($) {
    var te, Ze;
    const Yt = (te = z == null ? void 0 : z.orderedCells) !== null && te !== void 0 ? te : [], Zt = Yt.map((xt) => xt.element).indexOf($);
    if (Zt === -1)
      return;
    const Jt = (Ze = Yt[Zt].columnId) !== null && Ze !== void 0 ? Ze : null;
    H.handleSortAction({ columnId: Jt, columnIndex: Zt, headerCell: $ });
  }
  function G() {
    return H.layout();
  }
  function Ie() {
    return q;
  }
  function dt($) {
    ie[$ ? "unshift" : "push"](() => {
      w = $, n(9, w);
    });
  }
  function kt($) {
    ie[$ ? "unshift" : "push"](() => {
      q = $, n(8, q);
    });
  }
  const $t = () => H && X && H.layout(), Lt = () => n(10, z = void 0), jt = () => n(11, L = void 0), wn = () => H && H.handleHeaderRowCheckboxChange();
  return t.$$set = ($) => {
    e = F(F({}, e), Re($)), n(25, l = se(e, i)), "use" in $ && n(0, m = $.use), "class" in $ && n(1, h = $.class), "stickyHeader" in $ && n(2, _ = $.stickyHeader), "sortable" in $ && n(28, p = $.sortable), "sort" in $ && n(26, E = $.sort), "sortDirection" in $ && n(27, S = $.sortDirection), "sortAscendingAriaLabel" in $ && n(29, M = $.sortAscendingAriaLabel), "sortDescendingAriaLabel" in $ && n(30, A = $.sortDescendingAriaLabel), "container$use" in $ && n(3, v = $.container$use), "container$class" in $ && n(4, I = $.container$class), "table$use" in $ && n(5, g = $.table$use), "table$class" in $ && n(6, T = $.table$class), "$$scope" in $ && n(35, u = $.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*sort*/
    67108864 && Bn(Q, r = E, r), t.$$.dirty[0] & /*sortDirection*/
    134217728 && Bn(Se, o = S, o), t.$$.dirty[0] & /*instance*/
    128 | t.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && c.progress && H && Le !== s && (n(33, Le = s), s ? H.hideProgress() : H.showProgress());
  }, [
    m,
    h,
    _,
    v,
    I,
    g,
    T,
    H,
    q,
    w,
    z,
    L,
    Z,
    ke,
    X,
    d,
    k,
    Q,
    Se,
    Ve,
    J,
    ye,
    at,
    Et,
    c,
    l,
    E,
    S,
    p,
    M,
    A,
    G,
    Ie,
    Le,
    s,
    u,
    a,
    dt,
    kt,
    $t,
    Lt,
    jt,
    wn
  ];
}
class ds extends ue {
  constructor(e) {
    super(), ae(
      this,
      e,
      tc,
      ec,
      le,
      {
        use: 0,
        class: 1,
        stickyHeader: 2,
        sortable: 28,
        sort: 26,
        sortDirection: 27,
        sortAscendingAriaLabel: 29,
        sortDescendingAriaLabel: 30,
        container$use: 3,
        container$class: 4,
        table$use: 5,
        table$class: 6,
        layout: 31,
        getElement: 32
      },
      null,
      [-1, -1]
    );
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get stickyHeader() {
    return this.$$.ctx[2];
  }
  set stickyHeader(e) {
    this.$$set({ stickyHeader: e }), y();
  }
  get sortable() {
    return this.$$.ctx[28];
  }
  set sortable(e) {
    this.$$set({ sortable: e }), y();
  }
  get sort() {
    return this.$$.ctx[26];
  }
  set sort(e) {
    this.$$set({ sort: e }), y();
  }
  get sortDirection() {
    return this.$$.ctx[27];
  }
  set sortDirection(e) {
    this.$$set({ sortDirection: e }), y();
  }
  get sortAscendingAriaLabel() {
    return this.$$.ctx[29];
  }
  set sortAscendingAriaLabel(e) {
    this.$$set({ sortAscendingAriaLabel: e }), y();
  }
  get sortDescendingAriaLabel() {
    return this.$$.ctx[30];
  }
  set sortDescendingAriaLabel(e) {
    this.$$set({ sortDescendingAriaLabel: e }), y();
  }
  get container$use() {
    return this.$$.ctx[3];
  }
  set container$use(e) {
    this.$$set({ container$use: e }), y();
  }
  get container$class() {
    return this.$$.ctx[4];
  }
  set container$class(e) {
    this.$$set({ container$class: e }), y();
  }
  get table$use() {
    return this.$$.ctx[5];
  }
  set table$use(e) {
    this.$$set({ table$use: e }), y();
  }
  get table$class() {
    return this.$$.ctx[6];
  }
  set table$class(e) {
    this.$$set({ table$class: e }), y();
  }
  get layout() {
    return this.$$.ctx[31];
  }
  get getElement() {
    return this.$$.ctx[32];
  }
}
oe(ds, { use: {}, class: {}, stickyHeader: { type: "Boolean" }, sortable: { type: "Boolean" }, sort: {}, sortDirection: {}, sortAscendingAriaLabel: {}, sortDescendingAriaLabel: {}, container$use: {}, container$class: {}, table$use: {}, table$class: {} }, ["default", "progress", "paginate"], ["layout", "getElement"], !0);
function nc(t) {
  let e, n, i, l, s;
  const o = (
    /*#slots*/
    t[10].default
  ), r = fe(
    o,
    t,
    /*$$scope*/
    t[9],
    null
  );
  let a = [
    /*$$restProps*/
    t[7]
  ], u = {};
  for (let c = 0; c < a.length; c += 1)
    u = F(u, a[c]);
  return {
    c() {
      e = V("thead"), r && r.c(), ce(e, u);
    },
    m(c, f) {
      O(c, e, f), r && r.m(e, null), t[11](e), i = !0, l || (s = [
        ee(n = De.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        ee(
          /*forwardEvents*/
          t[3].call(null, e)
        ),
        x(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          t[4]
        ),
        x(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          t[12]
        ),
        x(
          e,
          "SMUIDataTableCell:mount",
          /*handleCellMount*/
          t[5]
        ),
        x(
          e,
          "SMUIDataTableCell:unmount",
          /*handleCellUnmount*/
          t[6]
        )
      ], l = !0);
    },
    p(c, [f]) {
      r && r.p && (!i || f & /*$$scope*/
      512) && me(
        r,
        o,
        c,
        /*$$scope*/
        c[9],
        i ? de(
          o,
          /*$$scope*/
          c[9],
          f,
          null
        ) : he(
          /*$$scope*/
          c[9]
        ),
        null
      ), ce(e, u = ne(a, [f & /*$$restProps*/
      128 && /*$$restProps*/
      c[7]])), n && Ce(n.update) && f & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (b(r, c), i = !0);
    },
    o(c) {
      C(r, c), i = !1;
    },
    d(c) {
      c && R(e), r && r.d(c), t[11](null), l = !1, Te(s);
    }
  };
}
function ic(t, e, n) {
  const i = ["use", "getElement"];
  let l = se(e, i), { $$slots: s = {}, $$scope: o } = e;
  const r = Me(we());
  let { use: a = [] } = e, u, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  He("SMUI:data-table:row:header", !0), Qe(() => {
    const A = {
      get cells() {
        return f;
      },
      get orderedCells() {
        return p();
      },
      get checkbox() {
        return c;
      }
    };
    return Ae(E(), "SMUIDataTableHeader:mount", A), () => {
      Ae(E(), "SMUIDataTableHeader:unmount", A);
    };
  });
  function m(A) {
    n(2, c = A.detail);
  }
  function h(A) {
    f.push(A.detail), d.set(A.detail.element, A.detail), A.stopPropagation();
  }
  function _(A) {
    const v = f.indexOf(A.detail);
    v !== -1 && (f.splice(v, 1), f = f), d.delete(A.detail.element), A.stopPropagation();
  }
  function p() {
    return [...E().querySelectorAll(".mdc-data-table__header-cell")].map((A) => d.get(A)).filter((A) => A && A._smui_data_table_header_cell_accessor);
  }
  function E() {
    return u;
  }
  function S(A) {
    ie[A ? "unshift" : "push"](() => {
      u = A, n(1, u);
    });
  }
  const M = () => n(2, c = void 0);
  return t.$$set = (A) => {
    e = F(F({}, e), Re(A)), n(7, l = se(e, i)), "use" in A && n(0, a = A.use), "$$scope" in A && n(9, o = A.$$scope);
  }, [
    a,
    u,
    c,
    r,
    m,
    h,
    _,
    l,
    E,
    o,
    s,
    S,
    M
  ];
}
class ms extends ue {
  constructor(e) {
    super(), ae(this, e, ic, nc, le, { use: 0, getElement: 8 });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
oe(ms, { use: {} }, ["default"], ["getElement"], !0);
function lc(t) {
  let e, n, i, l, s, o;
  const r = (
    /*#slots*/
    t[9].default
  ), a = fe(
    r,
    t,
    /*$$scope*/
    t[8],
    null
  );
  let u = [
    {
      class: n = Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-data-table__content": !0
      })
    },
    /*$$restProps*/
    t[6]
  ], c = {};
  for (let f = 0; f < u.length; f += 1)
    c = F(c, u[f]);
  return {
    c() {
      e = V("tbody"), a && a.c(), ce(e, c);
    },
    m(f, d) {
      O(f, e, d), a && a.m(e, null), t[10](e), l = !0, s || (o = [
        ee(i = De.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        ee(
          /*forwardEvents*/
          t[3].call(null, e)
        ),
        x(
          e,
          "SMUIDataTableRow:mount",
          /*handleRowMount*/
          t[4]
        ),
        x(
          e,
          "SMUIDataTableRow:unmount",
          /*handleRowUnmount*/
          t[5]
        )
      ], s = !0);
    },
    p(f, [d]) {
      a && a.p && (!l || d & /*$$scope*/
      256) && me(
        a,
        r,
        f,
        /*$$scope*/
        f[8],
        l ? de(
          r,
          /*$$scope*/
          f[8],
          d,
          null
        ) : he(
          /*$$scope*/
          f[8]
        ),
        null
      ), ce(e, c = ne(u, [
        (!l || d & /*className*/
        2 && n !== (n = Y({
          [
            /*className*/
            f[1]
          ]: !0,
          "mdc-data-table__content": !0
        }))) && { class: n },
        d & /*$$restProps*/
        64 && /*$$restProps*/
        f[6]
      ])), i && Ce(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      l || (b(a, f), l = !0);
    },
    o(f) {
      C(a, f), l = !1;
    },
    d(f) {
      f && R(e), a && a.d(f), t[10](null), s = !1, Te(o);
    }
  };
}
function sc(t, e, n) {
  const i = ["use", "class", "getElement"];
  let l = se(e, i), { $$slots: s = {}, $$scope: o } = e;
  const r = Me(we());
  let { use: a = [] } = e, { class: u = "" } = e, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  He("SMUI:data-table:row:header", !1), Qe(() => {
    const S = {
      get rows() {
        return f;
      },
      get orderedRows() {
        return _();
      }
    };
    return Ae(p(), "SMUIDataTableBody:mount", S), () => {
      Ae(p(), "SMUIDataTableBody:unmount", S);
    };
  });
  function m(S) {
    f.push(S.detail), d.set(S.detail.element, S.detail), S.stopPropagation();
  }
  function h(S) {
    const M = f.indexOf(S.detail);
    M !== -1 && (f.splice(M, 1), f = f), d.delete(S.detail.element), S.stopPropagation();
  }
  function _() {
    return [...p().querySelectorAll(".mdc-data-table__row")].map((S) => d.get(S)).filter((S) => S && S._smui_data_table_row_accessor);
  }
  function p() {
    return c;
  }
  function E(S) {
    ie[S ? "unshift" : "push"](() => {
      c = S, n(2, c);
    });
  }
  return t.$$set = (S) => {
    e = F(F({}, e), Re(S)), n(6, l = se(e, i)), "use" in S && n(0, a = S.use), "class" in S && n(1, u = S.class), "$$scope" in S && n(8, o = S.$$scope);
  }, [
    a,
    u,
    c,
    r,
    m,
    h,
    l,
    p,
    o,
    s,
    E
  ];
}
class hs extends ue {
  constructor(e) {
    super(), ae(this, e, sc, lc, le, { use: 0, class: 1, getElement: 7 });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
oe(hs, { use: {}, class: {} }, ["default"], ["getElement"], !0);
function rc(t) {
  let e, n, i, l, s, o, r;
  const a = (
    /*#slots*/
    t[15].default
  ), u = fe(
    a,
    t,
    /*$$scope*/
    t[14],
    null
  );
  let c = [
    {
      class: n = Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-data-table__header-row": (
          /*header*/
          t[7]
        ),
        "mdc-data-table__row": !/*header*/
        t[7],
        "mdc-data-table__row--selected": !/*header*/
        t[7] && /*checkbox*/
        t[3] && /*checkbox*/
        t[3].checked,
        .../*internalClasses*/
        t[4]
      })
    },
    {
      "aria-selected": i = /*checkbox*/
      t[3] ? (
        /*checkbox*/
        t[3].checked ? "true" : "false"
      ) : void 0
    },
    /*internalAttrs*/
    t[5],
    /*$$restProps*/
    t[11]
  ], f = {};
  for (let d = 0; d < c.length; d += 1)
    f = F(f, c[d]);
  return {
    c() {
      e = V("tr"), u && u.c(), ce(e, f);
    },
    m(d, m) {
      O(d, e, m), u && u.m(e, null), t[16](e), s = !0, o || (r = [
        ee(l = De.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        ee(
          /*forwardEvents*/
          t[6].call(null, e)
        ),
        x(
          e,
          "click",
          /*click_handler*/
          t[17]
        ),
        x(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          t[8]
        ),
        x(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          t[18]
        )
      ], o = !0);
    },
    p(d, [m]) {
      u && u.p && (!s || m & /*$$scope*/
      16384) && me(
        u,
        a,
        d,
        /*$$scope*/
        d[14],
        s ? de(
          a,
          /*$$scope*/
          d[14],
          m,
          null
        ) : he(
          /*$$scope*/
          d[14]
        ),
        null
      ), ce(e, f = ne(c, [
        (!s || m & /*className, checkbox, internalClasses*/
        26 && n !== (n = Y({
          [
            /*className*/
            d[1]
          ]: !0,
          "mdc-data-table__header-row": (
            /*header*/
            d[7]
          ),
          "mdc-data-table__row": !/*header*/
          d[7],
          "mdc-data-table__row--selected": !/*header*/
          d[7] && /*checkbox*/
          d[3] && /*checkbox*/
          d[3].checked,
          .../*internalClasses*/
          d[4]
        }))) && { class: n },
        (!s || m & /*checkbox*/
        8 && i !== (i = /*checkbox*/
        d[3] ? (
          /*checkbox*/
          d[3].checked ? "true" : "false"
        ) : void 0)) && { "aria-selected": i },
        m & /*internalAttrs*/
        32 && /*internalAttrs*/
        d[5],
        m & /*$$restProps*/
        2048 && /*$$restProps*/
        d[11]
      ])), l && Ce(l.update) && m & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      s || (b(u, d), s = !0);
    },
    o(d) {
      C(u, d), s = !1;
    },
    d(d) {
      d && R(e), u && u.d(d), t[16](null), o = !1, Te(r);
    }
  };
}
let ac = 0;
function oc(t, e, n) {
  const i = ["use", "class", "rowId", "getElement"];
  let l = se(e, i), { $$slots: s = {}, $$scope: o } = e;
  const r = Me(we());
  let { use: a = [] } = e, { class: u = "" } = e, { rowId: c = "SMUI-data-table-row-" + ac++ } = e, f, d, m = {}, h = {}, _ = Ue("SMUI:data-table:row:header");
  Qe(() => {
    const w = _ ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return g();
      },
      get checkbox() {
        return d;
      },
      get rowId() {
      },
      get selected() {
        var z;
        return (z = d && d.checked) !== null && z !== void 0 ? z : !1;
      },
      addClass: E,
      removeClass: S,
      getAttr: M,
      addAttr: A
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return g();
      },
      get checkbox() {
        return d;
      },
      get rowId() {
        return c;
      },
      get selected() {
        var z;
        return (z = d && d.checked) !== null && z !== void 0 ? z : !1;
      },
      addClass: E,
      removeClass: S,
      getAttr: M,
      addAttr: A
    };
    return Ae(g(), "SMUIDataTableRow:mount", w), () => {
      Ae(g(), "SMUIDataTableRow:unmount", w);
    };
  });
  function p(w) {
    n(3, d = w.detail);
  }
  function E(w) {
    m[w] || n(4, m[w] = !0, m);
  }
  function S(w) {
    (!(w in m) || m[w]) && n(4, m[w] = !1, m);
  }
  function M(w) {
    var z;
    return w in h ? (z = h[w]) !== null && z !== void 0 ? z : null : g().getAttribute(w);
  }
  function A(w, z) {
    h[w] !== z && n(5, h[w] = z, h);
  }
  function v(w) {
    Ae(g(), "SMUIDataTableHeader:click", w);
  }
  function I(w) {
    Ae(g(), "SMUIDataTableRow:click", { rowId: c, target: w.target });
  }
  function g() {
    return f;
  }
  function T(w) {
    ie[w ? "unshift" : "push"](() => {
      f = w, n(2, f);
    });
  }
  const q = (w) => _ ? v(w) : I(w), H = () => n(3, d = void 0);
  return t.$$set = (w) => {
    e = F(F({}, e), Re(w)), n(11, l = se(e, i)), "use" in w && n(0, a = w.use), "class" in w && n(1, u = w.class), "rowId" in w && n(12, c = w.rowId), "$$scope" in w && n(14, o = w.$$scope);
  }, [
    a,
    u,
    f,
    d,
    m,
    h,
    r,
    _,
    p,
    v,
    I,
    l,
    c,
    g,
    o,
    s,
    T,
    q,
    H
  ];
}
class ti extends ue {
  constructor(e) {
    super(), ae(this, e, oc, rc, le, {
      use: 0,
      class: 1,
      rowId: 12,
      getElement: 13
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get rowId() {
    return this.$$.ctx[12];
  }
  set rowId(e) {
    this.$$set({ rowId: e }), y();
  }
  get getElement() {
    return this.$$.ctx[13];
  }
}
oe(ti, { use: {}, class: {}, rowId: {} }, ["default"], ["getElement"], !0);
function uc(t) {
  let e, n, i, l, s, o;
  const r = (
    /*#slots*/
    t[22].default
  ), a = fe(
    r,
    t,
    /*$$scope*/
    t[21],
    null
  );
  let u = [
    {
      class: n = Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-data-table__cell": !0,
        "mdc-data-table__cell--numeric": (
          /*numeric*/
          t[2]
        ),
        "mdc-data-table__cell--checkbox": (
          /*checkbox*/
          t[3]
        ),
        .../*internalClasses*/
        t[7]
      })
    },
    /*internalAttrs*/
    t[8],
    /*$$restProps*/
    t[19]
  ], c = {};
  for (let f = 0; f < u.length; f += 1)
    c = F(c, u[f]);
  return {
    c() {
      e = V("td"), a && a.c(), ce(e, c);
    },
    m(f, d) {
      O(f, e, d), a && a.m(e, null), t[25](e), l = !0, s || (o = [
        ee(i = De.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        ee(
          /*forwardEvents*/
          t[11].call(null, e)
        ),
        x(
          e,
          "change",
          /*change_handler_1*/
          t[26]
        )
      ], s = !0);
    },
    p(f, d) {
      a && a.p && (!l || d & /*$$scope*/
      2097152) && me(
        a,
        r,
        f,
        /*$$scope*/
        f[21],
        l ? de(
          r,
          /*$$scope*/
          f[21],
          d,
          null
        ) : he(
          /*$$scope*/
          f[21]
        ),
        null
      ), ce(e, c = ne(u, [
        (!l || d & /*className, numeric, checkbox, internalClasses*/
        142 && n !== (n = Y({
          [
            /*className*/
            f[1]
          ]: !0,
          "mdc-data-table__cell": !0,
          "mdc-data-table__cell--numeric": (
            /*numeric*/
            f[2]
          ),
          "mdc-data-table__cell--checkbox": (
            /*checkbox*/
            f[3]
          ),
          .../*internalClasses*/
          f[7]
        }))) && { class: n },
        d & /*internalAttrs*/
        256 && /*internalAttrs*/
        f[8],
        d & /*$$restProps*/
        524288 && /*$$restProps*/
        f[19]
      ])), i && Ce(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      l || (b(a, f), l = !0);
    },
    o(f) {
      C(a, f), l = !1;
    },
    d(f) {
      f && R(e), a && a.d(f), t[25](null), s = !1, Te(o);
    }
  };
}
function cc(t) {
  let e, n, i, l, s, o, r, a, u;
  const c = [dc, fc], f = [];
  function d(_, p) {
    return (
      /*sortable*/
      _[5] ? 0 : 1
    );
  }
  n = d(t), i = f[n] = c[n](t);
  let m = [
    {
      class: l = Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-data-table__header-cell": !0,
        "mdc-data-table__header-cell--numeric": (
          /*numeric*/
          t[2]
        ),
        "mdc-data-table__header-cell--checkbox": (
          /*checkbox*/
          t[3]
        ),
        "mdc-data-table__header-cell--with-sort": (
          /*sortable*/
          t[5]
        ),
        "mdc-data-table__header-cell--sorted": (
          /*sortable*/
          t[5] && /*$sort*/
          t[9] === /*columnId*/
          t[4]
        ),
        .../*internalClasses*/
        t[7]
      })
    },
    { role: "columnheader" },
    { scope: "col" },
    { "data-column-id": (
      /*columnId*/
      t[4]
    ) },
    {
      "aria-sort": s = /*sortable*/
      t[5] ? (
        /*$sort*/
        t[9] === /*columnId*/
        t[4] ? (
          /*$sortDirection*/
          t[10]
        ) : "none"
      ) : void 0
    },
    /*internalAttrs*/
    t[8],
    /*$$restProps*/
    t[19]
  ], h = {};
  for (let _ = 0; _ < m.length; _ += 1)
    h = F(h, m[_]);
  return {
    c() {
      e = V("th"), i.c(), ce(e, h);
    },
    m(_, p) {
      O(_, e, p), f[n].m(e, null), t[23](e), r = !0, a || (u = [
        ee(o = De.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        ee(
          /*forwardEvents*/
          t[11].call(null, e)
        ),
        x(
          e,
          "change",
          /*change_handler*/
          t[24]
        )
      ], a = !0);
    },
    p(_, p) {
      let E = n;
      n = d(_), n === E ? f[n].p(_, p) : (ge(), C(f[E], 1, 1, () => {
        f[E] = null;
      }), _e(), i = f[n], i ? i.p(_, p) : (i = f[n] = c[n](_), i.c()), b(i, 1), i.m(e, null)), ce(e, h = ne(m, [
        (!r || p & /*className, numeric, checkbox, sortable, $sort, columnId, internalClasses*/
        702 && l !== (l = Y({
          [
            /*className*/
            _[1]
          ]: !0,
          "mdc-data-table__header-cell": !0,
          "mdc-data-table__header-cell--numeric": (
            /*numeric*/
            _[2]
          ),
          "mdc-data-table__header-cell--checkbox": (
            /*checkbox*/
            _[3]
          ),
          "mdc-data-table__header-cell--with-sort": (
            /*sortable*/
            _[5]
          ),
          "mdc-data-table__header-cell--sorted": (
            /*sortable*/
            _[5] && /*$sort*/
            _[9] === /*columnId*/
            _[4]
          ),
          .../*internalClasses*/
          _[7]
        }))) && { class: l },
        { role: "columnheader" },
        { scope: "col" },
        (!r || p & /*columnId*/
        16) && { "data-column-id": (
          /*columnId*/
          _[4]
        ) },
        (!r || p & /*sortable, $sort, columnId, $sortDirection*/
        1584 && s !== (s = /*sortable*/
        _[5] ? (
          /*$sort*/
          _[9] === /*columnId*/
          _[4] ? (
            /*$sortDirection*/
            _[10]
          ) : "none"
        ) : void 0)) && { "aria-sort": s },
        p & /*internalAttrs*/
        256 && /*internalAttrs*/
        _[8],
        p & /*$$restProps*/
        524288 && /*$$restProps*/
        _[19]
      ])), o && Ce(o.update) && p & /*use*/
      1 && o.update.call(
        null,
        /*use*/
        _[0]
      );
    },
    i(_) {
      r || (b(i), r = !0);
    },
    o(_) {
      C(i), r = !1;
    },
    d(_) {
      _ && R(e), f[n].d(), t[23](null), a = !1, Te(u);
    }
  };
}
function fc(t) {
  let e;
  const n = (
    /*#slots*/
    t[22].default
  ), i = fe(
    n,
    t,
    /*$$scope*/
    t[21],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(l, s) {
      i && i.m(l, s), e = !0;
    },
    p(l, s) {
      i && i.p && (!e || s & /*$$scope*/
      2097152) && me(
        i,
        n,
        l,
        /*$$scope*/
        l[21],
        e ? de(
          n,
          /*$$scope*/
          l[21],
          s,
          null
        ) : he(
          /*$$scope*/
          l[21]
        ),
        null
      );
    },
    i(l) {
      e || (b(i, l), e = !0);
    },
    o(l) {
      C(i, l), e = !1;
    },
    d(l) {
      i && i.d(l);
    }
  };
}
function dc(t) {
  let e, n, i, l = (
    /*$sort*/
    (t[9] === /*columnId*/
    t[4] ? (
      /*$sortDirection*/
      t[10] === "ascending" ? (
        /*sortAscendingAriaLabel*/
        t[15]
      ) : (
        /*sortDescendingAriaLabel*/
        t[16]
      )
    ) : "") + ""
  ), s, o, r;
  const a = (
    /*#slots*/
    t[22].default
  ), u = fe(
    a,
    t,
    /*$$scope*/
    t[21],
    null
  );
  return {
    c() {
      e = V("div"), u && u.c(), n = K(), i = V("div"), s = Ee(l), N(i, "class", "mdc-data-table__sort-status-label"), N(i, "aria-hidden", "true"), N(i, "id", o = /*columnId*/
      t[4] + "-status-label"), N(e, "class", "mdc-data-table__header-cell-wrapper");
    },
    m(c, f) {
      O(c, e, f), u && u.m(e, null), j(e, n), j(e, i), j(i, s), r = !0;
    },
    p(c, f) {
      u && u.p && (!r || f & /*$$scope*/
      2097152) && me(
        u,
        a,
        c,
        /*$$scope*/
        c[21],
        r ? de(
          a,
          /*$$scope*/
          c[21],
          f,
          null
        ) : he(
          /*$$scope*/
          c[21]
        ),
        null
      ), (!r || f & /*$sort, columnId, $sortDirection*/
      1552) && l !== (l = /*$sort*/
      (c[9] === /*columnId*/
      c[4] ? (
        /*$sortDirection*/
        c[10] === "ascending" ? (
          /*sortAscendingAriaLabel*/
          c[15]
        ) : (
          /*sortDescendingAriaLabel*/
          c[16]
        )
      ) : "") + "") && Ye(s, l), (!r || f & /*columnId*/
      16 && o !== (o = /*columnId*/
      c[4] + "-status-label")) && N(i, "id", o);
    },
    i(c) {
      r || (b(u, c), r = !0);
    },
    o(c) {
      C(u, c), r = !1;
    },
    d(c) {
      c && R(e), u && u.d(c);
    }
  };
}
function mc(t) {
  let e, n, i, l;
  const s = [cc, uc], o = [];
  function r(a, u) {
    return (
      /*header*/
      a[12] ? 0 : 1
    );
  }
  return e = r(t), n = o[e] = s[e](t), {
    c() {
      n.c(), i = Oe();
    },
    m(a, u) {
      o[e].m(a, u), O(a, i, u), l = !0;
    },
    p(a, [u]) {
      n.p(a, u);
    },
    i(a) {
      l || (b(n), l = !0);
    },
    o(a) {
      C(n), l = !1;
    },
    d(a) {
      a && R(i), o[e].d(a);
    }
  };
}
let hc = 0;
function pc(t, e, n) {
  const i = ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  let l = se(e, i), s, o, { $$slots: r = {}, $$scope: a } = e;
  const u = Me(we());
  let c = Ue("SMUI:data-table:row:header"), { use: f = [] } = e, { class: d = "" } = e, { numeric: m = !1 } = e, { checkbox: h = !1 } = e, { columnId: _ = c ? "SMUI-data-table-column-" + hc++ : "SMUI-data-table-unused" } = e, { sortable: p = Ue("SMUI:data-table:sortable") } = e, E, S = {}, M = {}, A = Ue("SMUI:data-table:sort");
  wt(t, A, (k) => n(9, s = k));
  let v = Ue("SMUI:data-table:sortDirection");
  wt(t, v, (k) => n(10, o = k));
  let I = Ue("SMUI:data-table:sortAscendingAriaLabel"), g = Ue("SMUI:data-table:sortDescendingAriaLabel");
  p && (He("SMUI:label:context", "data-table:sortable-header-cell"), He("SMUI:icon-button:context", "data-table:sortable-header-cell"), He("SMUI:icon-button:aria-describedby", _ + "-status-label")), Qe(() => {
    const k = c ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return Z();
      },
      get columnId() {
        return _;
      },
      addClass: T,
      removeClass: q,
      getAttr: H,
      addAttr: w
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return Z();
      },
      get columnId() {
      },
      addClass: T,
      removeClass: q,
      getAttr: H,
      addAttr: w
    };
    return Ae(Z(), "SMUIDataTableCell:mount", k), () => {
      Ae(Z(), "SMUIDataTableCell:unmount", k);
    };
  });
  function T(k) {
    S[k] || n(7, S[k] = !0, S);
  }
  function q(k) {
    (!(k in S) || S[k]) && n(7, S[k] = !1, S);
  }
  function H(k) {
    var Q;
    return k in M ? (Q = M[k]) !== null && Q !== void 0 ? Q : null : Z().getAttribute(k);
  }
  function w(k, Q) {
    M[k] !== Q && n(8, M[k] = Q, M);
  }
  function z(k) {
    Ae(Z(), "SMUIDataTableHeaderCheckbox:change", k);
  }
  function L(k) {
    Ae(Z(), "SMUIDataTableBodyCheckbox:change", k);
  }
  function Z() {
    return E;
  }
  function ke(k) {
    ie[k ? "unshift" : "push"](() => {
      E = k, n(6, E);
    });
  }
  const ve = (k) => h && z(k);
  function be(k) {
    ie[k ? "unshift" : "push"](() => {
      E = k, n(6, E);
    });
  }
  const X = (k) => h && L(k);
  return t.$$set = (k) => {
    e = F(F({}, e), Re(k)), n(19, l = se(e, i)), "use" in k && n(0, f = k.use), "class" in k && n(1, d = k.class), "numeric" in k && n(2, m = k.numeric), "checkbox" in k && n(3, h = k.checkbox), "columnId" in k && n(4, _ = k.columnId), "sortable" in k && n(5, p = k.sortable), "$$scope" in k && n(21, a = k.$$scope);
  }, [
    f,
    d,
    m,
    h,
    _,
    p,
    E,
    S,
    M,
    s,
    o,
    u,
    c,
    A,
    v,
    I,
    g,
    z,
    L,
    l,
    Z,
    a,
    r,
    ke,
    ve,
    be,
    X
  ];
}
class ot extends ue {
  constructor(e) {
    super(), ae(this, e, pc, mc, le, {
      use: 0,
      class: 1,
      numeric: 2,
      checkbox: 3,
      columnId: 4,
      sortable: 5,
      getElement: 20
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get numeric() {
    return this.$$.ctx[2];
  }
  set numeric(e) {
    this.$$set({ numeric: e }), y();
  }
  get checkbox() {
    return this.$$.ctx[3];
  }
  set checkbox(e) {
    this.$$set({ checkbox: e }), y();
  }
  get columnId() {
    return this.$$.ctx[4];
  }
  set columnId(e) {
    this.$$set({ columnId: e }), y();
  }
  get sortable() {
    return this.$$.ctx[5];
  }
  set sortable(e) {
    this.$$set({ sortable: e }), y();
  }
  get getElement() {
    return this.$$.ctx[20];
  }
}
oe(ot, { use: {}, class: {}, numeric: { type: "Boolean" }, checkbox: { type: "Boolean" }, columnId: {}, sortable: {} }, ["default"], ["getElement"], !0);
const gc = (t) => ({}), Ni = (t) => ({}), _c = (t) => ({}), Bi = (t) => ({});
function Ui(t) {
  let e, n;
  const i = (
    /*#slots*/
    t[10].rowsPerPage
  ), l = fe(
    i,
    t,
    /*$$scope*/
    t[9],
    Bi
  );
  return {
    c() {
      e = V("div"), l && l.c(), N(e, "class", "mdc-data-table__pagination-rows-per-page");
    },
    m(s, o) {
      O(s, e, o), l && l.m(e, null), n = !0;
    },
    p(s, o) {
      l && l.p && (!n || o & /*$$scope*/
      512) && me(
        l,
        i,
        s,
        /*$$scope*/
        s[9],
        n ? de(
          i,
          /*$$scope*/
          s[9],
          o,
          _c
        ) : he(
          /*$$scope*/
          s[9]
        ),
        Bi
      );
    },
    i(s) {
      n || (b(l, s), n = !0);
    },
    o(s) {
      C(l, s), n = !1;
    },
    d(s) {
      s && R(e), l && l.d(s);
    }
  };
}
function Pi(t) {
  let e, n;
  const i = (
    /*#slots*/
    t[10].total
  ), l = fe(
    i,
    t,
    /*$$scope*/
    t[9],
    Ni
  );
  return {
    c() {
      e = V("div"), l && l.c(), N(e, "class", "mdc-data-table__pagination-total");
    },
    m(s, o) {
      O(s, e, o), l && l.m(e, null), n = !0;
    },
    p(s, o) {
      l && l.p && (!n || o & /*$$scope*/
      512) && me(
        l,
        i,
        s,
        /*$$scope*/
        s[9],
        n ? de(
          i,
          /*$$scope*/
          s[9],
          o,
          gc
        ) : he(
          /*$$scope*/
          s[9]
        ),
        Ni
      );
    },
    i(s) {
      n || (b(l, s), n = !0);
    },
    o(s) {
      C(l, s), n = !1;
    },
    d(s) {
      s && R(e), l && l.d(s);
    }
  };
}
function bc(t) {
  let e, n, i, l, s, o, r, a, u, c, f, d, m = (
    /*$$slots*/
    t[7].rowsPerPage && Ui(t)
  ), h = (
    /*$$slots*/
    t[7].total && Pi(t)
  );
  const _ = (
    /*#slots*/
    t[10].default
  ), p = fe(
    _,
    t,
    /*$$scope*/
    t[9],
    null
  );
  let E = [
    {
      class: o = Y({
        [
          /*trailing$class*/
          t[3]
        ]: !0,
        "mdc-data-table__pagination-trailing": !0
      })
    },
    Ne(
      /*$$restProps*/
      t[6],
      "trailing$"
    )
  ], S = {};
  for (let v = 0; v < E.length; v += 1)
    S = F(S, E[v]);
  let M = [
    {
      class: a = Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-data-table__pagination": !0
      })
    },
    pt(
      /*$$restProps*/
      t[6],
      ["trailing$"]
    )
  ], A = {};
  for (let v = 0; v < M.length; v += 1)
    A = F(A, M[v]);
  return {
    c() {
      e = V("div"), n = V("div"), m && m.c(), i = K(), l = V("div"), h && h.c(), s = K(), p && p.c(), N(l, "class", "mdc-data-table__pagination-navigation"), ce(n, S), ce(e, A);
    },
    m(v, I) {
      O(v, e, I), j(e, n), m && m.m(n, null), j(n, i), j(n, l), h && h.m(l, null), j(l, s), p && p.m(l, null), t[11](e), c = !0, f || (d = [
        ee(r = De.call(
          null,
          n,
          /*trailing$use*/
          t[2]
        )),
        ee(u = De.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        ee(
          /*forwardEvents*/
          t[5].call(null, e)
        )
      ], f = !0);
    },
    p(v, [I]) {
      /*$$slots*/
      v[7].rowsPerPage ? m ? (m.p(v, I), I & /*$$slots*/
      128 && b(m, 1)) : (m = Ui(v), m.c(), b(m, 1), m.m(n, i)) : m && (ge(), C(m, 1, 1, () => {
        m = null;
      }), _e()), /*$$slots*/
      v[7].total ? h ? (h.p(v, I), I & /*$$slots*/
      128 && b(h, 1)) : (h = Pi(v), h.c(), b(h, 1), h.m(l, s)) : h && (ge(), C(h, 1, 1, () => {
        h = null;
      }), _e()), p && p.p && (!c || I & /*$$scope*/
      512) && me(
        p,
        _,
        v,
        /*$$scope*/
        v[9],
        c ? de(
          _,
          /*$$scope*/
          v[9],
          I,
          null
        ) : he(
          /*$$scope*/
          v[9]
        ),
        null
      ), ce(n, S = ne(E, [
        (!c || I & /*trailing$class*/
        8 && o !== (o = Y({
          [
            /*trailing$class*/
            v[3]
          ]: !0,
          "mdc-data-table__pagination-trailing": !0
        }))) && { class: o },
        I & /*$$restProps*/
        64 && Ne(
          /*$$restProps*/
          v[6],
          "trailing$"
        )
      ])), r && Ce(r.update) && I & /*trailing$use*/
      4 && r.update.call(
        null,
        /*trailing$use*/
        v[2]
      ), ce(e, A = ne(M, [
        (!c || I & /*className*/
        2 && a !== (a = Y({
          [
            /*className*/
            v[1]
          ]: !0,
          "mdc-data-table__pagination": !0
        }))) && { class: a },
        I & /*$$restProps*/
        64 && pt(
          /*$$restProps*/
          v[6],
          ["trailing$"]
        )
      ])), u && Ce(u.update) && I & /*use*/
      1 && u.update.call(
        null,
        /*use*/
        v[0]
      );
    },
    i(v) {
      c || (b(m), b(h), b(p, v), c = !0);
    },
    o(v) {
      C(m), C(h), C(p, v), c = !1;
    },
    d(v) {
      v && R(e), m && m.d(), h && h.d(), p && p.d(v), t[11](null), f = !1, Te(d);
    }
  };
}
function vc(t, e, n) {
  const i = ["use", "class", "trailing$use", "trailing$class", "getElement"];
  let l = se(e, i), { $$slots: s = {}, $$scope: o } = e;
  const r = Gn(s), a = Me(we());
  let { use: u = [] } = e, { class: c = "" } = e, { trailing$use: f = [] } = e, { trailing$class: d = "" } = e, m;
  He("SMUI:label:context", "data-table:pagination"), He("SMUI:select:context", "data-table:pagination"), He("SMUI:icon-button:context", "data-table:pagination");
  function h() {
    return m;
  }
  function _(p) {
    ie[p ? "unshift" : "push"](() => {
      m = p, n(4, m);
    });
  }
  return t.$$set = (p) => {
    e = F(F({}, e), Re(p)), n(6, l = se(e, i)), "use" in p && n(0, u = p.use), "class" in p && n(1, c = p.class), "trailing$use" in p && n(2, f = p.trailing$use), "trailing$class" in p && n(3, d = p.trailing$class), "$$scope" in p && n(9, o = p.$$scope);
  }, [
    u,
    c,
    f,
    d,
    m,
    a,
    l,
    r,
    h,
    o,
    s,
    _
  ];
}
class Cc extends ue {
  constructor(e) {
    super(), ae(this, e, vc, bc, le, {
      use: 0,
      class: 1,
      trailing$use: 2,
      trailing$class: 3,
      getElement: 8
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get trailing$use() {
    return this.$$.ctx[2];
  }
  set trailing$use(e) {
    this.$$set({ trailing$use: e }), y();
  }
  get trailing$class() {
    return this.$$.ctx[3];
  }
  set trailing$class(e) {
    this.$$set({ trailing$class: e }), y();
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
oe(Cc, { use: {}, class: {}, trailing$use: {}, trailing$class: {} }, ["rowsPerPage", "total", "default"], ["getElement"], !0);
function yc(t) {
  let e, n, i, l, s, o, r, a, u, c, f, d, m, h, _, p, E = [
    {
      class: i = Y({
        [
          /*input$class*/
          t[9]
        ]: !0,
        "mdc-checkbox__native-control": !0
      })
    },
    { type: "checkbox" },
    /*inputProps*/
    t[20],
    { disabled: (
      /*disabled*/
      t[1]
    ) },
    {
      __value: l = /*isUninitializedValue*/
      t[19](
        /*valueKey*/
        t[7]
      ) ? (
        /*value*/
        t[6]
      ) : (
        /*valueKey*/
        t[7]
      )
    },
    {
      "data-indeterminate": s = !/*isUninitializedValue*/
      t[19](
        /*indeterminate*/
        t[0]
      ) && /*indeterminate*/
      t[0] ? "true" : void 0
    },
    /*nativeControlAttrs*/
    t[16],
    Ne(
      /*$$restProps*/
      t[26],
      "input$"
    )
  ], S = {};
  for (let v = 0; v < E.length; v += 1)
    S = F(S, E[v]);
  let M = [
    {
      class: f = Y({
        [
          /*className*/
          t[3]
        ]: !0,
        "mdc-checkbox": !0,
        "mdc-checkbox--disabled": (
          /*disabled*/
          t[1]
        ),
        "mdc-checkbox--touch": (
          /*touch*/
          t[5]
        ),
        "mdc-data-table__header-row-checkbox": (
          /*context*/
          t[21] === "data-table" && /*dataTableHeader*/
          t[22]
        ),
        "mdc-data-table__row-checkbox": (
          /*context*/
          t[21] === "data-table" && !/*dataTableHeader*/
          t[22]
        ),
        .../*internalClasses*/
        t[14]
      })
    },
    {
      style: d = Object.entries(
        /*internalStyles*/
        t[15]
      ).map(Fi).concat([
        /*style*/
        t[4]
      ]).join(" ")
    },
    pt(
      /*$$restProps*/
      t[26],
      ["input$"]
    )
  ], A = {};
  for (let v = 0; v < M.length; v += 1)
    A = F(A, M[v]);
  return {
    c() {
      e = V("div"), n = V("input"), r = K(), a = V("div"), a.innerHTML = '<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> <div class="mdc-checkbox__mixedmark"></div>', u = K(), c = V("div"), ce(n, S), N(a, "class", "mdc-checkbox__background"), N(c, "class", "mdc-checkbox__ripple"), ce(e, A);
    },
    m(v, I) {
      O(v, e, I), j(e, n), n.autofocus && n.focus(), t[36](n), n.checked = /*nativeChecked*/
      t[12], j(e, r), j(e, a), j(e, u), j(e, c), t[38](e), _ || (p = [
        ee(o = De.call(
          null,
          n,
          /*input$use*/
          t[8]
        )),
        x(
          n,
          "change",
          /*input_change_handler*/
          t[37]
        ),
        x(
          n,
          "blur",
          /*blur_handler*/
          t[34]
        ),
        x(
          n,
          "focus",
          /*focus_handler*/
          t[35]
        ),
        ee(m = De.call(
          null,
          e,
          /*use*/
          t[2]
        )),
        ee(
          /*forwardEvents*/
          t[18].call(null, e)
        ),
        ee(h = yt.call(null, e, {
          unbounded: !0,
          addClass: (
            /*addClass*/
            t[23]
          ),
          removeClass: (
            /*removeClass*/
            t[24]
          ),
          addStyle: (
            /*addStyle*/
            t[25]
          ),
          active: (
            /*rippleActive*/
            t[17]
          ),
          eventTarget: (
            /*checkbox*/
            t[11]
          )
        })),
        x(
          e,
          "animationend",
          /*animationend_handler*/
          t[39]
        )
      ], _ = !0);
    },
    p(v, I) {
      ce(n, S = ne(E, [
        I[0] & /*input$class*/
        512 && i !== (i = Y({
          [
            /*input$class*/
            v[9]
          ]: !0,
          "mdc-checkbox__native-control": !0
        })) && { class: i },
        { type: "checkbox" },
        /*inputProps*/
        v[20],
        I[0] & /*disabled*/
        2 && { disabled: (
          /*disabled*/
          v[1]
        ) },
        I[0] & /*valueKey, value*/
        192 && l !== (l = /*isUninitializedValue*/
        v[19](
          /*valueKey*/
          v[7]
        ) ? (
          /*value*/
          v[6]
        ) : (
          /*valueKey*/
          v[7]
        )) && { __value: l },
        I[0] & /*indeterminate*/
        1 && s !== (s = !/*isUninitializedValue*/
        v[19](
          /*indeterminate*/
          v[0]
        ) && /*indeterminate*/
        v[0] ? "true" : void 0) && {
          "data-indeterminate": s
        },
        I[0] & /*nativeControlAttrs*/
        65536 && /*nativeControlAttrs*/
        v[16],
        I[0] & /*$$restProps*/
        67108864 && Ne(
          /*$$restProps*/
          v[26],
          "input$"
        )
      ])), o && Ce(o.update) && I[0] & /*input$use*/
      256 && o.update.call(
        null,
        /*input$use*/
        v[8]
      ), I[0] & /*nativeChecked*/
      4096 && (n.checked = /*nativeChecked*/
      v[12]), ce(e, A = ne(M, [
        I[0] & /*className, disabled, touch, internalClasses*/
        16426 && f !== (f = Y({
          [
            /*className*/
            v[3]
          ]: !0,
          "mdc-checkbox": !0,
          "mdc-checkbox--disabled": (
            /*disabled*/
            v[1]
          ),
          "mdc-checkbox--touch": (
            /*touch*/
            v[5]
          ),
          "mdc-data-table__header-row-checkbox": (
            /*context*/
            v[21] === "data-table" && /*dataTableHeader*/
            v[22]
          ),
          "mdc-data-table__row-checkbox": (
            /*context*/
            v[21] === "data-table" && !/*dataTableHeader*/
            v[22]
          ),
          .../*internalClasses*/
          v[14]
        })) && { class: f },
        I[0] & /*internalStyles, style*/
        32784 && d !== (d = Object.entries(
          /*internalStyles*/
          v[15]
        ).map(Fi).concat([
          /*style*/
          v[4]
        ]).join(" ")) && { style: d },
        I[0] & /*$$restProps*/
        67108864 && pt(
          /*$$restProps*/
          v[26],
          ["input$"]
        )
      ])), m && Ce(m.update) && I[0] & /*use*/
      4 && m.update.call(
        null,
        /*use*/
        v[2]
      ), h && Ce(h.update) && I[0] & /*rippleActive, checkbox*/
      133120 && h.update.call(null, {
        unbounded: !0,
        addClass: (
          /*addClass*/
          v[23]
        ),
        removeClass: (
          /*removeClass*/
          v[24]
        ),
        addStyle: (
          /*addStyle*/
          v[25]
        ),
        active: (
          /*rippleActive*/
          v[17]
        ),
        eventTarget: (
          /*checkbox*/
          v[11]
        )
      });
    },
    i: re,
    o: re,
    d(v) {
      v && R(e), t[36](null), t[38](null), _ = !1, Te(p);
    }
  };
}
const Fi = ([t, e]) => `${t}: ${e};`;
function Ac(t, e, n) {
  const i = [
    "use",
    "class",
    "style",
    "disabled",
    "touch",
    "indeterminate",
    "group",
    "checked",
    "value",
    "valueKey",
    "input$use",
    "input$class",
    "getId",
    "getElement"
  ];
  let l = se(e, i);
  var s;
  const o = Me(we());
  let r = () => {
  };
  function a(G) {
    return G === r;
  }
  let { use: u = [] } = e, { class: c = "" } = e, { style: f = "" } = e, { disabled: d = !1 } = e, { touch: m = !1 } = e, { indeterminate: h = r } = e, { group: _ = r } = e, { checked: p = r } = e, { value: E = null } = e, { valueKey: S = r } = e, { input$use: M = [] } = e, { input$class: A = "" } = e, v, I, g, T = {}, q = {}, H = {}, w = !1, z = (s = Ue("SMUI:generic:input:props")) !== null && s !== void 0 ? s : {}, L = a(_) ? a(p) ? !1 : p ?? void 0 : _.indexOf(E) !== -1, Z = Ue("SMUI:checkbox:context"), ke = Ue("SMUI:data-table:row:header"), ve = p, be = a(_) ? [] : [..._], X = L;
  Qe(() => {
    n(11, g.indeterminate = !a(h) && h, g), n(10, I = new Xu({
      addClass: k,
      forceLayout: () => v.offsetWidth,
      hasNativeControl: () => !0,
      isAttachedToDOM: () => !!v.parentNode,
      isChecked: () => L ?? !1,
      isIndeterminate: () => a(h) ? !1 : h,
      removeClass: Q,
      removeNativeControlAttr: Ve,
      setNativeControlAttr: Le,
      setNativeControlDisabled: (Ie) => n(1, d = Ie)
    }));
    const G = {
      _smui_checkbox_accessor: !0,
      get element() {
        return ye();
      },
      get checked() {
        return L ?? !1;
      },
      set checked(Ie) {
        L !== Ie && n(12, L = Ie);
      },
      get indeterminate() {
        return a(h) ? !1 : h;
      },
      set indeterminate(Ie) {
        n(0, h = Ie);
      },
      activateRipple() {
        d || n(17, w = !0);
      },
      deactivateRipple() {
        n(17, w = !1);
      }
    };
    return Ae(v, "SMUIGenericInput:mount", G), Ae(v, "SMUICheckbox:mount", G), I.init(), () => {
      Ae(v, "SMUIGenericInput:unmount", G), Ae(v, "SMUICheckbox:unmount", G), I.destroy();
    };
  });
  function k(G) {
    T[G] || n(14, T[G] = !0, T);
  }
  function Q(G) {
    (!(G in T) || T[G]) && n(14, T[G] = !1, T);
  }
  function Se(G, Ie) {
    q[G] != Ie && (Ie === "" || Ie == null ? (delete q[G], n(15, q)) : n(15, q[G] = Ie, q));
  }
  function Le(G, Ie) {
    H[G] !== Ie && n(16, H[G] = Ie, H);
  }
  function Ve(G) {
    (!(G in H) || H[G] != null) && n(16, H[G] = void 0, H);
  }
  function J() {
    return z && z.id;
  }
  function ye() {
    return v;
  }
  function Xe(G) {
    mt.call(this, t, G);
  }
  function je(G) {
    mt.call(this, t, G);
  }
  function rt(G) {
    ie[G ? "unshift" : "push"](() => {
      g = G, n(11, g), n(27, _), n(33, X), n(12, L), n(6, E), n(32, be), n(28, p), n(31, ve), n(0, h), n(10, I);
    });
  }
  function at() {
    L = this.checked, n(12, L), n(27, _), n(33, X), n(6, E), n(32, be), n(28, p), n(31, ve), n(0, h), n(11, g), n(10, I);
  }
  function Et(G) {
    ie[G ? "unshift" : "push"](() => {
      v = G, n(13, v);
    });
  }
  const W = () => I && I.handleAnimationEnd();
  return t.$$set = (G) => {
    e = F(F({}, e), Re(G)), n(26, l = se(e, i)), "use" in G && n(2, u = G.use), "class" in G && n(3, c = G.class), "style" in G && n(4, f = G.style), "disabled" in G && n(1, d = G.disabled), "touch" in G && n(5, m = G.touch), "indeterminate" in G && n(0, h = G.indeterminate), "group" in G && n(27, _ = G.group), "checked" in G && n(28, p = G.checked), "value" in G && n(6, E = G.value), "valueKey" in G && n(7, S = G.valueKey), "input$use" in G && n(8, M = G.input$use), "input$class" in G && n(9, A = G.input$class);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*group, nativeChecked, value, checked, indeterminate, checkbox, instance*/
    402660417 | t.$$.dirty[1] & /*previousNativeChecked, previousGroup, previousChecked*/
    7) {
      let G = !1;
      if (!a(_))
        if (X !== L) {
          const Ie = _.indexOf(E);
          L && Ie === -1 ? (_.push(E), n(27, _), n(33, X), n(12, L), n(6, E), n(32, be), n(28, p), n(31, ve), n(0, h), n(11, g), n(10, I)) : !L && Ie !== -1 && (_.splice(Ie, 1), n(27, _), n(33, X), n(12, L), n(6, E), n(32, be), n(28, p), n(31, ve), n(0, h), n(11, g), n(10, I)), G = !0;
        } else {
          const Ie = be.indexOf(E), dt = _.indexOf(E);
          Ie > -1 && dt === -1 ? (n(12, L = !1), G = !0) : dt > -1 && Ie === -1 && (n(12, L = !0), G = !0);
        }
      a(p) ? !!X != !!L && (G = !0) : p !== (L ?? null) && (p === ve ? (n(28, p = L ?? null), a(h) || n(0, h = !1)) : n(12, L = p ?? void 0), G = !0), g && (a(h) ? g.indeterminate && (n(11, g.indeterminate = !1, g), G = !0) : !h && g.indeterminate ? (n(11, g.indeterminate = !1, g), G = !0) : h && !g.indeterminate && (n(11, g.indeterminate = !0, g), G = !0)), n(31, ve = p), n(32, be = a(_) ? [] : [..._]), n(33, X = L), G && I && I.handleChange();
    }
  }, [
    h,
    d,
    u,
    c,
    f,
    m,
    E,
    S,
    M,
    A,
    I,
    g,
    L,
    v,
    T,
    q,
    H,
    w,
    o,
    a,
    z,
    Z,
    ke,
    k,
    Q,
    Se,
    l,
    _,
    p,
    J,
    ye,
    ve,
    be,
    X,
    Xe,
    je,
    rt,
    at,
    Et,
    W
  ];
}
class ni extends ue {
  constructor(e) {
    super(), ae(
      this,
      e,
      Ac,
      yc,
      le,
      {
        use: 2,
        class: 3,
        style: 4,
        disabled: 1,
        touch: 5,
        indeterminate: 0,
        group: 27,
        checked: 28,
        value: 6,
        valueKey: 7,
        input$use: 8,
        input$class: 9,
        getId: 29,
        getElement: 30
      },
      null,
      [-1, -1]
    );
  }
  get use() {
    return this.$$.ctx[2];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[3];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get style() {
    return this.$$.ctx[4];
  }
  set style(e) {
    this.$$set({ style: e }), y();
  }
  get disabled() {
    return this.$$.ctx[1];
  }
  set disabled(e) {
    this.$$set({ disabled: e }), y();
  }
  get touch() {
    return this.$$.ctx[5];
  }
  set touch(e) {
    this.$$set({ touch: e }), y();
  }
  get indeterminate() {
    return this.$$.ctx[0];
  }
  set indeterminate(e) {
    this.$$set({ indeterminate: e }), y();
  }
  get group() {
    return this.$$.ctx[27];
  }
  set group(e) {
    this.$$set({ group: e }), y();
  }
  get checked() {
    return this.$$.ctx[28];
  }
  set checked(e) {
    this.$$set({ checked: e }), y();
  }
  get value() {
    return this.$$.ctx[6];
  }
  set value(e) {
    this.$$set({ value: e }), y();
  }
  get valueKey() {
    return this.$$.ctx[7];
  }
  set valueKey(e) {
    this.$$set({ valueKey: e }), y();
  }
  get input$use() {
    return this.$$.ctx[8];
  }
  set input$use(e) {
    this.$$set({ input$use: e }), y();
  }
  get input$class() {
    return this.$$.ctx[9];
  }
  set input$class(e) {
    this.$$set({ input$class: e }), y();
  }
  get getId() {
    return this.$$.ctx[29];
  }
  get getElement() {
    return this.$$.ctx[30];
  }
}
oe(ni, { use: {}, class: {}, style: {}, disabled: { type: "Boolean" }, touch: { type: "Boolean" }, indeterminate: {}, group: {}, checked: {}, value: {}, valueKey: {}, input$use: {}, input$class: {} }, [], ["getId", "getElement"], !0);
function Ec(t) {
  We(t, "svelte-la0cmf", ".table-container.svelte-la0cmf{width:100%;display:flex;flex-direction:column;align-items:center}.table-container.svelte-la0cmf .mdc-data-table{width:95%}.table-container.svelte-la0cmf .mdc-data-table__table-container,.table-container.svelte-la0cmf .mdc-data-table__header-cell{background-color:rgb(255, 255, 255)}.table-container.svelte-la0cmf .mdc-data-table__header-cell:nth-child(1){width:1%}.table-container.svelte-la0cmf .mdc-data-table__header-cell:nth-child(2){width:25%}.table-container.svelte-la0cmf .mdc-data-table__header-cell:nth-child(3){width:15%}.table-container.svelte-la0cmf .mdc-data-table__header-cell:nth-child(4){width:40%}.table-container.svelte-la0cmf .mdc-data-table__header-cell:last-child{width:1%}.table-container.svelte-la0cmf .mdc-data-table__table-container,.table-container.svelte-la0cmf .mdc-data-table{border-radius:10px}.table-container.svelte-la0cmf .mdc-data-table__cell{overflow-y:visible}");
}
function zi(t, e, n) {
  const i = t.slice();
  return i[6] = e[n], i;
}
function Ic(t) {
  let e, n;
  return e = new ds({
    props: {
      $$slots: { default: [qc] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      P(e.$$.fragment);
    },
    m(i, l) {
      B(e, i, l), n = !0;
    },
    p(i, l) {
      const s = {};
      l & /*$$scope, allTemplates, selectedTemplates*/
      515 && (s.$$scope = { dirty: l, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (b(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      U(e, i);
    }
  };
}
function Tc(t) {
  let e;
  return {
    c() {
      e = V("div"), e.textContent = "There are currently no templates available";
    },
    m(n, i) {
      O(n, e, i);
    },
    p: re,
    i: re,
    o: re,
    d(n) {
      n && R(e);
    }
  };
}
function wc(t) {
  let e, n;
  return e = new ni({}), {
    c() {
      P(e.$$.fragment);
    },
    m(i, l) {
      B(e, i, l), n = !0;
    },
    i(i) {
      n || (b(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      U(e, i);
    }
  };
}
function Sc(t) {
  let e;
  return {
    c() {
      e = Ee("Name");
    },
    m(n, i) {
      O(n, e, i);
    },
    d(n) {
      n && R(e);
    }
  };
}
function kc(t) {
  let e;
  return {
    c() {
      e = Ee("Last Edited");
    },
    m(n, i) {
      O(n, e, i);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Lc(t) {
  let e;
  return {
    c() {
      e = Ee("Description");
    },
    m(n, i) {
      O(n, e, i);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Dc(t) {
  let e, n, i, l, s, o, r, a, u, c;
  return e = new ot({
    props: {
      checkbox: !0,
      $$slots: { default: [wc] },
      $$scope: { ctx: t }
    }
  }), i = new ot({
    props: {
      class: "big",
      $$slots: { default: [Sc] },
      $$scope: { ctx: t }
    }
  }), s = new ot({
    props: {
      $$slots: { default: [kc] },
      $$scope: { ctx: t }
    }
  }), r = new ot({
    props: {
      $$slots: { default: [Lc] },
      $$scope: { ctx: t }
    }
  }), u = new ot({}), {
    c() {
      P(e.$$.fragment), n = K(), P(i.$$.fragment), l = K(), P(s.$$.fragment), o = K(), P(r.$$.fragment), a = K(), P(u.$$.fragment);
    },
    m(f, d) {
      B(e, f, d), O(f, n, d), B(i, f, d), O(f, l, d), B(s, f, d), O(f, o, d), B(r, f, d), O(f, a, d), B(u, f, d), c = !0;
    },
    p(f, d) {
      const m = {};
      d & /*$$scope*/
      512 && (m.$$scope = { dirty: d, ctx: f }), e.$set(m);
      const h = {};
      d & /*$$scope*/
      512 && (h.$$scope = { dirty: d, ctx: f }), i.$set(h);
      const _ = {};
      d & /*$$scope*/
      512 && (_.$$scope = { dirty: d, ctx: f }), s.$set(_);
      const p = {};
      d & /*$$scope*/
      512 && (p.$$scope = { dirty: d, ctx: f }), r.$set(p);
    },
    i(f) {
      c || (b(e.$$.fragment, f), b(i.$$.fragment, f), b(s.$$.fragment, f), b(r.$$.fragment, f), b(u.$$.fragment, f), c = !0);
    },
    o(f) {
      C(e.$$.fragment, f), C(i.$$.fragment, f), C(s.$$.fragment, f), C(r.$$.fragment, f), C(u.$$.fragment, f), c = !1;
    },
    d(f) {
      f && (R(n), R(l), R(o), R(a)), U(e, f), U(i, f), U(s, f), U(r, f), U(u, f);
    }
  };
}
function Rc(t) {
  let e, n;
  return e = new ti({
    props: {
      $$slots: { default: [Dc] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      P(e.$$.fragment);
    },
    m(i, l) {
      B(e, i, l), n = !0;
    },
    p(i, l) {
      const s = {};
      l & /*$$scope*/
      512 && (s.$$scope = { dirty: l, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (b(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      U(e, i);
    }
  };
}
function Oc(t) {
  let e, n, i;
  function l(o) {
    t[3](o);
  }
  let s = {
    value: (
      /*template*/
      t[6]
    ),
    valueKey: (
      /*template*/
      t[6].name
    )
  };
  return (
    /*selectedTemplates*/
    t[1] !== void 0 && (s.group = /*selectedTemplates*/
    t[1]), e = new ni({ props: s }), ie.push(() => ct(e, "group", l)), {
      c() {
        P(e.$$.fragment);
      },
      m(o, r) {
        B(e, o, r), i = !0;
      },
      p(o, r) {
        const a = {};
        r & /*allTemplates*/
        1 && (a.value = /*template*/
        o[6]), r & /*allTemplates*/
        1 && (a.valueKey = /*template*/
        o[6].name), !n && r & /*selectedTemplates*/
        2 && (n = !0, a.group = /*selectedTemplates*/
        o[1], ut(() => n = !1)), e.$set(a);
      },
      i(o) {
        i || (b(e.$$.fragment, o), i = !0);
      },
      o(o) {
        C(e.$$.fragment, o), i = !1;
      },
      d(o) {
        U(e, o);
      }
    }
  );
}
function Hc(t) {
  let e, n;
  return e = new ii({
    props: {
      text: (
        /*template*/
        t[6].name
      ),
      maxChars: 40,
      tooltipPosition: "top"
    }
  }), {
    c() {
      P(e.$$.fragment);
    },
    m(i, l) {
      B(e, i, l), n = !0;
    },
    p(i, l) {
      const s = {};
      l & /*allTemplates*/
      1 && (s.text = /*template*/
      i[6].name), e.$set(s);
    },
    i(i) {
      n || (b(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      U(e, i);
    }
  };
}
function Mc(t) {
  let e = qi(
    /*template*/
    t[6].lastEdited
  ) + "", n;
  return {
    c() {
      n = Ee(e);
    },
    m(i, l) {
      O(i, n, l);
    },
    p(i, l) {
      l & /*allTemplates*/
      1 && e !== (e = qi(
        /*template*/
        i[6].lastEdited
      ) + "") && Ye(n, e);
    },
    d(i) {
      i && R(n);
    }
  };
}
function $c(t) {
  let e, n;
  return e = new ii({
    props: {
      text: (
        /*template*/
        t[6].description
      ),
      maxChars: 100,
      tooltipPosition: "top"
    }
  }), {
    c() {
      P(e.$$.fragment);
    },
    m(i, l) {
      B(e, i, l), n = !0;
    },
    p(i, l) {
      const s = {};
      l & /*allTemplates*/
      1 && (s.text = /*template*/
      i[6].description), e.$set(s);
    },
    i(i) {
      n || (b(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      U(e, i);
    }
  };
}
function Nc(t) {
  let e, n;
  return e = new nt({ props: { icon: "edit", color: "black" } }), {
    c() {
      P(e.$$.fragment);
    },
    m(i, l) {
      B(e, i, l), n = !0;
    },
    p: re,
    i(i) {
      n || (b(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      U(e, i);
    }
  };
}
function Bc(t) {
  let e, n;
  function i() {
    return (
      /*click_handler*/
      t[4](
        /*template*/
        t[6]
      )
    );
  }
  return e = new nt({
    props: { icon: "delete", color: "black" }
  }), e.$on("click", i), {
    c() {
      P(e.$$.fragment);
    },
    m(l, s) {
      B(e, l, s), n = !0;
    },
    p(l, s) {
      t = l;
    },
    i(l) {
      n || (b(e.$$.fragment, l), n = !0);
    },
    o(l) {
      C(e.$$.fragment, l), n = !1;
    },
    d(l) {
      U(e, l);
    }
  };
}
function Uc(t) {
  let e, n;
  return e = new nt({
    props: { icon: "content_copy", color: "black" }
  }), {
    c() {
      P(e.$$.fragment);
    },
    m(i, l) {
      B(e, i, l), n = !0;
    },
    p: re,
    i(i) {
      n || (b(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      U(e, i);
    }
  };
}
function Pc(t) {
  let e, n;
  return e = new nt({
    props: { icon: "download", color: "black" }
  }), {
    c() {
      P(e.$$.fragment);
    },
    m(i, l) {
      B(e, i, l), n = !0;
    },
    p: re,
    i(i) {
      n || (b(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      U(e, i);
    }
  };
}
function Fc(t) {
  let e, n, i, l, s, o, r, a, u;
  return n = new Ft({
    props: {
      text: "Edit",
      $$slots: { default: [Nc] },
      $$scope: { ctx: t }
    }
  }), l = new Ft({
    props: {
      text: "Delete",
      $$slots: { default: [Bc] },
      $$scope: { ctx: t }
    }
  }), o = new Ft({
    props: {
      text: "Duplicate",
      $$slots: { default: [Uc] },
      $$scope: { ctx: t }
    }
  }), a = new Ft({
    props: {
      text: "Download",
      position: "left",
      $$slots: { default: [Pc] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = V("div"), P(n.$$.fragment), i = K(), P(l.$$.fragment), s = K(), P(o.$$.fragment), r = K(), P(a.$$.fragment), N(e, "class", "action-btns");
    },
    m(c, f) {
      O(c, e, f), B(n, e, null), j(e, i), B(l, e, null), j(e, s), B(o, e, null), j(e, r), B(a, e, null), u = !0;
    },
    p(c, f) {
      const d = {};
      f & /*$$scope*/
      512 && (d.$$scope = { dirty: f, ctx: c }), n.$set(d);
      const m = {};
      f & /*$$scope, allTemplates*/
      513 && (m.$$scope = { dirty: f, ctx: c }), l.$set(m);
      const h = {};
      f & /*$$scope*/
      512 && (h.$$scope = { dirty: f, ctx: c }), o.$set(h);
      const _ = {};
      f & /*$$scope*/
      512 && (_.$$scope = { dirty: f, ctx: c }), a.$set(_);
    },
    i(c) {
      u || (b(n.$$.fragment, c), b(l.$$.fragment, c), b(o.$$.fragment, c), b(a.$$.fragment, c), u = !0);
    },
    o(c) {
      C(n.$$.fragment, c), C(l.$$.fragment, c), C(o.$$.fragment, c), C(a.$$.fragment, c), u = !1;
    },
    d(c) {
      c && R(e), U(n), U(l), U(o), U(a);
    }
  };
}
function zc(t) {
  let e, n, i, l, s, o, r, a, u, c, f;
  return e = new ot({
    props: {
      checkbox: !0,
      $$slots: { default: [Oc] },
      $$scope: { ctx: t }
    }
  }), i = new ot({
    props: {
      $$slots: { default: [Hc] },
      $$scope: { ctx: t }
    }
  }), s = new ot({
    props: {
      $$slots: { default: [Mc] },
      $$scope: { ctx: t }
    }
  }), r = new ot({
    props: {
      $$slots: { default: [$c] },
      $$scope: { ctx: t }
    }
  }), u = new ot({
    props: {
      $$slots: { default: [Fc] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      P(e.$$.fragment), n = K(), P(i.$$.fragment), l = K(), P(s.$$.fragment), o = K(), P(r.$$.fragment), a = K(), P(u.$$.fragment), c = K();
    },
    m(d, m) {
      B(e, d, m), O(d, n, m), B(i, d, m), O(d, l, m), B(s, d, m), O(d, o, m), B(r, d, m), O(d, a, m), B(u, d, m), O(d, c, m), f = !0;
    },
    p(d, m) {
      const h = {};
      m & /*$$scope, allTemplates, selectedTemplates*/
      515 && (h.$$scope = { dirty: m, ctx: d }), e.$set(h);
      const _ = {};
      m & /*$$scope, allTemplates*/
      513 && (_.$$scope = { dirty: m, ctx: d }), i.$set(_);
      const p = {};
      m & /*$$scope, allTemplates*/
      513 && (p.$$scope = { dirty: m, ctx: d }), s.$set(p);
      const E = {};
      m & /*$$scope, allTemplates*/
      513 && (E.$$scope = { dirty: m, ctx: d }), r.$set(E);
      const S = {};
      m & /*$$scope, allTemplates*/
      513 && (S.$$scope = { dirty: m, ctx: d }), u.$set(S);
    },
    i(d) {
      f || (b(e.$$.fragment, d), b(i.$$.fragment, d), b(s.$$.fragment, d), b(r.$$.fragment, d), b(u.$$.fragment, d), f = !0);
    },
    o(d) {
      C(e.$$.fragment, d), C(i.$$.fragment, d), C(s.$$.fragment, d), C(r.$$.fragment, d), C(u.$$.fragment, d), f = !1;
    },
    d(d) {
      d && (R(n), R(l), R(o), R(a), R(c)), U(e, d), U(i, d), U(s, d), U(r, d), U(u, d);
    }
  };
}
function Vi(t) {
  let e, n;
  return e = new ti({
    props: {
      $$slots: { default: [zc] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      P(e.$$.fragment);
    },
    m(i, l) {
      B(e, i, l), n = !0;
    },
    p(i, l) {
      const s = {};
      l & /*$$scope, allTemplates, selectedTemplates*/
      515 && (s.$$scope = { dirty: l, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (b(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      U(e, i);
    }
  };
}
function Vc(t) {
  let e, n, i = ht(
    /*allTemplates*/
    t[0]
  ), l = [];
  for (let o = 0; o < i.length; o += 1)
    l[o] = Vi(zi(t, i, o));
  const s = (o) => C(l[o], 1, 1, () => {
    l[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < l.length; o += 1)
        l[o].c();
      e = Oe();
    },
    m(o, r) {
      for (let a = 0; a < l.length; a += 1)
        l[a] && l[a].m(o, r);
      O(o, e, r), n = !0;
    },
    p(o, r) {
      if (r & /*deleteTemplate, allTemplates, formatDate, selectedTemplates*/
      7) {
        i = ht(
          /*allTemplates*/
          o[0]
        );
        let a;
        for (a = 0; a < i.length; a += 1) {
          const u = zi(o, i, a);
          l[a] ? (l[a].p(u, r), b(l[a], 1)) : (l[a] = Vi(u), l[a].c(), b(l[a], 1), l[a].m(e.parentNode, e));
        }
        for (ge(), a = i.length; a < l.length; a += 1)
          s(a);
        _e();
      }
    },
    i(o) {
      if (!n) {
        for (let r = 0; r < i.length; r += 1)
          b(l[r]);
        n = !0;
      }
    },
    o(o) {
      l = l.filter(Boolean);
      for (let r = 0; r < l.length; r += 1)
        C(l[r]);
      n = !1;
    },
    d(o) {
      o && R(e), vn(l, o);
    }
  };
}
function qc(t) {
  let e, n, i, l;
  return e = new ms({
    props: {
      $$slots: { default: [Rc] },
      $$scope: { ctx: t }
    }
  }), i = new hs({
    props: {
      $$slots: { default: [Vc] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      P(e.$$.fragment), n = K(), P(i.$$.fragment);
    },
    m(s, o) {
      B(e, s, o), O(s, n, o), B(i, s, o), l = !0;
    },
    p(s, o) {
      const r = {};
      o & /*$$scope*/
      512 && (r.$$scope = { dirty: o, ctx: s }), e.$set(r);
      const a = {};
      o & /*$$scope, allTemplates, selectedTemplates*/
      515 && (a.$$scope = { dirty: o, ctx: s }), i.$set(a);
    },
    i(s) {
      l || (b(e.$$.fragment, s), b(i.$$.fragment, s), l = !0);
    },
    o(s) {
      C(e.$$.fragment, s), C(i.$$.fragment, s), l = !1;
    },
    d(s) {
      s && R(n), U(e, s), U(i, s);
    }
  };
}
function jc(t) {
  let e, n, i, l;
  const s = [Tc, Ic], o = [];
  function r(a, u) {
    return (
      /*allTemplates*/
      a[0].length === 0 ? 0 : 1
    );
  }
  return n = r(t), i = o[n] = s[n](t), {
    c() {
      e = V("div"), i.c(), N(e, "class", "table-container svelte-la0cmf");
    },
    m(a, u) {
      O(a, e, u), o[n].m(e, null), l = !0;
    },
    p(a, [u]) {
      let c = n;
      n = r(a), n === c ? o[n].p(a, u) : (ge(), C(o[c], 1, 1, () => {
        o[c] = null;
      }), _e(), i = o[n], i ? i.p(a, u) : (i = o[n] = s[n](a), i.c()), b(i, 1), i.m(e, null));
    },
    i(a) {
      l || (b(i), l = !0);
    },
    o(a) {
      C(i), l = !1;
    },
    d(a) {
      a && R(e), o[n].d();
    }
  };
}
function Zc(t) {
  return isNaN(t.getTime());
}
function qi(t, e = "-") {
  return Zc(t) ? e : `${Kc(t)}, ${Gc(t)}`;
}
function Gc(t) {
  const e = { hour: "numeric", minute: "2-digit" };
  return new Intl.DateTimeFormat("en-US", e).format(t);
}
function Kc(t) {
  const e = {
    month: "2-digit",
    day: "2-digit",
    year: "numeric"
  };
  return new Date(t).toLocaleDateString("de-DE", e);
}
function Wc(t, e, n) {
  let { allTemplates: i } = e;
  const l = Kn();
  let s = [];
  function o(u) {
    l("templateDelete", { templateId: u });
  }
  function r(u) {
    s = u, n(1, s);
  }
  const a = (u) => {
    o(u.id);
  };
  return t.$$set = (u) => {
    "allTemplates" in u && n(0, i = u.allTemplates);
  }, [
    i,
    s,
    o,
    r,
    a
  ];
}
class ps extends ue {
  constructor(e) {
    super(), ae(this, e, Wc, jc, le, { allTemplates: 0 }, Ec);
  }
  get allTemplates() {
    return this.$$.ctx[0];
  }
  set allTemplates(e) {
    this.$$set({ allTemplates: e }), y();
  }
}
oe(ps, { allTemplates: {} }, [], [], !0);
function Xc(t) {
  We(t, "svelte-1xdp4b2", ".tooltip-container.svelte-1xdp4b2{position:relative;display:inline-block}.tooltip.svelte-1xdp4b2{position:absolute;padding:0.5em 1em;background-color:#333;color:white;font-size:0.875rem;border-radius:4px;white-space:nowrap;z-index:10;opacity:0;transform:translateY(10px);transition:opacity 0.2s ease, transform 0.2s ease;max-width:500px;text-wrap:auto}.tooltip.top.svelte-1xdp4b2{bottom:100%;left:50%;transform:translate(-50%, -10px)}.tooltip.bottom.svelte-1xdp4b2{top:100%;left:50%;transform:translate(-50%, 10px)}.tooltip.left.svelte-1xdp4b2{right:100%;top:50%;transform:translate(-10px, -50%)}.tooltip.right.svelte-1xdp4b2{left:100%;top:50%;transform:translate(10px, -50%)}.tooltip.visible.svelte-1xdp4b2{opacity:1;transform:translateY(0)}");
}
function ji(t) {
  let e, n, i;
  return {
    c() {
      e = V("div"), n = Ee(
        /*text*/
        t[0]
      ), N(e, "class", i = "tooltip " + /*position*/
      t[1] + " visible svelte-1xdp4b2");
    },
    m(l, s) {
      O(l, e, s), j(e, n);
    },
    p(l, s) {
      s & /*text*/
      1 && Ye(
        n,
        /*text*/
        l[0]
      ), s & /*position*/
      2 && i !== (i = "tooltip " + /*position*/
      l[1] + " visible svelte-1xdp4b2") && N(e, "class", i);
    },
    d(l) {
      l && R(e);
    }
  };
}
function Qc(t) {
  let e, n, i, l, s;
  const o = (
    /*#slots*/
    t[7].default
  ), r = fe(
    o,
    t,
    /*$$scope*/
    t[6],
    null
  );
  let a = (
    /*isTooltipVisible*/
    t[2] && ji(t)
  );
  return {
    c() {
      e = V("div"), r && r.c(), n = K(), a && a.c(), N(e, "class", "tooltip-container svelte-1xdp4b2"), N(e, "role", "tooltip");
    },
    m(u, c) {
      O(u, e, c), r && r.m(e, null), j(e, n), a && a.m(e, null), i = !0, l || (s = [
        x(
          e,
          "mouseenter",
          /*showTooltip*/
          t[3]
        ),
        x(
          e,
          "mouseleave",
          /*hideTooltip*/
          t[4]
        )
      ], l = !0);
    },
    p(u, [c]) {
      r && r.p && (!i || c & /*$$scope*/
      64) && me(
        r,
        o,
        u,
        /*$$scope*/
        u[6],
        i ? de(
          o,
          /*$$scope*/
          u[6],
          c,
          null
        ) : he(
          /*$$scope*/
          u[6]
        ),
        null
      ), /*isTooltipVisible*/
      u[2] ? a ? a.p(u, c) : (a = ji(u), a.c(), a.m(e, null)) : a && (a.d(1), a = null);
    },
    i(u) {
      i || (b(r, u), i = !0);
    },
    o(u) {
      C(r, u), i = !1;
    },
    d(u) {
      u && R(e), r && r.d(u), a && a.d(), l = !1, Te(s);
    }
  };
}
function Yc(t, e, n) {
  let { $$slots: i = {}, $$scope: l } = e, { text: s = "" } = e, { position: o = "top" } = e, { delayInMS: r = 500 } = e, a = !1, u;
  const c = () => {
    u = setTimeout(
      () => {
        n(2, a = !0);
      },
      r
    );
  }, f = () => {
    clearTimeout(u), n(2, a = !1);
  };
  return St(() => {
    clearTimeout(u);
  }), t.$$set = (d) => {
    "text" in d && n(0, s = d.text), "position" in d && n(1, o = d.position), "delayInMS" in d && n(5, r = d.delayInMS), "$$scope" in d && n(6, l = d.$$scope);
  }, [
    s,
    o,
    a,
    c,
    f,
    r,
    l,
    i
  ];
}
class Ft extends ue {
  constructor(e) {
    super(), ae(this, e, Yc, Qc, le, { text: 0, position: 1, delayInMS: 5 }, Xc);
  }
  get text() {
    return this.$$.ctx[0];
  }
  set text(e) {
    this.$$set({ text: e }), y();
  }
  get position() {
    return this.$$.ctx[1];
  }
  set position(e) {
    this.$$set({ position: e }), y();
  }
  get delayInMS() {
    return this.$$.ctx[5];
  }
  set delayInMS(e) {
    this.$$set({ delayInMS: e }), y();
  }
}
oe(Ft, { text: {}, position: {}, delayInMS: {} }, ["default"], [], !0);
function Jc(t) {
  let e, n;
  return {
    c() {
      e = V("span"), n = Ee(
        /*text*/
        t[0]
      );
    },
    m(i, l) {
      O(i, e, l), j(e, n);
    },
    p(i, l) {
      l & /*text*/
      1 && Ye(
        n,
        /*text*/
        i[0]
      );
    },
    i: re,
    o: re,
    d(i) {
      i && R(e);
    }
  };
}
function xc(t) {
  let e, n;
  return e = new Ft({
    props: {
      text: (
        /*text*/
        t[0]
      ),
      position: (
        /*tooltipPosition*/
        t[1]
      ),
      delayInMS: (
        /*tooltipDelayInMS*/
        t[2]
      ),
      $$slots: { default: [ef] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      P(e.$$.fragment);
    },
    m(i, l) {
      B(e, i, l), n = !0;
    },
    p(i, l) {
      const s = {};
      l & /*text*/
      1 && (s.text = /*text*/
      i[0]), l & /*tooltipPosition*/
      2 && (s.position = /*tooltipPosition*/
      i[1]), l & /*tooltipDelayInMS*/
      4 && (s.delayInMS = /*tooltipDelayInMS*/
      i[2]), l & /*$$scope*/
      64 && (s.$$scope = { dirty: l, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (b(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      U(e, i);
    }
  };
}
function ef(t) {
  let e;
  return {
    c() {
      e = V("span"), e.textContent = `${/*truncatedText*/
      t[4]}`;
    },
    m(n, i) {
      O(n, e, i);
    },
    p: re,
    d(n) {
      n && R(e);
    }
  };
}
function tf(t) {
  let e, n, i, l;
  const s = [xc, Jc], o = [];
  function r(a, u) {
    return (
      /*isTextToBeTruncated*/
      a[3] ? 0 : 1
    );
  }
  return e = r(t), n = o[e] = s[e](t), {
    c() {
      n.c(), i = Oe();
    },
    m(a, u) {
      o[e].m(a, u), O(a, i, u), l = !0;
    },
    p(a, [u]) {
      n.p(a, u);
    },
    i(a) {
      l || (b(n), l = !0);
    },
    o(a) {
      C(n), l = !1;
    },
    d(a) {
      a && R(i), o[e].d(a);
    }
  };
}
function nf(t, e, n) {
  let { text: i = "" } = e, { maxChars: l = 50 } = e, { tooltipPosition: s = "top" } = e, { tooltipDelayInMS: o = 300 } = e, r = i.length > l, a = r ? `${i.slice(0, l)}...` : i;
  return t.$$set = (u) => {
    "text" in u && n(0, i = u.text), "maxChars" in u && n(5, l = u.maxChars), "tooltipPosition" in u && n(1, s = u.tooltipPosition), "tooltipDelayInMS" in u && n(2, o = u.tooltipDelayInMS);
  }, [
    i,
    s,
    o,
    r,
    a,
    l
  ];
}
class ii extends ue {
  constructor(e) {
    super(), ae(this, e, nf, tf, le, {
      text: 0,
      maxChars: 5,
      tooltipPosition: 1,
      tooltipDelayInMS: 2
    });
  }
  get text() {
    return this.$$.ctx[0];
  }
  set text(e) {
    this.$$set({ text: e }), y();
  }
  get maxChars() {
    return this.$$.ctx[5];
  }
  set maxChars(e) {
    this.$$set({ maxChars: e }), y();
  }
  get tooltipPosition() {
    return this.$$.ctx[1];
  }
  set tooltipPosition(e) {
    this.$$set({ tooltipPosition: e }), y();
  }
  get tooltipDelayInMS() {
    return this.$$.ctx[2];
  }
  set tooltipDelayInMS(e) {
    this.$$set({ tooltipDelayInMS: e }), y();
  }
}
oe(ii, { text: {}, maxChars: {}, tooltipPosition: {}, tooltipDelayInMS: {} }, [], [], !0);
function lf(t) {
  We(t, "svelte-u4lqpd", "textarea.svelte-u4lqpd{width:95%;padding:0.5rem;font-size:1rem}");
}
function sf(t) {
  let e, n, i, l;
  return {
    c() {
      e = V("div"), n = V("textarea"), N(n, "name", "templateText"), N(n, "id", ""), N(n, "placeholder", "Enter your content here"), N(n, "class", "svelte-u4lqpd");
    },
    m(s, o) {
      O(s, e, o), j(e, n), gn(
        n,
        /*content*/
        t[0]
      ), i || (l = x(
        n,
        "input",
        /*textarea_input_handler*/
        t[1]
      ), i = !0);
    },
    p(s, [o]) {
      o & /*content*/
      1 && gn(
        n,
        /*content*/
        s[0]
      );
    },
    i: re,
    o: re,
    d(s) {
      s && R(e), i = !1, l();
    }
  };
}
function rf(t, e, n) {
  let { content: i = "" } = e;
  function l() {
    i = this.value, n(0, i);
  }
  return t.$$set = (s) => {
    "content" in s && n(0, i = s.content);
  }, [i, l];
}
class gs extends ue {
  constructor(e) {
    super(), ae(this, e, rf, sf, le, { content: 0 }, lf);
  }
  get content() {
    return this.$$.ctx[0];
  }
  set content(e) {
    this.$$set({ content: e }), y();
  }
}
oe(gs, { content: {} }, [], [], !0);
function af(t) {
  We(t, "svelte-1b751d5", ".icon-size-small.svelte-1b751d5{height:1rem;width:1rem}.icon-size-normal.svelte-1b751d5{height:24px;width:24px}.icon-size-normal.svelte-1b751d5 svg{height:26.5px;width:24px}div.icon-size-normal.svelte-1b751d5{height:24px;width:24px}div.icon-size-normal.svelte-1b751d5 svg{height:24px;width:24px}div.icon-size-rect.svelte-1b751d5{height:24px;width:24px}div.icon-size-rect.svelte-1b751d5 svg{height:26.5px;width:24px}div.icon-size-big.svelte-1b751d5{height:32px;width:40px}div.icon-size-big.svelte-1b751d5 svg{height:32px;width:40px}");
}
function of(t) {
  let e, n;
  return {
    c() {
      e = V("div"), N(e, "class", n = "icon-size icon-size-" + /*size*/
      t[0] + " svelte-1b751d5"), nn(
        e,
        "icon-size-small",
        /*size*/
        t[0] === "small"
      ), nn(
        e,
        "icon-size-normal",
        /*size*/
        t[0] === "normal"
      );
    },
    m(i, l) {
      O(i, e, l), e.innerHTML = /*icon*/
      t[1];
    },
    p(i, [l]) {
      l & /*icon*/
      2 && (e.innerHTML = /*icon*/
      i[1]), l & /*size*/
      1 && n !== (n = "icon-size icon-size-" + /*size*/
      i[0] + " svelte-1b751d5") && N(e, "class", n), l & /*size, size*/
      1 && nn(
        e,
        "icon-size-small",
        /*size*/
        i[0] === "small"
      ), l & /*size, size*/
      1 && nn(
        e,
        "icon-size-normal",
        /*size*/
        i[0] === "normal"
      );
    },
    i: re,
    o: re,
    d(i) {
      i && R(e);
    }
  };
}
function uf(t, e, n) {
  let i, { name: l } = e, { size: s } = e;
  return t.$$set = (o) => {
    "name" in o && n(2, l = o.name), "size" in o && n(0, s = o.size);
  }, t.$$.update = () => {
    t.$$.dirty & /*name*/
    4 && n(1, i = cf[l] ?? "");
  }, [s, i, l];
}
class _s extends ue {
  constructor(e) {
    super(), ae(this, e, uf, of, le, { name: 2, size: 0 }, af);
  }
  get name() {
    return this.$$.ctx[2];
  }
  set name(e) {
    this.$$set({ name: e }), y();
  }
  get size() {
    return this.$$.ctx[0];
  }
  set size(e) {
    this.$$set({ size: e }), y();
  }
}
oe(_s, { name: {}, size: {} }, [], [], !0);
const cf = {
  action: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 26.5 24" width="26.5"><path d="M0 0h24v24H0z" fill="none"></path><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" fill="currentColor"></path></svg>',
  dAIcon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 26.5 24" width="26.5"><path fill="currentColor" d="m4.2 0c-2.31 0-4.2 1.89-4.2 4.2v11.6c0 2.31 1.89 4.2 4.2 4.2h18.1c2.31 0 4.2-1.89 4.2-4.2v-11.6c0-2.31-1.89-4.2-4.2-4.2zm0 1.89h18.1c1.29 0 2.3 1.01 2.3 2.3v11.6c0 1.29-1.01 2.31-2.3 2.31h-18.1c-1.29 0-2.3-1.01-2.3-2.31v-11.6c0-1.29 1.01-2.3 2.3-2.3z"/><path fill="currentColor" d="m12.5 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path fill="currentColor" d="m19.7 15-0.74-2.56h-3.18l-0.74 2.56h-1.75l3.04-10h2.06l3.03 10zm-1.13-4.13-0.823-2.88-0.379-1.46q-0.0947 0.412-0.178 0.739-0.0829 0.327-1.02 3.59z"/></svg>',
  dOIcon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 26.5 24" width="26.5"><path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m12.1 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path d="m21.6 9.97q0 1.56-0.515 2.75-0.515 1.19-1.47 1.82-0.959 0.625-2.24 0.625-1.97 0-3.08-1.39-1.11-1.39-1.11-3.81 0-2.41 1.11-3.76t3.1-1.35 3.1 1.36q1.12 1.36 1.12 3.74zm-1.78 0q0-1.62-0.639-2.54-0.639-0.923-1.79-0.923-1.17 0-1.81 0.916-0.639 0.909-0.639 2.54 0 1.65 0.651 2.6 0.657 0.945 1.79 0.945 1.17 0 1.81-0.923 0.639-0.923 0.639-2.62z"/></svg>',
  enumIcon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 26.5 24" width="26.5"><path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m5.37 15v-10h6.56v1.62h-4.81v2.51h4.45v1.62h-4.45v2.64h5.06v1.62z"/><path d="m18.5 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/></svg>',
  info: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 26.5 24" width="26.5"><path d="M0 0h24v24H0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"></path></svg>',
  warning: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 26.5 24" width="26.5"><path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="currentColor"></path></svg>',
  error: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 26.5 24" width="26.5"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z" fill="currentColor"></path><path d="M11 7h2v7h-2z" fill="currentColor"></path><circle cx="12" cy="16" r="1" fill="currentColor"></circle></svg>',
  lNIcon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 26.5 24" width="26.5"><path stroke="currentColor" stroke-width="1.89" fill="none" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path fill="currentColor" d="m5.71 15v-10h1.75v8.39h4.47v1.62z"/><path fill="currentColor" d="m18.2 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/></svg>',
  logIcon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 26.5 24" width="26.5"><path fill="currentColor" d="M9,7H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" /></svg>',
  gooseIcon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 26.5 24" width="26.5"><path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" /></svg>',
  reportIcon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 26.5 24" width="26.5"><path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,16.41 7.58,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" /></svg>',
  smvIcon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 26.5 24" width="26.5"><path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" /></svg>',
  tscdGooseIcon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7ZM5.07 13C5.56 16.39 8.47 19 12 19C15.53 19 18.44 16.39 18.93 13H22V11H18.93C18.44 7.61 15.53 5 12 5C8.47 5 5.56 7.61 5.07 11H2V13H5.07Z" fill="#288409"/><path d="M14.4712 11.814V14.1562C14.3921 14.2734 14.2661 14.4053 14.0933 14.5518C13.9204 14.6953 13.6816 14.8213 13.377 14.9297C13.0752 15.0352 12.6855 15.0879 12.208 15.0879C11.8184 15.0879 11.4595 15.0205 11.1313 14.8857C10.8062 14.748 10.5234 14.5488 10.2832 14.2881C10.0459 14.0244 9.86133 13.7051 9.72949 13.3301C9.60059 12.9521 9.53613 12.5244 9.53613 12.0469V11.5503C9.53613 11.0728 9.5918 10.6465 9.70312 10.2715C9.81738 9.89648 9.98438 9.57861 10.2041 9.31787C10.4238 9.0542 10.6934 8.85498 11.0127 8.72021C11.332 8.58252 11.6982 8.51367 12.1113 8.51367C12.6006 8.51367 13.0093 8.59863 13.3374 8.76855C13.6685 8.93555 13.9263 9.16699 14.1108 9.46289C14.2983 9.75879 14.4185 10.0957 14.4712 10.4736H13.623C13.585 10.2422 13.5088 10.0312 13.3945 9.84082C13.2832 9.65039 13.1235 9.49805 12.9155 9.38379C12.7075 9.2666 12.4395 9.20801 12.1113 9.20801C11.8154 9.20801 11.5591 9.26221 11.3423 9.37061C11.1255 9.479 10.9468 9.63428 10.8062 9.83643C10.6655 10.0386 10.5601 10.2832 10.4897 10.5703C10.4224 10.8574 10.3887 11.1812 10.3887 11.5415V12.0469C10.3887 12.416 10.4312 12.7456 10.5161 13.0356C10.604 13.3257 10.7285 13.5732 10.8896 13.7783C11.0508 13.9805 11.2427 14.1343 11.4653 14.2397C11.6909 14.3452 11.9399 14.3979 12.2124 14.3979C12.5142 14.3979 12.7588 14.373 12.9463 14.3232C13.1338 14.2705 13.2803 14.209 13.3857 14.1387C13.4912 14.0654 13.5718 13.9966 13.6274 13.9321V12.4995H12.1465V11.814H14.4712Z" fill="#288409"/></svg>',
  tscdMmsIcon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7ZM5.07 13C5.56 16.39 8.47 19 12 19C15.53 19 18.44 16.39 18.93 13H22V11H18.93C18.44 7.61 15.53 5 12 5C8.47 5 5.56 7.61 5.07 11H2V13H5.07Z" fill="#3253A8"/><path d="M9.01074 8.60156H9.83252L11.9287 13.8179L14.0205 8.60156H14.8467L12.2451 15H11.6035L9.01074 8.60156ZM8.74268 8.60156H9.46777L9.58643 12.5039V15H8.74268V8.60156ZM14.3853 8.60156H15.1104V15H14.2666V12.5039L14.3853 8.60156Z" fill="#3253A8"/></svg>',
  tscdSvIcon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7ZM5.07 13C5.56 16.39 8.47 19 12 19C15.53 19 18.44 16.39 18.93 13H22V11H18.93C18.44 7.61 15.53 5 12 5C8.47 5 5.56 7.61 5.07 11H2V13H5.07Z" fill="#C73C61"/><path d="M13.1528 13.3828C13.1528 13.2334 13.1294 13.1016 13.0825 12.9873C13.0386 12.8701 12.9595 12.7646 12.8452 12.6709C12.7339 12.5771 12.5786 12.4878 12.3794 12.4028C12.1831 12.3179 11.9341 12.2314 11.6323 12.1436C11.3159 12.0498 11.0303 11.9458 10.7754 11.8315C10.5205 11.7144 10.3022 11.5811 10.1206 11.4316C9.93896 11.2822 9.7998 11.1108 9.70312 10.9175C9.60645 10.7241 9.55811 10.5029 9.55811 10.2539C9.55811 10.0049 9.60938 9.7749 9.71191 9.56396C9.81445 9.35303 9.96094 9.16992 10.1514 9.01465C10.3447 8.85645 10.5747 8.7334 10.8413 8.64551C11.1079 8.55762 11.4053 8.51367 11.7334 8.51367C12.2139 8.51367 12.6211 8.60596 12.9551 8.79053C13.292 8.97217 13.5483 9.21094 13.7241 9.50684C13.8999 9.7998 13.9878 10.1133 13.9878 10.4473H13.144C13.144 10.207 13.0928 9.99463 12.9902 9.81006C12.8877 9.62256 12.7324 9.47607 12.5244 9.37061C12.3164 9.26221 12.0527 9.20801 11.7334 9.20801C11.4316 9.20801 11.1826 9.25342 10.9863 9.34424C10.79 9.43506 10.6436 9.55811 10.5469 9.71338C10.4531 9.86865 10.4062 10.0459 10.4062 10.2451C10.4062 10.3799 10.4341 10.5029 10.4897 10.6143C10.5483 10.7227 10.6377 10.8237 10.7578 10.9175C10.8809 11.0112 11.0361 11.0977 11.2236 11.1768C11.4141 11.2559 11.6411 11.332 11.9048 11.4053C12.2681 11.5078 12.5815 11.6221 12.8452 11.748C13.1089 11.874 13.3257 12.0161 13.4956 12.1743C13.6685 12.3296 13.7959 12.5068 13.8779 12.7061C13.9629 12.9023 14.0054 13.125 14.0054 13.374C14.0054 13.6348 13.9526 13.8706 13.8472 14.0815C13.7417 14.2925 13.5908 14.4727 13.3945 14.6221C13.1982 14.7715 12.9624 14.8872 12.687 14.9692C12.4146 15.0483 12.1099 15.0879 11.7729 15.0879C11.4771 15.0879 11.1855 15.0469 10.8984 14.9648C10.6143 14.8828 10.355 14.7598 10.1206 14.5957C9.88916 14.4316 9.70312 14.2295 9.5625 13.9893C9.4248 13.7461 9.35596 13.4648 9.35596 13.1455H10.1997C10.1997 13.3652 10.2422 13.5542 10.3271 13.7124C10.4121 13.8677 10.5278 13.9966 10.6743 14.0991C10.8237 14.2017 10.9922 14.2778 11.1797 14.3276C11.3701 14.3745 11.5679 14.3979 11.7729 14.3979C12.0688 14.3979 12.3193 14.3569 12.5244 14.2749C12.7295 14.1929 12.8848 14.0757 12.9902 13.9233C13.0986 13.771 13.1528 13.5908 13.1528 13.3828Z" fill="#C73C61"/></svg>',
  unknownIcon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7ZM5.07 13C5.56 16.39 8.47 19 12 19C15.53 19 18.44 16.39 18.93 13H22V11H18.93C18.44 7.61 15.53 5 12 5C8.47 5 5.56 7.61 5.07 11H2V13H5.07Z" fill="#011B22"/></svg>',
  undefinedIncomingIcon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 17C13.24 17 11 14.76 11 12C11 9.24 13.24 7 16 7C18.76 7 21 9.24 21 12C21 14.76 18.76 17 16 17ZM22.93 11C22.44 7.61 19.53 5 16 5C12.47 5 9.56 7.61 9.07 11L9 12H8L6.035 11H2V13L6.035 13L8 12H9L9.07 13C9.56 16.39 12.47 19 16 19C19.53 19 22.44 16.39 22.93 13L23 12L22.93 11Z" fill="#011B22"/><path d="M9.15002 12L5.40002 14.5981V9.40192L9.15002 12Z" fill="#011B22"/></svg>',
  undefinedOutgoingIcon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 7C11.76 7 14 9.24 14 12C14 14.76 11.76 17 9 17C6.24 17 4 14.76 4 12C4 9.24 6.24 7 9 7ZM2.07 13C2.56 16.39 5.47 19 9 19C12.53 19 15.44 16.39 15.93 13H21V11H15.93C15.44 7.61 12.53 5 9 5C5.47 5 2.56 7.61 2.07 11L2 12L2.07 13Z" fill="#011B22"/><path d="M23 12L19.25 14.5981V9.40192L23 12Z" fill="#011B22"/></svg>',
  svIncomingIcon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 17C13.24 17 11 14.76 11 12C11 9.24 13.24 7 16 7C18.76 7 21 9.24 21 12C21 14.76 18.76 17 16 17ZM22.93 11C22.44 7.61 19.53 5 16 5C12.47 5 9.56 7.61 9.07 11L9 12H8L6.035 11H2V13L6.035 13L8 12H9L9.07 13C9.56 16.39 12.47 19 16 19C19.53 19 22.44 16.39 22.93 13L23 12L22.93 11Z" fill="#C73C61"/><path d="M9.15002 12L5.40002 14.5981V9.40192L9.15002 12Z" fill="#C73C61"/><path d="M17.1528 13.3828C17.1528 13.2334 17.1294 13.1016 17.0825 12.9873C17.0386 12.8701 16.9595 12.7646 16.8452 12.6709C16.7339 12.5771 16.5786 12.4878 16.3794 12.4028C16.1831 12.3179 15.9341 12.2314 15.6323 12.1436C15.3159 12.0498 15.0303 11.9458 14.7754 11.8315C14.5205 11.7144 14.3022 11.5811 14.1206 11.4316C13.939 11.2822 13.7998 11.1108 13.7031 10.9175C13.6064 10.7241 13.5581 10.5029 13.5581 10.2539C13.5581 10.0049 13.6094 9.7749 13.7119 9.56396C13.8145 9.35303 13.9609 9.16992 14.1514 9.01465C14.3447 8.85645 14.5747 8.7334 14.8413 8.64551C15.1079 8.55762 15.4053 8.51367 15.7334 8.51367C16.2139 8.51367 16.6211 8.60596 16.9551 8.79053C17.292 8.97217 17.5483 9.21094 17.7241 9.50684C17.8999 9.7998 17.9878 10.1133 17.9878 10.4473H17.144C17.144 10.207 17.0928 9.99463 16.9902 9.81006C16.8877 9.62256 16.7324 9.47607 16.5244 9.37061C16.3164 9.26221 16.0527 9.20801 15.7334 9.20801C15.4316 9.20801 15.1826 9.25342 14.9863 9.34424C14.79 9.43506 14.6436 9.55811 14.5469 9.71338C14.4531 9.86865 14.4062 10.0459 14.4062 10.2451C14.4062 10.3799 14.4341 10.5029 14.4897 10.6143C14.5483 10.7227 14.6377 10.8237 14.7578 10.9175C14.8809 11.0112 15.0361 11.0977 15.2236 11.1768C15.4141 11.2559 15.6411 11.332 15.9048 11.4053C16.2681 11.5078 16.5815 11.6221 16.8452 11.748C17.1089 11.874 17.3257 12.0161 17.4956 12.1743C17.6685 12.3296 17.7959 12.5068 17.8779 12.7061C17.9629 12.9023 18.0054 13.125 18.0054 13.374C18.0054 13.6348 17.9526 13.8706 17.8472 14.0815C17.7417 14.2925 17.5908 14.4727 17.3945 14.6221C17.1982 14.7715 16.9624 14.8872 16.687 14.9692C16.4146 15.0483 16.1099 15.0879 15.7729 15.0879C15.4771 15.0879 15.1855 15.0469 14.8984 14.9648C14.6143 14.8828 14.355 14.7598 14.1206 14.5957C13.8892 14.4316 13.7031 14.2295 13.5625 13.9893C13.4248 13.7461 13.356 13.4648 13.356 13.1455H14.1997C14.1997 13.3652 14.2422 13.5542 14.3271 13.7124C14.4121 13.8677 14.5278 13.9966 14.6743 14.0991C14.8237 14.2017 14.9922 14.2778 15.1797 14.3276C15.3701 14.3745 15.5679 14.3979 15.7729 14.3979C16.0688 14.3979 16.3193 14.3569 16.5244 14.2749C16.7295 14.1929 16.8848 14.0757 16.9902 13.9233C17.0986 13.771 17.1528 13.5908 17.1528 13.3828Z" fill="#C73C61"/></svg>',
  svOutgoingIcon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 7C11.76 7 14 9.24 14 12C14 14.76 11.76 17 9 17C6.24 17 4 14.76 4 12C4 9.24 6.24 7 9 7ZM2.07 13C2.56 16.39 5.47 19 9 19C12.53 19 15.44 16.39 15.93 13H21V11H15.93C15.44 7.61 12.53 5 9 5C5.47 5 2.56 7.61 2.07 11L2 12L2.07 13Z" fill="#C73C61"/><path d="M10.1528 13.3828C10.1528 13.2334 10.1294 13.1016 10.0825 12.9873C10.0386 12.8701 9.95947 12.7646 9.84521 12.6709C9.73389 12.5771 9.57861 12.4878 9.37939 12.4028C9.18311 12.3179 8.93408 12.2314 8.63232 12.1436C8.31592 12.0498 8.03027 11.9458 7.77539 11.8315C7.52051 11.7144 7.30225 11.5811 7.12061 11.4316C6.93896 11.2822 6.7998 11.1108 6.70312 10.9175C6.60645 10.7241 6.55811 10.5029 6.55811 10.2539C6.55811 10.0049 6.60938 9.7749 6.71191 9.56396C6.81445 9.35303 6.96094 9.16992 7.15137 9.01465C7.34473 8.85645 7.57471 8.7334 7.84131 8.64551C8.10791 8.55762 8.40527 8.51367 8.7334 8.51367C9.21387 8.51367 9.62109 8.60596 9.95508 8.79053C10.292 8.97217 10.5483 9.21094 10.7241 9.50684C10.8999 9.7998 10.9878 10.1133 10.9878 10.4473H10.144C10.144 10.207 10.0928 9.99463 9.99023 9.81006C9.8877 9.62256 9.73242 9.47607 9.52441 9.37061C9.31641 9.26221 9.05273 9.20801 8.7334 9.20801C8.43164 9.20801 8.18262 9.25342 7.98633 9.34424C7.79004 9.43506 7.64355 9.55811 7.54688 9.71338C7.45312 9.86865 7.40625 10.0459 7.40625 10.2451C7.40625 10.3799 7.43408 10.5029 7.48975 10.6143C7.54834 10.7227 7.6377 10.8237 7.75781 10.9175C7.88086 11.0112 8.03613 11.0977 8.22363 11.1768C8.41406 11.2559 8.64111 11.332 8.90479 11.4053C9.26807 11.5078 9.58154 11.6221 9.84521 11.748C10.1089 11.874 10.3257 12.0161 10.4956 12.1743C10.6685 12.3296 10.7959 12.5068 10.8779 12.7061C10.9629 12.9023 11.0054 13.125 11.0054 13.374C11.0054 13.6348 10.9526 13.8706 10.8472 14.0815C10.7417 14.2925 10.5908 14.4727 10.3945 14.6221C10.1982 14.7715 9.9624 14.8872 9.68701 14.9692C9.41455 15.0483 9.10986 15.0879 8.77295 15.0879C8.47705 15.0879 8.18555 15.0469 7.89844 14.9648C7.61426 14.8828 7.35498 14.7598 7.12061 14.5957C6.88916 14.4316 6.70312 14.2295 6.5625 13.9893C6.4248 13.7461 6.35596 13.4648 6.35596 13.1455H7.19971C7.19971 13.3652 7.24219 13.5542 7.32715 13.7124C7.41211 13.8677 7.52783 13.9966 7.67432 14.0991C7.82373 14.2017 7.99219 14.2778 8.17969 14.3276C8.37012 14.3745 8.56787 14.3979 8.77295 14.3979C9.06885 14.3979 9.31934 14.3569 9.52441 14.2749C9.72949 14.1929 9.88477 14.0757 9.99023 13.9233C10.0986 13.771 10.1528 13.5908 10.1528 13.3828Z" fill="#C73C61"/><path d="M23 12L19.25 14.5981V9.40192L23 12Z" fill="#C73C61"/></svg>',
  mmsIncomingIcon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 17C13.24 17 11 14.76 11 12C11 9.24 13.24 7 16 7C18.76 7 21 9.24 21 12C21 14.76 18.76 17 16 17ZM22.93 11C22.44 7.61 19.53 5 16 5C12.47 5 9.56 7.61 9.07 11L9 12H8L6.035 11H2V13L6.035 13L8 12H9L9.07 13C9.56 16.39 12.47 19 16 19C19.53 19 22.44 16.39 22.93 13L23 12L22.93 11Z" fill="#3253A8"/><path d="M9.15002 12L5.40002 14.5981V9.40192L9.15002 12Z" fill="#3253A8"/><path d="M13.0107 8.60156H13.8325L15.9287 13.8179L18.0205 8.60156H18.8467L16.2451 15H15.6035L13.0107 8.60156ZM12.7427 8.60156H13.4678L13.5864 12.5039V15H12.7427V8.60156ZM18.3853 8.60156H19.1104V15H18.2666V12.5039L18.3853 8.60156Z" fill="#3253A8"/></svg>',
  mmsOutgoingIcon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 7C11.76 7 14 9.24 14 12C14 14.76 11.76 17 9 17C6.24 17 4 14.76 4 12C4 9.24 6.24 7 9 7ZM2.07 13C2.56 16.39 5.47 19 9 19C12.53 19 15.44 16.39 15.93 13H21V11H15.93C15.44 7.61 12.53 5 9 5C5.47 5 2.56 7.61 2.07 11L2 12L2.07 13Z" fill="#3253A8"/><path d="M6.01074 8.60156H6.83252L8.92871 13.8179L11.0205 8.60156H11.8467L9.24512 15H8.60352L6.01074 8.60156ZM5.74268 8.60156H6.46777L6.58643 12.5039V15H5.74268V8.60156ZM11.3853 8.60156H12.1104V15H11.2666V12.5039L11.3853 8.60156Z" fill="#3253A8"/><path d="M23 12L19.25 14.5981V9.40192L23 12Z" fill="#3253A8"/></svg>',
  gooseIncomingIcon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 17C13.24 17 11 14.76 11 12C11 9.24 13.24 7 16 7C18.76 7 21 9.24 21 12C21 14.76 18.76 17 16 17ZM22.93 11C22.44 7.61 19.53 5 16 5C12.47 5 9.56 7.61 9.07 11L9 12H8L6.035 11H2V13L6.035 13L8 12H9L9.07 13C9.56 16.39 12.47 19 16 19C19.53 19 22.44 16.39 22.93 13L23 12L22.93 11Z" fill="#288409"/><path d="M9.15002 12L5.40002 14.5981V9.40192L9.15002 12Z" fill="#288409"/><path d="M18.4712 11.814V14.1562C18.3921 14.2734 18.2661 14.4053 18.0933 14.5518C17.9204 14.6953 17.6816 14.8213 17.377 14.9297C17.0752 15.0352 16.6855 15.0879 16.208 15.0879C15.8184 15.0879 15.4595 15.0205 15.1313 14.8857C14.8062 14.748 14.5234 14.5488 14.2832 14.2881C14.0459 14.0244 13.8613 13.7051 13.7295 13.3301C13.6006 12.9521 13.5361 12.5244 13.5361 12.0469V11.5503C13.5361 11.0728 13.5918 10.6465 13.7031 10.2715C13.8174 9.89648 13.9844 9.57861 14.2041 9.31787C14.4238 9.0542 14.6934 8.85498 15.0127 8.72021C15.332 8.58252 15.6982 8.51367 16.1113 8.51367C16.6006 8.51367 17.0093 8.59863 17.3374 8.76855C17.6685 8.93555 17.9263 9.16699 18.1108 9.46289C18.2983 9.75879 18.4185 10.0957 18.4712 10.4736H17.623C17.585 10.2422 17.5088 10.0312 17.3945 9.84082C17.2832 9.65039 17.1235 9.49805 16.9155 9.38379C16.7075 9.2666 16.4395 9.20801 16.1113 9.20801C15.8154 9.20801 15.5591 9.26221 15.3423 9.37061C15.1255 9.479 14.9468 9.63428 14.8062 9.83643C14.6655 10.0386 14.5601 10.2832 14.4897 10.5703C14.4224 10.8574 14.3887 11.1812 14.3887 11.5415V12.0469C14.3887 12.416 14.4312 12.7456 14.5161 13.0356C14.604 13.3257 14.7285 13.5732 14.8896 13.7783C15.0508 13.9805 15.2427 14.1343 15.4653 14.2397C15.6909 14.3452 15.9399 14.3979 16.2124 14.3979C16.5142 14.3979 16.7588 14.373 16.9463 14.3232C17.1338 14.2705 17.2803 14.209 17.3857 14.1387C17.4912 14.0654 17.5718 13.9966 17.6274 13.9321V12.4995H16.1465V11.814H18.4712Z" fill="#288409"/></svg>',
  gooseOutgoingIcon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 7C11.76 7 14 9.24 14 12C14 14.76 11.76 17 9 17C6.24 17 4 14.76 4 12C4 9.24 6.24 7 9 7ZM2.07 13C2.56 16.39 5.47 19 9 19C12.53 19 15.44 16.39 15.93 13H21V11H15.93C15.44 7.61 12.53 5 9 5C5.47 5 2.56 7.61 2.07 11L2 12L2.07 13Z" fill="#288409"/><path d="M11.4712 11.814V14.1562C11.3921 14.2734 11.2661 14.4053 11.0933 14.5518C10.9204 14.6953 10.6816 14.8213 10.377 14.9297C10.0752 15.0352 9.68555 15.0879 9.20801 15.0879C8.81836 15.0879 8.45947 15.0205 8.13135 14.8857C7.80615 14.748 7.52344 14.5488 7.2832 14.2881C7.0459 14.0244 6.86133 13.7051 6.72949 13.3301C6.60059 12.9521 6.53613 12.5244 6.53613 12.0469V11.5503C6.53613 11.0728 6.5918 10.6465 6.70312 10.2715C6.81738 9.89648 6.98438 9.57861 7.2041 9.31787C7.42383 9.0542 7.69336 8.85498 8.0127 8.72021C8.33203 8.58252 8.69824 8.51367 9.11133 8.51367C9.60059 8.51367 10.0093 8.59863 10.3374 8.76855C10.6685 8.93555 10.9263 9.16699 11.1108 9.46289C11.2983 9.75879 11.4185 10.0957 11.4712 10.4736H10.623C10.585 10.2422 10.5088 10.0312 10.3945 9.84082C10.2832 9.65039 10.1235 9.49805 9.91553 9.38379C9.70752 9.2666 9.43945 9.20801 9.11133 9.20801C8.81543 9.20801 8.55908 9.26221 8.34229 9.37061C8.12549 9.479 7.94678 9.63428 7.80615 9.83643C7.66553 10.0386 7.56006 10.2832 7.48975 10.5703C7.42236 10.8574 7.38867 11.1812 7.38867 11.5415V12.0469C7.38867 12.416 7.43115 12.7456 7.51611 13.0356C7.604 13.3257 7.72852 13.5732 7.88965 13.7783C8.05078 13.9805 8.24268 14.1343 8.46533 14.2397C8.69092 14.3452 8.93994 14.3979 9.2124 14.3979C9.51416 14.3979 9.75879 14.373 9.94629 14.3232C10.1338 14.2705 10.2803 14.209 10.3857 14.1387C10.4912 14.0654 10.5718 13.9966 10.6274 13.9321V12.4995H9.14648V11.814H11.4712Z" fill="#288409"/><path d="M23 12L19.25 14.5981V9.40192L23 12Z" fill="#288409"/></svg>',
  linkIcon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 7H13V9H17C18.65 9 20 10.35 20 12C20 13.65 18.65 15 17 15H13V17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7ZM11 15H7C5.35 15 4 13.65 4 12C4 10.35 5.35 9 7 9H11V7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H11V15ZM8 11H16V13H8V11Z" fill="#0085FF"/></svg>'
};
function ff(t) {
  let e, n;
  return {
    c() {
      e = Ct("svg"), n = Ct("path"), N(n, "fill", "currentColor"), N(n, "d", "M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "width", "1em"), N(e, "height", "1em"), N(e, "viewBox", "0 0 24 24");
    },
    m(i, l) {
      O(i, e, l), j(e, n);
    },
    p: re,
    i: re,
    o: re,
    d(i) {
      i && R(e);
    }
  };
}
class df extends ue {
  constructor(e) {
    super(), ae(this, e, null, ff, le, {});
  }
}
oe(df, {}, [], [], !0);
function mf(t) {
  let e, n;
  return {
    c() {
      e = Ct("svg"), n = Ct("path"), N(n, "fill", "currentColor"), N(n, "d", "m12 15l-5-5h10l-5 5Z"), N(e, "xmlns", "http://www.w3.org/2000/svg"), N(e, "width", "1em"), N(e, "height", "1em"), N(e, "viewBox", "0 0 24 24");
    },
    m(i, l) {
      O(i, e, l), j(e, n);
    },
    p: re,
    i: re,
    o: re,
    d(i) {
      i && R(e);
    }
  };
}
class hf extends ue {
  constructor(e) {
    super(), ae(this, e, null, mf, le, {});
  }
}
oe(hf, {}, [], [], !0);
function pf(t) {
  We(t, "svelte-1saxe71", "ul.svelte-1saxe71{margin-left:-2.5rem;display:flex;flex-direction:column;gap:1rem}li.svelte-1saxe71{font-family:var(--font-family);display:flex;color:var(--color-grey-dark);align-items:center;gap:0.5rem}.text-container.svelte-1saxe71{margin:0;padding:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.primary-text.svelte-1saxe71{font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.secondary-text.svelte-1saxe71{font-size:10px;color:var(--color-grey-dark-70pc-opacity);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}");
}
function Zi(t, e, n) {
  const i = t.slice();
  return i[1] = e[n], i;
}
function Gi(t) {
  let e, n, i;
  return n = new _s({
    props: { name: (
      /*item*/
      t[1].icon
    ), size: "rect" }
  }), {
    c() {
      e = V("div"), P(n.$$.fragment);
    },
    m(l, s) {
      O(l, e, s), B(n, e, null), i = !0;
    },
    p(l, s) {
      const o = {};
      s & /*items*/
      1 && (o.name = /*item*/
      l[1].icon), n.$set(o);
    },
    i(l) {
      i || (b(n.$$.fragment, l), i = !0);
    },
    o(l) {
      C(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && R(e), U(n);
    }
  };
}
function Ki(t) {
  let e, n, i, l, s = (
    /*item*/
    t[1].primaryText + ""
  ), o, r, a, u = (
    /*item*/
    t[1].secondaryText + ""
  ), c, f, d, m = (
    /*item*/
    t[1].icon && Gi(t)
  );
  return {
    c() {
      e = V("li"), m && m.c(), n = K(), i = V("div"), l = V("div"), o = Ee(s), r = K(), a = V("div"), c = Ee(u), f = K(), N(l, "class", "primary-text svelte-1saxe71"), N(a, "class", "secondary-text svelte-1saxe71"), N(i, "class", "text-container svelte-1saxe71"), N(e, "class", "svelte-1saxe71");
    },
    m(h, _) {
      O(h, e, _), m && m.m(e, null), j(e, n), j(e, i), j(i, l), j(l, o), j(i, r), j(i, a), j(a, c), j(e, f), d = !0;
    },
    p(h, _) {
      /*item*/
      h[1].icon ? m ? (m.p(h, _), _ & /*items*/
      1 && b(m, 1)) : (m = Gi(h), m.c(), b(m, 1), m.m(e, n)) : m && (ge(), C(m, 1, 1, () => {
        m = null;
      }), _e()), (!d || _ & /*items*/
      1) && s !== (s = /*item*/
      h[1].primaryText + "") && Ye(o, s), (!d || _ & /*items*/
      1) && u !== (u = /*item*/
      h[1].secondaryText + "") && Ye(c, u);
    },
    i(h) {
      d || (b(m), d = !0);
    },
    o(h) {
      C(m), d = !1;
    },
    d(h) {
      h && R(e), m && m.d();
    }
  };
}
function gf(t) {
  let e, n, i, l = ht(
    /*items*/
    t[0]
  ), s = [];
  for (let r = 0; r < l.length; r += 1)
    s[r] = Ki(Zi(t, l, r));
  const o = (r) => C(s[r], 1, 1, () => {
    s[r] = null;
  });
  return {
    c() {
      e = V("list"), n = V("ul");
      for (let r = 0; r < s.length; r += 1)
        s[r].c();
      N(n, "class", "svelte-1saxe71");
    },
    m(r, a) {
      O(r, e, a), j(e, n);
      for (let u = 0; u < s.length; u += 1)
        s[u] && s[u].m(n, null);
      i = !0;
    },
    p(r, [a]) {
      if (a & /*items*/
      1) {
        l = ht(
          /*items*/
          r[0]
        );
        let u;
        for (u = 0; u < l.length; u += 1) {
          const c = Zi(r, l, u);
          s[u] ? (s[u].p(c, a), b(s[u], 1)) : (s[u] = Ki(c), s[u].c(), b(s[u], 1), s[u].m(n, null));
        }
        for (ge(), u = l.length; u < s.length; u += 1)
          o(u);
        _e();
      }
    },
    i(r) {
      if (!i) {
        for (let a = 0; a < l.length; a += 1)
          b(s[a]);
        i = !0;
      }
    },
    o(r) {
      s = s.filter(Boolean);
      for (let a = 0; a < s.length; a += 1)
        C(s[a]);
      i = !1;
    },
    d(r) {
      r && R(e), vn(s, r);
    }
  };
}
function _f(t, e, n) {
  let { items: i } = e;
  return t.$$set = (l) => {
    "items" in l && n(0, i = l.items);
  }, [i];
}
class bs extends ue {
  constructor(e) {
    super(), ae(this, e, _f, gf, le, { items: 0 }, pf);
  }
  get items() {
    return this.$$.ctx[0];
  }
  set items(e) {
    this.$$set({ items: e }), y();
  }
}
oe(bs, { items: {} }, [], [], !0);
function bf(t) {
  We(t, "svelte-dttlzh", "affected-nodes.svelte-dttlzh{overflow:auto;margin-top:-1rem;margin-left:1rem}affected-nodes .affected-nodes-names{margin-left:-1.5rem}affected-nodes .list-typeswitcher-affected-nodes{margin-top:-1.5rem}affected-nodes .secondary-text-affected-nodes{margin-top:-2.25rem}affected-nodes .item-typeswitcher-affected-nodes{margin-bottom:-2.25rem;padding-left:0.75rem}");
}
function vf(t) {
  let e, n, i;
  return n = new bs({ props: { items: (
    /*items*/
    t[0]
  ) } }), {
    c() {
      e = V("affected-nodes"), P(n.$$.fragment), zt(e, "class", "svelte-dttlzh");
    },
    m(l, s) {
      O(l, e, s), B(n, e, null), i = !0;
    },
    p(l, [s]) {
      const o = {};
      s & /*items*/
      1 && (o.items = /*items*/
      l[0]), n.$set(o);
    },
    i(l) {
      i || (b(n.$$.fragment, l), i = !0);
    },
    o(l) {
      C(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && R(e), U(n);
    }
  };
}
function Cf(t, e, n) {
  let { items: i } = e;
  return t.$$set = (l) => {
    "items" in l && n(0, i = l.items);
  }, [i];
}
class yf extends ue {
  constructor(e) {
    super(), ae(this, e, Cf, vf, le, { items: 0 }, bf);
  }
  get items() {
    return this.$$.ctx[0];
  }
  set items(e) {
    this.$$set({ items: e }), y();
  }
}
oe(yf, { items: {} }, [], [], !0);
function Af(t) {
  We(t, "svelte-86g6i3", ".image-upload-section.svelte-86g6i3.svelte-86g6i3{display:flex;flex-direction:column;gap:0.5rem}.image-preview.svelte-86g6i3 img.svelte-86g6i3{max-width:150px;max-height:150px}");
}
function Wi(t) {
  let e, n, i;
  return {
    c() {
      e = V("div"), n = V("img"), oi(n.src, i = /*imagePreview*/
      t[0]) || N(n, "src", i), N(n, "alt", "Uploaded Image"), N(n, "class", "svelte-86g6i3"), N(e, "class", "image-preview svelte-86g6i3");
    },
    m(l, s) {
      O(l, e, s), j(e, n);
    },
    p(l, s) {
      s & /*imagePreview*/
      1 && !oi(n.src, i = /*imagePreview*/
      l[0]) && N(n, "src", i);
    },
    d(l) {
      l && R(e);
    }
  };
}
function Ef(t) {
  let e, n, i, l, s, o, r, a = (
    /*imagePreview*/
    t[0] && Wi(t)
  );
  return {
    c() {
      e = V("div"), n = V("label"), n.textContent = "Upload Image:", i = K(), l = V("input"), s = K(), a && a.c(), N(n, "for", "imageUpload"), N(l, "type", "file"), N(l, "id", "imageUpload"), N(l, "accept", "image/*"), N(e, "class", "image-upload-section svelte-86g6i3");
    },
    m(u, c) {
      O(u, e, c), j(e, n), j(e, i), j(e, l), j(e, s), a && a.m(e, null), o || (r = x(
        l,
        "change",
        /*handleImageUpload*/
        t[1]
      ), o = !0);
    },
    p(u, [c]) {
      /*imagePreview*/
      u[0] ? a ? a.p(u, c) : (a = Wi(u), a.c(), a.m(e, null)) : a && (a.d(1), a = null);
    },
    i: re,
    o: re,
    d(u) {
      u && R(e), a && a.d(), o = !1, r();
    }
  };
}
function If(t, e, n) {
  let { src: i = "" } = e, l = i;
  function s(o) {
    const r = o.target.files[0];
    if (r && r.type.startsWith("image/")) {
      const a = new FileReader();
      a.onload = (u) => {
        var c;
        n(0, l = (c = u.target) == null ? void 0 : c.result);
      }, a.readAsDataURL(r);
    } else
      alert("Please upload a valid image file");
  }
  return t.$$set = (o) => {
    "src" in o && n(2, i = o.src);
  }, [l, s, i];
}
class vs extends ue {
  constructor(e) {
    super(), ae(this, e, If, Ef, le, { src: 2 }, Af);
  }
  get src() {
    return this.$$.ctx[2];
  }
  set src(e) {
    this.$$set({ src: e }), y();
  }
}
oe(vs, { src: {} }, [], [], !0);
function Tf(t) {
  We(t, "svelte-y861mz", ".element-wrapper.svelte-y861mz.svelte-y861mz{border-left:10px solid transparent;padding:0 0 0.5rem 1rem}.element-wrapper.svelte-y861mz.svelte-y861mz:hover{border-color:var(--mdc-theme-secondary);transition:0.25s all ease;background-color:#f5f5f5}.element-wrapper.svelte-y861mz:hover .action-btns.svelte-y861mz{visibility:visible;transition:0.25s all ease}.action-btns.svelte-y861mz.svelte-y861mz{display:flex;justify-content:flex-end;visibility:hidden}");
}
function wf(t) {
  let e, n, i, l, s, o, r, a, u, c, f;
  i = new nt({
    props: {
      icon: "content_copy",
      color: "black",
      size: "small"
    }
  }), s = new nt({
    props: {
      icon: "delete",
      color: "black",
      size: "small"
    }
  }), s.$on(
    "click",
    /*deleteBlockElement*/
    t[0]
  ), r = new nt({
    props: {
      icon: "arrow_upward",
      color: "black",
      size: "small"
    }
  }), u = new nt({
    props: {
      icon: "arrow_downward",
      color: "black",
      size: "small"
    }
  });
  const d = (
    /*#slots*/
    t[3].default
  ), m = fe(
    d,
    t,
    /*$$scope*/
    t[2],
    null
  );
  return {
    c() {
      e = V("div"), n = V("div"), P(i.$$.fragment), l = K(), P(s.$$.fragment), o = K(), P(r.$$.fragment), a = K(), P(u.$$.fragment), c = K(), m && m.c(), N(n, "class", "action-btns svelte-y861mz"), N(e, "class", "element-wrapper svelte-y861mz");
    },
    m(h, _) {
      O(h, e, _), j(e, n), B(i, n, null), j(n, l), B(s, n, null), j(n, o), B(r, n, null), j(n, a), B(u, n, null), j(e, c), m && m.m(e, null), f = !0;
    },
    p(h, [_]) {
      m && m.p && (!f || _ & /*$$scope*/
      4) && me(
        m,
        d,
        h,
        /*$$scope*/
        h[2],
        f ? de(
          d,
          /*$$scope*/
          h[2],
          _,
          null
        ) : he(
          /*$$scope*/
          h[2]
        ),
        null
      );
    },
    i(h) {
      f || (b(i.$$.fragment, h), b(s.$$.fragment, h), b(r.$$.fragment, h), b(u.$$.fragment, h), b(m, h), f = !0);
    },
    o(h) {
      C(i.$$.fragment, h), C(s.$$.fragment, h), C(r.$$.fragment, h), C(u.$$.fragment, h), C(m, h), f = !1;
    },
    d(h) {
      h && R(e), U(i), U(s), U(r), U(u), m && m.d(h);
    }
  };
}
function Sf(t, e, n) {
  let { $$slots: i = {}, $$scope: l } = e, { elementId: s } = e;
  const o = Kn();
  function r() {
    o("elementDelete", { elementId: s });
  }
  return t.$$set = (a) => {
    "elementId" in a && n(1, s = a.elementId), "$$scope" in a && n(2, l = a.$$scope);
  }, [r, s, l, i];
}
class Cs extends ue {
  constructor(e) {
    super(), ae(this, e, Sf, wf, le, { elementId: 1 }, Tf);
  }
  get elementId() {
    return this.$$.ctx[1];
  }
  set elementId(e) {
    this.$$set({ elementId: e }), y();
  }
}
oe(Cs, { elementId: {} }, ["default"], [], !0);
function kf(t) {
  We(t, "svelte-1mvq73n", ".template-builder.svelte-1mvq73n{width:70%}.card.svelte-1mvq73n{background-color:white;min-height:50vh;overflow-y:auto;border-radius:.5rem;padding:1.5rem}.elements-list.svelte-1mvq73n{display:flex;flex-direction:column}footer.svelte-1mvq73n{margin-top:2rem}.elements-container.svelte-1mvq73n{margin-top:2rem;display:flex;gap:1.5rem;flex-wrap:wrap}");
}
function Xi(t, e, n) {
  const i = t.slice();
  return i[10] = e[n], i;
}
function Lf(t) {
  let e, n, i;
  var l = (
    /*componentMap*/
    t[2][
      /*blockElement*/
      t[10].type
    ]
  );
  function s(o, r) {
    return {};
  }
  return l && (e = Be(l, s())), {
    c() {
      e && P(e.$$.fragment), n = K();
    },
    m(o, r) {
      e && B(e, o, r), O(o, n, r), i = !0;
    },
    p(o, r) {
      if (r & /*blockElements*/
      2 && l !== (l = /*componentMap*/
      o[2][
        /*blockElement*/
        o[10].type
      ])) {
        if (e) {
          ge();
          const a = e;
          C(a.$$.fragment, 1, 0, () => {
            U(a, 1);
          }), _e();
        }
        l ? (e = Be(l, s()), P(e.$$.fragment), b(e.$$.fragment, 1), B(e, n.parentNode, n)) : e = null;
      }
    },
    i(o) {
      i || (e && b(e.$$.fragment, o), i = !0);
    },
    o(o) {
      e && C(e.$$.fragment, o), i = !1;
    },
    d(o) {
      o && R(n), e && U(e, o);
    }
  };
}
function Qi(t, e) {
  let n, i, l;
  return i = new Cs({
    props: {
      elementId: (
        /*blockElement*/
        e[10].id
      ),
      $$slots: { default: [Lf] },
      $$scope: { ctx: e }
    }
  }), i.$on(
    "elementDelete",
    /*deleteBlockElement*/
    e[4]
  ), {
    key: t,
    first: null,
    c() {
      n = Oe(), P(i.$$.fragment), this.first = n;
    },
    m(s, o) {
      O(s, n, o), B(i, s, o), l = !0;
    },
    p(s, o) {
      e = s;
      const r = {};
      o & /*blockElements*/
      2 && (r.elementId = /*blockElement*/
      e[10].id), o & /*$$scope, blockElements*/
      8194 && (r.$$scope = { dirty: o, ctx: e }), i.$set(r);
    },
    i(s) {
      l || (b(i.$$.fragment, s), l = !0);
    },
    o(s) {
      C(i.$$.fragment, s), l = !1;
    },
    d(s) {
      s && R(n), U(i, s);
    }
  };
}
function Df(t) {
  let e;
  return {
    c() {
      e = Ee("add element");
    },
    m(n, i) {
      O(n, e, i);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Rf(t) {
  let e, n, i, l;
  return e = new Cn({
    props: { icon: "add", fillColor: "#2aa198" }
  }), i = new Xn({
    props: {
      $$slots: { default: [Df] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      P(e.$$.fragment), n = K(), P(i.$$.fragment);
    },
    m(s, o) {
      B(e, s, o), O(s, n, o), B(i, s, o), l = !0;
    },
    p(s, o) {
      const r = {};
      o & /*$$scope*/
      8192 && (r.$$scope = { dirty: o, ctx: s }), i.$set(r);
    },
    i(s) {
      l || (b(e.$$.fragment, s), b(i.$$.fragment, s), l = !0);
    },
    o(s) {
      C(e.$$.fragment, s), C(i.$$.fragment, s), l = !1;
    },
    d(s) {
      s && R(n), U(e, s), U(i, s);
    }
  };
}
function Yi(t) {
  let e, n, i, l;
  return e = new ft({
    props: {
      variant: "outlined",
      $$slots: { default: [Of] },
      $$scope: { ctx: t }
    }
  }), e.$on(
    "click",
    /*click_handler_1*/
    t[7]
  ), i = new ft({
    props: {
      variant: "outlined",
      $$slots: { default: [Hf] },
      $$scope: { ctx: t }
    }
  }), i.$on(
    "click",
    /*click_handler_2*/
    t[8]
  ), {
    c() {
      P(e.$$.fragment), n = K(), P(i.$$.fragment);
    },
    m(s, o) {
      B(e, s, o), O(s, n, o), B(i, s, o), l = !0;
    },
    p(s, o) {
      const r = {};
      o & /*$$scope*/
      8192 && (r.$$scope = { dirty: o, ctx: s }), e.$set(r);
      const a = {};
      o & /*$$scope*/
      8192 && (a.$$scope = { dirty: o, ctx: s }), i.$set(a);
    },
    i(s) {
      l || (b(e.$$.fragment, s), b(i.$$.fragment, s), l = !0);
    },
    o(s) {
      C(e.$$.fragment, s), C(i.$$.fragment, s), l = !1;
    },
    d(s) {
      s && R(n), U(e, s), U(i, s);
    }
  };
}
function Of(t) {
  let e;
  return {
    c() {
      e = Ee("Text");
    },
    m(n, i) {
      O(n, e, i);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Hf(t) {
  let e;
  return {
    c() {
      e = Ee("Image");
    },
    m(n, i) {
      O(n, e, i);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Mf(t) {
  let e, n, i, l = [], s = /* @__PURE__ */ new Map(), o, r, a, u, c, f, d = ht(
    /*blockElements*/
    t[1]
  );
  const m = (_) => (
    /*blockElement*/
    _[10].id
  );
  for (let _ = 0; _ < d.length; _ += 1) {
    let p = Xi(t, d, _), E = m(p);
    s.set(E, l[_] = Qi(E, p));
  }
  a = new ft({
    props: {
      $$slots: { default: [Rf] },
      $$scope: { ctx: t }
    }
  }), a.$on(
    "click",
    /*click_handler*/
    t[6]
  );
  let h = (
    /*isElementsChoiceVisible*/
    t[0] && Yi(t)
  );
  return {
    c() {
      e = V("div"), n = V("div"), i = V("div");
      for (let _ = 0; _ < l.length; _ += 1)
        l[_].c();
      o = K(), r = V("footer"), P(a.$$.fragment), u = K(), c = V("div"), h && h.c(), N(i, "class", "elements-list svelte-1mvq73n"), N(c, "class", "elements-container svelte-1mvq73n"), N(r, "class", "svelte-1mvq73n"), N(n, "class", "card svelte-1mvq73n"), N(e, "class", "template-builder svelte-1mvq73n");
    },
    m(_, p) {
      O(_, e, p), j(e, n), j(n, i);
      for (let E = 0; E < l.length; E += 1)
        l[E] && l[E].m(i, null);
      j(n, o), j(n, r), B(a, r, null), j(r, u), j(r, c), h && h.m(c, null), f = !0;
    },
    p(_, [p]) {
      p & /*blockElements, deleteBlockElement, componentMap*/
      22 && (d = ht(
        /*blockElements*/
        _[1]
      ), ge(), l = Ir(l, p, m, 1, _, d, s, i, Er, Qi, null, Xi), _e());
      const E = {};
      p & /*$$scope*/
      8192 && (E.$$scope = { dirty: p, ctx: _ }), a.$set(E), /*isElementsChoiceVisible*/
      _[0] ? h ? (h.p(_, p), p & /*isElementsChoiceVisible*/
      1 && b(h, 1)) : (h = Yi(_), h.c(), b(h, 1), h.m(c, null)) : h && (ge(), C(h, 1, 1, () => {
        h = null;
      }), _e());
    },
    i(_) {
      if (!f) {
        for (let p = 0; p < d.length; p += 1)
          b(l[p]);
        b(a.$$.fragment, _), b(h), f = !0;
      }
    },
    o(_) {
      for (let p = 0; p < l.length; p += 1)
        C(l[p]);
      C(a.$$.fragment, _), C(h), f = !1;
    },
    d(_) {
      _ && R(e);
      for (let p = 0; p < l.length; p += 1)
        l[p].d();
      U(a), h && h.d();
    }
  };
}
function $f(t, e, n) {
  let { templateId: i } = e, l = !1, s = [];
  const o = At.getDocumentTemplate(i), r = {
    text: gs,
    image: vs
  };
  function a(m) {
    const _ = { id: At.addBlockToDocumentTemplate(o, "", m, s.length), type: m };
    n(1, s = [...s, _]);
  }
  function u(m) {
    const { elementId: h } = m.detail;
    At.deleteBlockFromDocumentTemplate(o, h), n(1, s = s.filter((_) => _.id !== h));
  }
  const c = () => n(0, l = !l), f = () => {
    a("text");
  }, d = () => {
    a("image");
  };
  return t.$$set = (m) => {
    "templateId" in m && n(5, i = m.templateId);
  }, [
    l,
    s,
    r,
    a,
    u,
    i,
    c,
    f,
    d
  ];
}
class ys extends ue {
  constructor(e) {
    super(), ae(this, e, $f, Mf, le, { templateId: 5 }, kf);
  }
  get templateId() {
    return this.$$.ctx[5];
  }
  set templateId(e) {
    this.$$set({ templateId: e }), y();
  }
}
oe(ys, { templateId: {} }, [], [], !0);
function Nf(t) {
  We(t, "svelte-1usfn22", ".template-overview.svelte-1usfn22{padding:2rem}.template-controls.svelte-1usfn22{margin:0 0 1rem 1rem}.template-controls.svelte-1usfn22 .btn-pill{border-radius:2em;cursor:pointer;border-color:var(--mdc-theme-secondary)}.template-controls.svelte-1usfn22 .btn-pill-outlined{color:var(--mdc-theme-secondary)}.template-controls.svelte-1usfn22 .btn-pill-outlined:hover{background-color:var(--mdc-theme-secondary);color:white}.template-controls.svelte-1usfn22 .btn-pill-primary{background-color:var(--mdc-theme-secondary);color:white}.template-controls.svelte-1usfn22 .btn-pill-primary:hover{background-color:rgba(73, 79, 191, 0.8039215686)}");
}
function Bf(t) {
  let e;
  return {
    c() {
      e = Ee("Add template");
    },
    m(n, i) {
      O(n, e, i);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Uf(t) {
  let e, n, i, l;
  return e = new Cn({ props: { icon: "add" } }), i = new Xn({
    props: {
      $$slots: { default: [Bf] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      P(e.$$.fragment), n = K(), P(i.$$.fragment);
    },
    m(s, o) {
      B(e, s, o), O(s, n, o), B(i, s, o), l = !0;
    },
    p(s, o) {
      const r = {};
      o & /*$$scope*/
      32 && (r.$$scope = { dirty: o, ctx: s }), i.$set(r);
    },
    i(s) {
      l || (b(e.$$.fragment, s), b(i.$$.fragment, s), l = !0);
    },
    o(s) {
      C(e.$$.fragment, s), C(i.$$.fragment, s), l = !1;
    },
    d(s) {
      s && R(n), U(e, s), U(i, s);
    }
  };
}
function Pf(t) {
  let e;
  return {
    c() {
      e = Ee("Generate Document");
    },
    m(n, i) {
      O(n, e, i);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Ff(t) {
  let e, n, i, l, s, o, r, a, u;
  return i = new ft({
    props: {
      variant: "raised",
      class: "btn-pill btn-pill-primary",
      $$slots: { default: [Uf] },
      $$scope: { ctx: t }
    }
  }), i.$on(
    "click",
    /*createNewTemplate*/
    t[1]
  ), s = new ft({
    props: {
      variant: "outlined",
      class: "btn-pill btn-pill-outlined",
      $$slots: { default: [Pf] },
      $$scope: { ctx: t }
    }
  }), a = new ps({
    props: {
      allTemplates: (
        /*templatesConvertedToTableRow*/
        t[0]
      )
    }
  }), a.$on(
    "templateDelete",
    /*deleteTemplate*/
    t[2]
  ), {
    c() {
      e = V("div"), n = V("header"), P(i.$$.fragment), l = K(), P(s.$$.fragment), o = K(), r = V("main"), P(a.$$.fragment), N(n, "class", "template-controls svelte-1usfn22"), N(e, "class", "template-overview svelte-1usfn22");
    },
    m(c, f) {
      O(c, e, f), j(e, n), B(i, n, null), j(n, l), B(s, n, null), j(e, o), j(e, r), B(a, r, null), u = !0;
    },
    p(c, [f]) {
      const d = {};
      f & /*$$scope*/
      32 && (d.$$scope = { dirty: f, ctx: c }), i.$set(d);
      const m = {};
      f & /*$$scope*/
      32 && (m.$$scope = { dirty: f, ctx: c }), s.$set(m);
      const h = {};
      f & /*templatesConvertedToTableRow*/
      1 && (h.allTemplates = /*templatesConvertedToTableRow*/
      c[0]), a.$set(h);
    },
    i(c) {
      u || (b(i.$$.fragment, c), b(s.$$.fragment, c), b(a.$$.fragment, c), u = !0);
    },
    o(c) {
      C(i.$$.fragment, c), C(s.$$.fragment, c), C(a.$$.fragment, c), u = !1;
    },
    d(c) {
      c && R(e), U(i), U(s), U(a);
    }
  };
}
function zf(t) {
  const e = t.getAttribute("date");
  return {
    id: t.getAttribute("id") ?? "No id",
    name: t.getAttribute("title") ?? "N/A",
    description: t.getAttribute("description") ?? "N/A",
    lastEdited: new Date(e)
  };
}
function Vf(t, e, n) {
  let i, l = "", s = [];
  Qe(() => {
    n(3, s = At.getAllDocumentTemplates());
  });
  function o() {
    l = At.addDocumentTemplate(), is(`/create/${l}`);
  }
  function r(a) {
    const { templateId: u } = a.detail;
    At.deleteDocumentTemplate(u), n(3, s = s.filter((c) => c.getAttribute("id") !== u));
  }
  return t.$$.update = () => {
    t.$$.dirty & /*allTemplates*/
    8 && n(0, i = s.map(zf));
  }, [i, o, r, s];
}
class jn extends ue {
  constructor(e) {
    super(), ae(this, e, Vf, Ff, le, {}, Nf);
  }
}
oe(jn, {}, [], [], !0);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var qf = {
  LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
  LABEL_REQUIRED: "mdc-floating-label--required",
  LABEL_SHAKE: "mdc-floating-label--shake",
  ROOT: "mdc-floating-label"
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var jf = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var i = t.call(this, $e($e({}, e.defaultAdapter), n)) || this;
      return i.shakeAnimationEndHandler = function() {
        i.handleShakeAnimationEnd();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return qf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          getWidth: function() {
            return 0;
          },
          registerInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, e.prototype.getWidth = function() {
      return this.adapter.getWidth();
    }, e.prototype.shake = function(n) {
      var i = e.cssClasses.LABEL_SHAKE;
      n ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.float = function(n) {
      var i = e.cssClasses, l = i.LABEL_FLOAT_ABOVE, s = i.LABEL_SHAKE;
      n ? this.adapter.addClass(l) : (this.adapter.removeClass(l), this.adapter.removeClass(s));
    }, e.prototype.setRequired = function(n) {
      var i = e.cssClasses.LABEL_REQUIRED;
      n ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.handleShakeAnimationEnd = function() {
      var n = e.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(n);
    }, e;
  }(gt)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Rt = {
  LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
  LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Zf = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var i = t.call(this, $e($e({}, e.defaultAdapter), n)) || this;
      return i.transitionEndHandler = function(l) {
        i.handleTransitionEnd(l);
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Rt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          setStyle: function() {
          },
          registerEventHandler: function() {
          },
          deregisterEventHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerEventHandler("transitionend", this.transitionEndHandler);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler);
    }, e.prototype.activate = function() {
      this.adapter.removeClass(Rt.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Rt.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(Rt.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var i = this.adapter.hasClass(Rt.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && i && (this.adapter.removeClass(Rt.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Rt.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(gt)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Gf = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Ji = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Kf = {
  NO_LABEL: "mdc-notched-outline--no-label",
  OUTLINE_NOTCHED: "mdc-notched-outline--notched",
  OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Wf = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      return t.call(this, $e($e({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Gf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Kf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ji;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          setNotchWidthProperty: function() {
          },
          removeNotchWidthProperty: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.notch = function(n) {
      var i = e.cssClasses.OUTLINE_NOTCHED;
      n > 0 && (n += Ji.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(i);
    }, e.prototype.closeNotch = function() {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, e;
  }(gt)
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Nn = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  INPUT_SELECTOR: ".mdc-text-field__input",
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-text-field__icon--leading",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  PREFIX_SELECTOR: ".mdc-text-field__affix--prefix",
  SUFFIX_SELECTOR: ".mdc-text-field__affix--suffix",
  TRAILING_ICON_SELECTOR: ".mdc-text-field__icon--trailing"
}, Xf = {
  DISABLED: "mdc-text-field--disabled",
  FOCUSED: "mdc-text-field--focused",
  HELPER_LINE: "mdc-text-field-helper-line",
  INVALID: "mdc-text-field--invalid",
  LABEL_FLOATING: "mdc-text-field--label-floating",
  NO_LABEL: "mdc-text-field--no-label",
  OUTLINED: "mdc-text-field--outlined",
  ROOT: "mdc-text-field",
  TEXTAREA: "mdc-text-field--textarea",
  WITH_LEADING_ICON: "mdc-text-field--with-leading-icon",
  WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon",
  WITH_INTERNAL_COUNTER: "mdc-text-field--with-internal-counter"
}, xi = {
  LABEL_SCALE: 0.75
}, Qf = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Yf = [
  "color",
  "date",
  "datetime-local",
  "month",
  "range",
  "time",
  "week"
];
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var el = ["mousedown", "touchstart"], tl = ["click", "keydown"], Jf = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n, i) {
      i === void 0 && (i = {});
      var l = t.call(this, $e($e({}, e.defaultAdapter), n)) || this;
      return l.isFocused = !1, l.receivedUserInput = !1, l.valid = !0, l.useNativeValidation = !0, l.validateOnValueChange = !0, l.helperText = i.helperText, l.characterCounter = i.characterCounter, l.leadingIcon = i.leadingIcon, l.trailingIcon = i.trailingIcon, l.inputFocusHandler = function() {
        l.activateFocus();
      }, l.inputBlurHandler = function() {
        l.deactivateFocus();
      }, l.inputInputHandler = function() {
        l.handleInput();
      }, l.setPointerXOffset = function(s) {
        l.setTransformOrigin(s);
      }, l.textFieldInteractionHandler = function() {
        l.handleTextFieldInteraction();
      }, l.validationAttributeChangeHandler = function(s) {
        l.handleValidationAttributeChange(s);
      }, l;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Xf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Nn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return xi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return Yf.indexOf(n) >= 0;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldFloat", {
      get: function() {
        return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() || this.isBadInput();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldShake", {
      get: function() {
        return !this.isFocused && !this.isValid() && !!this.getValue();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCTextFieldAdapter} for typing information on parameters and
       * return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !0;
          },
          setInputAttr: function() {
          },
          removeInputAttr: function() {
          },
          registerTextFieldInteractionHandler: function() {
          },
          deregisterTextFieldInteractionHandler: function() {
          },
          registerInputInteractionHandler: function() {
          },
          deregisterInputInteractionHandler: function() {
          },
          registerValidationAttributeChangeHandler: function() {
            return new MutationObserver(function() {
            });
          },
          deregisterValidationAttributeChangeHandler: function() {
          },
          getNativeInput: function() {
            return null;
          },
          isFocused: function() {
            return !1;
          },
          activateLineRipple: function() {
          },
          deactivateLineRipple: function() {
          },
          setLineRippleTransformOrigin: function() {
          },
          shakeLabel: function() {
          },
          floatLabel: function() {
          },
          setLabelRequired: function() {
          },
          hasLabel: function() {
            return !1;
          },
          getLabelWidth: function() {
            return 0;
          },
          hasOutline: function() {
            return !1;
          },
          notchOutline: function() {
          },
          closeOutline: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n, i, l, s;
      this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = Tt(el), r = o.next(); !r.done; r = o.next()) {
          var a = r.value;
          this.adapter.registerInputInteractionHandler(a, this.setPointerXOffset);
        }
      } catch (f) {
        n = { error: f };
      } finally {
        try {
          r && !r.done && (i = o.return) && i.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var u = Tt(tl), c = u.next(); !c.done; c = u.next()) {
          var a = c.value;
          this.adapter.registerTextFieldInteractionHandler(a, this.textFieldInteractionHandler);
        }
      } catch (f) {
        l = { error: f };
      } finally {
        try {
          c && !c.done && (s = u.return) && s.call(u);
        } finally {
          if (l) throw l.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var n, i, l, s;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = Tt(el), r = o.next(); !r.done; r = o.next()) {
          var a = r.value;
          this.adapter.deregisterInputInteractionHandler(a, this.setPointerXOffset);
        }
      } catch (f) {
        n = { error: f };
      } finally {
        try {
          r && !r.done && (i = o.return) && i.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var u = Tt(tl), c = u.next(); !c.done; c = u.next()) {
          var a = c.value;
          this.adapter.deregisterTextFieldInteractionHandler(a, this.textFieldInteractionHandler);
        }
      } catch (f) {
        l = { error: f };
      } finally {
        try {
          c && !c.done && (s = u.return) && s.call(u);
        } finally {
          if (l) throw l.error;
        }
      }
      this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    }, e.prototype.handleTextFieldInteraction = function() {
      var n = this.adapter.getNativeInput();
      n && n.disabled || (this.receivedUserInput = !0);
    }, e.prototype.handleValidationAttributeChange = function(n) {
      var i = this;
      n.some(function(l) {
        return Qf.indexOf(l) > -1 ? (i.styleValidity(!0), i.adapter.setLabelRequired(i.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var i = this.adapter.getLabelWidth() * xi.LABEL_SCALE;
          this.adapter.notchOutline(i);
        } else
          this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(n) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var i = n.touches, l = i ? i[0] : n, s = l.target.getBoundingClientRect(), o = l.clientX - s.left;
        this.adapter.setLineRippleTransformOrigin(o);
      }
    }, e.prototype.handleInput = function() {
      this.autoCompleteFocus(), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.autoCompleteFocus = function() {
      this.receivedUserInput || this.activateFocus();
    }, e.prototype.deactivateFocus = function() {
      this.isFocused = !1, this.adapter.deactivateLineRipple();
      var n = this.isValid();
      this.styleValidity(n), this.styleFocused(this.isFocused), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput = !1);
    }, e.prototype.getValue = function() {
      return this.getNativeInput().value;
    }, e.prototype.setValue = function(n) {
      if (this.getValue() !== n && (this.getNativeInput().value = n), this.setcharacterCounter(n.length), this.validateOnValueChange) {
        var i = this.isValid();
        this.styleValidity(i);
      }
      this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.validateOnValueChange && this.adapter.shakeLabel(this.shouldShake));
    }, e.prototype.isValid = function() {
      return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    }, e.prototype.setValid = function(n) {
      this.valid = n, this.styleValidity(n);
      var i = !n && !this.isFocused && !!this.getValue();
      this.adapter.hasLabel() && this.adapter.shakeLabel(i);
    }, e.prototype.setValidateOnValueChange = function(n) {
      this.validateOnValueChange = n;
    }, e.prototype.getValidateOnValueChange = function() {
      return this.validateOnValueChange;
    }, e.prototype.setUseNativeValidation = function(n) {
      this.useNativeValidation = n;
    }, e.prototype.isDisabled = function() {
      return this.getNativeInput().disabled;
    }, e.prototype.setDisabled = function(n) {
      this.getNativeInput().disabled = n, this.styleDisabled(n);
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.setLeadingIconAriaLabel = function(n) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(n);
    }, e.prototype.setLeadingIconContent = function(n) {
      this.leadingIcon && this.leadingIcon.setContent(n);
    }, e.prototype.setTrailingIconAriaLabel = function(n) {
      this.trailingIcon && this.trailingIcon.setAriaLabel(n);
    }, e.prototype.setTrailingIconContent = function(n) {
      this.trailingIcon && this.trailingIcon.setContent(n);
    }, e.prototype.setcharacterCounter = function(n) {
      if (this.characterCounter) {
        var i = this.getNativeInput().maxLength;
        if (i === -1)
          throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
        this.characterCounter.setCounterValue(n, i);
      }
    }, e.prototype.isBadInput = function() {
      return this.getNativeInput().validity.badInput || !1;
    }, e.prototype.isNativeInputValid = function() {
      return this.getNativeInput().validity.valid;
    }, e.prototype.styleValidity = function(n) {
      var i = e.cssClasses.INVALID;
      if (n ? this.adapter.removeClass(i) : this.adapter.addClass(i), this.helperText) {
        this.helperText.setValidity(n);
        var l = this.helperText.isValidation();
        if (!l)
          return;
        var s = this.helperText.isVisible(), o = this.helperText.getId();
        s && o ? this.adapter.setInputAttr(Nn.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr(Nn.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.styleFocused = function(n) {
      var i = e.cssClasses.FOCUSED;
      n ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.styleDisabled = function(n) {
      var i = e.cssClasses, l = i.DISABLED, s = i.INVALID;
      n ? (this.adapter.addClass(l), this.adapter.removeClass(s)) : this.adapter.removeClass(l), this.leadingIcon && this.leadingIcon.setDisabled(n), this.trailingIcon && this.trailingIcon.setDisabled(n);
    }, e.prototype.styleFloating = function(n) {
      var i = e.cssClasses.LABEL_FLOATING;
      n ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.getNativeInput = function() {
      var n = this.adapter ? this.adapter.getNativeInput() : null;
      return n || {
        disabled: !1,
        maxLength: -1,
        required: !1,
        type: "input",
        validity: {
          badInput: !1,
          valid: !0
        },
        value: ""
      };
    }, e;
  }(gt)
);
function xf(t) {
  let e, n, i, l, s, o, r, a;
  const u = (
    /*#slots*/
    t[22].default
  ), c = fe(
    u,
    t,
    /*$$scope*/
    t[21],
    null
  );
  let f = [
    {
      class: n = Y({
        [
          /*className*/
          t[3]
        ]: !0,
        "mdc-floating-label": !0,
        "mdc-floating-label--float-above": (
          /*floatAbove*/
          t[0]
        ),
        "mdc-floating-label--required": (
          /*required*/
          t[1]
        ),
        .../*internalClasses*/
        t[8]
      })
    },
    {
      style: i = Object.entries(
        /*internalStyles*/
        t[9]
      ).map(il).concat([
        /*style*/
        t[4]
      ]).join(" ")
    },
    {
      for: l = /*forId*/
      t[5] || /*inputProps*/
      (t[11] ? (
        /*inputProps*/
        t[11].id
      ) : void 0)
    },
    /*$$restProps*/
    t[12]
  ], d = {};
  for (let m = 0; m < f.length; m += 1)
    d = F(d, f[m]);
  return {
    c() {
      e = V("label"), c && c.c(), ce(e, d);
    },
    m(m, h) {
      O(m, e, h), c && c.m(e, null), t[24](e), o = !0, r || (a = [
        ee(s = De.call(
          null,
          e,
          /*use*/
          t[2]
        )),
        ee(
          /*forwardEvents*/
          t[10].call(null, e)
        )
      ], r = !0);
    },
    p(m, h) {
      c && c.p && (!o || h & /*$$scope*/
      2097152) && me(
        c,
        u,
        m,
        /*$$scope*/
        m[21],
        o ? de(
          u,
          /*$$scope*/
          m[21],
          h,
          null
        ) : he(
          /*$$scope*/
          m[21]
        ),
        null
      ), ce(e, d = ne(f, [
        (!o || h & /*className, floatAbove, required, internalClasses*/
        267 && n !== (n = Y({
          [
            /*className*/
            m[3]
          ]: !0,
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": (
            /*floatAbove*/
            m[0]
          ),
          "mdc-floating-label--required": (
            /*required*/
            m[1]
          ),
          .../*internalClasses*/
          m[8]
        }))) && { class: n },
        (!o || h & /*internalStyles, style*/
        528 && i !== (i = Object.entries(
          /*internalStyles*/
          m[9]
        ).map(il).concat([
          /*style*/
          m[4]
        ]).join(" "))) && { style: i },
        (!o || h & /*forId*/
        32 && l !== (l = /*forId*/
        m[5] || /*inputProps*/
        (m[11] ? (
          /*inputProps*/
          m[11].id
        ) : void 0))) && { for: l },
        h & /*$$restProps*/
        4096 && /*$$restProps*/
        m[12]
      ])), s && Ce(s.update) && h & /*use*/
      4 && s.update.call(
        null,
        /*use*/
        m[2]
      );
    },
    i(m) {
      o || (b(c, m), o = !0);
    },
    o(m) {
      C(c, m), o = !1;
    },
    d(m) {
      m && R(e), c && c.d(m), t[24](null), r = !1, Te(a);
    }
  };
}
function ed(t) {
  let e, n, i, l, s, o, r;
  const a = (
    /*#slots*/
    t[22].default
  ), u = fe(
    a,
    t,
    /*$$scope*/
    t[21],
    null
  );
  let c = [
    {
      class: n = Y({
        [
          /*className*/
          t[3]
        ]: !0,
        "mdc-floating-label": !0,
        "mdc-floating-label--float-above": (
          /*floatAbove*/
          t[0]
        ),
        "mdc-floating-label--required": (
          /*required*/
          t[1]
        ),
        .../*internalClasses*/
        t[8]
      })
    },
    {
      style: i = Object.entries(
        /*internalStyles*/
        t[9]
      ).map(nl).concat([
        /*style*/
        t[4]
      ]).join(" ")
    },
    /*$$restProps*/
    t[12]
  ], f = {};
  for (let d = 0; d < c.length; d += 1)
    f = F(f, c[d]);
  return {
    c() {
      e = V("span"), u && u.c(), ce(e, f);
    },
    m(d, m) {
      O(d, e, m), u && u.m(e, null), t[23](e), s = !0, o || (r = [
        ee(l = De.call(
          null,
          e,
          /*use*/
          t[2]
        )),
        ee(
          /*forwardEvents*/
          t[10].call(null, e)
        )
      ], o = !0);
    },
    p(d, m) {
      u && u.p && (!s || m & /*$$scope*/
      2097152) && me(
        u,
        a,
        d,
        /*$$scope*/
        d[21],
        s ? de(
          a,
          /*$$scope*/
          d[21],
          m,
          null
        ) : he(
          /*$$scope*/
          d[21]
        ),
        null
      ), ce(e, f = ne(c, [
        (!s || m & /*className, floatAbove, required, internalClasses*/
        267 && n !== (n = Y({
          [
            /*className*/
            d[3]
          ]: !0,
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": (
            /*floatAbove*/
            d[0]
          ),
          "mdc-floating-label--required": (
            /*required*/
            d[1]
          ),
          .../*internalClasses*/
          d[8]
        }))) && { class: n },
        (!s || m & /*internalStyles, style*/
        528 && i !== (i = Object.entries(
          /*internalStyles*/
          d[9]
        ).map(nl).concat([
          /*style*/
          d[4]
        ]).join(" "))) && { style: i },
        m & /*$$restProps*/
        4096 && /*$$restProps*/
        d[12]
      ])), l && Ce(l.update) && m & /*use*/
      4 && l.update.call(
        null,
        /*use*/
        d[2]
      );
    },
    i(d) {
      s || (b(u, d), s = !0);
    },
    o(d) {
      C(u, d), s = !1;
    },
    d(d) {
      d && R(e), u && u.d(d), t[23](null), o = !1, Te(r);
    }
  };
}
function td(t) {
  let e, n, i, l;
  const s = [ed, xf], o = [];
  function r(a, u) {
    return (
      /*wrapped*/
      a[6] ? 0 : 1
    );
  }
  return e = r(t), n = o[e] = s[e](t), {
    c() {
      n.c(), i = Oe();
    },
    m(a, u) {
      o[e].m(a, u), O(a, i, u), l = !0;
    },
    p(a, [u]) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, u) : (ge(), C(o[c], 1, 1, () => {
        o[c] = null;
      }), _e(), n = o[e], n ? n.p(a, u) : (n = o[e] = s[e](a), n.c()), b(n, 1), n.m(i.parentNode, i));
    },
    i(a) {
      l || (b(n), l = !0);
    },
    o(a) {
      C(n), l = !1;
    },
    d(a) {
      a && R(i), o[e].d(a);
    }
  };
}
const nl = ([t, e]) => `${t}: ${e};`, il = ([t, e]) => `${t}: ${e};`;
function nd(t, e, n) {
  const i = [
    "use",
    "class",
    "style",
    "for",
    "floatAbove",
    "required",
    "wrapped",
    "shake",
    "float",
    "setRequired",
    "getWidth",
    "getElement"
  ];
  let l = se(e, i), { $$slots: s = {}, $$scope: o } = e;
  var r;
  const a = Me(we());
  let { use: u = [] } = e, { class: c = "" } = e, { style: f = "" } = e, { for: d = void 0 } = e, { floatAbove: m = !1 } = e, { required: h = !1 } = e, { wrapped: _ = !1 } = e, p, E, S = {}, M = {}, A = (r = Ue("SMUI:generic:input:props")) !== null && r !== void 0 ? r : {}, v = m, I = h;
  Qe(() => {
    n(18, E = new jf({
      addClass: g,
      removeClass: T,
      getWidth: () => {
        var k, Q;
        const Se = ke(), Le = Se.cloneNode(!0);
        (k = Se.parentNode) === null || k === void 0 || k.appendChild(Le), Le.classList.add("smui-floating-label--remove-transition"), Le.classList.add("smui-floating-label--force-size"), Le.classList.remove("mdc-floating-label--float-above");
        const Ve = Le.scrollWidth;
        return (Q = Se.parentNode) === null || Q === void 0 || Q.removeChild(Le), Ve;
      },
      registerInteractionHandler: (k, Q) => ke().addEventListener(k, Q),
      deregisterInteractionHandler: (k, Q) => ke().removeEventListener(k, Q)
    }));
    const X = {
      get element() {
        return ke();
      },
      addStyle: q,
      removeStyle: H
    };
    return Ae(p, "SMUIFloatingLabel:mount", X), E.init(), () => {
      Ae(p, "SMUIFloatingLabel:unmount", X), E.destroy();
    };
  });
  function g(X) {
    S[X] || n(8, S[X] = !0, S);
  }
  function T(X) {
    (!(X in S) || S[X]) && n(8, S[X] = !1, S);
  }
  function q(X, k) {
    M[X] != k && (k === "" || k == null ? (delete M[X], n(9, M)) : n(9, M[X] = k, M));
  }
  function H(X) {
    X in M && (delete M[X], n(9, M));
  }
  function w(X) {
    E.shake(X);
  }
  function z(X) {
    n(0, m = X);
  }
  function L(X) {
    n(1, h = X);
  }
  function Z() {
    return E.getWidth();
  }
  function ke() {
    return p;
  }
  function ve(X) {
    ie[X ? "unshift" : "push"](() => {
      p = X, n(7, p);
    });
  }
  function be(X) {
    ie[X ? "unshift" : "push"](() => {
      p = X, n(7, p);
    });
  }
  return t.$$set = (X) => {
    e = F(F({}, e), Re(X)), n(12, l = se(e, i)), "use" in X && n(2, u = X.use), "class" in X && n(3, c = X.class), "style" in X && n(4, f = X.style), "for" in X && n(5, d = X.for), "floatAbove" in X && n(0, m = X.floatAbove), "required" in X && n(1, h = X.required), "wrapped" in X && n(6, _ = X.wrapped), "$$scope" in X && n(21, o = X.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && E && v !== m && (n(19, v = m), E.float(m)), t.$$.dirty & /*instance, previousRequired, required*/
    1310722 && E && I !== h && (n(20, I = h), E.setRequired(h));
  }, [
    m,
    h,
    u,
    c,
    f,
    d,
    _,
    p,
    S,
    M,
    a,
    A,
    l,
    w,
    z,
    L,
    Z,
    ke,
    E,
    v,
    I,
    o,
    s,
    ve,
    be
  ];
}
class li extends ue {
  constructor(e) {
    super(), ae(this, e, nd, td, le, {
      use: 2,
      class: 3,
      style: 4,
      for: 5,
      floatAbove: 0,
      required: 1,
      wrapped: 6,
      shake: 13,
      float: 14,
      setRequired: 15,
      getWidth: 16,
      getElement: 17
    });
  }
  get use() {
    return this.$$.ctx[2];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[3];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get style() {
    return this.$$.ctx[4];
  }
  set style(e) {
    this.$$set({ style: e }), y();
  }
  get for() {
    return this.$$.ctx[5];
  }
  set for(e) {
    this.$$set({ for: e }), y();
  }
  get floatAbove() {
    return this.$$.ctx[0];
  }
  set floatAbove(e) {
    this.$$set({ floatAbove: e }), y();
  }
  get required() {
    return this.$$.ctx[1];
  }
  set required(e) {
    this.$$set({ required: e }), y();
  }
  get wrapped() {
    return this.$$.ctx[6];
  }
  set wrapped(e) {
    this.$$set({ wrapped: e }), y();
  }
  get shake() {
    return this.$$.ctx[13];
  }
  get float() {
    return this.$$.ctx[14];
  }
  get setRequired() {
    return this.$$.ctx[15];
  }
  get getWidth() {
    return this.$$.ctx[16];
  }
  get getElement() {
    return this.$$.ctx[17];
  }
}
oe(li, { use: {}, class: {}, style: {}, for: {}, floatAbove: { type: "Boolean" }, required: { type: "Boolean" }, wrapped: { type: "Boolean" } }, ["default"], ["shake", "float", "setRequired", "getWidth", "getElement"], !0);
function id(t) {
  let e, n, i, l, s, o, r = [
    {
      class: n = Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-line-ripple": !0,
        "mdc-line-ripple--active": (
          /*active*/
          t[3]
        ),
        .../*internalClasses*/
        t[5]
      })
    },
    {
      style: i = Object.entries(
        /*internalStyles*/
        t[6]
      ).map(ll).concat([
        /*style*/
        t[2]
      ]).join(" ")
    },
    /*$$restProps*/
    t[8]
  ], a = {};
  for (let u = 0; u < r.length; u += 1)
    a = F(a, r[u]);
  return {
    c() {
      e = V("div"), ce(e, a);
    },
    m(u, c) {
      O(u, e, c), t[13](e), s || (o = [
        ee(l = De.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        ee(
          /*forwardEvents*/
          t[7].call(null, e)
        )
      ], s = !0);
    },
    p(u, [c]) {
      ce(e, a = ne(r, [
        c & /*className, active, internalClasses*/
        42 && n !== (n = Y({
          [
            /*className*/
            u[1]
          ]: !0,
          "mdc-line-ripple": !0,
          "mdc-line-ripple--active": (
            /*active*/
            u[3]
          ),
          .../*internalClasses*/
          u[5]
        })) && { class: n },
        c & /*internalStyles, style*/
        68 && i !== (i = Object.entries(
          /*internalStyles*/
          u[6]
        ).map(ll).concat([
          /*style*/
          u[2]
        ]).join(" ")) && { style: i },
        c & /*$$restProps*/
        256 && /*$$restProps*/
        u[8]
      ])), l && Ce(l.update) && c & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i: re,
    o: re,
    d(u) {
      u && R(e), t[13](null), s = !1, Te(o);
    }
  };
}
const ll = ([t, e]) => `${t}: ${e};`;
function ld(t, e, n) {
  const i = [
    "use",
    "class",
    "style",
    "active",
    "activate",
    "deactivate",
    "setRippleCenter",
    "getElement"
  ];
  let l = se(e, i);
  const s = Me(we());
  let { use: o = [] } = e, { class: r = "" } = e, { style: a = "" } = e, { active: u = !1 } = e, c, f, d = {}, m = {};
  Qe(() => (f = new Zf({
    addClass: _,
    removeClass: p,
    hasClass: h,
    setStyle: E,
    registerEventHandler: (g, T) => v().addEventListener(g, T),
    deregisterEventHandler: (g, T) => v().removeEventListener(g, T)
  }), f.init(), () => {
    f.destroy();
  }));
  function h(g) {
    return g in d ? d[g] : v().classList.contains(g);
  }
  function _(g) {
    d[g] || n(5, d[g] = !0, d);
  }
  function p(g) {
    (!(g in d) || d[g]) && n(5, d[g] = !1, d);
  }
  function E(g, T) {
    m[g] != T && (T === "" || T == null ? (delete m[g], n(6, m)) : n(6, m[g] = T, m));
  }
  function S() {
    f.activate();
  }
  function M() {
    f.deactivate();
  }
  function A(g) {
    f.setRippleCenter(g);
  }
  function v() {
    return c;
  }
  function I(g) {
    ie[g ? "unshift" : "push"](() => {
      c = g, n(4, c);
    });
  }
  return t.$$set = (g) => {
    e = F(F({}, e), Re(g)), n(8, l = se(e, i)), "use" in g && n(0, o = g.use), "class" in g && n(1, r = g.class), "style" in g && n(2, a = g.style), "active" in g && n(3, u = g.active);
  }, [
    o,
    r,
    a,
    u,
    c,
    d,
    m,
    s,
    l,
    S,
    M,
    A,
    v,
    I
  ];
}
class As extends ue {
  constructor(e) {
    super(), ae(this, e, ld, id, le, {
      use: 0,
      class: 1,
      style: 2,
      active: 3,
      activate: 9,
      deactivate: 10,
      setRippleCenter: 11,
      getElement: 12
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get style() {
    return this.$$.ctx[2];
  }
  set style(e) {
    this.$$set({ style: e }), y();
  }
  get active() {
    return this.$$.ctx[3];
  }
  set active(e) {
    this.$$set({ active: e }), y();
  }
  get activate() {
    return this.$$.ctx[9];
  }
  get deactivate() {
    return this.$$.ctx[10];
  }
  get setRippleCenter() {
    return this.$$.ctx[11];
  }
  get getElement() {
    return this.$$.ctx[12];
  }
}
oe(As, { use: {}, class: {}, style: {}, active: { type: "Boolean" } }, [], ["activate", "deactivate", "setRippleCenter", "getElement"], !0);
function sl(t) {
  let e, n, i;
  const l = (
    /*#slots*/
    t[15].default
  ), s = fe(
    l,
    t,
    /*$$scope*/
    t[14],
    null
  );
  return {
    c() {
      e = V("div"), s && s.c(), N(e, "class", "mdc-notched-outline__notch"), N(e, "style", n = Object.entries(
        /*notchStyles*/
        t[7]
      ).map(rl).join(" "));
    },
    m(o, r) {
      O(o, e, r), s && s.m(e, null), i = !0;
    },
    p(o, r) {
      s && s.p && (!i || r & /*$$scope*/
      16384) && me(
        s,
        l,
        o,
        /*$$scope*/
        o[14],
        i ? de(
          l,
          /*$$scope*/
          o[14],
          r,
          null
        ) : he(
          /*$$scope*/
          o[14]
        ),
        null
      ), (!i || r & /*notchStyles*/
      128 && n !== (n = Object.entries(
        /*notchStyles*/
        o[7]
      ).map(rl).join(" "))) && N(e, "style", n);
    },
    i(o) {
      i || (b(s, o), i = !0);
    },
    o(o) {
      C(s, o), i = !1;
    },
    d(o) {
      o && R(e), s && s.d(o);
    }
  };
}
function sd(t) {
  let e, n, i, l, s, o, r, a, u, c, f = !/*noLabel*/
  t[3] && sl(t), d = [
    {
      class: o = Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-notched-outline": !0,
        "mdc-notched-outline--notched": (
          /*notched*/
          t[2]
        ),
        "mdc-notched-outline--no-label": (
          /*noLabel*/
          t[3]
        ),
        .../*internalClasses*/
        t[6]
      })
    },
    /*$$restProps*/
    t[10]
  ], m = {};
  for (let h = 0; h < d.length; h += 1)
    m = F(m, d[h]);
  return {
    c() {
      e = V("div"), n = V("div"), i = K(), f && f.c(), l = K(), s = V("div"), N(n, "class", "mdc-notched-outline__leading"), N(s, "class", "mdc-notched-outline__trailing"), ce(e, m);
    },
    m(h, _) {
      O(h, e, _), j(e, n), j(e, i), f && f.m(e, null), j(e, l), j(e, s), t[16](e), a = !0, u || (c = [
        ee(r = De.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        ee(
          /*forwardEvents*/
          t[8].call(null, e)
        ),
        x(
          e,
          "SMUIFloatingLabel:mount",
          /*handleFloatingLabelMount*/
          t[9]
        ),
        x(
          e,
          "SMUIFloatingLabel:unmount",
          /*SMUIFloatingLabel_unmount_handler*/
          t[17]
        )
      ], u = !0);
    },
    p(h, [_]) {
      /*noLabel*/
      h[3] ? f && (ge(), C(f, 1, 1, () => {
        f = null;
      }), _e()) : f ? (f.p(h, _), _ & /*noLabel*/
      8 && b(f, 1)) : (f = sl(h), f.c(), b(f, 1), f.m(e, l)), ce(e, m = ne(d, [
        (!a || _ & /*className, notched, noLabel, internalClasses*/
        78 && o !== (o = Y({
          [
            /*className*/
            h[1]
          ]: !0,
          "mdc-notched-outline": !0,
          "mdc-notched-outline--notched": (
            /*notched*/
            h[2]
          ),
          "mdc-notched-outline--no-label": (
            /*noLabel*/
            h[3]
          ),
          .../*internalClasses*/
          h[6]
        }))) && { class: o },
        _ & /*$$restProps*/
        1024 && /*$$restProps*/
        h[10]
      ])), r && Ce(r.update) && _ & /*use*/
      1 && r.update.call(
        null,
        /*use*/
        h[0]
      );
    },
    i(h) {
      a || (b(f), a = !0);
    },
    o(h) {
      C(f), a = !1;
    },
    d(h) {
      h && R(e), f && f.d(), t[16](null), u = !1, Te(c);
    }
  };
}
const rl = ([t, e]) => `${t}: ${e};`;
function rd(t, e, n) {
  const i = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let l = se(e, i), { $$slots: s = {}, $$scope: o } = e;
  const r = Me(we());
  let { use: a = [] } = e, { class: u = "" } = e, { notched: c = !1 } = e, { noLabel: f = !1 } = e, d, m, h, _ = {}, p = {};
  Qe(() => (m = new Wf({
    addClass: S,
    removeClass: M,
    setNotchWidthProperty: (w) => A("width", w + "px"),
    removeNotchWidthProperty: () => v("width")
  }), m.init(), () => {
    m.destroy();
  }));
  function E(w) {
    n(4, h = w.detail);
  }
  function S(w) {
    _[w] || n(6, _[w] = !0, _);
  }
  function M(w) {
    (!(w in _) || _[w]) && n(6, _[w] = !1, _);
  }
  function A(w, z) {
    p[w] != z && (z === "" || z == null ? (delete p[w], n(7, p)) : n(7, p[w] = z, p));
  }
  function v(w) {
    w in p && (delete p[w], n(7, p));
  }
  function I(w) {
    m.notch(w);
  }
  function g() {
    m.closeNotch();
  }
  function T() {
    return d;
  }
  function q(w) {
    ie[w ? "unshift" : "push"](() => {
      d = w, n(5, d);
    });
  }
  const H = () => n(4, h = void 0);
  return t.$$set = (w) => {
    e = F(F({}, e), Re(w)), n(10, l = se(e, i)), "use" in w && n(0, a = w.use), "class" in w && n(1, u = w.class), "notched" in w && n(2, c = w.notched), "noLabel" in w && n(3, f = w.noLabel), "$$scope" in w && n(14, o = w.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*floatingLabel*/
    16 && (h ? (h.addStyle("transition-duration", "0s"), S("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      h && h.removeStyle("transition-duration");
    })) : M("mdc-notched-outline--upgraded"));
  }, [
    a,
    u,
    c,
    f,
    h,
    d,
    _,
    p,
    r,
    E,
    l,
    I,
    g,
    T,
    o,
    s,
    q,
    H
  ];
}
class Es extends ue {
  constructor(e) {
    super(), ae(this, e, rd, sd, le, {
      use: 0,
      class: 1,
      notched: 2,
      noLabel: 3,
      notch: 11,
      closeNotch: 12,
      getElement: 13
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get notched() {
    return this.$$.ctx[2];
  }
  set notched(e) {
    this.$$set({ notched: e }), y();
  }
  get noLabel() {
    return this.$$.ctx[3];
  }
  set noLabel(e) {
    this.$$set({ noLabel: e }), y();
  }
  get notch() {
    return this.$$.ctx[11];
  }
  get closeNotch() {
    return this.$$.ctx[12];
  }
  get getElement() {
    return this.$$.ctx[13];
  }
}
oe(Es, { use: {}, class: {}, notched: { type: "Boolean" }, noLabel: { type: "Boolean" } }, ["default"], ["notch", "closeNotch", "getElement"], !0);
const ad = _t({
  class: "mdc-text-field-helper-line",
  tag: "div"
}), od = _t({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
}), ud = _t({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
function cd(t) {
  let e, n, i, l, s, o = [
    {
      class: n = Y({
        [
          /*className*/
          t[1]
        ]: !0,
        "mdc-text-field__input": !0
      })
    },
    { type: (
      /*type*/
      t[2]
    ) },
    { placeholder: (
      /*placeholder*/
      t[3]
    ) },
    /*valueProp*/
    t[4],
    /*internalAttrs*/
    t[6],
    /*$$restProps*/
    t[10]
  ], r = {};
  for (let a = 0; a < o.length; a += 1)
    r = F(r, o[a]);
  return {
    c() {
      e = V("input"), ce(e, r);
    },
    m(a, u) {
      O(a, e, u), e.autofocus && e.focus(), t[26](e), l || (s = [
        ee(i = De.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        ee(
          /*forwardEvents*/
          t[7].call(null, e)
        ),
        x(
          e,
          "input",
          /*input_handler*/
          t[27]
        ),
        x(
          e,
          "change",
          /*changeHandler*/
          t[9]
        ),
        x(
          e,
          "blur",
          /*blur_handler*/
          t[24]
        ),
        x(
          e,
          "focus",
          /*focus_handler*/
          t[25]
        )
      ], l = !0);
    },
    p(a, [u]) {
      ce(e, r = ne(o, [
        u & /*className*/
        2 && n !== (n = Y({
          [
            /*className*/
            a[1]
          ]: !0,
          "mdc-text-field__input": !0
        })) && { class: n },
        u & /*type*/
        4 && { type: (
          /*type*/
          a[2]
        ) },
        u & /*placeholder*/
        8 && { placeholder: (
          /*placeholder*/
          a[3]
        ) },
        u & /*valueProp*/
        16 && /*valueProp*/
        a[4],
        u & /*internalAttrs*/
        64 && /*internalAttrs*/
        a[6],
        u & /*$$restProps*/
        1024 && /*$$restProps*/
        a[10]
      ])), i && Ce(i.update) && u & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        a[0]
      );
    },
    i: re,
    o: re,
    d(a) {
      a && R(e), t[26](null), l = !1, Te(s);
    }
  };
}
function fd(t) {
  return t === "" ? Number.NaN : +t;
}
function dd(t, e, n) {
  const i = [
    "use",
    "class",
    "type",
    "placeholder",
    "value",
    "files",
    "dirty",
    "invalid",
    "updateInvalid",
    "emptyValueNull",
    "emptyValueUndefined",
    "getAttr",
    "addAttr",
    "removeAttr",
    "focus",
    "blur",
    "getElement"
  ];
  let l = se(e, i);
  const s = Me(we());
  let o = () => {
  };
  function r(k) {
    return k === o;
  }
  let { use: a = [] } = e, { class: u = "" } = e, { type: c = "text" } = e, { placeholder: f = " " } = e, { value: d = o } = e;
  const m = r(d);
  m && (d = "");
  let { files: h = null } = e, { dirty: _ = !1 } = e, { invalid: p = !1 } = e, { updateInvalid: E = !0 } = e, { emptyValueNull: S = d === null } = e;
  m && S && (d = null);
  let { emptyValueUndefined: M = d === void 0 } = e;
  m && M && (d = void 0);
  let A, v = {}, I = {};
  Qe(() => {
    E && n(14, p = A.matches(":invalid"));
  });
  function g(k) {
    if (c === "file") {
      n(12, h = k.currentTarget.files);
      return;
    }
    if (k.currentTarget.value === "" && S) {
      n(11, d = null);
      return;
    }
    if (k.currentTarget.value === "" && M) {
      n(11, d = void 0);
      return;
    }
    switch (c) {
      case "number":
      case "range":
        n(11, d = fd(k.currentTarget.value));
        break;
      default:
        n(11, d = k.currentTarget.value);
        break;
    }
  }
  function T(k) {
    (c === "file" || c === "range") && g(k), n(13, _ = !0), E && n(14, p = A.matches(":invalid"));
  }
  function q(k) {
    var Q;
    return k in v ? (Q = v[k]) !== null && Q !== void 0 ? Q : null : Z().getAttribute(k);
  }
  function H(k, Q) {
    v[k] !== Q && n(6, v[k] = Q, v);
  }
  function w(k) {
    (!(k in v) || v[k] != null) && n(6, v[k] = void 0, v);
  }
  function z() {
    Z().focus();
  }
  function L() {
    Z().blur();
  }
  function Z() {
    return A;
  }
  function ke(k) {
    mt.call(this, t, k);
  }
  function ve(k) {
    mt.call(this, t, k);
  }
  function be(k) {
    ie[k ? "unshift" : "push"](() => {
      A = k, n(5, A);
    });
  }
  const X = (k) => c !== "file" && g(k);
  return t.$$set = (k) => {
    e = F(F({}, e), Re(k)), n(10, l = se(e, i)), "use" in k && n(0, a = k.use), "class" in k && n(1, u = k.class), "type" in k && n(2, c = k.type), "placeholder" in k && n(3, f = k.placeholder), "value" in k && n(11, d = k.value), "files" in k && n(12, h = k.files), "dirty" in k && n(13, _ = k.dirty), "invalid" in k && n(14, p = k.invalid), "updateInvalid" in k && n(15, E = k.updateInvalid), "emptyValueNull" in k && n(16, S = k.emptyValueNull), "emptyValueUndefined" in k && n(17, M = k.emptyValueUndefined);
  }, t.$$.update = () => {
    t.$$.dirty & /*type, valueProp, value*/
    2068 && (c === "file" ? (delete I.value, n(4, I), n(2, c), n(11, d)) : n(4, I.value = d ?? "", I));
  }, [
    a,
    u,
    c,
    f,
    I,
    A,
    v,
    s,
    g,
    T,
    l,
    d,
    h,
    _,
    p,
    E,
    S,
    M,
    q,
    H,
    w,
    z,
    L,
    Z,
    ke,
    ve,
    be,
    X
  ];
}
class Is extends ue {
  constructor(e) {
    super(), ae(this, e, dd, cd, le, {
      use: 0,
      class: 1,
      type: 2,
      placeholder: 3,
      value: 11,
      files: 12,
      dirty: 13,
      invalid: 14,
      updateInvalid: 15,
      emptyValueNull: 16,
      emptyValueUndefined: 17,
      getAttr: 18,
      addAttr: 19,
      removeAttr: 20,
      focus: 21,
      blur: 22,
      getElement: 23
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get type() {
    return this.$$.ctx[2];
  }
  set type(e) {
    this.$$set({ type: e }), y();
  }
  get placeholder() {
    return this.$$.ctx[3];
  }
  set placeholder(e) {
    this.$$set({ placeholder: e }), y();
  }
  get value() {
    return this.$$.ctx[11];
  }
  set value(e) {
    this.$$set({ value: e }), y();
  }
  get files() {
    return this.$$.ctx[12];
  }
  set files(e) {
    this.$$set({ files: e }), y();
  }
  get dirty() {
    return this.$$.ctx[13];
  }
  set dirty(e) {
    this.$$set({ dirty: e }), y();
  }
  get invalid() {
    return this.$$.ctx[14];
  }
  set invalid(e) {
    this.$$set({ invalid: e }), y();
  }
  get updateInvalid() {
    return this.$$.ctx[15];
  }
  set updateInvalid(e) {
    this.$$set({ updateInvalid: e }), y();
  }
  get emptyValueNull() {
    return this.$$.ctx[16];
  }
  set emptyValueNull(e) {
    this.$$set({ emptyValueNull: e }), y();
  }
  get emptyValueUndefined() {
    return this.$$.ctx[17];
  }
  set emptyValueUndefined(e) {
    this.$$set({ emptyValueUndefined: e }), y();
  }
  get getAttr() {
    return this.$$.ctx[18];
  }
  get addAttr() {
    return this.$$.ctx[19];
  }
  get removeAttr() {
    return this.$$.ctx[20];
  }
  get focus() {
    return this.$$.ctx[21];
  }
  get blur() {
    return this.$$.ctx[22];
  }
  get getElement() {
    return this.$$.ctx[23];
  }
}
oe(Is, { use: {}, class: {}, type: {}, placeholder: {}, value: {}, files: {}, dirty: { type: "Boolean" }, invalid: { type: "Boolean" }, updateInvalid: { type: "Boolean" }, emptyValueNull: {}, emptyValueUndefined: {} }, [], ["getAttr", "addAttr", "removeAttr", "focus", "blur", "getElement"], !0);
function md(t) {
  let e, n, i, l, s, o, r = [
    {
      class: n = Y({
        [
          /*className*/
          t[2]
        ]: !0,
        "mdc-text-field__input": !0
      })
    },
    {
      style: i = `${/*resizable*/
      t[4] ? "" : "resize: none; "}${/*style*/
      t[3]}`
    },
    /*internalAttrs*/
    t[6],
    /*$$restProps*/
    t[9]
  ], a = {};
  for (let u = 0; u < r.length; u += 1)
    a = F(a, r[u]);
  return {
    c() {
      e = V("textarea"), ce(e, a);
    },
    m(u, c) {
      O(u, e, c), e.autofocus && e.focus(), t[21](e), gn(
        e,
        /*value*/
        t[0]
      ), s || (o = [
        ee(l = De.call(
          null,
          e,
          /*use*/
          t[1]
        )),
        ee(
          /*forwardEvents*/
          t[7].call(null, e)
        ),
        x(
          e,
          "change",
          /*changeHandler*/
          t[8]
        ),
        x(
          e,
          "blur",
          /*blur_handler*/
          t[19]
        ),
        x(
          e,
          "focus",
          /*focus_handler*/
          t[20]
        ),
        x(
          e,
          "input",
          /*textarea_input_handler*/
          t[22]
        )
      ], s = !0);
    },
    p(u, [c]) {
      ce(e, a = ne(r, [
        c & /*className*/
        4 && n !== (n = Y({
          [
            /*className*/
            u[2]
          ]: !0,
          "mdc-text-field__input": !0
        })) && { class: n },
        c & /*resizable, style*/
        24 && i !== (i = `${/*resizable*/
        u[4] ? "" : "resize: none; "}${/*style*/
        u[3]}`) && { style: i },
        c & /*internalAttrs*/
        64 && /*internalAttrs*/
        u[6],
        c & /*$$restProps*/
        512 && /*$$restProps*/
        u[9]
      ])), l && Ce(l.update) && c & /*use*/
      2 && l.update.call(
        null,
        /*use*/
        u[1]
      ), c & /*value*/
      1 && gn(
        e,
        /*value*/
        u[0]
      );
    },
    i: re,
    o: re,
    d(u) {
      u && R(e), t[21](null), s = !1, Te(o);
    }
  };
}
function hd(t, e, n) {
  const i = [
    "use",
    "class",
    "style",
    "value",
    "dirty",
    "invalid",
    "updateInvalid",
    "resizable",
    "getAttr",
    "addAttr",
    "removeAttr",
    "focus",
    "blur",
    "getElement"
  ];
  let l = se(e, i);
  const s = Me(we());
  let { use: o = [] } = e, { class: r = "" } = e, { style: a = "" } = e, { value: u = "" } = e, { dirty: c = !1 } = e, { invalid: f = !1 } = e, { updateInvalid: d = !0 } = e, { resizable: m = !0 } = e, h, _ = {};
  Qe(() => {
    d && n(11, f = h.matches(":invalid"));
  });
  function p() {
    n(10, c = !0), d && n(11, f = h.matches(":invalid"));
  }
  function E(w) {
    var z;
    return w in _ ? (z = _[w]) !== null && z !== void 0 ? z : null : I().getAttribute(w);
  }
  function S(w, z) {
    _[w] !== z && n(6, _[w] = z, _);
  }
  function M(w) {
    (!(w in _) || _[w] != null) && n(6, _[w] = void 0, _);
  }
  function A() {
    I().focus();
  }
  function v() {
    I().blur();
  }
  function I() {
    return h;
  }
  function g(w) {
    mt.call(this, t, w);
  }
  function T(w) {
    mt.call(this, t, w);
  }
  function q(w) {
    ie[w ? "unshift" : "push"](() => {
      h = w, n(5, h);
    });
  }
  function H() {
    u = this.value, n(0, u);
  }
  return t.$$set = (w) => {
    e = F(F({}, e), Re(w)), n(9, l = se(e, i)), "use" in w && n(1, o = w.use), "class" in w && n(2, r = w.class), "style" in w && n(3, a = w.style), "value" in w && n(0, u = w.value), "dirty" in w && n(10, c = w.dirty), "invalid" in w && n(11, f = w.invalid), "updateInvalid" in w && n(12, d = w.updateInvalid), "resizable" in w && n(4, m = w.resizable);
  }, [
    u,
    o,
    r,
    a,
    m,
    h,
    _,
    s,
    p,
    l,
    c,
    f,
    d,
    E,
    S,
    M,
    A,
    v,
    I,
    g,
    T,
    q,
    H
  ];
}
class Ts extends ue {
  constructor(e) {
    super(), ae(this, e, hd, md, le, {
      use: 1,
      class: 2,
      style: 3,
      value: 0,
      dirty: 10,
      invalid: 11,
      updateInvalid: 12,
      resizable: 4,
      getAttr: 13,
      addAttr: 14,
      removeAttr: 15,
      focus: 16,
      blur: 17,
      getElement: 18
    });
  }
  get use() {
    return this.$$.ctx[1];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[2];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get style() {
    return this.$$.ctx[3];
  }
  set style(e) {
    this.$$set({ style: e }), y();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), y();
  }
  get dirty() {
    return this.$$.ctx[10];
  }
  set dirty(e) {
    this.$$set({ dirty: e }), y();
  }
  get invalid() {
    return this.$$.ctx[11];
  }
  set invalid(e) {
    this.$$set({ invalid: e }), y();
  }
  get updateInvalid() {
    return this.$$.ctx[12];
  }
  set updateInvalid(e) {
    this.$$set({ updateInvalid: e }), y();
  }
  get resizable() {
    return this.$$.ctx[4];
  }
  set resizable(e) {
    this.$$set({ resizable: e }), y();
  }
  get getAttr() {
    return this.$$.ctx[13];
  }
  get addAttr() {
    return this.$$.ctx[14];
  }
  get removeAttr() {
    return this.$$.ctx[15];
  }
  get focus() {
    return this.$$.ctx[16];
  }
  get blur() {
    return this.$$.ctx[17];
  }
  get getElement() {
    return this.$$.ctx[18];
  }
}
oe(Ts, { use: {}, class: {}, style: {}, value: {}, dirty: { type: "Boolean" }, invalid: { type: "Boolean" }, updateInvalid: { type: "Boolean" }, resizable: { type: "Boolean" } }, [], ["getAttr", "addAttr", "removeAttr", "focus", "blur", "getElement"], !0);
const pd = (t) => ({}), al = (t) => ({}), gd = (t) => ({}), ol = (t) => ({}), _d = (t) => ({}), ul = (t) => ({}), bd = (t) => ({}), cl = (t) => ({}), vd = (t) => ({}), fl = (t) => ({}), Cd = (t) => ({}), dl = (t) => ({}), yd = (t) => ({}), ml = (t) => ({}), Ad = (t) => ({}), hl = (t) => ({}), Ed = (t) => ({}), pl = (t) => ({}), Id = (t) => ({}), gl = (t) => ({}), Td = (t) => ({}), _l = (t) => ({}), wd = (t) => ({}), bl = (t) => ({});
function Sd(t) {
  let e, n, i, l, s, o, r, a, u, c, f, d, m, h;
  const _ = (
    /*#slots*/
    t[56].label
  ), p = fe(
    _,
    t,
    /*$$scope*/
    t[87],
    fl
  );
  i = new Xt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [Ld] },
      $$scope: { ctx: t }
    }
  });
  const E = (
    /*#slots*/
    t[56].default
  ), S = fe(
    E,
    t,
    /*$$scope*/
    t[87],
    null
  );
  o = new Xt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [Dd] },
      $$scope: { ctx: t }
    }
  });
  const M = (
    /*#slots*/
    t[56].ripple
  ), A = fe(
    M,
    t,
    /*$$scope*/
    t[87],
    ol
  );
  let v = [
    {
      class: a = Y({
        [
          /*className*/
          t[9]
        ]: !0,
        "mdc-text-field": !0,
        "mdc-text-field--disabled": (
          /*disabled*/
          t[12]
        ),
        "mdc-text-field--textarea": (
          /*textarea*/
          t[14]
        ),
        "mdc-text-field--filled": (
          /*variant*/
          t[15] === "filled"
        ),
        "mdc-text-field--outlined": (
          /*variant*/
          t[15] === "outlined"
        ),
        "smui-text-field--standard": (
          /*variant*/
          t[15] === "standard" && !/*textarea*/
          t[14]
        ),
        "mdc-text-field--no-label": (
          /*noLabel*/
          t[16] || !/*$$slots*/
          t[47].label
        ),
        "mdc-text-field--with-leading-icon": (
          /*$$slots*/
          t[47].leadingIcon
        ),
        "mdc-text-field--with-trailing-icon": (
          /*$$slots*/
          t[47].trailingIcon
        ),
        "mdc-text-field--invalid": (
          /*invalid*/
          t[1]
        ),
        .../*internalClasses*/
        t[25]
      })
    },
    {
      style: u = Object.entries(
        /*internalStyles*/
        t[26]
      ).map(Ll).concat([
        /*style*/
        t[10]
      ]).join(" ")
    },
    pt(
      /*$$restProps*/
      t[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], I = {};
  for (let g = 0; g < v.length; g += 1)
    I = F(I, v[g]);
  return {
    c() {
      e = V("div"), p && p.c(), n = K(), P(i.$$.fragment), l = K(), S && S.c(), s = K(), P(o.$$.fragment), r = K(), A && A.c(), ce(e, I);
    },
    m(g, T) {
      O(g, e, T), p && p.m(e, null), j(e, n), B(i, e, null), j(e, l), S && S.m(e, null), j(e, s), B(o, e, null), j(e, r), A && A.m(e, null), t[82](e), d = !0, m || (h = [
        ee(c = yt.call(null, e, {
          ripple: (
            /*ripple*/
            t[11]
          ),
          unbounded: !1,
          addClass: (
            /*addClass*/
            t[43]
          ),
          removeClass: (
            /*removeClass*/
            t[44]
          ),
          addStyle: (
            /*addStyle*/
            t[45]
          )
        })),
        ee(f = De.call(
          null,
          e,
          /*use*/
          t[8]
        )),
        ee(
          /*forwardEvents*/
          t[34].call(null, e)
        ),
        x(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          t[38]
        ),
        x(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler_1*/
          t[83]
        ),
        x(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          t[39]
        ),
        x(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler_1*/
          t[84]
        )
      ], m = !0);
    },
    p(g, T) {
      p && p.p && (!d || T[2] & /*$$scope*/
      33554432) && me(
        p,
        _,
        g,
        /*$$scope*/
        g[87],
        d ? de(
          _,
          /*$$scope*/
          g[87],
          T,
          vd
        ) : he(
          /*$$scope*/
          g[87]
        ),
        fl
      );
      const q = {};
      T[2] & /*$$scope*/
      33554432 && (q.$$scope = { dirty: T, ctx: g }), i.$set(q), S && S.p && (!d || T[2] & /*$$scope*/
      33554432) && me(
        S,
        E,
        g,
        /*$$scope*/
        g[87],
        d ? de(
          E,
          /*$$scope*/
          g[87],
          T,
          null
        ) : he(
          /*$$scope*/
          g[87]
        ),
        null
      );
      const H = {};
      T[2] & /*$$scope*/
      33554432 && (H.$$scope = { dirty: T, ctx: g }), o.$set(H), A && A.p && (!d || T[2] & /*$$scope*/
      33554432) && me(
        A,
        M,
        g,
        /*$$scope*/
        g[87],
        d ? de(
          M,
          /*$$scope*/
          g[87],
          T,
          gd
        ) : he(
          /*$$scope*/
          g[87]
        ),
        ol
      ), ce(e, I = ne(v, [
        (!d || T[0] & /*className, disabled, textarea, variant, noLabel, invalid, internalClasses*/
        33673730 | T[1] & /*$$slots*/
        65536 && a !== (a = Y({
          [
            /*className*/
            g[9]
          ]: !0,
          "mdc-text-field": !0,
          "mdc-text-field--disabled": (
            /*disabled*/
            g[12]
          ),
          "mdc-text-field--textarea": (
            /*textarea*/
            g[14]
          ),
          "mdc-text-field--filled": (
            /*variant*/
            g[15] === "filled"
          ),
          "mdc-text-field--outlined": (
            /*variant*/
            g[15] === "outlined"
          ),
          "smui-text-field--standard": (
            /*variant*/
            g[15] === "standard" && !/*textarea*/
            g[14]
          ),
          "mdc-text-field--no-label": (
            /*noLabel*/
            g[16] || !/*$$slots*/
            g[47].label
          ),
          "mdc-text-field--with-leading-icon": (
            /*$$slots*/
            g[47].leadingIcon
          ),
          "mdc-text-field--with-trailing-icon": (
            /*$$slots*/
            g[47].trailingIcon
          ),
          "mdc-text-field--invalid": (
            /*invalid*/
            g[1]
          ),
          .../*internalClasses*/
          g[25]
        }))) && { class: a },
        (!d || T[0] & /*internalStyles, style*/
        67109888 && u !== (u = Object.entries(
          /*internalStyles*/
          g[26]
        ).map(Ll).concat([
          /*style*/
          g[10]
        ]).join(" "))) && { style: u },
        T[1] & /*$$restProps*/
        32768 && pt(
          /*$$restProps*/
          g[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), c && Ce(c.update) && T[0] & /*ripple*/
      2048 && c.update.call(null, {
        ripple: (
          /*ripple*/
          g[11]
        ),
        unbounded: !1,
        addClass: (
          /*addClass*/
          g[43]
        ),
        removeClass: (
          /*removeClass*/
          g[44]
        ),
        addStyle: (
          /*addStyle*/
          g[45]
        )
      }), f && Ce(f.update) && T[0] & /*use*/
      256 && f.update.call(
        null,
        /*use*/
        g[8]
      );
    },
    i(g) {
      d || (b(p, g), b(i.$$.fragment, g), b(S, g), b(o.$$.fragment, g), b(A, g), d = !0);
    },
    o(g) {
      C(p, g), C(i.$$.fragment, g), C(S, g), C(o.$$.fragment, g), C(A, g), d = !1;
    },
    d(g) {
      g && R(e), p && p.d(g), U(i), S && S.d(g), U(o), A && A.d(g), t[82](null), m = !1, Te(h);
    }
  };
}
function kd(t) {
  let e, n, i, l, s, o, r, a, u, c, f, d, m, h, _, p, E, S, M = !/*textarea*/
  t[14] && /*variant*/
  t[15] !== "outlined" && vl(t), A = (
    /*textarea*/
    (t[14] || /*variant*/
    t[15] === "outlined") && Al(t)
  );
  l = new Xt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [Md] },
      $$scope: { ctx: t }
    }
  });
  const v = (
    /*#slots*/
    t[56].default
  ), I = fe(
    v,
    t,
    /*$$scope*/
    t[87],
    null
  ), g = [Nd, $d], T = [];
  function q(L, Z) {
    return (
      /*textarea*/
      L[14] && typeof /*value*/
      L[0] == "string" ? 0 : 1
    );
  }
  r = q(t), a = T[r] = g[r](t), c = new Xt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [Pd] },
      $$scope: { ctx: t }
    }
  });
  let H = !/*textarea*/
  t[14] && /*variant*/
  t[15] !== "outlined" && /*ripple*/
  t[11] && wl(t), w = [
    {
      class: d = Y({
        [
          /*className*/
          t[9]
        ]: !0,
        "mdc-text-field": !0,
        "mdc-text-field--disabled": (
          /*disabled*/
          t[12]
        ),
        "mdc-text-field--textarea": (
          /*textarea*/
          t[14]
        ),
        "mdc-text-field--filled": (
          /*variant*/
          t[15] === "filled"
        ),
        "mdc-text-field--outlined": (
          /*variant*/
          t[15] === "outlined"
        ),
        "smui-text-field--standard": (
          /*variant*/
          t[15] === "standard" && !/*textarea*/
          t[14]
        ),
        "mdc-text-field--no-label": (
          /*noLabel*/
          t[16] || /*label*/
          t[17] == null && !/*$$slots*/
          t[47].label
        ),
        "mdc-text-field--label-floating": (
          /*focused*/
          t[28] || /*value*/
          t[0] != null && /*value*/
          t[0] !== ""
        ),
        "mdc-text-field--with-leading-icon": (
          /*isUninitializedValue*/
          t[35](
            /*withLeadingIcon*/
            t[22]
          ) ? (
            /*$$slots*/
            t[47].leadingIcon
          ) : (
            /*withLeadingIcon*/
            t[22]
          )
        ),
        "mdc-text-field--with-trailing-icon": (
          /*isUninitializedValue*/
          t[35](
            /*withTrailingIcon*/
            t[23]
          ) ? (
            /*$$slots*/
            t[47].trailingIcon
          ) : (
            /*withTrailingIcon*/
            t[23]
          )
        ),
        "mdc-text-field--with-internal-counter": (
          /*textarea*/
          t[14] && /*$$slots*/
          t[47].internalCounter
        ),
        "mdc-text-field--invalid": (
          /*invalid*/
          t[1]
        ),
        .../*internalClasses*/
        t[25]
      })
    },
    {
      style: m = Object.entries(
        /*internalStyles*/
        t[26]
      ).map(kl).concat([
        /*style*/
        t[10]
      ]).join(" ")
    },
    {
      for: (
        /* suppress a11y warning, since this is wrapped */
        void 0
      )
    },
    pt(
      /*$$restProps*/
      t[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], z = {};
  for (let L = 0; L < w.length; L += 1)
    z = F(z, w[L]);
  return {
    c() {
      e = V("label"), M && M.c(), n = K(), A && A.c(), i = K(), P(l.$$.fragment), s = K(), I && I.c(), o = K(), a.c(), u = K(), P(c.$$.fragment), f = K(), H && H.c(), ce(e, z);
    },
    m(L, Z) {
      O(L, e, Z), M && M.m(e, null), j(e, n), A && A.m(e, null), j(e, i), B(l, e, null), j(e, s), I && I.m(e, null), j(e, o), T[r].m(e, null), j(e, u), B(c, e, null), j(e, f), H && H.m(e, null), t[78](e), p = !0, E || (S = [
        ee(h = yt.call(null, e, {
          ripple: !/*textarea*/
          t[14] && /*variant*/
          t[15] === "filled",
          unbounded: !1,
          addClass: (
            /*addClass*/
            t[43]
          ),
          removeClass: (
            /*removeClass*/
            t[44]
          ),
          addStyle: (
            /*addStyle*/
            t[45]
          ),
          eventTarget: (
            /*inputElement*/
            t[33]
          ),
          activeTarget: (
            /*inputElement*/
            t[33]
          ),
          initPromise: (
            /*initPromise*/
            t[37]
          )
        })),
        ee(_ = De.call(
          null,
          e,
          /*use*/
          t[8]
        )),
        ee(
          /*forwardEvents*/
          t[34].call(null, e)
        ),
        x(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          t[38]
        ),
        x(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler*/
          t[79]
        ),
        x(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          t[39]
        ),
        x(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler*/
          t[80]
        ),
        x(
          e,
          "SMUITextfieldCharacterCounter:mount",
          /*handleCharacterCounterMount*/
          t[40]
        ),
        x(
          e,
          "SMUITextfieldCharacterCounter:unmount",
          /*SMUITextfieldCharacterCounter_unmount_handler*/
          t[81]
        )
      ], E = !0);
    },
    p(L, Z) {
      !/*textarea*/
      L[14] && /*variant*/
      L[15] !== "outlined" ? M ? (M.p(L, Z), Z[0] & /*textarea, variant*/
      49152 && b(M, 1)) : (M = vl(L), M.c(), b(M, 1), M.m(e, n)) : M && (ge(), C(M, 1, 1, () => {
        M = null;
      }), _e()), /*textarea*/
      L[14] || /*variant*/
      L[15] === "outlined" ? A ? (A.p(L, Z), Z[0] & /*textarea, variant*/
      49152 && b(A, 1)) : (A = Al(L), A.c(), b(A, 1), A.m(e, i)) : A && (ge(), C(A, 1, 1, () => {
        A = null;
      }), _e());
      const ke = {};
      Z[2] & /*$$scope*/
      33554432 && (ke.$$scope = { dirty: Z, ctx: L }), l.$set(ke), I && I.p && (!p || Z[2] & /*$$scope*/
      33554432) && me(
        I,
        v,
        L,
        /*$$scope*/
        L[87],
        p ? de(
          v,
          /*$$scope*/
          L[87],
          Z,
          null
        ) : he(
          /*$$scope*/
          L[87]
        ),
        null
      );
      let ve = r;
      r = q(L), r === ve ? T[r].p(L, Z) : (ge(), C(T[ve], 1, 1, () => {
        T[ve] = null;
      }), _e(), a = T[r], a ? a.p(L, Z) : (a = T[r] = g[r](L), a.c()), b(a, 1), a.m(e, u));
      const be = {};
      Z[2] & /*$$scope*/
      33554432 && (be.$$scope = { dirty: Z, ctx: L }), c.$set(be), !/*textarea*/
      L[14] && /*variant*/
      L[15] !== "outlined" && /*ripple*/
      L[11] ? H ? (H.p(L, Z), Z[0] & /*textarea, variant, ripple*/
      51200 && b(H, 1)) : (H = wl(L), H.c(), b(H, 1), H.m(e, null)) : H && (ge(), C(H, 1, 1, () => {
        H = null;
      }), _e()), ce(e, z = ne(w, [
        (!p || Z[0] & /*className, disabled, textarea, variant, noLabel, label, focused, value, withLeadingIcon, withTrailingIcon, invalid, internalClasses*/
        314823171 | Z[1] & /*$$slots*/
        65536 && d !== (d = Y({
          [
            /*className*/
            L[9]
          ]: !0,
          "mdc-text-field": !0,
          "mdc-text-field--disabled": (
            /*disabled*/
            L[12]
          ),
          "mdc-text-field--textarea": (
            /*textarea*/
            L[14]
          ),
          "mdc-text-field--filled": (
            /*variant*/
            L[15] === "filled"
          ),
          "mdc-text-field--outlined": (
            /*variant*/
            L[15] === "outlined"
          ),
          "smui-text-field--standard": (
            /*variant*/
            L[15] === "standard" && !/*textarea*/
            L[14]
          ),
          "mdc-text-field--no-label": (
            /*noLabel*/
            L[16] || /*label*/
            L[17] == null && !/*$$slots*/
            L[47].label
          ),
          "mdc-text-field--label-floating": (
            /*focused*/
            L[28] || /*value*/
            L[0] != null && /*value*/
            L[0] !== ""
          ),
          "mdc-text-field--with-leading-icon": (
            /*isUninitializedValue*/
            L[35](
              /*withLeadingIcon*/
              L[22]
            ) ? (
              /*$$slots*/
              L[47].leadingIcon
            ) : (
              /*withLeadingIcon*/
              L[22]
            )
          ),
          "mdc-text-field--with-trailing-icon": (
            /*isUninitializedValue*/
            L[35](
              /*withTrailingIcon*/
              L[23]
            ) ? (
              /*$$slots*/
              L[47].trailingIcon
            ) : (
              /*withTrailingIcon*/
              L[23]
            )
          ),
          "mdc-text-field--with-internal-counter": (
            /*textarea*/
            L[14] && /*$$slots*/
            L[47].internalCounter
          ),
          "mdc-text-field--invalid": (
            /*invalid*/
            L[1]
          ),
          .../*internalClasses*/
          L[25]
        }))) && { class: d },
        (!p || Z[0] & /*internalStyles, style*/
        67109888 && m !== (m = Object.entries(
          /*internalStyles*/
          L[26]
        ).map(kl).concat([
          /*style*/
          L[10]
        ]).join(" "))) && { style: m },
        {
          for: (
            /* suppress a11y warning, since this is wrapped */
            void 0
          )
        },
        Z[1] & /*$$restProps*/
        32768 && pt(
          /*$$restProps*/
          L[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), h && Ce(h.update) && Z[0] & /*textarea, variant*/
      49152 | Z[1] & /*inputElement*/
      4 && h.update.call(null, {
        ripple: !/*textarea*/
        L[14] && /*variant*/
        L[15] === "filled",
        unbounded: !1,
        addClass: (
          /*addClass*/
          L[43]
        ),
        removeClass: (
          /*removeClass*/
          L[44]
        ),
        addStyle: (
          /*addStyle*/
          L[45]
        ),
        eventTarget: (
          /*inputElement*/
          L[33]
        ),
        activeTarget: (
          /*inputElement*/
          L[33]
        ),
        initPromise: (
          /*initPromise*/
          L[37]
        )
      }), _ && Ce(_.update) && Z[0] & /*use*/
      256 && _.update.call(
        null,
        /*use*/
        L[8]
      );
    },
    i(L) {
      p || (b(M), b(A), b(l.$$.fragment, L), b(I, L), b(a), b(c.$$.fragment, L), b(H), p = !0);
    },
    o(L) {
      C(M), C(A), C(l.$$.fragment, L), C(I, L), C(a), C(c.$$.fragment, L), C(H), p = !1;
    },
    d(L) {
      L && R(e), M && M.d(), A && A.d(), U(l), I && I.d(L), T[r].d(), U(c), H && H.d(), t[78](null), E = !1, Te(S);
    }
  };
}
function Ld(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].leadingIcon
  ), i = fe(
    n,
    t,
    /*$$scope*/
    t[87],
    cl
  );
  return {
    c() {
      i && i.c();
    },
    m(l, s) {
      i && i.m(l, s), e = !0;
    },
    p(l, s) {
      i && i.p && (!e || s[2] & /*$$scope*/
      33554432) && me(
        i,
        n,
        l,
        /*$$scope*/
        l[87],
        e ? de(
          n,
          /*$$scope*/
          l[87],
          s,
          bd
        ) : he(
          /*$$scope*/
          l[87]
        ),
        cl
      );
    },
    i(l) {
      e || (b(i, l), e = !0);
    },
    o(l) {
      C(i, l), e = !1;
    },
    d(l) {
      i && i.d(l);
    }
  };
}
function Dd(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].trailingIcon
  ), i = fe(
    n,
    t,
    /*$$scope*/
    t[87],
    ul
  );
  return {
    c() {
      i && i.c();
    },
    m(l, s) {
      i && i.m(l, s), e = !0;
    },
    p(l, s) {
      i && i.p && (!e || s[2] & /*$$scope*/
      33554432) && me(
        i,
        n,
        l,
        /*$$scope*/
        l[87],
        e ? de(
          n,
          /*$$scope*/
          l[87],
          s,
          _d
        ) : he(
          /*$$scope*/
          l[87]
        ),
        ul
      );
    },
    i(l) {
      e || (b(i, l), e = !0);
    },
    o(l) {
      C(i, l), e = !1;
    },
    d(l) {
      i && i.d(l);
    }
  };
}
function vl(t) {
  let e, n, i, l = (
    /*variant*/
    t[15] === "filled" && Cl()
  ), s = !/*noLabel*/
  t[16] && /*label*/
  (t[17] != null || /*$$slots*/
  t[47].label) && yl(t);
  return {
    c() {
      l && l.c(), e = K(), s && s.c(), n = Oe();
    },
    m(o, r) {
      l && l.m(o, r), O(o, e, r), s && s.m(o, r), O(o, n, r), i = !0;
    },
    p(o, r) {
      /*variant*/
      o[15] === "filled" ? l || (l = Cl(), l.c(), l.m(e.parentNode, e)) : l && (l.d(1), l = null), !/*noLabel*/
      o[16] && /*label*/
      (o[17] != null || /*$$slots*/
      o[47].label) ? s ? (s.p(o, r), r[0] & /*noLabel, label*/
      196608 | r[1] & /*$$slots*/
      65536 && b(s, 1)) : (s = yl(o), s.c(), b(s, 1), s.m(n.parentNode, n)) : s && (ge(), C(s, 1, 1, () => {
        s = null;
      }), _e());
    },
    i(o) {
      i || (b(s), i = !0);
    },
    o(o) {
      C(s), i = !1;
    },
    d(o) {
      o && (R(e), R(n)), l && l.d(o), s && s.d(o);
    }
  };
}
function Cl(t) {
  let e;
  return {
    c() {
      e = V("span"), N(e, "class", "mdc-text-field__ripple");
    },
    m(n, i) {
      O(n, e, i);
    },
    d(n) {
      n && R(e);
    }
  };
}
function yl(t) {
  let e, n;
  const i = [
    {
      floatAbove: (
        /*focused*/
        t[28] || /*value*/
        t[0] != null && /*value*/
        t[0] !== "" && (typeof /*value*/
        t[0] != "number" || !isNaN(
          /*value*/
          t[0]
        ))
      )
    },
    { required: (
      /*required*/
      t[13]
    ) },
    { wrapped: !0 },
    Ne(
      /*$$restProps*/
      t[46],
      "label$"
    )
  ];
  let l = {
    $$slots: { default: [Rd] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    l = F(l, i[s]);
  return e = new li({ props: l }), t[57](e), {
    c() {
      P(e.$$.fragment);
    },
    m(s, o) {
      B(e, s, o), n = !0;
    },
    p(s, o) {
      const r = o[0] & /*focused, value, required*/
      268443649 | o[1] & /*$$restProps*/
      32768 ? ne(i, [
        o[0] & /*focused, value*/
        268435457 && {
          floatAbove: (
            /*focused*/
            s[28] || /*value*/
            s[0] != null && /*value*/
            s[0] !== "" && (typeof /*value*/
            s[0] != "number" || !isNaN(
              /*value*/
              s[0]
            ))
          )
        },
        o[0] & /*required*/
        8192 && { required: (
          /*required*/
          s[13]
        ) },
        i[2],
        o[1] & /*$$restProps*/
        32768 && pe(Ne(
          /*$$restProps*/
          s[46],
          "label$"
        ))
      ]) : {};
      o[0] & /*label*/
      131072 | o[2] & /*$$scope*/
      33554432 && (r.$$scope = { dirty: o, ctx: s }), e.$set(r);
    },
    i(s) {
      n || (b(e.$$.fragment, s), n = !0);
    },
    o(s) {
      C(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[57](null), U(e, s);
    }
  };
}
function Rd(t) {
  let e = (
    /*label*/
    (t[17] == null ? "" : (
      /*label*/
      t[17]
    )) + ""
  ), n, i;
  const l = (
    /*#slots*/
    t[56].label
  ), s = fe(
    l,
    t,
    /*$$scope*/
    t[87],
    bl
  );
  return {
    c() {
      n = Ee(e), s && s.c();
    },
    m(o, r) {
      O(o, n, r), s && s.m(o, r), i = !0;
    },
    p(o, r) {
      (!i || r[0] & /*label*/
      131072) && e !== (e = /*label*/
      (o[17] == null ? "" : (
        /*label*/
        o[17]
      )) + "") && Ye(n, e), s && s.p && (!i || r[2] & /*$$scope*/
      33554432) && me(
        s,
        l,
        o,
        /*$$scope*/
        o[87],
        i ? de(
          l,
          /*$$scope*/
          o[87],
          r,
          wd
        ) : he(
          /*$$scope*/
          o[87]
        ),
        bl
      );
    },
    i(o) {
      i || (b(s, o), i = !0);
    },
    o(o) {
      C(s, o), i = !1;
    },
    d(o) {
      o && R(n), s && s.d(o);
    }
  };
}
function Al(t) {
  let e, n;
  const i = [
    {
      noLabel: (
        /*noLabel*/
        t[16] || /*label*/
        t[17] == null && !/*$$slots*/
        t[47].label
      )
    },
    Ne(
      /*$$restProps*/
      t[46],
      "outline$"
    )
  ];
  let l = {
    $$slots: { default: [Hd] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    l = F(l, i[s]);
  return e = new Es({ props: l }), t[59](e), {
    c() {
      P(e.$$.fragment);
    },
    m(s, o) {
      B(e, s, o), n = !0;
    },
    p(s, o) {
      const r = o[0] & /*noLabel, label*/
      196608 | o[1] & /*$$slots, $$restProps*/
      98304 ? ne(i, [
        o[0] & /*noLabel, label*/
        196608 | o[1] & /*$$slots*/
        65536 && {
          noLabel: (
            /*noLabel*/
            s[16] || /*label*/
            s[17] == null && !/*$$slots*/
            s[47].label
          )
        },
        o[1] & /*$$restProps*/
        32768 && pe(Ne(
          /*$$restProps*/
          s[46],
          "outline$"
        ))
      ]) : {};
      o[0] & /*focused, value, required, floatingLabel, label, noLabel*/
      268640289 | o[1] & /*$$restProps, $$slots*/
      98304 | o[2] & /*$$scope*/
      33554432 && (r.$$scope = { dirty: o, ctx: s }), e.$set(r);
    },
    i(s) {
      n || (b(e.$$.fragment, s), n = !0);
    },
    o(s) {
      C(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[59](null), U(e, s);
    }
  };
}
function El(t) {
  let e, n;
  const i = [
    {
      floatAbove: (
        /*focused*/
        t[28] || /*value*/
        t[0] != null && /*value*/
        t[0] !== "" && (typeof /*value*/
        t[0] != "number" || !isNaN(
          /*value*/
          t[0]
        ))
      )
    },
    { required: (
      /*required*/
      t[13]
    ) },
    { wrapped: !0 },
    Ne(
      /*$$restProps*/
      t[46],
      "label$"
    )
  ];
  let l = {
    $$slots: { default: [Od] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    l = F(l, i[s]);
  return e = new li({ props: l }), t[58](e), {
    c() {
      P(e.$$.fragment);
    },
    m(s, o) {
      B(e, s, o), n = !0;
    },
    p(s, o) {
      const r = o[0] & /*focused, value, required*/
      268443649 | o[1] & /*$$restProps*/
      32768 ? ne(i, [
        o[0] & /*focused, value*/
        268435457 && {
          floatAbove: (
            /*focused*/
            s[28] || /*value*/
            s[0] != null && /*value*/
            s[0] !== "" && (typeof /*value*/
            s[0] != "number" || !isNaN(
              /*value*/
              s[0]
            ))
          )
        },
        o[0] & /*required*/
        8192 && { required: (
          /*required*/
          s[13]
        ) },
        i[2],
        o[1] & /*$$restProps*/
        32768 && pe(Ne(
          /*$$restProps*/
          s[46],
          "label$"
        ))
      ]) : {};
      o[0] & /*label*/
      131072 | o[2] & /*$$scope*/
      33554432 && (r.$$scope = { dirty: o, ctx: s }), e.$set(r);
    },
    i(s) {
      n || (b(e.$$.fragment, s), n = !0);
    },
    o(s) {
      C(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[58](null), U(e, s);
    }
  };
}
function Od(t) {
  let e = (
    /*label*/
    (t[17] == null ? "" : (
      /*label*/
      t[17]
    )) + ""
  ), n, i;
  const l = (
    /*#slots*/
    t[56].label
  ), s = fe(
    l,
    t,
    /*$$scope*/
    t[87],
    _l
  );
  return {
    c() {
      n = Ee(e), s && s.c();
    },
    m(o, r) {
      O(o, n, r), s && s.m(o, r), i = !0;
    },
    p(o, r) {
      (!i || r[0] & /*label*/
      131072) && e !== (e = /*label*/
      (o[17] == null ? "" : (
        /*label*/
        o[17]
      )) + "") && Ye(n, e), s && s.p && (!i || r[2] & /*$$scope*/
      33554432) && me(
        s,
        l,
        o,
        /*$$scope*/
        o[87],
        i ? de(
          l,
          /*$$scope*/
          o[87],
          r,
          Td
        ) : he(
          /*$$scope*/
          o[87]
        ),
        _l
      );
    },
    i(o) {
      i || (b(s, o), i = !0);
    },
    o(o) {
      C(s, o), i = !1;
    },
    d(o) {
      o && R(n), s && s.d(o);
    }
  };
}
function Hd(t) {
  let e, n, i = !/*noLabel*/
  t[16] && /*label*/
  (t[17] != null || /*$$slots*/
  t[47].label) && El(t);
  return {
    c() {
      i && i.c(), e = Oe();
    },
    m(l, s) {
      i && i.m(l, s), O(l, e, s), n = !0;
    },
    p(l, s) {
      !/*noLabel*/
      l[16] && /*label*/
      (l[17] != null || /*$$slots*/
      l[47].label) ? i ? (i.p(l, s), s[0] & /*noLabel, label*/
      196608 | s[1] & /*$$slots*/
      65536 && b(i, 1)) : (i = El(l), i.c(), b(i, 1), i.m(e.parentNode, e)) : i && (ge(), C(i, 1, 1, () => {
        i = null;
      }), _e());
    },
    i(l) {
      n || (b(i), n = !0);
    },
    o(l) {
      C(i), n = !1;
    },
    d(l) {
      l && R(e), i && i.d(l);
    }
  };
}
function Md(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].leadingIcon
  ), i = fe(
    n,
    t,
    /*$$scope*/
    t[87],
    gl
  );
  return {
    c() {
      i && i.c();
    },
    m(l, s) {
      i && i.m(l, s), e = !0;
    },
    p(l, s) {
      i && i.p && (!e || s[2] & /*$$scope*/
      33554432) && me(
        i,
        n,
        l,
        /*$$scope*/
        l[87],
        e ? de(
          n,
          /*$$scope*/
          l[87],
          s,
          Id
        ) : he(
          /*$$scope*/
          l[87]
        ),
        gl
      );
    },
    i(l) {
      e || (b(i, l), e = !0);
    },
    o(l) {
      C(i, l), e = !1;
    },
    d(l) {
      i && i.d(l);
    }
  };
}
function $d(t) {
  let e, n, i, l, s, o, r, a, u, c;
  const f = (
    /*#slots*/
    t[56].prefix
  ), d = fe(
    f,
    t,
    /*$$scope*/
    t[87],
    hl
  );
  let m = (
    /*prefix*/
    t[20] != null && Il(t)
  );
  const h = [
    { type: (
      /*type*/
      t[18]
    ) },
    { disabled: (
      /*disabled*/
      t[12]
    ) },
    { required: (
      /*required*/
      t[13]
    ) },
    { updateInvalid: (
      /*updateInvalid*/
      t[19]
    ) },
    { "aria-controls": (
      /*helperId*/
      t[27]
    ) },
    { "aria-describedby": (
      /*helperId*/
      t[27]
    ) },
    /*noLabel*/
    t[16] && /*label*/
    t[17] != null ? { placeholder: (
      /*label*/
      t[17]
    ) } : {},
    Ne(
      /*$$restProps*/
      t[46],
      "input$"
    )
  ];
  function _(g) {
    t[69](g);
  }
  function p(g) {
    t[70](g);
  }
  function E(g) {
    t[71](g);
  }
  function S(g) {
    t[72](g);
  }
  let M = {};
  for (let g = 0; g < h.length; g += 1)
    M = F(M, h[g]);
  /*value*/
  t[0] !== void 0 && (M.value = /*value*/
  t[0]), /*files*/
  t[3] !== void 0 && (M.files = /*files*/
  t[3]), /*dirty*/
  t[4] !== void 0 && (M.dirty = /*dirty*/
  t[4]), /*invalid*/
  t[1] !== void 0 && (M.invalid = /*invalid*/
  t[1]), i = new Is({ props: M }), t[68](i), ie.push(() => ct(i, "value", _)), ie.push(() => ct(i, "files", p)), ie.push(() => ct(i, "dirty", E)), ie.push(() => ct(i, "invalid", S)), i.$on(
    "blur",
    /*blur_handler_2*/
    t[73]
  ), i.$on(
    "focus",
    /*focus_handler_2*/
    t[74]
  ), i.$on(
    "blur",
    /*blur_handler_3*/
    t[75]
  ), i.$on(
    "focus",
    /*focus_handler_3*/
    t[76]
  );
  let A = (
    /*suffix*/
    t[21] != null && Tl(t)
  );
  const v = (
    /*#slots*/
    t[56].suffix
  ), I = fe(
    v,
    t,
    /*$$scope*/
    t[87],
    ml
  );
  return {
    c() {
      d && d.c(), e = K(), m && m.c(), n = K(), P(i.$$.fragment), a = K(), A && A.c(), u = K(), I && I.c();
    },
    m(g, T) {
      d && d.m(g, T), O(g, e, T), m && m.m(g, T), O(g, n, T), B(i, g, T), O(g, a, T), A && A.m(g, T), O(g, u, T), I && I.m(g, T), c = !0;
    },
    p(g, T) {
      d && d.p && (!c || T[2] & /*$$scope*/
      33554432) && me(
        d,
        f,
        g,
        /*$$scope*/
        g[87],
        c ? de(
          f,
          /*$$scope*/
          g[87],
          T,
          Ad
        ) : he(
          /*$$scope*/
          g[87]
        ),
        hl
      ), /*prefix*/
      g[20] != null ? m ? (m.p(g, T), T[0] & /*prefix*/
      1048576 && b(m, 1)) : (m = Il(g), m.c(), b(m, 1), m.m(n.parentNode, n)) : m && (ge(), C(m, 1, 1, () => {
        m = null;
      }), _e());
      const q = T[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/
      135213056 | T[1] & /*$$restProps*/
      32768 ? ne(h, [
        T[0] & /*type*/
        262144 && { type: (
          /*type*/
          g[18]
        ) },
        T[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          g[12]
        ) },
        T[0] & /*required*/
        8192 && { required: (
          /*required*/
          g[13]
        ) },
        T[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          g[19]
        ) },
        T[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          g[27]
        ) },
        T[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          g[27]
        ) },
        T[0] & /*noLabel, label*/
        196608 && pe(
          /*noLabel*/
          g[16] && /*label*/
          g[17] != null ? { placeholder: (
            /*label*/
            g[17]
          ) } : {}
        ),
        T[1] & /*$$restProps*/
        32768 && pe(Ne(
          /*$$restProps*/
          g[46],
          "input$"
        ))
      ]) : {};
      !l && T[0] & /*value*/
      1 && (l = !0, q.value = /*value*/
      g[0], ut(() => l = !1)), !s && T[0] & /*files*/
      8 && (s = !0, q.files = /*files*/
      g[3], ut(() => s = !1)), !o && T[0] & /*dirty*/
      16 && (o = !0, q.dirty = /*dirty*/
      g[4], ut(() => o = !1)), !r && T[0] & /*invalid*/
      2 && (r = !0, q.invalid = /*invalid*/
      g[1], ut(() => r = !1)), i.$set(q), /*suffix*/
      g[21] != null ? A ? (A.p(g, T), T[0] & /*suffix*/
      2097152 && b(A, 1)) : (A = Tl(g), A.c(), b(A, 1), A.m(u.parentNode, u)) : A && (ge(), C(A, 1, 1, () => {
        A = null;
      }), _e()), I && I.p && (!c || T[2] & /*$$scope*/
      33554432) && me(
        I,
        v,
        g,
        /*$$scope*/
        g[87],
        c ? de(
          v,
          /*$$scope*/
          g[87],
          T,
          yd
        ) : he(
          /*$$scope*/
          g[87]
        ),
        ml
      );
    },
    i(g) {
      c || (b(d, g), b(m), b(i.$$.fragment, g), b(A), b(I, g), c = !0);
    },
    o(g) {
      C(d, g), C(m), C(i.$$.fragment, g), C(A), C(I, g), c = !1;
    },
    d(g) {
      g && (R(e), R(n), R(a), R(u)), d && d.d(g), m && m.d(g), t[68](null), U(i, g), A && A.d(g), I && I.d(g);
    }
  };
}
function Nd(t) {
  let e, n, i, l, s, o, r, a;
  const u = [
    { disabled: (
      /*disabled*/
      t[12]
    ) },
    { required: (
      /*required*/
      t[13]
    ) },
    { updateInvalid: (
      /*updateInvalid*/
      t[19]
    ) },
    { "aria-controls": (
      /*helperId*/
      t[27]
    ) },
    { "aria-describedby": (
      /*helperId*/
      t[27]
    ) },
    Ne(
      /*$$restProps*/
      t[46],
      "input$"
    )
  ];
  function c(p) {
    t[61](p);
  }
  function f(p) {
    t[62](p);
  }
  function d(p) {
    t[63](p);
  }
  let m = {};
  for (let p = 0; p < u.length; p += 1)
    m = F(m, u[p]);
  /*value*/
  t[0] !== void 0 && (m.value = /*value*/
  t[0]), /*dirty*/
  t[4] !== void 0 && (m.dirty = /*dirty*/
  t[4]), /*invalid*/
  t[1] !== void 0 && (m.invalid = /*invalid*/
  t[1]), n = new Ts({ props: m }), t[60](n), ie.push(() => ct(n, "value", c)), ie.push(() => ct(n, "dirty", f)), ie.push(() => ct(n, "invalid", d)), n.$on(
    "blur",
    /*blur_handler*/
    t[64]
  ), n.$on(
    "focus",
    /*focus_handler*/
    t[65]
  ), n.$on(
    "blur",
    /*blur_handler_1*/
    t[66]
  ), n.$on(
    "focus",
    /*focus_handler_1*/
    t[67]
  );
  const h = (
    /*#slots*/
    t[56].internalCounter
  ), _ = fe(
    h,
    t,
    /*$$scope*/
    t[87],
    pl
  );
  return {
    c() {
      e = V("span"), P(n.$$.fragment), o = K(), _ && _.c(), N(e, "class", r = Y({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        t[46]) || /*$$restProps*/
        t[46].input$resizable
      }));
    },
    m(p, E) {
      O(p, e, E), B(n, e, null), j(e, o), _ && _.m(e, null), a = !0;
    },
    p(p, E) {
      const S = E[0] & /*disabled, required, updateInvalid, helperId*/
      134754304 | E[1] & /*$$restProps*/
      32768 ? ne(u, [
        E[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          p[12]
        ) },
        E[0] & /*required*/
        8192 && { required: (
          /*required*/
          p[13]
        ) },
        E[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          p[19]
        ) },
        E[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          p[27]
        ) },
        E[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          p[27]
        ) },
        E[1] & /*$$restProps*/
        32768 && pe(Ne(
          /*$$restProps*/
          p[46],
          "input$"
        ))
      ]) : {};
      !i && E[0] & /*value*/
      1 && (i = !0, S.value = /*value*/
      p[0], ut(() => i = !1)), !l && E[0] & /*dirty*/
      16 && (l = !0, S.dirty = /*dirty*/
      p[4], ut(() => l = !1)), !s && E[0] & /*invalid*/
      2 && (s = !0, S.invalid = /*invalid*/
      p[1], ut(() => s = !1)), n.$set(S), _ && _.p && (!a || E[2] & /*$$scope*/
      33554432) && me(
        _,
        h,
        p,
        /*$$scope*/
        p[87],
        a ? de(
          h,
          /*$$scope*/
          p[87],
          E,
          Ed
        ) : he(
          /*$$scope*/
          p[87]
        ),
        pl
      ), (!a || E[1] & /*$$restProps*/
      32768 && r !== (r = Y({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        p[46]) || /*$$restProps*/
        p[46].input$resizable
      }))) && N(e, "class", r);
    },
    i(p) {
      a || (b(n.$$.fragment, p), b(_, p), a = !0);
    },
    o(p) {
      C(n.$$.fragment, p), C(_, p), a = !1;
    },
    d(p) {
      p && R(e), t[60](null), U(n), _ && _.d(p);
    }
  };
}
function Il(t) {
  let e, n;
  return e = new od({
    props: {
      $$slots: { default: [Bd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      P(e.$$.fragment);
    },
    m(i, l) {
      B(e, i, l), n = !0;
    },
    p(i, l) {
      const s = {};
      l[0] & /*prefix*/
      1048576 | l[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: l, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (b(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      U(e, i);
    }
  };
}
function Bd(t) {
  let e;
  return {
    c() {
      e = Ee(
        /*prefix*/
        t[20]
      );
    },
    m(n, i) {
      O(n, e, i);
    },
    p(n, i) {
      i[0] & /*prefix*/
      1048576 && Ye(
        e,
        /*prefix*/
        n[20]
      );
    },
    d(n) {
      n && R(e);
    }
  };
}
function Tl(t) {
  let e, n;
  return e = new ud({
    props: {
      $$slots: { default: [Ud] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      P(e.$$.fragment);
    },
    m(i, l) {
      B(e, i, l), n = !0;
    },
    p(i, l) {
      const s = {};
      l[0] & /*suffix*/
      2097152 | l[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: l, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (b(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      U(e, i);
    }
  };
}
function Ud(t) {
  let e;
  return {
    c() {
      e = Ee(
        /*suffix*/
        t[21]
      );
    },
    m(n, i) {
      O(n, e, i);
    },
    p(n, i) {
      i[0] & /*suffix*/
      2097152 && Ye(
        e,
        /*suffix*/
        n[21]
      );
    },
    d(n) {
      n && R(e);
    }
  };
}
function Pd(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].trailingIcon
  ), i = fe(
    n,
    t,
    /*$$scope*/
    t[87],
    dl
  );
  return {
    c() {
      i && i.c();
    },
    m(l, s) {
      i && i.m(l, s), e = !0;
    },
    p(l, s) {
      i && i.p && (!e || s[2] & /*$$scope*/
      33554432) && me(
        i,
        n,
        l,
        /*$$scope*/
        l[87],
        e ? de(
          n,
          /*$$scope*/
          l[87],
          s,
          Cd
        ) : he(
          /*$$scope*/
          l[87]
        ),
        dl
      );
    },
    i(l) {
      e || (b(i, l), e = !0);
    },
    o(l) {
      C(i, l), e = !1;
    },
    d(l) {
      i && i.d(l);
    }
  };
}
function wl(t) {
  let e, n;
  const i = [Ne(
    /*$$restProps*/
    t[46],
    "ripple$"
  )];
  let l = {};
  for (let s = 0; s < i.length; s += 1)
    l = F(l, i[s]);
  return e = new As({ props: l }), t[77](e), {
    c() {
      P(e.$$.fragment);
    },
    m(s, o) {
      B(e, s, o), n = !0;
    },
    p(s, o) {
      const r = o[1] & /*$$restProps*/
      32768 ? ne(i, [pe(Ne(
        /*$$restProps*/
        s[46],
        "ripple$"
      ))]) : {};
      e.$set(r);
    },
    i(s) {
      n || (b(e.$$.fragment, s), n = !0);
    },
    o(s) {
      C(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[77](null), U(e, s);
    }
  };
}
function Sl(t) {
  let e, n;
  const i = [Ne(
    /*$$restProps*/
    t[46],
    "helperLine$"
  )];
  let l = {
    $$slots: { default: [Fd] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    l = F(l, i[s]);
  return e = new ad({ props: l }), e.$on(
    "SMUITextfieldHelperText:id",
    /*handleHelperTextId*/
    t[41]
  ), e.$on(
    "SMUITextfieldHelperText:mount",
    /*handleHelperTextMount*/
    t[42]
  ), e.$on(
    "SMUITextfieldHelperText:unmount",
    /*SMUITextfieldHelperText_unmount_handler*/
    t[85]
  ), e.$on(
    "SMUITextfieldCharacterCounter:mount",
    /*handleCharacterCounterMount*/
    t[40]
  ), e.$on(
    "SMUITextfieldCharacterCounter:unmount",
    /*SMUITextfieldCharacterCounter_unmount_handler_1*/
    t[86]
  ), {
    c() {
      P(e.$$.fragment);
    },
    m(s, o) {
      B(e, s, o), n = !0;
    },
    p(s, o) {
      const r = o[1] & /*$$restProps*/
      32768 ? ne(i, [pe(Ne(
        /*$$restProps*/
        s[46],
        "helperLine$"
      ))]) : {};
      o[2] & /*$$scope*/
      33554432 && (r.$$scope = { dirty: o, ctx: s }), e.$set(r);
    },
    i(s) {
      n || (b(e.$$.fragment, s), n = !0);
    },
    o(s) {
      C(e.$$.fragment, s), n = !1;
    },
    d(s) {
      U(e, s);
    }
  };
}
function Fd(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].helper
  ), i = fe(
    n,
    t,
    /*$$scope*/
    t[87],
    al
  );
  return {
    c() {
      i && i.c();
    },
    m(l, s) {
      i && i.m(l, s), e = !0;
    },
    p(l, s) {
      i && i.p && (!e || s[2] & /*$$scope*/
      33554432) && me(
        i,
        n,
        l,
        /*$$scope*/
        l[87],
        e ? de(
          n,
          /*$$scope*/
          l[87],
          s,
          pd
        ) : he(
          /*$$scope*/
          l[87]
        ),
        al
      );
    },
    i(l) {
      e || (b(i, l), e = !0);
    },
    o(l) {
      C(i, l), e = !1;
    },
    d(l) {
      i && i.d(l);
    }
  };
}
function zd(t) {
  let e, n, i, l, s;
  const o = [kd, Sd], r = [];
  function a(c, f) {
    return (
      /*valued*/
      c[36] ? 0 : 1
    );
  }
  e = a(t), n = r[e] = o[e](t);
  let u = (
    /*$$slots*/
    t[47].helper && Sl(t)
  );
  return {
    c() {
      n.c(), i = K(), u && u.c(), l = Oe();
    },
    m(c, f) {
      r[e].m(c, f), O(c, i, f), u && u.m(c, f), O(c, l, f), s = !0;
    },
    p(c, f) {
      n.p(c, f), /*$$slots*/
      c[47].helper ? u ? (u.p(c, f), f[1] & /*$$slots*/
      65536 && b(u, 1)) : (u = Sl(c), u.c(), b(u, 1), u.m(l.parentNode, l)) : u && (ge(), C(u, 1, 1, () => {
        u = null;
      }), _e());
    },
    i(c) {
      s || (b(n), b(u), s = !0);
    },
    o(c) {
      C(n), C(u), s = !1;
    },
    d(c) {
      c && (R(i), R(l)), r[e].d(c), u && u.d(c);
    }
  };
}
const kl = ([t, e]) => `${t}: ${e};`, Ll = ([t, e]) => `${t}: ${e};`;
function Vd(t, e, n) {
  let i;
  const l = [
    "use",
    "class",
    "style",
    "ripple",
    "disabled",
    "required",
    "textarea",
    "variant",
    "noLabel",
    "label",
    "type",
    "value",
    "files",
    "invalid",
    "updateInvalid",
    "dirty",
    "prefix",
    "suffix",
    "validateOnValueChange",
    "useNativeValidation",
    "withLeadingIcon",
    "withTrailingIcon",
    "input",
    "floatingLabel",
    "lineRipple",
    "notchedOutline",
    "focus",
    "blur",
    "layout",
    "getElement"
  ];
  let s = se(e, l), { $$slots: o = {}, $$scope: r } = e;
  const a = Gn(o), { applyPassive: u } = Fl, c = Me(we());
  let f = () => {
  };
  function d(D) {
    return D === f;
  }
  let { use: m = [] } = e, { class: h = "" } = e, { style: _ = "" } = e, { ripple: p = !0 } = e, { disabled: E = !1 } = e, { required: S = !1 } = e, { textarea: M = !1 } = e, { variant: A = M ? "outlined" : "standard" } = e, { noLabel: v = !1 } = e, { label: I = void 0 } = e, { type: g = "text" } = e, { value: T = s.input$emptyValueUndefined ? void 0 : f } = e, { files: q = f } = e;
  const H = !d(T) || !d(q);
  d(T) && (T = void 0), d(q) && (q = null);
  let { invalid: w = f } = e, { updateInvalid: z = d(w) } = e;
  d(w) && (w = !1);
  let { dirty: L = !1 } = e, { prefix: Z = void 0 } = e, { suffix: ke = void 0 } = e, { validateOnValueChange: ve = z } = e, { useNativeValidation: be = z } = e, { withLeadingIcon: X = f } = e, { withTrailingIcon: k = f } = e, { input: Q = void 0 } = e, { floatingLabel: Se = void 0 } = e, { lineRipple: Le = void 0 } = e, { notchedOutline: Ve = void 0 } = e, J, ye, Xe = {}, je = {}, rt, at = !1, Et = Ue("SMUI:addLayoutListener"), W, G, Ie = new Promise((D) => G = D), dt, kt, $t, Lt, jt = T;
  Et && (W = Et(si)), Qe(() => {
    if (n(54, ye = new Jf(
      {
        // getRootAdapterMethods_
        addClass: Jt,
        removeClass: xt,
        hasClass: Zt,
        registerTextFieldInteractionHandler: (D, Pe) => en().addEventListener(D, Pe),
        deregisterTextFieldInteractionHandler: (D, Pe) => en().removeEventListener(D, Pe),
        registerValidationAttributeChangeHandler: (D) => {
          const Pe = (Sn) => Sn.map((kn) => kn.attributeName).filter((kn) => kn), ri = new MutationObserver((Sn) => {
            be && D(Pe(Sn));
          }), ar = { attributes: !0 };
          return Q && ri.observe(Q.getElement(), ar), ri;
        },
        deregisterValidationAttributeChangeHandler: (D) => {
          D.disconnect();
        },
        // getInputAdapterMethods_
        getNativeInput: () => {
          var D;
          return (D = Q == null ? void 0 : Q.getElement()) !== null && D !== void 0 ? D : null;
        },
        setInputAttr: (D, Pe) => {
          Q == null || Q.addAttr(D, Pe);
        },
        removeInputAttr: (D) => {
          Q == null || Q.removeAttr(D);
        },
        isFocused: () => document.activeElement === (Q == null ? void 0 : Q.getElement()),
        registerInputInteractionHandler: (D, Pe) => {
          Q == null || Q.getElement().addEventListener(D, Pe, u());
        },
        deregisterInputInteractionHandler: (D, Pe) => {
          Q == null || Q.getElement().removeEventListener(D, Pe, u());
        },
        // getLabelAdapterMethods_
        floatLabel: (D) => Se && Se.float(D),
        getLabelWidth: () => Se ? Se.getWidth() : 0,
        hasLabel: () => !!Se,
        shakeLabel: (D) => Se && Se.shake(D),
        setLabelRequired: (D) => Se && Se.setRequired(D),
        // getLineRippleAdapterMethods_
        activateLineRipple: () => Le && Le.activate(),
        deactivateLineRipple: () => Le && Le.deactivate(),
        setLineRippleTransformOrigin: (D) => Le && Le.setRippleCenter(D),
        // getOutlineAdapterMethods_
        closeOutline: () => Ve && Ve.closeNotch(),
        hasOutline: () => !!Ve,
        notchOutline: (D) => Ve && Ve.notch(D)
      },
      {
        get helperText() {
          return $t;
        },
        get characterCounter() {
          return Lt;
        },
        get leadingIcon() {
          return dt;
        },
        get trailingIcon() {
          return kt;
        }
      }
    )), H) {
      if (Q == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      ye.init();
    } else
      Wn().then(() => {
        if (Q == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        ye.init();
      });
    return G(), () => {
      ye.destroy();
    };
  }), St(() => {
    W && W();
  });
  function wn(D) {
    n(29, dt = D.detail);
  }
  function $(D) {
    n(30, kt = D.detail);
  }
  function te(D) {
    n(32, Lt = D.detail);
  }
  function Ze(D) {
    n(27, rt = D.detail);
  }
  function Yt(D) {
    n(31, $t = D.detail);
  }
  function Zt(D) {
    var Pe;
    return D in Xe ? (Pe = Xe[D]) !== null && Pe !== void 0 ? Pe : null : en().classList.contains(D);
  }
  function Jt(D) {
    Xe[D] || n(25, Xe[D] = !0, Xe);
  }
  function xt(D) {
    (!(D in Xe) || Xe[D]) && n(25, Xe[D] = !1, Xe);
  }
  function ks(D, Pe) {
    je[D] != Pe && (Pe === "" || Pe == null ? (delete je[D], n(26, je)) : n(26, je[D] = Pe, je));
  }
  function Ls() {
    Q == null || Q.focus();
  }
  function Ds() {
    Q == null || Q.blur();
  }
  function si() {
    if (ye) {
      const D = ye.shouldFloat;
      ye.notchOutline(D);
    }
  }
  function en() {
    return J;
  }
  function Rs(D) {
    ie[D ? "unshift" : "push"](() => {
      Se = D, n(5, Se);
    });
  }
  function Os(D) {
    ie[D ? "unshift" : "push"](() => {
      Se = D, n(5, Se);
    });
  }
  function Hs(D) {
    ie[D ? "unshift" : "push"](() => {
      Ve = D, n(7, Ve);
    });
  }
  function Ms(D) {
    ie[D ? "unshift" : "push"](() => {
      Q = D, n(2, Q);
    });
  }
  function $s(D) {
    T = D, n(0, T);
  }
  function Ns(D) {
    L = D, n(4, L);
  }
  function Bs(D) {
    w = D, n(1, w), n(54, ye), n(19, z);
  }
  const Us = () => n(28, at = !1), Ps = () => n(28, at = !0), Fs = (D) => Ae(J, "blur", D), zs = (D) => Ae(J, "focus", D);
  function Vs(D) {
    ie[D ? "unshift" : "push"](() => {
      Q = D, n(2, Q);
    });
  }
  function qs(D) {
    T = D, n(0, T);
  }
  function js(D) {
    q = D, n(3, q);
  }
  function Zs(D) {
    L = D, n(4, L);
  }
  function Gs(D) {
    w = D, n(1, w), n(54, ye), n(19, z);
  }
  const Ks = () => n(28, at = !1), Ws = () => n(28, at = !0), Xs = (D) => Ae(J, "blur", D), Qs = (D) => Ae(J, "focus", D);
  function Ys(D) {
    ie[D ? "unshift" : "push"](() => {
      Le = D, n(6, Le);
    });
  }
  function Js(D) {
    ie[D ? "unshift" : "push"](() => {
      J = D, n(24, J);
    });
  }
  const xs = () => n(29, dt = void 0), er = () => n(30, kt = void 0), tr = () => n(32, Lt = void 0);
  function nr(D) {
    ie[D ? "unshift" : "push"](() => {
      J = D, n(24, J);
    });
  }
  const ir = () => n(29, dt = void 0), lr = () => n(30, kt = void 0), sr = () => {
    n(27, rt = void 0), n(31, $t = void 0);
  }, rr = () => n(32, Lt = void 0);
  return t.$$set = (D) => {
    e = F(F({}, e), Re(D)), n(46, s = se(e, l)), "use" in D && n(8, m = D.use), "class" in D && n(9, h = D.class), "style" in D && n(10, _ = D.style), "ripple" in D && n(11, p = D.ripple), "disabled" in D && n(12, E = D.disabled), "required" in D && n(13, S = D.required), "textarea" in D && n(14, M = D.textarea), "variant" in D && n(15, A = D.variant), "noLabel" in D && n(16, v = D.noLabel), "label" in D && n(17, I = D.label), "type" in D && n(18, g = D.type), "value" in D && n(0, T = D.value), "files" in D && n(3, q = D.files), "invalid" in D && n(1, w = D.invalid), "updateInvalid" in D && n(19, z = D.updateInvalid), "dirty" in D && n(4, L = D.dirty), "prefix" in D && n(20, Z = D.prefix), "suffix" in D && n(21, ke = D.suffix), "validateOnValueChange" in D && n(48, ve = D.validateOnValueChange), "useNativeValidation" in D && n(49, be = D.useNativeValidation), "withLeadingIcon" in D && n(22, X = D.withLeadingIcon), "withTrailingIcon" in D && n(23, k = D.withTrailingIcon), "input" in D && n(2, Q = D.input), "floatingLabel" in D && n(5, Se = D.floatingLabel), "lineRipple" in D && n(6, Le = D.lineRipple), "notchedOutline" in D && n(7, Ve = D.notchedOutline), "$$scope" in D && n(87, r = D.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*input*/
    4 && n(33, i = Q && Q.getElement()), t.$$.dirty[0] & /*invalid, updateInvalid*/
    524290 | t.$$.dirty[1] & /*instance*/
    8388608 && ye && ye.isValid() !== !w && (z ? n(1, w = !ye.isValid()) : ye.setValid(!w)), t.$$.dirty[1] & /*instance, validateOnValueChange*/
    8519680 && ye && ye.getValidateOnValueChange() !== ve && ye.setValidateOnValueChange(d(ve) ? !1 : ve), t.$$.dirty[1] & /*instance, useNativeValidation*/
    8650752 && ye && ye.setUseNativeValidation(d(be) ? !0 : be), t.$$.dirty[0] & /*disabled*/
    4096 | t.$$.dirty[1] & /*instance*/
    8388608 && ye && ye.setDisabled(E), t.$$.dirty[0] & /*value*/
    1 | t.$$.dirty[1] & /*instance, previousValue*/
    25165824 && ye && H && jt !== T) {
      n(55, jt = T);
      const D = `${T}`;
      ye.getValue() !== D && ye.setValue(D);
    }
  }, [
    T,
    w,
    Q,
    q,
    L,
    Se,
    Le,
    Ve,
    m,
    h,
    _,
    p,
    E,
    S,
    M,
    A,
    v,
    I,
    g,
    z,
    Z,
    ke,
    X,
    k,
    J,
    Xe,
    je,
    rt,
    at,
    dt,
    kt,
    $t,
    Lt,
    i,
    c,
    d,
    H,
    Ie,
    wn,
    $,
    te,
    Ze,
    Yt,
    Jt,
    xt,
    ks,
    s,
    a,
    ve,
    be,
    Ls,
    Ds,
    si,
    en,
    ye,
    jt,
    o,
    Rs,
    Os,
    Hs,
    Ms,
    $s,
    Ns,
    Bs,
    Us,
    Ps,
    Fs,
    zs,
    Vs,
    qs,
    js,
    Zs,
    Gs,
    Ks,
    Ws,
    Xs,
    Qs,
    Ys,
    Js,
    xs,
    er,
    tr,
    nr,
    ir,
    lr,
    sr,
    rr,
    r
  ];
}
class Zn extends ue {
  constructor(e) {
    super(), ae(
      this,
      e,
      Vd,
      zd,
      le,
      {
        use: 8,
        class: 9,
        style: 10,
        ripple: 11,
        disabled: 12,
        required: 13,
        textarea: 14,
        variant: 15,
        noLabel: 16,
        label: 17,
        type: 18,
        value: 0,
        files: 3,
        invalid: 1,
        updateInvalid: 19,
        dirty: 4,
        prefix: 20,
        suffix: 21,
        validateOnValueChange: 48,
        useNativeValidation: 49,
        withLeadingIcon: 22,
        withTrailingIcon: 23,
        input: 2,
        floatingLabel: 5,
        lineRipple: 6,
        notchedOutline: 7,
        focus: 50,
        blur: 51,
        layout: 52,
        getElement: 53
      },
      null,
      [-1, -1, -1, -1]
    );
  }
  get use() {
    return this.$$.ctx[8];
  }
  set use(e) {
    this.$$set({ use: e }), y();
  }
  get class() {
    return this.$$.ctx[9];
  }
  set class(e) {
    this.$$set({ class: e }), y();
  }
  get style() {
    return this.$$.ctx[10];
  }
  set style(e) {
    this.$$set({ style: e }), y();
  }
  get ripple() {
    return this.$$.ctx[11];
  }
  set ripple(e) {
    this.$$set({ ripple: e }), y();
  }
  get disabled() {
    return this.$$.ctx[12];
  }
  set disabled(e) {
    this.$$set({ disabled: e }), y();
  }
  get required() {
    return this.$$.ctx[13];
  }
  set required(e) {
    this.$$set({ required: e }), y();
  }
  get textarea() {
    return this.$$.ctx[14];
  }
  set textarea(e) {
    this.$$set({ textarea: e }), y();
  }
  get variant() {
    return this.$$.ctx[15];
  }
  set variant(e) {
    this.$$set({ variant: e }), y();
  }
  get noLabel() {
    return this.$$.ctx[16];
  }
  set noLabel(e) {
    this.$$set({ noLabel: e }), y();
  }
  get label() {
    return this.$$.ctx[17];
  }
  set label(e) {
    this.$$set({ label: e }), y();
  }
  get type() {
    return this.$$.ctx[18];
  }
  set type(e) {
    this.$$set({ type: e }), y();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), y();
  }
  get files() {
    return this.$$.ctx[3];
  }
  set files(e) {
    this.$$set({ files: e }), y();
  }
  get invalid() {
    return this.$$.ctx[1];
  }
  set invalid(e) {
    this.$$set({ invalid: e }), y();
  }
  get updateInvalid() {
    return this.$$.ctx[19];
  }
  set updateInvalid(e) {
    this.$$set({ updateInvalid: e }), y();
  }
  get dirty() {
    return this.$$.ctx[4];
  }
  set dirty(e) {
    this.$$set({ dirty: e }), y();
  }
  get prefix() {
    return this.$$.ctx[20];
  }
  set prefix(e) {
    this.$$set({ prefix: e }), y();
  }
  get suffix() {
    return this.$$.ctx[21];
  }
  set suffix(e) {
    this.$$set({ suffix: e }), y();
  }
  get validateOnValueChange() {
    return this.$$.ctx[48];
  }
  set validateOnValueChange(e) {
    this.$$set({ validateOnValueChange: e }), y();
  }
  get useNativeValidation() {
    return this.$$.ctx[49];
  }
  set useNativeValidation(e) {
    this.$$set({ useNativeValidation: e }), y();
  }
  get withLeadingIcon() {
    return this.$$.ctx[22];
  }
  set withLeadingIcon(e) {
    this.$$set({ withLeadingIcon: e }), y();
  }
  get withTrailingIcon() {
    return this.$$.ctx[23];
  }
  set withTrailingIcon(e) {
    this.$$set({ withTrailingIcon: e }), y();
  }
  get input() {
    return this.$$.ctx[2];
  }
  set input(e) {
    this.$$set({ input: e }), y();
  }
  get floatingLabel() {
    return this.$$.ctx[5];
  }
  set floatingLabel(e) {
    this.$$set({ floatingLabel: e }), y();
  }
  get lineRipple() {
    return this.$$.ctx[6];
  }
  set lineRipple(e) {
    this.$$set({ lineRipple: e }), y();
  }
  get notchedOutline() {
    return this.$$.ctx[7];
  }
  set notchedOutline(e) {
    this.$$set({ notchedOutline: e }), y();
  }
  get focus() {
    return this.$$.ctx[50];
  }
  get blur() {
    return this.$$.ctx[51];
  }
  get layout() {
    return this.$$.ctx[52];
  }
  get getElement() {
    return this.$$.ctx[53];
  }
}
oe(
  Zn,
  { use: {}, class: {}, style: {}, ripple: { type: "Boolean" }, disabled: { type: "Boolean" }, required: { type: "Boolean" }, textarea: { type: "Boolean" }, variant: {}, noLabel: { type: "Boolean" }, label: {}, type: {}, value: {}, files: {}, invalid: {}, updateInvalid: {}, dirty: { type: "Boolean" }, prefix: {}, suffix: {}, validateOnValueChange: {}, useNativeValidation: {}, withLeadingIcon: {}, withTrailingIcon: {}, input: {}, floatingLabel: {}, lineRipple: {}, notchedOutline: {} },
  [
    "label",
    "leadingIcon",
    "default",
    "internalCounter",
    "prefix",
    "suffix",
    "trailingIcon",
    "ripple",
    "helper"
  ],
  ["focus", "blur", "layout", "getElement"],
  !0
);
function qd(t, e) {
  function n(i) {
    const l = i.target;
    !t.contains(l) && e();
  }
  return document.body.addEventListener("click", n), {
    destroy() {
      document.body.removeEventListener("click", n);
    }
  };
}
function jd(t) {
  We(t, "svelte-w9m23z", "main.template-builder-container.svelte-w9m23z.svelte-w9m23z{margin-top:3rem;display:flex;justify-content:center}.header-container.svelte-w9m23z.svelte-w9m23z{border-bottom:1px solid rgba(128, 128, 128, 0.27);padding:0.75rem 0.75rem 0.25rem 0.25rem}.header.svelte-w9m23z.svelte-w9m23z{display:flex;width:100%;justify-content:space-between;align-items:center}.template-title.svelte-w9m23z.svelte-w9m23z{display:flex;align-items:center;cursor:pointer}.template-title.svelte-w9m23z .title.svelte-w9m23z{min-width:10rem}.template-options.svelte-w9m23z.svelte-w9m23z{width:20%;display:flex;justify-content:space-between}.template-metadata.svelte-w9m23z.svelte-w9m23z{display:flex;flex-direction:column;width:20%;max-width:25%;gap:1rem;position:absolute;z-index:50;left:2%;border-radius:0.5rem;padding:1.5rem;background-color:white}");
}
function Zd(t) {
  let e;
  return {
    c() {
      e = Ee("open template");
    },
    m(n, i) {
      O(n, e, i);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Gd(t) {
  let e;
  return {
    c() {
      e = Ee("save template");
    },
    m(n, i) {
      O(n, e, i);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Kd(t) {
  let e;
  return {
    c() {
      e = Ee("Export");
    },
    m(n, i) {
      O(n, e, i);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Dl(t) {
  let e, n, i, l, s, o, r, a, u;
  function c(h) {
    t[10](h);
  }
  let f = { variant: "outlined", label: "Title" };
  /*title*/
  t[0] !== void 0 && (f.value = /*title*/
  t[0]), n = new Zn({ props: f }), ie.push(() => ct(n, "value", c));
  function d(h) {
    t[11](h);
  }
  let m = {
    variant: "outlined",
    label: "Description",
    textarea: !0,
    input$rows: 4,
    input$cols: 30,
    input$resizable: !1
  };
  return (
    /*description*/
    t[1] !== void 0 && (m.value = /*description*/
    t[1]), s = new Zn({ props: m }), ie.push(() => ct(s, "value", d)), {
      c() {
        e = V("div"), P(n.$$.fragment), l = K(), P(s.$$.fragment), N(e, "class", "template-metadata svelte-w9m23z");
      },
      m(h, _) {
        O(h, e, _), B(n, e, null), j(e, l), B(s, e, null), r = !0, a || (u = [
          ee(qd.call(
            null,
            e,
            /*closeTitleAndDescription*/
            t[7]
          )),
          x(e, "click", Nl(
            /*click_handler*/
            t[9]
          ))
        ], a = !0);
      },
      p(h, _) {
        const p = {};
        !i && _ & /*title*/
        1 && (i = !0, p.value = /*title*/
        h[0], ut(() => i = !1)), n.$set(p);
        const E = {};
        !o && _ & /*description*/
        2 && (o = !0, E.value = /*description*/
        h[1], ut(() => o = !1)), s.$set(E);
      },
      i(h) {
        r || (b(n.$$.fragment, h), b(s.$$.fragment, h), r = !0);
      },
      o(h) {
        C(n.$$.fragment, h), C(s.$$.fragment, h), r = !1;
      },
      d(h) {
        h && R(e), U(n), U(s), a = !1, Te(u);
      }
    }
  );
}
function Rl(t) {
  let e, n;
  return e = new ys({
    props: { templateId: (
      /*templateId*/
      t[3]
    ) }
  }), {
    c() {
      P(e.$$.fragment);
    },
    m(i, l) {
      B(e, i, l), n = !0;
    },
    p(i, l) {
      const s = {};
      l & /*templateId*/
      8 && (s.templateId = /*templateId*/
      i[3]), e.$set(s);
    },
    i(i) {
      n || (b(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      U(e, i);
    }
  };
}
function Wd(t) {
  let e, n, i, l, s, o, r, a, u, c, f, d, m, h, _, p, E, S, M, A, v;
  s = new nt({
    props: { icon: "arrow_back", color: "black" }
  }), s.$on(
    "click",
    /*navigateToOverviewPage*/
    t[5]
  ), f = new ft({
    props: {
      $$slots: { default: [Zd] },
      $$scope: { ctx: t }
    }
  }), m = new ft({
    props: {
      $$slots: { default: [Gd] },
      $$scope: { ctx: t }
    }
  }), _ = new ft({
    props: {
      variant: "raised",
      $$slots: { default: [Kd] },
      $$scope: { ctx: t }
    }
  });
  let I = (
    /*isMetadataVisible*/
    t[2] && Dl(t)
  ), g = (
    /*templateId*/
    t[3] && Rl(t)
  );
  return {
    c() {
      e = V("div"), n = V("header"), i = V("div"), l = V("div"), P(s.$$.fragment), o = K(), r = V("div"), a = Ee(
        /*templateTitle*/
        t[4]
      ), u = K(), c = V("div"), P(f.$$.fragment), d = K(), P(m.$$.fragment), h = K(), P(_.$$.fragment), p = K(), I && I.c(), E = K(), S = V("main"), g && g.c(), N(r, "class", "title svelte-w9m23z"), N(l, "class", "template-title svelte-w9m23z"), N(c, "class", "template-options svelte-w9m23z"), N(i, "class", "header svelte-w9m23z"), N(n, "class", "header-container svelte-w9m23z"), N(S, "class", "template-builder-container svelte-w9m23z"), N(e, "class", "template-creation-container");
    },
    m(T, q) {
      O(T, e, q), j(e, n), j(n, i), j(i, l), B(s, l, null), j(l, o), j(l, r), j(r, a), j(i, u), j(i, c), B(f, c, null), j(c, d), B(m, c, null), j(i, h), B(_, i, null), j(e, p), I && I.m(e, null), j(e, E), j(e, S), g && g.m(S, null), M = !0, A || (v = x(r, "click", Nl(
        /*displayTitleAndDescription*/
        t[6]
      )), A = !0);
    },
    p(T, [q]) {
      (!M || q & /*templateTitle*/
      16) && Ye(
        a,
        /*templateTitle*/
        T[4]
      );
      const H = {};
      q & /*$$scope*/
      8192 && (H.$$scope = { dirty: q, ctx: T }), f.$set(H);
      const w = {};
      q & /*$$scope*/
      8192 && (w.$$scope = { dirty: q, ctx: T }), m.$set(w);
      const z = {};
      q & /*$$scope*/
      8192 && (z.$$scope = { dirty: q, ctx: T }), _.$set(z), /*isMetadataVisible*/
      T[2] ? I ? (I.p(T, q), q & /*isMetadataVisible*/
      4 && b(I, 1)) : (I = Dl(T), I.c(), b(I, 1), I.m(e, E)) : I && (ge(), C(I, 1, 1, () => {
        I = null;
      }), _e()), /*templateId*/
      T[3] ? g ? (g.p(T, q), q & /*templateId*/
      8 && b(g, 1)) : (g = Rl(T), g.c(), b(g, 1), g.m(S, null)) : g && (ge(), C(g, 1, 1, () => {
        g = null;
      }), _e());
    },
    i(T) {
      M || (b(s.$$.fragment, T), b(f.$$.fragment, T), b(m.$$.fragment, T), b(_.$$.fragment, T), b(I), b(g), M = !0);
    },
    o(T) {
      C(s.$$.fragment, T), C(f.$$.fragment, T), C(m.$$.fragment, T), C(_.$$.fragment, T), C(I), C(g), M = !1;
    },
    d(T) {
      T && R(e), U(s), U(f), U(m), U(_), I && I.d(), g && g.d(), A = !1, v();
    }
  };
}
const Xd = "Untitled Document";
function Qd(t, e, n) {
  let i, { params: l = {} } = e, s = "", o = "", r = !1, a;
  Qe(() => {
    if (n(3, a = l.id), a) {
      const p = At.getDocumentTemplate(a);
      p && (n(0, s = p.getAttribute("title") || ""), n(1, o = p.getAttribute("description") || ""));
    }
  });
  function u() {
    !s && !confirm("No title has been provided. Do you want to proceed?") || is("/");
  }
  function c() {
    n(2, r = !0);
  }
  function f() {
    n(2, r = !1), a ? d() : console.error("Template ID is null. Cannot update title and description.");
  }
  function d() {
    At.editDocumentTemplateTitleAndDescription(a, s, o);
  }
  function m(p) {
    mt.call(this, t, p);
  }
  function h(p) {
    s = p, n(0, s);
  }
  function _(p) {
    o = p, n(1, o);
  }
  return t.$$set = (p) => {
    "params" in p && n(8, l = p.params);
  }, t.$$.update = () => {
    t.$$.dirty & /*title*/
    1 && n(4, i = s.length === 0 ? Xd : s);
  }, [
    s,
    o,
    r,
    a,
    i,
    u,
    c,
    f,
    l,
    m,
    h,
    _
  ];
}
class ws extends ue {
  constructor(e) {
    super(), ae(this, e, Qd, Wd, le, { params: 8 }, jd);
  }
  get params() {
    return this.$$.ctx[8];
  }
  set params(e) {
    this.$$set({ params: e }), y();
  }
}
oe(ws, { params: {} }, [], [], !0);
const Yd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ws
}, Symbol.toStringTag, { value: "Module" }));
function Jd(t) {
  if (!t)
    throw Error("Parameter args is required");
  if (!t.component == !t.asyncComponent)
    throw Error("One and only one of component and asyncComponent is required");
  if (t.component && (t.asyncComponent = () => Promise.resolve(t.component)), typeof t.asyncComponent != "function")
    throw Error("Parameter asyncComponent must be a function");
  if (t.conditions) {
    Array.isArray(t.conditions) || (t.conditions = [t.conditions]);
    for (let n = 0; n < t.conditions.length; n++)
      if (!t.conditions[n] || typeof t.conditions[n] != "function")
        throw Error("Invalid parameter conditions[" + n + "]");
  }
  return t.loadingComponent && (t.asyncComponent.loading = t.loadingComponent, t.asyncComponent.loadingParams = t.loadingParams || void 0), {
    component: t.asyncComponent,
    userData: t.userData,
    conditions: t.conditions && t.conditions.length ? t.conditions : void 0,
    props: t.props && Object.keys(t.props).length ? t.props : {},
    _sveltesparouter: !0
  };
}
const xd = {
  "/": jn,
  "/create/:id": Jd({
    asyncComponent: () => Promise.resolve().then(() => Yd)
  }),
  "*": jn
}, e1 = "@oscd-plugins/auto-doc", t1 = "1.1.0", n1 = "module", i1 = {
  dev: "vite --mode STAND_ALONE",
  build: "vite build",
  "_build:watch": "NODE_ENV=development vite build --watch",
  "build:watch": "concurrently 'npm:_build:watch' 'npm:preview'",
  preview: "vite preview --port 55908",
  check: "svelte-check --tsconfig ./tsconfig.json",
  "check:watch": "npm run check -- --watch",
  version: "echo $npm_package_version",
  test: "vitest"
}, l1 = {
  "@oscd-plugins/core": "workspace:^",
  "@oscd-plugins/ui": "workspace:^",
  "@oscd-plugins/uilib": "workspace:^",
  "@smui/button": "7.0.0",
  "@smui/checkbox": "^7.0.0",
  "@smui/data-table": "^7.0.0",
  "@smui/icon-button": "^7.0.0",
  "@smui/textfield": "^7.0.0",
  "svelte-spa-router": "^4.0.1",
  uuid: "^10.0.0"
}, s1 = {
  "@playwright/test": "^1.28.1",
  "@sveltejs/vite-plugin-svelte": "^3.1.1",
  "@tsconfig/svelte": "^5.0.4",
  "@types/uuid": "^10.0.0",
  concurrently: "^7.6.0",
  playwright: "^1.48.1",
  sass: "^1.61.0",
  svelte: "^4.2.18",
  "svelte-check": "^3.8.5",
  tslib: "^2.6.3",
  typescript: "^5.5.3",
  vite: "^5.4.1",
  "vite-plugin-css-injected-by-js": "^3.1.1",
  vitest: "^2.1.3"
}, Ol = {
  name: e1,
  private: !0,
  version: t1,
  type: n1,
  scripts: i1,
  dependencies: l1,
  devDependencies: s1
};
function r1(t) {
  We(t, "svelte-u9zh1g", ".file-missing.svelte-u9zh1g.svelte-u9zh1g{padding-top:20px}.file-missing.svelte-u9zh1g p.svelte-u9zh1g{text-align:center}.banner.svelte-u9zh1g.svelte-u9zh1g{align-items:center;justify-content:space-between;padding:0.25rem 2rem;width:100%;background-color:var(--mdc-theme-error);color:white;position:fixed;top:var(--header-height);box-sizing:border-box;z-index:1}");
}
function a1(t) {
  let e;
  return {
    c() {
      e = V("div"), e.innerHTML = '<p class="svelte-u9zh1g">No XML file loaded</p>', N(e, "class", "file-missing svelte-u9zh1g");
    },
    m(n, i) {
      O(n, e, i);
    },
    p: re,
    i: re,
    o: re,
    d(n) {
      n && R(e);
    }
  };
}
function o1(t) {
  let e, n, i, l = (
    /*showBanner*/
    t[2] && !0 && Hl(t)
  );
  return n = new ls({ props: { routes: xd } }), {
    c() {
      l && l.c(), e = K(), P(n.$$.fragment);
    },
    m(s, o) {
      l && l.m(s, o), O(s, e, o), B(n, s, o), i = !0;
    },
    p(s, o) {
      /*showBanner*/
      s[2] ? l ? (l.p(s, o), o & /*showBanner*/
      4 && b(l, 1)) : (l = Hl(s), l.c(), b(l, 1), l.m(e.parentNode, e)) : l && (ge(), C(l, 1, 1, () => {
        l = null;
      }), _e());
    },
    i(s) {
      i || (b(l), b(n.$$.fragment, s), i = !0);
    },
    o(s) {
      C(l), C(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && R(e), l && l.d(s), U(n, s);
    }
  };
}
function Hl(t) {
  let e, n, i, l, s;
  return i = new nt({ props: { icon: "close", color: "white" } }), i.$on(
    "click",
    /*click_handler*/
    t[5]
  ), {
    c() {
      e = V("div"), n = Ee(`This plugin is in test phase and not suitable for production use.
					`), P(i.$$.fragment), N(e, "class", "banner svelte-u9zh1g"), N(e, "style", l = /*showBanner*/
      t[2] ? "display:flex;" : "display:none;");
    },
    m(o, r) {
      O(o, e, r), j(e, n), B(i, e, null), s = !0;
    },
    p(o, r) {
      (!s || r & /*showBanner*/
      4 && l !== (l = /*showBanner*/
      o[2] ? "display:flex;" : "display:none;")) && N(e, "style", l);
    },
    i(o) {
      s || (b(i.$$.fragment, o), s = !0);
    },
    o(o) {
      C(i.$$.fragment, o), s = !1;
    },
    d(o) {
      o && R(e), U(i);
    }
  };
}
function u1(t) {
  let e, n, i, l;
  const s = [o1, a1], o = [];
  function r(a, u) {
    return (
      /*xmlDocument*/
      a[0] ? 0 : 1
    );
  }
  return n = r(t), i = o[n] = s[n](t), {
    c() {
      e = V("auto-doc"), i.c(), zt(e, "class", "auto-doc");
    },
    m(a, u) {
      O(a, e, u), o[n].m(e, null), l = !0;
    },
    p(a, u) {
      let c = n;
      n = r(a), n === c ? o[n].p(a, u) : (ge(), C(o[c], 1, 1, () => {
        o[c] = null;
      }), _e(), i = o[n], i ? i.p(a, u) : (i = o[n] = s[n](a), i.c()), b(i, 1), i.m(e, null));
    },
    i(a) {
      l || (b(i), l = !0);
    },
    o(a) {
      C(i), l = !1;
    },
    d(a) {
      a && R(e), o[n].d();
    }
  };
}
function c1(t) {
  let e, n, i, l, s, o;
  return s = new ns({
    props: {
      pluginType: (
        /*pluginType*/
        t[1]
      ),
      $$slots: { default: [u1] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = V("input"), n = K(), i = V("input"), l = K(), P(s.$$.fragment), N(e, "type", "hidden"), N(e, "name", "package-name"), e.value = Ol.name, N(i, "type", "hidden"), N(i, "name", "package-version"), i.value = Ol.version;
    },
    m(r, a) {
      O(r, e, a), O(r, n, a), O(r, i, a), O(r, l, a), B(s, r, a), o = !0;
    },
    p(r, [a]) {
      const u = {};
      a & /*pluginType*/
      2 && (u.pluginType = /*pluginType*/
      r[1]), a & /*$$scope, showBanner, xmlDocument*/
      133 && (u.$$scope = { dirty: a, ctx: r }), s.$set(u);
    },
    i(r) {
      o || (b(s.$$.fragment, r), o = !0);
    },
    o(r) {
      C(s.$$.fragment, r), o = !1;
    },
    d(r) {
      r && (R(e), R(n), R(i), R(l)), U(s, r);
    }
  };
}
function f1(t, e, n) {
  let { xmlDocument: i = void 0 } = e, { pluginHostElement: l } = e, { pluginType: s = "editor" } = e, { editCount: o } = e, r = !0;
  async function a({ updateTrigger: c, newXMLDocument: f, newPluginHostElement: d }) {
    await En.init({ newXMLDocument: f, newPluginHostElement: d }), At.init();
  }
  const u = () => n(2, r = !r);
  return t.$$set = (c) => {
    "xmlDocument" in c && n(0, i = c.xmlDocument), "pluginHostElement" in c && n(3, l = c.pluginHostElement), "pluginType" in c && n(1, s = c.pluginType), "editCount" in c && n(4, o = c.editCount);
  }, t.$$.update = () => {
    t.$$.dirty & /*editCount, xmlDocument, pluginHostElement*/
    25 && a({
      updateTrigger: o,
      newXMLDocument: i,
      newPluginHostElement: l
    });
  }, [
    i,
    s,
    r,
    l,
    o,
    u
  ];
}
class Ss extends ue {
  constructor(e) {
    super(), ae(
      this,
      e,
      f1,
      c1,
      le,
      {
        xmlDocument: 0,
        pluginHostElement: 3,
        pluginType: 1,
        editCount: 4
      },
      r1
    );
  }
  get xmlDocument() {
    return this.$$.ctx[0];
  }
  set xmlDocument(e) {
    this.$$set({ xmlDocument: e }), y();
  }
  get pluginHostElement() {
    return this.$$.ctx[3];
  }
  set pluginHostElement(e) {
    this.$$set({ pluginHostElement: e }), y();
  }
  get pluginType() {
    return this.$$.ctx[1];
  }
  set pluginType(e) {
    this.$$set({ pluginType: e }), y();
  }
  get editCount() {
    return this.$$.ctx[4];
  }
  set editCount(e) {
    this.$$set({ editCount: e }), y();
  }
}
oe(Ss, { xmlDocument: {}, pluginHostElement: {}, pluginType: {}, editCount: {} }, [], [], !0);
const m1 = Io({
  pluginType: "editor",
  isStandAlone: !1,
  pluginComponent: Ss
});
export {
  m1 as default
};
