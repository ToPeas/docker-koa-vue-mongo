import Koa from "koa"
import logger from "koa-logger"
import "colors"
import router from "./router"
import cors from "koa2-cors"
import "./middlewars/db"

const app = new Koa()

app.use(logger())
// app.use(
//   cors({
//     origin: "http://localhost"
//   })
// )

app.use(router.routes(),router.allowedMethods())
// app.use(async ctx => {
//   ctx.body = "hello  Koa"
// })

app.listen(1992, err => {
  if (err) console.log(`it has an error \n ${err}`.red)
  console.log(`🌎 ==>> koa listen port on 1992`.green)
})
