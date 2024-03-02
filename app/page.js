
import './globals.css';
import GoodsContainer from "./components/GoodsContainer";
async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result = await res.json();
  return result
}

export default async function Home() {
  
  return (
    <div className="container">
      <GoodsContainer posts={getPosts()}/>
    </div>
  )
}


