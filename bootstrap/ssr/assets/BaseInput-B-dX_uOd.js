import { useSSRContext, mergeModels, useModel, computed, ref, onMounted, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrGetDynamicModelProps, ssrRenderStyle } from "vue/server-renderer";
import { cva } from "class-variance-authority";
const _sfc_main = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "BaseInput",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    label: {
      type: [String],
      default: "Default label"
    },
    errorMessage: {
      type: [String],
      default: null
    },
    isDisabled: {
      type: [Boolean],
      default: false
    }
  }, {
    "modelValue": { type: [String, Number] },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const model = useModel(__props, "modelValue");
    const props = __props;
    const computedClasses = computed(() => {
      return cva("text-sm rounded-md block w-full p-2.5 appearance-none border shadow-sm", {
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
    const input = ref(null);
    __expose({
      input,
      focus: () => input.value.focus()
    });
    onMounted(() => {
      if (input.value.hasAttribute("autofocus")) {
        input.value.focus();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<div${ssrRenderAttrs(_attrs)}><label${ssrRenderAttr("for", _ctx.$attrs.id)} class="block mb-1 text-sm font-medium text-gray-900">${ssrInterpolate(__props.label)}</label><input${ssrRenderAttrs((_temp0 = mergeProps({
        ref_key: "input",
        ref: input
      }, _ctx.$attrs, {
        class: computedClasses.value,
        disabled: __props.isDisabled
      }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, model.value))))}><p style="${ssrRenderStyle(__props.errorMessage ? null : { display: "none" })}" class="mt-2 text-sm text-red-600">${ssrInterpolate(__props.errorMessage)}</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/BaseInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
