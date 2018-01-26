### 示例应用


感受声明式概念：

```ecmascript 6
// 命令式
let makes = [];
for (i = 0; i < cars.length; i++) {
  makes.push(cars[i].make);
}

let makes = cars.map(car=> car.make);
```

```ecmascript 6

// 命令式
let authenticate = (form) => {
  let user = toUser(form);
  return logIn(user);
};

// 声明式
let authenticate = compose(logIn, toUser);

```