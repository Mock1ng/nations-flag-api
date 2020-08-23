import React, { useState, useEffect, createContext } from 'react';

export const ResponseContext = createContext();

export const ResponseProvider = ({ children }) => {
    const [flagsData, setFlagsData] = useState([]);

    useEffect(() => {
        getApi()
    }, []);

    const getApi = async () => {
        const res = await fetch('https://restcountries.eu/rest/v2/all');
        const data = await res.json();
        setFlagsData(data);
    }

    return (
        <div>
            <ResponseContext.Provider value={{ flagsData, setFlagsData }}>
                {children}
            </ResponseContext.Provider>
        </div>
    )
}
