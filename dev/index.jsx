import React from "react";
import ReactDOM from "react-dom";
//import $ from "ajax";
import $ from "jquery";
import { Button, Table } from 'react-bootstrap';


// var Container = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <p>This is the container component</p>
//         <Party />
//       </div>
//     );
//   }
// });

export default class Container extends React.Component{

    constructor(){
        super();

        this.state = {
            countries: [],
            continentName: 'oceania'
        };

    }

    render() {
        const countries = this.state.countries;

        var rows = [];
        countries.forEach(function(country) {

            // Here's where the Country component gets invoked.
            rows.push(<Country
                name={country.name}
                capital={country.capital}
                population={country.population}
            />);
        });

        return (
            <div className="country-container">
                <CountryForm addComment={this._addComment.bind(this)} />
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Capital</th>
                        <th>Population</th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
            </div>
        );
    }

    _addComment(continentname) {
        this._fetchCountries(continentname);
    }

    _fetchCountries(continentName){
        let url = 'https://restcountries.eu/rest/v1/region/';
        url = url.concat(continentName);

        $.ajax({
            type: 'GET',
            url: url,
            success: (countries) => {
                this.setState({countries});
            }
        });
    }

    componentWillMount() {
        this._fetchCountries(this.state.continentName);
    }
    //
    // _getCountries() {
    //     return this.state.countries;
    //     return this.state.countries.map((country) => {
    //         return (<Country
    //             name={country.name}
    //             capital={country.capital}
    //             population={country.population}
    //         />);
    //     });
    // }
}

// Component - Country
class Country extends React.Component{

    render() {
        return(
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.capital}</td>
                <td>{this.props.population.toLocaleString()}</td>

            </tr>
        );
    }
}

// Component - CountryForm
class CountryForm extends React.Component{

    constructor() {
        super();
    }

    render(){
        return(
        <form className="country-form" onSubmit={this._handleSubmit.bind(this)}>
            {/*<h1>Countries of the World</h1>*/}
            <p></p>
            <div className="country-form-fields">
                <input placeholder="Enter Continent Name" ref={c => this._continent = c} />
                <Button bsStyle="info" bsSize="sm" type="submit">Submit</Button>
            </div>
            <p></p>
        </form>
        );
    }

    _handleSubmit(event){
        event.preventDefault();
        if (!this._continent.value ) {
            alert('Please enter your continent.');
            return;
        }
        this.props.addComment(this._continent.value);
        this._continent.value = '';
    }

}

//
// const tableInstance = (
//     <Table striped bordered condensed hover>
//         <thead>
//         <tr>
//             <th>#</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Username</th>
//         </tr>
//         </thead>
//         <tbody>
//         <tr>
//             <td>1</td>
//             <td>Mark</td>
//             <td>Otto</td>
//             <td>@mdo</td>
//         </tr>
//         <tr>
//             <td>2</td>
//             <td>Jacob</td>
//             <td>Thornton</td>
//             <td>@fat</td>
//         </tr>
//         <tr>
//             <td>3</td>
//             <td colSpan="2">Larry the Bird</td>
//             <td>@twitter</td>
//         </tr>
//         </tbody>
//     </Table>
// );
//
// ReactDOM.render(tableInstance,
//     document.querySelector("#tbl")
// );

ReactDOM.render(
    <Container />,
    document.querySelector("#container")
);

//
// Client ID
// 6508a88c05ae4180a6d08f80036e64f8
// Client Secret
// 9bb877f05ef541d3a18556ff227c22fe