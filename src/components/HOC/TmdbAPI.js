import axios from "axios";
export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Accept:'application/json'
    },
    params: {
        api_key : "d266ddfd5671ae6c7ffd466d6764cec1",
        include_adult : false,
        include_video : false,
        language : "en-US",
        sort_by: "popularity.desc"
    }
})