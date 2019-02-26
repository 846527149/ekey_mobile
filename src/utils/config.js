import Vue from 'vue'
const WEBURL="http://192.168.0.253:10029";
export default {
  install () {
      Vue.prototype.$weburl = WEBURL;
  }
}
