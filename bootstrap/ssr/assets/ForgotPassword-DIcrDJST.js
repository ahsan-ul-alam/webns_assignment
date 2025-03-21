import { resolveComponent, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./BaseInput-B-dX_uOd.js";
import { _ as _sfc_main$2 } from "./BaseButton-DM5oAJL2.js";
import "class-variance-authority";
const _sfc_main = {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      email: ""
    });
    const submit = () => {
      form.post(route("password.email"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GuestLayout = resolveComponent("GuestLayout");
      const _component_Head = resolveComponent("Head");
      const _component_Link = resolveComponent("Link");
      _push(ssrRenderComponent(_component_GuestLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Head, { title: "Forgot Password" }, null, _parent2, _scopeId));
            _push2(`<h3 class="mb-4 text-xl font-bold text-gray-700"${_scopeId}> Recover Password </h3><div class="mb-4 text-sm text-gray-600"${_scopeId}> Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. </div>`);
            if (__props.status) {
              _push2(`<div class="mb-4 text-sm font-medium text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              autofocus: "",
              label: "Email",
              id: "forgot-password-email",
              type: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              "error-message": unref(form).errors.email,
              onFocus: ($event) => unref(form).clearErrors("email")
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col gap-4 mt-4 sm:flex-row sm:items-center sm:justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Link, {
              href: _ctx.route("login"),
              class: "inertia-link"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Go back `);
                } else {
                  return [
                    createTextVNode(" Go back ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              "is-loading": unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Send Reset Link `);
                } else {
                  return [
                    createTextVNode(" Send Reset Link ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(_component_Head, { title: "Forgot Password" }),
              createVNode("h3", { class: "mb-4 text-xl font-bold text-gray-700" }, " Recover Password "),
              createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. "),
              __props.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 text-sm font-medium text-green-600"
              }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$1, {
                    autofocus: "",
                    label: "Email",
                    id: "forgot-password-email",
                    type: "email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    "error-message": unref(form).errors.email,
                    onFocus: ($event) => unref(form).clearErrors("email")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onFocus"])
                ]),
                createVNode("div", { class: "flex flex-col gap-4 mt-4 sm:flex-row sm:items-center sm:justify-between" }, [
                  createVNode(_component_Link, {
                    href: _ctx.route("login"),
                    class: "inertia-link"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Go back ")
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode(_sfc_main$2, {
                    "is-loading": unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Send Reset Link ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
