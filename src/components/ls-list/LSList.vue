<template>
	<ul
		:class="[
			'ls-list',
			{
				'ls-list--disc': type === 'disc',
			},
		]">
		<slot />
	</ul>
</template>

<script>
export default {
	name: 'LSList',
	props: {
		type: {
			type: String,
			default: 'disc'
		},
		list: {
			type: Array,
			default: () => ([]),
		}
	},
}
</script>

<style lang="scss">
.ls-list {
	padding-top: 8px;

	&--disc {
		margin-left: 18px;
		list-style: disc;
	}
}
</style>
