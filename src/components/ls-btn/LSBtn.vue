<template>
	<router-link
		:to="to"
		:class="[
			'ls-btn',
			{
				'ls-btn--primary': this.variant === 'primary',
				'ls-btn--secondary': this.variant === 'secondary',
			},
		]"
	>
		<div class="ls-btn__prepend">
			<slot name="prepend" />
		</div>
		<slot />
		<div class="ls-btn__append">
			<slot name="append" />
		</div>
	</router-link>
</template>

<script>
export default {
    name: 'LSBtn',
	props: {
		variant: {
			type: String,
			default: 'primary'
		},
		to: {
			type: String,
			default: '',
		},
	},
}
</script>

<style lang="scss">
.ls-btn {
	display: flex;
	width: 100%;
	min-height: 62px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-weight: 700;
	font-size: 14px;

	&--primary {
		color: #fff;
		background-color: #1b29c9;
	}

	&--secondary {
		color: #212121;
		background-color: #f0f0f0;

		&:hover {
			background-color: #e3e3e3;
		}
	}

	&:not(:hover) {
		text-decoration: none;
	}
}
</style>
