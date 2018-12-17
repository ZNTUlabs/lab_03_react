import React, { Component } from 'react';
import {LampItem} from "../lampitem";
import './style.css';

//[7,8,18,16,15,13,12,11]

export class LampsList extends Component {
	constructor(props){
		super(props);
		this.state = {
			lampsState: [
				{status: false, pin_id: 7},
				{status: false, pin_id: 8},
				{status: false, pin_id: 18},
				{status: false, pin_id: 16},
				{status: false, pin_id: 15},
				{status: false, pin_id: 13},
				{status: false, pin_id: 12},
				{status: false, pin_id: 11},
			]
		};
		
		this.server_url = "http://192.168.43.159";
	}
	
	componentDidMount() {
		
		fetch(`${this.server_url}/api/pin/off/all`)
			.then(res => res.json())
			.then(res => {
				console.log(res);
			})
	
	}
	
	clickHandler = (lamp,key) => {
		console.log(lamp);
		
		const switchStatus = (lamp.status)?"off":"on";
		
		fetch(`${this.server_url}/api/pin/${switchStatus}/${lamp.pin_id}`)
			.then(res => res.json())
			.then(res => {
				console.log(res);
				
				this.setState(function(state, props) {
					
					state.lampsState[key].status = !state.lampsState[key].status;
					console.log(state);
					return {...{lampsState: state.lampsState}}
				});
			})
	};
	
	createLampHtml = (lamp,key) => {
		return (
			<div className="col d-flex justify-content-center py-5 Lamp__Item" key={key} onClick={() => this.clickHandler(lamp,key)}>
				<LampItem key={key} lamp={lamp} />
			</div>
		);
	};
	
	render = () => {
		const {lampsState} = this.state;
		return lampsState.map((el,i) => this.createLampHtml(el, i));
	}
}