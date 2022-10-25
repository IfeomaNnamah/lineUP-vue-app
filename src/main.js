import { createApp } from 'vue'
import App from './App.vue'
import router from '../router/index.js'
import '@/assets/css/custom.css'

import '@/assets/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/js/bootstrap.min.js"

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faHourglassStart } from '@fortawesome/free-solid-svg-icons'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBars)
library.add(faHourglassStart)
library.add(faChartSimple)
library.add(faPlus)
library.add(faTrash)
library.add(faCircle)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
