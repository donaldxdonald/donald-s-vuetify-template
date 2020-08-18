import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import zhHans from 'vuetify/es5/locale/zh-Hans'
// import colors from 'vuetify/lib/util/colors'
import { light } from './theme'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { zhHans },
    current: 'zh-Hans'
  },
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    themes: { light }
  }
})
