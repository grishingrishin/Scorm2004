import { getRoutes } from '../general/getRoutes.js';

export class CourseState {
	constructor(data = {}) {
		this.init(data);
	}

	init(data) {
		const routesFilter = {
			name: 'final',
		};

		for (const { name } of getRoutes(routesFilter)) {
			if (!Object.hasOwn(this, name)) {
				this[name] = new Activity(data[name]);
			}
		}
	}
}

export class Activity {
	constructor(data = {}) {
		this.progress = data.progress ?? 0;
	}
}

