'use client';

import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/layouts/header';
import Footer from '../components/layouts/footer';
import Quote from '../components/common/quote';
import { useAuth } from '../context/auth';
import { useAxios } from '../utils/axios';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { isAuthenticated } = useAuth();
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const { getPosts } = useAxios(); 

  useEffect(() => {
    if (isAuthenticated) {
      const fetchPosts = async () => {
        try {
          const response = await getPosts();
          setPosts(response);
          console.log("Response:", response);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
      fetchPosts();
    }
  }, [isAuthenticated]);


  useEffect(() => {
    if (!isAuthenticated) {
      const timer = setTimeout(() => {
        router.push('/login');
      }, 3000); 

      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    
    return (<div className="h-screen">
      <Header /><div className="flex justify-center items-center min-h-screen">Loading...</div>;
    <Footer />
    </div>
    )
  }

  return (
    <div className="h-screen">
      <Header />
      <div className="h-full">
        <Quote/>
      </div>
      <Footer />
    </div>
  );
}