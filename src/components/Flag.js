import React from 'react';
import { NavLink } from 'react-router-dom';

const Flag = ({ name, flag, population, region, capital }) => {
    return (
        <NavLink to={'/detail/' + name} className="flag-card">
            <div className="flag-container">
                <img src={flag} alt={name + '\'s flag'} />
            </div>
            <div className="card-body">
                <h4>{name}</h4>
                <p className='title'>Population: <span>{population}</span></p>
                <p className='title'>Region: <span>{region}</span></p>
                <p className='title'>Capital: <span>{capital}</span></p>
            </div>
        </NavLink>
    )
}

export default Flag;
