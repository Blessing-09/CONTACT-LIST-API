import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<button className="navbar-brand mb-0 h1 btn btn-success border-0">Contact List</button>
				</Link>
				<div className="ml-auto">
					<Link to="/AddContact">
						<button className="btn btn-secondary">Add contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};