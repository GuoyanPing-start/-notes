# 1.使用原因
1. 大程序拆分为相互依赖小文件，再简单方法拼接
2. 好处：1>避免变量污染，命名冲突   2>提供代码的复用率、维护性     3>依赖关系管理
![在这里插入图片描述](https://img-blog.csdnimg.cn/58766059efb647fc9f2685d43da62781.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/e421ed5f6b69455d8db2d6a94fb7d02c.png)
# 2.使用方法
###	1.1 导出 export
```javascript
// 导出暴露变量
let name = "GYP";
let age = 20;
export { name, age }

// 暴露对象
let obj = {
    name: '郭研苹',
    age: 20
}
export { obj };

// 3.1 导出暴露函数
export function addFn(a, b) {
    console.log(a + b);
}

function fn1() {
    console.log(fn1);
}

function fn2() {
    console.log(fn2);
}
export { fn1 as tempfn1, fn2 as tempfn2 }
```
### 1.2 导入import

```javascript
// 1.接受导入变量，不可修改
import { name, age } from './export.js'
console.log(`前辈您好，我叫${name},今年${age}岁`);
// GYP,20

// 2.导入对象属性，可以修改
import { obj } from './export.js'
obj.age = 18;
console.log(obj);
console.log(`你好，我叫${obj.name},今年${obj.age}岁`);
//郭研苹 18

// 3.导入函数 函数名 as 别名
add(20, 30); //存在变量提升
import { addFn as add } from './export.js'
//50

// 3.2 多个函数导入
import { tempfn1, tempfn2 } from './export.js';
tempfn1();
tempfn2();
//打印以上函数

```

### 1.3注意：module静态导入，
不能使用表达式和变量内些运行时才能看到结果导入
	错误示范;
	
```javascript
// 错误示范1
let path = './export.js'
import tempfn1 from path;
```

```javascript
//错误示范2
if(l == 1) {
	import {addFn1 as test} from './export.js'
}

```
## 2.1 整体加载
export.js
```javascript
function fn1(args) {
    return args;
}

function fn2(...args) {
    return (args) * 2;
}
export { fn1, fn2 }
```
import

```javascript
//全部导入对象中
import * as obj from './export.js';
console.log(obj);
console.log('fn1', obj.fn1(123)); // fn1 123
console.log('fn2', obj.fn2(6)); // fn2 12
```
## 3.1 默认输出,导入时不加 { }
export default function() {}

```javascript
export default class Person {
    constructor(name) {
        this.name = name;
    }
}
```
import
```javascript
import Person from './export.js';
let p = new Person('gyp');
console.log(p);
// Person iname: 'gyp '3

```

### 正常输出，导入时加{ }

### 4.1 复合写法
public.js
```javascript
export let number = 10;
```
export.js

```javascript
export {number} from 'public.js'
```
import.js

```javascript
import {number} from './export.js'
log(number)//10
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/0065d77006a3475c95c7bcacbc6ccc08.png)
