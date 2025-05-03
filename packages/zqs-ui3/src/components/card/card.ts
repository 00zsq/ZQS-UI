import { App }from 'vue'

import ZqsCard from './card.vue'

ZqsCard.install = (app: App): void => {
    app.component(ZqsCard.name || 'zqs-card', ZqsCard)
}
export default ZqsCard