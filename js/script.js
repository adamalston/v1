! function(a) {
    function e(e) {
        for (var t, n, r = e[0], o = e[1], i = 0, s = []; i < r.length; i++) n = r[i], u[n] && s.push(u[n][0]), u[n] = 0;
        for (t in o) Object.prototype.hasOwnProperty.call(o, t) && (a[t] = o[t]);
        for (c && c(e); s.length;) s.shift()()
    }
    var n = {},
        u = {
            0: 0
        };

    function o(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return a[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
    }
    o.e = function(i) {
        var e = [],
            n = u[i];
        if (0 !== n)
            if (n) e.push(n[2]);
            else {
                var t = new Promise(function(e, t) {
                    n = u[i] = [e, t]
                });
                e.push(n[2] = t);
                var r, s = document.createElement("script");
                s.charset = "utf-8", s.timeout = 120, o.nc && s.setAttribute("nonce", o.nc), s.src = o.p + "js/" + i + ".bundle.871869ef169f35ab331d.js", r = function(e) {
                    s.onerror = s.onload = null, clearTimeout(a);
                    var t = u[i];
                    if (0 !== t) {
                        if (t) {
                            var n = e && ("load" === e.type ? "missing" : e.type),
                                r = e && e.target && e.target.src,
                                o = new Error("Loading chunk " + i + " failed.\n(" + n + ": " + r + ")");
                            o.type = n, o.request = r, t[1](o)
                        }
                        u[i] = void 0
                    }
                };
                var a = setTimeout(function() {
                    r({
                        type: "timeout",
                        target: s
                    })
                }, 12e4);
                s.onerror = s.onload = r, document.head.appendChild(s)
            } return Promise.all(e)
    }, o.m = a, o.c = n, o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) o.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "/", o.oe = function(e) {
        throw console.error(e), e
    };
    var t = window.webpackJsonp = window.webpackJsonp || [],
        r = t.push.bind(t);
    t.push = e, t = t.slice();
    for (var i = 0; i < t.length; i++) e(t[i]);
    var c = r;
    o(o.s = 5)
}([function(Qt, Kt, e) {
    var Zt;
    ! function(e, t) {
        "use strict";
        "object" == typeof Qt.exports ? Qt.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(C, e) {
        "use strict";
        var t = [],
            k = C.document,
            r = Object.getPrototypeOf,
            a = t.slice,
            g = t.concat,
            u = t.push,
            o = t.indexOf,
            n = {},
            i = n.toString,
            y = n.hasOwnProperty,
            s = y.toString,
            c = s.call(Object),
            v = {},
            m = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            },
            b = function(e) {
                return null != e && e === e.window
            },
            l = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function x(e, t, n) {
            var r, o, i = (n = n || k).createElement("script");
            if (i.text = e, t)
                for (r in l)(o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
            n.head.appendChild(i).parentNode.removeChild(i)
        }

        function w(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e
        }
        var E = function(e, t) {
                return new E.fn.init(e, t)
            },
            f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        function p(e) {
            var t = !!e && "length" in e && e.length,
                n = w(e);
            return !m(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
        }
        E.fn = E.prototype = {
            jquery: "3.4.0",
            constructor: E,
            length: 0,
            toArray: function() {
                return a.call(this)
            },
            get: function(e) {
                return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = E.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return E.each(this, e)
            },
            map: function(n) {
                return this.pushStack(E.map(this, function(e, t) {
                    return n.call(e, t, e)
                }))
            },
            slice: function() {
                return this.pushStack(a.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= n && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: u,
            sort: t.sort,
            splice: t.splice
        }, E.extend = E.fn.extend = function() {
            var e, t, n, r, o, i, s = arguments[0] || {},
                a = 1,
                u = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || m(s) || (s = {}), a === u && (s = this, a--); a < u; a++)
                if (null != (e = arguments[a]))
                    for (t in e) r = e[t], "__proto__" !== t && s !== r && (c && r && (E.isPlainObject(r) || (o = Array.isArray(r))) ? (n = s[t], i = o && !Array.isArray(n) ? [] : o || E.isPlainObject(n) ? n : {}, o = !1, s[t] = E.extend(c, i, r)) : void 0 !== r && (s[t] = r));
            return s
        }, E.extend({
            expando: "jQuery" + ("3.4.0" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || "function" == typeof(n = y.call(t, "constructor") && t.constructor) && s.call(n) === c)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function(e, t) {
                x(e, {
                    nonce: t && t.nonce
                })
            },
            each: function(e, t) {
                var n, r = 0;
                if (p(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(f, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (p(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : o.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
                return e.length = o, e
            },
            grep: function(e, t, n) {
                for (var r = [], o = 0, i = e.length, s = !n; o < i; o++) !t(e[o], o) !== s && r.push(e[o]);
                return r
            },
            map: function(e, t, n) {
                var r, o, i = 0,
                    s = [];
                if (p(e))
                    for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && s.push(o);
                else
                    for (i in e) null != (o = t(e[i], i, n)) && s.push(o);
                return g.apply([], s)
            },
            guid: 1,
            support: v
        }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            n["[object " + t + "]"] = t.toLowerCase()
        });
        var d = function(n) {
            var e, d, x, i, o, h, f, g, w, u, c, T, C, s, k, y, a, l, v, E = "sizzle" + 1 * new Date,
                m = n.document,
                S = 0,
                r = 0,
                p = ue(),
                b = ue(),
                j = ue(),
                N = ue(),
                A = function(e, t) {
                    return e === t && (c = !0), 0
                },
                D = {}.hasOwnProperty,
                t = [],
                L = t.pop,
                O = t.push,
                P = t.push,
                q = t.slice,
                H = function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                I = "[\\x20\\t\\r\\n\\f]",
                R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                _ = "\\[" + I + "*(" + R + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + I + "*\\]",
                B = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + _ + ")*)|.*)\\)|)",
                F = new RegExp(I + "+", "g"),
                W = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
                $ = new RegExp("^" + I + "*," + I + "*"),
                z = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
                U = new RegExp(I + "|>"),
                X = new RegExp(B),
                G = new RegExp("^" + R + "$"),
                V = {
                    ID: new RegExp("^#(" + R + ")"),
                    CLASS: new RegExp("^\\.(" + R + ")"),
                    TAG: new RegExp("^(" + R + "|[*])"),
                    ATTR: new RegExp("^" + _),
                    PSEUDO: new RegExp("^" + B),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + M + ")$", "i"),
                    needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
                },
                Y = /HTML$/i,
                J = /^(?:input|select|textarea|button)$/i,
                Q = /^h\d$/i,
                K = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ee = /[+~]/,
                te = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
                ne = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                },
                re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                oe = function(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                ie = function() {
                    T()
                },
                se = xe(function(e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                P.apply(t = q.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType
            } catch (e) {
                P = {
                    apply: t.length ? function(e, t) {
                        O.apply(e, q.call(t))
                    } : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }

            function ae(t, e, n, r) {
                var o, i, s, a, u, c, l, f = e && e.ownerDocument,
                    p = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
                if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, k)) {
                    if (11 !== p && (u = Z.exec(t)))
                        if (o = u[1]) {
                            if (9 === p) {
                                if (!(s = e.getElementById(o))) return n;
                                if (s.id === o) return n.push(s), n
                            } else if (f && (s = f.getElementById(o)) && v(e, s) && s.id === o) return n.push(s), n
                        } else {
                            if (u[2]) return P.apply(n, e.getElementsByTagName(t)), n;
                            if ((o = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return P.apply(n, e.getElementsByClassName(o)), n
                        } if (d.qsa && !N[t + " "] && (!y || !y.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                        if (l = t, f = e, 1 === p && U.test(t)) {
                            for ((a = e.getAttribute("id")) ? a = a.replace(re, oe) : e.setAttribute("id", a = E), i = (c = h(t)).length; i--;) c[i] = "#" + a + " " + be(c[i]);
                            l = c.join(","), f = ee.test(t) && ve(e.parentNode) || e
                        }
                        try {
                            return P.apply(n, f.querySelectorAll(l)), n
                        } catch (e) {
                            N(t, !0)
                        } finally {
                            a === E && e.removeAttribute("id")
                        }
                    }
                }
                return g(t.replace(W, "$1"), e, n, r)
            }

            function ue() {
                var r = [];
                return function e(t, n) {
                    return r.push(t + " ") > x.cacheLength && delete e[r.shift()], e[t + " "] = n
                }
            }

            function ce(e) {
                return e[E] = !0, e
            }

            function le(e) {
                var t = C.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function fe(e, t) {
                for (var n = e.split("|"), r = n.length; r--;) x.attrHandle[n[r]] = t
            }

            function pe(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function de(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function he(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }

            function ge(t) {
                return function(e) {
                    return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && se(e) === t : e.disabled === t : "label" in e && e.disabled === t
                }
            }

            function ye(s) {
                return ce(function(i) {
                    return i = +i, ce(function(e, t) {
                        for (var n, r = s([], e.length, i), o = r.length; o--;) e[n = r[o]] && (e[n] = !(t[n] = e[n]))
                    })
                })
            }

            function ve(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (e in d = ae.support = {}, o = ae.isXML = function(e) {
                    var t = e.namespaceURI,
                        n = (e.ownerDocument || e).documentElement;
                    return !Y.test(t || n && n.nodeName || "HTML")
                }, T = ae.setDocument = function(e) {
                    var t, n, r = e ? e.ownerDocument || e : m;
                    return r !== C && 9 === r.nodeType && r.documentElement && (s = (C = r).documentElement, k = !o(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ie, !1) : n.attachEvent && n.attachEvent("onunload", ie)), d.attributes = le(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), d.getElementsByTagName = le(function(e) {
                        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                    }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = le(function(e) {
                        return s.appendChild(e).id = E, !C.getElementsByName || !C.getElementsByName(E).length
                    }), d.getById ? (x.filter.ID = function(e) {
                        var t = e.replace(te, ne);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }, x.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && k) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (x.filter.ID = function(e) {
                        var n = e.replace(te, ne);
                        return function(e) {
                            var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return t && t.value === n
                        }
                    }, x.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && k) {
                            var n, r, o, i = t.getElementById(e);
                            if (i) {
                                if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                                for (o = t.getElementsByName(e), r = 0; i = o[r++];)
                                    if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
                            }
                            return []
                        }
                    }), x.find.TAG = d.getElementsByTagName ? function(e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n, r = [],
                            o = 0,
                            i = t.getElementsByTagName(e);
                        if ("*" !== e) return i;
                        for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                        return r
                    }, x.find.CLASS = d.getElementsByClassName && function(e, t) {
                        if (void 0 !== t.getElementsByClassName && k) return t.getElementsByClassName(e)
                    }, a = [], y = [], (d.qsa = K.test(C.querySelectorAll)) && (le(function(e) {
                        s.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + I + "*(?:value|" + M + ")"), e.querySelectorAll("[id~=" + E + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + E + "+*").length || y.push(".#.+[+~]")
                    }), le(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = C.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + I + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
                    })), (d.matchesSelector = K.test(l = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && le(function(e) {
                        d.disconnectedMatch = l.call(e, "*"), l.call(e, "[s!='']:x"), a.push("!=", B)
                    }), y = y.length && new RegExp(y.join("|")), a = a.length && new RegExp(a.join("|")), t = K.test(s.compareDocumentPosition), v = t || K.test(s.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, A = t ? function(e, t) {
                        if (e === t) return c = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && v(m, e) ? -1 : t === C || t.ownerDocument === m && v(m, t) ? 1 : u ? H(u, e) - H(u, t) : 0 : 4 & n ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return c = !0, 0;
                        var n, r = 0,
                            o = e.parentNode,
                            i = t.parentNode,
                            s = [e],
                            a = [t];
                        if (!o || !i) return e === C ? -1 : t === C ? 1 : o ? -1 : i ? 1 : u ? H(u, e) - H(u, t) : 0;
                        if (o === i) return pe(e, t);
                        for (n = e; n = n.parentNode;) s.unshift(n);
                        for (n = t; n = n.parentNode;) a.unshift(n);
                        for (; s[r] === a[r];) r++;
                        return r ? pe(s[r], a[r]) : s[r] === m ? -1 : a[r] === m ? 1 : 0
                    }), C
                }, ae.matches = function(e, t) {
                    return ae(e, null, null, t)
                }, ae.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && k && !N[t + " "] && (!a || !a.test(t)) && (!y || !y.test(t))) try {
                        var n = l.call(e, t);
                        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                    } catch (e) {
                        N(t, !0)
                    }
                    return 0 < ae(t, C, null, [e]).length
                }, ae.contains = function(e, t) {
                    return (e.ownerDocument || e) !== C && T(e), v(e, t)
                }, ae.attr = function(e, t) {
                    (e.ownerDocument || e) !== C && T(e);
                    var n = x.attrHandle[t.toLowerCase()],
                        r = n && D.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !k) : void 0;
                    return void 0 !== r ? r : d.attributes || !k ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }, ae.escape = function(e) {
                    return (e + "").replace(re, oe)
                }, ae.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, ae.uniqueSort = function(e) {
                    var t, n = [],
                        r = 0,
                        o = 0;
                    if (c = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(A), c) {
                        for (; t = e[o++];) t === e[o] && (r = n.push(o));
                        for (; r--;) e.splice(n[r], 1)
                    }
                    return u = null, e
                }, i = ae.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                        } else if (3 === o || 4 === o) return e.nodeValue
                    } else
                        for (; t = e[r++];) n += i(t);
                    return n
                }, (x = ae.selectors = {
                    cacheLength: 50,
                    createPseudo: ce,
                    match: V,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = p[e + " "];
                            return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && p(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(n, r, o) {
                            return function(e) {
                                var t = ae.attr(e, n);
                                return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === o : "!=" === r ? t !== o : "^=" === r ? o && 0 === t.indexOf(o) : "*=" === r ? o && -1 < t.indexOf(o) : "$=" === r ? o && t.slice(-o.length) === o : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(o) : "|=" === r && (t === o || t.slice(0, o.length + 1) === o + "-"))
                            }
                        },
                        CHILD: function(h, e, t, g, y) {
                            var v = "nth" !== h.slice(0, 3),
                                m = "last" !== h.slice(-4),
                                b = "of-type" === e;
                            return 1 === g && 0 === y ? function(e) {
                                return !!e.parentNode
                            } : function(e, t, n) {
                                var r, o, i, s, a, u, c = v !== m ? "nextSibling" : "previousSibling",
                                    l = e.parentNode,
                                    f = b && e.nodeName.toLowerCase(),
                                    p = !n && !b,
                                    d = !1;
                                if (l) {
                                    if (v) {
                                        for (; c;) {
                                            for (s = e; s = s[c];)
                                                if (b ? s.nodeName.toLowerCase() === f : 1 === s.nodeType) return !1;
                                            u = c = "only" === h && !u && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (u = [m ? l.firstChild : l.lastChild], m && p) {
                                        for (d = (a = (r = (o = (i = (s = l)[E] || (s[E] = {}))[s.uniqueID] || (i[s.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], s = a && l.childNodes[a]; s = ++a && s && s[c] || (d = a = 0) || u.pop();)
                                            if (1 === s.nodeType && ++d && s === e) {
                                                o[h] = [S, a, d];
                                                break
                                            }
                                    } else if (p && (d = a = (r = (o = (i = (s = e)[E] || (s[E] = {}))[s.uniqueID] || (i[s.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d)
                                        for (;
                                            (s = ++a && s && s[c] || (d = a = 0) || u.pop()) && ((b ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++d || (p && ((o = (i = s[E] || (s[E] = {}))[s.uniqueID] || (i[s.uniqueID] = {}))[h] = [S, d]), s !== e)););
                                    return (d -= y) === g || d % g == 0 && 0 <= d / g
                                }
                            }
                        },
                        PSEUDO: function(e, i) {
                            var t, s = x.pseudos[e] || x.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                            return s[E] ? s(i) : 1 < s.length ? (t = [e, e, "", i], x.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function(e, t) {
                                for (var n, r = s(e, i), o = r.length; o--;) e[n = H(e, r[o])] = !(t[n] = r[o])
                            }) : function(e) {
                                return s(e, 0, t)
                            }) : s
                        }
                    },
                    pseudos: {
                        not: ce(function(e) {
                            var r = [],
                                o = [],
                                a = f(e.replace(W, "$1"));
                            return a[E] ? ce(function(e, t, n, r) {
                                for (var o, i = a(e, null, r, []), s = e.length; s--;)(o = i[s]) && (e[s] = !(t[s] = o))
                            }) : function(e, t, n) {
                                return r[0] = e, a(r, null, n, o), r[0] = null, !o.pop()
                            }
                        }),
                        has: ce(function(t) {
                            return function(e) {
                                return 0 < ae(t, e).length
                            }
                        }),
                        contains: ce(function(t) {
                            return t = t.replace(te, ne),
                                function(e) {
                                    return -1 < (e.textContent || i(e)).indexOf(t)
                                }
                        }),
                        lang: ce(function(n) {
                            return G.test(n || "") || ae.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                                function(e) {
                                    var t;
                                    do {
                                        if (t = k ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var t = n.location && n.location.hash;
                            return t && t.slice(1) === e.id
                        },
                        root: function(e) {
                            return e === s
                        },
                        focus: function(e) {
                            return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: ge(!1),
                        disabled: ge(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !x.pseudos.empty(e)
                        },
                        header: function(e) {
                            return Q.test(e.nodeName)
                        },
                        input: function(e) {
                            return J.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: ye(function() {
                            return [0]
                        }),
                        last: ye(function(e, t) {
                            return [t - 1]
                        }),
                        eq: ye(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: ye(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: ye(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: ye(function(e, t, n) {
                            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                            return e
                        }),
                        gt: ye(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }).pseudos.nth = x.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) x.pseudos[e] = de(e);
            for (e in {
                    submit: !0,
                    reset: !0
                }) x.pseudos[e] = he(e);

            function me() {}

            function be(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                return r
            }

            function xe(a, e, t) {
                var u = e.dir,
                    c = e.next,
                    l = c || u,
                    f = t && "parentNode" === l,
                    p = r++;
                return e.first ? function(e, t, n) {
                    for (; e = e[u];)
                        if (1 === e.nodeType || f) return a(e, t, n);
                    return !1
                } : function(e, t, n) {
                    var r, o, i, s = [S, p];
                    if (n) {
                        for (; e = e[u];)
                            if ((1 === e.nodeType || f) && a(e, t, n)) return !0
                    } else
                        for (; e = e[u];)
                            if (1 === e.nodeType || f)
                                if (o = (i = e[E] || (e[E] = {}))[e.uniqueID] || (i[e.uniqueID] = {}), c && c === e.nodeName.toLowerCase()) e = e[u] || e;
                                else {
                                    if ((r = o[l]) && r[0] === S && r[1] === p) return s[2] = r[2];
                                    if ((o[l] = s)[2] = a(e, t, n)) return !0
                                } return !1
                }
            }

            function we(o) {
                return 1 < o.length ? function(e, t, n) {
                    for (var r = o.length; r--;)
                        if (!o[r](e, t, n)) return !1;
                    return !0
                } : o[0]
            }

            function Te(e, t, n, r, o) {
                for (var i, s = [], a = 0, u = e.length, c = null != t; a < u; a++)(i = e[a]) && (n && !n(i, r, o) || (s.push(i), c && t.push(a)));
                return s
            }

            function Ce(d, h, g, y, v, e) {
                return y && !y[E] && (y = Ce(y)), v && !v[E] && (v = Ce(v, e)), ce(function(e, t, n, r) {
                    var o, i, s, a = [],
                        u = [],
                        c = t.length,
                        l = e || function(e, t, n) {
                            for (var r = 0, o = t.length; r < o; r++) ae(e, t[r], n);
                            return n
                        }(h || "*", n.nodeType ? [n] : n, []),
                        f = !d || !e && h ? l : Te(l, a, d, n, r),
                        p = g ? v || (e ? d : c || y) ? [] : t : f;
                    if (g && g(f, p, n, r), y)
                        for (o = Te(p, u), y(o, [], n, r), i = o.length; i--;)(s = o[i]) && (p[u[i]] = !(f[u[i]] = s));
                    if (e) {
                        if (v || d) {
                            if (v) {
                                for (o = [], i = p.length; i--;)(s = p[i]) && o.push(f[i] = s);
                                v(null, p = [], o, r)
                            }
                            for (i = p.length; i--;)(s = p[i]) && -1 < (o = v ? H(e, s) : a[i]) && (e[o] = !(t[o] = s))
                        }
                    } else p = Te(p === t ? p.splice(c, p.length) : p), v ? v(null, t, p, r) : P.apply(t, p)
                })
            }

            function ke(e) {
                for (var o, t, n, r = e.length, i = x.relative[e[0].type], s = i || x.relative[" "], a = i ? 1 : 0, u = xe(function(e) {
                        return e === o
                    }, s, !0), c = xe(function(e) {
                        return -1 < H(o, e)
                    }, s, !0), l = [function(e, t, n) {
                        var r = !i && (n || t !== w) || ((o = t).nodeType ? u(e, t, n) : c(e, t, n));
                        return o = null, r
                    }]; a < r; a++)
                    if (t = x.relative[e[a].type]) l = [xe(we(l), t)];
                    else {
                        if ((t = x.filter[e[a].type].apply(null, e[a].matches))[E]) {
                            for (n = ++a; n < r && !x.relative[e[n].type]; n++);
                            return Ce(1 < a && we(l), 1 < a && be(e.slice(0, a - 1).concat({
                                value: " " === e[a - 2].type ? "*" : ""
                            })).replace(W, "$1"), t, a < n && ke(e.slice(a, n)), n < r && ke(e = e.slice(n)), n < r && be(e))
                        }
                        l.push(t)
                    } return we(l)
            }
            return me.prototype = x.filters = x.pseudos, x.setFilters = new me, h = ae.tokenize = function(e, t) {
                var n, r, o, i, s, a, u, c = b[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (s = e, a = [], u = x.preFilter; s;) {
                    for (i in n && !(r = $.exec(s)) || (r && (s = s.slice(r[0].length) || s), a.push(o = [])), n = !1, (r = z.exec(s)) && (n = r.shift(), o.push({
                            value: n,
                            type: r[0].replace(W, " ")
                        }), s = s.slice(n.length)), x.filter) !(r = V[i].exec(s)) || u[i] && !(r = u[i](r)) || (n = r.shift(), o.push({
                        value: n,
                        type: i,
                        matches: r
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? ae.error(e) : b(e, a).slice(0)
            }, f = ae.compile = function(e, t) {
                var n, y, v, m, b, r, o = [],
                    i = [],
                    s = j[e + " "];
                if (!s) {
                    for (t || (t = h(e)), n = t.length; n--;)(s = ke(t[n]))[E] ? o.push(s) : i.push(s);
                    (s = j(e, (y = i, m = 0 < (v = o).length, b = 0 < y.length, r = function(e, t, n, r, o) {
                        var i, s, a, u = 0,
                            c = "0",
                            l = e && [],
                            f = [],
                            p = w,
                            d = e || b && x.find.TAG("*", o),
                            h = S += null == p ? 1 : Math.random() || .1,
                            g = d.length;
                        for (o && (w = t === C || t || o); c !== g && null != (i = d[c]); c++) {
                            if (b && i) {
                                for (s = 0, t || i.ownerDocument === C || (T(i), n = !k); a = y[s++];)
                                    if (a(i, t || C, n)) {
                                        r.push(i);
                                        break
                                    } o && (S = h)
                            }
                            m && ((i = !a && i) && u--, e && l.push(i))
                        }
                        if (u += c, m && c !== u) {
                            for (s = 0; a = v[s++];) a(l, f, t, n);
                            if (e) {
                                if (0 < u)
                                    for (; c--;) l[c] || f[c] || (f[c] = L.call(r));
                                f = Te(f)
                            }
                            P.apply(r, f), o && !e && 0 < f.length && 1 < u + v.length && ae.uniqueSort(r)
                        }
                        return o && (S = h, w = p), l
                    }, m ? ce(r) : r))).selector = e
                }
                return s
            }, g = ae.select = function(e, t, n, r) {
                var o, i, s, a, u, c = "function" == typeof e && e,
                    l = !r && h(e = c.selector || e);
                if (n = n || [], 1 === l.length) {
                    if (2 < (i = l[0] = l[0].slice(0)).length && "ID" === (s = i[0]).type && 9 === t.nodeType && k && x.relative[i[1].type]) {
                        if (!(t = (x.find.ID(s.matches[0].replace(te, ne), t) || [])[0])) return n;
                        c && (t = t.parentNode), e = e.slice(i.shift().value.length)
                    }
                    for (o = V.needsContext.test(e) ? 0 : i.length; o-- && (s = i[o], !x.relative[a = s.type]);)
                        if ((u = x.find[a]) && (r = u(s.matches[0].replace(te, ne), ee.test(i[0].type) && ve(t.parentNode) || t))) {
                            if (i.splice(o, 1), !(e = r.length && be(i))) return P.apply(n, r), n;
                            break
                        }
                }
                return (c || f(e, l))(r, t, !k, n, !t || ee.test(e) && ve(t.parentNode) || t), n
            }, d.sortStable = E.split("").sort(A).join("") === E, d.detectDuplicates = !!c, T(), d.sortDetached = le(function(e) {
                return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
            }), le(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || fe("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), d.attributes && le(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || fe("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), le(function(e) {
                return null == e.getAttribute("disabled")
            }) || fe(M, function(e, t, n) {
                var r;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }), ae
        }(C);
        E.find = d, E.expr = d.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = d.uniqueSort, E.text = d.getText, E.isXMLDoc = d.isXML, E.contains = d.contains, E.escapeSelector = d.escape;
        var h = function(e, t, n) {
                for (var r = [], o = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (o && E(e).is(n)) break;
                        r.push(e)
                    } return r
            },
            T = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            S = E.expr.match.needsContext;

        function j(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function A(e, n, r) {
            return m(n) ? E.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== r
            }) : n.nodeType ? E.grep(e, function(e) {
                return e === n !== r
            }) : "string" != typeof n ? E.grep(e, function(e) {
                return -1 < o.call(n, e) !== r
            }) : E.filter(n, e, r)
        }
        E.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, E.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                    o = this;
                if ("string" != typeof e) return this.pushStack(E(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (E.contains(o[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, o[t], n);
                return 1 < r ? E.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(A(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(A(this, e || [], !0))
            },
            is: function(e) {
                return !!A(this, "string" == typeof e && S.test(e) ? E(e) : e || [], !1).length
            }
        });
        var D, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (E.fn.init = function(e, t, n) {
            var r, o;
            if (!e) return this;
            if (n = n || D, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this);
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : k, !0)), N.test(r[1]) && E.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (o = k.getElementById(r[2])) && (this[0] = o, this.length = 1), this
        }).prototype = E.fn, D = E(k);
        var O = /^(?:parents|prev(?:Until|All))/,
            P = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function q(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        E.fn.extend({
            has: function(e) {
                var t = E(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (E.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                var n, r = 0,
                    o = this.length,
                    i = [],
                    s = "string" != typeof e && E(e);
                if (!S.test(e))
                    for (; r < o; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                                i.push(n);
                                break
                            } return this.pushStack(1 < i.length ? E.uniqueSort(i) : i)
            },
            index: function(e) {
                return e ? "string" == typeof e ? o.call(E(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), E.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return h(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return h(e, "parentNode", n)
            },
            next: function(e) {
                return q(e, "nextSibling")
            },
            prev: function(e) {
                return q(e, "previousSibling")
            },
            nextAll: function(e) {
                return h(e, "nextSibling")
            },
            prevAll: function(e) {
                return h(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return h(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return h(e, "previousSibling", n)
            },
            siblings: function(e) {
                return T((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return T(e.firstChild)
            },
            contents: function(e) {
                return void 0 !== e.contentDocument ? e.contentDocument : (j(e, "template") && (e = e.content || e), E.merge([], e.childNodes))
            }
        }, function(r, o) {
            E.fn[r] = function(e, t) {
                var n = E.map(this, o, e);
                return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = E.filter(t, n)), 1 < this.length && (P[r] || E.uniqueSort(n), O.test(r) && n.reverse()), this.pushStack(n)
            }
        });
        var H = /[^\x20\t\r\n\f]+/g;

        function M(e) {
            return e
        }

        function I(e) {
            throw e
        }

        function R(e, t, n, r) {
            var o;
            try {
                e && m(o = e.promise) ? o.call(e).done(t).fail(n) : e && m(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        E.Callbacks = function(r) {
            var e, n;
            r = "string" == typeof r ? (e = r, n = {}, E.each(e.match(H) || [], function(e, t) {
                n[t] = !0
            }), n) : E.extend({}, r);
            var o, t, i, s, a = [],
                u = [],
                c = -1,
                l = function() {
                    for (s = s || r.once, i = o = !0; u.length; c = -1)
                        for (t = u.shift(); ++c < a.length;) !1 === a[c].apply(t[0], t[1]) && r.stopOnFalse && (c = a.length, t = !1);
                    r.memory || (t = !1), o = !1, s && (a = t ? [] : "")
                },
                f = {
                    add: function() {
                        return a && (t && !o && (c = a.length - 1, u.push(t)), function n(e) {
                            E.each(e, function(e, t) {
                                m(t) ? r.unique && f.has(t) || a.push(t) : t && t.length && "string" !== w(t) && n(t)
                            })
                        }(arguments), t && !o && l()), this
                    },
                    remove: function() {
                        return E.each(arguments, function(e, t) {
                            for (var n; - 1 < (n = E.inArray(t, a, n));) a.splice(n, 1), n <= c && c--
                        }), this
                    },
                    has: function(e) {
                        return e ? -1 < E.inArray(e, a) : 0 < a.length
                    },
                    empty: function() {
                        return a && (a = []), this
                    },
                    disable: function() {
                        return s = u = [], a = t = "", this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        return s = u = [], t || o || (a = t = ""), this
                    },
                    locked: function() {
                        return !!s
                    },
                    fireWith: function(e, t) {
                        return s || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), o || l()), this
                    },
                    fire: function() {
                        return f.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return f
        }, E.extend({
            Deferred: function(e) {
                var i = [
                        ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                        ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]
                    ],
                    o = "pending",
                    s = {
                        state: function() {
                            return o
                        },
                        always: function() {
                            return a.done(arguments).fail(arguments), this
                        },
                        catch: function(e) {
                            return s.then(null, e)
                        },
                        pipe: function() {
                            var o = arguments;
                            return E.Deferred(function(r) {
                                E.each(i, function(e, t) {
                                    var n = m(o[t[4]]) && o[t[4]];
                                    a[t[1]](function() {
                                        var e = n && n.apply(this, arguments);
                                        e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                    })
                                }), o = null
                            }).promise()
                        },
                        then: function(t, n, r) {
                            var u = 0;

                            function c(o, i, s, a) {
                                return function() {
                                    var n = this,
                                        r = arguments,
                                        e = function() {
                                            var e, t;
                                            if (!(o < u)) {
                                                if ((e = s.apply(n, r)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                                t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? a ? t.call(e, c(u, i, M, a), c(u, i, I, a)) : (u++, t.call(e, c(u, i, M, a), c(u, i, I, a), c(u, i, M, i.notifyWith))) : (s !== M && (n = void 0, r = [e]), (a || i.resolveWith)(n, r))
                                            }
                                        },
                                        t = a ? e : function() {
                                            try {
                                                e()
                                            } catch (e) {
                                                E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace), u <= o + 1 && (s !== I && (n = void 0, r = [e]), i.rejectWith(n, r))
                                            }
                                        };
                                    o ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()), C.setTimeout(t))
                                }
                            }
                            return E.Deferred(function(e) {
                                i[0][3].add(c(0, e, m(r) ? r : M, e.notifyWith)), i[1][3].add(c(0, e, m(t) ? t : M)), i[2][3].add(c(0, e, m(n) ? n : I))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? E.extend(e, s) : s
                        }
                    },
                    a = {};
                return E.each(i, function(e, t) {
                    var n = t[2],
                        r = t[5];
                    s[t[1]] = n.add, r && n.add(function() {
                        o = r
                    }, i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock), n.add(t[3].fire), a[t[0]] = function() {
                        return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                    }, a[t[0] + "With"] = n.fireWith
                }), s.promise(a), e && e.call(a, a), a
            },
            when: function(e) {
                var n = arguments.length,
                    t = n,
                    r = Array(t),
                    o = a.call(arguments),
                    i = E.Deferred(),
                    s = function(t) {
                        return function(e) {
                            r[t] = this, o[t] = 1 < arguments.length ? a.call(arguments) : e, --n || i.resolveWith(r, o)
                        }
                    };
                if (n <= 1 && (R(e, i.done(s(t)).resolve, i.reject, !n), "pending" === i.state() || m(o[t] && o[t].then))) return i.then();
                for (; t--;) R(o[t], s(t), i.reject);
                return i.promise()
            }
        });
        var _ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        E.Deferred.exceptionHook = function(e, t) {
            C.console && C.console.warn && e && _.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, E.readyException = function(e) {
            C.setTimeout(function() {
                throw e
            })
        };
        var B = E.Deferred();

        function F() {
            k.removeEventListener("DOMContentLoaded", F), C.removeEventListener("load", F), E.ready()
        }
        E.fn.ready = function(e) {
            return B.then(e).catch(function(e) {
                E.readyException(e)
            }), this
        }, E.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || B.resolveWith(k, [E])
            }
        }), E.ready.then = B.then, "complete" === k.readyState || "loading" !== k.readyState && !k.documentElement.doScroll ? C.setTimeout(E.ready) : (k.addEventListener("DOMContentLoaded", F), C.addEventListener("load", F));
        var W = function(e, t, n, r, o, i, s) {
                var a = 0,
                    u = e.length,
                    c = null == n;
                if ("object" === w(n))
                    for (a in o = !0, n) W(e, t, a, n[a], !0, i, s);
                else if (void 0 !== r && (o = !0, m(r) || (s = !0), c && (t = s ? (t.call(e, r), null) : (c = t, function(e, t, n) {
                        return c.call(E(e), n)
                    })), t))
                    for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
                return o ? e : c ? t.call(e) : u ? t(e[0], n) : i
            },
            $ = /^-ms-/,
            z = /-([a-z])/g;

        function U(e, t) {
            return t.toUpperCase()
        }

        function X(e) {
            return e.replace($, "ms-").replace(z, U)
        }
        var G = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

        function V() {
            this.expando = E.expando + V.uid++
        }
        V.uid = 1, V.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var r, o = this.cache(e);
                if ("string" == typeof t) o[X(t)] = n;
                else
                    for (r in t) o[X(r)] = t[r];
                return o
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(H) || []).length;
                        for (; n--;) delete r[t[n]]
                    }(void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !E.isEmptyObject(t)
            }
        };
        var Y = new V,
            J = new V,
            Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            K = /[A-Z]/g;

        function Z(e, t, n) {
            var r, o;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                    try {
                        n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : Q.test(o) ? JSON.parse(o) : o)
                    } catch (e) {}
                    J.set(e, t, n)
                } else n = void 0;
            return n
        }
        E.extend({
            hasData: function(e) {
                return J.hasData(e) || Y.hasData(e)
            },
            data: function(e, t, n) {
                return J.access(e, t, n)
            },
            removeData: function(e, t) {
                J.remove(e, t)
            },
            _data: function(e, t, n) {
                return Y.access(e, t, n)
            },
            _removeData: function(e, t) {
                Y.remove(e, t)
            }
        }), E.fn.extend({
            data: function(n, e) {
                var t, r, o, i = this[0],
                    s = i && i.attributes;
                if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                    J.set(this, n)
                }) : W(this, function(e) {
                    var t;
                    if (i && void 0 === e) return void 0 !== (t = J.get(i, n)) ? t : void 0 !== (t = Z(i, n)) ? t : void 0;
                    this.each(function() {
                        J.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0);
                if (this.length && (o = J.get(i), 1 === i.nodeType && !Y.get(i, "hasDataAttrs"))) {
                    for (t = s.length; t--;) s[t] && 0 === (r = s[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(i, r, o[r]));
                    Y.set(i, "hasDataAttrs", !0)
                }
                return o
            },
            removeData: function(e) {
                return this.each(function() {
                    J.remove(this, e)
                })
            }
        }), E.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, E.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = E.queue(e, t),
                    r = n.length,
                    o = n.shift(),
                    i = E._queueHooks(e, t);
                "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, function() {
                    E.dequeue(e, t)
                }, i)), !r && i && i.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return Y.get(e, n) || Y.access(e, n, {
                    empty: E.Callbacks("once memory").add(function() {
                        Y.remove(e, [t + "queue", n])
                    })
                })
            }
        }), E.fn.extend({
            queue: function(t, n) {
                var e = 2;
                return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                    var e = E.queue(this, t, n);
                    E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    E.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    o = E.Deferred(),
                    i = this,
                    s = this.length,
                    a = function() {
                        --r || o.resolveWith(i, [i])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = Y.get(i[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
                return a(), o.promise(t)
            }
        });
        var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
            ne = ["Top", "Right", "Bottom", "Left"],
            re = k.documentElement,
            oe = function(e) {
                return E.contains(e.ownerDocument, e)
            },
            ie = {
                composed: !0
            };
        re.attachShadow && (oe = function(e) {
            return E.contains(e.ownerDocument, e) || e.getRootNode(ie) === e.ownerDocument
        });
        var se = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === E.css(e, "display")
            },
            ae = function(e, t, n, r) {
                var o, i, s = {};
                for (i in t) s[i] = e.style[i], e.style[i] = t[i];
                for (i in o = n.apply(e, r || []), t) e.style[i] = s[i];
                return o
            };

        function ue(e, t, n, r) {
            var o, i, s = 20,
                a = r ? function() {
                    return r.cur()
                } : function() {
                    return E.css(e, t, "")
                },
                u = a(),
                c = n && n[3] || (E.cssNumber[t] ? "" : "px"),
                l = e.nodeType && (E.cssNumber[t] || "px" !== c && +u) && te.exec(E.css(e, t));
            if (l && l[3] !== c) {
                for (u /= 2, c = c || l[3], l = +u || 1; s--;) E.style(e, t, l + c), (1 - i) * (1 - (i = a() / u || .5)) <= 0 && (s = 0), l /= i;
                l *= 2, E.style(e, t, l + c), n = n || []
            }
            return n && (l = +l || +u || 0, o = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = l, r.end = o)), o
        }
        var ce = {};

        function le(e, t) {
            for (var n, r, o, i, s, a, u, c = [], l = 0, f = e.length; l < f; l++)(r = e[l]).style && (n = r.style.display, t ? ("none" === n && (c[l] = Y.get(r, "display") || null, c[l] || (r.style.display = "")), "" === r.style.display && se(r) && (c[l] = (u = s = i = void 0, s = (o = r).ownerDocument, a = o.nodeName, (u = ce[a]) || (i = s.body.appendChild(s.createElement(a)), u = E.css(i, "display"), i.parentNode.removeChild(i), "none" === u && (u = "block"), ce[a] = u)))) : "none" !== n && (c[l] = "none", Y.set(r, "display", n)));
            for (l = 0; l < f; l++) null != c[l] && (e[l].style.display = c[l]);
            return e
        }
        E.fn.extend({
            show: function() {
                return le(this, !0)
            },
            hide: function() {
                return le(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    se(this) ? E(this).show() : E(this).hide()
                })
            }
        });
        var fe = /^(?:checkbox|radio)$/i,
            pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            de = /^$|^module$|\/(?:java|ecma)script/i,
            he = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function ge(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && j(e, t) ? E.merge([e], n) : n
        }

        function ye(e, t) {
            for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
        }
        he.optgroup = he.option, he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td;
        var ve, me, be = /<|&#?\w+;/;

        function xe(e, t, n, r, o) {
            for (var i, s, a, u, c, l, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
                if ((i = e[d]) || 0 === i)
                    if ("object" === w(i)) E.merge(p, i.nodeType ? [i] : i);
                    else if (be.test(i)) {
                for (s = s || f.appendChild(t.createElement("div")), a = (pe.exec(i) || ["", ""])[1].toLowerCase(), u = he[a] || he._default, s.innerHTML = u[1] + E.htmlPrefilter(i) + u[2], l = u[0]; l--;) s = s.lastChild;
                E.merge(p, s.childNodes), (s = f.firstChild).textContent = ""
            } else p.push(t.createTextNode(i));
            for (f.textContent = "", d = 0; i = p[d++];)
                if (r && -1 < E.inArray(i, r)) o && o.push(i);
                else if (c = oe(i), s = ge(f.appendChild(i), "script"), c && ye(s), n)
                for (l = 0; i = s[l++];) de.test(i.type || "") && n.push(i);
            return f
        }
        ve = k.createDocumentFragment().appendChild(k.createElement("div")), (me = k.createElement("input")).setAttribute("type", "radio"), me.setAttribute("checked", "checked"), me.setAttribute("name", "t"), ve.appendChild(me), v.checkClone = ve.cloneNode(!0).cloneNode(!0).lastChild.checked, ve.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ve.cloneNode(!0).lastChild.defaultValue;
        var we = /^key/,
            Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ce = /^([^.]*)(?:\.(.+)|)/;

        function ke() {
            return !0
        }

        function Ee() {
            return !1
        }

        function Se(e, t) {
            return e === function() {
                try {
                    return k.activeElement
                } catch (e) {}
            }() == ("focus" === t)
        }

        function je(e, t, n, r, o, i) {
            var s, a;
            if ("object" == typeof t) {
                for (a in "string" != typeof n && (r = r || n, n = void 0), t) je(e, a, n, r, t[a], i);
                return e
            }
            if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = Ee;
            else if (!o) return e;
            return 1 === i && (s = o, (o = function(e) {
                return E().off(e), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = E.guid++)), e.each(function() {
                E.event.add(this, t, o, r, n)
            })
        }

        function Ne(e, o, i) {
            i ? (Y.set(e, o, !1), E.event.add(e, o, {
                namespace: !1,
                handler: function(e) {
                    var t, n, r = Y.get(this, o);
                    if (1 & e.isTrigger && this[o]) {
                        if (r)(E.event.special[o] || {}).delegateType && e.stopPropagation();
                        else if (r = a.call(arguments), Y.set(this, o, r), t = i(this, o), this[o](), r !== (n = Y.get(this, o)) || t ? Y.set(this, o, !1) : n = void 0, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n
                    } else r && (Y.set(this, o, E.event.trigger(E.extend(r.shift(), E.Event.prototype), r, this)), e.stopImmediatePropagation())
                }
            })) : E.event.add(e, o, ke)
        }
        E.event = {
            global: {},
            add: function(t, e, n, r, o) {
                var i, s, a, u, c, l, f, p, d, h, g, y = Y.get(t);
                if (y)
                    for (n.handler && (n = (i = n).handler, o = i.selector), o && E.find.matchesSelector(re, o), n.guid || (n.guid = E.guid++), (u = y.events) || (u = y.events = {}), (s = y.handle) || (s = y.handle = function(e) {
                            return void 0 !== E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
                        }), c = (e = (e || "").match(H) || [""]).length; c--;) d = g = (a = Ce.exec(e[c]) || [])[1], h = (a[2] || "").split(".").sort(), d && (f = E.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, f = E.event.special[d] || {}, l = E.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && E.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, i), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, s) || t.addEventListener && t.addEventListener(d, s)), f.add && (f.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, l) : p.push(l), E.event.global[d] = !0)
            },
            remove: function(e, t, n, r, o) {
                var i, s, a, u, c, l, f, p, d, h, g, y = Y.hasData(e) && Y.get(e);
                if (y && (u = y.events)) {
                    for (c = (t = (t || "").match(H) || [""]).length; c--;)
                        if (d = g = (a = Ce.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), d) {
                            for (f = E.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = i = p.length; i--;) l = p[i], !o && g !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (p.splice(i, 1), l.selector && p.delegateCount--, f.remove && f.remove.call(e, l));
                            s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || E.removeEvent(e, d, y.handle), delete u[d])
                        } else
                            for (d in u) E.event.remove(e, d + t[c], n, r, !0);
                    E.isEmptyObject(u) && Y.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, o, i, s, a = E.event.fix(e),
                    u = new Array(arguments.length),
                    c = (Y.get(this, "events") || {})[a.type] || [],
                    l = E.event.special[a.type] || {};
                for (u[0] = a, t = 1; t < arguments.length; t++) u[t] = arguments[t];
                if (a.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, a)) {
                    for (s = E.event.handlers.call(this, a, c), t = 0;
                        (o = s[t++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = o.elem, n = 0;
                            (i = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== i.namespace && !a.rnamespace.test(i.namespace) || (a.handleObj = i, a.data = i.data, void 0 !== (r = ((E.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u)) && !1 === (a.result = r) && (a.preventDefault(), a.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(e, t) {
                var n, r, o, i, s, a = [],
                    u = t.delegateCount,
                    c = e.target;
                if (u && c.nodeType && !("click" === e.type && 1 <= e.button))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                            for (i = [], s = {}, n = 0; n < u; n++) void 0 === s[o = (r = t[n]).selector + " "] && (s[o] = r.needsContext ? -1 < E(o, this).index(c) : E.find(o, this, null, [c]).length), s[o] && i.push(r);
                            i.length && a.push({
                                elem: c,
                                handlers: i
                            })
                        } return c = this, u < t.length && a.push({
                    elem: c,
                    handlers: t.slice(u)
                }), a
            },
            addProp: function(t, e) {
                Object.defineProperty(E.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: m(e) ? function() {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[t]
                    },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(e) {
                return e[E.expando] ? e : new E.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(e) {
                        var t = this || e;
                        return fe.test(t.type) && t.click && j(t, "input") && void 0 === Y.get(t, "click") && Ne(t, "click", ke), !1
                    },
                    trigger: function(e) {
                        var t = this || e;
                        return fe.test(t.type) && t.click && j(t, "input") && void 0 === Y.get(t, "click") && Ne(t, "click"), !0
                    },
                    _default: function(e) {
                        var t = e.target;
                        return fe.test(t.type) && t.click && j(t, "input") && Y.get(t, "click") || j(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, E.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, E.Event = function(e, t) {
            if (!(this instanceof E.Event)) return new E.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0
        }, E.Event.prototype = {
            constructor: E.Event,
            isDefaultPrevented: Ee,
            isPropagationStopped: Ee,
            isImmediatePropagationStopped: Ee,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, E.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, E.event.addProp), E.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            E.event.special[e] = {
                setup: function() {
                    return Ne(this, e, Se), !1
                },
                trigger: function() {
                    return Ne(this, e), !0
                },
                delegateType: t
            }
        }), E.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, o) {
            E.event.special[e] = {
                delegateType: o,
                bindType: o,
                handle: function(e) {
                    var t, n = e.relatedTarget,
                        r = e.handleObj;
                    return n && (n === this || E.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = o), t
                }
            }
        }), E.fn.extend({
            on: function(e, t, n, r) {
                return je(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return je(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function() {
                    E.event.remove(this, e, n, t)
                });
                for (o in e) this.off(o, t, e[o]);
                return this
            }
        });
        var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            De = /<script|<style|<link/i,
            Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Pe(e, t) {
            return j(e, "table") && j(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
        }

        function qe(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function He(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function Me(e, t) {
            var n, r, o, i, s, a, u, c;
            if (1 === t.nodeType) {
                if (Y.hasData(e) && (i = Y.access(e), s = Y.set(t, i), c = i.events))
                    for (o in delete s.handle, s.events = {}, c)
                        for (n = 0, r = c[o].length; n < r; n++) E.event.add(t, o, c[o][n]);
                J.hasData(e) && (a = J.access(e), u = E.extend({}, a), J.set(t, u))
            }
        }

        function Ie(n, r, o, i) {
            r = g.apply([], r);
            var e, t, s, a, u, c, l = 0,
                f = n.length,
                p = f - 1,
                d = r[0],
                h = m(d);
            if (h || 1 < f && "string" == typeof d && !v.checkClone && Le.test(d)) return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())), Ie(t, r, o, i)
            });
            if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, i)).firstChild, 1 === e.childNodes.length && (e = t), t || i)) {
                for (a = (s = E.map(ge(e, "script"), qe)).length; l < f; l++) u = e, l !== p && (u = E.clone(u, !0, !0), a && E.merge(s, ge(u, "script"))), o.call(n[l], u, l);
                if (a)
                    for (c = s[s.length - 1].ownerDocument, E.map(s, He), l = 0; l < a; l++) u = s[l], de.test(u.type || "") && !Y.access(u, "globalEval") && E.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && !u.noModule && E._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }) : x(u.textContent.replace(Oe, ""), u, c))
            }
            return n
        }

        function Re(e, t, n) {
            for (var r, o = t ? E.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || E.cleanData(ge(r)), r.parentNode && (n && oe(r) && ye(ge(r, "script")), r.parentNode.removeChild(r));
            return e
        }
        E.extend({
            htmlPrefilter: function(e) {
                return e.replace(Ae, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var r, o, i, s, a, u, c, l = e.cloneNode(!0),
                    f = oe(e);
                if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                    for (s = ge(l), r = 0, o = (i = ge(e)).length; r < o; r++) a = i[r], u = s[r], void 0, "input" === (c = u.nodeName.toLowerCase()) && fe.test(a.type) ? u.checked = a.checked : "input" !== c && "textarea" !== c || (u.defaultValue = a.defaultValue);
                if (t)
                    if (n)
                        for (i = i || ge(e), s = s || ge(l), r = 0, o = i.length; r < o; r++) Me(i[r], s[r]);
                    else Me(e, l);
                return 0 < (s = ge(l, "script")).length && ye(s, !f && ge(e, "script")), l
            },
            cleanData: function(e) {
                for (var t, n, r, o = E.event.special, i = 0; void 0 !== (n = e[i]); i++)
                    if (G(n)) {
                        if (t = n[Y.expando]) {
                            if (t.events)
                                for (r in t.events) o[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                            n[Y.expando] = void 0
                        }
                        n[J.expando] && (n[J.expando] = void 0)
                    }
            }
        }), E.fn.extend({
            detach: function(e) {
                return Re(this, e, !0)
            },
            remove: function(e) {
                return Re(this, e)
            },
            text: function(e) {
                return W(this, function(e) {
                    return void 0 === e ? E.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return Ie(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pe(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return Ie(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Pe(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return Ie(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return Ie(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(ge(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return E.clone(this, e, t)
                })
            },
            html: function(e) {
                return W(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !De.test(e) && !he[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = E.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(ge(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var n = [];
                return Ie(this, arguments, function(e) {
                    var t = this.parentNode;
                    E.inArray(this, n) < 0 && (E.cleanData(ge(this)), t && t.replaceChild(e, this))
                }, n)
            }
        }), E.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, s) {
            E.fn[e] = function(e) {
                for (var t, n = [], r = E(e), o = r.length - 1, i = 0; i <= o; i++) t = i === o ? this : this.clone(!0), E(r[i])[s](t), u.apply(n, t.get());
                return this.pushStack(n)
            }
        });
        var _e = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
            Be = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = C), t.getComputedStyle(e)
            },
            Fe = new RegExp(ne.join("|"), "i");

        function We(e, t, n) {
            var r, o, i, s, a = e.style;
            return (n = n || Be(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || oe(e) || (s = E.style(e, t)), !v.pixelBoxStyles() && _e.test(s) && Fe.test(t) && (r = a.width, o = a.minWidth, i = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = o, a.maxWidth = i)), void 0 !== s ? s + "" : s
        }

        function $e(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }! function() {
            function e() {
                if (u) {
                    a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(a).appendChild(u);
                    var e = C.getComputedStyle(u);
                    n = "1%" !== e.top, s = 12 === t(e.marginLeft), u.style.right = "60%", i = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", o = 12 === t(u.offsetWidth / 3), re.removeChild(a), u = null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }
            var n, r, o, i, s, a = k.createElement("div"),
                u = k.createElement("div");
            u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === u.style.backgroundClip, E.extend(v, {
                boxSizingReliable: function() {
                    return e(), r
                },
                pixelBoxStyles: function() {
                    return e(), i
                },
                pixelPosition: function() {
                    return e(), n
                },
                reliableMarginLeft: function() {
                    return e(), s
                },
                scrollboxSize: function() {
                    return e(), o
                }
            }))
        }();
        var ze = ["Webkit", "Moz", "ms"],
            Ue = k.createElement("div").style,
            Xe = {};

        function Ge(e) {
            var t = E.cssProps[e] || Xe[e];
            return t || (e in Ue ? e : Xe[e] = function(e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = ze.length; n--;)
                    if ((e = ze[n] + t) in Ue) return e
            }(e) || e)
        }
        var Ve = /^(none|table(?!-c[ea]).+)/,
            Ye = /^--/,
            Je = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Qe = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function Ke(e, t, n) {
            var r = te.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function Ze(e, t, n, r, o, i) {
            var s = "width" === t ? 1 : 0,
                a = 0,
                u = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; s < 4; s += 2) "margin" === n && (u += E.css(e, n + ne[s], !0, o)), r ? ("content" === n && (u -= E.css(e, "padding" + ne[s], !0, o)), "margin" !== n && (u -= E.css(e, "border" + ne[s] + "Width", !0, o))) : (u += E.css(e, "padding" + ne[s], !0, o), "padding" !== n ? u += E.css(e, "border" + ne[s] + "Width", !0, o) : a += E.css(e, "border" + ne[s] + "Width", !0, o));
            return !r && 0 <= i && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - a - .5)) || 0), u
        }

        function et(e, t, n) {
            var r = Be(e),
                o = (!v.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r),
                i = o,
                s = We(e, t, r),
                a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (_e.test(s)) {
                if (!n) return s;
                s = "auto"
            }
            return (!v.boxSizingReliable() && o || "auto" === s || !parseFloat(s) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === E.css(e, "boxSizing", !1, r), (i = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + Ze(e, t, n || (o ? "border" : "content"), i, r, s) + "px"
        }

        function tt(e, t, n, r, o) {
            return new tt.prototype.init(e, t, n, r, o)
        }
        E.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = We(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, i, s, a = X(t),
                        u = Ye.test(t),
                        c = e.style;
                    if (u || (t = Ge(a)), s = E.cssHooks[t] || E.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, r)) ? o : c[t];
                    "string" === (i = typeof n) && (o = te.exec(n)) && o[1] && (n = ue(e, t, o), i = "number"), null != n && n == n && ("number" !== i || u || (n += o && o[3] || (E.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u ? c.setProperty(t, n) : c[t] = n))
                }
            },
            css: function(e, t, n, r) {
                var o, i, s, a = X(t);
                return Ye.test(t) || (t = Ge(a)), (s = E.cssHooks[t] || E.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = We(e, t, r)), "normal" === o && t in Qe && (o = Qe[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
            }
        }), E.each(["height", "width"], function(e, u) {
            E.cssHooks[u] = {
                get: function(e, t, n) {
                    if (t) return !Ve.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, u, n) : ae(e, Je, function() {
                        return et(e, u, n)
                    })
                },
                set: function(e, t, n) {
                    var r, o = Be(e),
                        i = !v.scrollboxSize() && "absolute" === o.position,
                        s = (i || n) && "border-box" === E.css(e, "boxSizing", !1, o),
                        a = n ? Ze(e, u, n, s, o) : 0;
                    return s && i && (a -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(o[u]) - Ze(e, u, "border", !1, o) - .5)), a && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = E.css(e, u)), Ke(0, t, a)
                }
            }
        }), E.cssHooks.marginLeft = $e(v.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - ae(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), E.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(o, i) {
            E.cssHooks[o + i] = {
                expand: function(e) {
                    for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + ne[t] + i] = r[t] || r[t - 2] || r[0];
                    return n
                }
            }, "margin" !== o && (E.cssHooks[o + i].set = Ke)
        }), E.fn.extend({
            css: function(e, t) {
                return W(this, function(e, t, n) {
                    var r, o, i = {},
                        s = 0;
                    if (Array.isArray(t)) {
                        for (r = Be(e), o = t.length; s < o; s++) i[t[s]] = E.css(e, t[s], !1, r);
                        return i
                    }
                    return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
                }, e, t, 1 < arguments.length)
            }
        }), ((E.Tween = tt).prototype = {
            constructor: tt,
            init: function(e, t, n, r, o, i) {
                this.elem = e, this.prop = n, this.easing = o || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (E.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = tt.propHooks[this.prop];
                return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = tt.propHooks[this.prop];
                return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
            }
        }).init.prototype = tt.prototype, (tt.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }).scrollTop = tt.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, E.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, E.fx = tt.prototype.init, E.fx.step = {};
        var nt, rt, ot, it, st = /^(?:toggle|show|hide)$/,
            at = /queueHooks$/;

        function ut() {
            rt && (!1 === k.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ut) : C.setTimeout(ut, E.fx.interval), E.fx.tick())
        }

        function ct() {
            return C.setTimeout(function() {
                nt = void 0
            }), nt = Date.now()
        }

        function lt(e, t) {
            var n, r = 0,
                o = {
                    height: e
                };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = ne[r])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o
        }

        function ft(e, t, n) {
            for (var r, o = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), i = 0, s = o.length; i < s; i++)
                if (r = o[i].call(n, t, e)) return r
        }

        function pt(i, e, t) {
            var n, s, r = 0,
                o = pt.prefilters.length,
                a = E.Deferred().always(function() {
                    delete u.elem
                }),
                u = function() {
                    if (s) return !1;
                    for (var e = nt || ct(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), r = 0, o = c.tweens.length; r < o; r++) c.tweens[r].run(n);
                    return a.notifyWith(i, [c, n, t]), n < 1 && o ? t : (o || a.notifyWith(i, [c, 1, 0]), a.resolveWith(i, [c]), !1)
                },
                c = a.promise({
                    elem: i,
                    props: E.extend({}, e),
                    opts: E.extend(!0, {
                        specialEasing: {},
                        easing: E.easing._default
                    }, t),
                    originalProperties: e,
                    originalOptions: t,
                    startTime: nt || ct(),
                    duration: t.duration,
                    tweens: [],
                    createTween: function(e, t) {
                        var n = E.Tween(i, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(n), n
                    },
                    stop: function(e) {
                        var t = 0,
                            n = e ? c.tweens.length : 0;
                        if (s) return this;
                        for (s = !0; t < n; t++) c.tweens[t].run(1);
                        return e ? (a.notifyWith(i, [c, 1, 0]), a.resolveWith(i, [c, e])) : a.rejectWith(i, [c, e]), this
                    }
                }),
                l = c.props;
            for (! function(e, t) {
                    var n, r, o, i, s;
                    for (n in e)
                        if (o = t[r = X(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (s = E.cssHooks[r]) && "expand" in s)
                            for (n in i = s.expand(i), delete e[r], i) n in e || (e[n] = i[n], t[n] = o);
                        else t[r] = o
                }(l, c.opts.specialEasing); r < o; r++)
                if (n = pt.prefilters[r].call(c, i, l, c.opts)) return m(n.stop) && (E._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
            return E.map(l, ft, c), m(c.opts.start) && c.opts.start.call(i, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), E.fx.timer(E.extend(u, {
                elem: i,
                anim: c,
                queue: c.opts.queue
            })), c
        }
        E.Animation = E.extend(pt, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return ue(n.elem, e, te.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                for (var n, r = 0, o = (e = m(e) ? (t = e, ["*"]) : e.match(H)).length; r < o; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var r, o, i, s, a, u, c, l, f = "width" in t || "height" in t,
                    p = this,
                    d = {},
                    h = e.style,
                    g = e.nodeType && se(e),
                    y = Y.get(e, "fxshow");
                for (r in n.queue || (null == (s = E._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                        s.unqueued || a()
                    }), s.unqueued++, p.always(function() {
                        p.always(function() {
                            s.unqueued--, E.queue(e, "fx").length || s.empty.fire()
                        })
                    })), t)
                    if (o = t[r], st.test(o)) {
                        if (delete t[r], i = i || "toggle" === o, o === (g ? "hide" : "show")) {
                            if ("show" !== o || !y || void 0 === y[r]) continue;
                            g = !0
                        }
                        d[r] = y && y[r] || E.style(e, r)
                    } if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(d))
                    for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = y && y.display) && (c = Y.get(e, "display")), "none" === (l = E.css(e, "display")) && (c ? l = c : (le([e], !0), c = e.style.display || c, l = E.css(e, "display"), le([e]))), ("inline" === l || "inline-block" === l && null != c) && "none" === E.css(e, "float") && (u || (p.done(function() {
                            h.display = c
                        }), null == c && (l = h.display, c = "none" === l ? "" : l)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                        })), u = !1, d) u || (y ? "hidden" in y && (g = y.hidden) : y = Y.access(e, "fxshow", {
                        display: c
                    }), i && (y.hidden = !g), g && le([e], !0), p.done(function() {
                        for (r in g || le([e]), Y.remove(e, "fxshow"), d) E.style(e, r, d[r])
                    })), u = ft(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
            }],
            prefilter: function(e, t) {
                t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
            }
        }), E.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? E.extend({}, e) : {
                complete: n || !n && t || m(e) && e,
                duration: e,
                easing: n && t || t && !m(t) && t
            };
            return E.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in E.fx.speeds ? r.duration = E.fx.speeds[r.duration] : r.duration = E.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                m(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue)
            }, r
        }, E.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(se).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(t, e, n, r) {
                var o = E.isEmptyObject(t),
                    i = E.speed(e, n, r),
                    s = function() {
                        var e = pt(this, E.extend({}, t), i);
                        (o || Y.get(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, o || !1 === i.queue ? this.each(s) : this.queue(i.queue, s)
            },
            stop: function(o, e, i) {
                var s = function(e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof o && (i = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function() {
                    var e = !0,
                        t = null != o && o + "queueHooks",
                        n = E.timers,
                        r = Y.get(this);
                    if (t) r[t] && r[t].stop && s(r[t]);
                    else
                        for (t in r) r[t] && r[t].stop && at.test(t) && s(r[t]);
                    for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(i), e = !1, n.splice(t, 1));
                    !e && i || E.dequeue(this, o)
                })
            },
            finish: function(s) {
                return !1 !== s && (s = s || "fx"), this.each(function() {
                    var e, t = Y.get(this),
                        n = t[s + "queue"],
                        r = t[s + "queueHooks"],
                        o = E.timers,
                        i = n ? n.length : 0;
                    for (t.finish = !0, E.queue(this, s, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === s && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < i; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete t.finish
                })
            }
        }), E.each(["toggle", "show", "hide"], function(e, r) {
            var o = E.fn[r];
            E.fn[r] = function(e, t, n) {
                return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
            }
        }), E.each({
            slideDown: lt("show"),
            slideUp: lt("hide"),
            slideToggle: lt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, r) {
            E.fn[e] = function(e, t, n) {
                return this.animate(r, e, t, n)
            }
        }), E.timers = [], E.fx.tick = function() {
            var e, t = 0,
                n = E.timers;
            for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || E.fx.stop(), nt = void 0
        }, E.fx.timer = function(e) {
            E.timers.push(e), E.fx.start()
        }, E.fx.interval = 13, E.fx.start = function() {
            rt || (rt = !0, ut())
        }, E.fx.stop = function() {
            rt = null
        }, E.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, E.fn.delay = function(r, e) {
            return r = E.fx && E.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
                var n = C.setTimeout(e, r);
                t.stop = function() {
                    C.clearTimeout(n)
                }
            })
        }, ot = k.createElement("input"), it = k.createElement("select").appendChild(k.createElement("option")), ot.type = "checkbox", v.checkOn = "" !== ot.value, v.optSelected = it.selected, (ot = k.createElement("input")).value = "t", ot.type = "radio", v.radioValue = "t" === ot.value;
        var dt, ht = E.expr.attrHandle;
        E.fn.extend({
            attr: function(e, t) {
                return W(this, E.attr, e, t, 1 < arguments.length)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    E.removeAttr(this, e)
                })
            }
        }), E.extend({
            attr: function(e, t, n) {
                var r, o, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === i && E.isXMLDoc(e) || (o = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!v.radioValue && "radio" === t && j(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0,
                    o = t && t.match(H);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];) e.removeAttribute(n)
            }
        }), dt = {
            set: function(e, t, n) {
                return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var s = ht[t] || E.find.attr;
            ht[t] = function(e, t, n) {
                var r, o, i = t.toLowerCase();
                return n || (o = ht[i], ht[i] = r, r = null != s(e, t, n) ? i : null, ht[i] = o), r
            }
        });
        var gt = /^(?:input|select|textarea|button)$/i,
            yt = /^(?:a|area)$/i;

        function vt(e) {
            return (e.match(H) || []).join(" ")
        }

        function mt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function bt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
        }
        E.fn.extend({
            prop: function(e, t) {
                return W(this, E.prop, e, t, 1 < arguments.length)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[E.propFix[e] || e]
                })
            }
        }), E.extend({
            prop: function(e, t, n) {
                var r, o, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i) return 1 === i && E.isXMLDoc(e) || (t = E.propFix[t] || t, o = E.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = E.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), v.optSelected || (E.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            E.propFix[this.toLowerCase()] = this
        }), E.fn.extend({
            addClass: function(t) {
                var e, n, r, o, i, s, a, u = 0;
                if (m(t)) return this.each(function(e) {
                    E(this).addClass(t.call(this, e, mt(this)))
                });
                if ((e = bt(t)).length)
                    for (; n = this[u++];)
                        if (o = mt(n), r = 1 === n.nodeType && " " + vt(o) + " ") {
                            for (s = 0; i = e[s++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            o !== (a = vt(r)) && n.setAttribute("class", a)
                        } return this
            },
            removeClass: function(t) {
                var e, n, r, o, i, s, a, u = 0;
                if (m(t)) return this.each(function(e) {
                    E(this).removeClass(t.call(this, e, mt(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((e = bt(t)).length)
                    for (; n = this[u++];)
                        if (o = mt(n), r = 1 === n.nodeType && " " + vt(o) + " ") {
                            for (s = 0; i = e[s++];)
                                for (; - 1 < r.indexOf(" " + i + " ");) r = r.replace(" " + i + " ", " ");
                            o !== (a = vt(r)) && n.setAttribute("class", a)
                        } return this
            },
            toggleClass: function(o, t) {
                var i = typeof o,
                    s = "string" === i || Array.isArray(o);
                return "boolean" == typeof t && s ? t ? this.addClass(o) : this.removeClass(o) : m(o) ? this.each(function(e) {
                    E(this).toggleClass(o.call(this, e, mt(this), t), t)
                }) : this.each(function() {
                    var e, t, n, r;
                    if (s)
                        for (t = 0, n = E(this), r = bt(o); e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                    else void 0 !== o && "boolean" !== i || ((e = mt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === o ? "" : Y.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];)
                    if (1 === n.nodeType && -1 < (" " + vt(mt(n)) + " ").indexOf(t)) return !0;
                return !1
            }
        });
        var xt = /\r/g;
        E.fn.extend({
            val: function(n) {
                var r, e, o, t = this[0];
                return arguments.length ? (o = m(n), this.each(function(e) {
                    var t;
                    1 === this.nodeType && (null == (t = o ? n.call(this, e, E(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = E.map(t, function(e) {
                        return null == e ? "" : e + ""
                    })), (r = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
                })) : t ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
            }
        }), E.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = E.find.attr(e, "value");
                        return null != t ? t : vt(E.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, o = e.options,
                            i = e.selectedIndex,
                            s = "select-one" === e.type,
                            a = s ? null : [],
                            u = s ? i + 1 : o.length;
                        for (r = i < 0 ? u : s ? i : 0; r < u; r++)
                            if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))) {
                                if (t = E(n).val(), s) return t;
                                a.push(t)
                            } return a
                    },
                    set: function(e, t) {
                        for (var n, r, o = e.options, i = E.makeArray(t), s = o.length; s--;)((r = o[s]).selected = -1 < E.inArray(E.valHooks.option.get(r), i)) && (n = !0);
                        return n || (e.selectedIndex = -1), i
                    }
                }
            }
        }), E.each(["radio", "checkbox"], function() {
            E.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = -1 < E.inArray(E(e).val(), t)
                }
            }, v.checkOn || (E.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), v.focusin = "onfocusin" in C;
        var wt = /^(?:focusinfocus|focusoutblur)$/,
            Tt = function(e) {
                e.stopPropagation()
            };
        E.extend(E.event, {
            trigger: function(e, t, n, r) {
                var o, i, s, a, u, c, l, f, p = [n || k],
                    d = y.call(e, "type") ? e.type : e,
                    h = y.call(e, "namespace") ? e.namespace.split(".") : [];
                if (i = f = s = n = n || k, 3 !== n.nodeType && 8 !== n.nodeType && !wt.test(d + E.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[E.expando] ? e : new E.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), l = E.event.special[d] || {}, r || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                    if (!r && !l.noBubble && !b(n)) {
                        for (a = l.delegateType || d, wt.test(a + d) || (i = i.parentNode); i; i = i.parentNode) p.push(i), s = i;
                        s === (n.ownerDocument || k) && p.push(s.defaultView || s.parentWindow || C)
                    }
                    for (o = 0;
                        (i = p[o++]) && !e.isPropagationStopped();) f = i, e.type = 1 < o ? a : l.bindType || d, (c = (Y.get(i, "events") || {})[e.type] && Y.get(i, "handle")) && c.apply(i, t), (c = u && i[u]) && c.apply && G(i) && (e.result = c.apply(i, t), !1 === e.result && e.preventDefault());
                    return e.type = d, r || e.isDefaultPrevented() || l._default && !1 !== l._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !b(n) && ((s = n[u]) && (n[u] = null), E.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Tt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Tt), E.event.triggered = void 0, s && (n[u] = s)), e.result
                }
            },
            simulate: function(e, t, n) {
                var r = E.extend(new E.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                E.event.trigger(r, null, t)
            }
        }), E.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    E.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return E.event.trigger(e, t, n, !0)
            }
        }), v.focusin || E.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, r) {
            var o = function(e) {
                E.event.simulate(r, e.target, E.event.fix(e))
            };
            E.event.special[r] = {
                setup: function() {
                    var e = this.ownerDocument || this,
                        t = Y.access(e, r);
                    t || e.addEventListener(n, o, !0), Y.access(e, r, (t || 0) + 1)
                },
                teardown: function() {
                    var e = this.ownerDocument || this,
                        t = Y.access(e, r) - 1;
                    t ? Y.access(e, r, t) : (e.removeEventListener(n, o, !0), Y.remove(e, r))
                }
            }
        });
        var Ct = C.location,
            kt = Date.now(),
            Et = /\?/;
        E.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new C.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + e), t
        };
        var St = /\[\]$/,
            jt = /\r?\n/g,
            Nt = /^(?:submit|button|image|reset|file)$/i,
            At = /^(?:input|select|textarea|keygen)/i;

        function Dt(n, e, r, o) {
            var t;
            if (Array.isArray(e)) E.each(e, function(e, t) {
                r || St.test(n) ? o(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, o)
            });
            else if (r || "object" !== w(e)) o(n, e);
            else
                for (t in e) Dt(n + "[" + t + "]", e[t], r, o)
        }
        E.param = function(e, t) {
            var n, r = [],
                o = function(e, t) {
                    var n = m(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function() {
                o(this.name, this.value)
            });
            else
                for (n in e) Dt(n, e[n], t, o);
            return r.join("&")
        }, E.fn.extend({
            serialize: function() {
                return E.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = E.prop(this, "elements");
                    return e ? E.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !E(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !fe.test(e))
                }).map(function(e, t) {
                    var n = E(this).val();
                    return null == n ? null : Array.isArray(n) ? E.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(jt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(jt, "\r\n")
                    }
                }).get()
            }
        });
        var Lt = /%20/g,
            Ot = /#.*$/,
            Pt = /([?&])_=[^&]*/,
            qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ht = /^(?:GET|HEAD)$/,
            Mt = /^\/\//,
            It = {},
            Rt = {},
            _t = "*/".concat("*"),
            Bt = k.createElement("a");

        function Ft(i) {
            return function(e, t) {
                "string" != typeof e && (t = e, e = "*");
                var n, r = 0,
                    o = e.toLowerCase().match(H) || [];
                if (m(t))
                    for (; n = o[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (i[n] = i[n] || []).unshift(t)) : (i[n] = i[n] || []).push(t)
            }
        }

        function Wt(t, o, i, s) {
            var a = {},
                u = t === Rt;

            function c(e) {
                var r;
                return a[e] = !0, E.each(t[e] || [], function(e, t) {
                    var n = t(o, i, s);
                    return "string" != typeof n || u || a[n] ? u ? !(r = n) : void 0 : (o.dataTypes.unshift(n), c(n), !1)
                }), r
            }
            return c(o.dataTypes[0]) || !a["*"] && c("*")
        }

        function $t(e, t) {
            var n, r, o = E.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
            return r && E.extend(!0, e, r), e
        }
        Bt.href = Ct.href, E.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ct.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": _t,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": E.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? $t($t(e, E.ajaxSettings), t) : $t(E.ajaxSettings, e)
            },
            ajaxPrefilter: Ft(It),
            ajaxTransport: Ft(Rt),
            ajax: function(e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var l, f, p, n, d, r, h, g, o, i, y = E.ajaxSetup({}, t),
                    v = y.context || y,
                    m = y.context && (v.nodeType || v.jquery) ? E(v) : E.event,
                    b = E.Deferred(),
                    x = E.Callbacks("once memory"),
                    w = y.statusCode || {},
                    s = {},
                    a = {},
                    u = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (h) {
                                if (!n)
                                    for (n = {}; t = qt.exec(p);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = n[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return h ? p : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == h && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, s[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == h && (y.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (h) T.always(e[T.status]);
                                else
                                    for (t in e) w[t] = [w[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || u;
                            return l && l.abort(t), c(0, t), this
                        }
                    };
                if (b.promise(T), y.url = ((e || y.url || Ct.href) + "").replace(Mt, Ct.protocol + "//"), y.type = t.method || t.type || y.method || y.type, y.dataTypes = (y.dataType || "*").toLowerCase().match(H) || [""], null == y.crossDomain) {
                    r = k.createElement("a");
                    try {
                        r.href = y.url, r.href = r.href, y.crossDomain = Bt.protocol + "//" + Bt.host != r.protocol + "//" + r.host
                    } catch (e) {
                        y.crossDomain = !0
                    }
                }
                if (y.data && y.processData && "string" != typeof y.data && (y.data = E.param(y.data, y.traditional)), Wt(It, y, t, T), h) return T;
                for (o in (g = E.event && y.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), y.type = y.type.toUpperCase(), y.hasContent = !Ht.test(y.type), f = y.url.replace(Ot, ""), y.hasContent ? y.data && y.processData && 0 === (y.contentType || "").indexOf("application/x-www-form-urlencoded") && (y.data = y.data.replace(Lt, "+")) : (i = y.url.slice(f.length), y.data && (y.processData || "string" == typeof y.data) && (f += (Et.test(f) ? "&" : "?") + y.data, delete y.data), !1 === y.cache && (f = f.replace(Pt, "$1"), i = (Et.test(f) ? "&" : "?") + "_=" + kt++ + i), y.url = f + i), y.ifModified && (E.lastModified[f] && T.setRequestHeader("If-Modified-Since", E.lastModified[f]), E.etag[f] && T.setRequestHeader("If-None-Match", E.etag[f])), (y.data && y.hasContent && !1 !== y.contentType || t.contentType) && T.setRequestHeader("Content-Type", y.contentType), T.setRequestHeader("Accept", y.dataTypes[0] && y.accepts[y.dataTypes[0]] ? y.accepts[y.dataTypes[0]] + ("*" !== y.dataTypes[0] ? ", " + _t + "; q=0.01" : "") : y.accepts["*"]), y.headers) T.setRequestHeader(o, y.headers[o]);
                if (y.beforeSend && (!1 === y.beforeSend.call(v, T, y) || h)) return T.abort();
                if (u = "abort", x.add(y.complete), T.done(y.success), T.fail(y.error), l = Wt(Rt, y, t, T)) {
                    if (T.readyState = 1, g && m.trigger("ajaxSend", [T, y]), h) return T;
                    y.async && 0 < y.timeout && (d = C.setTimeout(function() {
                        T.abort("timeout")
                    }, y.timeout));
                    try {
                        h = !1, l.send(s, c)
                    } catch (e) {
                        if (h) throw e;
                        c(-1, e)
                    }
                } else c(-1, "No Transport");

                function c(e, t, n, r) {
                    var o, i, s, a, u, c = t;
                    h || (h = !0, d && C.clearTimeout(d), l = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                        for (var r, o, i, s, a = e.contents, u = e.dataTypes;
                            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (o in a)
                                if (a[o] && a[o].test(r)) {
                                    u.unshift(o);
                                    break
                                } if (u[0] in n) i = u[0];
                        else {
                            for (o in n) {
                                if (!u[0] || e.converters[o + " " + u[0]]) {
                                    i = o;
                                    break
                                }
                                s || (s = o)
                            }
                            i = i || s
                        }
                        if (i) return i !== u[0] && u.unshift(i), n[i]
                    }(y, T, n)), a = function(e, t, n, r) {
                        var o, i, s, a, u, c = {},
                            l = e.dataTypes.slice();
                        if (l[1])
                            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                        for (i = l.shift(); i;)
                            if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = l.shift())
                                if ("*" === i) i = u;
                                else if ("*" !== u && u !== i) {
                            if (!(s = c[u + " " + i] || c["* " + i]))
                                for (o in c)
                                    if ((a = o.split(" "))[1] === i && (s = c[u + " " + a[0]] || c["* " + a[0]])) {
                                        !0 === s ? s = c[o] : !0 !== c[o] && (i = a[0], l.unshift(a[1]));
                                        break
                                    } if (!0 !== s)
                                if (s && e.throws) t = s(t);
                                else try {
                                    t = s(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: s ? e : "No conversion from " + u + " to " + i
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(y, a, T, o), o ? (y.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (E.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (E.etag[f] = u)), 204 === e || "HEAD" === y.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = a.state, i = a.data, o = !(s = a.error))) : (s = c, !e && c || (c = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || c) + "", o ? b.resolveWith(v, [i, c, T]) : b.rejectWith(v, [T, c, s]), T.statusCode(w), w = void 0, g && m.trigger(o ? "ajaxSuccess" : "ajaxError", [T, y, o ? i : s]), x.fireWith(v, [T, c]), g && (m.trigger("ajaxComplete", [T, y]), --E.active || E.event.trigger("ajaxStop")))
                }
                return T
            },
            getJSON: function(e, t, n) {
                return E.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return E.get(e, void 0, t, "script")
            }
        }), E.each(["get", "post"], function(e, o) {
            E[o] = function(e, t, n, r) {
                return m(t) && (r = r || n, n = t, t = void 0), E.ajax(E.extend({
                    url: e,
                    type: o,
                    dataType: r,
                    data: t,
                    success: n
                }, E.isPlainObject(e) && e))
            }
        }), E._evalUrl = function(e, t) {
            return E.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(e) {
                    E.globalEval(e, t)
                }
            })
        }, E.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (m(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function(n) {
                return m(n) ? this.each(function(e) {
                    E(this).wrapInner(n.call(this, e))
                }) : this.each(function() {
                    var e = E(this),
                        t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n)
                })
            },
            wrap: function(t) {
                var n = m(t);
                return this.each(function(e) {
                    E(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    E(this).replaceWith(this.childNodes)
                }), this
            }
        }), E.expr.pseudos.hidden = function(e) {
            return !E.expr.pseudos.visible(e)
        }, E.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, E.ajaxSettings.xhr = function() {
            try {
                return new C.XMLHttpRequest
            } catch (e) {}
        };
        var zt = {
                0: 200,
                1223: 204
            },
            Ut = E.ajaxSettings.xhr();
        v.cors = !!Ut && "withCredentials" in Ut, v.ajax = Ut = !!Ut, E.ajaxTransport(function(o) {
            var i, s;
            if (v.cors || Ut && !o.crossDomain) return {
                send: function(e, t) {
                    var n, r = o.xhr();
                    if (r.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                        for (n in o.xhrFields) r[n] = o.xhrFields[n];
                    for (n in o.mimeType && r.overrideMimeType && r.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                    i = function(e) {
                        return function() {
                            i && (i = s = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(zt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }, r.onload = i(), s = r.onerror = r.ontimeout = i("error"), void 0 !== r.onabort ? r.onabort = s : r.onreadystatechange = function() {
                        4 === r.readyState && C.setTimeout(function() {
                            i && s()
                        })
                    }, i = i("abort");
                    try {
                        r.send(o.hasContent && o.data || null)
                    } catch (e) {
                        if (i) throw e
                    }
                },
                abort: function() {
                    i && i()
                }
            }
        }), E.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), E.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return E.globalEval(e), e
                }
            }
        }), E.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), E.ajaxTransport("script", function(n) {
            var r, o;
            if (n.crossDomain || n.scriptAttrs) return {
                send: function(e, t) {
                    r = E("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", o = function(e) {
                        r.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
                    }), k.head.appendChild(r[0])
                },
                abort: function() {
                    o && o()
                }
            }
        });
        var Xt, Gt = [],
            Vt = /(=)\?(?=&|$)|\?\?/;
        E.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Gt.pop() || E.expando + "_" + kt++;
                return this[e] = !0, e
            }
        }), E.ajaxPrefilter("json jsonp", function(e, t, n) {
            var r, o, i, s = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return i || E.error(r + " was not called"), i[0]
            }, e.dataTypes[0] = "json", o = C[r], C[r] = function() {
                i = arguments
            }, n.always(function() {
                void 0 === o ? E(C).removeProp(r) : C[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), i && m(o) && o(i[0]), i = o = void 0
            }), "script"
        }), v.createHTMLDocument = ((Xt = k.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xt.childNodes.length), E.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = k.implementation.createHTMLDocument("")).createElement("base")).href = k.location.href, t.head.appendChild(r)) : t = k), i = !n && [], (o = N.exec(e)) ? [t.createElement(o[1])] : (o = xe([e], t, i), i && i.length && E(i).remove(), E.merge([], o.childNodes)));
            var r, o, i
        }, E.fn.load = function(e, t, n) {
            var r, o, i, s = this,
                a = e.indexOf(" ");
            return -1 < a && (r = vt(e.slice(a)), e = e.slice(0, a)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < s.length && E.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                i = arguments, s.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e)
            }).always(n && function(e, t) {
                s.each(function() {
                    n.apply(this, i || [e.responseText, t, e])
                })
            }), this
        }, E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            E.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), E.expr.pseudos.animated = function(t) {
            return E.grep(E.timers, function(e) {
                return t === e.elem
            }).length
        }, E.offset = {
            setOffset: function(e, t, n) {
                var r, o, i, s, a, u, c = E.css(e, "position"),
                    l = E(e),
                    f = {};
                "static" === c && (e.style.position = "relative"), a = l.offset(), i = E.css(e, "top"), u = E.css(e, "left"), o = ("absolute" === c || "fixed" === c) && -1 < (i + u).indexOf("auto") ? (s = (r = l.position()).top, r.left) : (s = parseFloat(i) || 0, parseFloat(u) || 0), m(t) && (t = t.call(e, n, E.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + o), "using" in t ? t.using.call(e, f) : l.css(f)
            }
        }, E.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    E.offset.setOffset(this, t, e)
                });
                var e, n, r = this[0];
                return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, r = this[0],
                        o = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position");) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((o = E(e).offset()).top += E.css(e, "borderTopWidth", !0), o.left += E.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - o.top - E.css(r, "marginTop", !0),
                        left: t.left - o.left - E.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === E.css(e, "position");) e = e.offsetParent;
                    return e || re
                })
            }
        }), E.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, o) {
            var i = "pageYOffset" === o;
            E.fn[t] = function(e) {
                return W(this, function(e, t, n) {
                    var r;
                    if (b(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[o] : e[t];
                    r ? r.scrollTo(i ? r.pageXOffset : n, i ? n : r.pageYOffset) : e[t] = n
                }, t, e, arguments.length)
            }
        }), E.each(["top", "left"], function(e, n) {
            E.cssHooks[n] = $e(v.pixelPosition, function(e, t) {
                if (t) return t = We(e, n), _e.test(t) ? E(e).position()[n] + "px" : t
            })
        }), E.each({
            Height: "height",
            Width: "width"
        }, function(s, a) {
            E.each({
                padding: "inner" + s,
                content: a,
                "": "outer" + s
            }, function(r, i) {
                E.fn[i] = function(e, t) {
                    var n = arguments.length && (r || "boolean" != typeof e),
                        o = r || (!0 === e || !0 === t ? "margin" : "border");
                    return W(this, function(e, t, n) {
                        var r;
                        return b(e) ? 0 === i.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + s], r["scroll" + s], e.body["offset" + s], r["offset" + s], r["client" + s])) : void 0 === n ? E.css(e, t, o) : E.style(e, t, n, o)
                    }, a, n ? e : void 0, n)
                }
            })
        }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
            E.fn[n] = function(e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
            }
        }), E.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), E.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), E.proxy = function(e, t) {
            var n, r, o;
            if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = a.call(arguments, 2), (o = function() {
                return e.apply(t || this, r.concat(a.call(arguments)))
            }).guid = e.guid = e.guid || E.guid++, o
        }, E.holdReady = function(e) {
            e ? E.readyWait++ : E.ready(!0)
        }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = j, E.isFunction = m, E.isWindow = b, E.camelCase = X, E.type = w, E.now = Date.now, E.isNumeric = function(e) {
            var t = E.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, void 0 === (Zt = function() {
            return E
        }.apply(Kt, [])) || (Qt.exports = Zt);
        var Yt = C.jQuery,
            Jt = C.$;
        return E.noConflict = function(e) {
            return C.$ === E && (C.$ = Jt), e && C.jQuery === E && (C.jQuery = Yt), E
        }, e || (C.jQuery = C.$ = E), E
    })
}, function(e, t, n) {
    e.exports = n(7)
}, function(e, t, n) {
    var o = n(6);
    e.exports = function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(e) {
                o(t, e, n[e])
            })
        }
        return t
    }
}, function(e, t, n) {
    var r;
    r = function() {
        return function(n) {
            var r = {};

            function o(e) {
                if (r[e]) return r[e].exports;
                var t = r[e] = {
                    exports: {},
                    id: e,
                    loaded: !1
                };
                return n[e].call(t.exports, t, t.exports, o), t.loaded = !0, t.exports
            }
            return o.m = n, o.c = r, o.p = "", o(0)
        }([function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                function r(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(e, t, n) {
                    return t && r(e.prototype, t), n && r(e, n), e
                }
            }();
            var o = n(1),
                u = n(3),
                i = function() {
                    function n(e, t) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n), o.initializer.load(this, t, e), this.begin()
                    }
                    return r(n, [{
                        key: "toggle",
                        value: function() {
                            this.pause.status ? this.start() : this.stop()
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this))
                        }
                    }, {
                        key: "start",
                        value: function() {
                            this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this))
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.reset(!1), this.options.onDestroy(this)
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            var e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                            clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, e && (this.insertCursor(), this.options.onReset(this), this.begin())
                        }
                    }, {
                        key: "begin",
                        value: function() {
                            var e = this;
                            this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function() {
                                e.currentElContent && 0 !== e.currentElContent.length ? e.backspace(e.currentElContent, e.currentElContent.length) : e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos)
                            }, this.startDelay)
                        }
                    }, {
                        key: "typewrite",
                        value: function(o, i) {
                            var s = this;
                            this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                            var e = this.humanizer(this.typeSpeed),
                                a = 1;
                            !0 !== this.pause.status ? this.timeout = setTimeout(function() {
                                i = u.htmlParser.typeHtmlChars(o, i, s);
                                var e = 0,
                                    t = o.substr(i);
                                if ("^" === t.charAt(0) && /^\^\d+/.test(t)) {
                                    var n = 1;
                                    n += (t = /\d+/.exec(t)[0]).length, e = parseInt(t), s.temporaryPause = !0, s.options.onTypingPaused(s.arrayPos, s), o = o.substring(0, i) + o.substring(i + n), s.toggleBlinking(!0)
                                }
                                if ("`" === t.charAt(0)) {
                                    for (;
                                        "`" !== o.substr(i + a).charAt(0) && !(i + ++a > o.length););
                                    var r = o.substring(0, i);
                                    o = r + o.substring(r.length + 1, i + a) + o.substring(i + a + 1), a--
                                }
                                s.timeout = setTimeout(function() {
                                    s.toggleBlinking(!1), i >= o.length ? s.doneTyping(o, i) : s.keepTyping(o, i, a), s.temporaryPause && (s.temporaryPause = !1, s.options.onTypingResumed(s.arrayPos, s))
                                }, e)
                            }, e) : this.setPauseStatus(o, i, !0)
                        }
                    }, {
                        key: "keepTyping",
                        value: function(e, t, n) {
                            0 === t && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)), t += n;
                            var r = e.substr(0, t);
                            this.replaceText(r), this.typewrite(e, t)
                        }
                    }, {
                        key: "doneTyping",
                        value: function(e, t) {
                            var n = this;
                            this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
                                n.backspace(e, t)
                            }, this.backDelay))
                        }
                    }, {
                        key: "backspace",
                        value: function(n, r) {
                            var o = this;
                            if (!0 !== this.pause.status) {
                                if (this.fadeOut) return this.initFadeOut();
                                this.toggleBlinking(!1);
                                var e = this.humanizer(this.backSpeed);
                                this.timeout = setTimeout(function() {
                                    r = u.htmlParser.backSpaceHtmlChars(n, r, o);
                                    var e = n.substr(0, r);
                                    if (o.replaceText(e), o.smartBackspace) {
                                        var t = o.strings[o.arrayPos + 1];
                                        t && e === t.substr(0, r) ? o.stopNum = r : o.stopNum = 0
                                    }
                                    r > o.stopNum ? (r--, o.backspace(n, r)) : r <= o.stopNum && (o.arrayPos++, o.arrayPos === o.strings.length ? (o.arrayPos = 0, o.options.onLastStringBackspaced(), o.shuffleStringsIfNeeded(), o.begin()) : o.typewrite(o.strings[o.sequence[o.arrayPos]], r))
                                }, e)
                            } else this.setPauseStatus(n, r, !0)
                        }
                    }, {
                        key: "complete",
                        value: function() {
                            this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0
                        }
                    }, {
                        key: "setPauseStatus",
                        value: function(e, t, n) {
                            this.pause.typewrite = n, this.pause.curString = e, this.pause.curStrPos = t
                        }
                    }, {
                        key: "toggleBlinking",
                        value: function(e) {
                            this.cursor && (this.pause.status || this.cursorBlinking !== e && ((this.cursorBlinking = e) ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")))
                        }
                    }, {
                        key: "humanizer",
                        value: function(e) {
                            return Math.round(Math.random() * e / 2) + e
                        }
                    }, {
                        key: "shuffleStringsIfNeeded",
                        value: function() {
                            this.shuffle && (this.sequence = this.sequence.sort(function() {
                                return Math.random() - .5
                            }))
                        }
                    }, {
                        key: "initFadeOut",
                        value: function() {
                            var e = this;
                            return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function() {
                                e.arrayPos++, e.replaceText(""), e.strings.length > e.arrayPos ? e.typewrite(e.strings[e.sequence[e.arrayPos]], 0) : (e.typewrite(e.strings[0], 0), e.arrayPos = 0)
                            }, this.fadeOutDelay)
                        }
                    }, {
                        key: "replaceText",
                        value: function(e) {
                            this.attr ? this.el.setAttribute(this.attr, e) : this.isInput ? this.el.value = e : "html" === this.contentType ? this.el.innerHTML = e : this.el.textContent = e
                        }
                    }, {
                        key: "bindFocusEvents",
                        value: function() {
                            var t = this;
                            this.isInput && (this.el.addEventListener("focus", function(e) {
                                t.stop()
                            }), this.el.addEventListener("blur", function(e) {
                                t.el.value && 0 !== t.el.value.length || t.start()
                            }))
                        }
                    }, {
                        key: "insertCursor",
                        value: function() {
                            this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
                        }
                    }]), n
                }();
            t.default = i, e.exports = t.default
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                r = function() {
                    function r(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(e, t, n) {
                        return t && r(e.prototype, t), n && r(e, n), e
                    }
                }();
            var o, i = n(2),
                u = (o = i) && o.__esModule ? o : {
                    default: o
                },
                s = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e)
                    }
                    return r(e, [{
                        key: "load",
                        value: function(e, t, n) {
                            if (e.el = "string" == typeof n ? document.querySelector(n) : n, e.options = a({}, u.default, t), e.isInput = "input" === e.el.tagName.toLowerCase(), e.attr = e.options.attr, e.bindInputFocusEvents = e.options.bindInputFocusEvents, e.showCursor = !e.isInput && e.options.showCursor, e.cursorChar = e.options.cursorChar, e.cursorBlinking = !0, e.elContent = e.attr ? e.el.getAttribute(e.attr) : e.el.textContent, e.contentType = e.options.contentType, e.typeSpeed = e.options.typeSpeed, e.startDelay = e.options.startDelay, e.backSpeed = e.options.backSpeed, e.smartBackspace = e.options.smartBackspace, e.backDelay = e.options.backDelay, e.fadeOut = e.options.fadeOut, e.fadeOutClass = e.options.fadeOutClass, e.fadeOutDelay = e.options.fadeOutDelay, e.isPaused = !1, e.strings = e.options.strings.map(function(e) {
                                    return e.trim()
                                }), "string" == typeof e.options.stringsElement ? e.stringsElement = document.querySelector(e.options.stringsElement) : e.stringsElement = e.options.stringsElement, e.stringsElement) {
                                e.strings = [], e.stringsElement.style.display = "none";
                                var r = Array.prototype.slice.apply(e.stringsElement.children),
                                    o = r.length;
                                if (o)
                                    for (var i = 0; i < o; i += 1) {
                                        var s = r[i];
                                        e.strings.push(s.innerHTML.trim())
                                    }
                            }
                            for (var i in e.strPos = 0, e.arrayPos = 0, e.stopNum = 0, e.loop = e.options.loop, e.loopCount = e.options.loopCount, e.curLoop = 0, e.shuffle = e.options.shuffle, e.sequence = [], e.pause = {
                                    status: !1,
                                    typewrite: !0,
                                    curString: "",
                                    curStrPos: 0
                                }, e.typingComplete = !1, e.strings) e.sequence[i] = i;
                            e.currentElContent = this.getCurrentElContent(e), e.autoInsertCss = e.options.autoInsertCss, this.appendAnimationCss(e)
                        }
                    }, {
                        key: "getCurrentElContent",
                        value: function(e) {
                            return e.attr ? e.el.getAttribute(e.attr) : e.isInput ? e.el.value : "html" === e.contentType ? e.el.innerHTML : e.el.textContent
                        }
                    }, {
                        key: "appendAnimationCss",
                        value: function(e) {
                            var t = "data-typed-js-css";
                            if (e.autoInsertCss && (e.showCursor || e.fadeOut) && !document.querySelector("[" + t + "]")) {
                                var n = document.createElement("style");
                                n.type = "text/css", n.setAttribute(t, !0);
                                var r = "";
                                e.showCursor && (r += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), e.fadeOut && (r += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "), 0 !== n.length && (n.innerHTML = r, document.body.appendChild(n))
                            }
                        }
                    }]), e
                }(),
                c = new(t.default = s);
            t.initializer = c
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
                stringsElement: null,
                typeSpeed: 0,
                startDelay: 0,
                backSpeed: 0,
                smartBackspace: !0,
                shuffle: !1,
                backDelay: 700,
                fadeOut: !1,
                fadeOutClass: "typed-fade-out",
                fadeOutDelay: 500,
                loop: !1,
                loopCount: 1 / 0,
                showCursor: !0,
                cursorChar: "|",
                autoInsertCss: !0,
                attr: null,
                bindInputFocusEvents: !1,
                contentType: "html",
                onComplete: function(e) {},
                preStringTyped: function(e, t) {},
                onStringTyped: function(e, t) {},
                onLastStringBackspaced: function(e) {},
                onTypingPaused: function(e, t) {},
                onTypingResumed: function(e, t) {},
                onReset: function(e) {},
                onStop: function(e, t) {},
                onStart: function(e, t) {},
                onDestroy: function(e) {}
            };
            t.default = n, e.exports = t.default
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function() {
                function r(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(e, t, n) {
                    return t && r(e.prototype, t), n && r(e, n), e
                }
            }();
            var r = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e)
                    }
                    return n(e, [{
                        key: "typeHtmlChars",
                        value: function(e, t, n) {
                            if ("html" !== n.contentType) return t;
                            var r = e.substr(t).charAt(0);
                            if ("<" === r || "&" === r) {
                                var o = "";
                                for (o = "<" === r ? ">" : ";"; e.substr(t + 1).charAt(0) !== o && !(++t + 1 > e.length););
                                t++
                            }
                            return t
                        }
                    }, {
                        key: "backSpaceHtmlChars",
                        value: function(e, t, n) {
                            if ("html" !== n.contentType) return t;
                            var r = e.substr(t).charAt(0);
                            if (">" === r || ";" === r) {
                                var o = "";
                                for (o = ">" === r ? "<" : "&"; e.substr(t - 1).charAt(0) !== o && !(--t < 0););
                                t--
                            }
                            return t
                        }
                    }]), e
                }(),
                o = new(t.default = r);
            t.htmlParser = o
        }])
    }, e.exports = r()
}, function(e, t) {
    function u(e, t, n, r, o, i, s) {
        try {
            var a = e[i](s),
                u = a.value
        } catch (e) {
            return void n(e)
        }
        a.done ? t(u) : Promise.resolve(u).then(r, o)
    }
    e.exports = function(a) {
        return function() {
            var e = this,
                s = arguments;
            return new Promise(function(t, n) {
                var r = a.apply(e, s);

                function o(e) {
                    u(r, t, n, o, i, "next", e)
                }

                function i(e) {
                    u(r, t, n, o, i, "throw", e)
                }
                o(void 0)
            })
        }
    }
}, function(e, t, n) {
    e.exports = n(11)
}, function(e, t) {
    e.exports = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
}, function(e, t, n) {
    var r = function(i) {
        "use strict";
        var u, e = Object.prototype,
            c = e.hasOwnProperty,
            t = "function" == typeof Symbol ? Symbol : {},
            o = t.iterator || "@@iterator",
            n = t.asyncIterator || "@@asyncIterator",
            r = t.toStringTag || "@@toStringTag";

        function s(e, t, n, r) {
            var i, s, a, u, o = t && t.prototype instanceof v ? t : v,
                c = Object.create(o.prototype),
                l = new j(r || []);
            return c._invoke = (i = e, s = n, a = l, u = p, function(e, t) {
                if (u === h) throw new Error("Generator is already running");
                if (u === g) {
                    if ("throw" === e) throw t;
                    return A()
                }
                for (a.method = e, a.arg = t;;) {
                    var n = a.delegate;
                    if (n) {
                        var r = k(n, a);
                        if (r) {
                            if (r === y) continue;
                            return r
                        }
                    }
                    if ("next" === a.method) a.sent = a._sent = a.arg;
                    else if ("throw" === a.method) {
                        if (u === p) throw u = g, a.arg;
                        a.dispatchException(a.arg)
                    } else "return" === a.method && a.abrupt("return", a.arg);
                    u = h;
                    var o = f(i, s, a);
                    if ("normal" === o.type) {
                        if (u = a.done ? g : d, o.arg === y) continue;
                        return {
                            value: o.arg,
                            done: a.done
                        }
                    }
                    "throw" === o.type && (u = g, a.method = "throw", a.arg = o.arg)
                }
            }), c
        }

        function f(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }
        i.wrap = s;
        var p = "suspendedStart",
            d = "suspendedYield",
            h = "executing",
            g = "completed",
            y = {};

        function v() {}

        function a() {}

        function l() {}
        var m = {};
        m[o] = function() {
            return this
        };
        var b = Object.getPrototypeOf,
            x = b && b(b(N([])));
        x && x !== e && c.call(x, o) && (m = x);
        var w = l.prototype = v.prototype = Object.create(m);

        function T(e) {
            ["next", "throw", "return"].forEach(function(t) {
                e[t] = function(e) {
                    return this._invoke(t, e)
                }
            })
        }

        function C(u) {
            var t;
            this._invoke = function(n, r) {
                function e() {
                    return new Promise(function(e, t) {
                        ! function t(e, n, r, o) {
                            var i = f(u[e], u, n);
                            if ("throw" !== i.type) {
                                var s = i.arg,
                                    a = s.value;
                                return a && "object" == typeof a && c.call(a, "__await") ? Promise.resolve(a.__await).then(function(e) {
                                    t("next", e, r, o)
                                }, function(e) {
                                    t("throw", e, r, o)
                                }) : Promise.resolve(a).then(function(e) {
                                    s.value = e, r(s)
                                }, function(e) {
                                    return t("throw", e, r, o)
                                })
                            }
                            o(i.arg)
                        }(n, r, e, t)
                    })
                }
                return t = t ? t.then(e, e) : e()
            }
        }

        function k(e, t) {
            var n = e.iterator[t.method];
            if (n === u) {
                if (t.delegate = null, "throw" === t.method) {
                    if (e.iterator.return && (t.method = "return", t.arg = u, k(e, t), "throw" === t.method)) return y;
                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return y
            }
            var r = f(n, e.iterator, t.arg);
            if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, y;
            var o = r.arg;
            return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = u), t.delegate = null, y) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, y)
        }

        function E(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function S(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function j(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(E, this), this.reset(!0)
        }

        function N(t) {
            if (t) {
                var e = t[o];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var n = -1,
                        r = function e() {
                            for (; ++n < t.length;)
                                if (c.call(t, n)) return e.value = t[n], e.done = !1, e;
                            return e.value = u, e.done = !0, e
                        };
                    return r.next = r
                }
            }
            return {
                next: A
            }
        }

        function A() {
            return {
                value: u,
                done: !0
            }
        }
        return a.prototype = w.constructor = l, l.constructor = a, l[r] = a.displayName = "GeneratorFunction", i.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === a || "GeneratorFunction" === (t.displayName || t.name))
        }, i.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, l) : (e.__proto__ = l, r in e || (e[r] = "GeneratorFunction")), e.prototype = Object.create(w), e
        }, i.awrap = function(e) {
            return {
                __await: e
            }
        }, T(C.prototype), C.prototype[n] = function() {
            return this
        }, i.AsyncIterator = C, i.async = function(e, t, n, r) {
            var o = new C(s(e, t, n, r));
            return i.isGeneratorFunction(t) ? o : o.next().then(function(e) {
                return e.done ? e.value : o.next()
            })
        }, T(w), w[r] = "Generator", w[o] = function() {
            return this
        }, w.toString = function() {
            return "[object Generator]"
        }, i.keys = function(n) {
            var r = [];
            for (var e in n) r.push(e);
            return r.reverse(),
                function e() {
                    for (; r.length;) {
                        var t = r.pop();
                        if (t in n) return e.value = t, e.done = !1, e
                    }
                    return e.done = !0, e
                }
        }, i.values = N, j.prototype = {
            constructor: j,
            reset: function(e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = u, this.done = !1, this.delegate = null, this.method = "next", this.arg = u, this.tryEntries.forEach(S), !e)
                    for (var t in this) "t" === t.charAt(0) && c.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = u)
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval
            },
            dispatchException: function(n) {
                if (this.done) throw n;
                var r = this;

                function e(e, t) {
                    return i.type = "throw", i.arg = n, r.next = e, t && (r.method = "next", r.arg = u), !!t
                }
                for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                    var o = this.tryEntries[t],
                        i = o.completion;
                    if ("root" === o.tryLoc) return e("end");
                    if (o.tryLoc <= this.prev) {
                        var s = c.call(o, "catchLoc"),
                            a = c.call(o, "finallyLoc");
                        if (s && a) {
                            if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                            if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                        } else if (s) {
                            if (this.prev < o.catchLoc) return e(o.catchLoc, !0)
                        } else {
                            if (!a) throw new Error("try statement without catch or finally");
                            if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                    var r = this.tryEntries[n];
                    if (r.tryLoc <= this.prev && c.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                        var o = r;
                        break
                    }
                }
                o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                var i = o ? o.completion : {};
                return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, y) : this.complete(i)
            },
            complete: function(e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), y
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var o = r.arg;
                            S(n)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(e, t, n) {
                return this.delegate = {
                    iterator: N(e),
                    resultName: t,
                    nextLoc: n
                }, "next" === this.method && (this.arg = u), y
            }
        }, i
    }(e.exports);
    try {
        regeneratorRuntime = r
    } catch (e) {
        Function("r", "regeneratorRuntime = r")(r)
    }
}, function(e, t, n) {}, function(e, t, n) {
    e.exports = n.p + "assets/screenshot.png"
}, function(e, t, n) {
    e.exports = n.p + "assets/favicon.png"
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
        s = n.n(r),
        o = n(2),
        i = n.n(o),
        a = n(3),
        u = n.n(a),
        c = {
            startDelay: 150,
            strings: ["I CODE THEREFORE I AM"],
            typeSpeed: 40,
            backSpeed: 40,
            loop: !0
        },
        l = n(1),
        f = n.n(l),
        p = n(4),
        d = n.n(p),
        h = function() {
            var e = d()(f.a.mark(function e() {
                return f.a.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            e.next = 4;
                            break;
                        case 3:
                            console.log("DEVELOPMENT: Hot reload HTML Changes");
                        case 4:
                        case "end":
                            return e.stop()
                    }
                }, e)
            }));
            return function() {
                return e.apply(this, arguments)
            }
        }();
    n(8), n(9), n(10);
    h(), s()(document).ready(function() {
        var e, t;
        e = ".hero__typing-content", t = "I <b class='lite-blue'>CODE</b> therefore <b class='green'>I AM.</b>", new u.a(e, i()({}, c, {
            strings: [t]
        })), s()(window).on("scroll", function() {
            40 <= s()(window).scrollTop() ? s()(".navbar").addClass("hide-background") : s()(".navbar").removeClass("hide-background")
        }), s()(window).on("scroll", function() {
            var i = s()(window).scrollTop();
            s()(".scroll-spy").each(function(e, t) {
                var n = s()(t).offset().top,
                    r = n + s()(t).height();
                if (n <= i && i <= r) {
                    var o = s()(t).attr("id");
                    s()('a[href="#'.concat(o, '"]')).parent().addClass("active").siblings().removeClass("active")
                }
            })
        }), s()(".scrolling-link").each(function(e, t) {
            s()(t).click(function(e) {
                e.preventDefault();
                var t = s()(e.target).attr("href"),
                    n = s()(t);
                s()("html, body").animate({
                    scrollTop: n.offset().top
                }, "slow")
            })
        }), s()(".hero__main-button").click(function() {
            s()("a[href='#about']").click()
        }), s()(window).scroll()
    })
}]);