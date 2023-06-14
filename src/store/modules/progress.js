import { CourseState, MAX_SCORE } from '@/utils/';

export default {
	namespaced: true,
	state: () => ({
		pages: new CourseState(),
	}),
	getters: {
		generalProgress: ({ pages }, { totalPages }) => Object.keys(pages).reduce((acc, key) => acc += pages[key].progress, 0) / totalPages,
		pageProgress: ({ pages }) => pageName => Object.hasOwn(pages, pageName) ? pages[pageName].progress : null,
		isCompleted: (state, { pageProgress }) => pageName => pageProgress(pageName) >= MAX_SCORE,
		totalPages: ({ pages }) => Object.keys(pages).length,
	},
	mutations: {
		RESTORE_PROGRESS(state, { progress }) {
			state.pages = new CourseState(progress);
		},
		UPDATE_PROGRESS(state, { page, progress }) {
			state.pages[page].progress = progress;
		}
	},
	actions: {
		restoreProgress({ commit }, payload) {
			if (payload) {
				commit('RESTORE_PROGRESS', payload);
			}
		},
		updateProgress({ commit, state }, payload) {
			if (Object.hasOwn(state.pages, payload.page)) {
				commit('UPDATE_PROGRESS', payload);
			}
		},
	},
}

