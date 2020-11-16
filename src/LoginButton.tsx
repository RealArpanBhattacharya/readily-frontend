import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Button, Fab} from "@material-ui/core";

function LoginButton() {
	const {
		isAuthenticated,
		loginWithRedirect,
	} = useAuth0();



	return !isAuthenticated?

		<Fab onClick = {loginWithRedirect} color = "secondary" variant="extended"  aria-label="add">
			<b> {"Join The Waitlist"} </b>
		</Fab>:<> </>;
}

export default LoginButton;
