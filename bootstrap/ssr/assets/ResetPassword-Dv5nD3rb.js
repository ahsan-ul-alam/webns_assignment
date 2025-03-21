import { resolveComponent, withCtx, unref, createTextVNode, createVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./BaseInput-B-dX_uOd.js";
import { _ as _sfc_main$2 } from "./BaseButton-DM5oAJL2.js";
import "class-variance-authority";
const _sfc_main = {
  __name: "ResetPassword",
  __ssrInlineRender: true,
  props: {
    email: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      token: props.token,
      email: props.email,
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("password.store"), {
        onSuccess: () => form.reset()
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GuestLayout = resolveComponent("GuestLayout");
      const _component_Head = resolveComponent("Head");
      _push(ssrRenderComponent(_component_GuestLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Head, { title: "Reset Password" }, null, _parent2, _scopeId));
            _push2(`<h3 class="mb-4 text-xl font-bold text-gray-700"${_scopeId}> Reset your password </h3><form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              label: "Email",
              autofocus: "",
              id: "reset-password-email",
              type: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              autocomplete: "username",
              "error-message": unref(form).errors.email,
              onFocus: ($event) => unref(form).clearErrors("email")
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              label: "Password",
              id: "reset-password-password",
              autocomplete: "new-password",
              type: "password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              "error-message": unref(form).errors.password,
              onFocus: ($event) => unref(form).clearErrors("password")
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              label: "Confirm Password",
              id: "reset-password-password-confirmation",
              autocomplete: "new-password",
              type: "password",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              "error-message": unref(form).errors.password_confirmation,
              onFocus: ($event) => unref(form).clearErrors("password_confirmation")
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              "is-loading": unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Reset Password `);
                } else {
                  return [
                    createTextVNode(" Reset Password ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(_component_Head, { title: "Reset Password" }),
              createVNode("h3", { class: "mb-4 text-xl font-bold text-gray-700" }, " Reset your password "),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$1, {
                    label: "Email",
                    autofocus: "",
                    id: "reset-password-email",
                    type: "email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    autocomplete: "username",
                    "error-message": unref(form).errors.email,
                    onFocus: ($event) => unref(form).clearErrors("email")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onFocus"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$1, {
                    label: "Password",
                    id: "reset-password-password",
                    autocomplete: "new-password",
                    type: "password",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    "error-message": unref(form).errors.password,
                    onFocus: ($event) => unref(form).clearErrors("password")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onFocus"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$1, {
                    label: "Confirm Password",
                    id: "reset-password-password-confirmation",
                    autocomplete: "new-password",
                    type: "password",
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    "error-message": unref(form).errors.password_confirmation,
                    onFocus: ($event) => unref(form).clearErrors("password_confirmation")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onFocus"])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode(_sfc_main$2, {
                    "is-loading": unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Reset Password ")
                    ]),
                    _: 1
                  }, 8, ["is-loading"])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
