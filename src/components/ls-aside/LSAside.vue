<template>
	<aside class="ls-aside">
		<div class="ls-aside__header">
			<div class="ls-aside__title">
				Рекомендаций WCAG для разработчиков электронных курсов
			</div>
			<LSProgress
				class="ls-aside__progress"
			/>
		</div>
		<LSNavigation
			class="ls-aside__navbar"
		/>
	</aside>
</template>

<script>
import LSProgress from '../ls-progress/LSProgress.vue';
import LSNavigation from '../ls-navigation/LSNavigation.vue';

export default {
	name: 'LSAside',
	components: {
		LSProgress,
		LSNavigation,
	},
};
</script>

<style lang="scss">
.ls-aside {
	display: flex;
	flex-direction: column;
	background-color: #fafafa;
	box-shadow: inset -1.2rem 0 2rem -2rem rgba(0,0,0,.12);

	&__header {
		display: flex;
		padding: 32px 14px;
		flex-basis: 300px;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('@/assets/main.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}

	&__progress {
		width: 100%;
		margin-top: 40px;
	}

	&__title {
		font-weight: bold;
		font-size: 32px;
		line-height: 1.2;
		color: #ffffff;
	}

	&__navbar {
		flex: 1;
	}
}
</style>
