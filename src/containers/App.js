import React, { Component } from "react";
import CardList from '../components/CardList.js'
import SearchBox from '../components/SearchBox.js'
import Scroll from "../components/Scroll.js";
import './App.css'

class App extends Component {
    //Standard way of initializing STATE in React.
    //There must be a constructor function.
    //Inside that call the super() first always
    //Then set your state values.
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    //This gets run be React automatically when a component is loaded
    //successfully
    componentDidMount(){
        //Fetches data from a url
        //converts it to json
        //then assigns it to the robots state
        fetch('https://jsonplaceholder.cypress.io/users')
        .then(res => res.json())
        .then(users => this.setState({robots: users}));
    }

    //custom function
    //will be called everytime user inputs something in the search field.
    //Updates the searchField state based on the search box entries
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const {robots, searchfield} = this.state;
        //This variable will tracks the searchField state and
        //filter the robots array based on the search entry.
        //This will also be passed to the robots prop instead.
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        //This checks if the robots state is empty
        //if it is, shows loading
        //else pass the robots data from the web to the cardlist
       
        //Ternary
        return !robots.length ?
            <h1>Loading</h1> :
        (
            <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>

            {/* Wraps the CardList component with Scroll.
                What happens automatically, React creates a props
                for Scroll to access its children
            */}
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>
        </div>
        )

    }
}

export default App;