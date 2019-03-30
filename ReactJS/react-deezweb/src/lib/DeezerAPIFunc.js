import fetchJSONP from "fetch-jsonp";

export default {
    DoWithDataFromAPI(url, callback) {
        fetchJSONP(url)
            .then(res => res.json())
            .catch(err => console.error(err))
            .then(({data, error}) => {
                if(data)
                    return callback(data)
                else 
                    console.error(error.message)
                    return error
            })
    }
}