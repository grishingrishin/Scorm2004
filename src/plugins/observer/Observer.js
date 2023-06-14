export class Observer {
    constructor() {
        this.listeners = {};
    }

    on(evt, fn) {
        if (!this.listeners[evt]) {
            this.listeners[evt] = {
                data: [],
            };
        }

        this.listeners[evt].data.push(fn);
    }

    emit(evt, ...args) {
        if (!this.listeners[evt]?.data) return false;
        this.listeners[evt].data.forEach(listener => listener(...args));
    }
}
