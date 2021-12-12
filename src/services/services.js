import axios from "axios";

// Pode ser algum servidor executando localmente: 
// http://localhost:3000

const api = axios.create({
    baseURL: "http://localhost:3080",
});


export default api;