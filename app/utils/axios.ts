import axios from 'axios';
import { useAuth } from '../context/auth';

const useInstance = () => {
    const { token } = useAuth();
    const instance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'Content-Type': 'application/json',
    },
    });

    instance.interceptors.request.use(
    (config) => {
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
    );

    return instance;
}

export const useAxios = () => {
    const axiosInstance = useInstance();

    const getPosts = async () => {
        try {
            const response = await axiosInstance.get('/auth/posts');
            console.log(axiosInstance.defaults.headers.common['Authorization']);
            return Array.isArray(response.data.posts) ? response.data.posts : [];

        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    const getPostById = async (id: number) => {
        try {
            const response = await axiosInstance.get(`/auth/posts/${id}`);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    return { getPosts, getPostById };
}
