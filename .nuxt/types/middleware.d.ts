import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "../../node_modules/.pnpm/nuxt@3.7.4_eslint@8.50.0_typescript@5.2.2/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}