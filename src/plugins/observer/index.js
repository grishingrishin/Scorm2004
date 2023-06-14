import { Observer } from './Observer.js';

export class VueObserver {
    static install(Vue) {
        Vue.prototype.$observer = new Observer();
    }
}
