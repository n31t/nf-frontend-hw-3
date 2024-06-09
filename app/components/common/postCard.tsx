import Link from "next/link";
import { Post } from "../types/types";

const PostCard = ({ post }: { post: Post }) => {
    return (
        <div className="w-full md:w-1/3 lg:w-1/4 p-4">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
                <div className="flex items-center justify-between font-normal text-gray-500 mb-3">
                    <img src="https://www.svgrepo.com/show/528834/album.svg" className="w-7 h-7" alt="Bolt" />
                    <div className="flex items-center">
                        <img src="https://www.svgrepo.com/show/528959/eye-scan.svg" className="w-4 h-4 mr-1" alt="Views" />
                        {post.views}
                    </div>
                </div>
                <Link href={`/posts/${post.id}`}>
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">{post.title}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-500">{post.body ? post.body.substring(0, 30) : ''}...</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img src="https://www.svgrepo.com/show/529045/like.svg" className="w-4 h-4 mr-1" alt="Likes" />
                        {post.reactions.likes}
                    </div>
                    <div className="flex items-center">
                        <img src="https://www.svgrepo.com/show/528940/dislike.svg" className="w-4 h-4 mr-1" alt="Dislikes" />
                        {post.reactions.dislikes}
                    </div>
                </div>
                <Link href={`/posts/${post.id}`} className="inline-flex items-center mt-4 text-blue-600 hover:underline">
                    Read more
                    <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
