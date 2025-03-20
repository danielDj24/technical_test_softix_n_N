# Solución de la Prueba Técnica

Este repositorio contiene la solución a la prueba técnica planteada 

## Pasos para ejecutar el proyecto localmente

### 1. Clonar el repositorio

Primero, clona este repositorio en tu máquina local utilizando el siguiente comando:
```
git clone https://github.com/danielDj24/technical_test_softix_n_N.git
```

### 2. correr el proyecto frontend
```
    1. Dirígete a la carpeta del backend:
        cd backend-node

    2. Instala los módulos de Node.js necesarios con el siguiente comando:
        npm install 

    3. Crea un archivo .env en el directorio raíz del backend y añade las siguientes variables de entorno:
        JWT_SECRET = {tu secret key}
        SUPABASE_URL={url de la db}
        SUPABASE_ANON_KEY = {anon key url}

    4. Inicia el proyecto usando:
        npm start
        
```
### 3. correr el proyecto frontend
```
    1. Dirígete a la technical-test:
        cd ../technical-test-softix

    2. Instala los módulos de React necesarios con el siguiente comando:
        npm install 

    3. Crea un archivo .env en el directorio raíz del frontend y añade las siguientes variables de entorno:
        REACT_APP_API_URL=http://{ip_local}:5000

    Sustituye {ip_local} con la dirección IP de tu máquina local o el dominio correspondiente al backend.

    4. Inicia el proyecto:
        npm run dev
```

# url del proyecto desplegado
```
    https://technical-test-softix-n-n-mlgt.vercel.app/
```
