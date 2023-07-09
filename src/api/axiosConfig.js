import axios from 'axios';

export default axios.create({
    baseURL:'https://6b31-62-194-146-6.ngrok-free.app',
    // baseURL:'https://9c96-103-106-239-104.ap.ngrok.io/',
    headers:{"ngrok-skip-browser-warning": "true",
    "Access-Control-Allow-Origin": "*"}
});