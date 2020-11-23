import { QBadge } from 'quasar'

export default {
  name: 'QTodoList',

  render (h) {
    return h(QBadge, {
      staticClass: 'QTodoList',
      props: {
        label: 'QTodoList'
      }
    })
  }
}
