const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

const SECRET_KEY = process.env.JWT_SECRET || "secret";

const authController = {
    register: async (req, res) => {
        const { userName, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        UserModel.createUser(userName, hashedPassword, (err, data) => {
        if (err) return res.status(400).json({ message: "Usuario ya existe" });
        res.status(201).json({ message: "Usuario registrado con éxito" });
        });
    },

    login: (req, res) => {
        const { userName, password } = req.body;

        UserModel.findUserByUserName(userName, async (err, user) => {
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }

        const token = jwt.sign(
            { id: user.id, userName: user.username }, 
            SECRET_KEY, 
            { expiresIn: "30m" }
        );
        res.json({ token });
        });
    },
};

    module.exports = authController;
