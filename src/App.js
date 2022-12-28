import React, { Component } from "react";
import CardList from './CardList.js'
import SearchBox from './SearchBox.js'
import {robots} from './robots';

class App extends Component {
    //Standard way of initializing STATE in React.
    //There must be a constructor function.
    //Inside that call the super() first always
    //Then set your state values.
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    //custom function
    //will be called everytime user inputs something in the search field.
    //Updates the searchField state based on the search box entries
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        //This variable will tracks the searchField state and
        //filter the robots array based on the search entry.
        //This will also be passed to the robots prop instead.
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
                <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;