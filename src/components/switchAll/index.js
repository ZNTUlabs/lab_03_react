import React, { Component } from 'react';

export class SwitchAll extends Component {
	constructor(props){
		super(props);
		this.state = {
			switchAll: false
		}
	}
	
	
	
	render = () => {
		const {status} = this.state.switchAll;
		return (
			<div>
				{
					status ?
						<div>Off</div>
						:
						<div>On</div>
				}
			</div>
		);
	}
}