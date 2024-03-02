'use client'
import Link from "next/link";

const Goods = ({id, body, title}) => {
    return (
        <div key={id} className="goods">
            <div>{id}</div>
            <div className="goods__main">
              <h1 className="goods__title">{title}</h1>
              <p>{body}</p>
              <Link href={`/post/${id}`} className="goods__link">More</Link>
            </div>
        </div>
    )
}

export default Goods;