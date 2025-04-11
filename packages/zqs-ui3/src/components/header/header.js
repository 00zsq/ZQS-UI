import ZqsHeader from "./header.vue"

ZqsHeader.install = (app) => {
  app.component(ZqsHeader.name, ZqsHeader)
}

export default ZqsHeader