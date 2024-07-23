/**
 * 如果你注册了一个Vue指令，你必须在客户端和服务器端都注册它，除非你只在一个端口渲染时使用它。
 * 如果这个指令只在客户端有意义，你可以将它移动到~/plugins/my-directive.client.ts，
 * 并在~/plugins/my-directive.server.ts中为服务器端提供一个'存根'指令。
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('focus', {
    mounted(el: any) {
      el.focus()
    },
    getSSRProps(binding: any, vnode: any) {
      // 你可以在这里提供SSR特定的props
      return {}
    },
  })
})
