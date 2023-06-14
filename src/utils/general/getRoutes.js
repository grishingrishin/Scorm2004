export const getRoutes = filter => {
	const routes = [
		{
			path: '/about',
			name: 'about',
		},
		{
			path: '/levels',
			name: 'levels',
		},
		{
			path: '/interfaces',
			name: 'interfaces',
		},
		{
			path: '/text',
			name: 'text',
		},
		{
			path: '/images',
			name: 'images',
		},
		{
			path: '/interections',
			name: 'interections',
		},
		{
			path: '/keyboard',
			name: 'keyboard',
		},
		{
			path: '/audio',
			name: 'audio',
		},
		{
			path: '/video',
			name: 'video',
		},
		{
			path: '/animations',
			name: 'animations',
		},
		{
			path: '/code',
			name: 'code',
		},
		{
			path: '/final',
			name: 'final',
		},
	]

	if (filter) {
		return routes.filter(route => {
			for (const key in filter) {
				if (route[key] !== filter[key]) {
					return route;
				}
			}
		});
	}

	return routes;
};
