const express= require("express")
const router= express.Router()

const {url} = require("../controller/urlController")



router.post("/url/shorten",url)



module.exports = router;