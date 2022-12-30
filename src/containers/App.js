//Convert from class to function

import React, { useState, useEffect } from "react";
import CardList from '../components/CardList.js'
import SearchBox from '../components/SearchBox.js'
import Scroll from "../components/Scroll.js";
import ErrorBoundary from "../components/ErrorBoundary.js";
import './App.css'

function App() {

    //Hooks
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

        //This variable will tracks the searchField state and
        //filter the robots array based on the search entry.
        //This will also be passed to the robots prop instead.
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        return !robots.length ?
            <h1>Loading</h1> :
        (
            <div className="tc">
            <h1 className="f1">RoboFriends</h1>
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