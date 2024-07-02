import React, {useState, useEffect} from 'react';
import './ProfilePage.css'; 
import DataTable from './DataTable';
import Loading from '../Elements/Loading';

const ProfilePage = ({data}) => {
  const [characterInfo, setCharacterInfo] = useState({
    homeworld: '',
    vehicles: '',
    starships: '',
    films: '',
    species: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchCharacters = async () => {
        try {

          // Get vehicle, starship, and films of the character
          const vehiclesPromises = data.vehicles.map(async url =>
            await fetch(url).then(res => res.json())
          );
          const starshipsPromises = data.starships.map(async url =>
            await fetch(url).then(res => res.json())
          );
          const filmsPromises = data.films.map(async url =>
            await fetch(url).then(res => res.json())
          );
          const speciesPromises = data.species.map(async url =>
            await fetch(url).then(res => res.json())
          );

          const [vehicles, starships, films, homeworld, species] = await Promise.all([
            Promise.all(vehiclesPromises),
            Promise.all(starshipsPromises),
            Promise.all(filmsPromises),
            fetch(data.homeworld).then(res => res.json()),
            Promise.all(speciesPromises)

          ]);
  
          setCharacterInfo({
            homeworld: homeworld.name,
            vehicles: vehicles.map(vehicle => vehicle.name).join(' • '),
            starships: starships.map(starship => starship.name).join(' • '),
            films: films.map(film => film.title).join(' • '),
            species: species.map(specie => specie.name).join(' • ')
          });
  
          setLoading(false); 
        } catch (error) {
          console.error('Error fetching characters:', error);
        }
      };
      
      fetchCharacters();
    }, [data]);

  return (
    <div className="profile-container">
      <div className="profile-info">
        <h1 style={{marginBottom: "30px"}}>{data.name}</h1>
        {loading ? <Loading /> :
        <DataTable data={data} dataArr={characterInfo}/>
        }
      </div>
    </div>
  );
};

export default ProfilePage;
