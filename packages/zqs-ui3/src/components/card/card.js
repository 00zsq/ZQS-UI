import ZqsCard from './card.vue'

ZqsCard.install = app => {
    app.component(ZqsCard.name, ZqsCard)
}
export default ZqsCard