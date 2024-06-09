'use client';

import React, { useEffect, useState } from "react";

import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";

import PostCard from "../components/common/postCard";
import PostList from "../components/common/postList";

import { Post } from "../components/types/types";
import { Reactions } from "../components/types/types";
import { useAxios } from "../utils/axios";
import { useAuth } from "../context/auth";
import { useRouter } from "next/navigation";

export default function PostsPage() {
    const { getPosts } = useAxios();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [posts, setPosts] = useState([]);
    const { isAuthenticated } = useAuth();
    const router = useRouter();
    
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
          }, 3000); // 3000 milliseconds = 3 seconds

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

    return(
        
        <div className="h-screen">
            <Header />
            <div className="flex flex-wrap justify-center p-6 space-x-8 space-y-8">
            <PostList posts={posts} />
            </div>
            <Footer />
        </div>
    )
}