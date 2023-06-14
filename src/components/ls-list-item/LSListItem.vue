<template>
	<li class="ls-list-item">
		<slot />
	</li>
</template>

<script>
export default {
	name: 'LSListItem',
}
</script>

<style lang="scss">
.ls-list-item {
	&:not(:last-child) {
		margin-bottom: 16px;
	}
}
</style>
