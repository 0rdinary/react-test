import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SideBar from './sidebar/SideBar';
import Content from './content/Content';
import ClosetSetting from './content/closet/ClosetSetting'

import './App.css';

function App() {
	const [closets, setClosets] = useState(null);

	// useEffect(() => {
	// 	console.log('effect!')

	// 	let request = webOS.service.request("luna://com.webos.service.db/", {
	// 		method:"find",
	// 		parameters: {
	// 			query: {
	// 				"from": "com.petshion.closet:1"
	// 			}
	// 		},
	// 		onSuccess: function(inResponse) {
	// 			console.log('success');
	// 			console.log(inResponse);
	// 		},
	// 		onFailure: function(inError) {
	// 			console.log('Error');
	// 			console.log(inError);
	// 		}
	// 	});
	// }, [])

	return (
		<>
			<style global='true' jsx='true'>{`
			body {
				display: inline-block;
				margin: 0px;
				padding: 0px;
				background-color: rgb(221, 221, 221);
			}
			`}</style>
			<div className='app-wrapper'>
				<BrowserRouter>
					<SideBar />
					<Switch>
						<Route path='/' exact component={Content} />
						<Route path='/content/:title' component={Content} />
						<Route path='/closet/setting' component={ClosetSetting} />
					</Switch>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
