'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState(null);
    const [error, setError] = useState(null);
    const router = useRouter();

    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            router.push("/");
        } else {
            fetchDashboardData();
        }
    }, [token]);

    const fetchDashboardData = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/dashboard`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                setDashboardData(data);
            } else {
                const errorData = await response.json();
                console.error("Error al obtener los datos del dashboard:", errorData);
                setError(errorData.message || "Error al cargar los datos del dashboard");
            }
        } catch (error) {
            console.error("Error de red o al hacer la solicitud:", error);
            setError("Error de conexión al servidor.");
        }
    };

    return (
        <div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {dashboardData ? (
                <div>
                    <h2>Bienvenido, {dashboardData.user.userName}</h2>
                    <h1>{dashboardData.message}</h1>
                </div>
            ) : (
                <p>Cargando datos del dashboard...</p>
            )}
        </div>
    );
};

export default Dashboard;
