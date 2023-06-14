<template>
    <div
		:class="[
			'ls-expansion-panel-content',
			{
				'ls-expansion-panel-content--opened': opened,
			},
		]">
        <div class="ls-expansion-panel-content__inner">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'LSExpansionPanelContent',
    props: {
		opened: {
			type: Boolean,
            default: false,
		},
    },
};
</script>

<style lang="scss">
.ls-expansion-panel-content {
	height: 0;
	overflow: hidden;

	&--opened {
		height: auto;
	}

    &__inner {
		padding: 0 30px 30px;
    }
}
</style>
