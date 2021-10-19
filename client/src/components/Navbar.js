import React from "react";
import { Link } from "react-router-dom";
// import Signup from './Signup';
// import Login from './Login';
import { logout } from "../services/auth";
import "../App.css";

export default function navbar(props) {
	const handleLogout = () => {
		// this logs the user out on the server
		logout().then(() => {
			// we need to also remove the user from the state in App.js
			props.setUser(null);
		});
	};

	return (
		<nav className={"container"}>
			<div>
				<ul>
					<div>
						<li>
							<Link to="/">Home</Link>
						</li>
					</div>
					<div className={"links"}>
						{props.user ? (
							<>
								<li>
									<Link to="/projects">Projects</Link>
								</li>
								<li>
									<Link to="/" onClick={() => handleLogout()}>
										Logout
									</Link>
								</li>
							</>
						) : (
							<>
								<li>
									<Link to="/signup">Sign up</Link>
								</li>
								<li>
									<Link to="/login">Login</Link>
								</li>
							</>
						)}
					</div>
				</ul>
			</div>
		</nav>
	);
}
