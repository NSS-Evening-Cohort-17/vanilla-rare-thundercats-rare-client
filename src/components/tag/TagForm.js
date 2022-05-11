import React from "react"
import { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { addTag, updateTag, getTagById } from "../modules/TagManager"


export const TagForm = () => {
    const { tagId } = useParams()
    const [tag, setTag] = useState({})
    const history = useHistory()

    const editMode = tagId ? true : false

    const handleControlledInputChange = (event) => {
        const newTag = Object.assign({}, tag)
        newTag[event.target.name] = event.target.value
        setTag(newTag)
    }

    useEffect(() => {
        if (editMode) {
            getTagById(tagId).then((res) => {
                setTag(res)
            })
        }
    }, [])

    const constructNewTag = () => {
        if (editMode) {
            updateTag({
                id: tag.id,
                label: tag.label
            })
                .then(() => history.push("/tags"))
        } else {
            addTag({
                label: tag.label
            })
                .then(() => history.push("/tags"))
        }
    }


    return (
        <form className="tagForm">
            <h2 className="tagForm__title">{editMode ? "Edit Tag" : "Add Tag"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="label">Label</label>
                    <input type="text" name="label" required autofocus className="form-control"
                        placeholder="Tag Label"
                        defaultValue={tag.label}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewTag()
                }}
                className="btn btn-primary">
                {editMode ? "Update Tag" : "Add Tag"}
            </button>
        </form>
    )
}
