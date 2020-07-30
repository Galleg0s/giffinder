import React, {useState} from 'react'
import styles from './styles.module.scss'

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
        debugger;
        onSubmitClick(query);
    }

    return (
        <form className={styles.container}>
            <input 
                className={styles.input} 
                onChange={handleInputChange}
                type="text" 
                name="search" 
                placeholder="Enter a subject to search for images" 
            />
            <button 
                className={styles.button} 
                onClick={handleSubmitClick} 
                type="submit">
                Search
            </button>
        </form>
    )
}

export default Search

