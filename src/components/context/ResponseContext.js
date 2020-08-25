import React, { useState, useEffect, createContext } from 'react';

export const ResponseContext = createContext();

export const ResponseProvider = ({ children }) => {
    const [flagsData, setFlagsData] = useState([]);


    const getApi = async () => {
        const res = await fetch('https://restcountries.eu/rest/v2/all');
        const data = await res.json();
        setFlagsData(data);
    }

    useEffect(() => {
        getApi()
    }, []);

    const [finishSearch, setFinishSearch] = useState('');

    const [selectedOptions, setSelectedOptions] = useState('Filter by Region');

    return (
        <div>
            <ResponseContext.Provider value={{ flagsData, setFlagsData, finishSearch, setFinishSearch, selectedOptions, setSelectedOptions }}>
                {children}
            </ResponseContext.Provider>
        </div>
    )
}
