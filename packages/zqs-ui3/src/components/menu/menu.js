import ZqsMenu from './menu.vue'

ZqsMenu.install = app => {
  app.component(ZqsMenu.name, ZqsMenu)
}

export default ZqsMenu