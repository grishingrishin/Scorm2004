<template>
    <div
        :class="[
			'ls-expansion-panel-header',
			{
				'ls-expansion-panel-header--opened': opened,
			},
		]"
        v-on="$listeners"
    >
        <b class="ls-expansion-panel-header__title">
            {{ title }}
        </b>
        <span
            class="expansion-panel-header__button"
        >
			{{ opened ? '-' : '+' }}
		</span>
    </div>
</template>

<script>
export default {
    name: 'LSExpansionPanelHeader',
    props: {
        title: {
            type: String,
            default: '',
        },
        opened: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="scss">
.ls-expansion-panel-header {
    display: flex;
    padding: 30px;
	align-items: center;
    justify-content: space-between;
    cursor: pointer;

    &__button {
        pointer-events: none;
    }

    &__title {
        margin-right: 16px;
		font-weight: bold;
        font-size: 18px;
        pointer-events: none;
    }

    &--opened &__button {
        transform: rotate(45deg);
    }
}
</style>
