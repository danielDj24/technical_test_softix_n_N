const express = require("express");
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/middleware");

const router = express.Router();

router.get("/check-db", (req, res) => {
    db.get("SELECT count(*) as count FROM sqlite_master WHERE type='table' AND name='users'", (err, row) => {
        if (err) {
            res.status(500).json({ message: "Error al verificar la base de datos", error: err.message });
        } else if (row.count > 0) {
            res.status(200).json({ message: "La base de datos y la tabla 'users' están creadas correctamente." });
        } else {
            res.status(500).json({ message: "La base de datos o la tabla 'users' no se han creado." });
        }
    });
});
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
