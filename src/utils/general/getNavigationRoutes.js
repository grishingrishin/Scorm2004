import { getRoutes } from './getRoutes.js';

export const getNavigationRoutes = filter => {
	const navigationRoutes = new Map([
		['about', { lesson: 'О курсе' }],
		['levels', { lesson: 'Уровни' }],
		['interfaces', { lesson: 'Интерфейсы' }],
		['text', { lesson: 'Текст' }],
		['images', { lesson: 'Изображения' }],
		['interections', { lesson: 'Интерактивные элементы' }],
		['keyboard', { lesson: 'Клавиатурная навигация' }],
		['audio', { lesson: 'Аудио' }],
		['video', { lesson: 'Видео' }],
		['animations', { lesson: 'Анимация' }],
		['code', { lesson: 'Код' }],
	]);

	return getRoutes(filter)
		.map(route => {
			if (navigationRoutes.has(route.name)) {
				return {
					...route,
					...navigationRoutes.get(route.name),
				}
			}
		})
		.filter(Boolean);
};
