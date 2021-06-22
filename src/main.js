import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')




let mainNavLinks = document.querySelectorAll("nav ul li a");


 window.addEventListener("scroll", () => {
  
    let fromTop = window.scrollY;
  
    mainNavLinks.forEach(link => {
      
      let section = document.querySelector(link.hash);
      
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        
        link.classList.add("current");
      } else {
        link.classList.remove("current");
      }
    });
  });