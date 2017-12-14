import mongoose from "mongoose"
import { mongoHost, mongoDB } from "../config"

mongoose.Promise = global.Promise

mongoose.connect(`mongodb://${mongoHost}/${mongoDB}`, { useMongoClient: true })

mongoose.connection.on("connected", function() {
  console.log("🌈   Mongoose connection open ")
})

mongoose.connection.on("error", function(err) {
  console.log("😱  Mongoose connection error: " + err)
})

// 断开连接
mongoose.connection.on("disconnected", function() {
  console.log("💀  Mongoose connection disconnected")
})

export default mongoose
