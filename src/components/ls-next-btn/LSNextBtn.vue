<template>
	<LSBtn
		:to="to"
		:variant="btnVariant"
	>
		{{ lesson }}
		<template #append>
			<svg fill="none" width="15" height="16" viewBox="0 0 15 16" transform='rotate(180)'>
				<path d="M2 8L7.65685 2.34315L13.3137 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
			</svg>
		</template>
	</LSBtn>
</template>

<script>
import LSBtn from '../ls-btn/LSBtn.vue';

export default {
    name: 'LSNextBtn',
	components: {
		LSBtn
	},
	props: {
		isCompleted: {
			type: Boolean,
			default: false,
		},
		lesson: {
			type: String,
			default: '',
		},
		to: {
			type: String,
			default: '',
		},
	},
	computed: {
		btnVariant() {
			return this.isCompleted ? 'secondary' : 'primary';
		}
	}
}
</script>
