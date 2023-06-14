<template>
    <div
		:class="[
			'ls-container',
			{
				'ls-container--sm': sizes === 'sm',
				'ls-container--md': sizes === 'md',
				'ls-container--lg': sizes === 'lg',
				'ls-container--fluid': fluid,
            },
		]">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'LSContainer',
    props: {
        sizes: {
            type: String,
            default: 'md'
        },
        fluid: {
            type: Boolean,
            default: false,
        },
    }
}
</script>

<style lang="scss">
.ls-container {
	margin: 0 auto;
	padding: 0 18px;

	&--sm {
		max-width: 480px;
	}

	&--md {
		max-width: 762px;
	}

	&--lg {
		max-width: 1040px;
	}

	&--fluid {
		max-width: 100%;
	}
}
</style>


