import './App.css';
import {Component} from 'react';
import CountryData from './CountryData';
import InputForm from "./InputForm";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Afghanistan'
        };
        //
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.receiveCountryName = this.receiveCountryName.bind(this);
    }

    receiveCountryName(name) {
        this.setState({value: name});
    }
    // handleChange(event) {
    //     this.setState({value: event.target.value});
    // }
    //
    // handleSubmit(event) {
    //     // alert('A name was submitted: ' + this.state.value);
    //     console.log("App value="+ this.state.value);
    //     // this.props.countryname(this.state.value);
    //     event.preventDefault();
    // }

    render() {
        return (
            <>
                <InputForm sendname={this.receiveCountryName}/>
                <CountryData name={this.state.value}/>
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