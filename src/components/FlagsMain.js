import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Form from './Form';
import { ResponseContext } from './context/ResponseContext'

const FlagsMain = () => {
    const { flagsData } = useContext(ResponseContext);

    return (
        <>
            <Form />
            <div className="flag-wrapper">
                {flagsData.map(flag => (
                    <NavLink to={'/detail/' + flag.name} key={flag.name} className="flag-card">
                        <div className="flag-container">
                            <img src={flag.flag} alt={flag.name + '\'s flag'} />
                        </div>
                        <div className="card-body">
                            <h4>{flag.name}</h4>
                            <p className='title'>Population: <span>{flag.population}</span></p>
                            <p className='title'>Region: <span>{flag.region}</span></p>
                            <p className='title'>Capital: <span>{flag.capital}</span></p>
                        </div>
                    </NavLink>
                ))}
            </div>
        </>
    )
}

export default FlagsMain
