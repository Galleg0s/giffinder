import React from 'react';
import styles from './styles.module.scss';

const SearchResults = ({ results, onItemClick }) => {
    const handleItemClick = (id) => {
        onItemClick(id);
    }

    return (
        <div className={styles.container}>
            {
                results.map(item => {
                    return (
                        <div key={item.id}>
                            <button
                                type="button"
                                onClick={() => handleItemClick(item.id)}
                                className={styles.imageContainer}
                            >
                                <img
                                    src={item.images.fixed_height.url}
                                    alt={item.title}
                                    title={item.title}
                                    width={item.images.fixed_height.width}
                                    height={item.images.fixed_height.height}
                                />
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SearchResults;
