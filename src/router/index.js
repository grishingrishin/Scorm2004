import Vue from 'vue';
import VueRouter from 'vue-router';

import AboutPage from '@/views/AboutPage.vue';
import LevelsPage from '@/views/LevelsPage.vue';
import InterfacesPage from '@/views/InterfacePage.vue';
import TextPage from '@/views/TextPage.vue';
import ImagesPage from '@/views/ImagesPage.vue';
import InterectionsPage from '@/views/InterectionsPage.vue';
import KeyboardPage from '@/views/KeyboardPage.vue';
import AudioPage from '@/views/AudioPage.vue';
import VideoPage from '@/views/VideoPage.vue';
import AnimationsPage from '@/views/AnimationsPage.vue';
import CodePage from '@/views/CodePage.vue';
import FinalPage from '@/views/FinalPage.vue';

import { getRoutes, DEBOUNCE_TIMEOUT } from '@/utils/';

Vue.use(VueRouter);

const routersLocator = new Map([
	['about', AboutPage],
	['levels', LevelsPage],
	['interfaces', InterfacesPage],
	['text', TextPage],
	['images', ImagesPage],
	['interections', InterectionsPage],
	['keyboard', KeyboardPage],
	['audio', AudioPage],
	['video', VideoPage],
	['animations', AnimationsPage],
	['code', CodePage],
	['final', FinalPage]
])

const router = new VueRouter({
    routes: getRoutes()
		.map(route => {
			return {
				...route,
				component: routersLocator.get(route.name)
			}
		}),
    scrollBehavior(to) {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve({ x: 0, y: to.path !== '/about' ? 62 : 0 })
			}, DEBOUNCE_TIMEOUT);
		})
    },
});

export default router;
