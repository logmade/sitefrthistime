(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".sellhub-embed-holder,.sellhub-iframe{transition:.3s ease opacity;box-sizing:border-box}#sellhub-cart-iframe{position:absolute;left:-1000px;top:-1000px}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var Yu = { exports: {} }, rl = {}, Xu = { exports: {} }, L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zt = Symbol.for("react.element"), uc = Symbol.for("react.portal"), sc = Symbol.for("react.fragment"), ac = Symbol.for("react.strict_mode"), cc = Symbol.for("react.profiler"), fc = Symbol.for("react.provider"), dc = Symbol.for("react.context"), pc = Symbol.for("react.forward_ref"), mc = Symbol.for("react.suspense"), hc = Symbol.for("react.memo"), vc = Symbol.for("react.lazy"), jo = Symbol.iterator;
function yc(e) {
  return e === null || typeof e != "object" ? null : (e = jo && e[jo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Gu = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Zu = Object.assign, Ju = {};
function ut(e, n, t) {
  this.props = e, this.context = n, this.refs = Ju, this.updater = t || Gu;
}
ut.prototype.isReactComponent = {};
ut.prototype.setState = function(e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, n, "setState");
};
ut.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qu() {
}
qu.prototype = ut.prototype;
function Ai(e, n, t) {
  this.props = e, this.context = n, this.refs = Ju, this.updater = t || Gu;
}
var Bi = Ai.prototype = new qu();
Bi.constructor = Ai;
Zu(Bi, ut.prototype);
Bi.isPureReactComponent = !0;
var Fo = Array.isArray, bu = Object.prototype.hasOwnProperty, Vi = { current: null }, es = { key: !0, ref: !0, __self: !0, __source: !0 };
function ns(e, n, t) {
  var r, l = {}, i = null, o = null;
  if (n != null) for (r in n.ref !== void 0 && (o = n.ref), n.key !== void 0 && (i = "" + n.key), n) bu.call(n, r) && !es.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = t;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: Zt, type: e, key: i, ref: o, props: l, _owner: Vi.current };
}
function gc(e, n) {
  return { $$typeof: Zt, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
}
function Hi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zt;
}
function wc(e) {
  var n = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(t) {
    return n[t];
  });
}
var Uo = /\/+/g;
function El(e, n) {
  return typeof e == "object" && e !== null && e.key != null ? wc("" + e.key) : n.toString(36);
}
function kr(e, n, t, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else switch (i) {
    case "string":
    case "number":
      o = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Zt:
        case uc:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + El(o, 0) : r, Fo(l) ? (t = "", e != null && (t = e.replace(Uo, "$&/") + "/"), kr(l, n, t, "", function(c) {
    return c;
  })) : l != null && (Hi(l) && (l = gc(l, t + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Uo, "$&/") + "/") + e)), n.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Fo(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var s = r + El(i, u);
    o += kr(i, n, t, s, l);
  }
  else if (s = yc(e), typeof s == "function") for (e = s.call(e), u = 0; !(i = e.next()).done; ) i = i.value, s = r + El(i, u++), o += kr(i, n, t, s, l);
  else if (i === "object") throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function rr(e, n, t) {
  if (e == null) return e;
  var r = [], l = 0;
  return kr(e, r, "", "", function(i) {
    return n.call(t, i, l++);
  }), r;
}
function kc(e) {
  if (e._status === -1) {
    var n = e._result;
    n = n(), n.then(function(t) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = t);
    }, function(t) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = t);
    }), e._status === -1 && (e._status = 0, e._result = n);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null }, Sr = { transition: null }, Sc = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: Sr, ReactCurrentOwner: Vi };
