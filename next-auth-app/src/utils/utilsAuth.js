// Función para almacenar el token en el localStorage
export const setToken = (token) => {
    if (typeof window !== "undefined") {
    localStorage.setItem("authToken", token); 
    }
};

// Función para obtener el token del localStorage
export const getToken = () => {
    if (typeof window !== "undefined") {
    return localStorage.getItem("authToken");
    }
    return null;
};

// Función para eliminar el token del localStorage
export const removeToken = () => {
    if (typeof window !== "undefined") {
    localStorage.removeItem("authToken");
    }
};
