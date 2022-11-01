# 1.Symbol 独一无二的原始数据类型

1.  用途：用来定义对象的私有变量

```js
// symbol定义独一无二的值
        const name1 = Symbol('name')
        const name2 = Symbol('name')
        console.log(name1 === name2); //false

        let s1 = Symbol('s1')
        console.log(s1);
        let obj1 = {
            [s1]: 'gyp'
        }
//务必使用 obj1[变量名] 方法调用 
        console.log(obj1[s1]); //gyp
```

2. Symbol定义的值无法 被for...in 遍历，得到后是空数组，但可以被反射得到，比如

   ```js
   获取Sympol声明的属性名：      
   // 1. getown方法
           let s = Object.getOwnPropertySymbols(obj1)
           console.log(s[0]);
           // 2.反射
           let m = Reflect.ownKeys(obj);
           console.log(m);
   ```

   

# 2.数组的扩展功能

1. 将伪数组转化为数组：Array.from(

   ```js
   
           function add() {
               let arr = Array.from(arguments);
               console.log(arr);
           }
           add(1, 2, 3)//[1,2,3]
   
   
           //Array的第二个参数，返回值
           let liContents = Array.from(lis, ele =>      ele.textContent)
           console.log(liContents);["1","2","3","4"]
   ```

   2. 将选择的元素转为数组【扩展运算符转换】

```js
 <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>

let lis = document.querySelectorAll('li')
        console.log(lis); //nodelist类型
        console.log([...lis]);
```

```js
 // Array.from(第一个参数)将伪数组转为数组
        function add() {
            let arr = Array.from(arguments);
            console.log(arr);
        }
        add(1, 2, 3) //[1,2,3]

        // ... 扩展运算符转为数组
        let lis = document.querySelectorAll('li')
        console.log(lis); //nodelist类型
        console.log([...lis]);

        //Array.from( , )的第二个参数，返回值
        let liContents = Array.from(lis, ele => ele.textContent)
        console.log(liContents);

        // Array.of() 将一组的值转化为数组
        console.log(Array.of(3, 11, 20, [1, 2, 3], {
            id: 1
        }));

        // copyWithin() 复制替换 将数组内部从索引3往后位置替换前三个数值
        console.log([1, 2, 3, 8, 9, 10].copyWithin(0, 3));

        //find（），找出第一个符合条件的数组成员
        let num = [21, 2, -2, 11, 32, -12].find(n => n < 0)
        console.log(num); //-2

        // findIndex（），找出第一个符合条件的下标
        let num11 = [21, 2, -2, 11, 32, -12].findIndex(n => n < 0)
        console.log(num11); //2
```

```js
   // entries() keys() values() 返回一个遍历器，可以使用for...of遍历
        for (let [index, ele] of['a', 'b'].entries()) {
            console.log(index, ele);
        }
 let letter = ['a', 'b', 'c'];
        let it = letter.entries();
        // next遍历器
        console.log(it.next().value);
        console.log(it.next().value);
        console.log(it.next().value);
        console.log(it.next().value);

        // Array.includes('元素')，返回true与false，判断包含的元素
        //  Array.indexOf('元素') 返回1，-1
```

## 迭代器

```js
 // 迭代器：新的遍历机制：是一个接口，能快捷的访问数据，通过Symbol.iterator 创建迭代器
        // 迭代器是用于遍历数据结构的指针，数据库的游标
        const items = ['one', 'two', 'three']
        const ite = items[Symbol.iterator](); //创建
        console.log(ite.next()); // done 为false表示可继续
        console.log(ite.next()); // done 为false
        console.log(ite.next()); // done 为false
        console.log(ite.next()); // done 为true
```

## 生成器

1. 为不具备  Interator  接口 【类似数组接口，可以使用for of遍历了】 的对象提供遍历操作，比如对象

```js
 function* objectEnteries(obj) {
            // 获取对象的所有key值保存到数组[name,age]
            const propKeys = Object.keys(obj);
            for (const propKey of propKeys) {
                yield [propKey, obj[propKey]]
            }
        }
        const obj = {
            name: 'gyp',
            age: 20
        }
        obj[Symbol.iterator] = objectEnteries;
        console.log(obj);
        for (let [key, value] of objectEnteries(obj)) {
            coonsole.log(`${key}:${value}`);
        }
```



## 异步

js少有的异步：setTieout,setInterval,ajax的异步请求，promise

好处：不会因延时和等待阻塞程序

```JS
function a() {
            console.log('111');
        }

        function b() {
            setTimeout(() => {
                console.log('222');
            }, 1000);
        }
        function c() {
            console.log('333');
        }
        a();
        b();
        c();
// 111,333,222
```

解决：创建生成器：

```js
 function* load() {
            a();
            yield b();
            c()
        }
        let itload = load()
        itload.next()

        function a() {
            console.log('666');
        }

        function b() {
            setTimeout(() => {
                console.log('777');
                itload.next()
            }, 1000);
        }

        function c() {
            console.log('888');
        }
```

























