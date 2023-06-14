<template>
    <div class="ls-image">
        <div class="ls-image__figure">
			<img :src="src" class="ls-image__img" :alt="alt">
		</div>
    </div>
</template>

<script>
export default {
    name: 'LSImage',
	props: {
		src: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			default: '',
		},
	},
}
</script>

<style lang="scss">
.ls-image {
	&__figure {
		position: relative;
		min-height: 400px;
	}

	&__figure::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		background-color: hsla(215,8%,43%,.6);
	}

	&__img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}
</style>

