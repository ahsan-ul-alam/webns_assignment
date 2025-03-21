import { ref, watch, mergeProps, unref, isRef, withCtx, createVNode, createTextVNode, withModifiers, openBlock, createBlock, Fragment, renderList, withDirectives, toDisplayString, vShow, useSSRContext, resolveComponent } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { storeToRefs } from "pinia";
import { u as useModalStore, _ as _sfc_main$4 } from "./BaseModal-Dq1GFAJP.js";
import { _ as _sfc_main$7, a as _sfc_main$8 } from "./BaseRadio-Bgim83SI.js";
import { useForm } from "@inertiajs/vue3";
import { u as useToastStore } from "../ssr.js";
import { _ as _sfc_main$6 } from "./BaseInput-B-dX_uOd.js";
import { _ as _sfc_main$5 } from "./BaseButton-DM5oAJL2.js";
import "@vueuse/core";
import "./BasePagination-xagfyXOI.js";
import "class-variance-authority";
import "@vue/server-renderer";
import "@inertiajs/vue3/server";
const _sfc_main$3 = {
  __name: "CreateLabelModal",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      title: "",
      visible: true
    });
    const modalStore = useModalStore();
    const { createLabelModalOpen } = storeToRefs(modalStore);
    function onSubmit() {
      form.post(route("labels.store"), {
        preserveScroll: true,
        onSuccess: () => {
          createLabelModalOpen.value = false;
          const toastStore = useToastStore();
          toastStore.add({
            type: "success",
            message: "Label edited successfully"
          });
          form.reset();
        }
      });
    }
    const visibilityOptions = [
      { id: "create-label-visible", value: true, label: "Yes" },
      { id: "create-label-hidden", value: false, label: "No" }
    ];
    const input = ref(null);
    watch(createLabelModalOpen, (isOpen) => {
      if (isOpen) {
        setTimeout(() => {
          input.value.focus();
        }, 0);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$4, mergeProps({
        "is-open": unref(createLabelModalOpen),
        "onUpdate:isOpen": ($event) => isRef(createLabelModalOpen) ? createLabelModalOpen.value = $event : null,
        onOnClose: ($event) => createLabelModalOpen.value = false
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-lg font-medium text-gray-900"${_scopeId}> Add label </h3>`);
          } else {
            return [
              createVNode("h3", { class: "text-lg font-medium text-gray-900" }, " Add label ")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, {
              variant: "secondary",
              onClick: ($event) => createLabelModalOpen.value = false
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
            _push2(ssrRenderComponent(_sfc_main$5, {
              form: "create-label-form",
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
              createVNode(_sfc_main$5, {
                variant: "secondary",
                onClick: ($event) => createLabelModalOpen.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$5, {
                form: "create-label-form",
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
            _push2(`<form id="create-label-form" class="grid gap-6" novalidate${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$6, {
              ref_key: "input",
              ref: input,
              autofocus: "",
              label: "Title",
              id: "create-label-name",
              type: "text",
              modelValue: unref(form).title,
              "onUpdate:modelValue": ($event) => unref(form).title = $event,
              "error-message": unref(form).errors.title,
              onFocus: ($event) => unref(form).clearErrors("title")
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><label class="block mb-2 text-sm font-medium text-gray-900"${_scopeId}> Is Visible? </label><div class="flex flex-wrap gap-6"${_scopeId}><!--[-->`);
            ssrRenderList(visibilityOptions, (option) => {
              _push2(ssrRenderComponent(_sfc_main$7, {
                modelValue: unref(form).visible,
                "onUpdate:modelValue": ($event) => unref(form).visible = $event,
                option
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--><p style="${ssrRenderStyle(unref(form).errors.visible ? null : { display: "none" })}" class="mt-2 text-sm text-red-600"${_scopeId}>${ssrInterpolate(unref(form).errors.visible)}</p></div></div></form>`);
          } else {
            return [
              createVNode("form", {
                id: "create-label-form",
                class: "grid gap-6",
                novalidate: "",
                onSubmit: withModifiers(onSubmit, ["prevent"])
              }, [
                createVNode(_sfc_main$6, {
                  ref_key: "input",
                  ref: input,
                  autofocus: "",
                  label: "Title",
                  id: "create-label-name",
                  type: "text",
                  modelValue: unref(form).title,
                  "onUpdate:modelValue": ($event) => unref(form).title = $event,
                  "error-message": unref(form).errors.title,
                  onFocus: ($event) => unref(form).clearErrors("title")
                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onFocus"]),
                createVNode("div", null, [
                  createVNode("label", { class: "block mb-2 text-sm font-medium text-gray-900" }, " Is Visible? "),
                  createVNode("div", { class: "flex flex-wrap gap-6" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(visibilityOptions, (option) => {
                      return createVNode(_sfc_main$7, {
                        modelValue: unref(form).visible,
                        "onUpdate:modelValue": ($event) => unref(form).visible = $event,
                        option
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "option"]);
                    }), 64)),
                    withDirectives(createVNode("p", { class: "mt-2 text-sm text-red-600" }, toDisplayString(unref(form).errors.visible), 513), [
                      [vShow, unref(form).errors.visible]
                    ])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Features/Labels/Components/CreateLabelModal.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "EditLabelModal",
  __ssrInlineRender: true,
  props: {
    label: {
      type: [Object],
      required: true,
      default: () => ({
        title: "",
        visible: false
      })
    }
  },
  setup(__props) {
    const props = __props;
    let form = useForm({
      ...props.label
    });
    watch(() => props.label, (newVal) => {
      form.defaults({ ...newVal }).reset();
    });
    const modalStore = useModalStore();
    const { editLabelModalOpen } = storeToRefs(modalStore);
    function onSubmit() {
      const uri = route("labels.update", { label: props.label });
      form.patch(uri, {
        preserveScroll: true,
        onSuccess: () => {
          editLabelModalOpen.value = false;
          const toastStore = useToastStore();
          toastStore.add({
            type: "success",
            message: "Label updated successfully"
          });
          form.reset();
        }
      });
    }
    const visibilityOptions = [
      { id: "edit-label-visible", value: true, label: "Yes" },
      { id: "edit-label-hidden", value: false, label: "No" }
    ];
    const input = ref(null);
    watch(editLabelModalOpen, (isOpen) => {
      if (isOpen) {
        setTimeout(() => {
          input.value.focus();
        }, 0);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$4, mergeProps({
        "is-open": unref(editLabelModalOpen),
        "onUpdate:isOpen": ($event) => isRef(editLabelModalOpen) ? editLabelModalOpen.value = $event : null,
        onOnClose: ($event) => editLabelModalOpen.value = false
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-lg font-medium text-gray-900"${_scopeId}> Edit label </h3>`);
          } else {
            return [
              createVNode("h3", { class: "text-lg font-medium text-gray-900" }, " Edit label ")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, {
              variant: "secondary",
              onClick: ($event) => editLabelModalOpen.value = false
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
            _push2(ssrRenderComponent(_sfc_main$5, {
              form: "editLabelForm",
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
              createVNode(_sfc_main$5, {
                variant: "secondary",
                onClick: ($event) => editLabelModalOpen.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$5, {
                form: "editLabelForm",
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
            _push2(`<form id="editLabelForm" class="grid gap-6" novalidate${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$6, {
              ref_key: "input",
              ref: input,
              label: "Title",
              id: "editLabelTitle",
              type: "text",
              modelValue: unref(form).title,
              "onUpdate:modelValue": ($event) => unref(form).title = $event,
              "error-message": unref(form).errors.title,
              onFocus: ($event) => unref(form).clearErrors("title")
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><label class="block mb-2 text-sm font-medium text-gray-900"${_scopeId}> Is Visible? </label><div class="flex flex-wrap gap-6"${_scopeId}><!--[-->`);
            ssrRenderList(visibilityOptions, (option) => {
              _push2(ssrRenderComponent(_sfc_main$7, {
                modelValue: unref(form).visible,
                "onUpdate:modelValue": ($event) => unref(form).visible = $event,
                option
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--><p style="${ssrRenderStyle(unref(form).errors.visible ? null : { display: "none" })}" class="mt-2 text-sm text-red-600"${_scopeId}>${ssrInterpolate(unref(form).errors.visible)}</p></div></div></form>`);
          } else {
            return [
              createVNode("form", {
                id: "editLabelForm",
                class: "grid gap-6",
                novalidate: "",
                onSubmit: withModifiers(onSubmit, ["prevent"])
              }, [
                createVNode(_sfc_main$6, {
                  ref_key: "input",
                  ref: input,
                  label: "Title",
                  id: "editLabelTitle",
                  type: "text",
                  modelValue: unref(form).title,
                  "onUpdate:modelValue": ($event) => unref(form).title = $event,
                  "error-message": unref(form).errors.title,
                  onFocus: ($event) => unref(form).clearErrors("title")
                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onFocus"]),
                createVNode("div", null, [
                  createVNode("label", { class: "block mb-2 text-sm font-medium text-gray-900" }, " Is Visible? "),
                  createVNode("div", { class: "flex flex-wrap gap-6" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(visibilityOptions, (option) => {
                      return createVNode(_sfc_main$7, {
                        modelValue: unref(form).visible,
                        "onUpdate:modelValue": ($event) => unref(form).visible = $event,
                        option
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "option"]);
                    }), 64)),
                    withDirectives(createVNode("p", { class: "mt-2 text-sm text-red-600" }, toDisplayString(unref(form).errors.visible), 513), [
                      [vShow, unref(form).errors.visible]
                    ])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Features/Labels/Components/EditLabelModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DeleteLabelModal",
  __ssrInlineRender: true,
  props: {
    label: {
      type: [Object],
      required: true,
      default: () => ({
        title: "",
        visible: false
      })
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({});
    const modalStore = useModalStore();
    const { deleteLabelModalOpen } = storeToRefs(modalStore);
    function onDelete() {
      const uri = route("labels.destroy", { label: props.label });
      form.delete(uri, {
        preserveScroll: true,
        onSuccess: () => {
          deleteLabelModalOpen.value = false;
          const toastStore = useToastStore();
          toastStore.add({
            type: "success",
            message: "Label deleted successfully"
          });
          form.reset();
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$4, mergeProps({
        "is-open": unref(deleteLabelModalOpen),
        "onUpdate:isOpen": ($event) => isRef(deleteLabelModalOpen) ? deleteLabelModalOpen.value = $event : null,
        onOnClose: ($event) => deleteLabelModalOpen.value = false
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-lg font-medium text-gray-900"${_scopeId}> Delete label </h3>`);
          } else {
            return [
              createVNode("h3", { class: "text-lg font-medium text-gray-900" }, " Delete label ")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, {
              variant: "secondary",
              onClick: ($event) => deleteLabelModalOpen.value = false
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
            _push2(ssrRenderComponent(_sfc_main$5, {
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
              createVNode(_sfc_main$5, {
                variant: "secondary",
                onClick: ($event) => deleteLabelModalOpen.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$5, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Features/Labels/Components/DeleteLabelModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    labels: {
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
        key: "title",
        label: "Title"
      },
      {
        key: "slug",
        label: "Slug"
      },
      {
        key: "visible",
        label: "Is Visible"
      },
      {
        key: "actions",
        label: "Actions"
      }
    ];
    const modalStore = useModalStore();
    const { createLabelModalOpen, editLabelModalOpen, deleteLabelModalOpen } = storeToRefs(modalStore);
    const selectedLabel = ref();
    function setSelectedLabel(label) {
      selectedLabel.value = label;
    }
    function onCreate() {
      createLabelModalOpen.value = true;
    }
    function onEdit(label) {
      editLabelModalOpen.value = true;
      setSelectedLabel(label);
    }
    function onDelete(label) {
      deleteLabelModalOpen.value = true;
      setSelectedLabel(label);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      const _component_AuthenticatedLayout = resolveComponent("AuthenticatedLayout");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, { title: "Labels" }, null, _parent));
      _push(ssrRenderComponent(_component_AuthenticatedLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$8, {
              "table-id": "labels",
              placeholder: "Search",
              headers,
              data: __props.labels,
              route: "labels.index",
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
              createVNode(_sfc_main$8, {
                "table-id": "labels",
                placeholder: "Search",
                headers,
                data: __props.labels,
                route: "labels.index",
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
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), { label: selectedLabel.value }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), { label: selectedLabel.value }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Labels/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
