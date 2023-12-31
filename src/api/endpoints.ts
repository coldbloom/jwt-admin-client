const SERVER_URL = process.env.SERVER_URL;
console.log(SERVER_URL)

const Endpoints = {
    AUTH: {
        LOGIN: 'http://localhost:3030/login',
        REFRESH: 'http://localhost:3030/refresh',
        LOGOUT: 'http://localhost:3030/logout',
        PROFILE: 'http://localhost:3030/profile',
    }
}

export default Endpoints