import axios from 'axios';

export default axios.create({
    baseURL:'https://0d69-62-194-146-6.ngrok-free.app',
    headers:{"ngrok-skip-browser-warning": "true",
    "Access-Control-Allow-Origin": "*"}
});