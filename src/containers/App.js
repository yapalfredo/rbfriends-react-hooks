//Convert from class to function (doesn't use "this")

import React, { useState, useEffect } from "react";
import CardList from '../components/CardList.js'
import SearchBox from '../components/SearchBox.js'
import Scroll from "../components/Scroll.js";
import ErrorBoundary from "../components/ErrorBoundary.js";
import './App.css'

function App() {

    //Initializing Hooks needed
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')


    //Practice more with Hooks
    //Create count state to be used by
    //button and then console log the click count
    const [count, setCount] =useState(0)

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    //This variable will tracks the searchField state and
    //filter the robots array based on the search entry.
    //This will also be passed to the robots prop instead.
    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    // The '[]' is the shortcut for componentDidMount()
    // and also replicates the behavior of it
    useEffect(()=>{
        fetch('https://jsonplaceholder.cypress.io/users')
        .then(res => res.json())
        .then(users => setRobots(users));

        //console logs the count number.
        //also, put the count in the dependency []
        //so React refreshes everytime there's an update
        //stricly related to count
        console.log(count)
    },[count])

    return !robots.length ?
        <h1>Loading</h1> :
    (
        <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <button onClick={()=>setCount(count+1)}>Click Me!</button>
        <SearchBox searchChange={onSearchChange}/>

        <Scroll>
            <ErrorBoundary>
                <CardList robots={filteredRobots}/>
            </ErrorBoundary>
        </Scroll>
    </div>
    )
}

export default App;