// 引入express
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request请求报文封装，response 响应
app.get('/server', (request, response) => {
    // 设置响应头,设置允许跨越
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应
    response.send('HELLO AJAX - 2');

});
app.all('/server', (request, response) => {
    // 设置响应头,设置允许跨越
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 自定义防报错，设置响应头都可接收
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应
    response.send('HELLO AJAX POST');

});
app.all('/json-server', (request, response) => {
    // 设置响应头,设置允许跨越
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 自定义防报错，设置响应头都可接收
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应
    // response.send('HELLO AJAX JSON');
    // 响应一个数据
    const data = {
        name: 'SuperGyp'
    };
    // 对对象进行字符串转换
    let str = JSON.stringify(data);
    response.send(str);
});
// 针对 IE 缓存
app.get('/ie', (request, response) => {
    // 设置响应头,设置允许跨越
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应
    response.send('HELLO IE - 4');

});
// 做延时响应
app.all('/delay', (request, response) => {
    // 设置响应头,设置允许跨越
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    setTimeout(() => {
            // 延时设置响应体
            response.send('延时响应');
        }, 1000)
        // 设置响应
});
// jQuery服务
app.all('/jquery-server', (request, response) => {
    // 设置响应头,设置允许跨越
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 直接响应
    // response.send('Hello jQuery Ajax');
    const data = { name: 'Supergyp' }
    response.send(JSON.stringify(data));
});


// const express = require("express");
// // const cors = require('cors');
// const app = express();
// // app.use(cors());


// axios 服务
app.all('/axios-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = { name: 'SuperGyp' };

    // response.send("Hello jQuery AJAX");
    response.send(JSON.stringify(data));

});

// fetch 服务
app.all('/fetch-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = { name: 'SuperGyp' };

    // response.send("Hello jQuery AJAX");
    response.send(JSON.stringify(data));

});

//jsonp 服务
app.all('/jsonp-server', (request, response) => {
    const data = {
        name: 'SuperGyp'
    };
    // 数据转化为字符串
    let str = JSON.stringify(data);
    // 返回结果，模板字符
    response.end(`handle(${str})`);
    // response.send('console.log("hellow jsonp")');
})

// 用户名检测是否存在
app.all('/check-username', (request, response) => {
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    };
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);
});

// jsonp
app.all('/jquery-jsonp-server', (request, response) => {
    const data = {
        name: 'SuperGyp',
        condition: ['111', '222', '333']
    };
    let str = JSON.stringify(data);
    // 接收callback
    let cb = request.query.callback;

    response.end(`${cb}(${str})`);
});

// CORS
app.all('/cors-server', (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.setHeader("Access-Control-Allow-Methods", "*");
    response.send('hello cors');
});
// 4.监听端口，启动服务端端口
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中");
})