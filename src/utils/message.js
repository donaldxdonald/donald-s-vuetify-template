import Message from '@/components/Message.vue'
import vuetify from '@/plugins/vuetify'
import Vue from 'vue'

let toastCpm = null

const defaultOptions = {
  color: 'info',
  timeout: 1500
}

function createCpm () {
  const v = new Vue({
    vuetify,
    render: h => h(Message)
  })
  console.log('v', v)
  // 讲组件挂载到DOM上
  document.body.appendChild(v.$mount().$el)
  return v
}

function getCpm () {
  if (!toastCpm) {
    console.log('111')
    toastCpm = createCpm()
  }
  return toastCpm
}
// 暴露方法
const snackbar = getCpm().$children[0]

function show (options) {
  if ((typeof options) === 'string') {
    defaultOptions.message = options
    snackbar.show(defaultOptions)
  } else {
    snackbar.show({ ...defaultOptions, ...options })
  }
}

export default show
