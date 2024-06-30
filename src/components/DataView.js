import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import './DataView.css';
import Popup from './Popup';

const DataView = () => {
  const [list, setList] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        let allCharacters = [];
        let nextPage = process.env.REACT_APP_API_SWAPI;

        // Loop through all pages until nextPage is null (no more pages)
        while (nextPage) {
          const response = await fetch(nextPage);
          const data = await response.json();

          allCharacters = [...allCharacters, ...data.results];
          nextPage = data.next; // Update nextPage with the URL of the next page
        }

        setList(allCharacters);
        setFilteredCharacters(allCharacters);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  const handleSearch = (query) => {
    const filtered = list.filter((list) =>
      list.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };

  return (
    <div>
    <SearchBar onSearch={handleSearch} />
    <div className="data-view-container">
      <h2 style={{color:"white"}}>Data View</h2>
      <div className="grid-container">
        {filteredCharacters.map((item) => (
          <div className="grid-item">
            <button onClick={togglePopup}>{item.name}</button>
            <Popup isOpen={isPopupOpen} onClose={togglePopup}>
              <h2>Popup Content</h2>
              <p>This is the content of the popup.</p>
              <p>You can add any custom content here.</p>
            </Popup>
          </div>
        ))} 
      </div>
    </div>
    </div>
  );
}

export default DataView;
