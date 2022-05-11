import React from "react"
import { useEffect, useState } from "react";
import { getAllTags } from "../modules/TagManager";
import { TagCard } from "./TagCard";
import { useHistory } from "react-router-dom";
import "./Tag.css"

export const TagList = () => {
    const [tags, setTags] = useState([]);
    const history = useHistory();

    useEffect (() => {
        getAllTags().then(tagsFromAPI => {
            setTags(tagsFromAPI)
        })
    }, []);

    return (
        <>
            <section className="tag-list">
                <h1>Tags</h1>
                <div style={{  }}>
                    <button style={{ display: "flex", margin: "auto" }} onClick={() => history.push("/tags/create")}>
                        Create a new tag
                    </button>
                    <div className="container-cards">
                        {tags.map(tag => <TagCard key={tag.id} tag={tag} />)}
                    </div>
                </div>
            </section>
        </>
    )
}