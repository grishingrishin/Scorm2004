<template>
	<div class="ls-progress">
		<div class="ls-progress__track">
			<div class="ls-progress__runner" :style="{ width: `${currentProgress}%` }"></div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'LSProgress',
	props: {
		progress: {
			type: Number,
			default: 0,
		},
	},
	computed: {
		...mapGetters('progress', ['generalProgress']),
		currentProgress() {
			return Math.round(this.generalProgress);
		},
	},
};
</script>

<style lang="scss">
.ls-progress {
	&__track {
		background-color: hsla(0, 0%, 100%, .5);
	}

	&__runner {
		width: 0;
		height: 2px;
		background-color: #fff;
	}
}
</style>
