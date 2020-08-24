import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const DetailFlag = ({ match }) => {
    const [flagData, setFlagData] = useState({});
    const [currency, setCurrency] = useState('');
    const [languages, setLanguages] = useState([]);
    const [borderCountries, setBorderCountries] = useState([]);

    useEffect(() => {
        getOneFlag();
    }, []);

    const getOneFlag = async () => {
        try {
            const res = await fetch(`https://restcountries.eu/rest/v2/name/${match.params.nationFlag}`);
            const data = await res.json();
            setFlagData(data[0]);
            setCurrency(data[0].currencies[0].name);
            setLanguages(data[0].languages);
            if (data[0].borders.length > 0) getListFlags(data[0].borders);
        } catch (error) {
            console.error(error);
        }
    };

    const urlGenerator = (list) => {
        let url = 'https://restcountries.eu/rest/v2/alpha?codes=';
        for (let country of list) {
            url = url + `${country};`
        }
        return url;
    }

    const getListFlags = async (countries) => {
        const res = await fetch(urlGenerator(countries));
        const data = await res.json();
        setBorderCountries(data);
    };

    return (
        <div>
            <NavLink to='/'><button className='back-btn'><i className="fas fa-long-arrow-alt-left"></i>Back</button></NavLink>
            <div className="detail-flag">
                <img src={flagData.flag} alt={flagData.name + '\' flag'} />
                <div className="flag-attributes">
                    <h2 className='flag-name'>{flagData.name}</h2>
                    <div className="attributes">
                        <p className="attribute">Native Name: <span>{flagData.nativeName}</span></p>
                        <p className="attribute">Population: <span>{flagData.population}</span></p>
                        <p className="attribute">Region: <span>{flagData.region}</span></p>
                        <p className="attribute">Sub Region: <span>{flagData.subregion}</span></p>
                        <p className="attribute">Capital: <span>{flagData.capital}</span></p>
                        <p className="attribute">Top Level Domain: <span>{flagData.topLevelDomain}</span></p>
                        <p className="attribute">Currencies: <span>{currency}</span></p>
                        <p className="attribute">Languages: {languages.map(lang => (<span key={lang.name}>{lang.name}, </span>))}</p>
                    </div>
                    <p className="borders">Border Countries: {borderCountries.map(border => (
                        <a href={'/detail/' + border.name} key={border.name}>{border.name}</a>
                    ))}</p>
                </div>
            </div>
        </div>
    )
}

export default DetailFlag
