import { resolveComponent, withCtx, createVNode, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./BaseLink-Bb5vmvYZ.js";
import "class-variance-authority";
const heroImage = "/build/assets/support-CPnwrqQW.webp";
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    canLogin: {
      type: Boolean
    },
    canRegister: {
      type: Boolean
    },
    laravelVersion: {
      type: String,
      required: true
    },
    phpVersion: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, { title: "Welcome" }, null, _parent));
      _push(`<div class="relative h-screen max-w-screen-xl px-5 mx-auto"><header class="flex flex-col items-center justify-between py-5 lg:flex-row"><div class="flex items-center justify-between w-full">`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("welcome"),
        class: "text-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-bold text-slate-800"${_scopeId}>Webns Support</span>`);
          } else {
            return [
              createVNode("span", { class: "font-bold text-slate-800" }, "Webns Support")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("login"),
        class: "text-base inertia-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Log in `);
          } else {
            return [
              createTextVNode(" Log in ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        href: _ctx.route("register")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Register `);
          } else {
            return [
              createTextVNode(" Register ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></header><div class="w-full mx-auto lg:flex lg:items-center lg:justify-center lg:h-[calc(100vh-74px)]"><main class="grid pb-8 place-items-center lg:grid-cols-2"><div class="block pb-12 order-0 lg:order-1 lg:pb-0"><picture><source${ssrRenderAttr("srcset", `${unref(heroImage)} 200w, ${unref(heroImage)} 400w, ${unref(heroImage)} 600w`)} type="image/webp" sizes="(max-width: 800px) 100vw, 620px"><img${ssrRenderAttr("src", `${unref(heroImage)}`)}${ssrRenderAttr("srcset", `${unref(heroImage)} 200w, ${unref(heroImage)} 400w, ${unref(heroImage)} 600w`)} alt="Two people talking each other" sizes="(max-width: 800px) 100vw, 620px" loading="eager" width="520" height="673" decoding="async"></picture></div><div class="space-y-6"><h1 class="text-4xl font-bold text-gray-900 text-balance lg:text-6xl xl:text-7xl lg:tracking-tight xl:tracking-tighter"> Elevate Support Experiences with Webns Support </h1><p class="max-w-xl lg:text-lg text-slate-500 text-pretty"> Webns Support is your all-in-one support ticket solution. It provides everything you need for seamless support management, combining the best features of modern tools with its own innovative approach. </p><div class="flex flex-col gap-3 sm:flex-row">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        size: "sm",
        href: _ctx.route("register")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Get started `);
          } else {
            return [
              createTextVNode(" Get started ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></main></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
