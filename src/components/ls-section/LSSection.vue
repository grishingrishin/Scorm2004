<template>
    <section class="ls-section">
        <LSContainer>
			<template v-if="title">
				<h2 class="ls-section__title">{{ title }}</h2>
			</template>
			<slot />
		</LSContainer>
    </section>
</template>

<script>
import LSContainer from '@/components/ls-container/LSContainer.vue';

export default {
    name: 'LSSection',
	components: {
		LSContainer
	},
	props: {
		title: {
			type: String,
			default: '',
		},
	},
}
</script>

<style lang="scss">
.ls-section {
	padding: 28px 0;

	&__title {
		margin-bottom: 32px;
		font-size: 32px;
	}
}
</style>

