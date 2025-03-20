const express = require('express');
const cors = require("cors"); 
const app = express();
const router = require('./src/routes/authRoutes'); 

app.use(cors()); 
app.use(express.json()); 
app.use('/api', router); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
