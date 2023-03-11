import BlogGridItem from './BlogGridItem';
export default function BlogGrid({ posts }) {

    return (
        <div className="grid grid-cols-3 gap-6">
            {posts && posts.length > 0 ? posts.map((post) => <BlogGridItem post={post} />) : 'No posts found'}
        </div>
    );
}