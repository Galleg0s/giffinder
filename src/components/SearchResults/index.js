import React, {useState} from 'react';
import Modal from '../Modal';

const SearchResults = ({data}) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const toggleModal = () => setModalOpen(!isModalOpen);

    return data.length > 0 && data.map(item => {
        return (
            <div key={item.id}>
                <a href="#" onClick={toggleModal}>
                    <img 
                        src={item.images.fixed_height.url} 
                        alt={item.title}
                        title={item.title}
                        width={item.images.fixed_height.width}
                        height={item.images.fixed_height.height}
                    />
                </a>
                
                <Modal toggleModal={toggleModal} isOpen={isModalOpen} />
            </div>
        )
    })
}

export default SearchResults;
