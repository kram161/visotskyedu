"use strict";

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}! function(e, t) {
    "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : void 0, function(e, t) {
    function n(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }

    function i(e) {
        return null != e && e === e.window
    }
    var o = [],
        r = Object.getPrototypeOf,
        s = o.slice,
        a = o.flat ? function(e) {
            return o.flat.call(e)
        } : function(e) {
            return o.concat.apply([], e)
        },
        l = o.push,
        c = o.indexOf,
        d = {},
        u = d.toString,
        p = d.hasOwnProperty,
        f = p.toString,
        h = f.call(Object),
        g = {},
        v = e.document,
        m = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function y(e, t, n) {
        var i, o, r = (n = n || v).createElement("script");
        if (r.text = e, t)
            for (i in m)(o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
        n.head.appendChild(r).parentNode.removeChild(r)
    }

    function b(e) {
        return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? d[u.call(e)] || "object" : _typeof(e)
    }
    var w = "3.6.0",
        x = function e(t, n) {
            return new e.fn.init(t, n)
        };

    function k(e) {
        var t = !!e && "length" in e && e.length,
            o = b(e);
        return !n(e) && !i(e) && ("array" === o || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    x.fn = x.prototype = {
        jquery: w,
        constructor: x,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            return (e = x.merge(this.constructor(), e)).prevObject = this, e
        },
        each: function(e) {
            return x.each(this, e)
        },
        map: function(e) {
            return this.pushStack(x.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(x.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(x.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length;
            e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: o.sort,
        splice: o.splice
    }, x.extend = x.fn.extend = function() {
        var e, t, i, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == _typeof(s) || n(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) i = e[t], "__proto__" !== t && s !== i && (c && i && (x.isPlainObject(i) || (o = Array.isArray(i))) ? (r = s[t], r = o && !Array.isArray(r) ? [] : o || x.isPlainObject(r) ? r : {}, o = !1, s[t] = x.extend(c, r, i)) : void 0 !== i && (s[t] = i));
        return s
    }, x.extend({
        expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            return !(!e || "[object Object]" !== u.call(e) || (e = r(e)) && ("function" != typeof(e = p.call(e, "constructor") && e.constructor) || f.call(e) !== h))
        },
        isEmptyObject: function(e) {
            for (var t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            y(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, i = 0;
            if (k(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        makeArray: function(e, t) {
            return t = t || [], null != e && (k(Object(e)) ? x.merge(t, "string" == typeof e ? [e] : e) : l.call(t, e)), t
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : c.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) != s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o, r = 0,
                s = [];
            if (k(e))
                for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && s.push(o);
            else
                for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
            return a(s)
        },
        guid: 1,
        support: g
    }), "function" == typeof Symbol && (x.fn[Symbol.iterator] = o[Symbol.iterator]), x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        d["[object " + t + "]"] = t.toLowerCase()
    });
    var T = function(e) {
        function t(e, t) {
            return e = "0x" + e.slice(1) - 65536, t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
        }

        function n(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }

        function i() {
            g()
        }
        var o, r, s, a, l, c, d, u, p, f, h, g, v, m, y, b, w, x, k, T = "sizzle" + +new Date,
            S = e.document,
            C = 0,
            $ = 0,
            A = le(),
            E = le(),
            j = le(),
            D = le(),
            L = function(e, t) {
                return e === t && (h = !0), 0
            },
            O = {}.hasOwnProperty,
            N = [],
            _ = N.pop,
            H = N.push,
            P = N.push,
            q = N.slice,
            M = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            z = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            F = "\\[" + R + "*(" + z + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + R + "*\\]",
            W = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
            B = new RegExp(R + "+", "g"),
            U = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            X = new RegExp("^" + R + "*," + R + "*"),
            Y = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            V = new RegExp(R + "|>"),
            G = new RegExp(W),
            J = new RegExp("^" + z + "$"),
            K = {
                ID: new RegExp("^#(" + z + ")"),
                CLASS: new RegExp("^\\.(" + z + ")"),
                TAG: new RegExp("^(" + z + "|[*])"),
                ATTR: new RegExp("^" + F),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + I + ")$", "i"),
                needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
            },
            Q = /HTML$/i,
            Z = /^(?:input|select|textarea|button)$/i,
            ee = /^h\d$/i,
            te = /^[^{]+\{\s*\[native \w/,
            ne = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ie = /[+~]/,
            oe = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            se = ye(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            P.apply(N = q.call(S.childNodes), S.childNodes), N[S.childNodes.length].nodeType
        } catch (o) {
            P = {
                apply: N.length ? function(e, t) {
                    H.apply(e, q.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function ae(e, t, i, o) {
            var s, a, l, d, p, f, h = t && t.ownerDocument,
                m = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return i;
            if (!o && (g(t), t = t || v, y)) {
                if (11 !== m && (d = ne.exec(e)))
                    if (f = d[1]) {
                        if (9 === m) {
                            if (!(a = t.getElementById(f))) return i;
                            if (a.id === f) return i.push(a), i
                        } else if (h && (a = h.getElementById(f)) && k(t, a) && a.id === f) return i.push(a), i
                    } else {
                        if (d[2]) return P.apply(i, t.getElementsByTagName(e)), i;
                        if ((f = d[3]) && r.getElementsByClassName && t.getElementsByClassName) return P.apply(i, t.getElementsByClassName(f)), i
                    } if (r.qsa && !D[e + " "] && (!b || !b.test(e)) && (1 !== m || "object" !== t.nodeName.toLowerCase())) {
                    if (f = e, h = t, 1 === m && (V.test(e) || Y.test(e))) {
                        for ((h = ie.test(e) && ge(t.parentNode) || t) === t && r.scope || ((l = t.getAttribute("id")) ? l = l.replace(re, n) : t.setAttribute("id", l = T)), s = (p = c(e)).length; s--;) p[s] = (l ? "#" + l : ":scope") + " " + me(p[s]);
                        f = p.join(",")
                    }
                    try {
                        return P.apply(i, h.querySelectorAll(f)), i
                    } catch (t) {
                        D(e, !0)
                    } finally {
                        l === T && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(U, "$1"), t, i, o)
        }

        function le() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > s.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
        }

        function ce(e) {
            return e[T] = !0, e
        }

        function de(e) {
            var t = v.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t)
            }
        }

        function ue(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) s.attrHandle[n[i]] = t
        }

        function pe(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function he(e) {
            return ce(function(t) {
                return t = +t, ce(function(n, i) {
                    for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (o in r = ae.support = {}, l = ae.isXML = function(e) {
                var t = e && e.namespaceURI;
                e = e && (e.ownerDocument || e).documentElement;
                return !Q.test(t || e && e.nodeName || "HTML")
            }, g = ae.setDocument = function(e) {
                var n;
                return (e = e ? e.ownerDocument || e : S) != v && 9 === e.nodeType && e.documentElement && (m = (v = e).documentElement, y = !l(v), S != v && (n = v.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", i, !1) : n.attachEvent && n.attachEvent("onunload", i)), r.scope = de(function(e) {
                    return m.appendChild(e).appendChild(v.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), r.attributes = de(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), r.getElementsByTagName = de(function(e) {
                    return e.appendChild(v.createComment("")), !e.getElementsByTagName("*").length
                }), r.getElementsByClassName = te.test(v.getElementsByClassName), r.getById = de(function(e) {
                    return m.appendChild(e).id = T, !v.getElementsByName || !v.getElementsByName(T).length
                }), r.getById ? (s.filter.ID = function(e) {
                    var n = e.replace(oe, t);
                    return function(e) {
                        return e.getAttribute("id") === n
                    }
                }, s.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && y) return (e = t.getElementById(e)) ? [e] : []
                }) : (s.filter.ID = function(e) {
                    var n = e.replace(oe, t);
                    return function(e) {
                        return (e = void 0 !== e.getAttributeNode && e.getAttributeNode("id")) && e.value === n
                    }
                }, s.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && y) {
                        var n, i, o, r = t.getElementById(e);
                        if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                            for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                                if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                        }
                        return []
                    }
                }), s.find.TAG = r.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : r.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" !== e) return r;
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }, s.find.CLASS = r.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && y) return t.getElementsByClassName(e)
                }, w = [], b = [], (r.qsa = te.test(v.querySelectorAll)) && (de(function(e) {
                    var t;
                    m.appendChild(e).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && b.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || b.push("\\[" + R + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + T + "-]").length || b.push("~="), (t = v.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || b.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || b.push(":checked"), e.querySelectorAll("a#" + T + "+*").length || b.push(".#.+[+~]"), e.querySelectorAll("\\\f"), b.push("[\\r\\n\\f]")
                }), de(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = v.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && b.push("name" + R + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && b.push(":enabled", ":disabled"), m.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && b.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), b.push(",.*:")
                })), (r.matchesSelector = te.test(x = m.matches || m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && de(function(e) {
                    r.disconnectedMatch = x.call(e, "*"), x.call(e, "[s!='']:x"), w.push("!=", W)
                }), b = b.length && new RegExp(b.join("|")), w = w.length && new RegExp(w.join("|")), n = te.test(m.compareDocumentPosition), k = n || te.test(m.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e;
                    return e === (t = t && t.parentNode) || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, L = n ? function(e, t) {
                    return e === t ? (h = !0, 0) : (n = !e.compareDocumentPosition - !t.compareDocumentPosition) || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !r.sortDetached && t.compareDocumentPosition(e) === n ? e == v || e.ownerDocument == S && k(S, e) ? -1 : t == v || t.ownerDocument == S && k(S, t) ? 1 : f ? M(f, e) - M(f, t) : 0 : 4 & n ? -1 : 1);
                    var n
                } : function(e, t) {
                    if (e === t) return h = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!o || !r) return e == v ? -1 : t == v ? 1 : o ? -1 : r ? 1 : f ? M(f, e) - M(f, t) : 0;
                    if (o === r) return pe(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? pe(s[i], a[i]) : s[i] == S ? -1 : a[i] == S ? 1 : 0
                }), v
            }, ae.matches = function(e, t) {
                return ae(e, null, null, t)
            }, ae.matchesSelector = function(e, t) {
                if (g(e), r.matchesSelector && y && !D[t + " "] && (!w || !w.test(t)) && (!b || !b.test(t))) try {
                    var n = x.call(e, t);
                    if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    D(t, !0)
                }
                return 0 < ae(t, v, null, [e]).length
            }, ae.contains = function(e, t) {
                return (e.ownerDocument || e) != v && g(e), k(e, t)
            }, ae.attr = function(e, t) {
                var n;
                return (e.ownerDocument || e) != v && g(e), void 0 !== (n = (n = s.attrHandle[t.toLowerCase()]) && O.call(s.attrHandle, t.toLowerCase()) ? n(e, t, !y) : void 0) ? n : r.attributes || !y ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }, ae.escape = function(e) {
                return (e + "").replace(re, n)
            }, ae.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ae.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (h = !r.detectDuplicates, f = !r.sortStable && e.slice(0), e.sort(L), h) {
                    for (; t = e[o++];) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1)
                }
                return f = null, e
            }, a = ae.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += a(t);
                return n
            }, (s = ae.selectors = {
                cacheLength: 50,
                createPseudo: ce,
                match: K,
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
                        return e[1] = e[1].replace(oe, t), e[3] = (e[3] || e[4] || e[5] || "").replace(oe, t), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = c(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var n = e.replace(oe, t).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === n
                        }
                    },
                    CLASS: function(e) {
                        var t = A[e + " "];
                        return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && A(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(i) {
                            return null == (i = ae.attr(i, e)) ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && -1 < i.indexOf(n) : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? -1 < (" " + i.replace(B, " ") + " ").indexOf(n) : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, d, u, p, f, h, g = r != s ? "nextSibling" : "previousSibling",
                                v = t.parentNode,
                                m = a && t.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (v) {
                                if (r) {
                                    for (; g;) {
                                        for (p = t; p = p[g];)
                                            if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? v.firstChild : v.lastChild], s && y) {
                                    for (b = (f = (c = (d = (u = (p = v)[T] || (p[T] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === C && c[1]) && c[2], p = f && v.childNodes[f]; p = ++f && p && p[g] || (b = f = 0) || h.pop();)
                                        if (1 === p.nodeType && ++b && p === t) {
                                            d[e] = [C, f, b];
                                            break
                                        }
                                } else if (!1 === (b = y ? f = (c = (d = (u = (p = t)[T] || (p[T] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === C && c[1] : b))
                                    for (;
                                        (p = ++f && p && p[g] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++b || (y && ((d = (u = p[T] || (p[T] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] = [C, b]), p !== t)););
                                return (b -= o) === i || b % i == 0 && 0 <= b / i
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, i = s.pseudos[e] || s.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return i[T] ? i(t) : 1 < i.length ? (n = [e, e, "", t], s.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function(e, n) {
                            for (var o, r = i(e, t), s = r.length; s--;) e[o = M(e, r[s])] = !(n[o] = r[s])
                        }) : function(e) {
                            return i(e, 0, n)
                        }) : i
                    }
                },
                pseudos: {
                    not: ce(function(e) {
                        var t = [],
                            n = [],
                            i = d(e.replace(U, "$1"));
                        return i[T] ? ce(function(e, t, n, o) {
                            for (var r, s = i(e, null, o, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                        }) : function(e, o, r) {
                            return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: ce(function(e) {
                        return function(t) {
                            return 0 < ae(e, t).length
                        }
                    }),
                    contains: ce(function(e) {
                        return e = e.replace(oe, t),
                            function(t) {
                                return -1 < (t.textContent || a(t)).indexOf(e)
                            }
                    }),
                    lang: ce(function(e) {
                        return J.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(oe, t).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = y ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === m
                    },
                    focus: function(e) {
                        return e === v.activeElement && (!v.hasFocus || v.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: fe(!1),
                    disabled: fe(!0),
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
                        return !s.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ee.test(e.nodeName)
                    },
                    input: function(e) {
                        return Z.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: he(function() {
                        return [0]
                    }),
                    last: he(function(e, t) {
                        return [t - 1]
                    }),
                    eq: he(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: he(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: he(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: he(function(e, t, n) {
                        for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: he(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = s.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) s.pseudos[o] = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(o);
        for (o in {
                submit: !0,
                reset: !0
            }) s.pseudos[o] = function(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(o);

        function ve() {}

        function me(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function ye(e, t, n) {
            var i = t.dir,
                o = t.next,
                r = o || i,
                s = n && "parentNode" === r,
                a = $++;
            return t.first ? function(t, n, o) {
                for (; t = t[i];)
                    if (1 === t.nodeType || s) return e(t, n, o);
                return !1
            } : function(t, n, l) {
                var c, d, u = [C, a];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || s)
                            if (c = (d = t[T] || (t[T] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((d = c[r]) && d[0] === C && d[1] === a) return u[2] = d[2];
                                if ((c[r] = u)[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function be(e) {
            return 1 < e.length ? function(t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function we(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
            return s
        }

        function xe(e) {
            for (var t, n, i, o = e.length, r = s.relative[e[0].type], a = r || s.relative[" "], l = r ? 1 : 0, c = ye(function(e) {
                    return e === t
                }, a, !0), d = ye(function(e) {
                    return -1 < M(t, e)
                }, a, !0), u = [function(e, n, i) {
                    return i = !r && (i || n !== p) || ((t = n).nodeType ? c : d)(e, n, i), t = null, i
                }]; l < o; l++)
                if (n = s.relative[e[l].type]) u = [ye(be(u), n)];
                else {
                    if ((n = s.filter[e[l].type].apply(null, e[l].matches))[T]) {
                        for (i = ++l; i < o && !s.relative[e[i].type]; i++);
                        return function e(t, n, i, o, r, s) {
                            return o && !o[T] && (o = e(o)), r && !r[T] && (r = e(r, s)), ce(function(e, s, a, l) {
                                var c, d, u, p = [],
                                    f = [],
                                    h = s.length,
                                    g = e || function(e, t, n) {
                                        for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
                                        return n
                                    }(n || "*", a.nodeType ? [a] : a, []),
                                    v = !t || !e && n ? g : we(g, p, t, a, l),
                                    m = i ? r || (e ? t : h || o) ? [] : s : v;
                                if (i && i(v, m, a, l), o)
                                    for (c = we(m, f), o(c, [], a, l), d = c.length; d--;)(u = c[d]) && (m[f[d]] = !(v[f[d]] = u));
                                if (e) {
                                    if (r || t) {
                                        if (r) {
                                            for (c = [], d = m.length; d--;)(u = m[d]) && c.push(v[d] = u);
                                            r(null, m = [], c, l)
                                        }
                                        for (d = m.length; d--;)(u = m[d]) && -1 < (c = r ? M(e, u) : p[d]) && (e[c] = !(s[c] = u))
                                    }
                                } else m = we(m === s ? m.splice(h, m.length) : m), r ? r(null, s, m, l) : P.apply(s, m)
                            })
                        }(1 < l && be(u), 1 < l && me(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(U, "$1"), n, l < i && xe(e.slice(l, i)), i < o && xe(e = e.slice(i)), i < o && me(e))
                    }
                    u.push(n)
                } return be(u)
        }
        return ve.prototype = s.filters = s.pseudos, s.setFilters = new ve, c = ae.tokenize = function(e, t) {
            var n, i, o, r, a, l, c, d = E[e + " "];
            if (d) return t ? 0 : d.slice(0);
            for (a = e, l = [], c = s.preFilter; a;) {
                for (r in n && !(i = X.exec(a)) || (i && (a = a.slice(i[0].length) || a), l.push(o = [])), n = !1, (i = Y.exec(a)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(U, " ")
                    }), a = a.slice(n.length)), s.filter) !(i = K[r].exec(a)) || c[r] && !(i = c[r](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: r,
                    matches: i
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? ae.error(e) : E(e, l).slice(0)
        }, d = ae.compile = function(e, t) {
            var n, i, o, r, a, l, d = [],
                u = [],
                f = j[e + " "];
            if (!f) {
                for (n = (t = t || c(e)).length; n--;)((f = xe(t[n]))[T] ? d : u).push(f);
                (f = j(e, (r = 0 < (o = d).length, a = 0 < (i = u).length, l = function(e, t, n, l, c) {
                    var d, u, f, h = 0,
                        m = "0",
                        b = e && [],
                        w = [],
                        x = p,
                        k = e || a && s.find.TAG("*", c),
                        T = C += null == x ? 1 : Math.random() || .1,
                        S = k.length;
                    for (c && (p = t == v || t || c); m !== S && null != (d = k[m]); m++) {
                        if (a && d) {
                            for (u = 0, t || d.ownerDocument == v || (g(d), n = !y); f = i[u++];)
                                if (f(d, t || v, n)) {
                                    l.push(d);
                                    break
                                } c && (C = T)
                        }
                        r && ((d = !f && d) && h--, e && b.push(d))
                    }
                    if (h += m, r && m !== h) {
                        for (u = 0; f = o[u++];) f(b, w, t, n);
                        if (e) {
                            if (0 < h)
                                for (; m--;) b[m] || w[m] || (w[m] = _.call(l));
                            w = we(w)
                        }
                        P.apply(l, w), c && !e && 0 < w.length && 1 < h + o.length && ae.uniqueSort(l)
                    }
                    return c && (C = T, p = x), b
                }, r ? ce(l) : l))).selector = e
            }
            return f
        }, u = ae.select = function(e, n, i, o) {
            var r, a, l, u, p, f = "function" == typeof e && e,
                h = !o && c(e = f.selector || e);
            if (i = i || [], 1 === h.length) {
                if (2 < (a = h[0] = h[0].slice(0)).length && "ID" === (l = a[0]).type && 9 === n.nodeType && y && s.relative[a[1].type]) {
                    if (!(n = (s.find.ID(l.matches[0].replace(oe, t), n) || [])[0])) return i;
                    f && (n = n.parentNode), e = e.slice(a.shift().value.length)
                }
                for (r = K.needsContext.test(e) ? 0 : a.length; r-- && (l = a[r], !s.relative[u = l.type]);)
                    if ((p = s.find[u]) && (o = p(l.matches[0].replace(oe, t), ie.test(a[0].type) && ge(n.parentNode) || n))) {
                        if (a.splice(r, 1), !(e = o.length && me(a))) return P.apply(i, o), i;
                        break
                    }
            }
            return (f || d(e, h))(o, n, !y, i, !n || ie.test(e) && ge(n.parentNode) || n), i
        }, r.sortStable = T.split("").sort(L).join("") === T, r.detectDuplicates = !!h, g(), r.sortDetached = de(function(e) {
            return 1 & e.compareDocumentPosition(v.createElement("fieldset"))
        }), de(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ue("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), r.attributes && de(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ue("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), de(function(e) {
            return null == e.getAttribute("disabled")
        }) || ue(I, function(e, t, n) {
            if (!n) return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null
        }), ae
    }(e);

    function S(e, t, n) {
        for (var i = [], o = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (o && x(e).is(n)) break;
                i.push(e)
            } return i
    }

    function C(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    x.find = T, x.expr = T.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = T.uniqueSort, x.text = T.getText, x.isXMLDoc = T.isXML, x.contains = T.contains, x.escapeSelector = T.escape;
    var $ = x.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, t, i) {
        return n(t) ? x.grep(e, function(e, n) {
            return !!t.call(e, n, e) !== i
        }) : t.nodeType ? x.grep(e, function(e) {
            return e === t !== i
        }) : "string" != typeof t ? x.grep(e, function(e) {
            return -1 < c.call(t, e) !== i
        }) : x.filter(t, e, i)
    }
    x.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? x.find.matchesSelector(i, e) ? [i] : [] : x.find.matches(e, x.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, x.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(x(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (x.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) x.find(e, o[t], n);
            return 1 < i ? x.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && $.test(e) ? x(e) : e || [], !1).length
        }
    });
    var D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (x.fn.init = function(e, t, i) {
        if (!e) return this;
        if (i = i || L, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : n(e) ? void 0 !== i.ready ? i.ready(e) : e(x) : x.makeArray(e, this);
        if (!(o = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : D.exec(e)) || !o[1] && t) return (!t || t.jquery ? t || i : this.constructor(t)).find(e);
        if (o[1]) {
            if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : v, !0)), E.test(o[1]) && x.isPlainObject(t))
                for (var o in t) n(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
            return this
        }
        return (e = v.getElementById(o[2])) && (this[0] = e, this.length = 1), this
    }).prototype = x.fn;
    var L = x(v),
        O = /^(?:parents|prev(?:Until|All))/,
        N = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function _(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    x.fn.extend({
        has: function(e) {
            var t = x(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (x.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                o = this.length,
                r = [],
                s = "string" != typeof e && x(e);
            if (!$.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        } return this.pushStack(1 < r.length ? x.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? c.call(x(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), x.each({
        parent: function(e) {
            return (e = e.parentNode) && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return S(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return S(e, "parentNode", n)
        },
        next: function(e) {
            return _(e, "nextSibling")
        },
        prev: function(e) {
            return _(e, "previousSibling")
        },
        nextAll: function(e) {
            return S(e, "nextSibling")
        },
        prevAll: function(e) {
            return S(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return S(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return S(e, "previousSibling", n)
        },
        siblings: function(e) {
            return C((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return C(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), x.merge([], e.childNodes))
        }
    }, function(e, t) {
        x.fn[e] = function(n, i) {
            var o = x.map(this, t, n);
            return (i = "Until" !== e.slice(-5) ? n : i) && "string" == typeof i && (o = x.filter(i, o)), 1 < this.length && (N[e] || x.uniqueSort(o), O.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var H = /[^\x20\t\r\n\f]+/g;

    function P(e) {
        return e
    }

    function q(e) {
        throw e
    }

    function M(e, t, i, o) {
        var r;
        try {
            e && n(r = e.promise) ? r.call(e).done(t).fail(i) : e && n(r = e.then) ? r.call(e, t, i) : t.apply(void 0, [e].slice(o))
        } catch (e) {
            i.apply(void 0, [e])
        }
    }
    x.Callbacks = function(e) {
        var t, i;

        function o() {
            for (l = l || e.once, a = r = !0; d.length; u = -1)
                for (s = d.shift(); ++u < c.length;) !1 === c[u].apply(s[0], s[1]) && e.stopOnFalse && (u = c.length, s = !1);
            e.memory || (s = !1), r = !1, l && (c = s ? [] : "")
        }
        e = "string" == typeof e ? (t = e, i = {}, x.each(t.match(H) || [], function(e, t) {
            i[t] = !0
        }), i) : x.extend({}, e);
        var r, s, a, l, c = [],
            d = [],
            u = -1,
            p = {
                add: function() {
                    return c && (s && !r && (u = c.length - 1, d.push(s)), function t(i) {
                        x.each(i, function(i, o) {
                            n(o) ? e.unique && p.has(o) || c.push(o) : o && o.length && "string" !== b(o) && t(o)
                        })
                    }(arguments), s && !r && o()), this
                },
                remove: function() {
                    return x.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = x.inArray(t, c, n));) c.splice(n, 1), n <= u && u--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < x.inArray(e, c) : 0 < c.length
                },
                empty: function() {
                    return c = c && [], this
                },
                disable: function() {
                    return l = d = [], c = s = "", this
                },
                disabled: function() {
                    return !c
                },
                lock: function() {
                    return l = d = [], s || r || (c = s = ""), this
                },
                locked: function() {
                    return !!l
                },
                fireWith: function(e, t) {
                    return l || (t = [e, (t = t || []).slice ? t.slice() : t], d.push(t), r || o()), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!a
                }
            };
        return p
    }, x.extend({
        Deferred: function(t) {
            var i = [
                    ["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2],
                    ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]
                ],
                o = "pending",
                r = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return r.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return x.Deferred(function(t) {
                            x.each(i, function(i, o) {
                                var r = n(e[o[4]]) && e[o[4]];
                                s[o[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && n(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[o[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, o, r) {
                        var s = 0;

                        function a(t, i, o, r) {
                            return function() {
                                function l() {
                                    var e, l;
                                    if (!(t < s)) {
                                        if ((e = o.apply(c, d)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                        n(l = e && ("object" == _typeof(e) || "function" == typeof e) && e.then) ? r ? l.call(e, a(s, i, P, r), a(s, i, q, r)) : (s++, l.call(e, a(s, i, P, r), a(s, i, q, r), a(s, i, P, i.notifyWith))) : (o !== P && (c = void 0, d = [e]), (r || i.resolveWith)(c, d))
                                    }
                                }
                                var c = this,
                                    d = arguments,
                                    u = r ? l : function() {
                                        try {
                                            l()
                                        } catch (e) {
                                            x.Deferred.exceptionHook && x.Deferred.exceptionHook(e, u.stackTrace), s <= t + 1 && (o !== q && (c = void 0, d = [e]), i.rejectWith(c, d))
                                        }
                                    };
                                t ? u() : (x.Deferred.getStackHook && (u.stackTrace = x.Deferred.getStackHook()), e.setTimeout(u))
                            }
                        }
                        return x.Deferred(function(e) {
                            i[0][3].add(a(0, e, n(r) ? r : P, e.notifyWith)), i[1][3].add(a(0, e, n(t) ? t : P)), i[2][3].add(a(0, e, n(o) ? o : q))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? x.extend(e, r) : r
                    }
                },
                s = {};
            return x.each(i, function(e, t) {
                var n = t[2],
                    a = t[5];
                r[t[1]] = n.add, a && n.add(function() {
                    o = a
                }, i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), r.promise(s), t && t.call(s, s), s
        },
        when: function(e) {
            function t(e) {
                return function(t) {
                    r[e] = this, a[e] = 1 < arguments.length ? s.call(arguments) : t, --i || l.resolveWith(r, a)
                }
            }
            var i = arguments.length,
                o = i,
                r = Array(o),
                a = s.call(arguments),
                l = x.Deferred();
            if (i <= 1 && (M(e, l.done(t(o)).resolve, l.reject, !i), "pending" === l.state() || n(a[o] && a[o].then))) return l.then();
            for (; o--;) M(a[o], t(o), l.reject);
            return l.promise()
        }
    });
    var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    x.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && I.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, x.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var R = x.Deferred();

    function z() {
        v.removeEventListener("DOMContentLoaded", z), e.removeEventListener("load", z), x.ready()
    }

    function F(e, t, i, o, r, s, a) {
        var l = 0,
            c = e.length,
            d = null == i;
        if ("object" === b(i))
            for (l in r = !0, i) F(e, t, l, i[l], !0, s, a);
        else if (void 0 !== o && (r = !0, n(o) || (a = !0), t = d ? a ? (t.call(e, o), null) : (d = t, function(e, t, n) {
                return d.call(x(e), n)
            }) : t))
            for (; l < c; l++) t(e[l], i, a ? o : o.call(e[l], l, t(e[l], i)));
        return r ? e : d ? t.call(e) : c ? t(e[0], i) : s
    }
    x.fn.ready = function(e) {
        return R.then(e).catch(function(e) {
            x.readyException(e)
        }), this
    }, x.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0) !== e && 0 < --x.readyWait || R.resolveWith(v, [x])
        }
    }), x.ready.then = R.then, "complete" === v.readyState || "loading" !== v.readyState && !v.documentElement.doScroll ? e.setTimeout(x.ready) : (v.addEventListener("DOMContentLoaded", z), e.addEventListener("load", z));
    var W = /^-ms-/,
        B = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(W, "ms-").replace(B, U)
    }

    function Y(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }

    function V() {
        this.expando = x.expando + V.uid++
    }
    V.uid = 1, V.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[X(t)] = n;
            else
                for (i in t) o[X(i)] = t[i];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in i ? [t] : t.match(H) || []).length;
                    for (; n--;) delete i[t[n]]
                }
                void 0 !== t && !x.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            return void 0 !== (e = e[this.expando]) && !x.isEmptyObject(e)
        }
    };
    var G = new V,
        J = new V,
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Q = /[A-Z]/g;

    function Z(e, t, n) {
        var i, o;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Q, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : K.test(o) ? JSON.parse(o) : o)
                } catch (e) {}
                J.set(e, t, n)
            } else n = void 0;
        return n
    }
    x.extend({
        hasData: function(e) {
            return J.hasData(e) || G.hasData(e)
        },
        data: function(e, t, n) {
            return J.access(e, t, n)
        },
        removeData: function(e, t) {
            J.remove(e, t)
        },
        _data: function(e, t, n) {
            return G.access(e, t, n)
        },
        _removeData: function(e, t) {
            G.remove(e, t)
        }
    }), x.fn.extend({
        data: function(e, t) {
            var n, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 !== e) return "object" == _typeof(e) ? this.each(function() {
                J.set(this, e)
            }) : F(this, function(t) {
                var n;
                return r && void 0 === t ? void 0 !== (n = J.get(r, e)) || void 0 !== (n = Z(r, e)) ? n : void 0 : void this.each(function() {
                    J.set(this, e, t)
                })
            }, null, t, 1 < arguments.length, null, !0);
            if (this.length && (o = J.get(r), 1 === r.nodeType && !G.get(r, "hasDataAttrs"))) {
                for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = X(i.slice(5)), Z(r, i, o[i]));
                G.set(r, "hasDataAttrs", !0)
            }
            return o
        },
        removeData: function(e) {
            return this.each(function() {
                J.remove(this, e)
            })
        }
    }), x.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return i = G.get(e, t = (t || "fx") + "queue"), n && (!i || Array.isArray(n) ? i = G.access(e, t, x.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = x._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function() {
                x.dequeue(e, t)
            }, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return G.get(e, n) || G.access(e, n, {
                empty: x.Callbacks("once memory").add(function() {
                    G.remove(e, [t + "queue", n])
                })
            })
        }
    }), x.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? x.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = x.queue(this, e, t);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                x.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --o || r.resolveWith(s, [s])
            }
            var i, o = 1,
                r = x.Deferred(),
                s = this,
                a = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(i = G.get(s[a], e + "queueHooks")) && i.empty && (o++, i.empty.add(n));
            return n(), r.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        ie = v.documentElement,
        oe = function(e) {
            return x.contains(e.ownerDocument, e)
        },
        re = {
            composed: !0
        };

    function se(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === x.css(e, "display")
    }

    function ae(e, t, n, i) {
        var o, r, s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return x.css(e, t, "")
            },
            l = a(),
            c = n && n[3] || (x.cssNumber[t] ? "" : "px"),
            d = e.nodeType && (x.cssNumber[t] || "px" !== c && +l) && te.exec(x.css(e, t));
        if (d && d[3] !== c) {
            for (c = c || d[3], d = +(l /= 2) || 1; s--;) x.style(e, t, d + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), d /= r;
            x.style(e, t, (d *= 2) + c), n = n || []
        }
        return n && (d = +d || +l || 0, o = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = d, i.end = o)), o
    }
    ie.getRootNode && (oe = function(e) {
        return x.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument
    });
    var le = {};

    function ce(e, t) {
        for (var n, i, o, r, s, a, l = [], c = 0, d = e.length; c < d; c++)(i = e[c]).style && (n = i.style.display, t ? ("none" === n && (l[c] = G.get(i, "display") || null, l[c] || (i.style.display = "")), "" === i.style.display && se(i) && (l[c] = (a = r = o = void 0, r = i.ownerDocument, s = i.nodeName, (a = le[s]) || (o = r.body.appendChild(r.createElement(s)), a = x.css(o, "display"), o.parentNode.removeChild(o), le[s] = a = "none" === a ? "block" : a)))) : "none" !== n && (l[c] = "none", G.set(i, "display", n)));
        for (c = 0; c < d; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    x.fn.extend({
        show: function() {
            return ce(this, !0)
        },
        hide: function() {
            return ce(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                se(this) ? x(this).show() : x(this).hide()
            })
        }
    });
    var de = /^(?:checkbox|radio)$/i,
        ue = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i;
    w = v.createDocumentFragment().appendChild(v.createElement("div"));
    (T = v.createElement("input")).setAttribute("type", "radio"), T.setAttribute("checked", "checked"), T.setAttribute("name", "t"), w.appendChild(T), g.checkClone = w.cloneNode(!0).cloneNode(!0).lastChild.checked, w.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!w.cloneNode(!0).lastChild.defaultValue, w.innerHTML = "<option></option>", g.option = !!w.lastChild;
    var fe = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function he(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && A(e, t) ? x.merge([e], n) : n
    }

    function ge(e, t) {
        for (var n = 0, i = e.length; n < i; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"))
    }
    fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead, fe.th = fe.td, g.option || (fe.optgroup = fe.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ve = /<|&#?\w+;/;

    function me(e, t, n, i, o) {
        for (var r, s, a, l, c, d = t.createDocumentFragment(), u = [], p = 0, f = e.length; p < f; p++)
            if ((r = e[p]) || 0 === r)
                if ("object" === b(r)) x.merge(u, r.nodeType ? [r] : r);
                else if (ve.test(r)) {
            for (s = s || d.appendChild(t.createElement("div")), a = (ue.exec(r) || ["", ""])[1].toLowerCase(), a = fe[a] || fe._default, s.innerHTML = a[1] + x.htmlPrefilter(r) + a[2], c = a[0]; c--;) s = s.lastChild;
            x.merge(u, s.childNodes), (s = d.firstChild).textContent = ""
        } else u.push(t.createTextNode(r));
        for (d.textContent = "", p = 0; r = u[p++];)
            if (i && -1 < x.inArray(r, i)) o && o.push(r);
            else if (l = oe(r), s = he(d.appendChild(r), "script"), l && ge(s), n)
            for (c = 0; r = s[c++];) pe.test(r.type || "") && n.push(r);
        return d
    }
    var ye = /^([^.]*)(?:\.(.+)|)/;

    function be() {
        return !0
    }

    function we() {
        return !1
    }

    function xe(e, t) {
        return e === function() {
            try {
                return v.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function ke(e, t, n, i, o, r) {
        var s, a;
        if ("object" == _typeof(t)) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) ke(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = we;
        else if (!o) return e;
        return 1 === r && (s = o, (o = function(e) {
            return x().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = x.guid++)), e.each(function() {
            x.event.add(this, t, o, i, n)
        })
    }

    function Te(e, t, n) {
        n ? (G.set(e, t, !1), x.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var i, o, r = G.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (r.length)(x.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), G.set(this, t, r), i = n(this, t), this[t](), r !== (o = G.get(this, t)) || i ? G.set(this, t, !1) : o = {}, r !== o) return e.stopImmediatePropagation(), e.preventDefault(), o && o.value
                } else r.length && (G.set(this, t, {
                    value: x.event.trigger(x.extend(r[0], x.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === G.get(e, t) && x.event.add(e, t, be)
    }
    x.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var r, s, a, l, c, d, u, p, f, h = G.get(e);
            if (Y(e))
                for (n.handler && (n = (r = n).handler, o = r.selector), o && x.find.matchesSelector(ie, o), n.guid || (n.guid = x.guid++), (a = h.events) || (a = h.events = Object.create(null)), (s = h.handle) || (s = h.handle = function(t) {
                        return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0
                    }), l = (t = (t || "").match(H) || [""]).length; l--;) u = f = (c = ye.exec(t[l]) || [])[1], p = (c[2] || "").split(".").sort(), u && (d = x.event.special[u] || {}, u = (o ? d.delegateType : d.bindType) || u, d = x.event.special[u] || {}, c = x.extend({
                    type: u,
                    origType: f,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && x.expr.match.needsContext.test(o),
                    namespace: p.join(".")
                }, r), (f = a[u]) || ((f = a[u] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(u, s)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, c) : f.push(c), x.event.global[u] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, l, c, d, u, p, f, h, g, v = G.hasData(e) && G.get(e);
            if (v && (l = v.events)) {
                for (c = (t = (t || "").match(H) || [""]).length; c--;)
                    if (f = g = (a = ye.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
                        for (u = x.event.special[f] || {}, p = l[f = (i ? u.delegateType : u.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) d = p[r], !o && g !== d.origType || n && n.guid !== d.guid || a && !a.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (p.splice(r, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
                        s && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, v.handle) || x.removeEvent(e, f, v.handle), delete l[f])
                    } else
                        for (f in l) x.event.remove(e, f + t[c], n, i, !0);
                x.isEmptyObject(l) && G.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, o, r, s = new Array(arguments.length),
                a = x.event.fix(e),
                l = (G.get(this, "events") || Object.create(null))[a.type] || [];
            e = x.event.special[a.type] || {};
            for (s[0] = a, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (a.delegateTarget = this, !e.preDispatch || !1 !== e.preDispatch.call(this, a)) {
                for (r = x.event.handlers.call(this, a, l), t = 0;
                    (i = r[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (o = ((x.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (a.result = o) && (a.preventDefault(), a.stopPropagation()));
                return e.postDispatch && e.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s, a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? -1 < x(o, this).index(c) : x.find(o, this, null, [c]).length), s[o] && r.push(i);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    } return c = this, l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(e, t) {
            Object.defineProperty(x.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: n(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[x.expando] ? e : new x.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    return e = this || e, de.test(e.type) && e.click && A(e, "input") && Te(e, "click", be), !1
                },
                trigger: function(e) {
                    return e = this || e, de.test(e.type) && e.click && A(e, "input") && Te(e, "click"), !0
                },
                _default: function(e) {
                    return e = e.target, de.test(e.type) && e.click && A(e, "input") && G.get(e, "click") || A(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, x.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, x.Event = function(e, t) {
        if (!(this instanceof x.Event)) return new x.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? be : we, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[x.expando] = !0
    }, x.Event.prototype = {
        constructor: x.Event,
        isDefaultPrevented: we,
        isPropagationStopped: we,
        isImmediatePropagationStopped: we,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = be, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = be, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = be, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, x.each({
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
        which: !0
    }, x.event.addProp), x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        x.event.special[e] = {
            setup: function() {
                return Te(this, e, xe), !1
            },
            trigger: function() {
                return Te(this, e), !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }), x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === this || x.contains(this, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), x.fn.extend({
        on: function(e, t, n, i) {
            return ke(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return ke(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != _typeof(e)) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = we), this.each(function() {
                x.event.remove(this, e, n, t)
            });
            for (o in e) this.off(o, t, e[o]);
            return this
        }
    });
    var Se = /<script|<style|<link/i,
        Ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
        $e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ae(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0] || e
    }

    function Ee(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function je(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function De(e, t) {
        var n, i, o, r;
        if (1 === t.nodeType) {
            if (G.hasData(e) && (r = G.get(e).events))
                for (o in G.remove(t, "handle events"), r)
                    for (n = 0, i = r[o].length; n < i; n++) x.event.add(t, o, r[o][n]);
            J.hasData(e) && (e = J.access(e), e = x.extend({}, e), J.set(t, e))
        }
    }

    function Le(e, t, i, o) {
        t = a(t);
        var r, s, l, c, d, u, p = 0,
            f = e.length,
            h = f - 1,
            v = t[0],
            m = n(v);
        if (m || 1 < f && "string" == typeof v && !g.checkClone && Ce.test(v)) return e.each(function(n) {
            var r = e.eq(n);
            m && (t[0] = v.call(this, n, r.html())), Le(r, t, i, o)
        });
        if (f && (s = (r = me(t, e[0].ownerDocument, !1, e, o)).firstChild, 1 === r.childNodes.length && (r = s), s || o)) {
            for (c = (l = x.map(he(r, "script"), Ee)).length; p < f; p++) d = r, p !== h && (d = x.clone(d, !0, !0), c && x.merge(l, he(d, "script"))), i.call(e[p], d, p);
            if (c)
                for (u = l[l.length - 1].ownerDocument, x.map(l, je), p = 0; p < c; p++) d = l[p], pe.test(d.type || "") && !G.access(d, "globalEval") && x.contains(u, d) && (d.src && "module" !== (d.type || "").toLowerCase() ? x._evalUrl && !d.noModule && x._evalUrl(d.src, {
                    nonce: d.nonce || d.getAttribute("nonce")
                }, u) : y(d.textContent.replace($e, ""), d, u))
        }
        return e
    }

    function Oe(e, t, n) {
        for (var i, o = t ? x.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || x.cleanData(he(i)), i.parentNode && (n && oe(i) && ge(he(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function Ne(t) {
        var n = t.ownerDocument.defaultView;
        return (n = n && n.opener ? n : e).getComputedStyle(t)
    }

    function _e(e, t, n) {
        var i, o = {};
        for (i in t) o[i] = e.style[i], e.style[i] = t[i];
        for (i in n = n.call(e), t) e.style[i] = o[i];
        return n
    }
    x.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var i, o, r, s, a, l, c, d = e.cloneNode(!0),
                u = oe(e);
            if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (s = he(d), i = 0, o = (r = he(e)).length; i < o; i++) a = r[i], "input" === (c = (l = s[i]).nodeName.toLowerCase()) && de.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (r = r || he(e), s = s || he(d), i = 0, o = r.length; i < o; i++) De(r[i], s[i]);
                else De(e, d);
            return 0 < (s = he(d, "script")).length && ge(s, !u && he(e, "script")), d
        },
        cleanData: function(e) {
            for (var t, n, i, o = x.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (Y(n)) {
                    if (t = n[G.expando]) {
                        if (t.events)
                            for (i in t.events) o[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
                        n[G.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
        }
    }), x.fn.extend({
        detach: function(e) {
            return Oe(this, e, !0)
        },
        remove: function(e) {
            return Oe(this, e)
        },
        text: function(e) {
            return F(this, function(e) {
                return void 0 === e ? x.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Le(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ae(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Le(this, arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Ae(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() {
            return Le(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Le(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(he(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return x.clone(this, e, t)
            })
        },
        html: function(e) {
            return F(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Se.test(e) && !fe[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = x.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (x.cleanData(he(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Le(this, arguments, function(t) {
                var n = this.parentNode;
                x.inArray(this, e) < 0 && (x.cleanData(he(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        x.fn[e] = function(e) {
            for (var n, i = [], o = x(e), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), x(o[s])[t](n), l.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var He, Pe, qe, Me, Ie, Re, ze, Fe, We = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Be = new RegExp(ne.join("|"), "i");

    function Ue(e, t, n) {
        var i, o, r = e.style;
        return (n = n || Ne(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || oe(e) || (o = x.style(e, t)), !g.pixelBoxStyles() && We.test(o) && Be.test(t) && (i = r.width, e = r.minWidth, t = r.maxWidth, r.minWidth = r.maxWidth = r.width = o, o = n.width, r.width = i, r.minWidth = e, r.maxWidth = t)), void 0 !== o ? o + "" : o
    }

    function Xe(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function Ye() {
        var t;
        Fe && (ze.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Fe.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(ze).appendChild(Fe), t = e.getComputedStyle(Fe), He = "1%" !== t.top, Re = 12 === Ve(t.marginLeft), Fe.style.right = "60%", Me = 36 === Ve(t.right), Pe = 36 === Ve(t.width), Fe.style.position = "absolute", qe = 12 === Ve(Fe.offsetWidth / 3), ie.removeChild(ze), Fe = null)
    }

    function Ve(e) {
        return Math.round(parseFloat(e))
    }
    ze = v.createElement("div"), (Fe = v.createElement("div")).style && (Fe.style.backgroundClip = "content-box", Fe.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === Fe.style.backgroundClip, x.extend(g, {
        boxSizingReliable: function() {
            return Ye(), Pe
        },
        pixelBoxStyles: function() {
            return Ye(), Me
        },
        pixelPosition: function() {
            return Ye(), He
        },
        reliableMarginLeft: function() {
            return Ye(), Re
        },
        scrollboxSize: function() {
            return Ye(), qe
        },
        reliableTrDimensions: function() {
            var t, n, i;
            return null == Ie && (t = v.createElement("table"), n = v.createElement("tr"), i = v.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", n.style.height = "1px", i.style.height = "9px", i.style.display = "block", ie.appendChild(t).appendChild(n).appendChild(i), i = e.getComputedStyle(n), Ie = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === n.offsetHeight, ie.removeChild(t)), Ie
        }
    }));
    var Ge = ["Webkit", "Moz", "ms"],
        Je = v.createElement("div").style,
        Ke = {};

    function Qe(e) {
        return x.cssProps[e] || Ke[e] || (e in Je ? e : Ke[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--;)
                if ((e = Ge[n] + t) in Je) return e
        }(e) || e)
    }
    var Ze = /^(none|table(?!-c[ea]).+)/,
        et = /^--/,
        tt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        nt = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function it(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function ot(e, t, n, i, o, r) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += x.css(e, n + ne[s], !0, o)), i ? ("content" === n && (l -= x.css(e, "padding" + ne[s], !0, o)), "margin" !== n && (l -= x.css(e, "border" + ne[s] + "Width", !0, o))) : (l += x.css(e, "padding" + ne[s], !0, o), "padding" !== n ? l += x.css(e, "border" + ne[s] + "Width", !0, o) : a += x.css(e, "border" + ne[s] + "Width", !0, o));
        return !i && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0), l
    }

    function rt(e, t, n) {
        var i = Ne(e),
            o = (!g.boxSizingReliable() || n) && "border-box" === x.css(e, "boxSizing", !1, i),
            r = o,
            s = Ue(e, t, i),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (We.test(s)) {
            if (!n) return s;
            s = "auto"
        }
        return (!g.boxSizingReliable() && o || !g.reliableTrDimensions() && A(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === x.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === x.css(e, "boxSizing", !1, i), (r = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + ot(e, t, n || (o ? "border" : "content"), r, i, s) + "px"
    }

    function st(e, t, n, i, o) {
        return new st.prototype.init(e, t, n, i, o)
    }
    x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) return "" === (e = Ue(e, "opacity")) ? "1" : e
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
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = X(t),
                    l = et.test(t),
                    c = e.style;
                if (l || (t = Qe(a)), s = x.cssHooks[t] || x.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                "string" === (r = _typeof(n)) && (o = te.exec(n)) && o[1] && (n = ae(e, t, o), r = "number"), null != n && n == n && ("number" !== r || l || (n += o && o[3] || (x.cssNumber[a] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var o, r = X(t);
            return et.test(t) || (t = Qe(r)), "normal" === (o = void 0 === (o = (r = x.cssHooks[t] || x.cssHooks[r]) && "get" in r ? r.get(e, !0, n) : o) ? Ue(e, t, i) : o) && t in nt && (o = nt[t]), "" === n || n ? (t = parseFloat(o), !0 === n || isFinite(t) ? t || 0 : o) : o
        }
    }), x.each(["height", "width"], function(e, t) {
        x.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return !Ze.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? rt(e, t, i) : _e(e, tt, function() {
                    return rt(e, t, i)
                })
            },
            set: function(e, n, i) {
                var o, r = Ne(e),
                    s = !g.scrollboxSize() && "absolute" === r.position,
                    a = (s || i) && "border-box" === x.css(e, "boxSizing", !1, r);
                i = i ? ot(e, t, i, a, r) : 0;
                return a && s && (i -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - ot(e, t, "border", !1, r) - .5)), i && (o = te.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = x.css(e, t)), it(0, n, i)
            }
        }
    }), x.cssHooks.marginLeft = Xe(g.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Ue(e, "marginLeft")) || e.getBoundingClientRect().left - _e(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + ne[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, "margin" !== e && (x.cssHooks[e + t].set = it)
    }), x.fn.extend({
        css: function(e, t) {
            return F(this, function(e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = Ne(e), o = t.length; s < o; s++) r[t[s]] = x.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? x.style(e, t, n) : x.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((x.Tween = st).prototype = {
        constructor: st,
        init: function(e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || x.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = st.propHooks[this.prop];
            return (e && e.get ? e : st.propHooks._default).get(this)
        },
        run: function(e) {
            var t, n = st.propHooks[this.prop];
            return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : st.propHooks._default).set(this), this
        }
    }).init.prototype = st.prototype, (st.propHooks = {
        _default: {
            get: function(e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = x.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !x.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = st.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, x.fx = st.prototype.init, x.fx.step = {};
    var at, lt, ct = /^(?:toggle|show|hide)$/,
        dt = /queueHooks$/;

    function ut() {
        lt && (!1 === v.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ut) : e.setTimeout(ut, x.fx.interval), x.fx.tick())
    }

    function pt() {
        return e.setTimeout(function() {
            at = void 0
        }), at = Date.now()
    }

    function ft(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = ne[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function ht(e, t, n) {
        for (var i, o = (gt.tweeners[t] || []).concat(gt.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function gt(e, t, i) {
        var o, r, s = 0,
            a = gt.prefilters.length,
            l = x.Deferred().always(function() {
                delete c.elem
            }),
            c = function() {
                if (r) return !1;
                for (var t = at || pt(), n = 1 - ((t = Math.max(0, d.startTime + d.duration - t)) / d.duration || 0), i = 0, o = d.tweens.length; i < o; i++) d.tweens[i].run(n);
                return l.notifyWith(e, [d, n, t]), n < 1 && o ? t : (o || l.notifyWith(e, [d, 1, 0]), l.resolveWith(e, [d]), !1)
            },
            d = l.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, {
                    specialEasing: {},
                    easing: x.easing._default
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: at || pt(),
                duration: i.duration,
                tweens: [],
                createTween: function(t, n) {
                    return t = x.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing), d.tweens.push(t), t
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? d.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) d.tweens[n].run(1);
                    return t ? (l.notifyWith(e, [d, 1, 0]), l.resolveWith(e, [d, t])) : l.rejectWith(e, [d, t]), this
                }
            }),
            u = d.props;
        for (function(e, t) {
                var n, i, o, r, s;
                for (n in e)
                    if (o = t[i = X(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = x.cssHooks[i]) && "expand" in s)
                        for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
                    else t[i] = o
            }(u, d.opts.specialEasing); s < a; s++)
            if (o = gt.prefilters[s].call(d, e, u, d.opts)) return n(o.stop) && (x._queueHooks(d.elem, d.opts.queue).stop = o.stop.bind(o)), o;
        return x.map(u, ht, d), n(d.opts.start) && d.opts.start.call(e, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), x.fx.timer(x.extend(c, {
            elem: e,
            anim: d,
            queue: d.opts.queue
        })), d
    }
    x.Animation = x.extend(gt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ae(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            for (var i, o = 0, r = (e = n(e) ? (t = e, ["*"]) : e.match(H)).length; o < r; o++) i = e[o], gt.tweeners[i] = gt.tweeners[i] || [], gt.tweeners[i].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, o, r, s, a, l, c, d = "width" in t || "height" in t,
                u = this,
                p = {},
                f = e.style,
                h = e.nodeType && se(e),
                g = G.get(e, "fxshow");
            for (i in n.queue || (null == (s = x._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || a()
                }), s.unqueued++, u.always(function() {
                    u.always(function() {
                        s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
                    })
                })), t)
                if (o = t[i], ct.test(o)) {
                    if (delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                        if ("show" !== o || !g || void 0 === g[i]) continue;
                        h = !0
                    }
                    p[i] = g && g[i] || x.style(e, i)
                } if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(p))
                for (i in d && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = g && g.display) && (c = G.get(e, "display")), "none" === (d = x.css(e, "display")) && (c ? d = c : (ce([e], !0), c = e.style.display || c, d = x.css(e, "display"), ce([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === x.css(e, "float") && (l || (u.done(function() {
                        f.display = c
                    }), null == c && (d = f.display, c = "none" === d ? "" : d)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", u.always(function() {
                        f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                    })), l = !1, p) l || (g ? "hidden" in g && (h = g.hidden) : g = G.access(e, "fxshow", {
                    display: c
                }), r && (g.hidden = !h), h && ce([e], !0), u.done(function() {
                    for (i in h || ce([e]), G.remove(e, "fxshow"), p) x.style(e, i, p[i])
                })), l = ht(h ? g[i] : 0, i, u), i in g || (g[i] = l.start, h && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? gt.prefilters.unshift(e) : gt.prefilters.push(e)
        }
    }), x.speed = function(e, t, i) {
        var o = e && "object" == _typeof(e) ? x.extend({}, e) : {
            complete: i || !i && t || n(e) && e,
            duration: e,
            easing: i && t || t && !n(t) && t
        };
        return x.fx.off ? o.duration = 0 : "number" != typeof o.duration && (o.duration in x.fx.speeds ? o.duration = x.fx.speeds[o.duration] : o.duration = x.fx.speeds._default), null != o.queue && !0 !== o.queue || (o.queue = "fx"), o.old = o.complete, o.complete = function() {
            n(o.old) && o.old.call(this), o.queue && x.dequeue(this, o.queue)
        }, o
    }, x.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(se).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var o = x.isEmptyObject(e),
                r = x.speed(t, n, i);
            return (i = function() {
                var t = gt(this, x.extend({}, e), r);
                (o || G.get(this, "finish")) && t.stop(!0)
            }).finish = i, o || !1 === r.queue ? this.each(i) : this.queue(r.queue, i)
        },
        stop: function(e, t, n) {
            function i(e) {
                var t = e.stop;
                delete e.stop, t(n)
            }
            return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    o = null != e && e + "queueHooks",
                    r = x.timers,
                    s = G.get(this);
                if (o) s[o] && s[o].stop && i(s[o]);
                else
                    for (o in s) s[o] && s[o].stop && dt.test(o) && i(s[o]);
                for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                !t && n || x.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = G.get(this),
                    i = n[e + "queue"],
                    o = n[e + "queueHooks"],
                    r = x.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, x.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), x.each(["toggle", "show", "hide"], function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ft(t, !0), e, i, o)
        }
    }), x.each({
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        x.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), x.timers = [], x.fx.tick = function() {
        var e, t = 0,
            n = x.timers;
        for (at = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || x.fx.stop(), at = void 0
    }, x.fx.timer = function(e) {
        x.timers.push(e), x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function() {
        lt || (lt = !0, ut())
    }, x.fx.stop = function() {
        lt = null
    }, x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x.fn.delay = function(t, n) {
        return t = x.fx && x.fx.speeds[t] || t, this.queue(n = n || "fx", function(n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(o)
            }
        })
    }, w = v.createElement("input"), ee = v.createElement("select").appendChild(v.createElement("option")), w.type = "checkbox", g.checkOn = "" !== w.value, g.optSelected = ee.selected, (w = v.createElement("input")).value = "t", w.type = "radio", g.radioValue = "t" === w.value;
    var vt, mt = x.expr.attrHandle;
    x.fn.extend({
        attr: function(e, t) {
            return F(this, x.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                x.removeAttr(this, e)
            })
        }
    }), x.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? x.prop(e, t, n) : (1 === r && x.isXMLDoc(e) || (o = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? vt : void 0)), void 0 !== n ? null === n ? void x.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) || null != (i = x.find.attr(e, t)) ? i : void 0)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!g.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                o = t && t.match(H);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) e.removeAttribute(n)
        }
    }), vt = {
        set: function(e, t, n) {
            return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = mt[t] || x.find.attr;
        mt[t] = function(e, t, i) {
            var o, r, s = t.toLowerCase();
            return i || (r = mt[s], mt[s] = o, o = null != n(e, t, i) ? s : null, mt[s] = r), o
        }
    });
    var yt = /^(?:input|select|textarea|button)$/i,
        bt = /^(?:a|area)$/i;

    function wt(e) {
        return (e.match(H) || []).join(" ")
    }

    function xt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function kt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
    }
    x.fn.extend({
        prop: function(e, t) {
            return F(this, x.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[x.propFix[e] || e]
            })
        }
    }), x.extend({
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && x.isXMLDoc(e) || (t = x.propFix[t] || t, o = x.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : yt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), g.optSelected || (x.propHooks.selected = {
        get: function(e) {
            return (e = e.parentNode) && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(e) {
            (e = e.parentNode) && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        x.propFix[this.toLowerCase()] = this
    }), x.fn.extend({
        addClass: function(e) {
            var t, i, o, r, s, a, l = 0;
            if (n(e)) return this.each(function(t) {
                x(this).addClass(e.call(this, t, xt(this)))
            });
            if ((t = kt(e)).length)
                for (; i = this[l++];)
                    if (a = xt(i), o = 1 === i.nodeType && " " + wt(a) + " ") {
                        for (s = 0; r = t[s++];) o.indexOf(" " + r + " ") < 0 && (o += r + " ");
                        a !== (a = wt(o)) && i.setAttribute("class", a)
                    } return this
        },
        removeClass: function(e) {
            var t, i, o, r, s, a, l = 0;
            if (n(e)) return this.each(function(t) {
                x(this).removeClass(e.call(this, t, xt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = kt(e)).length)
                for (; i = this[l++];)
                    if (a = xt(i), o = 1 === i.nodeType && " " + wt(a) + " ") {
                        for (s = 0; r = t[s++];)
                            for (; - 1 < o.indexOf(" " + r + " ");) o = o.replace(" " + r + " ", " ");
                        a !== (a = wt(o)) && i.setAttribute("class", a)
                    } return this
        },
        toggleClass: function(e, t) {
            var i = _typeof(e),
                o = "string" === i || Array.isArray(e);
            return "boolean" == typeof t && o ? t ? this.addClass(e) : this.removeClass(e) : n(e) ? this.each(function(n) {
                x(this).toggleClass(e.call(this, n, xt(this), t), t)
            }) : this.each(function() {
                var t, n, r, s;
                if (o)
                    for (n = 0, r = x(this), s = kt(e); t = s[n++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== i || ((t = xt(this)) && G.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", !t && !1 !== e && G.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            for (var t, n = 0, i = " " + e + " "; t = this[n++];)
                if (1 === t.nodeType && -1 < (" " + wt(xt(t)) + " ").indexOf(i)) return !0;
            return !1
        }
    });
    var Tt = /\r/g;

    function St(e) {
        e.stopPropagation()
    }
    x.fn.extend({
        val: function(e) {
            var t, i, o, r = this[0];
            return arguments.length ? (o = n(e), this.each(function(n) {
                1 === this.nodeType && (null == (n = o ? e.call(this, n, x(this).val()) : e) ? n = "" : "number" == typeof n ? n += "" : Array.isArray(n) && (n = x.map(n, function(e) {
                    return null == e ? "" : e + ""
                })), (t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, n, "value") || (this.value = n))
            })) : r ? (t = x.valHooks[r.type] || x.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(r, "value")) ? i : "string" == typeof(i = r.value) ? i.replace(Tt, "") : null == i ? "" : i : void 0
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : wt(x.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n = e.options, i = e.selectedIndex, o = "select-one" === e.type, r = o ? null : [], s = o ? i + 1 : n.length, a = i < 0 ? s : o ? i : 0; a < s; a++)
                        if (((t = n[a]).selected || a === i) && !t.disabled && (!t.parentNode.disabled || !A(t.parentNode, "optgroup"))) {
                            if (t = x(t).val(), o) return t;
                            r.push(t)
                        } return r
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = x.makeArray(t), s = o.length; s--;)((i = o[s]).selected = -1 < x.inArray(x.valHooks.option.get(i), r)) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), x.each(["radio", "checkbox"], function() {
        x.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < x.inArray(x(e).val(), t)
            }
        }, g.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), g.focusin = "onfocusin" in e;
    var Ct = /^(?:focusinfocus|focusoutblur)$/;
    x.extend(x.event, {
        trigger: function(t, o, r, s) {
            var a, l, c, d, u, f, h, g = [r || v],
                m = p.call(t, "type") ? t.type : t,
                y = p.call(t, "namespace") ? t.namespace.split(".") : [],
                b = h = l = r = r || v;
            if (3 !== r.nodeType && 8 !== r.nodeType && !Ct.test(m + x.event.triggered) && (-1 < m.indexOf(".") && (m = (y = m.split(".")).shift(), y.sort()), d = m.indexOf(":") < 0 && "on" + m, (t = t[x.expando] ? t : new x.Event(m, "object" == _typeof(t) && t)).isTrigger = s ? 2 : 3, t.namespace = y.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), o = null == o ? [t] : x.makeArray(o, [t]), f = x.event.special[m] || {}, s || !f.trigger || !1 !== f.trigger.apply(r, o))) {
                if (!s && !f.noBubble && !i(r)) {
                    for (c = f.delegateType || m, Ct.test(c + m) || (b = b.parentNode); b; b = b.parentNode) g.push(b), l = b;
                    l === (r.ownerDocument || v) && g.push(l.defaultView || l.parentWindow || e)
                }
                for (a = 0;
                    (b = g[a++]) && !t.isPropagationStopped();) h = b, t.type = 1 < a ? c : f.bindType || m, (u = (G.get(b, "events") || Object.create(null))[t.type] && G.get(b, "handle")) && u.apply(b, o), (u = d && b[d]) && u.apply && Y(b) && (t.result = u.apply(b, o), !1 === t.result && t.preventDefault());
                return t.type = m, s || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(g.pop(), o) || !Y(r) || d && n(r[m]) && !i(r) && ((l = r[d]) && (r[d] = null), x.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, St), r[m](), t.isPropagationStopped() && h.removeEventListener(m, St), x.event.triggered = void 0, l && (r[d] = l)), t.result
            }
        },
        simulate: function(e, t, n) {
            e = x.extend(new x.Event, n, {
                type: e,
                isSimulated: !0
            }), x.event.trigger(e, null, t)
        }
    }), x.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                x.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return x.event.trigger(e, t, n, !0)
        }
    }), g.focusin || x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        function n(e) {
            x.event.simulate(t, e.target, x.event.fix(e))
        }
        x.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this.document || this,
                    o = G.access(i, t);
                o || i.addEventListener(e, n, !0), G.access(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this.document || this,
                    o = G.access(i, t) - 1;
                o ? G.access(i, t, o) : (i.removeEventListener(e, n, !0), G.remove(i, t))
            }
        }
    });
    var $t = e.location,
        At = {
            guid: Date.now()
        },
        Et = /\?/;
    x.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {}
        return i = n && n.getElementsByTagName("parsererror")[0], n && !i || x.error("Invalid XML: " + (i ? x.map(i.childNodes, function(e) {
            return e.textContent
        }).join("\n") : t)), n
    };
    var jt = /\[\]$/,
        Dt = /\r?\n/g,
        Lt = /^(?:submit|button|image|reset|file)$/i,
        Ot = /^(?:input|select|textarea|keygen)/i;
    x.param = function(e, t) {
        function i(e, t) {
            t = n(t) ? t() : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
        }
        var o, r = [];
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (o in e) ! function e(t, n, i, o) {
                if (Array.isArray(n)) x.each(n, function(n, r) {
                    i || jt.test(t) ? o(t, r) : e(t + "[" + ("object" == _typeof(r) && null != r ? n : "") + "]", r, i, o)
                });
                else if (i || "object" !== b(n)) o(t, n);
                else
                    for (var r in n) e(t + "[" + r + "]", n[r], i, o)
            }(o, e[o], t, i);
        return r.join("&")
    }, x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && Ot.test(this.nodeName) && !Lt.test(e) && (this.checked || !de.test(e))
            }).map(function(e, t) {
                var n = x(this).val();
                return null == n ? null : Array.isArray(n) ? x.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    });
    var Nt = /%20/g,
        _t = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        qt = /^(?:GET|HEAD)$/,
        Mt = /^\/\//,
        It = {},
        Rt = {},
        zt = "*/".concat("*"),
        Ft = v.createElement("a");

    function Wt(e) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var o, r = 0,
                s = t.toLowerCase().match(H) || [];
            if (n(i))
                for (; o = s[r++];) "+" === o[0] ? (o = o.slice(1) || "*", (e[o] = e[o] || []).unshift(i)) : (e[o] = e[o] || []).push(i)
        }
    }

    function Bt(e, t, n, i) {
        var o = {},
            r = e === Rt;

        function s(a) {
            var l;
            return o[a] = !0, x.each(e[a] || [], function(e, a) {
                return "string" != typeof(a = a(t, n, i)) || r || o[a] ? r ? !(l = a) : void 0 : (t.dataTypes.unshift(a), s(a), !1)
            }), l
        }
        return s(t.dataTypes[0]) || !o["*"] && s("*")
    }

    function Ut(e, t) {
        var n, i, o = x.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i = i || {})[n] = t[n]);
        return i && x.extend(!0, e, i), e
    }
    Ft.href = $t.href, x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: $t.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test($t.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zt,
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
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ut(Ut(e, x.ajaxSettings), t) : Ut(x.ajaxSettings, e)
        },
        ajaxPrefilter: Wt(It),
        ajaxTransport: Wt(Rt),
        ajax: function(t, n) {
            "object" == _typeof(t) && (n = t, t = void 0);
            var i, o, r, s, a, l, c, d, u, p = x.ajaxSetup({}, n = n || {}),
                f = p.context || p,
                h = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
                g = x.Deferred(),
                m = x.Callbacks("once memory"),
                y = p.statusCode || {},
                b = {},
                w = {},
                k = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (l) {
                            if (!s)
                                for (s = {}; t = Pt.exec(r);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = s[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return l ? r : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == l && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == l && (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        if (e)
                            if (l) T.always(e[T.status]);
                            else
                                for (var t in e) y[t] = [y[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        return e = e || k, i && i.abort(e), S(0, e), this
                    }
                };
            if (g.promise(T), p.url = ((t || p.url || $t.href) + "").replace(Mt, $t.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(H) || [""], null == p.crossDomain) {
                u = v.createElement("a");
                try {
                    u.href = p.url, u.href = u.href, p.crossDomain = Ft.protocol + "//" + Ft.host != u.protocol + "//" + u.host
                } catch (t) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), Bt(It, p, n, T), l) return T;
            for (d in (c = x.event && p.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !qt.test(p.type), o = p.url.replace(_t, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Nt, "+")) : (u = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (Et.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(Ht, "$1"), u = (Et.test(o) ? "&" : "?") + "_=" + At.guid++ + u), p.url = o + u), p.ifModified && (x.lastModified[o] && T.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && T.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : p.accepts["*"]), p.headers) T.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (!1 === p.beforeSend.call(f, T, p) || l)) return T.abort();
            if (k = "abort", m.add(p.complete), T.done(p.success), T.fail(p.error), i = Bt(Rt, p, n, T)) {
                if (T.readyState = 1, c && h.trigger("ajaxSend", [T, p]), l) return T;
                p.async && 0 < p.timeout && (a = e.setTimeout(function() {
                    T.abort("timeout")
                }, p.timeout));
                try {
                    l = !1, i.send(b, S)
                } catch (t) {
                    if (l) throw t;
                    S(-1, t)
                }
            } else S(-1, "No Transport");

            function S(t, n, s, d) {
                var u, v, b, w = n;
                l || (l = !0, a && e.clearTimeout(a), i = void 0, r = d || "", T.readyState = 0 < t ? 4 : 0, d = 200 <= t && t < 300 || 304 === t, s && (b = function(e, t, n) {
                    for (var i, o, r, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in a)
                            if (a[o] && a[o].test(i)) {
                                l.unshift(o);
                                break
                            } if (l[0] in n) r = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            s = s || o
                        }
                        r = r || s
                    }
                    if (r) return r !== l[0] && l.unshift(r), n[r]
                }(p, T, s)), !d && -1 < x.inArray("script", p.dataTypes) && x.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function() {}), b = function(e, t, n, i) {
                    var o, r, s, a, l, c = {},
                        d = e.dataTypes.slice();
                    if (d[1])
                        for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (r = d.shift(); r;)
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                        if (!(s = c[l + " " + r] || c["* " + r]))
                            for (o in c)
                                if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], d.unshift(a[1]));
                                    break
                                } if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + r
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, b, T, d), d ? (p.ifModified && ((s = T.getResponseHeader("Last-Modified")) && (x.lastModified[o] = s), (s = T.getResponseHeader("etag")) && (x.etag[o] = s)), 204 === t || "HEAD" === p.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = b.state, u = b.data, d = !(v = b.error))) : (v = w, !t && w || (w = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || w) + "", d ? g.resolveWith(f, [u, w, T]) : g.rejectWith(f, [T, w, v]), T.statusCode(y), y = void 0, c && h.trigger(d ? "ajaxSuccess" : "ajaxError", [T, p, d ? u : v]), m.fireWith(f, [T, w]), c && (h.trigger("ajaxComplete", [T, p]), --x.active || x.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return x.get(e, void 0, t, "script")
        }
    }), x.each(["get", "post"], function(e, t) {
        x[t] = function(e, i, o, r) {
            return n(i) && (r = r || o, o = i, i = void 0), x.ajax(x.extend({
                url: e,
                type: t,
                dataType: r,
                data: i,
                success: o
            }, x.isPlainObject(e) && e))
        }
    }), x.ajaxPrefilter(function(e) {
        for (var t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), x._evalUrl = function(e, t, n) {
        return x.ajax({
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
                x.globalEval(e, t, n)
            }
        })
    }, x.fn.extend({
        wrapAll: function(e) {
            return this[0] && (n(e) && (e = e.call(this[0])), e = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return n(e) ? this.each(function(t) {
                x(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = x(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = n(e);
            return this.each(function(n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                x(this).replaceWith(this.childNodes)
            }), this
        }
    }), x.expr.pseudos.hidden = function(e) {
        return !x.expr.pseudos.visible(e)
    }, x.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, x.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Xt = {
            0: 200,
            1223: 204
        },
        Yt = x.ajaxSettings.xhr();
    g.cors = !!Yt && "withCredentials" in Yt, g.ajax = Yt = !!Yt, x.ajaxTransport(function(t) {
        var n, i;
        if (g.cors || Yt && !t.crossDomain) return {
            send: function(o, r) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(s, o[s]);
                n = function(e) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Xt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (o) {
                    if (n) throw o
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), x.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), x.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function(i, o) {
                t = x("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), v.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    });
    var Vt = [],
        Gt = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Vt.pop() || x.expando + "_" + At.guid++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", function(t, i, o) {
        var r, s, a, l = !1 !== t.jsonp && (Gt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(t.data) && "data");
        if (l || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = n(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, l ? t[l] = t[l].replace(Gt, "$1" + r) : !1 !== t.jsonp && (t.url += (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return a || x.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", s = e[r], e[r] = function() {
            a = arguments
        }, o.always(function() {
            void 0 === s ? x(e).removeProp(r) : e[r] = s, t[r] && (t.jsonpCallback = i.jsonpCallback, Vt.push(r)), a && n(s) && s(a[0]), a = s = void 0
        }), "script"
    }), g.createHTMLDocument = ((w = v.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === w.childNodes.length), x.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((i = (t = v.implementation.createHTMLDocument("")).createElement("base")).href = v.location.href, t.head.appendChild(i)) : t = v), i = !n && [], (n = E.exec(e)) ? [t.createElement(n[1])] : (n = me([e], t, i), i && i.length && x(i).remove(), x.merge([], n.childNodes)));
        var i
    }, x.fn.load = function(e, t, i) {
        var o, r, s, a = this,
            l = e.indexOf(" ");
        return -1 < l && (o = wt(e.slice(l)), e = e.slice(0, l)), n(t) ? (i = t, t = void 0) : t && "object" == _typeof(t) && (r = "POST"), 0 < a.length && x.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            s = arguments, a.html(o ? x("<div>").append(x.parseHTML(e)).find(o) : e)
        }).always(i && function(e, t) {
            a.each(function() {
                i.apply(this, s || [e.responseText, t, e])
            })
        }), this
    }, x.expr.pseudos.animated = function(e) {
        return x.grep(x.timers, function(t) {
            return e === t.elem
        }).length
    }, x.offset = {
        setOffset: function(e, t, i) {
            var o, r, s, a, l = x.css(e, "position"),
                c = x(e),
                d = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = x.css(e, "top"), a = x.css(e, "left"), a = ("absolute" === l || "fixed" === l) && -1 < (o + a).indexOf("auto") ? (r = (l = c.position()).top, l.left) : (r = parseFloat(o) || 0, parseFloat(a) || 0), null != (t = n(t) ? t.call(e, i, x.extend({}, s)) : t).top && (d.top = t.top - s.top + r), null != t.left && (d.left = t.left - s.left + a), "using" in t ? t.using.call(e, d) : c.css(d)
        }
    }, x.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                x.offset.setOffset(this, e, t)
            });
            var t, n = this[0];
            return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(), n = n.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === x.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === x.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((o = x(e).offset()).top += x.css(e, "borderTopWidth", !0), o.left += x.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - x.css(i, "marginTop", !0),
                    left: t.left - o.left - x.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === x.css(e, "position");) e = e.offsetParent;
                return e || ie
            })
        }
    }), x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        x.fn[e] = function(o) {
            return F(this, function(e, o, r) {
                var s;
                return i(e) ? s = e : 9 === e.nodeType && (s = e.defaultView), void 0 === r ? s ? s[t] : e[o] : void(s ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset) : e[o] = r)
            }, e, o, arguments.length)
        }
    }), x.each(["top", "left"], function(e, t) {
        x.cssHooks[t] = Xe(g.pixelPosition, function(e, n) {
            if (n) return n = Ue(e, t), We.test(n) ? x(e).position()[t] + "px" : n
        })
    }), x.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        x.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, o) {
            x.fn[o] = function(r, s) {
                var a = arguments.length && (n || "boolean" != typeof r),
                    l = n || (!0 === r || !0 === s ? "margin" : "border");
                return F(this, function(t, n, r) {
                    var s;
                    return i(t) ? 0 === o.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === r ? x.css(t, n, l) : x.style(t, n, r, l)
                }, t, a ? r : void 0, a)
            }
        })
    }), x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), x.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        x.fn[t] = function(e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    });
    var Jt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    x.proxy = function(e, t) {
        var i, o;
        if ("string" == typeof t && (o = e[t], t = e, e = o), n(e)) return i = s.call(arguments, 2), (o = function() {
            return e.apply(t || this, i.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || x.guid++, o
    }, x.holdReady = function(e) {
        e ? x.readyWait++ : x.ready(!0)
    }, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = A, x.isFunction = n, x.isWindow = i, x.camelCase = X, x.type = b, x.now = Date.now, x.isNumeric = function(e) {
        var t = x.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, x.trim = function(e) {
        return null == e ? "" : (e + "").replace(Jt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return x
    });
    var Kt = e.jQuery,
        Qt = e.$;
    return x.noConflict = function(t) {
        return e.$ === x && (e.$ = Qt), t && e.jQuery === x && (e.jQuery = Kt), x
    }, void 0 === t && (e.jQuery = e.$ = x), x
}),
function(e) {
    "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" === _typeof(module.exports) ? e(require("jquery"), window, document) : e(jQuery, window, document)
}(function(e, t, n, i) {
    function o() {
        return s.length ? s[s.length - 1] : null
    }

    function r() {
        for (var e = !1, t = s.length - 1; 0 <= t; t--) s[t].$blocker && (s[t].$blocker.toggleClass("current", !e).toggleClass("behind", e), e = !0)
    }
    var s = [];
    e.modal = function(t, n) {
        var i;
        if (this.$body = e("body"), this.options = e.extend({}, e.modal.defaults, n), this.options.doFade = !isNaN(parseInt(this.options.fadeDuration, 10)), this.$blocker = null, this.options.closeExisting)
            for (; e.modal.isActive();) e.modal.close();
        if (s.push(this), t.is("a"))
            if (n = t.attr("href"), this.anchor = t, /^#/.test(n)) {
                if (this.$elm = e(n), 1 !== this.$elm.length) return null;
                this.$body.append(this.$elm), this.open()
            } else this.$elm = e("<div>"), this.$body.append(this.$elm), i = function(e, t) {
                t.elm.remove()
            }, this.showSpinner(), t.trigger(e.modal.AJAX_SEND), e.get(n).done(function(n) {
                var r;
                e.modal.isActive() && (t.trigger(e.modal.AJAX_SUCCESS), (r = o()).$elm.empty().append(n).on(e.modal.CLOSE, i), r.hideSpinner(), r.open(), t.trigger(e.modal.AJAX_COMPLETE))
            }).fail(function() {
                t.trigger(e.modal.AJAX_FAIL), o().hideSpinner(), s.pop(), t.trigger(e.modal.AJAX_COMPLETE)
            });
        else this.$elm = t, this.anchor = t, this.$body.append(this.$elm), this.open()
    }, e.modal.prototype = {
        constructor: e.modal,
        open: function() {
            var t = this;
            this.block(), this.anchor.blur(), this.options.doFade ? setTimeout(function() {
                t.show()
            }, this.options.fadeDuration * this.options.fadeDelay) : this.show(), e(n).off("keydown.modal").on("keydown.modal", function(e) {
                var t = o();
                27 === e.which && t.options.escapeClose && t.close()
            }), this.options.clickClose && this.$blocker.click(function(t) {
                t.target === this && e.modal.close()
            })
        },
        close: function() {
            s.pop(), this.unblock(), this.hide(), e.modal.isActive() || e(n).off("keydown.modal")
        },
        block: function() {
            this.$elm.trigger(e.modal.BEFORE_BLOCK, [this._ctx()]), this.$body.css("overflow", "hidden"), this.$blocker = e('<div class="' + this.options.blockerClass + ' blocker current"></div>').appendTo(this.$body), r(), this.options.doFade && this.$blocker.css("opacity", 0).animate({
                opacity: 1
            }, this.options.fadeDuration), this.$elm.trigger(e.modal.BLOCK, [this._ctx()])
        },
        unblock: function(t) {
            !t && this.options.doFade ? this.$blocker.fadeOut(this.options.fadeDuration, this.unblock.bind(this, !0)) : (this.$blocker.children().appendTo(this.$body), this.$blocker.remove(), this.$blocker = null, r(), e.modal.isActive() || this.$body.css("overflow", ""))
        },
        show: function() {
            this.$elm.trigger(e.modal.BEFORE_OPEN, [this._ctx()]), this.options.showClose && (this.closeButton = e('<a href="#close-modal" rel="modal:close" class="close-modal ' + this.options.closeClass + '">' + this.options.closeText + "</a>"), this.$elm.append(this.closeButton)), this.$elm.addClass(this.options.modalClass).appendTo(this.$blocker), this.options.doFade ? this.$elm.css({
                opacity: 0,
                display: "inline-block"
            }).animate({
                opacity: 1
            }, this.options.fadeDuration) : this.$elm.css("display", "inline-block"), this.$elm.trigger(e.modal.OPEN, [this._ctx()])
        },
        hide: function() {
            this.$elm.trigger(e.modal.BEFORE_CLOSE, [this._ctx()]), this.closeButton && this.closeButton.remove();
            var t = this;
            this.options.doFade ? this.$elm.fadeOut(this.options.fadeDuration, function() {
                t.$elm.trigger(e.modal.AFTER_CLOSE, [t._ctx()])
            }) : this.$elm.hide(0, function() {
                t.$elm.trigger(e.modal.AFTER_CLOSE, [t._ctx()])
            }), this.$elm.trigger(e.modal.CLOSE, [this._ctx()])
        },
        showSpinner: function() {
            this.options.showSpinner && (this.spinner = this.spinner || e('<div class="' + this.options.modalClass + '-spinner"></div>').append(this.options.spinnerHtml), this.$body.append(this.spinner), this.spinner.show())
        },
        hideSpinner: function() {
            this.spinner && this.spinner.remove()
        },
        _ctx: function() {
            return {
                elm: this.$elm,
                $elm: this.$elm,
                $blocker: this.$blocker,
                options: this.options,
                $anchor: this.anchor
            }
        }
    }, e.modal.close = function(t) {
        if (e.modal.isActive()) return t && t.preventDefault(), (t = o()).close(), t.$elm
    }, e.modal.isActive = function() {
        return 0 < s.length
    }, e.modal.getCurrent = o, e.modal.defaults = {
        closeExisting: !0,
        escapeClose: !0,
        clickClose: !0,
        closeText: "Close",
        closeClass: "",
        modalClass: "modal",
        blockerClass: "jquery-modal",
        spinnerHtml: '<div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div>',
        showSpinner: !0,
        showClose: !0,
        fadeDuration: null,
        fadeDelay: 1
    }, e.modal.BEFORE_BLOCK = "modal:before-block", e.modal.BLOCK = "modal:block", e.modal.BEFORE_OPEN = "modal:before-open", e.modal.OPEN = "modal:open", e.modal.BEFORE_CLOSE = "modal:before-close", e.modal.CLOSE = "modal:close", e.modal.AFTER_CLOSE = "modal:after-close", e.modal.AJAX_SEND = "modal:ajax:send", e.modal.AJAX_SUCCESS = "modal:ajax:success", e.modal.AJAX_FAIL = "modal:ajax:fail", e.modal.AJAX_COMPLETE = "modal:ajax:complete", e.fn.modal = function(t) {
        return 1 === this.length && new e.modal(this, t), this
    }, e(n).on("click.modal", 'a[rel~="modal:close"]', e.modal.close), e(n).on("click.modal", 'a[rel~="modal:open"]', function(t) {
        t.preventDefault(), e(this).modal()
    })
}),
function(e, t) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).LazyLoad = t()
}(void 0, function() {
    function e() {
        return (e = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n, i = arguments[t];
                for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return e
        }).apply(this, arguments)
    }

    function t(t) {
        return e({}, P, t)
    }

    function n(e, t) {
        var n, i = "LazyLoad::Initialized";
        t = new e(t);
        try {
            n = new CustomEvent(i, {
                detail: {
                    instance: t
                }
            })
        } catch (e) {
            (n = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
                instance: t
            })
        }
        window.dispatchEvent(n)
    }

    function i(e) {
        return Y(e, X)
    }

    function o(e) {
        return V(e, null)
    }

    function r(e, t, n, i) {
        e && (void 0 === i ? void 0 === n ? e(t) : e(t, n) : e(t, n, i))
    }

    function s(e, t) {
        _ ? e.classList.add(t) : e.className += (e.className ? " " : "") + t
    }

    function a(e) {
        return e.llTempImage
    }

    function l(e, t) {
        !t || (t = t._observer) && t.unobserve(e)
    }

    function c(e, t) {
        e && (e.loadingCount += t)
    }

    function d(e, t) {
        e && (e.toLoadCount = t)
    }

    function u(e, t) {
        (e = e.parentNode) && "PICTURE" === e.tagName && ee(e).forEach(t)
    }

    function p(e, t) {
        ee(e).forEach(t)
    }

    function f(e) {
        return delete e[R]
    }

    function h(e, t) {
        var n;
        oe(e) || (n = {}, t.forEach(function(t) {
            n[t] = e.getAttribute(t)
        }), e[R] = n)
    }

    function g(e, t) {
        var n;
        oe(e) && (n = re(e), t.forEach(function(t) {
            ae(e, t, n[t])
        }))
    }

    function v(e, t, n) {
        s(e, t.class_loading), V(e, z), n && (c(n, 1), r(t.callback_loading, e, n))
    }

    function m(e, t) {
        ce(e, I, Y(e, t.data_sizes)), ce(e, M, Y(e, t.data_srcset)), ce(e, q, Y(e, t.data_src))
    }

    function y(e, t) {
        !t || 0 < t.loadingCount || 0 < t.toLoadCount || r(e.callback_finish, t)
    }

    function b(e, t, n) {
        e.addEventListener(t, n), e.llEvLisnrs[t] = n
    }

    function w(e) {
        return !!e.llEvLisnrs
    }

    function x(e) {
        if (w(e)) {
            var t, n, i = e.llEvLisnrs;
            for (t in i) {
                var o = i[t];
                n = t, e.removeEventListener(n, o)
            }
            delete e.llEvLisnrs
        }
    }

    function k(e, t, n) {
        var i;
        delete e.llTempImage, c(n, -1), (i = n) && --i.toLoadCount, Q(e, t.class_loading), t.unobserve_completed && l(e, n)
    }

    function T(e, t, n) {
        var i, o, r; - 1 < ge.indexOf(e.tagName) ? (ve(i = e, o = t, r = n), he(i, o, r)) : (t = t, n = n, Z(e = e), ve(e, t, n), se(e), de(e, t, n), ue(e, t, n))
    }

    function S(e) {
        e.removeAttribute(q), e.removeAttribute(M), e.removeAttribute(I)
    }

    function C(e) {
        u(e, function(e) {
            g(e, ie)
        }), g(e, ie)
    }

    function $(e, t, n, s) {
        var a;
        n.cancel_on_exit && (i(e) !== z || "IMG" === e.tagName && (x(e), u(a = e, function(e) {
            S(e)
        }), S(a), C(e), Q(e, n.class_loading), c(s, -1), o(e), r(n.callback_cancel, e, t, s)))
    }

    function A(e) {
        return e.container.querySelectorAll(e.elements_selector)
    }

    function E(e) {
        return i(e) === W
    }

    function j(e, t) {
        return t = e || A(t), ke(t).filter(G)
    }

    function D(e, n) {
        var i, o, r, s;
        e = t(e);
        this._settings = e, this.loadingCount = 0, i = e, o = this, N && !be(i) && (o._observer = new IntersectionObserver(function(e) {
            xe(e, i, o)
        }, we(i))), r = e, s = this, L && window.addEventListener("online", function() {
            Te(r, s)
        }), this.update(n)
    }
    var L = "undefined" != typeof window,
        O = L && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
        N = L && "IntersectionObserver" in window,
        _ = L && "classList" in document.createElement("p"),
        H = L && 1 < window.devicePixelRatio,
        P = {
            elements_selector: ".lazy",
            container: O || L ? document : null,
            threshold: 300,
            thresholds: null,
            data_src: "src",
            data_srcset: "srcset",
            data_sizes: "sizes",
            data_bg: "bg",
            data_bg_hidpi: "bg-hidpi",
            data_bg_multi: "bg-multi",
            data_bg_multi_hidpi: "bg-multi-hidpi",
            data_poster: "poster",
            class_applied: "applied",
            class_loading: "loading",
            class_loaded: "loaded",
            class_error: "error",
            class_entered: "entered",
            class_exited: "exited",
            unobserve_completed: !0,
            unobserve_entered: !1,
            cancel_on_exit: !0,
            callback_enter: null,
            callback_exit: null,
            callback_applied: null,
            callback_loading: null,
            callback_loaded: null,
            callback_error: null,
            callback_finish: null,
            callback_cancel: null,
            use_native: !1
        },
        q = "src",
        M = "srcset",
        I = "sizes",
        R = "llOriginalAttrs",
        z = "loading",
        F = "applied",
        W = "error",
        B = "native",
        U = "data-",
        X = "ll-status",
        Y = function(e, t) {
            return e.getAttribute(U + t)
        },
        V = function(e, t) {
            return function(e, t, n) {
                t = U + t, null !== n ? e.setAttribute(t, n) : e.removeAttribute(t)
            }(e, X, t)
        },
        G = function(e) {
            return null === i(e)
        },
        J = function(e) {
            return i(e) === B
        },
        K = [z, "loaded", F, W],
        Q = function(e, t) {
            _ ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
        },
        Z = function(e) {
            e.llTempImage = document.createElement("IMG")
        },
        ee = function(e) {
            for (var t, n = [], i = 0; t = e.children[i]; i += 1) "SOURCE" === t.tagName && n.push(t);
            return n
        },
        te = [q],
        ne = [q, "poster"],
        ie = [q, M, I],
        oe = function(e) {
            return !!e[R]
        },
        re = function(e) {
            return e[R]
        },
        se = function(e) {
            oe(e) || (e[R] = {
                backgroundImage: e.style.backgroundImage
            })
        },
        ae = function(e, t, n) {
            n ? e.setAttribute(t, n) : e.removeAttribute(t)
        },
        le = function(e) {
            var t;
            oe(e) && (t = re(e), e.style.backgroundImage = t.backgroundImage)
        },
        ce = function(e, t, n) {
            n && e.setAttribute(t, n)
        },
        de = function(e, t, n) {
            var i = Y(e, t.data_bg),
                o = Y(e, t.data_bg_hidpi);
            (i = H && o ? o : i) && (e.style.backgroundImage = 'url("'.concat(i, '")'), a(e).setAttribute(q, i), v(e, t, n))
        },
        ue = function(e, t, n) {
            var i = Y(e, t.data_bg_multi),
                o = Y(e, t.data_bg_multi_hidpi);
            (i = H && o ? o : i) && (e.style.backgroundImage = i, n = n, s(e = e, (t = t).class_applied), V(e, F), n && (t.unobserve_completed && l(e, t), r(t.callback_applied, e, n)))
        },
        pe = {
            IMG: function(e, t) {
                u(e, function(e) {
                    h(e, ie), m(e, t)
                }), h(e, ie), m(e, t)
            },
            IFRAME: function(e, t) {
                h(e, te), ce(e, q, Y(e, t.data_src))
            },
            VIDEO: function(e, t) {
                p(e, function(e) {
                    h(e, te), ce(e, q, Y(e, t.data_src))
                }), h(e, ne), ce(e, "poster", Y(e, t.data_poster)), ce(e, q, Y(e, t.data_src)), e.load()
            }
        },
        fe = function(e, t) {
            var n = pe[e.tagName];
            n && n(e, t)
        },
        he = function(e, t, n) {
            var i = pe[e.tagName];
            i && (i(e, t), v(e, t, n))
        },
        ge = ["IMG", "IFRAME", "VIDEO"],
        ve = function(e, t, n) {
            var i, o = a(e) || e;
            w(o) || (w(i = o) || (i.llEvLisnrs = {}), b(i, "VIDEO" === i.tagName ? "loadeddata" : "load", function(i) {
                var a, l, c, d;
                l = t, c = n, d = J(a = e), k(a, l, c), s(a, l.class_loaded), V(a, "loaded"), r(l.callback_loaded, a, c), d || y(l, c), x(o)
            }), b(i, "error", function(i) {
                var a, l, c, d;
                l = t, c = n, d = J(a = e), k(a, l, c), s(a, l.class_error), V(a, W), r(l.callback_error, a, c), d || y(l, c), x(o)
            }))
        },
        me = {
            IMG: C,
            IFRAME: function(e) {
                g(e, te)
            },
            VIDEO: function(e) {
                p(e, function(e) {
                    g(e, te)
                }), g(e, ne), e.load()
            }
        },
        ye = ["IMG", "IFRAME", "VIDEO"],
        be = function(e) {
            return e.use_native && "loading" in HTMLImageElement.prototype
        },
        we = function(e) {
            return {
                root: e.container === document ? null : e.container,
                rootMargin: e.thresholds || e.threshold + "px"
            }
        },
        xe = function(e, t, n) {
            e.forEach(function(e) {
                return (c = e).isIntersecting || 0 < c.intersectionRatio ? function(e, t, n, o) {
                    var a, c, d = 0 <= K.indexOf(i(e));
                    V(e, "entered"), s(e, n.class_entered), Q(e, n.class_exited), a = e, c = o, n.unobserve_entered && l(a, c), r(n.callback_enter, e, t, o), d || T(e, n, o)
                }(e.target, e, t, n) : (o = e.target, a = e, c = t, e = n, void(G(o) || (s(o, c.class_exited), $(o, a, c, e), r(c.callback_exit, o, a, e))));
                var o, a, c
            })
        },
        ke = function(e) {
            return Array.prototype.slice.call(e)
        },
        Te = function(e, t) {
            var n;
            (n = A(e), ke(n).filter(E)).forEach(function(t) {
                Q(t, e.class_error), o(t)
            }), t.update()
        };
    return D.prototype = {
        update: function(e) {
            var t, n = this._settings,
                i = j(e, n);
            d(this, i.length), !O && N ? be(n) ? function(e, t, n) {
                e.forEach(function(e) {
                    var i, o; - 1 !== ye.indexOf(e.tagName) && (i = t, o = n, (e = e).setAttribute("loading", "lazy"), ve(e, i, o), fe(e, i), V(e, B))
                }), d(n, 0)
            }(i, n, this) : (n = i, (e = this._observer).disconnect(), t = e, n.forEach(function(e) {
                t.observe(e)
            })) : this.loadAll(i)
        },
        destroy: function() {
            this._observer && this._observer.disconnect(), A(this._settings).forEach(function(e) {
                f(e)
            }), delete this._observer, delete this._settings, delete this.loadingCount, delete this.toLoadCount
        },
        loadAll: function(e) {
            var t = this,
                n = this._settings;
            j(e, n).forEach(function(e) {
                l(e, t), T(e, n, t)
            })
        },
        restoreAll: function() {
            var e = this._settings;
            A(e).forEach(function(t) {
                ! function(e, t) {
                    var n;
                    (me[(n = e).tagName] || le)(n), n = t, G(t = e) || J(t) || (Q(t, n.class_entered), Q(t, n.class_exited), Q(t, n.class_applied), Q(t, n.class_loading), Q(t, n.class_loaded), Q(t, n.class_error)), o(e), f(e)
                }(t, e)
            })
        }
    }, D.load = function(e, n) {
        T(e, n = t(n))
    }, D.resetStatus = function(e) {
        o(e)
    }, L && function(e, t) {
        if (t)
            if (t.length)
                for (var i, o = 0; i = t[o]; o += 1) n(e, i);
            else n(e, t)
    }(D, window.lazyLoadOptions), D
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    var t, n = window.Slick || {};
    t = 0, (n = function(n, i) {
        var o = this;
        o.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: e(n),
            appendDots: e(n),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function(t, n) {
                return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(n + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        }, o.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        }, e.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = e(n), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, n = e(n).data("slick") || {}, o.options = e.extend({}, o.defaults, i, n), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, void 0 !== document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = e.proxy(o.autoPlay, o), o.autoPlayClear = e.proxy(o.autoPlayClear, o), o.autoPlayIterator = e.proxy(o.autoPlayIterator, o), o.changeSlide = e.proxy(o.changeSlide, o), o.clickHandler = e.proxy(o.clickHandler, o), o.selectHandler = e.proxy(o.selectHandler, o), o.setPosition = e.proxy(o.setPosition, o), o.swipeHandler = e.proxy(o.swipeHandler, o), o.dragHandler = e.proxy(o.dragHandler, o), o.keyHandler = e.proxy(o.keyHandler, o), o.instanceUid = t++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
    }).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, n.prototype.addSlide = n.prototype.slickAdd = function(t, n, i) {
        var o = this;
        if ("boolean" == typeof n) i = n, n = null;
        else if (n < 0 || n >= o.slideCount) return !1;
        o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === i ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(t, n) {
            e(n).attr("data-slick-index", t)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, n.prototype.animateHeight = function() {
        var e, t = this;
        1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical && (e = t.$slides.eq(t.currentSlide).outerHeight(!0), t.$list.animate({
            height: e
        }, t.options.speed))
    }, n.prototype.animateSlide = function(t, n) {
        var i = {},
            o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: t
        }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
            top: t
        }, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
            animStart: o.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(e) {
                e = Math.ceil(e), !1 === o.options.vertical ? i[o.animType] = "translate(" + e + "px, 0px)" : i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i)
            },
            complete: function() {
                n && n.call()
            }
        })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function() {
            o.disableTransition(), n.call()
        }, o.options.speed))
    }, n.prototype.getNavTarget = function() {
        var t = this.options.asNavFor;
        return t && null !== t ? e(t).not(this.$slider) : t
    }, n.prototype.asNavFor = function(t) {
        var n = this.getNavTarget();
        null !== n && "object" === _typeof(n) && n.each(function() {
            var n = e(this).slick("getSlick");
            n.unslicked || n.slideHandler(t, !0)
        })
    }, n.prototype.applyTransition = function(e) {
        var t = this,
            n = {};
        !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, (!1 === t.options.fade ? t.$slideTrack : t.$slides.eq(e)).css(n)
    }, n.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, n.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, n.prototype.autoPlayIterator = function() {
        var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    }, n.prototype.buildArrows = function() {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, n.prototype.buildDots = function() {
        var t, n, i = this;
        if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
            for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
            i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, n.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, n) {
            e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
        }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
    }, n.prototype.buildRows = function() {
        var e, t, n, i = this,
            o = document.createDocumentFragment(),
            r = i.$slider.children();
        if (1 < i.options.rows) {
            for (n = i.options.slidesPerRow * i.options.rows, t = Math.ceil(r.length / n), e = 0; e < t; e++) {
                for (var s = document.createElement("div"), a = 0; a < i.options.rows; a++) {
                    for (var l = document.createElement("div"), c = 0; c < i.options.slidesPerRow; c++) {
                        var d = e * n + (a * i.options.slidesPerRow + c);
                        r.get(d) && l.appendChild(r.get(d))
                    }
                    s.appendChild(l)
                }
                o.appendChild(s)
            }
            i.$slider.empty().append(o), i.$slider.children().children().children().css({
                width: 100 / i.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, n.prototype.checkResponsive = function(t, n) {
        var i, o, r, s = this,
            a = !1,
            l = s.$slider.width(),
            c = window.innerWidth || e(window).width();
        if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            for (i in o = null, s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
            null !== o ? null !== s.activeBreakpoint && o === s.activeBreakpoint && !n || (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || !1 === a || s.$slider.trigger("breakpoint", [s, a])
        }
    }, n.prototype.changeSlide = function(t, n) {
        var i, o = this,
            r = e(t.currentTarget);
        switch (r.is("a") && t.preventDefault(), r.is("li") || (r = r.closest("li")), i = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, t.data.message) {
            case "previous":
                s = 0 == i ? o.options.slidesToScroll : o.options.slidesToShow - i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - s, !1, n);
                break;
            case "next":
                s = 0 == i ? o.options.slidesToScroll : i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + s, !1, n);
                break;
            case "index":
                var s = 0 === t.data.index ? 0 : t.data.index || r.index() * o.options.slidesToScroll;
                o.slideHandler(o.checkNavigable(s), !1, n), r.children().trigger("focus");
                break;
            default:
                return
        }
    }, n.prototype.checkNavigable = function(e) {
        var t = this.getNavigableIndexes(),
            n = 0;
        if (e > t[t.length - 1]) e = t[t.length - 1];
        else
            for (var i in t) {
                if (e < t[i]) {
                    e = n;
                    break
                }
                n = t[i]
            }
        return e
    }, n.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, n.prototype.cleanUpSlideEvents = function() {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, n.prototype.cleanUpRows = function() {
        var e;
        1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
    }, n.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, n.prototype.destroy = function(t) {
        var n = this;
        n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            e(this).attr("style", e(this).data("originalStyling"))
        }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
    }, n.prototype.disableTransition = function(e) {
        var t = {};
        t[this.transitionType] = "", (!1 === this.options.fade ? this.$slideTrack : this.$slides.eq(e)).css(t)
    }, n.prototype.fadeSlide = function(e, t) {
        var n = this;
        !1 === n.cssTransitions ? (n.$slides.eq(e).css({
            zIndex: n.options.zIndex
        }), n.$slides.eq(e).animate({
            opacity: 1
        }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }), t && setTimeout(function() {
            n.disableTransition(e), t.call()
        }, n.options.speed))
    }, n.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, n.prototype.filterSlides = n.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, n.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(n) {
            n.stopImmediatePropagation();
            var i = e(this);
            setTimeout(function() {
                t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
            }, 0)
        })
    }, n.prototype.getCurrent = n.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }, n.prototype.getDotCount = function() {
        var e = this,
            t = 0,
            n = 0,
            i = 0;
        if (!0 === e.options.infinite)
            for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode) i = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return i - 1
    }, n.prototype.getLeft = function(e) {
        var t, n = this,
            i = 0;
        return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, i = t * n.options.slidesToShow * -1), n.slideCount % n.options.slidesToScroll != 0 && e + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i = e > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (e - n.slideCount)) * n.slideWidth * -1, (n.options.slidesToShow - (e - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, n.slideCount % n.options.slidesToScroll * t * -1))) : e + n.options.slidesToShow > n.slideCount && (n.slideOffset = (e + n.options.slidesToShow - n.slideCount) * n.slideWidth, i = (e + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (i = n.slideOffset = 0), !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), t = !1 === n.options.vertical ? e * n.slideWidth * -1 + n.slideOffset : e * t * -1 + i, !0 === n.options.variableWidth && (i = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(e) : n.$slideTrack.children(".slick-slide").eq(e + n.options.slidesToShow), t = !0 === n.options.rtl ? i[0] ? -1 * (n.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === n.options.centerMode && (i = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(e) : n.$slideTrack.children(".slick-slide").eq(e + n.options.slidesToShow + 1), t = !0 === n.options.rtl ? i[0] ? -1 * (n.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (n.$list.width() - i.outerWidth()) / 2)), t
    }, n.prototype.getOption = n.prototype.slickGetOption = function(e) {
        return this.options[e]
    }, n.prototype.getNavigableIndexes = function() {
        for (var e = this, t = 0, n = 0, i = [], o = !1 === e.options.infinite ? e.slideCount : (t = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, 2 * e.slideCount); t < o;) i.push(t), t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return i
    }, n.prototype.getSlick = function() {
        return this
    }, n.prototype.getSlideCount = function() {
        var t, n = this,
            i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0;
        return !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function(o, r) {
            if (r.offsetLeft - i + e(r).outerWidth() / 2 > -1 * n.swipeLeft) return t = r, !1
        }), Math.abs(e(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
    }, n.prototype.goTo = n.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, n.prototype.init = function(t) {
        var n = this;
        e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
    }, n.prototype.initADA = function() {
        var t = this;
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(n) {
            e(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + t.instanceUid + n
            })
        }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(n) {
            e(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + t.instanceUid + n,
                id: "slick-slide" + t.instanceUid + n
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
    }, n.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide))
    }, n.prototype.initDotEvents = function() {
        var t = this;
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, n.prototype.initSlideEvents = function() {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
    }, n.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, n.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, n.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    }, n.prototype.lazyLoad = function() {
        var t, n, i = this;

        function o(t) {
            e("img[data-lazy]", t).each(function() {
                var t = e(this),
                    n = e(this).attr("data-lazy"),
                    o = document.createElement("img");
                o.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, function() {
                        t.attr("src", n).animate({
                            opacity: 1
                        }, 200, function() {
                            t.removeAttr("data-lazy").removeClass("slick-loading")
                        }), i.$slider.trigger("lazyLoaded", [i, t, n])
                    })
                }, o.onerror = function() {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), i.$slider.trigger("lazyLoadError", [i, t, n])
                }, o.src = n
            })
        }!0 === i.options.centerMode ? n = !0 === i.options.infinite ? (t = i.currentSlide + (i.options.slidesToShow / 2 + 1)) + i.options.slidesToShow + 2 : (t = Math.max(0, i.currentSlide - (i.options.slidesToShow / 2 + 1)), i.options.slidesToShow / 2 + 1 + 2 + i.currentSlide) : (t = i.options.infinite ? i.options.slidesToShow + i.currentSlide : i.currentSlide, n = Math.ceil(t + i.options.slidesToShow), !0 === i.options.fade && (0 < t && t--, n <= i.slideCount && n++)), o(i.$slider.find(".slick-slide").slice(t, n)), i.slideCount <= i.options.slidesToShow ? o(i.$slider.find(".slick-slide")) : i.currentSlide >= i.slideCount - i.options.slidesToShow ? o(i.$slider.find(".slick-cloned").slice(0, i.options.slidesToShow)) : 0 === i.currentSlide && o(i.$slider.find(".slick-cloned").slice(-1 * i.options.slidesToShow))
    }, n.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, n.prototype.next = n.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, n.prototype.orientationChange = function() {
        this.checkResponsive(), this.setPosition()
    }, n.prototype.pause = n.prototype.slickPause = function() {
        this.autoPlayClear(), this.paused = !0
    }, n.prototype.play = n.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, n.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && t.initADA())
    }, n.prototype.prev = n.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, n.prototype.preventDefault = function(e) {
        e.preventDefault()
    }, n.prototype.progressiveLazyLoad = function(t) {
        t = t || 1;
        var n, i, o = this,
            r = e("img[data-lazy]", o.$slider);
        r.length ? (n = r.first(), i = n.attr("data-lazy"), (r = document.createElement("img")).onload = function() {
            n.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"), !0 === o.options.adaptiveHeight && o.setPosition(), o.$slider.trigger("lazyLoaded", [o, n, i]), o.progressiveLazyLoad()
        }, r.onerror = function() {
            t < 3 ? setTimeout(function() {
                o.progressiveLazyLoad(t + 1)
            }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, n, i]), o.progressiveLazyLoad())
        }, r.src = i) : o.$slider.trigger("allImagesLoaded", [o])
    }, n.prototype.refresh = function(t) {
        var n = this,
            i = n.slideCount - n.options.slidesToShow;
        !n.options.infinite && n.currentSlide > i && (n.currentSlide = i), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), i = n.currentSlide, n.destroy(!0), e.extend(n, n.initials, {
            currentSlide: i
        }), n.init(), t || n.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }, n.prototype.registerBreakpoints = function() {
        var t, n, i, o = this,
            r = o.options.responsive || null;
        if ("array" === e.type(r) && r.length) {
            for (t in o.respondTo = o.options.respondTo || "window", r)
                if (i = o.breakpoints.length - 1, n = r[t].breakpoint, r.hasOwnProperty(t)) {
                    for (; 0 <= i;) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
                    o.breakpoints.push(n), o.breakpointSettings[n] = r[t].settings
                } o.breakpoints.sort(function(e, t) {
                return o.options.mobileFirst ? e - t : t - e
            })
        }
    }, n.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
    }, n.prototype.resize = function() {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
            t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
        }, 50))
    }, n.prototype.removeSlide = n.prototype.slickRemove = function(e, t, n) {
        var i = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
        i.unload(), (!0 === n ? i.$slideTrack.children() : i.$slideTrack.children(this.options.slide).eq(e)).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
    }, n.prototype.setCSS = function(e) {
        var t, n, i = this,
            o = {};
        !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled || (!(o = {}) === i.cssTransitions ? o[i.animType] = "translate(" + t + ", " + n + ")" : o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"), i.$slideTrack.css(o)
    }, n.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, n.prototype.setFade = function() {
        var t, n = this;
        n.$slides.each(function(i, o) {
            t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(o).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            }) : e(o).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            })
        }), n.$slides.eq(n.currentSlide).css({
            zIndex: n.options.zIndex - 1,
            opacity: 1
        })
    }, n.prototype.setHeight = function() {
        var e, t = this;
        1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical && (e = t.$slides.eq(t.currentSlide).outerHeight(!0), t.$list.css("height", e))
    }, n.prototype.setOption = n.prototype.slickSetOption = function() {
        var t, n, i, o, r, s = this,
            a = !1;
        if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) s.options[i] = o;
        else if ("multiple" === r) e.each(i, function(e, t) {
            s.options[e] = t
        });
        else if ("responsive" === r)
            for (n in o)
                if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[n]];
                else {
                    for (t = s.options.responsive.length - 1; 0 <= t;) s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--;
                    s.options.responsive.push(o[n])
                } a && (s.unload(), s.reinit())
    }, n.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, n.prototype.setProps = function() {
        var e = this,
            t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, n.prototype.setSlideClasses = function(e) {
        var t, n, i = this,
            o = i.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
        i.$slides.eq(e).addClass("slick-current"), !0 === i.options.centerMode ? (n = Math.floor(i.options.slidesToShow / 2), !0 === i.options.infinite && (n <= e && e <= i.slideCount - 1 - n ? i.$slides.slice(e - n, e + n + 1).addClass("slick-active").attr("aria-hidden", "false") : (t = i.options.slidesToShow + e, o.slice(t - n + 1, t + n + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? o.eq(o.length - 1 - i.options.slidesToShow).addClass("slick-center") : e === i.slideCount - 1 && o.eq(i.options.slidesToShow).addClass("slick-center")), i.$slides.eq(e).addClass("slick-center")) : 0 <= e && e <= i.slideCount - i.options.slidesToShow ? i.$slides.slice(e, e + i.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : o.length <= i.options.slidesToShow ? o.addClass("slick-active").attr("aria-hidden", "false") : (n = i.slideCount % i.options.slidesToShow, t = !0 === i.options.infinite ? i.options.slidesToShow + e : e, (i.options.slidesToShow == i.options.slidesToScroll && i.slideCount - e < i.options.slidesToShow ? o.slice(t - (i.options.slidesToShow - n), t + n) : o.slice(t, t + i.options.slidesToShow)).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === i.options.lazyLoad && i.lazyLoad()
    }, n.prototype.setupInfinite = function() {
        var t, n, i, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (n = null, o.slideCount > o.options.slidesToShow)) {
            for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; --t) e(o.$slides[n = t - 1]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (t = 0; t < i; t += 1) n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                e(this).attr("id", "")
            })
        }
    }, n.prototype.interrupt = function(e) {
        e || this.autoPlay(), this.interrupted = e
    }, n.prototype.selectHandler = function(t) {
        var n = this;
        t = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"), t = (t = parseInt(t.attr("data-slick-index"))) || 0;
        if (n.slideCount <= n.options.slidesToShow) return n.setSlideClasses(t), void n.asNavFor(t);
        n.slideHandler(t)
    }, n.prototype.slideHandler = function(e, t, n) {
        var i, o, r, s, a = this;
        if (t = t || !1, (!0 !== a.animating || !0 !== a.options.waitForAnimate) && !(!0 === a.options.fade && a.currentSlide === e || a.slideCount <= a.options.slidesToShow))
            if (!1 === t && a.asNavFor(e), i = e, r = a.getLeft(i), t = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? t : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (e < 0 || e > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (i = a.currentSlide, !0 !== n ? a.animateSlide(t, function() {
                a.postSlide(i)
            }) : a.postSlide(i));
            else if (!1 === a.options.infinite && !0 === a.options.centerMode && (e < 0 || e > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (i = a.currentSlide, !0 !== n ? a.animateSlide(t, function() {
            a.postSlide(i)
        }) : a.postSlide(i));
        else {
            if (a.options.autoplay && clearInterval(a.autoPlayTimer), o = i < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + i : i >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : i - a.slideCount : i, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, o]), t = a.currentSlide, a.currentSlide = o, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (s = (s = a.getNavTarget()).slick("getSlick")).slideCount <= s.options.slidesToShow && s.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== n ? (a.fadeSlideOut(t), a.fadeSlide(o, function() {
                a.postSlide(o)
            })) : a.postSlide(o), void a.animateHeight();
            !0 !== n ? a.animateSlide(r, function() {
                a.postSlide(o)
            }) : a.postSlide(o)
        }
    }, n.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, n.prototype.swipeDirection = function() {
        var e = this,
            t = e.touchObject.startX - e.touchObject.curX,
            n = e.touchObject.startY - e.touchObject.curY;
        t = Math.atan2(n, t);
        return (t = (t = Math.round(180 * t / Math.PI)) < 0 ? 360 - Math.abs(t) : t) <= 45 && 0 <= t || t <= 360 && 315 <= t ? !1 === e.options.rtl ? "left" : "right" : 135 <= t && t <= 225 ? !1 === e.options.rtl ? "right" : "left" : !0 === e.options.verticalSwiping ? 35 <= t && t <= 135 ? "down" : "up" : "vertical"
    }, n.prototype.swipeEnd = function(e) {
        var t, n, i = this;
        if (i.dragging = !1, i.interrupted = !1, i.shouldClick = !(10 < i.touchObject.swipeLength), void 0 === i.touchObject.curX) return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (n = i.swipeDirection()) {
                case "left":
                case "down":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
            }
            "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
    }, n.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
        }
    }, n.prototype.swipeMove = function(e) {
        var t, n, i = this,
            o = void 0 !== e.originalEvent ? e.originalEvent.touches : null;
        return !(!i.dragging || o && 1 !== o.length) && (t = i.getLeft(i.currentSlide), i.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX, i.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY, i.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(i.touchObject.curX - i.touchObject.startX, 2))), !0 === i.options.verticalSwiping && (i.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(i.touchObject.curY - i.touchObject.startY, 2)))), "vertical" !== (n = i.swipeDirection()) ? (void 0 !== e.originalEvent && 4 < i.touchObject.swipeLength && e.preventDefault(), o = (!1 === i.options.rtl ? 1 : -1) * (i.touchObject.curX > i.touchObject.startX ? 1 : -1), !0 === i.options.verticalSwiping && (o = i.touchObject.curY > i.touchObject.startY ? 1 : -1), e = i.touchObject.swipeLength, (i.touchObject.edgeHit = !1) === i.options.infinite && (0 === i.currentSlide && "right" === n || i.currentSlide >= i.getDotCount() && "left" === n) && (e = i.touchObject.swipeLength * i.options.edgeFriction, i.touchObject.edgeHit = !0), !1 === i.options.vertical ? i.swipeLeft = t + e * o : i.swipeLeft = t + e * (i.$list.height() / i.listWidth) * o, !0 === i.options.verticalSwiping && (i.swipeLeft = t + e * o), !0 !== i.options.fade && !1 !== i.options.touchMove && (!0 === i.animating ? (i.swipeLeft = null, !1) : void i.setCSS(i.swipeLeft))) : void 0)
    }, n.prototype.swipeStart = function(e) {
        var t, n = this;
        if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return !(n.touchObject = {});
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0
    }, n.prototype.unfilterSlides = n.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, n.prototype.unload = function() {
        var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, n.prototype.unslick = function(e) {
        this.$slider.trigger("unslick", [this, e]), this.destroy()
    }, n.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, n.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, n.prototype.visibility = function() {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }, e.fn.slick = function() {
        for (var e, t = this, i = arguments[0], o = Array.prototype.slice.call(arguments, 1), r = t.length, s = 0; s < r; s++)
            if ("object" == _typeof(i) || void 0 === i ? t[s].slick = new n(t[s], i) : e = t[s].slick[i].apply(t[s].slick, o), void 0 !== e) return e;
        return t
    }
}), $(document).ready(function() {
    var e, t, n, i, o;
    new LazyLoad({}), e = function(e) {
        var t, n = navigator.userAgent,
            i = /iphone/i.test(n),
            o = /chrome/i.test(n),
            r = /android/i.test(n);
        e.mask = {
            definitions: {
                9: "[0-9]",
                a: "[A-Za-z]",
                "*": "[A-Za-z0-9]"
            },
            autoclear: !0,
            dataName: "rawMaskFn",
            placeholder: "_"
        }, e.fn.extend({
            caret: function(e, t) {
                var n;
                if (0 !== this.length && !this.is(":hidden")) return "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each(function() {
                    this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && ((n = this.createTextRange()).collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select())
                })) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (n = document.selection.createRange(), e = 0 - n.duplicate().moveStart("character", -1e5), t = e + n.text.length), {
                    begin: e,
                    end: t
                })
            },
            unmask: function() {
                return this.trigger("unmask")
            },
            mask: function(n, s) {
                var a, l, c, d, u, p, f;
                if (!n && 0 < this.length) {
                    var h = e(this[0]).data(e.mask.dataName);
                    return h ? h() : void 0
                }
                return s = e.extend({
                    autoclear: e.mask.autoclear,
                    placeholder: e.mask.placeholder,
                    completed: null
                }, s), a = e.mask.definitions, l = [], c = p = n.length, d = null, e.each(n.split(""), function(e, t) {
                    "?" == t ? (p--, c = e) : a[t] ? (l.push(new RegExp(a[t])), null === d && (d = l.length - 1), e < c && (u = l.length - 1)) : l.push(null)
                }), this.trigger("unmask").each(function() {
                    function h() {
                        if (s.completed) {
                            for (var e = d; e <= u; e++)
                                if (l[e] && T[e] === g(e)) return;
                            s.completed.call(k)
                        }
                    }

                    function g(e) {
                        return s.placeholder.charAt(e < s.placeholder.length ? e : 0)
                    }

                    function v(e) {
                        for (; ++e < p && !l[e];);
                        return e
                    }

                    function m(e, t) {
                        var n, i;
                        if (!(e < 0)) {
                            for (n = e, i = v(t); n < p; n++)
                                if (l[n]) {
                                    if (!(i < p && l[n].test(T[i]))) break;
                                    T[n] = T[i], T[i] = g(i), i = v(i)
                                } w(), k.caret(Math.max(d, e))
                        }
                    }

                    function y() {
                        x(), k.val() != C && k.change()
                    }

                    function b(e, t) {
                        for (var n = e; n < t && n < p; n++) l[n] && (T[n] = g(n))
                    }

                    function w() {
                        k.val(T.join(""))
                    }

                    function x(e) {
                        for (var t, n = k.val(), i = -1, o = 0, r = 0; o < p; o++)
                            if (l[o]) {
                                for (T[o] = g(o); r++ < n.length;)
                                    if (t = n.charAt(r - 1), l[o].test(t)) {
                                        T[o] = t, i = o;
                                        break
                                    } if (r > n.length) {
                                    b(o + 1, p);
                                    break
                                }
                            } else T[o] === n.charAt(r) && r++, o < c && (i = o);
                        return e ? w() : i + 1 < c ? s.autoclear || T.join("") === S ? (k.val() && k.val(""), b(0, p)) : w() : (w(), k.val(k.val().substring(0, i + 1))), c ? o : d
                    }
                    var k = e(this),
                        T = e.map(n.split(""), function(e, t) {
                            return "?" != e ? a[e] ? g(t) : e : void 0
                        }),
                        S = T.join(""),
                        C = k.val();
                    k.data(e.mask.dataName, function() {
                        return e.map(T, function(e, t) {
                            return l[t] && e != g(t) ? e : null
                        }).join("")
                    }), k.one("unmask", function() {
                        k.off(".mask").removeData(e.mask.dataName)
                    }).on("focus.mask", function() {
                        var e;
                        k.prop("readonly") || (clearTimeout(t), C = k.val(), e = x(), t = setTimeout(function() {
                            k.get(0) === document.activeElement && (w(), e == n.replace("?", "").length ? k.caret(0, e) : k.caret(e))
                        }, 10))
                    }).on("blur.mask", y).on("keydown.mask", function(e) {
                        var t, n, o;
                        k.prop("readonly") || (o = e.which || e.keyCode, f = k.val(), 8 === o || 46 === o || i && 127 === o ? (t = (n = k.caret()).begin, (n = n.end) - t == 0 && (t = 46 !== o ? function(e) {
                            for (; 0 <= --e && !l[e];);
                            return e
                        }(t) : n = v(t - 1), n = 46 === o ? v(n) : n), b(t, n), m(t, n - 1), e.preventDefault()) : 13 === o ? y.call(this, e) : 27 === o && (k.val(C), k.caret(0, x()), e.preventDefault()))
                    }).on("keypress.mask", function(t) {
                        var n, i, o, s, a;
                        k.prop("readonly") || (s = t.which || t.keyCode, a = k.caret(), t.ctrlKey || t.altKey || t.metaKey || s < 32 || !s || 13 === s || (a.end - a.begin != 0 && (b(a.begin, a.end), m(a.begin, a.end - 1)), (n = v(a.begin - 1)) < p && (i = String.fromCharCode(s), l[n].test(i)) && (function(e) {
                            for (var t, n, i = e, o = g(e); i < p; i++)
                                if (l[i]) {
                                    if (t = v(i), n = T[i], T[i] = o, !(t < p && l[t].test(n))) break;
                                    o = n
                                }
                        }(n), T[n] = i, w(), o = v(n), r ? setTimeout(function() {
                            e.proxy(e.fn.caret, k, o)()
                        }, 0) : k.caret(o), a.begin <= u && h()), t.preventDefault()))
                    }).on("input.mask paste.mask", function() {
                        k.prop("readonly") || setTimeout(function() {
                            var e = x(!0);
                            k.caret(e), h()
                        }, 0)
                    }), o && r && k.off("input.mask").on("input.mask", function() {
                        var e = k.val(),
                            t = k.caret();
                        if (f && f.length && f.length > e.length) {
                            for (x(!0); 0 < t.begin && !l[t.begin - 1];) t.begin--;
                            if (0 === t.begin)
                                for (; t.begin < d && !l[t.begin];) t.begin++;
                            k.caret(t.begin, t.begin)
                        } else {
                            for (x(!0); t.begin < p && !l[t.begin];) t.begin++;
                            k.caret(t.begin, t.begin)
                        }
                        h()
                    }), x()
                })
            }
        })
    }, "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? require("jquery") : jQuery), $(document).ready(function() {
        var e = ".js-alert";
        $(".js-phone").mask("+7(999) 999-99-99"), $(".js-order-form").submit(function(t) {
            var n = $(this).find("button");
            t.preventDefault(), $(e).hide().html(), n.attr("disabled", "disabled"), $.ajax({
                url: "./send.php",
                dataType: "json",
                data: $(this).serialize(),
                method: "POST",
                success: function(t) {
                //    const i = JSON.parse(t.responseText.replace("on", "")).result.error_message;
                //    "" !== i ? $(e).show().html(i) : window.location.href = "success", n.removeAttr("disabled")
					window.location.href = "success";
                },
                error: function(t) {
                    const i = JSON.parse(t.responseText.replace("on", "")).result.error_message;
                    "" !== i ? $(e).show().html(i) : window.location.href = "success", n.removeAttr("disabled")
                }
            })
        })
    }), t = ".js-device-slider", $(t).slick({
        arrows: !1
    }), $(".js-device-slider__prev").click(function() {
        return $(t).slick("slickPrev")
    }), $(".js-device-slider__next").click(function() {
        return $(t).slick("slickNext")
    }), $("[href='#feedback']").click(function() {
        ym(86293547, "reachGoal", "popup_open")
    }), n = ".js-open__menu", i = ".js-menu", o = ".js-header", $(n).click(function() {
        $(o).toggleClass("is--yellow"), $(this).toggleClass("burger_active"), $(i).toggleClass("is--show")
    }), $(i).find("a").click(function() {
        $(i).hasClass("is--show") && ($(o).removeClass("is--yellow"), $(n).removeClass("burger_active"), $(i).removeClass("is--show"))
    })
});