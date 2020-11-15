import React from "react";
import {
	BrowserRouter as Router, Route, Switch,
} from "react-router-dom";
import NewInitScript from "./NewInitScript";
import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<div className="App">
						<header className="App-header">
							<img src={logo} className="App-logo" alt="logo" />
							<p>
								<b>
                  Highly Scalable Developer Infra For Fast-Paced Teams
								</b>
							</p>
							<p>
								<a
									className="App-link"
									href="https://reactjs.org"
									target="_blank"
									rel="noopener noreferrer"
								>
                  Create a blueprint
								</a>
								{" "}
								{" "}
                to get dev-servers on-demand!
							</p>
						</header>
					</div>
				</Route>
				<Route exact path = "/init">
					<NewInitScript/>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
