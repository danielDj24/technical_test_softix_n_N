const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET || "secret";

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Acceso denegado" });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        console.log("Decoded token:", decoded);  
        req.user = decoded;  
        next();
    } catch (error) {
        return res.status(401).json({ message: "Token inválido" });
    }
};



module.exports = authMiddleware;
