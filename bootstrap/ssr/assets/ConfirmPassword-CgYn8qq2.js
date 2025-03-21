import { resolveComponent, withCtx, unref, createTextVNode, createVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./BaseInput-B-dX_uOd.js";
import { _ as _sfc_main$2 } from "./BaseButton-DM5oAJL2.js";
import "class-variance-authority";
const _sfc_main = {
  __name: "ConfirmPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      password: ""
    });
    const submit = () => {
      form.post(route("password.confirm"), {
        onFinish: () => form.reset()
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GuestLayout = resolveComponent("GuestLayout");
      const _component_Head = resolveComponent("Head");
      _push(ssrRenderComponent(_component_GuestLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Head, { title: "Confirm Password" }, null, _parent2, _scopeId));
            _push2(`<h3 class="mb-4 text-xl font-bold text-gray-700"${_scopeId}> Confirm your password </h3><div class="mb-4 text-sm text-gray-600"${_scopeId}> This is a secure area of the application. Please confirm your password before continuing. </div><form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              autofocus: "",
              label: "Password",
              id: "confirm-password-password",
              autocomplete: "current-password",
              type: "password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              "error-message": unref(form).errors.password,
              onFocus: ($event) => unref(form).clearErrors("password")
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "ms-4",
              "is-loading": unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Confirm `);
                } else {
                  return [
                    createTextVNode(" Confirm ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(_component_Head, { title: "Confirm Password" }),
              createVNode("h3", { class: "mb-4 text-xl font-bold text-gray-700" }, " Confirm your password "),
              createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " This is a secure area of the application. Please confirm your password before continuing. "),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$1, {
                    autofocus: "",
                    label: "Password",
                    id: "confirm-password-password",
                    autocomplete: "current-password",
                    type: "password",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    "error-message": unref(form).errors.password,
                    onFocus: ($event) => unref(form).clearErrors("password")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-message", "onFocus"])
                ]),
                createVNode("div", { class: "flex justify-end mt-4" }, [
                  createVNode(_sfc_main$2, {
                    class: "ms-4",
                    "is-loading": unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Confirm ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ConfirmPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
