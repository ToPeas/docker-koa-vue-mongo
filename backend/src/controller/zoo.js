import mongoose from "mongoose"
import Zoo from "../schema/zoo.js"

export const fetch = async (ctx, next) => {
  const { name } = ctx.params
  const res = await Zoo.findOne({ name })
  if (res) {
    ctx.body = res
  } else {
    ctx.body = { msg: "no data" }
  }
  await next()
}
