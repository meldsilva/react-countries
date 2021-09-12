import {  useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, ListGroup } from 'react-bootstrap'

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
        return <div class="container">
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" alt={data[0].name}
                          src={data[0].flag} />
                <Card.Body>
                    <Card.Title>Country: {data[0].name}</Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Code: {data[0].alpha2Code}</ListGroup.Item>
                        <ListGroup.Item>Capital: {data[0].capital}</ListGroup.Item>
                        <ListGroup.Item>Region: {data[0].region}</ListGroup.Item>
                        <ListGroup.Item>Subregion: {data[0].subregion}</ListGroup.Item>
                        <ListGroup.Item>Population: {data[0].population.toLocaleString()}</ListGroup.Item>
                        <ListGroup.Item>Phone Code: {data[0].callingCodes}</ListGroup.Item>
                        <ListGroup.Item>Currency Code: {data[0].currencies[0].code}</ListGroup.Item>
                        <ListGroup.Item>Currency: {data[0].currencies[0].name}</ListGroup.Item>
                        <ListGroup.Item>
                            <ul>
                                {data[0].borders.map(listitem => (
                                    <li key={listitem}>
                                        <a href={`https://restcountries.eu/rest/v2/alpha/${listitem}`}>
                                            {listitem}</a>
                                    </li>
                                ))}
                            </ul>
                        </ListGroup.Item>
                    </ListGroup>
                    {/*<Button variant="primary">Go somewhere</Button>*/}
                </Card.Body>
            </Card>

        </div>
    }
    return <div>No Country Found. Check Name and re-try.</div>
}

export default CountryData;
