import React, { useState, useEffect, useContext } from 'react';
import { ResponseContext } from './context/ResponseContext';

const Form = () => {
    const { setFlagsData } = useContext(ResponseContext)
    const [search, setSearch] = useState('');
    const [selectedOptions, setSelectedOptions] = useState('Filter by Region');
    const [isDisplay, setIsDisplay] = useState(false);

    const searchHandler = e => setSearch(e.target.value);

    useEffect(() => {
        console.log(selectedOptions);
        getOneFlag();
    }, [selectedOptions])

    const getOneFlag = async () => {
        const res = await fetch(`https://restcountries.eu/rest/v2/name/${search}`);
        const data = await res.json();
        setFlagsData(data)
    }

    const submit = e => {
        e.preventDefault();

    }

    return (
        <div>
            <div className="search-bar-form">
                <form onSubmit={submit}>
                    <input type="text" name='search' className='search-bar' autoComplete='off' placeholder='Search for a country...' onChange={searchHandler} value={search} />
                </form>

                <div className="select-clone" onClick={() => setIsDisplay(!isDisplay)}>
                    <div className="option-bar">
                        <p className="selected">{selectedOptions}</p>
                    </div>
                    <div className="dropdown-options" style={isDisplay ? { display: 'block' } : { display: 'none' }}>
                        <div className="option" onClick={() => setSelectedOptions('africa')}>Africa</div>
                        <div className="option" onClick={() => setSelectedOptions('america')}>America</div>
                        <div className="option" onClick={() => setSelectedOptions('asia')}>Asia</div>
                        <div className="option" onClick={() => setSelectedOptions('europe')}>Europe</div>
                        <div className="option" onClick={() => setSelectedOptions('oceania')}>Oceania</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
