import koaRouter from "koa-router"
import { fetch } from "../controller/zoo"

const router = new koaRouter()

router.prefix("/api/zoo")

router.get("/:name", fetch)

export default router
