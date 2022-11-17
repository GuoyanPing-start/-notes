# 1.意义 
1. 生成实例对象，写法更清晰
2. 类的数据类型就是函数，类本身就指向构造函数
# 2.语法
### 1.由来
1. **关键字 class ，定义类**

```javascript
 class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
```
	1. constructor()、toString()、toValue()这三个方法，
	其实都是定义在Point.prototype上面。
	2. 定义了一个toString()方法。注意，定义toString()方法
	的时候，前面不需要加上function这个关键字，直接把函数
	定义放进去了就可以了。另外，方法与方法之间不需要逗号
	分隔，加了会报错。
2. **Point 相当于function**

```javascript
class Point {
  // ...
}

typeof Point // "function"
Point === Point.prototype.constructor // true
```
3. **调用时使用new,与构造函数一致**

```javascript
class Bar {
  doStuff() {
    console.log('stuff');
  }
}

const b = new Bar();
b.doStuff() // "stuff"
```
4. Object.assign()方法可以很方便地一次向类prototype上添加多个方法。

```javascript
class Point {
  constructor(){
    // ...
  }
}

Object.assign(Point.prototype, {
  toString(){},
  toValue(){}
});
```

### 2. constructor( )
1. 类的默认方法，new调用生成对象时自动调用，类必须有该方法，若没有显示定义，空的该方法会被默认添加

```javascript
class Point {
}

// 等同于
class Point {
  constructor() {}
}
```
2. 调用时必须使用new,跟普通构造函数的一个主要区别，后者不用new也可以执行。
### 3. 类实例
1.  使用new 调用
2. 属性和方法，除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上

```javascript
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

var point = new Point(2, 3);

point.toString() // (2, 3)

point.hasOwnProperty('x') // true
point.hasOwnProperty('y') // true
point.hasOwnProperty('toString') // false
point.__proto__.hasOwnProperty('toString') // true
```
3. 类的所有实例共享一个原型对象

```javascript
var p1 = new Point(2,3);
var p2 = new Point(3,2);

p1.__proto__ === p2.__proto__
//true
```
原型都是Point.prototype，所以__proto__属性是相等的。可以通过实例的__proto__属性为“类”添加方法。

```javascript
var p1 = new Point(2,3);
var p2 = new Point(3,2);

p1.__proto__.printName = function () { return 'Oops' };

p1.printName() // "Oops"
p2.printName() // "Oops"

var p3 = new Point(4,2);
p3.printName() // "Oops"
```
### 4. 新写法
1. 实例属性现在除了可以
		1. 定义在constructor()方法里面的this上面，
```javascript
class IncreasingCounter {
  constructor() {
    this._count = 0;
  }
  get value() {
    console.log('Getting the current value!');
    return this._count;
  }
  increment() {
    this._count++;
  }
}
```
	2. 也可以定义在类内部的最顶层。
```javascript
class IncreasingCounter {
  _count = 0;
  get value() {
    console.log('Getting the current value!');
    return this._count;
  }
  increment() {
    this._count++;
  }
}
```
实例属性_count与取值函数value()和increment()方法，处于同一个层级。这时，不需要在实例属性前面加上this。
### 5.取值函数 getter 存值函数 setter 
设置在属性的 Descriptor 对象上的

```javascript
class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: '+value);
  }
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

inst.prop
// 'getter'
```

