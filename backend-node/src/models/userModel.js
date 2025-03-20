const supabase = require('../config/database'); 

class UserModel {
    static async createUser(userName, hashedPassword, callback) {
        try {
        const { data, error } = await supabase
            .from('technical_test_users')
            .upsert([{ username: userName, password: hashedPassword }]);

        if (error) {
            console.error('Error al insertar el usuario:', error);
            callback(error, null);
        } else {
            callback(null, data);
        }
        } catch (error) {
        console.error('Error al crear el usuario:', error);
        callback(error, null);
        }
    }

    static async findUserByUserName(userName, callback) {
        try {
        const { data, error } = await supabase
            .from('technical_test_users') // Usa supabase.from
            .select('*')
            .eq('username', userName)
            .single();

        if (error) {
            console.error('Error al buscar el usuario:', error);
            callback(error, null);
        } else {
            callback(null, data);
        }
        } catch (error) {
        console.error('Error al buscar el usuario:', error);
        callback(error, null);
        }
    }
}

module.exports = UserModel;
