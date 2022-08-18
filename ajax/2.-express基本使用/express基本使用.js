// 引入express
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request请求报文封装，response 响应
app.get('/', (request, response) => {
    // 设置响应
    response.send('HELLO EXPRESS');
});
// 4.监听端口
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中");
})