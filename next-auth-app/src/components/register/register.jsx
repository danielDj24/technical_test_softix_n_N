'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./register.module.css";

const Register = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); 
    const [error, setError] = useState(null);
    const [passwordValid, setPasswordValid] = useState(false);
    const router = useRouter();

    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userName || !password || !confirmPassword) {
            setError("Por favor, complete todos los campos.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }

        const response = await fetch(`${backendUrl}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userName, password }),
        });

        if (response.ok) {
            alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
            window.location.reload();
        } else {
            const data = await response.json();
            setError(data.message || "Ocurrió un error al registrar el usuario.");
        }
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        
        if (newPassword.length >= 8) {
            setPasswordValid(true);
        } else {
            setPasswordValid(false);
        }
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    return (
        <div className={styles.formWrapper}>
            <h2>Registrate</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userName">Nombre de usuario</label>
                    <input
                        type="text"
                        id="userName"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                        className={styles.inputField}
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                        className={styles.inputField}
                    />
                    {/* Mensaje de validación de contraseña */}
                    <div className={styles.passwordValidation}>
                        {password && password.length < 8
                            ? "La contraseña debe tener al menos 8 caracteres."
                            : passwordValid
                            ? "Contraseña válida."
                            : ""}
                    </div>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirmar contraseña</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        required
                        className={styles.inputField}
                    />
                </div>
                {error && <div className={styles.errorMessage}>{error}</div>}
                <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={!passwordValid || password !== confirmPassword}
                >
                    Registrarse
                </button>
            </form>
        </div>
    );
};

export default Register;
