import React from 'react';
import posts from'../data/posts.json';
import {Link} from "react-router-dom";

function Blog(props) {
    const postTitles = posts.map((post) => {
        return <Link key={post.id} to={`/blog/${post.id}`}><li>{post.title}</li></Link>;
    })
    return (
        <>
            <h1>Blog</h1>
            <em>Aantal posts: {posts.length}</em>
            <ul>{postTitles}</ul>
        </>
    );
}

export default Blog;