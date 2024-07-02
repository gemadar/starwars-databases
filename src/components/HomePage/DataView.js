import React, { useState, useEffect } from 'react';
import SearchBar from '../Elements/SearchBar';
import Loading from '../Elements/Loading';
import './DataView.css';
import Popup from '../DetailsPage/Popup';

const DataView = () => {
  const [list, setList] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        let allCharacters = [];
        let nextPage = process.env.REACT_APP_API_SWAPI;

        // Get all data from next page
        while (nextPage) {
          const response = await fetch(nextPage);
          const data = await response.json();

          allCharacters = [...allCharacters, ...data.results];
          nextPage = data.next; 
        }

        setList(allCharacters);
        setFilteredCharacters(allCharacters);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  const handleSearch = (query) => {
    const filtered = list.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };

  const togglePopup = (item) => {
    setSelectedItem(item);
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="data-view-container">
        <h2 className='char-title'>THE CHARACTERS</h2>
        <div className="grid-container">
          {loading ? <Loading /> :
            filteredCharacters.map((item) => (
              <div className="grid-item" key={item.name}>
                <button onClick={() => togglePopup(item)}>{item.name}</button>
              </div>
            ))
          }
        </div>
      </div>
      {isPopupOpen && (
        <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} data={selectedItem} />
      )}
    </div>
  );
};

export default DataView;
