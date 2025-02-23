/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Cs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const $e = {}, rr = [], Mt = () => {
}, Km = () => !1, ko = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ts = (e) => e.startsWith("onUpdate:"), tt = Object.assign, Os = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ym = Object.prototype.hasOwnProperty, Ae = (e, t) => Ym.call(e, t), le = Array.isArray, ir = (e) => pi(e) === "[object Map]", _o = (e) => pi(e) === "[object Set]", Cl = (e) => pi(e) === "[object Date]", fe = (e) => typeof e == "function", Ue = (e) => typeof e == "string", Lt = (e) => typeof e == "symbol", Le = (e) => e !== null && typeof e == "object", yu = (e) => (Le(e) || fe(e)) && fe(e.then) && fe(e.catch), wu = Object.prototype.toString, pi = (e) => wu.call(e), Xm = (e) => pi(e).slice(8, -1), xu = (e) => pi(e) === "[object Object]", As = (e) => Ue(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Vr = /* @__PURE__ */ Cs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), So = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Zm = /-(\w)/g, At = So(
  (e) => e.replace(Zm, (t, n) => n ? n.toUpperCase() : "")
), Jm = /\B([A-Z])/g, Kn = So(
  (e) => e.replace(Jm, "-$1").toLowerCase()
), Eo = So((e) => e.charAt(0).toUpperCase() + e.slice(1)), ia = So(
  (e) => e ? `on${Eo(e)}` : ""
), xn = (e, t) => !Object.is(e, t), Bi = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ku = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Qm = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ep = (e) => {
  const t = Ue(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Tl;
const Co = () => Tl || (Tl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function hi(e) {
  if (le(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = Ue(r) ? ip(r) : hi(r);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Ue(e) || Le(e))
    return e;
}
const tp = /;(?![^(]*\))/g, np = /:([^]+)/, rp = /\/\*[^]*?\*\//g;
function ip(e) {
  const t = {};
  return e.replace(rp, "").split(tp).forEach((n) => {
    if (n) {
      const r = n.split(np);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ye(e) {
  let t = "";
  if (Ue(e))
    t = e;
  else if (le(e))
    for (let n = 0; n < e.length; n++) {
      const r = ye(e[n]);
      r && (t += r + " ");
    }
  else if (Le(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const op = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ap = /* @__PURE__ */ Cs(op);
function _u(e) {
  return !!e || e === "";
}
function sp(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = To(e[r], t[r]);
  return n;
}
function To(e, t) {
  if (e === t) return !0;
  let n = Cl(e), r = Cl(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Lt(e), r = Lt(t), n || r)
    return e === t;
  if (n = le(e), r = le(t), n || r)
    return n && r ? sp(e, t) : !1;
  if (n = Le(e), r = Le(t), n || r) {
    if (!n || !r)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const a in e) {
      const s = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (s && !l || !s && l || !To(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Su(e, t) {
  return e.findIndex((n) => To(n, t));
}
const Eu = (e) => !!(e && e.__v_isRef === !0), A = (e) => Ue(e) ? e : e == null ? "" : le(e) || Le(e) && (e.toString === wu || !fe(e.toString)) ? Eu(e) ? A(e.value) : JSON.stringify(e, Cu, 2) : String(e), Cu = (e, t) => Eu(t) ? Cu(e, t.value) : ir(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, i], o) => (n[oa(r, o) + " =>"] = i, n),
    {}
  )
} : _o(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => oa(n))
} : Lt(t) ? oa(t) : Le(t) && !le(t) && !xu(t) ? String(t) : t, oa = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Lt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var lp = { NODE_ENV: "production" };
let _t;
class dp {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = _t, !t && _t && (this.index = (_t.scopes || (_t.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = _t;
      try {
        return _t = this, t();
      } finally {
        _t = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    _t = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    _t = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function up() {
  return _t;
}
let Ne;
const aa = /* @__PURE__ */ new WeakSet();
class Tu {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, _t && _t.active && _t.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, aa.has(this) && (aa.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Au(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ol(this), Du(this);
    const t = Ne, n = $t;
    Ne = this, $t = !0;
    try {
      return this.fn();
    } finally {
      Pu(this), Ne = t, $t = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ms(t);
      this.deps = this.depsTail = void 0, Ol(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? aa.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ma(this) && this.run();
  }
  get dirty() {
    return Ma(this);
  }
}
let Ou = 0, Ur, Br;
function Au(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Br, Br = e;
    return;
  }
  e.next = Ur, Ur = e;
}
function Ds() {
  Ou++;
}
function Ps() {
  if (--Ou > 0)
    return;
  if (Br) {
    let t = Br;
    for (Br = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Ur; ) {
    let t = Ur;
    for (Ur = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Du(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Pu(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const i = r.prevDep;
    r.version === -1 ? (r === n && (n = i), Ms(r), cp(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i;
  }
  e.deps = t, e.depsTail = n;
}
function Ma(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Mu(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Mu(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Jr))
    return;
  e.globalVersion = Jr;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Ma(e)) {
    e.flags &= -3;
    return;
  }
  const n = Ne, r = $t;
  Ne = e, $t = !0;
  try {
    Du(e);
    const i = e.fn(e._value);
    (t.version === 0 || xn(i, e._value)) && (e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Ne = n, $t = r, Pu(e), e.flags &= -3;
  }
}
function Ms(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: i } = e;
  if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      Ms(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function cp(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let $t = !0;
const $u = [];
function an() {
  $u.push($t), $t = !1;
}
function sn() {
  const e = $u.pop();
  $t = e === void 0 ? !0 : e;
}
function Ol(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Ne;
    Ne = void 0;
    try {
      t();
    } finally {
      Ne = n;
    }
  }
}
let Jr = 0;
class fp {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class $s {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!Ne || !$t || Ne === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ne)
      n = this.activeLink = new fp(Ne, this), Ne.deps ? (n.prevDep = Ne.depsTail, Ne.depsTail.nextDep = n, Ne.depsTail = n) : Ne.deps = Ne.depsTail = n, Lu(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Ne.depsTail, n.nextDep = void 0, Ne.depsTail.nextDep = n, Ne.depsTail = n, Ne.deps === n && (Ne.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Jr++, this.notify(t);
  }
  notify(t) {
    Ds();
    try {
      lp.NODE_ENV;
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ps();
    }
  }
}
function Lu(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Lu(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const $a = /* @__PURE__ */ new WeakMap(), Vn = Symbol(
  ""
), La = Symbol(
  ""
), Qr = Symbol(
  ""
);
function ot(e, t, n) {
  if ($t && Ne) {
    let r = $a.get(e);
    r || $a.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || (r.set(n, i = new $s()), i.map = r, i.key = n), i.track();
  }
}
function Zt(e, t, n, r, i, o) {
  const a = $a.get(e);
  if (!a) {
    Jr++;
    return;
  }
  const s = (l) => {
    l && l.trigger();
  };
  if (Ds(), t === "clear")
    a.forEach(s);
  else {
    const l = le(e), d = l && As(n);
    if (l && n === "length") {
      const u = Number(r);
      a.forEach((c, f) => {
        (f === "length" || f === Qr || !Lt(f) && f >= u) && s(c);
      });
    } else
      switch ((n !== void 0 || a.has(void 0)) && s(a.get(n)), d && s(a.get(Qr)), t) {
        case "add":
          l ? d && s(a.get("length")) : (s(a.get(Vn)), ir(e) && s(a.get(La)));
          break;
        case "delete":
          l || (s(a.get(Vn)), ir(e) && s(a.get(La)));
          break;
        case "set":
          ir(e) && s(a.get(Vn));
          break;
      }
  }
  Ps();
}
function Yn(e) {
  const t = se(e);
  return t === e ? t : (ot(t, "iterate", Qr), Ot(e) ? t : t.map(at));
}
function Oo(e) {
  return ot(e = se(e), "iterate", Qr), e;
}
const mp = {
  __proto__: null,
  [Symbol.iterator]() {
    return sa(this, Symbol.iterator, at);
  },
  concat(...e) {
    return Yn(this).concat(
      ...e.map((t) => le(t) ? Yn(t) : t)
    );
  },
  entries() {
    return sa(this, "entries", (e) => (e[1] = at(e[1]), e));
  },
  every(e, t) {
    return Kt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Kt(this, "filter", e, t, (n) => n.map(at), arguments);
  },
  find(e, t) {
    return Kt(this, "find", e, t, at, arguments);
  },
  findIndex(e, t) {
    return Kt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Kt(this, "findLast", e, t, at, arguments);
  },
  findLastIndex(e, t) {
    return Kt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Kt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return la(this, "includes", e);
  },
  indexOf(...e) {
    return la(this, "indexOf", e);
  },
  join(e) {
    return Yn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return la(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Kt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Or(this, "pop");
  },
  push(...e) {
    return Or(this, "push", e);
  },
  reduce(e, ...t) {
    return Al(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Al(this, "reduceRight", e, t);
  },
  shift() {
    return Or(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Kt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Or(this, "splice", e);
  },
  toReversed() {
    return Yn(this).toReversed();
  },
  toSorted(e) {
    return Yn(this).toSorted(e);
  },
  toSpliced(...e) {
    return Yn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Or(this, "unshift", e);
  },
  values() {
    return sa(this, "values", at);
  }
};
function sa(e, t, n) {
  const r = Oo(e), i = r[t]();
  return r !== e && !Ot(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.value && (o.value = n(o.value)), o;
  }), i;
}
const pp = Array.prototype;
function Kt(e, t, n, r, i, o) {
  const a = Oo(e), s = a !== e && !Ot(e), l = a[t];
  if (l !== pp[t]) {
    const c = l.apply(e, o);
    return s ? at(c) : c;
  }
  let d = n;
  a !== e && (s ? d = function(c, f) {
    return n.call(this, at(c), f, e);
  } : n.length > 2 && (d = function(c, f) {
    return n.call(this, c, f, e);
  }));
  const u = l.call(a, d, r);
  return s && i ? i(u) : u;
}
function Al(e, t, n, r) {
  const i = Oo(e);
  let o = n;
  return i !== e && (Ot(e) ? n.length > 3 && (o = function(a, s, l) {
    return n.call(this, a, s, l, e);
  }) : o = function(a, s, l) {
    return n.call(this, a, at(s), l, e);
  }), i[t](o, ...r);
}
function la(e, t, n) {
  const r = se(e);
  ot(r, "iterate", Qr);
  const i = r[t](...n);
  return (i === -1 || i === !1) && Ls(n[0]) ? (n[0] = se(n[0]), r[t](...n)) : i;
}
function Or(e, t, n = []) {
  an(), Ds();
  const r = se(e)[t].apply(e, n);
  return Ps(), sn(), r;
}
const hp = /* @__PURE__ */ Cs("__proto__,__v_isRef,__isVue"), Fu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Lt)
);
function bp(e) {
  Lt(e) || (e = String(e));
  const t = se(this);
  return ot(t, "has", e), t.hasOwnProperty(e);
}
class Nu {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (i ? o ? Uu : Vu : o ? ju : Ru).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const a = le(t);
    if (!i) {
      let l;
      if (a && (l = mp[n]))
        return l;
      if (n === "hasOwnProperty")
        return bp;
    }
    const s = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Qe(t) ? t : r
    );
    return (Lt(n) ? Fu.has(n) : hp(n)) || (i || ot(t, "get", n), o) ? s : Qe(s) ? a && As(n) ? s : s.value : Le(s) ? i ? Bu(s) : yr(s) : s;
  }
}
class zu extends Nu {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, i) {
    let o = t[n];
    if (!this._isShallow) {
      const l = qn(o);
      if (!Ot(r) && !qn(r) && (o = se(o), r = se(r)), !le(t) && Qe(o) && !Qe(r))
        return l ? !1 : (o.value = r, !0);
    }
    const a = le(t) && As(n) ? Number(n) < t.length : Ae(t, n), s = Reflect.set(
      t,
      n,
      r,
      Qe(t) ? t : i
    );
    return t === se(i) && (a ? xn(r, o) && Zt(t, "set", n, r) : Zt(t, "add", n, r)), s;
  }
  deleteProperty(t, n) {
    const r = Ae(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && r && Zt(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Lt(n) || !Fu.has(n)) && ot(t, "has", n), r;
  }
  ownKeys(t) {
    return ot(
      t,
      "iterate",
      le(t) ? "length" : Vn
    ), Reflect.ownKeys(t);
  }
}
class Iu extends Nu {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const gp = /* @__PURE__ */ new zu(), vp = /* @__PURE__ */ new Iu(), yp = /* @__PURE__ */ new zu(!0), wp = /* @__PURE__ */ new Iu(!0), Fa = (e) => e, Si = (e) => Reflect.getPrototypeOf(e);
function xp(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, o = se(i), a = ir(o), s = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, d = i[e](...r), u = n ? Fa : t ? Na : at;
    return !t && ot(
      o,
      "iterate",
      l ? La : Vn
    ), {
      // iterator protocol
      next() {
        const { value: c, done: f } = d.next();
        return f ? { value: c, done: f } : {
          value: s ? [u(c[0]), u(c[1])] : u(c),
          done: f
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Ei(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function kp(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw, a = se(o), s = se(i);
      e || (xn(i, s) && ot(a, "get", i), ot(a, "get", s));
      const { has: l } = Si(a), d = t ? Fa : e ? Na : at;
      if (l.call(a, i))
        return d(o.get(i));
      if (l.call(a, s))
        return d(o.get(s));
      o !== a && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && ot(se(i), "iterate", Vn), Reflect.get(i, "size", i);
    },
    has(i) {
      const o = this.__v_raw, a = se(o), s = se(i);
      return e || (xn(i, s) && ot(a, "has", i), ot(a, "has", s)), i === s ? o.has(i) : o.has(i) || o.has(s);
    },
    forEach(i, o) {
      const a = this, s = a.__v_raw, l = se(s), d = t ? Fa : e ? Na : at;
      return !e && ot(l, "iterate", Vn), s.forEach((u, c) => i.call(o, d(u), d(c), a));
    }
  };
  return tt(
    n,
    e ? {
      add: Ei("add"),
      set: Ei("set"),
      delete: Ei("delete"),
      clear: Ei("clear")
    } : {
      add(i) {
        !t && !Ot(i) && !qn(i) && (i = se(i));
        const o = se(this);
        return Si(o).has.call(o, i) || (o.add(i), Zt(o, "add", i, i)), this;
      },
      set(i, o) {
        !t && !Ot(o) && !qn(o) && (o = se(o));
        const a = se(this), { has: s, get: l } = Si(a);
        let d = s.call(a, i);
        d || (i = se(i), d = s.call(a, i));
        const u = l.call(a, i);
        return a.set(i, o), d ? xn(o, u) && Zt(a, "set", i, o) : Zt(a, "add", i, o), this;
      },
      delete(i) {
        const o = se(this), { has: a, get: s } = Si(o);
        let l = a.call(o, i);
        l || (i = se(i), l = a.call(o, i)), s && s.call(o, i);
        const d = o.delete(i);
        return l && Zt(o, "delete", i, void 0), d;
      },
      clear() {
        const i = se(this), o = i.size !== 0, a = i.clear();
        return o && Zt(
          i,
          "clear",
          void 0,
          void 0
        ), a;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = xp(i, e, t);
  }), n;
}
function Ao(e, t) {
  const n = kp(e, t);
  return (r, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(
    Ae(n, i) && i in r ? n : r,
    i,
    o
  );
}
const _p = {
  get: /* @__PURE__ */ Ao(!1, !1)
}, Sp = {
  get: /* @__PURE__ */ Ao(!1, !0)
}, Ep = {
  get: /* @__PURE__ */ Ao(!0, !1)
}, Cp = {
  get: /* @__PURE__ */ Ao(!0, !0)
}, Ru = /* @__PURE__ */ new WeakMap(), ju = /* @__PURE__ */ new WeakMap(), Vu = /* @__PURE__ */ new WeakMap(), Uu = /* @__PURE__ */ new WeakMap();
function Tp(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Op(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Tp(Xm(e));
}
function yr(e) {
  return qn(e) ? e : Do(
    e,
    !1,
    gp,
    _p,
    Ru
  );
}
function Ap(e) {
  return Do(
    e,
    !1,
    yp,
    Sp,
    ju
  );
}
function Bu(e) {
  return Do(
    e,
    !0,
    vp,
    Ep,
    Vu
  );
}
function Ci(e) {
  return Do(
    e,
    !0,
    wp,
    Cp,
    Uu
  );
}
function Do(e, t, n, r, i) {
  if (!Le(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const a = Op(e);
  if (a === 0)
    return e;
  const s = new Proxy(
    e,
    a === 2 ? r : n
  );
  return i.set(e, s), s;
}
function or(e) {
  return qn(e) ? or(e.__v_raw) : !!(e && e.__v_isReactive);
}
function qn(e) {
  return !!(e && e.__v_isReadonly);
}
function Ot(e) {
  return !!(e && e.__v_isShallow);
}
function Ls(e) {
  return e ? !!e.__v_raw : !1;
}
function se(e) {
  const t = e && e.__v_raw;
  return t ? se(t) : e;
}
function Dp(e) {
  return !Ae(e, "__v_skip") && Object.isExtensible(e) && ku(e, "__v_skip", !0), e;
}
const at = (e) => Le(e) ? yr(e) : e, Na = (e) => Le(e) ? Bu(e) : e;
function Qe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function X(e) {
  return Hu(e, !1);
}
function za(e) {
  return Hu(e, !0);
}
function Hu(e, t) {
  return Qe(e) ? e : new Pp(e, t);
}
class Pp {
  constructor(t, n) {
    this.dep = new $s(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : se(t), this._value = n ? t : at(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || Ot(t) || qn(t);
    t = r ? t : se(t), xn(t, n) && (this._rawValue = t, this._value = r ? t : at(t), this.dep.trigger());
  }
}
function ei(e) {
  return Qe(e) ? e.value : e;
}
const Mp = {
  get: (e, t, n) => t === "__v_raw" ? e : ei(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return Qe(i) && !Qe(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function qu(e) {
  return or(e) ? e : new Proxy(e, Mp);
}
class $p {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new $s(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Jr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ne !== this)
      return Au(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Mu(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Lp(e, t, n = !1) {
  let r, i;
  return fe(e) ? r = e : (r = e.get, i = e.set), new $p(r, i, n);
}
const Ti = {}, Ji = /* @__PURE__ */ new WeakMap();
let Nn;
function Fp(e, t = !1, n = Nn) {
  if (n) {
    let r = Ji.get(n);
    r || Ji.set(n, r = []), r.push(e);
  }
}
function Np(e, t, n = $e) {
  const { immediate: r, deep: i, once: o, scheduler: a, augmentJob: s, call: l } = n, d = (k) => i ? k : Ot(k) || i === !1 || i === 0 ? Jt(k, 1) : Jt(k);
  let u, c, f, m, b = !1, p = !1;
  if (Qe(e) ? (c = () => e.value, b = Ot(e)) : or(e) ? (c = () => d(e), b = !0) : le(e) ? (p = !0, b = e.some((k) => or(k) || Ot(k)), c = () => e.map((k) => {
    if (Qe(k))
      return k.value;
    if (or(k))
      return d(k);
    if (fe(k))
      return l ? l(k, 2) : k();
  })) : fe(e) ? t ? c = l ? () => l(e, 2) : e : c = () => {
    if (f) {
      an();
      try {
        f();
      } finally {
        sn();
      }
    }
    const k = Nn;
    Nn = u;
    try {
      return l ? l(e, 3, [m]) : e(m);
    } finally {
      Nn = k;
    }
  } : c = Mt, t && i) {
    const k = c, O = i === !0 ? 1 / 0 : i;
    c = () => Jt(k(), O);
  }
  const v = up(), g = () => {
    u.stop(), v && v.active && Os(v.effects, u);
  };
  if (o && t) {
    const k = t;
    t = (...O) => {
      k(...O), g();
    };
  }
  let w = p ? new Array(e.length).fill(Ti) : Ti;
  const y = (k) => {
    if (!(!(u.flags & 1) || !u.dirty && !k))
      if (t) {
        const O = u.run();
        if (i || b || (p ? O.some((D, R) => xn(D, w[R])) : xn(O, w))) {
          f && f();
          const D = Nn;
          Nn = u;
          try {
            const R = [
              O,
              // pass undefined as the old value when it's changed for the first time
              w === Ti ? void 0 : p && w[0] === Ti ? [] : w,
              m
            ];
            l ? l(t, 3, R) : (
              // @ts-expect-error
              t(...R)
            ), w = O;
          } finally {
            Nn = D;
          }
        }
      } else
        u.run();
  };
  return s && s(y), u = new Tu(c), u.scheduler = a ? () => a(y, !1) : y, m = (k) => Fp(k, !1, u), f = u.onStop = () => {
    const k = Ji.get(u);
    if (k) {
      if (l)
        l(k, 4);
      else
        for (const O of k) O();
      Ji.delete(u);
    }
  }, t ? r ? y(!0) : w = u.run() : a ? a(y.bind(null, !0), !0) : u.run(), g.pause = u.pause.bind(u), g.resume = u.resume.bind(u), g.stop = g, g;
}
function Jt(e, t = 1 / 0, n) {
  if (t <= 0 || !Le(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Qe(e))
    Jt(e.value, t, n);
  else if (le(e))
    for (let r = 0; r < e.length; r++)
      Jt(e[r], t, n);
  else if (_o(e) || ir(e))
    e.forEach((r) => {
      Jt(r, t, n);
    });
  else if (xu(e)) {
    for (const r in e)
      Jt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Jt(e[r], t, n);
  }
  return e;
}
var pn = { NODE_ENV: "production" };
const Hr = [];
let da = !1;
function zp(e, ...t) {
  if (da) return;
  da = !0, an();
  const n = Hr.length ? Hr[Hr.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = Ip();
  if (r)
    wr(
      r,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((o) => {
          var a, s;
          return (s = (a = o.toString) == null ? void 0 : a.call(o)) != null ? s : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: o }) => `at <${$c(n, o.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    i.length && o.push(`
`, ...Rp(i)), console.warn(...o);
  }
  sn(), da = !1;
}
function Ip() {
  let e = Hr[Hr.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function Rp(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...jp(n));
  }), t;
}
function jp({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, i = ` at <${$c(
    e.component,
    e.type,
    r
  )}`, o = ">" + n;
  return e.props ? [i, ...Vp(e.props), o] : [i + o];
}
function Vp(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Wu(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Wu(e, t, n) {
  return Ue(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Qe(t) ? (t = Wu(e, se(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : fe(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = se(t), n ? t : [`${e}=`, t]);
}
function wr(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    Po(i, t, n);
  }
}
function Ft(e, t, n, r) {
  if (fe(e)) {
    const i = wr(e, t, n, r);
    return i && yu(i) && i.catch((o) => {
      Po(o, t, n);
    }), i;
  }
  if (le(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(Ft(e[o], t, n, r));
    return i;
  }
}
function Po(e, t, n, r = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: a } = t && t.appContext.config || $e;
  if (t) {
    let s = t.parent;
    const l = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; s; ) {
      const u = s.ec;
      if (u) {
        for (let c = 0; c < u.length; c++)
          if (u[c](e, l, d) === !1)
            return;
      }
      s = s.parent;
    }
    if (o) {
      an(), wr(o, null, 10, [
        e,
        l,
        d
      ]), sn();
      return;
    }
  }
  Up(e, n, i, r, a);
}
function Up(e, t, n, r = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const mt = [];
let Vt = -1;
const ar = [];
let hn = null, Qn = 0;
const Gu = /* @__PURE__ */ Promise.resolve();
let Qi = null;
function tn(e) {
  const t = Qi || Gu;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Bp(e) {
  let t = Vt + 1, n = mt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = mt[r], o = ti(i);
    o < e || o === e && i.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Fs(e) {
  if (!(e.flags & 1)) {
    const t = ti(e), n = mt[mt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ti(n) ? mt.push(e) : mt.splice(Bp(t), 0, e), e.flags |= 1, Ku();
  }
}
function Ku() {
  Qi || (Qi = Gu.then(Xu));
}
function Hp(e) {
  le(e) ? ar.push(...e) : hn && e.id === -1 ? hn.splice(Qn + 1, 0, e) : e.flags & 1 || (ar.push(e), e.flags |= 1), Ku();
}
function Dl(e, t, n = Vt + 1) {
  for (; n < mt.length; n++) {
    const r = mt[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      mt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Yu(e) {
  if (ar.length) {
    const t = [...new Set(ar)].sort(
      (n, r) => ti(n) - ti(r)
    );
    if (ar.length = 0, hn) {
      hn.push(...t);
      return;
    }
    for (hn = t, Qn = 0; Qn < hn.length; Qn++) {
      const n = hn[Qn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    hn = null, Qn = 0;
  }
}
const ti = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Xu(e) {
  const t = Mt;
  try {
    for (Vt = 0; Vt < mt.length; Vt++) {
      const n = mt[Vt];
      n && !(n.flags & 8) && (pn.NODE_ENV !== "production" && t(n), n.flags & 4 && (n.flags &= -2), wr(
        n,
        n.i,
        n.i ? 15 : 14
      ), n.flags & 4 || (n.flags &= -2));
    }
  } finally {
    for (; Vt < mt.length; Vt++) {
      const n = mt[Vt];
      n && (n.flags &= -2);
    }
    Vt = -1, mt.length = 0, Yu(), Qi = null, (mt.length || ar.length) && Xu();
  }
}
let Je = null, Zu = null;
function eo(e) {
  const t = Je;
  return Je = e, Zu = e && e.type.__scopeId || null, t;
}
function te(e, t = Je, n) {
  if (!t || e._n)
    return e;
  const r = (...i) => {
    r._d && Hl(-1);
    const o = eo(t);
    let a;
    try {
      a = e(...i);
    } finally {
      eo(o), r._d && Hl(1);
    }
    return a;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Ns(e, t) {
  if (Je === null)
    return e;
  const n = No(Je), r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, a, s, l = $e] = t[i];
    o && (fe(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Jt(a), r.push({
      dir: o,
      instance: n,
      value: a,
      oldValue: void 0,
      arg: s,
      modifiers: l
    }));
  }
  return e;
}
function An(e, t, n, r) {
  const i = e.dirs, o = t && t.dirs;
  for (let a = 0; a < i.length; a++) {
    const s = i[a];
    o && (s.oldValue = o[a].value);
    let l = s.dir[r];
    l && (an(), Ft(l, n, 8, [
      e.el,
      s,
      e,
      t
    ]), sn());
  }
}
const Ju = Symbol("_vte"), Qu = (e) => e.__isTeleport, qr = (e) => e && (e.disabled || e.disabled === ""), Pl = (e) => e && (e.defer || e.defer === ""), Ml = (e) => typeof SVGElement < "u" && e instanceof SVGElement, $l = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ia = (e, t) => {
  const n = e && e.to;
  return Ue(n) ? t ? t(n) : null : n;
}, ec = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, i, o, a, s, l, d) {
    const {
      mc: u,
      pc: c,
      pbc: f,
      o: { insert: m, querySelector: b, createText: p, createComment: v }
    } = d, g = qr(t.props);
    let { shapeFlag: w, children: y, dynamicChildren: k } = t;
    if (e == null) {
      const O = t.el = p(""), D = t.anchor = p("");
      m(O, n, r), m(D, n, r);
      const R = (L, Z) => {
        w & 16 && (i && i.isCE && (i.ce._teleportTarget = L), u(
          y,
          L,
          Z,
          i,
          o,
          a,
          s,
          l
        ));
      }, W = () => {
        const L = t.target = Ia(t.props, b), Z = tc(L, t, p, m);
        L && (a !== "svg" && Ml(L) ? a = "svg" : a !== "mathml" && $l(L) && (a = "mathml"), g || (R(L, Z), Hi(t, !1)));
      };
      g && (R(n, D), Hi(t, !0)), Pl(t.props) ? ft(() => {
        W(), t.el.__isMounted = !0;
      }, o) : W();
    } else {
      if (Pl(t.props) && !e.el.__isMounted) {
        ft(() => {
          ec.process(
            e,
            t,
            n,
            r,
            i,
            o,
            a,
            s,
            l,
            d
          ), delete e.el.__isMounted;
        }, o);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const O = t.anchor = e.anchor, D = t.target = e.target, R = t.targetAnchor = e.targetAnchor, W = qr(e.props), L = W ? n : D, Z = W ? O : R;
      if (a === "svg" || Ml(D) ? a = "svg" : (a === "mathml" || $l(D)) && (a = "mathml"), k ? (f(
        e.dynamicChildren,
        k,
        L,
        i,
        o,
        a,
        s
      ), js(e, t, !0)) : l || c(
        e,
        t,
        L,
        Z,
        i,
        o,
        a,
        s,
        !1
      ), g)
        W ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Oi(
          t,
          n,
          O,
          d,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const q = t.target = Ia(
          t.props,
          b
        );
        q && Oi(
          t,
          q,
          null,
          d,
          0
        );
      } else W && Oi(
        t,
        D,
        R,
        d,
        1
      );
      Hi(t, g);
    }
  },
  remove(e, t, n, { um: r, o: { remove: i } }, o) {
    const {
      shapeFlag: a,
      children: s,
      anchor: l,
      targetStart: d,
      targetAnchor: u,
      target: c,
      props: f
    } = e;
    if (c && (i(d), i(u)), o && i(l), a & 16) {
      const m = o || !qr(f);
      for (let b = 0; b < s.length; b++) {
        const p = s[b];
        r(
          p,
          t,
          n,
          m,
          !!p.dynamicChildren
        );
      }
    }
  },
  move: Oi,
  hydrate: qp
};
function Oi(e, t, n, { o: { insert: r }, m: i }, o = 2) {
  o === 0 && r(e.targetAnchor, t, n);
  const { el: a, anchor: s, shapeFlag: l, children: d, props: u } = e, c = o === 2;
  if (c && r(a, t, n), (!c || qr(u)) && l & 16)
    for (let f = 0; f < d.length; f++)
      i(
        d[f],
        t,
        n,
        2
      );
  c && r(s, t, n);
}
function qp(e, t, n, r, i, o, {
  o: { nextSibling: a, parentNode: s, querySelector: l, insert: d, createText: u }
}, c) {
  const f = t.target = Ia(
    t.props,
    l
  );
  if (f) {
    const m = qr(t.props), b = f._lpa || f.firstChild;
    if (t.shapeFlag & 16)
      if (m)
        t.anchor = c(
          a(e),
          t,
          s(e),
          n,
          r,
          i,
          o
        ), t.targetStart = b, t.targetAnchor = b && a(b);
      else {
        t.anchor = a(e);
        let p = b;
        for (; p; ) {
          if (p && p.nodeType === 8) {
            if (p.data === "teleport start anchor")
              t.targetStart = p;
            else if (p.data === "teleport anchor") {
              t.targetAnchor = p, f._lpa = t.targetAnchor && a(t.targetAnchor);
              break;
            }
          }
          p = a(p);
        }
        t.targetAnchor || tc(f, t, u, d), c(
          b && a(b),
          t,
          f,
          n,
          r,
          i,
          o
        );
      }
    Hi(t, m);
  }
  return t.anchor && a(t.anchor);
}
const Wp = ec;
function Hi(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, i;
    for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function tc(e, t, n, r) {
  const i = t.targetStart = n(""), o = t.targetAnchor = n("");
  return i[Ju] = o, e && (r(i, e), r(o, e)), o;
}
const bn = Symbol("_leaveCb"), Ai = Symbol("_enterCb");
function Gp() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return qe(() => {
    e.isMounted = !0;
  }), dc(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ct = [Function, Array], nc = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ct,
  onEnter: Ct,
  onAfterEnter: Ct,
  onEnterCancelled: Ct,
  // leave
  onBeforeLeave: Ct,
  onLeave: Ct,
  onAfterLeave: Ct,
  onLeaveCancelled: Ct,
  // appear
  onBeforeAppear: Ct,
  onAppear: Ct,
  onAfterAppear: Ct,
  onAppearCancelled: Ct
}, rc = (e) => {
  const t = e.subTree;
  return t.component ? rc(t.component) : t;
}, Kp = {
  name: "BaseTransition",
  props: nc,
  setup(e, { slots: t }) {
    const n = Bs(), r = Gp();
    return () => {
      const i = t.default && ac(t.default(), !0);
      if (!i || !i.length)
        return;
      const o = ic(i), a = se(e), { mode: s } = a;
      if (r.isLeaving)
        return ua(o);
      const l = Ll(o);
      if (!l)
        return ua(o);
      let d = Ra(
        l,
        a,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (c) => d = c
      );
      l.type !== ht && ni(l, d);
      let u = n.subTree && Ll(n.subTree);
      if (u && u.type !== ht && !zn(l, u) && rc(n).type !== ht) {
        let c = Ra(
          u,
          a,
          r,
          n
        );
        if (ni(u, c), s === "out-in" && l.type !== ht)
          return r.isLeaving = !0, c.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete c.afterLeave, u = void 0;
          }, ua(o);
        s === "in-out" && l.type !== ht ? c.delayLeave = (f, m, b) => {
          const p = oc(
            r,
            u
          );
          p[String(u.key)] = u, f[bn] = () => {
            m(), f[bn] = void 0, delete d.delayedLeave, u = void 0;
          }, d.delayedLeave = () => {
            b(), delete d.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return o;
    };
  }
};
function ic(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ht) {
        t = n;
        break;
      }
  }
  return t;
}
const Yp = Kp;
function oc(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function Ra(e, t, n, r, i) {
  const {
    appear: o,
    mode: a,
    persisted: s = !1,
    onBeforeEnter: l,
    onEnter: d,
    onAfterEnter: u,
    onEnterCancelled: c,
    onBeforeLeave: f,
    onLeave: m,
    onAfterLeave: b,
    onLeaveCancelled: p,
    onBeforeAppear: v,
    onAppear: g,
    onAfterAppear: w,
    onAppearCancelled: y
  } = t, k = String(e.key), O = oc(n, e), D = (L, Z) => {
    L && Ft(
      L,
      r,
      9,
      Z
    );
  }, R = (L, Z) => {
    const q = Z[1];
    D(L, Z), le(L) ? L.every((P) => P.length <= 1) && q() : L.length <= 1 && q();
  }, W = {
    mode: a,
    persisted: s,
    beforeEnter(L) {
      let Z = l;
      if (!n.isMounted)
        if (o)
          Z = v || l;
        else
          return;
      L[bn] && L[bn](
        !0
        /* cancelled */
      );
      const q = O[k];
      q && zn(e, q) && q.el[bn] && q.el[bn](), D(Z, [L]);
    },
    enter(L) {
      let Z = d, q = u, P = c;
      if (!n.isMounted)
        if (o)
          Z = g || d, q = w || u, P = y || c;
        else
          return;
      let re = !1;
      const he = L[Ai] = (Te) => {
        re || (re = !0, Te ? D(P, [L]) : D(q, [L]), W.delayedLeave && W.delayedLeave(), L[Ai] = void 0);
      };
      Z ? R(Z, [L, he]) : he();
    },
    leave(L, Z) {
      const q = String(e.key);
      if (L[Ai] && L[Ai](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return Z();
      D(f, [L]);
      let P = !1;
      const re = L[bn] = (he) => {
        P || (P = !0, Z(), he ? D(p, [L]) : D(b, [L]), L[bn] = void 0, O[q] === e && delete O[q]);
      };
      O[q] = e, m ? R(m, [L, re]) : re();
    },
    clone(L) {
      const Z = Ra(
        L,
        t,
        n,
        r,
        i
      );
      return i && i(Z), Z;
    }
  };
  return W;
}
function ua(e) {
  if (Mo(e))
    return e = nn(e), e.children = null, e;
}
function Ll(e) {
  if (!Mo(e))
    return Qu(e.type) && e.children ? ic(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && fe(n.default))
      return n.default();
  }
}
function ni(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ni(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ac(e, t = !1, n) {
  let r = [], i = 0;
  for (let o = 0; o < e.length; o++) {
    let a = e[o];
    const s = n == null ? a.key : String(n) + String(a.key != null ? a.key : o);
    a.type === U ? (a.patchFlag & 128 && i++, r = r.concat(
      ac(a.children, t, s)
    )) : (t || a.type !== ht) && r.push(s != null ? nn(a, { key: s }) : a);
  }
  if (i > 1)
    for (let o = 0; o < r.length; o++)
      r[o].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ve(e, t) {
  return fe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    tt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Xp() {
  const e = Bs();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function sc(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function to(e, t, n, r, i = !1) {
  if (le(e)) {
    e.forEach(
      (b, p) => to(
        b,
        t && (le(t) ? t[p] : t),
        n,
        r,
        i
      )
    );
    return;
  }
  if (sr(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && to(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? No(r.component) : r.el, a = i ? null : o, { i: s, r: l } = e, d = t && t.r, u = s.refs === $e ? s.refs = {} : s.refs, c = s.setupState, f = se(c), m = c === $e ? () => !1 : (b) => Ae(f, b);
  if (d != null && d !== l && (Ue(d) ? (u[d] = null, m(d) && (c[d] = null)) : Qe(d) && (d.value = null)), fe(l))
    wr(l, s, 12, [a, u]);
  else {
    const b = Ue(l), p = Qe(l);
    if (b || p) {
      const v = () => {
        if (e.f) {
          const g = b ? m(l) ? c[l] : u[l] : l.value;
          i ? le(g) && Os(g, o) : le(g) ? g.includes(o) || g.push(o) : b ? (u[l] = [o], m(l) && (c[l] = u[l])) : (l.value = [o], e.k && (u[e.k] = l.value));
        } else b ? (u[l] = a, m(l) && (c[l] = a)) : p && (l.value = a, e.k && (u[e.k] = a));
      };
      a ? (v.id = -1, ft(v, n)) : v();
    }
  }
}
Co().requestIdleCallback;
Co().cancelIdleCallback;
const sr = (e) => !!e.type.__asyncLoader, Mo = (e) => e.type.__isKeepAlive;
function Zp(e, t) {
  lc(e, "a", t);
}
function Jp(e, t) {
  lc(e, "da", t);
}
function lc(e, t, n = Ke) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if ($o(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Mo(i.parent.vnode) && Qp(r, t, n, i), i = i.parent;
  }
}
function Qp(e, t, n, r) {
  const i = $o(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  lt(() => {
    Os(r[t], i);
  }, n);
}
function $o(e, t, n = Ke, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...a) => {
      an();
      const s = bi(n), l = Ft(t, n, e, a);
      return s(), sn(), l;
    });
    return r ? i.unshift(o) : i.push(o), o;
  }
}
const ln = (e) => (t, n = Ke) => {
  (!ai || e === "sp") && $o(e, (...r) => t(...r), n);
}, eh = ln("bm"), qe = ln("m"), th = ln(
  "bu"
), nh = ln("u"), dc = ln(
  "bum"
), lt = ln("um"), rh = ln(
  "sp"
), ih = ln("rtg"), oh = ln("rtc");
function ah(e, t = Ke) {
  $o("ec", e, t);
}
const zs = "components", sh = "directives";
function oe(e, t) {
  return Is(zs, e, !0, t) || e;
}
const uc = Symbol.for("v-ndc");
function lh(e) {
  return Ue(e) ? Is(zs, e, !1) || e : e || uc;
}
function dh(e) {
  return Is(sh, e);
}
function Is(e, t, n = !0, r = !1) {
  const i = Je || Ke;
  if (i) {
    const o = i.type;
    if (e === zs) {
      const s = Mc(
        o,
        !1
      );
      if (s && (s === t || s === At(t) || s === Eo(At(t))))
        return o;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      Fl(i[e] || o[e], t) || // global registration
      Fl(i.appContext[e], t)
    );
    return !a && r ? o : a;
  }
}
function Fl(e, t) {
  return e && (e[t] || e[At(t)] || e[Eo(At(t))]);
}
function yn(e, t, n, r) {
  let i;
  const o = n, a = le(e);
  if (a || Ue(e)) {
    const s = a && or(e);
    let l = !1;
    s && (l = !Ot(e), e = Oo(e)), i = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      i[d] = t(
        l ? at(e[d]) : e[d],
        d,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let s = 0; s < e; s++)
      i[s] = t(s + 1, s, void 0, o);
  } else if (Le(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (s, l) => t(s, l, void 0, o)
      );
    else {
      const s = Object.keys(e);
      i = new Array(s.length);
      for (let l = 0, d = s.length; l < d; l++) {
        const u = s[l];
        i[l] = t(e[u], u, l, o);
      }
    }
  else
    i = [];
  return i;
}
function ri(e, t, n = {}, r, i) {
  if (Je.ce || Je.parent && sr(Je.parent) && Je.parent.ce)
    return t !== "default" && (n.name = t), S(), ke(
      U,
      null,
      [H("slot", n, r && r())],
      64
    );
  let o = e[t];
  o && o._c && (o._d = !1), S();
  const a = o && cc(o(n)), s = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  a && a.key, l = ke(
    U,
    {
      key: (s && !Lt(s) ? s : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!a && r ? "_fb" : "")
    },
    a || (r ? r() : []),
    a && e._ === 1 ? 64 : -2
  );
  return l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), o && o._c && (o._d = !0), l;
}
function cc(e) {
  return e.some((t) => oi(t) ? !(t.type === ht || t.type === U && !cc(t.children)) : !0) ? e : null;
}
const ja = (e) => e ? Dc(e) ? No(e) : ja(e.parent) : null, Wr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ tt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ja(e.parent),
    $root: (e) => ja(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => mc(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Fs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = tn.bind(e.proxy)),
    $watch: (e) => Dh.bind(e)
  })
), ca = (e, t) => e !== $e && !e.__isScriptSetup && Ae(e, t), uh = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: i, props: o, accessCache: a, type: s, appContext: l } = e;
    let d;
    if (t[0] !== "$") {
      const m = a[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return r[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (ca(r, t))
          return a[t] = 1, r[t];
        if (i !== $e && Ae(i, t))
          return a[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && Ae(d, t)
        )
          return a[t] = 3, o[t];
        if (n !== $e && Ae(n, t))
          return a[t] = 4, n[t];
        Va && (a[t] = 0);
      }
    }
    const u = Wr[t];
    let c, f;
    if (u)
      return t === "$attrs" && ot(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (c = s.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== $e && Ae(n, t))
      return a[t] = 4, n[t];
    if (
      // global properties
      f = l.config.globalProperties, Ae(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: i, ctx: o } = e;
    return ca(i, t) ? (i[t] = n, !0) : r !== $e && Ae(r, t) ? (r[t] = n, !0) : Ae(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, propsOptions: o }
  }, a) {
    let s;
    return !!n[a] || e !== $e && Ae(e, a) || ca(t, a) || (s = o[0]) && Ae(s, a) || Ae(r, a) || Ae(Wr, a) || Ae(i.config.globalProperties, a);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ae(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Nl(e) {
  return le(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Va = !0;
function ch(e) {
  const t = mc(e), n = e.proxy, r = e.ctx;
  Va = !1, t.beforeCreate && zl(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: a,
    watch: s,
    provide: l,
    inject: d,
    // lifecycle
    created: u,
    beforeMount: c,
    mounted: f,
    beforeUpdate: m,
    updated: b,
    activated: p,
    deactivated: v,
    beforeDestroy: g,
    beforeUnmount: w,
    destroyed: y,
    unmounted: k,
    render: O,
    renderTracked: D,
    renderTriggered: R,
    errorCaptured: W,
    serverPrefetch: L,
    // public API
    expose: Z,
    inheritAttrs: q,
    // assets
    components: P,
    directives: re,
    filters: he
  } = t;
  if (d && fh(d, r, null), a)
    for (const G in a) {
      const ue = a[G];
      fe(ue) && (r[G] = ue.bind(n));
    }
  if (i) {
    const G = i.call(n, n);
    Le(G) && (e.data = yr(G));
  }
  if (Va = !0, o)
    for (const G in o) {
      const ue = o[G], ze = fe(ue) ? ue.bind(n, n) : fe(ue.get) ? ue.get.bind(n, n) : Mt, Xe = !fe(ue) && fe(ue.set) ? ue.set.bind(n) : Mt, ie = $({
        get: ze,
        set: Xe
      });
      Object.defineProperty(r, G, {
        enumerable: !0,
        configurable: !0,
        get: () => ie.value,
        set: (me) => ie.value = me
      });
    }
  if (s)
    for (const G in s)
      fc(s[G], r, n, G);
  if (l) {
    const G = fe(l) ? l.call(n) : l;
    Reflect.ownKeys(G).forEach((ue) => {
      bt(ue, G[ue]);
    });
  }
  u && zl(u, e, "c");
  function ge(G, ue) {
    le(ue) ? ue.forEach((ze) => G(ze.bind(n))) : ue && G(ue.bind(n));
  }
  if (ge(eh, c), ge(qe, f), ge(th, m), ge(nh, b), ge(Zp, p), ge(Jp, v), ge(ah, W), ge(oh, D), ge(ih, R), ge(dc, w), ge(lt, k), ge(rh, L), le(Z))
    if (Z.length) {
      const G = e.exposed || (e.exposed = {});
      Z.forEach((ue) => {
        Object.defineProperty(G, ue, {
          get: () => n[ue],
          set: (ze) => n[ue] = ze
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === Mt && (e.render = O), q != null && (e.inheritAttrs = q), P && (e.components = P), re && (e.directives = re), L && sc(e);
}
function fh(e, t, n = Mt) {
  le(e) && (e = Ua(e));
  for (const r in e) {
    const i = e[r];
    let o;
    Le(i) ? "default" in i ? o = Ge(
      i.from || r,
      i.default,
      !0
    ) : o = Ge(i.from || r) : o = Ge(i), Qe(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (a) => o.value = a
    }) : t[r] = o;
  }
}
function zl(e, t, n) {
  Ft(
    le(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function fc(e, t, n, r) {
  let i = r.includes(".") ? Ec(n, r) : () => n[r];
  if (Ue(e)) {
    const o = t[e];
    fe(o) && st(i, o);
  } else if (fe(e))
    st(i, e.bind(n));
  else if (Le(e))
    if (le(e))
      e.forEach((o) => fc(o, t, n, r));
    else {
      const o = fe(e.handler) ? e.handler.bind(n) : t[e.handler];
      fe(o) && st(i, o, e);
    }
}
function mc(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: a }
  } = e.appContext, s = o.get(t);
  let l;
  return s ? l = s : !i.length && !n && !r ? l = t : (l = {}, i.length && i.forEach(
    (d) => no(l, d, a, !0)
  ), no(l, t, a)), Le(t) && o.set(t, l), l;
}
function no(e, t, n, r = !1) {
  const { mixins: i, extends: o } = t;
  o && no(e, o, n, !0), i && i.forEach(
    (a) => no(e, a, n, !0)
  );
  for (const a in t)
    if (!(r && a === "expose")) {
      const s = mh[a] || n && n[a];
      e[a] = s ? s(e[a], t[a]) : t[a];
    }
  return e;
}
const mh = {
  data: Il,
  props: Rl,
  emits: Rl,
  // objects
  methods: Lr,
  computed: Lr,
  // lifecycle
  beforeCreate: ct,
  created: ct,
  beforeMount: ct,
  mounted: ct,
  beforeUpdate: ct,
  updated: ct,
  beforeDestroy: ct,
  beforeUnmount: ct,
  destroyed: ct,
  unmounted: ct,
  activated: ct,
  deactivated: ct,
  errorCaptured: ct,
  serverPrefetch: ct,
  // assets
  components: Lr,
  directives: Lr,
  // watch
  watch: hh,
  // provide / inject
  provide: Il,
  inject: ph
};
function Il(e, t) {
  return t ? e ? function() {
    return tt(
      fe(e) ? e.call(this, this) : e,
      fe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ph(e, t) {
  return Lr(Ua(e), Ua(t));
}
function Ua(e) {
  if (le(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ct(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Lr(e, t) {
  return e ? tt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Rl(e, t) {
  return e ? le(e) && le(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : tt(
    /* @__PURE__ */ Object.create(null),
    Nl(e),
    Nl(t ?? {})
  ) : t;
}
function hh(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = tt(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = ct(e[r], t[r]);
  return n;
}
function pc() {
  return {
    app: null,
    config: {
      isNativeTag: Km,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let bh = 0;
function gh(e, t) {
  return function(r, i = null) {
    fe(r) || (r = tt({}, r)), i != null && !Le(i) && (i = null);
    const o = pc(), a = /* @__PURE__ */ new WeakSet(), s = [];
    let l = !1;
    const d = o.app = {
      _uid: bh++,
      _component: r,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Zh,
      get config() {
        return o.config;
      },
      set config(u) {
      },
      use(u, ...c) {
        return a.has(u) || (u && fe(u.install) ? (a.add(u), u.install(d, ...c)) : fe(u) && (a.add(u), u(d, ...c))), d;
      },
      mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), d;
      },
      component(u, c) {
        return c ? (o.components[u] = c, d) : o.components[u];
      },
      directive(u, c) {
        return c ? (o.directives[u] = c, d) : o.directives[u];
      },
      mount(u, c, f) {
        if (!l) {
          const m = d._ceVNode || H(r, i);
          return m.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(m, u, f), l = !0, d._container = u, u.__vue_app__ = d, No(m.component);
        }
      },
      onUnmount(u) {
        s.push(u);
      },
      unmount() {
        l && (Ft(
          s,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(u, c) {
        return o.provides[u] = c, d;
      },
      runWithContext(u) {
        const c = lr;
        lr = d;
        try {
          return u();
        } finally {
          lr = c;
        }
      }
    };
    return d;
  };
}
let lr = null;
function bt(e, t) {
  if (Ke) {
    let n = Ke.provides;
    const r = Ke.parent && Ke.parent.provides;
    r === n && (n = Ke.provides = Object.create(r)), n[e] = t;
  }
}
function Ge(e, t, n = !1) {
  const r = Ke || Je;
  if (r || lr) {
    const i = lr ? lr._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && fe(t) ? t.call(r && r.proxy) : t;
  }
}
const hc = {}, bc = () => Object.create(hc), gc = (e) => Object.getPrototypeOf(e) === hc;
function vh(e, t, n, r = !1) {
  const i = {}, o = bc();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), vc(e, t, i, o);
  for (const a in e.propsOptions[0])
    a in i || (i[a] = void 0);
  n ? e.props = r ? i : Ap(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function yh(e, t, n, r) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: a }
  } = e, s = se(i), [l] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || a > 0) && !(a & 16)
  ) {
    if (a & 8) {
      const u = e.vnode.dynamicProps;
      for (let c = 0; c < u.length; c++) {
        let f = u[c];
        if (Lo(e.emitsOptions, f))
          continue;
        const m = t[f];
        if (l)
          if (Ae(o, f))
            m !== o[f] && (o[f] = m, d = !0);
          else {
            const b = At(f);
            i[b] = Ba(
              l,
              s,
              b,
              m,
              e,
              !1
            );
          }
        else
          m !== o[f] && (o[f] = m, d = !0);
      }
    }
  } else {
    vc(e, t, i, o) && (d = !0);
    let u;
    for (const c in s)
      (!t || // for camelCase
      !Ae(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Kn(c)) === c || !Ae(t, u))) && (l ? n && // for camelCase
      (n[c] !== void 0 || // for kebab-case
      n[u] !== void 0) && (i[c] = Ba(
        l,
        s,
        c,
        void 0,
        e,
        !0
      )) : delete i[c]);
    if (o !== s)
      for (const c in o)
        (!t || !Ae(t, c)) && (delete o[c], d = !0);
  }
  d && Zt(e.attrs, "set", "");
}
function vc(e, t, n, r) {
  const [i, o] = e.propsOptions;
  let a = !1, s;
  if (t)
    for (let l in t) {
      if (Vr(l))
        continue;
      const d = t[l];
      let u;
      i && Ae(i, u = At(l)) ? !o || !o.includes(u) ? n[u] = d : (s || (s = {}))[u] = d : Lo(e.emitsOptions, l) || (!(l in r) || d !== r[l]) && (r[l] = d, a = !0);
    }
  if (o) {
    const l = se(n), d = s || $e;
    for (let u = 0; u < o.length; u++) {
      const c = o[u];
      n[c] = Ba(
        i,
        l,
        c,
        d[c],
        e,
        !Ae(d, c)
      );
    }
  }
  return a;
}
function Ba(e, t, n, r, i, o) {
  const a = e[n];
  if (a != null) {
    const s = Ae(a, "default");
    if (s && r === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && fe(l)) {
        const { propsDefaults: d } = i;
        if (n in d)
          r = d[n];
        else {
          const u = bi(i);
          r = d[n] = l.call(
            null,
            t
          ), u();
        }
      } else
        r = l;
      i.ce && i.ce._setProp(n, r);
    }
    a[
      0
      /* shouldCast */
    ] && (o && !s ? r = !1 : a[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Kn(n)) && (r = !0));
  }
  return r;
}
const wh = /* @__PURE__ */ new WeakMap();
function yc(e, t, n = !1) {
  const r = n ? wh : t.propsCache, i = r.get(e);
  if (i)
    return i;
  const o = e.props, a = {}, s = [];
  let l = !1;
  if (!fe(e)) {
    const u = (c) => {
      l = !0;
      const [f, m] = yc(c, t, !0);
      tt(a, f), m && s.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !l)
    return Le(e) && r.set(e, rr), rr;
  if (le(o))
    for (let u = 0; u < o.length; u++) {
      const c = At(o[u]);
      jl(c) && (a[c] = $e);
    }
  else if (o)
    for (const u in o) {
      const c = At(u);
      if (jl(c)) {
        const f = o[u], m = a[c] = le(f) || fe(f) ? { type: f } : tt({}, f), b = m.type;
        let p = !1, v = !0;
        if (le(b))
          for (let g = 0; g < b.length; ++g) {
            const w = b[g], y = fe(w) && w.name;
            if (y === "Boolean") {
              p = !0;
              break;
            } else y === "String" && (v = !1);
          }
        else
          p = fe(b) && b.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = p, m[
          1
          /* shouldCastTrue */
        ] = v, (p || Ae(m, "default")) && s.push(c);
      }
    }
  const d = [a, s];
  return Le(e) && r.set(e, d), d;
}
function jl(e) {
  return e[0] !== "$" && !Vr(e);
}
const wc = (e) => e[0] === "_" || e === "$stable", Rs = (e) => le(e) ? e.map(Ht) : [Ht(e)], xh = (e, t, n) => {
  if (t._n)
    return t;
  const r = te((...i) => (pn.NODE_ENV !== "production" && Ke && (!n || (n.root, Ke.root)), Rs(t(...i))), n);
  return r._c = !1, r;
}, xc = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (wc(i)) continue;
    const o = e[i];
    if (fe(o))
      t[i] = xh(i, o, r);
    else if (o != null) {
      const a = Rs(o);
      t[i] = () => a;
    }
  }
}, kc = (e, t) => {
  const n = Rs(t);
  e.slots.default = () => n;
}, _c = (e, t, n) => {
  for (const r in t)
    (n || r !== "_") && (e[r] = t[r]);
}, kh = (e, t, n) => {
  const r = e.slots = bc();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (_c(r, t, n), n && ku(r, "_", i, !0)) : xc(t, r);
  } else t && kc(e, t);
}, _h = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let o = !0, a = $e;
  if (r.shapeFlag & 32) {
    const s = t._;
    s ? n && s === 1 ? o = !1 : _c(i, t, n) : (o = !t.$stable, xc(t, i)), a = t;
  } else t && (kc(e, t), a = { default: 1 });
  if (o)
    for (const s in i)
      !wc(s) && a[s] == null && delete i[s];
}, ft = zh;
function Sh(e) {
  return Eh(e);
}
function Eh(e, t) {
  const n = Co();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: i,
    patchProp: o,
    createElement: a,
    createText: s,
    createComment: l,
    setText: d,
    setElementText: u,
    parentNode: c,
    nextSibling: f,
    setScopeId: m = Mt,
    insertStaticContent: b
  } = e, p = (h, x, C, z = null, M = null, F = null, K = void 0, B = null, V = !!x.dynamicChildren) => {
    if (h === x)
      return;
    h && !zn(h, x) && (z = be(h), me(h, M, F, !0), h = null), x.patchFlag === -2 && (V = !1, x.dynamicChildren = null);
    const { type: I, ref: de, shapeFlag: Y } = x;
    switch (I) {
      case Fo:
        v(h, x, C, z);
        break;
      case ht:
        g(h, x, C, z);
        break;
      case ma:
        h == null && w(x, C, z, K);
        break;
      case U:
        P(
          h,
          x,
          C,
          z,
          M,
          F,
          K,
          B,
          V
        );
        break;
      default:
        Y & 1 ? O(
          h,
          x,
          C,
          z,
          M,
          F,
          K,
          B,
          V
        ) : Y & 6 ? re(
          h,
          x,
          C,
          z,
          M,
          F,
          K,
          B,
          V
        ) : (Y & 64 || Y & 128) && I.process(
          h,
          x,
          C,
          z,
          M,
          F,
          K,
          B,
          V,
          We
        );
    }
    de != null && M && to(de, h && h.ref, F, x || h, !x);
  }, v = (h, x, C, z) => {
    if (h == null)
      r(
        x.el = s(x.children),
        C,
        z
      );
    else {
      const M = x.el = h.el;
      x.children !== h.children && d(M, x.children);
    }
  }, g = (h, x, C, z) => {
    h == null ? r(
      x.el = l(x.children || ""),
      C,
      z
    ) : x.el = h.el;
  }, w = (h, x, C, z) => {
    [h.el, h.anchor] = b(
      h.children,
      x,
      C,
      z,
      h.el,
      h.anchor
    );
  }, y = ({ el: h, anchor: x }, C, z) => {
    let M;
    for (; h && h !== x; )
      M = f(h), r(h, C, z), h = M;
    r(x, C, z);
  }, k = ({ el: h, anchor: x }) => {
    let C;
    for (; h && h !== x; )
      C = f(h), i(h), h = C;
    i(x);
  }, O = (h, x, C, z, M, F, K, B, V) => {
    x.type === "svg" ? K = "svg" : x.type === "math" && (K = "mathml"), h == null ? D(
      x,
      C,
      z,
      M,
      F,
      K,
      B,
      V
    ) : L(
      h,
      x,
      M,
      F,
      K,
      B,
      V
    );
  }, D = (h, x, C, z, M, F, K, B) => {
    let V, I;
    const { props: de, shapeFlag: Y, transition: ae, dirs: ce } = h;
    if (V = h.el = a(
      h.type,
      F,
      de && de.is,
      de
    ), Y & 8 ? u(V, h.children) : Y & 16 && W(
      h.children,
      V,
      null,
      z,
      M,
      fa(h, F),
      K,
      B
    ), ce && An(h, null, z, "created"), R(V, h, h.scopeId, K, z), de) {
      for (const Fe in de)
        Fe !== "value" && !Vr(Fe) && o(V, Fe, null, de[Fe], F, z);
      "value" in de && o(V, "value", null, de.value, F), (I = de.onVnodeBeforeMount) && jt(I, z, h);
    }
    ce && An(h, null, z, "beforeMount");
    const xe = Ch(M, ae);
    xe && ae.beforeEnter(V), r(V, x, C), ((I = de && de.onVnodeMounted) || xe || ce) && ft(() => {
      I && jt(I, z, h), xe && ae.enter(V), ce && An(h, null, z, "mounted");
    }, M);
  }, R = (h, x, C, z, M) => {
    if (C && m(h, C), z)
      for (let F = 0; F < z.length; F++)
        m(h, z[F]);
    if (M) {
      let F = M.subTree;
      if (x === F || Tc(F.type) && (F.ssContent === x || F.ssFallback === x)) {
        const K = M.vnode;
        R(
          h,
          K,
          K.scopeId,
          K.slotScopeIds,
          M.parent
        );
      }
    }
  }, W = (h, x, C, z, M, F, K, B, V = 0) => {
    for (let I = V; I < h.length; I++) {
      const de = h[I] = B ? gn(h[I]) : Ht(h[I]);
      p(
        null,
        de,
        x,
        C,
        z,
        M,
        F,
        K,
        B
      );
    }
  }, L = (h, x, C, z, M, F, K) => {
    const B = x.el = h.el;
    let { patchFlag: V, dynamicChildren: I, dirs: de } = x;
    V |= h.patchFlag & 16;
    const Y = h.props || $e, ae = x.props || $e;
    let ce;
    if (C && Dn(C, !1), (ce = ae.onVnodeBeforeUpdate) && jt(ce, C, x, h), de && An(x, h, C, "beforeUpdate"), C && Dn(C, !0), (Y.innerHTML && ae.innerHTML == null || Y.textContent && ae.textContent == null) && u(B, ""), I ? Z(
      h.dynamicChildren,
      I,
      B,
      C,
      z,
      fa(x, M),
      F
    ) : K || ue(
      h,
      x,
      B,
      null,
      C,
      z,
      fa(x, M),
      F,
      !1
    ), V > 0) {
      if (V & 16)
        q(B, Y, ae, C, M);
      else if (V & 2 && Y.class !== ae.class && o(B, "class", null, ae.class, M), V & 4 && o(B, "style", Y.style, ae.style, M), V & 8) {
        const xe = x.dynamicProps;
        for (let Fe = 0; Fe < xe.length; Fe++) {
          const Me = xe[Fe], xt = Y[Me], vt = ae[Me];
          (vt !== xt || Me === "value") && o(B, Me, xt, vt, M, C);
        }
      }
      V & 1 && h.children !== x.children && u(B, x.children);
    } else !K && I == null && q(B, Y, ae, C, M);
    ((ce = ae.onVnodeUpdated) || de) && ft(() => {
      ce && jt(ce, C, x, h), de && An(x, h, C, "updated");
    }, z);
  }, Z = (h, x, C, z, M, F, K) => {
    for (let B = 0; B < x.length; B++) {
      const V = h[B], I = x[B], de = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        V.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (V.type === U || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !zn(V, I) || // - In the case of a component, it could contain anything.
        V.shapeFlag & 70) ? c(V.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          C
        )
      );
      p(
        V,
        I,
        de,
        null,
        z,
        M,
        F,
        K,
        !0
      );
    }
  }, q = (h, x, C, z, M) => {
    if (x !== C) {
      if (x !== $e)
        for (const F in x)
          !Vr(F) && !(F in C) && o(
            h,
            F,
            x[F],
            null,
            M,
            z
          );
      for (const F in C) {
        if (Vr(F)) continue;
        const K = C[F], B = x[F];
        K !== B && F !== "value" && o(h, F, B, K, M, z);
      }
      "value" in C && o(h, "value", x.value, C.value, M);
    }
  }, P = (h, x, C, z, M, F, K, B, V) => {
    const I = x.el = h ? h.el : s(""), de = x.anchor = h ? h.anchor : s("");
    let { patchFlag: Y, dynamicChildren: ae, slotScopeIds: ce } = x;
    ce && (B = B ? B.concat(ce) : ce), h == null ? (r(I, C, z), r(de, C, z), W(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      x.children || [],
      C,
      de,
      M,
      F,
      K,
      B,
      V
    )) : Y > 0 && Y & 64 && ae && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren ? (Z(
      h.dynamicChildren,
      ae,
      C,
      M,
      F,
      K,
      B
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (x.key != null || M && x === M.subTree) && js(
      h,
      x,
      !0
      /* shallow */
    )) : ue(
      h,
      x,
      C,
      de,
      M,
      F,
      K,
      B,
      V
    );
  }, re = (h, x, C, z, M, F, K, B, V) => {
    x.slotScopeIds = B, h == null ? x.shapeFlag & 512 ? M.ctx.activate(
      x,
      C,
      z,
      K,
      V
    ) : he(
      x,
      C,
      z,
      M,
      F,
      K,
      V
    ) : Te(h, x, V);
  }, he = (h, x, C, z, M, F, K) => {
    const B = h.component = Bh(
      h,
      z,
      M
    );
    if (Mo(h) && (B.ctx.renderer = We), Hh(B, !1, K), B.asyncDep) {
      if (M && M.registerDep(B, ge, K), !h.el) {
        const V = B.subTree = H(ht);
        g(null, V, x, C);
      }
    } else
      ge(
        B,
        h,
        x,
        C,
        M,
        F,
        K
      );
  }, Te = (h, x, C) => {
    const z = x.component = h.component;
    if (Fh(h, x, C))
      if (z.asyncDep && !z.asyncResolved) {
        G(z, x, C);
        return;
      } else
        z.next = x, z.update();
    else
      x.el = h.el, z.vnode = x;
  }, ge = (h, x, C, z, M, F, K) => {
    const B = () => {
      if (h.isMounted) {
        let { next: Y, bu: ae, u: ce, parent: xe, vnode: Fe } = h;
        {
          const It = Sc(h);
          if (It) {
            Y && (Y.el = Fe.el, G(h, Y, K)), It.asyncDep.then(() => {
              h.isUnmounted || B();
            });
            return;
          }
        }
        let Me = Y, xt;
        Dn(h, !1), Y ? (Y.el = Fe.el, G(h, Y, K)) : Y = Fe, ae && Bi(ae), (xt = Y.props && Y.props.onVnodeBeforeUpdate) && jt(xt, xe, Y, Fe), Dn(h, !0);
        const vt = Ul(h), zt = h.subTree;
        h.subTree = vt, p(
          zt,
          vt,
          // parent may have changed if it's in a teleport
          c(zt.el),
          // anchor may have changed if it's in a fragment
          be(zt),
          h,
          M,
          F
        ), Y.el = vt.el, Me === null && Nh(h, vt.el), ce && ft(ce, M), (xt = Y.props && Y.props.onVnodeUpdated) && ft(
          () => jt(xt, xe, Y, Fe),
          M
        );
      } else {
        let Y;
        const { el: ae, props: ce } = x, { bm: xe, m: Fe, parent: Me, root: xt, type: vt } = h, zt = sr(x);
        Dn(h, !1), xe && Bi(xe), !zt && (Y = ce && ce.onVnodeBeforeMount) && jt(Y, Me, x), Dn(h, !0);
        {
          xt.ce && xt.ce._injectChildStyle(vt);
          const It = h.subTree = Ul(h);
          p(
            null,
            It,
            C,
            z,
            h,
            M,
            F
          ), x.el = It.el;
        }
        if (Fe && ft(Fe, M), !zt && (Y = ce && ce.onVnodeMounted)) {
          const It = x;
          ft(
            () => jt(Y, Me, It),
            M
          );
        }
        (x.shapeFlag & 256 || Me && sr(Me.vnode) && Me.vnode.shapeFlag & 256) && h.a && ft(h.a, M), h.isMounted = !0, x = C = z = null;
      }
    };
    h.scope.on();
    const V = h.effect = new Tu(B);
    h.scope.off();
    const I = h.update = V.run.bind(V), de = h.job = V.runIfDirty.bind(V);
    de.i = h, de.id = h.uid, V.scheduler = () => Fs(de), Dn(h, !0), I();
  }, G = (h, x, C) => {
    x.component = h;
    const z = h.vnode.props;
    h.vnode = x, h.next = null, yh(h, x.props, z, C), _h(h, x.children, C), an(), Dl(h), sn();
  }, ue = (h, x, C, z, M, F, K, B, V = !1) => {
    const I = h && h.children, de = h ? h.shapeFlag : 0, Y = x.children, { patchFlag: ae, shapeFlag: ce } = x;
    if (ae > 0) {
      if (ae & 128) {
        Xe(
          I,
          Y,
          C,
          z,
          M,
          F,
          K,
          B,
          V
        );
        return;
      } else if (ae & 256) {
        ze(
          I,
          Y,
          C,
          z,
          M,
          F,
          K,
          B,
          V
        );
        return;
      }
    }
    ce & 8 ? (de & 16 && J(I, M, F), Y !== I && u(C, Y)) : de & 16 ? ce & 16 ? Xe(
      I,
      Y,
      C,
      z,
      M,
      F,
      K,
      B,
      V
    ) : J(I, M, F, !0) : (de & 8 && u(C, ""), ce & 16 && W(
      Y,
      C,
      z,
      M,
      F,
      K,
      B,
      V
    ));
  }, ze = (h, x, C, z, M, F, K, B, V) => {
    h = h || rr, x = x || rr;
    const I = h.length, de = x.length, Y = Math.min(I, de);
    let ae;
    for (ae = 0; ae < Y; ae++) {
      const ce = x[ae] = V ? gn(x[ae]) : Ht(x[ae]);
      p(
        h[ae],
        ce,
        C,
        null,
        M,
        F,
        K,
        B,
        V
      );
    }
    I > de ? J(
      h,
      M,
      F,
      !0,
      !1,
      Y
    ) : W(
      x,
      C,
      z,
      M,
      F,
      K,
      B,
      V,
      Y
    );
  }, Xe = (h, x, C, z, M, F, K, B, V) => {
    let I = 0;
    const de = x.length;
    let Y = h.length - 1, ae = de - 1;
    for (; I <= Y && I <= ae; ) {
      const ce = h[I], xe = x[I] = V ? gn(x[I]) : Ht(x[I]);
      if (zn(ce, xe))
        p(
          ce,
          xe,
          C,
          null,
          M,
          F,
          K,
          B,
          V
        );
      else
        break;
      I++;
    }
    for (; I <= Y && I <= ae; ) {
      const ce = h[Y], xe = x[ae] = V ? gn(x[ae]) : Ht(x[ae]);
      if (zn(ce, xe))
        p(
          ce,
          xe,
          C,
          null,
          M,
          F,
          K,
          B,
          V
        );
      else
        break;
      Y--, ae--;
    }
    if (I > Y) {
      if (I <= ae) {
        const ce = ae + 1, xe = ce < de ? x[ce].el : z;
        for (; I <= ae; )
          p(
            null,
            x[I] = V ? gn(x[I]) : Ht(x[I]),
            C,
            xe,
            M,
            F,
            K,
            B,
            V
          ), I++;
      }
    } else if (I > ae)
      for (; I <= Y; )
        me(h[I], M, F, !0), I++;
    else {
      const ce = I, xe = I, Fe = /* @__PURE__ */ new Map();
      for (I = xe; I <= ae; I++) {
        const kt = x[I] = V ? gn(x[I]) : Ht(x[I]);
        kt.key != null && Fe.set(kt.key, I);
      }
      let Me, xt = 0;
      const vt = ae - xe + 1;
      let zt = !1, It = 0;
      const Tr = new Array(vt);
      for (I = 0; I < vt; I++) Tr[I] = 0;
      for (I = ce; I <= Y; I++) {
        const kt = h[I];
        if (xt >= vt) {
          me(kt, M, F, !0);
          continue;
        }
        let Rt;
        if (kt.key != null)
          Rt = Fe.get(kt.key);
        else
          for (Me = xe; Me <= ae; Me++)
            if (Tr[Me - xe] === 0 && zn(kt, x[Me])) {
              Rt = Me;
              break;
            }
        Rt === void 0 ? me(kt, M, F, !0) : (Tr[Rt - xe] = I + 1, Rt >= It ? It = Rt : zt = !0, p(
          kt,
          x[Rt],
          C,
          null,
          M,
          F,
          K,
          B,
          V
        ), xt++);
      }
      const Sl = zt ? Th(Tr) : rr;
      for (Me = Sl.length - 1, I = vt - 1; I >= 0; I--) {
        const kt = xe + I, Rt = x[kt], El = kt + 1 < de ? x[kt + 1].el : z;
        Tr[I] === 0 ? p(
          null,
          Rt,
          C,
          El,
          M,
          F,
          K,
          B,
          V
        ) : zt && (Me < 0 || I !== Sl[Me] ? ie(Rt, C, El, 2) : Me--);
      }
    }
  }, ie = (h, x, C, z, M = null) => {
    const { el: F, type: K, transition: B, children: V, shapeFlag: I } = h;
    if (I & 6) {
      ie(h.component.subTree, x, C, z);
      return;
    }
    if (I & 128) {
      h.suspense.move(x, C, z);
      return;
    }
    if (I & 64) {
      K.move(h, x, C, We);
      return;
    }
    if (K === U) {
      r(F, x, C);
      for (let Y = 0; Y < V.length; Y++)
        ie(V[Y], x, C, z);
      r(h.anchor, x, C);
      return;
    }
    if (K === ma) {
      y(h, x, C);
      return;
    }
    if (z !== 2 && I & 1 && B)
      if (z === 0)
        B.beforeEnter(F), r(F, x, C), ft(() => B.enter(F), M);
      else {
        const { leave: Y, delayLeave: ae, afterLeave: ce } = B, xe = () => r(F, x, C), Fe = () => {
          Y(F, () => {
            xe(), ce && ce();
          });
        };
        ae ? ae(F, xe, Fe) : Fe();
      }
    else
      r(F, x, C);
  }, me = (h, x, C, z = !1, M = !1) => {
    const {
      type: F,
      props: K,
      ref: B,
      children: V,
      dynamicChildren: I,
      shapeFlag: de,
      patchFlag: Y,
      dirs: ae,
      cacheIndex: ce
    } = h;
    if (Y === -2 && (M = !1), B != null && to(B, null, C, h, !0), ce != null && (x.renderCache[ce] = void 0), de & 256) {
      x.ctx.deactivate(h);
      return;
    }
    const xe = de & 1 && ae, Fe = !sr(h);
    let Me;
    if (Fe && (Me = K && K.onVnodeBeforeUnmount) && jt(Me, x, h), de & 6)
      nt(h.component, C, z);
    else {
      if (de & 128) {
        h.suspense.unmount(C, z);
        return;
      }
      xe && An(h, null, x, "beforeUnmount"), de & 64 ? h.type.remove(
        h,
        x,
        C,
        We,
        z
      ) : I && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !I.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (F !== U || Y > 0 && Y & 64) ? J(
        I,
        x,
        C,
        !1,
        !0
      ) : (F === U && Y & 384 || !M && de & 16) && J(V, x, C), z && Be(h);
    }
    (Fe && (Me = K && K.onVnodeUnmounted) || xe) && ft(() => {
      Me && jt(Me, x, h), xe && An(h, null, x, "unmounted");
    }, C);
  }, Be = (h) => {
    const { type: x, el: C, anchor: z, transition: M } = h;
    if (x === U) {
      Oe(C, z);
      return;
    }
    if (x === ma) {
      k(h);
      return;
    }
    const F = () => {
      i(C), M && !M.persisted && M.afterLeave && M.afterLeave();
    };
    if (h.shapeFlag & 1 && M && !M.persisted) {
      const { leave: K, delayLeave: B } = M, V = () => K(C, F);
      B ? B(h.el, F, V) : V();
    } else
      F();
  }, Oe = (h, x) => {
    let C;
    for (; h !== x; )
      C = f(h), i(h), h = C;
    i(x);
  }, nt = (h, x, C) => {
    const { bum: z, scope: M, job: F, subTree: K, um: B, m: V, a: I } = h;
    Vl(V), Vl(I), z && Bi(z), M.stop(), F && (F.flags |= 8, me(K, h, x, C)), B && ft(B, x), ft(() => {
      h.isUnmounted = !0;
    }, x), x && x.pendingBranch && !x.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === x.pendingId && (x.deps--, x.deps === 0 && x.resolve());
  }, J = (h, x, C, z = !1, M = !1, F = 0) => {
    for (let K = F; K < h.length; K++)
      me(h[K], x, C, z, M);
  }, be = (h) => {
    if (h.shapeFlag & 6)
      return be(h.component.subTree);
    if (h.shapeFlag & 128)
      return h.suspense.next();
    const x = f(h.anchor || h.el), C = x && x[Ju];
    return C ? f(C) : x;
  };
  let E = !1;
  const _e = (h, x, C) => {
    h == null ? x._vnode && me(x._vnode, null, null, !0) : p(
      x._vnode || null,
      h,
      x,
      null,
      null,
      null,
      C
    ), x._vnode = h, E || (E = !0, Dl(), Yu(), E = !1);
  }, We = {
    p,
    um: me,
    m: ie,
    r: Be,
    mt: he,
    mc: W,
    pc: ue,
    pbc: Z,
    n: be,
    o: e
  };
  return {
    render: _e,
    hydrate: void 0,
    createApp: gh(_e)
  };
}
function fa({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Dn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ch(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function js(e, t, n = !1) {
  const r = e.children, i = t.children;
  if (le(r) && le(i))
    for (let o = 0; o < r.length; o++) {
      const a = r[o];
      let s = i[o];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = i[o] = gn(i[o]), s.el = a.el), !n && s.patchFlag !== -2 && js(a, s)), s.type === Fo && (s.el = a.el);
    }
}
function Th(e) {
  const t = e.slice(), n = [0];
  let r, i, o, a, s;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const d = e[r];
    if (d !== 0) {
      if (i = n[n.length - 1], e[i] < d) {
        t[r] = i, n.push(r);
        continue;
      }
      for (o = 0, a = n.length - 1; o < a; )
        s = o + a >> 1, e[n[s]] < d ? o = s + 1 : a = s;
      d < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, a = n[o - 1]; o-- > 0; )
    n[o] = a, a = t[a];
  return n;
}
function Sc(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Sc(t);
}
function Vl(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Oh = Symbol.for("v-scx"), Ah = () => Ge(Oh);
function wt(e, t) {
  return Vs(e, null, t);
}
function st(e, t, n) {
  return Vs(e, t, n);
}
function Vs(e, t, n = $e) {
  const { immediate: r, deep: i, flush: o, once: a } = n, s = tt({}, n), l = t && r || !t && o !== "post";
  let d;
  if (ai) {
    if (o === "sync") {
      const m = Ah();
      d = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {
      };
      return m.stop = Mt, m.resume = Mt, m.pause = Mt, m;
    }
  }
  const u = Ke;
  s.call = (m, b, p) => Ft(m, u, b, p);
  let c = !1;
  o === "post" ? s.scheduler = (m) => {
    ft(m, u && u.suspense);
  } : o !== "sync" && (c = !0, s.scheduler = (m, b) => {
    b ? m() : Fs(m);
  }), s.augmentJob = (m) => {
    t && (m.flags |= 4), c && (m.flags |= 2, u && (m.id = u.uid, m.i = u));
  };
  const f = Np(e, t, s);
  return ai && (d ? d.push(f) : l && f()), f;
}
function Dh(e, t, n) {
  const r = this.proxy, i = Ue(e) ? e.includes(".") ? Ec(r, e) : () => r[e] : e.bind(r, r);
  let o;
  fe(t) ? o = t : (o = t.handler, n = t);
  const a = bi(this), s = Vs(i, o.bind(r), n);
  return a(), s;
}
function Ec(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
const Ph = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${At(t)}Modifiers`] || e[`${Kn(t)}Modifiers`];
function Mh(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || $e;
  let i = n;
  const o = t.startsWith("update:"), a = o && Ph(r, t.slice(7));
  a && (a.trim && (i = n.map((u) => Ue(u) ? u.trim() : u)), a.number && (i = n.map(Qm)));
  let s, l = r[s = ia(t)] || // also try camelCase event handler (#2249)
  r[s = ia(At(t))];
  !l && o && (l = r[s = ia(Kn(t))]), l && Ft(
    l,
    e,
    6,
    i
  );
  const d = r[s + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[s])
      return;
    e.emitted[s] = !0, Ft(
      d,
      e,
      6,
      i
    );
  }
}
function Cc(e, t, n = !1) {
  const r = t.emitsCache, i = r.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let a = {}, s = !1;
  if (!fe(e)) {
    const l = (d) => {
      const u = Cc(d, t, !0);
      u && (s = !0, tt(a, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !s ? (Le(e) && r.set(e, null), null) : (le(o) ? o.forEach((l) => a[l] = null) : tt(a, o), Le(e) && r.set(e, a), a);
}
function Lo(e, t) {
  return !e || !ko(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ae(e, t[0].toLowerCase() + t.slice(1)) || Ae(e, Kn(t)) || Ae(e, t));
}
function Ul(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: i,
    propsOptions: [o],
    slots: a,
    attrs: s,
    emit: l,
    render: d,
    renderCache: u,
    props: c,
    data: f,
    setupState: m,
    ctx: b,
    inheritAttrs: p
  } = e, v = eo(e);
  let g, w;
  try {
    if (n.shapeFlag & 4) {
      const k = i || r, O = pn.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(k, {
        get(D, R, W) {
          return zp(
            `Property '${String(
              R
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(D, R, W);
        }
      }) : k;
      g = Ht(
        d.call(
          O,
          k,
          u,
          pn.NODE_ENV !== "production" ? Ci(c) : c,
          m,
          f,
          b
        )
      ), w = s;
    } else {
      const k = t;
      pn.NODE_ENV, g = Ht(
        k.length > 1 ? k(
          pn.NODE_ENV !== "production" ? Ci(c) : c,
          pn.NODE_ENV !== "production" ? {
            get attrs() {
              return Ci(s);
            },
            slots: a,
            emit: l
          } : { attrs: s, slots: a, emit: l }
        ) : k(
          pn.NODE_ENV !== "production" ? Ci(c) : c,
          null
        )
      ), w = t.props ? s : $h(s);
    }
  } catch (k) {
    Gr.length = 0, Po(k, e, 1), g = H(ht);
  }
  let y = g;
  if (w && p !== !1) {
    const k = Object.keys(w), { shapeFlag: O } = y;
    k.length && O & 7 && (o && k.some(Ts) && (w = Lh(
      w,
      o
    )), y = nn(y, w, !1, !0));
  }
  return n.dirs && (y = nn(y, null, !1, !0), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && ni(y, n.transition), g = y, eo(v), g;
}
const $h = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ko(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Lh = (e, t) => {
  const n = {};
  for (const r in e)
    (!Ts(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Fh(e, t, n) {
  const { props: r, children: i, component: o } = e, { props: a, children: s, patchFlag: l } = t, d = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? Bl(r, a, d) : !!a;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let c = 0; c < u.length; c++) {
        const f = u[c];
        if (a[f] !== r[f] && !Lo(d, f))
          return !0;
      }
    }
  } else
    return (i || s) && (!s || !s.$stable) ? !0 : r === a ? !1 : r ? a ? Bl(r, a, d) : !0 : !!a;
  return !1;
}
function Bl(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const o = r[i];
    if (t[o] !== e[o] && !Lo(n, o))
      return !0;
  }
  return !1;
}
function Nh({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Tc = (e) => e.__isSuspense;
function zh(e, t) {
  t && t.pendingBranch ? le(e) ? t.effects.push(...e) : t.effects.push(e) : Hp(e);
}
const U = Symbol.for("v-fgt"), Fo = Symbol.for("v-txt"), ht = Symbol.for("v-cmt"), ma = Symbol.for("v-stc"), Gr = [];
let St = null;
function S(e = !1) {
  Gr.push(St = e ? null : []);
}
function Ih() {
  Gr.pop(), St = Gr[Gr.length - 1] || null;
}
let ii = 1;
function Hl(e, t = !1) {
  ii += e, e < 0 && St && t && (St.hasOnce = !0);
}
function Oc(e) {
  return e.dynamicChildren = ii > 0 ? St || rr : null, Ih(), ii > 0 && St && St.push(e), e;
}
function T(e, t, n, r, i, o) {
  return Oc(
    _(
      e,
      t,
      n,
      r,
      i,
      o,
      !0
    )
  );
}
function ke(e, t, n, r, i) {
  return Oc(
    H(
      e,
      t,
      n,
      r,
      i,
      !0
    )
  );
}
function oi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function zn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ac = ({ key: e }) => e ?? null, qi = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ue(e) || Qe(e) || fe(e) ? { i: Je, r: e, k: t, f: !!n } : e : null);
function _(e, t = null, n = null, r = 0, i = null, o = e === U ? 0 : 1, a = !1, s = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ac(t),
    ref: t && qi(t),
    scopeId: Zu,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Je
  };
  return s ? (Us(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ue(n) ? 8 : 16), ii > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  St && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && St.push(l), l;
}
const H = Rh;
function Rh(e, t = null, n = null, r = 0, i = null, o = !1) {
  if ((!e || e === uc) && (e = ht), oi(e)) {
    const s = nn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Us(s, n), ii > 0 && !o && St && (s.shapeFlag & 6 ? St[St.indexOf(e)] = s : St.push(s)), s.patchFlag = -2, s;
  }
  if (Xh(e) && (e = e.__vccOpts), t) {
    t = jh(t);
    let { class: s, style: l } = t;
    s && !Ue(s) && (t.class = ye(s)), Le(l) && (Ls(l) && !le(l) && (l = tt({}, l)), t.style = hi(l));
  }
  const a = Ue(e) ? 1 : Tc(e) ? 128 : Qu(e) ? 64 : Le(e) ? 4 : fe(e) ? 2 : 0;
  return _(
    e,
    t,
    n,
    r,
    i,
    a,
    o,
    !0
  );
}
function jh(e) {
  return e ? Ls(e) || gc(e) ? tt({}, e) : e : null;
}
function nn(e, t, n = !1, r = !1) {
  const { props: i, ref: o, patchFlag: a, children: s, transition: l } = e, d = t ? dr(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Ac(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? le(o) ? o.concat(qi(t)) : [o, qi(t)] : qi(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: s,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== U ? a === -1 ? 16 : a | 16 : a,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && nn(e.ssContent),
    ssFallback: e.ssFallback && nn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && ni(
    u,
    l.clone(u)
  ), u;
}
function ee(e = " ", t = 0) {
  return H(Fo, null, e, t);
}
function Q(e = "", t = !1) {
  return t ? (S(), ke(ht, null, e)) : H(ht, null, e);
}
function Ht(e) {
  return e == null || typeof e == "boolean" ? H(ht) : le(e) ? H(
    U,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : oi(e) ? gn(e) : H(Fo, null, String(e));
}
function gn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : nn(e);
}
function Us(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (le(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Us(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !gc(t) ? t._ctx = Je : i === 3 && Je && (Je.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else fe(t) ? (t = { default: t, _ctx: Je }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [ee(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function dr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r)
      if (i === "class")
        t.class !== r.class && (t.class = ye([t.class, r.class]));
      else if (i === "style")
        t.style = hi([t.style, r.style]);
      else if (ko(i)) {
        const o = t[i], a = r[i];
        a && o !== a && !(le(o) && o.includes(a)) && (t[i] = o ? [].concat(o, a) : a);
      } else i !== "" && (t[i] = r[i]);
  }
  return t;
}
function jt(e, t, n, r = null) {
  Ft(e, t, 7, [
    n,
    r
  ]);
}
const Vh = pc();
let Uh = 0;
function Bh(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || Vh, o = {
    uid: Uh++,
    vnode: e,
    type: r,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new dp(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: yc(r, i),
    emitsOptions: Cc(r, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: $e,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: $e,
    data: $e,
    props: $e,
    attrs: $e,
    slots: $e,
    refs: $e,
    setupState: $e,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Mh.bind(null, o), e.ce && e.ce(o), o;
}
let Ke = null;
const Bs = () => Ke || Je;
let ro, Ha;
{
  const e = Co(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (o) => {
      i.length > 1 ? i.forEach((a) => a(o)) : i[0](o);
    };
  };
  ro = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ke = n
  ), Ha = t(
    "__VUE_SSR_SETTERS__",
    (n) => ai = n
  );
}
const bi = (e) => {
  const t = Ke;
  return ro(e), e.scope.on(), () => {
    e.scope.off(), ro(t);
  };
}, ql = () => {
  Ke && Ke.scope.off(), ro(null);
};
function Dc(e) {
  return e.vnode.shapeFlag & 4;
}
let ai = !1;
function Hh(e, t = !1, n = !1) {
  t && Ha(t);
  const { props: r, children: i } = e.vnode, o = Dc(e);
  vh(e, r, o, t), kh(e, i, n);
  const a = o ? qh(e, t) : void 0;
  return t && Ha(!1), a;
}
function qh(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, uh);
  const { setup: r } = n;
  if (r) {
    an();
    const i = e.setupContext = r.length > 1 ? Gh(e) : null, o = bi(e), a = wr(
      r,
      e,
      0,
      [
        e.props,
        i
      ]
    ), s = yu(a);
    if (sn(), o(), (s || e.sp) && !sr(e) && sc(e), s) {
      if (a.then(ql, ql), t)
        return a.then((l) => {
          Wl(e, l);
        }).catch((l) => {
          Po(l, e, 0);
        });
      e.asyncDep = a;
    } else
      Wl(e, a);
  } else
    Pc(e);
}
function Wl(e, t, n) {
  fe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Le(t) && (e.setupState = qu(t)), Pc(e);
}
function Pc(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Mt);
  {
    const i = bi(e);
    an();
    try {
      ch(e);
    } finally {
      sn(), i();
    }
  }
}
const Wh = {
  get(e, t) {
    return ot(e, "get", ""), e[t];
  }
};
function Gh(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Wh),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function No(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(qu(Dp(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Wr)
        return Wr[n](e);
    },
    has(t, n) {
      return n in t || n in Wr;
    }
  })) : e.proxy;
}
const Kh = /(?:^|[-_])(\w)/g, Yh = (e) => e.replace(Kh, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Mc(e, t = !0) {
  return fe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function $c(e, t, n = !1) {
  let r = Mc(t);
  if (!r && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (r = i[1]);
  }
  if (!r && e && e.parent) {
    const i = (o) => {
      for (const a in o)
        if (o[a] === t)
          return a;
    };
    r = i(
      e.components || e.parent.type.components
    ) || i(e.appContext.components);
  }
  return r ? Yh(r) : n ? "App" : "Anonymous";
}
function Xh(e) {
  return fe(e) && "__vccOpts" in e;
}
const $ = (e, t) => Lp(e, t, ai);
function je(e, t, n) {
  const r = arguments.length;
  return r === 2 ? Le(t) && !le(t) ? oi(t) ? H(e, null, [t]) : H(e, t) : H(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && oi(n) && (n = [n]), H(e, t, n));
}
const Zh = "3.5.13";
let qa;
const Gl = typeof window < "u" && window.trustedTypes;
if (Gl)
  try {
    qa = /* @__PURE__ */ Gl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Lc = qa ? (e) => qa.createHTML(e) : (e) => e, Jh = "http://www.w3.org/2000/svg", Qh = "http://www.w3.org/1998/Math/MathML", Xt = typeof document < "u" ? document : null, Kl = Xt && /* @__PURE__ */ Xt.createElement("template"), e1 = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const i = t === "svg" ? Xt.createElementNS(Jh, e) : t === "mathml" ? Xt.createElementNS(Qh, e) : n ? Xt.createElement(e, { is: n }) : Xt.createElement(e);
    return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (e) => Xt.createTextNode(e),
  createComment: (e) => Xt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Xt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, i, o) {
    const a = n ? n.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      Kl.innerHTML = Lc(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const s = Kl.content;
      if (r === "svg" || r === "mathml") {
        const l = s.firstChild;
        for (; l.firstChild; )
          s.appendChild(l.firstChild);
        s.removeChild(l);
      }
      t.insertBefore(s, n);
    }
    return [
      // first
      a ? a.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, un = "transition", Ar = "animation", si = Symbol("_vtc"), Fc = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, t1 = /* @__PURE__ */ tt(
  {},
  nc,
  Fc
), n1 = (e) => (e.displayName = "Transition", e.props = t1, e), ur = /* @__PURE__ */ n1(
  (e, { slots: t }) => je(Yp, r1(e), t)
), Pn = (e, t = []) => {
  le(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Yl = (e) => e ? le(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function r1(e) {
  const t = {};
  for (const P in e)
    P in Fc || (t[P] = e[P]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: r,
    duration: i,
    enterFromClass: o = `${n}-enter-from`,
    enterActiveClass: a = `${n}-enter-active`,
    enterToClass: s = `${n}-enter-to`,
    appearFromClass: l = o,
    appearActiveClass: d = a,
    appearToClass: u = s,
    leaveFromClass: c = `${n}-leave-from`,
    leaveActiveClass: f = `${n}-leave-active`,
    leaveToClass: m = `${n}-leave-to`
  } = e, b = i1(i), p = b && b[0], v = b && b[1], {
    onBeforeEnter: g,
    onEnter: w,
    onEnterCancelled: y,
    onLeave: k,
    onLeaveCancelled: O,
    onBeforeAppear: D = g,
    onAppear: R = w,
    onAppearCancelled: W = y
  } = t, L = (P, re, he, Te) => {
    P._enterCancelled = Te, Mn(P, re ? u : s), Mn(P, re ? d : a), he && he();
  }, Z = (P, re) => {
    P._isLeaving = !1, Mn(P, c), Mn(P, m), Mn(P, f), re && re();
  }, q = (P) => (re, he) => {
    const Te = P ? R : w, ge = () => L(re, P, he);
    Pn(Te, [re, ge]), Xl(() => {
      Mn(re, P ? l : o), Yt(re, P ? u : s), Yl(Te) || Zl(re, r, p, ge);
    });
  };
  return tt(t, {
    onBeforeEnter(P) {
      Pn(g, [P]), Yt(P, o), Yt(P, a);
    },
    onBeforeAppear(P) {
      Pn(D, [P]), Yt(P, l), Yt(P, d);
    },
    onEnter: q(!1),
    onAppear: q(!0),
    onLeave(P, re) {
      P._isLeaving = !0;
      const he = () => Z(P, re);
      Yt(P, c), P._enterCancelled ? (Yt(P, f), ed()) : (ed(), Yt(P, f)), Xl(() => {
        P._isLeaving && (Mn(P, c), Yt(P, m), Yl(k) || Zl(P, r, v, he));
      }), Pn(k, [P, he]);
    },
    onEnterCancelled(P) {
      L(P, !1, void 0, !0), Pn(y, [P]);
    },
    onAppearCancelled(P) {
      L(P, !0, void 0, !0), Pn(W, [P]);
    },
    onLeaveCancelled(P) {
      Z(P), Pn(O, [P]);
    }
  });
}
function i1(e) {
  if (e == null)
    return null;
  if (Le(e))
    return [pa(e.enter), pa(e.leave)];
  {
    const t = pa(e);
    return [t, t];
  }
}
function pa(e) {
  return ep(e);
}
function Yt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[si] || (e[si] = /* @__PURE__ */ new Set())).add(t);
}
function Mn(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[si];
  n && (n.delete(t), n.size || (e[si] = void 0));
}
function Xl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let o1 = 0;
function Zl(e, t, n, r) {
  const i = e._endId = ++o1, o = () => {
    i === e._endId && r();
  };
  if (n != null)
    return setTimeout(o, n);
  const { type: a, timeout: s, propCount: l } = a1(e, t);
  if (!a)
    return r();
  const d = a + "end";
  let u = 0;
  const c = () => {
    e.removeEventListener(d, f), o();
  }, f = (m) => {
    m.target === e && ++u >= l && c();
  };
  setTimeout(() => {
    u < l && c();
  }, s + 1), e.addEventListener(d, f);
}
function a1(e, t) {
  const n = window.getComputedStyle(e), r = (b) => (n[b] || "").split(", "), i = r(`${un}Delay`), o = r(`${un}Duration`), a = Jl(i, o), s = r(`${Ar}Delay`), l = r(`${Ar}Duration`), d = Jl(s, l);
  let u = null, c = 0, f = 0;
  t === un ? a > 0 && (u = un, c = a, f = o.length) : t === Ar ? d > 0 && (u = Ar, c = d, f = l.length) : (c = Math.max(a, d), u = c > 0 ? a > d ? un : Ar : null, f = u ? u === un ? o.length : l.length : 0);
  const m = u === un && /\b(transform|all)(,|$)/.test(
    r(`${un}Property`).toString()
  );
  return {
    type: u,
    timeout: c,
    propCount: f,
    hasTransform: m
  };
}
function Jl(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => Ql(n) + Ql(e[r])));
}
function Ql(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function ed() {
  return document.body.offsetHeight;
}
function s1(e, t, n) {
  const r = e[si];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const io = Symbol("_vod"), Nc = Symbol("_vsh"), l1 = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[io] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Dr(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Dr(e, !0), r.enter(e)) : r.leave(e, () => {
      Dr(e, !1);
    }) : Dr(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Dr(e, t);
  }
};
function Dr(e, t) {
  e.style.display = t ? e[io] : "none", e[Nc] = !t;
}
const d1 = Symbol(""), u1 = /(^|;)\s*display\s*:/;
function c1(e, t, n) {
  const r = e.style, i = Ue(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (Ue(t))
        for (const a of t.split(";")) {
          const s = a.slice(0, a.indexOf(":")).trim();
          n[s] == null && Wi(r, s, "");
        }
      else
        for (const a in t)
          n[a] == null && Wi(r, a, "");
    for (const a in n)
      a === "display" && (o = !0), Wi(r, a, n[a]);
  } else if (i) {
    if (t !== n) {
      const a = r[d1];
      a && (n += ";" + a), r.cssText = n, o = u1.test(n);
    }
  } else t && e.removeAttribute("style");
  io in e && (e[io] = o ? r.display : "", e[Nc] && (r.display = "none"));
}
const td = /\s*!important$/;
function Wi(e, t, n) {
  if (le(n))
    n.forEach((r) => Wi(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = f1(e, t);
    td.test(n) ? e.setProperty(
      Kn(r),
      n.replace(td, ""),
      "important"
    ) : e[r] = n;
  }
}
const nd = ["Webkit", "Moz", "ms"], ha = {};
function f1(e, t) {
  const n = ha[t];
  if (n)
    return n;
  let r = At(t);
  if (r !== "filter" && r in e)
    return ha[t] = r;
  r = Eo(r);
  for (let i = 0; i < nd.length; i++) {
    const o = nd[i] + r;
    if (o in e)
      return ha[t] = o;
  }
  return t;
}
const rd = "http://www.w3.org/1999/xlink";
function id(e, t, n, r, i, o = ap(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(rd, t.slice(6, t.length)) : e.setAttributeNS(rd, t, n) : n == null || o && !_u(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Lt(n) ? String(n) : n
  );
}
function od(e, t, n, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Lc(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const s = o === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (s !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const s = typeof e[t];
    s === "boolean" ? n = _u(n) : n == null && s === "string" ? (n = "", a = !0) : s === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(i || t);
}
function zc(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function m1(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const ad = Symbol("_vei");
function p1(e, t, n, r, i = null) {
  const o = e[ad] || (e[ad] = {}), a = o[t];
  if (r && a)
    a.value = r;
  else {
    const [s, l] = h1(t);
    if (r) {
      const d = o[t] = v1(
        r,
        i
      );
      zc(e, s, d, l);
    } else a && (m1(e, s, a, l), o[t] = void 0);
  }
}
const sd = /(?:Once|Passive|Capture)$/;
function h1(e) {
  let t;
  if (sd.test(e)) {
    t = {};
    let r;
    for (; r = e.match(sd); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Kn(e.slice(2)), t];
}
let ba = 0;
const b1 = /* @__PURE__ */ Promise.resolve(), g1 = () => ba || (b1.then(() => ba = 0), ba = Date.now());
function v1(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Ft(
      y1(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = g1(), n;
}
function y1(e, t) {
  if (le(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (i) => !i._stopped && r && r(i)
    );
  } else
    return t;
}
const ld = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, w1 = (e, t, n, r, i, o) => {
  const a = i === "svg";
  t === "class" ? s1(e, r, a) : t === "style" ? c1(e, n, r) : ko(t) ? Ts(t) || p1(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : x1(e, t, r, a)) ? (od(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && id(e, t, r, a, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Ue(r)) ? od(e, At(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), id(e, t, r, a));
};
function x1(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ld(t) && fe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return ld(t) && Ue(n) ? !1 : t in e;
}
const dd = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return le(t) ? (n) => Bi(t, n) : t;
}, ga = Symbol("_assign"), k1 = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[ga] = dd(n), zc(e, "change", () => {
      const r = e._modelValue, i = _1(e), o = e.checked, a = e[ga];
      if (le(r)) {
        const s = Su(r, i), l = s !== -1;
        if (o && !l)
          a(r.concat(i));
        else if (!o && l) {
          const d = [...r];
          d.splice(s, 1), a(d);
        }
      } else if (_o(r)) {
        const s = new Set(r);
        o ? s.add(i) : s.delete(i), a(s);
      } else
        a(Ic(e, o));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: ud,
  beforeUpdate(e, t, n) {
    e[ga] = dd(n), ud(e, t, n);
  }
};
function ud(e, { value: t, oldValue: n }, r) {
  e._modelValue = t;
  let i;
  if (le(t))
    i = Su(t, r.props.value) > -1;
  else if (_o(t))
    i = t.has(r.props.value);
  else {
    if (t === n) return;
    i = To(t, Ic(e, !0));
  }
  e.checked !== i && (e.checked = i);
}
function _1(e) {
  return "_value" in e ? e._value : e.value;
}
function Ic(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const S1 = /* @__PURE__ */ tt({ patchProp: w1 }, e1);
let cd;
function E1() {
  return cd || (cd = Sh(S1));
}
const C1 = (...e) => {
  const t = E1().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const i = O1(r);
    if (!i) return;
    const o = t._component;
    !fe(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const a = n(i, !1, T1(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, t;
};
function T1(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function O1(e) {
  return Ue(e) ? document.querySelector(e) : e;
}
function Rc(e, t, n) {
  let r = X(n == null ? void 0 : n.value), i = $(() => e.value !== void 0);
  return [$(() => i.value ? e.value : r.value), function(o) {
    return i.value || (r.value = o), t == null ? void 0 : t(o);
  }];
}
function Hs(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function gi() {
  let e = [], t = { addEventListener(n, r, i, o) {
    return n.addEventListener(r, i, o), t.add(() => n.removeEventListener(r, i, o));
  }, requestAnimationFrame(...n) {
    let r = requestAnimationFrame(...n);
    t.add(() => cancelAnimationFrame(r));
  }, nextFrame(...n) {
    t.requestAnimationFrame(() => {
      t.requestAnimationFrame(...n);
    });
  }, setTimeout(...n) {
    let r = setTimeout(...n);
    t.add(() => clearTimeout(r));
  }, microTask(...n) {
    let r = { current: !0 };
    return Hs(() => {
      r.current && n[0]();
    }), t.add(() => {
      r.current = !1;
    });
  }, style(n, r, i) {
    let o = n.style.getPropertyValue(r);
    return Object.assign(n.style, { [r]: i }), this.add(() => {
      Object.assign(n.style, { [r]: o });
    });
  }, group(n) {
    let r = gi();
    return n(r), this.add(() => r.dispose());
  }, add(n) {
    return e.push(n), () => {
      let r = e.indexOf(n);
      if (r >= 0) for (let i of e.splice(r, 1)) i();
    };
  }, dispose() {
    for (let n of e.splice(0)) n();
  } };
  return t;
}
var fd;
let A1 = Symbol("headlessui.useid"), D1 = 0;
const Dt = (fd = Xp) != null ? fd : function() {
  return Ge(A1, () => `${++D1}`)();
};
function pe(e) {
  var t;
  if (e == null || e.value == null) return null;
  let n = (t = e.value.$el) != null ? t : e.value;
  return n instanceof Node ? n : null;
}
function et(e, t, ...n) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...n) : i;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, et), r;
}
var P1 = Object.defineProperty, M1 = (e, t, n) => t in e ? P1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, md = (e, t, n) => (M1(e, typeof t != "symbol" ? t + "" : t, n), n);
let $1 = class {
  constructor() {
    md(this, "current", this.detect()), md(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}, vi = new $1();
function Gt(e) {
  if (vi.isServer) return null;
  if (e instanceof Node) return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = pe(e);
    if (t) return t.ownerDocument;
  }
  return document;
}
let Wa = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Tt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Tt || {}), oo = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(oo || {}), L1 = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(L1 || {});
function F1(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Wa)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var qs = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(qs || {});
function jc(e, t = 0) {
  var n;
  return e === ((n = Gt(e)) == null ? void 0 : n.body) ? !1 : et(t, { 0() {
    return e.matches(Wa);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Wa)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var N1 = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(N1 || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Un(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let z1 = ["textarea", "input"].join(",");
function I1(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, z1)) != null ? n : !1;
}
function Ws(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let i = t(n), o = t(r);
    if (i === null || o === null) return 0;
    let a = i.compareDocumentPosition(o);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function cr(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: i = [] } = {}) {
  var o;
  let a = (o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? o : document, s = Array.isArray(e) ? n ? Ws(e) : e : F1(e);
  i.length > 0 && s.length > 1 && (s = s.filter((b) => !i.includes(b))), r = r ?? a.activeElement;
  let l = (() => {
    if (t & 5) return 1;
    if (t & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), d = (() => {
    if (t & 1) return 0;
    if (t & 2) return Math.max(0, s.indexOf(r)) - 1;
    if (t & 4) return Math.max(0, s.indexOf(r)) + 1;
    if (t & 8) return s.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, c = 0, f = s.length, m;
  do {
    if (c >= f || c + f <= 0) return 0;
    let b = d + c;
    if (t & 16) b = (b + f) % f;
    else {
      if (b < 0) return 3;
      if (b >= f) return 1;
    }
    m = s[b], m == null || m.focus(u), c += l;
  } while (m !== a.activeElement);
  return t & 6 && I1(m) && m.select(), 2;
}
function Vc() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function R1() {
  return /Android/gi.test(window.navigator.userAgent);
}
function j1() {
  return Vc() || R1();
}
function Di(e, t, n) {
  vi.isServer || wt((r) => {
    document.addEventListener(e, t, n), r(() => document.removeEventListener(e, t, n));
  });
}
function Uc(e, t, n) {
  vi.isServer || wt((r) => {
    window.addEventListener(e, t, n), r(() => window.removeEventListener(e, t, n));
  });
}
function Bc(e, t, n = $(() => !0)) {
  function r(o, a) {
    if (!n.value || o.defaultPrevented) return;
    let s = a(o);
    if (s === null || !s.getRootNode().contains(s)) return;
    let l = function d(u) {
      return typeof u == "function" ? d(u()) : Array.isArray(u) || u instanceof Set ? u : [u];
    }(e);
    for (let d of l) {
      if (d === null) continue;
      let u = d instanceof HTMLElement ? d : pe(d);
      if (u != null && u.contains(s) || o.composed && o.composedPath().includes(u)) return;
    }
    return !jc(s, qs.Loose) && s.tabIndex !== -1 && o.preventDefault(), t(o, s);
  }
  let i = X(null);
  Di("pointerdown", (o) => {
    var a, s;
    n.value && (i.value = ((s = (a = o.composedPath) == null ? void 0 : a.call(o)) == null ? void 0 : s[0]) || o.target);
  }, !0), Di("mousedown", (o) => {
    var a, s;
    n.value && (i.value = ((s = (a = o.composedPath) == null ? void 0 : a.call(o)) == null ? void 0 : s[0]) || o.target);
  }, !0), Di("click", (o) => {
    j1() || i.value && (r(o, () => i.value), i.value = null);
  }, !0), Di("touchend", (o) => r(o, () => o.target instanceof HTMLElement ? o.target : null), !0), Uc("blur", (o) => r(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function pd(e, t) {
  if (e) return e;
  let n = t ?? "button";
  if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function V1(e, t) {
  let n = X(pd(e.value.type, e.value.as));
  return qe(() => {
    n.value = pd(e.value.type, e.value.as);
  }), wt(() => {
    var r;
    n.value || pe(t) && pe(t) instanceof HTMLButtonElement && !((r = pe(t)) != null && r.hasAttribute("type")) && (n.value = "button");
  }), n;
}
function hd(e) {
  return [e.screenX, e.screenY];
}
function U1() {
  let e = X([-1, -1]);
  return { wasMoved(t) {
    let n = hd(t);
    return e.value[0] === n[0] && e.value[1] === n[1] ? !1 : (e.value = n, !0);
  }, update(t) {
    e.value = hd(t);
  } };
}
function B1({ container: e, accept: t, walk: n, enabled: r }) {
  wt(() => {
    let i = e.value;
    if (!i || r !== void 0 && !r.value) return;
    let o = Gt(e);
    if (!o) return;
    let a = Object.assign((l) => t(l), { acceptNode: t }), s = o.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, a, !1);
    for (; s.nextNode(); ) n(s.currentNode);
  });
}
var pr = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(pr || {}), wn = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(wn || {});
function Ye({ visible: e = !0, features: t = 0, ourProps: n, theirProps: r, ...i }) {
  var o;
  let a = qc(r, n), s = Object.assign(i, { props: a });
  if (e || t & 2 && a.static) return va(s);
  if (t & 1) {
    let l = (o = a.unmount) == null || o ? 0 : 1;
    return et(l, { 0() {
      return null;
    }, 1() {
      return va({ ...i, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return va(s);
}
function va({ props: e, attrs: t, slots: n, slot: r, name: i }) {
  var o, a;
  let { as: s, ...l } = zo(e, ["unmount", "static"]), d = (o = n.default) == null ? void 0 : o.call(n, r), u = {};
  if (r) {
    let c = !1, f = [];
    for (let [m, b] of Object.entries(r)) typeof b == "boolean" && (c = !0), b === !0 && f.push(m);
    c && (u["data-headlessui-state"] = f.join(" "));
  }
  if (s === "template") {
    if (d = Hc(d ?? []), Object.keys(l).length > 0 || Object.keys(t).length > 0) {
      let [c, ...f] = d ?? [];
      if (!H1(c) || f.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t)).map((p) => p.trim()).filter((p, v, g) => g.indexOf(p) === v).sort((p, v) => p.localeCompare(v)).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
      let m = qc((a = c.props) != null ? a : {}, l, u), b = nn(c, m, !0);
      for (let p in m) p.startsWith("on") && (b.props || (b.props = {}), b.props[p] = m[p]);
      return b;
    }
    return Array.isArray(d) && d.length === 1 ? d[0] : d;
  }
  return je(s, Object.assign({}, l, u), { default: () => d });
}
function Hc(e) {
  return e.flatMap((t) => t.type === U ? Hc(t.children) : [t]);
}
function qc(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let i in r) i.startsWith("on") && typeof r[i] == "function" ? (n[i] != null || (n[i] = []), n[i].push(r[i])) : t[i] = r[i];
  if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map((r) => [r, void 0])));
  for (let r in n) Object.assign(t, { [r](i, ...o) {
    let a = n[r];
    for (let s of a) {
      if (i instanceof Event && i.defaultPrevented) return;
      s(i, ...o);
    }
  } });
  return t;
}
function Wc(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function zo(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function H1(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
var hr = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(hr || {});
let li = /* @__PURE__ */ ve({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    var r;
    let { features: i, ...o } = e, a = { "aria-hidden": (i & 2) === 2 ? !0 : (r = o["aria-hidden"]) != null ? r : void 0, hidden: (i & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(i & 4) === 4 && (i & 2) !== 2 && { display: "none" } } };
    return Ye({ ourProps: a, theirProps: o, slot: {}, attrs: n, slots: t, name: "Hidden" });
  };
} }), Gc = Symbol("Context");
var it = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(it || {});
function q1() {
  return Io() !== null;
}
function Io() {
  return Ge(Gc, null);
}
function Kc(e) {
  bt(Gc, e);
}
var Re = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Re || {});
function W1(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
let In = [];
W1(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && In[0] !== t.target && (In.unshift(t.target), In = In.filter((n) => n != null && n.isConnected), In.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function G1(e) {
  throw new Error("Unexpected object: " + e);
}
var pt = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(pt || {});
function K1(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let r = t.resolveActiveIndex(), i = r ?? -1;
  switch (e.focus) {
    case 0: {
      for (let o = 0; o < n.length; ++o) if (!t.resolveDisabled(n[o], o, n)) return o;
      return r;
    }
    case 1: {
      i === -1 && (i = n.length);
      for (let o = i - 1; o >= 0; --o) if (!t.resolveDisabled(n[o], o, n)) return o;
      return r;
    }
    case 2: {
      for (let o = i + 1; o < n.length; ++o) if (!t.resolveDisabled(n[o], o, n)) return o;
      return r;
    }
    case 3: {
      for (let o = n.length - 1; o >= 0; --o) if (!t.resolveDisabled(n[o], o, n)) return o;
      return r;
    }
    case 4: {
      for (let o = 0; o < n.length; ++o) if (t.resolveId(n[o], o, n) === e.id) return o;
      return r;
    }
    case 5:
      return null;
    default:
      G1(e);
  }
}
function Gs(e = {}, t = null, n = []) {
  for (let [r, i] of Object.entries(e)) Xc(n, Yc(t, r), i);
  return n;
}
function Yc(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Xc(e, t, n) {
  if (Array.isArray(n)) for (let [r, i] of n.entries()) Xc(e, Yc(t, r.toString()), i);
  else n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : Gs(n, t, e);
}
function Y1(e) {
  var t, n;
  let r = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
  if (r) {
    for (let i of r.elements) if (i !== e && (i.tagName === "INPUT" && i.type === "submit" || i.tagName === "BUTTON" && i.type === "submit" || i.nodeName === "INPUT" && i.type === "image")) {
      i.click();
      return;
    }
    (n = r.requestSubmit) == null || n.call(r);
  }
}
function Zc(e, t, n, r) {
  vi.isServer || wt((i) => {
    e = e ?? window, e.addEventListener(t, n, r), i(() => e.removeEventListener(t, n, r));
  });
}
var Fr = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Fr || {});
function X1() {
  let e = X(0);
  return Uc("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Jc(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.value) {
    let r = pe(n);
    r instanceof HTMLElement && t.add(r);
  }
  return t;
}
var Qc = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Qc || {});
let Pr = Object.assign(/* @__PURE__ */ ve({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: X(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: r }) {
  let i = X(null);
  r({ el: i, $el: i });
  let o = $(() => Gt(i)), a = X(!1);
  qe(() => a.value = !0), lt(() => a.value = !1), J1({ ownerDocument: o }, $(() => a.value && !!(e.features & 16)));
  let s = Q1({ ownerDocument: o, container: i, initialFocus: $(() => e.initialFocus) }, $(() => a.value && !!(e.features & 2)));
  e0({ ownerDocument: o, container: i, containers: e.containers, previousActiveElement: s }, $(() => a.value && !!(e.features & 8)));
  let l = X1();
  function d(m) {
    let b = pe(i);
    b && ((p) => p())(() => {
      et(l.value, { [Fr.Forwards]: () => {
        cr(b, Tt.First, { skipElements: [m.relatedTarget] });
      }, [Fr.Backwards]: () => {
        cr(b, Tt.Last, { skipElements: [m.relatedTarget] });
      } });
    });
  }
  let u = X(!1);
  function c(m) {
    m.key === "Tab" && (u.value = !0, requestAnimationFrame(() => {
      u.value = !1;
    }));
  }
  function f(m) {
    if (!a.value) return;
    let b = Jc(e.containers);
    pe(i) instanceof HTMLElement && b.add(pe(i));
    let p = m.relatedTarget;
    p instanceof HTMLElement && p.dataset.headlessuiFocusGuard !== "true" && (ef(b, p) || (u.value ? cr(pe(i), et(l.value, { [Fr.Forwards]: () => Tt.Next, [Fr.Backwards]: () => Tt.Previous }) | Tt.WrapAround, { relativeTo: m.target }) : m.target instanceof HTMLElement && Un(m.target)));
  }
  return () => {
    let m = {}, b = { ref: i, onKeydown: c, onFocusout: f }, { features: p, initialFocus: v, containers: g, ...w } = e;
    return je(U, [!!(p & 4) && je(li, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: hr.Focusable }), Ye({ ourProps: b, theirProps: { ...t, ...w }, slot: m, attrs: t, slots: n, name: "FocusTrap" }), !!(p & 4) && je(li, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: hr.Focusable })]);
  };
} }), { features: Qc });
function Z1(e) {
  let t = X(In.slice());
  return st([e], ([n], [r]) => {
    r === !0 && n === !1 ? Hs(() => {
      t.value.splice(0);
    }) : r === !1 && n === !0 && (t.value = In.slice());
  }, { flush: "post" }), () => {
    var n;
    return (n = t.value.find((r) => r != null && r.isConnected)) != null ? n : null;
  };
}
function J1({ ownerDocument: e }, t) {
  let n = Z1(t);
  qe(() => {
    wt(() => {
      var r, i;
      t.value || ((r = e.value) == null ? void 0 : r.activeElement) === ((i = e.value) == null ? void 0 : i.body) && Un(n());
    }, { flush: "post" });
  }), lt(() => {
    t.value && Un(n());
  });
}
function Q1({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let i = X(null), o = X(!1);
  return qe(() => o.value = !0), lt(() => o.value = !1), qe(() => {
    st([t, n, r], (a, s) => {
      if (a.every((d, u) => (s == null ? void 0 : s[u]) === d) || !r.value) return;
      let l = pe(t);
      l && Hs(() => {
        var d, u;
        if (!o.value) return;
        let c = pe(n), f = (d = e.value) == null ? void 0 : d.activeElement;
        if (c) {
          if (c === f) {
            i.value = f;
            return;
          }
        } else if (l.contains(f)) {
          i.value = f;
          return;
        }
        c ? Un(c) : cr(l, Tt.First | Tt.NoScroll) === oo.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (u = e.value) == null ? void 0 : u.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function e0({ ownerDocument: e, container: t, containers: n, previousActiveElement: r }, i) {
  var o;
  Zc((o = e.value) == null ? void 0 : o.defaultView, "focus", (a) => {
    if (!i.value) return;
    let s = Jc(n);
    pe(t) instanceof HTMLElement && s.add(pe(t));
    let l = r.value;
    if (!l) return;
    let d = a.target;
    d && d instanceof HTMLElement ? ef(s, d) ? (r.value = d, Un(d)) : (a.preventDefault(), a.stopPropagation(), Un(l)) : Un(r.value);
  }, !0);
}
function ef(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
function t0(e) {
  let t = za(e.getSnapshot());
  return lt(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function n0(e, t) {
  let n = e(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(i) {
    return r.add(i), () => r.delete(i);
  }, dispatch(i, ...o) {
    let a = t[i].call(n, ...o);
    a && (n = a, r.forEach((s) => s()));
  } };
}
function r0() {
  let e;
  return { before({ doc: t }) {
    var n;
    let r = t.documentElement;
    e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth;
  }, after({ doc: t, d: n }) {
    let r = t.documentElement, i = r.clientWidth - r.offsetWidth, o = e - i;
    n.style(r, "paddingRight", `${o}px`);
  } };
}
function i0() {
  return Vc() ? { before({ doc: e, d: t, meta: n }) {
    function r(i) {
      return n.containers.flatMap((o) => o()).some((o) => o.contains(i));
    }
    t.microTask(() => {
      var i;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let s = gi();
        s.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => s.dispose()));
      }
      let o = (i = window.scrollY) != null ? i : window.pageYOffset, a = null;
      t.addEventListener(e, "click", (s) => {
        if (s.target instanceof HTMLElement) try {
          let l = s.target.closest("a");
          if (!l) return;
          let { hash: d } = new URL(l.href), u = e.querySelector(d);
          u && !r(u) && (a = u);
        } catch {
        }
      }, !0), t.addEventListener(e, "touchstart", (s) => {
        if (s.target instanceof HTMLElement) if (r(s.target)) {
          let l = s.target;
          for (; l.parentElement && r(l.parentElement); ) l = l.parentElement;
          t.style(l, "overscrollBehavior", "contain");
        } else t.style(s.target, "touchAction", "none");
      }), t.addEventListener(e, "touchmove", (s) => {
        if (s.target instanceof HTMLElement) {
          if (s.target.tagName === "INPUT") return;
          if (r(s.target)) {
            let l = s.target;
            for (; l.parentElement && l.dataset.headlessuiPortal !== "" && !(l.scrollHeight > l.clientHeight || l.scrollWidth > l.clientWidth); ) l = l.parentElement;
            l.dataset.headlessuiPortal === "" && s.preventDefault();
          } else s.preventDefault();
        }
      }, { passive: !1 }), t.add(() => {
        var s;
        let l = (s = window.scrollY) != null ? s : window.pageYOffset;
        o !== l && window.scrollTo(0, o), a && a.isConnected && (a.scrollIntoView({ block: "nearest" }), a = null);
      });
    });
  } } : {};
}
function o0() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function a0(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let Rn = n0(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: gi(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: a0(n) }, i = [i0(), r0(), o0()];
  i.forEach(({ before: o }) => o == null ? void 0 : o(r)), i.forEach(({ after: o }) => o == null ? void 0 : o(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Rn.subscribe(() => {
  let e = Rn.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", i = n.count !== 0;
    (i && !r || !i && r) && Rn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && Rn.dispatch("TEARDOWN", n);
  }
});
function s0(e, t, n) {
  let r = t0(Rn), i = $(() => {
    let o = e.value ? r.value.get(e.value) : void 0;
    return o ? o.count > 0 : !1;
  });
  return st([e, t], ([o, a], [s], l) => {
    if (!o || !a) return;
    Rn.dispatch("PUSH", o, n);
    let d = !1;
    l(() => {
      d || (Rn.dispatch("POP", s ?? o, n), d = !0);
    });
  }, { immediate: !0 }), i;
}
let ya = /* @__PURE__ */ new Map(), Mr = /* @__PURE__ */ new Map();
function bd(e, t = X(!0)) {
  wt((n) => {
    var r;
    if (!t.value) return;
    let i = pe(e);
    if (!i) return;
    n(function() {
      var a;
      if (!i) return;
      let s = (a = Mr.get(i)) != null ? a : 1;
      if (s === 1 ? Mr.delete(i) : Mr.set(i, s - 1), s !== 1) return;
      let l = ya.get(i);
      l && (l["aria-hidden"] === null ? i.removeAttribute("aria-hidden") : i.setAttribute("aria-hidden", l["aria-hidden"]), i.inert = l.inert, ya.delete(i));
    });
    let o = (r = Mr.get(i)) != null ? r : 0;
    Mr.set(i, o + 1), o === 0 && (ya.set(i, { "aria-hidden": i.getAttribute("aria-hidden"), inert: i.inert }), i.setAttribute("aria-hidden", "true"), i.inert = !0);
  });
}
function l0({ defaultContainers: e = [], portals: t, mainTreeNodeRef: n } = {}) {
  let r = X(null), i = Gt(r);
  function o() {
    var a, s, l;
    let d = [];
    for (let u of e) u !== null && (u instanceof HTMLElement ? d.push(u) : "value" in u && u.value instanceof HTMLElement && d.push(u.value));
    if (t != null && t.value) for (let u of t.value) d.push(u);
    for (let u of (a = i == null ? void 0 : i.querySelectorAll("html > *, body > *")) != null ? a : []) u !== document.body && u !== document.head && u instanceof HTMLElement && u.id !== "headlessui-portal-root" && (u.contains(pe(r)) || u.contains((l = (s = pe(r)) == null ? void 0 : s.getRootNode()) == null ? void 0 : l.host) || d.some((c) => u.contains(c)) || d.push(u));
    return d;
  }
  return { resolveContainers: o, contains(a) {
    return o().some((s) => s.contains(a));
  }, mainTreeNodeRef: r, MainTreeNode() {
    return n != null ? null : je(li, { features: hr.Hidden, ref: r });
  } };
}
let tf = Symbol("ForcePortalRootContext");
function d0() {
  return Ge(tf, !1);
}
let gd = /* @__PURE__ */ ve({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: n }) {
  return bt(tf, e.force), () => {
    let { force: r, ...i } = e;
    return Ye({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: n, name: "ForcePortalRoot" });
  };
} }), nf = Symbol("StackContext");
var Ga = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Ga || {});
function u0() {
  return Ge(nf, () => {
  });
}
function c0({ type: e, enabled: t, element: n, onUpdate: r }) {
  let i = u0();
  function o(...a) {
    r == null || r(...a), i(...a);
  }
  qe(() => {
    st(t, (a, s) => {
      a ? o(0, e, n) : s === !0 && o(1, e, n);
    }, { immediate: !0, flush: "sync" });
  }), lt(() => {
    t.value && o(1, e, n);
  }), bt(nf, o);
}
let rf = Symbol("DescriptionContext");
function f0() {
  let e = Ge(rf, null);
  if (e === null) throw new Error("Missing parent");
  return e;
}
function Ks({ slot: e = X({}), name: t = "Description", props: n = {} } = {}) {
  let r = X([]);
  function i(o) {
    return r.value.push(o), () => {
      let a = r.value.indexOf(o);
      a !== -1 && r.value.splice(a, 1);
    };
  }
  return bt(rf, { register: i, slot: e, name: t, props: n }), $(() => r.value.length > 0 ? r.value.join(" ") : void 0);
}
let of = /* @__PURE__ */ ve({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n }) {
  var r;
  let i = (r = e.id) != null ? r : `headlessui-description-${Dt()}`, o = f0();
  return qe(() => lt(o.register(i))), () => {
    let { name: a = "Description", slot: s = X({}), props: l = {} } = o, { ...d } = e, u = { ...Object.entries(l).reduce((c, [f, m]) => Object.assign(c, { [f]: ei(m) }), {}), id: i };
    return Ye({ ourProps: u, theirProps: d, slot: s.value, attrs: t, slots: n, name: a });
  };
} });
function m0(e) {
  let t = Gt(e);
  if (!t) {
    if (e === null) return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let n = t.getElementById("headlessui-portal-root");
  if (n) return n;
  let r = t.createElement("div");
  return r.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(r);
}
const Ka = /* @__PURE__ */ new WeakMap();
function p0(e) {
  var t;
  return (t = Ka.get(e)) != null ? t : 0;
}
function vd(e, t) {
  let n = t(p0(e));
  return n <= 0 ? Ka.delete(e) : Ka.set(e, n), n;
}
let h0 = /* @__PURE__ */ ve({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: n }) {
  let r = X(null), i = $(() => Gt(r)), o = d0(), a = Ge(af, null), s = X(o === !0 || a == null ? m0(r.value) : a.resolveTarget());
  s.value && vd(s.value, (f) => f + 1);
  let l = X(!1);
  qe(() => {
    l.value = !0;
  }), wt(() => {
    o || a != null && (s.value = a.resolveTarget());
  });
  let d = Ge(Ya, null), u = !1, c = Bs();
  return st(r, () => {
    if (u || !d) return;
    let f = pe(r);
    f && (lt(d.register(f), c), u = !0);
  }), lt(() => {
    var f, m;
    let b = (f = i.value) == null ? void 0 : f.getElementById("headlessui-portal-root");
    !b || s.value !== b || vd(s.value, (p) => p - 1) || s.value.children.length > 0 || (m = s.value.parentElement) == null || m.removeChild(s.value);
  }), () => {
    if (!l.value || s.value === null) return null;
    let f = { ref: r, "data-headlessui-portal": "" };
    return je(Wp, { to: s.value }, Ye({ ourProps: f, theirProps: e, slot: {}, attrs: n, slots: t, name: "Portal" }));
  };
} }), Ya = Symbol("PortalParentContext");
function b0() {
  let e = Ge(Ya, null), t = X([]);
  function n(o) {
    return t.value.push(o), e && e.register(o), () => r(o);
  }
  function r(o) {
    let a = t.value.indexOf(o);
    a !== -1 && t.value.splice(a, 1), e && e.unregister(o);
  }
  let i = { register: n, unregister: r, portals: t };
  return [t, /* @__PURE__ */ ve({ name: "PortalWrapper", setup(o, { slots: a }) {
    return bt(Ya, i), () => {
      var s;
      return (s = a.default) == null ? void 0 : s.call(a);
    };
  } })];
}
let af = Symbol("PortalGroupContext"), g0 = /* @__PURE__ */ ve({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: n }) {
  let r = yr({ resolveTarget() {
    return e.target;
  } });
  return bt(af, r), () => {
    let { target: i, ...o } = e;
    return Ye({ theirProps: o, ourProps: {}, slot: {}, attrs: t, slots: n, name: "PortalGroup" });
  };
} });
var v0 = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(v0 || {});
let Xa = Symbol("DialogContext");
function Ro(e) {
  let t = Ge(Xa, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Ro), n;
  }
  return t;
}
let Pi = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", y0 = /* @__PURE__ */ ve({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Pi }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: r, expose: i }) {
  var o, a;
  let s = (o = e.id) != null ? o : `headlessui-dialog-${Dt()}`, l = X(!1);
  qe(() => {
    l.value = !0;
  });
  let d = !1, u = $(() => e.role === "dialog" || e.role === "alertdialog" ? e.role : (d || (d = !0, console.warn(`Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), c = X(0), f = Io(), m = $(() => e.open === Pi && f !== null ? (f.value & it.Open) === it.Open : e.open), b = X(null), p = $(() => Gt(b));
  if (i({ el: b, $el: b }), !(e.open !== Pi || f !== null)) throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof m.value != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${m.value === Pi ? void 0 : e.open}`);
  let v = $(() => l.value && m.value ? 0 : 1), g = $(() => v.value === 0), w = $(() => c.value > 1), y = Ge(Xa, null) !== null, [k, O] = b0(), { resolveContainers: D, mainTreeNodeRef: R, MainTreeNode: W } = l0({ portals: k, defaultContainers: [$(() => {
    var ie;
    return (ie = G.panelRef.value) != null ? ie : b.value;
  })] }), L = $(() => w.value ? "parent" : "leaf"), Z = $(() => f !== null ? (f.value & it.Closing) === it.Closing : !1), q = $(() => y || Z.value ? !1 : g.value), P = $(() => {
    var ie, me, Be;
    return (Be = Array.from((me = (ie = p.value) == null ? void 0 : ie.querySelectorAll("body > *")) != null ? me : []).find((Oe) => Oe.id === "headlessui-portal-root" ? !1 : Oe.contains(pe(R)) && Oe instanceof HTMLElement)) != null ? Be : null;
  });
  bd(P, q);
  let re = $(() => w.value ? !0 : g.value), he = $(() => {
    var ie, me, Be;
    return (Be = Array.from((me = (ie = p.value) == null ? void 0 : ie.querySelectorAll("[data-headlessui-portal]")) != null ? me : []).find((Oe) => Oe.contains(pe(R)) && Oe instanceof HTMLElement)) != null ? Be : null;
  });
  bd(he, re), c0({ type: "Dialog", enabled: $(() => v.value === 0), element: b, onUpdate: (ie, me) => {
    if (me === "Dialog") return et(ie, { [Ga.Add]: () => c.value += 1, [Ga.Remove]: () => c.value -= 1 });
  } });
  let Te = Ks({ name: "DialogDescription", slot: $(() => ({ open: m.value })) }), ge = X(null), G = { titleId: ge, panelRef: X(null), dialogState: v, setTitleId(ie) {
    ge.value !== ie && (ge.value = ie);
  }, close() {
    t("close", !1);
  } };
  bt(Xa, G);
  let ue = $(() => !(!g.value || w.value));
  Bc(D, (ie, me) => {
    ie.preventDefault(), G.close(), tn(() => me == null ? void 0 : me.focus());
  }, ue);
  let ze = $(() => !(w.value || v.value !== 0));
  Zc((a = p.value) == null ? void 0 : a.defaultView, "keydown", (ie) => {
    ze.value && (ie.defaultPrevented || ie.key === Re.Escape && (ie.preventDefault(), ie.stopPropagation(), G.close()));
  });
  let Xe = $(() => !(Z.value || v.value !== 0 || y));
  return s0(p, Xe, (ie) => {
    var me;
    return { containers: [...(me = ie.containers) != null ? me : [], D] };
  }), wt((ie) => {
    if (v.value !== 0) return;
    let me = pe(b);
    if (!me) return;
    let Be = new ResizeObserver((Oe) => {
      for (let nt of Oe) {
        let J = nt.target.getBoundingClientRect();
        J.x === 0 && J.y === 0 && J.width === 0 && J.height === 0 && G.close();
      }
    });
    Be.observe(me), ie(() => Be.disconnect());
  }), () => {
    let { open: ie, initialFocus: me, ...Be } = e, Oe = { ...n, ref: b, id: s, role: u.value, "aria-modal": v.value === 0 ? !0 : void 0, "aria-labelledby": ge.value, "aria-describedby": Te.value }, nt = { open: v.value === 0 };
    return je(gd, { force: !0 }, () => [je(h0, () => je(g0, { target: b.value }, () => je(gd, { force: !1 }, () => je(Pr, { initialFocus: me, containers: D, features: g.value ? et(L.value, { parent: Pr.features.RestoreFocus, leaf: Pr.features.All & ~Pr.features.FocusLock }) : Pr.features.None }, () => je(O, {}, () => Ye({ ourProps: Oe, theirProps: { ...Be, ...n }, slot: nt, attrs: n, slots: r, visible: v.value === 0, features: pr.RenderStrategy | pr.Static, name: "Dialog" })))))), je(W)]);
  };
} }), w0 = /* @__PURE__ */ ve({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n }) {
  var r;
  let i = (r = e.id) != null ? r : `headlessui-dialog-overlay-${Dt()}`, o = Ro("DialogOverlay");
  function a(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), o.close());
  }
  return () => {
    let { ...s } = e;
    return Ye({ ourProps: { id: i, "aria-hidden": !0, onClick: a }, theirProps: s, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogOverlay" });
  };
} }), x0 = /* @__PURE__ */ ve({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: r }) {
  var i;
  let o = (i = e.id) != null ? i : `headlessui-dialog-panel-${Dt()}`, a = Ro("DialogPanel");
  r({ el: a.panelRef, $el: a.panelRef });
  function s(l) {
    l.stopPropagation();
  }
  return () => {
    let { ...l } = e, d = { id: o, ref: a.panelRef, onClick: s };
    return Ye({ ourProps: d, theirProps: l, slot: { open: a.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogPanel" });
  };
} }), xr = /* @__PURE__ */ ve({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n }) {
  var r;
  let i = (r = e.id) != null ? r : `headlessui-dialog-title-${Dt()}`, o = Ro("DialogTitle");
  return qe(() => {
    o.setTitleId(i), lt(() => o.setTitleId(null));
  }), () => {
    let { ...a } = e;
    return Ye({ ourProps: { id: i }, theirProps: a, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogTitle" });
  };
} }), k0 = of, yd = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function wd(e) {
  var t, n;
  let r = (t = e.innerText) != null ? t : "", i = e.cloneNode(!0);
  if (!(i instanceof HTMLElement)) return r;
  let o = !1;
  for (let s of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) s.remove(), o = !0;
  let a = o ? (n = i.innerText) != null ? n : "" : r;
  return yd.test(a) && (a = a.replace(yd, "")), a;
}
function _0(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string") return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let r = n.split(" ").map((i) => {
      let o = document.getElementById(i);
      if (o) {
        let a = o.getAttribute("aria-label");
        return typeof a == "string" ? a.trim() : wd(o).trim();
      }
      return null;
    }).filter(Boolean);
    if (r.length > 0) return r.join(", ");
  }
  return wd(e).trim();
}
function S0(e) {
  let t = X(""), n = X("");
  return () => {
    let r = pe(e);
    if (!r) return "";
    let i = r.innerText;
    if (t.value === i) return n.value;
    let o = _0(r).trim().toLowerCase();
    return t.value = i, n.value = o, o;
  };
}
function E0(e, t) {
  return e === t;
}
var C0 = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(C0 || {}), T0 = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(T0 || {}), O0 = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(O0 || {});
function A0(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let sf = Symbol("ListboxContext");
function jo(e) {
  let t = Ge(sf, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, jo), n;
  }
  return t;
}
let lf = /* @__PURE__ */ ve({ name: "Listbox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => E0 }, horizontal: { type: [Boolean], default: !1 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: n, emit: r }) {
  let i = X(1), o = X(null), a = X(null), s = X(null), l = X([]), d = X(""), u = X(null), c = X(1);
  function f(y = (k) => k) {
    let k = u.value !== null ? l.value[u.value] : null, O = Ws(y(l.value.slice()), (R) => pe(R.dataRef.domRef)), D = k ? O.indexOf(k) : null;
    return D === -1 && (D = null), { options: O, activeOptionIndex: D };
  }
  let m = $(() => e.multiple ? 1 : 0), [b, p] = Rc($(() => e.modelValue), (y) => r("update:modelValue", y), $(() => e.defaultValue)), v = $(() => b.value === void 0 ? et(m.value, { 1: [], 0: void 0 }) : b.value), g = { listboxState: i, value: v, mode: m, compare(y, k) {
    if (typeof e.by == "string") {
      let O = e.by;
      return (y == null ? void 0 : y[O]) === (k == null ? void 0 : k[O]);
    }
    return e.by(y, k);
  }, orientation: $(() => e.horizontal ? "horizontal" : "vertical"), labelRef: o, buttonRef: a, optionsRef: s, disabled: $(() => e.disabled), options: l, searchQuery: d, activeOptionIndex: u, activationTrigger: c, closeListbox() {
    e.disabled || i.value !== 1 && (i.value = 1, u.value = null);
  }, openListbox() {
    e.disabled || i.value !== 0 && (i.value = 0);
  }, goToOption(y, k, O) {
    if (e.disabled || i.value === 1) return;
    let D = f(), R = K1(y === pt.Specific ? { focus: pt.Specific, id: k } : { focus: y }, { resolveItems: () => D.options, resolveActiveIndex: () => D.activeOptionIndex, resolveId: (W) => W.id, resolveDisabled: (W) => W.dataRef.disabled });
    d.value = "", u.value = R, c.value = O ?? 1, l.value = D.options;
  }, search(y) {
    if (e.disabled || i.value === 1) return;
    let k = d.value !== "" ? 0 : 1;
    d.value += y.toLowerCase();
    let O = (u.value !== null ? l.value.slice(u.value + k).concat(l.value.slice(0, u.value + k)) : l.value).find((R) => R.dataRef.textValue.startsWith(d.value) && !R.dataRef.disabled), D = O ? l.value.indexOf(O) : -1;
    D === -1 || D === u.value || (u.value = D, c.value = 1);
  }, clearSearch() {
    e.disabled || i.value !== 1 && d.value !== "" && (d.value = "");
  }, registerOption(y, k) {
    let O = f((D) => [...D, { id: y, dataRef: k }]);
    l.value = O.options, u.value = O.activeOptionIndex;
  }, unregisterOption(y) {
    let k = f((O) => {
      let D = O.findIndex((R) => R.id === y);
      return D !== -1 && O.splice(D, 1), O;
    });
    l.value = k.options, u.value = k.activeOptionIndex, c.value = 1;
  }, theirOnChange(y) {
    e.disabled || p(y);
  }, select(y) {
    e.disabled || p(et(m.value, { 0: () => y, 1: () => {
      let k = se(g.value.value).slice(), O = se(y), D = k.findIndex((R) => g.compare(O, se(R)));
      return D === -1 ? k.push(O) : k.splice(D, 1), k;
    } }));
  } };
  Bc([a, s], (y, k) => {
    var O;
    g.closeListbox(), jc(k, qs.Loose) || (y.preventDefault(), (O = pe(a)) == null || O.focus());
  }, $(() => i.value === 0)), bt(sf, g), Kc($(() => et(i.value, { 0: it.Open, 1: it.Closed })));
  let w = $(() => {
    var y;
    return (y = pe(a)) == null ? void 0 : y.closest("form");
  });
  return qe(() => {
    st([w], () => {
      if (!w.value || e.defaultValue === void 0) return;
      function y() {
        g.theirOnChange(e.defaultValue);
      }
      return w.value.addEventListener("reset", y), () => {
        var k;
        (k = w.value) == null || k.removeEventListener("reset", y);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: y, modelValue: k, disabled: O, form: D, ...R } = e, W = { open: i.value === 0, disabled: O, value: v.value };
    return je(U, [...y != null && v.value != null ? Gs({ [y]: v.value }).map(([L, Z]) => je(li, Wc({ features: hr.Hidden, key: L, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: D, disabled: O, name: L, value: Z }))) : [], Ye({ ourProps: {}, theirProps: { ...n, ...zo(R, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: W, slots: t, attrs: n, name: "Listbox" })]);
  };
} }), df = /* @__PURE__ */ ve({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: r }) {
  var i;
  let o = (i = e.id) != null ? i : `headlessui-listbox-button-${Dt()}`, a = jo("ListboxButton");
  r({ el: a.buttonRef, $el: a.buttonRef });
  function s(c) {
    switch (c.key) {
      case Re.Space:
      case Re.Enter:
      case Re.ArrowDown:
        c.preventDefault(), a.openListbox(), tn(() => {
          var f;
          (f = pe(a.optionsRef)) == null || f.focus({ preventScroll: !0 }), a.value.value || a.goToOption(pt.First);
        });
        break;
      case Re.ArrowUp:
        c.preventDefault(), a.openListbox(), tn(() => {
          var f;
          (f = pe(a.optionsRef)) == null || f.focus({ preventScroll: !0 }), a.value.value || a.goToOption(pt.Last);
        });
        break;
    }
  }
  function l(c) {
    switch (c.key) {
      case Re.Space:
        c.preventDefault();
        break;
    }
  }
  function d(c) {
    a.disabled.value || (a.listboxState.value === 0 ? (a.closeListbox(), tn(() => {
      var f;
      return (f = pe(a.buttonRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    })) : (c.preventDefault(), a.openListbox(), A0(() => {
      var f;
      return (f = pe(a.optionsRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    })));
  }
  let u = V1($(() => ({ as: e.as, type: t.type })), a.buttonRef);
  return () => {
    var c, f;
    let m = { open: a.listboxState.value === 0, disabled: a.disabled.value, value: a.value.value }, { ...b } = e, p = { ref: a.buttonRef, id: o, type: u.value, "aria-haspopup": "listbox", "aria-controls": (c = pe(a.optionsRef)) == null ? void 0 : c.id, "aria-expanded": a.listboxState.value === 0, "aria-labelledby": a.labelRef.value ? [(f = pe(a.labelRef)) == null ? void 0 : f.id, o].join(" ") : void 0, disabled: a.disabled.value === !0 ? !0 : void 0, onKeydown: s, onKeyup: l, onClick: d };
    return Ye({ ourProps: p, theirProps: b, slot: m, attrs: t, slots: n, name: "ListboxButton" });
  };
} }), uf = /* @__PURE__ */ ve({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: r }) {
  var i;
  let o = (i = e.id) != null ? i : `headlessui-listbox-options-${Dt()}`, a = jo("ListboxOptions"), s = X(null);
  r({ el: a.optionsRef, $el: a.optionsRef });
  function l(c) {
    switch (s.value && clearTimeout(s.value), c.key) {
      case Re.Space:
        if (a.searchQuery.value !== "") return c.preventDefault(), c.stopPropagation(), a.search(c.key);
      case Re.Enter:
        if (c.preventDefault(), c.stopPropagation(), a.activeOptionIndex.value !== null) {
          let f = a.options.value[a.activeOptionIndex.value];
          a.select(f.dataRef.value);
        }
        a.mode.value === 0 && (a.closeListbox(), tn(() => {
          var f;
          return (f = pe(a.buttonRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
        }));
        break;
      case et(a.orientation.value, { vertical: Re.ArrowDown, horizontal: Re.ArrowRight }):
        return c.preventDefault(), c.stopPropagation(), a.goToOption(pt.Next);
      case et(a.orientation.value, { vertical: Re.ArrowUp, horizontal: Re.ArrowLeft }):
        return c.preventDefault(), c.stopPropagation(), a.goToOption(pt.Previous);
      case Re.Home:
      case Re.PageUp:
        return c.preventDefault(), c.stopPropagation(), a.goToOption(pt.First);
      case Re.End:
      case Re.PageDown:
        return c.preventDefault(), c.stopPropagation(), a.goToOption(pt.Last);
      case Re.Escape:
        c.preventDefault(), c.stopPropagation(), a.closeListbox(), tn(() => {
          var f;
          return (f = pe(a.buttonRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        break;
      case Re.Tab:
        c.preventDefault(), c.stopPropagation();
        break;
      default:
        c.key.length === 1 && (a.search(c.key), s.value = setTimeout(() => a.clearSearch(), 350));
        break;
    }
  }
  let d = Io(), u = $(() => d !== null ? (d.value & it.Open) === it.Open : a.listboxState.value === 0);
  return () => {
    var c, f;
    let m = { open: a.listboxState.value === 0 }, { ...b } = e, p = { "aria-activedescendant": a.activeOptionIndex.value === null || (c = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : c.id, "aria-multiselectable": a.mode.value === 1 ? !0 : void 0, "aria-labelledby": (f = pe(a.buttonRef)) == null ? void 0 : f.id, "aria-orientation": a.orientation.value, id: o, onKeydown: l, role: "listbox", tabIndex: 0, ref: a.optionsRef };
    return Ye({ ourProps: p, theirProps: b, slot: m, attrs: t, slots: n, features: pr.RenderStrategy | pr.Static, visible: u.value, name: "ListboxOptions" });
  };
} }), cf = /* @__PURE__ */ ve({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: null } }, setup(e, { slots: t, attrs: n, expose: r }) {
  var i;
  let o = (i = e.id) != null ? i : `headlessui-listbox-option-${Dt()}`, a = jo("ListboxOption"), s = X(null);
  r({ el: s, $el: s });
  let l = $(() => a.activeOptionIndex.value !== null ? a.options.value[a.activeOptionIndex.value].id === o : !1), d = $(() => et(a.mode.value, { 0: () => a.compare(se(a.value.value), se(e.value)), 1: () => se(a.value.value).some((y) => a.compare(se(y), se(e.value))) })), u = $(() => et(a.mode.value, { 1: () => {
    var y;
    let k = se(a.value.value);
    return ((y = a.options.value.find((O) => k.some((D) => a.compare(se(D), se(O.dataRef.value))))) == null ? void 0 : y.id) === o;
  }, 0: () => d.value })), c = S0(s), f = $(() => ({ disabled: e.disabled, value: e.value, get textValue() {
    return c();
  }, domRef: s }));
  qe(() => a.registerOption(o, f)), lt(() => a.unregisterOption(o)), qe(() => {
    st([a.listboxState, d], () => {
      a.listboxState.value === 0 && d.value && et(a.mode.value, { 1: () => {
        u.value && a.goToOption(pt.Specific, o);
      }, 0: () => {
        a.goToOption(pt.Specific, o);
      } });
    }, { immediate: !0 });
  }), wt(() => {
    a.listboxState.value === 0 && l.value && a.activationTrigger.value !== 0 && tn(() => {
      var y, k;
      return (k = (y = pe(s)) == null ? void 0 : y.scrollIntoView) == null ? void 0 : k.call(y, { block: "nearest" });
    });
  });
  function m(y) {
    if (e.disabled) return y.preventDefault();
    a.select(e.value), a.mode.value === 0 && (a.closeListbox(), tn(() => {
      var k;
      return (k = pe(a.buttonRef)) == null ? void 0 : k.focus({ preventScroll: !0 });
    }));
  }
  function b() {
    if (e.disabled) return a.goToOption(pt.Nothing);
    a.goToOption(pt.Specific, o);
  }
  let p = U1();
  function v(y) {
    p.update(y);
  }
  function g(y) {
    p.wasMoved(y) && (e.disabled || l.value || a.goToOption(pt.Specific, o, 0));
  }
  function w(y) {
    p.wasMoved(y) && (e.disabled || l.value && a.goToOption(pt.Nothing));
  }
  return () => {
    let { disabled: y } = e, k = { active: l.value, selected: d.value, disabled: y }, { value: O, disabled: D, ...R } = e, W = { id: o, ref: s, role: "option", tabIndex: y === !0 ? void 0 : -1, "aria-disabled": y === !0 ? !0 : void 0, "aria-selected": d.value, disabled: void 0, onClick: m, onFocus: b, onPointerenter: v, onMouseenter: v, onPointermove: g, onMousemove: g, onPointerleave: w, onMouseleave: w };
    return Ye({ ourProps: W, theirProps: R, slot: k, attrs: n, slots: t, name: "ListboxOption" });
  };
} }), ff = Symbol("LabelContext");
function mf() {
  let e = Ge(ff, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, mf), t;
  }
  return e;
}
function pf({ slot: e = {}, name: t = "Label", props: n = {} } = {}) {
  let r = X([]);
  function i(o) {
    return r.value.push(o), () => {
      let a = r.value.indexOf(o);
      a !== -1 && r.value.splice(a, 1);
    };
  }
  return bt(ff, { register: i, slot: e, name: t, props: n }), $(() => r.value.length > 0 ? r.value.join(" ") : void 0);
}
let D0 = /* @__PURE__ */ ve({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: null } }, setup(e, { slots: t, attrs: n }) {
  var r;
  let i = (r = e.id) != null ? r : `headlessui-label-${Dt()}`, o = mf();
  return qe(() => lt(o.register(i))), () => {
    let { name: a = "Label", slot: s = {}, props: l = {} } = o, { passive: d, ...u } = e, c = { ...Object.entries(l).reduce((f, [m, b]) => Object.assign(f, { [m]: ei(b) }), {}), id: i };
    return d && (delete c.onClick, delete c.htmlFor, delete u.onClick), Ye({ ourProps: c, theirProps: u, slot: s, attrs: n, slots: t, name: a });
  };
} });
function P0(e, t) {
  return e === t;
}
let hf = Symbol("RadioGroupContext");
function bf(e) {
  let t = Ge(hf, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, bf), n;
  }
  return t;
}
let gf = /* @__PURE__ */ ve({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => P0 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, id: { type: String, default: null } }, inheritAttrs: !1, setup(e, { emit: t, attrs: n, slots: r, expose: i }) {
  var o;
  let a = (o = e.id) != null ? o : `headlessui-radiogroup-${Dt()}`, s = X(null), l = X([]), d = pf({ name: "RadioGroupLabel" }), u = Ks({ name: "RadioGroupDescription" });
  i({ el: s, $el: s });
  let [c, f] = Rc($(() => e.modelValue), (v) => t("update:modelValue", v), $(() => e.defaultValue)), m = { options: l, value: c, disabled: $(() => e.disabled), firstOption: $(() => l.value.find((v) => !v.propsRef.disabled)), containsCheckedOption: $(() => l.value.some((v) => m.compare(se(v.propsRef.value), se(e.modelValue)))), compare(v, g) {
    if (typeof e.by == "string") {
      let w = e.by;
      return (v == null ? void 0 : v[w]) === (g == null ? void 0 : g[w]);
    }
    return e.by(v, g);
  }, change(v) {
    var g;
    if (e.disabled || m.compare(se(c.value), se(v))) return !1;
    let w = (g = l.value.find((y) => m.compare(se(y.propsRef.value), se(v)))) == null ? void 0 : g.propsRef;
    return w != null && w.disabled ? !1 : (f(v), !0);
  }, registerOption(v) {
    l.value.push(v), l.value = Ws(l.value, (g) => g.element);
  }, unregisterOption(v) {
    let g = l.value.findIndex((w) => w.id === v);
    g !== -1 && l.value.splice(g, 1);
  } };
  bt(hf, m), B1({ container: $(() => pe(s)), accept(v) {
    return v.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : v.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(v) {
    v.setAttribute("role", "none");
  } });
  function b(v) {
    if (!s.value || !s.value.contains(v.target)) return;
    let g = l.value.filter((w) => w.propsRef.disabled === !1).map((w) => w.element);
    switch (v.key) {
      case Re.Enter:
        Y1(v.currentTarget);
        break;
      case Re.ArrowLeft:
      case Re.ArrowUp:
        if (v.preventDefault(), v.stopPropagation(), cr(g, Tt.Previous | Tt.WrapAround) === oo.Success) {
          let w = l.value.find((y) => {
            var k;
            return y.element === ((k = Gt(s)) == null ? void 0 : k.activeElement);
          });
          w && m.change(w.propsRef.value);
        }
        break;
      case Re.ArrowRight:
      case Re.ArrowDown:
        if (v.preventDefault(), v.stopPropagation(), cr(g, Tt.Next | Tt.WrapAround) === oo.Success) {
          let w = l.value.find((y) => {
            var k;
            return y.element === ((k = Gt(y.element)) == null ? void 0 : k.activeElement);
          });
          w && m.change(w.propsRef.value);
        }
        break;
      case Re.Space:
        {
          v.preventDefault(), v.stopPropagation();
          let w = l.value.find((y) => {
            var k;
            return y.element === ((k = Gt(y.element)) == null ? void 0 : k.activeElement);
          });
          w && m.change(w.propsRef.value);
        }
        break;
    }
  }
  let p = $(() => {
    var v;
    return (v = pe(s)) == null ? void 0 : v.closest("form");
  });
  return qe(() => {
    st([p], () => {
      if (!p.value || e.defaultValue === void 0) return;
      function v() {
        m.change(e.defaultValue);
      }
      return p.value.addEventListener("reset", v), () => {
        var g;
        (g = p.value) == null || g.removeEventListener("reset", v);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: v, name: g, form: w, ...y } = e, k = { ref: s, id: a, role: "radiogroup", "aria-labelledby": d.value, "aria-describedby": u.value, onKeydown: b };
    return je(U, [...g != null && c.value != null ? Gs({ [g]: c.value }).map(([O, D]) => je(li, Wc({ features: hr.Hidden, key: O, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: w, disabled: v, name: O, value: D }))) : [], Ye({ ourProps: k, theirProps: { ...n, ...zo(y, ["modelValue", "defaultValue", "by"]) }, slot: {}, attrs: n, slots: r, name: "RadioGroup" })]);
  };
} });
var M0 = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(M0 || {});
let vf = /* @__PURE__ */ ve({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: null } }, setup(e, { attrs: t, slots: n, expose: r }) {
  var i;
  let o = (i = e.id) != null ? i : `headlessui-radiogroup-option-${Dt()}`, a = bf("RadioGroupOption"), s = pf({ name: "RadioGroupLabel" }), l = Ks({ name: "RadioGroupDescription" }), d = X(null), u = $(() => ({ value: e.value, disabled: e.disabled })), c = X(1);
  r({ el: d, $el: d });
  let f = $(() => pe(d));
  qe(() => a.registerOption({ id: o, element: f, propsRef: u })), lt(() => a.unregisterOption(o));
  let m = $(() => {
    var k;
    return ((k = a.firstOption.value) == null ? void 0 : k.id) === o;
  }), b = $(() => a.disabled.value || e.disabled), p = $(() => a.compare(se(a.value.value), se(e.value))), v = $(() => b.value ? -1 : p.value || !a.containsCheckedOption.value && m.value ? 0 : -1);
  function g() {
    var k;
    a.change(e.value) && (c.value |= 2, (k = pe(d)) == null || k.focus());
  }
  function w() {
    c.value |= 2;
  }
  function y() {
    c.value &= -3;
  }
  return () => {
    let { value: k, disabled: O, ...D } = e, R = { checked: p.value, disabled: b.value, active: !!(c.value & 2) }, W = { id: o, ref: d, role: "radio", "aria-checked": p.value ? "true" : "false", "aria-labelledby": s.value, "aria-describedby": l.value, "aria-disabled": b.value ? !0 : void 0, tabIndex: v.value, onClick: b.value ? void 0 : g, onFocus: b.value ? void 0 : w, onBlur: b.value ? void 0 : y };
    return Ye({ ourProps: W, theirProps: D, slot: R, attrs: t, slots: n, name: "RadioGroupOption" });
  };
} }), yf = D0, $0 = of;
function L0(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return t.called = !0, e(...n);
  };
}
function wa(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Mi(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Za = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Za || {});
function F0(e, t) {
  let n = gi();
  if (!e) return n.dispose;
  let { transitionDuration: r, transitionDelay: i } = getComputedStyle(e), [o, a] = [r, i].map((s) => {
    let [l = 0] = s.split(",").filter(Boolean).map((d) => d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3).sort((d, u) => u - d);
    return l;
  });
  return o !== 0 ? n.setTimeout(() => t("finished"), o + a) : t("finished"), n.add(() => t("cancelled")), n.dispose;
}
function xd(e, t, n, r, i, o) {
  let a = gi(), s = o !== void 0 ? L0(o) : () => {
  };
  return Mi(e, ...i), wa(e, ...t, ...n), a.nextFrame(() => {
    Mi(e, ...n), wa(e, ...r), a.add(F0(e, (l) => (Mi(e, ...r, ...t), wa(e, ...i), s(l))));
  }), a.add(() => Mi(e, ...t, ...n, ...r, ...i)), a.add(() => s("cancelled")), a.dispose;
}
function $n(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let Ys = Symbol("TransitionContext");
var N0 = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(N0 || {});
function z0() {
  return Ge(Ys, null) !== null;
}
function I0() {
  let e = Ge(Ys, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function R0() {
  let e = Ge(Xs, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Xs = Symbol("NestingContext");
function Vo(e) {
  return "children" in e ? Vo(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function wf(e) {
  let t = X([]), n = X(!1);
  qe(() => n.value = !0), lt(() => n.value = !1);
  function r(o, a = wn.Hidden) {
    let s = t.value.findIndex(({ id: l }) => l === o);
    s !== -1 && (et(a, { [wn.Unmount]() {
      t.value.splice(s, 1);
    }, [wn.Hidden]() {
      t.value[s].state = "hidden";
    } }), !Vo(t) && n.value && (e == null || e()));
  }
  function i(o) {
    let a = t.value.find(({ id: s }) => s === o);
    return a ? a.state !== "visible" && (a.state = "visible") : t.value.push({ id: o, state: "visible" }), () => r(o, wn.Unmount);
  }
  return { children: t, register: i, unregister: r };
}
let xf = pr.RenderStrategy, kf = /* @__PURE__ */ ve({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: r, expose: i }) {
  let o = X(0);
  function a() {
    o.value |= it.Opening, t("beforeEnter");
  }
  function s() {
    o.value &= ~it.Opening, t("afterEnter");
  }
  function l() {
    o.value |= it.Closing, t("beforeLeave");
  }
  function d() {
    o.value &= ~it.Closing, t("afterLeave");
  }
  if (!z0() && q1()) return () => je(_f, { ...e, onBeforeEnter: a, onAfterEnter: s, onBeforeLeave: l, onAfterLeave: d }, r);
  let u = X(null), c = $(() => e.unmount ? wn.Unmount : wn.Hidden);
  i({ el: u, $el: u });
  let { show: f, appear: m } = I0(), { register: b, unregister: p } = R0(), v = X(f.value ? "visible" : "hidden"), g = { value: !0 }, w = Dt(), y = { value: !1 }, k = wf(() => {
    !y.value && v.value !== "hidden" && (v.value = "hidden", p(w), d());
  });
  qe(() => {
    let re = b(w);
    lt(re);
  }), wt(() => {
    if (c.value === wn.Hidden && w) {
      if (f.value && v.value !== "visible") {
        v.value = "visible";
        return;
      }
      et(v.value, { hidden: () => p(w), visible: () => b(w) });
    }
  });
  let O = $n(e.enter), D = $n(e.enterFrom), R = $n(e.enterTo), W = $n(e.entered), L = $n(e.leave), Z = $n(e.leaveFrom), q = $n(e.leaveTo);
  qe(() => {
    wt(() => {
      if (v.value === "visible") {
        let re = pe(u);
        if (re instanceof Comment && re.data === "") throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function P(re) {
    let he = g.value && !m.value, Te = pe(u);
    !Te || !(Te instanceof HTMLElement) || he || (y.value = !0, f.value && a(), f.value || l(), re(f.value ? xd(Te, O, D, R, W, (ge) => {
      y.value = !1, ge === Za.Finished && s();
    }) : xd(Te, L, Z, q, W, (ge) => {
      y.value = !1, ge === Za.Finished && (Vo(k) || (v.value = "hidden", p(w), d()));
    })));
  }
  return qe(() => {
    st([f], (re, he, Te) => {
      P(Te), g.value = !1;
    }, { immediate: !0 });
  }), bt(Xs, k), Kc($(() => et(v.value, { visible: it.Open, hidden: it.Closed }) | o.value)), () => {
    let { appear: re, show: he, enter: Te, enterFrom: ge, enterTo: G, entered: ue, leave: ze, leaveFrom: Xe, leaveTo: ie, ...me } = e, Be = { ref: u }, Oe = { ...me, ...m.value && f.value && vi.isServer ? { class: ye([n.class, me.class, ...O, ...D]) } : {} };
    return Ye({ theirProps: Oe, ourProps: Be, slot: {}, slots: r, attrs: n, features: xf, visible: v.value === "visible", name: "TransitionChild" });
  };
} }), j0 = kf, _f = /* @__PURE__ */ ve({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: r }) {
  let i = Io(), o = $(() => e.show === null && i !== null ? (i.value & it.Open) === it.Open : e.show);
  wt(() => {
    if (![!0, !1].includes(o.value)) throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = X(o.value ? "visible" : "hidden"), s = wf(() => {
    a.value = "hidden";
  }), l = X(!0), d = { show: o, appear: $(() => e.appear || !l.value) };
  return qe(() => {
    wt(() => {
      l.value = !1, o.value ? a.value = "visible" : Vo(s) || (a.value = "hidden");
    });
  }), bt(Xs, s), bt(Ys, d), () => {
    let u = zo(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), c = { unmount: e.unmount };
    return Ye({ ourProps: { ...c, as: "template" }, theirProps: {}, slot: {}, slots: { ...r, default: () => [je(j0, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...n, ...c, ...u }, r.default)] }, attrs: {}, features: xf, visible: a.value === "visible", name: "Transition" });
  };
} });
function V0() {
  const { state: e, send: t } = Nt();
  function n() {
    const i = new URLSearchParams(window.location.search), o = {};
    i.forEach((s, l) => {
      o[l] = s;
    });
    const a = o.affiliate || o.aff;
    return a && (o.affiliate = a), o;
  }
  const r = n();
  document.querySelectorAll("[data-sell-store][data-sell-product]").forEach((i) => {
    r.affiliate && !i.hasAttribute("data-sell-affiliate") && i.setAttribute("data-sell-affiliate", r.affiliate), i.addEventListener("click", () => {
      var p, v, g, w, y, k, O, D;
      if (!e.value.matches("closed")) return;
      const o = i.attributes["data-sell-store"].value, a = i.attributes["data-sell-product"].value, s = (p = i.attributes["data-sell-variant"]) == null ? void 0 : p.value, l = (v = i.attributes["data-sell-coupon"]) == null ? void 0 : v.value, d = (g = i.attributes["data-sell-extra"]) == null ? void 0 : g.value, u = (w = i.attributes["data-sell-quantity"]) == null ? void 0 : w.value, c = (y = i.attributes["data-sell-email"]) == null ? void 0 : y.value, f = ((k = i.attributes["data-sell-darkmode"]) == null ? void 0 : k.value) === "true", m = (O = i.attributes["data-sell-theme"]) == null ? void 0 : O.value, b = (D = i.attributes["data-sell-affiliate"]) == null ? void 0 : D.value;
      t({
        type: "OPEN",
        store_id: o,
        product_id: a,
        variant_id: s,
        coupon: l,
        extra: d,
        quantity: u,
        email: c,
        affiliate: b,
        customization: {
          darkMode: f,
          theme: m
        }
      });
    });
  });
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var j = function() {
  return j = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, j.apply(this, arguments);
};
function Zs(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function we(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Se(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; ) o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (a) throw a.error;
    }
  }
  return o;
}
function Ie(e, t, n) {
  if (arguments.length === 2) for (var r = 0, i = t.length, o; r < i; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var Pe;
(function(e) {
  e.Start = "xstate.start", e.Stop = "xstate.stop", e.Raise = "xstate.raise", e.Send = "xstate.send", e.Cancel = "xstate.cancel", e.NullEvent = "", e.Assign = "xstate.assign", e.After = "xstate.after", e.DoneState = "done.state", e.DoneInvoke = "done.invoke", e.Log = "xstate.log", e.Init = "xstate.init", e.Invoke = "xstate.invoke", e.ErrorExecution = "error.execution", e.ErrorCommunication = "error.communication", e.ErrorPlatform = "error.platform", e.ErrorCustom = "xstate.error", e.Update = "xstate.update", e.Pure = "xstate.pure", e.Choose = "xstate.choose";
})(Pe || (Pe = {}));
var Sn;
(function(e) {
  e.Parent = "#_parent", e.Internal = "#_internal";
})(Sn || (Sn = {}));
var ao = Pe.Start, Uo = Pe.Stop, kr = Pe.Raise, yi = Pe.Send, Js = Pe.Cancel, Sf = Pe.NullEvent, Bo = Pe.Assign, U0 = Pe.After, B0 = Pe.DoneState, Ho = Pe.Log, Ef = Pe.Init, so = Pe.Invoke, H0 = Pe.ErrorExecution, Ja = Pe.ErrorPlatform, Qs = Pe.ErrorCustom, qo = Pe.Update, Cf = Pe.Choose, Tf = Pe.Pure;
const q0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  after: U0,
  assign: Bo,
  cancel: Js,
  choose: Cf,
  doneState: B0,
  error: Qs,
  errorExecution: H0,
  errorPlatform: Ja,
  init: Ef,
  invoke: so,
  log: Ho,
  nullEvent: Sf,
  pure: Tf,
  raise: kr,
  send: yi,
  start: ao,
  stop: Uo,
  update: qo
}, Symbol.toStringTag, { value: "Module" }));
var Of = ".", kd = {}, Qa = "xstate.guard", W0 = "", $i;
function el(e, t, n) {
  n === void 0 && (n = Of);
  var r = Kr(e, n), i = Kr(t, n);
  return De(i) ? De(r) ? i === r : !1 : De(r) ? r in i : Object.keys(r).every(function(o) {
    return o in i ? el(r[o], i[o]) : !1;
  });
}
function Af(e) {
  try {
    return De(e) || typeof e == "number" ? "".concat(e) : e.type;
  } catch {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
function es(e, t) {
  try {
    return _r(e) ? e : e.toString().split(t);
  } catch {
    throw new Error("'".concat(e, "' is not a valid state path."));
  }
}
function G0(e) {
  return typeof e == "object" && "value" in e && "context" in e && "event" in e && "_event" in e;
}
function Kr(e, t) {
  if (G0(e))
    return e.value;
  if (_r(e))
    return lo(e);
  if (typeof e != "string")
    return e;
  var n = es(e, t);
  return lo(n);
}
function lo(e) {
  if (e.length === 1)
    return e[0];
  for (var t = {}, n = t, r = 0; r < e.length - 1; r++)
    r === e.length - 2 ? n[e[r]] = e[r + 1] : (n[e[r]] = {}, n = n[e[r]]);
  return t;
}
function Nr(e, t) {
  for (var n = {}, r = Object.keys(e), i = 0; i < r.length; i++) {
    var o = r[i];
    n[o] = t(e[o], o, e, i);
  }
  return n;
}
function _d(e, t, n) {
  var r, i, o = {};
  try {
    for (var a = we(Object.keys(e)), s = a.next(); !s.done; s = a.next()) {
      var l = s.value, d = e[l];
      n(d) && (o[l] = t(d, l, e));
    }
  } catch (u) {
    r = {
      error: u
    };
  } finally {
    try {
      s && !s.done && (i = a.return) && i.call(a);
    } finally {
      if (r) throw r.error;
    }
  }
  return o;
}
var K0 = function(e) {
  return function(t) {
    var n, r, i = t;
    try {
      for (var o = we(e), a = o.next(); !a.done; a = o.next()) {
        var s = a.value;
        i = i[s];
      }
    } catch (l) {
      n = {
        error: l
      };
    } finally {
      try {
        a && !a.done && (r = o.return) && r.call(o);
      } finally {
        if (n) throw n.error;
      }
    }
    return i;
  };
};
function Y0(e, t) {
  return function(n) {
    var r, i, o = n;
    try {
      for (var a = we(e), s = a.next(); !s.done; s = a.next()) {
        var l = s.value;
        o = o[t][l];
      }
    } catch (d) {
      r = {
        error: d
      };
    } finally {
      try {
        s && !s.done && (i = a.return) && i.call(a);
      } finally {
        if (r) throw r.error;
      }
    }
    return o;
  };
}
function Gi(e) {
  if (!e)
    return [[]];
  if (De(e))
    return [[e]];
  var t = He(Object.keys(e).map(function(n) {
    var r = e[n];
    return typeof r != "string" && (!r || !Object.keys(r).length) ? [[n]] : Gi(e[n]).map(function(i) {
      return [n].concat(i);
    });
  }));
  return t;
}
function He(e) {
  var t;
  return (t = []).concat.apply(t, Ie([], Se(e), !1));
}
function Df(e) {
  return _r(e) ? e : [e];
}
function Pt(e) {
  return e === void 0 ? [] : Df(e);
}
function uo(e, t, n) {
  var r, i;
  if (Ce(e))
    return e(t, n.data);
  var o = {};
  try {
    for (var a = we(Object.keys(e)), s = a.next(); !s.done; s = a.next()) {
      var l = s.value, d = e[l];
      Ce(d) ? o[l] = d(t, n.data) : o[l] = d;
    }
  } catch (u) {
    r = {
      error: u
    };
  } finally {
    try {
      s && !s.done && (i = a.return) && i.call(a);
    } finally {
      if (r) throw r.error;
    }
  }
  return o;
}
function X0(e) {
  return /^(done|error)\./.test(e);
}
function Sd(e) {
  return !!(e instanceof Promise || e !== null && (Ce(e) || typeof e == "object") && Ce(e.then));
}
function Z0(e) {
  return e !== null && typeof e == "object" && "transition" in e && typeof e.transition == "function";
}
function J0(e, t) {
  var n, r, i = Se([[], []], 2), o = i[0], a = i[1];
  try {
    for (var s = we(e), l = s.next(); !l.done; l = s.next()) {
      var d = l.value;
      t(d) ? o.push(d) : a.push(d);
    }
  } catch (u) {
    n = {
      error: u
    };
  } finally {
    try {
      l && !l.done && (r = s.return) && r.call(s);
    } finally {
      if (n) throw n.error;
    }
  }
  return [o, a];
}
function Pf(e, t) {
  return Nr(e.states, function(n, r) {
    if (n) {
      var i = (De(t) ? void 0 : t[r]) || (n ? n.current : void 0);
      if (i)
        return {
          current: i,
          states: Pf(n, i)
        };
    }
  });
}
function Q0(e, t) {
  return {
    current: t,
    states: Pf(e, t)
  };
}
function Ed(e, t, n, r) {
  var i = e && n.reduce(function(o, a) {
    var s, l, d = a.assignment, u = {
      state: r,
      action: a,
      _event: t
    }, c = {};
    if (Ce(d))
      c = d(o, t.data, u);
    else
      try {
        for (var f = we(Object.keys(d)), m = f.next(); !m.done; m = f.next()) {
          var b = m.value, p = d[b];
          c[b] = Ce(p) ? p(o, t.data, u) : p;
        }
      } catch (v) {
        s = {
          error: v
        };
      } finally {
        try {
          m && !m.done && (l = f.return) && l.call(f);
        } finally {
          if (s) throw s.error;
        }
      }
    return Object.assign({}, o, c);
  }, e);
  return i;
}
var eb = function() {
};
function _r(e) {
  return Array.isArray(e);
}
function Ce(e) {
  return typeof e == "function";
}
function De(e) {
  return typeof e == "string";
}
function Mf(e, t) {
  if (e)
    return De(e) ? {
      type: Qa,
      name: e,
      predicate: t ? t[e] : void 0
    } : Ce(e) ? {
      type: Qa,
      name: e.name,
      predicate: e
    } : e;
}
function tb(e) {
  try {
    return "subscribe" in e && Ce(e.subscribe);
  } catch {
    return !1;
  }
}
var vn = /* @__PURE__ */ function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
$i = {}, $i[vn] = function() {
  return this;
}, $i[Symbol.observable] = function() {
  return this;
};
function br(e) {
  return !!e && "__xstatenode" in e;
}
function nb(e) {
  return !!e && typeof e.send == "function";
}
function Wo(e, t) {
  return De(e) || typeof e == "number" ? j({
    type: e
  }, t) : e;
}
function rt(e, t) {
  if (!De(e) && "$$type" in e && e.$$type === "scxml")
    return e;
  var n = Wo(e);
  return j({
    name: n.type,
    data: n,
    $$type: "scxml",
    type: "external"
  }, t);
}
function Xn(e, t) {
  var n = Df(t).map(function(r) {
    return typeof r > "u" || typeof r == "string" || br(r) ? {
      target: r,
      event: e
    } : j(j({}, r), {
      event: e
    });
  });
  return n;
}
function rb(e) {
  if (!(e === void 0 || e === W0))
    return Pt(e);
}
function $f(e, t, n, r, i) {
  var o = e.options.guards, a = {
    state: i,
    cond: t,
    _event: r
  };
  if (t.type === Qa)
    return ((o == null ? void 0 : o[t.name]) || t.predicate)(n, r.data, a);
  var s = o == null ? void 0 : o[t.type];
  if (!s)
    throw new Error("Guard '".concat(t.type, "' is not implemented on machine '").concat(e.id, "'."));
  return s(n, r.data, a);
}
function Lf(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function Ki(e, t, n) {
  var r = function() {
  }, i = typeof e == "object", o = i ? e : null;
  return {
    next: ((i ? e.next : e) || r).bind(o),
    error: ((i ? e.error : t) || r).bind(o),
    complete: ((i ? e.complete : n) || r).bind(o)
  };
}
function Li(e, t) {
  return "".concat(e, ":invocation[").concat(t, "]");
}
function ts(e) {
  return (e.type === kr || e.type === yi && e.to === Sn.Internal) && typeof e.delay != "number";
}
var Bn = /* @__PURE__ */ rt({
  type: Ef
});
function co(e, t) {
  return t && t[e] || void 0;
}
function gr(e, t) {
  var n;
  if (De(e) || typeof e == "number") {
    var r = co(e, t);
    Ce(r) ? n = {
      type: e,
      exec: r
    } : r ? n = r : n = {
      type: e,
      exec: void 0
    };
  } else if (Ce(e))
    n = {
      // Convert action to string if unnamed
      type: e.name || e.toString(),
      exec: e
    };
  else {
    var r = co(e.type, t);
    if (Ce(r))
      n = j(j({}, e), {
        exec: r
      });
    else if (r) {
      var i = r.type || e.type;
      n = j(j(j({}, r), e), {
        type: i
      });
    } else
      n = e;
  }
  return n;
}
var Qt = function(e, t) {
  if (!e)
    return [];
  var n = _r(e) ? e : [e];
  return n.map(function(r) {
    return gr(r, t);
  });
};
function Go(e) {
  var t = gr(e);
  return j(j({
    id: De(e) ? e : t.id
  }, t), {
    type: t.type
  });
}
function Ff(e, t) {
  return {
    type: kr,
    event: typeof e == "function" ? e : Wo(e),
    delay: t ? t.delay : void 0,
    id: t == null ? void 0 : t.id
  };
}
function Nf(e, t, n, r) {
  var i = {
    _event: n
  }, o = rt(Ce(e.event) ? e.event(t, n.data, i) : e.event), a;
  if (De(e.delay)) {
    var s = r && r[e.delay];
    a = Ce(s) ? s(t, n.data, i) : s;
  } else
    a = Ce(e.delay) ? e.delay(t, n.data, i) : e.delay;
  return j(j({}, e), {
    type: kr,
    _event: o,
    delay: a
  });
}
function Sr(e, t) {
  return {
    to: t ? t.to : void 0,
    type: yi,
    event: Ce(e) ? e : Wo(e),
    delay: t ? t.delay : void 0,
    // TODO: don't auto-generate IDs here like that
    // there is too big chance of the ID collision
    id: t && t.id !== void 0 ? t.id : Ce(e) ? e.name : Af(e)
  };
}
function zf(e, t, n, r) {
  var i = {
    _event: n
  }, o = rt(Ce(e.event) ? e.event(t, n.data, i) : e.event), a;
  if (De(e.delay)) {
    var s = r && r[e.delay];
    a = Ce(s) ? s(t, n.data, i) : s;
  } else
    a = Ce(e.delay) ? e.delay(t, n.data, i) : e.delay;
  var l = Ce(e.to) ? e.to(t, n.data, i) : e.to;
  return j(j({}, e), {
    to: l,
    _event: o,
    event: o.data,
    delay: a
  });
}
function tl(e, t) {
  return Sr(e, j(j({}, t), {
    to: Sn.Parent
  }));
}
function ib(e, t, n) {
  return Sr(t, j(j({}, n), {
    to: e
  }));
}
function ob() {
  return tl(qo);
}
function ab(e, t) {
  return Sr(e, j(j({}, t), {
    to: function(n, r, i) {
      var o = i._event;
      return o.origin;
    }
  }));
}
var sb = function(e, t) {
  return {
    context: e,
    event: t
  };
};
function lb(e, t) {
  return e === void 0 && (e = sb), {
    type: Ho,
    label: t,
    expr: e
  };
}
var If = function(e, t, n) {
  return j(j({}, e), {
    value: De(e.expr) ? e.expr : e.expr(t, n.data, {
      _event: n
    })
  });
}, Rf = function(e) {
  return {
    type: Js,
    sendId: e
  };
};
function jf(e) {
  var t = Go(e);
  return {
    type: Pe.Start,
    activity: t,
    exec: void 0
  };
}
function Vf(e) {
  var t = Ce(e) ? e : Go(e);
  return {
    type: Pe.Stop,
    activity: t,
    exec: void 0
  };
}
function Uf(e, t, n) {
  var r = Ce(e.activity) ? e.activity(t, n.data) : e.activity, i = typeof r == "string" ? {
    id: r
  } : r, o = {
    type: Pe.Stop,
    activity: i
  };
  return o;
}
var Bf = function(e) {
  return {
    type: Bo,
    assignment: e
  };
};
function db(e) {
  return typeof e == "object" && "type" in e;
}
function Hf(e, t) {
  var n = t ? "#".concat(t) : "";
  return "".concat(Pe.After, "(").concat(e, ")").concat(n);
}
function zr(e, t) {
  var n = "".concat(Pe.DoneState, ".").concat(e), r = {
    type: n,
    data: t
  };
  return r.toString = function() {
    return n;
  }, r;
}
function Yr(e, t) {
  var n = "".concat(Pe.DoneInvoke, ".").concat(e), r = {
    type: n,
    data: t
  };
  return r.toString = function() {
    return n;
  }, r;
}
function tr(e, t) {
  var n = "".concat(Pe.ErrorPlatform, ".").concat(e), r = {
    type: n,
    data: t
  };
  return r.toString = function() {
    return n;
  }, r;
}
function ub(e) {
  return {
    type: Pe.Pure,
    get: e
  };
}
function cb(e, t) {
  return Sr(function(n, r) {
    return r;
  }, j(j({}, t), {
    to: e
  }));
}
function fb(e, t) {
  return tl(function(n, r, i) {
    return {
      type: Qs,
      data: Ce(e) ? e(n, r, i) : e
    };
  }, j(j({}, t), {
    to: Sn.Parent
  }));
}
function mb(e) {
  return {
    type: Pe.Choose,
    conds: e
  };
}
var pb = function(e) {
  var t, n, r = [];
  try {
    for (var i = we(e), o = i.next(); !o.done; o = i.next())
      for (var a = o.value, s = 0; s < a.actions.length; ) {
        if (a.actions[s].type === Bo) {
          r.push(a.actions[s]), a.actions.splice(s, 1);
          continue;
        }
        s++;
      }
  } catch (l) {
    t = {
      error: l
    };
  } finally {
    try {
      o && !o.done && (n = i.return) && n.call(i);
    } finally {
      if (t) throw t.error;
    }
  }
  return r;
};
function di(e, t, n, r, i, o, a) {
  a === void 0 && (a = !1);
  var s = a ? [] : pb(i), l = s.length ? Ed(n, r, s, t) : n, d = a ? [n] : void 0, u = [];
  function c(b, p) {
    var v;
    switch (p.type) {
      case kr: {
        var g = Nf(p, l, r, e.options.delays);
        return o && typeof g.delay == "number" && o(g, l, r), g;
      }
      case yi:
        var w = zf(p, l, r, e.options.delays);
        return o && w.to !== Sn.Internal && (b === "entry" ? u.push(w) : o(w, l, r)), w;
      case Ho: {
        var y = If(p, l, r);
        return o == null || o(y, l, r), y;
      }
      case Cf: {
        var k = p, O = (v = k.conds.find(function(ge) {
          var G = Mf(ge.cond, e.options.guards);
          return !G || $f(e, G, l, r, o ? void 0 : t);
        })) === null || v === void 0 ? void 0 : v.actions;
        if (!O)
          return [];
        var D = Se(di(e, t, l, r, [{
          type: b,
          actions: Qt(Pt(O), e.options.actions)
        }], o, a), 2), R = D[0], W = D[1];
        return l = W, d == null || d.push(l), R;
      }
      case Tf: {
        var O = p.get(l, r.data);
        if (!O)
          return [];
        var L = Se(di(e, t, l, r, [{
          type: b,
          actions: Qt(Pt(O), e.options.actions)
        }], o, a), 2), Z = L[0], q = L[1];
        return l = q, d == null || d.push(l), Z;
      }
      case Uo: {
        var y = Uf(p, l, r);
        return o == null || o(y, n, r), y;
      }
      case Bo: {
        l = Ed(l, r, [p], o ? void 0 : t), d == null || d.push(l);
        break;
      }
      default:
        var P = gr(p, e.options.actions), re = P.exec;
        if (o)
          o(P, l, r);
        else if (re && d) {
          var he = d.length - 1, Te = j(j({}, P), {
            exec: function(ge) {
              for (var G = [], ue = 1; ue < arguments.length; ue++)
                G[ue - 1] = arguments[ue];
              re.apply(void 0, Ie([d[he]], Se(G), !1));
            }
          });
          P = Te;
        }
        return P;
    }
  }
  function f(b) {
    var p, v, g = [];
    try {
      for (var w = we(b.actions), y = w.next(); !y.done; y = w.next()) {
        var k = y.value, O = c(b.type, k);
        O && (g = g.concat(O));
      }
    } catch (D) {
      p = {
        error: D
      };
    } finally {
      try {
        y && !y.done && (v = w.return) && v.call(w);
      } finally {
        if (p) throw p.error;
      }
    }
    return u.forEach(function(D) {
      o(D, l, r);
    }), u.length = 0, g;
  }
  var m = He(i.map(f));
  return [m, l];
}
const Ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  actionTypes: q0,
  after: Hf,
  assign: Bf,
  cancel: Rf,
  choose: mb,
  done: zr,
  doneInvoke: Yr,
  error: tr,
  escalate: fb,
  forwardTo: cb,
  getActionFunction: co,
  initEvent: Bn,
  isActionObject: db,
  log: lb,
  pure: ub,
  raise: Ff,
  resolveActions: di,
  resolveLog: If,
  resolveRaise: Nf,
  resolveSend: zf,
  resolveStop: Uf,
  respond: ab,
  send: Sr,
  sendParent: tl,
  sendTo: ib,
  sendUpdate: ob,
  start: jf,
  stop: Vf,
  toActionObject: gr,
  toActionObjects: Qt,
  toActivityDefinition: Go
}, Symbol.toStringTag, { value: "Module" }));
var er = function(e, t) {
  var n = t(e);
  return n;
};
function qf(e) {
  var t;
  return t = {
    id: e,
    send: function() {
    },
    subscribe: function() {
      return {
        unsubscribe: function() {
        }
      };
    },
    getSnapshot: function() {
    },
    toJSON: function() {
      return {
        id: e
      };
    }
  }, t[vn] = function() {
    return this;
  }, t;
}
function hb(e, t, n, r) {
  var i, o = Lf(e.src), a = (i = t == null ? void 0 : t.options.services) === null || i === void 0 ? void 0 : i[o.type], s = e.data ? uo(e.data, n, r) : void 0, l = a ? Wf(a, e.id, s) : qf(e.id);
  return l.meta = e, l;
}
function Wf(e, t, n) {
  var r = qf(t);
  if (r.deferred = !0, br(e)) {
    var i = r.state = er(void 0, function() {
      return (n ? e.withContext(n) : e).initialState;
    });
    r.getSnapshot = function() {
      return i;
    };
  }
  return r;
}
function bb(e) {
  try {
    return typeof e.send == "function";
  } catch {
    return !1;
  }
}
function gb(e) {
  return bb(e) && "id" in e;
}
function vb(e) {
  var t;
  return j((t = {
    subscribe: function() {
      return {
        unsubscribe: function() {
        }
      };
    },
    id: "anonymous",
    getSnapshot: function() {
    }
  }, t[vn] = function() {
    return this;
  }, t), e);
}
var fo = function(e) {
  return e.type === "atomic" || e.type === "final";
};
function Gf(e) {
  return Object.keys(e.states).map(function(t) {
    return e.states[t];
  });
}
function ui(e) {
  return Gf(e).filter(function(t) {
    return t.type !== "history";
  });
}
function Kf(e) {
  var t = [e];
  return fo(e) ? t : t.concat(He(ui(e).map(Kf)));
}
function Ir(e, t) {
  var n, r, i, o, a, s, l, d, u = new Set(e), c = ns(u), f = new Set(t);
  try {
    for (var m = we(f), b = m.next(); !b.done; b = m.next())
      for (var p = b.value, v = p.parent; v && !f.has(v); )
        f.add(v), v = v.parent;
  } catch (L) {
    n = {
      error: L
    };
  } finally {
    try {
      b && !b.done && (r = m.return) && r.call(m);
    } finally {
      if (n) throw n.error;
    }
  }
  var g = ns(f);
  try {
    for (var w = we(f), y = w.next(); !y.done; y = w.next()) {
      var p = y.value;
      if (p.type === "compound" && (!g.get(p) || !g.get(p).length))
        c.get(p) ? c.get(p).forEach(function(Z) {
          return f.add(Z);
        }) : p.initialStateNodes.forEach(function(Z) {
          return f.add(Z);
        });
      else if (p.type === "parallel")
        try {
          for (var k = (a = void 0, we(ui(p))), O = k.next(); !O.done; O = k.next()) {
            var D = O.value;
            f.has(D) || (f.add(D), c.get(D) ? c.get(D).forEach(function(Z) {
              return f.add(Z);
            }) : D.initialStateNodes.forEach(function(Z) {
              return f.add(Z);
            }));
          }
        } catch (Z) {
          a = {
            error: Z
          };
        } finally {
          try {
            O && !O.done && (s = k.return) && s.call(k);
          } finally {
            if (a) throw a.error;
          }
        }
    }
  } catch (L) {
    i = {
      error: L
    };
  } finally {
    try {
      y && !y.done && (o = w.return) && o.call(w);
    } finally {
      if (i) throw i.error;
    }
  }
  try {
    for (var R = we(f), W = R.next(); !W.done; W = R.next())
      for (var p = W.value, v = p.parent; v && !f.has(v); )
        f.add(v), v = v.parent;
  } catch (L) {
    l = {
      error: L
    };
  } finally {
    try {
      W && !W.done && (d = R.return) && d.call(R);
    } finally {
      if (l) throw l.error;
    }
  }
  return f;
}
function Yf(e, t) {
  var n = t.get(e);
  if (!n)
    return {};
  if (e.type === "compound") {
    var r = n[0];
    if (r) {
      if (fo(r))
        return r.key;
    } else
      return {};
  }
  var i = {};
  return n.forEach(function(o) {
    i[o.key] = Yf(o, t);
  }), i;
}
function ns(e) {
  var t, n, r = /* @__PURE__ */ new Map();
  try {
    for (var i = we(e), o = i.next(); !o.done; o = i.next()) {
      var a = o.value;
      r.has(a) || r.set(a, []), a.parent && (r.has(a.parent) || r.set(a.parent, []), r.get(a.parent).push(a));
    }
  } catch (s) {
    t = {
      error: s
    };
  } finally {
    try {
      o && !o.done && (n = i.return) && n.call(i);
    } finally {
      if (t) throw t.error;
    }
  }
  return r;
}
function yb(e, t) {
  var n = Ir([e], t);
  return Yf(e, ns(n));
}
function Rr(e, t) {
  return Array.isArray(e) ? e.some(function(n) {
    return n === t;
  }) : e instanceof Set ? e.has(t) : !1;
}
function wb(e) {
  return Ie([], Se(new Set(He(Ie([], Se(e.map(function(t) {
    return t.ownEvents;
  })), !1)))), !1);
}
function Yi(e, t) {
  return t.type === "compound" ? ui(t).some(function(n) {
    return n.type === "final" && Rr(e, n);
  }) : t.type === "parallel" ? ui(t).every(function(n) {
    return Yi(e, n);
  }) : !1;
}
function xb(e) {
  return e === void 0 && (e = []), e.reduce(function(t, n) {
    return n.meta !== void 0 && (t[n.id] = n.meta), t;
  }, {});
}
function Cd(e) {
  return new Set(He(e.map(function(t) {
    return t.tags;
  })));
}
function Xf(e, t) {
  if (e === t)
    return !0;
  if (e === void 0 || t === void 0)
    return !1;
  if (De(e) || De(t))
    return e === t;
  var n = Object.keys(e), r = Object.keys(t);
  return n.length === r.length && n.every(function(i) {
    return Xf(e[i], t[i]);
  });
}
function kb(e) {
  return typeof e != "object" || e === null ? !1 : "value" in e && "_event" in e;
}
function _b(e, t) {
  var n = e.exec, r = j(j({}, e), {
    exec: n !== void 0 ? function() {
      return n(t.context, t.event, {
        action: e,
        state: t,
        _event: t._event
      });
    } : void 0
  });
  return r;
}
var Ut = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      var n = this, r;
      this.actions = [], this.activities = kd, this.meta = {}, this.events = [], this.value = t.value, this.context = t.context, this._event = t._event, this._sessionid = t._sessionid, this.event = this._event.data, this.historyValue = t.historyValue, this.history = t.history, this.actions = t.actions || [], this.activities = t.activities || kd, this.meta = xb(t.configuration), this.events = t.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = t.configuration, this.transitions = t.transitions, this.children = t.children, this.done = !!t.done, this.tags = (r = Array.isArray(t.tags) ? new Set(t.tags) : t.tags) !== null && r !== void 0 ? r : /* @__PURE__ */ new Set(), this.machine = t.machine, Object.defineProperty(this, "nextEvents", {
        get: function() {
          return wb(n.configuration);
        }
      });
    }
    return e.from = function(t, n) {
      if (t instanceof e)
        return t.context !== n ? new e({
          value: t.value,
          context: n,
          _event: t._event,
          _sessionid: null,
          historyValue: t.historyValue,
          history: t.history,
          actions: [],
          activities: t.activities,
          events: [],
          configuration: [],
          transitions: [],
          children: {}
        }) : t;
      var r = Bn;
      return new e({
        value: t,
        context: n,
        _event: r,
        _sessionid: null,
        historyValue: void 0,
        history: void 0,
        actions: [],
        activities: void 0,
        events: [],
        configuration: [],
        transitions: [],
        children: {}
      });
    }, e.create = function(t) {
      return new e(t);
    }, e.inert = function(t, n) {
      if (t instanceof e) {
        if (!t.actions.length)
          return t;
        var r = Bn;
        return new e({
          value: t.value,
          context: n,
          _event: r,
          _sessionid: null,
          historyValue: t.historyValue,
          history: t.history,
          activities: t.activities,
          configuration: t.configuration,
          transitions: [],
          children: {}
        });
      }
      return e.from(t, n);
    }, e.prototype.toStrings = function(t, n) {
      var r = this;
      if (t === void 0 && (t = this.value), n === void 0 && (n = "."), De(t))
        return [t];
      var i = Object.keys(t);
      return i.concat.apply(i, Ie([], Se(i.map(function(o) {
        return r.toStrings(t[o], n).map(function(a) {
          return o + n + a;
        });
      })), !1));
    }, e.prototype.toJSON = function() {
      var t = this;
      t.configuration, t.transitions;
      var n = t.tags;
      t.machine;
      var r = Zs(t, ["configuration", "transitions", "tags", "machine"]);
      return j(j({}, r), {
        tags: Array.from(n)
      });
    }, e.prototype.matches = function(t) {
      return el(t, this.value);
    }, e.prototype.hasTag = function(t) {
      return this.tags.has(t);
    }, e.prototype.can = function(t) {
      var n;
      eb(!!this.machine);
      var r = (n = this.machine) === null || n === void 0 ? void 0 : n.getTransitionData(this, t);
      return !!(r != null && r.transitions.length) && // Check that at least one transition is not forbidden
      r.transitions.some(function(i) {
        return i.target !== void 0 || i.actions.length;
      });
    }, e;
  }()
), Sb = {
  deferEvents: !1
}, Td = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      this.processingEvent = !1, this.queue = [], this.initialized = !1, this.options = j(j({}, Sb), t);
    }
    return e.prototype.initialize = function(t) {
      if (this.initialized = !0, t) {
        if (!this.options.deferEvents) {
          this.schedule(t);
          return;
        }
        this.process(t);
      }
      this.flushEvents();
    }, e.prototype.schedule = function(t) {
      if (!this.initialized || this.processingEvent) {
        this.queue.push(t);
        return;
      }
      if (this.queue.length !== 0)
        throw new Error("Event queue should be empty when it is not processing events");
      this.process(t), this.flushEvents();
    }, e.prototype.clear = function() {
      this.queue = [];
    }, e.prototype.flushEvents = function() {
      for (var t = this.queue.shift(); t; )
        this.process(t), t = this.queue.shift();
    }, e.prototype.process = function(t) {
      this.processingEvent = !0;
      try {
        t();
      } catch (n) {
        throw this.clear(), n;
      } finally {
        this.processingEvent = !1;
      }
    }, e;
  }()
), xa = /* @__PURE__ */ new Map(), Eb = 0, $r = {
  bookId: function() {
    return "x:".concat(Eb++);
  },
  register: function(e, t) {
    return xa.set(e, t), e;
  },
  get: function(e) {
    return xa.get(e);
  },
  free: function(e) {
    xa.delete(e);
  }
};
function nl() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
}
function Cb() {
  var e = nl();
  if (e && "__xstate__" in e)
    return e.__xstate__;
}
function Tb(e) {
  if (nl()) {
    var t = Cb();
    t && t.register(e);
  }
}
function Ob(e, t) {
  t === void 0 && (t = {});
  var n = e.initialState, r = /* @__PURE__ */ new Set(), i = [], o = !1, a = function() {
    if (!o) {
      for (o = !0; i.length > 0; ) {
        var d = i.shift();
        n = e.transition(n, d, l), r.forEach(function(u) {
          return u.next(n);
        });
      }
      o = !1;
    }
  }, s = vb({
    id: t.id,
    send: function(d) {
      i.push(d), a();
    },
    getSnapshot: function() {
      return n;
    },
    subscribe: function(d, u, c) {
      var f = Ki(d, u, c);
      return r.add(f), f.next(n), {
        unsubscribe: function() {
          r.delete(f);
        }
      };
    }
  }), l = {
    parent: t.parent,
    self: s,
    id: t.id || "anonymous",
    observers: r
  };
  return n = e.start ? e.start(l) : n, s;
}
var Ab = {
  sync: !1,
  autoForward: !1
}, Ze;
(function(e) {
  e[e.NotStarted = 0] = "NotStarted", e[e.Running = 1] = "Running", e[e.Stopped = 2] = "Stopped";
})(Ze || (Ze = {}));
var Db = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n) {
      n === void 0 && (n = e.defaultOptions);
      var r = this;
      this.machine = t, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = !1, this.status = Ze.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this._outgoingQueue = [], this.init = this.start, this.send = function(u, c) {
        if (_r(u))
          return r.batch(u), r.state;
        var f = rt(Wo(u, c));
        if (r.status === Ze.Stopped)
          return r.state;
        if (r.status !== Ze.Running && !r.options.deferEvents)
          throw new Error('Event "'.concat(f.name, '" was sent to uninitialized service "').concat(
            r.machine.id,
            `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `
          ).concat(JSON.stringify(f.data)));
        return r.scheduler.schedule(function() {
          r.forward(f);
          var m = r._nextState(f);
          r.update(m, f);
        }), r._state;
      }, this.sendTo = function(u, c, f) {
        var m = r.parent && (c === Sn.Parent || r.parent.id === c), b = m ? r.parent : De(c) ? c === Sn.Internal ? r : r.children.get(c) || $r.get(c) : nb(c) ? c : void 0;
        if (!b) {
          if (!m)
            throw new Error("Unable to send event to child '".concat(c, "' from service '").concat(r.id, "'."));
          return;
        }
        if ("machine" in b) {
          if (r.status !== Ze.Stopped || r.parent !== b || // we need to send events to the parent from exit handlers of a machine that reached its final state
          r.state.done) {
            var p = j(j({}, u), {
              name: u.name === Qs ? "".concat(tr(r.id)) : u.name,
              origin: r.sessionId
            });
            !f && r.machine.config.predictableActionArguments ? r._outgoingQueue.push([b, p]) : b.send(p);
          }
        } else
          !f && r.machine.config.predictableActionArguments ? r._outgoingQueue.push([b, u.data]) : b.send(u.data);
      }, this._exec = function(u, c, f, m) {
        m === void 0 && (m = r.machine.options.actions);
        var b = u.exec || co(u.type, m), p = Ce(b) ? b : b ? b.exec : u.exec;
        if (p)
          try {
            return p(c, f.data, r.machine.config.predictableActionArguments ? {
              action: u,
              _event: f
            } : {
              action: u,
              state: r.state,
              _event: f
            });
          } catch (he) {
            throw r.parent && r.parent.send({
              type: "xstate.error",
              data: he
            }), he;
          }
        switch (u.type) {
          case kr: {
            var v = u;
            r.defer(v);
            break;
          }
          case yi:
            var g = u;
            if (typeof g.delay == "number") {
              r.defer(g);
              return;
            } else
              g.to ? r.sendTo(g._event, g.to, f === Bn) : r.send(g._event);
            break;
          case Js:
            r.cancel(u.sendId);
            break;
          case ao: {
            if (r.status !== Ze.Running)
              return;
            var w = u.activity;
            if (
              // in v4 with `predictableActionArguments` invokes are called eagerly when the `this.state` still points to the previous state
              !r.machine.config.predictableActionArguments && !r.state.activities[w.id || w.type]
            )
              break;
            if (w.type === Pe.Invoke) {
              var y = Lf(w.src), k = r.machine.options.services ? r.machine.options.services[y.type] : void 0, O = w.id, D = w.data, R = "autoForward" in w ? w.autoForward : !!w.forward;
              if (!k)
                return;
              var W = D ? uo(D, c, f) : void 0;
              if (typeof k == "string")
                return;
              var L = Ce(k) ? k(c, f.data, {
                data: W,
                src: y,
                meta: w.meta
              }) : k;
              if (!L)
                return;
              var Z = void 0;
              br(L) && (L = W ? L.withContext(W) : L, Z = {
                autoForward: R
              }), r.spawn(L, O, Z);
            } else
              r.spawnActivity(w);
            break;
          }
          case Uo: {
            r.stopChild(u.activity.id);
            break;
          }
          case Ho:
            var q = u, P = q.label, re = q.value;
            P ? r.logger(P, re) : r.logger(re);
            break;
        }
      };
      var i = j(j({}, e.defaultOptions), n), o = i.clock, a = i.logger, s = i.parent, l = i.id, d = l !== void 0 ? l : t.id;
      this.id = d, this.logger = a, this.clock = o, this.parent = s, this.options = i, this.scheduler = new Td({
        deferEvents: this.options.deferEvents
      }), this.sessionId = $r.bookId();
    }
    return Object.defineProperty(e.prototype, "initialState", {
      get: function() {
        var t = this;
        return this._initialState ? this._initialState : er(this, function() {
          return t._initialState = t.machine.initialState, t._initialState;
        });
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "state", {
      /**
       * @deprecated Use `.getSnapshot()` instead.
       */
      get: function() {
        return this._state;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.execute = function(t, n) {
      var r, i;
      try {
        for (var o = we(t.actions), a = o.next(); !a.done; a = o.next()) {
          var s = a.value;
          this.exec(s, t, n);
        }
      } catch (l) {
        r = {
          error: l
        };
      } finally {
        try {
          a && !a.done && (i = o.return) && i.call(o);
        } finally {
          if (r) throw r.error;
        }
      }
    }, e.prototype.update = function(t, n) {
      var r, i, o, a, s, l, d, u, c = this;
      if (t._sessionid = this.sessionId, this._state = t, (!this.machine.config.predictableActionArguments || // this is currently required to execute initial actions as the `initialState` gets cached
      // we can't just recompute it (and execute actions while doing so) because we try to preserve identity of actors created within initial assigns
      n === Bn) && this.options.execute)
        this.execute(this.state);
      else
        for (var f = void 0; f = this._outgoingQueue.shift(); )
          f[0].send(f[1]);
      if (this.children.forEach(function(L) {
        c.state.children[L.id] = L;
      }), this.devTools && this.devTools.send(n.data, t), t.event)
        try {
          for (var m = we(this.eventListeners), b = m.next(); !b.done; b = m.next()) {
            var p = b.value;
            p(t.event);
          }
        } catch (L) {
          r = {
            error: L
          };
        } finally {
          try {
            b && !b.done && (i = m.return) && i.call(m);
          } finally {
            if (r) throw r.error;
          }
        }
      try {
        for (var v = we(this.listeners), g = v.next(); !g.done; g = v.next()) {
          var p = g.value;
          p(t, t.event);
        }
      } catch (L) {
        o = {
          error: L
        };
      } finally {
        try {
          g && !g.done && (a = v.return) && a.call(v);
        } finally {
          if (o) throw o.error;
        }
      }
      try {
        for (var w = we(this.contextListeners), y = w.next(); !y.done; y = w.next()) {
          var k = y.value;
          k(this.state.context, this.state.history ? this.state.history.context : void 0);
        }
      } catch (L) {
        s = {
          error: L
        };
      } finally {
        try {
          y && !y.done && (l = w.return) && l.call(w);
        } finally {
          if (s) throw s.error;
        }
      }
      if (this.state.done) {
        var O = t.configuration.find(function(L) {
          return L.type === "final" && L.parent === c.machine;
        }), D = O && O.doneData ? uo(O.doneData, t.context, n) : void 0;
        this._doneEvent = Yr(this.id, D);
        try {
          for (var R = we(this.doneListeners), W = R.next(); !W.done; W = R.next()) {
            var p = W.value;
            p(this._doneEvent);
          }
        } catch (L) {
          d = {
            error: L
          };
        } finally {
          try {
            W && !W.done && (u = R.return) && u.call(R);
          } finally {
            if (d) throw d.error;
          }
        }
        this._stop(), this._stopChildren(), $r.free(this.sessionId);
      }
    }, e.prototype.onTransition = function(t) {
      return this.listeners.add(t), this.status === Ze.Running && t(this.state, this.state.event), this;
    }, e.prototype.subscribe = function(t, n, r) {
      var i = this, o = Ki(t, n, r);
      this.listeners.add(o.next), this.status !== Ze.NotStarted && o.next(this.state);
      var a = function() {
        i.doneListeners.delete(a), i.stopListeners.delete(a), o.complete();
      };
      return this.status === Ze.Stopped ? o.complete() : (this.onDone(a), this.onStop(a)), {
        unsubscribe: function() {
          i.listeners.delete(o.next), i.doneListeners.delete(a), i.stopListeners.delete(a);
        }
      };
    }, e.prototype.onEvent = function(t) {
      return this.eventListeners.add(t), this;
    }, e.prototype.onSend = function(t) {
      return this.sendListeners.add(t), this;
    }, e.prototype.onChange = function(t) {
      return this.contextListeners.add(t), this;
    }, e.prototype.onStop = function(t) {
      return this.stopListeners.add(t), this;
    }, e.prototype.onDone = function(t) {
      return this.status === Ze.Stopped && this._doneEvent ? t(this._doneEvent) : this.doneListeners.add(t), this;
    }, e.prototype.off = function(t) {
      return this.listeners.delete(t), this.eventListeners.delete(t), this.sendListeners.delete(t), this.stopListeners.delete(t), this.doneListeners.delete(t), this.contextListeners.delete(t), this;
    }, e.prototype.start = function(t) {
      var n = this;
      if (this.status === Ze.Running)
        return this;
      this.machine._init(), $r.register(this.sessionId, this), this.initialized = !0, this.status = Ze.Running;
      var r = t === void 0 ? this.initialState : er(this, function() {
        return kb(t) ? n.machine.resolveState(t) : n.machine.resolveState(Ut.from(t, n.machine.context));
      });
      return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
        n.update(r, Bn);
      }), this;
    }, e.prototype._stopChildren = function() {
      this.children.forEach(function(t) {
        Ce(t.stop) && t.stop();
      }), this.children.clear();
    }, e.prototype._stop = function() {
      var t, n, r, i, o, a, s, l, d, u;
      try {
        for (var c = we(this.listeners), f = c.next(); !f.done; f = c.next()) {
          var m = f.value;
          this.listeners.delete(m);
        }
      } catch (R) {
        t = {
          error: R
        };
      } finally {
        try {
          f && !f.done && (n = c.return) && n.call(c);
        } finally {
          if (t) throw t.error;
        }
      }
      try {
        for (var b = we(this.stopListeners), p = b.next(); !p.done; p = b.next()) {
          var m = p.value;
          m(), this.stopListeners.delete(m);
        }
      } catch (R) {
        r = {
          error: R
        };
      } finally {
        try {
          p && !p.done && (i = b.return) && i.call(b);
        } finally {
          if (r) throw r.error;
        }
      }
      try {
        for (var v = we(this.contextListeners), g = v.next(); !g.done; g = v.next()) {
          var m = g.value;
          this.contextListeners.delete(m);
        }
      } catch (R) {
        o = {
          error: R
        };
      } finally {
        try {
          g && !g.done && (a = v.return) && a.call(v);
        } finally {
          if (o) throw o.error;
        }
      }
      try {
        for (var w = we(this.doneListeners), y = w.next(); !y.done; y = w.next()) {
          var m = y.value;
          this.doneListeners.delete(m);
        }
      } catch (R) {
        s = {
          error: R
        };
      } finally {
        try {
          y && !y.done && (l = w.return) && l.call(w);
        } finally {
          if (s) throw s.error;
        }
      }
      if (!this.initialized)
        return this;
      this.initialized = !1, this.status = Ze.Stopped, this._initialState = void 0;
      try {
        for (var k = we(Object.keys(this.delayedEventsMap)), O = k.next(); !O.done; O = k.next()) {
          var D = O.value;
          this.clock.clearTimeout(this.delayedEventsMap[D]);
        }
      } catch (R) {
        d = {
          error: R
        };
      } finally {
        try {
          O && !O.done && (u = k.return) && u.call(k);
        } finally {
          if (d) throw d.error;
        }
      }
      this.scheduler.clear(), this.scheduler = new Td({
        deferEvents: this.options.deferEvents
      });
    }, e.prototype.stop = function() {
      var t = this, n = this.scheduler;
      return this._stop(), n.schedule(function() {
        var r;
        if (!(!((r = t._state) === null || r === void 0) && r.done)) {
          var i = rt({
            type: "xstate.stop"
          }), o = er(t, function() {
            var a = He(Ie([], Se(t.state.configuration), !1).sort(function(c, f) {
              return f.order - c.order;
            }).map(function(c) {
              return Qt(c.onExit, t.machine.options.actions);
            })), s = Se(di(t.machine, t.state, t.state.context, i, [{
              type: "exit",
              actions: a
            }], t.machine.config.predictableActionArguments ? t._exec : void 0, t.machine.config.predictableActionArguments || t.machine.config.preserveActionOrder), 2), l = s[0], d = s[1], u = new Ut({
              value: t.state.value,
              context: d,
              _event: i,
              _sessionid: t.sessionId,
              historyValue: void 0,
              history: t.state,
              actions: l.filter(function(c) {
                return !ts(c);
              }),
              activities: {},
              events: [],
              configuration: [],
              transitions: [],
              children: {},
              done: t.state.done,
              tags: t.state.tags,
              machine: t.machine
            });
            return u.changed = !0, u;
          });
          t.update(o, i), t._stopChildren(), $r.free(t.sessionId);
        }
      }), this;
    }, e.prototype.batch = function(t) {
      var n = this;
      if (!(this.status === Ze.NotStarted && this.options.deferEvents)) {
        if (this.status !== Ze.Running)
          throw new Error(
            // tslint:disable-next-line:max-line-length
            "".concat(t.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.')
          );
      }
      if (t.length) {
        var r = !!this.machine.config.predictableActionArguments && this._exec;
        this.scheduler.schedule(function() {
          var i, o, a = n.state, s = !1, l = [], d = function(m) {
            var b = rt(m);
            n.forward(b), a = er(n, function() {
              return n.machine.transition(a, b, void 0, r || void 0);
            }), l.push.apply(l, Ie([], Se(n.machine.config.predictableActionArguments ? a.actions : a.actions.map(function(p) {
              return _b(p, a);
            })), !1)), s = s || !!a.changed;
          };
          try {
            for (var u = we(t), c = u.next(); !c.done; c = u.next()) {
              var f = c.value;
              d(f);
            }
          } catch (m) {
            i = {
              error: m
            };
          } finally {
            try {
              c && !c.done && (o = u.return) && o.call(u);
            } finally {
              if (i) throw i.error;
            }
          }
          a.changed = s, a.actions = l, n.update(a, rt(t[t.length - 1]));
        });
      }
    }, e.prototype.sender = function(t) {
      return this.send.bind(this, t);
    }, e.prototype._nextState = function(t, n) {
      var r = this;
      n === void 0 && (n = !!this.machine.config.predictableActionArguments && this._exec);
      var i = rt(t);
      if (i.name.indexOf(Ja) === 0 && !this.state.nextEvents.some(function(a) {
        return a.indexOf(Ja) === 0;
      }))
        throw i.data.data;
      var o = er(this, function() {
        return r.machine.transition(r.state, i, void 0, n || void 0);
      });
      return o;
    }, e.prototype.nextState = function(t) {
      return this._nextState(t, !1);
    }, e.prototype.forward = function(t) {
      var n, r;
      try {
        for (var i = we(this.forwardTo), o = i.next(); !o.done; o = i.next()) {
          var a = o.value, s = this.children.get(a);
          if (!s)
            throw new Error("Unable to forward event '".concat(t, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(a, "'."));
          s.send(t);
        }
      } catch (l) {
        n = {
          error: l
        };
      } finally {
        try {
          o && !o.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
    }, e.prototype.defer = function(t) {
      var n = this, r = this.clock.setTimeout(function() {
        "to" in t && t.to ? n.sendTo(t._event, t.to, !0) : n.send(t._event);
      }, t.delay);
      t.id && (this.delayedEventsMap[t.id] = r);
    }, e.prototype.cancel = function(t) {
      this.clock.clearTimeout(this.delayedEventsMap[t]), delete this.delayedEventsMap[t];
    }, e.prototype.exec = function(t, n, r) {
      r === void 0 && (r = this.machine.options.actions), this._exec(t, n.context, n._event, r);
    }, e.prototype.removeChild = function(t) {
      var n;
      this.children.delete(t), this.forwardTo.delete(t), (n = this.state) === null || n === void 0 || delete n.children[t];
    }, e.prototype.stopChild = function(t) {
      var n = this.children.get(t);
      n && (this.removeChild(t), Ce(n.stop) && n.stop());
    }, e.prototype.spawn = function(t, n, r) {
      if (this.status !== Ze.Running)
        return Wf(t, n);
      if (Sd(t))
        return this.spawnPromise(Promise.resolve(t), n);
      if (Ce(t))
        return this.spawnCallback(t, n);
      if (gb(t))
        return this.spawnActor(t, n);
      if (tb(t))
        return this.spawnObservable(t, n);
      if (br(t))
        return this.spawnMachine(t, j(j({}, r), {
          id: n
        }));
      if (Z0(t))
        return this.spawnBehavior(t, n);
      throw new Error('Unable to spawn entity "'.concat(n, '" of type "').concat(typeof t, '".'));
    }, e.prototype.spawnMachine = function(t, n) {
      var r = this;
      n === void 0 && (n = {});
      var i = new e(t, j(j({}, this.options), {
        parent: this,
        id: n.id || t.id
      })), o = j(j({}, Ab), n);
      o.sync && i.onTransition(function(s) {
        r.send(qo, {
          state: s,
          id: i.id
        });
      });
      var a = i;
      return this.children.set(i.id, a), o.autoForward && this.forwardTo.add(i.id), i.onDone(function(s) {
        r.removeChild(i.id), r.send(rt(s, {
          origin: i.id
        }));
      }).start(), a;
    }, e.prototype.spawnBehavior = function(t, n) {
      var r = Ob(t, {
        id: n,
        parent: this
      });
      return this.children.set(n, r), r;
    }, e.prototype.spawnPromise = function(t, n) {
      var r, i = this, o = !1, a;
      t.then(function(l) {
        o || (a = l, i.removeChild(n), i.send(rt(Yr(n, l), {
          origin: n
        })));
      }, function(l) {
        if (!o) {
          i.removeChild(n);
          var d = tr(n, l);
          try {
            i.send(rt(d, {
              origin: n
            }));
          } catch {
            i.devTools && i.devTools.send(d, i.state), i.machine.strict && i.stop();
          }
        }
      });
      var s = (r = {
        id: n,
        send: function() {
        },
        subscribe: function(l, d, u) {
          var c = Ki(l, d, u), f = !1;
          return t.then(function(m) {
            f || (c.next(m), !f && c.complete());
          }, function(m) {
            f || c.error(m);
          }), {
            unsubscribe: function() {
              return f = !0;
            }
          };
        },
        stop: function() {
          o = !0;
        },
        toJSON: function() {
          return {
            id: n
          };
        },
        getSnapshot: function() {
          return a;
        }
      }, r[vn] = function() {
        return this;
      }, r);
      return this.children.set(n, s), s;
    }, e.prototype.spawnCallback = function(t, n) {
      var r, i = this, o = !1, a = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), l, d = function(f) {
        l = f, s.forEach(function(m) {
          return m(f);
        }), !o && i.send(rt(f, {
          origin: n
        }));
      }, u;
      try {
        u = t(d, function(f) {
          a.add(f);
        });
      } catch (f) {
        this.send(tr(n, f));
      }
      if (Sd(u))
        return this.spawnPromise(u, n);
      var c = (r = {
        id: n,
        send: function(f) {
          return a.forEach(function(m) {
            return m(f);
          });
        },
        subscribe: function(f) {
          var m = Ki(f);
          return s.add(m.next), {
            unsubscribe: function() {
              s.delete(m.next);
            }
          };
        },
        stop: function() {
          o = !0, Ce(u) && u();
        },
        toJSON: function() {
          return {
            id: n
          };
        },
        getSnapshot: function() {
          return l;
        }
      }, r[vn] = function() {
        return this;
      }, r);
      return this.children.set(n, c), c;
    }, e.prototype.spawnObservable = function(t, n) {
      var r, i = this, o, a = t.subscribe(function(l) {
        o = l, i.send(rt(l, {
          origin: n
        }));
      }, function(l) {
        i.removeChild(n), i.send(rt(tr(n, l), {
          origin: n
        }));
      }, function() {
        i.removeChild(n), i.send(rt(Yr(n), {
          origin: n
        }));
      }), s = (r = {
        id: n,
        send: function() {
        },
        subscribe: function(l, d, u) {
          return t.subscribe(l, d, u);
        },
        stop: function() {
          return a.unsubscribe();
        },
        getSnapshot: function() {
          return o;
        },
        toJSON: function() {
          return {
            id: n
          };
        }
      }, r[vn] = function() {
        return this;
      }, r);
      return this.children.set(n, s), s;
    }, e.prototype.spawnActor = function(t, n) {
      return this.children.set(n, t), t;
    }, e.prototype.spawnActivity = function(t) {
      var n = this.machine.options && this.machine.options.activities ? this.machine.options.activities[t.type] : void 0;
      if (n) {
        var r = n(this.state.context, t);
        this.spawnEffect(t.id, r);
      }
    }, e.prototype.spawnEffect = function(t, n) {
      var r;
      this.children.set(t, (r = {
        id: t,
        send: function() {
        },
        subscribe: function() {
          return {
            unsubscribe: function() {
            }
          };
        },
        stop: n || void 0,
        getSnapshot: function() {
        },
        toJSON: function() {
          return {
            id: t
          };
        }
      }, r[vn] = function() {
        return this;
      }, r));
    }, e.prototype.attachDev = function() {
      var t = nl();
      if (this.options.devTools && t) {
        if (t.__REDUX_DEVTOOLS_EXTENSION__) {
          var n = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
          this.devTools = t.__REDUX_DEVTOOLS_EXTENSION__.connect(j(j({
            name: this.id,
            autoPause: !0,
            stateSanitizer: function(r) {
              return {
                value: r.value,
                context: r.context,
                actions: r.actions
              };
            }
          }, n), {
            features: j({
              jump: !1,
              skip: !1
            }, n ? n.features : void 0)
          }), this.machine), this.devTools.init(this.state);
        }
        Tb(this);
      }
    }, e.prototype.toJSON = function() {
      return {
        id: this.id
      };
    }, e.prototype[vn] = function() {
      return this;
    }, e.prototype.getSnapshot = function() {
      return this.status === Ze.NotStarted ? this.initialState : this._state;
    }, e.defaultOptions = {
      execute: !0,
      deferEvents: !0,
      clock: {
        setTimeout: function(t, n) {
          return setTimeout(t, n);
        },
        clearTimeout: function(t) {
          return clearTimeout(t);
        }
      },
      logger: /* @__PURE__ */ console.log.bind(console),
      devTools: !1
    }, e.interpret = Zf, e;
  }()
);
function Zf(e, t) {
  var n = new Db(e, t);
  return n;
}
function Pb(e) {
  if (typeof e == "string") {
    var t = {
      type: e
    };
    return t.toString = function() {
      return e;
    }, t;
  }
  return e;
}
function Fi(e) {
  return j(j({
    type: so
  }, e), {
    toJSON: function() {
      e.onDone, e.onError;
      var t = Zs(e, ["onDone", "onError"]);
      return j(j({}, t), {
        type: so,
        src: Pb(e.src)
      });
    }
  });
}
var Ni = "", rs = "#", ka = "*", Zn = {}, Jn = function(e) {
  return e[0] === rs;
}, Mb = function() {
  return {
    actions: {},
    guards: {},
    services: {},
    activities: {},
    delays: {}
  };
}, $b = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n, r, i) {
      r === void 0 && (r = "context" in t ? t.context : void 0);
      var o = this, a;
      this.config = t, this._context = r, this.order = -1, this.__xstatenode = !0, this.__cache = {
        events: void 0,
        relativeValue: /* @__PURE__ */ new Map(),
        initialStateValue: void 0,
        initialState: void 0,
        on: void 0,
        transitions: void 0,
        candidates: {},
        delayedTransitions: void 0
      }, this.idMap = {}, this.tags = [], this.options = Object.assign(Mb(), n), this.parent = i == null ? void 0 : i.parent, this.key = this.config.key || (i == null ? void 0 : i.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : Of), this.id = this.config.id || Ie([this.machine.key], Se(this.path), !1).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (a = this.config.schema) !== null && a !== void 0 ? a : {}, this.description = this.config.description, this.initial = this.config.initial, this.states = this.config.states ? Nr(this.config.states, function(d, u) {
        var c, f = new e(d, {}, void 0, {
          parent: o,
          key: u
        });
        return Object.assign(o.idMap, j((c = {}, c[f.id] = f, c), f.idMap)), f;
      }) : Zn;
      var s = 0;
      function l(d) {
        var u, c;
        d.order = s++;
        try {
          for (var f = we(Gf(d)), m = f.next(); !m.done; m = f.next()) {
            var b = m.value;
            l(b);
          }
        } catch (p) {
          u = {
            error: p
          };
        } finally {
          try {
            m && !m.done && (c = f.return) && c.call(f);
          } finally {
            if (u) throw u.error;
          }
        }
      }
      l(this), this.history = this.config.history === !0 ? "shallow" : this.config.history || !1, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(d) {
        var u = d.event;
        return u === Ni;
      }) : Ni in this.config.on : !1), this.strict = !!this.config.strict, this.onEntry = Pt(this.config.entry || this.config.onEntry).map(function(d) {
        return gr(d);
      }), this.onExit = Pt(this.config.exit || this.config.onExit).map(function(d) {
        return gr(d);
      }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = Pt(this.config.invoke).map(function(d, u) {
        var c, f;
        if (br(d)) {
          var m = Li(o.id, u);
          return o.machine.options.services = j((c = {}, c[m] = d, c), o.machine.options.services), Fi({
            src: m,
            id: m
          });
        } else if (De(d.src)) {
          var m = d.id || Li(o.id, u);
          return Fi(j(j({}, d), {
            id: m,
            src: d.src
          }));
        } else if (br(d.src) || Ce(d.src)) {
          var m = d.id || Li(o.id, u);
          return o.machine.options.services = j((f = {}, f[m] = d.src, f), o.machine.options.services), Fi(j(j({
            id: m
          }, d), {
            src: m
          }));
        } else {
          var b = d.src;
          return Fi(j(j({
            id: Li(o.id, u)
          }, d), {
            src: b
          }));
        }
      }), this.activities = Pt(this.config.activities).concat(this.invoke).map(function(d) {
        return Go(d);
      }), this.transition = this.transition.bind(this), this.tags = Pt(this.config.tags);
    }
    return e.prototype._init = function() {
      this.__cache.transitions || Kf(this).forEach(function(t) {
        return t.on;
      });
    }, e.prototype.withConfig = function(t, n) {
      var r = this.options, i = r.actions, o = r.activities, a = r.guards, s = r.services, l = r.delays;
      return new e(this.config, {
        actions: j(j({}, i), t.actions),
        activities: j(j({}, o), t.activities),
        guards: j(j({}, a), t.guards),
        services: j(j({}, s), t.services),
        delays: j(j({}, l), t.delays)
      }, n ?? this.context);
    }, e.prototype.withContext = function(t) {
      return new e(this.config, this.options, t);
    }, Object.defineProperty(e.prototype, "context", {
      get: function() {
        return Ce(this._context) ? this._context() : this._context;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "definition", {
      /**
       * The well-structured state node definition.
       */
      get: function() {
        return {
          id: this.id,
          key: this.key,
          version: this.version,
          context: this.context,
          type: this.type,
          initial: this.initial,
          history: this.history,
          states: Nr(this.states, function(t) {
            return t.definition;
          }),
          on: this.on,
          transitions: this.transitions,
          entry: this.onEntry,
          exit: this.onExit,
          activities: this.activities || [],
          meta: this.meta,
          order: this.order || -1,
          data: this.doneData,
          invoke: this.invoke,
          description: this.description,
          tags: this.tags
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.toJSON = function() {
      return this.definition;
    }, Object.defineProperty(e.prototype, "on", {
      /**
       * The mapping of events to transitions.
       */
      get: function() {
        if (this.__cache.on)
          return this.__cache.on;
        var t = this.transitions;
        return this.__cache.on = t.reduce(function(n, r) {
          return n[r.eventType] = n[r.eventType] || [], n[r.eventType].push(r), n;
        }, {});
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "after", {
      get: function() {
        return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "transitions", {
      /**
       * All the transitions that can be taken from this state node.
       */
      get: function() {
        return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getCandidates = function(t) {
      if (this.__cache.candidates[t])
        return this.__cache.candidates[t];
      var n = t === Ni, r = this.transitions.filter(function(i) {
        var o = i.eventType === t;
        return n ? o : o || i.eventType === ka;
      });
      return this.__cache.candidates[t] = r, r;
    }, e.prototype.getDelayedTransitions = function() {
      var t = this, n = this.config.after;
      if (!n)
        return [];
      var r = function(o, a) {
        var s = Ce(o) ? "".concat(t.id, ":delay[").concat(a, "]") : o, l = Hf(s, t.id);
        return t.onEntry.push(Sr(l, {
          delay: o
        })), t.onExit.push(Rf(l)), l;
      }, i = _r(n) ? n.map(function(o, a) {
        var s = r(o.delay, a);
        return j(j({}, o), {
          event: s
        });
      }) : He(Object.keys(n).map(function(o, a) {
        var s = n[o], l = De(s) ? {
          target: s
        } : s, d = isNaN(+o) ? o : +o, u = r(d, a);
        return Pt(l).map(function(c) {
          return j(j({}, c), {
            event: u,
            delay: d
          });
        });
      }));
      return i.map(function(o) {
        var a = o.delay;
        return j(j({}, t.formatTransition(o)), {
          delay: a
        });
      });
    }, e.prototype.getStateNodes = function(t) {
      var n, r = this;
      if (!t)
        return [];
      var i = t instanceof Ut ? t.value : Kr(t, this.delimiter);
      if (De(i)) {
        var o = this.getStateNode(i).initial;
        return o !== void 0 ? this.getStateNodes((n = {}, n[i] = o, n)) : [this, this.states[i]];
      }
      var a = Object.keys(i), s = [this];
      return s.push.apply(s, Ie([], Se(He(a.map(function(l) {
        return r.getStateNode(l).getStateNodes(i[l]);
      }))), !1)), s;
    }, e.prototype.handles = function(t) {
      var n = Af(t);
      return this.events.includes(n);
    }, e.prototype.resolveState = function(t) {
      var n = t instanceof Ut ? t : Ut.create(t), r = Array.from(Ir([], this.getStateNodes(n.value)));
      return new Ut(j(j({}, n), {
        value: this.resolve(n.value),
        configuration: r,
        done: Yi(r, this),
        tags: Cd(r),
        machine: this.machine
      }));
    }, e.prototype.transitionLeafNode = function(t, n, r) {
      var i = this.getStateNode(t), o = i.next(n, r);
      return !o || !o.transitions.length ? this.next(n, r) : o;
    }, e.prototype.transitionCompoundNode = function(t, n, r) {
      var i = Object.keys(t), o = this.getStateNode(i[0]), a = o._transition(t[i[0]], n, r);
      return !a || !a.transitions.length ? this.next(n, r) : a;
    }, e.prototype.transitionParallelNode = function(t, n, r) {
      var i, o, a = {};
      try {
        for (var s = we(Object.keys(t)), l = s.next(); !l.done; l = s.next()) {
          var d = l.value, u = t[d];
          if (u) {
            var c = this.getStateNode(d), f = c._transition(u, n, r);
            f && (a[d] = f);
          }
        }
      } catch (g) {
        i = {
          error: g
        };
      } finally {
        try {
          l && !l.done && (o = s.return) && o.call(s);
        } finally {
          if (i) throw i.error;
        }
      }
      var m = Object.keys(a).map(function(g) {
        return a[g];
      }), b = He(m.map(function(g) {
        return g.transitions;
      })), p = m.some(function(g) {
        return g.transitions.length > 0;
      });
      if (!p)
        return this.next(n, r);
      var v = He(Object.keys(a).map(function(g) {
        return a[g].configuration;
      }));
      return {
        transitions: b,
        exitSet: He(m.map(function(g) {
          return g.exitSet;
        })),
        configuration: v,
        source: n,
        actions: He(Object.keys(a).map(function(g) {
          return a[g].actions;
        }))
      };
    }, e.prototype._transition = function(t, n, r) {
      return De(t) ? this.transitionLeafNode(t, n, r) : Object.keys(t).length === 1 ? this.transitionCompoundNode(t, n, r) : this.transitionParallelNode(t, n, r);
    }, e.prototype.getTransitionData = function(t, n) {
      return this._transition(t.value, t, rt(n));
    }, e.prototype.next = function(t, n) {
      var r, i, o = this, a = n.name, s = [], l = [], d;
      try {
        for (var u = we(this.getCandidates(a)), c = u.next(); !c.done; c = u.next()) {
          var f = c.value, m = f.cond, b = f.in, p = t.context, v = b ? De(b) && Jn(b) ? (
            // Check if in state by ID
            t.matches(Kr(this.getStateNodeById(b).path, this.delimiter))
          ) : (
            // Check if in state by relative grandparent
            el(Kr(b, this.delimiter), K0(this.path.slice(0, -2))(t.value))
          ) : !0, g = !1;
          try {
            g = !m || $f(this.machine, m, p, n, t);
          } catch (k) {
            throw new Error("Unable to evaluate guard '".concat(m.name || m.type, "' in transition for event '").concat(a, "' in state node '").concat(this.id, `':
`).concat(k.message));
          }
          if (g && v) {
            f.target !== void 0 && (l = f.target), s.push.apply(s, Ie([], Se(f.actions), !1)), d = f;
            break;
          }
        }
      } catch (k) {
        r = {
          error: k
        };
      } finally {
        try {
          c && !c.done && (i = u.return) && i.call(u);
        } finally {
          if (r) throw r.error;
        }
      }
      if (d) {
        if (!l.length)
          return {
            transitions: [d],
            exitSet: [],
            configuration: t.value ? [this] : [],
            source: t,
            actions: s
          };
        var w = He(l.map(function(k) {
          return o.getRelativeStateNodes(k, t.historyValue);
        })), y = !!d.internal;
        return {
          transitions: [d],
          exitSet: y ? [] : He(l.map(function(k) {
            return o.getPotentiallyReenteringNodes(k);
          })),
          configuration: w,
          source: t,
          actions: s
        };
      }
    }, e.prototype.getPotentiallyReenteringNodes = function(t) {
      if (this.order < t.order)
        return [this];
      for (var n = [], r = this, i = t; r && r !== i; )
        n.push(r), r = r.parent;
      return r !== i ? [] : (n.push(i), n);
    }, e.prototype.getActions = function(t, n, r, i, o, a, s) {
      var l, d, u, c, f = this, m = a ? Ir([], this.getStateNodes(a.value)) : [], b = /* @__PURE__ */ new Set();
      try {
        for (var p = we(Array.from(t).sort(function(q, P) {
          return q.order - P.order;
        })), v = p.next(); !v.done; v = p.next()) {
          var g = v.value;
          (!Rr(m, g) || Rr(r.exitSet, g) || g.parent && b.has(g.parent)) && b.add(g);
        }
      } catch (q) {
        l = {
          error: q
        };
      } finally {
        try {
          v && !v.done && (d = p.return) && d.call(p);
        } finally {
          if (l) throw l.error;
        }
      }
      try {
        for (var w = we(m), y = w.next(); !y.done; y = w.next()) {
          var g = y.value;
          (!Rr(t, g) || Rr(r.exitSet, g.parent)) && r.exitSet.push(g);
        }
      } catch (q) {
        u = {
          error: q
        };
      } finally {
        try {
          y && !y.done && (c = w.return) && c.call(w);
        } finally {
          if (u) throw u.error;
        }
      }
      r.exitSet.sort(function(q, P) {
        return P.order - q.order;
      });
      var k = Array.from(b).sort(function(q, P) {
        return q.order - P.order;
      }), O = new Set(r.exitSet), D = He(k.map(function(q) {
        var P = [];
        if (q.type !== "final")
          return P;
        var re = q.parent;
        if (!re.parent)
          return P;
        P.push(
          zr(q.id, q.doneData),
          // TODO: deprecate - final states should not emit done events for their own state.
          zr(re.id, q.doneData ? uo(q.doneData, i, o) : void 0)
        );
        var he = re.parent;
        return he.type === "parallel" && ui(he).every(function(Te) {
          return Yi(r.configuration, Te);
        }) && P.push(zr(he.id)), P;
      })), R = k.map(function(q) {
        var P = q.onEntry, re = q.activities.map(function(he) {
          return jf(he);
        });
        return {
          type: "entry",
          actions: Qt(s ? Ie(Ie([], Se(P), !1), Se(re), !1) : Ie(Ie([], Se(re), !1), Se(P), !1), f.machine.options.actions)
        };
      }).concat({
        type: "state_done",
        actions: D.map(function(q) {
          return Ff(q);
        })
      }), W = Array.from(O).map(function(q) {
        return {
          type: "exit",
          actions: Qt(Ie(Ie([], Se(q.onExit), !1), Se(q.activities.map(function(P) {
            return Vf(P);
          })), !1), f.machine.options.actions)
        };
      }), L = W.concat({
        type: "transition",
        actions: Qt(r.actions, this.machine.options.actions)
      }).concat(R);
      if (n) {
        var Z = Qt(He(Ie([], Se(t), !1).sort(function(q, P) {
          return P.order - q.order;
        }).map(function(q) {
          return q.onExit;
        })), this.machine.options.actions).filter(function(q) {
          return !ts(q);
        });
        return L.concat({
          type: "stop",
          actions: Z
        });
      }
      return L;
    }, e.prototype.transition = function(t, n, r, i) {
      t === void 0 && (t = this.initialState);
      var o = rt(n), a;
      if (t instanceof Ut)
        a = r === void 0 ? t : this.resolveState(Ut.from(t, r));
      else {
        var s = De(t) ? this.resolve(lo(this.getResolvedPath(t))) : this.resolve(t), l = r ?? this.machine.context;
        a = this.resolveState(Ut.from(s, l));
      }
      if (this.strict && !this.events.includes(o.name) && !X0(o.name))
        throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(o.name, "'"));
      var d = this._transition(a.value, a, o) || {
        transitions: [],
        configuration: [],
        exitSet: [],
        source: a,
        actions: []
      }, u = Ir([], this.getStateNodes(a.value)), c = d.configuration.length ? Ir(u, d.configuration) : u;
      return d.configuration = Ie([], Se(c), !1), this.resolveTransition(d, a, a.context, i, o);
    }, e.prototype.resolveRaisedTransition = function(t, n, r, i) {
      var o, a = t.actions;
      return t = this.transition(t, n, void 0, i), t._event = r, t.event = r.data, (o = t.actions).unshift.apply(o, Ie([], Se(a), !1)), t;
    }, e.prototype.resolveTransition = function(t, n, r, i, o) {
      var a, s, l, d, u = this;
      o === void 0 && (o = Bn);
      var c = t.configuration, f = !n || t.transitions.length > 0, m = f ? t.configuration : n ? n.configuration : [], b = Yi(m, this), p = f ? yb(this.machine, c) : void 0, v = n ? n.historyValue ? n.historyValue : t.source ? this.machine.historyValue(n.value) : void 0 : void 0, g = this.getActions(new Set(m), b, t, r, o, n, i), w = n ? j({}, n.activities) : {};
      try {
        for (var y = we(g), k = y.next(); !k.done; k = y.next()) {
          var O = k.value;
          try {
            for (var D = (l = void 0, we(O.actions)), R = D.next(); !R.done; R = D.next()) {
              var W = R.value;
              W.type === ao ? w[W.activity.id || W.activity.type] = W : W.type === Uo && (w[W.activity.id || W.activity.type] = !1);
            }
          } catch (Oe) {
            l = {
              error: Oe
            };
          } finally {
            try {
              R && !R.done && (d = D.return) && d.call(D);
            } finally {
              if (l) throw l.error;
            }
          }
        }
      } catch (Oe) {
        a = {
          error: Oe
        };
      } finally {
        try {
          k && !k.done && (s = y.return) && s.call(y);
        } finally {
          if (a) throw a.error;
        }
      }
      var L = Se(di(this, n, r, o, g, i, this.machine.config.predictableActionArguments || this.machine.config.preserveActionOrder), 2), Z = L[0], q = L[1], P = Se(J0(Z, ts), 2), re = P[0], he = P[1], Te = Z.filter(function(Oe) {
        var nt;
        return Oe.type === ao && ((nt = Oe.activity) === null || nt === void 0 ? void 0 : nt.type) === so;
      }), ge = Te.reduce(function(Oe, nt) {
        return Oe[nt.activity.id] = hb(nt.activity, u.machine, q, o), Oe;
      }, n ? j({}, n.children) : {}), G = new Ut({
        value: p || n.value,
        context: q,
        _event: o,
        // Persist _sessionid between states
        _sessionid: n ? n._sessionid : null,
        historyValue: p ? v ? Q0(v, p) : void 0 : n ? n.historyValue : void 0,
        history: !p || t.source ? n : void 0,
        actions: p ? he : [],
        activities: p ? w : n ? n.activities : {},
        events: [],
        configuration: m,
        transitions: t.transitions,
        children: ge,
        done: b,
        tags: Cd(m),
        machine: this
      }), ue = r !== q;
      G.changed = o.name === qo || ue;
      var ze = G.history;
      ze && delete ze.history;
      var Xe = !b && (this._transient || c.some(function(Oe) {
        return Oe._transient;
      }));
      if (!f && (!Xe || o.name === Ni))
        return G;
      var ie = G;
      if (!b)
        for (Xe && (ie = this.resolveRaisedTransition(ie, {
          type: Sf
        }, o, i)); re.length; ) {
          var me = re.shift();
          ie = this.resolveRaisedTransition(ie, me._event, o, i);
        }
      var Be = ie.changed || (ze ? !!ie.actions.length || ue || typeof ze.value != typeof ie.value || !Xf(ie.value, ze.value) : void 0);
      return ie.changed = Be, ie.history = ze, ie;
    }, e.prototype.getStateNode = function(t) {
      if (Jn(t))
        return this.machine.getStateNodeById(t);
      if (!this.states)
        throw new Error("Unable to retrieve child state '".concat(t, "' from '").concat(this.id, "'; no child states exist."));
      var n = this.states[t];
      if (!n)
        throw new Error("Child state '".concat(t, "' does not exist on '").concat(this.id, "'"));
      return n;
    }, e.prototype.getStateNodeById = function(t) {
      var n = Jn(t) ? t.slice(rs.length) : t;
      if (n === this.id)
        return this;
      var r = this.machine.idMap[n];
      if (!r)
        throw new Error("Child state node '#".concat(n, "' does not exist on machine '").concat(this.id, "'"));
      return r;
    }, e.prototype.getStateNodeByPath = function(t) {
      if (typeof t == "string" && Jn(t))
        try {
          return this.getStateNodeById(t.slice(1));
        } catch {
        }
      for (var n = es(t, this.delimiter).slice(), r = this; n.length; ) {
        var i = n.shift();
        if (!i.length)
          break;
        r = r.getStateNode(i);
      }
      return r;
    }, e.prototype.resolve = function(t) {
      var n, r = this;
      if (!t)
        return this.initialStateValue || Zn;
      switch (this.type) {
        case "parallel":
          return Nr(this.initialStateValue, function(o, a) {
            return o ? r.getStateNode(a).resolve(t[a] || o) : Zn;
          });
        case "compound":
          if (De(t)) {
            var i = this.getStateNode(t);
            return i.type === "parallel" || i.type === "compound" ? (n = {}, n[t] = i.initialStateValue, n) : t;
          }
          return Object.keys(t).length ? Nr(t, function(o, a) {
            return o ? r.getStateNode(a).resolve(o) : Zn;
          }) : this.initialStateValue || {};
        default:
          return t || Zn;
      }
    }, e.prototype.getResolvedPath = function(t) {
      if (Jn(t)) {
        var n = this.machine.idMap[t.slice(rs.length)];
        if (!n)
          throw new Error("Unable to find state node '".concat(t, "'"));
        return n.path;
      }
      return es(t, this.delimiter);
    }, Object.defineProperty(e.prototype, "initialStateValue", {
      get: function() {
        var t;
        if (this.__cache.initialStateValue)
          return this.__cache.initialStateValue;
        var n;
        if (this.type === "parallel")
          n = _d(this.states, function(r) {
            return r.initialStateValue || Zn;
          }, function(r) {
            return r.type !== "history";
          });
        else if (this.initial !== void 0) {
          if (!this.states[this.initial])
            throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
          n = fo(this.states[this.initial]) ? this.initial : (t = {}, t[this.initial] = this.states[this.initial].initialStateValue, t);
        } else
          n = {};
        return this.__cache.initialStateValue = n, this.__cache.initialStateValue;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getInitialState = function(t, n) {
      this._init();
      var r = this.getStateNodes(t);
      return this.resolveTransition({
        configuration: r,
        exitSet: [],
        transitions: [],
        source: void 0,
        actions: []
      }, void 0, n ?? this.machine.context, void 0);
    }, Object.defineProperty(e.prototype, "initialState", {
      /**
       * The initial State instance, which includes all actions to be executed from
       * entering the initial state.
       */
      get: function() {
        var t = this.initialStateValue;
        if (!t)
          throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
        return this.getInitialState(t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "target", {
      /**
       * The target state value of the history state node, if it exists. This represents the
       * default state value to transition to if no history value exists yet.
       */
      get: function() {
        var t;
        if (this.type === "history") {
          var n = this.config;
          De(n.target) ? t = Jn(n.target) ? lo(this.machine.getStateNodeById(n.target).path.slice(this.path.length - 1)) : n.target : t = n.target;
        }
        return t;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getRelativeStateNodes = function(t, n, r) {
      return r === void 0 && (r = !0), r ? t.type === "history" ? t.resolveHistory(n) : t.initialStateNodes : [t];
    }, Object.defineProperty(e.prototype, "initialStateNodes", {
      get: function() {
        var t = this;
        if (fo(this))
          return [this];
        if (this.type === "compound" && !this.initial)
          return [this];
        var n = Gi(this.initialStateValue);
        return He(n.map(function(r) {
          return t.getFromRelativePath(r);
        }));
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getFromRelativePath = function(t) {
      if (!t.length)
        return [this];
      var n = Se(t), r = n[0], i = n.slice(1);
      if (!this.states)
        throw new Error("Cannot retrieve subPath '".concat(r, "' from node with no states"));
      var o = this.getStateNode(r);
      if (o.type === "history")
        return o.resolveHistory();
      if (!this.states[r])
        throw new Error("Child state '".concat(r, "' does not exist on '").concat(this.id, "'"));
      return this.states[r].getFromRelativePath(i);
    }, e.prototype.historyValue = function(t) {
      if (Object.keys(this.states).length)
        return {
          current: t || this.initialStateValue,
          states: _d(this.states, function(n, r) {
            if (!t)
              return n.historyValue();
            var i = De(t) ? void 0 : t[r];
            return n.historyValue(i || n.initialStateValue);
          }, function(n) {
            return !n.history;
          })
        };
    }, e.prototype.resolveHistory = function(t) {
      var n = this;
      if (this.type !== "history")
        return [this];
      var r = this.parent;
      if (!t) {
        var i = this.target;
        return i ? He(Gi(i).map(function(a) {
          return r.getFromRelativePath(a);
        })) : r.initialStateNodes;
      }
      var o = Y0(r.path, "states")(t).current;
      return De(o) ? [r.getStateNode(o)] : He(Gi(o).map(function(a) {
        return n.history === "deep" ? r.getFromRelativePath(a) : [r.states[a[0]]];
      }));
    }, Object.defineProperty(e.prototype, "stateIds", {
      /**
       * All the state node IDs of this state node and its descendant state nodes.
       */
      get: function() {
        var t = this, n = He(Object.keys(this.states).map(function(r) {
          return t.states[r].stateIds;
        }));
        return [this.id].concat(n);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "events", {
      /**
       * All the event types accepted by this state node and its descendants.
       */
      get: function() {
        var t, n, r, i;
        if (this.__cache.events)
          return this.__cache.events;
        var o = this.states, a = new Set(this.ownEvents);
        if (o)
          try {
            for (var s = we(Object.keys(o)), l = s.next(); !l.done; l = s.next()) {
              var d = l.value, u = o[d];
              if (u.states)
                try {
                  for (var c = (r = void 0, we(u.events)), f = c.next(); !f.done; f = c.next()) {
                    var m = f.value;
                    a.add("".concat(m));
                  }
                } catch (b) {
                  r = {
                    error: b
                  };
                } finally {
                  try {
                    f && !f.done && (i = c.return) && i.call(c);
                  } finally {
                    if (r) throw r.error;
                  }
                }
            }
          } catch (b) {
            t = {
              error: b
            };
          } finally {
            try {
              l && !l.done && (n = s.return) && n.call(s);
            } finally {
              if (t) throw t.error;
            }
          }
        return this.__cache.events = Array.from(a);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "ownEvents", {
      /**
       * All the events that have transitions directly from this state node.
       *
       * Excludes any inert events.
       */
      get: function() {
        var t = new Set(this.transitions.filter(function(n) {
          return !(!n.target && !n.actions.length && n.internal);
        }).map(function(n) {
          return n.eventType;
        }));
        return Array.from(t);
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.resolveTarget = function(t) {
      var n = this;
      if (t !== void 0)
        return t.map(function(r) {
          if (!De(r))
            return r;
          var i = r[0] === n.delimiter;
          if (i && !n.parent)
            return n.getStateNodeByPath(r.slice(1));
          var o = i ? n.key + r : r;
          if (n.parent)
            try {
              var a = n.parent.getStateNodeByPath(o);
              return a;
            } catch (s) {
              throw new Error("Invalid transition definition for state node '".concat(n.id, `':
`).concat(s.message));
            }
          else
            return n.getStateNodeByPath(o);
        });
    }, e.prototype.formatTransition = function(t) {
      var n = this, r = rb(t.target), i = "internal" in t ? t.internal : r ? r.some(function(l) {
        return De(l) && l[0] === n.delimiter;
      }) : !0, o = this.machine.options.guards, a = this.resolveTarget(r), s = j(j({}, t), {
        actions: Qt(Pt(t.actions)),
        cond: Mf(t.cond, o),
        target: a,
        source: this,
        internal: i,
        eventType: t.event,
        toJSON: function() {
          return j(j({}, s), {
            target: s.target ? s.target.map(function(l) {
              return "#".concat(l.id);
            }) : void 0,
            source: "#".concat(n.id)
          });
        }
      });
      return s;
    }, e.prototype.formatTransitions = function() {
      var t, n, r = this, i;
      if (!this.config.on)
        i = [];
      else if (Array.isArray(this.config.on))
        i = this.config.on;
      else {
        var o = this.config.on, a = ka, s = o[a], l = s === void 0 ? [] : s, d = Zs(o, [typeof a == "symbol" ? a : a + ""]);
        i = He(Object.keys(d).map(function(w) {
          var y = Xn(w, d[w]);
          return y;
        }).concat(Xn(ka, l)));
      }
      var u = this.config.always ? Xn("", this.config.always) : [], c = this.config.onDone ? Xn(String(zr(this.id)), this.config.onDone) : [], f = He(this.invoke.map(function(w) {
        var y = [];
        return w.onDone && y.push.apply(y, Ie([], Se(Xn(String(Yr(w.id)), w.onDone)), !1)), w.onError && y.push.apply(y, Ie([], Se(Xn(String(tr(w.id)), w.onError)), !1)), y;
      })), m = this.after, b = He(Ie(Ie(Ie(Ie([], Se(c), !1), Se(f), !1), Se(i), !1), Se(u), !1).map(function(w) {
        return Pt(w).map(function(y) {
          return r.formatTransition(y);
        });
      }));
      try {
        for (var p = we(m), v = p.next(); !v.done; v = p.next()) {
          var g = v.value;
          b.push(g);
        }
      } catch (w) {
        t = {
          error: w
        };
      } finally {
        try {
          v && !v.done && (n = p.return) && n.call(p);
        } finally {
          if (t) throw t.error;
        }
      }
      return b;
    }, e;
  }()
);
function Lb(e, t) {
  return new $b(e, t);
}
var mo = Bf;
function Fb(e) {
  return "state" in e;
}
var Od = function() {
};
function Nb(e) {
  return "getSnapshot" in e ? e.getSnapshot() : Fb(e) ? e.state : void 0;
}
function zb(e, t) {
  t === void 0 && (t = Nb);
  var n = Qe(e) ? e : za(e), r = za(t(n.value)), i = function(o) {
    n.value.send(o);
  };
  return st(n, function(o, a, s) {
    r.value = t(o);
    var l = o.subscribe({
      next: function(d) {
        return r.value = d;
      },
      error: Od,
      complete: Od
    }).unsubscribe;
    s(function() {
      return l();
    });
  }, {
    immediate: !0
  }), { state: r, send: i };
}
const Ib = {
  CLOSE: "closed",
  ERROR: "error",
  UPDATE_CONTEXT: {
    actions: mo((e, t) => {
      const { ...n } = t;
      return n;
    })
  }
}, Jf = {
  store_id: null,
  product_id: null,
  variant_id: null,
  coupon: null,
  extra: null,
  quantity: null,
  product: null,
  variant: null,
  error: null,
  discord_data: null
}, Rb = {
  entry: mo(Jf),
  on: {
    OPEN: {
      target: "checkout",
      actions: mo((e, t) => ({
        store_id: t.store_id,
        product_id: t.product_id,
        variant_id: t.variant_id,
        coupon: t.coupon,
        extra: t.extra,
        quantity: t.quantity,
        email: t.email,
        customization: t.customization,
        affiliate: t.affiliate
      }))
    }
  }
}, jb = {
  on: {
    FETCH: "checkout"
  }
}, Vb = {
  on: {
    VARIANT_SELECTION: "variant_selection",
    VARIANT_OVERVIEW: "overview"
  },
  invoke: {
    id: "openingCheckout",
    src: (e) => (t) => {
      if (!e.store_id || !e.product_id)
        throw {
          message: "This checkout button is not properly configured.",
          errors: {
            ...e.store_id ? { product_id: [] } : { store_id: [] }
          }
        };
      t(e.variant_id ? "VARIANT_OVERVIEW" : "VARIANT_SELECTION");
    }
  }
}, wi = "https://sell.app/api/v2/fast-checkout";
function Yo(e, t) {
  for (const [n, r] of Object.entries(t))
    e = e.replace(`{${n}}`, r);
  return e;
}
function fr(e) {
  return e === null ? !0 : typeof e == "string" ? e.trim() === "" : typeof e == "number" || typeof e == "boolean" ? !1 : Array.isArray(e) ? e.length === 0 : typeof e == "object" ? Object.entries(e).length === 0 : !e;
}
function Ad(e) {
  return !fr(e);
}
function Dd(e, t) {
  return Object.fromEntries(
    Object.entries(e).filter((n) => {
      const [r, i] = n;
      return t(i, r);
    })
  );
}
const Xo = {
  async get(e, t) {
    const n = new URL(e);
    return t && (n.search = new URLSearchParams(Dd(t, Ad)).toString()), await Pd(n.toString(), {
      headers: {
        Accept: "application/json"
      }
    });
  },
  async post(e, t) {
    return await Pd(e, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(Dd(t, Ad))
    });
  }
}, Ub = 422, Bb = 403;
async function Pd(e, t) {
  const n = await fetch(e, t);
  if (!n.ok && n.status !== Ub && n.status !== Bb)
    throw new Error("Oops... Something went wrong while processing your request.");
  const r = await n.json();
  if (!n.ok)
    throw { code: n.status, message: r.message ?? "", errors: r.errors ?? {} };
  return r;
}
const Hb = `${wi}/{store_id}/{product_id}/{variant_id}`;
async function qb(e, t, n, r) {
  const i = Yo(Hb, { store_id: e, product_id: t, variant_id: n });
  return await Xo.post(i, r);
}
const Wb = `${wi}/{store_id}/{product_id}`;
async function Qf(e, t, n = {}) {
  const r = Yo(Wb, { store_id: e, product_id: t });
  return await Xo.get(r, n);
}
const Gb = `${wi}/{store_id}/{product_id}/{variant_id}`;
async function Kb(e, t, n, r = {}) {
  const i = Yo(Gb, { store_id: e, product_id: t, variant_id: n });
  return await Xo.get(i, r);
}
const { assign: Yb, pure: Xb, send: Zb } = Ko, ci = Xb((e, t) => {
  const n = typeof t.data == "object" && "errors" in t.data;
  let r = !n;
  const i = n ? t.data : { message: t.data, errors: {} };
  if (!n || "store_id" in i.errors || "product_id" in i.errors || "variant_id" in i.errors || i.code === 403) {
    const a = " Please contact the seller to let them know.";
    i.code !== 403 ? "store_id" in i.errors ? i.message = "This store could not be found." + a : "product_id" in i.errors ? i.message = "This product could not  be found." + a : "variant_id" in i.errors ? i.message = "This variant could not be found." + a : i.message = "It looks like something went wrong." : i.message === "You have been blacklisted" ? i.message = "You have either been blacklisted by the store owner, or you are using a VPN/Proxy. If you are using a proxy, please disable it." : i.message === "Action not allowed. This store is on hold." ? i.message = "This store is on hold: Creator has not paid their invoice yet" + a : i.message = "It looks like something went wrong." + a, i.errors = {}, r = !0;
  }
  const o = [
    Yb(
      () => ({
        error: i
      })
    )
  ];
  return r && o.push(Zb("ERROR")), o;
}), { assign: Md, send: Jb } = Ko, Qb = {
  on: {
    NEXT: {
      target: "overview",
      actions: Md((e, t) => ({
        variant_id: t.variant_id
      }))
    }
  },
  meta: {
    component: "VariantSelection"
  },
  initial: "fetchProductVariantList",
  states: {
    fetchProductVariantList: {
      tags: ["loading"],
      on: {
        FINISH_FETCH: "selectProductVariant"
      },
      invoke: {
        id: "fetchVariantList",
        src: async (e) => {
          var t;
          return ((t = e.product) == null ? void 0 : t.id.toString()) === e.product_id ? e.product : await Qf(e.store_id, e.product_id);
        },
        onDone: {
          actions: [
            Md(
              (e, t) => ({
                product: t.data,
                error: null
              })
            ),
            Jb((e, t) => t.data.variants.length === 1 ? { type: "NEXT", variant_id: t.data.variants[0].id.toString() } : { type: "FINISH_FETCH" })
          ]
        },
        onError: {
          target: "#embed.error",
          actions: ci
        }
      }
    },
    selectProductVariant: {}
  }
}, { assign: e2, send: _a } = Ko, t2 = {
  on: {
    PREVIOUS: "variant_selection",
    CONNECT_DISCORD: "connect_discord",
    FINAL_STEP: "final_step",
    FETCH: {
      internal: !0,
      target: [".fetchStates.fetching"]
    },
    FINISH_FETCH: {
      internal: !0,
      target: [".fetchStates.idle", ".overviewStates.idle"]
    }
  },
  meta: {
    component: "Overview"
  },
  type: "parallel",
  states: {
    fetchStates: {
      initial: "fetching",
      states: {
        fetching: {
          tags: ["fetching"],
          invoke: {
            id: "fetchProductVariant",
            src: async (e) => {
              var t;
              return {
                product: ((t = e.product) == null ? void 0 : t.id.toString()) === e.product_id ? e.product : await Qf(e.store_id, e.product_id, { withoutVariants: !0 }),
                variant: await Kb(e.store_id, e.product_id, e.variant_id, {
                  coupon: e.coupon,
                  quantity: e.quantity,
                  extra: e.extra
                })
              };
            },
            onDone: {
              actions: [
                e2(
                  (e, t) => ({
                    product: t.data.product,
                    variant: t.data.variant,
                    quantity: e.quantity ?? t.data.variant.minimum_purchase_quantity,
                    error: null
                  })
                ),
                _a("FINISH_FETCH")
              ]
            },
            onError: [
              {
                target: "#embed.error",
                cond: (e, t) => {
                  var n, r, i;
                  return (i = (r = (n = t.data) == null ? void 0 : n.errors) == null ? void 0 : r.quantity) == null ? void 0 : i.includes("This product has insufficient stock to fulfill the purchase.");
                },
                actions: [ci, _a("FINISH_FETCH")]
              },
              {
                actions: [ci, _a("FINISH_FETCH")]
              }
            ]
          }
        },
        idle: {}
      }
    },
    overviewStates: {
      initial: "loading",
      states: {
        loading: {
          tags: ["loading"]
        },
        idle: {}
      }
    }
  }
}, n2 = `${wi}/{store_id}/connect-discord`;
async function r2(e, t) {
  const n = Yo(n2, { store_id: e });
  return await Xo.get(n, t);
}
const { assign: i2, send: $d } = Ko, o2 = {
  on: {
    PREVIOUS: "overview",
    NEXT: "final_step",
    FETCH: {
      internal: !0,
      target: [".fetchStates.fetching"]
    },
    FINISH_FETCH: {
      internal: !0,
      target: [".fetchStates.idle", ".overviewStates.idle"]
    }
  },
  meta: {
    component: "ConnectDiscord"
  },
  type: "parallel",
  states: {
    fetchStates: {
      initial: "fetching",
      states: {
        fetching: {
          tags: ["fetching"],
          invoke: {
            id: "fetchingDiscordData",
            src: async (e) => {
              var t;
              return await r2(e.store_id, {
                discord_token: ((t = e.discord_data) == null ? void 0 : t.discord_token) ?? sessionStorage.getItem("discord_token"),
                origin: window.location.href
              });
            },
            onDone: {
              actions: [
                i2((e, t) => ({
                  discord_data: t.data,
                  error: null
                })),
                $d("FINISH_FETCH")
              ]
            },
            onError: {
              actions: [ci, $d("FINISH_FETCH")]
            }
          }
        },
        idle: {}
      }
    },
    overviewStates: {
      initial: "loading",
      states: {
        loading: {
          tags: ["loading"]
        },
        idle: {}
      }
    }
  }
}, a2 = {
  on: {
    PREVIOUS: "overview",
    CONNECT_DISCORD: "connect_discord"
  },
  meta: {
    component: "FinalStep"
  },
  initial: "checkFinalStep",
  states: {
    checkFinalStep: {
      on: {
        CHECKOUT: "checkout_product"
      }
    },
    checkout_product: {
      invoke: {
        id: "checkout_product",
        src: async (e) => await qb(e.store_id, e.product_id, e.variant_id, {
          coupon: e.coupon,
          quantity: e.quantity,
          extra: e.extra,
          customer_email: Ee.customer_email,
          payment_method: Ee.payment_method,
          additional_information: Ee.additional_information,
          vat_id: Ee.vat_id,
          country: Ee.country,
          discord_token: Ee.discord_token,
          affiliate: e.affiliate
        }),
        onDone: {
          target: "#embed.invoice_processed",
          actions: [
            mo(
              (e, t) => ({
                order: t.data.payment_url,
                error: null
              })
            ),
            (e, t) => {
              window.open(t.data.payment_url, "_blank");
            }
          ]
        },
        onError: {
          target: "#embed.checkout.overview",
          actions: ci
        }
      }
    }
  }
}, s2 = {
  initial: "entry",
  states: {
    entry: Vb,
    variant_selection: Qb,
    overview: t2,
    connect_discord: o2,
    final_step: a2
  }
}, l2 = {}, d2 = {
  closed: Rb,
  error: jb,
  checkout: s2,
  invoice_processed: l2
}, u2 = {
  id: "embed",
  initial: "closed",
  context: Jf,
  predictableActionArguments: !0,
  on: Ib,
  states: d2
}, c2 = Lb(u2), f2 = Zf(c2).start();
function Nt() {
  const { state: e, send: t } = zb(f2);
  return {
    context: $(() => e.value.context),
    send: t,
    state: e
  };
}
const Ee = yr({
  customer_email: "",
  payment_method: null,
  additional_information: {},
  vat_id: "",
  country: "",
  discord_token: ""
});
function em(e, t) {
  return S(), T("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function m2(e, t) {
  return S(), T("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _("path", {
      "fill-rule": "evenodd",
      d: "M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function p2(e, t) {
  return S(), T("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _("path", {
      "fill-rule": "evenodd",
      d: "M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function tm(e, t) {
  return S(), T("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function h2(e, t) {
  return S(), T("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
    })
  ]);
}
const b2 = /* @__PURE__ */ ve({
  name: "MyButton",
  props: {
    loading: {
      type: Boolean,
      required: !1,
      default: !1
    },
    disabled: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    const t = X(!1), n = X(!1);
    let r = null;
    return st(
      () => e.loading,
      (i) => {
        i ? (r && clearTimeout(r), r = setTimeout(() => {
          t.value = !0, n.value = !0;
        }, 2e3)) : (r && clearTimeout(r), t.value = !1, n.value = !1);
      }
    ), {
      showLoading: t,
      showDisabled: n
    };
  }
}), gt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of t)
    n[r] = i;
  return n;
}, g2 = ["disabled"];
function v2(e, t, n, r, i, o) {
  return S(), T("button", {
    class: ye(["embed:inline-flex embed:items-center embed:justify-center embed:sm:text-sm embed:px-4 embed:py-2 embed:focus:ring-0 embed:focus:outline-hidden embed:disabled:opacity-75 embed:disabled:cursor-not-allowed embed:transition embed:duration-200 embed:ease-in-out", {
      "embed:font-bold embed:rounded-lg embed:shadow-inner embed:hover:shadow-emerald-500 embed:focus:shadow-emerald-200 embed:[background:linear-gradient(theme(colors.emerald.400),_theme(colors.emerald.400))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.200)_25%,_theme(colors.green.200)_75%,_theme(colors.emerald.500)_100%)_border-box] embed:dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed:text-white embed:dark:text-white embed:dark:shadow-emerald-950 embed:dark:hover:shadow-emerald-900 embed:dark:focus:shadow-emerald-900 embed:border-2 embed:border-transparent embed:hover:border-emerald-500 embed:dark:hover:border-emerald-300": typeof e.$attrs.primary < "u",
      "embed:rounded-full embed:bg-zinc-100 embed:dark:bg-zinc-950 embed:text-zinc-800 embed:shadow embed:shadow-emerald-100 embed:hover:shadow-emerald-200 embed:focus:shadow-emerald-200 embed:dark:text-zinc-300 embed:dark:shadow-emerald-950 embed:dark:hover:shadow-emerald-900 embed:dark:focus:shadow-emerald-900 embed:font-medium": typeof e.$attrs.outline < "u",
      "embed:bg-red-600 embed:hover:bg-red-700 embed:text-white embed:focus:ring-offset-2 embed:ring-offset-transparent embed:focus:ring-red-500": typeof e.$attrs.danger < "u"
    }]),
    disabled: e.disabled || e.showDisabled
  }, [
    _("span", {
      class: ye({ "embed:animate-pulse embed:opacity-50": e.showLoading })
    }, [
      ri(e.$slots, "default")
    ], 2)
  ], 10, g2);
}
const Zo = /* @__PURE__ */ gt(b2, [["render", v2]]), y2 = /* @__PURE__ */ ve({
  name: "VariantSelection",
  components: {
    RadioGroup: gf,
    RadioGroupDescription: $0,
    RadioGroupLabel: yf,
    RadioGroupOption: vf,
    DialogTitle: xr,
    MyButton: Zo
  },
  setup() {
    const { context: e, send: t, state: n } = Nt(), r = $(() => e.value.product), i = X(null);
    function o(a) {
      a && (i.value = a), !fr(i.value) && t({
        type: "NEXT",
        variant_id: i.value
      });
    }
    return {
      state: n,
      product: r,
      selected_variant: i,
      selectVariant: o,
      context: e
    };
  }
}), w2 = { class: "embed:flex embed:flex-col embed:px-4 embed:pt-5 embed:pb-4 embed:sm:p-6" }, x2 = { class: "embed:space-y-4" }, k2 = ["onClick"], _2 = { class: "embed:flex embed:items-center embed:grow-0" }, S2 = { class: "embed:text-sm" }, E2 = { class: "embed:flex embed:flex-col embed:sm:flex-row embed:sm:justify-between embed:text-left embed:mt-2" }, C2 = { class: "embed:flex embed:text-sm embed:sm:mt-0 embed:sm:block embed:sm:mr-4 embed:sm:text-right embed:w-auto embed:shrink-0" };
function T2(e, t, n, r, i, o) {
  const a = oe("DialogTitle"), s = oe("RadioGroupLabel"), l = oe("RadioGroupDescription"), d = oe("RadioGroupOption"), u = oe("RadioGroup");
  return S(), T("div", null, [
    _("div", w2, [
      H(a, {
        as: "h2",
        class: "embed:mb-1 embed:font-bold embed:text-center embed:text-black embed:dark:text-white embed:text-xl"
      }, {
        default: te(() => [
          ee(A(e.product.title), 1)
        ]),
        _: 1
      }),
      t[3] || (t[3] = _("p", { class: "embed:mb-4 embed:font-normal embed:text-center embed:text-zinc-800 embed:dark:text-zinc-400 embed:text-xs" }, "Select the product you'd like to purchase", -1)),
      H(u, {
        modelValue: e.selected_variant,
        "onUpdate:modelValue": t[0] || (t[0] = (c) => e.selected_variant = c)
      }, {
        default: te(() => [
          H(s, { class: "embed:sr-only" }, {
            default: te(() => t[1] || (t[1] = [
              ee("Select the product variant")
            ])),
            _: 1
          }),
          _("div", x2, [
            (S(!0), T(U, null, yn(e.product.variants, (c) => (S(), ke(d, {
              key: c.id,
              as: "template",
              value: c.id,
              disabled: c.stock === 0
            }, {
              default: te(({ checked: f }) => [
                _("div", {
                  class: ye(["embed:flex embed:flex-col embed:border-2 embed:border-transparent embed:shadow-inner", [
                    c.stock === 0 ? "embed:opacity-50 embed:cursor-not-allowed" : "embed:cursor-pointer",
                    f ? "embed:[background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.300)_25%,_theme(colors.green.300)_75%,_theme(colors.emerald.500)_100%)_border-box] embed:dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed:shadow-emerald-200 embed:dark:shadow-emerald-900" : "embed:hover:border-emerald-200 embed:dark:hover:border-emerald-950 embed:shadow-emerald-100 embed:hover:shadow-emerald-200 embed:focus:shadow-emerald-200 embed:dark:shadow-emerald-950 embed:dark:hover:shadow-emerald-900 embed:dark:focus:shadow-emerald-900 embed:bg-white embed:dark:bg-zinc-950",
                    "embed:transition embed:duration-300 embed:ease-in-out embed:relative embed:rounded-lg embed:px-3 embed:py-2 embed:sm:flex embed:sm:justify-between embed:focus:outline-hidden"
                  ]]),
                  onClick: (m) => (Number(c.stock) > 0 || c.stock === "∞") && e.selectVariant(c.id.toString())
                }, [
                  _("div", _2, [
                    _("div", S2, [
                      H(s, {
                        as: "p",
                        class: "embed:font-bold embed:text-black embed:dark:text-white",
                        style: { "text-transform": "embed:capitalize" }
                      }, {
                        default: te(() => [
                          ee(A(c.title), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ]),
                  H(l, {
                    as: "div",
                    class: "embed:flex embed:text-xs embed:text-left"
                  }, {
                    default: te(() => [
                      _("div", {
                        class: ye(["embed:flex embed:text-xs embed:text-left", [f ? "embed:text-black embed:dark:text-zinc-200" : "embed:text-zinc-500 embed:dark:text-zinc-400"]])
                      }, A(c.description), 3)
                    ]),
                    _: 2
                  }, 1024),
                  _("div", E2, [
                    _("div", C2, [
                      _("div", {
                        class: ye([f ? "embed:text-black embed:dark:text-zinc-200 embed:font-bold" : "embed:text-zinc-500 embed:dark:text-zinc-400 embed:font-medium"])
                      }, A(c.price), 3)
                    ]),
                    H(l, {
                      as: "div",
                      class: "embed:flex embed:text-xs embed:text-left"
                    }, {
                      default: te(() => [
                        _("div", {
                          class: ye(["embed:flex embed:text-xs embed:text-left", [f ? "embed:text-black embed:dark:text-zinc-200" : "embed:text-zinc-500 embed:dark:text-zinc-400"]])
                        }, A(c.stock) + " in stock", 3)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  t[2] || (t[2] = _("div", {
                    class: "embed:absolute embed:-inset-px embed:rounded-lg embed:pointer-events-none",
                    "aria-hidden": "true"
                  }, null, -1))
                ], 10, k2)
              ]),
              _: 2
            }, 1032, ["value", "disabled"]))), 128))
          ])
        ]),
        _: 1
      }, 8, ["modelValue"])
    ])
  ]);
}
const O2 = /* @__PURE__ */ gt(y2, [["render", T2]]), kn = (e, t, n) => {
  const r = document.createElement(e), [i, o] = Array.isArray(t) ? [void 0, t] : [t, n];
  return i && Object.assign(r, i), o == null || o.forEach((a) => r.appendChild(a)), r;
}, A2 = (e, t) => {
  var n;
  return t === "left" ? e.offsetLeft : (((n = e.offsetParent instanceof HTMLElement ? e.offsetParent : null) == null ? void 0 : n.offsetWidth) ?? 0) - e.offsetWidth - e.offsetLeft;
}, D2 = (e) => e.offsetWidth > 0 && e.offsetHeight > 0, P2 = (e, t) => {
  customElements.get(e) !== t && customElements.define(e, t);
};
function M2(e, t, { reverse: n = !1 } = {}) {
  const r = e.length;
  for (let i = n ? r - 1 : 0; n ? i >= 0 : i < r; n ? i-- : i++)
    t(e[i], i);
}
const $2 = String.raw, L2 = typeof CSS < "u" && CSS.supports && CSS.supports("animation-timing-function", "linear(1,2)"), F2 = typeof CSS < "u" && CSS.supports && CSS.supports("line-height", "mod(1,1)"), Ld = typeof matchMedia < "u" ? matchMedia("(prefers-reduced-motion: reduce)") : null, po = "--_number-flow-d-opacity", rl = "--_number-flow-d-width", ho = "--_number-flow-dx", il = "--_number-flow-d", N2 = (() => {
  try {
    return CSS.registerProperty({
      name: po,
      syntax: "<number>",
      inherits: !1,
      initialValue: "0"
    }), CSS.registerProperty({
      name: ho,
      syntax: "<length>",
      inherits: !0,
      initialValue: "0px"
    }), CSS.registerProperty({
      name: rl,
      syntax: "<number>",
      inherits: !1,
      initialValue: "0"
    }), CSS.registerProperty({
      name: il,
      syntax: "<number>",
      inherits: !0,
      initialValue: "0"
    }), !0;
  } catch {
    return !1;
  }
})(), z2 = "var(--number-flow-char-height, 1em)", fn = "var(--number-flow-mask-height, 0.25em)", Fd = `calc(${fn} / 2)`, is = "var(--number-flow-mask-width, 0.5em)", Ln = `calc(${is} / var(--scale-x))`, zi = "#000 0, transparent 71%", Nd = $2`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:${z2} !important}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${rl}) / var(--width));transform:translateX(var(${ho})) scaleX(var(--scale-x));margin:0 calc(-1 * ${is});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${Ln},#000 calc(100% - ${Ln}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${fn},#000 calc(100% - ${fn}),transparent 100% ),radial-gradient(at bottom right,${zi}),radial-gradient(at bottom left,${zi}),radial-gradient(at top left,${zi}),radial-gradient(at top right,${zi});-webkit-mask-size:100% calc(100% - ${fn} * 2),calc(100% - ${Ln} * 2) 100%,${Ln} ${fn},${Ln} ${fn},${Ln} ${fn},${Ln} ${fn};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${Fd} ${is};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${ho})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${il})}.digit__num,.number .section::after{padding:${Fd} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${po}))}`, I2 = HTMLElement, R2 = F2 && L2 && N2;
let Ii, Bt = class extends I2 {
  constructor() {
    super(), this.created = !1, this.manual = !1;
    const { animated: t, ...n } = this.constructor.defaultProps;
    this._animated = this.computedAnimated = t, Object.assign(this, n);
  }
  get animated() {
    return this._animated;
  }
  set animated(t) {
    var n;
    this.animated !== t && (this._animated = t, (n = this.shadowRoot) == null || n.getAnimations().forEach((r) => r.finish()));
  }
  set data(t) {
    var n;
    if (t == null)
      return;
    const { pre: r, integer: i, fraction: o, post: a, value: s } = t;
    if (this.created) {
      const l = this._data;
      this._data = t, this.computedTrend = typeof this.trend == "function" ? this.trend(l.value, s) : this.trend, this.computedAnimated = R2 && this._animated && (!this.respectMotionPreference || !(Ld != null && Ld.matches)) && // https://github.com/barvian/number-flow/issues/9
      D2(this), (n = this.plugins) == null || n.forEach((d) => {
        var u;
        return (u = d.onUpdate) == null ? void 0 : u.call(d, t, l, this);
      }), this.manual || this.willUpdate(), this._pre.update(r), this._num.update({ integer: i, fraction: o }), this._post.update(a), this.manual || this.didUpdate();
    } else {
      if (this._data = t, this.attachShadow({ mode: "open" }), typeof CSSStyleSheet < "u" && this.shadowRoot.adoptedStyleSheets)
        Ii || (Ii = new CSSStyleSheet(), Ii.replaceSync(Nd)), this.shadowRoot.adoptedStyleSheets = [Ii];
      else {
        const l = document.createElement("style");
        l.textContent = Nd, this.shadowRoot.appendChild(l);
      }
      this._pre = new Id(this, r, {
        justify: "right",
        part: "left"
      }), this.shadowRoot.appendChild(this._pre.el), this._num = new j2(this, i, o), this.shadowRoot.appendChild(this._num.el), this._post = new Id(this, a, {
        justify: "left",
        part: "right"
      }), this.shadowRoot.appendChild(this._post.el);
    }
    this.created = !0;
  }
  willUpdate() {
    this._pre.willUpdate(), this._num.willUpdate(), this._post.willUpdate();
  }
  didUpdate() {
    if (!this.computedAnimated)
      return;
    this._abortAnimationsFinish ? this._abortAnimationsFinish.abort() : this.dispatchEvent(new Event("animationsstart")), this._pre.didUpdate(), this._num.didUpdate(), this._post.didUpdate();
    const t = new AbortController();
    Promise.all(this.shadowRoot.getAnimations().map((n) => n.finished)).then(() => {
      t.signal.aborted || (this.dispatchEvent(new Event("animationsfinish")), this._abortAnimationsFinish = void 0);
    }), this._abortAnimationsFinish = t;
  }
};
Bt.defaultProps = {
  transformTiming: {
    duration: 900,
    // Make sure to keep this minified:
    easing: "linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)"
  },
  spinTiming: void 0,
  opacityTiming: { duration: 450, easing: "ease-out" },
  animated: !0,
  trend: (e, t) => Math.sign(t - e),
  respectMotionPreference: !0,
  plugins: void 0,
  digits: void 0
};
class j2 {
  constructor(t, n, r, { className: i, ...o } = {}) {
    this.flow = t, this._integer = new zd(t, n, {
      justify: "right",
      part: "integer"
    }), this._fraction = new zd(t, r, {
      justify: "left",
      part: "fraction"
    }), this._inner = kn("span", {
      className: "number__inner"
    }, [this._integer.el, this._fraction.el]), this.el = kn("span", {
      ...o,
      part: "number",
      className: `number ${i ?? ""}`
    }, [this._inner]);
  }
  willUpdate() {
    this._prevWidth = this.el.offsetWidth, this._prevLeft = this.el.getBoundingClientRect().left, this._integer.willUpdate(), this._fraction.willUpdate();
  }
  update({ integer: t, fraction: n }) {
    this._integer.update(t), this._fraction.update(n);
  }
  didUpdate() {
    const t = this.el.getBoundingClientRect();
    this._integer.didUpdate(), this._fraction.didUpdate();
    const n = this._prevLeft - t.left, r = this.el.offsetWidth, i = this._prevWidth - r;
    this.el.style.setProperty("--width", String(r)), this.el.animate({
      [ho]: [`${n}px`, "0px"],
      [rl]: [i, 0]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
  }
}
let nm = class {
  constructor(t, n, { justify: r, className: i, ...o }, a) {
    this.flow = t, this.children = /* @__PURE__ */ new Map(), this.onCharRemove = (l) => () => {
      this.children.delete(l);
    }, this.justify = r;
    const s = n.map((l) => this.addChar(l).el);
    this.el = kn("span", {
      ...o,
      className: `section section--justify-${r} ${i ?? ""}`
    }, a ? a(s) : s);
  }
  addChar(t, { startDigitsAtZero: n = !1, ...r } = {}) {
    const i = t.type === "integer" || t.type === "fraction" ? new im(this, t.type, n ? 0 : t.value, t.pos, {
      ...r,
      onRemove: this.onCharRemove(t.key)
    }) : new V2(this, t.type, t.value, {
      ...r,
      onRemove: this.onCharRemove(t.key)
    });
    return this.children.set(t.key, i), i;
  }
  unpop(t) {
    t.el.removeAttribute("inert"), t.el.style.top = "", t.el.style[this.justify] = "";
  }
  pop(t) {
    t.forEach((n) => {
      n.el.style.top = `${n.el.offsetTop}px`, n.el.style[this.justify] = `${A2(n.el, this.justify)}px`;
    }), t.forEach((n) => {
      n.el.setAttribute("inert", ""), n.present = !1;
    });
  }
  addNewAndUpdateExisting(t) {
    const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = this.justify === "left", o = i ? "prepend" : "append";
    if (M2(t, (a) => {
      let s;
      this.children.has(a.key) ? (s = this.children.get(a.key), r.set(a, s), this.unpop(s), s.present = !0) : (s = this.addChar(a, { startDigitsAtZero: !0, animateIn: !0 }), n.set(a, s)), this.el[o](s.el);
    }, { reverse: i }), this.flow.computedAnimated) {
      const a = this.el.getBoundingClientRect();
      n.forEach((s) => {
        s.willUpdate(a);
      });
    }
    n.forEach((a, s) => {
      a.update(s.value);
    }), r.forEach((a, s) => {
      a.update(s.value);
    });
  }
  willUpdate() {
    const t = this.el.getBoundingClientRect();
    this._prevOffset = t[this.justify], this.children.forEach((n) => n.willUpdate(t));
  }
  didUpdate() {
    const t = this.el.getBoundingClientRect();
    this.children.forEach((i) => i.didUpdate(t));
    const n = t[this.justify], r = this._prevOffset - n;
    r && this.children.size && this.el.animate({
      transform: [`translateX(${r}px)`, "none"]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
  }
};
class zd extends nm {
  update(t) {
    const n = /* @__PURE__ */ new Map();
    this.children.forEach((r, i) => {
      t.find((o) => o.key === i) || n.set(i, r), this.unpop(r);
    }), this.addNewAndUpdateExisting(t), n.forEach((r) => {
      r instanceof im && r.update(0);
    }), this.pop(n);
  }
}
class Id extends nm {
  update(t) {
    const n = /* @__PURE__ */ new Map();
    this.children.forEach((r, i) => {
      t.find((o) => o.key === i) || n.set(i, r);
    }), this.pop(n), this.addNewAndUpdateExisting(t);
  }
}
let os = class {
  constructor(t, n, { onRemove: r, animateIn: i = !1 } = {}) {
    this.flow = t, this.el = n, this._present = !0, this._remove = () => {
      var o;
      this.el.remove(), (o = this._onRemove) == null || o.call(this);
    }, this.el.classList.add("animate-presence"), this.flow.computedAnimated && i && this.el.animate({
      [po]: [-0.9999, 0]
    }, {
      ...this.flow.opacityTiming,
      composite: "accumulate"
    }), this._onRemove = r;
  }
  get present() {
    return this._present;
  }
  set present(t) {
    if (this._present !== t) {
      if (this._present = t, t ? this.el.removeAttribute("inert") : this.el.setAttribute("inert", ""), !this.flow.computedAnimated) {
        t || this._remove();
        return;
      }
      this.el.style.setProperty("--_number-flow-d-opacity", t ? "0" : "-.999"), this.el.animate({
        [po]: t ? [-0.9999, 0] : [0.999, 0]
      }, {
        ...this.flow.opacityTiming,
        composite: "accumulate"
      }), t ? this.flow.removeEventListener("animationsfinish", this._remove) : this.flow.addEventListener("animationsfinish", this._remove, {
        once: !0
      });
    }
  }
}, rm = class extends os {
  constructor(t, n, r, i) {
    super(t.flow, r, i), this.section = t, this.value = n, this.el = r;
  }
}, im = class extends rm {
  constructor(t, n, r, i, o) {
    var a, s;
    const l = (((s = (a = t.flow.digits) == null ? void 0 : a[i]) == null ? void 0 : s.max) ?? 9) + 1, d = Array.from({ length: l }).map((c, f) => {
      const m = kn("span", { className: "digit__num" }, [
        document.createTextNode(String(f))
      ]);
      return f !== r && m.setAttribute("inert", ""), m.style.setProperty("--n", String(f)), m;
    }), u = kn("span", {
      part: `digit ${n}-digit`,
      className: "digit"
    }, d);
    u.style.setProperty("--current", String(r)), u.style.setProperty("--length", String(l)), super(t, r, u, o), this.pos = i, this._onAnimationsFinish = () => {
      this.el.classList.remove("is-spinning");
    }, this._numbers = d, this.length = l;
  }
  willUpdate(t) {
    const n = this.el.getBoundingClientRect();
    this._prevValue = this.value;
    const r = n[this.section.justify] - t[this.section.justify], i = n.width / 2;
    this._prevCenter = this.section.justify === "left" ? r + i : r - i;
  }
  update(t) {
    this.el.style.setProperty("--current", String(t)), this._numbers.forEach((n, r) => r === t ? n.removeAttribute("inert") : n.setAttribute("inert", "")), this.value = t;
  }
  didUpdate(t) {
    const n = this.el.getBoundingClientRect(), r = n[this.section.justify] - t[this.section.justify], i = n.width / 2, o = this.section.justify === "left" ? r + i : r - i, a = this._prevCenter - o;
    a && this.el.animate({
      transform: [`translateX(${a}px)`, "none"]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
    const s = this.getDelta();
    s && (this.el.classList.add("is-spinning"), this.el.animate({
      [il]: [-s, 0]
    }, {
      ...this.flow.spinTiming ?? this.flow.transformTiming,
      composite: "accumulate"
    }), this.flow.addEventListener("animationsfinish", this._onAnimationsFinish, { once: !0 }));
  }
  getDelta() {
    var t;
    if (this.flow.plugins)
      for (const i of this.flow.plugins) {
        const o = (t = i.getDelta) == null ? void 0 : t.call(i, this.value, this._prevValue, this);
        if (o != null)
          return o;
      }
    const n = this.value - this._prevValue, r = this.flow.computedTrend || Math.sign(n);
    return r < 0 && this.value > this._prevValue ? this.value - this.length - this._prevValue : r > 0 && this.value < this._prevValue ? this.length - this._prevValue + this.value : n;
  }
};
class V2 extends rm {
  constructor(t, n, r, i) {
    const o = kn("span", {
      className: "symbol__value",
      textContent: r
    });
    super(t, r, kn("span", {
      part: `symbol ${n}`,
      className: "symbol"
    }, [o]), i), this.type = n, this._children = /* @__PURE__ */ new Map(), this._onChildRemove = (a) => () => {
      this._children.delete(a);
    }, this._children.set(r, new os(this.flow, o, {
      onRemove: this._onChildRemove(r)
    }));
  }
  willUpdate(t) {
    if (this.type === "decimal")
      return;
    const n = this.el.getBoundingClientRect();
    this._prevOffset = n[this.section.justify] - t[this.section.justify];
  }
  update(t) {
    if (this.value !== t) {
      const n = this._children.get(this.value);
      if (n.present = !1, this._children.has(t)) {
        const r = this._children.get(t);
        r.present = !0;
      } else {
        const r = kn("span", {
          className: "symbol__value",
          textContent: t
        });
        this.el.appendChild(r), this._children.set(t, new os(this.flow, r, {
          animateIn: !0,
          onRemove: this._onChildRemove(t)
        }));
      }
    }
    this.value = t;
  }
  didUpdate(t) {
    if (this.type === "decimal")
      return;
    const n = this.el.getBoundingClientRect()[this.section.justify] - t[this.section.justify], r = this._prevOffset - n;
    r && this.el.animate({
      transform: [`translateX(${r}px)`, "none"]
    }, { ...this.flow.transformTiming, composite: "accumulate" });
  }
}
function U2(e, t, n, r) {
  const i = t.formatToParts(e);
  n && i.unshift({ type: "prefix", value: n }), r && i.push({ type: "suffix", value: r });
  const o = [], a = [], s = [], l = [], d = {}, u = (p) => `${p}:${d[p] = (d[p] ?? -1) + 1}`;
  let c = "", f = !1, m = !1;
  for (const p of i) {
    c += p.value;
    const v = p.type === "minusSign" || p.type === "plusSign" ? "sign" : p.type;
    v === "integer" ? (f = !0, a.push(...p.value.split("").map((g) => ({ type: v, value: parseInt(g) })))) : v === "group" ? a.push({ type: v, value: p.value }) : v === "decimal" ? (m = !0, s.push({ type: v, value: p.value, key: u(v) })) : v === "fraction" ? s.push(...p.value.split("").map((g) => ({
      type: v,
      value: parseInt(g),
      key: u(v),
      pos: -1 - d[v]
    }))) : (f || m ? l : o).push({
      type: v,
      value: p.value,
      key: u(v)
    });
  }
  const b = [];
  for (let p = a.length - 1; p >= 0; p--) {
    const v = a[p];
    b.unshift(v.type === "integer" ? {
      ...v,
      key: u(v.type),
      pos: d[v.type]
    } : {
      ...v,
      key: u(v.type)
    });
  }
  return {
    pre: o,
    integer: b,
    fraction: s,
    post: l,
    valueAsString: c,
    value: typeof e == "string" ? parseFloat(e) : e
  };
}
const B2 = Symbol(), _n = (e, t, n) => {
  const r = document.createElement(e), [i, o] = Array.isArray(t) ? [void 0, t] : [t, n];
  return i && Object.assign(r, i), o == null || o.forEach((a) => r.appendChild(a)), r;
}, H2 = (e, t) => {
  var n;
  return t === "left" ? e.offsetLeft : (((n = e.offsetParent instanceof HTMLElement ? e.offsetParent : null) == null ? void 0 : n.offsetWidth) ?? 0) - e.offsetWidth - e.offsetLeft;
}, q2 = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function W2(e, t, { reverse: n = !1 } = {}) {
  const r = e.length;
  for (let i = n ? r - 1 : 0; n ? i >= 0 : i < r; n ? i-- : i++)
    t(e[i], i);
}
const G2 = String.raw, K2 = typeof CSS < "u" && CSS.supports && CSS.supports("animation-timing-function", "linear(1,2)"), Y2 = typeof CSS < "u" && CSS.supports && CSS.supports("line-height", "mod(1,1)"), Rd = typeof matchMedia < "u" ? matchMedia("(prefers-reduced-motion: reduce)") : null, bo = "--_number-flow-d-opacity", ol = "--_number-flow-d-width", go = "--_number-flow-dx", al = "--_number-flow-d", X2 = (() => {
  try {
    return CSS.registerProperty({
      name: bo,
      syntax: "<number>",
      inherits: !1,
      initialValue: "0"
    }), CSS.registerProperty({
      name: go,
      syntax: "<length>",
      inherits: !0,
      initialValue: "0px"
    }), CSS.registerProperty({
      name: ol,
      syntax: "<number>",
      inherits: !1,
      initialValue: "0"
    }), CSS.registerProperty({
      name: al,
      syntax: "<number>",
      inherits: !0,
      initialValue: "0"
    }), !0;
  } catch {
    return !1;
  }
})(), Z2 = "var(--number-flow-char-height, 1em)", mn = "var(--number-flow-mask-height, 0.25em)", jd = `calc(${mn} / 2)`, as = "var(--number-flow-mask-width, 0.5em)", Fn = `calc(${as} / var(--scale-x))`, Ri = "#000 0, transparent 71%", Vd = G2`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:${Z2} !important}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${ol}) / var(--width));transform:translateX(var(${go})) scaleX(var(--scale-x));margin:0 calc(-1 * ${as});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${Fn},#000 calc(100% - ${Fn}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${mn},#000 calc(100% - ${mn}),transparent 100% ),radial-gradient(at bottom right,${Ri}),radial-gradient(at bottom left,${Ri}),radial-gradient(at top left,${Ri}),radial-gradient(at top right,${Ri});-webkit-mask-size:100% calc(100% - ${mn} * 2),calc(100% - ${Fn} * 2) 100%,${Fn} ${mn},${Fn} ${mn},${Fn} ${mn},${Fn} ${mn};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${jd} ${as};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${go})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${al})}.digit__num,.number .section::after{padding:${jd} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${bo}))}`, J2 = HTMLElement, Q2 = Y2 && K2 && X2;
let ji;
class eg extends J2 {
  constructor() {
    super(), this.created = !1, this.manual = !1;
    const { animated: t, ...n } = this.constructor.defaultProps;
    this._animated = this.computedAnimated = t, Object.assign(this, n);
  }
  get animated() {
    return this._animated;
  }
  set animated(t) {
    var n;
    this.animated !== t && (this._animated = t, (n = this.shadowRoot) == null || n.getAnimations().forEach((r) => r.finish()));
  }
  set data(t) {
    var n;
    if (t == null)
      return;
    const { pre: r, integer: i, fraction: o, post: a, value: s } = t;
    if (this.created) {
      const l = this._data;
      this._data = t, this.computedTrend = typeof this.trend == "function" ? this.trend(l.value, s) : this.trend, this.computedAnimated = Q2 && this._animated && (!this.respectMotionPreference || !(Rd != null && Rd.matches)) && // https://github.com/barvian/number-flow/issues/9
      q2(this), (n = this.plugins) == null || n.forEach((d) => {
        var u;
        return (u = d.onUpdate) == null ? void 0 : u.call(d, t, l, this);
      }), this.manual || this.willUpdate(), this._pre.update(r), this._num.update({ integer: i, fraction: o }), this._post.update(a), this.manual || this.didUpdate();
    } else {
      if (this._data = t, this.attachShadow({ mode: "open" }), typeof CSSStyleSheet < "u" && this.shadowRoot.adoptedStyleSheets)
        ji || (ji = new CSSStyleSheet(), ji.replaceSync(Vd)), this.shadowRoot.adoptedStyleSheets = [ji];
      else {
        const l = document.createElement("style");
        l.textContent = Vd, this.shadowRoot.appendChild(l);
      }
      this._pre = new Bd(this, r, {
        justify: "right",
        part: "left"
      }), this.shadowRoot.appendChild(this._pre.el), this._num = new tg(this, i, o), this.shadowRoot.appendChild(this._num.el), this._post = new Bd(this, a, {
        justify: "left",
        part: "right"
      }), this.shadowRoot.appendChild(this._post.el);
    }
    this.created = !0;
  }
  willUpdate() {
    this._pre.willUpdate(), this._num.willUpdate(), this._post.willUpdate();
  }
  didUpdate() {
    if (!this.computedAnimated)
      return;
    this._abortAnimationsFinish ? this._abortAnimationsFinish.abort() : this.dispatchEvent(new Event("animationsstart")), this._pre.didUpdate(), this._num.didUpdate(), this._post.didUpdate();
    const t = new AbortController();
    Promise.all(this.shadowRoot.getAnimations().map((n) => n.finished)).then(() => {
      t.signal.aborted || (this.dispatchEvent(new Event("animationsfinish")), this._abortAnimationsFinish = void 0);
    }), this._abortAnimationsFinish = t;
  }
}
eg.defaultProps = {
  transformTiming: {
    duration: 900,
    // Make sure to keep this minified:
    easing: "linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)"
  },
  spinTiming: void 0,
  opacityTiming: { duration: 450, easing: "ease-out" },
  animated: !0,
  trend: (e, t) => Math.sign(t - e),
  respectMotionPreference: !0,
  plugins: void 0,
  digits: void 0
};
class tg {
  constructor(t, n, r, { className: i, ...o } = {}) {
    this.flow = t, this._integer = new Ud(t, n, {
      justify: "right",
      part: "integer"
    }), this._fraction = new Ud(t, r, {
      justify: "left",
      part: "fraction"
    }), this._inner = _n("span", {
      className: "number__inner"
    }, [this._integer.el, this._fraction.el]), this.el = _n("span", {
      ...o,
      part: "number",
      className: `number ${i ?? ""}`
    }, [this._inner]);
  }
  willUpdate() {
    this._prevWidth = this.el.offsetWidth, this._prevLeft = this.el.getBoundingClientRect().left, this._integer.willUpdate(), this._fraction.willUpdate();
  }
  update({ integer: t, fraction: n }) {
    this._integer.update(t), this._fraction.update(n);
  }
  didUpdate() {
    const t = this.el.getBoundingClientRect();
    this._integer.didUpdate(), this._fraction.didUpdate();
    const n = this._prevLeft - t.left, r = this.el.offsetWidth, i = this._prevWidth - r;
    this.el.style.setProperty("--width", String(r)), this.el.animate({
      [go]: [`${n}px`, "0px"],
      [ol]: [i, 0]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
  }
}
class om {
  constructor(t, n, { justify: r, className: i, ...o }, a) {
    this.flow = t, this.children = /* @__PURE__ */ new Map(), this.onCharRemove = (l) => () => {
      this.children.delete(l);
    }, this.justify = r;
    const s = n.map((l) => this.addChar(l).el);
    this.el = _n("span", {
      ...o,
      className: `section section--justify-${r} ${i ?? ""}`
    }, a ? a(s) : s);
  }
  addChar(t, { startDigitsAtZero: n = !1, ...r } = {}) {
    const i = t.type === "integer" || t.type === "fraction" ? new sm(this, t.type, n ? 0 : t.value, t.pos, {
      ...r,
      onRemove: this.onCharRemove(t.key)
    }) : new ng(this, t.type, t.value, {
      ...r,
      onRemove: this.onCharRemove(t.key)
    });
    return this.children.set(t.key, i), i;
  }
  unpop(t) {
    t.el.removeAttribute("inert"), t.el.style.top = "", t.el.style[this.justify] = "";
  }
  pop(t) {
    t.forEach((n) => {
      n.el.style.top = `${n.el.offsetTop}px`, n.el.style[this.justify] = `${H2(n.el, this.justify)}px`;
    }), t.forEach((n) => {
      n.el.setAttribute("inert", ""), n.present = !1;
    });
  }
  addNewAndUpdateExisting(t) {
    const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = this.justify === "left", o = i ? "prepend" : "append";
    if (W2(t, (a) => {
      let s;
      this.children.has(a.key) ? (s = this.children.get(a.key), r.set(a, s), this.unpop(s), s.present = !0) : (s = this.addChar(a, { startDigitsAtZero: !0, animateIn: !0 }), n.set(a, s)), this.el[o](s.el);
    }, { reverse: i }), this.flow.computedAnimated) {
      const a = this.el.getBoundingClientRect();
      n.forEach((s) => {
        s.willUpdate(a);
      });
    }
    n.forEach((a, s) => {
      a.update(s.value);
    }), r.forEach((a, s) => {
      a.update(s.value);
    });
  }
  willUpdate() {
    const t = this.el.getBoundingClientRect();
    this._prevOffset = t[this.justify], this.children.forEach((n) => n.willUpdate(t));
  }
  didUpdate() {
    const t = this.el.getBoundingClientRect();
    this.children.forEach((i) => i.didUpdate(t));
    const n = t[this.justify], r = this._prevOffset - n;
    r && this.children.size && this.el.animate({
      transform: [`translateX(${r}px)`, "none"]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
  }
}
class Ud extends om {
  update(t) {
    const n = /* @__PURE__ */ new Map();
    this.children.forEach((r, i) => {
      t.find((o) => o.key === i) || n.set(i, r), this.unpop(r);
    }), this.addNewAndUpdateExisting(t), n.forEach((r) => {
      r instanceof sm && r.update(0);
    }), this.pop(n);
  }
}
class Bd extends om {
  update(t) {
    const n = /* @__PURE__ */ new Map();
    this.children.forEach((r, i) => {
      t.find((o) => o.key === i) || n.set(i, r);
    }), this.pop(n), this.addNewAndUpdateExisting(t);
  }
}
let ss = class {
  constructor(t, n, { onRemove: r, animateIn: i = !1 } = {}) {
    this.flow = t, this.el = n, this._present = !0, this._remove = () => {
      var o;
      this.el.remove(), (o = this._onRemove) == null || o.call(this);
    }, this.el.classList.add("animate-presence"), this.flow.computedAnimated && i && this.el.animate({
      [bo]: [-0.9999, 0]
    }, {
      ...this.flow.opacityTiming,
      composite: "accumulate"
    }), this._onRemove = r;
  }
  get present() {
    return this._present;
  }
  set present(t) {
    if (this._present !== t) {
      if (this._present = t, t ? this.el.removeAttribute("inert") : this.el.setAttribute("inert", ""), !this.flow.computedAnimated) {
        t || this._remove();
        return;
      }
      this.el.style.setProperty("--_number-flow-d-opacity", t ? "0" : "-.999"), this.el.animate({
        [bo]: t ? [-0.9999, 0] : [0.999, 0]
      }, {
        ...this.flow.opacityTiming,
        composite: "accumulate"
      }), t ? this.flow.removeEventListener("animationsfinish", this._remove) : this.flow.addEventListener("animationsfinish", this._remove, {
        once: !0
      });
    }
  }
};
class am extends ss {
  constructor(t, n, r, i) {
    super(t.flow, r, i), this.section = t, this.value = n, this.el = r;
  }
}
class sm extends am {
  constructor(t, n, r, i, o) {
    var a, s;
    const l = (((s = (a = t.flow.digits) == null ? void 0 : a[i]) == null ? void 0 : s.max) ?? 9) + 1, d = Array.from({ length: l }).map((c, f) => {
      const m = _n("span", { className: "digit__num" }, [
        document.createTextNode(String(f))
      ]);
      return f !== r && m.setAttribute("inert", ""), m.style.setProperty("--n", String(f)), m;
    }), u = _n("span", {
      part: `digit ${n}-digit`,
      className: "digit"
    }, d);
    u.style.setProperty("--current", String(r)), u.style.setProperty("--length", String(l)), super(t, r, u, o), this.pos = i, this._onAnimationsFinish = () => {
      this.el.classList.remove("is-spinning");
    }, this._numbers = d, this.length = l;
  }
  willUpdate(t) {
    const n = this.el.getBoundingClientRect();
    this._prevValue = this.value;
    const r = n[this.section.justify] - t[this.section.justify], i = n.width / 2;
    this._prevCenter = this.section.justify === "left" ? r + i : r - i;
  }
  update(t) {
    this.el.style.setProperty("--current", String(t)), this._numbers.forEach((n, r) => r === t ? n.removeAttribute("inert") : n.setAttribute("inert", "")), this.value = t;
  }
  didUpdate(t) {
    const n = this.el.getBoundingClientRect(), r = n[this.section.justify] - t[this.section.justify], i = n.width / 2, o = this.section.justify === "left" ? r + i : r - i, a = this._prevCenter - o;
    a && this.el.animate({
      transform: [`translateX(${a}px)`, "none"]
    }, {
      ...this.flow.transformTiming,
      composite: "accumulate"
    });
    const s = this.getDelta();
    s && (this.el.classList.add("is-spinning"), this.el.animate({
      [al]: [-s, 0]
    }, {
      ...this.flow.spinTiming ?? this.flow.transformTiming,
      composite: "accumulate"
    }), this.flow.addEventListener("animationsfinish", this._onAnimationsFinish, { once: !0 }));
  }
  getDelta() {
    var t;
    if (this.flow.plugins)
      for (const i of this.flow.plugins) {
        const o = (t = i.getDelta) == null ? void 0 : t.call(i, this.value, this._prevValue, this);
        if (o != null)
          return o;
      }
    const n = this.value - this._prevValue, r = this.flow.computedTrend || Math.sign(n);
    return r < 0 && this.value > this._prevValue ? this.value - this.length - this._prevValue : r > 0 && this.value < this._prevValue ? this.length - this._prevValue + this.value : n;
  }
}
class ng extends am {
  constructor(t, n, r, i) {
    const o = _n("span", {
      className: "symbol__value",
      textContent: r
    });
    super(t, r, _n("span", {
      part: `symbol ${n}`,
      className: "symbol"
    }, [o]), i), this.type = n, this._children = /* @__PURE__ */ new Map(), this._onChildRemove = (a) => () => {
      this._children.delete(a);
    }, this._children.set(r, new ss(this.flow, o, {
      onRemove: this._onChildRemove(r)
    }));
  }
  willUpdate(t) {
    if (this.type === "decimal")
      return;
    const n = this.el.getBoundingClientRect();
    this._prevOffset = n[this.section.justify] - t[this.section.justify];
  }
  update(t) {
    if (this.value !== t) {
      const n = this._children.get(this.value);
      if (n.present = !1, this._children.has(t)) {
        const r = this._children.get(t);
        r.present = !0;
      } else {
        const r = _n("span", {
          className: "symbol__value",
          textContent: t
        });
        this.el.appendChild(r), this._children.set(t, new ss(this.flow, r, {
          animateIn: !0,
          onRemove: this._onChildRemove(t)
        }));
      }
    }
    this.value = t;
  }
  didUpdate(t) {
    if (this.type === "decimal")
      return;
    const n = this.el.getBoundingClientRect()[this.section.justify] - t[this.section.justify], r = this._prevOffset - n;
    r && this.el.animate({
      transform: [`translateX(${r}px)`, "none"]
    }, { ...this.flow.transformTiming, composite: "accumulate" });
  }
}
const rg = ["aria-label", "manual", "trend", "plugins", "animated", "transformTiming", "spinTiming", "opacityTiming", "respectMotionPreference", "data-will-change", "digits", "innerHTML", "data"], lm = /* @__PURE__ */ ve({
  inheritAttrs: !1,
  __name: "index",
  props: {
    transformTiming: { default: () => Bt.defaultProps.transformTiming },
    spinTiming: { default: () => Bt.defaultProps.spinTiming },
    opacityTiming: { default: () => Bt.defaultProps.opacityTiming },
    animated: { type: Boolean, default: () => Bt.defaultProps.animated },
    respectMotionPreference: { type: Boolean, default: () => Bt.defaultProps.respectMotionPreference },
    trend: { type: [Number, Function], default: () => Bt.defaultProps.trend },
    plugins: { default: () => Bt.defaultProps.plugins },
    digits: { default: () => Bt.defaultProps.digits },
    locales: {},
    format: {},
    value: {},
    prefix: {},
    suffix: {},
    willChange: { type: Boolean, default: !1 }
  },
  emits: ["animationsstart", "animationsfinish"],
  setup(e, { expose: t, emit: n }) {
    const r = X();
    t({ el: r });
    const i = n, o = $(() => new Intl.NumberFormat(e.locales, e.format)), a = $(() => U2(e.value, o.value, e.prefix, e.suffix)), s = void 0, l = Ge(B2, void 0);
    return l == null || l(r, a), (d, u) => (S(), T("number-flow-vue", dr({
      ref_key: "el",
      ref: r,
      "aria-label": a.value.valueAsString
    }, d.$attrs, {
      role: "img",
      manual: !!ei(l),
      trend: d.trend,
      plugins: d.plugins,
      animated: d.animated,
      transformTiming: d.transformTiming,
      spinTiming: d.spinTiming,
      opacityTiming: d.opacityTiming,
      respectMotionPreference: d.respectMotionPreference,
      "data-will-change": d.willChange ? "" : void 0,
      digits: d.digits,
      innerHTML: ei(s),
      "data-allow-mismatch": "",
      onAnimationsstart: u[0] || (u[0] = (c) => i("animationsstart")),
      onAnimationsfinish: u[1] || (u[1] = (c) => i("animationsfinish")),
      data: a.value
    }), null, 16, rg));
  }
});
P2("number-flow-vue", Bt);
const ig = /* @__PURE__ */ ve({
  name: "NumberInput",
  components: {
    MinusIcon: m2,
    PlusIcon: p2,
    NumberFlow: lm
  },
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: Number,
      default: null
    },
    min: {
      type: Number,
      default: null
    },
    max: {
      type: Number,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { context: n } = Nt(), r = n.value.variant.quantity_increments ?? 1, i = X(!0), o = X(!0), a = X(null), s = X(!1);
    function l(v) {
      if (v = parseInt(v.toString()), i.value = !0, isNaN(v) && (v = 0), r > 1) {
        const g = (v - (e.min ?? 1)) % r;
        g !== 0 && (v = v - g);
      }
      v < (e.min ?? 1) ? v = e.min : e.max !== null && v > e.max && (v = e.max), t("update:modelValue", v);
    }
    const d = $(() => e.min !== e.max && r > 0), u = $(() => d.value && (e.max ? e.modelValue + r <= e.max : !0));
    function c() {
      u.value && (i.value = !0, l(e.modelValue + r));
    }
    const f = $(() => d.value && e.modelValue - r >= (e.min ?? 1));
    function m() {
      f.value && (i.value = !0, l(e.modelValue - r));
    }
    function b() {
      s.value = !0;
    }
    function p() {
      s.value = !1;
    }
    return {
      emitUpdate: l,
      canModify: d,
      canIncrement: u,
      increment: c,
      canDecrement: f,
      decrement: m,
      isAnimated: i,
      showCaret: o,
      input: a,
      isFocused: s,
      handleFocus: b,
      handleBlur: p
    };
  }
}), og = { class: "embed:group embed:flex embed:items-stretch embed:rounded-md embed:font-semibold embed:border embed:border-emerald-400 embed:dark:border-emerald-700 embed:ring-1 embed:dark:ring-1 embed:ring-emerald-300 embed:dark:ring-emerald-800 embed:dark:bg-zinc-950 embed:transition-[box-shadow] embed:focus-within:ring-2 embed:dark:focus-within:ring-2" }, ag = ["disabled"], sg = { class: "embed:relative embed:grid embed:items-center embed:justify-items-center embed:text-center embed:[grid-template-areas:'overlap'] embed:*:[grid-area:overlap]" }, lg = ["min", "max", "value", "disabled"], dg = ["disabled"];
function ug(e, t, n, r, i, o) {
  const a = oe("MinusIcon"), s = oe("NumberFlow"), l = oe("PlusIcon");
  return S(), T("div", og, [
    _("button", {
      "aria-hidden": "",
      tabindex: "-1",
      class: "embed:flex embed:items-center embed:pl-[.5em] embed:pr-[.325em]",
      disabled: !e.canDecrement,
      onClick: t[0] || (t[0] = (...d) => e.decrement && e.decrement(...d))
    }, [
      H(a, {
        class: "embed:w-4 embed:h-4 embed:dark:text-white",
        "absolute-stroke-width": "",
        "stroke-width": "3.5"
      })
    ], 8, ag),
    _("div", sg, [
      Ns(H(s, {
        value: e.modelValue,
        format: { useGrouping: !1 },
        "aria-hidden": "",
        animated: e.isAnimated,
        class: "embed:dark:text-white",
        disabled: !e.canModify,
        "will-change": "",
        onAnimationsstart: t[1] || (t[1] = (d) => e.showCaret = !1),
        onAnimationsfinish: t[2] || (t[2] = (d) => e.showCaret = !0)
      }, null, 8, ["value", "animated", "disabled"]), [
        [l1, !e.isFocused]
      ]),
      _("input", dr(e.$attrs, {
        ref: "input",
        class: [
          e.isFocused ? "embed:text-current embed:dark:text-white" : "embed:text-transparent",
          "embed:caret-primary embed:spin-hide embed:bg-transparent embed:text-center embed:font-[inherit] embed:outline-hidden embed:focus:outline-hidden embed:focus:ring-0 embed:border-none embed:z-10",
          e.canModify ? "" : "embed:pointer-events-none"
        ],
        style: {
          fontKerning: "none",
          width: "4rem"
        },
        type: "text",
        min: e.min,
        step: "1",
        autocomplete: "off",
        inputmode: "numeric",
        max: e.max,
        value: e.modelValue,
        disabled: !e.canModify,
        onInput: t[3] || (t[3] = (d) => e.canModify ? e.emitUpdate(d.target.value) : null),
        onFocus: t[4] || (t[4] = (...d) => e.handleFocus && e.handleFocus(...d)),
        onBlur: t[5] || (t[5] = (...d) => e.handleBlur && e.handleBlur(...d))
      }), null, 16, lg)
    ]),
    _("button", {
      "aria-hidden": "",
      tabindex: "-1",
      class: "embed:flex embed:items-center embed:pl-[.325em] embed:pr-[.5em]",
      disabled: !e.canIncrement,
      onClick: t[6] || (t[6] = (...d) => e.increment && e.increment(...d))
    }, [
      H(l, {
        class: "embed:w-4 embed:h-4 embed:dark:text-white",
        "absolute-stroke-width": "",
        "stroke-width": "3.5"
      })
    ], 8, dg)
  ]);
}
const cg = /* @__PURE__ */ gt(ig, [["render", ug]]);
var fg = { NODE_ENV: "production" };
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function mg(e, t, n) {
  return (t = hg(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Hd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hd(Object(n), !0).forEach(function(r) {
      mg(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hd(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function pg(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hg(e) {
  var t = pg(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const qd = () => {
};
let sl = {}, dm = {}, um = null, cm = {
  mark: qd,
  measure: qd
};
try {
  typeof window < "u" && (sl = window), typeof document < "u" && (dm = document), typeof MutationObserver < "u" && (um = MutationObserver), typeof performance < "u" && (cm = performance);
} catch {
}
const {
  userAgent: Wd = ""
} = sl.navigator || {}, En = sl, Ve = dm, Gd = um, Vi = cm;
En.document;
const dn = !!Ve.documentElement && !!Ve.head && typeof Ve.addEventListener == "function" && typeof Ve.createElement == "function", fm = ~Wd.indexOf("MSIE") || ~Wd.indexOf("Trident/");
var bg = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, gg = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, mm = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  }
}, vg = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, pm = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], dt = "classic", Jo = "duotone", yg = "sharp", wg = "sharp-duotone", hm = [dt, Jo, yg, wg], xg = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, kg = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, _g = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}]]), Sg = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    brands: "fab"
  },
  duotone: {
    solid: "fad",
    regular: "fadr",
    light: "fadl",
    thin: "fadt"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds",
    regular: "fasdr",
    light: "fasdl",
    thin: "fasdt"
  }
}, Eg = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Kd = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Cg = ["kit"], Tg = {
  kit: {
    "fa-kit": "fak"
  }
}, Og = ["fak", "fakd"], Ag = {
  kit: {
    fak: "fa-kit"
  }
}, Yd = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, Ui = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Dg = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Pg = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Mg = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, $g = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  }
}, Lg = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, ls = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  }
}, Fg = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], ds = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Dg, ...Fg], Ng = ["solid", "regular", "light", "thin", "duotone", "brands"], bm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], zg = bm.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Ig = [...Object.keys(Lg), ...Ng, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ui.GROUP, Ui.SWAP_OPACITY, Ui.PRIMARY, Ui.SECONDARY].concat(bm.map((e) => "".concat(e, "x"))).concat(zg.map((e) => "w-".concat(e))), Rg = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
};
const rn = "___FONT_AWESOME___", us = 16, gm = "fa", vm = "svg-inline--fa", Wn = "data-fa-i2svg", cs = "data-fa-pseudo-element", jg = "data-fa-pseudo-element-pending", ll = "data-prefix", dl = "data-icon", Xd = "fontawesome-i2svg", Vg = "async", Ug = ["HTML", "HEAD", "STYLE", "SCRIPT"], ym = (() => {
  try {
    return fg.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function xi(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[dt];
    }
  });
}
const wm = N({}, mm);
wm[dt] = N(N(N(N({}, {
  "fa-duotone": "duotone"
}), mm[dt]), Kd.kit), Kd["kit-duotone"]);
const Bg = xi(wm), fs = N({}, Sg);
fs[dt] = N(N(N(N({}, {
  duotone: "fad"
}), fs[dt]), Yd.kit), Yd["kit-duotone"]);
const Zd = xi(fs), ms = N({}, ls);
ms[dt] = N(N({}, ms[dt]), Ag.kit);
const ul = xi(ms), ps = N({}, $g);
ps[dt] = N(N({}, ps[dt]), Tg.kit);
xi(ps);
const Hg = bg, xm = "fa-layers-text", qg = gg, Wg = N({}, xg);
xi(Wg);
const Gg = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Sa = vg, Kg = [...Cg, ...Ig], Xr = En.FontAwesomeConfig || {};
function Yg(e) {
  var t = Ve.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Xg(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
Ve && typeof Ve.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const i = Xg(Yg(n));
  i != null && (Xr[r] = i);
});
const km = {
  styleDefault: "solid",
  familyDefault: dt,
  cssPrefix: gm,
  replacementClass: vm,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
Xr.familyPrefix && (Xr.cssPrefix = Xr.familyPrefix);
const vr = N(N({}, km), Xr);
vr.autoReplaceSvg || (vr.observeMutations = !1);
const ne = {};
Object.keys(km).forEach((e) => {
  Object.defineProperty(ne, e, {
    enumerable: !0,
    set: function(t) {
      vr[e] = t, Zr.forEach((n) => n(ne));
    },
    get: function() {
      return vr[e];
    }
  });
});
Object.defineProperty(ne, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    vr.cssPrefix = e, Zr.forEach((t) => t(ne));
  },
  get: function() {
    return vr.cssPrefix;
  }
});
En.FontAwesomeConfig = ne;
const Zr = [];
function Zg(e) {
  return Zr.push(e), () => {
    Zr.splice(Zr.indexOf(e), 1);
  };
}
const cn = us, qt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Jg(e) {
  if (!e || !dn)
    return;
  const t = Ve.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = Ve.head.childNodes;
  let r = null;
  for (let i = n.length - 1; i > -1; i--) {
    const o = n[i], a = (o.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(a) > -1 && (r = o);
  }
  return Ve.head.insertBefore(t, r), e;
}
const Qg = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function fi() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += Qg[Math.random() * 62 | 0];
  return t;
}
function Er(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function cl(e) {
  return e.classList ? Er(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function _m(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ev(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(_m(e[n]), '" '), "").trim();
}
function Qo(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function fl(e) {
  return e.size !== qt.size || e.x !== qt.x || e.y !== qt.y || e.rotate !== qt.rotate || e.flipX || e.flipY;
}
function tv(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const i = {
    transform: "translate(".concat(n / 2, " 256)")
  }, o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), a = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(o, " ").concat(a, " ").concat(s)
  }, d = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: i,
    inner: l,
    path: d
  };
}
function nv(e) {
  let {
    transform: t,
    width: n = us,
    height: r = us,
    startCentered: i = !1
  } = e, o = "";
  return i && fm ? o += "translate(".concat(t.x / cn - n / 2, "em, ").concat(t.y / cn - r / 2, "em) ") : i ? o += "translate(calc(-50% + ".concat(t.x / cn, "em), calc(-50% + ").concat(t.y / cn, "em)) ") : o += "translate(".concat(t.x / cn, "em, ").concat(t.y / cn, "em) "), o += "scale(".concat(t.size / cn * (t.flipX ? -1 : 1), ", ").concat(t.size / cn * (t.flipY ? -1 : 1), ") "), o += "rotate(".concat(t.rotate, "deg) "), o;
}
var rv = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;
function Sm() {
  const e = gm, t = vm, n = ne.cssPrefix, r = ne.replacementClass;
  let i = rv;
  if (n !== e || r !== t) {
    const o = new RegExp("\\.".concat(e, "\\-"), "g"), a = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    i = i.replace(o, ".".concat(n, "-")).replace(a, "--".concat(n, "-")).replace(s, ".".concat(r));
  }
  return i;
}
let Jd = !1;
function Ea() {
  ne.autoAddCss && !Jd && (Jg(Sm()), Jd = !0);
}
var iv = {
  mixout() {
    return {
      dom: {
        css: Sm,
        insertCss: Ea
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Ea();
      },
      beforeI2svg() {
        Ea();
      }
    };
  }
};
const on = En || {};
on[rn] || (on[rn] = {});
on[rn].styles || (on[rn].styles = {});
on[rn].hooks || (on[rn].hooks = {});
on[rn].shims || (on[rn].shims = []);
var Wt = on[rn];
const Em = [], Cm = function() {
  Ve.removeEventListener("DOMContentLoaded", Cm), vo = 1, Em.map((e) => e());
};
let vo = !1;
dn && (vo = (Ve.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Ve.readyState), vo || Ve.addEventListener("DOMContentLoaded", Cm));
function ov(e) {
  dn && (vo ? setTimeout(e, 0) : Em.push(e));
}
function ki(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? _m(e) : "<".concat(t, " ").concat(ev(n), ">").concat(r.map(ki).join(""), "</").concat(t, ">");
}
function Qd(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var Ca = function(t, n, r, i) {
  var o = Object.keys(t), a = o.length, s = n, l, d, u;
  for (r === void 0 ? (l = 1, u = t[o[0]]) : (l = 0, u = r); l < a; l++)
    d = o[l], u = s(u, t[d], d, t);
  return u;
};
function av(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      const o = e.charCodeAt(n++);
      (o & 64512) == 56320 ? t.push(((i & 1023) << 10) + (o & 1023) + 65536) : (t.push(i), n--);
    } else
      t.push(i);
  }
  return t;
}
function hs(e) {
  const t = av(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function sv(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), i;
  return r >= 55296 && r <= 56319 && n > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
function eu(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function bs(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, i = eu(t);
  typeof Wt.hooks.addPack == "function" && !r ? Wt.hooks.addPack(e, eu(t)) : Wt.styles[e] = N(N({}, Wt.styles[e] || {}), i), e === "fas" && bs("fa", t);
}
const {
  styles: mi,
  shims: lv
} = Wt, Tm = Object.keys(ul), dv = Tm.reduce((e, t) => (e[t] = Object.keys(ul[t]), e), {});
let ml = null, Om = {}, Am = {}, Dm = {}, Pm = {}, Mm = {};
function uv(e) {
  return ~Kg.indexOf(e);
}
function cv(e, t) {
  const n = t.split("-"), r = n[0], i = n.slice(1).join("-");
  return r === e && i !== "" && !uv(i) ? i : null;
}
const $m = () => {
  const e = (r) => Ca(mi, (i, o, a) => (i[a] = Ca(o, r, {}), i), {});
  Om = e((r, i, o) => (i[3] && (r[i[3]] = o), i[2] && i[2].filter((s) => typeof s == "number").forEach((s) => {
    r[s.toString(16)] = o;
  }), r)), Am = e((r, i, o) => (r[o] = o, i[2] && i[2].filter((s) => typeof s == "string").forEach((s) => {
    r[s] = o;
  }), r)), Mm = e((r, i, o) => {
    const a = i[2];
    return r[o] = o, a.forEach((s) => {
      r[s] = o;
    }), r;
  });
  const t = "far" in mi || ne.autoFetchSvg, n = Ca(lv, (r, i) => {
    const o = i[0];
    let a = i[1];
    const s = i[2];
    return a === "far" && !t && (a = "fas"), typeof o == "string" && (r.names[o] = {
      prefix: a,
      iconName: s
    }), typeof o == "number" && (r.unicodes[o.toString(16)] = {
      prefix: a,
      iconName: s
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  Dm = n.names, Pm = n.unicodes, ml = ea(ne.styleDefault, {
    family: ne.familyDefault
  });
};
Zg((e) => {
  ml = ea(e.styleDefault, {
    family: ne.familyDefault
  });
});
$m();
function pl(e, t) {
  return (Om[e] || {})[t];
}
function fv(e, t) {
  return (Am[e] || {})[t];
}
function jn(e, t) {
  return (Mm[e] || {})[t];
}
function Lm(e) {
  return Dm[e] || {
    prefix: null,
    iconName: null
  };
}
function mv(e) {
  const t = Pm[e], n = pl("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Cn() {
  return ml;
}
const Fm = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function pv(e) {
  let t = dt;
  const n = Tm.reduce((r, i) => (r[i] = "".concat(ne.cssPrefix, "-").concat(i), r), {});
  return hm.forEach((r) => {
    (e.includes(n[r]) || e.some((i) => dv[r].includes(i))) && (t = r);
  }), t;
}
function ea(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = dt
  } = t, r = Bg[n][e];
  if (n === Jo && !e)
    return "fad";
  const i = Zd[n][e] || Zd[n][r], o = e in Wt.styles ? e : null;
  return i || o || null;
}
function hv(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const i = cv(ne.cssPrefix, r);
    i ? n = i : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function tu(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function ta(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const i = ds.concat(Pg), o = tu(e.filter((c) => i.includes(c))), a = tu(e.filter((c) => !ds.includes(c))), s = o.filter((c) => (r = c, !pm.includes(c))), [l = null] = s, d = pv(o), u = N(N({}, hv(a)), {}, {
    prefix: ea(l, {
      family: d
    })
  });
  return N(N(N({}, u), yv({
    values: e,
    family: d,
    styles: mi,
    config: ne,
    canonical: u,
    givenPrefix: r
  })), bv(n, r, u));
}
function bv(e, t, n) {
  let {
    prefix: r,
    iconName: i
  } = n;
  if (e || !r || !i)
    return {
      prefix: r,
      iconName: i
    };
  const o = t === "fa" ? Lm(i) : {}, a = jn(r, i);
  return i = o.iconName || a || i, r = o.prefix || r, r === "far" && !mi.far && mi.fas && !ne.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: i
  };
}
const gv = hm.filter((e) => e !== dt || e !== Jo), vv = Object.keys(ls).filter((e) => e !== dt).map((e) => Object.keys(ls[e])).flat();
function yv(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: i = "",
    styles: o = {},
    config: a = {}
  } = e, s = n === Jo, l = t.includes("fa-duotone") || t.includes("fad"), d = a.familyDefault === "duotone", u = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!s && (l || d || u) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && gv.includes(n) && (Object.keys(o).find((f) => vv.includes(f)) || a.autoFetchSvg)) {
    const f = _g.get(n).defaultShortPrefixId;
    r.prefix = f, r.iconName = jn(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || i === "fa") && (r.prefix = Cn() || "fas"), r;
}
class wv {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const i = n.reduce(this._pullDefinitions, {});
    Object.keys(i).forEach((o) => {
      this.definitions[o] = N(N({}, this.definitions[o] || {}), i[o]), bs(o, i[o]);
      const a = ul[dt][o];
      a && bs(a, i[o]), $m();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const r = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(r).map((i) => {
      const {
        prefix: o,
        iconName: a,
        icon: s
      } = r[i], l = s[2];
      t[o] || (t[o] = {}), l.length > 0 && l.forEach((d) => {
        typeof d == "string" && (t[o][d] = s);
      }), t[o][a] = s;
    }), t;
  }
}
let nu = [], nr = {};
const mr = {}, xv = Object.keys(mr);
function kv(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return nu = e, nr = {}, Object.keys(mr).forEach((r) => {
    xv.indexOf(r) === -1 && delete mr[r];
  }), nu.forEach((r) => {
    const i = r.mixout ? r.mixout() : {};
    if (Object.keys(i).forEach((o) => {
      typeof i[o] == "function" && (n[o] = i[o]), typeof i[o] == "object" && Object.keys(i[o]).forEach((a) => {
        n[o] || (n[o] = {}), n[o][a] = i[o][a];
      });
    }), r.hooks) {
      const o = r.hooks();
      Object.keys(o).forEach((a) => {
        nr[a] || (nr[a] = []), nr[a].push(o[a]);
      });
    }
    r.provides && r.provides(mr);
  }), n;
}
function gs(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    r[i - 2] = arguments[i];
  return (nr[e] || []).forEach((a) => {
    t = a.apply(null, [t, ...r]);
  }), t;
}
function Gn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (nr[e] || []).forEach((o) => {
    o.apply(null, n);
  });
}
function Tn() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return mr[e] ? mr[e].apply(null, t) : void 0;
}
function vs(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || Cn();
  if (t)
    return t = jn(n, t) || t, Qd(Nm.definitions, n, t) || Qd(Wt.styles, n, t);
}
const Nm = new wv(), _v = () => {
  ne.autoReplaceSvg = !1, ne.observeMutations = !1, Gn("noAuto");
}, Sv = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return dn ? (Gn("beforeI2svg", e), Tn("pseudoElements2svg", e), Tn("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    ne.autoReplaceSvg === !1 && (ne.autoReplaceSvg = !0), ne.observeMutations = !0, ov(() => {
      Cv({
        autoReplaceSvgRoot: t
      }), Gn("watch", e);
    });
  }
}, Ev = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: jn(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = ea(e[0]);
      return {
        prefix: n,
        iconName: jn(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(ne.cssPrefix, "-")) > -1 || e.match(Hg))) {
      const t = ta(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || Cn(),
        iconName: jn(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = Cn();
      return {
        prefix: t,
        iconName: jn(t, e) || e
      };
    }
  }
}, Et = {
  noAuto: _v,
  config: ne,
  dom: Sv,
  parse: Ev,
  library: Nm,
  findIconDefinition: vs,
  toHtml: ki
}, Cv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = Ve
  } = e;
  (Object.keys(Wt.styles).length > 0 || ne.autoFetchSvg) && dn && ne.autoReplaceSvg && Et.dom.i2svg({
    node: t
  });
};
function na(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => ki(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!dn) return;
      const n = Ve.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function Tv(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: i,
    styles: o,
    transform: a
  } = e;
  if (fl(a) && n.found && !r.found) {
    const {
      width: s,
      height: l
    } = n, d = {
      x: s / l / 2,
      y: 0.5
    };
    i.style = Qo(N(N({}, o), {}, {
      "transform-origin": "".concat(d.x + a.x / 16, "em ").concat(d.y + a.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: t
  }];
}
function Ov(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: i,
    symbol: o
  } = e;
  const a = o === !0 ? "".concat(t, "-").concat(ne.cssPrefix, "-").concat(n) : o;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: N(N({}, i), {}, {
        id: a
      }),
      children: r
    }]
  }];
}
function hl(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: r,
    iconName: i,
    transform: o,
    symbol: a,
    title: s,
    maskId: l,
    titleId: d,
    extra: u,
    watchable: c = !1
  } = e, {
    width: f,
    height: m
  } = n.found ? n : t, b = Og.includes(r), p = [ne.replacementClass, i ? "".concat(ne.cssPrefix, "-").concat(i) : ""].filter((O) => u.classes.indexOf(O) === -1).filter((O) => O !== "" || !!O).concat(u.classes).join(" ");
  let v = {
    children: [],
    attributes: N(N({}, u.attributes), {}, {
      "data-prefix": r,
      "data-icon": i,
      class: p,
      role: u.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(f, " ").concat(m)
    })
  };
  const g = b && !~u.classes.indexOf("fa-fw") ? {
    width: "".concat(f / m * 16 * 0.0625, "em")
  } : {};
  c && (v.attributes[Wn] = ""), s && (v.children.push({
    tag: "title",
    attributes: {
      id: v.attributes["aria-labelledby"] || "title-".concat(d || fi())
    },
    children: [s]
  }), delete v.attributes.title);
  const w = N(N({}, v), {}, {
    prefix: r,
    iconName: i,
    main: t,
    mask: n,
    maskId: l,
    transform: o,
    symbol: a,
    styles: N(N({}, g), u.styles)
  }), {
    children: y,
    attributes: k
  } = n.found && t.found ? Tn("generateAbstractMask", w) || {
    children: [],
    attributes: {}
  } : Tn("generateAbstractIcon", w) || {
    children: [],
    attributes: {}
  };
  return w.children = y, w.attributes = k, a ? Ov(w) : Tv(w);
}
function ru(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: i,
    title: o,
    extra: a,
    watchable: s = !1
  } = e, l = N(N(N({}, a.attributes), o ? {
    title: o
  } : {}), {}, {
    class: a.classes.join(" ")
  });
  s && (l[Wn] = "");
  const d = N({}, a.styles);
  fl(i) && (d.transform = nv({
    transform: i,
    startCentered: !0,
    width: n,
    height: r
  }), d["-webkit-transform"] = d.transform);
  const u = Qo(d);
  u.length > 0 && (l.style = u);
  const c = [];
  return c.push({
    tag: "span",
    attributes: l,
    children: [t]
  }), o && c.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [o]
  }), c;
}
function Av(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, i = N(N(N({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), o = Qo(r.styles);
  o.length > 0 && (i.style = o);
  const a = [];
  return a.push({
    tag: "span",
    attributes: i,
    children: [t]
  }), n && a.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), a;
}
const {
  styles: Ta
} = Wt;
function ys(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let i = null;
  return Array.isArray(r) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(ne.cssPrefix, "-").concat(Sa.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(ne.cssPrefix, "-").concat(Sa.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(ne.cssPrefix, "-").concat(Sa.PRIMARY),
        fill: "currentColor",
        d: r[1]
      }
    }]
  } : i = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: r
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: i
  };
}
const Dv = {
  found: !1,
  width: 512,
  height: 512
};
function Pv(e, t) {
  !ym && !ne.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function ws(e, t) {
  let n = t;
  return t === "fa" && ne.styleDefault !== null && (t = Cn()), new Promise((r, i) => {
    if (n === "fa") {
      const o = Lm(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && Ta[t] && Ta[t][e]) {
      const o = Ta[t][e];
      return r(ys(o));
    }
    Pv(e, t), r(N(N({}, Dv), {}, {
      icon: ne.showMissingIcons && e ? Tn("missingIconAbstract") || {} : {}
    }));
  });
}
const iu = () => {
}, xs = ne.measurePerformance && Vi && Vi.mark && Vi.measure ? Vi : {
  mark: iu,
  measure: iu
}, jr = 'FA "6.7.2"', Mv = (e) => (xs.mark("".concat(jr, " ").concat(e, " begins")), () => zm(e)), zm = (e) => {
  xs.mark("".concat(jr, " ").concat(e, " ends")), xs.measure("".concat(jr, " ").concat(e), "".concat(jr, " ").concat(e, " begins"), "".concat(jr, " ").concat(e, " ends"));
};
var bl = {
  begin: Mv,
  end: zm
};
const Xi = () => {
};
function ou(e) {
  return typeof (e.getAttribute ? e.getAttribute(Wn) : null) == "string";
}
function $v(e) {
  const t = e.getAttribute ? e.getAttribute(ll) : null, n = e.getAttribute ? e.getAttribute(dl) : null;
  return t && n;
}
function Lv(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(ne.replacementClass);
}
function Fv() {
  return ne.autoReplaceSvg === !0 ? Zi.replace : Zi[ne.autoReplaceSvg] || Zi.replace;
}
function Nv(e) {
  return Ve.createElementNS("http://www.w3.org/2000/svg", e);
}
function zv(e) {
  return Ve.createElement(e);
}
function Im(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? Nv : zv
  } = t;
  if (typeof e == "string")
    return Ve.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(o) {
    r.setAttribute(o, e.attributes[o]);
  }), (e.children || []).forEach(function(o) {
    r.appendChild(Im(o, {
      ceFn: n
    }));
  }), r;
}
function Iv(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Zi = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(Im(n), t);
      }), t.getAttribute(Wn) === null && ne.keepOriginalSource) {
        let n = Ve.createComment(Iv(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~cl(t).indexOf(ne.replacementClass))
      return Zi.replace(e);
    const r = new RegExp("".concat(ne.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const o = n[0].attributes.class.split(" ").reduce((a, s) => (s === ne.replacementClass || s.match(r) ? a.toSvg.push(s) : a.toNode.push(s), a), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", o.toNode.join(" "));
    }
    const i = n.map((o) => ki(o)).join(`
`);
    t.setAttribute(Wn, ""), t.innerHTML = i;
  }
};
function au(e) {
  e();
}
function Rm(e, t) {
  const n = typeof t == "function" ? t : Xi;
  if (e.length === 0)
    n();
  else {
    let r = au;
    ne.mutateApproach === Vg && (r = En.requestAnimationFrame || au), r(() => {
      const i = Fv(), o = bl.begin("mutate");
      e.map(i), o(), n();
    });
  }
}
let gl = !1;
function jm() {
  gl = !0;
}
function ks() {
  gl = !1;
}
let yo = null;
function su(e) {
  if (!Gd || !ne.observeMutations)
    return;
  const {
    treeCallback: t = Xi,
    nodeCallback: n = Xi,
    pseudoElementsCallback: r = Xi,
    observeMutationsRoot: i = Ve
  } = e;
  yo = new Gd((o) => {
    if (gl) return;
    const a = Cn();
    Er(o).forEach((s) => {
      if (s.type === "childList" && s.addedNodes.length > 0 && !ou(s.addedNodes[0]) && (ne.searchPseudoElements && r(s.target), t(s.target)), s.type === "attributes" && s.target.parentNode && ne.searchPseudoElements && r(s.target.parentNode), s.type === "attributes" && ou(s.target) && ~Gg.indexOf(s.attributeName))
        if (s.attributeName === "class" && $v(s.target)) {
          const {
            prefix: l,
            iconName: d
          } = ta(cl(s.target));
          s.target.setAttribute(ll, l || a), d && s.target.setAttribute(dl, d);
        } else Lv(s.target) && n(s.target);
    });
  }), dn && yo.observe(i, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function Rv() {
  yo && yo.disconnect();
}
function jv(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, i) => {
    const o = i.split(":"), a = o[0], s = o.slice(1);
    return a && s.length > 0 && (r[a] = s.join(":").trim()), r;
  }, {})), n;
}
function Vv(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let i = ta(cl(e));
  return i.prefix || (i.prefix = Cn()), t && n && (i.prefix = t, i.iconName = n), i.iconName && i.prefix || (i.prefix && r.length > 0 && (i.iconName = fv(i.prefix, e.innerText) || pl(i.prefix, hs(e.innerText))), !i.iconName && ne.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function Uv(e) {
  const t = Er(e.attributes).reduce((i, o) => (i.name !== "class" && i.name !== "style" && (i[o.name] = o.value), i), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return ne.autoA11y && (n ? t["aria-labelledby"] = "".concat(ne.replacementClass, "-title-").concat(r || fi()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function Bv() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: qt,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function lu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: i
  } = Vv(e), o = Uv(e), a = gs("parseNodeAttributes", {}, e);
  let s = t.styleParser ? jv(e) : [];
  return N({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: qt,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: s,
      attributes: o
    }
  }, a);
}
const {
  styles: Hv
} = Wt;
function Vm(e) {
  const t = ne.autoReplaceSvg === "nest" ? lu(e, {
    styleParser: !1
  }) : lu(e);
  return ~t.extra.classes.indexOf(xm) ? Tn("generateLayersText", e, t) : Tn("generateSvgReplacementMutation", e, t);
}
function qv() {
  return [...Eg, ...ds];
}
function du(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!dn) return Promise.resolve();
  const n = Ve.documentElement.classList, r = (u) => n.add("".concat(Xd, "-").concat(u)), i = (u) => n.remove("".concat(Xd, "-").concat(u)), o = ne.autoFetchSvg ? qv() : pm.concat(Object.keys(Hv));
  o.includes("fa") || o.push("fa");
  const a = [".".concat(xm, ":not([").concat(Wn, "])")].concat(o.map((u) => ".".concat(u, ":not([").concat(Wn, "])"))).join(", ");
  if (a.length === 0)
    return Promise.resolve();
  let s = [];
  try {
    s = Er(e.querySelectorAll(a));
  } catch {
  }
  if (s.length > 0)
    r("pending"), i("complete");
  else
    return Promise.resolve();
  const l = bl.begin("onTree"), d = s.reduce((u, c) => {
    try {
      const f = Vm(c);
      f && u.push(f);
    } catch (f) {
      ym || f.name === "MissingIcon" && console.error(f);
    }
    return u;
  }, []);
  return new Promise((u, c) => {
    Promise.all(d).then((f) => {
      Rm(f, () => {
        r("active"), r("complete"), i("pending"), typeof t == "function" && t(), l(), u();
      });
    }).catch((f) => {
      l(), c(f);
    });
  });
}
function Wv(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Vm(e).then((n) => {
    n && Rm([n], t);
  });
}
function Gv(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : vs(t || {});
    let {
      mask: i
    } = n;
    return i && (i = (i || {}).icon ? i : vs(i || {})), e(r, N(N({}, n), {}, {
      mask: i
    }));
  };
}
const Kv = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = qt,
    symbol: r = !1,
    mask: i = null,
    maskId: o = null,
    title: a = null,
    titleId: s = null,
    classes: l = [],
    attributes: d = {},
    styles: u = {}
  } = t;
  if (!e) return;
  const {
    prefix: c,
    iconName: f,
    icon: m
  } = e;
  return na(N({
    type: "icon"
  }, e), () => (Gn("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), ne.autoA11y && (a ? d["aria-labelledby"] = "".concat(ne.replacementClass, "-title-").concat(s || fi()) : (d["aria-hidden"] = "true", d.focusable = "false")), hl({
    icons: {
      main: ys(m),
      mask: i ? ys(i.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: c,
    iconName: f,
    transform: N(N({}, qt), n),
    symbol: r,
    title: a,
    maskId: o,
    titleId: s,
    extra: {
      attributes: d,
      styles: u,
      classes: l
    }
  })));
};
var Yv = {
  mixout() {
    return {
      icon: Gv(Kv)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = du, e.nodeCallback = Wv, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = Ve,
        callback: r = () => {
        }
      } = t;
      return du(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: i,
        titleId: o,
        prefix: a,
        transform: s,
        symbol: l,
        mask: d,
        maskId: u,
        extra: c
      } = n;
      return new Promise((f, m) => {
        Promise.all([ws(r, a), d.iconName ? ws(d.iconName, d.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((b) => {
          let [p, v] = b;
          f([t, hl({
            icons: {
              main: p,
              mask: v
            },
            prefix: a,
            iconName: r,
            transform: s,
            symbol: l,
            maskId: u,
            title: i,
            titleId: o,
            extra: c,
            watchable: !0
          })]);
        }).catch(m);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: i,
        transform: o,
        styles: a
      } = t;
      const s = Qo(a);
      s.length > 0 && (r.style = s);
      let l;
      return fl(o) && (l = Tn("generateAbstractTransformGrouping", {
        main: i,
        transform: o,
        containerWidth: i.width,
        iconWidth: i.width
      })), n.push(l || i.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, Xv = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return na({
          type: "layer"
        }, () => {
          Gn("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let r = [];
          return e((i) => {
            Array.isArray(i) ? i.map((o) => {
              r = r.concat(o.abstract);
            }) : r = r.concat(i.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(ne.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, Zv = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: r = [],
          attributes: i = {},
          styles: o = {}
        } = t;
        return na({
          type: "counter",
          content: e
        }, () => (Gn("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Av({
          content: e.toString(),
          title: n,
          extra: {
            attributes: i,
            styles: o,
            classes: ["".concat(ne.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, Jv = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = qt,
          title: r = null,
          classes: i = [],
          attributes: o = {},
          styles: a = {}
        } = t;
        return na({
          type: "text",
          content: e
        }, () => (Gn("beforeDOMElementCreation", {
          content: e,
          params: t
        }), ru({
          content: e,
          transform: N(N({}, qt), n),
          title: r,
          extra: {
            attributes: o,
            styles: a,
            classes: ["".concat(ne.cssPrefix, "-layers-text"), ...i]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, n) {
      const {
        title: r,
        transform: i,
        extra: o
      } = n;
      let a = null, s = null;
      if (fm) {
        const l = parseInt(getComputedStyle(t).fontSize, 10), d = t.getBoundingClientRect();
        a = d.width / l, s = d.height / l;
      }
      return ne.autoA11y && !r && (o.attributes["aria-hidden"] = "true"), Promise.resolve([t, ru({
        content: t.innerHTML,
        width: a,
        height: s,
        transform: i,
        title: r,
        extra: o,
        watchable: !0
      })]);
    };
  }
};
const Qv = new RegExp('"', "ug"), uu = [1105920, 1112319], cu = N(N(N(N({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), kg), Rg), Mg), _s = Object.keys(cu).reduce((e, t) => (e[t.toLowerCase()] = cu[t], e), {}), ey = Object.keys(_s).reduce((e, t) => {
  const n = _s[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function ty(e) {
  const t = e.replace(Qv, ""), n = sv(t, 0), r = n >= uu[0] && n <= uu[1], i = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: hs(i ? t[0] : t),
    isSecondary: r || i
  };
}
function ny(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), i = isNaN(r) ? "normal" : r;
  return (_s[n] || {})[i] || ey[n];
}
function fu(e, t) {
  const n = "".concat(jg).concat(t.replace(":", "-"));
  return new Promise((r, i) => {
    if (e.getAttribute(n) !== null)
      return r();
    const a = Er(e.children).filter((f) => f.getAttribute(cs) === t)[0], s = En.getComputedStyle(e, t), l = s.getPropertyValue("font-family"), d = l.match(qg), u = s.getPropertyValue("font-weight"), c = s.getPropertyValue("content");
    if (a && !d)
      return e.removeChild(a), r();
    if (d && c !== "none" && c !== "") {
      const f = s.getPropertyValue("content");
      let m = ny(l, u);
      const {
        value: b,
        isSecondary: p
      } = ty(f), v = d[0].startsWith("FontAwesome");
      let g = pl(m, b), w = g;
      if (v) {
        const y = mv(b);
        y.iconName && y.prefix && (g = y.iconName, m = y.prefix);
      }
      if (g && !p && (!a || a.getAttribute(ll) !== m || a.getAttribute(dl) !== w)) {
        e.setAttribute(n, w), a && e.removeChild(a);
        const y = Bv(), {
          extra: k
        } = y;
        k.attributes[cs] = t, ws(g, m).then((O) => {
          const D = hl(N(N({}, y), {}, {
            icons: {
              main: O,
              mask: Fm()
            },
            prefix: m,
            iconName: w,
            extra: k,
            watchable: !0
          })), R = Ve.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(R, e.firstChild) : e.appendChild(R), R.outerHTML = D.map((W) => ki(W)).join(`
`), e.removeAttribute(n), r();
        }).catch(i);
      } else
        r();
    } else
      r();
  });
}
function ry(e) {
  return Promise.all([fu(e, "::before"), fu(e, "::after")]);
}
function iy(e) {
  return e.parentNode !== document.head && !~Ug.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(cs) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function mu(e) {
  if (dn)
    return new Promise((t, n) => {
      const r = Er(e.querySelectorAll("*")).filter(iy).map(ry), i = bl.begin("searchPseudoElements");
      jm(), Promise.all(r).then(() => {
        i(), ks(), t();
      }).catch(() => {
        i(), ks(), n();
      });
    });
}
var oy = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = mu, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = Ve
      } = t;
      ne.searchPseudoElements && mu(n);
    };
  }
};
let pu = !1;
var ay = {
  mixout() {
    return {
      dom: {
        unwatch() {
          jm(), pu = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        su(gs("mutationObserverCallbacks", {}));
      },
      noAuto() {
        Rv();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        pu ? ks() : su(gs("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const hu = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((n, r) => {
    const i = r.toLowerCase().split("-"), o = i[0];
    let a = i.slice(1).join("-");
    if (o && a === "h")
      return n.flipX = !0, n;
    if (o && a === "v")
      return n.flipY = !0, n;
    if (a = parseFloat(a), isNaN(a))
      return n;
    switch (o) {
      case "grow":
        n.size = n.size + a;
        break;
      case "shrink":
        n.size = n.size - a;
        break;
      case "left":
        n.x = n.x - a;
        break;
      case "right":
        n.x = n.x + a;
        break;
      case "up":
        n.y = n.y - a;
        break;
      case "down":
        n.y = n.y + a;
        break;
      case "rotate":
        n.rotate = n.rotate + a;
        break;
    }
    return n;
  }, t);
};
var sy = {
  mixout() {
    return {
      parse: {
        transform: (e) => hu(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = hu(n)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: n,
        transform: r,
        containerWidth: i,
        iconWidth: o
      } = t;
      const a = {
        transform: "translate(".concat(i / 2, " 256)")
      }, s = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), l = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), d = "rotate(".concat(r.rotate, " 0 0)"), u = {
        transform: "".concat(s, " ").concat(l, " ").concat(d)
      }, c = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, f = {
        outer: a,
        inner: u,
        path: c
      };
      return {
        tag: "g",
        attributes: N({}, f.outer),
        children: [{
          tag: "g",
          attributes: N({}, f.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: N(N({}, n.icon.attributes), f.path)
          }]
        }]
      };
    };
  }
};
const Oa = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function bu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function ly(e) {
  return e.tag === "g" ? e.children : [e];
}
var dy = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? ta(n.split(" ").map((i) => i.trim())) : Fm();
        return r.prefix || (r.prefix = Cn()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: r,
        main: i,
        mask: o,
        maskId: a,
        transform: s
      } = t;
      const {
        width: l,
        icon: d
      } = i, {
        width: u,
        icon: c
      } = o, f = tv({
        transform: s,
        containerWidth: u,
        iconWidth: l
      }), m = {
        tag: "rect",
        attributes: N(N({}, Oa), {}, {
          fill: "white"
        })
      }, b = d.children ? {
        children: d.children.map(bu)
      } : {}, p = {
        tag: "g",
        attributes: N({}, f.inner),
        children: [bu(N({
          tag: d.tag,
          attributes: N(N({}, d.attributes), f.path)
        }, b))]
      }, v = {
        tag: "g",
        attributes: N({}, f.outer),
        children: [p]
      }, g = "mask-".concat(a || fi()), w = "clip-".concat(a || fi()), y = {
        tag: "mask",
        attributes: N(N({}, Oa), {}, {
          id: g,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [m, v]
      }, k = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: w
          },
          children: ly(c)
        }, y]
      };
      return n.push(k, {
        tag: "rect",
        attributes: N({
          fill: "currentColor",
          "clip-path": "url(#".concat(w, ")"),
          mask: "url(#".concat(g, ")")
        }, Oa)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, uy = {
  provides(e) {
    let t = !1;
    En.matchMedia && (t = En.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: N(N({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const o = N(N({}, i), {}, {
        attributeName: "opacity"
      }), a = {
        tag: "circle",
        attributes: N(N({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || a.children.push({
        tag: "animate",
        attributes: N(N({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: N(N({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(a), n.push({
        tag: "path",
        attributes: N(N({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: N(N({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: N(N({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: N(N({}, o), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, cy = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, fy = [iv, Yv, Xv, Zv, Jv, oy, ay, sy, dy, uy, cy];
kv(fy, {
  mixoutsTo: Et
});
Et.noAuto;
Et.config;
const Um = Et.library;
Et.dom;
const Ss = Et.parse;
Et.findIconDefinition;
Et.toHtml;
const my = Et.icon;
Et.layer;
Et.text;
Et.counter;
var py = { NODE_ENV: "production" };
function gu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function en(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gu(Object(n), !0).forEach(function(r) {
      yt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gu(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function hy(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function by(e) {
  var t = hy(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function wo(e) {
  "@babel/helpers - typeof";
  return wo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wo(e);
}
function yt(e, t, n) {
  return t = by(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function gy(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function vy(e, t) {
  if (e == null) return {};
  var n = gy(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var yy = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Bm = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(g, w, y) {
      if (!d(w) || c(w) || f(w) || m(w) || l(w))
        return w;
      var k, O = 0, D = 0;
      if (u(w))
        for (k = [], D = w.length; O < D; O++)
          k.push(n(g, w[O], y));
      else {
        k = {};
        for (var R in w)
          Object.prototype.hasOwnProperty.call(w, R) && (k[g(R, y)] = n(g, w[R], y));
      }
      return k;
    }, r = function(g, w) {
      w = w || {};
      var y = w.separator || "_", k = w.split || /(?=[A-Z])/;
      return g.split(k).join(y);
    }, i = function(g) {
      return b(g) ? g : (g = g.replace(/[\-_\s]+(.)?/g, function(w, y) {
        return y ? y.toUpperCase() : "";
      }), g.substr(0, 1).toLowerCase() + g.substr(1));
    }, o = function(g) {
      var w = i(g);
      return w.substr(0, 1).toUpperCase() + w.substr(1);
    }, a = function(g, w) {
      return r(g, w).toLowerCase();
    }, s = Object.prototype.toString, l = function(g) {
      return typeof g == "function";
    }, d = function(g) {
      return g === Object(g);
    }, u = function(g) {
      return s.call(g) == "[object Array]";
    }, c = function(g) {
      return s.call(g) == "[object Date]";
    }, f = function(g) {
      return s.call(g) == "[object RegExp]";
    }, m = function(g) {
      return s.call(g) == "[object Boolean]";
    }, b = function(g) {
      return g = g - 0, g === g;
    }, p = function(g, w) {
      var y = w && "process" in w ? w.process : w;
      return typeof y != "function" ? g : function(k, O) {
        return y(k, g, O);
      };
    }, v = {
      camelize: i,
      decamelize: a,
      pascalize: o,
      depascalize: a,
      camelizeKeys: function(g, w) {
        return n(p(i, w), g);
      },
      decamelizeKeys: function(g, w) {
        return n(p(a, w), g, w);
      },
      pascalizeKeys: function(g, w) {
        return n(p(o, w), g);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = v : t.humps = v;
  })(yy);
})(Bm);
var wy = Bm.exports, xy = ["class", "style"];
function ky(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), i = wy.camelize(n.slice(0, r)), o = n.slice(r + 1).trim();
    return t[i] = o, t;
  }, {});
}
function _y(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function Hm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(l) {
    return Hm(l);
  }), i = Object.keys(e.attributes || {}).reduce(function(l, d) {
    var u = e.attributes[d];
    switch (d) {
      case "class":
        l.class = _y(u);
        break;
      case "style":
        l.style = ky(u);
        break;
      default:
        l.attrs[d] = u;
    }
    return l;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var o = n.style, a = o === void 0 ? {} : o, s = vy(n, xy);
  return je(e.tag, en(en(en({}, t), {}, {
    class: i.class,
    style: en(en({}, i.style), a)
  }, i.attrs), s), r);
}
var qm = !1;
try {
  qm = py.NODE_ENV === "production";
} catch {
}
function Sy() {
  if (!qm && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Aa(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? yt({}, e, t) : {};
}
function Ey(e) {
  var t, n = (t = {
    "fa-spin": e.spin,
    "fa-pulse": e.pulse,
    "fa-fw": e.fixedWidth,
    "fa-border": e.border,
    "fa-li": e.listItem,
    "fa-inverse": e.inverse,
    "fa-flip": e.flip === !0,
    "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
    "fa-flip-vertical": e.flip === "vertical" || e.flip === "both"
  }, yt(yt(yt(yt(yt(yt(yt(yt(yt(yt(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), "fa-flash", e.flash), yt(yt(t, "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse));
  return Object.keys(n).map(function(r) {
    return n[r] ? r : null;
  }).filter(function(r) {
    return r;
  });
}
function vu(e) {
  if (e && wo(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Ss.icon)
    return Ss.icon(e);
  if (e === null)
    return null;
  if (wo(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
var xo = /* @__PURE__ */ ve({
  name: "FontAwesomeIcon",
  props: {
    border: {
      type: Boolean,
      default: !1
    },
    fixedWidth: {
      type: Boolean,
      default: !1
    },
    flip: {
      type: [Boolean, String],
      default: !1,
      validator: function(t) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(t) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: !0
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    maskId: {
      type: String,
      default: null
    },
    listItem: {
      type: Boolean,
      default: !1
    },
    pull: {
      type: String,
      default: null,
      validator: function(t) {
        return ["right", "left"].indexOf(t) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(t) {
        return [90, 180, 270].indexOf(Number.parseInt(t, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator: function(t) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(t) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: !1
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: !1
    },
    title: {
      type: String,
      default: null
    },
    titleId: {
      type: String,
      default: null
    },
    inverse: {
      type: Boolean,
      default: !1
    },
    bounce: {
      type: Boolean,
      default: !1
    },
    shake: {
      type: Boolean,
      default: !1
    },
    beat: {
      type: Boolean,
      default: !1
    },
    fade: {
      type: Boolean,
      default: !1
    },
    beatFade: {
      type: Boolean,
      default: !1
    },
    flash: {
      type: Boolean,
      default: !1
    },
    spinPulse: {
      type: Boolean,
      default: !1
    },
    spinReverse: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var r = n.attrs, i = $(function() {
      return vu(t.icon);
    }), o = $(function() {
      return Aa("classes", Ey(t));
    }), a = $(function() {
      return Aa("transform", typeof t.transform == "string" ? Ss.transform(t.transform) : t.transform);
    }), s = $(function() {
      return Aa("mask", vu(t.mask));
    }), l = $(function() {
      return my(i.value, en(en(en(en({}, o.value), a.value), s.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    st(l, function(u) {
      if (!u)
        return Sy("Could not find one or more icon(s)", i.value, s.value);
    }, {
      immediate: !0
    });
    var d = $(function() {
      return l.value ? Hm(l.value.abstract[0], {}, r) : null;
    });
    return function() {
      return d.value;
    };
  }
});
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Cy = {
  prefix: "fab",
  iconName: "monero",
  icon: [496, 512, [], "f3d0", "M352 384h108.4C417 455.9 338.1 504 248 504S79 455.9 35.6 384H144V256.2L248 361l104-105v128zM88 336V128l159.4 159.4L408 128v208h74.8c8.5-25.1 13.2-52 13.2-80C496 119 385 8 248 8S0 119 0 256c0 28 4.6 54.9 13.2 80H88z"]
}, Ty = {
  prefix: "fab",
  iconName: "cc-stripe",
  icon: [576, 512, [], "f1f5", "M492.4 220.8c-8.9 0-18.7 6.7-18.7 22.7h36.7c0-16-9.3-22.7-18-22.7zM375 223.4c-8.2 0-13.3 2.9-17 7l.2 52.8c3.5 3.7 8.5 6.7 16.8 6.7 13.1 0 21.9-14.3 21.9-33.4 0-18.6-9-33.2-21.9-33.1zM528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM122.2 281.1c0 25.6-20.3 40.1-49.9 40.3-12.2 0-25.6-2.4-38.8-8.1v-33.9c12 6.4 27.1 11.3 38.9 11.3 7.9 0 13.6-2.1 13.6-8.7 0-17-54-10.6-54-49.9 0-25.2 19.2-40.2 48-40.2 11.8 0 23.5 1.8 35.3 6.5v33.4c-10.8-5.8-24.5-9.1-35.3-9.1-7.5 0-12.1 2.2-12.1 7.7 0 16 54.3 8.4 54.3 50.7zm68.8-56.6h-27V275c0 20.9 22.5 14.4 27 12.6v28.9c-4.7 2.6-13.3 4.7-24.9 4.7-21.1 0-36.9-15.5-36.9-36.5l.2-113.9 34.7-7.4v30.8H191zm74 2.4c-4.5-1.5-18.7-3.6-27.1 7.4v84.4h-35.5V194.2h30.7l2.2 10.5c8.3-15.3 24.9-12.2 29.6-10.5h.1zm44.1 91.8h-35.7V194.2h35.7zm0-142.9l-35.7 7.6v-28.9l35.7-7.6zm74.1 145.5c-12.4 0-20-5.3-25.1-9l-.1 40.2-35.5 7.5V194.2h31.3l1.8 8.8c4.9-4.5 13.9-11.1 27.8-11.1 24.9 0 48.4 22.5 48.4 63.8 0 45.1-23.2 65.5-48.6 65.6zm160.4-51.5h-69.5c1.6 16.6 13.8 21.5 27.6 21.5 14.1 0 25.2-3 34.9-7.9V312c-9.7 5.3-22.4 9.2-39.4 9.2-34.6 0-58.8-21.7-58.8-64.5 0-36.2 20.5-64.9 54.3-64.9 33.7 0 51.3 28.7 51.3 65.1 0 3.5-.3 10.9-.4 12.9z"]
}, Oy = {
  prefix: "fab",
  iconName: "bitcoin",
  icon: [512, 512, [], "f379", "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"]
}, Ay = {
  prefix: "fab",
  iconName: "paypal",
  icon: [384, 512, [], "f1ed", "M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"]
}, Dy = {
  prefix: "fab",
  iconName: "ethereum",
  icon: [320, 512, [], "f42e", "M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"]
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Py = {
  prefix: "fas",
  iconName: "v",
  icon: [384, 512, [118], "56", "M19.7 34.5c16.3-6.8 35 .9 41.8 17.2L192 364.8 322.5 51.7c6.8-16.3 25.5-24 41.8-17.2s24 25.5 17.2 41.8l-160 384c-5 11.9-16.6 19.7-29.5 19.7s-24.6-7.8-29.5-19.7L2.5 76.3c-6.8-16.3 .9-35 17.2-41.8z"]
}, My = {
  prefix: "fas",
  iconName: "money-bill-wave",
  icon: [576, 512, [], "f53a", "M0 112.5L0 422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4l0-309.9c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM288 352c-44.2 0-80-43-80-96s35.8-96 80-96s80 43 80 96s-35.8 96-80 96zM64 352c35.3 0 64 28.7 64 64l-64 0 0-64zm64-208c0 35.3-28.7 64-64 64l0-64 64 0zM512 304l0 64-64 0c0-35.3 28.7-64 64-64zM448 96l64 0 0 64c-35.3 0-64-28.7-64-64z"]
}, $y = {
  prefix: "fas",
  iconName: "bitcoin-sign",
  icon: [320, 512, [], "e0b4", "M48 32C48 14.3 62.3 0 80 0s32 14.3 32 32l0 32 32 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32c0 1.5-.1 3.1-.3 4.5C254.1 82.2 288 125.1 288 176c0 24.2-7.7 46.6-20.7 64.9c31.7 19.8 52.7 55 52.7 95.1c0 61.9-50.1 112-112 112l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-32 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-6.3 0C18.7 448 0 429.3 0 406.3L0 288l0-22.3L0 224 0 101.6C0 80.8 16.8 64 37.6 64L48 64l0-32zM64 224l112 0c26.5 0 48-21.5 48-48s-21.5-48-48-48L64 128l0 96zm112 64L64 288l0 96 144 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-32 0z"]
}, Ly = {
  prefix: "fas",
  iconName: "wallet",
  icon: [512, 512, [], "f555", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, Fy = {
  prefix: "fas",
  iconName: "litecoin-sign",
  icon: [384, 512, [], "e1d3", "M128 64c0-17.7-14.3-32-32-32S64 46.3 64 64l0 149.6L23.2 225.2c-17 4.9-26.8 22.6-22 39.6s22.6 26.8 39.6 22L64 280.1 64 448c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-224 0 0-154.1 136.8-39.1c17-4.9 26.8-22.6 22-39.6s-22.6-26.8-39.6-22L128 195.3 128 64z"]
}, Ny = {
  prefix: "fas",
  iconName: "coins",
  icon: [512, 512, [], "f51e", "M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2c0 0 0 0 0 0s0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4l0 3.4 0 5.7 0 26.3zm32 0l0-32 0-25.9c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 44.2-86 80-192 80S0 476.2 0 432l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"]
}, zy = {
  prefix: "fas",
  iconName: "credit-card",
  icon: [576, 512, [128179, 62083, "credit-card-alt"], "f09d", "M64 32C28.7 32 0 60.7 0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32zM576 224L0 224 0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192zM112 352l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"]
}, Wm = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, Iy = {
  prefix: "fas",
  iconName: "dollar-sign",
  icon: [320, 512, [128178, 61781, "dollar", "usd"], "24", "M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z"]
}, Ry = {
  name: "Cryptoicon",
  props: {
    symbol: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: null
    },
    size: {
      type: [String, Number],
      default: "24"
    },
    generic: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      lookupSymbol: /* @__PURE__ */ new Map([["BCHSV", "BSV"], ["BCHABC", "BAB"]])
    };
  },
  computed: {
    lSymbol() {
      return this.symbol && this.symbol.toLowerCase();
    },
    uSymbol() {
      return this.symbol && this.symbol.toUpperCase();
    },
    icon() {
      const e = this.lookupSymbol.has(this.uSymbol) ? this.lookupSymbol.get(this.uSymbol) : this.symbol;
      let t = this.$options.lib.find((n) => n.symbol === e.toLowerCase());
      if (t)
        return this.color ? t.plainIcon(this.color) : t.colorIcon();
      if (this.generic) {
        let n = this.$options.lib.find((r) => r.symbol == "generic");
        if (n)
          return this.color ? n.plainIcon(this.color) : n.colorIcon();
      } else {
        console.error(`Symbol of the icon is not correct: ${this.symbol}`);
        return;
      }
    }
  },
  lib: [],
  add(e) {
    Array.isArray(e) ? this.lib = e : this.lib.push(e);
  }
}, jy = ["width", "height", "innerHTML"];
function Vy(e, t, n, r, i, o) {
  return S(), T("svg", {
    width: n.size,
    height: n.size,
    class: ye(`cryptoicon--${n.symbol}`),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    onClick: t[0] || (t[0] = (a) => e.$emit("click")),
    innerHTML: o.icon
  }, null, 10, jy);
}
const vl = /* @__PURE__ */ gt(Ry, [["render", Vy]]), Uy = {
  symbol: "bnb",
  color: "#000",
  colorIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><circle cx="16" cy="16" r="16" fill="#F3BA2F"/><path fill="#FFF" d="M12.116 14.404L16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26-2.26L10.52 16l-2.26 2.26L6 16zm6.116 1.596L16 21.48l3.886-3.886 2.26 2.259L16 26l-6.144-6.144-.003-.003 2.263-2.257zM21.48 16l2.26-2.26L26 16l-2.26 2.26L21.48 16zm-3.188-.002h.002V16L16 18.294l-2.291-2.29-.004-.004.004-.003.401-.402.195-.195L16 13.706l2.293 2.293z"/></g>';
  },
  plainIcon: (e) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${e || (void 0).color}" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-3.884-17.596L16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26 2.26L10.52 16l-2.26-2.26L6 16zm6.116 1.596l-2.263 2.257.003.003L16 26l6.146-6.146v-.001l-2.26-2.26L16 21.48l-3.884-3.884zM21.48 16l2.26 2.26L26 16l-2.26-2.26L21.48 16zm-3.188-.002h.001L16 13.706 14.305 15.4l-.195.195-.401.402-.004.003.004.003 2.29 2.291 2.294-2.293.001-.001-.002-.001z"/>`
}, By = {
  symbol: "btc",
  color: "#000",
  colorIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#F7931A"/><path fill="#FFF" fill-rule="nonzero" d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"/></g>';
  },
  plainIcon: (e) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${e || (void 0).color}" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.189-17.98c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"/>`
}, Hy = {
  symbol: "dai",
  color: "#000",
  colorIcon() {
    return '<g fill="none" fill-rule="evenodd"><circle fill="#F4B731" fill-rule="nonzero" cx="16" cy="16" r="16"/><path d="M9.277 8h6.552c3.985 0 7.006 2.116 8.13 5.194H26v1.861h-1.611c.031.294.047.594.047.898v.046c0 .342-.02.68-.06 1.01H26v1.86h-2.08C22.767 21.905 19.77 24 15.83 24H9.277v-5.131H7v-1.86h2.277v-1.954H7v-1.86h2.277V8zm1.831 10.869v3.462h4.72c2.914 0 5.078-1.387 6.085-3.462H11.108zm11.366-1.86H11.108v-1.954h11.37c.041.307.063.622.063.944v.045c0 .329-.023.65-.067.964zM15.83 9.665c2.926 0 5.097 1.424 6.098 3.528h-10.82V9.666h4.72z" fill="#FFF"/></g>';
  },
  plainIcon: (e) => `<path fill-rule="evenodd" fill="${e || (void 0).color}" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-.171 8H9.277v5.194H7v1.861h2.277v1.953H7v1.86h2.277V24h6.552c3.94 0 6.938-2.095 8.091-5.131H26v-1.86h-1.624c.04-.33.06-.668.06-1.01v-.046c0-.304-.016-.604-.047-.898H26v-1.86h-2.041C22.835 10.114 19.814 8 15.829 8zm6.084 10.869c-1.007 2.075-3.171 3.462-6.084 3.462h-4.72v-3.462zm.564-3.814c.042.307.064.622.064.944v.045c0 .329-.023.65-.067.964H11.108v-1.953h11.37zM15.83 9.666c2.926 0 5.097 1.424 6.098 3.528h-10.82V9.666h4.72z"/>`
}, qy = {
  symbol: "eth",
  color: "#000",
  colorIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#627EEA"/><g fill="#FFF" fill-rule="nonzero"><path fill-opacity=".602" d="M16.498 4v8.87l7.497 3.35z"/><path d="M16.498 4L9 16.22l7.498-3.35z"/><path fill-opacity=".602" d="M16.498 21.968v6.027L24 17.616z"/><path d="M16.498 27.995v-6.028L9 17.616z"/><path fill-opacity=".2" d="M16.498 20.573l7.497-4.353-7.497-3.348z"/><path fill-opacity=".602" d="M9 16.22l7.498 4.353v-7.701z"/></g></g>';
  },
  plainIcon: (e) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill-rule="evenodd"><path fill-rule="evenodd" fill="${e || (void 0).color}" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.994-15.781L16.498 4 9 16.22l7.498 4.353 7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378L24 17.616z"/><g fill-rule="nonzero"><path fill-opacity=".298" d="M16.498 4v8.87l7.497 3.35zm0 17.968v6.027L24 17.616z"/><path fill-opacity=".801" d="M16.498 20.573l7.497-4.353-7.497-3.348z"/><path fill-opacity=".298" d="M9 16.22l7.498 4.353v-7.701z"/></g></g>`
}, Wy = {
  symbol: "ltc",
  color: "#000",
  colorIcon() {
    return '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#BFBBBB"/><path fill="#FFF" d="M10.427 19.214L9 19.768l.688-2.759 1.444-.58L13.213 8h5.129l-1.519 6.196 1.41-.571-.68 2.75-1.427.571-.848 3.483H23L22.127 24H9.252z"/></g>';
  },
  plainIcon: (e) => `<path fill-rule="evenodd" fill="${e || (void 0).color}" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.573-12.786L9.252 24h12.875L23 20.429h-7.722l.848-3.483 1.427-.571.68-2.75-1.41.571L18.342 8h-5.129l-2.081 8.429-1.444.58L9 19.768l1.427-.554z"/>`
}, Gy = {
  symbol: "matic",
  color: "#000",
  colorIcon() {
    return '<g fill="none"><circle fill="#6F41D8" cx="16" cy="16" r="16"/><path d="M21.092 12.693c-.369-.215-.848-.215-1.254 0l-2.879 1.654-1.955 1.078-2.879 1.653c-.369.216-.848.216-1.254 0l-2.288-1.294c-.369-.215-.627-.61-.627-1.042V12.19c0-.431.221-.826.627-1.042l2.25-1.258c.37-.216.85-.216 1.256 0l2.25 1.258c.37.216.628.611.628 1.042v1.654l1.955-1.115v-1.653a1.16 1.16 0 00-.627-1.042l-4.17-2.372c-.369-.216-.848-.216-1.254 0l-4.244 2.372A1.16 1.16 0 006 11.076v4.78c0 .432.221.827.627 1.043l4.244 2.372c.369.215.849.215 1.254 0l2.879-1.618 1.955-1.114 2.879-1.617c.369-.216.848-.216 1.254 0l2.251 1.258c.37.215.627.61.627 1.042v2.552c0 .431-.22.826-.627 1.042l-2.25 1.294c-.37.216-.85.216-1.255 0l-2.251-1.258c-.37-.216-.628-.611-.628-1.042v-1.654l-1.955 1.115v1.653c0 .431.221.827.627 1.042l4.244 2.372c.369.216.848.216 1.254 0l4.244-2.372c.369-.215.627-.61.627-1.042v-4.78a1.16 1.16 0 00-.627-1.042l-4.28-2.409z" fill="#FFF"/></g>';
  },
  plainIcon: (e) => `<path fill-rule="evenodd" fill="${e || (void 0).color}" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-5.13 7.662l-4.243 2.372A1.16 1.16 0 006 11.076v4.78c0 .432.221.827.627 1.043l4.244 2.372c.369.215.849.215 1.254 0l2.879-1.618 1.955-1.114 2.879-1.617c.369-.216.848-.216 1.254 0l2.251 1.258c.37.215.627.61.627 1.042v2.552c0 .431-.22.826-.627 1.042l-2.25 1.294c-.37.216-.85.216-1.255 0l-2.251-1.258c-.37-.216-.628-.611-.628-1.042v-1.654l-1.955 1.115v1.653c0 .431.221.827.627 1.042l4.244 2.372c.369.216.848.216 1.254 0l4.244-2.372c.369-.215.627-.61.627-1.042v-4.78a1.16 1.16 0 00-.627-1.042l-4.28-2.409c-.37-.215-.85-.215-1.255 0l-2.879 1.654-1.955 1.078-2.879 1.653c-.369.216-.848.216-1.254 0l-2.288-1.294c-.369-.215-.627-.61-.627-1.042V12.19c0-.431.221-.826.627-1.042l2.25-1.258c.37-.216.85-.216 1.256 0l2.25 1.258c.37.216.628.611.628 1.042v1.654l1.955-1.115v-1.653a1.16 1.16 0 00-.627-1.042l-4.17-2.372c-.369-.216-.848-.216-1.254 0z"/>`
}, Ky = {
  symbol: "trx",
  color: "#000",
  colorIcon() {
    return '<g fill="none"><circle fill="#EF0027" cx="16" cy="16" r="16"/><path d="M21.932 9.913L7.5 7.257l7.595 19.112 10.583-12.894-3.746-3.562zm-.232 1.17l2.208 2.099-6.038 1.093 3.83-3.192zm-5.142 2.973l-6.364-5.278 10.402 1.914-4.038 3.364zm-.453.934l-1.038 8.58L9.472 9.487l6.633 5.502zm.96.455l6.687-1.21-7.67 9.343.983-8.133z" fill="#FFF"/></g>';
  },
  plainIcon: (e) => `<path fill-rule="evenodd" fill="${e || (void 0).color}" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zM7.5 7.257l7.595 19.112 10.583-12.894-3.746-3.562L7.5 7.257zm16.252 6.977l-7.67 9.344.983-8.133 6.687-1.21zM9.472 9.488l6.633 5.502-1.038 8.58L9.472 9.487zM21.7 11.083l2.208 2.099-6.038 1.093 3.83-3.192zM10.194 8.778l10.402 1.914-4.038 3.364-6.364-5.278z"/>`
}, Yy = {
  symbol: "uni",
  color: "#000",
  colorIcon() {
    return '<g fill="none" fill-rule="evenodd"><circle fill="#FF007A" fill-rule="nonzero" cx="16" cy="16" r="16"/><g fill="#FFF"><path d="M12.261 5.767c-.285-.044-.297-.05-.163-.07.257-.04.865.015 1.284.114.977.233 1.866.828 2.816 1.885l.252.28.36-.057c1.52-.245 3.067-.05 4.36.547.356.164.917.491.987.576.023.026.064.199.091.383.096.637.048 1.125-.146 1.49-.106.198-.112.26-.041.43a.416.416 0 00.372.236c.322 0 .668-.52.828-1.243l.064-.287.126.143c.692.784 1.235 1.853 1.328 2.613l.025.199-.117-.18c-.2-.31-.4-.522-.658-.693-.464-.307-.955-.411-2.255-.48-1.174-.062-1.839-.162-2.497-.377-1.121-.365-1.686-.852-3.018-2.599-.591-.776-.957-1.205-1.32-1.55-.827-.786-1.639-1.198-2.678-1.36z" fill-rule="nonzero"/><path d="M22.422 7.5c.03-.52.1-.863.242-1.176.056-.124.109-.226.117-.226a.773.773 0 01-.055.204c-.103.304-.12.72-.049 1.203.09.614.142.702.79 1.365.305.311.659.703.787.872l.233.306-.233-.219c-.285-.267-.941-.79-1.086-.864-.097-.05-.112-.049-.172.01-.055.056-.067.138-.074.529-.012.608-.095 1-.296 1.39-.108.21-.125.166-.027-.073.073-.178.08-.256.08-.845 0-1.184-.141-1.468-.966-1.956a9.046 9.046 0 00-.764-.396 2.916 2.916 0 01-.374-.182c.023-.023.827.211 1.15.336.482.185.561.209.62.186.039-.015.058-.129.077-.464zm-9.607 2.025c-.579-.797-.937-2.02-.86-2.934l.024-.283.132.024c.248.045.675.204.875.326.548.333.786.772 1.027 1.898.071.33.164.703.207.83.068.203.328.678.54.987.152.222.05.327-.286.297-.514-.047-1.21-.527-1.659-1.145zm8.905 5.935c-2.707-1.09-3.66-2.036-3.66-3.632 0-.235.008-.427.017-.427.01 0 .115.077.233.172.549.44 1.164.628 2.865.876 1.001.147 1.565.265 2.085.437 1.652.548 2.674 1.66 2.918 3.174.07.44.029 1.265-.086 1.7-.09.344-.367.963-.44.987-.02.006-.04-.071-.046-.178-.028-.568-.315-1.122-.798-1.537-.549-.471-1.286-.847-3.089-1.572zm-1.9.452a4.808 4.808 0 00-.131-.572l-.07-.206.129.144c.177.2.318.454.436.794.091.259.101.336.1.757 0 .414-.011.5-.095.734a2.32 2.32 0 01-.571.908c-.495.504-1.13.782-2.048.898-.16.02-.624.054-1.033.075-1.03.054-1.707.164-2.316.378a.488.488 0 01-.174.042c-.024-.025.39-.272.733-.437.483-.233.963-.36 2.04-.539.532-.089 1.082-.196 1.221-.239 1.318-.404 1.995-1.446 1.778-2.737z" fill-rule="nonzero"/><path d="M21.06 18.116c-.36-.773-.442-1.52-.245-2.216.021-.074.055-.135.075-.135a.73.73 0 01.189.102c.166.112.498.3 1.383.782 1.105.603 1.735 1.07 2.164 1.602.375.467.607.999.719 1.647.063.367.026 1.25-.068 1.62-.297 1.166-.988 2.082-1.972 2.616a2.53 2.53 0 01-.288.143c-.014 0 .038-.133.117-.297.33-.692.369-1.366.118-2.116-.153-.459-.466-1.02-1.097-1.966-.734-1.1-.914-1.394-1.095-1.782zm-10.167 4.171c1.005-.848 2.254-1.45 3.393-1.635.49-.08 1.308-.048 1.762.068.728.186 1.38.604 1.719 1.101.33.486.473.91.62 1.852.06.372.123.745.142.83.11.488.327.879.595 1.075.425.311 1.158.33 1.878.05a.981.981 0 01.236-.074c.026.026-.336.269-.592.397a2.014 2.014 0 01-.983.238c-.66 0-1.208-.335-1.665-1.02-.09-.135-.292-.538-.45-.897-.482-1.1-.72-1.436-1.28-1.803-.489-.32-1.118-.377-1.591-.145-.622.305-.795 1.1-.35 1.603.177.2.507.373.777.406a.83.83 0 00.939-.83c0-.332-.128-.52-.448-.665-.437-.197-.907.033-.905.444.001.175.077.285.253.365.113.05.115.055.023.036-.401-.084-.495-.567-.172-.888.387-.386 1.188-.216 1.463.31.116.221.129.662.028.928-.225.595-.883.907-1.55.737-.454-.116-.639-.241-1.186-.805-.951-.98-1.32-1.17-2.692-1.384l-.263-.041.3-.253z" fill-rule="nonzero"/><path d="M6.196 3.35l.096.117c3.708 4.54 5.624 6.896 5.746 7.064.2.278.125.527-.219.723-.191.109-.585.219-.781.219-.223 0-.474-.107-.657-.28-.129-.123-.65-.901-1.853-2.768a188.53 188.53 0 00-1.712-2.633c-.049-.046-.048-.045 1.618 2.936 1.046 1.872 1.4 2.533 1.4 2.622 0 .18-.05.274-.272.522-.37.413-.535.877-.655 1.837-.134 1.077-.51 1.837-1.554 3.138-.61.762-.71.902-.865 1.209-.194.386-.247.603-.269 1.091-.023.516.022.85.18 1.343.138.432.282.718.65 1.288.318.493.501.859.501 1.002 0 .114.022.114.515.003 1.179-.266 2.136-.735 2.675-1.309.333-.355.411-.551.414-1.038.001-.318-.01-.385-.096-.568-.14-.298-.395-.546-.957-.93-.737-.504-1.051-.91-1.138-1.467-.072-.457.011-.78.419-1.634.421-.884.526-1.26.597-2.151.045-.576.108-.803.274-.985.172-.19.328-.255.755-.313.696-.095 1.139-.275 1.503-.61.316-.292.448-.573.468-.995l.016-.32-.177-.206c-.254-.296-2.355-2.614-6.304-6.956l-.106-.115-.212.165zM7.91 19.732a.566.566 0 00-.174-.746c-.228-.152-.583-.08-.583.118 0 .06.033.104.108.143.127.065.136.139.037.288-.101.152-.093.286.023.377.186.146.45.065.59-.18zm5.524-7.176c-.327.1-.644.447-.743.81-.06.221-.026.61.064.73.145.194.286.245.666.242.744-.005 1.39-.324 1.466-.723.062-.327-.223-.78-.614-.98-.202-.102-.631-.143-.839-.079zm.87.68c.115-.163.064-.34-.13-.458-.372-.227-.934-.04-.934.312 0 .174.293.365.561.365.18 0 .424-.107.503-.219z"/></g></g>';
  },
  plainIcon: (e) => `<path fill-rule="evenodd" fill="${e || (void 0).color}" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16A15.97 15.97 0 016.199 3.353l.093.114.25.306c3.544 4.34 5.376 6.593 5.496 6.758.2.278.125.527-.219.723-.191.109-.585.219-.781.219-.223 0-.474-.107-.657-.28a1.453 1.453 0 01-.134-.167l-.086-.119c-.27-.384-.78-1.16-1.633-2.482a188.53 188.53 0 00-1.712-2.633l-.012-.01c-.002 0-.001.004.004.016l.032.064c.103.198.469.852 1.594 2.866 1.046 1.872 1.4 2.533 1.4 2.622 0 .18-.05.274-.272.522-.37.413-.535.877-.655 1.837-.134 1.077-.51 1.837-1.554 3.138-.61.762-.71.902-.865 1.209-.194.386-.247.603-.269 1.091-.023.516.022.85.18 1.343.138.432.282.718.65 1.288.318.493.501.859.501 1.002 0 .114.022.114.515.003 1.179-.266 2.136-.735 2.675-1.309.333-.355.411-.551.414-1.038.001-.318-.01-.385-.096-.568-.14-.298-.395-.546-.957-.93-.737-.504-1.051-.91-1.138-1.467-.072-.457.011-.78.419-1.634.421-.884.526-1.26.597-2.151.045-.576.108-.803.274-.985.172-.19.328-.255.755-.313.696-.095 1.139-.275 1.503-.61.316-.292.448-.573.468-.995l.016-.32-.177-.206-.02-.024c-.332-.38-2.427-2.691-6.284-6.932l-.102-.111A15.93 15.93 0 0116 0zm.048 20.72c-.454-.116-1.271-.148-1.762-.068-1.139.185-2.388.787-3.393 1.635l-.299.253.263.04c1.371.215 1.74.405 2.692 1.385.547.564.732.69 1.186.805.667.17 1.325-.142 1.55-.737.101-.266.088-.707-.028-.928-.275-.526-1.076-.696-1.463-.31-.323.32-.229.804.172.888.092.019.09.015-.023-.036-.176-.08-.252-.19-.253-.365-.002-.41.468-.641.905-.444.32.144.448.333.448.664a.83.83 0 01-.939.831 1.38 1.38 0 01-.777-.406c-.445-.504-.272-1.298.35-1.603.473-.232 1.102-.175 1.59.145.56.367.799.702 1.282 1.803.157.359.36.762.45.897.456.685 1.004 1.02 1.664 1.02.364 0 .638-.066.983-.238.256-.128.618-.37.592-.397a1.005 1.005 0 00-.236.073c-.72.281-1.453.262-1.878-.05-.268-.195-.484-.586-.595-1.074a23.05 23.05 0 01-.141-.83c-.148-.942-.29-1.366-.621-1.852-.34-.497-.99-.915-1.719-1.101zm4.842-4.955c-.02 0-.054.061-.075.135-.197.697-.115 1.443.245 2.216l.065.135c.166.333.382.676 1.03 1.647.631.947.944 1.507 1.097 1.966.25.75.213 1.424-.118 2.116-.079.164-.131.297-.117.297.014 0 .143-.064.288-.143.984-.534 1.675-1.45 1.972-2.616.094-.37.131-1.253.068-1.62-.112-.648-.344-1.18-.72-1.647-.428-.533-1.058-1-2.163-1.602-.885-.482-1.217-.67-1.383-.782a.73.73 0 00-.189-.102zM7.152 19.103c0-.198.355-.27.583-.118.242.16.319.49.174.746-.138.245-.403.326-.59.18-.115-.091-.123-.225-.022-.377.1-.15.09-.223-.037-.288-.075-.039-.108-.083-.108-.143zm12.468-3.97l.069.207a4.8 4.8 0 01.13.572c.217 1.29-.46 2.333-1.778 2.737-.14.043-.689.15-1.22.239-1.078.18-1.558.306-2.041.539-.343.165-.757.412-.733.437a.488.488 0 00.174-.042c.609-.214 1.287-.324 2.316-.378.409-.021.874-.055 1.033-.075.918-.116 1.553-.394 2.048-.898.275-.28.439-.54.57-.908.085-.234.096-.32.097-.734 0-.421-.01-.498-.1-.757-.12-.34-.26-.595-.437-.794l-.128-.144zm-1.543-3.732c-.01 0-.018.192-.018.427 0 1.596.954 2.542 3.66 3.632 1.803.725 2.54 1.1 3.09 1.572.482.415.77.969.797 1.537.005.107.025.184.045.178.074-.024.35-.643.441-.987.115-.435.156-1.26.086-1.7-.244-1.514-1.266-2.626-2.918-3.174-.52-.172-1.084-.29-2.085-.437-1.701-.248-2.316-.436-2.865-.876a2.057 2.057 0 00-.233-.172zm-3.804 1.235c-.202-.103-.631-.144-.839-.08-.327.1-.644.447-.743.81-.06.221-.026.61.064.73.145.194.286.245.666.242.744-.005 1.39-.324 1.466-.723.062-.327-.223-.78-.614-.98zm-1.033.454c0-.351.562-.54.933-.312.195.119.246.295.13.458-.078.112-.323.22-.502.22-.268 0-.561-.192-.561-.366zm.142-7.279c-.419-.1-1.027-.153-1.284-.114-.134.02-.122.026.163.07 1.04.162 1.851.574 2.678 1.36.363.345.729.774 1.32 1.55 1.332 1.747 1.897 2.234 3.018 2.6.658.214 1.323.314 2.497.376 1.3.069 1.79.173 2.255.48.257.17.458.382.658.692l.117.18-.025-.198c-.093-.76-.636-1.83-1.328-2.613l-.126-.143-.064.287c-.16.723-.506 1.242-.828 1.243a.416.416 0 01-.372-.236c-.071-.17-.065-.232.04-.43.195-.365.243-.853.147-1.49-.027-.184-.068-.357-.09-.383-.07-.085-.632-.412-.988-.576-1.293-.598-2.84-.792-4.36-.547l-.36.058-.252-.281c-.95-1.057-1.839-1.652-2.816-1.885zm9.399.287c-.008 0-.061.102-.117.226-.142.313-.212.656-.242 1.176-.019.335-.038.45-.077.464-.059.023-.138-.001-.62-.186-.323-.125-1.127-.36-1.15-.336-.006.006.162.088.374.182s.556.272.764.396c.825.488.965.772.966 1.956 0 .59-.007.667-.08.845-.098.239-.08.284.027.073.2-.39.284-.782.296-1.39.007-.39.019-.473.074-.528.06-.06.075-.06.172-.01.145.074.8.596 1.086.863l.233.219-.233-.306c-.128-.169-.482-.56-.787-.872-.648-.663-.7-.751-.79-1.365-.07-.484-.054-.9.05-1.203a.773.773 0 00.054-.204zm-10.802.21l-.024.283c-.077.914.281 2.137.86 2.934.45.618 1.145 1.098 1.66 1.145.336.03.437-.075.285-.297-.212-.309-.472-.784-.54-.988a10.64 10.64 0 01-.207-.83c-.241-1.125-.479-1.564-1.027-1.897a3.31 3.31 0 00-.875-.326l-.132-.024z"/>`
}, Xy = {
  symbol: "usdc",
  color: "#000",
  colorIcon() {
    return '<g fill="none"><circle fill="#3E73C4" cx="16" cy="16" r="16"/><g fill="#FFF"><path d="M20.022 18.124c0-2.124-1.28-2.852-3.84-3.156-1.828-.243-2.193-.728-2.193-1.578 0-.85.61-1.396 1.828-1.396 1.097 0 1.707.364 2.011 1.275a.458.458 0 00.427.303h.975a.416.416 0 00.427-.425v-.06a3.04 3.04 0 00-2.743-2.489V9.142c0-.243-.183-.425-.487-.486h-.915c-.243 0-.426.182-.487.486v1.396c-1.829.242-2.986 1.456-2.986 2.974 0 2.002 1.218 2.791 3.778 3.095 1.707.303 2.255.668 2.255 1.639 0 .97-.853 1.638-2.011 1.638-1.585 0-2.133-.667-2.316-1.578-.06-.242-.244-.364-.427-.364h-1.036a.416.416 0 00-.426.425v.06c.243 1.518 1.219 2.61 3.23 2.914v1.457c0 .242.183.425.487.485h.915c.243 0 .426-.182.487-.485V21.34c1.829-.303 3.047-1.578 3.047-3.217z"/><path d="M12.892 24.497c-4.754-1.7-7.192-6.98-5.424-11.653.914-2.55 2.925-4.491 5.424-5.402.244-.121.365-.303.365-.607v-.85c0-.242-.121-.424-.365-.485-.061 0-.183 0-.244.06a10.895 10.895 0 00-7.13 13.717c1.096 3.4 3.717 6.01 7.13 7.102.244.121.488 0 .548-.243.061-.06.061-.122.061-.243v-.85c0-.182-.182-.424-.365-.546zm6.46-18.936c-.244-.122-.488 0-.548.242-.061.061-.061.122-.061.243v.85c0 .243.182.485.365.607 4.754 1.7 7.192 6.98 5.424 11.653-.914 2.55-2.925 4.491-5.424 5.402-.244.121-.365.303-.365.607v.85c0 .242.121.424.365.485.061 0 .183 0 .244-.06a10.895 10.895 0 007.13-13.717c-1.096-3.46-3.778-6.07-7.13-7.162z"/></g></g>';
  },
  plainIcon: (e) => `<path fill-rule="evenodd" fill="${e || (void 0).color}" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm3.352 5.56c-.244-.12-.488 0-.548.243-.061.061-.061.122-.061.243v.85l.01.104a.86.86 0 00.355.503c4.754 1.7 7.192 6.98 5.424 11.653-.914 2.55-2.925 4.491-5.424 5.402-.244.121-.365.303-.365.607v.85l.005.088a.45.45 0 00.36.397c.061 0 .183 0 .244-.06a10.895 10.895 0 007.13-13.717c-1.096-3.46-3.778-6.07-7.13-7.162zm-6.46-.06c-.061 0-.183 0-.244.06a10.895 10.895 0 00-7.13 13.717c1.096 3.4 3.717 6.01 7.13 7.102.244.121.488 0 .548-.243.061-.06.061-.122.061-.243v-.85l-.01-.08c-.042-.169-.199-.362-.355-.466-4.754-1.7-7.192-6.98-5.424-11.653.914-2.55 2.925-4.491 5.424-5.402.244-.121.365-.303.365-.607v-.85l-.005-.088a.45.45 0 00-.36-.397zm3.535 3.156h-.915l-.088.008c-.2.04-.346.212-.4.478v1.396l-.207.032c-1.708.304-2.778 1.483-2.778 2.942 0 2.002 1.218 2.791 3.778 3.095 1.707.303 2.255.668 2.255 1.639 0 .97-.853 1.638-2.011 1.638-1.585 0-2.133-.667-2.316-1.578-.06-.242-.244-.364-.427-.364h-1.036l-.079.007a.413.413 0 00-.347.418v.06l.033.18c.29 1.424 1.266 2.443 3.197 2.734v1.457l.008.088c.04.198.213.344.48.397h.914l.088-.008c.2-.04.346-.212.4-.477V21.34l.207-.04c1.713-.362 2.84-1.601 2.84-3.177 0-2.124-1.28-2.852-3.84-3.156-1.829-.243-2.194-.728-2.194-1.578 0-.85.61-1.396 1.828-1.396 1.097 0 1.707.364 2.011 1.275a.458.458 0 00.427.303h.975l.079-.006a.413.413 0 00.348-.419v-.06l-.037-.173a3.04 3.04 0 00-2.706-2.316V9.142l-.008-.088c-.04-.199-.213-.345-.48-.398z"/>`
}, Zy = {
  symbol: "usdt",
  color: "#000",
  colorIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#26A17B"/><path fill="#FFF" d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117"/></g>';
  },
  plainIcon: (e) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${e || (void 0).color}" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.922-18.207v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117zm0 3.59v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657z"/>`
}, Jy = {
  symbol: "xmr",
  color: "#000",
  colorIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#F60"/><path fill="#FFF" fill-rule="nonzero" d="M15.97 5.235c5.985 0 10.825 4.84 10.825 10.824a11.07 11.07 0 01-.558 3.432h-3.226v-9.094l-7.04 7.04-7.04-7.04v9.094H5.704a11.07 11.07 0 01-.557-3.432c0-5.984 4.84-10.824 10.824-10.824zM14.358 19.02L16 20.635l1.613-1.614 3.051-3.08v5.72h4.547a10.806 10.806 0 01-9.24 5.192c-3.902 0-7.334-2.082-9.24-5.192h4.546v-5.72l3.08 3.08z"/></g>';
  },
  plainIcon: (e) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${e || (void 0).color}" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.03-26.765A10.816 10.816 0 005.148 16.059c0 1.202.205 2.346.557 3.432h3.227v-9.094l7.04 7.04 7.04-7.04v9.094h3.226a11.07 11.07 0 00.558-3.432c0-5.984-4.84-10.824-10.824-10.824zM14.358 19.02l-3.08-3.08v5.72H6.731c1.906 3.11 5.338 5.192 9.24 5.192 3.901 0 7.362-2.082 9.24-5.192h-4.547v-5.72l-3.05 3.08L16 20.635l-1.643-1.614z"/>`
};
Um.add(Wm);
const Qy = /* @__PURE__ */ ve({
  name: "InputGroup",
  components: {
    ExclamationCircleIcon: em,
    FontAwesomeIcon: xo,
    Listbox: lf,
    ListboxButton: df,
    ListboxOptions: uf,
    ListboxOption: cf
  },
  inheritAttrs: !1,
  props: {
    type: {
      type: String,
      required: !0
    },
    errorKey: {
      type: String,
      required: !1,
      default: null
    },
    modelValue: {
      type: null,
      required: !1,
      default: null
    },
    label: {
      type: String,
      required: !1,
      default: null
    },
    fieldKey: {
      type: String,
      required: !1,
      default: null
    },
    options: {
      type: Array,
      required: !1,
      default: () => []
    },
    required: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { slots: t, emit: n }) {
    const { context: r } = Nt();
    function i(l) {
      n("update:modelValue", l);
    }
    const o = $(() => {
      var d;
      const l = (d = e.options) == null ? void 0 : d.find((u) => (u.value || u) === e.modelValue);
      return l ? l.label || l : "Select an option";
    }), a = (l) => !!t[l], s = $(() => {
      var l, d, u;
      return (u = (d = (l = r.value.error) == null ? void 0 : l.errors) == null ? void 0 : d[e.errorKey]) == null ? void 0 : u[0];
    });
    return {
      hasSlot: a,
      emitUpdate: i,
      error: s,
      selectedLabel: o
    };
  }
}), e3 = ["for"], t3 = {
  key: 0,
  class: "embed:text-red-500"
}, n3 = {
  key: 0,
  class: "embed:absolute embed:inset-y-0 embed:left-0 embed:pl-3 embed:pt-1 embed:flex embed:items-center embed:pointer-events-none"
}, r3 = ["type", "value"], i3 = ["id", "checked", "type", "value"], o3 = { class: "embed:relative" }, a3 = { class: "embed:block embed:truncate embed:dark:text-white" }, s3 = { class: "embed:pointer-events-none embed:absolute embed:inset-y-0 embed:right-0 embed:flex embed:items-center embed:pr-2" }, l3 = ["value"], d3 = ["textContent"];
function u3(e, t, n, r, i, o) {
  const a = oe("font-awesome-icon"), s = oe("ListboxButton"), l = oe("ListboxOption"), d = oe("ListboxOptions"), u = oe("Listbox"), c = oe("ExclamationCircleIcon");
  return S(), T(U, null, [
    _("div", {
      class: ye({
        "embed:justify-between embed:flex embed:items-center embed:h-5": e.type === "checkbox"
      })
    }, [
      e.label ? (S(), T("label", {
        key: 0,
        for: e.fieldKey,
        class: "embed:block embed:text-sm embed:font-medium embed:text-black embed:dark:text-white"
      }, [
        ee(A(e.label) + " ", 1),
        e.required ? (S(), T("span", t3, "*")) : Q("", !0)
      ], 8, e3)) : Q("", !0),
      _("div", {
        class: ye(["embed:relative embed:rounded-md", { "embed:mt-1": e.type !== "checkbox" && !!e.label }])
      }, [
        e.type !== "checkbox" && e.type !== "textarea" ? (S(), T("div", n3, [
          ri(e.$slots, "icon")
        ])) : Q("", !0),
        e.type !== "textarea" && e.type !== "checkbox" && e.type !== "select" ? (S(), T("input", dr({
          key: 1,
          type: e.type,
          class: {
            "embed:w-full embed:rounded-md embed:bg-white embed:text-black embed:dark:text-white embed:placeholder-neutral-500 embed:focus:placeholder-neutral-800 embed:dark:placeholder-neutral-500 embed:dark:focus:placeholder-neutral-400 embed:focus:ring-2 embed:ring-emerald-200 embed:dark:ring-green-800 embed:shadow-sm embed:shadow-zinc-300 embed:hover:shadow-zinc-400 embed:focus:shadow-emerald-200 embed:dark:shadow-zinc-950 embed:dark:hover:shadow-black embed:dark:focus:shadow-black embed:border-2 embed:border-zinc-100 embed:focus:border-emerald-400 embed:dark:border-zinc-900 embed:dark:focus:border-emerald-900 embed:transition embed:duration-200 embed:ease-in-out embed:disabled:bg-zinc-100 embed:dark:disabled:bg-zinc-900 embed:disabled:opacity-70 embed:focus:outline-none": e.type !== "checkbox",
            "embed:pl-10": e.hasSlot("icon"),
            "embed:placeholder-red-300 embed:dark:placeholder-red-600 embed:text-red-900 embed:border-red-300 embed:focus:ring-red-500 embed:focus:border-red-500": !!e.error,
            "embed:pr-10": !!e.error && e.type !== "number"
          },
          value: e.modelValue
        }, e.$attrs, {
          onInput: t[0] || (t[0] = (f) => e.emitUpdate(f.target.value))
        }), null, 16, r3)) : e.type === "checkbox" ? (S(), T("input", dr({
          key: 2,
          id: e.fieldKey,
          checked: e.modelValue,
          type: e.type,
          class: "embed:appearance-none embed:rounded embed:focus:ring-2 embed:ring-emerald-200 embed:dark:ring-green-800 embed:focus:ring-offset-0 embed:dark:focus:text-black embed:bg-white embed:text-black embed:dark:text-white embed:placeholder-neutral-500 embed:focus:placeholder-neutral-800 embed:dark:placeholder-neutral-500 embed:dark:focus:placeholder-neutral-400 embed:shadow-sm embed:shadow-zinc-300 embed:hover:shadow-zinc-400 embed:focus:shadow-emerald-200 embed:dark:shadow-zinc-950 embed:dark:hover:shadow-black embed:dark:focus:shadow-black embed:border-2 embed:border-zinc-100 embed:focus:border-emerald-400 embed:dark:border-zinc-900 embed:dark:focus:border-emerald-900 embed:transition embed:duration-200 embed:ease-in-out embed:disabled:bg-zinc-100 embed:dark:disabled:bg-zinc-900 embed:disabled:opacity-70 embed:border embed:border-transparent embed:checked:bg-zinc-950",
          value: e.modelValue
        }, e.$attrs, {
          onInput: t[1] || (t[1] = (f) => e.emitUpdate(f.target.checked))
        }), null, 16, i3)) : e.type === "select" ? (S(), ke(u, {
          key: 3,
          "model-value": e.modelValue,
          as: "div",
          class: "embed:relative",
          "onUpdate:modelValue": e.emitUpdate
        }, {
          default: te(() => [
            _("div", o3, [
              H(s, { class: "embed:relative embed:w-full embed:cursor-default embed:rounded-md embed:bg-white embed:dark:bg-zinc-950 embed:py-2 embed:pl-3 embed:pr-10 embed:text-left embed:shadow-sm embed:shadow-zinc-300 embed:hover:shadow-zinc-400 embed:focus:shadow-emerald-200 embed:dark:shadow-zinc-950 embed:dark:hover:shadow-black embed:dark:focus:shadow-black embed:border-2 embed:border-zinc-100 embed:focus:border-emerald-400 embed:dark:border-zinc-900 embed:dark:focus:border-emerald-900 embed:transition embed:duration-200 embed:ease-in-out" }, {
                default: te(() => [
                  _("span", a3, A(e.selectedLabel), 1),
                  _("span", s3, [
                    H(a, {
                      icon: "chevron-down",
                      class: "embed:w-4 embed:h-4 embed:text-zinc-600 embed:dark:text-zinc-300"
                    })
                  ])
                ]),
                _: 1
              }),
              H(ur, {
                "leave-active-class": "embed:transition embed:duration-100 embed:ease-in",
                "leave-from-class": "embed:opacity-100",
                "leave-to-class": "embed:opacity-0"
              }, {
                default: te(() => [
                  H(d, { class: "embed:fixed embed:z-51 embed:max-w-[31rem] embed:mt-1 embed:max-h-60 embed:w-[calc(100%-2rem)] embed:overflow-auto embed:rounded-md embed:bg-white embed:dark:bg-zinc-900 embed:py-1 embed:text-base embed:shadow-zinc-400 embed:dark:shadow-black embed:border embed:border-zinc-300 embed:dark:border-zinc-950 embed:shadow-lg embed:ring-1 embed:ring-black/5 embed:focus:outline-hidden embed:sm:text-sm" }, {
                    default: te(() => [
                      (S(!0), T(U, null, yn(e.options, (f) => (S(), ke(l, {
                        key: f.value || f,
                        value: f.value || f,
                        as: "template"
                      }, {
                        default: te(({ active: m, selected: b }) => [
                          _("li", {
                            class: ye([m ? "embed:bg-zinc-100 embed:text-black embed:dark:bg-zinc-950 embed:dark:text-white" : "embed:text-zinc-800 embed:dark:text-white", "embed:relative embed:cursor-default embed:select-none embed:py-2 embed:pl-3 embed:pr-9"])
                          }, [
                            _("span", {
                              class: ye([b ? "embed:font-semibold" : "embed:font-normal", "embed:block embed:truncate"])
                            }, A(f.label || f), 3)
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["value"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["model-value", "onUpdate:modelValue"])) : (S(), T("textarea", dr({
          key: 4,
          class: ["embed:w-full embed:bg-white embed:focus:bg-zinc-50 embed:text-black embed:dark:text-zinc-100 embed:border embed:border-transparent embed:rounded-md embed:placeholder-neutral-500 embed:focus:placeholder-neutral-800 embed:dark:placeholder-neutral-500 embed:dark:focus:placeholder-neutral-400 embed:focus:outline-hidden embed:shadow-sm embed:shadow-zinc-300 embed:hover:shadow-zinc-400 embed:focus:shadow-emerald-200 embed:dark:shadow-zinc-950 embed:dark:hover:shadow-black embed:dark:focus:shadow-black embed:border-2 embed:border-zinc-100 embed:focus:border-emerald-400 embed:dark:border-zinc-900 embed:dark:focus:border-emerald-900 embed:focus:ring-2 embed:ring-emerald-200 embed:dark:ring-green-800 embed:focus:border-transparent embed:transition embed:duration-200 embed:ease-in-out", {
            "embed:placeholder-red-300 embed:text-red-900 embed:border-red-300 embed:focus:ring-red-500 embed:focus:border-red-500": !!e.error
          }],
          value: e.modelValue
        }, e.$attrs, {
          onInput: t[2] || (t[2] = (f) => e.emitUpdate(f.target.value))
        }), null, 16, l3)),
        e.error && (e.type === "text" || e.type === "email") ? (S(), T("div", {
          key: 5,
          class: ye(["embed:absolute embed:inset-y-0 embed:right-0 embed:pr-3 embed:flex embed:items-center embed:pointer-events-none", { "embed:mr-6": e.type === "number" }])
        }, [
          H(c, {
            class: "embed:h-5 embed:w-5 embed:text-red-500 embed:dark:text-red-900",
            "aria-hidden": "true"
          })
        ], 2)) : Q("", !0)
      ], 2)
    ], 2),
    e.error ? (S(), T("p", {
      key: 0,
      class: "embed:mt-1 embed:text-xs embed:text-red-600 embed:dark:text-red embed:w-full embed:grow",
      textContent: A(e.error)
    }, null, 8, d3)) : Q("", !0)
  ], 64);
}
const yl = /* @__PURE__ */ gt(Qy, [["render", u3]]), c3 = /* @__PURE__ */ ve({
  name: "AdditionalInformation",
  components: {
    InputGroup: yl
  },
  setup() {
    const { context: e } = Nt(), t = Ge("hasAttemptedSubmit", { value: !1 }), n = $(() => e.value.variant.additional_information), r = (i) => {
      if (!i.required || !t.value)
        return "";
      const o = Ee.additional_information[i.key];
      if (i.type === "CHECKBOX") {
        if (o !== !0)
          return "This checkbox must be checked";
      } else if (!o)
        return "This field is required";
      return "";
    };
    return e.value.variant.additional_information.length > 0 && (Ee.additional_information ?? (Ee.additional_information = {}), n.value.forEach((i) => {
      var o, a;
      if ((Ee.additional_information[i.key] ?? null) === null) {
        let s;
        i.type === "CHECKBOX" ? s = !1 : i.type === "NUMBER" ? s = 0 : s = "", (o = Ee.additional_information)[a = i.key] ?? (o[a] = s);
      }
    })), {
      checkout_information: Ee,
      context: e,
      required_fields: n,
      getErrorMessage: r
    };
  }
});
function f3(e, t, n, r, i, o) {
  const a = oe("InputGroup");
  return S(!0), T(U, null, yn(e.required_fields, (s) => (S(), T(U, { key: s }, [
    s.type === "TEXTAREA" ? (S(), ke(a, {
      key: 0,
      modelValue: e.checkout_information.additional_information[s.key],
      "onUpdate:modelValue": (l) => e.checkout_information.additional_information[s.key] = l,
      type: s.type.toLowerCase(),
      "error-key": `additional_information.${s.key}`,
      placeholder: s.label,
      required: s.required,
      label: s.label,
      class: "embed:dark:bg-zinc-950",
      "error-message": e.getErrorMessage(s)
    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "error-key", "placeholder", "required", "label", "error-message"])) : s.type === "NUMBER" ? (S(), ke(a, {
      key: 1,
      modelValue: e.checkout_information.additional_information[s.key],
      "onUpdate:modelValue": (l) => e.checkout_information.additional_information[s.key] = l,
      type: s.type.toLowerCase(),
      "error-key": `additional_information.${s.key}`,
      placeholder: s.label,
      required: s.required,
      label: s.label,
      min: "1",
      class: "embed:w-full embed:dark:bg-zinc-950",
      "error-message": e.getErrorMessage(s)
    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "error-key", "placeholder", "required", "label", "error-message"])) : s.type === "TEXT" ? (S(), ke(a, {
      key: 2,
      modelValue: e.checkout_information.additional_information[s.key],
      "onUpdate:modelValue": (l) => e.checkout_information.additional_information[s.key] = l,
      type: s.type.toLowerCase(),
      "error-key": `additional_information.${s.key}`,
      placeholder: s.label,
      required: s.required,
      label: s.label,
      class: "embed:dark:bg-zinc-950",
      "error-message": e.getErrorMessage(s)
    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "error-key", "placeholder", "required", "label", "error-message"])) : s.type === "SELECT" ? (S(), ke(a, {
      key: 3,
      modelValue: e.checkout_information.additional_information[s.key],
      "onUpdate:modelValue": (l) => e.checkout_information.additional_information[s.key] = l,
      type: s.type.toLowerCase(),
      "error-key": `additional_information.${s.key}`,
      placeholder: s.label,
      required: s.required,
      label: s.label,
      options: s.options,
      class: "embed:dark:bg-zinc-950",
      "error-message": e.getErrorMessage(s)
    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "error-key", "placeholder", "required", "label", "options", "error-message"])) : (S(), ke(a, {
      key: 4,
      modelValue: e.checkout_information.additional_information[s.key],
      "onUpdate:modelValue": (l) => e.checkout_information.additional_information[s.key] = l,
      "field-key": `additional_information.${s.key}`,
      type: s.type.toLowerCase(),
      "error-key": `additional_information.${s.key}`,
      placeholder: s.label,
      required: s.required,
      label: s.label,
      class: "embed:dark:bg-zinc-950",
      "error-message": e.getErrorMessage(s)
    }, null, 8, ["modelValue", "onUpdate:modelValue", "field-key", "type", "error-key", "placeholder", "required", "label", "error-message"]))
  ], 64))), 128);
}
const m3 = /* @__PURE__ */ gt(c3, [["render", f3]]), p3 = /* @__PURE__ */ ve({
  name: "EmbedDrawer",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    title: {
      type: String,
      required: !0
    },
    description: {
      type: String,
      required: !1
    }
  },
  emits: ["update:modelValue"]
}), h3 = {
  key: 0,
  class: "embed:absolute embed:bottom-0 embed:inset-x-0 embed:bg-zinc-50 embed:dark:bg-zinc-950 embed:rounded-t-2xl embed:z-20 embed:min-h-[20vh] embed:max-h-[50vh] embed:shadow-xl"
}, b3 = { class: "embed:flex embed:flex-col embed:justify-between embed:items-center embed:mb-4 embed:p-4" }, g3 = { class: "embed:text-lg embed:font-semibold embed:dark:text-white embed:text-center embed:w-full" }, v3 = { class: "embed:text-xs embed:text-zinc-400 embed:dark:text-zinc-800 embed:text-center embed:w-full" }, y3 = { class: "embed:relative embed:pb-4" }, w3 = { class: "embed:px-4 embed:text-sm embed:text-zinc-800 embed:dark:text-zinc-200 embed:overflow-x-auto embed:overscroll-contain embed:min-h-[8rem] embed:max-h-[calc(50vh-8rem)] embed:break-words embed:whitespace-pre-wrap embed:prose embed:dark:prose-invert embed:prose-sm embed:max-w-none embed:[&>p]:mb-4 embed:[scrollbar-width:thin] embed:[&::-webkit-scrollbar]:w-2 embed:[&::-webkit-scrollbar-track]:bg-transparent embed:[&::-webkit-scrollbar-thumb]:bg-zinc-300 embed:dark:[&::-webkit-scrollbar-thumb]:bg-zinc-700 embed:[&::-webkit-scrollbar-thumb]:rounded-full embed:[&_code]:whitespace-pre-wrap embed:[&_code]:break-words" };
function x3(e, t, n, r, i, o) {
  return S(), ke(ur, {
    "enter-active-class": "embed:transition-all embed:duration-300 embed:ease-in-out",
    "enter-from-class": "embed:translate-y-full",
    "enter-to-class": "embed:translate-y-0",
    "leave-active-class": "embed:transition-all embed:duration-300 embed:ease-in-out",
    "leave-from-class": "embed:translate-y-0",
    "leave-to-class": "embed:translate-y-full"
  }, {
    default: te(() => [
      e.modelValue ? (S(), T("div", h3, [
        _("div", b3, [
          _("h3", g3, A(e.title), 1),
          _("h3", v3, A(e.description), 1),
          _("button", {
            class: "embed:absolute embed:right-2 embed:text-zinc-500 embed:hover:text-zinc-700 embed:dark:hover:text-zinc-300",
            onClick: t[0] || (t[0] = (a) => e.$emit("update:modelValue", !1))
          }, t[1] || (t[1] = [
            _("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "embed:h-6 embed:w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              _("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M6 18L18 6M6 6l12 12"
              })
            ], -1)
          ]))
        ]),
        _("div", y3, [
          _("div", w3, [
            ri(e.$slots, "default")
          ])
        ])
      ])) : Q("", !0)
    ]),
    _: 3
  });
}
const k3 = /* @__PURE__ */ gt(p3, [["render", x3]]);
vl.add([By, Wy, Jy, qy, Uy, Ky, Gy, Zy, Xy, Yy, Hy]);
Um.add(Ay, $y, Oy, Ty, My, zy, Wm, Py, Cy, Dy, Fy, Ly, Ny, Iy);
const _3 = /* @__PURE__ */ ve({
  props: {
    config: {
      type: [Object, String],
      required: !0
    },
    extraClasses: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    return () => {
      try {
        if (typeof e.config == "string")
          return e.config.includes("fa-") ? je(xo, {
            icon: e.config,
            class: e.extraClasses.join(" ")
            // Convert array to string
          }) : je(vl, {
            symbol: e.config,
            class: e.extraClasses.join(" ")
            // Convert array to string
          });
        if (e.config.type === "fa")
          return je(xo, {
            icon: e.config.value,
            class: [...e.config.classes || [], ...e.extraClasses].join(" ")
            // Convert array to string
          });
        if (e.config.type === "svg")
          return je("div", {
            innerHTML: e.config.value,
            class: [...e.config.classes || [], ...e.extraClasses].join(" ")
            // Convert array to string
          });
      } catch (t) {
        return console.error("Error rendering icon:", t), null;
      }
    };
  }
}), S3 = /* @__PURE__ */ ve({
  name: "ProductOverview",
  components: {
    MyButton: Zo,
    DialogTitle: xr,
    NumberInput: cg,
    CryptoIcon: vl,
    RadioGroup: gf,
    RadioGroupLabel: yf,
    RadioGroupOption: vf,
    FontAwesomeIcon: xo,
    RenderIcon: _3,
    NumberFlow: lm,
    InputGroup: yl,
    AdditionalInformation: m3,
    EnvelopeIcon: h2,
    Drawer: k3
  },
  setup() {
    const { context: e, state: t, send: n } = Nt(), r = X(null), i = X(null), o = X(!1), a = X(!1), s = {
      PAYPAL: {
        description: "Checkout with your PayPal account",
        name: "PayPal",
        icon: {
          type: "fa",
          value: "fa-brands fa-paypal",
          classes: ["embed:text-[#003087] embed:h-8 embed:w-6"]
        }
      },
      PAYSTACK: {
        description: "Pay with credit and debit card",
        name: "PayStack",
        icon: {
          type: "fa",
          value: "fa-solid fa-money-bill-wave",
          classes: ["embed:text-[#00457C]"]
        }
      },
      STRIPE: {
        description: "Debit and credit card, Apple/Google Pay, and more",
        name: "Stripe",
        icon: {
          type: "fa",
          value: "fa-brands fa-cc-stripe",
          classes: ["embed:text-[#5433FF] embed:h-8 embed:w-6"]
        }
      },
      CASHAPP: {
        description: "Checkout with your Cash App account",
        name: "Cash App",
        icon: {
          type: "svg",
          value: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g fill-rule="nonzero" fill="#FFF"><path d="M41.7 0c6.4 0 9.6 0 13.1 1.1a13.6 13.6 0 0 1 8.1 8.1C64 12.7 64 15.9 64 22.31v19.37c0 6.42 0 9.64-1.1 13.1a13.6 13.6 0 0 1-8.1 8.1C51.3 64 48.1 64 41.7 64H22.3c-6.42 0-9.64 0-13.1-1.1a13.6 13.6 0 0 1-8.1-8.1C0 51.3 0 48.1 0 41.69V22.3c0-6.42 0-9.64 1.1-13.1a13.6 13.6 0 0 1 8.1-8.1C12.7 0 15.9 0 22.3 0h19.4z" fill="#00D632"/><path d="M42.47 23.8c.5.5 1.33.5 1.8-.0l2.5-2.6c.53-.5.5-1.4-.06-1.94a19.73 19.73 0 0 0-6.72-3.84l.79-3.8c.17-.83-.45-1.61-1.28-1.61h-4.84a1.32 1.32 0 0 0-1.28 1.06l-.7 3.38c-6.44.33-11.9 3.6-11.9 10.3 0 5.8 4.51 8.29 9.28 10 4.51 1.72 6.9 2.36 6.9 4.78 0 2.49-2.38 3.95-5.9 3.95-3.2 0-6.56-1.07-9.16-3.68a1.3 1.3 0 0 0-1.84-.0l-2.7 2.7a1.36 1.36 0 0 0 .0 1.92c2.1 2.07 4.76 3.57 7.792 4.4l-.74 3.57c-.17.83.44 1.6 1.27 1.61l4.85.04a1.32 1.32 0 0 0 1.3-1.06l.7-3.39C40.28 49.07 45 44.8 45 38.57c0-5.74-4.7-8.16-10.4-10.13-3.26-1.21-6.08-2.04-6.08-4.53 0-2.42 2.63-3.38 5.27-3.38 3.36 0 6.59 1.39 8.7 3.29z" fill="#FFF"/></g></svg>',
          classes: ["embed:fill-current embed:h-8 embed:w-6"]
        }
      },
      SQUARE: {
        description: "Debit and credit card, Apple/Google Pay, and more",
        name: "Square",
        icon: {
          type: "svg",
          value: '<svg enable-background="new 0 0 40 40" version="1.1" viewBox="0 0 40 40" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g id="Square_Payment_1_"><path d="M33,10c0-1.7-1.3-3-3-3H11c-1.7,0-3,1.3-3,3v19c0,1.7,1.3,3,3,3h19c1.7,0,3-1.3,3-3V10z" fill="currentColor"/><path d="M29,13c0-1.1-0.9-2-2-2H14c-1.1,0-2,0.9-2,2v13c0,1.1,0.9,2,2,2h13c1.1,0,2-0.9,2-2V13z" fill="#ECF0F1"/><path d="M25,16c0-0.6-0.4-1-1-1h-7c-0.6,0-1,0.4-1,1v7c0,0.6,0.4,1,1,1h7c0.6,0,1-0.4,1-1V16z" fill="currentColor"/></g></svg>',
          classes: ["embed:text-[#2C3E50] embed:h-8 embed:w-6"]
        }
      },
      VENMO: {
        description: "Pay directly with your Venmo account",
        name: "Venmo",
        icon: {
          type: "svg",
          value: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 611.9 117.8"><path d="M100.8 1.5c4.2 7 5.7 14 5.7 22.4 0 28-23.8 65.9-43.4 91.1H18.2L0 7.2l40.6-2.8 9.8 77.1c8.4-14 19.7-37.9 19.7-53.2 0-8.4-1.4-14-4.2-19.7zm51.8 47.7c7 0 25.2-2.8 25.2-14 0-5.7-2.8-7-7-7-8.3 0-18.2 8.4-18.2 21zm-1.3 21c0 12.7 7 18.2 16.8 18.2s19.7-2.8 32.2-8.4l-5.7 30.8c-8.4 4.2-22.4 7-36.4 7-33.5 0-46.2-21-46.2-46.2 0-33.5 19.7-68.6 60.2-68.6 22.4 0 35 12.7 35 30.8 1.5 26.6-35 36.4-55.9 36.4zM322.1 26.7c0 4.2 0 9.8-1.4 14l-11.2 74.2h-37.8l11.2-68.6c0-1.4 1.4-5.7 1.4-7 0-5.7-2.8-5.7-7-5.7-5.7 0-9.8 2.8-12.7 4.2l-14 77.1h-37.9l16.8-112.1h33.5v8.4c8.4-5.7 18.2-11.2 32.2-11.2 19.9 3 26.9 12.7 26.9 26.7zm113.4-12.5c11.2-8.4 21-12.7 35-12.7 19.7 0 26.7 9.8 26.7 25.2 0 4.2 0 9.8-1.4 14L484.7 115h-37.9l11.2-70v-5.7c0-5.7-2.8-7-7-7s-9.8 1.4-12.7 4.2L425.7 114.9h-37.9l11.2-70v-5.7c0-5.7-2.8-7-7-7-5.7 0-9.8 2.8-12.7 4.2L366.7 114.7h-37.9l16.9-112h32.2l1.4 9.8c7-5.7 18.2-11.2 32.2-11.2 11.4 1.7 19.7 5.9 24 12.9zM572.7 47.8c0-9.8-2.8-15.4-9.8-15.4-15.4 0-18.2 26.7-18.2 40.6 0 9.8 2.8 16.8 9.8 16.8 15.5-1.4 18.2-29.4 18.2-42zm-65.8 22.4c0-35 18.2-68.6 61.6-68.6 32.2 0 43.4 19.7 43.4 44.9 0 35-18.2 70-61.6 70-32.2 1.3-43.4-19.7-43.4-46.3z" fill="currentColor"/></svg>',
          classes: ["embed:text-[#3d95ce] embed:h-8 embed:w-12"]
        }
      },
      PADDLE: {
        description: "Debit and credit card, Apple/Google Pay, and more",
        name: "Paddle",
        icon: {
          type: "svg",
          value: '<svg viewBox="0 0 110 30" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M49.9213 7.48787C52.468 7.48787 54.724 8.7676 56.1418 10.7844V0H59.0423V24.0002H56.1418V21.2156C54.724 23.2363 52.468 24.5121 49.9213 24.5121C45.1514 24.5121 41.123 20.7682 41.123 16.0005C41.123 11.2328 45.1514 7.48787 49.9213 7.48787ZM49.9213 21.9517C53.692 21.9517 56.1418 19.424 56.1418 16.0005C56.1418 12.577 53.692 10.0483 49.9213 10.0483C46.5702 10.0483 44.0234 12.448 44.0234 16.0005C44.0234 19.5529 46.5702 21.9517 49.9213 21.9517ZM36.2891 10.7843C34.8713 8.76752 32.6153 7.48779 30.0695 7.48779C25.2987 7.48779 21.2703 11.2327 21.2703 16.0004C21.2703 20.7681 25.2987 24.5121 30.0695 24.5121C32.5833 24.5121 34.8355 23.2362 36.2891 21.2156V24.0002H39.1896V7.99969H36.2891V10.7843ZM36.2891 16.0004C36.2891 19.3922 33.8073 21.9516 30.0695 21.9516C26.7175 21.9516 24.1707 19.5529 24.1707 16.0004C24.1707 12.448 26.7175 10.0482 30.0695 10.0482C33.8402 10.0482 36.2891 12.5759 36.2891 16.0004ZM0 15.5818V16.4478C0.529481 16.4479 1.05375 16.5517 1.54282 16.7531C2.0319 16.9545 2.47621 17.2497 2.85034 17.6217C3.22446 17.9937 3.52108 18.4353 3.72324 18.9212C3.92539 19.4071 4.02911 19.9277 4.02848 20.4535H4.83475C4.83501 19.3927 5.25952 18.3755 6.01495 17.6254C6.77038 16.8753 7.79489 16.4538 8.86323 16.4536V15.5876C8.33375 15.5875 7.80948 15.4837 7.3204 15.2823C6.83133 15.0809 6.38702 14.7858 6.01289 14.4137C5.63876 14.0417 5.34214 13.6002 5.13999 13.1143C4.93784 12.6284 4.83412 12.1077 4.83475 11.582H4.02848C4.02822 12.6427 3.60371 13.6599 2.84828 14.41C2.09285 15.1601 1.06834 15.5816 0 15.5818ZM10.9574 10.08H4.02848V7.51953H10.9574C15.8241 7.51953 19.6598 11.3289 19.6598 16.0004C19.6598 20.6719 15.8241 24.4803 10.9574 24.4803H6.92894V31.9999H4.02848V21.9199H10.9574C14.3424 21.9199 16.7593 19.5211 16.7593 16.0004C16.7593 12.4797 14.3415 10.08 10.9574 10.08ZM76.3185 10.7844C74.8998 8.7676 72.6437 7.48787 70.098 7.48787C65.3281 7.48787 61.2997 11.2328 61.2997 16.0005C61.2997 20.7682 65.3281 24.5121 70.098 24.5121C72.6437 24.5121 74.8998 23.2363 76.3185 21.2156V24.0002H79.219V0H76.3185V10.7844ZM76.3185 16.0005C76.3185 19.424 73.8687 21.9517 70.098 21.9517C66.7459 21.9517 64.2001 19.5529 64.2001 16.0005C64.2001 12.448 66.7459 10.0483 70.098 10.0483C73.8687 10.0483 76.3185 12.577 76.3185 16.0005ZM82.116 24.0002V0H85.0175V24.0002H82.116ZM104.001 17.1214C104.001 11.8408 101.326 7.52051 95.7513 7.52051C90.8846 7.52051 87.1139 11.3943 87.1139 16.0014C87.1139 20.6084 90.8846 24.4813 95.7513 24.4813C99.6189 24.4813 102.486 22.0488 103.582 19.5846H100.456C99.2962 21.3445 97.7496 22.2413 95.7513 22.2413C92.8508 22.2413 90.5299 20.2245 90.0793 17.1214H104.001ZM95.7513 9.76052C98.8446 9.76052 101.101 12.2565 101.101 14.8814H90.0793C90.5299 11.7811 92.8508 9.76052 95.7513 9.76052Z" fill="currentColor"/></svg>',
          classes: ["embed:fill-current embed:w-8 embed:h-8 embed:items-center"]
        }
      },
      AUTHNET: {
        description: "Pay with credit or debit card",
        name: "Credit Card",
        icon: {
          type: "svg",
          value: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="embed:fill-[#ffc300] embed:text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>',
          classes: ["embed:fill-current embed:w-8 embed:h-8 embed:items-center"]
        }
      },
      BTC: {
        description: "Pay with Bitcoin",
        name: "Bitcoin",
        icon: "Btc"
      },
      LTC: {
        description: "Pay with Litecoin",
        name: "Litecoin",
        icon: "Ltc"
      },
      ETH: {
        description: "Pay with Ethereum",
        name: "Ethereum",
        icon: "Eth"
      },
      XMR: {
        description: "Pay with Monero",
        name: "Monero",
        icon: "Xmr"
      },
      BNB: {
        description: "Pay with BNB",
        name: "BNB",
        icon: "Bnb"
      },
      TRX: {
        description: "Pay with Tron",
        name: "Tron",
        icon: "Trx"
      },
      MATIC: {
        description: "Pay with Polygon",
        name: "Polygon",
        icon: "Matic"
      },
      ETH_USDT: {
        description: "Pay with USDT ERC20",
        name: "USDT ERC20",
        icon: "Usdt"
      },
      ETH_USDC: {
        description: "Pay with USDC ERC20",
        name: "USDC ERC20",
        icon: "Usdc"
      },
      ETH_UNI: {
        description: "Pay with UNI ERC20",
        name: "Uniswap ERC20",
        icon: "Uni"
      },
      ETH_SHIB: {
        description: "Pay with SHIB ERC20",
        name: "Shiba Inu ERC20",
        icon: "Eth"
      },
      ETH_DAI: {
        description: "Pay with DAI ERC20",
        name: "Dai ERC20",
        icon: "Dai"
      },
      BNB_USDT: {
        description: "Pay with USDT BEP20",
        name: "USDT BEP20",
        icon: "Usdt"
      },
      BNB_USDC: {
        description: "Pay with USDC BEP20",
        name: "USDC BEP20",
        icon: "Usdc"
      },
      TRX_USDT: {
        description: "Pay with USDT TRC20",
        name: "USDT TRC20",
        icon: "Usdt"
      },
      TRX_USDC: {
        description: "Pay with USDC TRC20",
        name: "USDC TRC20",
        icon: "Usdc"
      }
    }, l = e.value.variant.additional_information.map((J) => J.key);
    Ee.additional_information = l.filter((J) => J in Ee.additional_information).reduce((J, be) => (J[be] = Ee.additional_information[be], J), {}), fr(Ee.country) && (Ee.country = e.value.variant.current_country), fr(e.value.email) || (Ee.customer_email = e.value.email);
    const d = () => {
      a.value = !0, Be.value && n({
        type: e.value.variant.discord_request ? "CONNECT_DISCORD" : "FINAL_STEP"
      });
    }, u = (J) => {
      var be, E;
      return J = J.toLowerCase(), ((E = (be = e.value.variant) == null ? void 0 : be.payment_discounts) == null ? void 0 : E[J]) || null;
    }, c = (J) => {
      const be = u(J);
      return be ? be.percentage > 0 || be.fixed > 0 : !1;
    }, f = {
      type: e.value.variant.discord_request ? "CONNECT_DISCORD" : "FINAL_STEP"
    }, m = $(() => !fr(e.value.variant.crypto_options)), b = yr({
      coupon: e.value.coupon ?? "",
      quantity: e.value.quantity ?? 0,
      extra: e.value.extra ?? "0.00"
    }), p = X(e.value.extra !== void 0 && e.value.extra !== "0.00"), v = X(e.value.coupon == "");
    function g(J, be) {
      n([
        {
          type: "UPDATE_CONTEXT",
          [J]: be ?? b[J]
        },
        "FETCH"
      ]);
    }
    const w = X(!1);
    let y = null;
    const k = (J, be) => {
      w.value = !0, y && clearTimeout(y), y = setTimeout(() => {
        n([
          {
            type: "UPDATE_CONTEXT",
            [J]: be ?? b[J]
          },
          "FETCH"
        ]), w.value = !1, y = null;
      }, 500);
    };
    st(
      () => b.quantity,
      (J) => {
        y && clearTimeout(y), y = setTimeout(() => {
          g("quantity", J);
        }, 500);
      }
    );
    const O = $(() => e.value.product), D = $(() => e.value.variant), R = $(() => {
      const J = D.value.price, be = J.match(/([A-Z]{3})\u00a0(.*)/);
      if (be)
        return parseFloat(be[2].replace(/,/g, ""));
      const E = J.match(/[A-Z]{2}\u00a5(.*)/);
      return parseFloat(E ? E[1].replace(/,/g, "") : J.replace(/[^\d.]/g, ""));
    }), W = $(() => {
      const J = D.value.total, be = J.match(/([A-Z]{3})\u00a0(.*)/);
      if (be)
        return parseFloat(be[2].replace(/,/g, ""));
      const E = J.match(/[A-Z]{2}\u00a5(.*)/);
      return parseFloat(E ? E[1].replace(/,/g, "") : J.replace(/[^\d.]/g, ""));
    }), L = $(() => {
      const J = D.value.total, be = J.match(/([A-Z]{3})\u00a0/);
      if (be)
        return be[1];
      const E = J.match(/([A-Z]{2})\u00a5/);
      if (E && E[1] === "CN")
        return "CNY";
      const _e = J.replace(/[\d,.\s]/g, "");
      switch (_e) {
        case "¥":
          return "JPY";
        case "€":
          return "EUR";
        case "£":
          return "GBP";
        case "₹":
          return "INR";
        case "₪":
          return "ILS";
        case "₽":
          return "RUB";
        case "₱":
          return "PHP";
        case "฿":
          return "THB";
      }
      return {
        $: "USD",
        A$: "AUD",
        CA$: "CAD",
        HK$: "HKD",
        MX$: "MXN",
        NT$: "TWD",
        NZ$: "NZD",
        S$: "SGD",
        "¥": "JPY",
        円: "JPY",
        元: "CNY",
        "€": "EUR",
        "£": "GBP",
        DKK: "DKK",
        NOK: "NOK",
        SEK: "SEK",
        "₹": "INR",
        "₪": "ILS",
        "₽": "RUB",
        "₱": "PHP",
        "฿": "THB",
        "₫": "VND",
        R$: "BRL",
        Kč: "CZK",
        "₵": "GHS",
        Ft: "HUF",
        RM: "MYR",
        "₦": "NGN",
        zł: "PLN",
        Fr: "CHF",
        R: "ZAR"
      }[_e] || "USD";
    }), Z = $(() => D.value.stock === !1), q = $(() => t.value.hasTag("fetching")), P = X("fiat"), re = ["BTC", "ETH", "LTC", "XMR", "BNB", "TRX", "MATIC", "ETH_USDT", "ETH_USDC", "ETH_UNI", "ETH_SHIB", "ETH_DAI", "BNB_USDT", "BNB_USDC", "TRX_USDT", "TRX_USDC"], he = ["PAYPAL", "STRIPE", "CASHAPP", "VENMO", "SQUARE", "PADDLE", "PAYSTACK", "AUTHNET"], Te = (J) => re.filter((be) => J.includes(be)), ge = (J) => he.filter((be) => J.includes(be)), G = (J) => Te(J).slice(0, 2), ue = (J) => ge(J).slice(0, 2), ze = (J) => ie(J)[0], Xe = (J) => me(J)[0], ie = (J) => Te(J).slice(2), me = (J) => ge(J).slice(2), Be = $(() => {
      const J = Ee.customer_email && Ee.payment_method && Ee.customer_email.includes("@"), be = e.value.variant.additional_information.filter((E) => E.required).every((E) => {
        const _e = Ee.additional_information[E.key];
        return E.type === "CHECKBOX" ? _e === !0 : _e != null && _e !== "";
      });
      return J && be;
    }), Oe = $(() => G(e.value.variant.crypto_options)), nt = $(() => ue(e.value.variant.payment_processors));
    return bt("hasAttemptedSubmit", a), {
      product: O,
      variant: D,
      send: n,
      data: b,
      context: e,
      orMore: p,
      applyCoupon: v,
      apply: g,
      debouncedApply: k,
      isApplying: w,
      isSoldOut: Z,
      isLoading: q,
      checkout_information: Ee,
      paymentMethods: s,
      getDiscount: u,
      isPositiveDiscount: c,
      next: f,
      showCrypto: m,
      paymentType: P,
      selectedDropdownMethod: r,
      selectedFiatMethod: i,
      defaultCryptoOptions: Oe,
      getFirstTwoOptions: G,
      getThirdOption: ze,
      getRemainingOptions: ie,
      defaultFiatOptions: nt,
      getFirstTwoFiatOptions: ue,
      getThirdFiatOption: Xe,
      getRemainingFiatOptions: me,
      formattedPrice: R,
      formattedTotal: W,
      currencyCode: L,
      isDescriptionOpen: o,
      isValidInput: Be,
      hasAttemptedSubmit: a,
      handleClick: d
    };
  }
}), E3 = { class: "embed:relative" }, C3 = { class: "embed:flex embed:flex-col embed:px-4 embed:pt-5 embed:pb-4 embed:sm:p-6 embed:space-y-3" }, T3 = { class: "embed:space-y-3" }, O3 = { class: "embed:flex embed:items-stretch embed:min-h-24" }, A3 = {
  key: 0,
  class: "embed:h-24 embed:w-28 embed:min-h-[6rem] embed:shrink-0 embed:rounded-lg embed:overflow-hidden embed:bg-inherit embed:mr-4"
}, D3 = ["src", "alt"], P3 = { class: "embed:flex embed:flex-col embed:text-left embed:w-full embed:justify-between" }, M3 = { class: "embed:space-y-px" }, $3 = ["innerHTML"], L3 = { class: "embed:flex embed:flex-row embed:gap-2 embed:items-center" }, F3 = {
  key: 0,
  class: "embed:text-md embed:font-normal embed:text-black embed:dark:text-white embed:line-through"
}, N3 = { class: "embed:text-md embed:text-black embed:dark:text-white embed:font-bold" }, z3 = {
  key: 0,
  class: "embed:flex embed:flex-row embed:items-center embed:justify-between embed:mt-2"
}, I3 = { class: "embed:flex embed:space-x-2" }, R3 = ["textContent"], j3 = { class: "embed:inline-block embed:text-left embed:text-xs embed:text-black embed:dark:text-white embed:space-x-1" }, V3 = {
  key: 0,
  class: "embed:text-lg"
}, U3 = { key: 1 }, B3 = ["textContent"], H3 = { class: "embed:text-left" }, q3 = {
  key: 0,
  class: "embed:flex embed:flex-row embed:gap-2 embed:bg-zinc-50 embed:dark:bg-zinc-950 embed:p-1 embed:rounded-md"
}, W3 = { class: "embed:flex embed:flex-row embed:justify-center embed:gap-4" }, G3 = { class: "embed:flex embed:items-center" }, K3 = { class: "embed:text-sm embed:w-full" }, Y3 = { class: "embed:flex embed:justify-center embed:flex-row embed:gap-2 embed:items-center embed:w-full" }, X3 = {
  key: 0,
  class: "embed:text-[0.65rem] embed:text-zinc-500 embed:dark:text-zinc-400 embed:font-normal"
}, Z3 = { class: "embed:flex embed:items-center" }, J3 = { class: "embed:text-sm embed:w-full" }, Q3 = { class: "embed:flex embed:justify-center embed:flex-row embed:gap-2 embed:items-center embed:w-full" }, e4 = {
  key: 0,
  class: "embed:text-[0.65rem] embed:text-zinc-500 embed:dark:text-zinc-400 embed:font-normal"
}, t4 = { class: "embed:flex embed:flex-col embed:items-center embed:justify-center embed:h-full embed:w-8" }, n4 = { class: "embed:flex embed:flex-col" }, r4 = { class: "embed:flex embed:items-center" }, i4 = { class: "embed:block embed:truncate embed:text-sm" }, o4 = {
  key: 0,
  class: "embed:text-xs embed:text-zinc-500 embed:dark:text-zinc-400 embed:text-left"
}, a4 = { class: "embed:flex embed:items-center" }, s4 = { class: "embed:text-sm embed:w-full" }, l4 = { class: "embed:flex embed:justify-center embed:flex-row embed:gap-2 embed:items-center embed:w-full" }, d4 = {
  key: 0,
  class: "embed:text-[0.65rem] embed:text-zinc-500 embed:dark:text-zinc-400 embed:font-normal"
}, u4 = { class: "embed:flex embed:items-center" }, c4 = { class: "embed:text-sm embed:w-full" }, f4 = { class: "embed:flex embed:justify-center embed:flex-row embed:gap-2 embed:items-center embed:w-full" }, m4 = {
  key: 0,
  class: "embed:text-[0.65rem] embed:text-zinc-500 embed:dark:text-zinc-400 embed:font-normal"
}, p4 = { class: "embed:flex embed:flex-col embed:items-center embed:justify-center embed:h-full embed:w-8" }, h4 = { class: "embed:flex embed:items-center" }, b4 = { class: "embed:block embed:truncate embed:text-sm" }, g4 = {
  key: 0,
  class: "embed:text-xs embed:text-zinc-500 embed:dark:text-zinc-400 embed:text-left"
}, v4 = {
  key: 0,
  class: "embed:text-left embed:space-y-2"
}, y4 = {
  key: 1,
  class: "embed:pt-3 embed:text-left embed:flex embed:flex-col embed:gap-3"
}, w4 = { key: 0 }, x4 = { class: "embed:flex embed:flex-row embed:items-center embed:justify-center embed:gap-2" }, k4 = { class: "embed:flex embed:flex-col embed:gap-1 embed:rounded-md embed:shadow-sm embed:shrink-0 embed:pt-4" }, _4 = { class: "embed:relative" }, S4 = { class: "embed:flex embed:rounded-md" }, E4 = { class: "embed:relative embed:flex embed:items-stretch embed:grow embed:focus-within:z-10" }, C4 = ["textContent"], T4 = {
  key: 3,
  class: "embed:mt-3 embed:w-full embed:mx-auto embed:text-center embed:p-2 embed:bg-emerald-600 embed:dark:bg-emerald-900 embed:text-white embed:text-xs embed:rounded-full"
}, O4 = {
  key: 2,
  class: "embed:flex embed:flex-col embed:gap-1"
}, A4 = { class: "embed:flex embed:flex-col embed:space-y-2" }, D4 = {
  key: 0,
  class: "embed:p-2 embed:bg-zinc-50 embed:text-xs embed:dark:bg-zinc-950 embed:rounded-lg embed:text-red-600 embed:dark:text-red-400 embed:text-center"
}, P4 = { key: 0 }, M4 = { key: 1 }, $4 = { key: 2 }, L4 = ["innerHTML"], F4 = { class: "embed:flex embed:flex-col embed:gap-1 embed:rounded-md embed:pt-4" }, N4 = { class: "embed:relative embed:mx-auto embed:items-center embed:w-1/2" }, z4 = { class: "embed:flex embed:rounded-md embed:w-full" }, I4 = { class: "embed:relative embed:flex embed:items-stretch embed:grow embed:focus-within:z-10" }, R4 = ["textContent"], j4 = { class: "embed:dark:bg-zinc-950 embed:bg-zinc-50 embed:rounded-t-2xl embed:py-4 embed:flex embed:flex-row embed:justify-center embed:items-center embed:gap-2" }, V4 = { key: 1 };
function U4(e, t, n, r, i, o) {
  var W, L, Z, q, P, re, he, Te, ge;
  const a = oe("DialogTitle"), s = oe("NumberFlow"), l = oe("NumberInput"), d = oe("EnvelopeIcon"), u = oe("InputGroup"), c = oe("CryptoIcon"), f = oe("RadioGroupLabel"), m = oe("RadioGroupOption"), b = oe("font-awesome-icon"), p = oe("ListboxButton"), v = oe("RenderIcon"), g = oe("ListboxOption"), w = oe("ListboxOptions"), y = oe("Listbox"), k = oe("RadioGroup"), O = oe("AdditionalInformation"), D = oe("MyButton"), R = oe("Drawer");
  return S(), T("div", E3, [
    _("div", C3, [
      H(k, {
        modelValue: e.checkout_information.payment_method,
        "onUpdate:modelValue": t[8] || (t[8] = (G) => e.checkout_information.payment_method = G)
      }, {
        default: te(() => {
          var G, ue, ze, Xe, ie, me, Be, Oe, nt, J, be;
          return [
            _("div", T3, [
              _("div", O3, [
                ((G = e.variant.images) == null ? void 0 : G.length) > 0 ? (S(), T("div", A3, [
                  _("img", {
                    class: "embed:object-contain embed:h-full embed:w-full",
                    src: e.variant.images[0],
                    alt: e.variant.title
                  }, null, 8, D3)
                ])) : Q("", !0),
                _("div", P3, [
                  _("div", M3, [
                    H(a, {
                      as: "h1",
                      class: "embed:font-bold embed:text-black embed:dark:text-white embed:text-xl"
                    }, {
                      default: te(() => [
                        ee(A(e.product.title), 1)
                      ]),
                      _: 1
                    }),
                    e.variant.description !== "Default Variant" && e.variant.description !== "default variant" ? (S(), T("p", {
                      key: 0,
                      class: "embed:dark:text-zinc-400 embed:text-xs",
                      innerHTML: e.variant.description
                    }, null, 8, $3)) : Q("", !0),
                    _("div", L3, [
                      e.variant.price !== e.variant.total ? (S(), T("div", F3, [
                        H(s, {
                          value: e.formattedPrice,
                          format: {
                            style: "currency",
                            currency: e.currencyCode,
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          },
                          class: "embed:pointer-events-none embed:line-through",
                          animated: !0
                        }, null, 8, ["value", "format"])
                      ])) : Q("", !0),
                      _("div", N3, [
                        H(s, {
                          value: e.formattedTotal,
                          format: {
                            style: "currency",
                            currency: e.currencyCode,
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          },
                          class: "embed:pointer-events-none",
                          animated: !0
                        }, null, 8, ["value", "format"])
                      ])
                    ])
                  ]),
                  e.variant.visibility == "PUBLIC" || e.variant.visibility == "HIDDEN" ? (S(), T("div", z3, [
                    _("div", I3, [
                      H(l, {
                        modelValue: e.data.quantity,
                        "onUpdate:modelValue": t[0] || (t[0] = (E) => e.data.quantity = E),
                        min: e.variant.minimum_purchase_quantity,
                        max: e.variant.maximum_purchase_quantity
                      }, null, 8, ["modelValue", "min", "max"]),
                      (Xe = (ze = (ue = e.context.error) == null ? void 0 : ue.errors) == null ? void 0 : ze.quantity) != null && Xe[0] ? (S(), T("p", {
                        key: 0,
                        class: "embed:text-sm embed:text-red-600 embed:dark:text-red embed:w-full",
                        textContent: A((me = (ie = e.context.error) == null ? void 0 : ie.errors) == null ? void 0 : me.quantity[0])
                      }, null, 8, R3)) : Q("", !0)
                    ]),
                    _("p", j3, [
                      e.variant.stock ? (S(), T("span", U3, A(e.variant.stock), 1)) : (S(), T("span", V3, "0")),
                      t[22] || (t[22] = _("span", null, "available ", -1))
                    ]),
                    (nt = (Oe = (Be = e.context.error) == null ? void 0 : Be.errors) == null ? void 0 : Oe.quantity) != null && nt[0] ? (S(), T("p", {
                      key: 0,
                      class: "embed:ml-1.5 embed:text-left embed:text-sm embed:text-red-600 embed:dark:text-red embed:w-full",
                      textContent: A((be = (J = e.context.error) == null ? void 0 : J.errors) == null ? void 0 : be.quantity[0])
                    }, null, 8, B3)) : Q("", !0)
                  ])) : Q("", !0)
                ])
              ]),
              _("div", H3, [
                H(u, {
                  modelValue: e.checkout_information.customer_email,
                  "onUpdate:modelValue": t[1] || (t[1] = (E) => e.checkout_information.customer_email = E),
                  "error-key": "customer_email",
                  type: "email",
                  label: "Email",
                  placeholder: "example@example.com",
                  class: "embed:dark:bg-zinc-950"
                }, {
                  icon: te(() => [
                    H(d, {
                      class: "embed:h-5 embed:w-5 embed:text-zinc-500",
                      "aria-hidden": "true"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              e.showCrypto && e.context.variant.payment_processors.length > 0 ? (S(), T("div", q3, [
                _("button", {
                  class: ye([{ "embed:dark:bg-transparent embed:shadow-sm embed:shadow-emerald-200 embed:dark:shadow-emerald-900 embed:[background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.200)_25%,_theme(colors.green.200)_75%,_theme(colors.emerald.500)_100%)_border-box] embed:dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed:text-black embed:dark:text-white": e.paymentType === "fiat", "embed:text-zinc-500 embed:hover:text-zinc-900 embed:dark:hover:text-zinc-100": e.paymentType !== "fiat" }, "embed:py-2 embed:px-4 embed:focus:outline-hidden embed:p-2 embed:rounded-sm embed:w-full embed:transition embed:duration-200 embed:ease-in-out embed:border embed:border-transparent embed:font-medium embed:text-sm"]),
                  onClick: t[2] || (t[2] = (E) => e.paymentType = "fiat")
                }, " Pay with Credit & Debit ", 2),
                _("button", {
                  class: ye([{ "embed:dark:bg-transparent embed:shadow-sm embed:shadow-emerald-200 embed:dark:shadow-emerald-900 embed:[background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.200)_25%,_theme(colors.green.200)_75%,_theme(colors.emerald.500)_100%)_border-box] embed:dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed:text-black embed:dark:text-white": e.paymentType === "crypto", "embed:text-zinc-500 embed:hover:text-zinc-900 embed:dark:hover:text-zinc-100": e.paymentType !== "crypto" }, "embed:py-2 embed:px-4 embed:focus:outline-hidden embed:p-2 embed:rounded-sm embed:w-full embed:transition embed:duration-200 embed:ease-in-out embed:border embed:border-transparent embed:font-medium embed:text-sm"]),
                  onClick: t[3] || (t[3] = (E) => e.paymentType = "crypto")
                }, " Pay with Crypto ", 2)
              ])) : Q("", !0),
              _("div", W3, [
                e.showCrypto && e.context.variant.payment_processors.length === 0 || e.paymentType === "crypto" ? (S(), T(U, { key: 0 }, [
                  (S(!0), T(U, null, yn(e.getFirstTwoOptions(e.context.variant.crypto_options), (E) => (S(), ke(m, {
                    key: E,
                    as: "template",
                    value: E
                  }, {
                    default: te(({ checked: _e }) => [
                      _("div", {
                        class: ye(["embed:flex embed:flex-col embed:border-2 embed:border-transparent embed:shadow-inner embed:w-28 embed:min-h-[6rem]", [
                          _e ? "embed:[background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.300)_25%,_theme(colors.green.300)_75%,_theme(colors.emerald.500)_100%)_border-box] embed:dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed:shadow-emerald-200 embed:dark:shadow-emerald-900" : "embed:hover:border-emerald-200 embed:dark:hover:border-emerald-950 embed:shadow-emerald-100 embed:hover:shadow-emerald-200 embed:focus:shadow-emerald-200 embed:dark:shadow-emerald-950 embed:dark:hover:shadow-emerald-900 embed:dark:focus:shadow-emerald-900 embed:bg-white embed:dark:bg-zinc-950",
                          "embed:transition embed:duration-300 embed:ease-in-out embed:relative embed:rounded-lg embed:px-3 embed:py-2 embed:cursor-pointer embed:sm:flex embed:sm:justify-between embed:focus:outline-hidden"
                        ]])
                      }, [
                        _("div", G3, [
                          _("div", K3, [
                            H(f, {
                              as: "p",
                              class: "embed:flex embed:flex-col embed:items-center embed:font-medium embed:text-black embed:dark:text-white embed:gap-1 embed:py-0.5"
                            }, {
                              default: te(() => {
                                var We, ut;
                                return [
                                  _("span", Y3, [
                                    H(c, {
                                      symbol: (We = e.paymentMethods) == null ? void 0 : We[E].icon,
                                      size: "24",
                                      class: ye(["embed:w-8 embed:h-8", [_e ? "embed:text-black embed:dark:text-white" : "embed:text-zinc-600 embed:dark:text-zinc-300"]])
                                    }, null, 8, ["symbol", "class"])
                                  ]),
                                  _("span", {
                                    class: ye(["embed:capitalize embed:text-xs", [_e ? "embed:text-black embed:dark:text-white embed:font-bold" : "embed:text-zinc-700 embed:dark:text-zinc-300"]])
                                  }, [
                                    ee(A((ut = e.paymentMethods) == null ? void 0 : ut[E].name) + " ", 1),
                                    e.getDiscount(E) ? (S(), T("div", X3, [
                                      e.isPositiveDiscount(E) ? (S(), T(U, { key: 0 }, [
                                        e.getDiscount(E).percentage && e.getDiscount(E).fixed ? (S(), T(U, { key: 0 }, [
                                          ee(A(Math.abs(e.getDiscount(E).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " off", 1)
                                        ], 64)) : e.getDiscount(E).percentage ? (S(), T(U, { key: 1 }, [
                                          ee(A(Math.abs(e.getDiscount(E).percentage)) + "% off", 1)
                                        ], 64)) : e.getDiscount(E).fixed ? (S(), T(U, { key: 2 }, [
                                          ee(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " off", 1)
                                        ], 64)) : Q("", !0)
                                      ], 64)) : (S(), T(U, { key: 1 }, [
                                        e.getDiscount(E).percentage && e.getDiscount(E).fixed ? (S(), T(U, { key: 0 }, [
                                          ee(A(Math.abs(e.getDiscount(E).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " fee", 1)
                                        ], 64)) : e.getDiscount(E).percentage ? (S(), T(U, { key: 1 }, [
                                          ee(A(Math.abs(e.getDiscount(E).percentage)) + "% fee", 1)
                                        ], 64)) : e.getDiscount(E).fixed ? (S(), T(U, { key: 2 }, [
                                          ee(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " fee", 1)
                                        ], 64)) : Q("", !0)
                                      ], 64))
                                    ])) : Q("", !0)
                                  ], 2)
                                ];
                              }),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        t[23] || (t[23] = _("div", {
                          class: "embed:absolute embed:-inset-px embed:rounded-lg embed:pointer-events-none",
                          "aria-hidden": "true"
                        }, null, -1))
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["value"]))), 128)),
                  e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options) ? (S(), ke(m, {
                    key: e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options),
                    value: e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)
                  }, {
                    default: te(({ checked: E }) => [
                      _("div", {
                        class: ye(["embed:flex embed:flex-col embed:border-2 embed:border-transparent embed:shadow-inner embed:w-28 embed:min-h-[6rem]", [
                          E ? "embed:[background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.300)_25%,_theme(colors.green.300)_75%,_theme(colors.emerald.500)_100%)_border-box] embed:dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed:shadow-emerald-200 embed:dark:shadow-emerald-900" : "embed:hover:border-emerald-200 embed:dark:hover:border-emerald-950 embed:shadow-emerald-100 embed:hover:shadow-emerald-200 embed:focus:shadow-emerald-200 embed:dark:shadow-emerald-950 embed:dark:hover:shadow-emerald-900 embed:dark:focus:shadow-emerald-900 embed:bg-white embed:dark:bg-zinc-950",
                          "embed:transition embed:duration-300 embed:ease-in-out embed:relative embed:rounded-lg embed:px-3 embed:py-2 embed:cursor-pointer embed:sm:flex embed:sm:justify-between embed:focus:outline-hidden"
                        ]])
                      }, [
                        _("div", Z3, [
                          _("div", J3, [
                            H(f, {
                              as: "p",
                              class: "embed:flex embed:flex-col embed:items-center embed:font-medium embed:text-black embed:dark:text-white embed:gap-1 embed:py-0.5"
                            }, {
                              default: te(() => {
                                var _e, We;
                                return [
                                  _("span", Q3, [
                                    H(c, {
                                      symbol: (_e = e.paymentMethods) == null ? void 0 : _e[e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)].icon,
                                      size: "24",
                                      class: "embed:w-8 embed:h-8"
                                    }, null, 8, ["symbol"])
                                  ]),
                                  _("span", {
                                    class: ye(["embed:capitalize embed:text-xs", [E ? "embed:text-black embed:dark:text-white embed:font-bold" : "embed:text-zinc-700 embed:dark:text-zinc-300"]])
                                  }, [
                                    ee(A((We = e.paymentMethods) == null ? void 0 : We[e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)].name) + " ", 1),
                                    e.getThirdOption(e.context.variant.crypto_options) && e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)) ? (S(), T("div", e4, [
                                      e.isPositiveDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)) ? (S(), T(U, { key: 0 }, [
                                        e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage && e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed ? (S(), T(U, { key: 0 }, [
                                          ee(A(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed)) + " off", 1)
                                        ], 64)) : e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage ? (S(), T(U, { key: 1 }, [
                                          ee(A(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage)) + "% off", 1)
                                        ], 64)) : e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed ? (S(), T(U, { key: 2 }, [
                                          ee(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed)) + " off", 1)
                                        ], 64)) : Q("", !0)
                                      ], 64)) : (S(), T(U, { key: 1 }, [
                                        e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage && e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed ? (S(), T(U, { key: 0 }, [
                                          ee(A(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed)) + " fee", 1)
                                        ], 64)) : e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage ? (S(), T(U, { key: 1 }, [
                                          ee(A(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage)) + "% fee", 1)
                                        ], 64)) : e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed ? (S(), T(U, { key: 2 }, [
                                          ee(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed)) + " fee", 1)
                                        ], 64)) : Q("", !0)
                                      ], 64))
                                    ])) : Q("", !0)
                                  ], 2)
                                ];
                              }),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        t[24] || (t[24] = _("div", {
                          class: "embed:absolute embed:-inset-px embed:rounded-lg embed:pointer-events-none",
                          "aria-hidden": "true"
                        }, null, -1))
                      ], 2)
                    ]),
                    _: 1
                  }, 8, ["value"])) : Q("", !0),
                  e.getRemainingOptions(e.context.variant.crypto_options).length > 1 ? (S(), ke(y, {
                    key: 1,
                    modelValue: e.selectedDropdownMethod,
                    "onUpdate:modelValue": [
                      t[4] || (t[4] = (E) => e.selectedDropdownMethod = E),
                      t[5] || (t[5] = (E) => e.checkout_information.payment_method = E)
                    ],
                    as: "div",
                    class: "embed:relative"
                  }, {
                    default: te(() => [
                      H(p, { class: "embed:h-full embed:flex embed:flex-col embed:dark:border embed:dark:border-transparent embed:shadow-inner embed:bg-white embed:dark:bg-zinc-950 embed:transition embed:duration-300 embed:ease-in-out embed:relative embed:rounded-lg embed:px-3 embed:py-2 embed:cursor-pointer embed:focus:outline-hidden embed:ml-auto" }, {
                        default: te(() => {
                          var E, _e;
                          return [
                            _("span", t4, [
                              e.getRemainingOptions(e.context.variant.crypto_options).length > 1 && ((_e = (E = e.paymentMethods) == null ? void 0 : E[e.selectedDropdownMethod || (e.selectedDropdownMethod === e.getThirdOption(e.context.variant.crypto_options) ? e.getRemainingOptions(e.context.variant.crypto_options)[1] : e.getRemainingOptions(e.context.variant.crypto_options)[0])]) != null && _e.icon) ? (S(), ke(c, {
                                key: 0,
                                symbol: e.paymentMethods[e.selectedDropdownMethod === e.getThirdOption(e.context.variant.crypto_options) ? e.getRemainingOptions(e.context.variant.crypto_options)[1] : e.selectedDropdownMethod ? e.getRemainingOptions(e.context.variant.crypto_options)[0] : e.getRemainingOptions(e.context.variant.crypto_options)[1]].icon,
                                size: "24",
                                class: "embed:w-5 embed:h-5"
                              }, null, 8, ["symbol"])) : Q("", !0),
                              H(b, {
                                icon: "chevron-down",
                                class: "embed:w-4 embed:h-4 embed:text-zinc-600 embed:dark:text-zinc-300"
                              })
                            ])
                          ];
                        }),
                        _: 1
                      }),
                      H(ur, {
                        "leave-active-class": "embed:transition embed:duration-100 embed:ease-in",
                        "leave-from-class": "embed:opacity-100",
                        "leave-to-class": "embed:opacity-0"
                      }, {
                        default: te(() => [
                          H(w, { class: "embed:absolute embed:z-10 embed:mt-1 embed:w-48 embed:bg-white embed:dark:bg-zinc-900 embed:rounded-md embed:shadow-zinc-400 embed:dark:shadow-black embed:border embed:border-zinc-300 embed:dark:border-zinc-950 embed:shadow-lg embed:max-h-60 embed:overflow-auto embed:[scrollbar-width:none] embed:[-ms-overflow-style:none] embed:[&::-webkit-scrollbar]:hidden embed:py-1 embed:right-1 embed:mr-2" }, {
                            default: te(() => [
                              (S(!0), T(U, null, yn(e.getRemainingOptions(e.context.variant.crypto_options), (E) => (S(), ke(g, {
                                key: E,
                                value: E,
                                as: "template"
                              }, {
                                default: te(({ active: _e, selected: We }) => {
                                  var ut, h, x;
                                  return [
                                    _("li", {
                                      class: ye(["embed:cursor-pointer embed:select-none embed:relative embed:py-2 embed:px-4", [_e ? "embed:bg-zinc-100 embed:dark:bg-zinc-800" : "", We ? "embed:text-black embed:dark:text-white" : "embed:text-zinc-700 embed:dark:text-zinc-300"]])
                                    }, [
                                      _("div", n4, [
                                        _("div", r4, [
                                          (h = (ut = e.paymentMethods) == null ? void 0 : ut[E]) != null && h.icon ? (S(), ke(v, {
                                            key: 0,
                                            config: e.paymentMethods[E].icon,
                                            "extra-classes": ["embed:w-6 embed:h-6 embed:mr-3 embed:flex embed:items-center"]
                                          }, null, 8, ["config"])) : Q("", !0),
                                          _("span", i4, [
                                            ee(A((x = e.paymentMethods) == null ? void 0 : x[E].name) + " ", 1),
                                            e.getDiscount(E) ? (S(), T("div", o4, [
                                              e.isPositiveDiscount(E) ? (S(), T(U, { key: 0 }, [
                                                e.getDiscount(E).percentage && e.getDiscount(E).fixed ? (S(), T(U, { key: 0 }, [
                                                  ee(A(Math.abs(e.getDiscount(E).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " off", 1)
                                                ], 64)) : e.getDiscount(E).percentage ? (S(), T(U, { key: 1 }, [
                                                  ee(A(Math.abs(e.getDiscount(E).percentage)) + "% off", 1)
                                                ], 64)) : e.getDiscount(E).fixed ? (S(), T(U, { key: 2 }, [
                                                  ee(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " off", 1)
                                                ], 64)) : Q("", !0)
                                              ], 64)) : (S(), T(U, { key: 1 }, [
                                                e.getDiscount(E).percentage && e.getDiscount(E).fixed ? (S(), T(U, { key: 0 }, [
                                                  ee(A(Math.abs(e.getDiscount(E).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " fee", 1)
                                                ], 64)) : e.getDiscount(E).percentage ? (S(), T(U, { key: 1 }, [
                                                  ee(A(Math.abs(e.getDiscount(E).percentage)) + "% fee", 1)
                                                ], 64)) : e.getDiscount(E).fixed ? (S(), T(U, { key: 2 }, [
                                                  ee(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " fee", 1)
                                                ], 64)) : Q("", !0)
                                              ], 64))
                                            ])) : Q("", !0)
                                          ])
                                        ])
                                      ])
                                    ], 2)
                                  ];
                                }),
                                _: 2
                              }, 1032, ["value"]))), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])) : Q("", !0)
                ], 64)) : (S(), T(U, { key: 1 }, [
                  (S(!0), T(U, null, yn(e.getFirstTwoFiatOptions(e.context.variant.payment_processors), (E) => (S(), ke(m, {
                    key: E,
                    as: "template",
                    value: E
                  }, {
                    default: te(({ checked: _e }) => [
                      _("div", {
                        class: ye(["embed:flex embed:flex-col embed:border-2 embed:border-transparent embed:shadow-inner embed:w-28 embed:min-h-[6rem]", [
                          _e ? "embed:[background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.300)_25%,_theme(colors.green.300)_75%,_theme(colors.emerald.500)_100%)_border-box] embed:dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed:shadow-emerald-200 embed:dark:shadow-emerald-900" : "embed:hover:border-emerald-200 embed:dark:hover:border-emerald-950 embed:shadow-emerald-100 embed:hover:shadow-emerald-200 embed:focus:shadow-emerald-200 embed:dark:shadow-emerald-950 embed:dark:hover:shadow-emerald-900 embed:dark:focus:shadow-emerald-900 embed:bg-white embed:dark:bg-zinc-950",
                          "embed:transition embed:duration-300 embed:ease-in-out embed:relative embed:rounded-lg embed:px-3 embed:py-2 embed:cursor-pointer embed:sm:flex embed:sm:justify-between embed:focus:outline-hidden"
                        ]])
                      }, [
                        _("div", a4, [
                          _("div", s4, [
                            H(f, {
                              as: "p",
                              class: "embed:flex embed:flex-col embed:items-center embed:font-medium embed:text-black embed:dark:text-white embed:gap-1 embed:py-0.5"
                            }, {
                              default: te(() => {
                                var We, ut, h;
                                return [
                                  _("span", l4, [
                                    (ut = (We = e.paymentMethods) == null ? void 0 : We[E]) != null && ut.icon ? (S(), ke(v, {
                                      key: 0,
                                      config: e.paymentMethods[E].icon,
                                      "extra-classes": ["embed:flex embed:items-center"]
                                    }, null, 8, ["config"])) : Q("", !0)
                                  ]),
                                  _("span", {
                                    class: ye(["embed:capitalize embed:text-xs", [_e ? "embed:text-black embed:dark:text-white embed:font-bold" : "embed:text-zinc-700 embed:dark:text-zinc-300"]])
                                  }, [
                                    ee(A((h = e.paymentMethods) == null ? void 0 : h[E].name) + " ", 1),
                                    e.getDiscount(E) ? (S(), T("div", d4, [
                                      e.isPositiveDiscount(E) ? (S(), T(U, { key: 0 }, [
                                        e.getDiscount(E).percentage && e.getDiscount(E).fixed ? (S(), T(U, { key: 0 }, [
                                          ee(A(Math.abs(e.getDiscount(E).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " off", 1)
                                        ], 64)) : e.getDiscount(E).percentage ? (S(), T(U, { key: 1 }, [
                                          ee(A(Math.abs(e.getDiscount(E).percentage)) + "% off", 1)
                                        ], 64)) : e.getDiscount(E).fixed ? (S(), T(U, { key: 2 }, [
                                          ee(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " off", 1)
                                        ], 64)) : Q("", !0)
                                      ], 64)) : (S(), T(U, { key: 1 }, [
                                        e.getDiscount(E).percentage && e.getDiscount(E).fixed ? (S(), T(U, { key: 0 }, [
                                          ee(A(Math.abs(e.getDiscount(E).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " fee", 1)
                                        ], 64)) : e.getDiscount(E).percentage ? (S(), T(U, { key: 1 }, [
                                          ee(A(Math.abs(e.getDiscount(E).percentage)) + "% fee", 1)
                                        ], 64)) : e.getDiscount(E).fixed ? (S(), T(U, { key: 2 }, [
                                          ee(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " fee", 1)
                                        ], 64)) : Q("", !0)
                                      ], 64))
                                    ])) : Q("", !0)
                                  ], 2)
                                ];
                              }),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        t[25] || (t[25] = _("div", {
                          class: "embed:absolute embed:-inset-px embed:rounded-lg embed:pointer-events-none",
                          "aria-hidden": "true"
                        }, null, -1))
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["value"]))), 128)),
                  e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors) ? (S(), ke(m, {
                    key: e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors),
                    value: e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)
                  }, {
                    default: te(({ checked: E }) => [
                      _("div", {
                        class: ye(["embed:flex embed:flex-col embed:border-2 embed:border-transparent embed:shadow-inner embed:w-28 embed:min-h-[6rem]", [
                          E ? "embed:[background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.300)_25%,_theme(colors.green.300)_75%,_theme(colors.emerald.500)_100%)_border-box] embed:dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed:shadow-emerald-200 embed:dark:shadow-emerald-900" : "embed:hover:border-emerald-200 embed:dark:hover:border-emerald-950 embed:shadow-emerald-100 embed:hover:shadow-emerald-200 embed:focus:shadow-emerald-200 embed:dark:shadow-emerald-950 embed:dark:hover:shadow-emerald-900 embed:dark:focus:shadow-emerald-900 embed:bg-white embed:dark:bg-zinc-950",
                          "embed:transition embed:duration-300 embed:ease-in-out embed:relative embed:rounded-lg embed:px-3 embed:py-2 embed:cursor-pointer embed:sm:flex embed:sm:justify-between embed:focus:outline-hidden"
                        ]])
                      }, [
                        _("div", u4, [
                          _("div", c4, [
                            H(f, {
                              as: "p",
                              class: "embed:flex embed:flex-col embed:items-center embed:font-medium embed:text-black embed:dark:text-white embed:gap-1 embed:py-0.5"
                            }, {
                              default: te(() => {
                                var _e, We, ut;
                                return [
                                  _("span", f4, [
                                    (We = (_e = e.paymentMethods) == null ? void 0 : _e[e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)]) != null && We.icon ? (S(), ke(v, {
                                      key: 0,
                                      config: e.paymentMethods[e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)].icon,
                                      "extra-classes": ["embed:flex embed:items-center"]
                                    }, null, 8, ["config"])) : Q("", !0)
                                  ]),
                                  _("span", {
                                    class: ye(["embed:capitalize embed:text-xs", [E ? "embed:text-black embed:dark:text-white embed:font-bold" : "embed:text-zinc-700 embed:dark:text-zinc-300"]])
                                  }, [
                                    ee(A((ut = e.paymentMethods) == null ? void 0 : ut[e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)].name) + " ", 1),
                                    e.getThirdFiatOption(e.context.variant.payment_processors) && e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)) ? (S(), T("div", m4, [
                                      e.isPositiveDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)) ? (S(), T(U, { key: 0 }, [
                                        e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage && e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed ? (S(), T(U, { key: 0 }, [
                                          ee(A(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed)) + " off", 1)
                                        ], 64)) : e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage ? (S(), T(U, { key: 1 }, [
                                          ee(A(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage)) + "% off", 1)
                                        ], 64)) : e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed ? (S(), T(U, { key: 2 }, [
                                          ee(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed)) + " off", 1)
                                        ], 64)) : Q("", !0)
                                      ], 64)) : (S(), T(U, { key: 1 }, [
                                        e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage && e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed ? (S(), T(U, { key: 0 }, [
                                          ee(A(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed)) + " fee", 1)
                                        ], 64)) : e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage ? (S(), T(U, { key: 1 }, [
                                          ee(A(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage)) + "% fee", 1)
                                        ], 64)) : e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed ? (S(), T(U, { key: 2 }, [
                                          ee(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed)) + " fee", 1)
                                        ], 64)) : Q("", !0)
                                      ], 64))
                                    ])) : Q("", !0)
                                  ], 2)
                                ];
                              }),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        t[26] || (t[26] = _("div", {
                          class: "embed:absolute embed:-inset-px embed:rounded-lg embed:pointer-events-none",
                          "aria-hidden": "true"
                        }, null, -1))
                      ], 2)
                    ]),
                    _: 1
                  }, 8, ["value"])) : Q("", !0),
                  e.getRemainingFiatOptions(e.context.variant.payment_processors).length > 1 ? (S(), ke(y, {
                    key: 1,
                    modelValue: e.selectedFiatMethod,
                    "onUpdate:modelValue": [
                      t[6] || (t[6] = (E) => e.selectedFiatMethod = E),
                      t[7] || (t[7] = (E) => e.checkout_information.payment_method = E)
                    ],
                    as: "div",
                    class: "embed:relative"
                  }, {
                    default: te(() => [
                      H(p, { class: "embed:h-full embed:flex embed:flex-col embed:dark:border embed:dark:border-transparent embed:shadow-inner embed:bg-white embed:dark:bg-zinc-950 embed:transition embed:duration-300 embed:ease-in-out embed:relative embed:rounded-lg embed:px-3 embed:py-2 embed:cursor-pointer embed:focus:outline-hidden embed:ml-auto" }, {
                        default: te(() => {
                          var E, _e;
                          return [
                            _("span", p4, [
                              e.getRemainingFiatOptions(e.context.variant.payment_processors).length > 1 && ((_e = (E = e.paymentMethods) == null ? void 0 : E[e.selectedFiatMethod || (e.selectedFiatMethod === e.getThirdFiatOption(e.context.variant.payment_processors) ? e.getRemainingFiatOptions(e.context.variant.payment_processors)[1] : e.getRemainingFiatOptions(e.context.variant.payment_processors)[0])]) != null && _e.icon) ? (S(), ke(v, {
                                key: 0,
                                config: e.paymentMethods[e.selectedFiatMethod === e.getThirdFiatOption(e.context.variant.payment_processors) ? e.getRemainingFiatOptions(e.context.variant.payment_processors)[1] : e.selectedFiatMethod ? e.getRemainingFiatOptions(e.context.variant.payment_processors)[0] : e.getRemainingFiatOptions(e.context.variant.payment_processors)[1]].icon,
                                "extra-classes": ["embed:flex embed:items-center"]
                              }, null, 8, ["config"])) : Q("", !0),
                              H(b, {
                                icon: "chevron-down",
                                class: "embed:w-4 embed:h-4 embed:text-zinc-600 embed:dark:text-zinc-300"
                              })
                            ])
                          ];
                        }),
                        _: 1
                      }),
                      H(ur, {
                        "leave-active-class": "embed:transition embed:duration-100 embed:ease-in",
                        "leave-from-class": "embed:opacity-100",
                        "leave-to-class": "embed:opacity-0"
                      }, {
                        default: te(() => [
                          H(w, { class: "embed:absolute embed:z-10 embed:mt-1 embed:w-48 embed:bg-white embed:dark:bg-zinc-900 embed:rounded-md embed:shadow-zinc-400 embed:dark:shadow-black embed:border embed:border-zinc-300 embed:dark:border-zinc-950 embed:shadow-lg embed:max-h-60 embed:overflow-auto embed:[scrollbar-width:none] embed:[-ms-overflow-style:none] embed:[&::-webkit-scrollbar]:hidden embed:py-1 embed:right-1 embed:mr-2" }, {
                            default: te(() => [
                              (S(!0), T(U, null, yn(e.getRemainingFiatOptions(e.context.variant.payment_processors), (E) => (S(), ke(g, {
                                key: E,
                                value: E,
                                as: "template"
                              }, {
                                default: te(({ active: _e, selected: We }) => {
                                  var ut, h, x;
                                  return [
                                    _("li", {
                                      class: ye(["embed:cursor-pointer embed:select-none embed:relative embed:py-2 embed:px-4", [_e ? "embed:bg-zinc-100 embed:dark:bg-zinc-800" : "", We ? "embed:text-black embed:dark:text-white" : "embed:text-zinc-700 embed:dark:text-zinc-300"]])
                                    }, [
                                      _("div", h4, [
                                        (h = (ut = e.paymentMethods) == null ? void 0 : ut[E]) != null && h.icon ? (S(), ke(v, {
                                          key: 0,
                                          config: e.paymentMethods[E].icon,
                                          "extra-classes": ["embed:mr-3 embed:flex embed:items-center"]
                                        }, null, 8, ["config"])) : Q("", !0),
                                        _("span", b4, [
                                          ee(A((x = e.paymentMethods) == null ? void 0 : x[E].name) + " ", 1),
                                          e.getDiscount(E) ? (S(), T("div", g4, [
                                            e.isPositiveDiscount(E) ? (S(), T(U, { key: 0 }, [
                                              e.getDiscount(E).percentage && e.getDiscount(E).fixed ? (S(), T(U, { key: 0 }, [
                                                ee(A(Math.abs(e.getDiscount(E).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " off", 1)
                                              ], 64)) : e.getDiscount(E).percentage ? (S(), T(U, { key: 1 }, [
                                                ee(A(Math.abs(e.getDiscount(E).percentage)) + "% off", 1)
                                              ], 64)) : e.getDiscount(E).fixed ? (S(), T(U, { key: 2 }, [
                                                ee(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " off", 1)
                                              ], 64)) : Q("", !0)
                                            ], 64)) : (S(), T(U, { key: 1 }, [
                                              e.getDiscount(E).percentage && e.getDiscount(E).fixed ? (S(), T(U, { key: 0 }, [
                                                ee(A(Math.abs(e.getDiscount(E).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " fee", 1)
                                              ], 64)) : e.getDiscount(E).percentage ? (S(), T(U, { key: 1 }, [
                                                ee(A(Math.abs(e.getDiscount(E).percentage)) + "% fee", 1)
                                              ], 64)) : e.getDiscount(E).fixed ? (S(), T(U, { key: 2 }, [
                                                ee(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " fee", 1)
                                              ], 64)) : Q("", !0)
                                            ], 64))
                                          ])) : Q("", !0)
                                        ])
                                      ])
                                    ], 2)
                                  ];
                                }),
                                _: 2
                              }, 1032, ["value"]))), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])) : Q("", !0)
                ], 64))
              ])
            ])
          ];
        }),
        _: 1
      }, 8, ["modelValue"]),
      e.context.variant.additional_information.length > 0 ? (S(), T("div", v4, [
        H(O)
      ])) : Q("", !0),
      e.context.variant.vat_enabled ? (S(), T("div", y4, [
        H(u, {
          modelValue: e.checkout_information.country,
          "onUpdate:modelValue": t[9] || (t[9] = (G) => e.checkout_information.country = G),
          type: "select",
          label: "Country",
          name: "country",
          options: Object.entries(e.context.variant.available_vat_countries).map(([G, ue]) => ({
            value: G,
            label: ue.name
          })),
          class: "embed:dark:bg-zinc-950"
        }, null, 8, ["modelValue", "options"]),
        e.context.variant.vat_enabled && ((W = e.context.variant.available_vat_countries[e.checkout_information.country]) == null ? void 0 : W.vat) > 0 ? (S(), T("div", w4, [
          H(u, {
            id: "vat_id",
            modelValue: e.checkout_information.vat_id,
            "onUpdate:modelValue": t[10] || (t[10] = (G) => e.checkout_information.vat_id = G),
            "error-key": "vat_id",
            type: "text",
            label: "VAT ID",
            placeholder: "DE123456789",
            name: "vat_id",
            class: "embed:dark:bg-zinc-950"
          }, null, 8, ["modelValue"])
        ])) : Q("", !0)
      ])) : Q("", !0),
      _("div", x4, [
        _("div", null, [
          e.applyCoupon ? (S(), ke(ur, {
            key: 0,
            appear: "",
            "enter-from-class": "embed:opacity-0 embed:scale-0",
            "enter-to-class": "opacity-1 embed:scale-100",
            "enter-active-class": "embed:transition embed:transform origin",
            "leave-from-class": "opacity-1 embed:scale-100",
            "leave-to-class": "embed:opacity-0 embed:scale-0",
            "leave-active-class": "embed:transition embed:transform"
          }, {
            default: te(() => [
              _("div", k4, [
                _("div", _4, [
                  _("button", {
                    class: "embed:absolute embed:right-1 embed:-top-5 embed:text-zinc-500 embed:hover:text-zinc-800 embed:dark:hover:text-zinc-200 embed:text-xs embed:transition embed:duration-100 embed:ease-in-out",
                    onClick: t[11] || (t[11] = (G) => e.applyCoupon = !1)
                  }, "Cancel"),
                  _("div", S4, [
                    _("div", E4, [
                      H(u, {
                        modelValue: e.data.coupon,
                        "onUpdate:modelValue": t[12] || (t[12] = (G) => e.data.coupon = G),
                        type: "text",
                        name: "coupon-code",
                        placeholder: "Enter coupon code",
                        class: "embed:dark:bg-zinc-950 embed:rounded-r-none"
                      }, null, 8, ["modelValue"])
                    ]),
                    H(D, {
                      primary: "",
                      loading: e.isApplying || e.isLoading,
                      disabled: e.isApplying || e.isLoading,
                      type: "button",
                      class: "embed:relative embed:inline-flex embed:items-center embed:space-x-2 embed:rounded-l-none",
                      onClick: t[13] || (t[13] = (G) => e.debouncedApply("coupon"))
                    }, {
                      default: te(() => [
                        _("span", null, A(e.isApplying || e.isLoading ? "Applying..." : "Apply"), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "disabled"])
                  ])
                ])
              ])
            ]),
            _: 1
          })) : (S(), T("button", {
            key: 1,
            class: "embed:py-2 embed:text-zinc-500 embed:hover:text-zinc-800 embed:dark:hover:text-zinc-200 embed:text-sm embed:mx-auto embed:transition embed:duration-100 embed:ease-in-out",
            onClick: t[14] || (t[14] = (G) => e.applyCoupon = !0)
          }, "Add coupon")),
          (q = (Z = (L = e.context.error) == null ? void 0 : L.errors) == null ? void 0 : Z.coupon) != null && q[0] ? (S(), T("p", {
            key: 2,
            class: "embed:mt-1 embed:ml-1.5 embed:text-left embed:text-xs embed:text-red-600 embed:dark:text-red embed:w-full",
            textContent: A((re = (P = e.context.error) == null ? void 0 : P.errors) == null ? void 0 : re.coupon[0])
          }, null, 8, C4)) : Q("", !0),
          e.variant.coupon && ((ge = (Te = (he = e.context.error) == null ? void 0 : he.errors) == null ? void 0 : Te.coupon) == null ? void 0 : ge[0]) === void 0 ? (S(), T("p", T4, "A " + A(e.variant.coupon) + " coupon has successfully been applied!", 1)) : Q("", !0)
        ])
      ]),
      e.variant.visibility == "PUBLIC" || e.variant.visibility == "HIDDEN" ? (S(), T("div", O4, [
        _("div", A4, [
          H(D, {
            loading: e.isLoading,
            disabled: e.isSoldOut,
            style: hi({ "background-color": e.context.customization.theme }),
            class: "embed:w-full embed:disabled:bg-red-600 embed:disabled:focus:ring-zinc-500",
            primary: "",
            onClick: e.handleClick
          }, {
            default: te(() => [
              ee(A(e.isSoldOut ? "Sold out" : "Buy now"), 1)
            ]),
            _: 1
          }, 8, ["loading", "disabled", "style", "onClick"]),
          !e.isSoldOut && !e.isValidInput && e.hasAttemptedSubmit ? (S(), T("div", D4, [
            e.checkout_information.payment_method ? Q("", !0) : (S(), T("p", P4, "Please select a payment method")),
            !e.checkout_information.customer_email || !e.checkout_information.customer_email.includes("@") ? (S(), T("p", M4, "Please enter a valid email address")) : Q("", !0),
            e.context.variant.additional_information.some((G) => G.required && !e.checkout_information.additional_information[G.key]) ? (S(), T("p", $4, "Please fill in all required checkout information")) : Q("", !0)
          ])) : Q("", !0)
        ])
      ])) : Q("", !0)
    ]),
    H(R, {
      modelValue: e.isDescriptionOpen,
      "onUpdate:modelValue": t[15] || (t[15] = (G) => e.isDescriptionOpen = G),
      title: "Product Description"
    }, {
      default: te(() => [
        _("div", {
          innerHTML: e.product.description
        }, null, 8, L4)
      ]),
      _: 1
    }, 8, ["modelValue"]),
    H(R, {
      modelValue: e.orMore,
      "onUpdate:modelValue": t[18] || (t[18] = (G) => e.orMore = G),
      title: "Add Extra Amount",
      description: "Optionally add an extra amount to this purchase"
    }, {
      default: te(() => {
        var G, ue, ze, Xe, ie;
        return [
          _("div", F4, [
            _("div", N4, [
              _("div", z4, [
                _("div", I4, [
                  H(u, {
                    id: "extra",
                    modelValue: e.data.extra,
                    "onUpdate:modelValue": t[16] || (t[16] = (me) => e.data.extra = me),
                    type: "number",
                    name: "extra",
                    placeholder: "0.00",
                    class: "embed:dark:bg-zinc-950 embed:rounded-r-none embed:w-full"
                  }, null, 8, ["modelValue"])
                ]),
                H(D, {
                  primary: "",
                  class: "embed:rounded-l-none",
                  onClick: t[17] || (t[17] = (me) => e.apply("extra"))
                }, {
                  default: te(() => t[27] || (t[27] = [
                    _("span", null, "Add", -1)
                  ])),
                  _: 1
                })
              ]),
              (ze = (ue = (G = e.context.error) == null ? void 0 : G.errors) == null ? void 0 : ue.extra) != null && ze[0] ? (S(), T("p", {
                key: 0,
                class: "embed:ml-1.5 embed:text-left embed:text-sm embed:text-red-600 embed:dark:text-red embed:w-full",
                textContent: A((ie = (Xe = e.context.error) == null ? void 0 : Xe.errors) == null ? void 0 : ie.extra[0])
              }, null, 8, R4)) : Q("", !0)
            ])
          ])
        ];
      }),
      _: 1
    }, 8, ["modelValue"]),
    _("div", j4, [
      _("button", {
        class: "embed:flex embed:items-center embed:text-zinc-600 embed:dark:text-white embed:bg-zinc-200/60 embed:dark:bg-black embed:px-2 embed:py-1 embed:rounded-lg embed:text-sm embed:font-medium embed:hover:text-black embed:dark:hover:text-zinc-300 embed:transition-colors",
        onClick: t[19] || (t[19] = (G) => e.isDescriptionOpen = !0)
      }, "Description"),
      e.product.variants.length > 1 ? (S(), T("button", {
        key: 0,
        class: "embed:flex embed:items-center embed:text-zinc-600 embed:dark:text-white embed:bg-zinc-200/60 embed:dark:bg-black embed:px-2 embed:py-1 embed:rounded-lg embed:text-sm embed:font-medium embed:hover:text-black embed:dark:hover:text-zinc-300 embed:transition-colors",
        onClick: t[20] || (t[20] = (G) => e.send({ type: "PREVIOUS" }))
      }, "Variants")) : Q("", !0),
      e.variant.humble ? (S(), T("div", V4, [
        _("button", {
          class: "embed:flex embed:items-center embed:text-zinc-600 embed:dark:text-white embed:bg-zinc-200/60 embed:dark:bg-black embed:px-2 embed:py-1 embed:rounded-lg embed:text-sm embed:font-medium embed:hover:text-black embed:dark:hover:text-zinc-300 embed:transition-colors",
          onClick: t[21] || (t[21] = (G) => e.orMore = !0)
        }, "Add more")
      ])) : Q("", !0)
    ])
  ]);
}
const B4 = /* @__PURE__ */ gt(S3, [["render", U4]]), H4 = /* @__PURE__ */ ve({
  name: "MyNavigator",
  components: {
    MyButton: Zo
  },
  props: {
    back: {
      type: Object,
      required: !1,
      default: () => ({
        type: "PREVIOUS"
      })
    },
    next: {
      type: Object,
      required: !1,
      default: () => ({
        type: "NEXT"
      })
    },
    text: {
      type: String,
      required: !1,
      default: () => "Continue"
    }
  },
  setup() {
    const { state: e, send: t } = Nt();
    return {
      send: t,
      state: e
    };
  }
}), q4 = { class: "embed:mt-6 embed:w-full embed:justify-between embed:flex embed:items-center embed:col-span-2 embed:space-x-2" };
function W4(e, t, n, r, i, o) {
  const a = oe("MyButton");
  return S(), T("div", q4, [
    H(a, {
      outline: "",
      class: "embed:w-1/2",
      disabled: e.state.hasTag("loading"),
      onClick: t[0] || (t[0] = (s) => e.send(e.back))
    }, {
      default: te(() => t[2] || (t[2] = [
        ee("Back")
      ])),
      _: 1
    }, 8, ["disabled"]),
    H(a, {
      loading: e.state.hasTag("loading"),
      class: "embed:w-1/2",
      style: hi({ "background-color": e.state.context.customization.theme }),
      primary: "",
      onClick: t[1] || (t[1] = (s) => e.send(e.next))
    }, {
      default: te(() => [
        ee(A(e.text), 1)
      ]),
      _: 1
    }, 8, ["loading", "style"])
  ]);
}
const wl = /* @__PURE__ */ gt(H4, [["render", W4]]), G4 = /* @__PURE__ */ ve({
  name: "ConnectDiscord",
  components: {
    Navigator: wl,
    DialogTitle: xr,
    InputGroup: yl,
    MyButton: Zo
  },
  setup() {
    const { context: e } = Nt();
    let t = X(e.value.discord_data.discord_username);
    Ee.discord_token = e.value.discord_data.discord_token;
    const n = X(!0), r = () => {
      const o = window.open(e.value.discord_data.connect_url, "_blank", "width=400, height=600");
      (!o || o.closed || typeof o.closed > "u") && (n.value = !1);
    }, i = (o) => {
      var u;
      const a = o.data, s = /^((http[s]?|ftp):\/)?\/?([^:/\s]+)((\/\w+)*\/)([\w\-.]+[^#?\s]+)(.*)?(#[\w-]+)?$/, l = wi.match(s), d = l[2] + "://" + l[3];
      o.origin === d && !fr(a) && (u = e.value.discord_data) != null && u.connect_url && (sessionStorage.setItem("discord_token", a.discord_token), e.value.discord_data = {
        discord_id: a.discord_id,
        discord_token: a.discord_token,
        discord_username: a.discord_username,
        connect_url: e.value.discord_data.connect_url
      }, Ee.discord_token = a.discord_token, t.value = e.value.discord_data.discord_username);
    };
    return window.addEventListener("message", i), {
      checkout_information: Ee,
      context: e,
      linkDiscord: r,
      receiveData: i,
      popUpsEnabled: n,
      discordUsername: t
    };
  }
}), K4 = { class: "embed:flex embed:flex-col embed:px-4 embed:pt-5 embed:pb-4 embed:sm:p-6" }, Y4 = ["textContent"], X4 = { class: "embed:mt-4" }, Z4 = {
  key: 0,
  class: "embed:text-center embed:mt-2 embed:bg-white embed:dark:bg-black embed:rounded-2xl embed:px-4 embed:py-2"
}, J4 = {
  key: 1,
  class: "embed:text-center embed:mt-2 embed:bg-white embed:dark:bg-black embed:rounded-2xl embed:px-4 embed:py-2"
}, Q4 = {
  key: 1,
  class: "embed:mt-5 embed:text-red-500"
}, e6 = { key: 2 };
function t6(e, t, n, r, i, o) {
  const a = oe("DialogTitle"), s = oe("InputGroup"), l = oe("MyButton"), d = oe("Navigator");
  return S(), T("div", K4, [
    H(a, {
      as: "h1",
      class: "embed:font-bold embed:text-center embed:text-xl embed:text-black embed:dark:text-white"
    }, {
      default: te(() => t[0] || (t[0] = [
        ee("Connect discord")
      ])),
      _: 1
    }),
    e.discordUsername ? (S(), ke(s, {
      key: 0,
      class: "embed:text-center",
      type: "text",
      label: "",
      value: e.discordUsername,
      disabled: ""
    }, null, 8, ["value"])) : Q("", !0),
    H(l, {
      class: "embed:w-full embed:bg-[#5865F2] embed:text-white embed:mt-4",
      onClick: e.linkDiscord
    }, {
      default: te(() => [
        _("span", {
          textContent: A(e.checkout_information.discord_id ? "Change discord account" : "Connect discord")
        }, null, 8, Y4)
      ]),
      _: 1
    }, 8, ["onClick"]),
    _("div", X4, [
      e.context.variant.discord_required ? (S(), T("div", Z4, t[1] || (t[1] = [
        _("span", { class: "embed:font-medium embed:text-black embed:dark:text-white" }, "To continue your purchase, you'll want to connect your Discord account.", -1)
      ]))) : e.context.variant.discord_request ? (S(), T("div", J4, t[2] || (t[2] = [
        _("span", { class: "embed:font-medium embed:text-black embed:dark:text-white" }, "Optionally connect your Discord to get exclusive accesss with your purchase.", -1)
      ]))) : Q("", !0)
    ]),
    e.popUpsEnabled ? Q("", !0) : (S(), T("div", Q4, t[3] || (t[3] = [
      _("p", null, "Please, enable pop ups to proceed.", -1)
    ]))),
    e.context.variant.discord_required && e.checkout_information.discord_token || !e.context.variant.discord_required ? (S(), T("div", e6, [
      H(d)
    ])) : Q("", !0)
  ]);
}
const n6 = /* @__PURE__ */ gt(G4, [["render", t6]]), r6 = /* @__PURE__ */ ve({
  name: "FinalStep",
  components: {
    Navigator: wl,
    DialogTitle: xr,
    DialogDescription: k0
  },
  setup() {
    var s;
    const { context: e } = Nt(), t = X(!1), n = $(() => e.value.variant), r = $(() => e.value.product), i = $(() => !e.value.variant.payment_discounts || !Ee.payment_method ? null : e.value.variant.payment_discounts[Ee.payment_method.toLowerCase()]), o = $(() => i.value ? i.value.percentage < 0 || i.value.fixed < 0 : !1);
    let a = parseFloat(e.value.variant.total.replace(/[^\d.-]/g, "")) || 0;
    if (i.value) {
      if (i.value.percentage) {
        const l = parseFloat(i.value.percentage) / 100 * a;
        a -= l;
      }
      i.value.fixed && (a -= parseFloat(i.value.fixed));
    }
    if (e.value.variant.available_vat_countries && Ee.country) {
      const l = (s = e.value.variant.available_vat_countries[Ee.country]) == null ? void 0 : s.vat;
      if (l !== null && !isNaN(l)) {
        const d = parseFloat(l) / 100;
        a += a * d;
      }
    }
    return {
      checkout_information: Ee,
      context: e,
      variant: n,
      product: r,
      terms_of_service: t,
      paymentDetails: i,
      hasNegativePayment: o,
      price: a
    };
  },
  methods: {
    capitalized(e) {
      const t = e[0].toUpperCase(), n = e.slice(1);
      return t + n;
    }
  }
}), i6 = { class: "embed:flex embed:flex-col embed:px-4 embed:pt-5 embed:pb-4 embed:sm:p-6" }, o6 = { class: "embed:p-3 embed:text-left embed:flex embed:flex-row embed:justify-between" }, a6 = { class: "embed:block embed:text-sm embed:font-medium embed:text-black embed:dark:text-white" }, s6 = ["textContent"], l6 = { class: "embed:space-y-2 embed:mx-2 embed:bg-zinc-50 embed:dark:bg-zinc-950 embed:py-3 embed:px-3 embed:rounded-2xl embed:shadow-inner embed:dark:shadow-black embed:text-sm embed:font-medium embed:text-black embed:dark:text-white" }, d6 = { class: "embed:text-left embed:flex embed:flex-row embed:justify-between" }, u6 = ["textContent"], c6 = { class: "embed:block embed:text-sm embed:font-normal embed:text-black embed:dark:text-white" }, f6 = { class: "embed:inline-flex embed:items-center embed:space-x-2 embed:text-sm embed:font-normal embed:text-black embed:dark:text-white" }, m6 = { class: "embed:flex embed:rounded-lg embed:bg-zinc-100 embed:px-2 embed:text-sm embed:font-medium embed:dark:bg-black" }, p6 = { class: "embed:block embed:text-sm embed:font-normal embed:text-black embed:dark:text-white" }, h6 = { class: "embed:block embed:text-sm embed:font-normal embed:text-black embed:dark:text-white" }, b6 = { class: "embed:block embed:text-sm embed:font-normal embed:text-black embed:dark:text-white" }, g6 = { class: "embed:block embed:text-sm embed:font-normal embed:text-black embed:dark:text-white" }, v6 = { class: "embed:block embed:text-sm embed:font-normal embed:text-black embed:dark:text-white" }, y6 = { class: "embed:p-3 embed:flex embed:flex-row embed:justify-between" }, w6 = { class: "embed:block embed:text-sm embed:font-medium embed:text-black embed:dark:text-white embed:pr-2" }, x6 = { class: "embed:px-3 embed:mt-4 embed:relative embed:flex embed:items-center" }, k6 = { class: "embed:ml-3 embed:flex embed:items-center embed:h-5" }, _6 = ["checked"];
function S6(e, t, n, r, i, o) {
  var d, u, c, f;
  const a = oe("DialogTitle"), s = oe("DialogDescription"), l = oe("Navigator");
  return S(), T("div", i6, [
    H(a, {
      as: "h1",
      class: "embed:font-bold embed:text-center embed:text-xl embed:text-black embed:dark:text-white"
    }, {
      default: te(() => t[1] || (t[1] = [
        ee("Order Overview")
      ])),
      _: 1
    }),
    H(s, {
      as: "p",
      class: "embed:mb-4 embed:font-normal embed:text-center embed:text-zinc-800 embed:dark:text-zinc-400 embed:text-xs"
    }, {
      default: te(() => t[2] || (t[2] = [
        ee("Finally, review your order details before checking out")
      ])),
      _: 1
    }),
    _("div", o6, [
      _("p", a6, A(e.context.quantity) + "x " + A(e.product.title), 1),
      _("p", {
        class: "embed:block embed:text-sm embed:font-medium embed:text-black embed:dark:text-white embed:pr-2",
        textContent: A(e.variant.price)
      }, null, 8, s6)
    ]),
    _("div", l6, [
      _("div", d6, [
        t[3] || (t[3] = _("p", { class: "embed:block embed:text-sm embed:font-normal embed:text-black embed:dark:text-white" }, "Subtotal", -1)),
        _("p", {
          class: "embed:block embed:text-sm embed:font-normal embed:text-black embed:dark:text-white",
          textContent: A(e.variant.price)
        }, null, 8, u6)
      ]),
      _("div", {
        class: ye(["embed:text-left embed:flex embed:flex-row embed:justify-between", e.context.variant.bulk_discount == null ? "embed:hidden" : ""])
      }, [
        t[4] || (t[4] = _("p", { class: "embed:block embed:text-sm embed:font-normal embed:text-black embed:dark:text-white" }, "Bulk discount", -1)),
        _("p", c6, "-" + A(e.context.variant.bulk_discount), 1)
      ], 2),
      _("div", {
        class: ye(["embed:text-left embed:flex embed:flex-row embed:justify-between", e.context.coupon == null ? "embed:hidden" : ""])
      }, [
        _("p", f6, [
          t[5] || (t[5] = _("span", null, "Coupon", -1)),
          _("span", m6, A(e.context.coupon), 1)
        ]),
        _("p", p6, "-" + A(e.context.variant.coupon), 1)
      ], 2),
      _("div", {
        class: ye(["embed:text-left embed:flex embed:flex-row embed:justify-between", !e.context.variant.payment_discounts || e.context.variant.payment_discounts[e.checkout_information.payment_method.toLowerCase()] == null ? "embed:hidden" : ""])
      }, [
        _("p", h6, "Payment " + A(e.hasNegativePayment ? "fee" : "discount"), 1),
        _("p", b6, [
          (d = e.paymentDetails) != null && d.percentage && ((u = e.paymentDetails) != null && u.fixed) ? (S(), T(U, { key: 0 }, [
            ee(A(Math.abs(e.paymentDetails.percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.paymentDetails.fixed)), 1)
          ], 64)) : (c = e.paymentDetails) != null && c.percentage ? (S(), T(U, { key: 1 }, [
            ee(A(Math.abs(e.paymentDetails.percentage)) + "%", 1)
          ], 64)) : (f = e.paymentDetails) != null && f.fixed ? (S(), T(U, { key: 2 }, [
            ee(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.paymentDetails.fixed)), 1)
          ], 64)) : Q("", !0)
        ])
      ], 2),
      _("div", {
        class: ye(["embed:text-left embed:flex embed:flex-row embed:justify-between", !e.checkout_information.country || e.context.variant.available_vat_countries[e.checkout_information.country].vat == 0 ? "embed:hidden" : ""])
      }, [
        _("p", g6, "VAT (" + A(e.checkout_information.country && e.context.variant.available_vat_countries[e.checkout_information.country].name) + ")", 1),
        _("p", v6, "+" + A(e.checkout_information.country && e.context.variant.available_vat_countries[e.checkout_information.country].vat) + "%", 1)
      ], 2)
    ]),
    _("div", y6, [
      t[6] || (t[6] = _("p", { class: "embed:block embed:text-sm embed:font-medium embed:text-black embed:dark:text-white" }, "Total", -1)),
      _("p", w6, A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(!isNaN(e.price) && isFinite(e.price) ? e.price.toFixed(2) : e.context.variant.total.replace(/[^\d]+.*/, "")), 1)
    ]),
    _("div", x6, [
      t[7] || (t[7] = _("div", { class: "embed:min-w-0 embed:flex-1 embed:text-left embed:text-sm" }, [
        _("label", {
          for: "terms_of_service",
          class: "embed:select-none embed:mb-0 embed:font-semibold embed:text-sm embed:text-zinc-800 embed:dark:text-neutral-300"
        }, "By making this purchase, you agree to the terms of service")
      ], -1)),
      _("div", k6, [
        Ns(_("input", {
          id: "terms_of_service",
          "onUpdate:modelValue": t[0] || (t[0] = (m) => e.terms_of_service = m),
          checked: e.terms_of_service == !0,
          required: "",
          name: "terms_of_service",
          type: "checkbox",
          class: "embed:p-2 embed:appearance-none embed:rounded embed:focus:ring-offset-0 embed:bg-white embed:checked:bg-black embed:dark:bg-zinc-800 embed:dark:focus:bg-zinc-950 embed:text-black embed:dark:text-white embed:placeholder-neutral-500 embed:focus:placeholder-neutral-800 embed:dark:placeholder-neutral-500 embed:dark:focus:placeholder-neutral-400 embed:border embed:border-zinc-100 embed:hover:border-zinc-200 embed:focus:border-zinc-400 embed:dark:border-zinc-800 embed:dark:hover:border-zinc-950 embed:dark:focus:border-zinc-800 embed:focus:ring-0 embed:shadow-inner embed:shadow-zinc-400 embed:hover:shadow-zinc-500 embed:focus:shadow-zinc-200 embed:dark:shadow-neutral-800 embed:dark:hover:shadow-neutral-900 embed:dark:focus:shadow-neutral-800 embed:transition embed:duration-200 embed:ease-in-out"
        }, null, 8, _6), [
          [k1, e.terms_of_service]
        ])
      ])
    ]),
    H(l, {
      next: { type: "CHECKOUT" },
      text: "Pay Now",
      "loading-state": "checkout.step.final_step.checkout_product",
      class: ye(e.terms_of_service == !1 ? "embed:hidden" : "")
    }, null, 8, ["class"])
  ]);
}
const E6 = /* @__PURE__ */ gt(r6, [["render", S6]]), C6 = /* @__PURE__ */ ve({
  name: "DialogMessage",
  components: {
    DialogTitle: xr
  },
  props: {
    title: {
      type: String,
      required: !1,
      default: null
    },
    message: {
      type: String,
      required: !1,
      default: null
    }
  }
}), T6 = { class: "embed:flex embed:flex-col embed:items-center embed:justify-evenly embed:h-4/6 embed:w-full embed:p-6" }, O6 = { class: "embed:flex embed:flex-col embed:items-center" }, A6 = { class: "embed:bg-zinc-100 embed:p-4 embed:rounded-lg embed:w-11/12 embed:mt-4 embed:dark:bg-zinc-800 embed:text-black embed:dark:text-white embed:shadow-inner embed:dark:shadow-black" };
function D6(e, t, n, r, i, o) {
  const a = oe("DialogTitle");
  return S(), T("div", T6, [
    _("div", O6, [
      ri(e.$slots, "default"),
      H(a, {
        as: "h2",
        class: "embed:mb-0 embed:mt-3 embed:font-bold embed:text-2xl embed:text-black embed:dark:text-white"
      }, {
        default: te(() => [
          ee(A(e.title), 1)
        ]),
        _: 1
      })
    ]),
    _("div", A6, [
      ri(e.$slots, "action", {}, () => [
        _("p", null, A(e.message), 1)
      ])
    ])
  ]);
}
const xl = /* @__PURE__ */ gt(C6, [["render", D6]]), P6 = /* @__PURE__ */ ve({
  name: "SuccessDialog",
  components: {
    DialogMessage: xl,
    CheckCircleIcon: tm
  },
  setup: function() {
    const { context: e } = Nt();
    return {
      context: e
    };
  }
}), M6 = ["href"];
function $6(e, t, n, r, i, o) {
  const a = oe("CheckCircleIcon"), s = oe("DialogMessage");
  return S(), ke(s, {
    class: "embed:bg-white embed:text-center embed:dark:bg-zinc-900 embed:rounded-2xl embed:shadow-xl",
    title: "Order Created"
  }, {
    action: te(() => [
      _("p", null, [
        t[0] || (t[0] = ee(" Your order has been created! If the payment gateway did not open by itself, ")),
        _("a", {
          href: e.context.order,
          class: "embed:font-bold embed:underline embed:decoration-zinc-800 embed:dark:decoration-zinc-50 embed:hover:decoration-wavy",
          target: "_blank"
        }, "click here to open it.", 8, M6)
      ])
    ]),
    default: te(() => [
      H(a, { class: "embed:h-24 embed:w-24 embed:text-green-600" })
    ]),
    _: 1
  });
}
const L6 = /* @__PURE__ */ gt(P6, [["render", $6]]), F6 = /* @__PURE__ */ ve({
  name: "HeadsUpDialog",
  components: {
    DialogMessage: xl
  }
});
function N6(e, t, n, r, i, o) {
  const a = oe("DialogMessage");
  return S(), ke(a, {
    class: "embed:bg-white embed:text-center embed:dark:bg-zinc-900 embed:rounded-2xl embed:shadow-xl",
    title: "What's Next?"
  }, {
    action: te(() => t[0] || (t[0] = [
      _("p", { class: "embed:mb-4" }, "Once paid, the order will instantly be sent to your entered email. That's it!", -1),
      _("p", { class: "embed:text-xs" }, "Note: If you paid with PayPal, we will send the product to your PayPal email for security reasons.", -1)
    ])),
    _: 1
  });
}
const z6 = /* @__PURE__ */ gt(F6, [["render", N6]]);
function I6(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return Object.assign(t, r), t;
  }, {});
}
const R6 = /* @__PURE__ */ ve({
  name: "EmbedCheckout",
  components: {
    MyDialog: y0,
    DialogPanel: x0,
    DialogOverlay: w0,
    DialogTitle: xr,
    TransitionChild: kf,
    TransitionRoot: _f,
    ExclamationCircleIcon: em,
    VariantSelection: O2,
    Overview: B4,
    ConnectDiscord: n6,
    FinalStep: E6,
    Navigator: wl,
    DialogMessage: xl,
    CheckCircleIcon: tm,
    SuccessDialog: L6,
    HeadsUpDialog: z6
  },
  setup(e, { expose: t }) {
    const { context: n, state: r, send: i } = Nt(), o = $(() => {
      var d, u, c, f;
      return (f = (c = (u = (d = r.value.context) == null ? void 0 : d.error) == null ? void 0 : u.errors) == null ? void 0 : c.quantity) == null ? void 0 : f.some((m) => m === "This product has insufficient stock to fulfill the purchase.");
    }), a = $(() => {
      var d, u;
      return o.value ? "This product is currently out of stock." : ((u = (d = r.value.context) == null ? void 0 : d.error) == null ? void 0 : u.message) || "An unexpected error occurred";
    }), s = () => {
      V0();
    };
    return s(), t({
      reInit: () => {
        s();
      },
      isOpen: $(() => !r.value.matches("closed"))
    }), {
      stepComponent: $(() => r.value.matches("checkout") ? I6(r.value.meta).component : null),
      context: n,
      state: r,
      send: i,
      isOutOfStock: o,
      errorMessage: a
    };
  }
}), j6 = {
  id: "embed-modal",
  class: "embed:fixed embed:z-10 embed:inset-0 embed:overflow-auto"
}, V6 = { style: { "z-index": "2147483647", width: "100%", height: "100%" } }, U6 = { class: "embed:relative embed:z-50 embed:max-w-xl embed:w-full embed:inline-block embed:align-middle embed:px-4" }, B6 = {
  key: 0,
  class: "embed:bg-white embed:dark:bg-zinc-900 embed:rounded-lg embed:shadow-zinc-400 embed:shadow-md embed:dark:shadow-black embed:overflow-hidden embed:border-zinc-300 embed:dark:border-black embed:border embed:p-6"
}, H6 = { class: "embed:space-y-12" }, q6 = { class: "embed:space-y-8" }, W6 = { class: "embed:space-y-2" }, G6 = { class: "embed:flex embed:flex-wrap embed:gap-3 embed:justify-center" }, K6 = {
  key: 1,
  class: "embed:space-y-4"
}, Y6 = {
  key: 1,
  class: "embed:space-y-6"
};
function X6(e, t, n, r, i, o) {
  const a = oe("DialogOverlay"), s = oe("TransitionChild"), l = oe("SuccessDialog"), d = oe("HeadsUpDialog"), u = oe("ExclamationCircleIcon"), c = oe("DialogMessage"), f = oe("DialogPanel"), m = oe("MyDialog"), b = oe("TransitionRoot"), p = dh("click-outside");
  return S(), ke(b, {
    as: "template",
    show: !e.state.matches("closed")
  }, {
    default: te(() => [
      H(m, { as: "div" }, {
        default: te(() => [
          H(f, {
            class: "embed:outline-hidden",
            tabindex: "0"
          }, {
            default: te(() => [
              _("div", j6, [
                _("div", {
                  class: ye(["embed:flex embed:items-center embed:justify-center embed:min-h-screen embed:text-center", { dark: e.context.customization.darkMode }])
                }, [
                  H(s, {
                    as: "template",
                    enter: "embed:ease-out embed:duration-300",
                    "enter-from": "embed:opacity-0",
                    "enter-to": "embed:opacity-100",
                    leave: "embed:ease-in embed:duration-200",
                    "leave-from": "embed:opacity-100",
                    "leave-to": "embed:opacity-0"
                  }, {
                    default: te(() => [
                      H(a, { class: "embed:fixed embed:inset-0 embed:bg-white/90 embed:dark:bg-black/50 embed:transition-opacity" })
                    ]),
                    _: 1
                  }),
                  t[7] || (t[7] = _("span", {
                    class: "embed:hidden embed:sm:inline-block embed:sm:align-middle embed:sm:h-screen",
                    "aria-hidden": "true"
                  }, "​", -1)),
                  H(s, {
                    as: "template",
                    enter: "embed:ease-out embed:duration-300",
                    "enter-from": "embed:opacity-0 embed:translate-y-4 embed:sm:translate-y-0 embed:sm:scale-95",
                    "enter-to": "embed:opacity-100 embed:translate-y-0 embed:sm:scale-100",
                    leave: "embed:ease-in embed:duration-200",
                    "leave-from": "embed:opacity-100 embed:translate-y-0 embed:sm:scale-100",
                    "leave-to": "embed:opacity-0 embed:translate-y-4 embed:sm:translate-y-0 embed:sm:scale-95"
                  }, {
                    default: te(() => [
                      _("div", V6, [
                        Ns((S(), T("div", U6, [
                          e.state.hasTag("loading") ? (S(), T("div", B6, [
                            _("div", H6, [
                              t[5] || (t[5] = _("div", { class: "embed:h-10 embed:w-3/4 embed:mx-auto embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded-md embed:animate-pulse embed:mb-8" }, null, -1)),
                              _("div", q6, [
                                t[2] || (t[2] = _("div", { class: "embed:flex embed:items-stretch embed:min-h-24" }, [
                                  _("div", { class: "embed:h-24 embed:w-28 embed:min-h-[6rem] embed:shrink-0 embed:rounded-lg embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:animate-pulse embed:mr-4" }),
                                  _("div", { class: "embed:flex embed:flex-col embed:text-left embed:w-full embed:justify-between" }, [
                                    _("div", { class: "embed:space-y-2" }, [
                                      _("div", { class: "embed:h-6 embed:w-3/4 embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded embed:animate-pulse" }),
                                      _("div", { class: "embed:h-4 embed:w-full embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded embed:animate-pulse" }),
                                      _("div", { class: "embed:h-5 embed:w-24 embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded embed:animate-pulse" })
                                    ]),
                                    _("div", { class: "embed:flex embed:flex-row embed:items-center embed:justify-between embed:mt-2" }, [
                                      _("div", { class: "embed:h-8 embed:w-20 embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded embed:animate-pulse" }),
                                      _("div", { class: "embed:h-4 embed:w-24 embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded embed:animate-pulse" })
                                    ])
                                  ])
                                ], -1)),
                                t[3] || (t[3] = _("div", { class: "embed:space-y-2" }, [
                                  _("div", { class: "embed:h-6 embed:w-1/4 embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded embed:animate-pulse" }),
                                  _("div", { class: "embed:h-8 embed:w-full embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded embed:animate-pulse" })
                                ], -1)),
                                _("div", W6, [
                                  t[1] || (t[1] = _("div", { class: "embed:h-6 embed:w-1/4 embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded embed:animate-pulse" }, null, -1)),
                                  _("div", G6, [
                                    (S(), T(U, null, yn(3, (v) => _("div", {
                                      key: v,
                                      class: "embed:flex embed:flex-col embed:border-2 embed:border-zinc-200 embed:dark:border-zinc-800 embed:w-28 embed:min-h-[6rem] embed:rounded-lg embed:px-3 embed:py-2 embed:animate-pulse"
                                    }, t[0] || (t[0] = [
                                      _("div", { class: "embed:flex embed:flex-col embed:items-center embed:gap-2" }, [
                                        _("div", { class: "embed:h-8 embed:w-8 embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded-full" }),
                                        _("div", { class: "embed:h-4 embed:w-16 embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded" }),
                                        _("div", { class: "embed:h-3 embed:w-20 embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded" })
                                      ], -1)
                                    ]))), 64))
                                  ])
                                ]),
                                t[4] || (t[4] = _("div", { class: "embed:h-4 embed:w-2/6 embed:mx-auto embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded embed:animate-pulse" }, null, -1))
                              ]),
                              t[6] || (t[6] = _("div", { class: "embed:h-10 embed:w-full embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded-md embed:animate-pulse embed:mt-6" }, null, -1))
                            ])
                          ])) : (S(), T("div", K6, [
                            e.stepComponent ? (S(), ke(ur, {
                              key: 0,
                              "enter-active-class": "embed:duration-500 embed:ease-out",
                              "enter-from-class": "embed:opacity-0 embed:-translate-x-full embed:md:translate-x-full",
                              "enter-to-class": "embed:opacity-100 embed:translate-x-0",
                              "leave-active-class": "embed:duration-500 embed:ease-out",
                              "leave-from-class": "embed:opacity-100 embed:translate-x-0",
                              "leave-to-class": "embed:opacity-0 embed:-translate-x-full",
                              mode: "out-in"
                            }, {
                              default: te(() => [
                                (S(), ke(lh(e.stepComponent), { class: "embed:bg-white embed:text-center embed:dark:bg-zinc-900 embed:rounded-lg embed:shadow-zinc-400 embed:shadow-md embed:dark:shadow-black embed:overflow-hidden embed:border-zinc-300 embed:dark:border-black embed:border" }))
                              ]),
                              _: 1
                            })) : e.state.matches("invoice_processed") ? (S(), T("div", Y6, [
                              H(l),
                              H(d)
                            ])) : e.state.matches("error") ? (S(), ke(c, {
                              key: 2,
                              class: "embed:bg-white embed:text-center embed:dark:bg-zinc-900 embed:rounded-lg embed:shadow-zinc-400 embed:shadow-md embed:dark:shadow-black embed:overflow-hidden embed:border-zinc-300 embed:dark:border-black embed:border",
                              title: e.isOutOfStock ? "Out of Stock" : "Whoops",
                              message: e.errorMessage
                            }, {
                              default: te(() => [
                                H(u, { class: "embed:h-24 embed:w-24 embed:text-zinc-600" })
                              ]),
                              _: 1
                            }, 8, ["title", "message"])) : Q("", !0)
                          ]))
                        ])), [
                          [p, () => e.send("CLOSE")]
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ], 2)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["show"]);
}
const Z6 = /* @__PURE__ */ gt(R6, [["render", X6]]);
function J6(e, t) {
  var a, s, l;
  const n = Document.prototype.getElementById, r = t || ((a = e.shadowRoot) == null ? void 0 : a.children[0]);
  if (!r) return;
  Document.prototype.getElementById = function(d) {
    if (d === "headlessui-portal-root") {
      let u = r.querySelector("#headlessui-portal-root");
      if (u) return u;
      const c = document.createElement("div");
      return c.id = "headlessui-portal-root", r.appendChild(c), c;
    }
    return n.call(this, d);
  };
  const i = (s = Object.getOwnPropertyDescriptor(Document.prototype, "activeElement")) == null ? void 0 : s.get;
  i && Object.defineProperty(Document.prototype, "activeElement", {
    get() {
      var u;
      const d = i.call(document);
      return d === e ? (u = e.shadowRoot) == null ? void 0 : u.activeElement : d;
    }
  });
  const o = (l = Object.getOwnPropertyDescriptor(Event.prototype, "target")) == null ? void 0 : l.get;
  o && Object.defineProperty(Event.prototype, "target", {
    get() {
      const d = o.call(this), u = this.composedPath ? this.composedPath() : [];
      return d === e && u.length > 0 ? u[0] : d;
    }
  });
}
const Q6 = {
  mounted(e, t) {
    e.clickOutsideEvent = (n) => {
      e === n.target || e.contains(n.target) || t.value(n);
    }, document.addEventListener("click", e.clickOutsideEvent, !0);
  },
  unmounted(e) {
    document.removeEventListener("click", e.clickOutsideEvent, !0);
  }
}, Cr = C1(Z6);
Cr.component("Listbox", lf);
Cr.component("ListboxButton", df);
Cr.component("ListboxOptions", uf);
Cr.component("ListboxOption", cf);
Cr.directive("click-outside", Q6);
const On = document.createElement("div");
On.id = `checkout-embed-${Math.random().toString(36).substr(2, 9)}`;
On.style.cssText = `
  position: fixed;
  z-index: 2147483647;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
`;
let Da = 0;
const ra = On.attachShadow({ mode: "open" }), Gm = document.createElement("style");
Gm.textContent = `
  :host {
    all: initial;
    contain: content;
  }
  * {
    box-sizing: border-box;
  }
  #portal-target {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
ra.appendChild(Gm);
const kl = document.createElement("link");
kl.rel = "stylesheet";
kl.href = "https://cdn.sell.app/embed/style.css";
ra.appendChild(kl);
const _l = document.createElement("div");
_l.id = "portal-target";
ra.appendChild(_l);
const _i = document.createElement("div");
_i.style.pointerEvents = "auto";
ra.appendChild(_i);
J6(On, _l);
document.body.appendChild(On);
const Hn = Cr.mount(_i);
window.refreshCheckoutEmbed = (e) => {
  const t = window.checkoutEmbeds || [];
  if (e) {
    const n = t.find((r) => r.id === e);
    n == null || n.refresh();
  } else
    t.forEach((n) => n.refresh());
};
const e5 = new MutationObserver((e) => {
  e.some(
    (n) => n.type === "childList" && (n.addedNodes.length > 0 || n.removedNodes.length > 0)
  ) && setTimeout(() => {
    window.refreshCheckoutEmbed();
  }, 100);
});
e5.observe(document.body, {
  childList: !0,
  // Watch for changes to direct children
  subtree: !0,
  // Watch for changes in the entire subtree
  attributes: !1,
  // We don't need to watch attributes
  characterData: !1
  // We don't need to watch text content
});
setInterval(() => {
  var e, t;
  (t = (e = Hn.$) == null ? void 0 : e.exposed) != null && t.isOpen && Hn.$.exposed.isOpen.value ? (On.style.pointerEvents = "auto", document.body.style.position !== "fixed" && (Da = window.pageYOffset, document.body.style.position = "fixed", document.body.style.top = `-${Da}px`, document.body.style.width = "100%")) : (On.style.pointerEvents = "none", document.body.style.position === "fixed" && (document.body.style.position = "", document.body.style.top = "", document.body.style.width = "", window.scrollTo(0, Da)));
}, 200);
let Pa = !1;
const Es = new MutationObserver(() => {
  var e, t;
  !Pa && Hn && typeof ((t = (e = Hn.$) == null ? void 0 : e.exposed) == null ? void 0 : t.reInit) == "function" && (Es.disconnect(), Pa = !0, Hn.$.exposed.reInit(), setTimeout(() => {
    Pa = !1, Es.observe(_i, { childList: !0, subtree: !0, attributes: !0, characterData: !0 });
  }, 500));
});
Es.observe(_i, { childList: !0, subtree: !0, attributes: !0, characterData: !0 });
window.checkoutEmbeds = window.checkoutEmbeds || [];
window.checkoutEmbeds.push({
  id: On.id,
  instance: Hn,
  refresh: () => {
    var e, t, n;
    return (n = (t = (e = Hn.$) == null ? void 0 : e.exposed) == null ? void 0 : t.reInit) == null ? void 0 : n.call(t);
  }
});
const t5 = history.pushState;
history.pushState = function() {
  const e = t5.apply(history, arguments);
  return window.dispatchEvent(new Event("locationchange")), e;
};
window.addEventListener("popstate", () => {
  window.dispatchEvent(new Event("locationchange"));
});
window.addEventListener("locationchange", () => {
  window.refreshCheckoutEmbed();
});
