import { createElementBlock as r, openBlock as u, normalizeClass as S, createElementVNode as a, renderSlot as K, ref as v, watch as X, onMounted as V, Fragment as $, renderList as z, toDisplayString as g, normalizeStyle as w, createBlock as ee, Transition as R, withCtx as U, createCommentVNode as te, createVNode as le, render as Q, inject as F, createTextVNode as se, provide as P, withDirectives as G, vShow as Y, unref as ae, onBeforeUnmount as oe, reactive as ce } from "vue";
const y = (t, l) => {
  const e = t.__vccOpts || t;
  for (const [s, n] of l)
    e[s] = n;
  return e;
}, ue = {
  name: "zqs-button"
}, re = /* @__PURE__ */ Object.assign(ue, {
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
    return (o, i) => (u(), r("button", {
      onClick: n,
      class: S(["zqs-button", [
        `zqs-button-${e.type}`,
        { "is-plain": e.plain },
        { "is-round": e.round },
        { "is-circle": e.circle },
        { "is-disabled": e.disabled },
        `zqs-button-${e.size}`
      ]])
    }, [
      a("span", null, [
        K(o.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), I = /* @__PURE__ */ y(re, [["__scopeId", "data-v-13895824"]]);
I.install = (t) => {
  t.component(I.name, I);
};
const ie = {
  name: "zqs-table"
}, de = /* @__PURE__ */ Object.assign(ie, {
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
    const l = t, e = v([]);
    e.value = l.columns.map((n) => n.value), X(
      () => l.columns,
      () => {
        e.value = l.columns.map((n) => n.value);
      }
    );
    const s = v(null);
    return V(
      () => {
        s.value.style.width = l.width, s.value.style.height = l.height;
      }
    ), (n, o) => (u(), r("table", {
      class: "zqs-table",
      ref_key: "tableRef",
      ref: s
    }, [
      a("thead", null, [
        a("tr", null, [
          (u(!0), r($, null, z(t.columns, (i, m) => (u(), r("th", { key: m }, [
            a("span", null, g(i.label || i.value), 1)
          ]))), 128))
        ])
      ]),
      a("tbody", null, [
        (u(!0), r($, null, z(t.data, (i, m) => (u(), r("tr", {
          class: "tr",
          key: m,
          style: w(m % 2 != 0 && l.stript ? {
            "background-color": "#f5f7fa"
          } : { "background-color": "#fff" })
        }, [
          (u(!0), r($, null, z(e.value, (h, f) => (u(), r("td", { key: f }, g(i[h]), 1))), 128))
        ], 4))), 128))
      ])
    ], 512));
  }
}), O = /* @__PURE__ */ y(de, [["__scopeId", "data-v-4b6072d9"]]);
O.install = (t) => {
  t.component(O.name, O);
};
const pe = { class: "zqs-input" }, me = ["type", "placeholder", "disabled", "name", "value"], fe = {
  name: "zqs-input"
}, _e = /* @__PURE__ */ Object.assign(fe, {
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
    const e = t, s = l, n = (o) => {
      s("update:modelValue", o.target.value);
    };
    return (o, i) => (u(), r("div", pe, [
      a("input", {
        class: S(["zqs-input-inner", [{ "is-disabled": e.disabled }]]),
        type: e.type,
        placeholder: e.placeholder,
        disabled: e.disabled,
        name: t.name,
        value: e.modelValue,
        onInput: n
      }, null, 42, me)
    ]));
  }
}), E = /* @__PURE__ */ y(_e, [["__scopeId", "data-v-a36cabac"]]);
E.install = (t) => {
  t.component(E.name, E);
};
const ge = { class: "zqs-alert__content" }, ve = {
  name: "zqs-alert"
}, he = /* @__PURE__ */ Object.assign(ve, {
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
  emits: ["close"],
  setup(t, { emit: l }) {
    const e = t, s = l, n = v(!0);
    V(() => {
      e.duration > 0 && setTimeout(() => {
        o();
      }, e.duration);
    });
    const o = () => {
      n.value = !1, s("close");
    };
    return (i, m) => (u(), ee(R, { name: "el-fade-in-linear" }, {
      default: U(() => [
        n.value ? (u(), r("div", {
          key: 0,
          class: S(["zqs-alert", [`zqs-alert--${e.type}`, `zqs-alert-${e.size}`]])
        }, [
          a("div", ge, g(e.message), 1)
        ], 2)) : te("", !0)
      ]),
      _: 1
    }));
  }
}), be = /* @__PURE__ */ y(he, [["__scopeId", "data-v-8b8dccef"]]), W = (t) => {
  const l = document.createElement("div"), e = le(be, t);
  return Q(e, l), document.body.appendChild(l.firstElementChild), {
    close: () => {
      Q(null, l), document.body.removeChild(l.firstElementChild);
    }
  };
}, ye = { class: "zqs-checkbox-label" }, ke = {
  name: "zqs-checkbox"
}, Se = /* @__PURE__ */ Object.assign(ke, {
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
    let s = F("checkbox-group"), n = F("checkbox-group-handleClick");
    const o = v(!1);
    console.log(s), (() => {
      if (s != null)
        for (let f = 0; f < s.length; f++)
          console.log(e.value), s[f] === e.value && (o.value = !0, console.log(o.value));
    })();
    const m = l, h = () => {
      if (s != null) {
        if (e.disabled == !0)
          return;
        s.includes(e.value) ? (s.splice(s.indexOf(e.value), 1), o.value = !1) : (s.push(e.value), o.value = !0), n(s);
      } else
        m("update:modelValue", !e.modelValue);
    };
    return (f, b) => (u(), r("label", {
      class: S(["zqs-checkbox", [{ "is-checked": e.modelValue == !1 ? o.value : e.modelValue }, { "is-disabled": e.disabled }]])
    }, [
      a("span", { class: "zqs-checkbox-input" }, [
        b[0] || (b[0] = a("span", { class: "zqs-checkbox-inner" }, null, -1)),
        a("input", {
          type: "checkbox",
          class: "zqs-checkbox-original",
          onClick: h
        })
      ]),
      a("span", ye, [
        K(f.$slots, "default", {}, void 0, !0),
        f.$slots.default ? te("", !0) : (u(), r($, { key: 0 }, [
          se(g(t.label), 1)
        ], 64))
      ])
    ], 2));
  }
}), Z = /* @__PURE__ */ y(Se, [["__scopeId", "data-v-71965916"]]);
Z.install = (t) => {
  t.component(Z.name, Z);
};
const qe = { class: "zqs-select" }, $e = ["disabled", "value"], xe = { class: "zqs-position-box" }, Ce = {
  name: "zqs-select"
}, ze = /* @__PURE__ */ Object.assign(Ce, {
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
    const e = v(!1), s = {
      beforeMount(c) {
        document.addEventListener("click", (p) => {
          c.contains(p.target) ? (e.value = !0, m.value = !0) : (e.value = !1, m.value = !1, i.value = !1);
        });
      }
    }, n = t, o = v("Select"), i = v(!0), m = v(!1), h = l, f = (c, p) => {
      h("update:modelValue", c), n.disabled != !0 && (o.value = p || c || "", i.value = !1);
    }, b = v(n.modelValue);
    return X(() => n.modelValue, () => {
      b.value = n.modelValue;
    }), P("selectValue", b), P("changeSelectValue", f), (c, p) => G((u(), r("div", qe, [
      a("input", {
        type: "text",
        disabled: n.disabled,
        value: o.value,
        readonly: "",
        style: w({
          color: i.value == !1 ? "black" : "silver"
        }),
        class: S([{ border: m.value }])
      }, null, 14, $e),
      le(R, { name: "slide-fade" }, {
        default: U(() => [
          G(a("div", xe, [
            K(c.$slots, "default", {}, void 0, !0)
          ], 512), [
            [Y, e.value]
          ])
        ]),
        _: 3
      })
    ])), [
      [s]
    ]);
  }
}), j = /* @__PURE__ */ y(ze, [["__scopeId", "data-v-686c536f"]]);
j.install = (t) => {
  t.component(j.name, j);
};
const we = {
  name: "zqs-option"
}, Ve = /* @__PURE__ */ Object.assign(we, {
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
    const l = t, e = F("changeSelectValue"), s = F("selectValue"), n = () => {
      e(l.value, l.label);
    };
    return V(() => {
      l.value == s.value && e(l.value, l.label);
    }), (o, i) => (u(), r("div", {
      class: S(["zqs-option", [{ "is-selected": ae(s) == l.value }]]),
      key: l.customKey,
      onClick: n
    }, g(l.label || l.value || ""), 3));
  }
}), A = /* @__PURE__ */ y(Ve, [["__scopeId", "data-v-d1d9ed31"]]);
A.install = (t) => {
  t.component(A.name, A);
};
const Me = {
  name: "zqs-backTop"
}, Te = /* @__PURE__ */ Object.assign(Me, {
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
  emits: ["click"],
  setup(t, { emit: l }) {
    const e = t, s = l, n = v(!1);
    let o = null, i = null;
    const m = () => {
      if (o = e.target ? document.querySelector(e.target) : window, !o)
        throw new Error(`Target element ${e.target} not found.`);
    }, h = () => o === window ? Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    ) : o.scrollTop, f = (_) => {
      o === window ? window.scrollTo(0, _) : o.scrollTop = _;
    }, b = () => {
      const _ = h();
      n.value = _ >= e.visibilityHeight;
    }, c = () => {
      o && (i = k(b, 100), o.addEventListener("scroll", i), b());
    }, p = () => {
      o && i && o.removeEventListener("scroll", i);
    }, d = () => {
      const _ = h(), q = Date.now(), C = 500, M = () => {
        const T = Date.now(), J = Math.min(T - q, C), B = J / C, ne = B < 0.5 ? 2 * B * B : 1 - Math.pow(-2 * B + 2, 2) / 2;
        f(_ - _ * ne), J < C ? requestAnimationFrame(M) : f(0);
      };
      requestAnimationFrame(M);
    }, x = () => {
      d(), s("click");
    }, k = (_, q) => {
      let C = 0;
      return function(...M) {
        const T = Date.now();
        T - C >= q && (_.apply(this, M), C = T);
      };
    };
    return V(() => {
      m(), c();
    }), oe(() => {
      p();
    }), (_, q) => (u(), ee(R, { name: "fade" }, {
      default: U(() => [
        G(a("div", {
          class: "zqs-backtop",
          onClick: x,
          style: w({ right: e.right, bottom: e.bottom })
        }, [
          K(_.$slots, "default", {}, () => [
            q[0] || (q[0] = a("div", { class: "zqs-backtop__content" }, [
              a("i", { class: "zqs-icon-caret-top" }, "Top")
            ], -1))
          ], !0)
        ], 4), [
          [Y, n.value]
        ])
      ]),
      _: 3
    }));
  }
}), L = /* @__PURE__ */ y(Te, [["__scopeId", "data-v-e11536cb"]]);
L.install = (t) => {
  t.component(L.name, L);
};
const Be = { class: "zqs-header" }, Ie = { class: "left" }, Oe = ["src"], Ee = { class: "system-name" }, Ze = { class: "right" }, je = ["src"], Ae = { class: "username" }, Le = {
  name: "zqs-header"
}, Ne = /* @__PURE__ */ Object.assign(Le, {
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
  emits: ["logout"],
  setup(t, { emit: l }) {
    const e = t, s = l, n = () => {
      s("logout");
    };
    return (o, i) => (u(), r("header", Be, [
      a("div", Ie, [
        a("img", {
          src: t.logo,
          alt: "Logo",
          class: "logo"
        }, null, 8, Oe),
        a("span", Ee, g(e.systemName), 1)
      ]),
      a("div", Ze, [
        a("img", {
          src: t.avatar,
          alt: "Avatar",
          class: "avatar"
        }, null, 8, je),
        a("span", Ae, g(e.username), 1),
        a("button", {
          class: "logout-button",
          onClick: n
        }, "退出登录")
      ])
    ]));
  }
}), N = /* @__PURE__ */ y(Ne, [["__scopeId", "data-v-39af9827"]]);
N.install = (t) => {
  t.component(N.name, N);
};
const De = { class: "zqs-card" }, He = { class: "zqs-card-header" }, Fe = { class: "zqs-card-body" }, Pe = {
  name: "zqs-card"
}, Ge = /* @__PURE__ */ Object.assign(Pe, {
  props: {
    title: {
      type: String,
      default: "信息卡片"
      // 卡片标题
    },
    info: {
      type: Array,
      default: () => [
        { label: "姓名", value: "竹秋拾" },
        { label: "身份证号", value: "512131452013141314" },
        { label: "年龄", value: "20" },
        { label: "性别", value: "男" }
      ]
      // 信息列表
    }
  },
  setup(t) {
    return (l, e) => (u(), r("div", De, [
      a("div", He, [
        a("h3", null, g(t.title), 1)
      ]),
      a("div", Fe, [
        (u(!0), r($, null, z(t.info, (s, n) => (u(), r("p", { key: n }, [
          a("strong", null, g(s.label) + "：", 1),
          se(g(s.value), 1)
        ]))), 128))
      ])
    ]));
  }
}), D = /* @__PURE__ */ y(Ge, [["__scopeId", "data-v-eec35612"]]);
D.install = (t) => {
  t.component(D.name, D);
};
const Ke = { class: "menu-list" }, Re = ["onMouseenter", "onMouseleave"], Ue = ["onClick"], Ye = { class: "sub-menu" }, Je = ["href", "onClick"], Qe = ["href", "onClick"], We = {
  name: "zqs-menu"
}, Xe = /* @__PURE__ */ Object.assign(We, {
  props: {
    menuList: {
      type: Array,
      default: () => []
    },
    align: {
      type: String,
      default: "left",
      validator: (t) => ["left", "right"].includes(t)
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "70px"
    },
    activeBackgroundColor: {
      type: String,
      default: "#007bff"
    },
    activeTextColor: {
      type: String,
      default: "#fff"
    },
    menuBackgroundColor: {
      type: String,
      default: "#f8f9fa"
    }
  },
  emits: ["route-change"],
  setup(t, { emit: l }) {
    const e = t, s = ce({
      items: e.menuList.map((c) => ({
        ...c,
        showSubMenu: !1
      }))
    }), n = v(""), o = l;
    V(() => {
      const c = localStorage.getItem("selectedMenu") || e.menuList[0].text;
      c && (n.value = c);
    });
    const i = (c, p = null, d = null) => {
      n.value = c, p ? localStorage.setItem("parentMenuText", p) : localStorage.removeItem("parentMenuText"), localStorage.setItem("selectedMenu", c), d && o("route-change", d);
    }, m = v("");
    V(() => {
      const c = localStorage.getItem("parentMenuText");
      c && (m.value = c);
    });
    const h = (c, p) => {
      s.items[c].showSubMenu = p;
    }, f = (c, p) => {
      i(c.text, null, c.link), c.subMenu && (s.items[p].showSubMenu = !s.items[p].showSubMenu);
    }, b = (c) => n.value === c.text || m.value === c.text;
    return P("currentMenuValue", n), P("changeMenuValue", i), (c, p) => (u(), r("div", {
      class: S(["zqs-menu", `align-${e.align}`]),
      style: w({
        backgroundColor: e.menuBackgroundColor,
        width: e.width,
        height: e.height
      })
    }, [
      a("ul", Ke, [
        (u(!0), r($, null, z(s.items, (d, x) => (u(), r("li", {
          key: x,
          class: "menu-item"
        }, [
          d.subMenu ? (u(), r("div", {
            key: 0,
            class: "menu-item-wrapper",
            onMouseenter: (k) => h(x, !0),
            onMouseleave: (k) => h(x, !1)
          }, [
            a("div", {
              class: S(["menu-item-content", { "is-selected": b(d) }]),
              onClick: (k) => f(d, x),
              style: w(b(d) ? {
                color: e.activeTextColor,
                backgroundColor: e.activeBackgroundColor
              } : {})
            }, [
              a("span", null, g(d.text), 1),
              p[0] || (p[0] = a("span", { class: "arrow-down" }, "▼", -1))
            ], 14, Ue),
            G(a("ul", Ye, [
              (u(!0), r($, null, z(d.subMenu, (k, _) => (u(), r("li", {
                key: _,
                class: "sub-menu-item"
              }, [
                a("a", {
                  href: k.link,
                  onClick: (q) => i(k.text, d.text),
                  class: S({ "is-selected-sub": n.value === k.text })
                }, g(k.text), 11, Je)
              ]))), 128))
            ], 512), [
              [Y, d.showSubMenu]
            ])
          ], 40, Re)) : (u(), r("a", {
            key: 1,
            href: d.link,
            onClick: (k) => i(d.text),
            class: S({ "is-selected": n.value === d.text }),
            style: w(n.value === d.text ? {
              color: e.activeTextColor,
              backgroundColor: e.activeBackgroundColor
            } : {})
          }, g(d.text), 15, Qe))
        ]))), 128))
      ])
    ], 6));
  }
}), H = /* @__PURE__ */ y(Xe, [["__scopeId", "data-v-18ebdcb4"]]);
H.install = (t) => {
  t.component(H.name, H);
};
const et = [
  I,
  O,
  E,
  Z,
  j,
  A,
  L,
  N,
  D,
  H
], tt = (t) => {
  et.forEach((l) => t.use(l)), t.config.globalProperties.$alert = W, t.provide("ZqsAlert", W);
}, st = {
  install: tt
};
export {
  W as ZqsAlert,
  L as ZqsBackTop,
  I as ZqsButton,
  D as ZqsCard,
  Z as ZqsCheckbox,
  N as ZqsHeader,
  E as ZqsInput,
  H as ZqsMenu,
  j as ZqsSelect,
  A as ZqsSelectOption,
  O as ZqsTable,
  st as default
};
