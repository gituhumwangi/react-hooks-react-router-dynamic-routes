import React from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"

function MovieShow ({movies}) {
    const params = useParams()
    console.log(params)

    const movie = movies.find(movie => movie.id===parseInt(params.movieId)) 

    return  (
    <div>
        <h3>{movie.id}</h3>
        </div>
    )
}

export default MovieShow