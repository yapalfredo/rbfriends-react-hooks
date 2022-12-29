import React, {Component} from 'react'

class ErrorBoundary extends Component {
    //This boundary component is good because it controls
    //how your web app behaves when there's an error in the
    //component that's containing.
    //In this case it's CardList.js
    constructor(props) {
      super(props);
      this.state = {
        hasError: false
      };
    }
  
    //This life cycle runs when an error is caught
    //It sets the hasError value to true
    componentDidCatch(error, info) {
      this.setState({ hasError: true });
    }
  
    render() {
      //checks for hasError
      //Displays a custom h1 message
      if (this.state.hasError) {
        return <h1> Oh noooooo! Something Wrong Happened.. </h1>;
      }
  
      //returns CardList children
      //if no error found
      return this.props.children;
    }
  }

export default ErrorBoundary;