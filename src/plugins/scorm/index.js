import Scorm from './Scorm.js';

export class VueScorm {
    static install(Vue) {
        Vue.prototype.$scorm = new Scorm();
    }
}