function ts() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = { map: rr, forEach: function(e, n, t) {
  rr(e, function() {
    n.apply(this, arguments);
  }, t);
}, count: function(e) {
  var n = 0;
  return rr(e, function() {
    n++;
  }), n;
}, toArray: function(e) {
  return rr(e, function(n) {
    return n;
  }) || [];
}, only: function(e) {
  if (!Hi(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
L.Component = ut;
L.Fragment = sc;
L.Profiler = cc;
L.PureComponent = Ai;
L.StrictMode = ac;
L.Suspense = mc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sc;
L.act = ts;
L.cloneElement = function(e, n, t) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Zu({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (n != null) {
    if (n.ref !== void 0 && (i = n.ref, o = Vi.current), n.key !== void 0 && (l = "" + n.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in n) bu.call(n, s) && !es.hasOwnProperty(s) && (r[s] = n[s] === void 0 && u !== void 0 ? u[s] : n[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = t;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Zt, type: e.type, key: l, ref: i, props: r, _owner: o };
};
L.createContext = function(e) {
  return e = { $$typeof: dc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: fc, _context: e }, e.Consumer = e;
};
L.createElement = ns;
L.createFactory = function(e) {
  var n = ns.bind(null, e);
  return n.type = e, n;
};
L.createRef = function() {
  return { current: null };
};
L.forwardRef = function(e) {
  return { $$typeof: pc, render: e };
};
L.isValidElement = Hi;
L.lazy = function(e) {
  return { $$typeof: vc, _payload: { _status: -1, _result: e }, _init: kc };
};
L.memo = function(e, n) {
  return { $$typeof: hc, type: e, compare: n === void 0 ? null : n };
};
L.startTransition = function(e) {
  var n = Sr.transition;
  Sr.transition = {};
  try {
    e();
  } finally {
    Sr.transition = n;
  }
};
L.unstable_act = ts;
L.useCallback = function(e, n) {
  return ue.current.useCallback(e, n);
};
L.useContext = function(e) {
  return ue.current.useContext(e);
};
L.useDebugValue = function() {
};
L.useDeferredValue = function(e) {
  return ue.current.useDeferredValue(e);
};
L.useEffect = function(e, n) {
  return ue.current.useEffect(e, n);
};
L.useId = function() {
  return ue.current.useId();
};
L.useImperativeHandle = function(e, n, t) {
  return ue.current.useImperativeHandle(e, n, t);
};
L.useInsertionEffect = function(e, n) {
  return ue.current.useInsertionEffect(e, n);
};
L.useLayoutEffect = function(e, n) {
  return ue.current.useLayoutEffect(e, n);
};
L.useMemo = function(e, n) {
  return ue.current.useMemo(e, n);
};
L.useReducer = function(e, n, t) {
  return ue.current.useReducer(e, n, t);
};
L.useRef = function(e) {
  return ue.current.useRef(e);
};
L.useState = function(e) {
  return ue.current.useState(e);
};
L.useSyncExternalStore = function(e, n, t) {
  return ue.current.useSyncExternalStore(e, n, t);
};
L.useTransition = function() {
  return ue.current.useTransition();
};
L.version = "18.3.1";
Xu.exports = L;
var be = Xu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ec = be, Cc = Symbol.for("react.element"), xc = Symbol.for("react.fragment"), _c = Object.prototype.hasOwnProperty, Pc = Ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Nc = { key: !0, ref: !0, __self: !0, __source: !0 };
function rs(e, n, t) {
  var r, l = {}, i = null, o = null;
  t !== void 0 && (i = "" + t), n.key !== void 0 && (i = "" + n.key), n.ref !== void 0 && (o = n.ref);
  for (r in n) _c.call(n, r) && !Nc.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps) for (r in n = e.defaultProps, n) l[r] === void 0 && (l[r] = n[r]);
  return { $$typeof: Cc, type: e, key: i, ref: o, props: l, _owner: Pc.current };
}
rl.Fragment = xc;
rl.jsx = rs;
rl.jsxs = rs;
Yu.exports = rl;
var le = Yu.exports, ls = { exports: {} }, ge = {}, is = { exports: {} }, os = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function n(C, N) {
    var z = C.length;
    C.push(N);
    e: for (; 0 < z; ) {
      var H = z - 1 >>> 1, X = C[H];
      if (0 < l(X, N)) C[H] = N, C[z] = X, z = H;
      else break e;
    }
  }
  function t(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var N = C[0], z = C.pop();
    if (z !== N) {
      C[0] = z;
      e: for (var H = 0, X = C.length, nr = X >>> 1; H < nr; ) {
        var gn = 2 * (H + 1) - 1, Sl = C[gn], wn = gn + 1, tr = C[wn];
        if (0 > l(Sl, z)) wn < X && 0 > l(tr, Sl) ? (C[H] = tr, C[wn] = z, H = wn) : (C[H] = Sl, C[gn] = z, H = gn);
        else if (wn < X && 0 > l(tr, z)) C[H] = tr, C[wn] = z, H = wn;
        else break e;
      }
    }
    return N;
  }
  function l(C, N) {
    var z = C.sortIndex - N.sortIndex;
    return z !== 0 ? z : C.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var o = Date, u = o.now();
    e.unstable_now = function() {
      return o.now() - u;
    };
  }
  var s = [], c = [], h = 1, m = null, p = 3, g = !1, w = !1, k = !1, j = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var N = t(c); N !== null; ) {
      if (N.callback === null) r(c);
      else if (N.startTime <= C) r(c), N.sortIndex = N.expirationTime, n(s, N);
      else break;
      N = t(c);
    }
  }
  function v(C) {
    if (k = !1, d(C), !w) if (t(s) !== null) w = !0, wl(E);
    else {
      var N = t(c);
      N !== null && kl(v, N.startTime - C);
    }
  }
  function E(C, N) {
    w = !1, k && (k = !1, f(P), P = -1), g = !0;
    var z = p;
    try {
      for (d(N), m = t(s); m !== null && (!(m.expirationTime > N) || C && !Pe()); ) {
        var H = m.callback;
        if (typeof H == "function") {
          m.callback = null, p = m.priorityLevel;
          var X = H(m.expirationTime <= N);
          N = e.unstable_now(), typeof X == "function" ? m.callback = X : m === t(s) && r(s), d(N);
        } else r(s);
        m = t(s);
      }
      if (m !== null) var nr = !0;
      else {
        var gn = t(c);
        gn !== null && kl(v, gn.startTime - N), nr = !1;
      }
      return nr;
    } finally {
      m = null, p = z, g = !1;
    }
  }
  var x = !1, _ = null, P = -1, V = 5, T = -1;
  function Pe() {
    return !(e.unstable_now() - T < V);
  }
  function ct() {
    if (_ !== null) {
      var C = e.unstable_now();
      T = C;
      var N = !0;
      try {
        N = _(!0, C);
      } finally {
        N ? ft() : (x = !1, _ = null);
      }
    } else x = !1;
  }
  var ft;
  if (typeof a == "function") ft = function() {
    a(ct);
  };
  else if (typeof MessageChannel < "u") {
    var Do = new MessageChannel(), oc = Do.port2;
    Do.port1.onmessage = ct, ft = function() {
      oc.postMessage(null);
    };
  } else ft = function() {
    j(ct, 0);
  };
  function wl(C) {
    _ = C, x || (x = !0, ft());
  }
  function kl(C, N) {
    P = j(function() {
      C(e.unstable_now());
    }, N);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, wl(E));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return t(s);
  }, e.unstable_next = function(C) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var N = 3;
        break;
      default:
        N = p;
    }
    var z = p;
    p = N;
    try {
      return C();
    } finally {
      p = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, N) {
    switch (C) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        C = 3;
    }
    var z = p;
    p = C;
    try {
      return N();
    } finally {
      p = z;
    }
  }, e.unstable_scheduleCallback = function(C, N, z) {
    var H = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? H + z : H) : z = H, C) {
      case 1:
        var X = -1;
        break;
      case 2:
        X = 250;
        break;
      case 5:
        X = 1073741823;
        break;
      case 4:
        X = 1e4;
        break;
      default:
        X = 5e3;
    }
    return X = z + X, C = { id: h++, callback: N, priorityLevel: C, startTime: z, expirationTime: X, sortIndex: -1 }, z > H ? (C.sortIndex = z, n(c, C), t(s) === null && C === t(c) && (k ? (f(P), P = -1) : k = !0, kl(v, z - H))) : (C.sortIndex = X, n(s, C), w || g || (w = !0, wl(E))), C;
  }, e.unstable_shouldYield = Pe, e.unstable_wrapCallback = function(C) {
    var N = p;
    return function() {
      var z = p;
      p = N;
      try {
        return C.apply(this, arguments);
      } finally {
        p = z;
      }
    };
  };
})(os);
is.exports = os;
var zc = is.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lc = be, ye = zc;
function y(e) {
  for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var us = /* @__PURE__ */ new Set(), Ot = {};
function In(e, n) {
  et(e, n), et(e + "Capture", n);
}
function et(e, n) {
  for (Ot[e] = n, e = 0; e < n.length; e++) us.add(n[e]);
}
var Qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xl = Object.prototype.hasOwnProperty, Tc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $o = {}, Ao = {};
function Rc(e) {
  return Xl.call(Ao, e) ? !0 : Xl.call($o, e) ? !1 : Tc.test(e) ? Ao[e] = !0 : ($o[e] = !0, !1);
}
function Ic(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Oc(e, n, t, r) {
  if (n === null || typeof n > "u" || Ic(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null) switch (t.type) {
    case 3:
      return !n;
    case 4:
      return n === !1;
    case 5:
      return isNaN(n);
    case 6:
      return isNaN(n) || 1 > n;
  }
  return !1;
}
function se(e, n, t, r, l, i, o) {
  this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = i, this.removeEmptyString = o;
}
var b = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  b[e] = new se(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var n = e[0];
  b[n] = new se(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  b[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  b[e] = new se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  b[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  b[e] = new se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  b[e] = new se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  b[e] = new se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  b[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Wi = /[\-:]([a-z])/g;
function Qi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var n = e.replace(
    Wi,
    Qi
  );
  b[n] = new se(n, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var n = e.replace(Wi, Qi);
  b[n] = new se(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var n = e.replace(Wi, Qi);
  b[n] = new se(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  b[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
b.xlinkHref = new se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  b[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ki(e, n, t, r) {
  var l = b.hasOwnProperty(n) ? b[n] : null;
  (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (Oc(n, t, l, r) && (t = null), r || l === null ? Rc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Ge = Lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, lr = Symbol.for("react.element"), jn = Symbol.for("react.portal"), Fn = Symbol.for("react.fragment"), Yi = Symbol.for("react.strict_mode"), Gl = Symbol.for("react.profiler"), ss = Symbol.for("react.provider"), as = Symbol.for("react.context"), Xi = Symbol.for("react.forward_ref"), Zl = Symbol.for("react.suspense"), Jl = Symbol.for("react.suspense_list"), Gi = Symbol.for("react.memo"), Je = Symbol.for("react.lazy"), cs = Symbol.for("react.offscreen"), Bo = Symbol.iterator;
function dt(e) {
  return e === null || typeof e != "object" ? null : (e = Bo && e[Bo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var A = Object.assign, Cl;
function kt(e) {
  if (Cl === void 0) try {
    throw Error();
  } catch (t) {
    var n = t.stack.trim().match(/\n( *(at )?)/);
    Cl = n && n[1] || "";
  }
  return `
` + Cl + e;
}
var xl = !1;
function _l(e, n) {
  if (!e || xl) return "";
  xl = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n) if (n = function() {
      throw Error();
    }, Object.defineProperty(n.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(n, []);
      } catch (c) {
        var r = c;
      }
      Reflect.construct(e, [], n);
    } else {
      try {
        n.call();
      } catch (c) {
        r = c;
      }
      e.call(n.prototype);
    }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var l = c.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l[o] !== i[u]; ) u--;
      for (; 1 <= o && 0 <= u; o--, u--) if (l[o] !== i[u]) {
        if (o !== 1 || u !== 1)
          do
            if (o--, u--, 0 > u || l[o] !== i[u]) {
              var s = `
` + l[o].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= o && 0 <= u);
        break;
      }
    }
  } finally {
    xl = !1, Error.prepareStackTrace = t;
  }
  return (e = e ? e.displayName || e.name : "") ? kt(e) : "";
}
function Mc(e) {
  switch (e.tag) {
    case 5:
      return kt(e.type);
    case 16:
      return kt("Lazy");
    case 13:
      return kt("Suspense");
    case 19:
      return kt("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = _l(e.type, !1), e;
    case 11:
      return e = _l(e.type.render, !1), e;
    case 1:
      return e = _l(e.type, !0), e;
    default:
      return "";
  }
}
function ql(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Fn:
      return "Fragment";
    case jn:
      return "Portal";
    case Gl:
      return "Profiler";
    case Yi:
      return "StrictMode";
    case Zl:
      return "Suspense";
    case Jl:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case as:
      return (e.displayName || "Context") + ".Consumer";
    case ss:
      return (e._context.displayName || "Context") + ".Provider";
    case Xi:
      var n = e.render;
      return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Gi:
      return n = e.displayName || null, n !== null ? n : ql(e.type) || "Memo";
    case Je:
      n = e._payload, e = e._init;
      try {
        return ql(e(n));
      } catch {
      }
  }
  return null;
}
function Dc(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ql(n);
    case 8:
      return n === Yi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }
  return null;
}
function pn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function fs(e) {
  var n = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
}
function jc(e) {
  var n = fs(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
  if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
    var l = t.get, i = t.set;
    return Object.defineProperty(e, n, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(o) {
      r = "" + o, i.call(this, o);
    } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[n];
    } };
  }
}
function ir(e) {
  e._valueTracker || (e._valueTracker = jc(e));
}
function ds(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(), r = "";
  return e && (r = fs(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
}
function Ir(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function bl(e, n) {
  var t = n.checked;
  return A({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
}
function Vo(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
  t = pn(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
}
function ps(e, n) {
  n = n.checked, n != null && Ki(e, "checked", n, !1);
}
function ei(e, n) {
  ps(e, n);
  var t = pn(n.value), r = n.type;
  if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value") ? ni(e, n.type, t) : n.hasOwnProperty("defaultValue") && ni(e, n.type, pn(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
}
function Ho(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
    n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
  }
  t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
}
function ni(e, n, t) {
  (n !== "number" || Ir(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var St = Array.isArray;
function Xn(e, n, t, r) {
  if (e = e.options, n) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++) l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + pn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function ti(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(y(91));
  return A({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Wo(e, n) {
  var t = n.value;
  if (t == null) {
    if (t = n.children, n = n.defaultValue, t != null) {
      if (n != null) throw Error(y(92));
      if (St(t)) {
        if (1 < t.length) throw Error(y(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), t = n;
  }
  e._wrapperState = { initialValue: pn(t) };
}
function ms(e, n) {
  var t = pn(n.value), r = pn(n.defaultValue);
  t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
}
function Qo(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function hs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ri(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? hs(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var or, vs = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(n, t, r, l);
    });
  } : e;
}(function(e, n) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
  else {
    for (or = or || document.createElement("div"), or.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = or.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; n.firstChild; ) e.appendChild(n.firstChild);
  }
});
function Mt(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var xt = {
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
  strokeWidth: !0
}, Fc = ["Webkit", "ms", "Moz", "O"];
Object.keys(xt).forEach(function(e) {
  Fc.forEach(function(n) {
    n = n + e.charAt(0).toUpperCase() + e.substring(1), xt[n] = xt[e];
  });
});
function ys(e, n, t) {
  return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || xt.hasOwnProperty(e) && xt[e] ? ("" + n).trim() : n + "px";
}
function gs(e, n) {
  e = e.style;
  for (var t in n) if (n.hasOwnProperty(t)) {
    var r = t.indexOf("--") === 0, l = ys(t, n[t], r);
    t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
  }
}
var Uc = A({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function li(e, n) {
  if (n) {
    if (Uc[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(y(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(y(60));
      if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(y(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(y(62));
  }
}
function ii(e, n) {
  if (e.indexOf("-") === -1) return typeof n.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var oi = null;
function Zi(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ui = null, Gn = null, Zn = null;
function Ko(e) {
  if (e = bt(e)) {
    if (typeof ui != "function") throw Error(y(280));
    var n = e.stateNode;
    n && (n = sl(n), ui(e.stateNode, e.type, n));
  }
}
function ws(e) {
  Gn ? Zn ? Zn.push(e) : Zn = [e] : Gn = e;
}
function ks() {
  if (Gn) {
    var e = Gn, n = Zn;
    if (Zn = Gn = null, Ko(e), n) for (e = 0; e < n.length; e++) Ko(n[e]);
  }
}
function Ss(e, n) {
  return e(n);
}
function Es() {
}
var Pl = !1;
function Cs(e, n, t) {
  if (Pl) return e(n, t);
  Pl = !0;
  try {
    return Ss(e, n, t);
  } finally {
    Pl = !1, (Gn !== null || Zn !== null) && (Es(), ks());
  }
}
function Dt(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = sl(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && typeof t != "function") throw Error(y(231, n, typeof t));
  return t;
}
var si = !1;
if (Qe) try {
  var pt = {};
  Object.defineProperty(pt, "passive", { get: function() {
    si = !0;
  } }), window.addEventListener("test", pt, pt), window.removeEventListener("test", pt, pt);
} catch {
  si = !1;
}
function $c(e, n, t, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (h) {
    this.onError(h);
  }
}
var _t = !1, Or = null, Mr = !1, ai = null, Ac = { onError: function(e) {
  _t = !0, Or = e;
} };
function Bc(e, n, t, r, l, i, o, u, s) {
  _t = !1, Or = null, $c.apply(Ac, arguments);
}
function Vc(e, n, t, r, l, i, o, u, s) {
  if (Bc.apply(this, arguments), _t) {
    if (_t) {
      var c = Or;
      _t = !1, Or = null;
    } else throw Error(y(198));
    Mr || (Mr = !0, ai = c);
  }
}
function On(e) {
  var n = e, t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do
      n = e, n.flags & 4098 && (t = n.return), e = n.return;
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function xs(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
  }
  return null;
}
function Yo(e) {
  if (On(e) !== e) throw Error(y(188));
}
function Hc(e) {
  var n = e.alternate;
  if (!n) {
    if (n = On(e), n === null) throw Error(y(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (r = l.return, r !== null) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === t) return Yo(l), e;
        if (i === r) return Yo(l), n;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (t.return !== r.return) t = l, r = i;
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === t) {
          o = !0, t = l, r = i;
          break;
        }
        if (u === r) {
          o = !0, r = l, t = i;
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === t) {
            o = !0, t = i, r = l;
            break;
          }
          if (u === r) {
            o = !0, r = i, t = l;
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (t.alternate !== r) throw Error(y(190));
  }
  if (t.tag !== 3) throw Error(y(188));
  return t.stateNode.current === t ? e : n;
}
function _s(e) {
  return e = Hc(e), e !== null ? Ps(e) : null;
}
function Ps(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Ps(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Ns = ye.unstable_scheduleCallback, Xo = ye.unstable_cancelCallback, Wc = ye.unstable_shouldYield, Qc = ye.unstable_requestPaint, W = ye.unstable_now, Kc = ye.unstable_getCurrentPriorityLevel, Ji = ye.unstable_ImmediatePriority, zs = ye.unstable_UserBlockingPriority, Dr = ye.unstable_NormalPriority, Yc = ye.unstable_LowPriority, Ls = ye.unstable_IdlePriority, ll = null, Ue = null;
function Xc(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function") try {
    Ue.onCommitFiberRoot(ll, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Re = Math.clz32 ? Math.clz32 : Jc, Gc = Math.log, Zc = Math.LN2;
function Jc(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Gc(e) / Zc | 0) | 0;
}
var ur = 64, sr = 4194304;
function Et(e) {
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
function jr(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = t & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? r = Et(u) : (i &= o, i !== 0 && (r = Et(i)));
  } else o = t & ~l, o !== 0 ? r = Et(o) : i !== 0 && (r = Et(i));
  if (r === 0) return 0;
  if (n !== 0 && n !== r && !(n & l) && (l = r & -r, i = n & -n, l >= i || l === 16 && (i & 4194240) !== 0)) return n;
  if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= r; 0 < n; ) t = 31 - Re(n), l = 1 << t, r |= e[t], n &= ~l;
  return r;
}
function qc(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
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
      return n + 5e3;
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
function bc(e, n) {
  for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - Re(i), u = 1 << o, s = l[o];
    s === -1 ? (!(u & t) || u & r) && (l[o] = qc(u, n)) : s <= n && (e.expiredLanes |= u), i &= ~u;
  }
}
function ci(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ts() {
  var e = ur;
  return ur <<= 1, !(ur & 4194240) && (ur = 64), e;
}
function Nl(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function Jt(e, n, t) {
  e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Re(n), e[n] = t;
}
function ef(e, n) {
  var t = e.pendingLanes & ~n;
  e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Re(t), i = 1 << l;
    n[l] = 0, r[l] = -1, e[l] = -1, t &= ~i;
  }
}
function qi(e, n) {
  var t = e.entangledLanes |= n;
  for (e = e.entanglements; t; ) {
    var r = 31 - Re(t), l = 1 << r;
    l & n | e[r] & n && (e[r] |= n), t &= ~l;
  }
}
var I = 0;
function Rs(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Is, bi, Os, Ms, Ds, fi = !1, ar = [], ln = null, on = null, un = null, jt = /* @__PURE__ */ new Map(), Ft = /* @__PURE__ */ new Map(), en = [], nf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Go(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      ln = null;
      break;
    case "dragenter":
    case "dragleave":
      on = null;
      break;
    case "mouseover":
    case "mouseout":
      un = null;
      break;
    case "pointerover":
    case "pointerout":
      jt.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ft.delete(n.pointerId);
  }
}
function mt(e, n, t, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, n !== null && (n = bt(n), n !== null && bi(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
}
function tf(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return ln = mt(ln, e, n, t, r, l), !0;
    case "dragenter":
      return on = mt(on, e, n, t, r, l), !0;
    case "mouseover":
      return un = mt(un, e, n, t, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return jt.set(i, mt(jt.get(i) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, Ft.set(i, mt(Ft.get(i) || null, e, n, t, r, l)), !0;
  }
  return !1;
}
function js(e) {
  var n = En(e.target);
  if (n !== null) {
    var t = On(n);
    if (t !== null) {
      if (n = t.tag, n === 13) {
        if (n = xs(t), n !== null) {
          e.blockedOn = n, Ds(e.priority, function() {
            Os(t);
          });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Er(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = di(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      oi = r, t.target.dispatchEvent(r), oi = null;
    } else return n = bt(t), n !== null && bi(n), e.blockedOn = t, !1;
    n.shift();
  }
  return !0;
}
function Zo(e, n, t) {
  Er(e) && t.delete(n);
}
function rf() {
  fi = !1, ln !== null && Er(ln) && (ln = null), on !== null && Er(on) && (on = null), un !== null && Er(un) && (un = null), jt.forEach(Zo), Ft.forEach(Zo);
}
function ht(e, n) {
  e.blockedOn === n && (e.blockedOn = null, fi || (fi = !0, ye.unstable_scheduleCallback(ye.unstable_NormalPriority, rf)));
}
function Ut(e) {
  function n(l) {
    return ht(l, e);
  }
  if (0 < ar.length) {
    ht(ar[0], e);
    for (var t = 1; t < ar.length; t++) {
      var r = ar[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ln !== null && ht(ln, e), on !== null && ht(on, e), un !== null && ht(un, e), jt.forEach(n), Ft.forEach(n), t = 0; t < en.length; t++) r = en[t], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < en.length && (t = en[0], t.blockedOn === null); ) js(t), t.blockedOn === null && en.shift();
}
var Jn = Ge.ReactCurrentBatchConfig, Fr = !0;
function lf(e, n, t, r) {
  var l = I, i = Jn.transition;
  Jn.transition = null;
  try {
    I = 1, eo(e, n, t, r);
  } finally {
    I = l, Jn.transition = i;
  }
}
function of(e, n, t, r) {
  var l = I, i = Jn.transition;
  Jn.transition = null;
  try {
    I = 4, eo(e, n, t, r);
  } finally {
    I = l, Jn.transition = i;
  }
}
function eo(e, n, t, r) {
  if (Fr) {
    var l = di(e, n, t, r);
    if (l === null) Fl(e, n, r, Ur, t), Go(e, r);
    else if (tf(l, e, n, t, r)) r.stopPropagation();
    else if (Go(e, r), n & 4 && -1 < nf.indexOf(e)) {
      for (; l !== null; ) {
        var i = bt(l);
        if (i !== null && Is(i), i = di(e, n, t, r), i === null && Fl(e, n, r, Ur, t), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Fl(e, n, r, null, t);
  }
}
var Ur = null;
function di(e, n, t, r) {
  if (Ur = null, e = Zi(r), e = En(e), e !== null) if (n = On(e), n === null) e = null;
  else if (t = n.tag, t === 13) {
    if (e = xs(n), e !== null) return e;
    e = null;
  } else if (t === 3) {
    if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
    e = null;
  } else n !== e && (e = null);
  return Ur = e, null;
}
function Fs(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Kc()) {
        case Ji:
          return 1;
        case zs:
          return 4;
        case Dr:
        case Yc:
          return 16;
        case Ls:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tn = null, no = null, Cr = null;
function Us() {
  if (Cr) return Cr;
  var e, n = no, t = n.length, r, l = "value" in tn ? tn.value : tn.textContent, i = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++) ;
  var o = t - e;
  for (r = 1; r <= o && n[t - r] === l[i - r]; r++) ;
  return Cr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function xr(e) {
  var n = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function cr() {
  return !0;
}
function Jo() {
  return !1;
}
function we(e) {
  function n(t, r, l, i, o) {
    this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (t = e[u], this[u] = t ? t(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? cr : Jo, this.isPropagationStopped = Jo, this;
  }
  return A(n.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var t = this.nativeEvent;
    t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = cr);
  }, stopPropagation: function() {
    var t = this.nativeEvent;
    t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = cr);
  }, persist: function() {
  }, isPersistent: cr }), n;
}
var st = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, to = we(st), qt = A({}, st, { view: 0, detail: 0 }), uf = we(qt), zl, Ll, vt, il = A({}, qt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ro, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== vt && (vt && e.type === "mousemove" ? (zl = e.screenX - vt.screenX, Ll = e.screenY - vt.screenY) : Ll = zl = 0, vt = e), zl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ll;
} }), qo = we(il), sf = A({}, il, { dataTransfer: 0 }), af = we(sf), cf = A({}, qt, { relatedTarget: 0 }), Tl = we(cf), ff = A({}, st, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), df = we(ff), pf = A({}, st, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), mf = we(pf), hf = A({}, st, { data: 0 }), bo = we(hf), vf = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, yf = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, gf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function wf(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = gf[e]) ? !!n[e] : !1;
}
function ro() {
  return wf;
}
var kf = A({}, qt, { key: function(e) {
  if (e.key) {
    var n = vf[e.key] || e.key;
    if (n !== "Unidentified") return n;
  }
  return e.type === "keypress" ? (e = xr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? yf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ro, charCode: function(e) {
  return e.type === "keypress" ? xr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? xr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Sf = we(kf), Ef = A({}, il, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), eu = we(Ef), Cf = A({}, qt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ro }), xf = we(Cf), _f = A({}, st, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Pf = we(_f), Nf = A({}, il, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), zf = we(Nf), Lf = [9, 13, 27, 32], lo = Qe && "CompositionEvent" in window, Pt = null;
Qe && "documentMode" in document && (Pt = document.documentMode);
var Tf = Qe && "TextEvent" in window && !Pt, $s = Qe && (!lo || Pt && 8 < Pt && 11 >= Pt), nu = " ", tu = !1;
function As(e, n) {
  switch (e) {
    case "keyup":
      return Lf.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Bs(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Un = !1;
function Rf(e, n) {
  switch (e) {
    case "compositionend":
      return Bs(n);
    case "keypress":
      return n.which !== 32 ? null : (tu = !0, nu);
    case "textInput":
      return e = n.data, e === nu && tu ? null : e;
    default:
      return null;
  }
}
function If(e, n) {
  if (Un) return e === "compositionend" || !lo && As(e, n) ? (e = Us(), Cr = no = tn = null, Un = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return $s && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var Of = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ru(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!Of[e.type] : n === "textarea";
}
function Vs(e, n, t, r) {
  ws(r), n = $r(n, "onChange"), 0 < n.length && (t = new to("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
}
var Nt = null, $t = null;
function Mf(e) {
  bs(e, 0);
}
function ol(e) {
  var n = Bn(e);
  if (ds(n)) return e;
}
function Df(e, n) {
  if (e === "change") return n;
}
var Hs = !1;
if (Qe) {
  var Rl;
  if (Qe) {
    var Il = "oninput" in document;
    if (!Il) {
      var lu = document.createElement("div");
      lu.setAttribute("oninput", "return;"), Il = typeof lu.oninput == "function";
    }
    Rl = Il;
  } else Rl = !1;
  Hs = Rl && (!document.documentMode || 9 < document.documentMode);
}
function iu() {
  Nt && (Nt.detachEvent("onpropertychange", Ws), $t = Nt = null);
}
function Ws(e) {
  if (e.propertyName === "value" && ol($t)) {
    var n = [];
    Vs(n, $t, e, Zi(e)), Cs(Mf, n);
  }
}
function jf(e, n, t) {
  e === "focusin" ? (iu(), Nt = n, $t = t, Nt.attachEvent("onpropertychange", Ws)) : e === "focusout" && iu();
}
function Ff(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ol($t);
}
function Uf(e, n) {
  if (e === "click") return ol(n);
}
function $f(e, n) {
  if (e === "input" || e === "change") return ol(n);
}
function Af(e, n) {
  return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
}
var Oe = typeof Object.is == "function" ? Object.is : Af;
function At(e, n) {
  if (Oe(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
  var t = Object.keys(e), r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!Xl.call(n, l) || !Oe(e[l], n[l])) return !1;
  }
  return !0;
}
function ou(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function uu(e, n) {
  var t = ou(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (r = e + t.textContent.length, e <= n && r >= n) return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = ou(t);
  }
}
function Qs(e, n) {
  return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Qs(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
}
function Ks() {
  for (var e = window, n = Ir(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Ir(e.document);
  }
  return n;
}
function io(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
}
function Bf(e) {
  var n = Ks(), t = e.focusedElem, r = e.selectionRange;
  if (n !== t && t && t.ownerDocument && Qs(t.ownerDocument.documentElement, t)) {
    if (r !== null && io(t)) {
      if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
      else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = t.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = uu(t, i);
        var o = uu(
          t,
          r
        );
        l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(n), e.extend(o.node, o.offset)) : (n.setEnd(o.node, o.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; e = e.parentNode; ) e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++) e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Vf = Qe && "documentMode" in document && 11 >= document.documentMode, $n = null, pi = null, zt = null, mi = !1;
function su(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  mi || $n == null || $n !== Ir(r) || (r = $n, "selectionStart" in r && io(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), zt && At(zt, r) || (zt = r, r = $r(pi, "onSelect"), 0 < r.length && (n = new to("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = $n)));
}
function fr(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
}
var An = { animationend: fr("Animation", "AnimationEnd"), animationiteration: fr("Animation", "AnimationIteration"), animationstart: fr("Animation", "AnimationStart"), transitionend: fr("Transition", "TransitionEnd") }, Ol = {}, Ys = {};
Qe && (Ys = document.createElement("div").style, "AnimationEvent" in window || (delete An.animationend.animation, delete An.animationiteration.animation, delete An.animationstart.animation), "TransitionEvent" in window || delete An.transitionend.transition);
function ul(e) {
  if (Ol[e]) return Ol[e];
  if (!An[e]) return e;
  var n = An[e], t;
  for (t in n) if (n.hasOwnProperty(t) && t in Ys) return Ol[e] = n[t];
  return e;
}
var Xs = ul("animationend"), Gs = ul("animationiteration"), Zs = ul("animationstart"), Js = ul("transitionend"), qs = /* @__PURE__ */ new Map(), au = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function hn(e, n) {
  qs.set(e, n), In(n, [e]);
}
for (var Ml = 0; Ml < au.length; Ml++) {
  var Dl = au[Ml], Hf = Dl.toLowerCase(), Wf = Dl[0].toUpperCase() + Dl.slice(1);
  hn(Hf, "on" + Wf);
}
hn(Xs, "onAnimationEnd");
hn(Gs, "onAnimationIteration");
hn(Zs, "onAnimationStart");
hn("dblclick", "onDoubleClick");
hn("focusin", "onFocus");
hn("focusout", "onBlur");
hn(Js, "onTransitionEnd");
et("onMouseEnter", ["mouseout", "mouseover"]);
et("onMouseLeave", ["mouseout", "mouseover"]);
et("onPointerEnter", ["pointerout", "pointerover"]);
et("onPointerLeave", ["pointerout", "pointerover"]);
In("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
In("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
In("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
In("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
In("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
In("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ct = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Qf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ct));
function cu(e, n, t) {
  var r = e.type || "unknown-event";
  e.currentTarget = t, Vc(r, n, void 0, e), e.currentTarget = null;
}
function bs(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (n) for (var o = r.length - 1; 0 <= o; o--) {
        var u = r[o], s = u.instance, c = u.currentTarget;
        if (u = u.listener, s !== i && l.isPropagationStopped()) break e;
        cu(l, u, c), i = s;
      }
      else for (o = 0; o < r.length; o++) {
        if (u = r[o], s = u.instance, c = u.currentTarget, u = u.listener, s !== i && l.isPropagationStopped()) break e;
        cu(l, u, c), i = s;
      }
    }
  }
  if (Mr) throw e = ai, Mr = !1, ai = null, e;
}
function M(e, n) {
  var t = n[wi];
  t === void 0 && (t = n[wi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  t.has(r) || (ea(n, e, 2, !1), t.add(r));
}
function jl(e, n, t) {
  var r = 0;
  n && (r |= 4), ea(t, e, r, n);
}
var dr = "_reactListening" + Math.random().toString(36).slice(2);
function Bt(e) {
  if (!e[dr]) {
    e[dr] = !0, us.forEach(function(t) {
      t !== "selectionchange" && (Qf.has(t) || jl(t, !1, e), jl(t, !0, e));
    });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[dr] || (n[dr] = !0, jl("selectionchange", !1, n));
  }
}
function ea(e, n, t, r) {
  switch (Fs(n)) {
    case 1:
      var l = lf;
      break;
    case 4:
      l = of;
      break;
    default:
      l = eo;
  }
  t = l.bind(null, n, t, e), l = void 0, !si || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
}
function Fl(e, n, t, r, l) {
  var i = r;
  if (!(n & 1) && !(n & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var u = r.stateNode.containerInfo;
      if (u === l || u.nodeType === 8 && u.parentNode === l) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var s = o.tag;
        if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
        o = o.return;
      }
      for (; u !== null; ) {
        if (o = En(u), o === null) return;
        if (s = o.tag, s === 5 || s === 6) {
          r = i = o;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Cs(function() {
    var c = i, h = Zi(t), m = [];
    e: {
      var p = qs.get(e);
      if (p !== void 0) {
        var g = to, w = e;
        switch (e) {
          case "keypress":
            if (xr(t) === 0) break e;
          case "keydown":
          case "keyup":
            g = Sf;
            break;
          case "focusin":
            w = "focus", g = Tl;
            break;
          case "focusout":
            w = "blur", g = Tl;
            break;
          case "beforeblur":
          case "afterblur":
            g = Tl;
            break;
          case "click":
            if (t.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = qo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = af;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = xf;
            break;
          case Xs:
          case Gs:
          case Zs:
            g = df;
            break;
          case Js:
            g = Pf;
            break;
          case "scroll":
            g = uf;
            break;
          case "wheel":
            g = zf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = mf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = eu;
        }
        var k = (n & 4) !== 0, j = !k && e === "scroll", f = k ? p !== null ? p + "Capture" : null : p;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = Dt(a, f), v != null && k.push(Vt(a, v, d)))), j) break;
          a = a.return;
        }
        0 < k.length && (p = new g(p, w, null, t, h), m.push({ event: p, listeners: k }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && t !== oi && (w = t.relatedTarget || t.fromElement) && (En(w) || w[Ke])) break e;
        if ((g || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (w = t.relatedTarget || t.toElement, g = c, w = w ? En(w) : null, w !== null && (j = On(w), w !== j || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = c), g !== w)) {
          if (k = qo, v = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (k = eu, v = "onPointerLeave", f = "onPointerEnter", a = "pointer"), j = g == null ? p : Bn(g), d = w == null ? p : Bn(w), p = new k(v, a + "leave", g, t, h), p.target = j, p.relatedTarget = d, v = null, En(h) === c && (k = new k(f, a + "enter", w, t, h), k.target = d, k.relatedTarget = j, v = k), j = v, g && w) n: {
            for (k = g, f = w, a = 0, d = k; d; d = Mn(d)) a++;
            for (d = 0, v = f; v; v = Mn(v)) d++;
            for (; 0 < a - d; ) k = Mn(k), a--;
            for (; 0 < d - a; ) f = Mn(f), d--;
            for (; a--; ) {
              if (k === f || f !== null && k === f.alternate) break n;
              k = Mn(k), f = Mn(f);
            }
            k = null;
          }
          else k = null;
          g !== null && fu(m, p, g, k, !1), w !== null && j !== null && fu(m, j, w, k, !0);
        }
      }
      e: {
        if (p = c ? Bn(c) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file") var E = Df;
        else if (ru(p)) if (Hs) E = $f;
        else {
          E = Ff;
          var x = jf;
        }
        else (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = Uf);
        if (E && (E = E(e, c))) {
          Vs(m, E, t, h);
          break e;
        }
        x && x(e, p, c), e === "focusout" && (x = p._wrapperState) && x.controlled && p.type === "number" && ni(p, "number", p.value);
      }
      switch (x = c ? Bn(c) : window, e) {
        case "focusin":
          (ru(x) || x.contentEditable === "true") && ($n = x, pi = c, zt = null);
          break;
        case "focusout":
          zt = pi = $n = null;
          break;
        case "mousedown":
          mi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          mi = !1, su(m, t, h);
          break;
        case "selectionchange":
          if (Vf) break;
        case "keydown":
        case "keyup":
          su(m, t, h);
      }
      var _;
      if (lo) e: {
        switch (e) {
          case "compositionstart":
            var P = "onCompositionStart";
            break e;
          case "compositionend":
            P = "onCompositionEnd";
            break e;
          case "compositionupdate":
            P = "onCompositionUpdate";
            break e;
        }
        P = void 0;
      }
      else Un ? As(e, t) && (P = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (P = "onCompositionStart");
      P && ($s && t.locale !== "ko" && (Un || P !== "onCompositionStart" ? P === "onCompositionEnd" && Un && (_ = Us()) : (tn = h, no = "value" in tn ? tn.value : tn.textContent, Un = !0)), x = $r(c, P), 0 < x.length && (P = new bo(P, e, null, t, h), m.push({ event: P, listeners: x }), _ ? P.data = _ : (_ = Bs(t), _ !== null && (P.data = _)))), (_ = Tf ? Rf(e, t) : If(e, t)) && (c = $r(c, "onBeforeInput"), 0 < c.length && (h = new bo("onBeforeInput", "beforeinput", null, t, h), m.push({ event: h, listeners: c }), h.data = _));
    }
    bs(m, n);
  });
}
function Vt(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function $r(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = Dt(e, t), i != null && r.unshift(Vt(e, i, l)), i = Dt(e, n), i != null && r.push(Vt(e, i, l))), e = e.return;
  }
  return r;
}
function Mn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function fu(e, n, t, r, l) {
  for (var i = n._reactName, o = []; t !== null && t !== r; ) {
    var u = t, s = u.alternate, c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && c !== null && (u = c, l ? (s = Dt(t, i), s != null && o.unshift(Vt(t, s, u))) : l || (s = Dt(t, i), s != null && o.push(Vt(t, s, u)))), t = t.return;
  }
  o.length !== 0 && e.push({ event: n, listeners: o });
}
var Kf = /\r\n?/g, Yf = /\u0000|\uFFFD/g;
function du(e) {
  return (typeof e == "string" ? e : "" + e).replace(Kf, `
`).replace(Yf, "");
}
function pr(e, n, t) {
  if (n = du(n), du(e) !== n && t) throw Error(y(425));
}
function Ar() {
}
var hi = null, vi = null;
function yi(e, n) {
  return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
}
var gi = typeof setTimeout == "function" ? setTimeout : void 0, Xf = typeof clearTimeout == "function" ? clearTimeout : void 0, pu = typeof Promise == "function" ? Promise : void 0, Gf = typeof queueMicrotask == "function" ? queueMicrotask : typeof pu < "u" ? function(e) {
  return pu.resolve(null).then(e).catch(Zf);
} : gi;
function Zf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ul(e, n) {
  var t = n, r = 0;
  do {
    var l = t.nextSibling;
    if (e.removeChild(t), l && l.nodeType === 8) if (t = l.data, t === "/$") {
      if (r === 0) {
        e.removeChild(l), Ut(n);
        return;
      }
      r--;
    } else t !== "$" && t !== "$?" && t !== "$!" || r++;
    t = l;
  } while (t);
  Ut(n);
}
function sn(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (n = e.data, n === "$" || n === "$!" || n === "$?") break;
      if (n === "/$") return null;
    }
  }
  return e;
}
function mu(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0) return e;
        n--;
      } else t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var at = Math.random().toString(36).slice(2), je = "__reactFiber$" + at, Ht = "__reactProps$" + at, Ke = "__reactContainer$" + at, wi = "__reactEvents$" + at, Jf = "__reactListeners$" + at, qf = "__reactHandles$" + at;
function En(e) {
  var n = e[je];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if (n = t[Ke] || t[je]) {
      if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = mu(e); e !== null; ) {
        if (t = e[je]) return t;
        e = mu(e);
      }
      return n;
    }
    e = t, t = e.parentNode;
  }
  return null;
}
function bt(e) {
  return e = e[je] || e[Ke], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function sl(e) {
  return e[Ht] || null;
}
var ki = [], Vn = -1;
function vn(e) {
  return { current: e };
}
function D(e) {
  0 > Vn || (e.current = ki[Vn], ki[Vn] = null, Vn--);
}
function O(e, n) {
  Vn++, ki[Vn] = e.current, e.current = n;
}
var mn = {}, re = vn(mn), fe = vn(!1), Nn = mn;
function nt(e, n) {
  var t = e.type.contextTypes;
  if (!t) return mn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in t) l[i] = n[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function de(e) {
  return e = e.childContextTypes, e != null;
}
function Br() {
  D(fe), D(re);
}
function hu(e, n, t) {
  if (re.current !== mn) throw Error(y(168));
  O(re, n), O(fe, t);
}
function na(e, n, t) {
  var r = e.stateNode;
  if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(y(108, Dc(e) || "Unknown", l));
  return A({}, t, r);
}
function Vr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || mn, Nn = re.current, O(re, e), O(fe, fe.current), !0;
}
function vu(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  t ? (e = na(e, n, Nn), r.__reactInternalMemoizedMergedChildContext = e, D(fe), D(re), O(re, e)) : D(fe), O(fe, t);
}
var Be = null, al = !1, $l = !1;
function ta(e) {
  Be === null ? Be = [e] : Be.push(e);
}
function bf(e) {
  al = !0, ta(e);
}
function yn() {
  if (!$l && Be !== null) {
    $l = !0;
    var e = 0, n = I;
    try {
      var t = Be;
      for (I = 1; e < t.length; e++) {
        var r = t[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Be = null, al = !1;
    } catch (l) {
      throw Be !== null && (Be = Be.slice(e + 1)), Ns(Ji, yn), l;
    } finally {
      I = n, $l = !1;
    }
  }
  return null;
}
var Hn = [], Wn = 0, Hr = null, Wr = 0, ke = [], Se = 0, zn = null, Ve = 1, He = "";
function kn(e, n) {
  Hn[Wn++] = Wr, Hn[Wn++] = Hr, Hr = e, Wr = n;
}
function ra(e, n, t) {
  ke[Se++] = Ve, ke[Se++] = He, ke[Se++] = zn, zn = e;
  var r = Ve;
  e = He;
  var l = 32 - Re(r) - 1;
  r &= ~(1 << l), t += 1;
  var i = 32 - Re(n) + l;
  if (30 < i) {
    var o = l - l % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Ve = 1 << 32 - Re(n) + l | t << l | r, He = i + e;
  } else Ve = 1 << i | t << l | r, He = e;
}
function oo(e) {
  e.return !== null && (kn(e, 1), ra(e, 1, 0));
}
function uo(e) {
  for (; e === Hr; ) Hr = Hn[--Wn], Hn[Wn] = null, Wr = Hn[--Wn], Hn[Wn] = null;
  for (; e === zn; ) zn = ke[--Se], ke[Se] = null, He = ke[--Se], ke[Se] = null, Ve = ke[--Se], ke[Se] = null;
}
var ve = null, he = null, F = !1, Te = null;
function la(e, n) {
  var t = Ee(5, null, null, 0);
  t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
}
function yu(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, ve = e, he = sn(n.firstChild), !0) : !1;
    case 6:
      return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, ve = e, he = null, !0) : !1;
    case 13:
      return n = n.nodeType !== 8 ? null : n, n !== null ? (t = zn !== null ? { id: Ve, overflow: He } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = Ee(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, ve = e, he = null, !0) : !1;
    default:
      return !1;
  }
}
function Si(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ei(e) {
  if (F) {
    var n = he;
    if (n) {
      var t = n;
      if (!yu(e, n)) {
        if (Si(e)) throw Error(y(418));
        n = sn(t.nextSibling);
        var r = ve;
        n && yu(e, n) ? la(r, t) : (e.flags = e.flags & -4097 | 2, F = !1, ve = e);
      }
    } else {
      if (Si(e)) throw Error(y(418));
      e.flags = e.flags & -4097 | 2, F = !1, ve = e;
    }
  }
}
function gu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ve = e;
}
function mr(e) {
  if (e !== ve) return !1;
  if (!F) return gu(e), F = !0, !1;
  var n;
  if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !yi(e.type, e.memoizedProps)), n && (n = he)) {
    if (Si(e)) throw ia(), Error(y(418));
    for (; n; ) la(e, n), n = sn(n.nextSibling);
  }
  if (gu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(y(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              he = sn(e.nextSibling);
              break e;
            }
            n--;
          } else t !== "$" && t !== "$!" && t !== "$?" || n++;
        }
        e = e.nextSibling;
      }
      he = null;
    }
  } else he = ve ? sn(e.stateNode.nextSibling) : null;
  return !0;
}
function ia() {
  for (var e = he; e; ) e = sn(e.nextSibling);
}
function tt() {
  he = ve = null, F = !1;
}
function so(e) {
  Te === null ? Te = [e] : Te.push(e);
}
var ed = Ge.ReactCurrentBatchConfig;
function yt(e, n, t) {
  if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (t._owner) {
      if (t = t._owner, t) {
        if (t.tag !== 1) throw Error(y(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r, i = "" + e;
      return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === i ? n.ref : (n = function(o) {
        var u = l.refs;
        o === null ? delete u[i] : u[i] = o;
      }, n._stringRef = i, n);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!t._owner) throw Error(y(290, e));
  }
  return e;
}
function hr(e, n) {
  throw e = Object.prototype.toString.call(n), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
}
function wu(e) {
  var n = e._init;
  return n(e._payload);
}
function oa(e) {
  function n(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
    }
  }
  function t(f, a) {
    if (!e) return null;
    for (; a !== null; ) n(f, a), a = a.sibling;
    return null;
  }
  function r(f, a) {
    for (f = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
    return f;
  }
  function l(f, a) {
    return f = dn(f, a), f.index = 0, f.sibling = null, f;
  }
  function i(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6 ? (a = Kl(d, f.mode, v), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, v) {
    var E = d.type;
    return E === Fn ? h(f, a, d.props.children, v, d.key) : a !== null && (a.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Je && wu(E) === a.type) ? (v = l(a, d.props), v.ref = yt(f, a, d), v.return = f, v) : (v = Rr(d.type, d.key, d.props, null, f.mode, v), v.ref = yt(f, a, d), v.return = f, v);
  }
  function c(f, a, d, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = Yl(d, f.mode, v), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function h(f, a, d, v, E) {
    return a === null || a.tag !== 7 ? (a = Pn(d, f.mode, v, E), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function m(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = Kl("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case lr:
          return d = Rr(a.type, a.key, a.props, null, f.mode, d), d.ref = yt(f, null, a), d.return = f, d;
        case jn:
          return a = Yl(a, f.mode, d), a.return = f, a;
        case Je:
          var v = a._init;
          return m(f, v(a._payload), d);
      }
      if (St(a) || dt(a)) return a = Pn(a, f.mode, d, null), a.return = f, a;
      hr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var E = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return E !== null ? null : u(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case lr:
          return d.key === E ? s(f, a, d, v) : null;
        case jn:
          return d.key === E ? c(f, a, d, v) : null;
        case Je:
          return E = d._init, p(
            f,
            a,
            E(d._payload),
            v
          );
      }
      if (St(d) || dt(d)) return E !== null ? null : h(f, a, d, v, null);
      hr(f, d);
    }
    return null;
  }
  function g(f, a, d, v, E) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(d) || null, u(a, f, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case lr:
          return f = f.get(v.key === null ? d : v.key) || null, s(a, f, v, E);
        case jn:
          return f = f.get(v.key === null ? d : v.key) || null, c(a, f, v, E);
        case Je:
          var x = v._init;
          return g(f, a, d, x(v._payload), E);
      }
      if (St(v) || dt(v)) return f = f.get(d) || null, h(a, f, v, E, null);
      hr(a, v);
    }
    return null;
  }
  function w(f, a, d, v) {
    for (var E = null, x = null, _ = a, P = a = 0, V = null; _ !== null && P < d.length; P++) {
      _.index > P ? (V = _, _ = null) : V = _.sibling;
      var T = p(f, _, d[P], v);
      if (T === null) {
        _ === null && (_ = V);
        break;
      }
      e && _ && T.alternate === null && n(f, _), a = i(T, a, P), x === null ? E = T : x.sibling = T, x = T, _ = V;
    }
    if (P === d.length) return t(f, _), F && kn(f, P), E;
    if (_ === null) {
      for (; P < d.length; P++) _ = m(f, d[P], v), _ !== null && (a = i(_, a, P), x === null ? E = _ : x.sibling = _, x = _);
      return F && kn(f, P), E;
    }
    for (_ = r(f, _); P < d.length; P++) V = g(_, f, P, d[P], v), V !== null && (e && V.alternate !== null && _.delete(V.key === null ? P : V.key), a = i(V, a, P), x === null ? E = V : x.sibling = V, x = V);
    return e && _.forEach(function(Pe) {
      return n(f, Pe);
    }), F && kn(f, P), E;
  }
  function k(f, a, d, v) {
    var E = dt(d);
    if (typeof E != "function") throw Error(y(150));
    if (d = E.call(d), d == null) throw Error(y(151));
    for (var x = E = null, _ = a, P = a = 0, V = null, T = d.next(); _ !== null && !T.done; P++, T = d.next()) {
      _.index > P ? (V = _, _ = null) : V = _.sibling;
      var Pe = p(f, _, T.value, v);
      if (Pe === null) {
        _ === null && (_ = V);
        break;
      }
      e && _ && Pe.alternate === null && n(f, _), a = i(Pe, a, P), x === null ? E = Pe : x.sibling = Pe, x = Pe, _ = V;
    }
    if (T.done) return t(
      f,
      _
    ), F && kn(f, P), E;
    if (_ === null) {
      for (; !T.done; P++, T = d.next()) T = m(f, T.value, v), T !== null && (a = i(T, a, P), x === null ? E = T : x.sibling = T, x = T);
      return F && kn(f, P), E;
    }
    for (_ = r(f, _); !T.done; P++, T = d.next()) T = g(_, f, P, T.value, v), T !== null && (e && T.alternate !== null && _.delete(T.key === null ? P : T.key), a = i(T, a, P), x === null ? E = T : x.sibling = T, x = T);
    return e && _.forEach(function(ct) {
      return n(f, ct);
    }), F && kn(f, P), E;
  }
  function j(f, a, d, v) {
    if (typeof d == "object" && d !== null && d.type === Fn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case lr:
          e: {
            for (var E = d.key, x = a; x !== null; ) {
              if (x.key === E) {
                if (E = d.type, E === Fn) {
                  if (x.tag === 7) {
                    t(f, x.sibling), a = l(x, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (x.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Je && wu(E) === x.type) {
                  t(f, x.sibling), a = l(x, d.props), a.ref = yt(f, x, d), a.return = f, f = a;
                  break e;
                }
                t(f, x);
                break;
              } else n(f, x);
              x = x.sibling;
            }
            d.type === Fn ? (a = Pn(d.props.children, f.mode, v, d.key), a.return = f, f = a) : (v = Rr(d.type, d.key, d.props, null, f.mode, v), v.ref = yt(f, a, d), v.return = f, f = v);
          }
          return o(f);
        case jn:
          e: {
            for (x = d.key; a !== null; ) {
              if (a.key === x) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                t(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                break e;
              } else {
                t(f, a);
                break;
              }
              else n(f, a);
              a = a.sibling;
            }
            a = Yl(d, f.mode, v), a.return = f, f = a;
          }
          return o(f);
        case Je:
          return x = d._init, j(f, a, x(d._payload), v);
      }
      if (St(d)) return w(f, a, d, v);
      if (dt(d)) return k(f, a, d, v);
      hr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (t(f, a.sibling), a = l(a, d), a.return = f, f = a) : (t(f, a), a = Kl(d, f.mode, v), a.return = f, f = a), o(f)) : t(f, a);
  }
  return j;
}
var rt = oa(!0), ua = oa(!1), Qr = vn(null), Kr = null, Qn = null, ao = null;
function co() {
  ao = Qn = Kr = null;
}
function fo(e) {
  var n = Qr.current;
  D(Qr), e._currentValue = n;
}
function Ci(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
    e = e.return;
  }
}
function qn(e, n) {
  Kr = e, ao = Qn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (ce = !0), e.firstContext = null);
}
function xe(e) {
  var n = e._currentValue;
  if (ao !== e) if (e = { context: e, memoizedValue: n, next: null }, Qn === null) {
    if (Kr === null) throw Error(y(308));
    Qn = e, Kr.dependencies = { lanes: 0, firstContext: e };
  } else Qn = Qn.next = e;
  return n;
}
var Cn = null;
function po(e) {
  Cn === null ? Cn = [e] : Cn.push(e);
}
function sa(e, n, t, r) {
  var l = n.interleaved;
  return l === null ? (t.next = t, po(n)) : (t.next = l.next, l.next = t), n.interleaved = t, Ye(e, r);
}
function Ye(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
  return t.tag === 3 ? t.stateNode : null;
}
var qe = !1;
function mo(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function aa(e, n) {
  e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function We(e, n) {
  return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
}
function an(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, R & 2) {
    var l = r.pending;
    return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, Ye(e, t);
  }
  return l = r.interleaved, l === null ? (n.next = n, po(r)) : (n.next = l.next, l.next = n), r.interleaved = n, Ye(e, t);
}
function _r(e, n, t) {
  if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, qi(e, t);
  }
}
function ku(e, n) {
  var t = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, t === r)) {
    var l = null, i = null;
    if (t = t.firstBaseUpdate, t !== null) {
      do {
        var o = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
        i === null ? l = i = o : i = i.next = o, t = t.next;
      } while (t !== null);
      i === null ? l = i = n : i = i.next = n;
    } else l = i = n;
    t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = t;
    return;
  }
  e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
}
function Yr(e, n, t, r) {
  var l = e.updateQueue;
  qe = !1;
  var i = l.firstBaseUpdate, o = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, c = s.next;
    s.next = null, o === null ? i = c : o.next = c, o = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== o && (u === null ? h.firstBaseUpdate = c : u.next = c, h.lastBaseUpdate = s));
  }
  if (i !== null) {
    var m = l.baseState;
    o = 0, h = c = s = null, u = i;
    do {
      var p = u.lane, g = u.eventTime;
      if ((r & p) === p) {
        h !== null && (h = h.next = {
          eventTime: g,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var w = e, k = u;
          switch (p = n, g = t, k.tag) {
            case 1:
              if (w = k.payload, typeof w == "function") {
                m = w.call(g, m, p);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = k.payload, p = typeof w == "function" ? w.call(g, m, p) : w, p == null) break e;
              m = A({}, m, p);
              break e;
            case 2:
              qe = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else g = { eventTime: g, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (c = h = g, s = m) : h = h.next = g, o |= p;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (s = m), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = h, n = l.shared.interleaved, n !== null) {
      l = n;
      do
        o |= l.lane, l = l.next;
      while (l !== n);
    } else i === null && (l.shared.lanes = 0);
    Tn |= o, e.lanes = o, e.memoizedState = m;
  }
}
function Su(e, n, t) {
  if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
    var r = e[n], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = t, typeof l != "function") throw Error(y(191, l));
      l.call(r);
    }
  }
}
var er = {}, $e = vn(er), Wt = vn(er), Qt = vn(er);
function xn(e) {
  if (e === er) throw Error(y(174));
  return e;
}
function ho(e, n) {
  switch (O(Qt, n), O(Wt, e), O($e, er), e = n.nodeType, e) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : ri(null, "");
      break;
    default:
      e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = ri(n, e);
  }
  D($e), O($e, n);
}
function lt() {
  D($e), D(Wt), D(Qt);
}
function ca(e) {
  xn(Qt.current);
  var n = xn($e.current), t = ri(n, e.type);
  n !== t && (O(Wt, e), O($e, t));
}
function vo(e) {
  Wt.current === e && (D($e), D(Wt));
}
var U = vn(0);
function Xr(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!")) return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
  return null;
}
var Al = [];
function yo() {
  for (var e = 0; e < Al.length; e++) Al[e]._workInProgressVersionPrimary = null;
  Al.length = 0;
}
var Pr = Ge.ReactCurrentDispatcher, Bl = Ge.ReactCurrentBatchConfig, Ln = 0, $ = null, K = null, G = null, Gr = !1, Lt = !1, Kt = 0, nd = 0;
function ee() {
  throw Error(y(321));
}
function go(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++) if (!Oe(e[t], n[t])) return !1;
  return !0;
}
function wo(e, n, t, r, l, i) {
  if (Ln = i, $ = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Pr.current = e === null || e.memoizedState === null ? id : od, e = t(r, l), Lt) {
    i = 0;
    do {
      if (Lt = !1, Kt = 0, 25 <= i) throw Error(y(301));
      i += 1, G = K = null, n.updateQueue = null, Pr.current = ud, e = t(r, l);
    } while (Lt);
  }
  if (Pr.current = Zr, n = K !== null && K.next !== null, Ln = 0, G = K = $ = null, Gr = !1, n) throw Error(y(300));
  return e;
}
function ko() {
  var e = Kt !== 0;
  return Kt = 0, e;
}
function De() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return G === null ? $.memoizedState = G = e : G = G.next = e, G;
}
function _e() {
  if (K === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = K.next;
  var n = G === null ? $.memoizedState : G.next;
  if (n !== null) G = n, K = e;
  else {
    if (e === null) throw Error(y(310));
    K = e, e = { memoizedState: K.memoizedState, baseState: K.baseState, baseQueue: K.baseQueue, queue: K.queue, next: null }, G === null ? $.memoizedState = G = e : G = G.next = e;
  }
  return G;
}
function Yt(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Vl(e) {
  var n = _e(), t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = K, l = r.baseQueue, i = t.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      l.next = i.next, i.next = o;
    }
    r.baseQueue = l = i, t.pending = null;
  }
  if (l !== null) {
    i = l.next, r = r.baseState;
    var u = o = null, s = null, c = i;
    do {
      var h = c.lane;
      if ((Ln & h) === h) s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (u = s = m, o = r) : s = s.next = m, $.lanes |= h, Tn |= h;
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? o = r : s.next = u, Oe(r, n.memoizedState) || (ce = !0), n.memoizedState = r, n.baseState = o, n.baseQueue = s, t.lastRenderedState = r;
  }
  if (e = t.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, $.lanes |= i, Tn |= i, l = l.next;
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Hl(e) {
  var n = _e(), t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch, l = t.pending, i = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var o = l = l.next;
    do
      i = e(i, o.action), o = o.next;
    while (o !== l);
    Oe(i, n.memoizedState) || (ce = !0), n.memoizedState = i, n.baseQueue === null && (n.baseState = i), t.lastRenderedState = i;
  }
  return [i, r];
}
function fa() {
}
function da(e, n) {
  var t = $, r = _e(), l = n(), i = !Oe(r.memoizedState, l);
  if (i && (r.memoizedState = l, ce = !0), r = r.queue, So(ha.bind(null, t, r, e), [e]), r.getSnapshot !== n || i || G !== null && G.memoizedState.tag & 1) {
    if (t.flags |= 2048, Xt(9, ma.bind(null, t, r, l, n), void 0, null), Z === null) throw Error(y(349));
    Ln & 30 || pa(t, n, l);
  }
  return l;
}
function pa(e, n, t) {
  e.flags |= 16384, e = { getSnapshot: n, value: t }, n = $.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, $.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
}
function ma(e, n, t, r) {
  n.value = t, n.getSnapshot = r, va(n) && ya(e);
}
function ha(e, n, t) {
  return t(function() {
    va(n) && ya(e);
  });
}
function va(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Oe(e, t);
  } catch {
    return !0;
  }
}
function ya(e) {
  var n = Ye(e, 1);
  n !== null && Ie(n, e, 1, -1);
}
function Eu(e) {
  var n = De();
  return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Yt, lastRenderedState: e }, n.queue = e, e = e.dispatch = ld.bind(null, $, e), [n.memoizedState, e];
}
function Xt(e, n, t, r) {
  return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = $.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, $.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
}
function ga() {
  return _e().memoizedState;
}
function Nr(e, n, t, r) {
  var l = De();
  $.flags |= e, l.memoizedState = Xt(1 | n, t, void 0, r === void 0 ? null : r);
}
function cl(e, n, t, r) {
  var l = _e();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (K !== null) {
    var o = K.memoizedState;
    if (i = o.destroy, r !== null && go(r, o.deps)) {
      l.memoizedState = Xt(n, t, i, r);
      return;
    }
  }
  $.flags |= e, l.memoizedState = Xt(1 | n, t, i, r);
}
function Cu(e, n) {
  return Nr(8390656, 8, e, n);
}
function So(e, n) {
  return cl(2048, 8, e, n);
}
function wa(e, n) {
  return cl(4, 2, e, n);
}
function ka(e, n) {
  return cl(4, 4, e, n);
}
function Sa(e, n) {
  if (typeof n == "function") return e = e(), n(e), function() {
    n(null);
  };
  if (n != null) return e = e(), n.current = e, function() {
    n.current = null;
  };
}
function Ea(e, n, t) {
  return t = t != null ? t.concat([e]) : null, cl(4, 4, Sa.bind(null, n, e), t);
}
function Eo() {
}
function Ca(e, n) {
  var t = _e();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && go(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
}
function xa(e, n) {
  var t = _e();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && go(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
}
function _a(e, n, t) {
  return Ln & 21 ? (Oe(t, n) || (t = Ts(), $.lanes |= t, Tn |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, ce = !0), e.memoizedState = t);
}
function td(e, n) {
  var t = I;
  I = t !== 0 && 4 > t ? t : 4, e(!0);
  var r = Bl.transition;
  Bl.transition = {};
  try {
    e(!1), n();
  } finally {
    I = t, Bl.transition = r;
  }
}
function Pa() {
  return _e().memoizedState;
}
function rd(e, n, t) {
  var r = fn(e);
  if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Na(e)) za(n, t);
  else if (t = sa(e, n, t, r), t !== null) {
    var l = oe();
    Ie(t, e, r, l), La(t, n, r);
  }
}
function ld(e, n, t) {
  var r = fn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Na(e)) za(n, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = n.lastRenderedReducer, i !== null)) try {
      var o = n.lastRenderedState, u = i(o, t);
      if (l.hasEagerState = !0, l.eagerState = u, Oe(u, o)) {
        var s = n.interleaved;
        s === null ? (l.next = l, po(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    t = sa(e, n, l, r), t !== null && (l = oe(), Ie(t, e, r, l), La(t, n, r));
  }
}
function Na(e) {
  var n = e.alternate;
  return e === $ || n !== null && n === $;
}
function za(e, n) {
  Lt = Gr = !0;
  var t = e.pending;
  t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
}
function La(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, qi(e, t);
  }
}
var Zr = { readContext: xe, useCallback: ee, useContext: ee, useEffect: ee, useImperativeHandle: ee, useInsertionEffect: ee, useLayoutEffect: ee, useMemo: ee, useReducer: ee, useRef: ee, useState: ee, useDebugValue: ee, useDeferredValue: ee, useTransition: ee, useMutableSource: ee, useSyncExternalStore: ee, useId: ee, unstable_isNewReconciler: !1 }, id = { readContext: xe, useCallback: function(e, n) {
  return De().memoizedState = [e, n === void 0 ? null : n], e;
}, useContext: xe, useEffect: Cu, useImperativeHandle: function(e, n, t) {
  return t = t != null ? t.concat([e]) : null, Nr(
    4194308,
    4,
    Sa.bind(null, n, e),
    t
  );
}, useLayoutEffect: function(e, n) {
  return Nr(4194308, 4, e, n);
}, useInsertionEffect: function(e, n) {
  return Nr(4, 2, e, n);
}, useMemo: function(e, n) {
  var t = De();
  return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
}, useReducer: function(e, n, t) {
  var r = De();
  return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = rd.bind(null, $, e), [r.memoizedState, e];
}, useRef: function(e) {
  var n = De();
  return e = { current: e }, n.memoizedState = e;
}, useState: Eu, useDebugValue: Eo, useDeferredValue: function(e) {
  return De().memoizedState = e;
}, useTransition: function() {
  var e = Eu(!1), n = e[0];
  return e = td.bind(null, e[1]), De().memoizedState = e, [n, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, n, t) {
  var r = $, l = De();
  if (F) {
    if (t === void 0) throw Error(y(407));
    t = t();
  } else {
    if (t = n(), Z === null) throw Error(y(349));
    Ln & 30 || pa(r, n, t);
  }
  l.memoizedState = t;
  var i = { value: t, getSnapshot: n };
  return l.queue = i, Cu(ha.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Xt(9, ma.bind(null, r, i, t, n), void 0, null), t;
}, useId: function() {
  var e = De(), n = Z.identifierPrefix;
  if (F) {
    var t = He, r = Ve;
    t = (r & ~(1 << 32 - Re(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = Kt++, 0 < t && (n += "H" + t.toString(32)), n += ":";
  } else t = nd++, n = ":" + n + "r" + t.toString(32) + ":";
  return e.memoizedState = n;
}, unstable_isNewReconciler: !1 }, od = {
  readContext: xe,
  useCallback: Ca,
  useContext: xe,
  useEffect: So,
  useImperativeHandle: Ea,
  useInsertionEffect: wa,
  useLayoutEffect: ka,
  useMemo: xa,
  useReducer: Vl,
  useRef: ga,
  useState: function() {
    return Vl(Yt);
  },
  useDebugValue: Eo,
  useDeferredValue: function(e) {
    var n = _e();
    return _a(n, K.memoizedState, e);
  },
  useTransition: function() {
    var e = Vl(Yt)[0], n = _e().memoizedState;
    return [e, n];
  },
  useMutableSource: fa,
  useSyncExternalStore: da,
  useId: Pa,
  unstable_isNewReconciler: !1
}, ud = { readContext: xe, useCallback: Ca, useContext: xe, useEffect: So, useImperativeHandle: Ea, useInsertionEffect: wa, useLayoutEffect: ka, useMemo: xa, useReducer: Hl, useRef: ga, useState: function() {
  return Hl(Yt);
}, useDebugValue: Eo, useDeferredValue: function(e) {
  var n = _e();
  return K === null ? n.memoizedState = e : _a(n, K.memoizedState, e);
}, useTransition: function() {
  var e = Hl(Yt)[0], n = _e().memoizedState;
  return [e, n];
}, useMutableSource: fa, useSyncExternalStore: da, useId: Pa, unstable_isNewReconciler: !1 };
function ze(e, n) {
  if (e && e.defaultProps) {
    n = A({}, n), e = e.defaultProps;
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
function xi(e, n, t, r) {
  n = e.memoizedState, t = t(r, n), t = t == null ? n : A({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
}
var fl = { isMounted: function(e) {
  return (e = e._reactInternals) ? On(e) === e : !1;
}, enqueueSetState: function(e, n, t) {
  e = e._reactInternals;
  var r = oe(), l = fn(e), i = We(r, l);
  i.payload = n, t != null && (i.callback = t), n = an(e, i, l), n !== null && (Ie(n, e, l, r), _r(n, e, l));
}, enqueueReplaceState: function(e, n, t) {
  e = e._reactInternals;
  var r = oe(), l = fn(e), i = We(r, l);
  i.tag = 1, i.payload = n, t != null && (i.callback = t), n = an(e, i, l), n !== null && (Ie(n, e, l, r), _r(n, e, l));
}, enqueueForceUpdate: function(e, n) {
  e = e._reactInternals;
  var t = oe(), r = fn(e), l = We(t, r);
  l.tag = 2, n != null && (l.callback = n), n = an(e, l, r), n !== null && (Ie(n, e, r, t), _r(n, e, r));
} };
function xu(e, n, t, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : n.prototype && n.prototype.isPureReactComponent ? !At(t, r) || !At(l, i) : !0;
}
function Ta(e, n, t) {
  var r = !1, l = mn, i = n.contextType;
  return typeof i == "object" && i !== null ? i = xe(i) : (l = de(n) ? Nn : re.current, r = n.contextTypes, i = (r = r != null) ? nt(e, l) : mn), n = new n(t, i), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = fl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), n;
}
function _u(e, n, t, r) {
  e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && fl.enqueueReplaceState(n, n.state, null);
}
function _i(e, n, t, r) {
  var l = e.stateNode;
  l.props = t, l.state = e.memoizedState, l.refs = {}, mo(e);
  var i = n.contextType;
  typeof i == "object" && i !== null ? l.context = xe(i) : (i = de(n) ? Nn : re.current, l.context = nt(e, i)), l.state = e.memoizedState, i = n.getDerivedStateFromProps, typeof i == "function" && (xi(e, n, i, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && fl.enqueueReplaceState(l, l.state, null), Yr(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function it(e, n) {
  try {
    var t = "", r = n;
    do
      t += Mc(r), r = r.return;
    while (r);
    var l = t;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Wl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Pi(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function() {
      throw t;
    });
  }
}
var sd = typeof WeakMap == "function" ? WeakMap : Map;
function Ra(e, n, t) {
  t = We(-1, t), t.tag = 3, t.payload = { element: null };
  var r = n.value;
  return t.callback = function() {
    qr || (qr = !0, ji = r), Pi(e, n);
  }, t;
}
function Ia(e, n, t) {
  t = We(-1, t), t.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    t.payload = function() {
      return r(l);
    }, t.callback = function() {
      Pi(e, n);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
    Pi(e, n), typeof r != "function" && (cn === null ? cn = /* @__PURE__ */ new Set([this]) : cn.add(this));
    var o = n.stack;
    this.componentDidCatch(n.value, { componentStack: o !== null ? o : "" });
  }), t;
}
function Pu(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new sd();
    var l = /* @__PURE__ */ new Set();
    r.set(n, l);
  } else l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
  l.has(t) || (l.add(t), e = Ed.bind(null, e, n, t), n.then(e, e));
}
function Nu(e) {
  do {
    var n;
    if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function zu(e, n, t, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = We(-1, 1), n.tag = 2, an(t, n, 1))), t.lanes |= 1), e);
}
var ad = Ge.ReactCurrentOwner, ce = !1;
function ie(e, n, t, r) {
  n.child = e === null ? ua(n, null, t, r) : rt(n, e.child, t, r);
}
function Lu(e, n, t, r, l) {
  t = t.render;
  var i = n.ref;
  return qn(n, l), r = wo(e, n, t, r, i, l), t = ko(), e !== null && !ce ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Xe(e, n, l)) : (F && t && oo(n), n.flags |= 1, ie(e, n, r, l), n.child);
}
function Tu(e, n, t, r, l) {
  if (e === null) {
    var i = t.type;
    return typeof i == "function" && !To(i) && i.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = i, Oa(e, n, i, r, l)) : (e = Rr(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var o = i.memoizedProps;
    if (t = t.compare, t = t !== null ? t : At, t(o, r) && e.ref === n.ref) return Xe(e, n, l);
  }
  return n.flags |= 1, e = dn(i, r), e.ref = n.ref, e.return = n, n.child = e;
}
function Oa(e, n, t, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (At(i, r) && e.ref === n.ref) if (ce = !1, n.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (ce = !0);
    else return n.lanes = e.lanes, Xe(e, n, l);
  }
  return Ni(e, n, t, r, l);
}
function Ma(e, n, t) {
  var r = n.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(n.mode & 1)) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, O(Yn, me), me |= t;
  else {
    if (!(t & 1073741824)) return e = i !== null ? i.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, O(Yn, me), me |= e, null;
    n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : t, O(Yn, me), me |= r;
  }
  else i !== null ? (r = i.baseLanes | t, n.memoizedState = null) : r = t, O(Yn, me), me |= r;
  return ie(e, n, l, t), n.child;
}
function Da(e, n) {
  var t = n.ref;
  (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
}
function Ni(e, n, t, r, l) {
  var i = de(t) ? Nn : re.current;
  return i = nt(n, i), qn(n, l), t = wo(e, n, t, r, i, l), r = ko(), e !== null && !ce ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Xe(e, n, l)) : (F && r && oo(n), n.flags |= 1, ie(e, n, t, l), n.child);
}
function Ru(e, n, t, r, l) {
  if (de(t)) {
    var i = !0;
    Vr(n);
  } else i = !1;
  if (qn(n, l), n.stateNode === null) zr(e, n), Ta(n, t, r), _i(n, t, r, l), r = !0;
  else if (e === null) {
    var o = n.stateNode, u = n.memoizedProps;
    o.props = u;
    var s = o.context, c = t.contextType;
    typeof c == "object" && c !== null ? c = xe(c) : (c = de(t) ? Nn : re.current, c = nt(n, c));
    var h = t.getDerivedStateFromProps, m = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    m || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== c) && _u(n, o, r, c), qe = !1;
    var p = n.memoizedState;
    o.state = p, Yr(n, r, o, l), s = n.memoizedState, u !== r || p !== s || fe.current || qe ? (typeof h == "function" && (xi(n, t, h, r), s = n.memoizedState), (u = qe || xu(n, t, u, r, p, s, c)) ? (m || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), o.props = r, o.state = s, o.context = c, r = u) : (typeof o.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
  } else {
    o = n.stateNode, aa(e, n), u = n.memoizedProps, c = n.type === n.elementType ? u : ze(n.type, u), o.props = c, m = n.pendingProps, p = o.context, s = t.contextType, typeof s == "object" && s !== null ? s = xe(s) : (s = de(t) ? Nn : re.current, s = nt(n, s));
    var g = t.getDerivedStateFromProps;
    (h = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== m || p !== s) && _u(n, o, r, s), qe = !1, p = n.memoizedState, o.state = p, Yr(n, r, o, l);
    var w = n.memoizedState;
    u !== m || p !== w || fe.current || qe ? (typeof g == "function" && (xi(n, t, g, r), w = n.memoizedState), (c = qe || xu(n, t, c, r, p, w, s) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, s)), typeof o.componentDidUpdate == "function" && (n.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = w), o.props = r, o.state = w, o.context = s, r = c) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), r = !1);
  }
  return zi(e, n, t, r, i, l);
}
function zi(e, n, t, r, l, i) {
  Da(e, n);
  var o = (n.flags & 128) !== 0;
  if (!r && !o) return l && vu(n, t, !1), Xe(e, n, i);
  r = n.stateNode, ad.current = n;
  var u = o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return n.flags |= 1, e !== null && o ? (n.child = rt(n, e.child, null, i), n.child = rt(n, null, u, i)) : ie(e, n, u, i), n.memoizedState = r.state, l && vu(n, t, !0), n.child;
}
function ja(e) {
  var n = e.stateNode;
  n.pendingContext ? hu(e, n.pendingContext, n.pendingContext !== n.context) : n.context && hu(e, n.context, !1), ho(e, n.containerInfo);
}
function Iu(e, n, t, r, l) {
  return tt(), so(l), n.flags |= 256, ie(e, n, t, r), n.child;
}
var Li = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ti(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Fa(e, n, t) {
  var r = n.pendingProps, l = U.current, i = !1, o = (n.flags & 128) !== 0, u;
  if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (i = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), O(U, l & 1), e === null)
    return Ei(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = n.mode, i = n.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = ml(o, r, 0, null), e = Pn(e, r, t, null), i.return = n, e.return = n, i.sibling = e, n.child = i, n.child.memoizedState = Ti(t), n.memoizedState = Li, e) : Co(n, o));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return cd(e, n, o, r, u, l, t);
  if (i) {
    i = r.fallback, o = n.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(o & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = dn(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = dn(u, i) : (i = Pn(i, o, t, null), i.flags |= 2), i.return = n, r.return = n, r.sibling = i, n.child = r, r = i, i = n.child, o = e.child.memoizedState, o = o === null ? Ti(t) : { baseLanes: o.baseLanes | t, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~t, n.memoizedState = Li, r;
  }
  return i = e.child, e = i.sibling, r = dn(i, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
}
function Co(e, n) {
  return n = ml({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
}
function vr(e, n, t, r) {
  return r !== null && so(r), rt(n, e.child, null, t), e = Co(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
}
function cd(e, n, t, r, l, i, o) {
  if (t)
    return n.flags & 256 ? (n.flags &= -257, r = Wl(Error(y(422))), vr(e, n, o, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (i = r.fallback, l = n.mode, r = ml({ mode: "visible", children: r.children }, l, 0, null), i = Pn(i, l, o, null), i.flags |= 2, r.return = n, i.return = n, r.sibling = i, n.child = r, n.mode & 1 && rt(n, e.child, null, o), n.child.memoizedState = Ti(o), n.memoizedState = Li, i);
  if (!(n.mode & 1)) return vr(e, n, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(y(419)), r = Wl(i, r, void 0), vr(e, n, o, r);
  }
  if (u = (o & e.childLanes) !== 0, ce || u) {
    if (r = Z, r !== null) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Ye(e, l), Ie(r, e, l, -1));
    }
    return Lo(), r = Wl(Error(y(421))), vr(e, n, o, r);
  }
  return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = Cd.bind(null, e), l._reactRetry = n, null) : (e = i.treeContext, he = sn(l.nextSibling), ve = n, F = !0, Te = null, e !== null && (ke[Se++] = Ve, ke[Se++] = He, ke[Se++] = zn, Ve = e.id, He = e.overflow, zn = n), n = Co(n, r.children), n.flags |= 4096, n);
}
function Ou(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), Ci(e.return, n, t);
}
function Ql(e, n, t, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (i.isBackwards = n, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = t, i.tailMode = l);
}
function Ua(e, n, t) {
  var r = n.pendingProps, l = r.revealOrder, i = r.tail;
  if (ie(e, n, r.children, t), r = U.current, r & 2) r = r & 1 | 2, n.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = n.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ou(e, t, n);
      else if (e.tag === 19) Ou(e, t, n);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === n) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === n) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (O(U, r), !(n.mode & 1)) n.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (t = n.child, l = null; t !== null; ) e = t.alternate, e !== null && Xr(e) === null && (l = t), t = t.sibling;
      t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), Ql(n, !1, l, t, i);
      break;
    case "backwards":
      for (t = null, l = n.child, n.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Xr(e) === null) {
          n.child = l;
          break;
        }
        e = l.sibling, l.sibling = t, t = l, l = e;
      }
      Ql(n, !0, t, null, i);
      break;
    case "together":
      Ql(n, !1, null, null, void 0);
      break;
    default:
      n.memoizedState = null;
  }
  return n.child;
}
function zr(e, n) {
  !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
}
function Xe(e, n, t) {
  if (e !== null && (n.dependencies = e.dependencies), Tn |= n.lanes, !(t & n.childLanes)) return null;
  if (e !== null && n.child !== e.child) throw Error(y(153));
  if (n.child !== null) {
    for (e = n.child, t = dn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = dn(e, e.pendingProps), t.return = n;
    t.sibling = null;
  }
  return n.child;
}
function fd(e, n, t) {
  switch (n.tag) {
    case 3:
      ja(n), tt();
      break;
    case 5:
      ca(n);
      break;
    case 1:
      de(n.type) && Vr(n);
      break;
    case 4:
      ho(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context, l = n.memoizedProps.value;
      O(Qr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = n.memoizedState, r !== null)
        return r.dehydrated !== null ? (O(U, U.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? Fa(e, n, t) : (O(U, U.current & 1), e = Xe(e, n, t), e !== null ? e.sibling : null);
      O(U, U.current & 1);
      break;
    case 19:
      if (r = (t & n.childLanes) !== 0, e.flags & 128) {
        if (r) return Ua(e, n, t);
        n.flags |= 128;
      }
      if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), O(U, U.current), r) break;
      return null;
    case 22:
    case 23:
      return n.lanes = 0, Ma(e, n, t);
  }
  return Xe(e, n, t);
}
var $a, Ri, Aa, Ba;
$a = function(e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
};
Ri = function() {
};
Aa = function(e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = n.stateNode, xn($e.current);
    var i = null;
    switch (t) {
      case "input":
        l = bl(e, l), r = bl(e, r), i = [];
        break;
      case "select":
        l = A({}, l, { value: void 0 }), r = A({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = ti(e, l), r = ti(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ar);
    }
    li(t, r);
    var o;
    t = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var u = l[c];
      for (o in u) u.hasOwnProperty(o) && (t || (t = {}), t[o] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Ot.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== u && (s != null || u != null)) if (c === "style") if (u) {
        for (o in u) !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (t || (t = {}), t[o] = "");
        for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (t || (t = {}), t[o] = s[o]);
      } else t || (i || (i = []), i.push(
        c,
        t
      )), t = s;
      else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Ot.hasOwnProperty(c) ? (s != null && c === "onScroll" && M("scroll", e), i || u === s || (i = [])) : (i = i || []).push(c, s));
    }
    t && (i = i || []).push("style", t);
    var c = i;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
Ba = function(e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function gt(e, n) {
  if (!F) switch (e.tailMode) {
    case "hidden":
      n = e.tail;
      for (var t = null; n !== null; ) n.alternate !== null && (t = n), n = n.sibling;
      t === null ? e.tail = null : t.sibling = null;
      break;
    case "collapsed":
      t = e.tail;
      for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
      r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function ne(e) {
  var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
  if (n) for (var l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = t, n;
}
function dd(e, n, t) {
  var r = n.pendingProps;
  switch (uo(n), n.tag) {
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
      return ne(n), null;
    case 1:
      return de(n.type) && Br(), ne(n), null;
    case 3:
      return r = n.stateNode, lt(), D(fe), D(re), yo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (mr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Te !== null && ($i(Te), Te = null))), Ri(e, n), ne(n), null;
    case 5:
      vo(n);
      var l = xn(Qt.current);
      if (t = n.type, e !== null && n.stateNode != null) Aa(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(y(166));
          return ne(n), null;
        }
        if (e = xn($e.current), mr(n)) {
          r = n.stateNode, t = n.type;
          var i = n.memoizedProps;
          switch (r[je] = n, r[Ht] = i, e = (n.mode & 1) !== 0, t) {
            case "dialog":
              M("cancel", r), M("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              M("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Ct.length; l++) M(Ct[l], r);
              break;
            case "source":
              M("error", r);
              break;
            case "img":
            case "image":
            case "link":
              M(
                "error",
                r
              ), M("load", r);
              break;
            case "details":
              M("toggle", r);
              break;
            case "input":
              Vo(r, i), M("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, M("invalid", r);
              break;
            case "textarea":
              Wo(r, i), M("invalid", r);
          }
          li(t, i), l = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var u = i[o];
            o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && pr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && pr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Ot.hasOwnProperty(o) && u != null && o === "onScroll" && M("scroll", r);
          }
          switch (t) {
            case "input":
              ir(r), Ho(r, i, !0);
              break;
            case "textarea":
              ir(r), Qo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ar);
          }
          r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = hs(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(t, { is: r.is }) : (e = o.createElement(t), t === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, t), e[je] = n, e[Ht] = r, $a(e, n, !1, !1), n.stateNode = e;
          e: {
            switch (o = ii(t, r), t) {
              case "dialog":
                M("cancel", e), M("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                M("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Ct.length; l++) M(Ct[l], e);
                l = r;
                break;
              case "source":
                M("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                M(
                  "error",
                  e
                ), M("load", e), l = r;
                break;
              case "details":
                M("toggle", e), l = r;
                break;
              case "input":
                Vo(e, r), l = bl(e, r), M("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = A({}, r, { value: void 0 }), M("invalid", e);
                break;
              case "textarea":
                Wo(e, r), l = ti(e, r), M("invalid", e);
                break;
              default:
                l = r;
            }
            li(t, l), u = l;
            for (i in u) if (u.hasOwnProperty(i)) {
              var s = u[i];
              i === "style" ? gs(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && vs(e, s)) : i === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && Mt(e, s) : typeof s == "number" && Mt(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ot.hasOwnProperty(i) ? s != null && i === "onScroll" && M("scroll", e) : s != null && Ki(e, i, s, o));
            }
            switch (t) {
              case "input":
                ir(e), Ho(e, r, !1);
                break;
              case "textarea":
                ir(e), Qo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Xn(e, !!r.multiple, i, !1) : r.defaultValue != null && Xn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ar);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
      }
      return ne(n), null;
    case 6:
      if (e && n.stateNode != null) Ba(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(y(166));
        if (t = xn(Qt.current), xn($e.current), mr(n)) {
          if (r = n.stateNode, t = n.memoizedProps, r[je] = n, (i = r.nodeValue !== t) && (e = ve, e !== null)) switch (e.tag) {
            case 3:
              pr(r.nodeValue, t, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && pr(r.nodeValue, t, (e.mode & 1) !== 0);
          }
          i && (n.flags |= 4);
        } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[je] = n, n.stateNode = r;
      }
      return ne(n), null;
    case 13:
      if (D(U), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (F && he !== null && n.mode & 1 && !(n.flags & 128)) ia(), tt(), n.flags |= 98560, i = !1;
        else if (i = mr(n), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (i = n.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(y(317));
            i[je] = n;
          } else tt(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
          ne(n), i = !1;
        } else Te !== null && ($i(Te), Te = null), i = !0;
        if (!i) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || U.current & 1 ? Y === 0 && (Y = 3) : Lo())), n.updateQueue !== null && (n.flags |= 4), ne(n), null);
    case 4:
      return lt(), Ri(e, n), e === null && Bt(n.stateNode.containerInfo), ne(n), null;
    case 10:
      return fo(n.type._context), ne(n), null;
    case 17:
      return de(n.type) && Br(), ne(n), null;
    case 19:
      if (D(U), i = n.memoizedState, i === null) return ne(n), null;
      if (r = (n.flags & 128) !== 0, o = i.rendering, o === null) if (r) gt(i, !1);
      else {
        if (Y !== 0 || e !== null && e.flags & 128) for (e = n.child; e !== null; ) {
          if (o = Xr(e), o !== null) {
            for (n.flags |= 128, gt(i, !1), r = o.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; ) i = t, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
            return O(U, U.current & 1 | 2), n.child;
          }
          e = e.sibling;
        }
        i.tail !== null && W() > ot && (n.flags |= 128, r = !0, gt(i, !1), n.lanes = 4194304);
      }
      else {
        if (!r) if (e = Xr(o), e !== null) {
          if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), gt(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !F) return ne(n), null;
        } else 2 * W() - i.renderingStartTime > ot && t !== 1073741824 && (n.flags |= 128, r = !0, gt(i, !1), n.lanes = 4194304);
        i.isBackwards ? (o.sibling = n.child, n.child = o) : (t = i.last, t !== null ? t.sibling = o : n.child = o, i.last = o);
      }
      return i.tail !== null ? (n = i.tail, i.rendering = n, i.tail = n.sibling, i.renderingStartTime = W(), n.sibling = null, t = U.current, O(U, r ? t & 1 | 2 : t & 1), n) : (ne(n), null);
    case 22:
    case 23:
      return zo(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? me & 1073741824 && (ne(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ne(n), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, n.tag));
}
function pd(e, n) {
  switch (uo(n), n.tag) {
    case 1:
      return de(n.type) && Br(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 3:
      return lt(), D(fe), D(re), yo(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
    case 5:
      return vo(n), null;
    case 13:
      if (D(U), e = n.memoizedState, e !== null && e.dehydrated !== null) {
        if (n.alternate === null) throw Error(y(340));
        tt();
      }
      return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 19:
      return D(U), null;
    case 4:
      return lt(), null;
    case 10:
      return fo(n.type._context), null;
    case 22:
    case 23:
      return zo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yr = !1, te = !1, md = typeof WeakSet == "function" ? WeakSet : Set, S = null;
function Kn(e, n) {
  var t = e.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (r) {
    B(e, n, r);
  }
  else t.current = null;
}
function Ii(e, n, t) {
  try {
    t();
  } catch (r) {
    B(e, n, r);
  }
}
var Mu = !1;
function hd(e, n) {
  if (hi = Fr, e = Ks(), io(e)) {
    if ("selectionStart" in e) var t = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      t = (t = e.ownerDocument) && t.defaultView || window;
      var r = t.getSelection && t.getSelection();
      if (r && r.rangeCount !== 0) {
        t = r.anchorNode;
        var l = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          t.nodeType, i.nodeType;
        } catch {
          t = null;
          break e;
        }
        var o = 0, u = -1, s = -1, c = 0, h = 0, m = e, p = null;
        n: for (; ; ) {
          for (var g; m !== t || l !== 0 && m.nodeType !== 3 || (u = o + l), m !== i || r !== 0 && m.nodeType !== 3 || (s = o + r), m.nodeType === 3 && (o += m.nodeValue.length), (g = m.firstChild) !== null; )
            p = m, m = g;
          for (; ; ) {
            if (m === e) break n;
            if (p === t && ++c === l && (u = o), p === i && ++h === r && (s = o), (g = m.nextSibling) !== null) break;
            m = p, p = m.parentNode;
          }
          m = g;
        }
        t = u === -1 || s === -1 ? null : { start: u, end: s };
      } else t = null;
    }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (vi = { focusedElem: e, selectionRange: t }, Fr = !1, S = n; S !== null; ) if (n = S, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, S = e;
  else for (; S !== null; ) {
    n = S;
    try {
      var w = n.alternate;
      if (n.flags & 1024) switch (n.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var k = w.memoizedProps, j = w.memoizedState, f = n.stateNode, a = f.getSnapshotBeforeUpdate(n.elementType === n.type ? k : ze(n.type, k), j);
            f.__reactInternalSnapshotBeforeUpdate = a;
          }
          break;
        case 3:
          var d = n.stateNode.containerInfo;
          d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(y(163));
      }
    } catch (v) {
      B(n, n.return, v);
    }
    if (e = n.sibling, e !== null) {
      e.return = n.return, S = e;
      break;
    }
    S = n.return;
  }
  return w = Mu, Mu = !1, w;
}
function Tt(e, n, t) {
  var r = n.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && Ii(n, t, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function dl(e, n) {
  if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
    var t = n = n.next;
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Oi(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : n.current = e;
  }
}
function Va(e) {
  var n = e.alternate;
  n !== null && (e.alternate = null, Va(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[je], delete n[Ht], delete n[wi], delete n[Jf], delete n[qf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Ha(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Du(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ha(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Mi(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Ar));
  else if (r !== 4 && (e = e.child, e !== null)) for (Mi(e, n, t), e = e.sibling; e !== null; ) Mi(e, n, t), e = e.sibling;
}
function Di(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Di(e, n, t), e = e.sibling; e !== null; ) Di(e, n, t), e = e.sibling;
}
var J = null, Le = !1;
function Ze(e, n, t) {
  for (t = t.child; t !== null; ) Wa(e, n, t), t = t.sibling;
}
function Wa(e, n, t) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function") try {
    Ue.onCommitFiberUnmount(ll, t);
  } catch {
  }
  switch (t.tag) {
    case 5:
      te || Kn(t, n);
    case 6:
      var r = J, l = Le;
      J = null, Ze(e, n, t), J = r, Le = l, J !== null && (Le ? (e = J, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : J.removeChild(t.stateNode));
      break;
    case 18:
      J !== null && (Le ? (e = J, t = t.stateNode, e.nodeType === 8 ? Ul(e.parentNode, t) : e.nodeType === 1 && Ul(e, t), Ut(e)) : Ul(J, t.stateNode));
      break;
    case 4:
      r = J, l = Le, J = t.stateNode.containerInfo, Le = !0, Ze(e, n, t), J = r, Le = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!te && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && Ii(t, n, o), l = l.next;
        } while (l !== r);
      }
      Ze(e, n, t);
      break;
    case 1:
      if (!te && (Kn(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
      } catch (u) {
        B(t, n, u);
      }
      Ze(e, n, t);
      break;
    case 21:
      Ze(e, n, t);
      break;
    case 22:
      t.mode & 1 ? (te = (r = te) || t.memoizedState !== null, Ze(e, n, t), te = r) : Ze(e, n, t);
      break;
    default:
      Ze(e, n, t);
  }
}
function ju(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new md()), n.forEach(function(r) {
      var l = xd.bind(null, e, r);
      t.has(r) || (t.add(r), r.then(l, l));
    });
  }
}
function Ne(e, n) {
  var t = n.deletions;
  if (t !== null) for (var r = 0; r < t.length; r++) {
    var l = t[r];
    try {
      var i = e, o = n, u = o;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            J = u.stateNode, Le = !1;
            break e;
          case 3:
            J = u.stateNode.containerInfo, Le = !0;
            break e;
          case 4:
            J = u.stateNode.containerInfo, Le = !0;
            break e;
        }
        u = u.return;
      }
      if (J === null) throw Error(y(160));
      Wa(i, o, l), J = null, Le = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (c) {
      B(l, n, c);
    }
  }
  if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) Qa(n, e), n = n.sibling;
}
function Qa(e, n) {
  var t = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ne(n, e), Me(e), r & 4) {
        try {
          Tt(3, e, e.return), dl(3, e);
        } catch (k) {
          B(e, e.return, k);
        }
        try {
          Tt(5, e, e.return);
        } catch (k) {
          B(e, e.return, k);
        }
      }
      break;
    case 1:
      Ne(n, e), Me(e), r & 512 && t !== null && Kn(t, t.return);
      break;
    case 5:
      if (Ne(n, e), Me(e), r & 512 && t !== null && Kn(t, t.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Mt(l, "");
        } catch (k) {
          B(e, e.return, k);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = t !== null ? t.memoizedProps : i, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && i.type === "radio" && i.name != null && ps(l, i), ii(u, o);
          var c = ii(u, i);
          for (o = 0; o < s.length; o += 2) {
            var h = s[o], m = s[o + 1];
            h === "style" ? gs(l, m) : h === "dangerouslySetInnerHTML" ? vs(l, m) : h === "children" ? Mt(l, m) : Ki(l, h, m, c);
          }
          switch (u) {
            case "input":
              ei(l, i);
              break;
            case "textarea":
              ms(l, i);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var g = i.value;
              g != null ? Xn(l, !!i.multiple, g, !1) : p !== !!i.multiple && (i.defaultValue != null ? Xn(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Xn(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[Ht] = i;
        } catch (k) {
          B(e, e.return, k);
        }
      }
      break;
    case 6:
      if (Ne(n, e), Me(e), r & 4) {
        if (e.stateNode === null) throw Error(y(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (k) {
          B(e, e.return, k);
        }
      }
      break;
    case 3:
      if (Ne(n, e), Me(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
        Ut(n.containerInfo);
      } catch (k) {
        B(e, e.return, k);
      }
      break;
    case 4:
      Ne(n, e), Me(e);
      break;
    case 13:
      Ne(n, e), Me(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Po = W())), r & 4 && ju(e);
      break;
    case 22:
      if (h = t !== null && t.memoizedState !== null, e.mode & 1 ? (te = (c = te) || h, Ne(n, e), te = c) : Ne(n, e), Me(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1) for (S = e, h = e.child; h !== null; ) {
          for (m = S = h; S !== null; ) {
            switch (p = S, g = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Tt(4, p, p.return);
                break;
              case 1:
                Kn(p, p.return);
                var w = p.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = p, t = p.return;
                  try {
                    n = r, w.props = n.memoizedProps, w.state = n.memoizedState, w.componentWillUnmount();
                  } catch (k) {
                    B(r, t, k);
                  }
                }
                break;
              case 5:
                Kn(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  Uu(m);
                  continue;
                }
            }
            g !== null ? (g.return = p, S = g) : Uu(m);
          }
          h = h.sibling;
        }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                l = m.stateNode, c ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = m.stateNode, s = m.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = ys("display", o));
              } catch (k) {
                B(e, e.return, k);
              }
            }
          } else if (m.tag === 6) {
            if (h === null) try {
              m.stateNode.nodeValue = c ? "" : m.memoizedProps;
            } catch (k) {
              B(e, e.return, k);
            }
          } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
            m.child.return = m, m = m.child;
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), m = m.return;
          }
          h === m && (h = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      Ne(n, e), Me(e), r & 4 && ju(e);
      break;
    case 21:
      break;
    default:
      Ne(
        n,
        e
      ), Me(e);
  }
}
function Me(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (Ha(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Mt(l, ""), r.flags &= -33);
          var i = Du(e);
          Di(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, u = Du(e);
          Mi(e, u, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      B(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function vd(e, n, t) {
  S = e, Ka(e);
}
function Ka(e, n, t) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || yr;
      if (!o) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || te;
        u = yr;
        var c = te;
        if (yr = o, (te = s) && !c) for (S = l; S !== null; ) o = S, s = o.child, o.tag === 22 && o.memoizedState !== null ? $u(l) : s !== null ? (s.return = o, S = s) : $u(l);
        for (; i !== null; ) S = i, Ka(i), i = i.sibling;
        S = l, yr = u, te = c;
      }
      Fu(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, S = i) : Fu(e);
  }
}
function Fu(e) {
  for (; S !== null; ) {
    var n = S;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            te || dl(5, n);
            break;
          case 1:
            var r = n.stateNode;
            if (n.flags & 4 && !te) if (t === null) r.componentDidMount();
            else {
              var l = n.elementType === n.type ? t.memoizedProps : ze(n.type, t.memoizedProps);
              r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = n.updateQueue;
            i !== null && Su(n, i, r);
            break;
          case 3:
            var o = n.updateQueue;
            if (o !== null) {
              if (t = null, n.child !== null) switch (n.child.tag) {
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
              Su(n, o, t);
            }
            break;
          case 5:
            var u = n.stateNode;
            if (t === null && n.flags & 4) {
              t = u;
              var s = n.memoizedProps;
              switch (n.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s.autoFocus && t.focus();
                  break;
                case "img":
                  s.src && (t.src = s.src);
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
            if (n.memoizedState === null) {
              var c = n.alternate;
              if (c !== null) {
                var h = c.memoizedState;
                if (h !== null) {
                  var m = h.dehydrated;
                  m !== null && Ut(m);
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
            throw Error(y(163));
        }
        te || n.flags & 512 && Oi(n);
      } catch (p) {
        B(n, n.return, p);
      }
    }
    if (n === e) {
      S = null;
      break;
    }
    if (t = n.sibling, t !== null) {
      t.return = n.return, S = t;
      break;
    }
    S = n.return;
  }
}
function Uu(e) {
  for (; S !== null; ) {
    var n = S;
    if (n === e) {
      S = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      t.return = n.return, S = t;
      break;
    }
    S = n.return;
  }
}
function $u(e) {
  for (; S !== null; ) {
    var n = S;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            dl(4, n);
          } catch (s) {
            B(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              B(n, l, s);
            }
          }
          var i = n.return;
          try {
            Oi(n);
          } catch (s) {
            B(n, i, s);
          }
          break;
        case 5:
          var o = n.return;
          try {
            Oi(n);
          } catch (s) {
            B(n, o, s);
          }
      }
    } catch (s) {
      B(n, n.return, s);
    }
    if (n === e) {
      S = null;
      break;
    }
    var u = n.sibling;
    if (u !== null) {
      u.return = n.return, S = u;
      break;
    }
    S = n.return;
  }
}
var yd = Math.ceil, Jr = Ge.ReactCurrentDispatcher, xo = Ge.ReactCurrentOwner, Ce = Ge.ReactCurrentBatchConfig, R = 0, Z = null, Q = null, q = 0, me = 0, Yn = vn(0), Y = 0, Gt = null, Tn = 0, pl = 0, _o = 0, Rt = null, ae = null, Po = 0, ot = 1 / 0, Ae = null, qr = !1, ji = null, cn = null, gr = !1, rn = null, br = 0, It = 0, Fi = null, Lr = -1, Tr = 0;
function oe() {
  return R & 6 ? W() : Lr !== -1 ? Lr : Lr = W();
}
function fn(e) {
  return e.mode & 1 ? R & 2 && q !== 0 ? q & -q : ed.transition !== null ? (Tr === 0 && (Tr = Ts()), Tr) : (e = I, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Fs(e.type)), e) : 1;
}
function Ie(e, n, t, r) {
  if (50 < It) throw It = 0, Fi = null, Error(y(185));
  Jt(e, t, r), (!(R & 2) || e !== Z) && (e === Z && (!(R & 2) && (pl |= t), Y === 4 && nn(e, q)), pe(e, r), t === 1 && R === 0 && !(n.mode & 1) && (ot = W() + 500, al && yn()));
}
function pe(e, n) {
  var t = e.callbackNode;
  bc(e, n);
  var r = jr(e, e === Z ? q : 0);
  if (r === 0) t !== null && Xo(t), e.callbackNode = null, e.callbackPriority = 0;
  else if (n = r & -r, e.callbackPriority !== n) {
    if (t != null && Xo(t), n === 1) e.tag === 0 ? bf(Au.bind(null, e)) : ta(Au.bind(null, e)), Gf(function() {
      !(R & 6) && yn();
    }), t = null;
    else {
      switch (Rs(r)) {
        case 1:
          t = Ji;
          break;
        case 4:
          t = zs;
          break;
        case 16:
          t = Dr;
          break;
        case 536870912:
          t = Ls;
          break;
        default:
          t = Dr;
      }
      t = ec(t, Ya.bind(null, e));
    }
    e.callbackPriority = n, e.callbackNode = t;
  }
}
function Ya(e, n) {
  if (Lr = -1, Tr = 0, R & 6) throw Error(y(327));
  var t = e.callbackNode;
  if (bn() && e.callbackNode !== t) return null;
  var r = jr(e, e === Z ? q : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = el(e, r);
  else {
    n = r;
    var l = R;
    R |= 2;
    var i = Ga();
    (Z !== e || q !== n) && (Ae = null, ot = W() + 500, _n(e, n));
    do
      try {
        kd();
        break;
      } catch (u) {
        Xa(e, u);
      }
    while (!0);
    co(), Jr.current = i, R = l, Q !== null ? n = 0 : (Z = null, q = 0, n = Y);
  }
  if (n !== 0) {
    if (n === 2 && (l = ci(e), l !== 0 && (r = l, n = Ui(e, l))), n === 1) throw t = Gt, _n(e, 0), nn(e, r), pe(e, W()), t;
    if (n === 6) nn(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !gd(l) && (n = el(e, r), n === 2 && (i = ci(e), i !== 0 && (r = i, n = Ui(e, i))), n === 1)) throw t = Gt, _n(e, 0), nn(e, r), pe(e, W()), t;
      switch (e.finishedWork = l, e.finishedLanes = r, n) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          Sn(e, ae, Ae);
          break;
        case 3:
          if (nn(e, r), (r & 130023424) === r && (n = Po + 500 - W(), 10 < n)) {
            if (jr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              oe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = gi(Sn.bind(null, e, ae, Ae), n);
            break;
          }
          Sn(e, ae, Ae);
          break;
        case 4:
          if (nn(e, r), (r & 4194240) === r) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Re(r);
            i = 1 << o, o = n[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = W() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * yd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = gi(Sn.bind(null, e, ae, Ae), r);
            break;
          }
          Sn(e, ae, Ae);
          break;
        case 5:
          Sn(e, ae, Ae);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return pe(e, W()), e.callbackNode === t ? Ya.bind(null, e) : null;
}
function Ui(e, n) {
  var t = Rt;
  return e.current.memoizedState.isDehydrated && (_n(e, n).flags |= 256), e = el(e, n), e !== 2 && (n = ae, ae = t, n !== null && $i(n)), e;
}
function $i(e) {
  ae === null ? ae = e : ae.push.apply(ae, e);
}
function gd(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && (t = t.stores, t !== null)) for (var r = 0; r < t.length; r++) {
        var l = t[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!Oe(i(), l)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (t = n.child, n.subtreeFlags & 16384 && t !== null) t.return = n, n = t;
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }
  return !0;
}
function nn(e, n) {
  for (n &= ~_o, n &= ~pl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
    var t = 31 - Re(n), r = 1 << t;
    e[t] = -1, n &= ~r;
  }
}
function Au(e) {
  if (R & 6) throw Error(y(327));
  bn();
  var n = jr(e, 0);
  if (!(n & 1)) return pe(e, W()), null;
  var t = el(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = ci(e);
    r !== 0 && (n = r, t = Ui(e, r));
  }
  if (t === 1) throw t = Gt, _n(e, 0), nn(e, n), pe(e, W()), t;
  if (t === 6) throw Error(y(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = n, Sn(e, ae, Ae), pe(e, W()), null;
}
function No(e, n) {
  var t = R;
  R |= 1;
  try {
    return e(n);
  } finally {
    R = t, R === 0 && (ot = W() + 500, al && yn());
  }
}
function Rn(e) {
  rn !== null && rn.tag === 0 && !(R & 6) && bn();
  var n = R;
  R |= 1;
  var t = Ce.transition, r = I;
  try {
    if (Ce.transition = null, I = 1, e) return e();
  } finally {
    I = r, Ce.transition = t, R = n, !(R & 6) && yn();
  }
}
function zo() {
  me = Yn.current, D(Yn);
}
function _n(e, n) {
  e.finishedWork = null, e.finishedLanes = 0;
  var t = e.timeoutHandle;
  if (t !== -1 && (e.timeoutHandle = -1, Xf(t)), Q !== null) for (t = Q.return; t !== null; ) {
    var r = t;
    switch (uo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Br();
        break;
      case 3:
        lt(), D(fe), D(re), yo();
        break;
      case 5:
        vo(r);
        break;
      case 4:
        lt();
        break;
      case 13:
        D(U);
        break;
      case 19:
        D(U);
        break;
      case 10:
        fo(r.type._context);
        break;
      case 22:
      case 23:
        zo();
    }
    t = t.return;
  }
  if (Z = e, Q = e = dn(e.current, null), q = me = n, Y = 0, Gt = null, _o = pl = Tn = 0, ae = Rt = null, Cn !== null) {
    for (n = 0; n < Cn.length; n++) if (t = Cn[n], r = t.interleaved, r !== null) {
      t.interleaved = null;
      var l = r.next, i = t.pending;
      if (i !== null) {
        var o = i.next;
        i.next = l, r.next = o;
      }
      t.pending = r;
    }
    Cn = null;
  }
  return e;
}
function Xa(e, n) {
  do {
    var t = Q;
    try {
      if (co(), Pr.current = Zr, Gr) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Gr = !1;
      }
      if (Ln = 0, G = K = $ = null, Lt = !1, Kt = 0, xo.current = null, t === null || t.return === null) {
        Y = 1, Gt = n, Q = null;
        break;
      }
      e: {
        var i = e, o = t.return, u = t, s = n;
        if (n = q, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, h = u, m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var g = Nu(o);
          if (g !== null) {
            g.flags &= -257, zu(g, o, u, i, n), g.mode & 1 && Pu(i, c, n), n = g, s = c;
            var w = n.updateQueue;
            if (w === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(s), n.updateQueue = k;
            } else w.add(s);
            break e;
          } else {
            if (!(n & 1)) {
              Pu(i, c, n), Lo();
              break e;
            }
            s = Error(y(426));
          }
        } else if (F && u.mode & 1) {
          var j = Nu(o);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256), zu(j, o, u, i, n), so(it(s, u));
            break e;
          }
        }
        i = s = it(s, u), Y !== 4 && (Y = 2), Rt === null ? Rt = [i] : Rt.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, n &= -n, i.lanes |= n;
              var f = Ra(i, s, n);
              ku(i, f);
              break e;
            case 1:
              u = s;
              var a = i.type, d = i.stateNode;
              if (!(i.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (cn === null || !cn.has(d)))) {
                i.flags |= 65536, n &= -n, i.lanes |= n;
                var v = Ia(i, u, n);
                ku(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ja(t);
    } catch (E) {
      n = E, Q === t && t !== null && (Q = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function Ga() {
  var e = Jr.current;
  return Jr.current = Zr, e === null ? Zr : e;
}
function Lo() {
  (Y === 0 || Y === 3 || Y === 2) && (Y = 4), Z === null || !(Tn & 268435455) && !(pl & 268435455) || nn(Z, q);
}
function el(e, n) {
  var t = R;
  R |= 2;
  var r = Ga();
  (Z !== e || q !== n) && (Ae = null, _n(e, n));
  do
    try {
      wd();
      break;
    } catch (l) {
      Xa(e, l);
    }
  while (!0);
  if (co(), R = t, Jr.current = r, Q !== null) throw Error(y(261));
  return Z = null, q = 0, Y;
}
function wd() {
  for (; Q !== null; ) Za(Q);
}
function kd() {
  for (; Q !== null && !Wc(); ) Za(Q);
}
function Za(e) {
  var n = ba(e.alternate, e, me);
  e.memoizedProps = e.pendingProps, n === null ? Ja(e) : Q = n, xo.current = null;
}
function Ja(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (e = n.return, n.flags & 32768) {
      if (t = pd(t, n), t !== null) {
        t.flags &= 32767, Q = t;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Y = 6, Q = null;
        return;
      }
    } else if (t = dd(t, n, me), t !== null) {
      Q = t;
      return;
    }
    if (n = n.sibling, n !== null) {
      Q = n;
      return;
    }
    Q = n = e;
  } while (n !== null);
  Y === 0 && (Y = 5);
}
function Sn(e, n, t) {
  var r = I, l = Ce.transition;
  try {
    Ce.transition = null, I = 1, Sd(e, n, t, r);
  } finally {
    Ce.transition = l, I = r;
  }
  return null;
}
function Sd(e, n, t, r) {
  do
    bn();
  while (rn !== null);
  if (R & 6) throw Error(y(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(y(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = t.lanes | t.childLanes;
  if (ef(e, i), e === Z && (Q = Z = null, q = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || gr || (gr = !0, ec(Dr, function() {
    return bn(), null;
  })), i = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || i) {
    i = Ce.transition, Ce.transition = null;
    var o = I;
    I = 1;
    var u = R;
    R |= 4, xo.current = null, hd(e, t), Qa(t, e), Bf(vi), Fr = !!hi, vi = hi = null, e.current = t, vd(t), Qc(), R = u, I = o, Ce.transition = i;
  } else e.current = t;
  if (gr && (gr = !1, rn = e, br = l), i = e.pendingLanes, i === 0 && (cn = null), Xc(t.stateNode), pe(e, W()), n !== null) for (r = e.onRecoverableError, t = 0; t < n.length; t++) l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (qr) throw qr = !1, e = ji, ji = null, e;
  return br & 1 && e.tag !== 0 && bn(), i = e.pendingLanes, i & 1 ? e === Fi ? It++ : (It = 0, Fi = e) : It = 0, yn(), null;
}
function bn() {
  if (rn !== null) {
    var e = Rs(br), n = Ce.transition, t = I;
    try {
      if (Ce.transition = null, I = 16 > e ? 16 : e, rn === null) var r = !1;
      else {
        if (e = rn, rn = null, br = 0, R & 6) throw Error(y(331));
        var l = R;
        for (R |= 4, S = e.current; S !== null; ) {
          var i = S, o = i.child;
          if (S.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (S = c; S !== null; ) {
                  var h = S;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tt(8, h, i);
                  }
                  var m = h.child;
                  if (m !== null) m.return = h, S = m;
                  else for (; S !== null; ) {
                    h = S;
                    var p = h.sibling, g = h.return;
                    if (Va(h), h === c) {
                      S = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = g, S = p;
                      break;
                    }
                    S = g;
                  }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var j = k.sibling;
                    k.sibling = null, k = j;
                  } while (k !== null);
                }
              }
              S = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) o.return = i, S = o;
          else e: for (; S !== null; ) {
            if (i = S, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Tt(9, i, i.return);
            }
            var f = i.sibling;
            if (f !== null) {
              f.return = i.return, S = f;
              break e;
            }
            S = i.return;
          }
        }
        var a = e.current;
        for (S = a; S !== null; ) {
          o = S;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) d.return = o, S = d;
          else e: for (o = a; S !== null; ) {
            if (u = S, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  dl(9, u);
              }
            } catch (E) {
              B(u, u.return, E);
            }
            if (u === o) {
              S = null;
              break e;
            }
            var v = u.sibling;
            if (v !== null) {
              v.return = u.return, S = v;
              break e;
            }
            S = u.return;
          }
        }
        if (R = l, yn(), Ue && typeof Ue.onPostCommitFiberRoot == "function") try {
          Ue.onPostCommitFiberRoot(ll, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      I = t, Ce.transition = n;
    }
  }
  return !1;
}
function Bu(e, n, t) {
  n = it(t, n), n = Ra(e, n, 1), e = an(e, n, 1), n = oe(), e !== null && (Jt(e, 1, n), pe(e, n));
}
function B(e, n, t) {
  if (e.tag === 3) Bu(e, e, t);
  else for (; n !== null; ) {
    if (n.tag === 3) {
      Bu(n, e, t);
      break;
    } else if (n.tag === 1) {
      var r = n.stateNode;
      if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (cn === null || !cn.has(r))) {
        e = it(t, e), e = Ia(n, e, 1), n = an(n, e, 1), e = oe(), n !== null && (Jt(n, 1, e), pe(n, e));
        break;
      }
    }
    n = n.return;
  }
}
function Ed(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n), n = oe(), e.pingedLanes |= e.suspendedLanes & t, Z === e && (q & t) === t && (Y === 4 || Y === 3 && (q & 130023424) === q && 500 > W() - Po ? _n(e, 0) : _o |= t), pe(e, n);
}
function qa(e, n) {
  n === 0 && (e.mode & 1 ? (n = sr, sr <<= 1, !(sr & 130023424) && (sr = 4194304)) : n = 1);
  var t = oe();
  e = Ye(e, n), e !== null && (Jt(e, n, t), pe(e, t));
}
function Cd(e) {
  var n = e.memoizedState, t = 0;
  n !== null && (t = n.retryLane), qa(e, t);
}
function xd(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(n), qa(e, t);
}
var ba;
ba = function(e, n, t) {
  if (e !== null) if (e.memoizedProps !== n.pendingProps || fe.current) ce = !0;
  else {
    if (!(e.lanes & t) && !(n.flags & 128)) return ce = !1, fd(e, n, t);
    ce = !!(e.flags & 131072);
  }
  else ce = !1, F && n.flags & 1048576 && ra(n, Wr, n.index);
  switch (n.lanes = 0, n.tag) {
    case 2:
      var r = n.type;
      zr(e, n), e = n.pendingProps;
      var l = nt(n, re.current);
      qn(n, t), l = wo(null, n, r, e, l, t);
      var i = ko();
      return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, de(r) ? (i = !0, Vr(n)) : i = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, mo(n), l.updater = fl, n.stateNode = l, l._reactInternals = n, _i(n, r, e, t), n = zi(null, n, r, !0, i, t)) : (n.tag = 0, F && i && oo(n), ie(null, n, l, t), n = n.child), n;
    case 16:
      r = n.elementType;
      e: {
        switch (zr(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Pd(r), e = ze(r, e), l) {
          case 0:
            n = Ni(null, n, r, e, t);
            break e;
          case 1:
            n = Ru(null, n, r, e, t);
            break e;
          case 11:
            n = Lu(null, n, r, e, t);
            break e;
          case 14:
            n = Tu(null, n, r, ze(r.type, e), t);
            break e;
        }
        throw Error(y(
          306,
          r,
          ""
        ));
      }
      return n;
    case 0:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ze(r, l), Ni(e, n, r, l, t);
    case 1:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ze(r, l), Ru(e, n, r, l, t);
    case 3:
      e: {
        if (ja(n), e === null) throw Error(y(387));
        r = n.pendingProps, i = n.memoizedState, l = i.element, aa(e, n), Yr(n, r, null, t);
        var o = n.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, n.updateQueue.baseState = i, n.memoizedState = i, n.flags & 256) {
          l = it(Error(y(423)), n), n = Iu(e, n, r, t, l);
          break e;
        } else if (r !== l) {
          l = it(Error(y(424)), n), n = Iu(e, n, r, t, l);
          break e;
        } else for (he = sn(n.stateNode.containerInfo.firstChild), ve = n, F = !0, Te = null, t = ua(n, null, r, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (tt(), r === l) {
            n = Xe(e, n, t);
            break e;
          }
          ie(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return ca(n), e === null && Ei(n), r = n.type, l = n.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, yi(r, l) ? o = null : i !== null && yi(r, i) && (n.flags |= 32), Da(e, n), ie(e, n, o, t), n.child;
    case 6:
      return e === null && Ei(n), null;
    case 13:
      return Fa(e, n, t);
    case 4:
      return ho(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = rt(n, null, r, t) : ie(e, n, r, t), n.child;
    case 11:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ze(r, l), Lu(e, n, r, l, t);
    case 7:
      return ie(e, n, n.pendingProps, t), n.child;
    case 8:
      return ie(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return ie(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (r = n.type._context, l = n.pendingProps, i = n.memoizedProps, o = l.value, O(Qr, r._currentValue), r._currentValue = o, i !== null) if (Oe(i.value, o)) {
          if (i.children === l.children && !fe.current) {
            n = Xe(e, n, t);
            break e;
          }
        } else for (i = n.child, i !== null && (i.return = n); i !== null; ) {
          var u = i.dependencies;
          if (u !== null) {
            o = i.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (i.tag === 1) {
                  s = We(-1, t & -t), s.tag = 2;
                  var c = i.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var h = c.pending;
                    h === null ? s.next = s : (s.next = h.next, h.next = s), c.pending = s;
                  }
                }
                i.lanes |= t, s = i.alternate, s !== null && (s.lanes |= t), Ci(
                  i.return,
                  t,
                  n
                ), u.lanes |= t;
                break;
              }
              s = s.next;
            }
          } else if (i.tag === 10) o = i.type === n.type ? null : i.child;
          else if (i.tag === 18) {
            if (o = i.return, o === null) throw Error(y(341));
            o.lanes |= t, u = o.alternate, u !== null && (u.lanes |= t), Ci(o, t, n), o = i.sibling;
          } else o = i.child;
          if (o !== null) o.return = i;
          else for (o = i; o !== null; ) {
            if (o === n) {
              o = null;
              break;
            }
            if (i = o.sibling, i !== null) {
              i.return = o.return, o = i;
              break;
            }
            o = o.return;
          }
          i = o;
        }
        ie(e, n, l.children, t), n = n.child;
      }
      return n;
    case 9:
      return l = n.type, r = n.pendingProps.children, qn(n, t), l = xe(l), r = r(l), n.flags |= 1, ie(e, n, r, t), n.child;
    case 14:
      return r = n.type, l = ze(r, n.pendingProps), l = ze(r.type, l), Tu(e, n, r, l, t);
    case 15:
      return Oa(e, n, n.type, n.pendingProps, t);
    case 17:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ze(r, l), zr(e, n), n.tag = 1, de(r) ? (e = !0, Vr(n)) : e = !1, qn(n, t), Ta(n, r, l), _i(n, r, l, t), zi(null, n, r, !0, e, t);
    case 19:
      return Ua(e, n, t);
    case 22:
      return Ma(e, n, t);
  }
  throw Error(y(156, n.tag));
};
function ec(e, n) {
  return Ns(e, n);
}
function _d(e, n, t, r) {
  this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ee(e, n, t, r) {
  return new _d(e, n, t, r);
}
function To(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Pd(e) {
  if (typeof e == "function") return To(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Xi) return 11;
    if (e === Gi) return 14;
  }
  return 2;
}
function dn(e, n) {
  var t = e.alternate;
  return t === null ? (t = Ee(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
}
function Rr(e, n, t, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function") To(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Fn:
      return Pn(t.children, l, i, n);
    case Yi:
      o = 8, l |= 8;
      break;
    case Gl:
      return e = Ee(12, t, n, l | 2), e.elementType = Gl, e.lanes = i, e;
    case Zl:
      return e = Ee(13, t, n, l), e.elementType = Zl, e.lanes = i, e;
    case Jl:
      return e = Ee(19, t, n, l), e.elementType = Jl, e.lanes = i, e;
    case cs:
      return ml(t, l, i, n);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ss:
          o = 10;
          break e;
        case as:
          o = 9;
          break e;
        case Xi:
          o = 11;
          break e;
        case Gi:
          o = 14;
          break e;
        case Je:
          o = 16, r = null;
          break e;
      }
      throw Error(y(130, e == null ? e : typeof e, ""));
  }
  return n = Ee(o, t, n, l), n.elementType = e, n.type = r, n.lanes = i, n;
}
function Pn(e, n, t, r) {
  return e = Ee(7, e, r, n), e.lanes = t, e;
}
function ml(e, n, t, r) {
  return e = Ee(22, e, r, n), e.elementType = cs, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
}
function Kl(e, n, t) {
  return e = Ee(6, e, null, n), e.lanes = t, e;
}
function Yl(e, n, t) {
  return n = Ee(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
}
function Nd(e, n, t, r, l) {
  this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Nl(0), this.expirationTimes = Nl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Nl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Ro(e, n, t, r, l, i, o, u, s) {
  return e = new Nd(e, n, t, u, s), n === 1 ? (n = 1, i === !0 && (n |= 8)) : n = 0, i = Ee(3, null, null, n), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, mo(i), e;
}
function zd(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: jn, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
}
function nc(e) {
  if (!e) return mn;
  e = e._reactInternals;
  e: {
    if (On(e) !== e || e.tag !== 1) throw Error(y(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (de(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (de(t)) return na(e, t, n);
  }
  return n;
}
function tc(e, n, t, r, l, i, o, u, s) {
  return e = Ro(t, r, !0, e, l, i, o, u, s), e.context = nc(null), t = e.current, r = oe(), l = fn(t), i = We(r, l), i.callback = n ?? null, an(t, i, l), e.current.lanes = l, Jt(e, l, r), pe(e, r), e;
}
function hl(e, n, t, r) {
  var l = n.current, i = oe(), o = fn(l);
  return t = nc(t), n.context === null ? n.context = t : n.pendingContext = t, n = We(i, o), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = an(l, n, o), e !== null && (Ie(e, l, o, i), _r(e, l, o)), o;
}
function nl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vu(e, n) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Io(e, n) {
  Vu(e, n), (e = e.alternate) && Vu(e, n);
}
function Ld() {
  return null;
}
var rc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Oo(e) {
  this._internalRoot = e;
}
vl.prototype.render = Oo.prototype.render = function(e) {
  var n = this._internalRoot;
  if (n === null) throw Error(y(409));
  hl(e, n, null, null);
};
vl.prototype.unmount = Oo.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    Rn(function() {
      hl(null, e, null, null);
    }), n[Ke] = null;
  }
};
function vl(e) {
  this._internalRoot = e;
}
vl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var n = Ms();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < en.length && n !== 0 && n < en[t].priority; t++) ;
    en.splice(t, 0, e), t === 0 && js(e);
  }
};
function Mo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function yl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Hu() {
}
function Td(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = nl(o);
        i.call(c);
      };
    }
    var o = tc(n, r, e, 0, null, !1, !1, "", Hu);
    return e._reactRootContainer = o, e[Ke] = o.current, Bt(e.nodeType === 8 ? e.parentNode : e), Rn(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = nl(s);
      u.call(c);
    };
  }
  var s = Ro(e, 0, !1, null, null, !1, !1, "", Hu);
  return e._reactRootContainer = s, e[Ke] = s.current, Bt(e.nodeType === 8 ? e.parentNode : e), Rn(function() {
    hl(n, s, t, r);
  }), s;
}
function gl(e, n, t, r, l) {
  var i = t._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = nl(o);
        u.call(s);
      };
    }
    hl(n, o, e, l);
  } else o = Td(t, n, e, l, r);
  return nl(o);
}
Is = function(e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = Et(n.pendingLanes);
        t !== 0 && (qi(n, t | 1), pe(n, W()), !(R & 6) && (ot = W() + 500, yn()));
      }
      break;
    case 13:
      Rn(function() {
        var r = Ye(e, 1);
        if (r !== null) {
          var l = oe();
          Ie(r, e, 1, l);
        }
      }), Io(e, 1);
  }
};
bi = function(e) {
  if (e.tag === 13) {
    var n = Ye(e, 134217728);
    if (n !== null) {
      var t = oe();
      Ie(n, e, 134217728, t);
    }
    Io(e, 134217728);
  }
};
Os = function(e) {
  if (e.tag === 13) {
    var n = fn(e), t = Ye(e, n);
    if (t !== null) {
      var r = oe();
      Ie(t, e, n, r);
    }
    Io(e, n);
  }
};
Ms = function() {
  return I;
};
Ds = function(e, n) {
  var t = I;
  try {
    return I = e, n();
  } finally {
    I = t;
  }
};
ui = function(e, n, t) {
  switch (n) {
    case "input":
      if (ei(e, t), n = t.name, t.type === "radio" && n != null) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = sl(r);
            if (!l) throw Error(y(90));
            ds(r), ei(r, l);
          }
        }
      }
      break;
    case "textarea":
      ms(e, t);
      break;
    case "select":
      n = t.value, n != null && Xn(e, !!t.multiple, n, !1);
  }
};
Ss = No;
Es = Rn;
var Rd = { usingClientEntryPoint: !1, Events: [bt, Bn, sl, ws, ks, No] }, wt = { findFiberByHostInstance: En, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Id = { bundleType: wt.bundleType, version: wt.version, rendererPackageName: wt.rendererPackageName, rendererConfig: wt.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ge.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = _s(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: wt.findFiberByHostInstance || Ld, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var wr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wr.isDisabled && wr.supportsFiber) try {
    ll = wr.inject(Id), Ue = wr;
  } catch {
  }
}
ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rd;
ge.createPortal = function(e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Mo(n)) throw Error(y(200));
  return zd(e, n, null, t);
};
ge.createRoot = function(e, n) {
  if (!Mo(e)) throw Error(y(299));
  var t = !1, r = "", l = rc;
  return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = Ro(e, 1, !1, null, null, t, !1, r, l), e[Ke] = n.current, Bt(e.nodeType === 8 ? e.parentNode : e), new Oo(n);
};
ge.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
  return e = _s(n), e = e === null ? null : e.stateNode, e;
};
ge.flushSync = function(e) {
  return Rn(e);
};
ge.hydrate = function(e, n, t) {
  if (!yl(n)) throw Error(y(200));
  return gl(null, e, n, !0, t);
};
ge.hydrateRoot = function(e, n, t) {
  if (!Mo(e)) throw Error(y(405));
  var r = t != null && t.hydratedSources || null, l = !1, i = "", o = rc;
  if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), n = tc(n, null, e, 1, t ?? null, l, !1, i, o), e[Ke] = n.current, Bt(e), r) for (e = 0; e < r.length; e++) t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
    t,
    l
  );
  return new vl(n);
};
ge.render = function(e, n, t) {
  if (!yl(n)) throw Error(y(200));
  return gl(null, e, n, !1, t);
};
ge.unmountComponentAtNode = function(e) {
  if (!yl(e)) throw Error(y(40));
  return e._reactRootContainer ? (Rn(function() {
    gl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ke] = null;
    });
  }), !0) : !1;
};
ge.unstable_batchedUpdates = No;
ge.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
  if (!yl(t)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return gl(e, n, t, !1, r);
};
ge.version = "18.3.1-next-f1338f8080-20240426";
function lc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lc);
    } catch (e) {
      console.error(e);
    }
}
lc(), ls.exports = ge;
var Od = ls.exports, ic, Wu = Od;
ic = Wu.createRoot, Wu.hydrateRoot;
const Fe = new RegExp(
  /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
), tl = new URL("https://store.sellhub.cx"), Md = () => /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
function Qu(e) {
  return window.open(
    new URL(`/embed/${e}`, tl).toString(),
    "",
    `resizable=no, toolbar=no, scrollbars=no, menubar=no, status=no, directories=no, width=600, height=600, left=${(screen.width - 600) / 2}, top=${(screen.height - 600) / 2}`
  );
}
function Dd() {
  const [e, n] = be.useState(), [t, r] = be.useState(), [l, i] = be.useState(!1), o = Md();
  return be.useEffect(() => {
    const u = (p) => {
      if (typeof p.detail != "object" || !p.detail || !("variant" in p.detail) || typeof p.detail.variant != "string") {
        console.warn(
          "Invalid sellhubButtonClick event sent: expected detail.variant to be typeof string"
        );
        return;
      }
      if (!p.detail.variant.match(Fe)) {
        console.warn(
          `Invalid sellhubButtonClick event sent: invalid ID ${p.detail.variant}`
        );
        return;
      }
      o ? Qu(`variant/${p.detail.variant}`) : (i(!1), n(`variant/${p.detail.variant}`));
    };
    document.addEventListener(
      "sellhubButtonClick",
      u,
      !1
    );
    const s = (p) => {
      if (typeof p.detail != "object" || !p.detail || !("product" in p.detail) || typeof p.detail.product != "string") {
        console.warn(
          "Invalid sellhubProductClick event sent: expected detail.product to be typeof string"
        );
        return;
      }
      if (!p.detail.product.match(Fe)) {
        console.warn(
          `Invalid sellhubProductClick event sent: invalid ID ${p.detail.product}`
        );
        return;
      }
      o ? Qu(`product/${p.detail.product}`) : (i(!1), n(`product/${p.detail.product}`));
    };
    document.addEventListener(
      "sellhubProductClick",
      s,
      !1
    );
    const c = (p) => {
      if (typeof p.detail != "object" || !p.detail || !("bundle" in p.detail) || typeof p.detail.bundle != "string") {
        console.warn(
          "Invalid sellhubBundleClick event sent: expected detail.bundle to be typeof string"
        );
        return;
      }
      if (!p.detail.bundle.match(Fe)) {
        console.warn(
          `Invalid sellhubBundleClick event sent: invalid ID ${p.detail.bundle}`
        );
        return;
      }
      i(!1), n(`bundle/${p.detail.bundle}`);
    };
    document.addEventListener(
      "sellhubBundleClick",
      c,
      !1
    );
    const h = (p) => {
      if (typeof p.detail != "object" || !p.detail || !("storeHost" in p.detail) || typeof p.detail.storeHost != "string") {
        console.warn(
          "Invalid sellhubOpenCartClick event sent: expected detail.storeHost to be typeof string"
        );
        return;
      }
      try {
        new URL(p.detail.storeHost);
      } catch {
        console.warn(
          `Invalid sellhubOpenCartClick event sent: invalid URL ${p.detail.storeHost}`
        );
        return;
      }
      i(!1), n("checkout"), r(p.detail.storeHost);
    };
    document.addEventListener(
      "sellhubOpenCartClick",
      h,
      !1
    );
    const m = (p) => {
      const g = new URL(p.origin), w = tl.hostname.split(".")[1], k = g.host.split(".")[1];
      if (!k.startsWith(k)) {
        console.warn(
          `Invalid message origin: expected ${w}, got ${k}`
        );
        return;
      }
      i(!0);
    };
    return window.addEventListener("message", m), () => {
      document.removeEventListener(
        "sellhubButtonClick",
        u,
        !1
      ), document.removeEventListener(
        "sellhubProductClick",
        s,
        !1
      ), document.removeEventListener(
        "sellhubBundleClick",
        c,
        !1
      ), document.removeEventListener(
        "sellhubOpenCartClick",
        h,
        !1
      ), window.removeEventListener("message", m);
    };
  }, []), be.useEffect(() => {
    const u = (s) => {
      s.data === "cookiesCleared" && n(null);
    };
    return window.addEventListener("message", u), () => {
      window.removeEventListener("message", u);
    };
  }, []), /* @__PURE__ */ le.jsx(
    "div",
    {
      className: "sellhub-embed-holder",
      style: {
        position: "fixed",
        zIndex: 9999,
        inset: "0",
        background: "rgba(0, 0, 0, 0.8)",
        opacity: e ? 1 : 0,
        pointerEvents: e ? "auto" : "none",
        backdropFilter: "blur(12px) saturate(180%)",
        display: "grid",
        placeItems: "center",
        padding: 16
      },
      onClick: () => {
        var s;
        const u = document.querySelector(".sellhub-iframe");
        (s = u == null ? void 0 : u.contentWindow) == null || s.postMessage("clearCookies", "*"), i(!1);
      },
      children: /* @__PURE__ */ le.jsxs(
        "div",
        {
          onClick: (u) => u.stopPropagation(),
          style: {
            background: "black",
            borderRadius: 14,
            position: "relative",
            maxWidth: "600px",
            height: "fit-content"
          },
          children: [
            /* @__PURE__ */ le.jsxs(
              "div",
              {
                style: {
                  position: "absolute",
                  color: "#2480ED",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%"
                },
                children: [
                  /* @__PURE__ */ le.jsx(
                    "img",
                    {
                      width: "229",
                      height: "198",
                      src: "https://public.sellhub.cx/Logo.png",
                      alt: "Sellhub",
                      style: {
                        marginBottom: 16,
                        width: 38,
                        height: "auto"
                      }
                    }
                  ),
                  /* @__PURE__ */ le.jsxs(
                    "svg",
                    {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        /* @__PURE__ */ le.jsx("circle", { cx: "4", cy: "12", r: "3", fill: "currentColor", children: /* @__PURE__ */ le.jsx(
                          "animate",
                          {
                            id: "spinner_qFRN",
                            begin: "0;spinner_OcgL.end+0.25s",
                            attributeName: "cy",
                            calcMode: "spline",
                            dur: "0.6s",
                            values: "12;6;12",
                            keySplines: ".33,.66,.66,1;.33,0,.66,.33"
                          }
                        ) }),
                        /* @__PURE__ */ le.jsx("circle", { cx: "12", cy: "12", r: "3", fill: "currentColor", children: /* @__PURE__ */ le.jsx(
                          "animate",
                          {
                            begin: "spinner_qFRN.begin+0.1s",
                            attributeName: "cy",
                            calcMode: "spline",
                            dur: "0.6s",
                            values: "12;6;12",
                            keySplines: ".33,.66,.66,1;.33,0,.66,.33"
                          }
                        ) }),
                        /* @__PURE__ */ le.jsx("circle", { cx: "20", cy: "12", r: "3", fill: "currentColor", children: /* @__PURE__ */ le.jsx(
                          "animate",
                          {
                            id: "spinner_OcgL",
                            begin: "spinner_qFRN.begin+0.2s",
                            attributeName: "cy",
                            calcMode: "spline",
                            dur: "0.6s",
                            values: "12;6;12",
                            keySplines: ".33,.66,.66,1;.33,0,.66,.33"
                          }
                        ) })
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ le.jsx(
              "iframe",
              {
                allow: "payment *",
                className: "sellhub-iframe",
                width: "600",
                height: "550",
                style: {
                  border: 0,
                  borderRadius: 16,
                  opacity: l ? 1 : 0,
                  position: "relative",
                  maxWidth: "calc(100vw - 32px)",
                  maxHeight: "calc(100vh - 32px)"
                },
                src: e ? new URL(
                  `/embed/${e}`,
                  t ? new URL(t) : tl
                ).toString() : void 0,
                children: e ? null : /* @__PURE__ */ le.jsx("div", { children: "test" })
              },
              e
            )
          ]
        }
      )
    }
  );
}
function Ku() {
  const e = document.createElement("iframe");
  e.id = "sellhub-cart-iframe", e.src = new URL("/embed/onAddToCart", tl).toString(), console.log(e.src), document.body.appendChild(e), document.addEventListener(
    "sellhubAddToCart",
    (n) => {
      var t, r;
      if (typeof n.detail != "object" || !n.detail) {
        console.warn(
          "Invalid sellhubAddToCart event sent: expected detail to be typeof object"
        );
        return;
      }
      if (!("variant" in n.detail) && !("bundle" in n.detail)) {
        console.warn(
          "Invalid sellhubAddToCart event sent: expected detail.variant to be typeof string"
        );
        return;
      }
      if ("variant" in n.detail) {
        if (!n.detail.variant.match(Fe)) {
          console.warn(
            `Invalid sellhubAddToCart event sent: invalid ID ${n.detail.variant}`
          );
          return;
        }
        (t = e.contentWindow) == null || t.postMessage(
          {
            type: "addToCart",
            variant: n.detail.variant
          },
          e.src
        );
      } else if ("bundle" in n.detail) {
        if (!n.detail.bundle.match(Fe)) {
          console.warn(
            `Invalid sellhubAddToCart event sent: invalid ID ${n.detail.bundle}`
          );
          return;
        }
        (r = e.contentWindow) == null || r.postMessage(
          {
            type: "addToCart",
            bundle: n.detail.bundle
          },
          e.src
        );
      }
    },
    !1
  );
}
function Dn(e, n, t, r) {
  const l = document.querySelectorAll(`button[${e}]`);
  for (const i of l) {
    const o = i.getAttribute(e);
    if (o) {
      if (n && !o.match(n)) {
        console.warn(`Found element with ${e}:`, i);
        continue;
      }
      i.addEventListener("click", () => {
        document.dispatchEvent(
          new CustomEvent(t, {
            detail: r(o)
          })
        );
      });
    }
  }
  return l.length;
}
(() => {
  const e = document.createElement("div");
  document.body.appendChild(e), ic(e).render(
    /* @__PURE__ */ le.jsx(be.StrictMode, { children: /* @__PURE__ */ le.jsx(Dd, {}) })
  ), Dn("data-sellhub-variant", Fe, "sellhubButtonClick", (n) => ({
    variant: n
  })), Dn(
    "data-sellhub-product",
    Fe,
    "sellhubProductClick",
    (n) => ({ product: n })
  ), Dn(
    "data-sellhub-bundle",
    Fe,
    "sellhubBundleClick",
    (n) => ({ bundle: n })
  ), Dn(
    "data-sellhub-open-cart-store-url",
    void 0,
    "sellhubOpenCartClick",
    (n) => ({ storeHost: n })
  ), Dn(
    "data-sellhub-cart-variant",
    Fe,
    "sellhubAddToCart",
    (n) => ({ variant: n })
  ) && Ku(), Dn(
    "data-sellhub-cart-bundle",
    Fe,
    "sellhubAddToCart",
    (n) => ({ bundle: n })
  ) && Ku();
})();
