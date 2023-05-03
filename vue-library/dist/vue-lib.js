import { defineComponent, ref, openBlock, createElementBlock, Fragment, createElementVNode, toDisplayString } from "vue";
const ComponentA_vue_vue_type_style_index_0_scoped_ea310018_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = defineComponent({
  name: "ComponentA",
  props: {
    msg: {
      type: String,
      default: "Component A"
    }
  },
  setup() {
    const count = ref(0);
    return {
      count
    };
  }
});
const _hoisted_1$1 = { class: "card" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("h1", null, toDisplayString(_ctx.msg), 1),
    createElementVNode("div", _hoisted_1$1, [
      createElementVNode("button", {
        type: "button",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.count++)
      }, "count is " + toDisplayString(_ctx.count), 1)
    ])
  ], 64);
}
const ComponentA = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-ea310018"]]);
const ComponentB_vue_vue_type_style_index_0_scoped_9f985ebc_lang = "";
const _sfc_main = defineComponent({
  name: "ComponentB",
  props: {
    msg: {
      type: String,
      default: "Component B"
    }
  },
  setup() {
    const count = ref(0);
    return {
      count
    };
  }
});
const _hoisted_1 = { class: "card" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("h1", null, toDisplayString(_ctx.msg), 1),
    createElementVNode("div", _hoisted_1, [
      createElementVNode("button", {
        type: "button",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.count++)
      }, "count is " + toDisplayString(_ctx.count), 1)
    ])
  ], 64);
}
const ComponentB = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9f985ebc"]]);
export {
  ComponentA,
  ComponentB
};
