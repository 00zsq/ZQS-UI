import ZqsBackTop from "./backtop.vue"

ZqsBackTop.install = (app) => {
  app.component(ZqsBackTop.name, ZqsBackTop)
}

export default ZqsBackTop