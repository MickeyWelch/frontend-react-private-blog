import React from 'react';
import posts from'../data/posts.json';
import {Link} from "react-router-dom";

function Blog() {
    const postTitles = posts.map((post) => {
        return <Link key={post.id} to={`/blog/${post.id}`}><li>{post.title}</li></Link>;
    })
    return (
        <div className="content">
            <h1>Blog</h1>
            <em>Aantal posts: {posts.length}</em>
            <ul>{postTitles}</ul>
        </div>
    );
}

export default Blog;