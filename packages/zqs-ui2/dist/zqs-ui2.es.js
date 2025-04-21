import V from "vue";
var F = function() {
  var e = this, t = e.$createElement, s = e._self._c || t;
  return s("button", {
    staticClass: "zqs-button",
    class: [`zqs-button-${e.type}`, {
      "is-plain": e.plain
    }, {
      "is-round": e.round
    }, {
      "is-circle": e.circle
    }, {
      "is-disabled": e.disabled
    }, `zqs-button-${e.size}`],
    on: {
      click: e.handleClick
    }
  }, [s("span", [e._t("default")], 2)]);
}, M = [];
function r(e, t, s, l, n, u, o, b) {
  var a = typeof e == "function" ? e.options : e;
  t && (a.render = t, a.staticRenderFns = s, a._compiled = !0), l && (a.functional = !0), u && (a._scopeId = "data-v-" + u);
  var c;
  if (o ? (c = function(i) {
    i = i || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !i && typeof __VUE_SSR_CONTEXT__ < "u" && (i = __VUE_SSR_CONTEXT__), n && n.call(this, i), i && i._registeredComponents && i._registeredComponents.add(o);
  }, a._ssrRegister = c) : n && (c = b ? function() {
    n.call(
      this,
      (a.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : n), c)
    if (a.functional) {
      a._injectStyles = c;
      var B = a.render;
      a.render = function(R, g) {
        return c.call(g), B(R, g);
      };
    } else {
      var $ = a.beforeCreate;
      a.beforeCreate = $ ? [].concat($, c) : [c];
    }
  return {
    exports: e,
    options: a
  };
}
const L = {
  name: "zqs-button",
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
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
}, S = {};
var N = /* @__PURE__ */ r(
  L,
  F,
  M,
  !1,
  Z,
  "69352376",
  null,
  null
);
function Z(e) {
  for (let t in S)
    this[t] = S[t];
}
const _ = /* @__PURE__ */ function() {
  return N.exports;
}();
_.install = function(e) {
  e.component(_.name, _);
};
var A = function() {
  var e = this, t = e.$createElement, s = e._self._c || t;
  return s("table", {
    ref: "tableRef",
    staticClass: "zqs-table"
  }, [s("thead", [s("tr", e._l(e.columns, function(l, n) {
    return s("th", {
      key: n
    }, [s("span", [e._v(e._s(l.label || l.value))])]);
  }), 0)]), s("tbody", e._l(e.data, function(l, n) {
    return s("tr", {
      key: n,
      staticClass: "tr",
      style: n % 2 !== 0 && e.stript ? {
        "background-color": "#f5f7fa"
      } : {
        "background-color": "#fff"
      }
    }, e._l(e.columnsValues, function(u, o) {
      return s("td", {
        key: o
      }, [e._v(" " + e._s(l[u]) + " ")]);
    }), 0);
  }), 0)]);
}, O = [];
const j = {
  name: "zqs-table",
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
  data() {
    return {
      columnsValues: []
    };
  },
  watch: {
    columns: {
      immediate: !0,
      handler(e) {
        this.columnsValues = e.map((t) => t.value);
      }
    }
  },
  mounted() {
    this.$refs.tableRef.style.width = this.width;
  }
}, C = {};
var D = /* @__PURE__ */ r(
  j,
  A,
  O,
  !1,
  P,
  "6d850bfb",
  null,
  null
);
function P(e) {
  for (let t in C)
    this[t] = C[t];
}
const d = /* @__PURE__ */ function() {
  return D.exports;
}();
d.install = function(e) {
  e.component(d.name, d);
};
var H = function() {
  var e = this, t = e.$createElement, s = e._self._c || t;
  return s("div", {
    staticClass: "zqs-input"
  }, [s("input", {
    staticClass: "zqs-input-inner",
    class: [{
      "is-disabled": e.disabled
    }],
    attrs: {
      type: e.type,
      placeholder: e.placeholder,
      disabled: e.disabled,
      name: e.name
    },
    domProps: {
      value: e.value
    },
    on: {
      input: e.handleInput
    }
  })]);
}, I = [];
const K = {
  name: "zqs-input",
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
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    }
  }
}, q = {};
var U = /* @__PURE__ */ r(
  K,
  H,
  I,
  !1,
  X,
  "0a5399c4",
  null,
  null
);
function X(e) {
  for (let t in q)
    this[t] = q[t];
}
const p = /* @__PURE__ */ function() {
  return U.exports;
}();
p.install = function(e) {
  e.component(p.name, p);
};
var W = function() {
  var e = this, t = e.$createElement, s = e._self._c || t;
  return s("transition", {
    attrs: {
      name: "el-fade-in-linear"
    }
  }, [e.visible ? s("div", {
    staticClass: "zqs-alert",
    class: [`zqs-alert--${e.type}`, `zqs-alert-${e.size}`]
  }, [s("div", {
    staticClass: "zqs-alert__content"
  }, [e._v(e._s(e.message))])]) : e._e()]);
}, Y = [];
const G = {
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
      validator: (e) => ["small", "medium", "large"].includes(e)
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
}, k = {};
var J = /* @__PURE__ */ r(
  G,
  W,
  Y,
  !1,
  Q,
  "69e069d4",
  null,
  null
);
function Q(e) {
  for (let t in k)
    this[t] = k[t];
}
const ee = /* @__PURE__ */ function() {
  return J.exports;
}(), te = V.extend(ee), se = (e) => {
  const t = new te({
    propsData: e
  });
  return t.$mount(), document.body.appendChild(t.$el), {
    close: () => {
      t.$destroy(), document.body.removeChild(t.$el);
    }
  };
};
var ne = function() {
  var e = this, t = e.$createElement, s = e._self._c || t;
  return s("label", {
    staticClass: "zqs-checkbox",
    class: [{
      "is-checked": e.value
    }, {
      "is-disabled": e.disabled
    }]
  }, [s("span", {
    staticClass: "zqs-checkbox-input"
  }, [s("span", {
    staticClass: "zqs-checkbox-inner"
  }), s("input", {
    staticClass: "zqs-checkbox-original",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: e.value
    },
    on: {
      click: e.handleClick
    }
  })]), s("span", {
    staticClass: "zqs-checkbox-label"
  }, [e._t("default"), e.$slots.default ? e._e() : [e._v(e._s(e.label))]], 2)]);
}, ae = [];
const le = {
  name: "zqs-checkbox",
  props: {
    value: {
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
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  methods: {
    handleClick() {
      this.disabled || this.$emit("input", !this.value);
    }
  }
}, x = {};
var oe = /* @__PURE__ */ r(
  le,
  ne,
  ae,
  !1,
  ie,
  "0d28e5f3",
  null,
  null
);
function ie(e) {
  for (let t in x)
    this[t] = x[t];
}
const h = /* @__PURE__ */ function() {
  return oe.exports;
}();
h.install = function(e) {
  e.component(h.name, h);
};
var re = function() {
  var e = this, t = e.$createElement, s = e._self._c || t;
  return s("div", {
    staticClass: "zqs-select"
  }, [s("input", {
    class: {
      border: e.isBorder
    },
    style: {
      color: e.isEmpty ? "silver" : "black"
    },
    attrs: {
      type: "text",
      disabled: e.disabled,
      readonly: ""
    },
    domProps: {
      value: e.selectLabel
    }
  }), s("transition", {
    attrs: {
      name: "slide-fade"
    }
  }, [s("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: e.positionShow,
      expression: "positionShow"
    }],
    staticClass: "zqs-position-box"
  }, [e._t("default")], 2)])], 1);
}, ce = [];
const ue = {
  name: "zqs-select",
  props: {
    options: {
      type: Array,
      default: () => []
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
  data() {
    return {
      positionShow: !1,
      selectLabel: "Select",
      isEmpty: !0,
      isBorder: !1
    };
  },
  provide() {
    return {
      // 响应式
      selectValue: () => this.value,
      changeSelectValue: this.changeSelectValue
    };
  },
  watch: {
    value(e) {
      this.selectLabel = e || "Select", this.isEmpty = !e;
    }
  },
  methods: {
    changeSelectValue(e, t) {
      this.disabled || (this.$emit("input", e), this.selectLabel = t || e || "", this.isEmpty = !1);
    },
    handleClickOutside(e) {
      this.$el.contains(e.target) ? (this.positionShow = !0, this.isBorder = !0) : (this.positionShow = !1, this.isBorder = !1, this.isEmpty = !1);
    }
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  }
}, w = {};
var _e = /* @__PURE__ */ r(
  ue,
  re,
  ce,
  !1,
  de,
  "2b031266",
  null,
  null
);
function de(e) {
  for (let t in w)
    this[t] = w[t];
}
const f = /* @__PURE__ */ function() {
  return _e.exports;
}();
f.install = function(e) {
  e.component(f.name, f);
};
var pe = function() {
  var e = this, t = e.$createElement, s = e._self._c || t;
  return s("div", {
    key: e.customKey,
    class: {
      "is-selected": e.isSelected
    },
    on: {
      click: e.changeOptionValue
    }
  }, [e._v(" " + e._s(e.label || e.value || "") + " ")]);
}, he = [];
const fe = {
  name: "zqs-option",
  props: {
    label: {
      type: [String, Number],
      default: ""
    },
    value: {
      type: [String, Number],
      default: ""
    },
    customKey: {
      type: [String, Number],
      default: ""
    }
  },
  inject: ["selectValue", "changeSelectValue"],
  computed: {
    isSelected() {
      return this.selectValue() === this.value;
    }
  },
  mounted() {
    this.value === this.selectValue && this.changeSelectValue(this.value, this.label);
  },
  methods: {
    changeOptionValue() {
      this.changeSelectValue(this.value, this.label);
    }
  }
}, z = {};
var ve = /* @__PURE__ */ r(
  fe,
  pe,
  he,
  !1,
  me,
  "202eb75d",
  null,
  null
);
function me(e) {
  for (let t in z)
    this[t] = z[t];
}
const v = /* @__PURE__ */ function() {
  return ve.exports;
}();
v.install = function(e) {
  e.component(v.name, v);
};
var ye = function() {
  var e = this, t = e.$createElement, s = e._self._c || t;
  return s("transition", {
    attrs: {
      name: "fade"
    }
  }, [s("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: e.visible,
      expression: "visible"
    }],
    staticClass: "zqs-backtop",
    style: {
      right: e.right,
      bottom: e.bottom
    },
    on: {
      click: e.handleClick
    }
  }, [e._t("default", function() {
    return [s("div", {
      staticClass: "zqs-backtop__content"
    }, [s("i", {
      staticClass: "zqs-icon-caret-top"
    }, [e._v("Top")])])];
  })], 2)]);
}, be = [];
const $e = {
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
  beforeDestroy() {
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
    setScrollTop(e) {
      this.container === window ? window.scrollTo(0, e) : this.container.scrollTop = e;
    },
    handleScroll() {
      const e = this.getScrollTop();
      this.visible = e >= this.visibilityHeight;
    },
    handleClick() {
      this.scrollToTop(), this.$emit("click");
    },
    scrollToTop() {
      const e = this.getScrollTop(), t = Date.now(), s = 500, l = () => {
        const n = Date.now(), u = Math.min(n - t, s), o = u / s, b = o < 0.5 ? 2 * o * o : 1 - Math.pow(-2 * o + 2, 2) / 2;
        this.setScrollTop(e - e * b), u < s ? requestAnimationFrame(l) : this.setScrollTop(0);
      };
      requestAnimationFrame(l);
    },
    throttle(e, t) {
      let s = 0;
      return function(...l) {
        const n = Date.now();
        n - s >= t && (e.apply(this, l), s = n);
      };
    }
  }
}, T = {};
var ge = /* @__PURE__ */ r(
  $e,
  ye,
  be,
  !1,
  Se,
  "61558ff1",
  null,
  null
);
function Se(e) {
  for (let t in T)
    this[t] = T[t];
}
const m = /* @__PURE__ */ function() {
  return ge.exports;
}();
m.install = function(e) {
  e.component(m.name, m);
};
var Ce = function() {
  var e = this, t = e.$createElement, s = e._self._c || t;
  return s("header", {
    staticClass: "zqs-header"
  }, [s("div", {
    staticClass: "left"
  }, [s("img", {
    staticClass: "logo",
    attrs: {
      src: e.logo,
      alt: "Logo"
    }
  }), s("span", {
    staticClass: "system-name"
  }, [e._v(e._s(e.systemName))])]), s("div", {
    staticClass: "right"
  }, [s("img", {
    staticClass: "avatar",
    attrs: {
      src: e.avatar,
      alt: "Avatar"
    }
  }), s("span", {
    staticClass: "username"
  }, [e._v(e._s(e.username))]), s("button", {
    staticClass: "logout-button",
    on: {
      click: e.handleLogout
    }
  }, [e._v("退出登录")])])]);
}, qe = [];
const ke = {
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
}, E = {};
var xe = /* @__PURE__ */ r(
  ke,
  Ce,
  qe,
  !1,
  we,
  "34ad9b1a",
  null,
  null
);
function we(e) {
  for (let t in E)
    this[t] = E[t];
}
const y = /* @__PURE__ */ function() {
  return xe.exports;
}();
y.install = function(e) {
  e.component(y.name, y);
};
const ze = [
  _,
  d,
  p,
  h,
  f,
  v,
  m,
  y
], Te = (e) => {
  ze.forEach((t) => {
    e.component(t.name, t);
  }), e.prototype.$alert = se;
}, Be = {
  install: Te
};
export {
  se as ZqsAlert,
  m as ZqsBackTop,
  _ as ZqsButton,
  h as ZqsCheckbox,
  y as ZqsHeader,
  p as ZqsInput,
  f as ZqsSelect,
  v as ZqsSelectOption,
  d as ZqsTable,
  Be as default
};
