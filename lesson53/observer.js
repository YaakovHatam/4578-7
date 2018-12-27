function sportNews() {
    const objectsArray = [];

    function subscribe(o) {
        objectsArray.push(o);
    }

    function unsubscribe(o) {
        // TODO
    }

    function notify() {
        const newInformation = Math.random() * 1000;

        for(let i=0; i < objectsArray.length; i++) {
            objectsArray[i].notifySubscriber(newInformation);
        }
    }

    return {
        subscribe: subscribe,
        unsubscribe: unsubscribe,
        notify: notify
    }
}

const sport = sportNews();

function Subscriber(name) {
    this.name = name;
}

Subscriber.prototype.notifySubscriber = function(d) {
    console.log(this.name + ' ' + d);
}

const d1 = new Subscriber('o1');
const d2 = new Subscriber('o2');

sport.subscribe(d1);
sport.subscribe(d2);

setInterval(function() {
    sport.notify()
}, 3 * 1000);