import axios from 'axios';
import { API_KEY, BASE_URL } from './index.config';

export const api = axios.create({ baseURL: BASE_URL });

api.interceptors.request.use((config) => {
    config.headers['X-API-KEY'] = API_KEY;
    return config;
});

export type { KpApiResponse } from './index.types';
export { throttle } from './throttling';
