import { mergeModels, useModel, computed, mergeProps, useSSRContext, resolveComponent, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, withModifiers } from "vue";
import { ssrRenderAttrs, ssrLooseContain, ssrGetDynamicModelProps, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { u as useToastStore } from "../ssr.js";
import { _ as _sfc_main$2 } from "./BaseInput-B-dX_uOd.js";
import { _ as _sfc_main$3 } from "./BaseButton-DM5oAJL2.js";
import { cva } from "class-variance-authority";
import "@vue/server-renderer";
import "@inertiajs/vue3/server";
import "pinia";
const _sfc_main$1 = {
  __name: "BaseCheckbox",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    value: {
      default: null
    }
  }, {
    "checked": { type: [Array, Boolean], required: true },
    "checkedModifiers": {}
  }),
  emits: ["update:checked"],
  setup(__props) {
    const model = useModel(__props, "checked");
    const computedClasses = computed(() => {
      return cva("text-gray-700 border-gray-300 rounded shadow-sm focus:black focus:outline-black", {
        variants: {},
        compoundVariants: [],
        defaultVariants: {}
      })({});
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        type: "checkbox",
        value: __props.value,
        checked: Array.isArray(model.value) ? ssrLooseContain(model.value, __props.value) : model.value,
        class: computedClasses.value
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, model.value))))}>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/BaseCheckbox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    const onSubmit = () => {
      form.post(route("login"), {
        onSuccess: () => {
          const toastStore = useToastStore();
          toastStore.add({
            message: `Welcome back 👋`
          });
          form.reset();
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GuestLayout = resolveComponent("GuestLayout");
      const _component_Head = resolveComponent("Head");
      const _component_Link = resolveComponent("Link");
      _push(ssrRenderComponent(_component_GuestLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Head, { title: "Log in" }, null, _parent2, _scopeId));
            if (__props.status) {
              _push2(`<div class="mb-4 text-sm font-medium text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><h3 class="mb-4 text-xl font-bold text-gray-700"${_scopeId}> Log in to your account </h3><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              autofocus: "",
              label: "Email",
              id: "login-email",
              type: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              "error-message": unref(form).errors.email,
              onFocus: ($event) => unref(form).clearErrors("email")
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              label: "Password",
              id: "login-password",
              type: "password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              "error-message": unref(form).errors.password,
              onFocus: ($event) => unref(form).clearErrors("password")
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-between gap-2 mt-4"${_scopeId}><label class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              name: "remember",
              checked: unref(form).remember,
              "onUpdate:checked": ($event) => unref(form).remember = $event
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-gray-600 ms-2"${_scopeId}>Remember me</span></label>`);
            if (__props.canResetPassword) {
              _push2(ssrRenderComponent(_component_Link, {
                href: _ctx.route("password.request"),
                class: "inertia-link"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Forgot your password? `);
                  } else {
                    return [
                      createTextVNode(" Forgot your password? ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex flex-col gap-4 mt-4 sm:flex-row sm:items-center sm:justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Link, {
              href: _ctx.route("register"),
              class: "inertia-link"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="!text-gray-600"${_scopeId2}>Don&#39;t have an account?</span> Sign up `);
                } else {
                  return [
                    createVNode("span", { class: "!text-gray-600" }, "Don't have an account?"),
                    createTextVNode(" Sign up ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              "is-loading": unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log in `);
                } else {
                  return [
                    createTextVNode(" Log in ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(_component_Head, { title: "Log in" }),
              __props.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 text-sm font-medium text-green-600"
              }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(onSubmit, ["prevent"])
              }, [
                createVNode("h3", { class: "mb-4 text-xl font-bold text-gray-700" }, " Log in to your account "),
                createVNode("div", null, [
                  createVNode(_sfc_main$2, {
                    autofocus: "",
                    label: "Email",
                    id: "login-email",
                    type: "email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    "error-message": unref(form).errors.email,
                    onFocus: ($event) => unref(form).clearErrors("email")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onFocus"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$2, {
                    label: "Password",
                    id: "login-password",
                    type: "password",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    "error-message": unref(form).errors.password,
                    onFocus: ($event) => unref(form).clearErrors("password")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onFocus"])
                ]),
                createVNode("div", { class: "flex justify-between gap-2 mt-4" }, [
                  createVNode("label", { class: "flex items-center" }, [
                    createVNode(_sfc_main$1, {
                      name: "remember",
                      checked: unref(form).remember,
                      "onUpdate:checked": ($event) => unref(form).remember = $event
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    createVNode("span", { class: "text-sm text-gray-600 ms-2" }, "Remember me")
                  ]),
                  __props.canResetPassword ? (openBlock(), createBlock(_component_Link, {
                    key: 0,
                    href: _ctx.route("password.request"),
                    class: "inertia-link"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Forgot your password? ")
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "flex flex-col gap-4 mt-4 sm:flex-row sm:items-center sm:justify-between" }, [
                  createVNode(_component_Link, {
                    href: _ctx.route("register"),
                    class: "inertia-link"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "!text-gray-600" }, "Don't have an account?"),
                      createTextVNode(" Sign up ")
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode(_sfc_main$3, {
                    "is-loading": unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Log in ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
