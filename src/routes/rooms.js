const express = require("express")
const cors = require("cors")
const app = express()
const Route = express.Router()
const CtrlRooms = require("../controllers/rooms")
const { multerUploads } = require("../middleware/multer")

app.use(cors())
Route.get("/", multerUploads, CtrlRooms.getAllRoom)
  .get("/:id", multerUploads, CtrlRooms.getRoomById)
  .post("/", multerUploads, CtrlRooms.create)
  .patch("/:id", multerUploads, CtrlRooms.edit)
  .delete("/:id", multerUploads, CtrlRooms.delete)

module.exports = Route
