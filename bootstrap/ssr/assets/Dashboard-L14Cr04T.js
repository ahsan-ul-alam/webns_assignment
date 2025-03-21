import { resolveComponent, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    totalUsers: {
      type: Number,
      default: 0
    },
    totalCategories: {
      type: Number,
      default: 0
    },
    totalTickets: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      const _component_AuthenticatedLayout = resolveComponent("AuthenticatedLayout");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, { title: "Dashboard" }, null, _parent));
      _push(ssrRenderComponent(_component_AuthenticatedLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"${_scopeId}><div class="relative p-6 bg-white shadow-sm fi-wi-stats-overview-stat rounded-xl ring-1 ring-gray-950/5"${_scopeId}><div class="grid gap-y-2"${_scopeId}><div class="flex items-center gap-x-2"${_scopeId}><span class="text-sm font-medium text-gray-500 dark:text-gray-400"${_scopeId}> Total Users </span></div><div class="text-3xl font-semibold tracking-tight text-gray-950"${_scopeId}>${ssrInterpolate(__props.totalUsers)}</div></div></div><div class="relative p-6 bg-white shadow-sm fi-wi-stats-overview-stat rounded-xl ring-1 ring-gray-950/5"${_scopeId}><div class="grid gap-y-2"${_scopeId}><div class="flex items-center gap-x-2"${_scopeId}><span class="text-sm font-medium text-gray-500 dark:text-gray-400"${_scopeId}> Total Categories </span></div><div class="text-3xl font-semibold tracking-tight text-gray-950"${_scopeId}>${ssrInterpolate(__props.totalCategories)}</div></div></div><div class="relative p-6 bg-white shadow-sm fi-wi-stats-overview-stat rounded-xl ring-1 ring-gray-950/5"${_scopeId}><div class="grid gap-y-2"${_scopeId}><div class="flex items-center gap-x-2"${_scopeId}><span class="text-sm font-medium text-gray-500 dark:text-gray-400"${_scopeId}> Total Tickets </span></div><div class="text-3xl font-semibold tracking-tight text-gray-950"${_scopeId}>${ssrInterpolate(__props.totalTickets)}</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4" }, [
                createVNode("div", { class: "relative p-6 bg-white shadow-sm fi-wi-stats-overview-stat rounded-xl ring-1 ring-gray-950/5" }, [
                  createVNode("div", { class: "grid gap-y-2" }, [
                    createVNode("div", { class: "flex items-center gap-x-2" }, [
                      createVNode("span", { class: "text-sm font-medium text-gray-500 dark:text-gray-400" }, " Total Users ")
                    ]),
                    createVNode("div", { class: "text-3xl font-semibold tracking-tight text-gray-950" }, toDisplayString(__props.totalUsers), 1)
                  ])
                ]),
                createVNode("div", { class: "relative p-6 bg-white shadow-sm fi-wi-stats-overview-stat rounded-xl ring-1 ring-gray-950/5" }, [
                  createVNode("div", { class: "grid gap-y-2" }, [
                    createVNode("div", { class: "flex items-center gap-x-2" }, [
                      createVNode("span", { class: "text-sm font-medium text-gray-500 dark:text-gray-400" }, " Total Categories ")
                    ]),
                    createVNode("div", { class: "text-3xl font-semibold tracking-tight text-gray-950" }, toDisplayString(__props.totalCategories), 1)
                  ])
                ]),
                createVNode("div", { class: "relative p-6 bg-white shadow-sm fi-wi-stats-overview-stat rounded-xl ring-1 ring-gray-950/5" }, [
                  createVNode("div", { class: "grid gap-y-2" }, [
                    createVNode("div", { class: "flex items-center gap-x-2" }, [
                      createVNode("span", { class: "text-sm font-medium text-gray-500 dark:text-gray-400" }, " Total Tickets ")
                    ]),
                    createVNode("div", { class: "text-3xl font-semibold tracking-tight text-gray-950" }, toDisplayString(__props.totalTickets), 1)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
