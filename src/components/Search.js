import React, {useState} from 'react';
import '../styles/Search.css'

const Search = (props) => {

    const [searchText, setSearchText] = useState('');

    const handleInputChange = (e) => {
        setSearchText(e.target.value)
    };

    return (
        <fragment className="searchInput">
            <form>
            <span>Search for an image here:</span>
            <input type="text"
            onChange={handleInputChange}
            value={searchText}
            className="search" />
            <button type="submit"
            className="submit-button">
            Go!
            </button>
            </form>
        </fragment>
    )
}

export default Search;