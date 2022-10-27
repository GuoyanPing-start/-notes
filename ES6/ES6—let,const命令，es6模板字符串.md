ES 全称 EcmaScript，是脚本语言的规范，而平时经常编写的JavaScript,是EcmaScript的一种实现，所以ES新特性其实指的就是JavaScript 的新特性

新版本：ES12,ES13

① let 和const 新特性

1. var 变量提升，可以重复声明

   ```js
   var arr = []
   var i;
   for(i = 0;i < 10;i++) {
       arr[i] = function() {
           return i;
       }
   }
   console.log(arr[5]())  //由于变量提升，i最后1执行到10，打印10
   
   ———————打印5———————
   const arr = []
   for(let i = 0;i < 10;i++) {
   	arr[i] = function() {
           return i
       }
   }
   console.log(arr[5]()) //打印5
   ```

   

2. let 无变量提升,块级作用域，不可重复声明；作用：不会污染全局变量

   ```
   
   ```

   

   ```JS
   let RegExp = 10;
   log(RegExp)  //10
   log(window.RegExp)  //f RegExp
   ```

   

3. const  无变量提升，一旦被声明，无法被修改；不能直接修改常量对象，可以修改常量对象内部属性。

   ```js
   const person = {
       name:'GG'
   }
   person.name = 'MM'//log得到MM
   person = {
       age:20       //无法被修改
   }
   ```

4. 默认情况使用const ，变量值需要被修改时使用 let



②模板字符串

1. 字符串拼接：反引号 `` 的使用

```js
<div class="box"></div>
    <script>
        const box = document.querySelector('.box')
        // 传统方法：
        let id = 1,
            name = '郭研苹';
        // box.innerHTML = "<ul><li><p id=" + id + ">" + name + "</ul></li></p>"
        // es6方法
        let htmlStr = `<ul>
                <li> 
                <p id=${id}>${name}</p>
                </li> 
                </ul>`;
        box.innerHTML = htmlStr;
```



