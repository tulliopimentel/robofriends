import React, { Component } from 'react';
import CardList from "./CardList";
import SearchBox from './SearchBox';
import './app.css';
import scroll from './scroll.js'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield:''
        }
    }

    componentDidMount() {
            fetch('http://jsonplaceholder.typicode.com/users')
            .then(response=> {
                return response.json();
    })
            .then(users=> {
                this.setState({ robots: users})
            })
    }

    onSearchChange = (event) => {
                this.setState({ searchfield: event.target.value})               
            }
            
        
    render() {
            const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            })
            if (this.state.robots.length === 0) {
                return <h1 className='tc '> loading </h1>
            } else {
                return (
                    <div className='tc'>
                    <h1 className='f2'> RoboFriends </h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <scroll>
                    <CardList robots={filteredRobots}/>
                    </scroll>
                </div>            
                    );
            }
            
        }
}

export default App;
