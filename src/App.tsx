import React from "react";
import {
	BrowserRouter as Router, Route, Switch,
} from "react-router-dom";
import NewInitScript from "./NewInitScript";
import logo from "./logo.svg";
import "./App.css";
import {Auth0Provider} from "@auth0/auth0-react";
import LoginButton from "./LoginButton";

function App() {
	return (
		<Auth0Provider domain = "auth.readily.dev" clientId="zqagGnqCXg8ywh7x4OCRDPxLd9KfYL51" redirectUri={window.location.origin}>
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
								<LoginButton/>
							</header>

						</div>
					</Route>
					<Route exact path = "/init">
						<NewInitScript/>
					</Route>
				</Switch>
			</Router>
		</Auth0Provider>
	);
}

export default App;
