import { pipwerks } from './libs';
import { centisecsToISODuration } from './utils';

export default class Scorm {
    constructor() {
        this.sessionStart = 0;
        this.sessionEnd = 0;
        this.wrapper = pipwerks.SCORM;
    }
    launch() {
		this.wrapper.init()
		this.sessionStart = new Date().getTime();
		this.setTimestamp();
		window.addEventListener('beforeunload', this.terminate.bind(this));
    }
	terminate() {
		this.setTimestamp();
		this.wrapper.quit();
	}
	getState() {
        const suspendData = this.wrapper.get('cmi.suspend_data');
		return suspendData ? JSON.parse(suspendData) : {};
    }
	getStatus() {
		return this.wrapper.get('cmi.completion_status');
	}
    getLocation() {
        return this.wrapper.get('cmi.location');
    }
    setScore(score) {
        this.wrapper.set('cmi.score.min', 0);
		this.wrapper.set('cmi.score.max', 100);
		this.wrapper.set('cmi.score.raw', score.toString());
		this.wrapper.set('cmi.score.scaled', (score / 100).toString());
        this.save();
    }
    setPassed() {
        this.wrapper.set('cmi.completion_status', 'completed');
		this.wrapper.set('cmi.success_status', 'passed');
        this.save();
    }
    setState(progress) {
        this.wrapper.set('cmi.suspend_data', JSON.stringify(progress));
        this.save();
    }
	setLocation(lessonName) {
        this.wrapper.set('cmi.location', lessonName);
        this.save();
    }
	setTimestamp() {
        let currentTime = new Date().getTime();
        this.setSessionTime(currentTime - this.sessionStart);
    }
    setSessionTime(timelapse = 0) {
        this.wrapper.set('cmi.session_time', centisecsToISODuration(Math.floor(timelapse / 10)));
    }
	save() {
        const result = this.wrapper.save();

        if (result === null) {
			console.error('Подключение к SCORM потеряно! Перезагрузите курс!');
		}
    }
}
