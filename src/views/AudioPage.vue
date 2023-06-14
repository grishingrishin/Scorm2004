<template>
    <LSPage
		title="Аудио"
		currentLesson="8"
		allLessons="13"
		:cover="require('../assets/audio.jpg')"
	>
		<template #prepend>
			<LSPrevBtn
				lesson="Урок 7 - Клавиатурная навигация"
				to="/keyboard"
			/>
		</template>
		<LSSection>
			<LSExpansionPanel
				title="Включите кнопку паузы/остановки и регулятор громкости"
			>
				<p>Если аудио воспроизводится автоматически более 3 секунд, предоставьте учащимся возможность приостановить, остановить или регулировать громкость.
				Компьютерные средства управления звуком не учитываются - учащиеся должны иметь возможность самостоятельно управлять звуком курса.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/audio-control" target="_blank">WCAG 1.4.2 Audio Control</a> - Уровень A
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel
				title="Добавьте закрытые титры"
			>
				<p>Добавляйте синхронизированные титры к предварительно записанным медиафайлам, включающим аудио. Эти титры должны описывать все в аудиодорожке, включая диалог,
				личности дикторов и звуковые эффекты. Надписи могут быть открытыми (всегда видны) или закрытыми (их можно включать и выключать).</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded" target="_blank">WCAG 1.2.2 Captions (Prerecorded)</a> - Уровень A
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel
				title="Предоставить стенограмму"
			>
				<p>При включении только аудиоматериалов в дополнение к титрам добавляйте текстовую расшифровку.
				В расшифровке должно быть описано все, что есть в аудиодорожке, включая диалог,
				личности говорящих и звуковые эффекты.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded" target="_blank">WCAG 1.2.1 Audio-Only and Video-Only (Prerecorded)</a> - Уровень A
					</LSListItem>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/media-alternative-prerecorded" target="_blank">WCAG 1.2.8 Media Alternative (Prerecorded)</a> - Уровень AAA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel
				title="Уменьшение или устранение фонового звука"
			>
				<p>Фоновые звуки должны быть достаточно тихими, чтобы пользователи с нарушениями слуха могли отделить повествование от фонового звука. Вы можете либо:</p>

				<LSList>
					<LSListItem>
						Не использовать фоновый звук
					</LSListItem>
					<LSListItem>
						Позволяет пользователям отключать фоновый звук
					</LSListItem>
					<LSListItem>
						Сделайте фоновый звук в четыре раза тише (на 20 децибел ниже), чем дикторский текст
					</LSListItem>
				</LSList>

				<p>Примечание: Это требование не распространяется на аудио CAPTCHA.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/low-or-no-background-audio" target="_blank">WCAG 1.4.7 Low or No Background Audio</a> - Уровень AAA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
		</LSSection>
		<template #append>
			<LSNextBtn
				:isCompleted="isCompleted($route.name)"
				lesson="Урок 9 - Видео"
				to="/video"
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
    name: 'AudioPage',
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
