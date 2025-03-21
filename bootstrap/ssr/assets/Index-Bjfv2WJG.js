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
  __name: "CreateUserModal",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      email: "",
      role: "user",
      password: "",
      password_confirmation: ""
    });
    const roleOptions = [
      { id: "create-user-role-admin", value: "admin", label: "Admin" },
      { id: "create-user-role-agent", value: "agent", label: "Agent" },
      { id: "create-user-role-user", value: "user", label: "User" }
    ];
    const modalStore = useModalStore();
    const { createUserModalOpen } = storeToRefs(modalStore);
    function onSubmit() {
      form.post(route("users.store"), {
        preserveScroll: true,
        onSuccess: () => {
          createUserModalOpen.value = false;
          const toastStore = useToastStore();
          toastStore.add({
            type: "success",
            message: "User created successfully"
          });
          form.reset();
        }
      });
    }
    const input = ref(null);
    watch(createUserModalOpen, (isOpen) => {
      if (isOpen) {
        setTimeout(() => {
          input.value.focus();
        }, 0);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$4, mergeProps({
        "is-open": unref(createUserModalOpen),
        "onUpdate:isOpen": ($event) => isRef(createUserModalOpen) ? createUserModalOpen.value = $event : null,
        onOnClose: ($event) => createUserModalOpen.value = false
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-lg font-medium text-gray-900"${_scopeId}> Add user </h3>`);
          } else {
            return [
              createVNode("h3", { class: "text-lg font-medium text-gray-900" }, " Add user ")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, {
              variant: "secondary",
              onClick: ($event) => createUserModalOpen.value = false
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
              form: "create-user-form",
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
                onClick: ($event) => createUserModalOpen.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$5, {
                form: "create-user-form",
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
            _push2(`<form id="create-user-form" class="grid gap-4" novalidate${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$6, {
              ref_key: "input",
              ref: input,
              label: "Name",
              id: "create-user-name",
              type: "text",
              placeholder: "John Doe",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              "error-message": unref(form).errors.name,
              onFocus: ($event) => unref(form).clearErrors("name")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              label: "Email",
              id: "create-user-email",
              placeholder: "youremail@domain.com",
              type: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              "error-message": unref(form).errors.email,
              onFocus: ($event) => unref(form).clearErrors("email")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              label: "Password",
              id: "create-user-password",
              placeholder: "••••••••",
              type: "password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              autocomplete: "new-password",
              "error-message": unref(form).errors.password,
              onFocus: ($event) => unref(form).clearErrors("password")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              label: "Confirm password",
              id: "create-user-confirm-password",
              placeholder: "••••••••",
              type: "password",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              autocomplete: "new-password",
              "error-message": unref(form).errors.password_confirmation,
              onFocus: ($event) => unref(form).clearErrors("confirm-password")
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><label class="block mb-2 text-sm font-medium text-gray-900"${_scopeId}> Role </label><div class="flex flex-wrap gap-4"${_scopeId}><!--[-->`);
            ssrRenderList(roleOptions, (option) => {
              _push2(`<div class="flex-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$7, {
                modelValue: unref(form).role,
                "onUpdate:modelValue": ($event) => unref(form).role = $event,
                option
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div><p style="${ssrRenderStyle(unref(form).errors.role ? null : { display: "none" })}" class="mt-2 text-sm text-red-600"${_scopeId}>${ssrInterpolate(unref(form).errors.role)}</p></div></form>`);
          } else {
            return [
              createVNode("form", {
                id: "create-user-form",
                class: "grid gap-4",
                novalidate: "",
                onSubmit: withModifiers(onSubmit, ["prevent"])
              }, [
                createVNode(_sfc_main$6, {
                  ref_key: "input",
                  ref: input,
                  label: "Name",
                  id: "create-user-name",
                  type: "text",
                  placeholder: "John Doe",
                  modelValue: unref(form).name,
                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                  "error-message": unref(form).errors.name,
                  onFocus: ($event) => unref(form).clearErrors("name")
                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onFocus"]),
                createVNode(_sfc_main$6, {
                  label: "Email",
                  id: "create-user-email",
                  placeholder: "youremail@domain.com",
                  type: "email",
                  modelValue: unref(form).email,
                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                  "error-message": unref(form).errors.email,
                  onFocus: ($event) => unref(form).clearErrors("email")
                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onFocus"]),
                createVNode(_sfc_main$6, {
                  label: "Password",
                  id: "create-user-password",
                  placeholder: "••••••••",
                  type: "password",
                  modelValue: unref(form).password,
                  "onUpdate:modelValue": ($event) => unref(form).password = $event,
                  autocomplete: "new-password",
                  "error-message": unref(form).errors.password,
                  onFocus: ($event) => unref(form).clearErrors("password")
                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onFocus"]),
                createVNode(_sfc_main$6, {
                  label: "Confirm password",
                  id: "create-user-confirm-password",
                  placeholder: "••••••••",
                  type: "password",
                  modelValue: unref(form).password_confirmation,
                  "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                  autocomplete: "new-password",
                  "error-message": unref(form).errors.password_confirmation,
                  onFocus: ($event) => unref(form).clearErrors("confirm-password")
                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onFocus"]),
                createVNode("div", null, [
                  createVNode("label", { class: "block mb-2 text-sm font-medium text-gray-900" }, " Role "),
                  createVNode("div", { class: "flex flex-wrap gap-4" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(roleOptions, (option) => {
                      return createVNode("div", { class: "flex-1" }, [
                        createVNode(_sfc_main$7, {
                          modelValue: unref(form).role,
                          "onUpdate:modelValue": ($event) => unref(form).role = $event,
                          option
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "option"])
                      ]);
                    }), 64))
                  ]),
                  withDirectives(createVNode("p", { class: "mt-2 text-sm text-red-600" }, toDisplayString(unref(form).errors.role), 513), [
                    [vShow, unref(form).errors.role]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Features/Users/Components/CreateUserModal.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "EditUserModal",
  __ssrInlineRender: true,
  props: {
    user: {
      type: [Object],
      required: true
    }
  },
  setup(__props) {
    var _a;
    const props = __props;
    let form = useForm({
      ...props.user,
      role: (_a = props == null ? void 0 : props.user) == null ? void 0 : _a.roles,
      password: "",
      password_confirmation: ""
    });
    watch(() => props.user, (newVal) => {
      var _a2;
      form.defaults({ ...newVal, role: (_a2 = props == null ? void 0 : props.user) == null ? void 0 : _a2.roles }).reset();
    });
    const roleOptions = [
      { id: "edit-user-role-admin", value: "admin", label: "Admin" },
      { id: "edit-user-role-agent", value: "agent", label: "Agent" },
      { id: "edit-user-role-user", value: "user", label: "User" }
    ];
    const modalStore = useModalStore();
    const { editUserModalOpen } = storeToRefs(modalStore);
    function onSubmit() {
      const uri = route("users.update", { user: props.user });
      form.patch(uri, {
        preserveScroll: true,
        onSuccess: () => {
          editUserModalOpen.value = false;
          const toastStore = useToastStore();
          toastStore.add({
            type: "success",
            message: "User updated successfully"
          });
          form.reset();
        }
      });
    }
    const input = ref(null);
    watch(editUserModalOpen, (isOpen) => {
      if (isOpen) {
        setTimeout(() => {
          input.value.focus();
        }, 0);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$4, mergeProps({
        "is-open": unref(editUserModalOpen),
        "onUpdate:isOpen": ($event) => isRef(editUserModalOpen) ? editUserModalOpen.value = $event : null,
        onOnClose: ($event) => editUserModalOpen.value = false
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-lg font-medium text-gray-900"${_scopeId}> Edit user </h3>`);
          } else {
            return [
              createVNode("h3", { class: "text-lg font-medium text-gray-900" }, " Edit user ")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, {
              variant: "secondary",
              onClick: ($event) => editUserModalOpen.value = false
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
              form: "edit-user-form",
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
                onClick: ($event) => editUserModalOpen.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$5, {
                form: "edit-user-form",
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
            _push2(`<form id="edit-user-form" class="grid gap-4" novalidate${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$6, {
              ref_key: "input",
              ref: input,
              label: "Name",
              id: "edit-user-name",
              type: "text",
              placeholder: "John Doe",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              "error-message": unref(form).errors.name,
              onFocus: ($event) => unref(form).clearErrors("name")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              label: "Email",
              id: "edit-user-email",
              placeholder: "youremail@domain.com",
              type: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              "error-message": unref(form).errors.email,
              onFocus: ($event) => unref(form).clearErrors("email")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              label: "New password",
              id: "edit-user-password",
              placeholder: "••••••••",
              type: "password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              autocomplete: "new-password",
              "error-message": unref(form).errors.password,
              onFocus: ($event) => unref(form).clearErrors("password")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              label: "Confirm password",
              id: "edit-user-confirm-password",
              placeholder: "••••••••",
              type: "password",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              autocomplete: "new-password",
              "error-message": unref(form).errors.password_confirmation,
              onFocus: ($event) => unref(form).clearErrors("confirm-password")
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><label class="block mb-2 text-sm font-medium text-gray-900"${_scopeId}> Role </label><div class="flex flex-wrap gap-4"${_scopeId}><!--[-->`);
            ssrRenderList(roleOptions, (option) => {
              _push2(`<div class="flex-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$7, {
                modelValue: unref(form).role,
                "onUpdate:modelValue": ($event) => unref(form).role = $event,
                option
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div><p style="${ssrRenderStyle(unref(form).errors.role ? null : { display: "none" })}" class="mt-2 text-sm text-red-600"${_scopeId}>${ssrInterpolate(unref(form).errors.role)}</p></div></form>`);
          } else {
            return [
              createVNode("form", {
                id: "edit-user-form",
                class: "grid gap-4",
                novalidate: "",
                onSubmit: withModifiers(onSubmit, ["prevent"])
              }, [
                createVNode(_sfc_main$6, {
                  ref_key: "input",
                  ref: input,
                  label: "Name",
                  id: "edit-user-name",
                  type: "text",
                  placeholder: "John Doe",
                  modelValue: unref(form).name,
                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                  "error-message": unref(form).errors.name,
                  onFocus: ($event) => unref(form).clearErrors("name")
                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onFocus"]),
                createVNode(_sfc_main$6, {
                  label: "Email",
                  id: "edit-user-email",
                  placeholder: "youremail@domain.com",
                  type: "email",
                  modelValue: unref(form).email,
                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                  "error-message": unref(form).errors.email,
                  onFocus: ($event) => unref(form).clearErrors("email")
                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onFocus"]),
                createVNode(_sfc_main$6, {
                  label: "New password",
                  id: "edit-user-password",
                  placeholder: "••••••••",
                  type: "password",
                  modelValue: unref(form).password,
                  "onUpdate:modelValue": ($event) => unref(form).password = $event,
                  autocomplete: "new-password",
                  "error-message": unref(form).errors.password,
                  onFocus: ($event) => unref(form).clearErrors("password")
                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onFocus"]),
                createVNode(_sfc_main$6, {
                  label: "Confirm password",
                  id: "edit-user-confirm-password",
                  placeholder: "••••••••",
                  type: "password",
                  modelValue: unref(form).password_confirmation,
                  "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                  autocomplete: "new-password",
                  "error-message": unref(form).errors.password_confirmation,
                  onFocus: ($event) => unref(form).clearErrors("confirm-password")
                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onFocus"]),
                createVNode("div", null, [
                  createVNode("label", { class: "block mb-2 text-sm font-medium text-gray-900" }, " Role "),
                  createVNode("div", { class: "flex flex-wrap gap-4" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(roleOptions, (option) => {
                      return createVNode("div", { class: "flex-1" }, [
                        createVNode(_sfc_main$7, {
                          modelValue: unref(form).role,
                          "onUpdate:modelValue": ($event) => unref(form).role = $event,
                          option
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "option"])
                      ]);
                    }), 64))
                  ]),
                  withDirectives(createVNode("p", { class: "mt-2 text-sm text-red-600" }, toDisplayString(unref(form).errors.role), 513), [
                    [vShow, unref(form).errors.role]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Features/Users/Components/EditUserModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DeleteUserModal",
  __ssrInlineRender: true,
  props: {
    user: {
      type: [Object],
      required: true,
      default: () => ({
        name: "",
        email: "",
        role: ""
      })
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({});
    const modalStore = useModalStore();
    const { deleteUserModalOpen } = storeToRefs(modalStore);
    function onDelete() {
      const uri = route("users.destroy", { user: props.user });
      form.delete(uri, {
        preserveScroll: true,
        onSuccess: () => {
          deleteUserModalOpen.value = false;
          const toastStore = useToastStore();
          toastStore.add({
            type: "success",
            message: "User deleted successfully"
          });
          form.reset();
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$4, mergeProps({
        "is-open": unref(deleteUserModalOpen),
        "onUpdate:isOpen": ($event) => isRef(deleteUserModalOpen) ? deleteUserModalOpen.value = $event : null,
        onOnClose: ($event) => deleteUserModalOpen.value = false
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-lg font-medium text-gray-900"${_scopeId}> Delete user </h3>`);
          } else {
            return [
              createVNode("h3", { class: "text-lg font-medium text-gray-900" }, " Delete user ")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, {
              variant: "secondary",
              onClick: ($event) => deleteUserModalOpen.value = false
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
                onClick: ($event) => deleteUserModalOpen.value = false
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
            _push2(`<div${_scopeId}><p class="text-sm text-gray-500"${_scopeId}> This action cannot be undone. Do you want to proceed with the deletion? </p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", { class: "text-sm text-gray-500" }, " This action cannot be undone. Do you want to proceed with the deletion? ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Features/Users/Components/DeleteUserModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    users: {
      type: [Object],
      default: () => []
    },
    filters: {
      type: [Object]
    }
  },
  setup(__props) {
    const headers = [
      { label: "Name", key: "name" },
      { label: "Email", key: "email" },
      { label: "Role", key: "roles" },
      { label: "Actions", key: "actions" }
    ];
    const modalStore = useModalStore();
    const { createUserModalOpen, editUserModalOpen, deleteUserModalOpen } = storeToRefs(modalStore);
    const selectedUser = ref();
    function setSelectedUser(user) {
      selectedUser.value = user;
    }
    function onCreate() {
      createUserModalOpen.value = true;
    }
    function onEdit(user) {
      editUserModalOpen.value = true;
      setSelectedUser(user);
    }
    function onDelete(user) {
      deleteUserModalOpen.value = true;
      setSelectedUser(user);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      const _component_AuthenticatedLayout = resolveComponent("AuthenticatedLayout");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, { title: "Users" }, null, _parent));
      _push(ssrRenderComponent(_component_AuthenticatedLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$8, {
              "table-id": "users",
              placeholder: "Search",
              headers,
              data: __props.users,
              route: "users.index",
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
                "table-id": "users",
                placeholder: "Search",
                headers,
                data: __props.users,
                route: "users.index",
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
      _push(ssrRenderComponent(unref(_sfc_main$2), { user: selectedUser.value }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), { user: selectedUser.value }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
