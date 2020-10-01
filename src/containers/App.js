import React from 'react';
import CardList from '../components/CardList';
//import { robots } from '../components/robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll'
import ErrorBoundry from'../components/ErrorBoundry';


class App extends React.Component {
	constructor(){
		super()
		this.state = {
	     /*robots : robots,*/
	     robots : [],
	     searchfield : ''
     }
	}
	componentDidMount() {
		/*this.setState({robots: robots})*/
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>this.setState({robots: users}));
	}
	onSearchChange=(event)=>{
		this.setState({searchfield: event.target.value})
		/*const filteredRobots= this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		console.log(filteredRobots);*/
	}
	render(){
			const{robots,searchfield}=this.state;
			const filteredRobots= robots.filter(robots =>{
			return robots.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		return!robots.length?
			<h1>Loading</h1>:
		    (
				<div className='tc'>
					<h1 className='f1'> AmisRobo </h1>
					<SearchBox searchChange={this.onSearchChange}/>
					 {/*<CardList robots={this.state.robots} />*/}
					 <Scroll>
					    <ErrorBoundry>
					      <CardList robots={filteredRobots} />
					    </ErrorBoundry>
					 </Scroll>
				 </div>
		    );
	
	}	
}
export default App;