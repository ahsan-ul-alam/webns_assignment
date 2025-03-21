import { computed, mergeProps, createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { cva } from "class-variance-authority";
const _sfc_main = {
  __name: "BasePagination",
  __ssrInlineRender: true,
  props: {
    data: {
      type: [Object],
      required: true,
      default: () => {
      }
    }
  },
  setup(__props) {
    const computedComponent = computed(() => {
      return (link) => {
        if (link.url) {
          return "Link";
        } else {
          return "span";
        }
      };
    });
    const computedLinkClass = computed(() => {
      return (link) => {
        if (link.label.includes("Previous")) {
          return "previous";
        } else if (link.label.includes("Next")) {
          return "next";
        } else if (link.active) {
          return "current";
        }
        return "default";
      };
    });
    const computedClasses = computed(() => {
      return (link) => {
        return cva("text-sm items-center justify-center border border-gray-300 shadow-sm outline-none", {
          variants: {
            variant: {
              next: "px-2 py-2 text-gray-400 font-normal rounded-e-lg bg-white",
              previous: "px-2 py-2 text-gray-400 font-normal ms-0 rounded-s-lg bg-white",
              current: "px-4 py-2 text-gray-900 font-semibold bg-gray-50 pointer-events-none",
              default: "px-4 py-2 text-gray-500 font-semibold"
            },
            disabled: {
              true: "cursor-not-allowed opacity-75 hover:bg-white",
              false: "cursor-pointer hover:bg-gray-50 hover:text-gray-700"
            }
          },
          compoundVariants: [
            {
              variant: ["previous", "next"],
              current: false,
              class: "bg-white"
            }
          ],
          defaultVariants: {}
        })({
          variant: computedLinkClass.value(link),
          disabled: !link.url
        });
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      if ((_b = (_a = __props.data) == null ? void 0 : _a.data) == null ? void 0 : _b.length) {
        _push(`<nav${ssrRenderAttrs(mergeProps({
          class: "flex flex-wrap items-center justify-between gap-3 pt-8 flex-column md:flex-row",
          "aria-label": "Table navigation"
        }, _attrs))}><span class="block w-full text-sm font-normal text-gray-500 md:w-auto"> Showing <span class="font-semibold text-gray-900">${ssrInterpolate(__props.data.from)}-${ssrInterpolate(__props.data.to)}</span> of <span class="font-semibold text-gray-900">${ssrInterpolate(__props.data.total)}</span></span><ul style="${ssrRenderStyle(__props.data.last_page > 1 ? null : { display: "none" })}" class="inline-flex -space-x-px text-sm rtl:space-x-reverse"><!--[-->`);
        ssrRenderList(__props.data.links, (link) => {
          _push(`<li>`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(computedComponent.value(link)), {
            href: link.url,
            disabled: !link.url,
            class: computedClasses.value(link),
            "aria-current": link.active ? "page" : void 0
          }, null), _parent);
          _push(`</li>`);
        });
        _push(`<!--]--></ul></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Shared/BasePagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
