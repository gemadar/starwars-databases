import React from 'react';
import './DataTable.css';

const DataTable = ({ data, dataArr }) => {
    return (
    <div className="data-table">
      <table>
        <tbody>
          {
            <React.Fragment>
              <tr>
                <td><strong className='strong'>Date of Birth</strong></td>
                <td>{data.birth_year ? data.birth_year : 'N/A'}</td>
              </tr>
              <tr>
                <td><strong className='strong'>Gender</strong></td>
                <td>{data.gender ? data.gender : 'N/A'}</td>
              </tr>
              <tr>
                <td><strong className='strong'>Home World</strong></td>
                <td>{dataArr.homeworld ? dataArr.homeworld : 'N/A'}</td>
              </tr>
              <tr>
                <td><strong className='strong'>Eye Color</strong></td>
                <td>{data.eye_color ? data.eye_color : 'N/A'}</td>
              </tr>
              <tr>
                <td><strong className='strong'>Mass</strong></td>
                <td>{data.mass} Kg</td>
              </tr>
              <tr>
                <td><strong className='strong'>Height</strong></td>
                <td>{data.height ? data.height : 'N/A'} CM</td>
              </tr>
              <tr>
                <td><strong className='strong'>Skin Color</strong></td>
                <td>{data.skin_color ? data.skin_color : 'N/A'}</td>
              </tr>
            </React.Fragment>
          }
        </tbody>
      </table>
      <table style={{marginTop: "10px"}}>
        <tbody>
          {
            <React.Fragment>
              <tr>
                <td><strong className='strong'>Films</strong></td>
                <td>{dataArr.films ? dataArr.films : 'N/A'}</td>
              </tr>
              <tr>
                <td><strong className='strong'>Species</strong></td>
                <td>{dataArr.species ? dataArr.species:'N/A'}</td>
              </tr>
              <tr>
                <td><strong className='strong'>Star Ships</strong></td>
                <td>{dataArr.starships ? dataArr.starships : 'N/A'}</td>
              </tr>
              <tr>
                <td><strong className='strong'>Vehicles</strong></td>
                <td>{dataArr.vehicles ? dataArr.vehicles : 'N/A'}</td>
              </tr>
            </React.Fragment>
          }
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;