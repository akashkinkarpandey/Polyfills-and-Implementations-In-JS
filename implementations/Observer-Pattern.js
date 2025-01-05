/**
 * Class representing a Host that manages observers.
 */
class Host {
    constructor() {
        /**
         * Array to store registered observers.
         * @type {Function[]}
         */
        this.observers = [];
    }

    /**
     * Registers an observer.
     * @param {Function} observer - The observer to be registered.
     */
    registerObserver(observer) {
        this.observers.push(observer);
    }

    /**
     * Unregisters an observer.
     * @param {Function} observer - The observer to be unregistered.
     */
    unregisterObserver(observer) {
        this.observers = this.observers.filter(eachObserver => eachObserver !== observer);
    }

    /**
     * Notifies all registered observers.
     * @param {*} callOberserverWithArgument - The argument to be passed to the observers.
     * @param {Object} [thisContext] - The context in which the observer functions should be called.
     */
    notifyObserver(callOberserverWithArgument, thisContext) {
        let actualContext = thisContext || this;
        this.observers.forEach((eachObserver) =>
          eachObserver.call(actualContext, callOberserverWithArgument)
        );
    }
}

/**
 * Observer function that logs a message with the provided data.
 * @param {*} data - The data to be logged.
 */
const observer1 = function(data) {
    console.log(`I am observer1 with event-> ${data}`);
};

/**
 * Observer function that logs a message with the provided data.
 * @param {*} data - The data to be logged.
 */
const observer2 = function(data) {
    console.log(`I am observer2 with event-> ${data}`);
};

/**
 * Observer function that logs a message with the provided data.
 * @param {*} data - The data to be logged.
 */
const observer3 = function(data) {
    console.log(`I am observer3 with event-> ${data}`);
};

const host = new Host();
host.registerObserver(observer2);
host.notifyObserver('notifying first time');
host.registerObserver(observer3);
host.registerObserver(observer1);
host.notifyObserver(`notifying 2nd time`);
host.unregisterObserver(observer2);
host.notifyObserver(`notifying 3rd time`);
