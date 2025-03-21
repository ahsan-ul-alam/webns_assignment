// vite.config.js
import { defineConfig } from "file:///C:/Users/ahsan/Desktop/new/support_ticket_webns/node_modules/vite/dist/node/index.js";
import laravel from "file:///C:/Users/ahsan/Desktop/new/support_ticket_webns/node_modules/laravel-vite-plugin/dist/index.js";
import vue from "file:///C:/Users/ahsan/Desktop/new/support_ticket_webns/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var vitestConfig = {
  test: {
    globals: true,
    environment: "happy-dom"
  }
};
var vite_config_default = defineConfig({
  test: vitestConfig.test,
  build: {
    chunkSizeWarningLimit: 1500
  },
  plugins: [
    laravel({
      input: "resources/js/app.js",
      ssr: "resources/js/ssr.js",
      refresh: true
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false
        }
      }
    })
  ],
  ssr: {
    noExternal: ["@inertiajs/server"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhaHNhblxcXFxEZXNrdG9wXFxcXG5ld1xcXFxzdXBwb3J0X3RpY2tldF93ZWJuc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcYWhzYW5cXFxcRGVza3RvcFxcXFxuZXdcXFxcc3VwcG9ydF90aWNrZXRfd2VibnNcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2Foc2FuL0Rlc2t0b3AvbmV3L3N1cHBvcnRfdGlja2V0X3dlYm5zL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgbGFyYXZlbCBmcm9tICdsYXJhdmVsLXZpdGUtcGx1Z2luJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcblxuY29uc3Qgdml0ZXN0Q29uZmlnID0ge1xuXHR0ZXN0OiB7XG5cdFx0Z2xvYmFsczogdHJ1ZSxcblx0XHRlbnZpcm9ubWVudDogJ2hhcHB5LWRvbScsXG5cdH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdHRlc3Q6IHZpdGVzdENvbmZpZy50ZXN0LFxuXHRidWlsZDoge1xuXHRcdGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMTUwMCxcblx0fSxcblx0cGx1Z2luczogW1xuXHRcdGxhcmF2ZWwoe1xuXHRcdFx0aW5wdXQ6ICdyZXNvdXJjZXMvanMvYXBwLmpzJyxcblx0XHRcdHNzcjogJ3Jlc291cmNlcy9qcy9zc3IuanMnLFxuXHRcdFx0cmVmcmVzaDogdHJ1ZSxcblx0XHR9KSxcblx0XHR2dWUoe1xuXHRcdFx0dGVtcGxhdGU6IHtcblx0XHRcdFx0dHJhbnNmb3JtQXNzZXRVcmxzOiB7XG5cdFx0XHRcdFx0YmFzZTogbnVsbCxcblx0XHRcdFx0XHRpbmNsdWRlQWJzb2x1dGU6IGZhbHNlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9KSxcblx0XSxcblx0c3NyOiB7XG5cdFx0bm9FeHRlcm5hbDogWydAaW5lcnRpYWpzL3NlcnZlciddLFxuXHR9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJVLFNBQVMsb0JBQW9CO0FBQ3hXLE9BQU8sYUFBYTtBQUNwQixPQUFPLFNBQVM7QUFFaEIsSUFBTSxlQUFlO0FBQUEsRUFDcEIsTUFBTTtBQUFBLElBQ0wsU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Q7QUFDRDtBQUVBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLE1BQU0sYUFBYTtBQUFBLEVBQ25CLE9BQU87QUFBQSxJQUNOLHVCQUF1QjtBQUFBLEVBQ3hCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUixRQUFRO0FBQUEsTUFDUCxPQUFPO0FBQUEsTUFDUCxLQUFLO0FBQUEsTUFDTCxTQUFTO0FBQUEsSUFDVixDQUFDO0FBQUEsSUFDRCxJQUFJO0FBQUEsTUFDSCxVQUFVO0FBQUEsUUFDVCxvQkFBb0I7QUFBQSxVQUNuQixNQUFNO0FBQUEsVUFDTixpQkFBaUI7QUFBQSxRQUNsQjtBQUFBLE1BQ0Q7QUFBQSxJQUNELENBQUM7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSixZQUFZLENBQUMsbUJBQW1CO0FBQUEsRUFDakM7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
