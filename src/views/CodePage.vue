<template>
	<LSPage
		title="Код"
		currentLesson="11"
		allLessons="13"
		:cover="require('../assets/code.jpg')"
	>
		<template #prepend>
			<LSPrevBtn
				lesson="Урок 10 - Анимация"
				to="/animations"
			/>
		</template>
		<LSSection>
			<LSExpansionPanel title="Используйте соответствующие коды для пользовательского интерфейса">
				<p>Убедитесь, что интерфейс закодирован таким образом, что вспомогательные технологии позволяют сделать его понятным для
				учащимся. Например, навигационные меню и основные области контента должны быть обозначены с помощью
				ARIA ориентиров.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose" target="_blank">WCAG 1.3.6 Identify Purpose</a> - Уровень AAA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel title="Убедитесь, что видимые и программные имена компонентов интерфейса совпадают">
				<p>Убедитесь, что слова, используемые для визуального обозначения компонента интерфейса, соответствуют словам, связанным с
				в коде, чтобы люди, использующие распознавание речи или программу преобразования текста в речь.
				могли использовать слова, которые они видят, для навигации.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html" target="_blank">WCAG 2.5.3 Label in Name</a> - Уровень A
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel title="Убедитесь, что код не содержит ошибок">
				<p>Если HTML-код неполный или содержит ошибки, содержимое может быть не распознано или не озвучено устройствами чтения с экрана.</p>

				<LSList>
					<LSListItem>
						Элементы имеют полные и правильные открывающие и закрывающие теги
					</LSListItem>
					<LSListItem>
						Элементы вложены друг в друга в соответствии со спецификацией
					</LSListItem>
					<LSListItem>
						Значения атрибутов идентификаторов уникальны
					</LSListItem>
					<LSListItem>
						Элементы не содержат дублирующих атрибутов
					</LSListItem>
				</LSList>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html" target="_blank">WCAG 4.1.1 Parsing</a> - Уровень A
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel title="Укажите название, роль и значение интерактивных элементов">
				<p>Убедитесь, что код используется для передачи названия, роли и значения интерактивных элементов вспомогательным технологиям.
				технологии, например, предупреждать учащихся о том, выбран ли флажок или нет. Это позволит учащимся, использующим вспомогательные технологии
				технологии, знать, для чего нужны интерактивные элементы, что они могут делать и в каком состоянии они находятся.</p>

				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html" target="_blank">WCAG 4.1.2 Name, Role, Value</a> - Уровень A
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel title="Назначение ролей или свойств сообщениям о состоянии">
				<p>Если в вашем авторском приложении используется язык разметки, убедитесь, что вспомогательные технологии распознают и объявляют
				сообщения о состоянии, включая те, которые не получают фокус клавиатуры, чтобы не прерывать работу обучающихся.
				работу учащихся.</p>

				<p>Пример: После того как пользователь вводит неправильно отформатированный текст в поле ввода данных с надписью "дата mm/dd/yy", появляется сообщение "неверный формат".
				появляется сообщение "Неверный формат", которое считыватель экрана объявляет.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html" target="_blank">WCAG 4.1.3 Status Messages</a> - Уровень AA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
		</LSSection>
		<template v-if="$scorm.getStatus() !== 'completed'" #append>
			<LSNextBtn
				lesson="Завершить курс"
				to="/final"
				@mousedown.native="completeCourse"
			/>
		</template>
		<template v-else #append>
			<LSNextBtn
				:isCompleted="isCompleted($route.name)"
				lesson="Урок 1 - О курсе"
				to="/about"
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
	name: 'CodePage',
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
		completeCourse() {
			this.updateProgress({ page: this.$route.name, progress: MAX_SCORE });
			this.$observer.emit('UPDATED_PROGRESS');
			this.$scorm.setPassed();
		},
	},
};
</script>
