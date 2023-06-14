import Vue from 'vue';
import router from './router';
import { store } from './store/';
import { VueScorm } from './plugins/scorm/';
import { VueObserver } from './plugins/observer/';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueScorm);
Vue.use(VueObserver);

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app')
