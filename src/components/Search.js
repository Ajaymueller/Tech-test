import React, {useState} from 'react';
import '../styles/Search.css'

const Search = (props) => {

    const [searchText, setSearchText] = useState('');

    return (
        <fragment>
            <span>Search for an image here:</span>
            <input type="text" 
            className="searchInput" />
            <button>Go!</button>
        </fragment>
    )
}

export default Search;