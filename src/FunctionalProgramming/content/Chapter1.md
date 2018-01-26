#### 简单例子


```ecmascript 6
let Flock = function(counts) {
  this.birds = counts
}

Flock.prototype.join = function(otherFlock) {
  this.birds += otherFlock.birds;
  return this;
}


Flock.prototype.breed = function(otherFlock) {
  this.birds *= otherFlock.birds;
  return this;
}

let flock1 = new Flock(4);
let flock2 = new Flock(2);
let flock3 = new Flock(0);


// flock1.join(flock3).breed(flock2)
// flock1.breed(flock2);
console.log(flock1.join(flock3).breed(flock2).join(flock1.breed(flock2)).birds)

```

```ecmascript 6
const add = function(x, y) { return x + y };
const multiply = function(x, y) { return x * y };

let flock1 = 4;
let flock2 = 2;
let flock3 = 0;

// add ( multiply( add(flock1,flock3) , flock2) , multiply(flock1,flock2))

console.log(  add ( multiply( add(flock1,flock3) , flock2) , multiply(flock1,flock2)))

```