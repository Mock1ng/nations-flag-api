import React, { useState, useContext } from 'react';
import { ResponseContext } from './context/ResponseContext';

const Form = () => {
    const { setFlagsData } = useContext(ResponseContext);
    const { setIsError } = useContext(ResponseContext);
    const { finishSearch, setFinishSearch } = useContext(ResponseContext);
    const { selectedOptions, setSelectedOptions } = useContext(ResponseContext);
    const [search, setSearch] = useState('');
    const [isDisplay, setIsDisplay] = useState(false);

    const searchHandler = e => setSearch(e.target.value);

    const getOneFlag = async () => {
        let url;
        if (search.length > 0) {
            url = fetch(`https://restcountries.eu/rest/v2/name/${search}`)
        } else {
            url = fetch('https://restcountries.eu/rest/v2/all');
        }

        try {
            const res = await url;
            const data = await res.json();
            setFlagsData(data)
        } catch (error) {
            setIsError(true);
        }
    }

    const getRegion = async (selected) => {
        let url;
        setSelectedOptions(selected);
        setFinishSearch('');

        if (selected === 'all') {
            url = fetch('https://restcountries.eu/rest/v2/all');
        } else {
            url = fetch(`https://restcountries.eu/rest/v2/region/${selected}`)
        }

        try {
            const res = await url
            const data = await res.json();
            setFlagsData(data);
        } catch (error) {
            console.error(error);
        }
    }

    const submit = e => {
        e.preventDefault();
        setFinishSearch(search);
        getOneFlag();
        setSearch('');
        setSelectedOptions('Filter by Region');
    }

    return (
        <div>
            <div className="search-bar-form">
                <form onSubmit={submit}>
                    <div className="search-container">
                        <i className="fas fa-search"></i>
                        <input type="text" name='search' className='search-bar' autoComplete='off' placeholder='Search for a country...' onChange={searchHandler} value={search} />
                    </div>
                </form>

                <div className="select-clone" onClick={() => setIsDisplay(!isDisplay)}>
                    <div className="option-bar">
                        {selectedOptions === 'Filter by Region' ? (<p className="selected">{selectedOptions}</p>) : (<p className="selected">Region: {selectedOptions}</p>)}
                        <i className="fas fa-angle-down"></i>
                    </div>
                    <div className="dropdown-options" style={isDisplay ? { display: 'block' } : { display: 'none' }}>
                        <div className="option" onClick={() => getRegion('all')}>All</div>
                        <div className="option" onClick={() => getRegion('africa')}>Africa</div>
                        <div className="option" onClick={() => getRegion('america')}>America</div>
                        <div className="option" onClick={() => getRegion('asia')}>Asia</div>
                        <div className="option" onClick={() => getRegion('europe')}>Europe</div>
                        <div className="option" onClick={() => getRegion('oceania')}>Oceania</div>
                    </div>
                </div>

                {finishSearch.length > 0 ? (<div className="search-keyword">You search for: <span>{finishSearch}</span></div>) : ''}
            </div>
        </div>
    )
}

export default Form
