import axios from 'axios'

const axiosConfig = axios.create({
    baseURL: 'http://localhost:3306',
})

export default axiosConfig