import React, {useState} from 'react';
import '../styles/Search.css';
import getImages from '../requests/getImages';

const Search = (props) => {

    const [searchText, setSearchText] = useState('');

    const handleInputChange = (e) => {
        setSearchText(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        getImages(searchText);
    };

    return (
        <fragment className="searchForm">
            <form onSubmit={handleSubmit}>
            <input type="text"
            onChange={handleInputChange}
            value={searchText}
            className="search-input" />
            <button type="submit"
            className="submit-button">
            Go!
            </button>
            </form>
        </fragment>
    )
}

export default Search;