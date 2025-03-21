import { resolveComponent, withCtx, unref, createTextVNode, createVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { u as useToastStore } from "../ssr.js";
import { _ as _sfc_main$1 } from "./BaseInput-B-dX_uOd.js";
import { _ as _sfc_main$2 } from "./BaseButton-DM5oAJL2.js";
import "@vue/server-renderer";
import "@inertiajs/vue3/server";
import "pinia";
import "class-variance-authority";
const _sfc_main = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("register"), {
        onSuccess: () => {
          const toastStore = useToastStore();
          toastStore.add({
            message: `Welcome to TicketHub 🥳`
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
            _push2(ssrRenderComponent(_component_Head, { title: "Register" }, null, _parent2, _scopeId));
            _push2(`<form${_scopeId}><h3 class="mb-4 text-xl font-bold text-gray-700"${_scopeId}> Tell us about yourself </h3><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              autofocus: "",
              label: "Name",
              id: "register-name",
              type: "text",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              autocomplete: "name",
              "error-message": unref(form).errors.name,
              onFocus: ($event) => unref(form).clearErrors("name")
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              autocomplete: "username",
              label: "Email",
              id: "register-email",
              type: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              "error-message": unref(form).errors.email,
              onFocus: ($event) => unref(form).clearErrors("email")
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              label: "Password",
              id: "register-password",
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
              id: "register-password-confirmation",
              autocomplete: "new-password",
              type: "password",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              "error-message": unref(form).errors.password_confirmation,
              onFocus: ($event) => unref(form).clearErrors("password_confirmation")
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col gap-4 mt-4 sm:flex-row sm:items-center sm:justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Link, {
              href: _ctx.route("login"),
              class: "inertia-link"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Already registered? `);
                } else {
                  return [
                    createTextVNode(" Already registered? ")
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
                  _push3(` Register `);
                } else {
                  return [
                    createTextVNode(" Register ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(_component_Head, { title: "Register" }),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("h3", { class: "mb-4 text-xl font-bold text-gray-700" }, " Tell us about yourself "),
                createVNode("div", null, [
                  createVNode(_sfc_main$1, {
                    autofocus: "",
                    label: "Name",
                    id: "register-name",
                    type: "text",
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    autocomplete: "name",
                    "error-message": unref(form).errors.name,
                    onFocus: ($event) => unref(form).clearErrors("name")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onFocus"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$1, {
                    autocomplete: "username",
                    label: "Email",
                    id: "register-email",
                    type: "email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    "error-message": unref(form).errors.email,
                    onFocus: ($event) => unref(form).clearErrors("email")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onFocus"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$1, {
                    label: "Password",
                    id: "register-password",
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
                    id: "register-password-confirmation",
                    autocomplete: "new-password",
                    type: "password",
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    "error-message": unref(form).errors.password_confirmation,
                    onFocus: ($event) => unref(form).clearErrors("password_confirmation")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onFocus"])
                ]),
                createVNode("div", { class: "flex flex-col gap-4 mt-4 sm:flex-row sm:items-center sm:justify-between" }, [
                  createVNode(_component_Link, {
                    href: _ctx.route("login"),
                    class: "inertia-link"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Already registered? ")
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode(_sfc_main$2, {
                    "is-loading": unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Register ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
