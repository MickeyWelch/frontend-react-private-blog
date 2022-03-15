import React from 'react';
import posts from '../data/posts.json';
import {useParams} from "react-router-dom";

function Post() {
    console.log(posts);
    const {blogId} = useParams();

    const getPost = posts.find((post) => {
        return post.id === blogId.id;
    })

    return (
        <>
            <h1>{posts.length}</h1>
            <p>dit is de id {blogId}</p>
            <p>{getPost}</p>
        </>
    );
}

export default Post;