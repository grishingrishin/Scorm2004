<template>
    <LSPage
		title="О курсе"
		currentLesson="1"
		allLessons="13"
		:cover="require('../assets/about.png')"
	>
		<LSSection
			title="Что такое WCAG?"
		>
			<p>Если вы внимательно изучаете, что нужно для создания доступного электронного обучения,
			то, несомненно, сталкивались с аббревиатурой "WCAG". WCAG расшифровывается как
			<a href="https://www.w3.org/WAI/WCAG21/Understanding/about" target="_blank">Web Content Accessibility</a>.
			Эти рекомендации представляют собой широкий набор стандартов для обеспечения
			доступности всех типов веб-контента, включая электронное обучение.</p>

			<p>Поскольку WCAG - это набор стандартов, а не правил или законов, они довольно высокого уровня. Руководство не
			говорят вам, как создать доступное электронное обучение, а скорее спецификации или критерии,
			которые определяют, считается ли веб-контент доступным.
			веб-контент считается доступным. Вы сами должны интерпретировать эти рекомендации
			и затем применять их в своих проектах для своей аудитории.</p>

			<p>И вот тут-то могут возникнуть сложности. Интерпретация этих стандартов может стать сложной задачей.
			Поскольку руководство широко применимо ко всем типам веб-опыта,
			формулировки часто абстрактны или слишком техничны, что делает их
			что затрудняет их разбор. Читая руководство
			может вызвать у вас такие вопросы, как ...</p>

			<LSList>
				<LSListItem>
					Как я могу узнать, какие стандарты применимы к электронному обучению?
				</LSListItem>
				<LSListItem>
					Как узнать, что я правильно интерпретировал эти стандарты после разработки курса?
				</LSListItem>
				<LSListItem>
					Могу ли я вообще применять эти стандарты в выбранном мной приложении для создания учебных материалов?
				</LSListItem>
			</LSList>
		</LSSection>
		<template #append>
			<LSNextBtn
				:isCompleted="isCompleted($route.name)"
				lesson="Урок 2 - Уровни"
				to="/levels"
				@mousedown.native="nextLesson"
			/>
		</template>
    </LSPage>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { MAX_SCORE } from '@/utils/';
import LSPage from '@/components/ls-page/LSPage.vue';
import LSSection from '@/components/ls-section/LSSection.vue';
import LSList from '@/components/ls-list/LSList.vue';
import LSListItem from '@/components/ls-list-item/LSListItem.vue';
import LSNextBtn from '@/components/ls-next-btn/LSNextBtn.vue';

export default {
    name: 'AboutPage',
	components: {
		LSPage,
		LSSection,
		LSList,
		LSListItem,
		LSNextBtn,
	},
	computed: {
		...mapGetters('progress', ['isCompleted']),
	},
	methods: {
		...mapActions('progress', ['updateProgress']),
		nextLesson() {
			if (!this.isCompleted(this.$route.name)) {
				this.updateProgress({ page: this.$route.name, progress: MAX_SCORE });
				this.$observer.emit('UPDATED_PROGRESS');
			}
		},
	},
};
</script>
