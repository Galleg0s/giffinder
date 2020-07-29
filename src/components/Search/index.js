import React, {useState}from 'react'
import styles from './styles.scss'

const Search = ({onSubmitClick, clearResults}) => {
    const [query, setQuery] = useState('');

    const handleInputChange = e => {
        if (e.target.value === '') {
            clearResults();
        }

        setQuery(e.target.value.trim())
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();

        if (query === '') {
            return;
        }

        onSubmitClick(query);
    }

    return (
        <form className={styles.container}>
            <input onChange={handleInputChange} className={styles.input} type="text" name="search" placeholder="Enter a subject to search for images" />
            <button onClick={handleSubmitClick} className={styles.button} type="submit">Search</button>
        </form>
    )
}

Search.propTypes = {

}

export default Search

