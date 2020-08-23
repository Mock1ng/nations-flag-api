import React, { useContext } from 'react';
import Form from './Form';
import Flag from './Flag';
import { ResponseContext } from './context/ResponseContext';

const FlagsMain = () => {
    const { flagsData } = useContext(ResponseContext);

    return (
        <>
            <Form />
            <div className="flag-wrapper">
                {!flagsData.status ? flagsData.map(flag => (<Flag key={flag.name} name={flag.name} flag={flag.flag} population={flag.population} region={flag.region} capital={flag.capital} />))
                    : <h1>Seems.. like.. something went wrong :(</h1>}
            </div>
        </>
    )
}

export default FlagsMain
