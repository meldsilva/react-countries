// import './App.css';
import {Component} from 'react';
import CountryData from './CountryData';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Suriname'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        console.log("App value="+ this.state.value);
        // this.props.countryname(this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div>
                <CountryData countryname={this.state.value}/>
            </div>
            </>
        );
    }
}

// function App() {
//
//     var input_country = 'Nepal';
//     function countryname(incoming) {
//         input_country = incoming;
//     }
//
//   return (
//     <div className="App">
//         <CountryForm countryname={countryname} />
//         {/*<CountryData countryname={countryname} />*/}
//     </div>
//   );
// }

export default App;