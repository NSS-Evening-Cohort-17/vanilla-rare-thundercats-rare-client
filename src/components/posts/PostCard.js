import { React } from "react"
import { Link, useParams } from "react-router-dom"
import "./PostCard.css"

export const PostCard = ( {post} ) => {

    return (
        <div className="card">
            <div className="card-content">
                <img src={post.user_image} />
                <p>{post.username}</p>
                <h3>
                    <Link to={`/posts/${post.id}`}>
                        <span className="post__title">{post.title}</span>
                    </Link>
                </h3>
                <img src={post.image_url} />
                <p>{post.content}</p>
            </div>
        </div>
    )
}