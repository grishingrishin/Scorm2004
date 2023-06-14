<template>
	<nav class="ls-navigation">
		<ul class="ls-navigation__list">
			<LSNavigationItem
				v-for="({ lesson, path, name }, idx) of navationItems"
				:key="lesson"
				:to="path"
				:lesson="lesson"
				:isCompleted="isCompleted(name)"
				:disabled="!!idx && !isCompleted(navationItems[idx - 1].name)"
			/>
		</ul>
	</nav>
</template>

<script>
import { mapGetters } from 'vuex';
import { getNavigationRoutes } from '@/utils/';
import LSNavigationItem from './LSNavigationItem.vue';

export default {
	name: 'LSNavigation',
	components: {
		LSNavigationItem,
	},
	data() {
		return {
			navationItems: getNavigationRoutes(),
		};
	},
	computed: {
		...mapGetters('progress', ['isCompleted']),
	},
};
</script>
