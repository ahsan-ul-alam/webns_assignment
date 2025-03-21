import { defineStore } from "pinia";
import { ssrRenderTeleport, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
import { onMounted, watch, ref, computed, useSSRContext } from "vue";
import { onClickOutside } from "@vueuse/core";
const useModalStore = defineStore("modals", {
  state: () => ({
    accountModalOpen: false,
    createUserModalOpen: false,
    editUserModalOpen: false,
    deleteUserModalOpen: false,
    createCategoryModalOpen: false,
    editCategoryModalOpen: false,
    deleteCategoryModalOpen: false,
    createLabelModalOpen: false,
    editLabelModalOpen: false,
    deleteLabelModalOpen: false,
    createTicketModalOpen: false,
    editTicketModalOpen: false,
    deleteTicketModalOpen: false
  }),
  actions: {},
  getters: {
    isModalOpen: (state) => (modalId) => {
      return state[modalId] || false;
    }
  }
});
const useHideScrollbar = ({ target, currentModalModel }) => {
  onMounted(() => {
    onClickOutside(target, (event) => currentModalModel.value = false);
    watch(currentModalModel, (newValue) => {
      if (newValue) {
        document.querySelector("body").classList.add("overflow-hidden");
      } else {
        document.querySelector("body").classList.remove("overflow-hidden");
      }
    });
  });
};
const _sfc_main = {
  __name: "BaseModal",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: [Boolean],
      required: true,
      default: false
    }
  },
  emits: ["onClose", "update:isOpen"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const target = ref();
    const currentModalModel = computed({
      get: () => props.isOpen,
      set: (value) => {
        emit("update:isOpen", value);
      }
    });
    useHideScrollbar({ target, currentModalModel });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div style="${ssrRenderStyle(__props.isOpen ? null : { display: "none" })}" tabindex="-1" aria-hidden="true" role="dialog" class="fixed top-0 left-0 right-0 z-[51] w-full p-2 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"><div class="relative w-full max-w-xl max-h-[600px] overflow-y-auto bg-white rounded inset-1/2 -translate-x-1/2 -translate-y-1/2"><div class="flex items-start justify-between p-4 border-b">`);
        ssrRenderSlot(_ctx.$slots, "header", {}, () => {
          _push2(`<h3 class="text-lg font-medium text-gray-900"> Heading </h3>`);
        }, _push2, _parent);
        _push2(`<button type="button" class="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto"><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg><span class="sr-only">Close modal</span></button></div><div class="p-6 space-y-6 overflow-y-auto">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
        _push2(`</div><div class="flex items-center justify-end p-6 space-x-3 border-t border-gray-200 rtl:space-x-reverse">`);
        ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent);
        _push2(`</div></div></div><div style="${ssrRenderStyle(__props.isOpen ? null : { display: "none" })}" class="fixed inset-0 z-50 bg-gray-900 bg-opacity-50"></div>`);
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modals/BaseModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  useModalStore as u
};
