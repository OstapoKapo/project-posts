import Link from "next/link"
async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result = await res.json();
  return result
}

export default async function Home() {

  const posts = await getPosts()
  return (
    <div className="container">
      <h1>Home page</h1>
      {
        posts.map(el => (
          <div key={el.id}>
            <h2>{el.title}</h2>
            <p>{el.body}</p>
            <Link href={`/post/${el.id}`}>More</Link>
          </div>
        ))
      }

    </div>
  )
}


