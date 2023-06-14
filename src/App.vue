<template>
	<div id="app">
		<LSView />
	</div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import { FIRST_LESSON_NAME, getRoutes } from './utils/';
import LSView from './components/ls-view/LSView.vue';

const appRoutes = getRoutes().map(route => route.name);

export default {
	name: 'App',
	components: {
		LSView
	},
	computed: {
		...mapState('progress', ['pages']),
		...mapGetters('progress', ['generalProgress']),
	},
	watch: {
		$route({ name }) {
			if (appRoutes.includes(name)) {
				this.$scorm.setLocation(name);
			}
		},
	},
	created() {
		this.$scorm.launch();
		this.restoreProgress(this.$scorm.getState());
		this.$observer.on('UPDATED_PROGRESS', this.updateProgress);
	},
	mounted() {
		const location = this.$scorm.getLocation();
		this.setActiveLesson(location || FIRST_LESSON_NAME);
	},
	methods: {
		...mapActions('progress', ['restoreProgress']),
		updateProgress() {
			this.$scorm.setScore(this.generalProgress);
			this.saveProgress();
		},
		saveProgress() {
			this.$scorm.setState({
				progress: this.pages,
			});
		},
		setActiveLesson(lessonName) {
			if (lessonName !== this.$route.name) {
				this.$router.push({
					name: lessonName,
				});
			}
		},
	},
};
</script>

<style lang="scss">
@import '@/styles/normalize.scss';
@import '@/styles/rt.scss';

html {
	font-size: 18px;
	line-height: 1.8;
	font-family: lato, sans-serif;
	color: #313537;
}

ul,
p {
	margin-bottom: 18px;
}

a {
	text-decoration: underline;
	color: #1b29c9;
}

svg {
	display: flex;
}

::-webkit-scrollbar {
	width: 16px
}

::-webkit-scrollbar-track {
	background-color: #fff;
	border-radius: 0 8px 8px 0;
	scrollbar-width: thin;
}

::-webkit-scrollbar-thumb {
	background-color: #babac0;
	border-radius: 16px;
	border: 4px solid #fff;
}

::-webkit-scrollbar-button {
	display: none;
}
</style>
