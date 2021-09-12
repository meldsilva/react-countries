import {  useState, useEffect} from 'react';
// import ReactDOM from 'react-dom';

function CountryData({name}) {
    const [data, setData] = useState(null);
    console.log(`CountryData value=${name}`);

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
            .then(response => response.json())
            .then(setData)
            .catch(console.error.error);
    },[name]);

    // const numbers = [1,2,3,4,5];
    // const d = numbers.map((number)=>{
    //     number+1
    // };

   if(data) {
        return <div>
            <br/>
            <img
                alt={data[0].name}
                src={data[0].flag}
                height="40"/>
            <p>Code: {data[0].alpha2Code}</p>
            <p>Capital: {data[0].capital}</p>
            <p>Region: {data[0].region}</p>
            <p>Subregion: {data[0].subregion}</p>
            <p>Population: {data[0].population.toLocaleString()}</p>
            <p>Phone Code: {data[0].callingCodes}</p>
            <p>Currency: {data[0].currencies[0].name
            + " ["+ data[0].currencies[0].code}]</p>

            <p>Neighbors:</p>
            <ul>
                {data[0].borders.map(listitem => (
                    <li key={listitem}>
                        {listitem}
                    </li>
                ))}
            </ul>
        </div>
    }
    return <div>No Country Found. Check Name and re-try.</div>
}

export default CountryData;
