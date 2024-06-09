'use client';

import { useContext, useState } from 'react';
import Link from 'next/link';
import { AuthProvider, useAuth } from '../context/auth';
import axios from 'axios';

export default function LoginPage() {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {

        event.preventDefault();
        try {
            const response = await axios.post('https://dummyjson.com/auth/login', {
                username,
                password,
            });
            
            const { token } = response.data;
            login(token);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Username:
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password:
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Login
                    </button>
                </form>
                <div className="text-sm text-center text-gray-500">
                    <Link href="/register"
                    className="font-medium text-indigo-600 hover:text-indigo-500">
                            Don&apos;t have an account? Register
                    </Link>
                </div>
            </div>
        </div>
    );
}
