<template>
    <LSPage
		title="Интерфейсы"
		currentLesson="3"
		allLessons="13"
		:cover="require('../assets/interface.jpg')"
	>
		<template #prepend>
			<LSPrevBtn
				lesson="Урок 2 - Уровни"
				to="/levels"
			/>
		</template>
		<LSSection
			title="Характеристики"
		>
			<LSExpansionPanel
				title="Включают как портретный, так и ландшафтный режимы"
			>
				<p>Когда вы создаете свой курс, убедитесь, что у обучающихся есть возможность
				просматривать его как в книжном, так и в альбомном режимах.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/orientation" target="_blank">WCAG 1.3.4 Orientation</a> - Уровень AA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel
				title="Позволять учащимся увеличивать текст"
			>
				Учащиеся должны уметь:
				<LSList>
					<LSListItem>
						Увеличить текст на 200% без использования вспомогательных технологий, не отрываясь от контента и не имея возможности взаимодействовать с курсом (Уровень AA)
					</LSListItem>
					<LSListItem>
						Масштабируйте содержимое до 400% без необходимости чрезмерной прокрутки в любом направлении (Уровень AAA)
					</LSListItem>
				</LSList>

				<p>Учащиеся не должны использовать горизонтальную полосу прокрутки для прочтения строки
				текст (даже при увеличении в 200%) в полноэкранном режиме (Уровень ААА).</p>
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/resize-text" target="_blank">WCAG 1.4.4 Resize Text</a> - Уровень AA
					</LSListItem>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation" target="_blank">WCAG 1.4.8 Visual Presentation</a> - Уровень AAA
					</LSListItem>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/reflow" target="_blank">WCAG 1.4.10 Reflow</a> - Уровень AAA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel
				title="Позволяет учащимся регулировать размер текста и интервал между строками"
			>
				<p>Учащиеся должны иметь возможность изменять интервал между текстами без того, чтобы это отсекало
				без того, чтобы это отсекало содержание или мешало им взаимодействовать с курсом.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing" target="_blank">WCAG 1.4.12 Text Spacing</a> - Уровень AA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel
				title="Позволить учащимся регулировать форматирование текста"
			>
				<p>Позволяет учащимся настраивать внешний вид текста, включая цвета переднего плана и
				цвета фона, ширину абзаца, выравнивание и межстрочный интервал.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation" target="_blank">WCAG 1.4.8 Visual Presentation</a> - Уровень AAA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel
				title="Не устанавливайте временные ограничения"
			>
				<p>Не устанавливайте временные ограничения для занятий, если только учащийся
				не может их отключить, скорректировать или продлить.</p>

				Исключения:
				<LSList>
					<LSListItem>
						Любая деятельность, где время имеет важное значение для понимания (например, имитация реальной деятельности, которую необходимо завершить за определенное время)
					</LSListItem>
				</LSList>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable" target="_blank">WCAG 2.2.1 Timing Adjustable</a> - Уровень A
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
		</LSSection>

		<LSSection
			title="Цвета"
		>
			<LSExpansionPanel
				title="Не используйте только цвета для передачи смысла"
			>
				<p>При использовании другого цвета, чтобы выделить слово или фразу,
				не забудьте также использовать другое форматирование, например <b>выделение жирным</b> или <u>подчеркивание.</u></p>

				<p>При использовании цвета для передачи смысла - например, красный для неправильного
				и зеленый для правильного - обязательно используйте также текст или значок.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/use-of-color" target="_blank">WCAG 1.4.1 Use of Color</a> - Уровень A
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel
				title="Выбирайте цвета с достаточным контрастом"
			>
				<p>Кнопки и иконки в интерфейсе должны иметь значение <a href="" target="_blank">коэффициент контрастности</a>
					не менее 3:1 относительно цвета фона и всех элементов, рядом с которыми они появляются.</p>

				<p>Кнопки без свободного пространства между ними должны быть
				достаточно контрастными по отношению друг к другу и к фону.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast" target="_blank">WCAG 1.4.11 Non-Text Contrast</a> - Уровень AA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
		</LSSection>

		<LSSection
			title="Ярлыки"
		>
			<LSExpansionPanel
				title="Напишите четкие инструкции и этикетки для кнопок"
			>
				<p>Убедитесь, что учащиеся могут понять, как взаимодействовать с вашим курсом без необходимости
				полагаться на сенсорные характеристики объекта - форму, цвета, размер,
				визуальное расположение, ориентация или звук. Например, напишите
				"Выберите кнопку меню", а не
				"Выберите синий прямоугольник в правом верхнем углу".</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics" target="_blank">WCAG 1.3.3 Sensory Characteristics</a> - Уровень
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel
				title="Четко маркируйте поля ввода"
			>
				<p>Убедитесь, что все поля ввода, содержащие персональные данные, четко обозначены
				(на экране и в alt-тексте), чтобы все учащиеся могли легко понять их назначение.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose" target="_blank">WCAG 1.3.5 Identify Input Purpose</a> - Уровень AA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel
				title="Используйте последовательную идентификацию названий"
			>
				<p>При включении интерактивных элементов, которые функционируют одинаково во всем курсе электронного обучения - например, текст/иконки
				на кнопке - убедитесь, что видимые надписи или значки соответствуют друг другу, так же как и доступные названия.
				Например, не включайте строку поиска с надписью "Поиск" в одном разделе,
				"Найти" во второй части, а лупа - в третьей.
				в третьем разделе.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-functionality.html" target="_blank">WCAG 3.2.4 Consistent Identification</a> - Уровень AA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel
				title="Добавьте описательный заголовок страницы"
			>
				<p>Помогите учащимся понять, о чем пойдет речь на каждой странице, прежде чем они перейдут к ее содержанию.
				Заголовок страницы должен концентрироваться на основной теме или цели. Уникальные заголовки позволяют устройствам чтения с экрана
				различать отдельные страницы, а также улучшают результаты поиска.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/page-titled" target="_blank">WCAG 2.4.2 Page Titled</a> - Уровень A
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel
				title="Используйте описательные заголовки"
			>
				<p>Чтобы учащиеся знали, чего ожидать от раздела или слайда, используйте заголовки, описывающие тему или цель.
				Кроме того, убедитесь, что все надписи, предусмотренные для интерактивных элементов, четко описывают цель взаимодействия.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels" target="_blank">WCAG 2.4.6 Headings and Labels</a> - Уровень AA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
		</LSSection>

		<LSSection
			title="Структура"
		>
			<LSExpansionPanel
				title="Организуйте содержание в логическом порядке"
			>
				<p>Если порядок чтения содержания важен для понимания его смысла, убедитесь, что вспомогательные
				технологии, такие как программы чтения с экрана, могут читать содержимое в правильной последовательности.</p>

				<p>Например, если у вас есть набор вкладок, он должен сначала прочитать
				сначала первую, затем вторую и так далее.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence" target="_blank">WCAG 1.3.2 Meaningful Sequence</a> - Уровень A
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel
				title="Позволить учащимся находить один и тот же материал разными способами"
			>
				<p>Контент должен быть доступен с помощью нескольких различных методов. Например,
				электронный учебный курс, в котором можно перемещаться с помощью меню,
				кнопки "следующий/предыдущий" или строку поиска.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways" target="_blank">WCAG 2.4.5 Multiple Ways</a> - Уровень AA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
		</LSSection>
		<template #append>
			<LSNextBtn
				:isCompleted="isCompleted($route.name)"
				lesson="Урок 4 - Текст"
				to="/text"
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
    name: 'InterfacePage',
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
