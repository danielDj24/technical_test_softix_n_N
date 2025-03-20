'use client';

import { useState, useEffect } from "react";
import TopBar from "@/components/topBar/topbar";
import Login from "@/components/login/login";
import Register from "@/components/register/register";
import Dashboard from "@/components/dashBoard/dashBoard";

import styles from "./home.module.css";

const Home = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showLogin, setShowLogin] = useState(false);    
    const [showRegister, setShowRegister] = useState(false);  

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsAuthenticated(true);  
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");  
        setIsAuthenticated(false);  
    };

    const handleShowLogin = () => {
        setShowLogin(true);
        setShowRegister(false);  
    };

    const handleShowRegister = () => {
        setShowLogin(false);
        setShowRegister(true);  
    };

    return (
        <div className={styles.homeContainer}>
            <TopBar
                isAuthenticated={isAuthenticated}
                onLogout={handleLogout}
                onShowLogin={handleShowLogin}
                onShowRegister={handleShowRegister}
            />
            <div className={styles.formsContainer}>
                {isAuthenticated ? (
                    <Dashboard />
                ) : (
                    <>
                        {showLogin && (
                            <Login onLogin={() => setIsAuthenticated(true)} />
                        )}
                        {showRegister && (
                            <Register />
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Home;
