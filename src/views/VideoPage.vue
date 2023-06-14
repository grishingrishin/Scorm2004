<template>
	<LSPage
		title="Видео"
		currentLesson="9"
		allLessons="13"
		:cover="require('../assets/video.jpg')"
	>
		<template #prepend>
			<LSPrevBtn
				lesson="Урок 8 - Аудио"
				to="/audio"
			/>
		</template>
		<LSSection title="Предварительно записанное видео">
			<LSExpansionPanel title="Добавьте закрытые титры">
				<p>К любым видео со звуком следует добавлять синхронизированные титры. Эти титры должны включать слова
				произнесенные слова, определить, кто говорит, и описать любые значимые звуковые эффекты. Надписи могут быть открытыми
				(всегда видны) или закрытыми (их можно включать и выключать).</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded" target="_blank">WCAG 1.2.2 Captions (Prerecorded)</a> - Уровень A
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel title="Стенограмма">
				<p>Всякий раз, когда вы включаете видео, вы также должны включать текстовую расшифровку - даже если нет звука.</p>

				<p>Стенограмма должна включать дикторский текст или диалог, описание любых звуковых эффектов и т.д. (если применимо), а также описание того, что происходит.
				а также описание визуального восприятия происходящего.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded" target="_blank">WCAG 1.2.1 Audio-Only and Video-Only (Prerecorded)</a> - Уровень AA
					</LSListItem>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded" target="_blank">WCAG 1.2.3 Audio Description or Media Alternative (Prerecorded)</a> - Уровень A
					</LSListItem>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/media-alternative-prerecorded" target="_blank">WCAG 1.2.8 Media Alternative (Prerecorded)</a> - Уровень AAA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel title="Предоставить дорожку со звуковым описанием">
				<p>Создайте альтернативную звуковую дорожку, которая описывает происходящее визуально в дополнение к любому повествованию или
				диалога (Уровень АА).</p>

				<p>Если в видео недостаточно длинные паузы между речью, чтобы можно было вставить необходимые звуковые
				описания, отредактируйте видео, чтобы увеличить паузы (Уровень ААА).</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded" target="_blank">WCAG 1.2.5 Audio Description (Prerecorded)</a> - Уровень AA
					</LSListItem>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/extended-audio-description-prerecorded" target="_blank">WCAG 1.2.7 Extended Audio Description (Prerecorded) </a> - Уровень AAA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel title="Обеспечить сурдоперевод">
				<p>Для видеороликов с аудиоповествованием или диалогом обеспечьте сурдоперевод.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/sign-language-prerecorded" target="_blank">WCAG 1.2.6 Sign Language (Prerecorded)</a> - Уровень AAA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
		</LSSection>

		<LSSection title="Живое видео">
			<LSExpansionPanel title="Предоставление закрытых субтитров">
				<p>Обеспечьте синхронизированные субтитры для живых презентаций с аудиоконтентом, таких как вебинары или лекции.</p>

				<p>В настоящее время приложения Articulate не поддерживают видео в реальном времени.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/captions-live" target="_blank">WCAG 1.2.4 Captions (Live)</a> - Уровень AA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel title="Перевод">
				<p>Обеспечьте перевод аудиоконтента в режиме реального времени или предложите расшифровку, если контент соответствует заданному сценарию.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/audio-only-live" target="_blank">WCAG 1.2.9 Audio-Only (Live)</a> - Уровень AAA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
		</LSSection>
		<template #append>
			<LSNextBtn
				:isCompleted="isCompleted($route.name)"
				lesson="Урок 10 - Анимация"
				to="/animations"
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
import LSList from '@/components/ls-list/LSList.vue';
import LSListItem from '@/components/ls-list-item/LSListItem.vue';
import LSNextBtn from '@/components/ls-next-btn/LSNextBtn.vue';

export default {
	name: 'VideoPage',
	components: {
		LSPage,
		LSPrevBtn,
		LSSection,
		LSExpansionPanel,
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
