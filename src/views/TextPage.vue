<template>
	<LSPage
		title="Текст"
		currentLesson="4"
		allLessons="13"
		:cover="require('../assets/text.jpg')"
	>
		<template #prepend>
			<LSPrevBtn
				lesson="Урок 3 - Интерфейсы"
				to="/interfaces"
			/>
		</template>
		<LSSection
			title="Формат"
		>
			<LSExpansionPanel
				title="Выбирайте цвета с достаточным контрастом"
			>
				<p>Весь текст размером менее 14 полужирных или 18 обычных должен иметь
				контрастность с фоном не менее 4,5:1 для уровня АА (7:1 для уровня ААА).</p>

				<p>Все, что больше этого, может иметь коэффициент контрастности
				до 3:1 для уровня AA (4,5:1 для уровня AAA).</p>

				Единственный текст, который не требует минимального уровня контрастности - это текст, который:
				<LSList>
					<LSListItem>
						Декоративные
					</LSListItem>
					<LSListItem>
						Часть неактивного или отключенного компонента пользовательского интерфейса
					</LSListItem>
					<LSListItem>
						Часть логотипа или названия бренда
					</LSListItem>
				</LSList>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum" target="_blank">WCAG 1.4.3 Contrast (Minimum)</a> - Уровень AA
					</LSListItem>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced" target="_blank">WCAG 1.4.6 Contrast (Enhanced)</a> - Уровень AAA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel
				title="Избегайте встраивания текста в изображения"
			>
				<p>Текст, встроенный в изображения, не может быть прочитан средствами обеспечения доступности. Вы должны вставить
				его непосредственно в авторское приложение - если только у обучающегося нет возможности настроить его форматирование в соответствии со своими потребностями (уровень AA).</p>

				Текст, встроенный в изображения, допустим только в следующих случаях (уровень ААА):
				<LSList>
					<LSListItem>
						При использовании в качестве украшения
					</LSListItem>
					<LSListItem>
						В логотипе
					</LSListItem>
					<LSListItem>
						Когда используется для демонстрации определенного визуального аспекта текста - например, семейства шрифтов
					</LSListItem>
					<LSListItem>
						Когда текст является частью изображения, которое содержит значительный другой визуальный контент, например, графики,
						скриншоты и диаграммы, которые визуально передают важную информацию не только через текст.
					</LSListItem>
				</LSList>

				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/images-of-text" target="_blank">WCAG 1.4.5: Images of Text</a> - Уровень AA
					</LSListItem>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/images-of-text-no-exception" target="_blank">WCAG 1.4.9 Images of Text (No Exception)</a> - Уровень AAA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
		</LSSection>

		<LSSection
			title="Структура"
		>
			<LSExpansionPanel
				title="Определите заголовки, списки и т.д."
			>
				<p>При создании контента определяйте заголовки, ссылки, списки и другие элементы,
				чтобы пользователи, читающие с экрана, могли легко понять и изучить контент.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships" target="_blank">WCAG 1.3.1 Info and Relationships</a> - Уровень A
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
		</LSSection>

		<LSSection
			title="Язык"
		>
			<LSExpansionPanel
				title="Определите основной язык, используемый в курсе"
			>
				<p>Убедитесь, что файл вашего курса включает функцию, которая сообщает
				вспомогательным технологиям, на каком языке написано содержимое. Это гарантирует:</p>

				<LSList>
					<LSListItem>
						Устройства чтения с экрана используют правильное произношение
					</LSListItem>
					<LSListItem>
						В подписях к СМИ отображаются правильные символы, пунктуация и направление чтения текста
					</LSListItem>
				</LSList>

				<p>Если контент представлен на нескольких языках, соответствие уровню А требует просто
				установить язык курса как тот, на котором он чаще всего отображается. Чтобы соответствовать уровню АА,
				курс также должен сообщать вспомогательным технологиям, какие отрывки или фразы написаны на другом языке.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/language-of-page" target="_blank">WCAG 3.1.1 Language of Page</a> - Уровень A
					</LSListItem>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts" target="_blank">WCAG 3.1.2 Language of Parts</a> - Уровень AA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel
				title="Объяснять слова или фразы, используемые необычным образом"
			>
				<p>При некоторых видах инвалидности сложнее понять, когда слова или фразы используются не буквально,
				например, идиомы или жаргон. Если без этих терминов не обойтись, включите пояснения
				в текст или в другое место курса, которое легко
				найти - например, в сноске или глоссарии.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/unusual-words" target="_blank">WCAG 3.1.3 Unusual Words</a> - Уровень AAA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel
				title="Сокращения"
			>
				<p>Определите все аббревиатуры и убедитесь, что учащиеся могут получить доступ к расширенной форме.
				Обычный способ сделать это - включить полный термин с аббревиатурой в скобках непосредственно
				после (или наоборот) первого использования термина в тексте.
				Еще один вариант - глоссарий.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="" target="_blank">WCAG 3.1.4 Abbreviations</a> - Уровень AAA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel
				title="Когда слово имеет несколько вариантов произношения, уточните, какой из них имеется в виду"
			>
				<p>Некоторые слова имеют разные значения в зависимости от того, как они произносятся - например, bass (инструмент) против bass (рыба).
				При использовании текста с разными значениями четко передавайте смысл, который вы имеете в виду.</p>

				<p>Часто по окружающему тексту можно определить, какое произношение имеется в виду. Когда это не так,
				воспользуйтесь ссылкой на звуковой файл с произношением или включите руководство по произношению в глоссарий курса.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/reading-level" target="_blank">WCAG 3.1.6 Pronunciation</a> - Уровень AАА
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel
				title="Пишите контент простым способом"
			>
				<p>Пишите контент как можно проще. Стремитесь к тому, чтобы текст был не сложнее, чем уровень чтения ниже среднего.
				Если это невозможно, предоставьте легко читаемую альтернативу или дополнительный контент.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/reading-level" target="_blank">WCAG 3.1.5 Reading Level</a> - Уровень AAА
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
		</LSSection>
		<template #append>
			<LSNextBtn
				:isCompleted="isCompleted($route.name)"
				lesson="Урок 5 - Изображения"
				to="/images"
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
    name: 'TextPage',
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
