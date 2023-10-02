// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../node_modules/.pnpm/@pinia+nuxt@0.4.11_typescript@5.2.2/node_modules/@pinia/nuxt/dist/runtime/plugin.vue3").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.7.4_eslint@8.50.0_typescript@5.2.2/node_modules/nuxt/dist/app/plugins/revive-payload.server").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.7.4_eslint@8.50.0_typescript@5.2.2/node_modules/nuxt/dist/app/plugins/revive-payload.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.7.4_eslint@8.50.0_typescript@5.2.2/node_modules/nuxt/dist/head/runtime/plugins/unhead").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.7.4_eslint@8.50.0_typescript@5.2.2/node_modules/nuxt/dist/pages/runtime/plugins/router").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.7.4_eslint@8.50.0_typescript@5.2.2/node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+devtools@1.0.0-beta.0_nuxt@3.7.4/node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.server").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+devtools@1.0.0-beta.0_nuxt@3.7.4/node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.7.4_eslint@8.50.0_typescript@5.2.2/node_modules/nuxt/dist/app/plugins/chunk-reload.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@pinia-plugin-persistedstate+nuxt@1.1.2_@pinia+nuxt@0.4.11_pinia@2.1.6/node_modules/@pinia-plugin-persistedstate/nuxt/dist/runtime/plugin").default> &
  InjectionType<typeof import("../../plugins/api").default> &
  InjectionType<typeof import("../../plugins/fontawesome").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }