//Convert from class to function (doesn't use "this")

import React, { useState, useEffect } from "react";
import CardList from "../components/CardList.js";
import SearchBox from "../components/SearchBox.js";
import Scroll from "../components/Scroll.js";
import ErrorBoundary from "../components/ErrorBoundary.js";
import "./App.css";
import { CircularProgress } from "react-loading-indicators";

function App() {
  //Initializing Hooks needed
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  //Practice more with Hooks
  //Create count state to be used by
  //button and then console log the click count
  //   const [count, setCount] = useState(0);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  //This variable will tracks the searchField state and
  //filter the robots array based on the search entry.
  //This will also be passed to the robots prop instead.
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  // The '[]' is the shortcut for componentDidMount()
  // and also replicates the behavior of it
  useEffect(() => {
    fetch("https://api.npoint.io/fd83bca596cb1a59e38c")
      .then((res) => res.json())
      .then((users) => setRobots(users));

    //console logs the count number.
    //also, put the count in the dependency []
    //so React refreshes everytime there's an update
    //stricly related to count
    // console.log(count);
  });

  return !robots.length ? (
    <view
      style={{
        flex: 1,
        width: 100,
        height: 100,
      }}
    >
      <CircularProgress
        color="#0ccac4"
        size="large"
        text="Loading"
        textColor="white"
      />
    </view>
  ) : (
    <div className="tc">
      <h1 className="f-subheadline lh-solid">RoboFriends</h1>
      {/* <button onClick={()=>setCount(count+1)}>Click Me!</button> */}
      <SearchBox searchChange={onSearchChange} />

      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default App;
