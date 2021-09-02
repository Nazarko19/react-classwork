import axios from "axios"


const url = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjZlODlmZDQ5NTRjMzIyNzBkZjNhZjdhMmRiOWUyYSIsInN1YiI6IjYxMmY1ZWY5MmNlZmMyMDAyYzEyOGVjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a4BEefO3f8OV6744igWKhxQsNZjW1C1IvxyzjDciJyw'
    }
})


const getMovie = () => {
    return url.get('/discover/movie')
}




export {getMovie}