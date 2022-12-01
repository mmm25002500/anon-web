import { createApp, nextTick } from 'vue'
import App from './App.vue'
import router from './router'

// import fontawesome

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'animate.css'

library.add(fas, fab, far)

const app = createApp(App)

// router.afterEach((to, from) => {
//   app.config.globalProperties.$route = to
// })

router.afterEach((to, from) => {
  // console.log('to: ', to, 'from: ', from)
  nextTick(() => {
    if (to.name) {
      document.title = String(to.name)
      console.log(document.title)
    } else {
      document.title = 'Some Default Title'
    }
  })
})

app.use(BootstrapVue3)
app.use(router)

// 載入元件
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
