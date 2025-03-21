import { withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "../ssr.js";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "pinia";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    ticket: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="p-6 bg-white shadow rounded-lg"${_scopeId}><h1 class="text-xl font-bold mb-4"${_scopeId}>${ssrInterpolate(__props.ticket.title)}</h1><p${_scopeId}><strong${_scopeId}>Status:</strong> ${ssrInterpolate(__props.ticket.status)}</p><p${_scopeId}><strong${_scopeId}>Priority:</strong> ${ssrInterpolate(__props.ticket.priority)}</p><p${_scopeId}><strong${_scopeId}>Category:</strong> ${ssrInterpolate(__props.ticket.category.name)}</p><p${_scopeId}><strong${_scopeId}>Assigned To:</strong> ${ssrInterpolate(((_a = __props.ticket.agent) == null ? void 0 : _a.name) || "Unassigned")}</p><p${_scopeId}><strong${_scopeId}>Description:</strong> ${ssrInterpolate(__props.ticket.description)}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 bg-white shadow rounded-lg" }, [
                createVNode("h1", { class: "text-xl font-bold mb-4" }, toDisplayString(__props.ticket.title), 1),
                createVNode("p", null, [
                  createVNode("strong", null, "Status:"),
                  createTextVNode(" " + toDisplayString(__props.ticket.status), 1)
                ]),
                createVNode("p", null, [
                  createVNode("strong", null, "Priority:"),
                  createTextVNode(" " + toDisplayString(__props.ticket.priority), 1)
                ]),
                createVNode("p", null, [
                  createVNode("strong", null, "Category:"),
                  createTextVNode(" " + toDisplayString(__props.ticket.category.name), 1)
                ]),
                createVNode("p", null, [
                  createVNode("strong", null, "Assigned To:"),
                  createTextVNode(" " + toDisplayString(((_b = __props.ticket.agent) == null ? void 0 : _b.name) || "Unassigned"), 1)
                ]),
                createVNode("p", null, [
                  createVNode("strong", null, "Description:"),
                  createTextVNode(" " + toDisplayString(__props.ticket.description), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Tickets/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
