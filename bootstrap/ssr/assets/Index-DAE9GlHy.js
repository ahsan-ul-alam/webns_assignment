import { useSSRContext, mergeProps, computed, ref, unref, withCtx, openBlock, createBlock, createVNode, renderSlot, createTextVNode, toDisplayString, mergeModels, useModel, createCommentVNode, Fragment, renderList, withDirectives, Transition, vShow, watch, isRef, withModifiers, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr, ssrRenderClass } from "vue/server-renderer";
import { storeToRefs } from "pinia";
import { u as useModalStore, _ as _sfc_main$a } from "./BaseModal-Dq1GFAJP.js";
import { usePage, router, useForm } from "@inertiajs/vue3";
import { watchDebounced } from "@vueuse/core";
import { a as usePermission, u as useToastStore } from "../ssr.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { _ as _sfc_main$8 } from "./BaseButton-DM5oAJL2.js";
import { _ as _sfc_main$9 } from "./BasePagination-xagfyXOI.js";
import { _ as _sfc_main$b } from "./BaseInput-B-dX_uOd.js";
import { cva } from "class-variance-authority";
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/vue";
import "@vue/server-renderer";
import "@inertiajs/vue3/server";
const _sfc_main$7 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<span${ssrRenderAttrs(mergeProps({ class: "antialiased inline-flex gap-2 text-xs bg-gray-100 cursor-pointer min-w-max text-gray-800 font-medium px-2.5 py-0.5 rounded-md transition duration-300 border border-gray-300" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Shared/BaseTag.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const BaseTag = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$6 = {
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
    const permissions = computed(() => usePage().props.auth.permissions);
    const { hasPermission } = usePermission({ permissions: permissions.value });
    const canCreateTicket = hasPermission.value("create-tickets");
    const canEditTicket = hasPermission.value("edit-tickets");
    const canDeleteTicket = hasPermission.value("delete-tickets");
    const search = ref((_a = props.filters) == null ? void 0 : _a.search);
    watchDebounced(search, (value) => {
      router.get(route(props.route), { search: value }, {
        replace: true,
        preserveState: true
      });
    }, { debounce: 300 });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative px-6 pt-4 pb-6 overflow-x-auto bg-white shadow-sm sm:rounded-lg" }, _attrs))}><div class="flex flex-wrap items-baseline justify-between gap-4 pb-4 bg-white"><label${ssrRenderAttr("for", `${__props.tableId}-table-search`)} class="sr-only">Search</label><div class="relative mt-1"><div class="absolute inset-y-0 flex items-center pointer-events-none rtl:inset-r-0 start-0 ps-3"><svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path></svg></div><input type="text"${ssrRenderAttr("id", `${__props.tableId}-table-search`)}${ssrRenderAttr("value", search.value)} class="block pt-2 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 w-80 bg-gray-50 focus:ring-black focus:border-black"${ssrRenderAttr("placeholder", __props.placeholder)}></div>`);
      _push(ssrRenderComponent(_sfc_main$8, {
        "is-disabled": !unref(canCreateTicket),
        "aria-disabled": !unref(canCreateTicket),
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
          var _a3;
          _push(`<!--[-->`);
          if (header.key.includes("title")) {
            _push(`<td class="px-6 py-4 text-gray-900 min-w-[150px] text-balance">${ssrInterpolate(record[header.key])}</td>`);
          } else if (header.key.includes("status")) {
            _push(`<td class="px-6"><div class="flex items-center">`);
            if (record[header.key].includes("open")) {
              _push(`<span class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></span>`);
            } else {
              _push(`<span class="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></span>`);
            }
            _push(` ${ssrInterpolate(record[header.key])}</div></td>`);
          } else if (header.key.includes("priority")) {
            _push(`<td class="text-center">`);
            if (record[header.key].includes("low")) {
              _push(`<span class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full">${ssrInterpolate(record[header.key])}</span>`);
            } else if (record[header.key].includes("medium")) {
              _push(`<span class="bg-yellow text-black text-sm font-medium me-2 px-2.5 py-0.5 rounded-full border border-yellow">${ssrInterpolate(record[header.key])}</span>`);
            } else {
              _push(`<span class="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full">${ssrInterpolate(record[header.key])}</span>`);
            }
            _push(`</td>`);
          } else if (header.key.includes("actions")) {
            _push(`<td class="px-6 py-4"><div class="flex flex-wrap gap-4"><a${ssrIncludeBooleanAttr(!unref(canEditTicket)) ? " disabled" : ""}${ssrRenderAttr("aria-disabled", !unref(canEditTicket))} class="${ssrRenderClass([{ "cursor-not-allowed pointer-events-none opacity-50": !unref(canEditTicket) }, "font-medium text-gray-900 hover:underline"])}" href="#" type="button">Edit </a><a${ssrIncludeBooleanAttr(!unref(canDeleteTicket)) ? " disabled" : ""}${ssrRenderAttr("aria-disabled", !unref(canDeleteTicket))} class="${ssrRenderClass([{ "cursor-not-allowed pointer-events-none opacity-50": !unref(canDeleteTicket) }, "font-medium text-red-600 hover:underline"])}" href="#" type="button">Delete </a></div></td>`);
          } else if (Array.isArray(record[header.key])) {
            _push(`<td class="px-6 py-4 text-gray-900"><div class="flex flex-wrap gap-3"><!--[-->`);
            ssrRenderList(record[header.key], ({ title }) => {
              _push(ssrRenderComponent(BaseTag, { key: _ctx.key }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            });
            _push(`<!--]--></div></td>`);
          } else if (header.key.includes("agent")) {
            _push(`<td class="px-6 py-4 text-center text-gray-900">${ssrInterpolate(((_a3 = record[header.key]) == null ? void 0 : _a3.name) ?? "Unassigned")}</td>`);
          } else {
            _push(`<td class="max-w-[180px] px-6 py-4 text-gray-900 truncate">${ssrInterpolate(record[header.key])}</td>`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></tr>`);
      });
      _push(`<!--]--></tbody></table>`);
      _push(ssrRenderComponent(_sfc_main$9, { data: __props.data }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Features/Tickets/Components/BaseTable.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "BaseListbox",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    options: {
      type: [Array],
      required: true,
      default: () => []
    },
    errorMessage: {
      type: [String],
      default: null
    },
    isMultiple: {
      type: [Boolean],
      default: false
    },
    isDisabled: {
      type: [Boolean],
      default: false
    }
  }, {
    "modelValue": { type: [Array, String, Number] },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const props = __props;
    const isEmpty = computed(() => {
      var _a;
      if (props.isMultiple) {
        return ((_a = model.value) == null ? void 0 : _a.length) == 0;
      }
      return !model.value;
    });
    const computedLabel = computed(() => {
      var _a, _b;
      if (isEmpty.value)
        return "Please select an option";
      if (props.isMultiple) {
        return (_a = model.value) == null ? void 0 : _a.map((x) => x.name).join(", ");
      }
      return (_b = model.value) == null ? void 0 : _b.name;
    });
    const computedListboxButtonClasses = computed(() => {
      return cva("relative w-full max-w-[511px] rounded-md border cursor-default py-2.5 pl-3 pr-10 text-left transition duration-150 ease-in-out text-sm focus:ring-1", {
        variants: {
          empty: {
            true: "text-gray-400"
          }
        },
        compoundVariants: [
          {
            disabled: true,
            error: false,
            class: "text-nickel bg-persian cursor-not-allowed bg-gray-50 border-gray-300 text-gray-900"
          },
          {
            disabled: true,
            error: true,
            class: "text-nickel bg-persian cursor-not-allowed bg-gray-50 border-gray-300"
          },
          {
            disabled: false,
            error: true,
            class: "text-red-500 border-red-500 outline-red-500 focus:ring-red-500 focus:border-red-500"
          },
          {
            disabled: false,
            error: false,
            class: "text-gray-900 bg-white border-gray-300 cursor-pointer focus:ring-black focus:border-black"
          }
        ],
        defaultVariants: {}
      })({
        empty: isEmpty.value,
        error: !!props.errorMessage,
        disabled: props.isDisabled
      });
    });
    const computedListboxOptionClasses = computed(() => {
      return (isSelected, isActive) => ({
        "relative py-2 pl-2 pr-4 mr-px cursor-default select-none": true,
        "bg-gray-700 text-white": isSelected && isActive,
        "bg-gray-200": isSelected && !isActive,
        "text-white bg-gray-700": !isSelected && isActive,
        "text-gray-900": !isSelected && !isActive
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Listbox), mergeProps({ as: "div" }, _ctx.$attrs, {
        by: "id",
        disabled: __props.isDisabled,
        multiple: __props.isMultiple,
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event
      }), {
        default: withCtx(({ open: isOpen }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative"${_scopeId}><span class="inline-block w-full rounded-md shadow-sm"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ListboxButton), { class: computedListboxButtonClasses.value }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="block truncate"${_scopeId2}>${ssrInterpolate(computedLabel.value)}</span><span class="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 text-gray-400" aria-hidden="true"${_scopeId2}><path fill-rule="evenodd" d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd"${_scopeId2}></path></svg></span>`);
                } else {
                  return [
                    createVNode("span", { class: "block truncate" }, toDisplayString(computedLabel.value), 1),
                    createVNode("span", { class: "absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 16 16",
                        fill: "currentColor",
                        class: "w-4 h-4 text-gray-400",
                        "aria-hidden": "true"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z",
                          "clip-rule": "evenodd"
                        })
                      ]))
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</span><div class="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ListboxOptions), {
              class: "py-1 pl-px space-y-px overflow-auto text-base leading-6 rounded-md shadow-xs max-h-60 focus:outline-none sm:text-sm sm:leading-5",
              static: "static"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.options, (option) => {
                    _push3(ssrRenderComponent(unref(ListboxOption), {
                      key: option.id,
                      value: option,
                      onClick: _ctx.onClick
                    }, {
                      default: withCtx(({ selected: isSelected, active: isActive }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="${ssrRenderClass(computedListboxOptionClasses.value(isSelected, isActive))}"${_scopeId3}><span class="${ssrRenderClass([{ "font-semibold": isSelected, "font-normal": !isSelected }, "block text-left capitalize truncate"])}"${_scopeId3}>${ssrInterpolate(option.name)}</span>`);
                          if (isSelected) {
                            _push4(`<span class="${ssrRenderClass([{ "text-white": isActive, "text-gray-900": !isActive }, "absolute inset-y-0 right-0 flex items-center pr-4"])}"${_scopeId3}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4" aria-hidden="true"${_scopeId3}><path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd"${_scopeId3}></path></svg></span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: computedListboxOptionClasses.value(isSelected, isActive)
                            }, [
                              createVNode("span", {
                                class: ["block text-left capitalize truncate", { "font-semibold": isSelected, "font-normal": !isSelected }]
                              }, toDisplayString(option.name), 3),
                              isSelected ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: ["absolute inset-y-0 right-0 flex items-center pr-4", { "text-white": isActive, "text-gray-900": !isActive }]
                              }, [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 16 16",
                                  fill: "currentColor",
                                  class: "w-4 h-4",
                                  "aria-hidden": "true"
                                }, [
                                  createVNode("path", {
                                    "fill-rule": "evenodd",
                                    d: "M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",
                                    "clip-rule": "evenodd"
                                  })
                                ]))
                              ], 2)) : createCommentVNode("", true)
                            ], 2)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.options, (option) => {
                      return openBlock(), createBlock(unref(ListboxOption), {
                        key: option.id,
                        value: option,
                        onClick: _ctx.onClick
                      }, {
                        default: withCtx(({ selected: isSelected, active: isActive }) => [
                          createVNode("div", {
                            class: computedListboxOptionClasses.value(isSelected, isActive)
                          }, [
                            createVNode("span", {
                              class: ["block text-left capitalize truncate", { "font-semibold": isSelected, "font-normal": !isSelected }]
                            }, toDisplayString(option.name), 3),
                            isSelected ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ["absolute inset-y-0 right-0 flex items-center pr-4", { "text-white": isActive, "text-gray-900": !isActive }]
                            }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 16 16",
                                fill: "currentColor",
                                class: "w-4 h-4",
                                "aria-hidden": "true"
                              }, [
                                createVNode("path", {
                                  "fill-rule": "evenodd",
                                  d: "M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",
                                  "clip-rule": "evenodd"
                                })
                              ]))
                            ], 2)) : createCommentVNode("", true)
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["value", "onClick"]);
                    }), 128))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative" }, [
                createVNode("span", { class: "inline-block w-full rounded-md shadow-sm" }, [
                  createVNode(unref(ListboxButton), { class: computedListboxButtonClasses.value }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "block truncate" }, toDisplayString(computedLabel.value), 1),
                      createVNode("span", { class: "absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 16 16",
                          fill: "currentColor",
                          class: "w-4 h-4 text-gray-400",
                          "aria-hidden": "true"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            d: "M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z",
                            "clip-rule": "evenodd"
                          })
                        ]))
                      ])
                    ]),
                    _: 1
                  }, 8, ["class"])
                ]),
                withDirectives(createVNode(Transition, {
                  "leave-active-class": "transition duration-100 ease-in",
                  "leave-from-class": "opacity-100",
                  "leave-to-class": "opacity-0"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg" }, [
                      createVNode(unref(ListboxOptions), {
                        class: "py-1 pl-px space-y-px overflow-auto text-base leading-6 rounded-md shadow-xs max-h-60 focus:outline-none sm:text-sm sm:leading-5",
                        static: "static"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.options, (option) => {
                            return openBlock(), createBlock(unref(ListboxOption), {
                              key: option.id,
                              value: option,
                              onClick: _ctx.onClick
                            }, {
                              default: withCtx(({ selected: isSelected, active: isActive }) => [
                                createVNode("div", {
                                  class: computedListboxOptionClasses.value(isSelected, isActive)
                                }, [
                                  createVNode("span", {
                                    class: ["block text-left capitalize truncate", { "font-semibold": isSelected, "font-normal": !isSelected }]
                                  }, toDisplayString(option.name), 3),
                                  isSelected ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: ["absolute inset-y-0 right-0 flex items-center pr-4", { "text-white": isActive, "text-gray-900": !isActive }]
                                  }, [
                                    (openBlock(), createBlock("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 16 16",
                                      fill: "currentColor",
                                      class: "w-4 h-4",
                                      "aria-hidden": "true"
                                    }, [
                                      createVNode("path", {
                                        "fill-rule": "evenodd",
                                        d: "M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",
                                        "clip-rule": "evenodd"
                                      })
                                    ]))
                                  ], 2)) : createCommentVNode("", true)
                                ], 2)
                              ]),
                              _: 2
                            }, 1032, ["value", "onClick"]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 2
                }, 1536), [
                  [vShow, isOpen]
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p style="${ssrRenderStyle(__props.errorMessage ? null : { display: "none" })}" class="mt-2 text-sm text-red-600">${ssrInterpolate(__props.errorMessage)}</p><!--]-->`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/BaseListbox.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "BaseTextarea",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    isDisabled: {
      type: [Boolean],
      default: false
    },
    errorMessage: {
      type: [String]
    }
  }, {
    "modelValue": { type: [String] },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const props = __props;
    const computedClasses = computed(() => {
      return cva("block appearance-none resize-none p-2.5 w-full text-sm rounded-md shadow-sm", {
        variants: {},
        compoundVariants: [
          {
            disabled: true,
            error: false,
            class: "text-nickel bg-persian cursor-not-allowed bg-gray-50 border-gray-300 text-gray-900"
          },
          {
            disabled: true,
            error: true,
            class: "text-nickel bg-persian cursor-not-allowed bg-gray-50 border-gray-300"
          },
          {
            disabled: false,
            error: true,
            class: "text-red-500 border-red-500 outline-red-500 focus:ring-red-500 focus:border-red-500"
          },
          {
            disabled: false,
            error: false,
            class: "text-gray-900 bg-white border-gray-300 cursor-pointer focus:ring-black focus:border-black"
          }
        ],
        defaultVariants: {}
      })({
        error: !!props.errorMessage,
        disabled: props.isDisabled
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><textarea${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
        rows: "6",
        class: computedClasses.value,
        disabled: __props.isDisabled
      }), "textarea")}>${ssrInterpolate(model.value)}</textarea><p style="${ssrRenderStyle(__props.errorMessage ? null : { display: "none" })}" class="mt-1 text-sm text-red-600">${ssrInterpolate(__props.errorMessage)}</p><!--]-->`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/BaseTextarea.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "CreateTicketModal",
  __ssrInlineRender: true,
  props: {
    labels: {
      type: [Object],
      default: () => []
    },
    categories: {
      type: [Object],
      default: () => []
    },
    agents: {
      type: [Object],
      default: () => []
    }
  },
  setup(__props) {
    const form = useForm({
      title: "",
      description: "",
      labels: [],
      categories: [],
      agent_id: null,
      status: {
        id: "open",
        name: "Open"
      },
      priority: {
        id: "low",
        name: "Low"
      }
    });
    const modalStore = useModalStore();
    const { createTicketModalOpen } = storeToRefs(modalStore);
    function onSubmit() {
      form.transform((data) => {
        var _a, _b, _c;
        return {
          ...data,
          agent_id: (_a = data.agent_id) == null ? void 0 : _a.id,
          labels: data.labels.map(({ id }) => id),
          categories: data.categories.map(({ id }) => id),
          status: (_b = data.status) == null ? void 0 : _b.id,
          priority: (_c = data.priority) == null ? void 0 : _c.id
        };
      }).post(route("tickets.store"), {
        preserveScroll: true,
        onSuccess: () => {
          createTicketModalOpen.value = false;
          const toastStore = useToastStore();
          toastStore.add({
            type: "success",
            message: "Ticket created successfully"
          });
          form.reset();
        }
      });
    }
    const priorityOptions = [
      { id: "low", name: "Low" },
      { id: "medium", name: "Medium" },
      { id: "high", name: "High" }
    ];
    const statusOptions = [
      { id: "open", name: "Open" },
      { id: "closed", name: "Closed" }
    ];
    const roles = computed(() => usePage().props.auth.roles);
    const { hasRole } = usePermission({ roles: roles.value });
    const canAssignAgent = hasRole.value("admin");
    const input = ref(null);
    watch(createTicketModalOpen, (isOpen) => {
      if (isOpen) {
        setTimeout(() => {
          input.value.focus();
        }, 0);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$a, mergeProps({
        "is-open": unref(createTicketModalOpen),
        "onUpdate:isOpen": ($event) => isRef(createTicketModalOpen) ? createTicketModalOpen.value = $event : null,
        onOnClose: ($event) => createTicketModalOpen.value = false
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-lg font-medium text-gray-900"${_scopeId}> Add Ticket </h3>`);
          } else {
            return [
              createVNode("h3", { class: "text-lg font-medium text-gray-900" }, " Add Ticket ")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$8, {
              variant: "secondary",
              onClick: ($event) => createTicketModalOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, {
              form: "create-ticket-form",
              type: "submit",
              isLoading: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Create `);
                } else {
                  return [
                    createTextVNode(" Create ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$8, {
                variant: "secondary",
                onClick: ($event) => createTicketModalOpen.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$8, {
                form: "create-ticket-form",
                type: "submit",
                isLoading: unref(form).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Create ")
                ]),
                _: 1
              }, 8, ["isLoading"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form id="create-ticket-form" class="grid gap-6" novalidate${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$b, {
              ref_key: "input",
              ref: input,
              label: "Title",
              id: "create-ticket-name",
              type: "text",
              modelValue: unref(form).title,
              "onUpdate:modelValue": ($event) => unref(form).title = $event,
              "error-message": unref(form).errors.title,
              onFocus: ($event) => unref(form).clearErrors("title")
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><div class="block mb-2 text-sm font-medium text-gray-900"${_scopeId}> Description </div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              modelValue: unref(form).description,
              "onUpdate:modelValue": ($event) => unref(form).description = $event,
              "error-message": unref(form).errors.description,
              onFocus: ($event) => unref(form).clearErrors("description")
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(canAssignAgent)) {
              _push2(`<div${_scopeId}><div class="block mb-2 text-sm font-medium text-gray-900"${_scopeId}> Agent </div>`);
              _push2(ssrRenderComponent(_sfc_main$5, {
                modelValue: unref(form).agent_id,
                "onUpdate:modelValue": ($event) => unref(form).agent_id = $event,
                options: __props.agents,
                "error-message": unref(form).errors.agent_id,
                onClick: ($event) => unref(form).clearErrors("agent_id")
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div${_scopeId}><div class="block mb-2 text-sm font-medium text-gray-900"${_scopeId}> Labels </div>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              "is-multiple": "",
              modelValue: unref(form).labels,
              "onUpdate:modelValue": ($event) => unref(form).labels = $event,
              options: __props.labels,
              "error-message": unref(form).errors.labels,
              onClick: ($event) => unref(form).clearErrors("labels")
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><div class="block mb-2 text-sm font-medium text-gray-900"${_scopeId}> Categories </div>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              "is-multiple": "",
              modelValue: unref(form).categories,
              "onUpdate:modelValue": ($event) => unref(form).categories = $event,
              options: __props.categories,
              "error-message": unref(form).errors.categories,
              onClick: ($event) => unref(form).clearErrors("categories")
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><div class="block mb-2 text-sm font-medium text-gray-900"${_scopeId}> Priority </div>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              modelValue: unref(form).priority,
              "onUpdate:modelValue": ($event) => unref(form).priority = $event,
              options: priorityOptions,
              "error-message": unref(form).errors.priority,
              onFocus: ($event) => unref(form).clearErrors("priority")
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><div class="block mb-2 text-sm font-medium text-gray-900"${_scopeId}> Status </div>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              modelValue: unref(form).status,
              "onUpdate:modelValue": ($event) => unref(form).status = $event,
              options: statusOptions,
              "error-message": unref(form).errors.status,
              onClick: ($event) => unref(form).clearErrors("status")
            }, null, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                id: "create-ticket-form",
                class: "grid gap-6",
                novalidate: "",
                onSubmit: withModifiers(onSubmit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$b, {
                    ref_key: "input",
                    ref: input,
                    label: "Title",
                    id: "create-ticket-name",
                    type: "text",
                    modelValue: unref(form).title,
                    "onUpdate:modelValue": ($event) => unref(form).title = $event,
                    "error-message": unref(form).errors.title,
                    onFocus: ($event) => unref(form).clearErrors("title")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onFocus"])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "block mb-2 text-sm font-medium text-gray-900" }, " Description "),
                  createVNode(_sfc_main$4, {
                    modelValue: unref(form).description,
                    "onUpdate:modelValue": ($event) => unref(form).description = $event,
                    "error-message": unref(form).errors.description,
                    onFocus: ($event) => unref(form).clearErrors("description")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onFocus"])
                ]),
                unref(canAssignAgent) ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("div", { class: "block mb-2 text-sm font-medium text-gray-900" }, " Agent "),
                  createVNode(_sfc_main$5, {
                    modelValue: unref(form).agent_id,
                    "onUpdate:modelValue": ($event) => unref(form).agent_id = $event,
                    options: __props.agents,
                    "error-message": unref(form).errors.agent_id,
                    onClick: ($event) => unref(form).clearErrors("agent_id")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "error-message", "onClick"])
                ])) : createCommentVNode("", true),
                createVNode("div", null, [
                  createVNode("div", { class: "block mb-2 text-sm font-medium text-gray-900" }, " Labels "),
                  createVNode(_sfc_main$5, {
                    "is-multiple": "",
                    modelValue: unref(form).labels,
                    "onUpdate:modelValue": ($event) => unref(form).labels = $event,
                    options: __props.labels,
                    "error-message": unref(form).errors.labels,
                    onClick: ($event) => unref(form).clearErrors("labels")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "error-message", "onClick"])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "block mb-2 text-sm font-medium text-gray-900" }, " Categories "),
                  createVNode(_sfc_main$5, {
                    "is-multiple": "",
                    modelValue: unref(form).categories,
                    "onUpdate:modelValue": ($event) => unref(form).categories = $event,
                    options: __props.categories,
                    "error-message": unref(form).errors.categories,
                    onClick: ($event) => unref(form).clearErrors("categories")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "error-message", "onClick"])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "block mb-2 text-sm font-medium text-gray-900" }, " Priority "),
                  createVNode(_sfc_main$5, {
                    modelValue: unref(form).priority,
                    "onUpdate:modelValue": ($event) => unref(form).priority = $event,
                    options: priorityOptions,
                    "error-message": unref(form).errors.priority,
                    onFocus: ($event) => unref(form).clearErrors("priority")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onFocus"])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "block mb-2 text-sm font-medium text-gray-900" }, " Status "),
                  createVNode(_sfc_main$5, {
                    modelValue: unref(form).status,
                    "onUpdate:modelValue": ($event) => unref(form).status = $event,
                    options: statusOptions,
                    "error-message": unref(form).errors.status,
                    onClick: ($event) => unref(form).clearErrors("status")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onClick"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Features/Tickets/Components/CreateTicketModal.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "EditTicketModal",
  __ssrInlineRender: true,
  props: {
    ticket: {
      type: [Object],
      required: true
    },
    categories: {
      type: [Object],
      default: () => []
    },
    agents: {
      type: [Object],
      default: () => []
    }
  },
  setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const props = __props;
    const form = useForm({
      ...props.ticket,
      agent_id: (_a = props.ticket) == null ? void 0 : _a.agent,
      status: {
        id: (_b = props.ticket) == null ? void 0 : _b.status,
        name: ((_c = props.ticket) == null ? void 0 : _c.status.at(0).toUpperCase()) + ((_d = props.ticket) == null ? void 0 : _d.status.slice(1))
      },
      priority: {
        id: (_e = props.ticket) == null ? void 0 : _e.priority,
        name: ((_f = props.ticket) == null ? void 0 : _f.priority.at(0).toUpperCase()) + ((_g = props.ticket) == null ? void 0 : _g.priority.slice(1))
      },
      labels: (_h = props.ticket) == null ? void 0 : _h.labels.map(({ id, title }) => ({ id, name: title })),
      categories: (_i = props.ticket) == null ? void 0 : _i.categories.map(({ id, title }) => ({ id, name: title }))
    });
    watch(() => props.ticket, (newVal) => {
      var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2;
      form.defaults({
        ...newVal,
        agent_id: (_a2 = props.ticket) == null ? void 0 : _a2.agent,
        status: {
          id: (_b2 = props.ticket) == null ? void 0 : _b2.status,
          name: ((_c2 = props.ticket) == null ? void 0 : _c2.status.at(0).toUpperCase()) + ((_d2 = props.ticket) == null ? void 0 : _d2.status.slice(1))
        },
        priority: {
          id: (_e2 = props.ticket) == null ? void 0 : _e2.priority,
          name: ((_f2 = props.ticket) == null ? void 0 : _f2.priority.at(0).toUpperCase()) + ((_g2 = props.ticket) == null ? void 0 : _g2.priority.slice(1))
        },
        labels: (_h2 = props.ticket) == null ? void 0 : _h2.labels.map(({ id, title }) => ({ id, name: title })),
        categories: (_i2 = props.ticket) == null ? void 0 : _i2.categories.map(({ id, title }) => ({ id, name: title }))
      }).reset();
    });
    const modalStore = useModalStore();
    const { editTicketModalOpen } = storeToRefs(modalStore);
    function onSubmit() {
      form.transform((data) => {
        var _a2, _b2, _c2;
        return {
          ...data,
          agent_id: (_a2 = data.agent_id) == null ? void 0 : _a2.id,
          labels: data.labels.map(({ id }) => id),
          categories: data.categories.map(({ id }) => id),
          status: (_b2 = data.status) == null ? void 0 : _b2.id,
          priority: (_c2 = data.priority) == null ? void 0 : _c2.id
        };
      }).patch(route("tickets.update", { ticket: props.ticket }), {
        preserveScroll: true,
        onSuccess: () => {
          editTicketModalOpen.value = false;
          const toastStore = useToastStore();
          toastStore.add({
            type: "success",
            message: "Ticket updated successfully"
          });
          form.reset();
        }
      });
    }
    const priorityOptions = [
      { id: "low", name: "Low" },
      { id: "medium", name: "Medium" },
      { id: "high", name: "High" }
    ];
    const statusOptions = [
      { id: "open", name: "Open" },
      { id: "inprogress", name: "In Progress" },
      { id: "resolved", name: "Resolved" },
      { id: "closed", name: "Closed" }
    ];
    const input = ref(null);
    watch(editTicketModalOpen, (isOpen) => {
      if (isOpen) {
        setTimeout(() => {
          input.value.focus();
        }, 0);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$a, mergeProps({
        "is-open": unref(editTicketModalOpen),
        "onUpdate:isOpen": ($event) => isRef(editTicketModalOpen) ? editTicketModalOpen.value = $event : null,
        onOnClose: ($event) => editTicketModalOpen.value = false
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-lg font-medium text-gray-900"${_scopeId}> Edit Ticket </h3>`);
          } else {
            return [
              createVNode("h3", { class: "text-lg font-medium text-gray-900" }, " Edit Ticket ")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$8, {
              variant: "secondary",
              onClick: ($event) => editTicketModalOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, {
              form: "edit-ticket-form",
              type: "submit",
              isLoading: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Save `);
                } else {
                  return [
                    createTextVNode(" Save ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$8, {
                variant: "secondary",
                onClick: ($event) => editTicketModalOpen.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$8, {
                form: "edit-ticket-form",
                type: "submit",
                isLoading: unref(form).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Save ")
                ]),
                _: 1
              }, 8, ["isLoading"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form id="edit-ticket-form" class="grid gap-6" novalidate${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$b, {
              ref_key: "input",
              ref: input,
              label: "Title",
              id: "edit-ticket-name",
              type: "text",
              modelValue: unref(form).title,
              "onUpdate:modelValue": ($event) => unref(form).title = $event,
              "error-message": unref(form).errors.title,
              onFocus: ($event) => unref(form).clearErrors("title")
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><div class="block mb-2 text-sm font-medium text-gray-900"${_scopeId}> Description </div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              modelValue: unref(form).description,
              "onUpdate:modelValue": ($event) => unref(form).description = $event,
              "error-message": unref(form).errors.description,
              onFocus: ($event) => unref(form).clearErrors("description")
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><div class="block mb-2 text-sm font-medium text-gray-900"${_scopeId}> Agent </div>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              modelValue: unref(form).agent_id,
              "onUpdate:modelValue": ($event) => unref(form).agent_id = $event,
              options: __props.agents,
              "error-message": unref(form).errors.agent_id,
              onClick: ($event) => unref(form).clearErrors("agent_id")
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><div class="block mb-2 text-sm font-medium text-gray-900"${_scopeId}> Labels </div>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              "is-multiple": "",
              modelValue: unref(form).labels,
              "onUpdate:modelValue": ($event) => unref(form).labels = $event,
              options: _ctx.labels,
              "error-message": unref(form).errors.labels,
              onClick: ($event) => unref(form).clearErrors("labels")
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><div class="block mb-2 text-sm font-medium text-gray-900"${_scopeId}> Categories </div>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              "is-multiple": "",
              modelValue: unref(form).categories,
              "onUpdate:modelValue": ($event) => unref(form).categories = $event,
              options: __props.categories,
              "error-message": unref(form).errors.categories,
              onClick: ($event) => unref(form).clearErrors("categories")
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><div class="block mb-2 text-sm font-medium text-gray-900"${_scopeId}> Priority </div>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              modelValue: unref(form).priority,
              "onUpdate:modelValue": ($event) => unref(form).priority = $event,
              options: priorityOptions,
              "error-message": unref(form).errors.priority,
              onFocus: ($event) => unref(form).clearErrors("priority")
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><div class="block mb-2 text-sm font-medium text-gray-900"${_scopeId}> Status </div>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              modelValue: unref(form).status,
              "onUpdate:modelValue": ($event) => unref(form).status = $event,
              options: statusOptions,
              "error-message": unref(form).errors.status,
              onClick: ($event) => unref(form).clearErrors("status")
            }, null, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                id: "edit-ticket-form",
                class: "grid gap-6",
                novalidate: "",
                onSubmit: withModifiers(onSubmit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$b, {
                    ref_key: "input",
                    ref: input,
                    label: "Title",
                    id: "edit-ticket-name",
                    type: "text",
                    modelValue: unref(form).title,
                    "onUpdate:modelValue": ($event) => unref(form).title = $event,
                    "error-message": unref(form).errors.title,
                    onFocus: ($event) => unref(form).clearErrors("title")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onFocus"])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "block mb-2 text-sm font-medium text-gray-900" }, " Description "),
                  createVNode(_sfc_main$4, {
                    modelValue: unref(form).description,
                    "onUpdate:modelValue": ($event) => unref(form).description = $event,
                    "error-message": unref(form).errors.description,
                    onFocus: ($event) => unref(form).clearErrors("description")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onFocus"])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "block mb-2 text-sm font-medium text-gray-900" }, " Agent "),
                  createVNode(_sfc_main$5, {
                    modelValue: unref(form).agent_id,
                    "onUpdate:modelValue": ($event) => unref(form).agent_id = $event,
                    options: __props.agents,
                    "error-message": unref(form).errors.agent_id,
                    onClick: ($event) => unref(form).clearErrors("agent_id")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "error-message", "onClick"])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "block mb-2 text-sm font-medium text-gray-900" }, " Labels "),
                  createVNode(_sfc_main$5, {
                    "is-multiple": "",
                    modelValue: unref(form).labels,
                    "onUpdate:modelValue": ($event) => unref(form).labels = $event,
                    options: _ctx.labels,
                    "error-message": unref(form).errors.labels,
                    onClick: ($event) => unref(form).clearErrors("labels")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "error-message", "onClick"])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "block mb-2 text-sm font-medium text-gray-900" }, " Categories "),
                  createVNode(_sfc_main$5, {
                    "is-multiple": "",
                    modelValue: unref(form).categories,
                    "onUpdate:modelValue": ($event) => unref(form).categories = $event,
                    options: __props.categories,
                    "error-message": unref(form).errors.categories,
                    onClick: ($event) => unref(form).clearErrors("categories")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "error-message", "onClick"])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "block mb-2 text-sm font-medium text-gray-900" }, " Priority "),
                  createVNode(_sfc_main$5, {
                    modelValue: unref(form).priority,
                    "onUpdate:modelValue": ($event) => unref(form).priority = $event,
                    options: priorityOptions,
                    "error-message": unref(form).errors.priority,
                    onFocus: ($event) => unref(form).clearErrors("priority")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onFocus"])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "block mb-2 text-sm font-medium text-gray-900" }, " Status "),
                  createVNode(_sfc_main$5, {
                    modelValue: unref(form).status,
                    "onUpdate:modelValue": ($event) => unref(form).status = $event,
                    options: statusOptions,
                    "error-message": unref(form).errors.status,
                    onClick: ($event) => unref(form).clearErrors("status")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onClick"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Features/Tickets/Components/EditTicketModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DeleteTicketModal",
  __ssrInlineRender: true,
  props: {
    ticket: {
      type: [Object],
      required: true,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({});
    const modalStore = useModalStore();
    const { deleteTicketModalOpen } = storeToRefs(modalStore);
    function onDelete() {
      const uri = route("tickets.destroy", { ticket: props.ticket });
      form.delete(uri, {
        preserveScroll: true,
        onSuccess: () => {
          deleteTicketModalOpen.value = false;
          const toastStore = useToastStore();
          toastStore.add({
            type: "success",
            message: "Ticket deleted successfully"
          });
          form.reset();
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$a, mergeProps({
        "is-open": unref(deleteTicketModalOpen),
        "onUpdate:isOpen": ($event) => isRef(deleteTicketModalOpen) ? deleteTicketModalOpen.value = $event : null,
        onOnClose: ($event) => deleteTicketModalOpen.value = false
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-lg font-medium text-gray-900"${_scopeId}> Delete ticket </h3>`);
          } else {
            return [
              createVNode("h3", { class: "text-lg font-medium text-gray-900" }, " Delete ticket ")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$8, {
              variant: "secondary",
              onClick: ($event) => deleteTicketModalOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, {
              onClick: onDelete,
              variant: "danger",
              class: "ms-3",
              "is-loading": unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Delete `);
                } else {
                  return [
                    createTextVNode(" Delete ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$8, {
                variant: "secondary",
                onClick: ($event) => deleteTicketModalOpen.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$8, {
                onClick: onDelete,
                variant: "danger",
                class: "ms-3",
                "is-loading": unref(form).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Delete ")
                ]),
                _: 1
              }, 8, ["is-loading"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><p class="text-sm text-gray-600"${_scopeId}> This action cannot be undone. Do you want to proceed with the deletion? </p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", { class: "text-sm text-gray-600" }, " This action cannot be undone. Do you want to proceed with the deletion? ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Features/Tickets/Components/DeleteTicketModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    tickets: {
      type: [Object],
      default: () => []
    },
    labels: {
      type: [Object],
      default: () => []
    },
    categories: {
      type: [Object],
      default: () => []
    },
    agents: {
      type: [Object],
      default: () => []
    },
    filters: {
      type: [Object]
    }
  },
  setup(__props) {
    const headers = [
      {
        label: "Title",
        key: "title"
      },
      {
        label: "Status",
        key: "status"
      },
      {
        label: "Priority",
        key: "priority"
      },
      {
        label: "Categories",
        key: "categories"
      },
      {
        label: "Assigned To",
        key: "agent"
      },
      {
        label: "Actions",
        key: "actions"
      }
    ];
    const modalStore = useModalStore();
    const { createTicketModalOpen, editTicketModalOpen, deleteTicketModalOpen } = storeToRefs(modalStore);
    const selectedTicket = ref();
    function setSelectedTicket(ticket) {
      selectedTicket.value = ticket;
    }
    function onCreate() {
      createTicketModalOpen.value = true;
    }
    function onEdit(ticket) {
      editTicketModalOpen.value = true;
      setSelectedTicket(ticket);
    }
    function onDelete(ticket) {
      deleteTicketModalOpen.value = true;
      setSelectedTicket(ticket);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      const _component_AuthenticatedLayout = resolveComponent("AuthenticatedLayout");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, { title: "Tickets" }, null, _parent));
      _push(ssrRenderComponent(_component_AuthenticatedLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$6), {
              "table-id": "tickets",
              placeholder: "Search",
              headers,
              data: __props.tickets,
              route: "tickets.index",
              filters: __props.filters,
              onOnCreate: onCreate,
              onOnEdit: onEdit,
              onOnDelete: onDelete
            }, {
              button: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Add `);
                } else {
                  return [
                    createTextVNode(" Add ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$6), {
                "table-id": "tickets",
                placeholder: "Search",
                headers,
                data: __props.tickets,
                route: "tickets.index",
                filters: __props.filters,
                onOnCreate: onCreate,
                onOnEdit: onEdit,
                onOnDelete: onDelete
              }, {
                button: withCtx(() => [
                  createTextVNode(" Add ")
                ]),
                _: 1
              }, 8, ["data", "filters"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), {
        labels: __props.labels,
        categories: __props.categories,
        agents: __props.agents
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), {
        ticket: selectedTicket.value,
        labels: __props.labels,
        categories: __props.categories,
        agents: __props.agents
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), { ticket: selectedTicket.value }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Tickets/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
