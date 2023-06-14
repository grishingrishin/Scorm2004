<template>
	<div class="ls-headline">
		<LSContainer>
			<h1 class="ls-headline__title">{{ title }}</h1>
		</LSContainer>
	</div>
</template>

<script>
import LSContainer from '@/components/ls-container/LSContainer.vue';

export default {
    name: 'LessonHeader',
    components: {
        LSContainer,
    },
	props: {
		title: {
			type: String,
			default: '',
		}
	}
}
</script>

<style lang="scss">
.ls-headline {
	&__title {
		padding-bottom: 54px;
		font-size: 40px;
		line-height: 1;
	}

	&__title::after {
		content: '';
		display: block;
		max-width: 160px;
		height: 5px;
		margin-top: 1em;
		background-color: #1b29c9;
	}
}
</style>
