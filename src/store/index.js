import Vue from 'vue'
import Vuex from 'vuex'
import progress from './modules/progress.js';

Vue.use(Vuex)

export const store = new Vuex.Store({
	modules: {
		progress
	}
});
