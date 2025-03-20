const express = require("express");
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/middleware");

const router = express.Router();

router.post("/register", authController.register);

router.post("/login", authController.login);

router.get("/dashboard", authMiddleware, (req, res) => {
    res.json({
        message: "Bienvenido al dashboard mensaje obtenido de node",
        user: {
            id: req.user.id,
            userName: req.user.userName, 
        },
    });
});



module.exports = router;
