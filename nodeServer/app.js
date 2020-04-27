const Koa = require('koa')
const bodyparser = require('koa-bodyparser')

const user = require('./routes/user')
const blog = require('./routes/blog')

const app = new Koa()

app.use(bodyparser())

app.use(user.routes(), user.allowedMethods())
app.use(blog.routes(), blog.allowedMethods())

app.listen(8000)
