export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: (msg: string) => `你好${msg}！ plugins/hello.ts`,
    },
  }
})
