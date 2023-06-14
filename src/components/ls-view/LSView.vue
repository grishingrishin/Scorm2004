<template>
	<div
		:class="[
			'ls-view',
			{
				'ls-view--menu': isShowMenu,
			},
		]">
		<div class="ls-view__menu">
			<button type="button" class="ls-view__toggle" @click="menuToggler">
				<svg fill="currentColor" viewBox="0 0 20 14" width="20px" heigh="14px">
					<path d="M0 0H20V2H0V0Z M0 6H20V8H0V6Z M20 12H0V14H20V12Z"></path>
				</svg>
			</button>
		</div>
		<LSAside
			class="ls-view__aside"
		/>
		<main class="ls-view__content">
			<transition name="fade" mode="out-in" appear>
				<router-view />
			</transition>
		</main>
	</div>
</template>

<script>
import LSAside from '../ls-aside/LSAside.vue';

export default {
	name: 'LSView',
	components: {
		LSAside,
	},
	data() {
		return {
			isShowMenu: false,
		};
	},
	methods: {
		menuToggler() {
			this.isShowMenu = !this.isShowMenu;
		},
	},
};
</script>

<style lang="scss">
.ls-view {
	overflow: hidden;

	&__menu {
		position: fixed;
		z-index: 69;
		margin-top: 62px;
		padding: 8px 12px;
		transition: all .2s linear;

		.ls-view--menu & {
			margin-left: 264px;
		}
	}

	&__toggle {
		display: flex;
		width: 32px;
		height: 32px;
		align-items: center;
		justify-content: center;
		background-color: rgba(255,255,255,.8);
		border-radius: 4px;
	}

	&__aside {
		position: fixed;
		top: 0;
		left: 0;
		width: 264px;
		height: 100vh;
		transition: all .2s linear;

		.ls-view:not(.ls-view--menu) & {
			transform: translateX(-264px);
		}
	}

	&__content {
		transition: all .2s linear;

		.ls-view--menu & {
			transform: translateX(264px);
		}
	}

	.fade-enter-active, .fade-leave-active {
		transition: opacity .25s;
	}
	.fade-enter, .fade-leave-to  {
		opacity: 0;
	}
}
</style>
