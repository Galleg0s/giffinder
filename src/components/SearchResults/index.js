import React, {useState} from 'react';
import Modal from '../Modal';
import styles from './styles.module.scss';

class SearchResults extends React.Component {
    state = {
        isOpen: {}
    }

    openModal = (id) => {
        this.setState({
            isOpen: {
                [id]: true,
            }
        })
    };

    closeModal = (id) => {
        this.setState({
            isOpen: {
                [id]: false,
            }
        })
    };

    render () {
        return (
            <>
                {
                    this.props.results.map(item => {
                        return (
                            <div key={item.id}>
                                <div>
                                    <a href="#" onClick={this.openModal.bind(this, item.id)} className={styles.imageContainer}>
                                        <img 
                                            src={item.images.fixed_height.url} 
                                            alt={item.title}
                                            title={item.title}xxxx
                                            width={item.images.fixed_height.width}
                                            height={item.images.fixed_height.height}
                                        />
                                    </a>
                                </div>

                                {
                                    this.state.isOpen[item.id] && (
                                        <Modal closeModal={this.closeModal.bind(this, item.id)} isOpen={this.state.isOpen[item.id]}>
                                            <img 
                                                src={item.images.original.url} 
                                                alt={item.title}
                                                title={item.title}
                                                width={item.images.original.width}
                                                height={item.images.original.height}
                                            />
                                        </Modal>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </>
        )
    }
}

export default SearchResults;
