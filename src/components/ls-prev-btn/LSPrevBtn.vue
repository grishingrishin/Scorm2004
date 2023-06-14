<template>
	<LSBtn
		:to="to"
		:variant="variant"
	>
		<template #prepend>
			<svg fill="none" width="15" height="16" viewBox="0 0 15 16">
				<path d="M2 8L7.65685 2.34315L13.3137 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
			</svg>
		</template>
		{{ lesson }}
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
		variant: {
			type: String,
			default: 'secondary',
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
}
</script>
