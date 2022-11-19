1.生成器函数，挂起函数，为改变执行流，

2.与普通函数区别：

1. 创建函数为 function * 或者 function* 

2. 只能在函数内部使用 yield 表达式挂起函数 

3. 返回值是遍历器对象，需要变量接收，并且需要使用Next调用

4. 该函数分段执行，yield暂停执行，next（）恢复执行【next 可传参】  

   1. 调用next恢复执行

   ```js
   function* fun() {
               console.log('start');
               yield 2;
               yield 3;
           }
           let a = fun();
           console.log(a.next()); //start  value:2,done:false
           console.log(a.next()); // value:3, done:false
           console.log(a.next()); //value:undefined done:true
   ```

   2. next传参，不影响yield值,影响返回值的接收

      ```js
      function* fun1() {
                  console.log('start');
                  let aa = yield '1';
                  console.log('one:' + aa);
                  let bb = yield '2';
                  console.log('two:' + bb);
                  let cc = aa + bb;
                  return cc;
              }
              let pp = fun1();
              console.log(pp.next()); // start   value:1,done:false
              console.log(pp.next(10)); //one:10   value:2,done:false
              console.log(pp.next(20)); //two:20   value:30,done:false
              console.log(pp.next()); //value:undefined,done:true
      ```

      

5.使用场景：

1. 为不具备遍历器接口的对象提供遍历操作：比如对象

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
//创建生成器
        obj[Symbol.iterator] = objectEnteries;
        console.log(obj);
//遍历打印        
		for (let [key, value] of objectEnteries(obj)) {
            coonsole.log(`${key}:${value}`);
        }
```

2. 异步请求，回调地狱，嵌套ajax请求

 

3. 部署Ajax请求，异步代码同步化

```js
 function* fun() {
                loadUI();
                yield showDate(); //1.
                hideUI();
            }
            //3.
        let itload = fun();
        itload.next();

        function loadUI() {
            console.log('加载页面');
        }

        function showDate() {
            setTimeout(() => {
                console.log('数据加载完成');
                itload.next(); //2.
            }, 1000);
        }

        function hideUI() {
            console.log('隐藏页面');
        }
```

















































































