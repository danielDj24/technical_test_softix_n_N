'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setToken } from "@/utils/utilsAuth";
import styles from "./login.module.css";

const Login = ({ onLogin }) => {
    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`${backendUrl}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userName, password }),
        });

        console.log("API response:", response); 

        if (response.ok) {
            const data = await response.json();
            console.log("Authentication successful, received data:", data); 
            setToken(data.token); 
            localStorage.setItem("token", data.token);  
            onLogin(); 
            router.push("/"); 
        } else {
            const errorData = await response.json();
            console.error("Error in authentication:", errorData); 
            alert("Error de autenticación");
        }
    };

    return (
        <div className={styles.formWrapper}>
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userName">Nombre de usuario</label>
                <input
                    type="text"
                    placeholder="Nombre de usuario"
                    value={userName}
                    onChange={(e) => {
                        setuserName(e.target.value);
                    }}
                    required
                    className={styles.inputField}
                />
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    required
                    className={styles.inputField}
                />
                <button type="submit" className={styles.submitButton}>Iniciar sesión</button>
            </form>
        </div>
    );
};

export default Login;
