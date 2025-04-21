import { createElementBlock as r, openBlock as c, normalizeClass as _, createElementVNode as o, renderSlot as T, ref as m, watch as j, onMounted as D, Fragment as y, renderList as E, toDisplayString as f, normalizeStyle as I, createBlock as M, Transition as O, withCtx as N, createCommentVNode as H, createVNode as F, render as Z, inject as w, createTextVNode as K, provide as A, withDirectives as B, vShow as G, unref as P } from "vue";
const p = (t, l) => {
  const e = t.__vccOpts || t;
  for (const [s, n] of l)
    e[s] = n;
  return e;
}, R = {
  name: "zqs-button"
}, U = /* @__PURE__ */ Object.assign(R, {
  props: {
    type: {
      type: String,
      default: "default"
    },
    plain: {
      type: Boolean,
      default: !1
    },
    round: {
      type: Boolean,
      default: !1
    },
    circle: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "medium"
    },
    loading: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  setup(t, { emit: l }) {
    const e = t, s = l, n = () => {
      s("click");
    };
    return (a, i) => (c(), r("button", {
      onClick: n,
      class: _(["zqs-button", [
        `zqs-button-${e.type}`,
        { "is-plain": e.plain },
        { "is-round": e.round },
        { "is-circle": e.circle },
        { "is-disabled": e.disabled },
        `zqs-button-${e.size}`
      ]])
    }, [
      o("span", null, [
        T(a.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), k = /* @__PURE__ */ p(U, [["__scopeId", "data-v-13895824"]]);
k.install = (t) => {
  t.component(k.name, k);
};
const Y = {
  name: "zqs-table"
}, J = /* @__PURE__ */ Object.assign(Y, {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    width: {
      type: String,
      default: "600px"
    },
    stript: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const l = t, e = m([]);
    e.value = l.columns.map((n) => n.value), j(
      () => l.columns,
      () => {
        e.value = l.columns.map((n) => n.value);
      }
    );
    const s = m(null);
    return D(
      () => {
        s.value.style.width = l.width, s.value.style.height = l.height;
      }
    ), console.log(l.stript), (n, a) => (c(), r("table", {
      class: "zqs-table",
      ref_key: "tableRef",
      ref: s
    }, [
      o("thead", null, [
        o("tr", null, [
          (c(!0), r(y, null, E(t.columns, (i, u) => (c(), r("th", { key: u }, [
            o("span", null, f(i.label || i.value), 1)
          ]))), 128))
        ])
      ]),
      o("tbody", null, [
        (c(!0), r(y, null, E(t.data, (i, u) => (c(), r("tr", {
          class: "tr",
          key: u,
          style: I(u % 2 != 0 && l.stript ? {
            "background-color": "#f5f7fa"
          } : { "background-color": "#fff" })
        }, [
          (c(!0), r(y, null, E(e.value, (b, d) => (c(), r("td", { key: d }, f(i[b]), 1))), 128))
        ], 4))), 128))
      ])
    ], 512));
  }
}), q = /* @__PURE__ */ p(J, [["__scopeId", "data-v-ee72c0d3"]]);
q.install = (t) => {
  t.component(q.name, q);
};
const Q = { class: "zqs-input" }, W = ["type", "placeholder", "disabled", "name", "value"], X = {
  name: "zqs-input"
}, ee = /* @__PURE__ */ Object.assign(X, {
  props: {
    type: {
      type: String
    },
    placeholder: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    name: {
      type: String,
      default: ""
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: l }) {
    const e = t, s = l, n = (a) => {
      s("update:modelValue", a.target.value);
    };
    return (a, i) => (c(), r("div", Q, [
      o("input", {
        class: _(["zqs-input-inner", [{ "is-disabled": e.disabled }]]),
        type: e.type,
        placeholder: e.placeholder,
        disabled: e.disabled,
        name: t.name,
        value: e.modelValue,
        onInput: n
      }, null, 42, W)
    ]));
  }
}), S = /* @__PURE__ */ p(ee, [["__scopeId", "data-v-a36cabac"]]);
S.install = (t) => {
  t.component(S.name, S);
};
const te = {
  name: "zqs-alert",
  props: {
    type: {
      type: String,
      default: "info"
      // 类型：success, warning, info, error
    },
    size: {
      type: String,
      default: "medium",
      // 弹框大小：small, medium, large
      validator: (t) => ["small", "medium", "large"].includes(t)
    },
    message: {
      type: String,
      required: !0
      // 提示内容
    },
    duration: {
      type: Number,
      default: 3e3
      // 自动关闭时间，单位毫秒
    }
  },
  data() {
    return {
      visible: !0
    };
  },
  mounted() {
    setTimeout(() => {
      this.close();
    }, this.duration);
  },
  methods: {
    close() {
      this.visible = !1, this.$emit("close");
    }
  }
}, le = { class: "zqs-alert__content" };
function se(t, l, e, s, n, a) {
  return c(), M(O, { name: "el-fade-in-linear" }, {
    default: N(() => [
      n.visible ? (c(), r("div", {
        key: 0,
        class: _(["zqs-alert", [`zqs-alert--${e.type}`, `zqs-alert-${e.size}`]])
      }, [
        o("div", le, f(e.message), 1)
      ], 2)) : H("", !0)
    ]),
    _: 1
  });
}
const ne = /* @__PURE__ */ p(te, [["render", se], ["__scopeId", "data-v-c6c18935"]]), L = (t) => {
  const l = document.createElement("div"), e = F(ne, t);
  return Z(e, l), document.body.appendChild(l.firstElementChild), {
    close: () => {
      Z(null, l), document.body.removeChild(l.firstElementChild);
    }
  };
}, ae = { class: "zqs-checkbox-label" }, oe = {
  name: "zqs-checkbox"
}, ie = /* @__PURE__ */ Object.assign(oe, {
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    name: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: l }) {
    const e = t;
    let s = w("checkbox-group"), n = w("checkbox-group-handleClick");
    const a = m(!1);
    console.log(s), (() => {
      if (s != null)
        for (let d = 0; d < s.length; d++)
          console.log(e.value), s[d] === e.value && (a.value = !0, console.log(a.value));
    })();
    const u = l, b = () => {
      if (s != null) {
        if (e.disabled == !0)
          return;
        s.includes(e.value) ? (s.splice(s.indexOf(e.value), 1), a.value = !1) : (s.push(e.value), a.value = !0), n(s);
      } else
        u("update:modelValue", !e.modelValue);
    };
    return (d, v) => (c(), r("label", {
      class: _(["zqs-checkbox", [{ "is-checked": e.modelValue == !1 ? a.value : e.modelValue }, { "is-disabled": e.disabled }]])
    }, [
      o("span", { class: "zqs-checkbox-input" }, [
        v[0] || (v[0] = o("span", { class: "zqs-checkbox-inner" }, null, -1)),
        o("input", {
          type: "checkbox",
          class: "zqs-checkbox-original",
          onClick: b
        })
      ]),
      o("span", ae, [
        T(d.$slots, "default", {}, void 0, !0),
        d.$slots.default ? H("", !0) : (c(), r(y, { key: 0 }, [
          K(f(t.label), 1)
        ], 64))
      ])
    ], 2));
  }
}), z = /* @__PURE__ */ p(ie, [["__scopeId", "data-v-71965916"]]);
z.install = (t) => {
  t.component(z.name, z);
};
const ce = { class: "zqs-select" }, re = ["disabled", "value"], ue = { class: "zqs-position-box" }, de = {
  name: "zqs-select"
}, pe = /* @__PURE__ */ Object.assign(de, {
  props: {
    options: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: l }) {
    const e = m(!1), s = {
      beforeMount(h) {
        document.addEventListener("click", (g) => {
          h.contains(g.target) ? (e.value = !0, u.value = !0) : (e.value = !1, u.value = !1, i.value = !1);
        });
      }
    }, n = t, a = m("Select"), i = m(!0), u = m(!1), b = l, d = (h, g) => {
      b("update:modelValue", h), n.disabled != !0 && (a.value = g || h || "", i.value = !1);
    }, v = m(n.modelValue);
    return j(() => n.modelValue, () => {
      v.value = n.modelValue;
    }), A("selectValue", v), A("changeSelectValue", d), (h, g) => B((c(), r("div", ce, [
      o("input", {
        type: "text",
        disabled: n.disabled,
        value: a.value,
        readonly: "",
        style: I({
          color: i.value == !1 ? "black" : "silver"
        }),
        class: _([{ border: u.value }])
      }, null, 14, re),
      F(O, { name: "slide-fade" }, {
        default: N(() => [
          B(o("div", ue, [
            T(h.$slots, "default", {}, void 0, !0)
          ], 512), [
            [G, e.value]
          ])
        ]),
        _: 3
      })
    ])), [
      [s]
    ]);
  }
}), $ = /* @__PURE__ */ p(pe, [["__scopeId", "data-v-686c536f"]]);
$.install = (t) => {
  t.component($.name, $);
};
const me = {
  name: "zqs-option"
}, fe = /* @__PURE__ */ Object.assign(me, {
  props: {
    label: {
      type: String || Number,
      default: ""
    },
    value: {
      type: String || Number,
      default: ""
    },
    customKey: {
      type: String || Number,
      default: ""
    }
  },
  setup(t) {
    const l = t, e = w("changeSelectValue"), s = w("selectValue"), n = () => {
      e(l.value, l.label);
    };
    return D(() => {
      l.value == s.value && e(l.value, l.label);
    }), (a, i) => (c(), r("div", {
      class: _(["zqs-option", [{ "is-selected": P(s) == l.value }]]),
      key: l.customKey,
      onClick: n
    }, f(l.label || l.value || ""), 3));
  }
}), V = /* @__PURE__ */ p(fe, [["__scopeId", "data-v-d1d9ed31"]]);
V.install = (t) => {
  t.component(V.name, V);
};
const he = {
  name: "zqs-backTop",
  props: {
    target: {
      type: String,
      default: ""
    },
    visibilityHeight: {
      type: Number,
      default: 200
    },
    right: {
      type: String,
      default: "40px"
    },
    bottom: {
      type: String,
      default: "40px"
    }
  },
  data() {
    return {
      visible: !1,
      container: null,
      scrollEvent: null
    };
  },
  mounted() {
    this.initContainer(), this.bindScroll();
  },
  beforeUnmount() {
    this.unbindScroll();
  },
  methods: {
    initContainer() {
      if (this.container = this.target ? document.querySelector(this.target) : window, !this.container)
        throw new Error(`Target element ${this.target} not found.`);
    },
    bindScroll() {
      this.container && (this.scrollEvent = this.throttle(this.handleScroll, 100), this.container.addEventListener("scroll", this.scrollEvent), this.handleScroll());
    },
    unbindScroll() {
      this.container && this.scrollEvent && this.container.removeEventListener("scroll", this.scrollEvent);
    },
    getScrollTop() {
      return this.container === window ? Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
      ) : this.container.scrollTop;
    },
    setScrollTop(t) {
      this.container === window ? window.scrollTo(0, t) : this.container.scrollTop = t;
    },
    handleScroll() {
      const t = this.getScrollTop();
      this.visible = t >= this.visibilityHeight;
    },
    handleClick() {
      this.scrollToTop(), this.$emit("click");
    },
    scrollToTop() {
      const t = this.getScrollTop(), l = Date.now(), e = 500, s = () => {
        const n = Date.now(), a = Math.min(n - l, e), i = a / e, u = i < 0.5 ? 2 * i * i : 1 - Math.pow(-2 * i + 2, 2) / 2;
        this.setScrollTop(t - t * u), a < e ? requestAnimationFrame(s) : this.setScrollTop(0);
      };
      requestAnimationFrame(s);
    },
    throttle(t, l) {
      let e = 0;
      return function(...s) {
        const n = Date.now();
        n - e >= l && (t.apply(this, s), e = n);
      };
    }
  }
};
function _e(t, l, e, s, n, a) {
  return c(), M(O, { name: "fade" }, {
    default: N(() => [
      B(o("div", {
        class: "zqs-backtop",
        onClick: l[0] || (l[0] = (...i) => a.handleClick && a.handleClick(...i)),
        style: I({ right: e.right, bottom: e.bottom })
      }, [
        T(t.$slots, "default", {}, () => [
          l[1] || (l[1] = o("div", { class: "zqs-backtop__content" }, [
            o("i", { class: "zqs-icon-caret-top" }, "Top")
          ], -1))
        ], !0)
      ], 4), [
        [G, n.visible]
      ])
    ]),
    _: 3
  });
}
const C = /* @__PURE__ */ p(he, [["render", _e], ["__scopeId", "data-v-eb413b17"]]);
C.install = (t) => {
  t.component(C.name, C);
};
const be = {
  name: "zqs-header",
  props: {
    logo: {
      type: String,
      required: !0
      // 左侧 Logo 图片路径
    },
    systemName: {
      type: String,
      required: !0
      // 系统名称
    },
    avatar: {
      type: String,
      required: !0
      // 右侧头像图片路径
    },
    username: {
      type: String,
      required: !0
      // 用户名
    }
  },
  methods: {
    handleLogout() {
      this.$emit("logout");
    }
  }
}, ve = { class: "zqs-header" }, ge = { class: "left" }, ye = ["src"], ke = { class: "system-name" }, qe = { class: "right" }, Se = ["src"], ze = { class: "username" };
function $e(t, l, e, s, n, a) {
  return c(), r("header", ve, [
    o("div", ge, [
      o("img", {
        src: e.logo,
        alt: "Logo",
        class: "logo"
      }, null, 8, ye),
      o("span", ke, f(e.systemName), 1)
    ]),
    o("div", qe, [
      o("img", {
        src: e.avatar,
        alt: "Avatar",
        class: "avatar"
      }, null, 8, Se),
      o("span", ze, f(e.username), 1),
      o("button", {
        class: "logout-button",
        onClick: l[0] || (l[0] = (...i) => a.handleLogout && a.handleLogout(...i))
      }, "退出登录")
    ])
  ]);
}
const x = /* @__PURE__ */ p(be, [["render", $e], ["__scopeId", "data-v-028efe54"]]);
x.install = (t) => {
  t.component(x.name, x);
};
const Ve = [
  k,
  q,
  S,
  z,
  $,
  V,
  C,
  x
], Ce = (t) => {
  Ve.forEach((l) => t.use(l)), t.config.globalProperties.$alert = L, t.provide("ZqsAlert", L);
}, we = {
  install: Ce
};
export {
  L as ZqsAlert,
  C as ZqsBackTop,
  k as ZqsButton,
  z as ZqsCheckbox,
  x as ZqsHeader,
  S as ZqsInput,
  $ as ZqsSelect,
  V as ZqsSelectOption,
  q as ZqsTable,
  we as default
};
