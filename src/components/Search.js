import React, {useState} from 'react';
import PropTypes from 'prop-types';
import '../styles/Search.css';
import getImages from '../requests/getImages';

const Search = ({ setSearchResults }) => {

    const [searchText, setSearchText] = useState('');

    const handleInputChange = (e) => {
        setSearchText(e.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSearchResults(await getImages(searchText));
    };

    return (
        <div className="searchForm">
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
        </div>
    )
}

Search.propTypes = {
    setSearchResults: PropTypes.func.isRequired,
  };

export default Search;