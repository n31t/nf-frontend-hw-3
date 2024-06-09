import Link from "next/link";
import { Post } from "../types/types";

const PostDetail = ({ post }: { post: Post }) => {
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white ">
            <div className="flex items-center justify-between font-normal text-gray-500 mb-4">
                {/* <img src="https://www.svgrepo.com/show/528834/album.svg" className="w-7 h-7" alt="Bolt" /> */}
                <div className="flex items-center">
                    <img src="https://www.svgrepo.com/show/528959/eye-scan.svg" className="w-4 h-4 mr-1" alt="Views" />
                    {post.views}
                </div>
            </div>
            <Link href={`/posts/${post.id}`}>
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">{post.title}</h2>
            </Link>
            <p className="text-gray-700 mb-4">{post.body}</p>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <img src="https://www.svgrepo.com/show/529045/like.svg" className="w-4 h-4 mr-1" alt="Likes" />
                    {post.reactions.likes}
                    <img src="https://www.svgrepo.com/show/528940/dislike.svg" className="w-4 h-4 mr-1 ml-6" alt="Dislikes" />
                    {post.reactions.dislikes}
                </div>
            </div>
            <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Tags</h3>
                <div className="flex flex-wrap">
                    {post.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 mr-2 mb-2 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostDetail;
