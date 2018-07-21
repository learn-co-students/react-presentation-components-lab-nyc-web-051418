// Code SimpleComponentHere Here
import React, { Component } from 'react';

class SimpleComponent extends Component {

    state = {
        mood: "happy"
    }

    handleClick = () => {
        let newMood = this.state.mood === "happy" ? "sad" : "happy"
        return this.setState({
            mood: newMood
        })
    }

    render() {
        return (
            <div>
            <button 
                value={this.state.mood}
                onClick={this.handleClick}
            >Change mood</button>
            <br></br>
                {this.state.mood}
            </div>
        );
    }
}

export default SimpleComponent;