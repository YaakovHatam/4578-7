function orderPizza(size) {
    var pizza = {
        size: size
    }

    function addOlives() {
        pizza.olvies = true;
    }

    function addTomatos() {
        pizza.tomaots = true;
    }

    function addMushrooms() {
        pizza.tomaots = true;
    }

    function build() {
        const p = pizza;
        pizza = null;
        return p;
    }
}

const p1 = new orderPizza(20);
p1.addOlives();
p1.addTomatos();
p1.build();
