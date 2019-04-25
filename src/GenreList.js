import React from 'react';

function GenreList(props) {
    return (
        <ul>
            {/* Using the array index as the key for now, until we talk to a backend to get a real id */}
            {
                props.genres.map((genre, i) => {
                    // Using explicit return, so that
                    // we can have multiple statements
                    console.log(genre);
                    return (
                        <li key={i}>
                            <a 
                                href="#"
                                onClick={() => {
                                    console.log(genre);
                                }}
                            >{genre}</a>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default GenreList;