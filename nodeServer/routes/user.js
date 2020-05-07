const router = require('koa-router')()
const user = require('../models/user')
// 主体业务逻辑建议在business目录下编写，routes层主要负责数据校验、路由、异常处理、http状态码返回等。
router.prefix('/user')
router.post('/insert', async (ctx, next) => {
    const params = ctx.request.body
    const result = await user.create({
        username: params.username,
        PASSWORD: params.password,
    })
    // console.log(result)
    if (result) {
        ctx.body = {
            errcode: 0,
            data: {
                msg: 'insert success',
            },
        }
    } else {
        ctx.body = {
            errcode: 400,
            errmsg: 'invalid',
        }
    }
})
router.post('/update', async (ctx, next) => {
    const params = ctx.request.body
    const result = await user.update(
        {
            username: params.username,
            PASSWORD: params.password,
        },
        {
            where: { id: params.id },
        }
    )
    // console.log(result)
    if (result) {
        ctx.body = {
            errcode: 0,
            data: {
                msg: 'update success',
            },
        }
    } else {
        ctx.body = {
            errcode: 400,
            errmsg: 'invalid',
        }
    }
})
router.post('/delete', async (ctx, next) => {
    const params = ctx.request.body
    const result = await user.destroy({
        where: { id: params.id },
    })
    // console.log(result)
    if (result) {
        ctx.body = {
            errcode: 0,
            data: {
                msg: 'delete success',
            },
        }
    } else {
        ctx.body = {
            errcode: 400,
            errmsg: 'invalid',
        }
    }
})
router.get('/select', async (ctx, next) => {
    const result = await user.findAll()
    if (result.length) {
        console.log(`find ${result.length} pets:`)
        for (let p of result) {
            console.log(JSON.stringify(p))
        }
        ctx.body = {
            errcode: 0,
            data: {
                list: result,
            },
        }
    } else {
        ctx.body = {
            errcode: 400,
            errmsg: 'invalid',
        }
    }
})
router.post('/delete', async (ctx, next) => {})

module.exports = router
