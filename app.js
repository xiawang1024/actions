/*
 * @Description: 
 * @Version: 0.0.1
 * @Company: hNdt
 * @Author: xiaWang1024
 * @Date: 2019-11-28 10:59:49
 * @LastEditTime: 2019-11-28 11:00:53
 */
const koa = require('koa')
const app = new koa()

app.use((ctx) => {
    ctx.body = 'github actions'
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})