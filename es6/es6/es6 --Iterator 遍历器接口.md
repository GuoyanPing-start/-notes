1. 基本概念

1.表示集合的数据结构：数组，对象，set，object

2.原生具有遍历器接口的：**Array，Map，Set，String，TypeArray，arguments对象，NodeList对象** 

```js
  let it = ['a', 'b'];
        let items = it[Symbol.iterator]();
        console.log(items.next());
        console.log(items.next());
        console.log(items.next());
        console.log(items.next());
```

3.有该接口才能实现遍历操作，提供for ...of 循环，

1. 【类似数组的对象转数组，array.from】 
   1. 对象不能直接使用**for...of**【需要调用遍历器接口】，可以直接调用**for...in**

4.遍历器对象本质是指针对象，需要调用Next值，返回当前成员的value值以及是否遍历完成的done布尔属性

5.创建时使用  Symbol.iterator  属性，表示可遍历的,调用时返回值需要使用next

2. 调用遍历器场合

一：数组的遍历器接口：接受数组作为参数的场合，其实都调用了遍历器接口。

1）Set 解构赋值

```js
 let aa = new Set(['a', 'b', 'c']);
        let [x, y] = aa;
        console.log(y); //b
        const it1 = aa[Symbol.iterator]();
        console.log(it1.next()); //value:'a' done:false
        console.log(it1.next()); //value:'b' done:false
        console.log(it1.next()); //value:'c' done:false
        console.log(it1.next()); //value:undefined done:true
```

2)扩展运算符

```js
        let aa = new Set(['a', 'b', 'c']);
        let [x, ...y] = aa;
        console.log(y); //['b','c']
```

3) .yield*

```js
let generator = function* () {
  yield 1;
  yield* [2,3,4];
  yield 5;
};

var iterator = generator();

iterator.next() // { value: 1, done: false }
iterator.next() // { value: 2, done: false }
iterator.next() // { value: 3, done: false }
iterator.next() // { value: 4, done: false }
iterator.next() // { value: 5, done: false }
iterator.next() // { value: undefined, done: true }
```



































