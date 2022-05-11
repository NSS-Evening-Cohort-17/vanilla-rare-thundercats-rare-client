import React from "react"
import { useEffect, useState } from "react";
import { getAllTags } from "../modules/TagManager";
import { TagCard } from "./TagCard";


export const TagList = () => {
    const [tags, setTags] = useState([]);

    useEffect (() => {
        getAllTags().then(tagsFromAPI => {
            setTags(tagsFromAPI)
        })
    }, []);

    return (
        <>
            <section className="tag-list">
                <h1>Tags</h1>
                <div className="container-cards">
                    {tags.map(tag => <TagCard key={tag.id} tag={tag} />)}
                </div>
            </section>
        </>
    )
}