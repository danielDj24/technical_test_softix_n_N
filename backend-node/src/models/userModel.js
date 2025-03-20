const db = require("../config/database");

class UserModel{
    static createUser(userName, hashedPassword, callback){
        db.run(
            "INSERT INTO users (username, password) VALUES (?, ?)",
            [userName, hashedPassword],
            callback
        );
    }

    static findUserByUserName(userName, callback){
        db.get(
            "SELECT * FROM users WHERE username = ?",
            [userName],
            callback
        );
    }
}

module.exports = UserModel;