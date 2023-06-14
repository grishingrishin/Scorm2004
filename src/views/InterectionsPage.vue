<template>
	<LSPage
		title="Интерактивные элементы"
		currentLesson="6"
		allLessons="13"
		:cover="require('../assets/interections.jpg')"
	>
		<template #prepend>
			<LSPrevBtn
				lesson="Урок 5 - Изображения"
				to="/images"
			/>
		</template>
		<LSSection>
			<LSExpansionPanel title="Разработка состояний наведения для навигации с помощью мыши и клавиатуры">
				<p>Когда учащиеся наводят курсор или используют клавиатуру, чтобы сфокусироваться на интерактивном элементе, убедитесь, что все пользователи могут это сделать:</p>

				<LSList>
					<LSListItem>
						наведите курсор
					</LSListItem>
					<LSListItem>
						отклонить его
					</LSListItem>
					<LSListItem>
						воспринимать его до того, как он исчезнет
					</LSListItem>
				</LSList>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus" target="_blank">WCAG 1.4.13 Content on Hover or Focus</a> - Уровень AA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel title="Обеспечить предсказуемость взаимодействия, когда учащиеся меняют фокус внимания">
				<p>Когда учащиеся перемещают фокус - с помощью мыши, клавиши табуляции или вспомогательной технологии - убедитесь, что это не вызывает
				основные действия, такие как открытие всплывающих окон или новых направлений. Избегайте удивлять учащихся действием фокусировки
				которого они не ожидают.</p>

				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/on-focus" target="_blank">WCAG 3.2.1 On Focus</a> - Уровень A
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel title="Избегайте непредвиденных ситуаций, когда учащиеся взаимодействуют с полем ввода данных">
				<p>Взаимодействия, которые хранят вводимые учащимся данные, такие как поля ввода данных, радиокнопки и флажки, должны
				функционировать предсказуемым образом. В качестве альтернативы вы можете предупредить учащихся, когда элемент ввода
				может вести себя не так, как ожидается - например, если выбор радиокнопки автоматически отправляет
				их выбор.</p>

				<p>Уровень ААА в версии этого руководства применяет этот стандарт предсказуемости ко всему, что происходит
				на странице или экране. Изменения на экране должны происходить в результате прямого действия учащегося или
				учащиеся должны иметь возможность отключить автоматические изменения.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/on-input" target="_blank">WCAG 3.2.2 On Input</a> - Уровень A
					</LSListItem>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/change-on-request" target="_blank">WCAG 3.2.5 Change on Request</a> - Уровень AAA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel title="Поместите элементы навигации в последовательное место в вашем макете">
				<p>Если у вас есть повторяющиеся элементы навигации - например, кнопка "Домой", - облегчите учащимся их поиск.
				разместив их в одном месте на любом экране, на котором они появляются.</p>

				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation" target="_blank">WCAG 3.2.3 Consistent Navigation</a> - Уровень AA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel title="Выявление ошибок ввода и предоставление предложений по их исправлению">
				<p>Если учащиеся допускают ошибку при работе с элементами ввода - такими как поля ввода данных, радиокнопки,
				и флажками, четко опишите, что именно было сделано неправильно, используя текст. Ошибка может быть связана с тем, что учащиеся не
				выбирают или предоставляют информацию, которая требуется, или заполняют поля данных в неправильном формате или
				значениями вне диапазона (Уровень A).</p>

				<p>Когда учащиеся допускают ошибки при работе с исходными материалами, подскажите им, как исправить эти ошибки (Уровень АА).
				эти ошибки (Уровень АА). Например, если поле формы требует ввода, а пользователь оставляет его пустым,
				выделите это поле и объясните, что требуется.</p>

				<LSList>
					<LSListItem>
						Исключение: Исключение составляют случаи, когда предложение об ошибке может представлять угрозу безопасности - например, подсказки паролей..
					</LSListItem>
				</LSList>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html" target="_blank">WCAG 3.3.1 Error Identification</a> - Уровень A
					</LSListItem>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html#:~:text=3%3A%20Error%20Suggestion-,Success%20Criterion%203.3.,or%20purpose%20of%20the%20content." target="_blank">WCAG 3.3.3 Error Suggestion</a> - Уровень AA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel title="Обеспечьте четкие инструкции или этикетки для вводимых предметов">
				<p>Когда учащимся нужно ответить на вопрос викторины или ввести текст в поле ввода, дайте четкие инструкции или надписи.
				чтобы они знали, что делать. Четко обозначьте каждое поле ввода данных с требованием ввода, например, "Фамилия
				имя" или "адрес электронной почты". Уточните, является ли поле обязательным для заполнения или есть ли требования к форматированию.
				например, чувствительно к регистру (Уровень А).</p>

				<p>Обеспечьте дополнительную поддержку, когда учащиеся заполняют поля ввода данных - например, значки помощи рядом с каждым полем,
				которые дают дополнительные указания или примеры (Уровень ААА). например, значки помощи рядом с каждым полем,
				которые дают дополнительные указания или примеры (Уровень ААА).</p>

				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html" target="_blank">WCAG 3.3.2 Labels or Instructions </a> - Уровень A
					</LSListItem>
					<LSListItem>
						<a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-context-help.html" target="_blank">WCAG 3.3.5 Help</a> - Уровень AAA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel title="Убедитесь, что учащиеся могут отменить, проверить, исправить или подтвердить конфиденциальные данные">
				<p>Если от учащихся требуется ввести информацию с юридическими или финансовыми последствиями или внести обновления или
				изменения в личные данные, убедитесь, что они могут отменить, проверить или подтвердить данные перед отправкой (уровень AA).</p>

				<p>Помочь учащимся с ограниченными возможностями избежать последствий, которые могут возникнуть в результате ошибки при отправке
				данных формы. Дайте пользователям возможность отменить или отредактировать отправку формы (Уровень ААА).</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible.html" target="_blank">WCAG 3.3.4 Error Prevention (Legal, Financial, Data)</a> - Уровень AA
					</LSListItem>
					<LSListItem>
						<a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible-all.html" target="_blank">WCAG 3.3.6 Error Prevention (All) </a> - Уровень AAA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel title="Придайте вашим ссылкам контекст">
				<p>Сделайте ваши ссылки ясными и понятными, в идеале - из самого текста ссылки - например,
				<b>Мой блог</b> или <b>Нажмите здесь</b>. Как минимум, опишите назначение ссылки в том же
				предложении, абзаце, элементе списка или ячейке таблицы, где находится ссылка.</p>

				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context" target="_blank">WCAG 2.4.4 Link Purpose (In Context)</a>
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel title="Делайте кнопки размером не менее 44 на 44 пикселя">
				<p>Делайте кнопки достаточно крупными, чтобы все учащиеся могли легко их выбирать, особенно на сенсорных экранах.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html" target="_blank">WCAG 2.5.5 Target Size</a> - Уровень AAA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel title="Всегда предлагайте вариант с одним касанием">
				<p>Во всех операциях должны использоваться простые жесты, требующие только одного прикосновения. Жесты, требующие использования двух пальцев или
				сложные движения, могут быть сложны для людей с тремором рук или ограниченной подвижностью.</p>

				<p>Пример: Веб-сайт содержит вид карты, который поддерживает жест "щипок" для увеличения содержимого карты. Пользовательский
				пользовательского интерфейса предлагает управление с помощью кнопок плюс и минус для увеличения и уменьшения масштаба.</p>

				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures" target="_blank">WCAG 2.5.1 Pointer Gestures</a> - Уровень A
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel title="Облегчить пользователям предотвращение случайного или ошибочного ввода данных">
				<p>Для функциональных возможностей, которыми можно управлять одним касанием, должно быть верно хотя бы одно из следующих условий:</p>

				<LSList>
					<LSListItem>
						Нет события вниз: Событие падения указателя не используется для выполнения какой-либо части функции
					</LSListItem>
					<LSListItem>
						Прерывание или отмена: Завершение функции происходит по событию up, и имеется механизм для прерывания функции до ее завершения или для отмены функции после ее завершения
					</LSListItem>
					<LSListItem>
						Разворот вверх: Событие вверх отменяет любой результат предшествующего события вниз
					</LSListItem>
					<LSListItem>
						Существенно: Завершение функции при наступлении события падения является существенным
					</LSListItem>
				</LSList>

				<p>Например, для элементов интерфейса, для которых в качестве ввода используется одно касание или длительное нажатие, соответствующее событие
				событие запускается, когда палец поднимается внутри этого элемента.</p>

				Узнать больше:
				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html" target="_blank">WCAG 2.5.2 Pointer Cancellation </a> - Уровень A
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
			<LSExpansionPanel title="Сделайте контент доступным через несколько входов">
				<p>Ваш ученик должен иметь возможность переключаться между различными устройствами ввода при работе с вашим контентом.
				Не предполагайте, что пользователь мыши всегда будет использовать мышь, или что пользователь клавиатуры всегда будет использовать клавиатуру.</p>

				<LSList>
					<LSListItem>
						<a href="https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms.html" target="_blank">WCAG 2.5.6 Concurrent Input Mechanisms</a> - Уровень AAA
					</LSListItem>
				</LSList>
			</LSExpansionPanel>
		</LSSection>
		<template #append>
			<LSNextBtn
				:isCompleted="isCompleted($route.name)"
				lesson="Урок 7 - Клавиатурная навигация"
				to="/keyboard"
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
	name: 'InterectionsPage',
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
