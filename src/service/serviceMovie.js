import axios from "axios"


const url = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    headers: {
        Authorisation: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjZlODlmZDQ5NTRjMzIyNzBkZjNhZjdhMmRiOWUyYSIsInN1YiI6IjYxMmY1ZWY5MmNlZmMyMDAyYzEyOGVjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a4BEefO3f8OV6744igWKhxQsNZjW1C1IvxyzjDciJyw'
    }
})


const getMovie = async () => await url.get('/discover/movie')




export {getMovie}