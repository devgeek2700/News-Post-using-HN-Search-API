import React, { useEffect, useState } from 'react'
import axios from "axios";
import "../App.css"

function Searchbar() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://hn.algolia.com/api/v1/search?query=${query}`
                );
                setResults(response.data.hits);

            } catch (error) {
                console.log(error);
            }
        }

        if (query !== '') {
            fetchData();
        } else {
            setResults([]);
        }
    }, [query]);


    const removePost = (objectIDToRemove) => {
        const updatedResults = results.filter(
            (result) => result.objectID !== objectIDToRemove
        );
        setResults(updatedResults);
    };

    return (
        <div>
            <div className='searchBar'>
                <div class="input-box">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input
                        type="text"
                        placeholder="Search News..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Search Results */}

            <div class="rescontainer">

                {
                    results.map((result) => {
                        return (
                            <>
                                <div class="cards" key={result.objectID}>
                                    <div class="card-item">
                                        <div class="card-info">
                                            <h2 class="card-title">{result.title}</h2>
                                            <p class="card-intro">Author: <span id='spanauthor'>{result.author}</span> </p>
                                        </div>
                                        <div className='btndiv'>
                                            <a href={`/post/${result.objectID}`} target='blank'>
                                                <button type="button" class="Learnbtn" >Learn More</button>
                                            </a>
                                            <a href="#" className='remntn' onClick={() => removePost(result.objectID)}>Remove</a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Searchbar
