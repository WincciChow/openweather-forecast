import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.searchWeather = this.searchWeather.bind(this);
    }
    searchWeather(e) {
        e.preventDefault();
        this.props.onSearch(this.state.searchTerm);
    }

    onInputChange(e) {
        this.setState({
            searchTerm: e.target.value
        });
    }

    render() {
        return (
            <form id="searchBar" onSubmit={this.searchWeather}>
                <input id="userInput" className="input" placeholder="Input City Name and Press Enter" onChange={this.onInputChange} />
            </form>
        );
    }
}

export default SearchBar;
