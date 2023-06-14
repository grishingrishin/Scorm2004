<template>
    <LSPage
		title="Уровни"
		currentLesson="2"
		allLessons="13"
		:cover="require('../assets/levels.jpg')"
	>
		<template #prepend>
			<LSPrevBtn
				lesson="Урок 1 - О курсе"
				to="/about"
			/>
		</template>
		<LSSection>
			<p>Разработка доступного электронного обучения - это не просто установка флажков. Речь идет о создании курсов, к которым могут получить равный доступ все учащиеся, включая тех, кто имеет проблемы со слухом, зрением, мобильностью или обучаемостью.</p>

			<p>Руководство WGAC использует набор из трех уровней соответствия, чтобы помочь направить ваши усилия по обеспечению доступности электронного обучения.
			усилий: Уровень A, Уровень AA и Уровень AAA. Давайте рассмотрим, что они означают.</p>

			<LSExpansionPanel
				title="A"
			>
				<p>Уровень А - это минимальный уровень соответствия. Эти стандарты считаются обязательными,
				но большинство организаций не останавливаются на этом, когда речь заходит об обеспечении доступности.</p>
			</LSExpansionPanel>
			<LSExpansionPanel
				title="AA"
			>
				<p>Уровень AA (Double A) - это промежуточный уровень соответствия.
				Большинство организаций считают уровень АА достижимым
				и ставят своей целью внедрение этих стандартов.</p>
			</LSExpansionPanel>
			<LSExpansionPanel
				title="AAA"
			>
				<p>Уровень AAA (Triple A) - это самый высокий уровень соответствия.
				Хотя эти стандарты считаются "лучшей практикой".
				многие из них довольно труднодостижимы и считаются достижимой целью.</p>
			</LSExpansionPanel>

			<p>Эти уровни относятся не ко всему курсу, а скорее к отдельным критериям.
			Некоторые организации стремятся к уровню не ниже АА, но вы не должны останавливаться на этом.
			Всегда стремитесь соответствовать более высокому уровню, если это возможно.</p>

			<p>Давайте рассмотрим критерии доступности более подробно
			подробно, а также как они работают в приложениях Articulate.</p>
		</LSSection>
		<template #append>
			<LSNextBtn
				:isCompleted="isCompleted($route.name)"
				lesson="Урок 2 - Интерфейсы"
				to="/interfaces"
				@mousedown.native="nextLesson"
			/>
		</template>
    </LSPage>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { MAX_SCORE } from '@/utils/';
import LSPage from '@/components/ls-page/LSPage.vue';
import LSPrevBtn from '@/components/ls-prev-btn/LSPrevBtn.vue';
import LSSection from '@/components/ls-section/LSSection.vue';
import LSExpansionPanel from '@/components/ls-expansion-panel/LSExpansionPanel.vue';
import LSNextBtn from '@/components/ls-next-btn/LSNextBtn.vue';

export default {
    name: 'LevelsPage',
	components: {
		LSPage,
		LSPrevBtn,
		LSSection,
		LSExpansionPanel,
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
