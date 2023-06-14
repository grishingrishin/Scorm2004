<template>
    <LSPage
		title="Анимация"
		currentLesson="10"
		allLessons="13"
		:cover="require('../assets/animations.jpg')"
	>
		<template #prepend>
			<LSPrevBtn
				lesson="Урок 9 - Видео"
				to="/video"
			/>
		</template>
		<LSSection>
			<LSExpansionPanel
				title="Позволяет учащимся приостанавливать, останавливать или скрывать контент с помощью автоматического движения"
			>
				<p>Дайте учащимся возможность приостановить, остановить или скрыть любой контент, который запускается автоматически и перемещается, прокручивается или мигает дольше пяти секунд.</p>

				<p>Предоставьте такую же возможность для контента, который автоматически обновляется или обновляется и появляется рядом с другим контентом.</p>

				Исключения:
				<LSList>
					<LSListItem>
						Анимации, которые должны двигаться, чтобы показать,
						что они не застыли или не сломались (например, индикатор выполнения)
					</LSListItem>
					<LSListItem>
						Автономный контент, который не появляется рядом с другим контентом
						(например, анимация, которая появляется одна на странице, пока что-то загружается)
					</LSListItem>
					<LSListItem>
						Любой автоматически перемещаемый контент, который имеет важное значение
						(автоматическое обновление финансовой информации на сайте акций)
					</LSListItem>
				</LSList>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide" target="_blank">WCAG 2.2.2 Pause, Stop, Hide</a> - Уровень A
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel
				title="Убедитесь, что ничто не мигает более 3 раз в секунду"
			>
				<p>У некоторых людей с судорожными расстройствами приступ может быть спровоцирован мигающим визуальным контентом.
				Большинство людей не знают, что у них есть такое расстройство, пока оно не наступит.
				Убедитесь, что содержание, обозначенное как соответствующее WCAG 2.0.
				избегает тех типов вспышек, которые с наибольшей вероятностью могут
				вызвать судороги при просмотре даже в течение
				секунду или две.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html" target="_blank">WCAG 2.3.1 Three Flashes or Below Threshold</a> - Уровень A
					</LSListItem>
					<LSListItem>
						<a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-three-times.html" target="_blank">WCAG 2.3.2 Three Flashes</a> - Уровень AAA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
		</LSSection>
		<template #append>
			<LSNextBtn
				:isCompleted="isCompleted($route.name)"
				lesson="Урок 11 - Код"
				to="/code"
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
    name: 'AnimationsPage',
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
