import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
//import { robots } from '../components/robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
//import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField, requestRobots } from '../actions';


const mapStateToProps = state => {
	return {
	searchField: state.searchRobots.searchField,
	robots: state.requestRobots.robots,
	isPending: state.requestRobots.isPending,
	error: state.requestRobots.error
	}
}

const mapDispacthToProps = (dispatch)=>{
	return{
		onSearchChange: (event)=> dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	} 
}

class App extends Component {
	/*constructor(){
		super()
		this.state = {
	     robots : []
	     
     }
	}*/
	componentDidMount() {
		/*console.log(this.props.store.getState())*/
		/*this.setState({robots: robots})*/
		/*fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => { this.setState({ robots: users })});*/
		this.props.onRequestRobots();
	}
	/*onSearchChange=(event)=>{
		this.setState({searchfield: event.target.value})
		const filteredRobots= this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		console.log(filteredRobots);
	}*/
	render(){
			/*const{robots}=this.state;*/
			const { searchField, onSearchChange, robots, isPending } = this.props;
			const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		/*return!robots.length?*/
		return isPending ?
			<h1>Loading</h1> :
		    (
				<div className='tc'>
					<h1 className='f1'> AmisRobo </h1>
					<SearchBox searchChange={onSearchChange}/>
					 {/*<CardList robots={this.state.robots} />*/}
					 <Scroll>
					      <CardList robots={filteredRobots} />
					 </Scroll>
				 </div>
		    );
	
	}	
}
export default connect(mapStateToProps,mapDispacthToProps)(App);