const Container = function (x) {
    this.__value = x;
};

Container.of = x => {
    return new Container(x);
}


console.log(Container.of(3));

console.log(Container.of('hello world'));

console.log(Container.of(Container.of({name: 'Joey'})));
global.__value = 8;
Container.__value = 7;
Container.prototype.__value = 6;
Container.prototype.map =  (f) => {
    return Container.of(f(this.__value));
};

console.log(Container.of(2).map(two => two + 2));
