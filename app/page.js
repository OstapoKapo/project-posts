import Link from "next/link";
import './globals.css';
async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result = await res.json();
  return result
}

export default async function Home() {

  const posts = await getPosts()
  return (
    <div className="container">
      {
        posts.map(el => (
          <div key={el.id} className="goods">
            <h1 className="goods__title">{el.title}</h1>
            <p>{el.body}</p>
            <Link href={`/post/${el.id}`} className="goods__link">More</Link>
          </div>
        ))
      }

    </div>
  )
}


