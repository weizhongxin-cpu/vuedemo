import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import naive from 'naive-ui'
// import Moment from 'moment'
createApp(App).use(router).use(store).use(naive).mount('#app')
// Vue.filter('dateFormat', function(data, format){
//     return Moment(data).format(format)
// })
