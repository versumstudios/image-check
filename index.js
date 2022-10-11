const express = require("express")
const http = require("http")
const GetImageDimensions = require("./image")

const app = express()
const router = express.Router()

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET")
  next()
})

router.get("/image/:type/:cid", async (req, res) => {
  const { type, cid } = req.params
  res.status(200).send(await GetImageDimensions(type, cid))
})

app.use("/api/v1", router)

app.get("/", (req, res) => {
  res.send("versum")
})

const server = http.createServer(app)
const PORT = process.env.PORT || 3000
server.listen(PORT, function () {
  console.log(`server started at ${PORT}`)
})
