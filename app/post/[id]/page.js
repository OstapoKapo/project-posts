"use client"
async function getPosts(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const result = await res.json();
    return result
}
export default async function Post({ params: { id } }) {
    const post = await getPosts(id)
    return (
        <div className='container'>
            <div className='post'>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <p>Author  {post.userId}</p>
            </div>

        </div>
    )
}
