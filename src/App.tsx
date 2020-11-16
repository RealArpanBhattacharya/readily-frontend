import React from "react";
import {
	BrowserRouter as Router, Route, Switch,
} from "react-router-dom";
import NewInitScript from "./NewInitScript";
import logo from "./logo.svg";
import "./App.css";
import {Auth0Provider, useAuth0} from "@auth0/auth0-react";
import LoginButton from "./LoginButton";

function App() {
	const {
		// Auth state:
		error,
		isAuthenticated,
		isLoading,
		user,
		// Auth methods:
		getAccessTokenSilently,
		getAccessTokenWithPopup,
		getIdTokenClaims,
		loginWithRedirect,
		loginWithPopup,
		logout,
	} = useAuth0();


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
                  Development Infrastructure As A Service
									</b>
								</p>
								<p>
									<a
										className="App-link"
										target="_blank"
										rel="noopener noreferrer"
									>
                  Create a blueprint
									</a>
									{" "}
									{" "}
									<b>once</b> to get <b>unlimited</b> dev-servers <i>on-demand</i>!
								</p> <p>
									<LoginButton/>{JSON.stringify(user?.name)}</p>
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
