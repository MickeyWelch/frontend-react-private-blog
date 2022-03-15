import React from 'react';
import posts from '../data/posts.json';
import {useParams} from "react-router-dom";

function Post() {
    const {blogId} = useParams();

    const getPost = posts.find((post) => {
        return post.id === blogId;
    })

    return (
        <>
            <h1>{getPost.title}</h1>
            <em>{getPost.date}</em>
            <p>{getPost.content}</p>
        </>
    );
}

export default Post;