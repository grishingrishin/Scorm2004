<template>
    <div class="ls-page">
		<slot name="prepend"></slot>
		<div class="ls-page__inner">
			<header class="ls-page__header">
				<template v-if="currentLesson">
					<LSCounter
						class="ls-page__counter"
						:currentLesson="currentLesson"
						:length="allLessons"
					/>
				</template>
				<template v-if="title">
					<LSHeadline
						:title="title"
					/>
				</template>
				<template v-if="cover">
					<LSImage
						class="ls-page__cover"
						:src="cover"
					/>
				</template>
			</header>
			<main class="ls-page__main">
				<slot />
			</main>
		</div>
		<slot name="append"></slot>
    </div>
</template>

<script>
import LSCounter from '@/components/ls-counter/LSCounter.vue'
import LSHeadline from '@/components/ls-headline/LSHeadline.vue';
import LSImage from '@/components/ls-image/LSImage.vue';

export default {
    name: 'LessonPage',
	components: {
		LSCounter,
		LSHeadline,
		LSImage,
	},
	props: {
		currentLesson: {
			type: [Number, String],
			default: 0,
		},
		allLessons: {
			type: [Number, String],
			default: 0,
		},
		title: {
			type: String,
			default: '',
		},
		cover: {
			type: String,
			default: '',
		},
	},
}
</script>

<style lang="scss">
.ls-page {
	display: flex;
	min-height: 100vh;
	flex-direction: column;

	&__inner {
		flex: 1;
		padding: 48px 0 94px;
	}

	&__counter {
		margin-bottom: 16px;
	}

	&__cover {
		margin-bottom: 32px;
	}
}
</style>
