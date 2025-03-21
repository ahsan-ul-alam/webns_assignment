import { ref, mergeProps, withCtx, openBlock, createBlock, createVNode, renderSlot, useSSRContext, mergeModels, useModel } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseEqual } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { watchDebounced } from "@vueuse/core";
import { _ as _sfc_main$2 } from "./BaseButton-DM5oAJL2.js";
import { _ as _sfc_main$3 } from "./BasePagination-xagfyXOI.js";
const _sfc_main$1 = {
  __name: "BaseTable",
  __ssrInlineRender: true,
  props: {
    tableId: {
      type: [String, Number],
      required: true
    },
    headers: {
      type: [Object],
      required: true,
      default: () => []
    },
    data: {
      type: [Object],
      required: true,
      default: () => {
      }
    },
    filters: {
      type: [Object]
    },
    placeholder: {
      type: [String]
    },
    route: {
      type: [String],
      required: true
    }
  },
  emits: ["onCreate", "onEdit", "onDelete"],
  setup(__props, { emit: __emit }) {
    var _a;
    const props = __props;
    const search = ref((_a = props.filters) == null ? void 0 : _a.search);
    watchDebounced(search, (value) => {
      router.get(route(props.route), { search: value }, {
        replace: true,
        preserveState: true,
        preserveScroll: true
      });
    }, { debounce: 300 });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative px-6 pt-4 pb-6 overflow-x-auto bg-white shadow-sm sm:rounded-lg" }, _attrs))}><div class="flex flex-wrap items-center justify-between gap-4 pb-4 bg-white"><label${ssrRenderAttr("for", `${__props.tableId}-table-search`)} class="sr-only">Search</label><div class="relative mt-1"><div class="absolute inset-y-0 flex items-center pointer-events-none rtl:inset-r-0 start-0 ps-3"><svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path></svg></div><input type="text"${ssrRenderAttr("id", `${__props.tableId}-table-search`)}${ssrRenderAttr("value", search.value)} class="block pt-2 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 w-80 bg-gray-50 focus:ring-black focus:border-black"${ssrRenderAttr("placeholder", __props.placeholder)}></div>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        onClick: ($event) => _ctx.$emit("onCreate")
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"${_scopeId}><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.75-10.25v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5a.75.75 0 0 1 1.5 0Z" clip-rule="evenodd"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16",
                fill: "currentColor",
                class: "w-4 h-4"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.75-10.25v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5a.75.75 0 0 1 1.5 0Z",
                  "clip-rule": "evenodd"
                })
              ]))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "button", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "button")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div><table class="w-full text-sm text-left text-gray-500"><thead class="text-xs text-gray-700 uppercase bg-gray-50"><tr><!--[-->`);
      ssrRenderList(__props.headers, ({ label, key }) => {
        _push(`<th scope="col" class="px-6 py-3 text-nowrap">${ssrInterpolate(label)}</th>`);
      });
      _push(`<!--]--></tr></thead><tbody><tr style="${ssrRenderStyle(!((_b = (_a2 = __props.data) == null ? void 0 : _a2.data) == null ? void 0 : _b.length) ? null : { display: "none" })}" class="bg-white border-b"><td${ssrRenderAttr("colspan", __props.headers.length)} class="px-6 py-4 text-center text-gray-900"> No records found </td></tr><!--[-->`);
      ssrRenderList((_c = __props.data) == null ? void 0 : _c.data, (record) => {
        _push(`<tr class="border-b even:bg-white odd:bg-gray-50"><!--[-->`);
        ssrRenderList(__props.headers, (header) => {
          _push(`<!--[-->`);
          if (!header.key.includes("actions") && !header.key.includes("visible")) {
            _push(`<td class="px-6 py-4 text-gray-900">${ssrInterpolate(record[header.key])}</td>`);
          } else {
            _push(`<!---->`);
          }
          if (header.key.includes("visible")) {
            _push(`<td class="px-6 py-4 text-gray-900">`);
            if (record[header.key]) {
              _push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>`);
            } else {
              _push(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-600 lucide lucide-circle-x"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>`);
            }
            _push(`</td>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--><td class="flex flex-wrap gap-4 px-6 py-4"><a href="#" type="button" class="font-medium text-gray-900 hover:underline">Edit </a><a href="#" type="button" class="font-medium text-red-600 hover:underline">Delete </a></td></tr>`);
      });
      _push(`<!--]--></tbody></table>`);
      _push(ssrRenderComponent(_sfc_main$3, { data: __props.data }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Shared/BaseTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "BaseRadio",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    option: {
      type: [Object],
      required: true
    }
  }, {
    "modelValue": { type: [String, Number, Boolean], required: true },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-1" }, _attrs))}><div class="flex items-center"><label${ssrRenderAttr("for", __props.option.id)} class="w-full p-4 text-sm font-medium text-gray-900 border border-gray-200 rounded cursor-pointer has-[:checked]:outline has-[:checked]:outline-2"><input${ssrIncludeBooleanAttr(ssrLooseEqual(model.value, __props.option.value)) ? " checked" : ""}${ssrRenderAttr("id", __props.option.id)} type="radio"${ssrRenderAttr("value", __props.option.value)} class="w-4 h-4 text-gray-800 bg-gray-100 border-gray-300 focus:ring-black checked:ring-gray-800 checked:ring-2"><span class="ms-2">${ssrInterpolate(__props.option.label)}</span></label></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/BaseRadio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$1 as a
};
