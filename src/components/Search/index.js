import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Button } from '../../ui';

const Search = ({ onSubmitClick, clearResults }) => {
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
            <input
                className={styles.input}
                onChange={handleInputChange}
                type="text"
                name="search"
                placeholder="Enter a subject to search for images"
            />
            <Button
                onClick={handleSubmitClick}
                type="submit"
            >
                Search
            </Button>
        </form>
    )
}

export default Search

