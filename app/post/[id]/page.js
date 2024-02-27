"use server";
import '../../globals.css';

async function getPosts(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const result = await res.json();
    return result
}

export default async function Post({ params: { id } }) {
    const post = await getPosts(id)
    return (
        <div className='container'>
            <div className='post goods'>
                <h1 className="goods__title">{post.title}</h1>
                <p>{post.body}</p>
                <p style={{marginTop: '15px'}}>Author  {post.userId}</p>
            </div>

        </div>
    )
}
