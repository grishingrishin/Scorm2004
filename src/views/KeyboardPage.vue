<template>
    <LSPage
		title="Клавиатурная навигация"
		currentLesson="7"
		allLessons="13"
		:cover="require('../assets/keyboard.jpg')"
	>
		<template #prepend>
			<LSPrevBtn
				lesson="Урок 6 - Интерактивные элементы"
				to="/interections"
			/>
		</template>
		<LSSection>
			<LSExpansionPanel
				title="Обеспечьте навигацию по курсу с помощью клавиатуры"
			>
				<p>Учащиеся должны иметь возможность перемещаться и взаимодействовать со всем содержимым курса, используя только клавиатуру,
				за исключением тех случаев, когда требуется траектория их движения (например, при рисовании графики). Кроме того,
				не должно быть никаких ограничений по времени, налагаемых на учащегося для навигации
				по контенту (Уровень A).</p>

				<p>Для более строгого соответствия требованиям, все функциональные возможности содержания курса должны быть доступны с помощью
				клавиатурой - без исключений и без требований к определенному времени
				для отдельных нажатий клавиш (Уровень ААА).</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/keyboard" target="_blank">WCAG 2.1.1 Keyboard</a> - Уровень A
					</LSListItem>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/keyboard-no-exception" target="_blank">WCAG 2.1.3 Keyboard (No Exception)</a> - Уровень AAA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel
				title="Убедитесь, что учащиеся всегда могут отвлечься от контента"
			>
				<p>Учащиеся, использующие клавиатуру для навигации по содержимому, должны иметь возможность перемещаться в сторону от
				любого содержимого, на котором фокусируется внимание, чтобы не застрять.
				Они должны уметь перемещаться с помощью стандартных
				сочетания клавиш ("Tab", "Shift + Tab", "Escape" или клавиши со стрелками).</p>

				<p>Если требуются нестандартные клавиши, объясните учащимся
				как отойти от элемента.</p>

				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap" target="_blank">WCAG 2.1.2 No Keyboard Trap</a> - Уровень A
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel
				title="Избегайте одноклавишных сочетаний клавиш"
			>
				<p>Избегая одноклавишных сочетаний клавиш, вы поможете уменьшить случайную активацию этих сочетаний учащимися, которые используют навигацию по клавиатуре.
				Если вам необходимо создать одноклавишное сочетание клавиш, позвольте учащимся сделать хотя бы одно из следующих действий:</p>

				<LSList>
					<LSListItem>
						Отключите эти ярлыки
					</LSListItem>
					<LSListItem>
						Изменяйте их с помощью клавиш-модификаторов, таких как Ctrl, Alt или Shift
					</LSListItem>
					<LSListItem>
						Активировать их только тогда, когда определенный объект имеет фокус
					</LSListItem>
				</LSList>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts" target="_blank">WCAG 2.1.4 Character Key Shortcuts</a> - Уровень A
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel
				title="Позволить учащимся пропускать повторяющиеся блоки"
			>
				<p>Учащиеся, которые пользуются клавиатурой, должны иметь возможность пропустить повторяющееся содержание
				и сразу переходить к основному содержанию. Например, навигационные элементы электронного обучения - такие как меню или глоссарии.</p>

				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks" target="_blank">WCAG 2.4.1 Bypass Blocks</a> - Уровень A
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel
				title="Логично перемещать учащихся по содержанию"
			>
				<p>Учащиеся должны ориентироваться в содержании последовательно и осмысленно.
				Учащиеся, которые перемещаются по сайту с помощью клавиатуры или устройства чтения с экрана, будут следовать порядку фокусировки
				установленному вами порядку, поэтому важно, чтобы выбранный вами порядок сохранял смысл
				и удобство использования. Например, таблица, где они перемещаются по одной строке или столбцу за раз.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/focus-order" target="_blank">WCAG 2.4.3 Focus Order</a> - Уровень A
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel
				title="Показывать учащимся, на какой части содержания сделан акцент"
			>
				<p>Сделайте индикатор фокуса клавиатуры видимым, чтобы пользователи, использующие только клавиатуру, могли
				видеть, где они находятся на странице. Например, выделение
				рамка вокруг заданной области.</p>

				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/focus-visible" target="_blank">WCAG 2.4.7 Focus Visible</a> - Уровень AA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
		</LSSection>
		<template #append>
			<LSNextBtn
				:isCompleted="isCompleted($route.name)"
				lesson="Урок 8 - Аудио"
				to="/audio"
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
    name: 'KeyboardPage',
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
