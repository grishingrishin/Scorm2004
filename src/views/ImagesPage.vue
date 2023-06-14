<template>
	<LSPage
		title="Изображения"
		currentLesson="5"
		allLessons="13"
		:cover="require('../assets/images.jpg')"
	>
		<template #prepend>
			<LSPrevBtn
				lesson="Урок 4 - Текст"
				to="/text"
			/>
		</template>
		<LSSection title="Информационные изображения">
			<LSExpansionPanel title="Добавьте альтернативный текст (alt)">
				<p>Когда изображения (или другие нетекстовые объекты) передают информацию, важно включить alt-текст (открывается в новой вкладке), чтобы люди, использующие вспомогательные технологии, такие как экранные сканеры, могли понять назначение изображения.
				(открывается в новой вкладке), чтобы люди, использующие вспомогательные технологии, например, программы для чтения с экрана, могли понять назначение содержимого.
				содержание. Альт-текст должен быть содержательным и кратким.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html#:~:text=Non%2Dtext%20Content-,Success%20Criterion%201.1.,for%20the%20situations%20listed%20below.&text=If%20non%2Dtext%20content%20is,name%20that%20describes%20its%20purpose." target="_blank">WCAG 1.1.1: Non-Text Content</a> - Уровень AA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
		</LSSection>

		<LSSection title="Декоративные изображения">
			<LSExpansionPanel title="Скрыть от средств обеспечения доступности">
				<p>Если изображение не несет никакой информации, лучше скрыть его от средств обеспечения доступности.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html#:~:text=Non%2Dtext%20Content-,Success%20Criterion%201.1.,for%20the%20situations%20listed%20below.&text=If%20non%2Dtext%20content%20is,name%20that%20describes%20its%20purpose." target="_blank">WCAG 1.1.1: Non-Text Content</a> - Уровень A
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
		</LSSection>
		<template #append>
			<LSNextBtn
				:isCompleted="isCompleted($route.name)"
				lesson="Урок 6 - Интерактивные элементы"
				to="/interections"
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
	name: 'ImagesPage',
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
