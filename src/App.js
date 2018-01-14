import React, { Component } from 'react';
import ProverbView from './ProverbView.js';
import ProverbProvider from './ProverbProvider.js';
import logo from './colberthead.png';
import easter_logo from './fallonhead.png';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			header_image: logo,
			header_text: "Live on tape from the Ed Sullivan Theater in New York City, it's Stephen Colbert !"
		};

		this.proverb_provider = new ProverbProvider();
	}

	/**
	 * Exécuté lorsqu'un nouveau proverbe est généré.
	 * Actuellement, 1 chance sur 10 que Stephen Colbert laisse la place à Jimmy Fallon, parce que.
	 */
	onNewProverb(e) {
		if (Math.random() < 0.9) {
			this.setState({
				header_image: logo,
				header_text: "Live on tape from the Ed Sullivan Theater in New York City, it's Stephen Colbert !"
			});
		} else {
			this.setState({
				header_image: easter_logo,
				header_text: "FROM STUDIO 6B IN ROCKEFELLER CENTER IN THE HEART OF NEW YORK CITY, IT'S THE TONIGHT SHOW STARRING JIMMY FALLON"
			});
		}
	}

	render() {
		// component ProverbView has to call my (App) method 'onNewProverb', and when it does, i want 'this' to be me (App)
		// So, I have to use .bind(this) on it.
		return (
			<div className="App">
				<header className="App-header">
					<img src={this.state.header_image} className="App-logo" alt="logo" title={this.state.header_text} />
					<h1 className="App-title">Alternative Proverb Generator</h1>
					<h2 className="App-desc">A GIF-intensive application made with love, greasy pizza and React</h2>
				</header>
				<ProverbView proverb_provider={this.proverb_provider} onNewProverb={this.onNewProverb.bind(this)} />
			</div>
		);
	}
}

export default App;
