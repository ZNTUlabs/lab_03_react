import React, { Component } from 'react';
import {LampsList} from "../lampsList";
import {SwitchAll} from "../switchAll";


export class Main extends Component {
	
	
	render = () => {
		
		return (
			<div className="container my-5">
				<div className="row">
					<LampsList />
				</div>
				<div className="row">
					{/*<SwitchAll />*/}
				</div>
			</div>
		);
	}
}