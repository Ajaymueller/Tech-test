import axios from 'axios';

const getImages = (query) => {
    if (!query) {
        return Promise.resolve([]);
    } else {
        axios
        .get(`https://images-api.nasa.gov/search?q=${query}`)
        .then((response) => {
            const imageResults = response.data.collection.items
            console.log(imageResults)
            .catch((error) => {
                console.log(error)
            })
    
        })
    }
}

export default getImages