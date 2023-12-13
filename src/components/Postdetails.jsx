import React, { useEffect, useState } from 'react'
import "../App.css"
import axios from 'axios'
import { useParams, Link } from 'react-router-dom';

function Postdetails() {
    const { objectID } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(
                    `https://hn.algolia.com/api/v1/items/${objectID}`
                );
                setPost(response.data);
            } catch (error) {
                console.error('Error fetching post details:', error);
            }
        };

        fetchPost();
    }, [objectID]);

    if (!post) {
        return (
            <>
                <div>
                    <div class="loading-container">
                        <div class="loading"></div>
                        <div id="loading-text">loading</div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div class="postcontainer">
                <div class="section">
                    <div class="col span_2_of_3">
                        <div class="blog-post">
                            <h1 class="blog-title">{post.title}</h1>
                            <h2 class="date">Points: {post.points}</h2>
                            <p class="blog-content">
                                {post.children.map((comment) => (
                                    <li key={comment.id}>{comment.text}</li>
                                ))}
                            </p>
                            <a>Thanks for Reading.</a>
                            <div>
                                <a href="/">
                                    <button type="button" class="Learnbtn1" >Back to Home</button>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Postdetails
