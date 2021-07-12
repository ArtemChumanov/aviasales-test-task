import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

axios.defaults.withCredentials = true

const config: AxiosRequestConfig = {
    baseURL: 'https://front-test.beta.aviasales.ru',
}

export const instance: AxiosInstance = axios.create(config)