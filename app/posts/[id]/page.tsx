"use client";

import React, { useEffect, useState } from "react";
import Header from "@/app/components/layouts/header";
import Footer from "@/app/components/layouts/footer";
import PostDetail from "@/app/components/common/postDetail";
import { Post } from "@/app/components/types/types";
import { useAxios } from "@/app/utils/axios";
import { useAuth } from "@/app/context/auth";
import { useRouter } from "next/navigation";


export default function PostPage({ params: { id } }: { params: { id: number } }) {
    const { getPostById } = useAxios();
    const [post, setPost] = useState<Post | null>(null);
    const { isAuthenticated } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (isAuthenticated) {
            const fetchPost = async () => {
                try {
                    const response = await getPostById(id);
                    setPost(response);
                    console.log("Response:", response);
                } catch (error) {
                    console.error(error);
                } finally {
                    setIsLoading(false);
                }
            }
            fetchPost();
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
    return (
        <div className="h-screen">
        <Header />
        <div className="">
            {post !== null && <PostDetail post={post}/>}
        </div>
        <Footer />
        </div>
    );
}
