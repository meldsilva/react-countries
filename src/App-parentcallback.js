// import './App.css';
import {useState, useEffect, Component} from 'react';

function CountryData({countryname}) {
    const [data, setData] = useState(null);

    console.log("Country value received is "+ {countryname});

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryname}`)
            .then(response => response.json())
            .then(setData);
    },[]);

    if(data) {
        return <div>
            <h3>{data[0].name}</h3>
            <img
                alt={data[0].name}
                src={data[0].flag}
                height="50"/>
            <p>Code: {data[0].alpha2Code}</p>
            <p>Capital: {data[0].capital}</p>
            <p>Region: {data[0].region}</p>
            <p>Subregion: {data[0].subregion}</p>
        </div>
    }
    return <div>No Country Found. Check Name and re-try.</div>
}

class CountryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        this.props.countryname(this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    {/*<input type="text" value={this.state.value} onChange={this.handleChange} />*/}
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </>
        );
    }
}

function App() {

    var input_country = 'Nepal';
    function countryname(incoming) {
        input_country = incoming;
    }

  return (
    <div className="App">
        <CountryForm countryname={countryname} />
        {/*<CountryData countryname={countryname} />*/}
    </div>
  );
}

export default App;
// export default CountryInput;
