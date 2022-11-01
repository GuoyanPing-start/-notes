# ① 函数：

1. ## 带参数默认值的函数：

   ```js
   function add(a,b=20) {
   	return a + b;
   }
   log(add(30))//传参给a，50
   ```

2. ## 默认的表达式也可以是一个函数

   ```js
   function add(a,b = getVal(5)) {
       return a + b;
   }
   function getVal(val) {
   	return val + 5;
   }
   log(add(10)); //10+ (5+5)=20
   ```

3. ## 通过伪类数组获取响应属性：由 ... 和一个紧跟的具名参数指定 ...keys

   ```js
   function pick(obj, ...keys) {
   // console.log(keys); //被保存在伪数组,自动从arguments[1]开始,解决arguments问题
               let result = new Object();
               for (let i = 0; i < keys.length; i++) {
                   result[keys[i]] = obj[keys[i]]
               }
               return result;
           }
   
           let book = {
               title: 'desert',
               author: 'life',
               year: 2022
           }
   
           let bookData = pick(book, 'title', 'year', 'author')
           console.log(bookData);
   ```

   ```js
    function checkArgs(...args) {
               console.log(args);
               console.log(arguments);
           }
           checkArgs('a', 'b', 'c')
   ```

   

4. ## [...](https://blog.csdn.net/JC_5445/article/details/120273868?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522166694243616800180639568%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=166694243616800180639568&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-120273868-null-null.142^v62^pc_search_tree,201^v3^control_1,213^v1^t3_esquery_v3&utm_term=%E5%89%A9%E4%BD%99%E8%BF%90%E7%AE%97%E7%AC%A6&spm=1018.2226.3001.4187)  扩展运算符，将一个数组分散，将个各项作为分离的参数传给函数；

   ```js
    // 处理数组中的最大值1.使用apply
           const arr = [10, 20, 10, 2, 32, 43, 100]
           console.log(Math.max.apply(null, arr));
           // 2.es6扩展运算符
           console.log(Math.max(...arr));
   ```

      ...  剩余运算符：把多个独立的合并到一个数组中

5. es6的箭头函数  =>  取代  function 【 function() {}   等于  ()=>{} 】

   1. ```js
      1.  只有一个形参简便写法
          let add = val => val;  //或者let add = val => (val + 5)，表达式最好要有括号，后面表示return 返回值
          console.log(add(10)) //10
      2.  两个形参,需要传参加（）
          let add = (val1,val2) => val1 + val2;
          console.log(add(10,20))//30
      3.  
      	let fn = ()=>'hello world' + 123;
          console.log(fn())//hello world123
      4. 返回值是对象的话必须带括号
      	let getObj = id => ({id:id,name:'gyp'});
      	let obj = getObj(1);
      	log(obj);// id:1,name:'gyp'
      5. 函数调用
      	let fn = (()=> {
              return ()=> {
      			console.log('gyp 2');
              }
          })();
      	fn();    
      ```

6. es6的箭头函数解决了传统函数函数的运用：闭包，以及this的指向。

   1. （箭头函数没有this 指向，使用箭头函数没有作用域链，一直往上一层查找作用域）：使用【方法】时不要使用作用域链
   2. 箭头函数内没有 arguments 
   3. 箭头函数不能做构造函数，不能使用new关键字。function 函数，是个对象，但箭头函数不是一个对象，仅是便捷写法
   4. 没有 prototype 属性

# ②解构赋值,对象的扩展，

1. 原型对象：每一个对象都有他的原型对象，他可以使用自己原型对象上的所有属性和方法

   ```js
   let cat = {
       name:"喵喵"
   }
   eat.__proto__.eat = function() {
   	log("吃鱼")
   }//添加方法到对象中
   cat.eat();
   ```

   1. 获取原型的方法：1. 通过对象的_ _proto__获取 2.通过1构造函数（中的 this 指向new创建的对象）的 prototype 属性拿到原型		

      ```js
      function Cat(name,age) {
      	this.name = name;
          this.age = age;
      }
      let cat = new Cat("喵喵");
      Cat.prototype.eat = function() {
          log('吃鱼')
      }
      cat.eat();
      ```

      2.原型对象的作用：扩展对象，

2. 是对赋值运算符的扩展，针对数组和对象进行操作，简化代码书写

```js
   // 1.完全结构
        let node = {
            type: 'iden',
            name: 'foo'
        }
        let {
            type,
            name
        } = node
        console.log(type, name);

        // 2.不完全结构,可忽略某些属性,剩余运算器
        let obj = {
            a: {
                name: "张三"
            },
            b: [],
            c: 'hello,world'
        }
        let {
            a,
            ...res
        } = obj
        console.log(res);
        // 默认值
        let {
            a,
            b = 30
        } = {
            a: 20
        };

        // 3.对数组解构，数量一致为完全结构，结构获取值少为不完全结构
        let arr = [1, 2, 3]
        let [a, b, c] = arr //let [a, b] = arr
        console.log(a, b, c); //console.log(a, b);

        // 可嵌套
        let [a.[b], c] = [1, [2], 3]
```

```js
//1.属性名的简写
const name = 'gyp',
      age = 20;
const person = {
	name,
    age,
    sayName() {
		log(this.name)
    }
}
person.sayName();
//2.1 方法表达式的简写
let cart = {
    wheel:4,
    set(newVal) {
	if(newVal < this.wheel) {
		throw new Error('轮子少')
    }
     this.wheel = newVal
    }
    get() {
		return this.wheel
    }
}
log(cart.get())
//2.2 方法表达式的简写
const name = 'a'
const obj = {
    isShow:true,
    [name+'bc']:123,
    ['f'+name]() {
		log(this)
    }
}
log(obj)
```

3.对象的方法： **is(**参数一，参数二) 严格相比较【用于比较NaN情况】，和 === 相同

4.对象的合并：Object.assign(target,obj1,obj2...),target返回obj中的属性，

```js
let newObj = Object.assign({}.{a:1},{b:2});
log(newObj) //{a:1,b:2}
```

# ③.闭包：

函数嵌套函数，内部就是闭包，[ 作用域链，一层层向上找 ]  内部函数没执行完成，外部变量不会被销毁

5.1闭包的作用：封装代码实现模块化，

# ④防抖与节流：

1. 防抖：减少与后台的请求，**只要最后一次事件的操作**。利用计时器

```js
 let inp = document.querySelector('input')
        let t = null;
        inp.oninput = function() {
            if (t != null) {
                clearTimeout(t)
            }
            t = setTimeout(() => {
                console.log(this.value);
            }, 500)
        }
```

1. 利用闭包封装函数实现防抖[只实行最后一次]的方法：

   ```js
   let inp = document.querySelector('input')
   
           inp.oninput = debounce(function() {
               console.log(this.value);
           }, 500)
   
           function debounce(fn, delay) {
               let t = null;
               return function() {
                   if (t != null) {
                       clearTimeout(t);
                   }
                   t = setTimeout(() => {
                       fn.call(this) //改变this指向
                   }, delay)
               }
           }
   ```

   

2. 节流：控制高频事件执行次数，flat = true,

```js
let flag = true
window.onscorll = throttle(function() {
	log('hello,world')
},500)
function throttle(fn,delay) {
	return  function() {
	if(flag) {
		setTimeout(()=> {
			log('hello,world')
            flag = true
        },500)
    }
    flag = false
	}
}
```













