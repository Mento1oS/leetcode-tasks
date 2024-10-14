// Let's make a Cat constructor!
const Cat = (function () {
    let cats = 0;
    let totalWeight = 0;
    return function(name, weight) {
        if(typeof name !== 'string' || typeof weight !=='number' || weight<=0) throw new Error();
        const cat = new Object({});
        Object.defineProperty(cat, 'name',{
            value: name,
        });
        Object.defineProperty(cat, 'weight',{
            get: function () {
                return weight;
            },
            set: function (newWeight) {
                totalWeight-=weight;
                weight = newWeight;
                totalWeight+=weight;
            },
        });
        cats++;
        totalWeight+=cat.weight;
        return cat;
    }
}());

const garfield = new Cat('garfield', 25);
garfield.weight = 16;
// console.log(Cat.averageWeight());