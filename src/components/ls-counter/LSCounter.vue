<template>
    <div class="ls-counter">
		<template v-if="currentLesson && length">
			<LSContainer>
				Урок {{ currentLesson }} из {{ length }}
			</LSContainer>
		</template>
	</div>
</template>

<script>
import LSContainer from '@/components/ls-container/LSContainer.vue';

export default {
    name: 'LessonCounter',
	components: {
		LSContainer,
	},
	props: {
		currentLesson: {
			type: [String, Number],
			required: true,
		},
		length: {
			type: [String, Number],
			required: true,
		},
	}
}
</script>

<style lang="scss">
.ls-counter {
	font-size: 12px;
}
</style>
