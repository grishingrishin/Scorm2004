<template>
    <LSPage
		title="Курс завершен"
		:cover="require('../assets/final.jpg')"
	>
		<LSSection
			title="Полезные ссылки"
		>
			<LSList
				type="none"
			>
				<LSListItem>
					<a href="https://www.w3.org/WAI/WCAG21/Understanding/" target="_blank">Руководство по доступности веб-контента (WCAG)</a> - полный список рекомендаций
				</LSListItem>
			</LSList>
		</LSSection>
    </LSPage>
</template>

<script>
import LSPage from '@/components/ls-page/LSPage.vue';
import LSSection from '@/components/ls-section/LSSection.vue';
import LSList from '@/components/ls-list/LSList.vue';
import LSListItem from '@/components/ls-list-item/LSListItem.vue';

export default {
    name: 'FinalPage',
	components: {
		LSPage,
		LSSection,
		LSList,
		LSListItem,
	},
};
</script>
