import { Post } from "../types/types";
import PostCard from './postCard';

const PostList = ({ posts }: { posts: Post[] }) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap -m-4">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}

export default PostList;
