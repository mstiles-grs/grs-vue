import axios from 'axios'

export default {
  install(Vue) {
    Vue.prototype.$axios = axios.create({
        baseURL: process.env.VUE_APP_API,
        withCredentials: true
    })

    Vue.prototype.$authorizedRequest = axios.create({
      baseURL: process.env.API,
      withCredentials: true
    })
  }
}