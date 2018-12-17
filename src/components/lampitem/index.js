import React, { Component } from 'react';

export class LampItem extends Component {
	constructor(props){
		super(props);
	}
	
	
	
	render = () => {
		
		const {lamp} = this.props;
		const lampStateClass = (lamp.status)?"fas fa-lightbulb":"far fa-lightbulb";
		return (
			<i className={lampStateClass}></i>
		);
	}
}