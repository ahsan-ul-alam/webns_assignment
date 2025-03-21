import { ref, watch, mergeProps, unref, isRef, withCtx, createVNode, createTextVNode, withKeys, useSSRContext, resolveComponent } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { storeToRefs } from "pinia";
import { u as useModalStore, _ as _sfc_main$5 } from "./BaseModal-Dq1GFAJP.js";
import { _ as _sfc_main$6 } from "./BaseButton-DM5oAJL2.js";
import { useForm, usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$7 } from "./BaseInput-B-dX_uOd.js";
import "../ssr.js";
import "@vueuse/core";
import "class-variance-authority";
import "@vue/server-renderer";
import "@inertiajs/vue3/server";
const _sfc_main$4 = {
  __name: "DeleteAccountModal",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      password: ""
    });
    const modalStore = useModalStore();
    const { accountModalOpen } = storeToRefs(modalStore);
    const deleteUser = () => {
      form.delete(route("profile.destroy"), {
        preserveScroll: true,
        onSuccess: () => {
          accountModalOpen.value = false;
          form.reset();
        }
      });
    };
    const input = ref(null);
    watch(accountModalOpen, (isOpen) => {
      if (isOpen) {
        setTimeout(() => {
          input.value.focus();
        }, 0);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$5, mergeProps({
        "is-open": unref(accountModalOpen),
        "onUpdate:isOpen": ($event) => isRef(accountModalOpen) ? accountModalOpen.value = $event : null,
        onOnClose: ($event) => accountModalOpen.value = false
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-lg font-medium text-gray-900"${_scopeId}> Delete Account </h3>`);
          } else {
            return [
              createVNode("h3", { class: "text-lg font-medium text-gray-900" }, " Delete Account ")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$6, {
              variant: "secondary",
              onClick: ($event) => accountModalOpen.value = false
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
            _push2(ssrRenderComponent(_sfc_main$6, {
              variant: "danger",
              class: "ms-3",
              "is-loading": unref(form).processing,
              onClick: deleteUser
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
              createVNode(_sfc_main$6, {
                variant: "secondary",
                onClick: ($event) => accountModalOpen.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$6, {
                variant: "danger",
                class: "ms-3",
                "is-loading": unref(form).processing,
                onClick: deleteUser
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
            _push2(`<div${_scopeId}><p class="text-sm text-gray-600"${_scopeId}> Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. </p><div class="mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$7, {
              ref_key: "input",
              ref: input,
              label: "Password",
              id: "delete-account-password",
              type: "password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              onKeyup: deleteUser,
              "error-message": unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", { class: "text-sm text-gray-600" }, " Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),
                createVNode("div", { class: "mt-6" }, [
                  createVNode(_sfc_main$7, {
                    ref_key: "input",
                    ref: input,
                    label: "Password",
                    id: "delete-account-password",
                    type: "password",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    onKeyup: withKeys(deleteUser, ["enter"]),
                    "error-message": unref(form).errors.password
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message"])
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Features/Profile/Components/DeleteAccountModal.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "DeleteUserForm",
  __ssrInlineRender: true,
  setup(__props) {
    const modalStore = useModalStore();
    const { accountModalOpen } = storeToRefs(modalStore);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        variant: "danger",
        onClick: ($event) => accountModalOpen.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Delete Account `);
          } else {
            return [
              createTextVNode(" Delete Account ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Features/Profile/Components/DeleteUserForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "UpdatePasswordForm",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      current_password: "",
      password: "",
      password_confirmation: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900">Update Password</h2><p class="mt-1 text-sm text-gray-600"> Ensure your account is using a long, random password to stay secure. </p></header><hr class="my-6"><form class="mt-6 space-y-6"><div>`);
      _push(ssrRenderComponent(_sfc_main$7, {
        label: "Current Password",
        id: "update-current-password",
        type: "password",
        modelValue: unref(form).current_password,
        "onUpdate:modelValue": ($event) => unref(form).current_password = $event,
        "error-message": unref(form).errors.current_password,
        onFocus: ($event) => unref(form).clearErrors("current_password")
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$7, {
        label: "New Password",
        id: "update-new-password",
        type: "password",
        autocomplete: "new-password",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        "error-message": unref(form).errors.password,
        onFocus: ($event) => unref(form).clearErrors("password")
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$7, {
        label: "Confirm Password",
        id: "update-password-confirmation",
        type: "password",
        autocomplete: "new-password",
        modelValue: unref(form).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
        "error-message": unref(form).errors.password_confirmation,
        onFocus: ($event) => unref(form).clearErrors("password_confirmation")
      }, null, _parent));
      _push(`</div><div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(_sfc_main$6, {
        "is-loading": unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Save`);
          } else {
            return [
              createTextVNode("Save")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).recentlySuccessful) {
        _push(`<p class="text-sm text-gray-600">Saved.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Features/Profile/Components/UpdatePasswordForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "UpdateProfileInformationForm",
  __ssrInlineRender: true,
  props: {
    mustVerifyEmail: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    const user = usePage().props.auth.user;
    const form = useForm({
      name: user.name,
      email: user.email
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900">Profile Information</h2><p class="mt-1 text-sm text-gray-600"> Update your account&#39;s profile information and email address. </p></header><hr class="my-6"><form class="space-y-6"><div>`);
      _push(ssrRenderComponent(_sfc_main$7, {
        label: "Name",
        id: "update-profile-name",
        type: "text",
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        "error-message": unref(form).errors.name,
        onFocus: ($event) => unref(form).clearErrors("name"),
        autocomplete: "name"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$7, {
        label: "Email",
        id: "update-profile-email",
        type: "email",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        "error-message": unref(form).errors.email,
        onFocus: ($event) => unref(form).clearErrors("email"),
        autocomplete: "username"
      }, null, _parent));
      _push(`</div>`);
      if (__props.mustVerifyEmail && unref(user).email_verified_at === null) {
        _push(`<div><p class="mt-2 text-sm text-gray-800"> Your email address is unverified. `);
        _push(ssrRenderComponent(_component_Link, {
          href: _ctx.route("verification.send"),
          method: "post",
          as: "button",
          class: "text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Click here to re-send the verification email. `);
            } else {
              return [
                createTextVNode(" Click here to re-send the verification email. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p><div style="${ssrRenderStyle(__props.status === "verification-link-sent" ? null : { display: "none" })}" class="mt-2 text-sm font-medium text-green-600"> A new verification link has been sent to your email address. </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(_sfc_main$6, {
        "is-loading": unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Save`);
          } else {
            return [
              createTextVNode("Save")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).recentlySuccessful) {
        _push(`<p class="text-sm text-gray-600">Saved.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Features/Profile/Components/UpdateProfileInformationForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    mustVerifyEmail: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      const _component_AuthenticatedLayout = resolveComponent("AuthenticatedLayout");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, { title: "Profile" }, null, _parent));
      _push(ssrRenderComponent(_component_AuthenticatedLayout, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between p-6"${_scopeId}><h2 class="text-xl font-semibold leading-tight text-gray-800"${_scopeId}>Profile</h2>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between p-6" }, [
                createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800" }, "Profile"),
                createVNode(unref(_sfc_main$3))
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid gap-6"${_scopeId}><div class="p-6 bg-white rounded-lg shadow sm:p-8"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$1), {
              status: __props.status,
              "must-verify-email": __props.mustVerifyEmail,
              class: "max-w-xl"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="p-6 bg-white rounded-lg shadow sm:p-8"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), { class: "max-w-xl" }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid gap-6" }, [
                createVNode("div", { class: "p-6 bg-white rounded-lg shadow sm:p-8" }, [
                  createVNode(unref(_sfc_main$1), {
                    status: __props.status,
                    "must-verify-email": __props.mustVerifyEmail,
                    class: "max-w-xl"
                  }, null, 8, ["status", "must-verify-email"])
                ]),
                createVNode("div", { class: "p-6 bg-white rounded-lg shadow sm:p-8" }, [
                  createVNode(unref(_sfc_main$2), { class: "max-w-xl" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
