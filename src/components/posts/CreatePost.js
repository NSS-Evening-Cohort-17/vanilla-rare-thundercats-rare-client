import React from "react";
import "./CreatePost.css"
import { getAllCategories } from "./modules/CategoryManager.js"

export const CreatePost = () => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("kennel_customer")));
    // still not quite sure how to get current user. What is a token?
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
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
                user_id: currentUser.id,
                category_id: selectedCategory,
                title: title,
                image_url: image_url,
                content: content
                // what is "approved"? should it be in the form?
            })
        }).then(response => response.json()).then(
        alert(`Title added to database!`));
    }

    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                    <div className="form-input">
                        <label className="input-label">Category:</label>
                        <select value={category_id} onChange={(e) => setSelectedCategory(e.target.value)}>
                            {categories.map((category) => <option key={category}>{category}</option> )}
                        </select>
                    </div>
                    <div className="form-input">
                        <label className="input-label">Title:</label>
                        <input type="number" value={title} onChange={(e) => setTitle(e.target.value)}></input>
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