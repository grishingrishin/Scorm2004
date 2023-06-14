<template>
	<li
		:class="[
			'ls-navigation-item',
			{
				'ls-navigation-item--disabled': disabled
			}
		]"
	>
		<router-link :to="to" class="ls-navigation-item__link">
			<svg width="18" height="12" fill="none" aria-hidden="true" class="ls-navigation-item__icon ls-navigation-item__icon--prepend">
				<path fill="currentColor" fill-rule="evenodd"
				d="M.667 1c0-.46.373-.833.833-.833H14a.833.833 0 1 1 0 1.666H1.5A.833.833 0 0 1 .667 1Zm0 5c0-.46.373-.833.833-.833h15a.833.833 0 1 1 0 1.666h-15A.833.833 0 0 1 .667 6Zm0 5c0-.46.373-.833.833-.833h9.167a.833.833 0 0 1 0 1.666H1.5A.833.833 0 0 1 .667 11Z"
				clip-rule="evenodd" />
			</svg>
			{{ lesson }}
			<template v-if="isCompleted">
				<svg width="16" height="16" viewBox="0 0 24 24" class="ls-navigation-item__icon ls-navigation-item__icon--append">
					<path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
				</svg>
			</template>
		</router-link>
	</li>
</template>

<script>
export default {
	name: 'LSNavigationItem',
	props: {
		lesson: {
			type: String,
			default: '',
		},
		to: {
			type: String,
			default: '',
		},
		isCompleted: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

<style lang="scss">
.ls-navigation-item {
	&--disabled {
		opacity: .4;
		user-select: none;
		pointer-events: none;
	}

	&__link {
		display: flex;
		width: 100%;
		padding: 18px 14px;
		align-items: center;
		font-size: 14px;
		line-height: 16px;
		text-decoration: none;
		color: inherit;

		&:hover {
			background-color: #f3f3f3;
		}
	}

	&__icon {
		&--prepend {
			margin-right: 7px;
		}

		&--append {
			margin-left: auto;

			path {
				fill: #1b29c9;
			}
		}
	}

	.router-link-exact-active {
		background-color: #f3f3f3;
	}
}
</style>
