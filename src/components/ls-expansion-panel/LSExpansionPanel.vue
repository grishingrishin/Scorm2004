<template>
    <div
		:class="[
			'ls-expansion-panel',
			{
				'ls-expansion-panel--active': isVisible,
			},
		]">
        <LSExpansionPanelTop
            :title="title"
            :opened="isVisible"
            @click="toggleVisability"
        />
        <LSExpansionPanelContent
			:opened="isVisible"
		>
			<slot />
		</LSExpansionPanelContent>
    </div>
</template>

<script>
import LSExpansionPanelTop from './LSExpansionPanelTop.vue';
import LSExpansionPanelContent from './LSExpansionPanelContent.vue';

export default {
    name: 'LSExpansionPanel',
    components: {
		LSExpansionPanelTop,
		LSExpansionPanelContent,
	},
    props: {
        title: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            isVisible: false,
        };
    },
    methods: {
        toggleVisability() {
            this.isVisible = !this.isVisible;
        },
    },
};
</script>

<style lang="scss">
.ls-expansion-panel {
    position: relative;
	border: 1px solid #dddddd;
	color: #212121;

	&:last-of-type {
		margin-bottom: 18px;
	}

	&:not(:last-of-type) {
		border-bottom: none;
	}

	&--active {
		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			display: block;
			width: 4px;
			height: 100%;
			background-color: #1b29c9;
		}
	}
}
</style>
