import { React, useState, useEffect } from "react";
import "./CreatePost.css"
import { getAllCategories } from "../modules/CategoryManager.js"

export const CreatePost = ( {token} ) => {
    const [currentUserId, setCurrentUserId] = useState(parseInt(token));
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(0);
    const [title, setTitle] = useState("");
    const [image_url, setImage_url] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        getAllCategories().then((categories) => {
            setCategories(categories);
        })
    }, []);

    const API = "http://localhost:8088"

    const handleSubmit = () => {
        return fetch(`${API}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id: currentUserId,
                category_id: parseInt(selectedCategoryId),
                title: title,
                image_url: image_url,
                content: content
            })
        }).then(response => response.json()).then(
        alert(`Posted!`));
    }

    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                    <div className="form-input">
                        <label className="input-label">Category:</label>
                        <select value={selectedCategoryId} onChange={(e) => setSelectedCategoryId(e.target.value)}>
                            <option>Select Category</option>
                            {categories.map((category) => <option key={category.id} value={category.id}>{category.label}</option> )}
                        </select>
                    </div>
                    <div className="form-input">
                        <label className="input-label">Title:</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                    </div>
                    <div className="form-input">
                        <label className="input-label">Image URL:</label>
                        <input type="text" value={image_url} onChange={(e) => setImage_url(e.target.value)}></input>
                    </div>
                    <div className="form-input">
                        <label className="input-label">Content:</label>
                        <input type="text" value={content} onChange={(e) => setContent(e.target.value)}></input>
                    </div>
                    <button type="submit">Submit</button>
                </form>
        </div>
    )
}