const router = require('express').Router()

router.get("/", (req, res, next) => {
    res.send("API UP AND RUNNING IN THE ROUTER")
})





router.use (( err, req, res, next) => {
    res.json(500).json({
        customMessage: "something wernt wrong with the recipes router",
        message: err.message,
        stack: err.stack

    })
})

module.exports = router
