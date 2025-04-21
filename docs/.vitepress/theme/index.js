import Theme from 'vitepress/theme'
import './style/var.css'
import './style/custom.css'
import ZqsUI3 from '../../../packages/zqs-ui3/dist/zqs-ui3.es.js'
import '../../../packages/zqs-ui3/dist/zqs-ui3.css'
import GiscusComment from './GiscusComment.vue'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(ZqsUI3); // 注册 zqs-ui3
    app.component('GiscusComment', GiscusComment)
  },
}
